'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize, Settings, Download, ChevronDown } from 'lucide-react'
import './VideoPlayer.css'

interface VideoPlayerProps {
  src: string
  title: string
  duration: string
  onProgressChange?: (progress: number) => void
}

const VideoPlayer = ({ src, title, duration, onProgressChange }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [durationTime, setDurationTime] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [playbackRate, setPlaybackRate] = useState(1)
  const [quality, setQuality] = useState('1080p')
  const [showSettings, setShowSettings] = useState(false)
  const [showQualityMenu, setShowQualityMenu] = useState(false)

  const qualityOptions = [
    { label: 'Auto', value: 'auto' },
    { label: '1080p', value: '1080p' },
    { label: '720p', value: '720p' },
    { label: '480p', value: '480p' },
    { label: '360p', value: '360p' },
  ]

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedMetadata = () => {
      setDurationTime(video.duration)
    }

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime)
      if (onProgressChange) {
        onProgressChange((video.currentTime / video.duration) * 100)
      }
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [onProgressChange])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current
    if (!video) return

    const time = parseFloat(e.target.value)
    video.currentTime = time
    setCurrentTime(time)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current
    if (!video) return

    const vol = parseFloat(e.target.value)
    video.volume = vol
    setVolume(vol)
    setIsMuted(vol === 0)
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    if (isMuted) {
      video.volume = volume || 1
      setIsMuted(false)
    } else {
      video.volume = 0
      setIsMuted(true)
    }
  }

  const changePlaybackRate = (rate: number) => {
    const video = videoRef.current
    if (!video) return

    video.playbackRate = rate
    setPlaybackRate(rate)
    setShowSettings(false)
  }

  const changeQuality = (qual: string) => {
    setQuality(qual)
    setShowQualityMenu(false)
    // In a real app, you would switch the video source here
  }

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = Math.floor(seconds % 60)

    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleFullscreen = () => {
    const video = videoRef.current
    if (!video) return

    if (video.requestFullscreen) {
      video.requestFullscreen()
    }
  }

  return (
    <div className="video-player-container rounded-2xl overflow-hidden border border-[#597592]/20 bg-[#020408]">
      {/* Video Element */}
      <div className="relative aspect-video bg-gradient-to-br from-[#020408] via-[#0a1420] to-[#597592]/10">
        <video
          ref={videoRef}
          className="w-full h-full"
          src={src}
          poster="/images/video-poster.jpg"
        />
        
        {/* Video Overlay Controls */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-[#020408] to-transparent">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowQualityMenu(!showQualityMenu)}
                  className="px-3 py-1 rounded-lg bg-[#020408]/80 backdrop-blur-sm text-sm text-[#b2c1d3] border border-[#597592]/20 hover:border-[#597592]/40 transition-colors duration-200 flex items-center space-x-1"
                >
                  <span>{quality}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {showQualityMenu && (
                  <div className="absolute top-12 right-0 bg-[#020408] border border-[#597592]/20 rounded-lg shadow-xl z-50 min-w-[120px]">
                    {qualityOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => changeQuality(option.value)}
                        className={`w-full px-4 py-2 text-left text-sm hover:bg-[#597592]/10 transition-colors duration-200 ${
                          quality === option.value ? 'text-white bg-[#597592]/20' : 'text-[#b2c1d3]'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Center Play Button */}
          <button
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-[#597592] to-[#597592]/80 hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 flex items-center justify-center group"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white" />
            ) : (
              <Play className="w-8 h-8 text-white ml-1" />
            )}
          </button>

          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#020408] to-transparent">
            {/* Progress Bar */}
            <div className="mb-4">
              <input
                type="range"
                min="0"
                max={durationTime}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1.5 bg-[#597592]/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#b2c1d3] [&::-webkit-slider-thumb]:cursor-pointer"
              />
              <div className="flex justify-between text-xs text-[#597592] mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(durationTime)}</span>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-full bg-[#020408]/50 border border-[#597592]/20 hover:border-[#597592]/40 flex items-center justify-center transition-colors duration-200"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-[#b2c1d3]" />
                  ) : (
                    <Play className="w-5 h-5 text-[#b2c1d3] ml-0.5" />
                  )}
                </button>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 rounded-full bg-[#020408]/50 border border-[#597592]/20 hover:border-[#597592]/40 flex items-center justify-center transition-colors duration-200"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 text-[#b2c1d3]" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-[#b2c1d3]" />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-24 h-1.5 bg-[#597592]/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#b2c1d3] [&::-webkit-slider-thumb]:cursor-pointer"
                  />
                </div>

                <div className="text-sm text-[#b2c1d3]">
                  {playbackRate}x
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="relative">
                  <button
                    onClick={() => setShowSettings(!showSettings)}
                    className="w-10 h-10 rounded-full bg-[#020408]/50 border border-[#597592]/20 hover:border-[#597592]/40 flex items-center justify-center transition-colors duration-200"
                  >
                    <Settings className="w-5 h-5 text-[#b2c1d3]" />
                  </button>
                  {showSettings && (
                    <div className="absolute bottom-12 right-0 bg-[#020408] border border-[#597592]/20 rounded-lg shadow-xl z-50 min-w-[120px]">
                      {[0.5, 0.75, 1, 1.25, 1.5, 2].map((rate) => (
                        <button
                          key={rate}
                          onClick={() => changePlaybackRate(rate)}
                          className={`w-full px-4 py-2 text-left text-sm hover:bg-[#597592]/10 transition-colors duration-200 ${
                            playbackRate === rate ? 'text-white bg-[#597592]/20' : 'text-[#b2c1d3]'
                          }`}
                        >
                          {rate}x Speed
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button className="w-10 h-10 rounded-full bg-[#020408]/50 border border-[#597592]/20 hover:border-[#597592]/40 flex items-center justify-center transition-colors duration-200">
                  <Download className="w-5 h-5 text-[#b2c1d3]" />
                </button>

                <button
                  onClick={handleFullscreen}
                  className="w-10 h-10 rounded-full bg-[#020408]/50 border border-[#597592]/20 hover:border-[#597592]/40 flex items-center justify-center transition-colors duration-200"
                >
                  <Maximize className="w-5 h-5 text-[#b2c1d3]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <div className="flex items-center space-x-4 text-sm text-[#597592]">
              <span>Duration: {duration}</span>
              <span>•</span>
              <span>Quality: {quality}</span>
              <span>•</span>
              <span>Speed: {playbackRate}x</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-[#597592] mb-1">Auto-save enabled</div>
            <div className="text-xs text-[#597592]">Progress: {((currentTime / durationTime) * 100).toFixed(1)}%</div>
          </div>
        </div>

        {/* Additional Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-[#597592]/20">
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 rounded-lg bg-[#020408] border border-[#597592]/20 hover:border-[#597592]/40 text-[#b2c1d3] text-sm transition-colors duration-200">
              Previous Lesson
            </button>
            <button className="px-4 py-2 rounded-lg bg-[#020408] border border-[#597592]/20 hover:border-[#597592]/40 text-[#b2c1d3] text-sm transition-colors duration-200">
              Next Lesson
            </button>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-[#597592] to-[#597592]/80 rounded-lg hover:from-[#597592]/90 hover:to-[#597592]/70 transition-all duration-200 text-white text-sm font-medium">
            Mark Complete
          </button>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
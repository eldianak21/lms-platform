import React from 'react'
import './Table.css'

interface Column {
  key: string
  title: string
  width?: string
  align?: 'left' | 'center' | 'right'
  render?: (value: any, row: any) => React.ReactNode
}

interface TableProps {
  columns: Column[]
  data: any[]
  onRowClick?: (row: any) => void
  className?: string
  striped?: boolean
  hoverable?: boolean
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  onRowClick,
  className = '',
  striped = true,
  hoverable = true
}) => {
  return (
    <div className={`overflow-x-auto rounded-2xl border border-[#597592]/20 ${className}`}>
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#597592]/20 bg-gradient-to-r from-[#020408] to-[#0a1420]">
            {columns.map((column) => (
              <th
                key={column.key}
                className={`py-3 px-6 text-sm font-medium text-[#b2c1d3] text-${column.align || 'left'}`}
                style={{ width: column.width }}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={() => onRowClick?.(row)}
              className={`
                border-b border-[#597592]/10 transition-colors duration-200
                ${striped && rowIndex % 2 === 0 ? 'bg-[#020408]/30' : ''}
                ${hoverable ? 'hover:bg-[#020408]/50 cursor-pointer' : ''}
                ${onRowClick ? 'cursor-pointer' : ''}
              `}
            >
              {columns.map((column) => (
                <td
                  key={`${rowIndex}-${column.key}`}
                  className={`py-4 px-6 text-sm text-[#b2c1d3] text-${column.align || 'left'}`}
                >
                  {column.render
                    ? column.render(row[column.key], row)
                    : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
      {data.length === 0 && (
        <div className="py-12 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#597592]/20 to-[#b2c1d3]/20 rounded-full flex items-center justify-center">
            <span className="text-2xl text-[#597592]">∅</span>
          </div>
          <p className="text-[#b2c1d3]/70">No data available</p>
        </div>
      )}
    </div>
  )
}

export default Table
'use client'

import { useEffect, useState } from 'react'

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [angle, setAngle] = useState(0)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    document.addEventListener('mousemove', updatePosition)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Animasi rotasi
  useEffect(() => {
    if (!isVisible) return
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 1.2) % 360)
    }, 16)
    return () => clearInterval(interval)
  }, [isVisible])

  const radius = 30
  const circumference = 2 * Math.PI * radius
  const text = 'HELLOWORLD// '
  const repeat = Math.ceil((circumference / (text.length * 10)))
  const displayText = text.repeat(repeat)

  return (
    <div
      className={`pointer-events-none fixed z-[9999] mix-blend-difference select-none ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <svg width={radius * 2 + 24} height={radius * 2 + 24} style={{ display: 'block' }}>
        <defs>
          <path
            id="circlePath"
            d={`M ${radius + 12},${radius + 12} m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
            fill="none"
          />
        </defs>
        <g style={{ transformOrigin: '50% 50%', transform: `rotate(${angle}deg)` }}>
          <text
            // blue-700
            fill="rgb(24, 169, 253)"
            fontSize="14"
            fontFamily="'NeueMontreal-Medium', NeueMontreal, Arial, sans-serif"
            letterSpacing="2"
            dominantBaseline="middle"
            textAnchor="middle"
            style={{ textTransform: 'uppercase', textShadow: '0 0 8px transparent, 0 0 16px transparent' }}
          >
            <textPath xlinkHref="#circlePath" href="#circlePath" startOffset="0">
              {displayText}
            </textPath>
          </text>
          <circle
            cx={radius + 12}
            cy={radius + 12}
            r={radius}
            fill="none"
            stroke="rgb(50,255,255)"
            strokeOpacity={0.35}
            strokeWidth={1.5}
            style={{ filter: 'drop-shadow(0 0 8px transparent) drop-shadow(0 0 16px transparent)' }}
          />
        </g>
      </svg>
    </div>
  )
} 
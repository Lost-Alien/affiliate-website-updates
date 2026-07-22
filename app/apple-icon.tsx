/* eslint-disable no-restricted-syntax -- ImageResponse runs in edge runtime; CSS custom properties are not supported here */
import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: 'linear-gradient(135deg, #5C2800 0%, #1A0800 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Shield body */}
        <div
          style={{
            width: 110,
            height: 124,
            background: 'linear-gradient(160deg, #C47B1A 0%, #7A3D00 100%)',
            clipPath: 'polygon(50% 0%, 100% 20%, 100% 60%, 50% 100%, 0% 60%, 0% 20%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
          }}
        >
          <span
            style={{
              color: 'white',
              fontSize: 52,
              fontWeight: 900,
              fontFamily: 'sans-serif',
              letterSpacing: '-2px',
              lineHeight: 1,
              marginTop: 4,
            }}
          >
            TS
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}

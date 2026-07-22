/* eslint-disable no-restricted-syntax -- ImageResponse runs in edge runtime; CSS custom properties are not supported here */
import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 7,
          background: 'linear-gradient(135deg, #5C2800 0%, #1A0800 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Shield */}
        <div
          style={{
            position: 'absolute',
            width: 20,
            height: 22,
            background: 'linear-gradient(160deg, #C47B1A 0%, #7A3D00 100%)',
            clipPath: 'polygon(50% 0%, 100% 20%, 100% 60%, 50% 100%, 0% 60%, 0% 20%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              color: 'white',
              fontSize: 9,
              fontWeight: 900,
              fontFamily: 'sans-serif',
              letterSpacing: '-0.5px',
              lineHeight: 1,
              marginTop: 1,
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

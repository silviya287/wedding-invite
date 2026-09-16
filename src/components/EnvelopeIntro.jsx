import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function EnvelopeIntro({ onComplete }) {
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('invited')) {
      onComplete()
    }
  }, [onComplete])

  const handleTap = () => {
    if (opened) return

    setOpened(true)

    window.dispatchEvent(new Event('wedding-invite-open'))

    setTimeout(() => {
      sessionStorage.setItem('invited', 'true')
      onComplete()
    }, 2000)
  }

  return (
    <div
      onClick={handleTap}
      style={{
        position: 'fixed',
        inset: 0,
        background:
          'radial-gradient(circle at center, #fffdf8 0%, #f8eee0 65%, #f0dfc8 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        padding: '25px',
        zIndex: 20000,
        overflow: 'hidden',
      }}
    >
      {/* Elegant outer border */}
      <div
        style={{
          position: 'absolute',
          inset: '18px',
          border: '1px solid rgba(201, 148, 42, 0.45)',
          borderRadius: '18px',
          pointerEvents: 'none',
        }}
      />

      {/* Soft golden glow */}
      <div
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(201, 148, 42, 0.07)',
          filter: 'blur(45px)',
          top: '-100px',
          left: '-100px',
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: 'rgba(201, 148, 42, 0.06)',
          filter: 'blur(45px)',
          bottom: '-100px',
          right: '-100px',
        }}
      />

      <motion.div
        animate={
          opened
            ? {
                scale: 0.92,
                y: 80,
                opacity: 0,
              }
            : {
                y: [0, -7, 0],
              }
        }
        transition={
          opened
            ? {
                duration: 0.8,
              }
            : {
                y: {
                  repeat: Infinity,
                  duration: 3,
                },
              }
        }
        style={{
          width: '100%',
          maxWidth: '320px',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <img
          src="/envelope.png"
          alt="Wedding invitation envelope"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            filter:
              'drop-shadow(0 18px 25px rgba(74, 45, 19, 0.18))',
          }}
        />
      </motion.div>

      <motion.div
        animate={
          opened
            ? {
                opacity: 0,
                y: 10,
              }
            : {
                opacity: [0.7, 1, 0.7],
              }
        }
        transition={
          opened
            ? {
                duration: 0.5,
              }
            : {
                duration: 2.2,
                repeat: Infinity,
              }
        }
        style={{
          position: 'relative',
          zIndex: 1,
          marginTop: '22px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            color: '#8a641e',
            fontSize: '14px',
            letterSpacing: '0.2em',
            marginBottom: '8px',
          }}
        >
          A WEDDING INVITATION
        </div>

        <div
          style={{
            fontFamily: 'EB Garamond, serif',
            color: '#a97820',
            fontSize: '12px',
            letterSpacing: '0.28em',
          }}
        >
          TAP TO OPEN
        </div>
      </motion.div>
    </div>
  )
}
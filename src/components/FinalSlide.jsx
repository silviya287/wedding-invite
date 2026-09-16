import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp } from '../animations'
import { useState } from 'react'

export default function FinalSlide() {
  const [revealed, setRevealed] = useState(false)

  const handleReveal = () => {
    setRevealed(true)
  }

  return (
    <section
      style={{
        minHeight: '100svh',
        background:
          'radial-gradient(circle at 50% 35%, #fffdf8 0%, #f8eee0 60%, #ead8bf 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '18px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Outer gold border */}
      <div
        style={{
          position: 'absolute',
          inset: '12px',
          border: '2px solid #c9942a',
          borderRadius: '22px',
          pointerEvents: 'none',
          zIndex: 20,
        }}
      />

      {/* Inner gold border */}
      <div
        style={{
          position: 'absolute',
          inset: '20px',
          border: '1px solid rgba(201, 148, 42, 0.55)',
          borderRadius: '17px',
          pointerEvents: 'none',
          zIndex: 20,
        }}
      />

      {/* Soft golden glow */}
      <div
        style={{
          position: 'absolute',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: 'rgba(201, 148, 42, 0.08)',
          filter: 'blur(55px)',
          top: '-100px',
          left: '-100px',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          background: 'rgba(201, 148, 42, 0.07)',
          filter: 'blur(55px)',
          bottom: '-100px',
          right: '-100px',
          zIndex: 0,
        }}
      />

      {/* Final invitation */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: '-80px',
        }}
        style={{
          width: '100%',
          maxWidth: '390px',
          position: 'relative',
          zIndex: 5,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            position: 'relative',
            background: 'rgba(255, 252, 246, 0.92)',
            border: '1px solid rgba(201, 148, 42, 0.48)',
            borderRadius: '28px',
            padding: '25px 18px 28px',
            boxShadow:
              '0 20px 55px rgba(74, 45, 19, 0.12)',
            overflow: 'hidden',
          }}
        >
          {/* Card inner border */}
          <div
            style={{
              position: 'absolute',
              inset: '9px',
              border: '1px solid rgba(201, 148, 42, 0.25)',
              borderRadius: '22px',
              pointerEvents: 'none',
            }}
          />

          {/* Top ornament */}
          <div
            style={{
              position: 'relative',
              zIndex: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '8px',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '1px',
                background: '#c9942a',
              }}
            />

            <span
              style={{
                color: '#b07b1f',
                fontSize: '13px',
              }}
            >
              ✦
            </span>

            <div
              style={{
                width: '48px',
                height: '1px',
                background: '#c9942a',
              }}
            />
          </div>

          {/* Cross */}
          <div
            style={{
              position: 'relative',
              zIndex: 3,
              color: '#a97820',
              fontSize: '25px',
              marginBottom: '5px',
            }}
          >
            ✝
          </div>

          <p
            style={{
              position: 'relative',
              zIndex: 3,
              fontFamily: 'EB Garamond, serif',
              color: '#a97820',
              fontSize: '10px',
              letterSpacing: '0.25em',
              margin: '0 0 10px',
            }}
          >
            WITH GOD'S BLESSINGS
          </p>

          {/* Shruti */}
          <h2
            style={{
              position: 'relative',
              zIndex: 3,
              fontFamily: 'Great Vibes, cursive',
              fontSize: '58px',
              fontWeight: '400',
              color: '#a97820',
              margin: '0',
              lineHeight: '0.95',
            }}
          >
            Shruti
          </h2>

          {/* & */}
          <div
            style={{
              position: 'relative',
              zIndex: 3,
              fontFamily: 'Cormorant Garamond, serif',
              color: '#6b4923',
              fontSize: '24px',
              margin: '4px 0',
            }}
          >
            &
          </div>

          {/* Reinhard */}
          <h2
            style={{
              position: 'relative',
              zIndex: 3,
              fontFamily: 'Great Vibes, cursive',
              fontSize: '58px',
              fontWeight: '400',
              color: '#a97820',
              margin: '0',
              lineHeight: '0.95',
            }}
          >
            Reinhard
          </h2>

          {/* Gold divider */}
          <div
            style={{
              position: 'relative',
              zIndex: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              margin: '17px auto 14px',
            }}
          >
            <div
              style={{
                width: '50px',
                height: '1px',
                background: '#c9942a',
                opacity: 0.65,
              }}
            />

            <span
              style={{
                color: '#c9942a',
                fontSize: '11px',
              }}
            >
              ❧
            </span>

            <div
              style={{
                width: '50px',
                height: '1px',
                background: '#c9942a',
                opacity: 0.65,
              }}
            />
          </div>

          {/* Family invitation */}
          <p
            style={{
              position: 'relative',
              zIndex: 3,
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '15px',
              color: '#5a3a1c',
              lineHeight: '1.4',
              margin: '0 0 14px',
            }}
          >
            The Masiha &amp; Sonavane Families
            <br />
            warmly invite you to celebrate
            <br />
            this beautiful beginning.
          </p>

          {/* Date */}
          <p
            style={{
              position: 'relative',
              zIndex: 3,
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '19px',
              color: '#5a3200',
              letterSpacing: '0.12em',
              margin: '0 0 5px',
            }}
          >
            22 NOVEMBER 2026
          </p>

          {/* Church */}
          <p
            style={{
              position: 'relative',
              zIndex: 3,
              fontFamily: 'EB Garamond, serif',
              fontSize: '14px',
              color: '#654522',
              margin: '0 0 15px',
            }}
          >
            John Malelu Memorial Church
          </p>

          {/* Closing */}
          <p
            style={{
              position: 'relative',
              zIndex: 3,
              fontFamily: 'Great Vibes, cursive',
              fontSize: '32px',
              color: '#a97820',
              margin: '0 0 10px',
            }}
          >
            Forever begins here
          </p>

          <div
            style={{
              position: 'relative',
              zIndex: 3,
              width: '65px',
              height: '1px',
              background: '#c9942a',
              margin: '0 auto 12px',
              opacity: 0.65,
            }}
          />

          <p
            style={{
              position: 'relative',
              zIndex: 3,
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '13px',
              fontStyle: 'italic',
              color: '#70512d',
              lineHeight: '1.45',
              margin: 0,
            }}
          >
            Thank you for being part of
            <br />
            our special day.
          </p>

          {/* Bottom ornament */}
          <div
            style={{
              position: 'relative',
              zIndex: 3,
              marginTop: '17px',
              color: '#c9942a',
              fontSize: '12px',
              letterSpacing: '0.3em',
            }}
          >
            ✦ ✦ ✦
          </div>
        </div>
      </motion.div>

      {/* Image reveal layer */}
      <AnimatePresence>
        {!revealed && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.04,
              transition: {
                duration: 0.8,
                ease: 'easeInOut',
              },
            }}
            viewport={{
              once: true,
            }}
            style={{
              position: 'absolute',
              inset: '28px',
              zIndex: 15,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              overflow: 'hidden',
              borderRadius: '14px',
              background: '#fdf8f0',
            }}
            onClick={handleReveal}
            role="button"
            tabIndex={0}
            aria-label="Tap To Reveal"
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                handleReveal()
              }
            }}
          >
            {/* Arch image */}
            <motion.img
              src="/final-arch.png"
              alt="Wedding invitation reveal"
              animate={{
                scale: [1, 1.015, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center',
                display: 'block',
                filter: 'blur(0.4px)',
              }}
            />

            {/* Soft overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to bottom, rgba(253,248,240,0.05), rgba(253,248,240,0.18))',
                pointerEvents: 'none',
              }}
            />

            {/* Click instruction */}
            <motion.div
              animate={{
                opacity: [0.72, 1, 0.72],
                y: [0, -3, 0],
              }}
              transition={{
                opacity: {
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                y: {
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              style={{
                position: 'absolute',
                left: '50%',
                bottom: '32px',
                transform: 'translateX(-50%)',
                background: 'rgba(255, 252, 246, 0.92)',
                border:
                  '1px solid rgba(201, 148, 42, 0.65)',
                borderRadius: '999px',
                padding: '10px 18px',
                boxShadow:
                  '0 8px 25px rgba(74, 45, 19, 0.16)',
                color: '#8a641e',
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '14px',
                letterSpacing: '0.08em',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
              }}
            >
              ✦ TAP THE IMAGE TO REVEAL ✦
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

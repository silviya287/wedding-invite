import { motion } from 'framer-motion'
import { fadeUp } from '../animations'

export default function FinalSlide() {
  return (
    <section
      style={{
        minHeight: '100svh',
        background:
          'radial-gradient(circle at 50% 40%, #fffdf8 0%, #f8eee0 58%, #f0dfc8 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '35px 18px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background:
            'rgba(201, 148, 42, 0.09)',
          filter: 'blur(55px)',
          top: '-120px',
          right: '-120px',
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          background:
            'rgba(201, 148, 42, 0.07)',
          filter: 'blur(50px)',
          bottom: '-100px',
          left: '-100px',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: '18px',
          border:
            '1px solid rgba(201, 148, 42, 0.4)',
          borderRadius: '18px',
          pointerEvents: 'none',
        }}
      />

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
          zIndex: 1,
        }}
      >
        <div
          style={{
            background:
              'rgba(255, 252, 246, 0.96)',
            border:
              '1px solid rgba(201, 148, 42, 0.55)',
            borderRadius: '26px',
            padding: '46px 22px',
            textAlign: 'center',
            boxShadow:
              '0 18px 50px rgba(74, 45, 19, 0.12)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: '9px',
              border:
                '1px solid rgba(201, 148, 42, 0.25)',
              borderRadius: '20px',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 1,
            }}
          >
            <div
              style={{
                color: '#a97820',
                fontSize: '28px',
                marginBottom: '18px',
              }}
            >
              ✝
            </div>

            <p
              style={{
                fontFamily: 'EB Garamond, serif',
                color: '#a97820',
                fontSize: '11px',
                letterSpacing: '0.25em',
                margin: '0 0 16px',
              }}
            >
              WITH GOD'S BLESSINGS
            </p>

            <h2
              style={{
                fontFamily:
                  'Great Vibes, cursive',
                fontSize: '64px',
                fontWeight: '400',
                color: '#a97820',
                margin: '0',
                lineHeight: '1',
              }}
            >
              Sona
            </h2>

            <div
              style={{
                fontFamily:
                  'Cormorant Garamond, serif',
                color: '#604522',
                fontSize: '28px',
                margin: '7px 0',
              }}
            >
              &
            </div>

            <h2
              style={{
                fontFamily:
                  'Great Vibes, cursive',
                fontSize: '64px',
                fontWeight: '400',
                color: '#a97820',
                margin: '0',
                lineHeight: '1',
              }}
            >
              Sunny
            </h2>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '9px',
                margin: '28px auto 22px',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '1px',
                  background: '#c9942a',
                  opacity: 0.7,
                }}
              />

              <span
                style={{
                  color: '#c9942a',
                  fontSize: '11px',
                }}
              >
                ✦
              </span>

              <div
                style={{
                  width: '48px',
                  height: '1px',
                  background: '#c9942a',
                  opacity: 0.7,
                }}
              />
            </div>

            <p
              style={{
                fontFamily:
                  'Cormorant Garamond, serif',
                fontSize: '24px',
                color: '#5a3200',
                letterSpacing: '0.12em',
                margin: '0 0 10px',
              }}
            >
              22 NOVEMBER 2026
            </p>

            <p
              style={{
                fontFamily:
                  'EB Garamond, serif',
                fontSize: '16px',
                color: '#654522',
                margin: '0 0 28px',
              }}
            >
              John Malelu Memorial Church
            </p>

            <p
              style={{
                fontFamily:
                  'Great Vibes, cursive',
                fontSize: '34px',
                color: '#a97820',
                margin: '0 0 18px',
              }}
            >
              Forever begins here
            </p>

            <div
              style={{
                width: '70px',
                height: '1px',
                background: '#c9942a',
                margin: '0 auto 20px',
                opacity: 0.65,
              }}
            />

            <p
              style={{
                fontFamily:
                  'Cormorant Garamond, serif',
                fontSize: '15px',
                fontStyle: 'italic',
                color: '#70512d',
                lineHeight: '1.5',
                margin: 0,
              }}
            >
              Thank you for being part of
              <br />
              our special day.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
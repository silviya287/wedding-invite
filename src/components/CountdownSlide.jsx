import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { fadeUp } from '../animations'

export default function CountdownSlide() {
  const calculateTimeLeft = () => {
    const target = new Date('2026-11-22T16:00:00')
    const now = new Date()
    const difference = target - now

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      }
    }

    return {
      days: Math.floor(
        difference / (1000 * 60 * 60 * 24)
      ),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    }
  }

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft()
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeBoxes = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ]

  return (
    <section
      style={{
        minHeight: '100svh',
        background:
          'radial-gradient(circle at 50% 45%, #fffdf8 0%, #f8eee0 60%, #f1dfc9 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '35px 18px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Large floral background */}
      <img
        src="/countdown-floral.jpg"
        alt=""
        style={{
          position: 'absolute',
          top: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '120%',
          height: '500px',
          objectFit: 'cover',
          objectPosition: 'center',
          opacity: 0.32,
          WebkitMaskImage:
            'linear-gradient(to bottom, black 0%, black 45%, transparent 100%)',
          maskImage:
            'linear-gradient(to bottom, black 0%, black 45%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'rgba(201, 148, 42, 0.08)',
          filter: 'blur(55px)',
          bottom: '-120px',
          right: '-120px',
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: '240px',
          height: '240px',
          borderRadius: '50%',
          background: 'rgba(201, 148, 42, 0.06)',
          filter: 'blur(45px)',
          top: '-80px',
          left: '-100px',
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
            background: 'rgba(255, 252, 246, 0.90)',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(201, 148, 42, 0.55)',
            borderRadius: '26px',
            padding: '38px 20px',
            textAlign: 'center',
            boxShadow:
              '0 18px 45px rgba(74, 45, 19, 0.12)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: '9px',
              border:
                '1px solid rgba(201, 148, 42, 0.25)',
              borderRadius: '18px',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 1,
            }}
          >
            <p
              style={{
                fontFamily: 'EB Garamond, serif',
                color: '#a97820',
                letterSpacing: '0.25em',
                fontSize: '11px',
                margin: '0 0 12px',
              }}
            >
              COUNTING THE MOMENTS
            </p>

            <h2
              style={{
                fontFamily: 'Great Vibes, cursive',
                fontSize: '55px',
                fontWeight: '400',
                color: '#5a3200',
                margin: '0 0 8px',
                lineHeight: '1.05',
              }}
            >
              Until Forever
            </h2>

            <p
              style={{
                fontFamily:
                  'Cormorant Garamond, serif',
                color: '#6b4a18',
                fontSize: '17px',
                fontStyle: 'italic',
                margin: '0 0 30px',
              }}
            >
              Until forever begins...
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(2, 1fr)',
                gap: '12px',
                maxWidth: '300px',
                margin: '0 auto 28px',
              }}
            >
              {timeBoxes.map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: 'rgba(251, 244, 233, 0.88)',
                    border:
                      '1px solid rgba(201, 148, 42, 0.28)',
                    borderRadius: '15px',
                    padding: '16px 8px',
                  }}
                >
                  <div
                    style={{
                      fontFamily:
                        'Cormorant Garamond, serif',
                      fontSize: '32px',
                      fontWeight: '600',
                      color: '#5a3200',
                      lineHeight: '1',
                      marginBottom: '7px',
                    }}
                  >
                    {String(item.value).padStart(2, '0')}
                  </div>

                  <div
                    style={{
                      fontFamily:
                        'EB Garamond, serif',
                      fontSize: '10px',
                      letterSpacing: '0.16em',
                      color: '#8a641e',
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '9px',
              }}
            >
              <div
                style={{
                  width: '50px',
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
                  width: '50px',
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
                color: '#604522',
                fontSize: '15px',
                letterSpacing: '0.12em',
                margin: '18px 0 0',
              }}
            >
              22 NOVEMBER 2026
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
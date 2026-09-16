import { motion } from 'framer-motion'
import { fadeUp } from '../animations'

export default function EventSlide({
  label,
  heading,
  headingColor,
  description,
  date,
  time,
  venue,
  address,
  dressCode,
  mapsUrl,
  accentColor = '#c9942a',
  showCross = false,
  floralImage,
}) {
  const icon = showCross
    ? '✝'
    : heading === 'Mehendi'
      ? '✿'
      : heading === 'Haldi'
        ? '✦'
        : '♡'

  return (
    <section
      style={{
        minHeight: '100svh',
        background: '#f8eee0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '35px 18px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Soft background floral */}
      {floralImage && (
        <img
          src={floralImage}
          alt=""
          style={{
            position: 'absolute',
            top: '-30px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '125%',
            height: '420px',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.28,
            WebkitMaskImage:
              'linear-gradient(to bottom, black 0%, black 42%, transparent 100%)',
            maskImage:
              'linear-gradient(to bottom, black 0%, black 42%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />
      )}

      <div
        style={{
          position: 'absolute',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: `${accentColor}12`,
          filter: 'blur(45px)',
          top: '-100px',
          right: '-100px',
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: `${accentColor}10`,
          filter: 'blur(45px)',
          bottom: '-100px',
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
            background: 'rgba(255, 252, 246, 0.93)',
            backdropFilter: 'blur(5px)',
            border: `1px solid ${accentColor}70`,
            borderRadius: '24px',
            padding: '32px 18px',
            textAlign: 'center',
            boxShadow:
              '0 18px 45px rgba(74, 45, 19, 0.10)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: '9px',
              border: `1px solid ${accentColor}25`,
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
            <div
              style={{
                width: '58px',
                height: '58px',
                borderRadius: '50%',
                margin: '0 auto 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `${accentColor}18`,
                border: `1px solid ${accentColor}65`,
                color: accentColor,
                fontSize: showCross ? '22px' : '24px',
              }}
            >
              {icon}
            </div>

            <p
              style={{
                fontFamily: 'EB Garamond, serif',
                color: accentColor,
                letterSpacing: '0.22em',
                fontSize: '10px',
                margin: '0 0 12px',
              }}
            >
              {label}
            </p>

            <h2
              style={{
                fontFamily: 'Great Vibes, cursive',
                fontSize: '56px',
                fontWeight: '400',
                color: headingColor,
                margin: '0 0 12px',
                lineHeight: '1.05',
              }}
            >
              {heading}
            </h2>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '9px',
                margin: '0 auto 20px',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '1px',
                  background: accentColor,
                  opacity: 0.7,
                }}
              />

              <span
                style={{
                  color: accentColor,
                  fontSize: '10px',
                }}
              >
                ✦
              </span>

              <div
                style={{
                  width: '42px',
                  height: '1px',
                  background: accentColor,
                  opacity: 0.7,
                }}
              />
            </div>

            <p
              style={{
                fontFamily:
                  'Cormorant Garamond, serif',
                fontSize: '18px',
                fontStyle: 'italic',
                lineHeight: '1.45',
                color: '#654522',
                margin: '0 auto 24px',
                maxWidth: '290px',
              }}
            >
              {description}
            </p>

            <div
              style={{
                background: '#fbf4e9',
                borderRadius: '16px',
                padding: '18px 12px',
                border: `1px solid ${accentColor}25`,
                marginBottom: '18px',
              }}
            >
              <p
                style={{
                  fontFamily:
                    'Cormorant Garamond, serif',
                  fontSize: '19px',
                  color: '#4a2d13',
                  margin: '0 0 7px',
                  letterSpacing: '0.05em',
                }}
              >
                {date}
              </p>

              <p
                style={{
                  fontFamily:
                    'Cormorant Garamond, serif',
                  fontSize: '25px',
                  fontWeight: '600',
                  color: headingColor,
                  margin: '0 0 9px',
                }}
              >
                {time}
              </p>

              <div
                style={{
                  width: '35px',
                  height: '1px',
                  background: accentColor,
                  margin: '0 auto 10px',
                  opacity: 0.6,
                }}
              />

              <p
                style={{
                  fontFamily:
                    'EB Garamond, serif',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#654522',
                  lineHeight: '1.4',
                  margin: '0 0 6px',
                }}
              >
                {venue}
              </p>

              <p
                style={{
                  fontFamily:
                    'EB Garamond, serif',
                  fontSize: '13px',
                  color: '#806546',
                  lineHeight: '1.45',
                  margin: 0,
                }}
              >
                {address}
              </p>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '7px 15px',
                borderRadius: '30px',
                background: `${accentColor}12`,
                border: `1px solid ${accentColor}45`,
                marginBottom: '18px',
              }}
            >
              <span
                style={{
                  fontFamily: 'EB Garamond, serif',
                  fontSize: '13px',
                  color: '#70512d',
                }}
              >
                Dress Code:
              </span>

              <strong
                style={{
                  fontFamily:
                    'Cormorant Garamond, serif',
                  fontSize: '15px',
                  color: headingColor,
                }}
              >
                {dressCode}
              </strong>
            </div>

            {mapsUrl && (
              <div>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    fontFamily:
                      'EB Garamond, serif',
                    fontSize: '13px',
                    letterSpacing: '0.12em',
                    color: headingColor,
                    border: `1px solid ${accentColor}80`,
                    padding: '9px 20px',
                    borderRadius: '30px',
                    background: '#fffaf2',
                  }}
                >
                  <span>⌖</span>
                  VIEW LOCATION
                </a>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
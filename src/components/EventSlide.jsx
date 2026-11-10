
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
  mapsUrl,
  accentColor = '#c9942a',
  floralImage,
}) {
  const isMehendi = heading === 'Mehendi'
  const isHaldi = heading === 'Haldi'
  const isEngagement = heading === 'Engagement'
  const isTraditional = isMehendi || isHaldi

  const image =
    isMehendi
      ? '/mehendi-bg.png'
      : isHaldi
        ? '/haldi-bg.png'
        : isEngagement
          ? '/engagement-bg.png'
          : heading === 'Wedding'
            ? '/wedding-bg.png'
            : heading === 'Reception'
              ? '/reception-bg.png'
              : floralImage || null

  const theme = isMehendi
    ? {
        background: '#173f29',
        accent: '#d5b15b',
        heading: '#fff0c4',
        text: '#fff5dc',
        detail: 'rgba(17, 65, 39, 0.82)',
        detailText: '#fff5dc',
        button: 'rgba(17, 65, 39, 0.85)',
      }
    : isHaldi
      ? {
          background: '#f8e9b8',
          accent: '#a96e12',
          heading: '#87520a',
          text: '#68471e',
          detail: 'rgba(255, 239, 196, 0.92)',
          detailText: '#58360b',
          button: 'rgba(255, 240, 195, 0.95)',
        }
      : {
          background: '#f8eee0',
          accent: accentColor,
          heading: headingColor || '#98704c',
          text: '#654522',
          detail: 'rgba(255, 250, 242, 0.91)',
          detailText: '#654522',
          button: 'rgba(255, 250, 242, 0.96)',
        }

  const displayHeading = isMehendi
    ? "Sonu's Mehendi"
    : heading

  return (
    <section
      style={{
        minHeight: '100svh',
        background: theme.background,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px 18px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        style={{
          width: '100%',
          maxWidth: '390px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '896 / 1200',
            overflow: 'hidden',
            backgroundColor: theme.background,
            backgroundImage: image ? `url("${image}")` : 'none',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            border: `2px solid ${theme.accent}`,
            borderRadius: isTraditional ? '5px' : '12px',
            boxShadow: '0 18px 45px rgba(0,0,0,0.14)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: isTraditional ? '9px' : '12px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              padding: isTraditional
                ? '45px 12px 12px'
                : isEngagement
                  ? '18px 12px 12px'
                  : '35px 12px 12px',
              textAlign: 'center',
              boxSizing: 'border-box',
              zIndex: 1,
              transform: isEngagement
                ? 'translateY(-12px) scale(0.88)'
                : 'none',
              transformOrigin: 'top center',
            }}
          >
            <p
              style={{
                fontFamily: 'EB Garamond, serif',
                color: theme.accent,
                letterSpacing: '0.2em',
                fontSize: '11px',
                fontWeight: '600',
                textTransform: 'uppercase',
                margin: '0 0 10px',
                textShadow: isMehendi
                  ? '0 1px 3px rgba(0,0,0,0.4)'
                  : 'none',
              }}
            >
              {label}
            </p>

            <h2
              style={{
                fontFamily: 'Great Vibes, cursive',
                fontSize: isMehendi ? '43px' : '49px',
                fontWeight: '400',
                color: theme.heading,
                lineHeight: '1.1',
                margin: '0 0 12px',
                textShadow: isMehendi
                  ? '0 2px 4px rgba(0,0,0,0.5)'
                  : '0 1px 3px rgba(255,255,255,0.5)',
              }}
            >
              {displayHeading}
            </h2>

            <div
              style={{
                width: '65px',
                height: '1px',
                background: theme.accent,
                margin: '0 auto 13px',
              }}
            />

            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '16px',
                fontStyle: 'italic',
                lineHeight: '1.4',
                color: theme.text,
                maxWidth: '280px',
                margin: '0 auto 16px',
                textShadow: isMehendi
                  ? '0 1px 3px rgba(0,0,0,0.5)'
                  : 'none',
              }}
            >
              {description}
            </p>

            <div
              style={{
                width: '100%',
                maxWidth: '290px',
                boxSizing: 'border-box',
                background: theme.detail,
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
                border: `1px solid ${theme.accent}90`,
                borderRadius: isTraditional ? '3px' : '10px',
                padding: '12px 10px',
                marginBottom: '12px',
              }}
            >
              {/* Date */}
              <p
                style={{
                  fontFamily: 'EB Garamond, serif',
                  fontSize: '19px',
                  fontWeight: '600',
                  letterSpacing: '0.04em',
                  color: theme.detailText,
                  margin: '0 0 5px',
                }}
              >
                {date}
              </p>

              {/* Time */}
              {time && (
                <p
                  style={{
                    fontFamily: 'EB Garamond, serif',
                    fontSize: '23px',
                    fontWeight: '600',
                    letterSpacing: '0.03em',
                    color: theme.detailText,
                    margin: '0 0 7px',
                  }}
                >
                  {time}
                </p>
              )}

              <div
                style={{
                  width: '30px',
                  height: '1px',
                  background: theme.accent,
                  margin: '0 auto 8px',
                }}
              />

              {venue && (
                <p
                  style={{
                    fontFamily: 'EB Garamond, serif',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: theme.detailText,
                    lineHeight: '1.35',
                    margin: '0 0 5px',
                  }}
                >
                  {venue}
                </p>
              )}

              {address && (
                <p
                  style={{
                    fontFamily: 'EB Garamond, serif',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: theme.detailText,
                    lineHeight: '1.35',
                    margin: 0,
                  }}
                >
                  {address}
                </p>
              )}
            </div>

            {mapsUrl && (
              <motion.a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  fontFamily: 'EB Garamond, serif',
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '0.12em',
                  color: theme.detailText,
                  border: `1px solid ${theme.accent}`,
                  padding: '8px 18px',
                  borderRadius: isTraditional ? '3px' : '25px',
                  background: theme.button,
                }}
              >
                VIEW LOCATION
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

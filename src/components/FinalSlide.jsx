
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function FinalSlide() {
  const [revealed, setRevealed] = useState(false)

  return (
    <section
      style={{
        minHeight: '100svh',
        width: '100%',
        boxSizing: 'border-box',
        padding: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
        background: revealed
          ? '#07172e'
          : 'linear-gradient(145deg, #fffaf1, #f4e7d5, #fffaf1)',
      }}
    >
      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.div
            key="flower-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.04,
              transition: { duration: 0.45 },
            }}
            style={{
              width: '100%',
              maxWidth: '520px',
              minHeight: 'min(700px, calc(100svh - 24px))',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '20px',
              boxSizing: 'border-box',
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(22px, 5vw, 30px)',
                fontStyle: 'italic',
                color: '#896747',
                marginBottom: '8px',
              }}
            >
              A little surprise awaits...
            </motion.p>

            <motion.button
              type="button"
              onClick={() => setRevealed(true)}
              whileTap={{ scale: 0.96 }}
              aria-label="Tap the flower to reveal your invitation"
              style={{
                width: '100%',
                maxWidth: '420px',
                padding: 0,
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                outline: 'none',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              <motion.img
                src="/tap-flower.png"
                alt="Elegant white and gold flower"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{
                  opacity: 1,
                  scale: [1, 1.025, 1],
                }}
                transition={{
                  opacity: { duration: 0.8 },
                  scale: {
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
                style={{
                  display: 'block',
                  width: '100%',
                  maxHeight: 'min(48svh, 400px)',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 12px 18px rgba(139, 101, 53, 0.16))',
                }}
              />
            </motion.button>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(21px, 4.5vw, 28px)',
                fontStyle: 'italic',
                color: '#654b35',
                lineHeight: 1.4,
                marginTop: '18px',
                marginBottom: '8px',
              }}
            >
              Tap the flower to reveal your invitation
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '18px',
                letterSpacing: '3px',
                color: '#b48a45',
                marginTop: '12px',
              }}
            >
              SHRUTI & RENHARD
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="invitation-screen"
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
            }}
            style={{
              width: '100%',
              minHeight: 'calc(100svh - 24px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/final-invitation.jpeg"
              alt="Wedding invitation for Shruti and Renhard"
              style={{
                display: 'block',
                width: '100%',
                maxWidth: '520px',
                height: 'auto',
                maxHeight: 'calc(100svh - 24px)',
                objectFit: 'contain',
                objectPosition: 'center',
                borderRadius: '5px',
                boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

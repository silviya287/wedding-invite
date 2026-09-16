import { motion } from 'framer-motion'
import { fadeUp } from '../animations'

export default function HeroSlide() {
  return (
    <section
      style={{
        minHeight: '100svh',
        background:
          'radial-gradient(circle at 50% 35%, #fffdf8 0%, #fdf7ed 55%, #f6ead8 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '45px 22px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* More visible floral decoration */}
      <img
        src="/hero-floral.jpg"
        alt=""
        style={{
          position: 'absolute',
          top: '-10px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '110%',
          height: '390px',
          objectFit: 'cover',
          objectPosition: 'center',
          opacity: 0.48,
          WebkitMaskImage:
            'linear-gradient(to bottom, black 0%, black 48%, transparent 100%)',
          maskImage:
            'linear-gradient(to bottom, black 0%, black 48%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: 'rgba(201, 148, 42, 0.08)',
          filter: 'blur(40px)',
          top: '-90px',
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
          filter: 'blur(40px)',
          bottom: '-100px',
          right: '-100px',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: '18px',
          border: '1px solid rgba(201, 148, 42, 0.45)',
          borderRadius: '18px',
          pointerEvents: 'none',
        }}
      />

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
        <p
          style={{
            fontFamily: 'EB Garamond, serif',
            color: '#604522',
            letterSpacing: '0.28em',
            fontSize: '11px',
            margin: '0 0 28px',
          }}
        >
          TOGETHER WITH THEIR FAMILIES
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '24px',
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
              color: '#a97820',
              fontSize: '20px',
            }}
          >
            ✝
          </span>

          <div
            style={{
              width: '48px',
              height: '1px',
              background: '#c9942a',
            }}
          />
        </div>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            color: '#5a3a1c',
            fontSize: '16px',
            letterSpacing: '0.12em',
            margin: '0 0 18px',
          }}
        >
          INVITE YOU TO CELEBRATE
        </p>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            color: '#5a3a1c',
            fontSize: '15px',
            letterSpacing: '0.16em',
            margin: '0 0 25px',
          }}
        >
          THEIR WEDDING
        </p>

        <h1
          style={{
            fontFamily: 'Great Vibes, cursive',
            fontSize: '72px',
            fontWeight: '400',
            color: '#a97820',
            margin: '0',
            lineHeight: '1',
          }}
        >
          Sona
        </h1>

        <div
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            color: '#604522',
            fontSize: '30px',
            margin: '7px 0',
          }}
        >
          &
        </div>

        <h1
          style={{
            fontFamily: 'Great Vibes, cursive',
            fontSize: '72px',
            fontWeight: '400',
            color: '#a97820',
            margin: '0',
            lineHeight: '1',
          }}
        >
          Sunny
        </h1>

        <div
          style={{
            margin: '30px auto 26px',
            maxWidth: '340px',
          }}
        >
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              color: '#5a3a1c',
              fontSize: '16px',
              fontStyle: 'italic',
              lineHeight: '1.5',
              margin: 0,
            }}
          >
            “And now these three remain: faith, hope and love.
            <br />
            But the greatest of these is love.”
          </p>

          <p
            style={{
              fontFamily: 'EB Garamond, serif',
              color: '#a97820',
              fontSize: '13px',
              letterSpacing: '0.08em',
              margin: '10px 0 0',
            }}
          >
            — 1 Corinthians 13:13
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            margin: '0 auto 24px',
          }}
        >
          <div
            style={{
              width: '65px',
              height: '1px',
              background: '#c9942a',
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
              width: '65px',
              height: '1px',
              background: '#c9942a',
            }}
          />
        </div>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            color: '#4a2d13',
            fontSize: '21px',
            letterSpacing: '0.18em',
            margin: '0 0 12px',
          }}
        >
          22 NOVEMBER 2026
        </p>

        <p
          style={{
            fontFamily: 'EB Garamond, serif',
            color: '#6b4a18',
            fontSize: '16px',
            margin: 0,
          }}
        >
          John Malelu Memorial Church
        </p>

        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          style={{
            marginTop: '42px',
            color: '#a97820',
            fontFamily: 'EB Garamond, serif',
            fontSize: '12px',
            letterSpacing: '0.18em',
          }}
        >
          SCROLL TO EXPLORE

          <div
            style={{
              fontSize: '18px',
              marginTop: '6px',
            }}
          >
            ↓
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
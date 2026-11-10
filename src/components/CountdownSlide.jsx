
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { fadeUp } from '../animations';

const weddingDate = new Date('2026-11-22T17:00:00+05:30');

function calculateTimeLeft() {
  const difference = weddingDate.getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function CountdownSlide() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <section
      style={{
        width: '100%',
        aspectRatio: '896 / 1200',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `
          radial-gradient(circle at 50% 35%, #fff9e9 0%, #f8e8c8 55%, #edcf9c 100%)
        `,
        fontFamily: "'EB Garamond', Georgia, serif",
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/countdown-floral.jpg')",
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          opacity: 0.38,
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: '340px',
          height: '340px',
          borderRadius: '50%',
          background: 'rgba(226, 169, 67, 0.20)',
          filter: 'blur(75px)',
          top: '12%',
          left: '-15%',
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(218, 158, 54, 0.20)',
          filter: 'blur(70px)',
          bottom: '10%',
          right: '-12%',
        }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        style={{
          position: 'relative',
          zIndex: 2,
          width: '82%',
          padding: '34px 20px',
          textAlign: 'center',
          background: 'rgba(255, 251, 239, 0.90)',
          border: '1.5px solid #D5A13F',
          borderRadius: '18px',
          boxShadow: '0 12px 35px rgba(133, 91, 29, 0.16)',
          boxSizing: 'border-box',
        }}
      >
        <p
          style={{
            color: '#A36B16',
            fontSize: '12px',
            letterSpacing: '4px',
            margin: '0 0 15px',
            fontWeight: 600,
          }}
        >
          COUNTING THE MOMENTS
        </p>

        <h1
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: 'clamp(38px, 8vw, 55px)',
            fontWeight: 400,
            color: '#9C651A',
            margin: '0 0 12px',
          }}
        >
          Until Forever
        </h1>

        <p
          style={{
            fontSize: '17px',
            color: '#79572E',
            margin: '0 0 28px',
            letterSpacing: '1px',
          }}
        >
          Shruti & Renhard
        </p>

        <div
          style={{
            width: '65%',
            height: '2px',
            margin: '0 auto 28px',
            background: 'linear-gradient(to right, transparent, #C58A24, transparent)',
          }}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '14px',
          }}
        >
          {items.map((item) => (
            <div
              key={item.label}
              style={{
                padding: '17px 8px',
                borderRadius: '12px',
                background: 'linear-gradient(145deg, #FFF7E4, #F6E5C1)',
                border: '1px solid #DDB45F',
                boxShadow: '0 4px 12px rgba(153, 105, 32, 0.10)',
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '36px',
                  fontWeight: 700,
                  color: '#A66C13',
                  lineHeight: 1.2,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {item.value}
              </div>

              <div
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: '13px',
                  letterSpacing: '2px',
                  color: '#79572E',
                  marginTop: '7px',
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: '25px',
            color: '#A36B16',
            margin: '28px 0 0',
          }}
        >
          A beautiful beginning awaits...
        </p>
      </motion.div>
    </section>
  );
}

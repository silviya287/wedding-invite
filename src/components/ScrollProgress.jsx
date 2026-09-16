import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        right: '9px',
        width: '3px',
        height: '85px',
        background: 'rgba(201, 148, 42, 0.18)',
        borderRadius: '10px',
        transform: 'translateY(-50%)',
        zIndex: 9999,
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          background: '#c9942a',
          borderRadius: '10px',
          transformOrigin: 'top',
          scaleY,
        }}
      />
    </div>
  )
}
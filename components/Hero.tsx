'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        padding: '64px 36px 60px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '0.5px solid var(--color-border)',
      }}
    >
      {/* Dateline row */}
      <motion.div
        {...fadeUp(0)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginTop: '20px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: 'var(--color-muted)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          luckyparekh.com
        </span>
        <div
          style={{
            flex: 1,
            height: '0.5px',
            background: 'rgba(10,10,8,0.12)',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: 'var(--color-muted)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          Toronto · Canada
        </span>
      </motion.div>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '32px' }}>
        {/* Name */}
        <div>
          <motion.div {...fadeUp(0.08)}>
            <h1
              style={{
                fontFamily: 'var(--font-barlow)',
                fontWeight: 900,
                fontSize: 'clamp(72px, 12vw, 128px)',
                lineHeight: 0.88,
                textTransform: 'uppercase',
                letterSpacing: '-1px',
                color: 'var(--color-ink)',
                display: 'block',
              }}
            >
              LUCKY
            </h1>
          </motion.div>
          <motion.div {...fadeUp(0.16)}>
            <h1
              style={{
                fontFamily: 'var(--font-barlow)',
                fontWeight: 900,
                fontSize: 'clamp(72px, 12vw, 128px)',
                lineHeight: 0.88,
                textTransform: 'uppercase',
                letterSpacing: '-1px',
                color: 'var(--color-ink)',
                display: 'block',
              }}
            >
              PAREKH.
            </h1>
          </motion.div>
        </div>

        {/* Red rule — hero only */}
        <motion.div
          {...fadeUp(0.24)}
          style={{
            width: '100%',
            height: '2px',
            background: 'var(--color-red)',
            margin: '16px 0 24px',
            borderRadius: 0,
          }}
        />

        {/* Lower section */}
        <motion.div
          {...fadeUp(0.32)}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          {/* Tagline */}
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--color-muted)',
              lineHeight: 1.85,
              maxWidth: '380px',
            }}
          >
            <span style={{ color: 'var(--color-ink)' }}>Full-stack developer</span> — security-minded,
            <br />
            backend-first, frontend-literate.
            <br />
            Building things that are fast, clean,
            <br />
            and actually work.
          </p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.4)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              alignItems: 'flex-end',
            }}
          >
            <button
              onClick={() => scrollTo('work')}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                background: 'var(--color-red)',
                color: 'var(--color-bg)',
                border: 'none',
                padding: '11px 24px',
                cursor: 'pointer',
                borderRadius: 0,
              }}
            >
              View Work
            </button>
            <button
              onClick={() => scrollTo('contact')}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                background: 'transparent',
                color: 'var(--color-ink)',
                border: '0.5px solid rgba(10,10,8,0.2)',
                padding: '11px 24px',
                cursor: 'pointer',
                borderRadius: 0,
              }}
            >
              Get In Touch
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Background watermark */}
      <div
        className="hero-watermark"
        style={{
          position: 'absolute',
          right: '-10px',
          bottom: '-20px',
          zIndex: 0,
          pointerEvents: 'none',
          fontFamily: 'var(--font-barlow)',
          fontWeight: 900,
          fontSize: '220px',
          color: 'rgba(185,28,28,0.04)',
          textTransform: 'uppercase',
          lineHeight: 1,
          letterSpacing: '-4px',
          userSelect: 'none',
        }}
      >
        Dev
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-watermark {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}

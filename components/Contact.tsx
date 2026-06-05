'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: 'var(--color-bg-alt)',
        borderBottom: '0.5px solid var(--color-border)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '64px 36px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '40px',
        }}
      >
        {/* Left block */}
        <div>
          {/* Section symbol */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '16px',
            }}
          >
            <div
              style={{
                width: '20px',
                height: '1px',
                background: 'var(--color-red)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: 'var(--color-red)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              § 04 — Contact
            </span>
          </div>

          {/* Big heading */}
          <h2
            style={{
              fontFamily: 'var(--font-barlow)',
              fontSize: '56px',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-1px',
              lineHeight: 0.9,
              marginBottom: '20px',
              color: 'var(--color-ink)',
            }}
          >
            LET&apos;S BUILD
            <br />
            <span style={{ color: 'var(--color-red)', fontStyle: 'italic' }}>SOMETHING.</span>
          </h2>

          {/* Email */}
          <a
            href="mailto:luckyparekh701@gmail.com"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--color-red)',
              letterSpacing: '0.04em',
              display: 'block',
              marginBottom: '22px',
              textDecoration: 'none',
            }}
          >
            hello@luckyparekh.com
          </a>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/LuckyParekh' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lucky-parekh-214a77354/' },
              { label: 'Instagram', href: 'https://www.instagram.com/lucky.parekh_/' },
            ].map(social => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: 'var(--color-muted)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
              >
                ↗ {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right block — availability */}
        <div style={{ textAlign: 'right' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '8px',
              marginBottom: '6px',
            }}
          >
            <div
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--color-green)',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: 'var(--color-muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Available for work
            </span>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: 'var(--color-muted)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Open to roles across Canada
          </div>
        </div>
      </motion.div>
    </section>
  )
}

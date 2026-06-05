'use client'

import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const skills = [
  {
    label: 'Core',
    pills: [
      { name: 'JavaScript', hot: true },
      { name: 'Node.js', hot: true },
      { name: 'Python', hot: true },
      { name: 'HTML/CSS', hot: false },
      { name: 'SQL', hot: false },
    ],
  },
  {
    label: 'Frameworks',
    pills: [
      { name: 'React', hot: true },
      { name: 'Next.js', hot: true },
      { name: 'Express', hot: false },
      { name: 'Tailwind', hot: false },
      { name: 'REST APIs', hot: false },
    ],
  },
  {
    label: 'Backend & DB',
    pills: [
      { name: 'MongoDB', hot: true },
      { name: 'PostgreSQL', hot: false },
      { name: 'JWT / Auth', hot: false },
      { name: 'bcrypt', hot: false },
    ],
  },
  {
    label: 'DevOps',
    pills: [
      { name: 'Docker', hot: false },
      { name: 'Linux', hot: false },
      { name: 'Git / GitHub', hot: false },
      { name: 'CI/CD', hot: false },
      { name: 'AWS', hot: false },
      { name: 'Vercel', hot: false },
    ],
  },
  {
    label: 'Security',
    pills: [
      { name: 'OWASP Top 10', hot: false },
      { name: 'Cryptography', hot: false },
      { name: 'Network Sec', hot: false },
      { name: 'Linux Hardening', hot: false },
    ],
  },
]

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '48px 36px',
        borderBottom: '0.5px solid var(--color-border)',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <SectionHeader symbol="§ 01" title="About" rightLabel="Lucky Parekh" />
      </motion.div>

      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '52px' }}>
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <p
            style={{
              fontFamily: 'var(--font-barlow)',
              fontSize: '32px',
              fontWeight: 700,
              fontStyle: 'italic',
              color: 'var(--color-ink)',
              lineHeight: 1.2,
              marginBottom: '18px',
            }}
          >
            &ldquo;Fast, secure, and built to last — that&apos;s the standard.&rdquo;
          </p>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--color-muted)',
              lineHeight: 1.9,
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <p>
              I&apos;m Lucky — a developer finishing a{' '}
              <span style={{ color: 'var(--color-ink)' }}>Diploma in Computer Programming</span>{' '}
              at Seneca Polytechnic, Toronto. I&apos;m drawn to the full stack: the logic of backend systems,
              the security of what&apos;s underneath, and the craft of a UI that doesn&apos;t get in the way.
            </p>
            <p>
              My projects lean toward authentication, security tooling, and clean architecture.
              I write code that&apos;s meant to be read, maintained, and trusted.
            </p>
            <p>
              <span style={{ color: 'var(--color-ink)' }}>Open to opportunities across Canada.</span>{' '}
              Relocating is on the table.
            </p>
          </div>
        </motion.div>

        {/* Right — skills table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          {skills.map((row) => (
            <div
              key={row.label}
              style={{
                borderTop: '0.5px solid var(--color-border)',
                padding: '14px 0',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: 'var(--color-muted)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  width: '140px',
                  flexShrink: 0,
                  paddingTop: '2px',
                }}
              >
                {row.label}
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {row.pills.map((pill) => (
                  <span
                    key={pill.name}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      padding: '3px 9px',
                      border: pill.hot
                        ? '0.5px solid var(--color-red-border)'
                        : '0.5px solid rgba(10,10,8,0.12)',
                      background: pill.hot ? 'var(--color-red-soft)' : 'rgba(10,10,8,0.03)',
                      color: pill.hot ? 'var(--color-red)' : 'var(--color-muted)',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {pill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

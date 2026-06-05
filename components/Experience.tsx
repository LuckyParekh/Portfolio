'use client'

import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

interface TimelineItem {
  title: string
  subtitle: string
  description: string
}

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            position: 'relative',
            borderLeft: '1px solid rgba(185,28,28,0.3)',
            paddingLeft: '18px',
          }}
        >
          {/* Red dot */}
          <div
            style={{
              position: 'absolute',
              left: '-4px',
              top: '5px',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--color-red)',
            }}
          />
          <div
            style={{
              fontFamily: 'var(--font-barlow)',
              fontSize: '18px',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: 'var(--color-ink)',
              letterSpacing: '0.04em',
              marginBottom: '4px',
            }}
          >
            {item.title}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: 'var(--color-red)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}
          >
            {item.subtitle}
          </div>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--color-muted)',
              lineHeight: 1.9,
            }}
          >
            {item.description}
          </p>
        </div>
      ))}
    </div>
  )
}

const education: TimelineItem[] = [
  {
    title: 'Diploma — Computer Programming',
    subtitle: 'Seneca Polytechnic · 2024 – 2026',
    description:
      'Data Structures, Web Development, Database Systems, Networking, Software Design, Operating Systems, Object-Oriented Programming.',
  },
]

const experience: TimelineItem[] = [
  {
    title: 'Self-directed Projects',
    subtitle: 'Independent · 2024 – Present',
    description:
      'Building full-stack applications end-to-end — authentication systems, security tooling, and portfolio work. All source code publicly available on GitHub.',
  },
  {
    title: 'Customer Experience Associate',
    subtitle: 'Walmart Canada · 2024 – Present',
    description:
      'High-volume retail operations, customer conflict resolution, overnight logistics coordination. Consistent reliability under pressure, strong written and verbal communication.',
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
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
        <SectionHeader symbol="§ 03" title="Education & Experience" rightLabel="Background" />
      </motion.div>

      <div
        className="exp-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '52px',
        }}
      >
        {/* Left — Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-barlow)',
              fontSize: '18px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-ink)',
              marginBottom: '20px',
            }}
          >
            Education
          </h3>
          <Timeline items={education} />
        </motion.div>

        {/* Right — Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-barlow)',
              fontSize: '18px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-ink)',
              marginBottom: '20px',
            }}
          >
            Experience
          </h3>
          <Timeline items={experience} />
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .exp-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

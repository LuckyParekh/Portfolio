'use client'

import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export interface Project {
  id: string
  number: string
  title: string
  description: string
  tags: string[]
  githubUrl: string
  caseStudy: {
    problem: string
    approach: string
    stack: string
    outcome: string
  }
}

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const handleClose = useCallback(() => {
    onClose()
    const workSection = document.getElementById('work')
    if (workSection) workSection.scrollIntoView({ behavior: 'smooth' })
  }, [onClose])

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [project])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(10,10,8,0.5)',
              backdropFilter: 'blur(4px)',
              zIndex: 100,
            }}
          />

          {/* Modal panel */}
          <div
            style={{
              position: 'fixed',
              inset: 0,
              overflowY: 'auto',
              zIndex: 101,
              padding: '40px 20px',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              style={{
                maxWidth: '800px',
                margin: '0 auto',
                background: 'var(--color-bg)',
                padding: '48px',
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Modal header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-barlow)',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--color-red)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                  }}
                >
                  {project.number}
                </span>
                <button
                  onClick={onClose}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '14px',
                    color: 'var(--color-muted)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-ink)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <h2
                id="modal-title"
                style={{
                  fontFamily: 'var(--font-barlow)',
                  fontSize: '56px',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '-1px',
                  color: 'var(--color-ink)',
                  lineHeight: 0.9,
                  marginBottom: '8px',
                }}
              >
                {project.title}
              </h2>

              {/* Red rule */}
              <div
                style={{
                  width: '100%',
                  height: '2px',
                  background: 'var(--color-red)',
                  marginBottom: '24px',
                  borderRadius: 0,
                }}
              />

              {/* Metadata row */}
              <div style={{ display: 'flex', gap: '32px', marginBottom: '36px', flexWrap: 'wrap' }}>
                {[
                  { label: 'Stack', value: project.tags.join(', ') },
                  { label: 'Type', value: 'Web Application' },
                  { label: 'Year', value: '2024' },
                  { label: 'Status', value: 'Complete' },
                ].map(item => (
                  <div key={item.label}>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        color: 'var(--color-red)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '4px',
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--color-muted)',
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Case study sections */}
              {[
                { label: 'The Problem', content: project.caseStudy.problem },
                { label: 'The Approach', content: project.caseStudy.approach },
                { label: 'The Stack', content: project.caseStudy.stack },
                { label: 'The Outcome', content: project.caseStudy.outcome },
              ].map(section => (
                <div key={section.label} style={{ marginBottom: '24px' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-barlow)',
                      fontSize: '10px',
                      fontWeight: 700,
                      color: 'var(--color-red)',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                    }}
                  >
                    {section.label}
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--color-muted)',
                      lineHeight: 1.9,
                    }}
                  >
                    {section.content}
                  </p>
                </div>
              ))}

              {/* Modal footer */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '0.5px solid var(--color-border)',
                  paddingTop: '24px',
                  marginTop: '36px',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <button
                  onClick={handleClose}
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
                  ← Back to Work
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
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
                    display: 'inline-block',
                    textDecoration: 'none',
                  }}
                >
                  ↗ View on GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

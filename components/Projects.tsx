'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import ProjectModal, { Project } from './ProjectModal'

const projects: (Project & { live: boolean })[] = [
  {
    id: 'secureauth',
    number: '§ 01',
    title: 'SECUREAUTH',
    description:
      'Full-stack authentication system — JWT access tokens, refresh token rotation, bcrypt password hashing, and protected route middleware. Built from scratch with no third-party auth libraries.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'bcrypt'],
    githubUrl: 'https://github.com/LuckyParekh/secure-auth-system',
    live: true,
    caseStudy: {
      problem:
        'Most developers reach for auth libraries without understanding what\'s underneath. SecureAuth was built to prove understanding of the full authentication flow from first principles.',
      approach:
        'Designed and implemented JWT access token + refresh token rotation, bcrypt password hashing with salt rounds, protected middleware, and secure HTTP-only cookie handling.',
      stack:
        'Node.js + Express backend, MongoDB with Mongoose, JSON Web Tokens, bcrypt. Frontend: plain HTML/CSS for the demo UI.',
      outcome:
        'A fully functional auth system deployable as a standalone service. Demonstrates understanding of token lifecycle, attack vectors (CSRF, XSS, token theft), and mitigation strategies.',
    },
  },
  {
    id: 'passaudit',
    number: '§ 02',
    title: 'PASSAUDIT',
    description:
      'Real-time password strength analyzer with entropy scoring, breach pattern detection, and character-set analysis. Cybersecurity-first UI. Zero dependencies.',
    tags: ['Vanilla JS', 'CSS', 'Entropy Analysis', 'Security'],
    githubUrl: 'https://github.com/LuckyParekh/passaudit',
    live: true,
    caseStudy: {
      problem:
        'Most password strength meters are cosmetic — they give a score without explaining why. PassAudit was built to give users real, actionable security feedback.',
      approach:
        'Entropy-based scoring algorithm, character set diversity analysis, common breach pattern detection (dictionary words, keyboard walks, repeated characters), real-time feedback as the user types.',
      stack:
        'Vanilla JavaScript — no frameworks, no dependencies. Pure CSS for the cybersecurity aesthetic. Fully client-side.',
      outcome:
        'A genuinely useful security tool that doubles as a demonstration of algorithmic thinking and zero-dependency JavaScript skills.',
    },
  },
  {
    id: 'hpys-events',
    number: '§ 03',
    title: 'HPYS EVENTS',
    description:
      'Full-stack web app for Hariprabodham Youths Sabha Scarborough to manage and archive bi-weekly gatherings. Paste a YouTube link and it auto-extracts the thumbnail, topic, and date.',
    tags: ['FastAPI', 'SQLite', 'yt-dlp', 'React', 'Vite', 'Tailwind'],
    githubUrl: 'https://github.com/LuckyParekh/hpys-events',
    live: true,
    caseStudy: {
      problem:
        'The sabha runs gatherings every two weeks, and recordings, topics, and speakers were scattered across YouTube links with no easy way to browse or search the archive.',
      approach:
        'Built an import flow where pasting a YouTube URL pulls the thumbnail, topic, and date automatically. Added a speaker (Vakta) directory with event history, a topics browser, upcoming and past event views with search, and audio download once an event has ended.',
      stack:
        'Python + FastAPI backend with SQLite and yt-dlp for YouTube metadata and audio. React + Vite + Tailwind CSS frontend. No paid APIs required.',
      outcome:
        'A searchable archive of past sabhas that the community can use to find talks by speaker or topic, built entirely on free tools.',
    },
  },
  {
    id: 'Kitchen App',
    number: '§ 04',
    title: 'PROJECT FOUR',
    description: 'An app which calculates the groceries at your home and tells you what is needed according to the weekly menu. Coming Soon!',
    tags: ['TBD'],
    githubUrl: '#',
    live: false,
    caseStudy: { problem: '', approach: '', stack: '', outcome: '' },
  },
]

function ProjectCard({
  project,
  onClick,
}: {
  project: typeof projects[number]
  onClick: () => void
}) {
  const [hovered, setHovered] = useState(false)

  if (!project.live) {
    return (
      <div
        style={{
          background: 'var(--color-bg)',
          padding: '28px 24px',
          opacity: 0.35,
          position: 'relative',
          cursor: 'default',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            color: 'var(--color-muted)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            border: '0.5px solid rgba(10,10,8,0.15)',
            padding: '3px 8px',
          }}
        >
          In Progress
        </div>
        <div
          style={{
            fontFamily: 'var(--font-barlow)',
            fontSize: '11px',
            fontWeight: 700,
            color: 'var(--color-red)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '14px',
          }}
        >
          {project.number}
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-barlow)',
            fontSize: '30px',
            fontWeight: 900,
            textTransform: 'uppercase',
            color: 'var(--color-ink)',
            lineHeight: 1,
            marginBottom: '8px',
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--color-muted)',
            lineHeight: 1.75,
          }}
        >
          {project.description}
        </p>
      </div>
    )
  }

  return (
    <motion.div
      whileHover={{ backgroundColor: '#EBE8DF' }}
      transition={{ duration: 0.15 }}
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        background: 'var(--color-bg)',
        padding: '28px 24px',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-barlow)',
          fontSize: '11px',
          fontWeight: 700,
          color: 'var(--color-red)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '14px',
        }}
      >
        {project.number}
      </div>
      <h3
        style={{
          fontFamily: 'var(--font-barlow)',
          fontSize: '30px',
          fontWeight: 900,
          textTransform: 'uppercase',
          color: 'var(--color-ink)',
          lineHeight: 1,
          marginBottom: '8px',
        }}
      >
        {project.title}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--color-muted)',
          lineHeight: 1.75,
          marginBottom: '16px',
        }}
      >
        {project.description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
        {project.tags.map(tag => (
          <span
            key={tag}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              padding: '3px 9px',
              border: '0.5px solid var(--color-red-border)',
              background: 'var(--color-red-soft)',
              color: 'var(--color-red)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: 'var(--color-muted)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Case Study
        </span>
        <span
          style={{
            fontSize: '16px',
            color: hovered ? 'var(--color-red)' : 'var(--color-muted)',
            transition: 'color 0.15s',
          }}
        >
          →
        </span>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <>
      <section
        id="work"
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
          <SectionHeader
            symbol="§ 02"
            title="Selected Work"
            rightLabel="github.com/LuckyParekh"
            rightHref="https://github.com/LuckyParekh"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '1px',
            background: 'var(--color-border)',
          }}
        >
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => project.live && setActiveProject(project)}
            />
          ))}
        </motion.div>
      </section>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

      <style jsx>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}

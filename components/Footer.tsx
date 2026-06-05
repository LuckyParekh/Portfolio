export default function Footer() {
  return (
    <footer
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 36px',
        borderTop: '0.5px solid var(--color-border)',
        flexWrap: 'wrap',
        gap: '8px',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'rgba(154,148,136,0.7)',
          letterSpacing: '0.06em',
        }}
      >
        © 2026 Lucky Parekh · luckyparekh.com
      </span>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'rgba(154,148,136,0.45)',
          letterSpacing: '0.06em',
        }}
      >
        Built with Next.js · Deployed on Vercel
      </span>
    </footer>
  )
}

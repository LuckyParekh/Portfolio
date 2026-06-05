interface SectionHeaderProps {
  symbol: string
  title: string
  rightLabel?: string
  rightHref?: string
}

export default function SectionHeader({ symbol, title, rightLabel, rightHref }: SectionHeaderProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: '16px',
        marginBottom: '40px',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-barlow)',
          fontSize: '11px',
          fontWeight: 700,
          color: 'var(--color-red)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        {symbol} — {title}
      </span>
      <div
        style={{
          flex: 1,
          height: '0.5px',
          background: 'var(--color-border)',
          alignSelf: 'center',
        }}
      />
      {rightLabel && (
        rightHref ? (
          <a
            href={rightHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-barlow)',
              fontSize: '11px',
              color: 'var(--color-muted)',
              letterSpacing: '0.1em',
              whiteSpace: 'nowrap',
              textDecoration: 'none',
            }}
          >
            {rightLabel}
          </a>
        ) : (
          <span
            style={{
              fontFamily: 'var(--font-barlow)',
              fontSize: '11px',
              color: 'var(--color-muted)',
              letterSpacing: '0.1em',
              whiteSpace: 'nowrap',
            }}
          >
            {rightLabel}
          </span>
        )
      )}
    </div>
  )
}

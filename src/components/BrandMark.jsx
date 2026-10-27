export default function BrandMark({ light = false, compact = false }) {
  return (
    <a className={`brand ${light ? 'brand--light' : ''} ${compact ? 'brand--compact' : ''}`} href="#home" aria-label="Socialify home">
      <span className="brand-symbol" aria-hidden="true">
        <svg viewBox="0 0 48 48" role="img">
          <path d="M29.7 7.2c-2.3-1.4-5-2.1-8-2.1C13 5.1 7.2 9.4 7.2 16c0 5.6 4 8.1 12.3 10.2l5.8 1.5c5.1 1.3 7.1 2.5 7.1 5.5 0 3.4-3.4 5.4-8.4 5.4-4.4 0-8.3-1.6-11.4-4.6" />
          <path d="M18.3 40.7c2.3 1.4 5 2.1 8 2.1 8.7 0 14.5-4.3 14.5-10.9 0-5.6-4-8.1-12.3-10.2l-5.8-1.5c-5.1-1.3-7.1-2.5-7.1-5.5 0-3.4 3.4-5.4 8.4-5.4 4.4 0 8.3 1.6 11.4 4.6" />
          <path className="brand-gem" d="M24 16.4 31.4 24 24 31.6 16.6 24Z" />
        </svg>
      </span>
      {!compact && <span className="brand-copy"><strong>SOCIALIFY</strong><small>YOUR GROWTH. OUR STRATEGY.</small></span>}
    </a>
  )
}
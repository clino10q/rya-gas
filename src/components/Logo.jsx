export default function Logo({ light = false }) {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
          d="M15 2C15 2 9 9 9 15.5C9 19.6 11.9 23 15 23C18.1 23 21 19.6 21 15.5C21 13.5 20 11.5 18.7 10C18.9 12 18 13.2 17 13.6C17.6 11.4 16.8 8.2 15 6.5C15.4 8.4 14.6 10.2 13.2 11.6C11.9 12.9 11.2 14.4 11.2 16C11.2 18.4 12.9 20 15 20C17.1 20 18.6 18.3 18.6 16.2C18.6 14.9 17.9 13.8 17.1 13.1"
          fill={light ? '#F2A73B' : '#F2A73B'}
        />
      </svg>
      <span className={`font-display text-2xl font-bold tracking-tight ${light ? 'text-white' : 'text-navy'}`}>
        RYA
      </span>
    </div>
  )
}

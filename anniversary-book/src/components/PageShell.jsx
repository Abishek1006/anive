export default function PageShell({ children, className = '', style }) {
  return (
    <div
      className={`scrapbook-page h-full w-full flex flex-col overflow-hidden pt-14 pb-[5.6rem] relative ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}

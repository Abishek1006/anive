import QuotePill from './QuotePill'

export default function QuoteStrip({ quotes, className = '' }) {
  return (
    <div className={`flex flex-wrap gap-2 justify-center ${className}`}>
      {quotes.map((quote, i) => (
        <QuotePill key={quote} text={quote} index={i} />
      ))}
    </div>
  )
}

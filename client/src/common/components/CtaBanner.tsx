import Button from 'react-bootstrap/Button'

type CtaBannerProps = {
  title: string
  description: string
  ctaText: string
  onCtaClick: React.ComponentProps<typeof Button>['onClick']
  icon?: string
}

export default function CtaBanner({
  title,
  description,
  ctaText,
  onCtaClick,
  icon = 'bi bi-patch-question',
}: CtaBannerProps) {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-5">
      <div>
        <h2 className="fs-1">{title}</h2>
        <p className="mb-4">{description}</p>
        <Button onClick={onCtaClick}>{ctaText}</Button>
      </div>
      <div className="text-secondary" style={{ fontSize: '8rem' }}>
        <i className={icon}></i>
      </div>
    </div>
  )
}

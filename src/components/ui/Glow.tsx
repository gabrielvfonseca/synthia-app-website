export const Glow = () => (
<div className="glow">
  <div className="glow-t" />
  <div className="glow-c" />
</div>
)

export const TopGlow = () => (
  <div className="absolute top-12 md:top-3 z-0">
    <div className="gradient-top-center-shadow" />
    <div className="gradient-top-right-shadow" />
    <div className="gradient-top-left-shadow" />
  </div>
)

export const GridGlow = () => (
  <div>
    <div className="glowGrid-r" />
    <div className="glowGrid-l" />
  </div>
  )
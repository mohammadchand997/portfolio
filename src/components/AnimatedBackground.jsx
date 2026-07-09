// Ambient backdrop: a faint grid plus two slow-drifting glow orbs.
// Kept subtle on purpose — the hero's terminal is the signature moment,
// this just gives the page atmosphere without competing for attention.
export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(142,163,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(142,163,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />
      <div className="absolute -top-32 -left-24 w-[32rem] h-[32rem] rounded-full bg-blue/20 blur-[120px] animate-float" />
      <div
        className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-cyan/10 blur-[120px] animate-float"
        style={{ animationDelay: '-3.5s' }}
      />
    </div>
  )
}

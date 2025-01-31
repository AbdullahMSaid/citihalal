interface HeroProps {
  title: string;
  subtitle: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <>
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80"
          alt="City skyline"
          className="w-full h-full object-cover opacity-90"
          style={{ backgroundColor: 'rgb(250, 247, 244)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10" />
      </div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-medium text-foreground mb-4">
          {title}
        </h1>
        <p className="text-muted-foreground">
          {subtitle}
        </p>
      </div>
    </>
  );
}
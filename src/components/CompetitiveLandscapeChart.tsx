import { Card } from "@/components/ui/card";

const CompetitiveLandscapeChart = () => {
  const competitors = [
    {
      name: "PHILI",
      x: 85,
      y: 85,
      color: "electric",
      highlight: true
    },
    {
      name: "Generic Ticketing",
      subtitle: "(Zendesk, Intercom, Salesforce)",
      x: 75,
      y: 25,
      color: "muted"
    },
    {
      name: "Generic AI Platforms",
      subtitle: "(Cognigy, Microsoft Copilotstudio)",
      x: 25,
      y: 25,
      color: "muted"
    },
    {
      name: "Mobility Software",
      subtitle: "(Fleet, Leasing, Bike Providers)",
      x: 20,
      y: 80,
      color: "muted"
    }
  ];

  return (
    <div className="relative w-full aspect-square md:aspect-[16/10] bg-gradient-to-br from-background to-muted/20 rounded-lg border-2 border-border/50 p-6 sm:p-8 md:p-12 lg:p-16">
      {/* X-Axis Label - Centered */}
      <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs md:text-base font-semibold text-foreground text-center px-2">
        Degree of reliable support automation
      </div>
      
      {/* Y-Axis Label - Hidden on mobile, visible on larger screens */}
      <div className="hidden md:block absolute -left-24 lg:-left-32 top-1/2 -translate-y-1/2 -rotate-90 text-sm lg:text-base font-semibold text-foreground whitespace-nowrap origin-center">
        Comprehension of Context in Mobility
      </div>
      
      {/* Y-Axis Label - Mobile version (top of chart) */}
      <div className="md:hidden absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs font-semibold text-foreground text-center whitespace-nowrap">
        ↑ Mobility Context Comprehension
      </div>
      
      {/* Low/High Labels at Axis Midpoints */}
      {/* Y-axis labels */}
      <div className="absolute left-1 sm:left-2 md:left-16 lg:left-20 bottom-1/2 translate-y-1/2 text-[10px] sm:text-xs md:text-sm text-muted-foreground">
        low
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-1 sm:top-2 md:top-16 lg:top-20 text-[10px] sm:text-xs md:text-sm text-muted-foreground">
        high
      </div>
      
      {/* X-axis labels */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 sm:bottom-8 md:bottom-16 lg:bottom-20 text-[10px] sm:text-xs md:text-sm text-muted-foreground">
        low
      </div>
      <div className="absolute right-1 sm:right-2 md:right-16 lg:right-20 bottom-1/2 translate-y-1/2 text-[10px] sm:text-xs md:text-sm text-muted-foreground">
        high
      </div>

      {/* Grid Lines */}
      <svg className="absolute inset-6 sm:inset-8 md:inset-12 w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] md:w-[calc(100%-6rem)] h-[calc(100%-3rem)] sm:h-[calc(100%-4rem)] md:h-[calc(100%-6rem)]" style={{ pointerEvents: 'none' }}>
        {/* Vertical center line */}
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="4 4" />
        {/* Horizontal center line */}
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="4 4" />
        {/* Outer border */}
        <rect x="0" y="0" width="100%" height="100%" fill="none" stroke="hsl(var(--border))" strokeWidth="2" />
      </svg>

      {/* Quadrant Background Overlays */}
      <div className="absolute inset-6 sm:inset-8 md:inset-12 w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] md:w-[calc(100%-6rem)] h-[calc(100%-3rem)] sm:h-[calc(100%-4rem)] md:h-[calc(100%-6rem)]">
        {/* Top-right quadrant (optimal position) - subtle highlight */}
        <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-electric/5 pointer-events-none" />
      </div>

      {/* Competitors */}
      <div className="absolute inset-6 sm:inset-8 md:inset-12 w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] md:w-[calc(100%-6rem)] h-[calc(100%-3rem)] sm:h-[calc(100%-4rem)] md:h-[calc(100%-6rem)]">
        {competitors.map((competitor, idx) => (
          <div
            key={idx}
            className="absolute group transition-all duration-300 hover:scale-110 hover:z-10"
            style={{
              left: `${competitor.x}%`,
              top: `${100 - competitor.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            {/* Dot */}
            <div
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                competitor.highlight
                  ? 'bg-electric shadow-[0_0_20px_hsl(var(--electric)/0.6)] animate-pulse'
                  : 'bg-muted-foreground/60 group-hover:bg-muted-foreground'
              }`}
            />
            
            {/* Label Card - Repositioned for mobile */}
            <Card
              className={`absolute whitespace-nowrap transition-all duration-300 px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-2 ${
                competitor.highlight
                  ? 'bg-electric text-white border-electric font-bold shadow-lg'
                  : 'bg-card border-border/50 group-hover:border-border group-hover:shadow-md'
              }`}
              style={{
                left: competitor.x > 50 ? 'auto' : '100%',
                right: competitor.x > 50 ? '100%' : 'auto',
                marginLeft: competitor.x > 50 ? '0' : '8px',
                marginRight: competitor.x > 50 ? '8px' : '0',
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            >
              <div className="text-[10px] sm:text-xs md:text-sm font-semibold">{competitor.name}</div>
              {competitor.subtitle && (
                <div className={`text-[8px] sm:text-[10px] md:text-xs hidden sm:block ${competitor.highlight ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {competitor.subtitle}
                </div>
              )}
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompetitiveLandscapeChart;

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
    <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-background to-muted/20 rounded-lg border-2 border-border/50 p-8 md:p-12">
      {/* Axis Labels */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-semibold text-foreground/80">
        High degree of reliable support automation →
      </div>
      <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-semibold text-foreground/80 whitespace-nowrap">
        High comprehensive mobility knowledge →
      </div>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
        Little comprehensive mobility knowledge
      </div>
      <div className="absolute bottom-4 left-8 text-xs text-muted-foreground">
        Low degree of reliable support automation
      </div>

      {/* Grid Lines */}
      <svg className="absolute inset-12 w-[calc(100%-6rem)] h-[calc(100%-6rem)]" style={{ pointerEvents: 'none' }}>
        {/* Vertical center line */}
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="4 4" />
        {/* Horizontal center line */}
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="4 4" />
        {/* Outer border */}
        <rect x="0" y="0" width="100%" height="100%" fill="none" stroke="hsl(var(--border))" strokeWidth="2" />
      </svg>

      {/* Quadrant Background Overlays */}
      <div className="absolute inset-12 w-[calc(100%-6rem)] h-[calc(100%-6rem)]">
        {/* Top-right quadrant (optimal position) - subtle highlight */}
        <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-electric/5 pointer-events-none" />
      </div>

      {/* Competitors */}
      <div className="absolute inset-12 w-[calc(100%-6rem)] h-[calc(100%-6rem)]">
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
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                competitor.highlight
                  ? 'bg-electric shadow-[0_0_20px_hsl(var(--electric)/0.6)] animate-pulse'
                  : 'bg-muted-foreground/60 group-hover:bg-muted-foreground'
              }`}
            />
            
            {/* Label Card */}
            <Card
              className={`absolute left-1/2 -translate-x-1/2 mt-3 px-3 py-2 whitespace-nowrap transition-all duration-300 ${
                competitor.highlight
                  ? 'bg-electric text-white border-electric font-bold shadow-lg'
                  : 'bg-card border-border/50 group-hover:border-border group-hover:shadow-md'
              }`}
            >
              <div className="text-sm font-semibold">{competitor.name}</div>
              {competitor.subtitle && (
                <div className={`text-xs ${competitor.highlight ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {competitor.subtitle}
                </div>
              )}
            </Card>

            {/* Connecting line from dot to label */}
            <div className={`absolute left-1/2 -translate-x-1/2 top-2 w-0.5 h-3 ${
              competitor.highlight ? 'bg-electric' : 'bg-border'
            }`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompetitiveLandscapeChart;

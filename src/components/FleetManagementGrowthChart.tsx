import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, ComposedChart, ReferenceDot } from "recharts";

const FleetManagementGrowthChart = () => {
  const data = [
    { year: "2021", value: 17.5 },
    { year: "2022", value: 18.6 },
    { year: "2023", value: 21.4 },
    { year: "2024", value: 23.3 },
    { year: "2025", value: 25.5 },
    { year: "2026", value: 27.8 },
    { year: "2027", value: 30.3 },
    { year: "2028", value: 33.1 },
    { year: "2029", value: 36.2 },
    { year: "2030", value: 39.5 },
    { year: "2031", value: 43.2 },
    { year: "2032", value: 47.2 },
    { year: "2033", value: 51.6 },
    { year: "2034", value: 56.4 },
  ];

  return (
    <Card className="p-8 border-2 border-electric/30 bg-card">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold mb-4">Fleet Management Market Growth</h3>
        <p className="text-lg text-muted-foreground">
          AI, electrification and telematics driving 16% CAGR through 2034
        </p>
      </div>
      
      <div className="w-full h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis 
              dataKey="year" 
              stroke="hsl(var(--foreground))"
              style={{ fontSize: '14px', fontWeight: 600 }}
            />
            <YAxis 
              stroke="hsl(var(--foreground))"
              style={{ fontSize: '14px', fontWeight: 600 }}
              label={{ 
                value: 'USD Billion', 
                angle: -90, 
                position: 'insideLeft',
                style: { fontSize: '14px', fontWeight: 600, fill: 'hsl(var(--foreground))' }
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '14px'
              }}
              formatter={(value: number) => [`$${value}B`, 'Market Size']}
            />
            <Bar 
              dataKey="value" 
              fill="hsl(var(--electric))"
              radius={[4, 4, 0, 0]}
              label={{
                position: 'top',
                style: { fontSize: '12px', fontWeight: 600, fill: 'hsl(var(--foreground))' },
                formatter: (value: number) => value.toFixed(1)
              }}
            />
            <Line 
              type="linear" 
              dataKey="value" 
              stroke="hsl(var(--foreground))" 
              strokeWidth={2}
              dot={false}
              strokeDasharray="5 5"
            />
            <ReferenceDot 
              x="2029" 
              y={36.2} 
              r={0}
              label={{ 
                value: 'CAGR\n16%', 
                position: 'top',
                fill: 'hsl(var(--foreground))',
                fontSize: 16,
                fontWeight: 'bold',
                offset: 35
              }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground font-medium">
          Fleet Management Market, 2021 – 2034 (USD Billion)
        </p>
      </div>
    </Card>
  );
};

export default FleetManagementGrowthChart;

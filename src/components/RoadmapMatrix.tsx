import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const RoadmapMatrix = () => {
  const timeline = [
    { id: "mvp", label: "MVP", date: "December 25" },
    { id: "pilot", label: "Pilot", date: "May 25" },
    { id: "market", label: "Market\nlaunch", date: "July 25" },
    { id: "further", label: "Further\ndevelopment", date: "Ongoing" },
  ];

  const buildingBlocks = [
    {
      name: "AI Phone Assistant",
      features: {
        mvp: [
          { text: "Call capturing and forwarding transcripts to smart inbox", done: true }
        ],
        pilot: [
          { text: "Automated routing to employees", done: true }
        ],
        market: [],
        further: []
      }
    },
    {
      name: "Online Receptionist (Chat or Email)",
      features: {
        mvp: [
          { text: "Not developed yet", done: false }
        ],
        pilot: [
          { text: "Chat UI for user interaction", done: true },
          { text: "Connectivity to smart inbox", done: true },
          { text: "Automated Assignment of tickets to employees", done: true }
        ],
        market: [
          { text: "Hypercare", done: true }
        ],
        further: []
      }
    },
    {
      name: "Smart in box",
      features: {
        mvp: [
          { text: "Tagging, commenting and filtering of incoming calls", done: true },
          { text: "SMS Answers", done: true }
        ],
        pilot: [
          { text: "Connectivity to first Email & CRM system, automate ticket routing, follow-up emails, and escalation processes", done: true },
          { text: "Connectivity to one relevant Fleet Management Software provider", done: true }
        ],
        market: [
          { text: "Hypercare", done: true }
        ],
        further: [
          { text: "Expansion of connectivity to further relevant partners", done: true },
          { text: "Proactive Upsell recommendations", done: true }
        ]
      }
    },
    {
      name: "CO-pilot",
      features: {
        mvp: [
          { text: "Integration of most important LLMs", done: true },
          { text: "RAG upload", done: true },
          { text: "Evals", done: true },
          { text: "Monitoring & Transparency", done: true }
        ],
        pilot: [
          { text: "Connectivity to first Email & CRM system, automate ticket routing, follow-up emails, and escalation processes", done: true },
          { text: "Connectivity to one relevant Fleet Management Software provider", done: true }
        ],
        market: [
          { text: "Hypercare", done: true }
        ],
        further: [
          { text: "Similar case handling", done: true },
          { text: "Automated workflows", done: true }
        ]
      }
    }
  ];

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[900px]">
        {/* Timeline Header */}
        <div className="grid grid-cols-[200px_repeat(4,1fr)] gap-4 mb-8">
          {/* Empty corner cell */}
          <div className="font-bold text-2xl">Road map</div>
          
          {/* Timeline milestones */}
          {timeline.map((milestone, idx) => (
            <div key={milestone.id} className="relative">
              {/* Timeline line */}
              {idx < timeline.length - 1 && (
                <div className="absolute top-10 left-1/2 w-full h-0.5 bg-border z-0" />
              )}
              
              {/* Milestone node */}
              <div className="relative z-10 flex flex-col items-center">
                <div className={`w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2 border-4 border-background shadow-lg ${
                  idx === timeline.length - 1 ? 'bg-primary' : 'bg-electric'
                }`}>
                  {milestone.label.split('\n').map((line, i) => (
                    <span key={i} className="block text-center leading-tight">{line}</span>
                  ))}
                </div>
                <p className="text-sm font-semibold">{milestone.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Matrix Grid */}
        <div className="space-y-6">
          {buildingBlocks.map((block, blockIdx) => (
            <div key={blockIdx} className="grid grid-cols-[200px_repeat(4,1fr)] gap-4">
              {/* Building block label */}
              <Card className="bg-electric/90 text-white p-6 flex items-center justify-center font-semibold text-center border-electric">
                {block.name}
              </Card>

              {/* Features for each timeline phase */}
              {timeline.map((milestone) => {
                const features = block.features[milestone.id as keyof typeof block.features];
                return (
                  <Card 
                    key={milestone.id} 
                    className={`p-4 border-border/50 min-h-[120px] ${
                      features.length === 0 ? 'bg-muted/20' : 'bg-card'
                    }`}
                  >
                    {features.length > 0 ? (
                      <ul className="space-y-2">
                        {features.map((feature, idx) => (
                          <li key={idx} className="flex gap-2 text-sm">
                            {feature.done ? (
                              <Check className="h-4 w-4 text-growth flex-shrink-0 mt-0.5" />
                            ) : (
                              <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                            )}
                            <span className={feature.done ? '' : 'text-muted-foreground'}>
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </Card>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapMatrix;

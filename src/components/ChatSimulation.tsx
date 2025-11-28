import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { User, Bot } from "lucide-react";

interface Customer {
  company: string;
  driver: string;
  vehicle: string;
  dueDate: string;
}

const customers: Customer[] = [
  { company: "TechCorp GmbH", driver: "Michael Schmidt", vehicle: "VW Golf (AB-CD-1234)", dueDate: "Dec 5" },
  { company: "Logistics Express", driver: "Sarah Weber", vehicle: "Mercedes Sprinter (EF-GH-5678)", dueDate: "Dec 8" },
  { company: "Green Energy Solutions", driver: "Thomas Müller", vehicle: "BMW 3 Series (IJ-KL-9012)", dueDate: "Dec 12" },
  { company: "Digital Services AG", driver: "Anna Fischer", vehicle: "Audi A4 (MN-OP-3456)", dueDate: "Dec 15" },
  { company: "BuildPro Construction", driver: "Peter Wagner", vehicle: "Ford Transit (QR-ST-7890)", dueDate: "Dec 18" },
  { company: "FinTech Innovations", driver: "Lisa Becker", vehicle: "Tesla Model 3 (UV-WX-2345)", dueDate: "Dec 20" },
  { company: "Healthcare Plus", driver: "Martin Schulz", vehicle: "Volkswagen Passat (YZ-AB-6789)", dueDate: "Dec 22" },
  { company: "Retail Solutions", driver: "Julia Koch", vehicle: "Opel Insignia (CD-EF-0123)", dueDate: "Dec 24" },
  { company: "Consulting Partners", driver: "Daniel Hoffmann", vehicle: "Skoda Octavia (GH-IJ-4567)", dueDate: "Dec 27" },
  { company: "Manufacturing Co.", driver: "Sandra Zimmermann", vehicle: "Renault Megane (KL-MN-8901)", dueDate: "Dec 29" }
];

const ChatSimulation = () => {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string | Customer[] }>>([]);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const steps = [
      { role: 'user' as const, content: 'Phili, can you show me all customers with drivers that have to change their tires next month?', delay: 500 },
      { role: 'assistant' as const, content: 'Analyzing tire maintenance schedules...', delay: 2000 },
      { role: 'assistant' as const, content: customers, delay: 2500 },
      { role: 'assistant' as const, content: 'Should I prepare a reminder email for all the drivers and the admins of these customers?', delay: 2000 },
    ];

    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, { role: steps[currentStep].role, content: steps[currentStep].content }]);
        setCurrentStep(currentStep + 1);
      }, steps[currentStep].delay);

      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <Card className="max-w-4xl mx-auto bg-card/95 backdrop-blur-sm border-2 border-border/50 shadow-2xl">
      <div className="p-6 space-y-4 max-h-[600px] overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            {message.role === 'assistant' && (
              <Avatar className="h-8 w-8 bg-electric/20 flex items-center justify-center">
                <Bot className="h-5 w-5 text-electric" />
              </Avatar>
            )}
            
            <div className={`max-w-[80%] ${message.role === 'user' ? 'order-first' : ''}`}>
              {typeof message.content === 'string' ? (
                <div className={`rounded-2xl px-4 py-3 ${
                  message.role === 'user' 
                    ? 'bg-electric text-white ml-auto' 
                    : 'bg-muted text-foreground'
                }`}>
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              ) : (
                <div className="bg-muted rounded-2xl px-4 py-3 space-y-2">
                  <p className="text-sm font-semibold text-foreground mb-3">
                    Found 10 customers with upcoming tire changes:
                  </p>
                  <div className="space-y-2">
                    {message.content.map((customer, idx) => (
                      <div key={idx} className="bg-background/50 rounded-lg p-3 text-xs">
                        <div className="font-semibold text-foreground">{customer.company}</div>
                        <div className="text-muted-foreground mt-1">
                          Driver: {customer.driver}
                        </div>
                        <div className="text-muted-foreground">
                          Vehicle: {customer.vehicle}
                        </div>
                        <div className="text-electric font-medium mt-1">
                          Due: {customer.dueDate}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {message.role === 'user' && (
              <Avatar className="h-8 w-8 bg-primary flex items-center justify-center">
                <User className="h-5 w-5 text-primary-foreground" />
              </Avatar>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ChatSimulation;

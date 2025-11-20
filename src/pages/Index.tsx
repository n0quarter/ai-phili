import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Zap, Shield, TrendingUp, Users } from "lucide-react";

const Index = () => {
  const features = [
    {
      title: "Phone and Chatbot",
      description: "Answers user questions based on previous conversations and contract information",
      accountManager: true,
      generalManagement: false,
    },
    {
      title: "Upload of user FAQs",
      description: "Easy integration of frequently asked questions",
      accountManager: true,
      generalManagement: false,
    },
    {
      title: "Upload or APIs to relevant contracts",
      description: "Car policies, leasing contracts, company bike contracts, travel policies",
      accountManager: true,
      generalManagement: false,
    },
    {
      title: "Copilot chat",
      description: "Get insights in customer use cases",
      accountManager: true,
      generalManagement: true,
    },
    {
      title: "Task planner",
      description: "Shows open customer issues including recommendations with next steps",
      accountManager: true,
      generalManagement: false,
    },
    {
      title: "Automated workflows",
      description: "Execute ticket handling to third parties such as making appointments with garages or ordering lost charging cards",
      accountManager: true,
      generalManagement: false,
    },
    {
      title: "Upselling recommendations",
      description: "Smart suggestions for service expansion",
      accountManager: true,
      generalManagement: true,
    },
    {
      title: "Usage and cost analysis",
      description: "Comprehensive analytics and insights",
      accountManager: false,
      generalManagement: true,
    },
    {
      title: "Full transparency on AI decisions",
      description: "Chat monitoring for each interaction",
      accountManager: false,
      generalManagement: true,
    },
    {
      title: "Continuous improvement evals",
      description: "For continuous improvement of chat quality",
      accountManager: false,
      generalManagement: true,
    },
    {
      title: "GDPR and AI act compliant",
      description: "Data handling and hosting",
      accountManager: false,
      generalManagement: true,
    },
  ];

  const founders = [
    {
      name: "Andreas Reichert",
      role: "CEO",
      experience: [
        "8 years of leadership in product & B2B SaaS marketing",
        "Led 10+ digital ventures as Venture Architect",
        "Co-founder of MOBIKO (market leader in Germany)",
        "Closed Series A Investment round with MOBIKO"
      ],
    },
    {
      name: "Viktor Shcherban",
      role: "CTO",
      experience: [
        "CTO & Software Developer since 2006",
        "Founded and co-founded 5 companies",
        "Created istat24.com powered by IP telephony",
        "Expert in RAG AI assistants and LLM-powered apps"
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-6 py-24 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-electric/20 text-electric border-electric/30 hover:bg-electric/30">
              AI-Powered Corporate Mobility
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
              Findus
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-primary-foreground/90 font-medium">
              The AI Customer Agent and Copilot for Corporate Mobility
            </p>
            <p className="text-lg md:text-xl mb-12 text-primary-foreground/80 max-w-3xl mx-auto">
              Next-generation copilot for modern mobility teams. Automate orchestration, 
              reduce overhead, and scale your mobility operations seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-electric hover:bg-electric/90 text-white text-lg px-8 shadow-lg hover:shadow-glow transition-all">
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8">
                View Investment Deck
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why <span className="text-gradient">Findus</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Where generic copilots and chatbots fall short with shallow answers and unreliable workflows, 
                Findus goes further.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="p-8 border-border/50 hover:border-electric/50 transition-all hover:shadow-lg">
                <div className="h-12 w-12 rounded-lg bg-electric/10 flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-electric" />
                </div>
                <h3 className="text-xl font-bold mb-3">Understands Context</h3>
                <p className="text-muted-foreground">
                  Deep understanding of customers, their contracts, and context for truly actionable insights.
                </p>
              </Card>

              <Card className="p-8 border-border/50 hover:border-growth/50 transition-all hover:shadow-lg">
                <div className="h-12 w-12 rounded-lg bg-growth/10 flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-growth" />
                </div>
                <h3 className="text-xl font-bold mb-3">Automates Tasks</h3>
                <p className="text-muted-foreground">
                  Execute customer support tasks automatically, turning manual processes into seamless operations.
                </p>
              </Card>

              <Card className="p-8 border-border/50 hover:border-primary-light/50 transition-all hover:shadow-lg">
                <div className="h-12 w-12 rounded-lg bg-primary-light/10 flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-primary-light" />
                </div>
                <h3 className="text-xl font-bold mb-3">Scales Effortlessly</h3>
                <p className="text-muted-foreground">
                  Handle high-volume mobility programs while cutting operational overhead to a minimum.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-destructive/10 text-destructive border-destructive/30">
                The Problem
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Customer Support is <span className="text-destructive">Broken</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Today's mobility account management is plagued by inefficiency
              </p>
            </div>

            <Card className="p-8 md:p-12 border-2 border-border/50">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Email & Call Chaos</h4>
                    <p className="text-muted-foreground">
                      "I have lost my charging card?" (Fleet management)
                      <br />
                      "My company bike is broken, what should I do now?" (HR Benefit Manager)
                      <br />
                      "What is my accommodation policy for New York?" (Travel Management)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Manual Document Lookup</h4>
                    <p className="text-muted-foreground">
                      Requests arrive in shared Outlook inboxes requiring manual evaluation of policies, lease plans, and contracts
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Multiple Touchpoints</h4>
                    <p className="text-muted-foreground">
                      Average request requires numerous back-and-forth emails and phone calls with ~2 days resolution time
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">No Knowledge Hub</h4>
                    <p className="text-muted-foreground">
                      No centralized place to access mobility knowledge for faster upselling and strategic insights
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Table */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive Feature Set
              </h2>
              <p className="text-xl text-muted-foreground">
                Supporting both Mobility Account Managers and General Management
              </p>
            </div>

            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden border border-border rounded-lg">
                  <table className="min-w-full divide-y divide-border">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold">Mobility Account Manager</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold">General Management</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-card">
                      {features.map((feature, idx) => (
                        <tr key={idx} className="hover:bg-muted/30 transition-colors">
                          <td className="px-6 py-4">
                            <div>
                              <div className="font-medium">{feature.title}</div>
                              <div className="text-sm text-muted-foreground mt-1">{feature.description}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center">
                            {feature.accountManager && (
                              <div className="inline-flex items-center justify-center w-6 h-6 rounded bg-growth/10">
                                <Check className="h-4 w-4 text-growth" />
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {feature.generalManagement && (
                              <div className="inline-flex items-center justify-center w-6 h-6 rounded bg-growth/10">
                                <Check className="h-4 w-4 text-growth" />
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
                The Team
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Experienced Founders
              </h2>
              <p className="text-xl text-muted-foreground">
                Deep industry expertise combined with technical excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {founders.map((founder, idx) => (
                <Card key={idx} className="p-8 border-border/50">
                  <div className="mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-accent mb-4 flex items-center justify-center">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                    <p className="text-electric font-semibold">{founder.role}</p>
                  </div>
                  <ul className="space-y-3">
                    {founder.experience.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <Check className="h-5 w-5 text-growth flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Massive Market Opportunity
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Corporate mobility management is a rapidly growing market with increasing complexity
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6">
                <div className="text-4xl font-bold text-gradient mb-2">€XXB</div>
                <div className="text-muted-foreground">Market Size</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-gradient mb-2">XXX%</div>
                <div className="text-muted-foreground">YoY Growth</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-gradient mb-2">XX,XXX</div>
                <div className="text-muted-foreground">Target Companies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Ready to Transform Corporate Mobility?
            </h2>
            <p className="text-xl mb-12 text-primary-foreground/80">
              Join us in revolutionizing how mobility teams operate. Let's discuss the investment opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-electric hover:bg-electric/90 text-white text-lg px-8 shadow-lg hover:shadow-glow transition-all">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8">
                Download Pitch Deck
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center text-muted-foreground">
            <p className="font-semibold text-foreground mb-2">Findus - Dolittle Mobility Manager</p>
            <p>© 2025 Findus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

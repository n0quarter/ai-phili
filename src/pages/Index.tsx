import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Zap, Shield, TrendingUp, Users } from "lucide-react";
import videoThumbnail from "@/assets/video-thumbnail.png";

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
              PHILI
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-primary-foreground/90 font-medium">
              The AI Customer Agent & Copilot for Corporate Mobility
            </p>
            <p className="text-lg md:text-xl mb-12 text-primary-foreground/80 max-w-3xl mx-auto">
              The first vertical AI layer unifying all corporate mobility benefits into intelligent automation.
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

      {/* Video Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-border/50">
              <video 
                className="w-full aspect-video object-cover"
                controls
                poster={videoThumbnail}
              >
                <source src="YOUR_VIDEO_URL_HERE" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
                Why <span className="text-gradient">PHILI</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Where generic copilots and chatbots fall short with shallow answers and unreliable workflows, 
                PHILI goes further — understanding your mobility ecosystem deeply.
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
              <Badge className="mb-4 bg-electric/10 text-electric border-electric/30">
                Problem 1
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Corporate Mobility Has Fragmented — And No One Has <span className="text-electric">Functional AI Support</span>
              </h2>
            </div>

            <Card className="p-8 md:p-12 border-2 border-border/50">
              <div className="space-y-6">
                <p className="text-lg font-medium mb-6">
                  Companies now offer a mix of cars, bikes, budgets, subscriptions, EV charging and mobility cards.
                </p>
                <p className="text-lg font-medium mb-6">
                  This creates a massive operational burden:
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                    <p className="text-muted-foreground">
                      Fleet management software providers lack AI agents that understand mobility workflows
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                    <p className="text-muted-foreground">
                      Car & bike leasing providers only understand their own (car OR bike, not both)
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                    <p className="text-muted-foreground">
                      No system unifies contract data, SLAs, policies and workflows across all mobility benefits
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                    <p className="text-muted-foreground">
                      Admins and drivers receive inconsistent answers across multiple portals
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                    <p className="text-muted-foreground">
                      Account Managers drown in manual case handling and reporting
                    </p>
                  </li>
                </ul>
                <p className="text-lg font-bold mt-8 text-center">
                  Corporate mobility is multi-stakeholder and multi-product — but AI support today is siloed and non-functional.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-growth/10 text-growth border-growth/30">
                Solution
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                PHILI — The First Vertical AI Agent & Copilot for <span className="text-electric">Corporate Mobility</span>
              </h2>
            </div>

            <Card className="p-8 md:p-12 border-2 border-border/50 mb-12">
              <p className="text-lg mb-8 font-medium">
                Phili unifies all mobility benefits (car, bike, budget, subscription, EV) into a single AI layer.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center text-electric font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3">AI Customer Support Agent</h4>
                    <p className="text-muted-foreground text-lg">
                      Handles around <span className="font-bold text-foreground">40% of driver requests autonomously</span>, understands contracts & workflows.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center text-electric font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3">Account Manager Copilot</h4>
                    <p className="text-muted-foreground text-lg">
                      Fleet insights, renewal alerts, SLA deviations, automated reporting.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center text-electric font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3">Voice AI Assistant</h4>
                    <p className="text-muted-foreground text-lg">
                      Fully automated hotline for mobility user, workshops and logistics.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-xl font-bold text-center text-gradient">
                  Phili becomes the operational brain behind Mobility Operations, reducing support cost 40–60% while improving SLAs.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
                Market Timing
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why <span className="text-gradient">Now</span>?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8 border-border/50">
                <div className="flex gap-3 mb-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg">
                    <span className="font-bold">Mobility complexity is rising dramatically</span> (mixed fleets, multi-provider ecosystems)
                  </p>
                </div>
              </Card>

              <Card className="p-8 border-border/50">
                <div className="flex gap-3 mb-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg">
                    <span className="font-bold">Support volumes +30–40% YoY</span>
                  </p>
                </div>
              </Card>

              <Card className="p-8 border-border/50">
                <div className="flex gap-3 mb-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg">
                    <span className="font-bold">Talent shortage</span> across fleet operations
                  </p>
                </div>
              </Card>

              <Card className="p-8 border-border/50">
                <div className="flex gap-3 mb-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg">
                    <span className="font-bold">AI (RAG, agents, voice assistants) is production-ready</span>
                  </p>
                </div>
              </Card>

              <Card className="p-8 border-border/50 md:col-span-2">
                <div className="flex gap-3 mb-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg">
                    <span className="font-bold">No vertical AI exists</span> for mobility documentation, SLAs or workflows, <span className="underline">only generic ticketing and agent builder</span>
                  </p>
                </div>
              </Card>

              <Card className="p-8 border-border/50 md:col-span-2">
                <div className="flex gap-3 mb-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg">
                    <span className="font-bold">First level support has very low margins</span> when ran without automation
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Product Value Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-growth/10 text-growth border-growth/30">
                Impact
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Product <span className="text-gradient">Value</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Phili delivers measurable operational impact
              </p>
            </div>

            <Card className="p-8 md:p-12 border-2 border-border/50 mb-8">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Check className="h-6 w-6 text-growth flex-shrink-0 mt-1" />
                  <p className="text-lg">
                    <span className="font-bold">50–70% automation</span> of first level driver support (damage, tires, delivery, cards, inspection)
                  </p>
                </li>
                <li className="flex gap-4">
                  <Check className="h-6 w-6 text-growth flex-shrink-0 mt-1" />
                  <p className="text-lg">
                    <span className="font-bold">20–35% productivity uplift</span> for Account Managers
                  </p>
                </li>
                <li className="flex gap-4">
                  <Check className="h-6 w-6 text-growth flex-shrink-0 mt-1" />
                  <p className="text-lg">
                    <span className="font-bold">Unified contract & policy intelligence</span> across ALL mobility benefits
                  </p>
                </li>
                <li className="flex gap-4">
                  <Check className="h-6 w-6 text-growth flex-shrink-0 mt-1" />
                  <p className="text-lg">
                    <span className="font-bold">Consistent SLA execution</span> across providers
                  </p>
                </li>
                <li className="flex gap-4">
                  <Check className="h-6 w-6 text-growth flex-shrink-0 mt-1" />
                  <p className="text-lg">
                    <span className="font-bold">Automated reporting and renewal workflows</span>
                  </p>
                </li>
                <li className="flex gap-4">
                  <Check className="h-6 w-6 text-growth flex-shrink-0 mt-1" />
                  <p className="text-lg">
                    <span className="font-bold">Full audit trails + AI voice transcripts</span>
                  </p>
                </li>
              </ul>
            </Card>

            <div className="text-center">
              <p className="text-2xl font-bold text-gradient">
                Phili removes entire layers of manual workload.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Landscape Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-electric/10 text-electric border-electric/30">
                Competitive Analysis
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Competitive <span className="text-electric">Landscape</span>
              </h2>
            </div>

            <div className="space-y-6 mb-12">
              <Card className="p-8 border-border/50">
                <h3 className="text-xl font-bold mb-4">Generic Ticketing (Zendesk, Intercom):</h3>
                <p className="text-muted-foreground text-lg">
                  Not mobility-specific, no contract understanding.
                </p>
              </Card>

              <Card className="p-8 border-border/50">
                <h3 className="text-xl font-bold mb-4">Generic AI Platforms (Cognigy, Ada, Ultimate):</h3>
                <p className="text-muted-foreground text-lg">
                  Require heavy customization, no fleet or mobility benefit logic.
                </p>
              </Card>

              <Card className="p-8 border-border/50">
                <h3 className="text-xl font-bold mb-4">Mobility Software (Fleet, Leasing, Bike Providers):</h3>
                <p className="text-muted-foreground text-lg">
                  Only solve THEIR processes (bike OR car) and offer no functioning agents yet. No unified mobility support.
                </p>
              </Card>
            </div>

            <Card className="p-8 md:p-12 border-2 border-electric/30 bg-electric/5">
              <p className="text-xl font-bold text-center">
                Phili is the first unified AI layer for ALL corporate mobility benefits (car + bike + budget + subscription).
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ICP Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
                Target Market
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ideal Customer <span className="text-gradient">Profile</span>
              </h2>
            </div>

            <Card className="p-8 md:p-12 border-2 border-border/50 mb-8">
              <h3 className="text-2xl font-bold mb-8">Ideal Customers:</h3>
              <ul className="space-y-4 mb-12">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg font-medium">
                    Fleet Outsourcing Providers (2,000–100,000 vehicles)
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg font-medium">
                    Full-Service Leasing Companies
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg font-medium">
                    Inhouse Fleets (1,000–30,000 vehicles)
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg font-medium">
                    Mobility Providers (auto, bike, budgets, subscription)
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg font-medium">
                    Mobility consulting firms
                  </p>
                </li>
              </ul>

              <div className="pt-8 border-t border-border">
                <p className="text-lg font-bold">
                  Traits: &gt;1,000 vehicles, high ticket volume, multi-stakeholder workflows, automation readiness.
                </p>
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
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Market for Fleets Only
              </h2>
              <p className="text-xl text-muted-foreground mb-4">
                Professionally Managed Vehicles in Europe: <span className="font-bold text-foreground">18M</span>
              </p>
              <ul className="text-lg text-muted-foreground space-y-2 max-w-2xl mx-auto">
                <li>• 12M externally managed fleets</li>
                <li>• 6M large inhouse fleets</li>
              </ul>
            </div>
            
            {/* TAM SAM SOM Visual Funnel */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-16">
              {/* Nested Circles */}
              <div className="relative w-[400px] h-[400px] flex items-center justify-center animate-fade-in">
                {/* TAM - Outer Circle */}
                <div className="absolute w-[380px] h-[380px] rounded-full bg-electric/20 flex items-center justify-center">
                  <div className="absolute top-1/2 -translate-y-1/2 right-12 text-2xl font-bold text-white">TAM</div>
                  
                  {/* SAM - Middle Circle */}
                  <div className="absolute w-[280px] h-[280px] rounded-full bg-electric/40 flex items-center justify-center">
                    <div className="absolute top-1/2 -translate-y-1/2 right-8 text-xl font-bold text-white">SAM</div>
                    
                    {/* SOM - Inner Circle */}
                    <div className="absolute w-[180px] h-[180px] rounded-full bg-electric flex items-center justify-center">
                      <div className="text-xl font-bold text-white">SOM</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Labels and Values */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 animate-slide-up">
                  <div className="w-3 h-3 rounded-full bg-electric/20"></div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-3xl font-bold text-gradient">€874M</span>
                      <span className="text-sm font-semibold text-electric">TAM</span>
                    </div>
                    <div className="text-base font-semibold mb-1">Total Addressable Market</div>
                    <p className="text-sm text-muted-foreground max-w-md">
                      874M€/year (4€/vehicle/month)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  <div className="w-3 h-3 rounded-full bg-electric/40"></div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-3xl font-bold text-gradient">€306M</span>
                      <span className="text-sm font-semibold text-electric">SAM</span>
                    </div>
                    <div className="text-base font-semibold mb-1">Serviceable Addressable Market</div>
                    <p className="text-sm text-muted-foreground max-w-md">
                      306M€/year (35%)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <div className="w-3 h-3 rounded-full bg-electric"></div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-3xl font-bold text-gradient">€30.6M</span>
                      <span className="text-sm font-semibold text-electric">SOM</span>
                    </div>
                    <div className="text-base font-semibold mb-1">Serviceable Obtainable Market</div>
                    <p className="text-sm text-muted-foreground max-w-md">
                      30.6M€/year (10% of SAM)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Card className="p-6 max-w-2xl mx-auto border-electric/30 bg-electric/5">
                <p className="text-lg font-bold">
                  155 customers = full SOM realization (avg. 194k€/year each)
                </p>
              </Card>
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
              Join us in revolutionizing corporate mobility. Let's discuss the investment opportunity.
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
            <p className="font-semibold text-foreground mb-2">PHILI - AI Customer Agent & Copilot for Corporate Mobility</p>
            <p>© 2025 PHILI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

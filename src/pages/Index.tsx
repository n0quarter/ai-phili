import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Zap, Shield, TrendingUp, Users } from "lucide-react";
import videoThumbnail from "@/assets/video-thumbnail.png";
import andreasReichert from "@/assets/andreas-reichert.png";
import viktorShcherban from "@/assets/viktor-shcherban.png";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
const Index = () => {
  const features = [{
    title: "Phone and Chatbot",
    description: "Answers user questions based on previous conversations and contract information",
    accountManager: true,
    generalManagement: false
  }, {
    title: "Upload of user FAQs",
    description: "Easy integration of frequently asked questions",
    accountManager: true,
    generalManagement: false
  }, {
    title: "Upload or APIs to relevant contracts",
    description: "Car policies, leasing contracts, company bike contracts, travel policies",
    accountManager: true,
    generalManagement: false
  }, {
    title: "Copilot chat",
    description: "Get insights in customer use cases",
    accountManager: true,
    generalManagement: true
  }, {
    title: "Task planner",
    description: "Shows open customer issues including recommendations with next steps",
    accountManager: true,
    generalManagement: false
  }, {
    title: "Automated workflows",
    description: "Execute ticket handling to third parties such as making appointments with garages or ordering lost charging cards",
    accountManager: true,
    generalManagement: false
  }, {
    title: "Upselling recommendations",
    description: "Smart suggestions for service expansion",
    accountManager: true,
    generalManagement: true
  }, {
    title: "Usage and cost analysis",
    description: "Comprehensive analytics and insights",
    accountManager: false,
    generalManagement: true
  }, {
    title: "Full transparency on AI decisions",
    description: "Chat monitoring for each interaction",
    accountManager: false,
    generalManagement: true
  }, {
    title: "Continuous improvement evals",
    description: "For continuous improvement of chat quality",
    accountManager: false,
    generalManagement: true
  }, {
    title: "GDPR and AI act compliant",
    description: "Data handling and hosting",
    accountManager: false,
    generalManagement: true
  }];
  const founders = [{
    name: "Andreas Reichert",
    role: "CEO",
    image: andreasReichert,
    experience: ["8 years of leadership in product & B2B SaaS marketing", "Led 10+ digital ventures as Venture Architect", "Co-founder of MOBIKO (market leader in Germany)", "Closed Series A Investment round with MOBIKO"]
  }, {
    name: "Viktor Shcherban",
    role: "CTO",
    image: viktorShcherban,
    experience: ["CTO & Software Developer since 2006", "Founded and co-founded 5 companies", "Created istat24.com powered by IP telephony", "Expert in RAG AI assistants and LLM-powered apps"]
  }];
  return <div className="min-h-screen">
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
              <video className="w-full aspect-video object-cover" controls poster={videoThumbnail}>
                <source src="YOUR_VIDEO_URL_HERE" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Management Communication Data */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-electric/20 text-electric border-electric/30">
                Industry Insights
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The Communication <span className="text-gradient">Challenge</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                50% of employees in fleet management spend most of their time on communication 
                (Flotte.de, bfp Fuhrparkmonitor, Dataforce Insights). Service providers confirm 
                that the "Driver Helpdesk" is the most demanding and least scalable part of the business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Card className="p-8 h-[400px] bg-card">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Communication", value: 50 },
                        { name: "Other Tasks", value: 50 }
                      ]}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={130}
                      fill="#8884d8"
                      dataKey="value"
                      style={{ fontSize: '16px', fontWeight: 'bold' }}
                    >
                      <Cell fill="hsl(var(--electric))" stroke="hsl(var(--background))" strokeWidth={3} />
                      <Cell fill="hsl(var(--foreground) / 0.7)" stroke="hsl(var(--background))" strokeWidth={3} />
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        fontWeight: 'bold'
                      }}
                    />
                    <Legend 
                      wrapperStyle={{ 
                        fontSize: '14px', 
                        fontWeight: 'bold' 
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </Card>

              <div className="space-y-6">
                <Card className="p-6 border-electric/30 bg-electric/5">
                  <h3 className="text-xl font-bold mb-3 text-electric">Time Distribution</h3>
                  <p className="text-muted-foreground">
                    Half of all working hours in fleet management are dedicated to communication tasks, 
                    highlighting the need for automation.
                  </p>
                </Card>
                <Card className="p-6 border-border/50">
                  <h3 className="text-xl font-bold mb-3">Scalability Issue</h3>
                  <p className="text-muted-foreground">
                    The Driver Helpdesk represents the most resource-intensive and hardest to scale 
                    aspect of fleet management operations.
                  </p>
                </Card>
              </div>
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
                      {features.map((feature, idx) => <tr key={idx} className="hover:bg-muted/30 transition-colors">
                          <td className="px-6 py-4">
                            <div>
                              <div className="font-medium">{feature.title}</div>
                              <div className="text-sm text-muted-foreground mt-1">{feature.description}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center">
                            {feature.accountManager && <div className="inline-flex items-center justify-center w-6 h-6 rounded bg-growth/10">
                                <Check className="h-4 w-4 text-growth" />
                              </div>}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {feature.generalManagement && <div className="inline-flex items-center justify-center w-6 h-6 rounded bg-growth/10">
                                <Check className="h-4 w-4 text-growth" />
                              </div>}
                          </td>
                        </tr>)}
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
              {founders.map((founder, idx) => <Card key={idx} className="p-8 border-border/50">
                  <div className="mb-6">
                    <img 
                      src={founder.image} 
                      alt={`${founder.name} - ${founder.role}`}
                      className="w-20 h-20 rounded-full object-cover mb-4"
                    />
                    <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                    <p className="text-electric font-semibold">{founder.role}</p>
                  </div>
                  <ul className="space-y-3">
                    {founder.experience.map((item, i) => <li key={i} className="flex gap-3">
                        <Check className="h-5 w-5 text-growth flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>)}
                  </ul>
                </Card>)}
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
                  <div className="absolute top-[80px] text-2xl font-bold text-white">TAM</div>
                </div>
                
                {/* SAM - Middle Circle */}
                <div className="absolute w-[280px] h-[280px] rounded-full bg-electric/40 flex items-center justify-center">
                  <div className="absolute text-2xl font-bold text-white">SAM</div>
                </div>
                
                {/* SOM - Inner Circle */}
                <div className="absolute w-[180px] h-[180px] rounded-full bg-electric flex items-center justify-center">
                  <div className="absolute text-2xl font-bold text-white">SOM</div>
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

                <div className="flex items-center gap-4 animate-slide-up" style={{
                animationDelay: '0.1s'
              }}>
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

                <div className="flex items-center gap-4 animate-slide-up" style={{
                animationDelay: '0.2s'
              }}>
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

      {/* Elements of Phili Flowchart */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Elements of <span className="text-gradient">PHILI</span> Enabling Maximum Stability and Quality
              </h2>
            </div>

            <div className="relative">
              {/* Main Flowchart Container */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left Side - Channels */}
                <div className="lg:col-span-3 space-y-4">
                  <div className="text-center mb-4">
                    <Badge className="bg-primary/20 text-primary border-primary/30">Channels</Badge>
                  </div>
                  <Card className="p-6 bg-primary/90 border-primary text-white rounded-3xl">
                    <h3 className="text-xl font-bold text-center">Chat or<br />Email</h3>
                  </Card>
                  <Card className="p-6 bg-primary/90 border-primary text-white rounded-3xl">
                    <h3 className="text-xl font-bold text-center">AI<br />phone<br />Assistant</h3>
                  </Card>
                </div>

                {/* Center - Core Elements */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="text-center mb-4">
                    <Badge className="bg-electric/20 text-electric border-electric/30">Core Elements</Badge>
                  </div>
                  {/* Top Row - Smart Inbox and Copilot */}
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="p-8 bg-electric/90 border-electric text-white">
                      <h3 className="text-2xl font-bold text-center">Smart Inbox</h3>
                    </Card>
                    <Card className="p-8 bg-electric/90 border-electric text-white">
                      <h3 className="text-2xl font-bold text-center">Copilot</h3>
                    </Card>
                  </div>

                  {/* Workflows */}
                  <Card className="p-6 bg-electric/90 border-electric text-white">
                    <h3 className="text-2xl font-bold text-center">Workflows</h3>
                  </Card>

                  {/* Mail or CRM System */}
                  <Card className="p-6 bg-electric/90 border-electric text-white">
                    <h3 className="text-2xl font-bold text-center">Mail or CRM System Integration</h3>
                  </Card>

                  {/* RAG with Policies */}
                  <Card className="p-6 bg-electric/90 border-electric text-white">
                    <h3 className="text-xl font-bold text-center mb-2">Rag uploads</h3>
                    <p className="text-sm text-center">
                      Car policies, Ammendments of work contracts, company bike policies, lease plans etc.
                    </p>
                  </Card>
                </div>

                {/* Right Side - Quality Backbone */}
                <div className="lg:col-span-3 space-y-4">
                  <div className="text-center mb-4">
                    <Badge className="bg-growth/20 text-growth border-growth/30">Quality Backbone</Badge>
                  </div>
                  <Card className="p-6 bg-growth/90 border-growth text-white">
                    <h3 className="text-xl font-bold text-center">Chat Monitor</h3>
                  </Card>
                  <Card className="p-6 bg-growth/90 border-growth text-white">
                    <h3 className="text-xl font-bold text-center">Evals</h3>
                  </Card>
                  <Card className="p-6 bg-growth/90 border-growth text-white">
                    <h3 className="text-xl font-bold text-center">FAQs</h3>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-growth/10 text-growth border-growth/30">
                Business Model
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Revenue <span className="text-gradient">Model</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 border-border/50">
                <h3 className="text-2xl font-bold mb-6">Pricing</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                    <p className="text-lg">
                      <span className="font-semibold">Support Agent (Mail or chat):</span> 4€/vehicle/month
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                    <p className="text-lg">
                      <span className="font-semibold">Support Voice AI:</span> 299€/month + 0.20€/min
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                    <p className="text-lg">
                      <span className="font-semibold">AM Copilot:</span> 30€/AM/month
                    </p>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-border/50">
                <h3 className="text-2xl font-bold mb-6">Key Metrics</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-growth mt-2"></div>
                    <p className="text-lg">
                      <span className="font-semibold">Average Revenue per Customer:</span> ~194k€/year
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-growth mt-2"></div>
                    <p className="text-lg">
                      <span className="font-semibold">Customer count for full SOM:</span> ~155
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-growth mt-2"></div>
                    <p className="text-lg">
                      <span className="font-semibold">Recurring revenue share:</span> &gt;80%
                    </p>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="p-8 border-2 border-growth/30 bg-growth/5">
              <p className="text-xl font-bold text-center">
                High-margin vertical AI SaaS.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* GTM Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-electric/10 text-electric border-electric/30">
                Go-to-Market
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                GTM <span className="text-gradient">Strategy</span>
              </h2>
            </div>

            <Card className="p-8 md:p-12 border-2 border-border/50 mb-8">
              <h3 className="text-2xl font-bold mb-6">Tier 1 Markets (fastest adoption)</h3>
              <p className="text-lg mb-8 font-medium">DE, UK, NL, BE</p>

              <h3 className="text-2xl font-bold mb-6">Tier 2</h3>
              <p className="text-lg mb-8 font-medium">FR, ES, IT, PL, Nordics</p>

              <h3 className="text-2xl font-bold mb-6">Go-to-Market Motions:</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg">
                    Partner with Fleet Outsourcing Providers & Leasing Networks
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg">
                    Land with Account Manager Copilot → Expand to Support Agent
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg">
                    Add Voice AI for hotline automation and deep operational workflows
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg">
                    Integrate with fleet CRMs, telematics, workshop networks, leasing systems
                  </p>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-lg font-bold">
                  Sales: Enterprise outbound + channel partners + mobility ecosystems.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
                Product Roadmap
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Development <span className="text-gradient">Timeline</span>
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-12 left-0 right-0 h-1 bg-border"></div>
              
              {/* Timeline Stages */}
              <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                {/* MVP - December 25 */}
                <div className="relative">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-electric flex items-center justify-center text-white font-bold text-lg mb-3 border-4 border-background shadow-lg">
                      MVP
                    </div>
                    <p className="text-sm font-semibold">December 25</p>
                  </div>
                  <Card className="p-6 border-border/50">
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <Check className="h-4 w-4 text-growth flex-shrink-0 mt-0.5" />
                        <span>Call capturing and forwarding transcripts to smart inbox</span>
                      </li>
                    </ul>
                  </Card>
                </div>

                {/* Pilot - May 25 */}
                <div className="relative">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-electric flex items-center justify-center text-white font-bold text-lg mb-3 border-4 border-background shadow-lg">
                      Pilot
                    </div>
                    <p className="text-sm font-semibold">May 25</p>
                  </div>
                  <Card className="p-6 border-border/50">
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <Check className="h-4 w-4 text-growth flex-shrink-0 mt-0.5" />
                        <span>Automated routing to employees</span>
                      </li>
                      <li className="flex gap-2 text-muted-foreground">
                        <span className="text-xs">✗</span>
                        <span>Online Receptionist (Chat or Email) - Not developed yet</span>
                      </li>
                    </ul>
                  </Card>
                </div>

                {/* Market Launch - July 25 */}
                <div className="relative">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-electric flex items-center justify-center text-white font-bold text-sm mb-3 border-4 border-background shadow-lg">
                      Market<br />launch
                    </div>
                    <p className="text-sm font-semibold">July 25</p>
                  </div>
                  <Card className="p-6 border-border/50">
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <Check className="h-4 w-4 text-growth flex-shrink-0 mt-0.5" />
                        <span>Chat UI for user interaction</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-4 w-4 text-growth flex-shrink-0 mt-0.5" />
                        <span>Connectivity to smart inbox</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-4 w-4 text-growth flex-shrink-0 mt-0.5" />
                        <span>Automated Assignment of tickets to employees</span>
                      </li>
                    </ul>
                  </Card>
                </div>

                {/* Further Development */}
                <div className="relative">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs text-center mb-3 border-4 border-background shadow-lg">
                      Further<br />dev
                    </div>
                    <p className="text-sm font-semibold">Ongoing</p>
                  </div>
                  <Card className="p-6 border-border/50">
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <Check className="h-4 w-4 text-growth flex-shrink-0 mt-0.5" />
                        <span>Similar case handling</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-4 w-4 text-growth flex-shrink-0 mt-0.5" />
                        <span>Automated workflows</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>

              {/* Additional Features */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-border/50">
                  <h3 className="text-lg font-bold mb-4">Smart In box</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <Check className="h-4 w-4 text-growth flex-shrink-0 mt-0.5" />
                      <span>Tagging, commenting and filtering of incoming calls</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-4 w-4 text-growth flex-shrink-0 mt-0.5" />
                      <span>SMS Answers</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-4 w-4 text-growth flex-shrink-0 mt-0.5" />
                      <span>Integration of most important LLMs</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 border-border/50">
                  <h3 className="text-lg font-bold mb-4">CO-pilot</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <Check className="h-4 w-4 text-growth flex-shrink-0 mt-0.5" />
                      <span>RAG upload</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-4 w-4 text-growth flex-shrink-0 mt-0.5" />
                      <span>Evals</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-4 w-4 text-growth flex-shrink-0 mt-0.5" />
                      <span>Monitoring & Transparency</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-4 w-4 text-growth flex-shrink-0 mt-0.5" />
                      <span>Connectivity to one relevant Fleet Management Software provider</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 border-border/50 md:col-span-2">
                  <h3 className="text-lg font-bold mb-4">Market Launch & Beyond</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <Check className="h-4 w-4 text-growth flex-shrink-0 mt-0.5" />
                      <span>Connectivity to first Email & mail system, automate ticket routing, follow-up emails, and escalation processes</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-4 w-4 text-growth flex-shrink-0 mt-0.5" />
                      <span>Expansion of connectivity to further relevant partners</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-4 w-4 text-growth flex-shrink-0 mt-0.5" />
                      <span>Proactive Upsell recommendations</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Year Forecast Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-growth/10 text-growth border-growth/30">
                Financial Projections
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                5-Year <span className="text-gradient">Forecast</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 border-border/50">
                <h3 className="text-2xl font-bold mb-6">Realistic Scenario</h3>
                <ul className="space-y-3">
                  <li className="flex items-baseline gap-3">
                    <span className="font-bold text-electric">Year 1:</span>
                    <span className="text-2xl font-bold">1.5M€</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="font-bold text-electric">Year 2:</span>
                    <span className="text-2xl font-bold">4.6M€</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="font-bold text-electric">Year 3:</span>
                    <span className="text-2xl font-bold">10.7M€</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="font-bold text-electric">Year 4:</span>
                    <span className="text-2xl font-bold">19.9M€</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="font-bold text-electric">Year 5:</span>
                    <span className="text-2xl font-bold">30.6M€</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-2 border-growth/30 bg-growth/5">
                <h3 className="text-2xl font-bold mb-6">Key Factors</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <Check className="h-5 w-5 text-growth flex-shrink-0 mt-1" />
                    <p className="text-lg">High recurring share</p>
                  </li>
                  <li className="flex gap-3">
                    <Check className="h-5 w-5 text-growth flex-shrink-0 mt-1" />
                    <p className="text-lg">High gross margin (&gt;75%)</p>
                  </li>
                  <li className="flex gap-3">
                    <Check className="h-5 w-5 text-growth flex-shrink-0 mt-1" />
                    <p className="text-lg">Strong upsell potential amongst the modules</p>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="p-8 md:p-12 border-2 border-border/50 mb-8">
              <h3 className="text-2xl font-bold mb-6">Vision</h3>
              <p className="text-lg mb-6">
                Phili becomes <span className="font-bold text-gradient">the operating system for Corporate Mobility</span>, 
                automating support, insights & decisions across millions of vehicles and contracts.
              </p>

              <h3 className="text-2xl font-bold mb-6 mt-8">Investment Ask</h3>
              <div className="bg-electric/10 p-6 rounded-lg mb-6">
                <p className="text-3xl font-bold text-electric mb-2">€250,000</p>
                <p className="text-lg font-semibold">Angel Investment</p>
              </div>

              <h3 className="text-xl font-bold mb-4">Use of Funds:</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg">
                    <span className="font-semibold">60% Product development</span> (RAGs, FAQ, Monitoring, Evals, Search analysis)
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg">
                    <span className="font-semibold">20% Business Development</span> in order to find fleet management software partner for post market launch phase
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg">
                    <span className="font-semibold">20% Integrations</span> (CRM & Mail)
                  </p>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-lg">
                  <span className="font-bold">Timeline:</span> To expand Voice inbox to omni channel (chat or Email), 
                  build first CRM & Mail integration, and train Copilot on Fleet specific cases
                </p>
              </div>
            </Card>
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
    </div>;
};
export default Index;
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Zap, Shield, TrendingUp, Users, Network, Headset, UserX, Bot, AlertTriangle, DollarSign } from "lucide-react";
import videoThumbnail from "@/assets/video-thumbnail.png";
import andreasReichert from "@/assets/andreas-reichert.png";
import viktorShcherban from "@/assets/viktor-shcherban.png";
import aiSupportAgent from "@/assets/ai-support-agent.png";
import accountManagerCopilot from "@/assets/account-manager-copilot.png";
import voiceAiAssistant from "@/assets/voice-ai-assistant.png";
import mobilityBenefitsBackground from "@/assets/mobility-benefits-background.jpg";
import competitiveLandscapeMap from "@/assets/competitive-landscape-map.png";
import CompetitiveLandscapeChart from "@/components/CompetitiveLandscapeChart";
import RoadmapMatrix from "@/components/RoadmapMatrix";
import FleetManagementGrowthChart from "@/components/FleetManagementGrowthChart";
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
    experience: ["8 years of leadership in product & B2B SaaS Mobility Tech", "Led 10+ digital ventures as Venture Architect", "Co-founder of MOBIKO (market leader in Germany)", "Closed Series A Investment round with MOBIKO"]
  }, {
    name: "Viktor Shcherban",
    role: "CTO",
    image: viktorShcherban,
    experience: ["CTO & Software Developer since 2006", "Founded and co-founded 5 companies (4 still operational, 1 exited to NASDAQ listed company)", "Created istat24.com powered by IP telephony", "Expert in RAG AI assistants and LLM-powered apps"]
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{
      backgroundImage: `url(${mobilityBenefitsBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/80"></div>
        
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
            <p className="text-lg md:text-xl mb-12 text-primary-foreground/80 max-w-3xl mx-auto">The first AI solution unifying all corporate mobility benefits into intelligent automation.</p>
            
          </div>
        </div>
      </section>

      {/* Fleet Management Communication Data */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-8 bg-electric/20 text-electric border-electric/30">
                Industry Insights
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                The Communication <span className="text-gradient">Challenge</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                50% of employees in fleet management spend most of their time on communication 
                (Flotte.de, bfp Fuhrparkmonitor, Dataforce Insights). 
              </p>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Service providers confirm that the "Driver Helpdesk" is the most demanding and least scalable part of the business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Card className="p-8 h-[450px] bg-card">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={[{
                    name: "Communication",
                    value: 50
                  }, {
                    name: "Other Tasks",
                    value: 50
                  }]} cx="50%" cy="45%" labelLine={false} label={({
                    name,
                    percent,
                    cx,
                    cy,
                    midAngle,
                    innerRadius,
                    outerRadius
                  }) => {
                    const RADIAN = Math.PI / 180;
                    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);
                    return <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="middle" style={{
                      fontSize: '24px',
                      fontWeight: 'bold'
                    }}>
                        {`${(percent * 100).toFixed(0)}%`}
                      </text>;
                  }} outerRadius={120} fill="#8884d8" dataKey="value">
                      <Cell fill="hsl(var(--electric))" stroke="hsl(var(--background))" strokeWidth={3} />
                      <Cell fill="hsl(var(--foreground) / 0.7)" stroke="hsl(var(--background))" strokeWidth={3} />
                    </Pie>
                    <Tooltip contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    fontSize: '16px'
                  }} />
                    <Legend wrapperStyle={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    paddingTop: '24px'
                  }} />
                  </PieChart>
                </ResponsiveContainer>
              </Card>

              <div className="space-y-8">
                <Card className="p-8 border-electric/30 bg-electric/5">
                  <h3 className="text-xl font-bold mb-4 text-electric">Time Distribution</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Half of all working hours in fleet management are dedicated to communication tasks, 
                    highlighting the need for automation.
                  </p>
                </Card>
                <Card className="p-8 border-border/50">
                  <h3 className="text-xl font-bold mb-4">Scalability Issue</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    The Driver Helpdesk represents the most resource-intensive and hardest to scale 
                    aspect of fleet management operations.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-background">
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
                  After talking to employees and management of leading 7 providers in fleet & mobility management, they described the following problems:
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                    <p className="text-muted-foreground">Fleet management software providers lack AI agents that understand mobility workflows and actually work</p>
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
      <section className="py-24 bg-muted/30">
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

            <div className="mb-8">
              <p className="text-lg text-center font-medium">
                Phili unifies all mobility benefits (car, bike, budget, subscription, EV) into a single AI layer.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 border-2 border-border/50 text-center">
                <div className="mb-6 flex justify-center">
                  <img src={aiSupportAgent} alt="AI Customer Support Agent" className="w-48 h-48 object-contain" />
                </div>
                <div className="mb-4 flex justify-center">
                  <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center text-electric font-bold text-lg">
                    1
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">AI Customer Support Agent</h4>
                <p className="text-muted-foreground text-lg">
                  Handles around <span className="font-bold text-foreground">40% of driver requests autonomously</span>, understands contracts & workflows.
                </p>
              </Card>

              <Card className="p-8 border-2 border-border/50 text-center">
                <div className="mb-6 flex justify-center">
                  <img src={accountManagerCopilot} alt="Account Manager Copilot" className="w-48 h-48 object-contain" />
                </div>
                <div className="mb-4 flex justify-center">
                  <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center text-electric font-bold text-lg">
                    2
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">Account Manager Copilot</h4>
                <p className="text-muted-foreground text-lg">Fleet & mobility benefit insights, renewal alerts, SLA deviations, automated reporting.</p>
              </Card>

              <Card className="p-8 border-2 border-border/50 text-center">
                <div className="mb-6 flex justify-center">
                  <img src={voiceAiAssistant} alt="Voice AI Assistant" className="w-48 h-48 object-contain" />
                </div>
                <div className="mb-4 flex justify-center">
                  <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center text-electric font-bold text-lg">
                    3
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">Voice AI Assistant</h4>
                <p className="text-muted-foreground text-lg">
                  Fully automated hotline for mobility user, workshops and logistics.
                </p>
              </Card>
            </div>

            <Card className="p-8 border-2 border-electric/30 bg-electric/5">
              <p className="text-xl font-bold text-center text-gradient">
                Phili becomes the operational brain behind Mobility Operations, reducing support cost 40–60% while improving SLAs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Elements of Phili Flowchart */}
      <section className="py-24 bg-background">
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
                    <h3 className="text-2xl font-bold text-center">Mail,CRM or FM System Integration</h3>
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

      {/* Product Value Section */}
      <section className="py-24 bg-muted/30">
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
                    <span className="font-bold">40-60% automation</span> of first level driver support (damage, tires, delivery, cards, inspection)
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

      {/* Video Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
                Live Demo
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                See PHILI in <span className="text-gradient">Action</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-4">The AI phone assistant and smart inbox have been developed already and are available through our Dolittle AI solution.</p>
              <p className="text-lg text-muted-foreground">
                Experience how the smart inbox and phone assistant work today (German version) in the video below →
              </p>
            </div>
            <a href="https://dolittle.ai" target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-border/50 cursor-pointer hover:border-electric/50 transition-colors">
                <video className="w-full aspect-video object-cover" controls poster={videoThumbnail}>
                <source src="YOUR_VIDEO_URL_HERE" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              </div>
            </a>
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

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <Card className="p-8 border-border/50">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-electric/10 flex items-center justify-center">
                    <Network className="w-6 h-6 text-electric" />
                  </div>
                  <div>
                    <p className="text-lg">
                      <span className="font-bold">Mobility complexity is rising dramatically</span> (mixed fleets, multi-provider ecosystems)
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border/50">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-electric/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-electric" />
                  </div>
                  <div>
                    <p className="text-lg">
                      <span className="font-bold">Support volumes +30–40% YoY</span>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border/50">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-electric/10 flex items-center justify-center">
                    <UserX className="w-6 h-6 text-electric" />
                  </div>
                  <div>
                    <p className="text-lg">
                      <span className="font-bold">Talent shortage</span> across fleet operations
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border/50">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-electric/10 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-electric" />
                  </div>
                  <div>
                    <p className="text-lg">
                      <span className="font-bold">AI (RAG, agents, voice assistants) is production-ready</span>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border/50 md:col-span-2">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-electric/10 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-electric" />
                  </div>
                  <div>
                    <p className="text-lg">
                      <span className="font-bold">No vertical AI exists</span> for mobility documentation, SLAs or workflows, <span className="underline">only generic ticketing and agent builder</span>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border/50 md:col-span-2">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-electric/10 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-electric" />
                  </div>
                  <div>
                    <p className="text-lg">
                      <span className="font-bold">First level support has very low margins</span> when ran without automation
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Fleet Management Market Growth Chart */}
            <FleetManagementGrowthChart />
          </div>
        </div>
      </section>

      {/* Competitive Landscape Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-electric/10 text-electric border-electric/30">
                Competitive Analysis
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Competitive <span className="text-electric">Landscape</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Phili uniquely combines comprehensive mobility knowledge with reliable AI automation
              </p>
            </div>

            <div className="mb-8">
              <CompetitiveLandscapeChart />
            </div>

            <Card className="p-8 md:p-12 border-2 border-electric/30 bg-electric/5">
              <p className="text-xl font-bold text-center">
                Phili is the first unified AI layer for ALL corporate mobility benefits (car + bike + budget + subscription).
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Phili Compared to Generic <span className="text-gradient">Ticketing & AI Systems</span>
              </h2>
            </div>

            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden border border-border rounded-lg">
                  <table className="min-w-full divide-y divide-border">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-bold">Capability</th>
                        <th className="px-6 py-4 text-left text-sm font-bold">Zendesk / Intercom / Salesforce</th>
                        <th className="px-6 py-4 text-left text-sm font-bold">Generic AI Agents</th>
                        <th className="px-6 py-4 text-left text-sm font-bold">Phili – Mobility AI Agent & Copilot</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-card">
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-5 font-medium">Understands mobility documents (leasing, contracts, policies)</td>
                        <td className="px-6 py-5 text-muted-foreground">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-destructive font-bold text-xl">✗</span>
                            <span>No domain understanding</span>
                          </span>
                        </td>
                        <td className="px-6 py-5 text-muted-foreground">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-destructive font-bold text-xl">✗</span>
                            <span>Needs manual training</span>
                          </span>
                        </td>
                        <td className="px-6 py-5 font-medium">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-growth font-bold text-xl">✓</span>
                            <span>Mobility-RAG trained on leasing & policies</span>
                          </span>
                        </td>
                      </tr>

                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-5 font-medium">Automates driver support (tires, damage, cards, inspection)</td>
                        <td className="px-6 py-5 text-muted-foreground">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-destructive font-bold text-xl">✗</span>
                            <span>Manual workflows</span>
                          </span>
                        </td>
                        <td className="px-6 py-5 text-muted-foreground">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-amber-500 font-bold text-xl">◆</span>
                            <span>Partial intent routing</span>
                          </span>
                        </td>
                        <td className="px-6 py-5 font-medium">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-growth font-bold text-xl">✓</span>
                            <span>40–60% automation with process graphs</span>
                          </span>
                        </td>
                      </tr>

                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-5 font-medium">SLA-based multi-client orchestration</td>
                        <td className="px-6 py-5 text-muted-foreground">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-amber-500 font-bold text-xl">◆</span>
                            <span>Basic SLAs</span>
                          </span>
                        </td>
                        <td className="px-6 py-5 text-muted-foreground">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-destructive font-bold text-xl">✗</span>
                            <span>No multi-client logic</span>
                          </span>
                        </td>
                        <td className="px-6 py-5 font-medium">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-growth font-bold text-xl">✓</span>
                            <span>True multi-brand SLA execution</span>
                          </span>
                        </td>
                      </tr>

                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-5 font-medium">Account Manager Copilot (analytics + insights)</td>
                        <td className="px-6 py-5 text-muted-foreground">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-destructive font-bold text-xl">✗</span>
                            <span>No fleet KPIs</span>
                          </span>
                        </td>
                        <td className="px-6 py-5 text-muted-foreground">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-destructive font-bold text-xl">✗</span>
                            <span>No deep data or reporting</span>
                          </span>
                        </td>
                        <td className="px-6 py-5 font-medium">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-growth font-bold text-xl">✓</span>
                            <span>Renewal alerts, insights, risk scoring</span>
                          </span>
                        </td>
                      </tr>

                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-5 font-medium">Fleet data reasoning (vehicles near leasing end, overdue tires, etc.)</td>
                        <td className="px-6 py-5 text-muted-foreground">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-destructive font-bold text-xl">✗</span>
                            <span>Not possible</span>
                          </span>
                        </td>
                        <td className="px-6 py-5 text-muted-foreground">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-destructive font-bold text-xl">✗</span>
                            <span>Requires custom engineering</span>
                          </span>
                        </td>
                        <td className="px-6 py-5 font-medium">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-growth font-bold text-xl">✓</span>
                            <span>Built-in mobility data models</span>
                          </span>
                        </td>
                      </tr>

                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-5 font-medium">Voice-based hotline automation</td>
                        <td className="px-6 py-5 text-muted-foreground">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-amber-500 font-bold text-xl">◆</span>
                            <span>Add-on only</span>
                          </span>
                        </td>
                        <td className="px-6 py-5 text-muted-foreground">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-amber-500 font-bold text-xl">◆</span>
                            <span>Unstructured</span>
                          </span>
                        </td>
                        <td className="px-6 py-5 font-medium">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-growth font-bold text-xl">✓</span>
                            <span>Integrated Phone AI (299 €/month)</span>
                          </span>
                        </td>
                      </tr>

                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-5 font-medium">Workshop, logistics & leasing coordination</td>
                        <td className="px-6 py-5 text-muted-foreground">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-destructive font-bold text-xl">✗</span>
                            <span>Manual tickets only</span>
                          </span>
                        </td>
                        <td className="px-6 py-5 text-muted-foreground">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-destructive font-bold text-xl">✗</span>
                            <span>No domain workflows</span>
                          </span>
                        </td>
                        <td className="px-6 py-5 font-medium">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-growth font-bold text-xl">✓</span>
                            <span>AI-driven workflow orchestration</span>
                          </span>
                        </td>
                      </tr>

                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-5 font-medium">Multi-stakeholder mobility ecosystem support</td>
                        <td className="px-6 py-5 text-muted-foreground">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-destructive font-bold text-xl">✗</span>
                            <span>1:1 ticketing</span>
                          </span>
                        </td>
                        <td className="px-6 py-5 text-muted-foreground">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-destructive font-bold text-xl">✗</span>
                            <span>No ecosystem understanding</span>
                          </span>
                        </td>
                        <td className="px-6 py-5 font-medium">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-growth font-bold text-xl">✓</span>
                            <span>Drivers, employers, leasing, shops, logistics</span>
                          </span>
                        </td>
                      </tr>

                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-5 font-medium">Cross-product support (auto, bike, budget, subscription)</td>
                        <td className="px-6 py-5 text-muted-foreground">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-destructive font-bold text-xl">✗</span>
                            <span>Separate systems needed</span>
                          </span>
                        </td>
                        <td className="px-6 py-5 text-muted-foreground">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-destructive font-bold text-xl">✗</span>
                            <span>No unification</span>
                          </span>
                        </td>
                        <td className="px-6 py-5 font-medium">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-growth font-bold text-xl">✓</span>
                            <span>Unified mobility support engine</span>
                          </span>
                        </td>
                      </tr>

                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-5 font-medium">ROI transparency & fleet cost analytics</td>
                        <td className="px-6 py-5 text-muted-foreground">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-destructive font-bold text-xl">✗</span>
                            <span>Not mobility-specific</span>
                          </span>
                        </td>
                        <td className="px-6 py-5 text-muted-foreground">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-destructive font-bold text-xl">✗</span>
                            <span>Not process-aware</span>
                          </span>
                        </td>
                        <td className="px-6 py-5 font-medium">
                          <span className="inline-flex items-center gap-2">
                            <span className="text-growth font-bold text-xl">✓</span>
                            <span>Full fleet KPI & cost-model analysis</span>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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
                    <p className="text-lg">Support Agent (Mail or chat): 4€/user/month<span className="font-semibold">Support Agent (Mail or chat):</span> 4€/vehicle/month
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
                    <p className="text-lg"><span className="font-semibold">Customer count for full SOM:</span> ~202
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

      {/* Market Opportunity */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Market for Fleets (EU + USA)
              </h2>
              <p className="text-xl text-muted-foreground mb-4">
                Total Commercial Vehicles: <span className="font-bold text-foreground">53M</span>
              </p>
              <p className="text-lg text-muted-foreground">
                Professionally managed fleets: <span className="font-bold text-foreground">27M</span>
              </p>
            </div>
            
            {/* TAM SAM SOM Visual Funnel */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-16">
              {/* Nested Circles with connecting lines */}
              <div className="relative w-[400px] h-[400px] flex items-center justify-center animate-fade-in">
                {/* TAM - Outer Circle */}
                <div className="absolute w-[380px] h-[380px] rounded-full bg-electric/20 flex items-center justify-center">
                </div>
                
                {/* SAM - Middle Circle */}
                <div className="absolute w-[280px] h-[280px] rounded-full bg-electric/40 flex items-center justify-center">
                </div>
                
                {/* SOM - Inner Circle */}
                <div className="absolute w-[180px] h-[180px] rounded-full bg-electric flex items-center justify-center">
                </div>

              </div>

              {/* Labels and Values */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 animate-slide-up">
                  <div className="w-3 h-3 rounded-full bg-electric/20"></div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-3xl font-bold text-gradient">€2.54B</span>
                      <span className="text-sm font-semibold text-electric">TAM</span>
                    </div>
                    <div className="text-base font-semibold mb-1">Total Addressable Market</div>
                    <p className="text-sm text-muted-foreground max-w-md">
                      53M vehicles (EU + USA)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 animate-slide-up" style={{
                animationDelay: '0.1s'
              }}>
                  <div className="w-3 h-3 rounded-full bg-electric/40"></div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-3xl font-bold text-gradient">€1.30B</span>
                      <span className="text-sm font-semibold text-electric">SAM</span>
                    </div>
                    <div className="text-base font-semibold mb-1">Serviceable Addressable Market</div>
                    <p className="text-sm text-muted-foreground max-w-md">
                      27M vehicles (professionally managed)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 animate-slide-up" style={{
                animationDelay: '0.2s'
              }}>
                  <div className="w-3 h-3 rounded-full bg-electric"></div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-3xl font-bold text-gradient">€39.3M</span>
                      <span className="text-sm font-semibold text-electric">SOM</span>
                    </div>
                    <div className="text-base font-semibold mb-1">Serviceable Obtainable Market</div>
                    <p className="text-sm text-muted-foreground max-w-md">
                      810,000 vehicles (3% market penetration)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Card className="p-6 max-w-2xl mx-auto border-electric/30 bg-electric/5">
                <p className="text-lg font-bold">Target: 810,000 vehicles/user across EU and USA markets</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Year Forecast Section */}
      <section className="py-24 bg-muted/30">
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
                    <span className="text-2xl font-bold">1.9M€</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="font-bold text-electric">Year 2:</span>
                    <span className="text-2xl font-bold">5.9M€</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="font-bold text-electric">Year 3:</span>
                    <span className="text-2xl font-bold">13.7M€</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="font-bold text-electric">Year 4:</span>
                    <span className="text-2xl font-bold">25.6M€</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="font-bold text-electric">Year 5:</span>
                    <span className="text-2xl font-bold">39.3M€</span>
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
              <p className="text-lg mb-8 font-medium">🇩🇪 Germany, 🇫🇷 France</p>

              <h3 className="text-2xl font-bold mb-6">Tier 2</h3>
              <p className="text-lg mb-8 font-medium">🇺🇸 US</p>

              <h3 className="text-2xl font-bold mb-6">Go-to-Market Motions:</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg">Partner with Fleet Management Software providers & Leasing Networks</p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg">Land with Support Agent → Expand to Account Manager Copilot or the other way around</p>
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
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
                Product Roadmap
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Development <span className="text-gradient">Timeline</span>
              </h2>
            </div>

            <RoadmapMatrix />
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 bg-background">
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
                    <img src={founder.image} alt={`${founder.name} - ${founder.role}`} className="w-32 h-32 rounded-full object-contain bg-muted/30 mb-4" />
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

      {/* Vision Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
                Our Vision
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Vision</span>
              </h2>
            </div>

            <Card className="p-8 md:p-12 border-2 border-border/50 mb-8">
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
                  <span className="font-bold">Next moves:</span> To expand Voice inbox to omni channel (chat or Email), 
                  build first CRM & Mail integration, and train Copilot on Fleet specific cases
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Ready to Transform Corporate Mobility?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/80">
              Join us in revolutionizing corporate mobility. Let's discuss the investment opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-electric hover:bg-electric/90 text-white text-lg px-8 shadow-lg hover:shadow-glow transition-all" asChild>
                <a href="https://meetings.hubspot.com/areichert/dolittleai" target="_blank" rel="noopener noreferrer">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
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
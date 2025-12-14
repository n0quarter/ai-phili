import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Zap, Shield, TrendingUp, Users, Network, Headset, UserX, Bot, AlertTriangle, DollarSign, FileSearch, Mail, Phone, RefreshCw, ChevronLeft, ChevronRight } from "lucide-react";
import ChatSimulation from "@/components/ChatSimulation";
import videoThumbnail from "@/assets/video-thumbnail.png";
import andreasReichert from "@/assets/andreas-reichert.png";
import viktorShcherban from "@/assets/viktor-shcherban.png";
import aiSupportAgent from "@/assets/ai-support-agent.png";
import accountManagerCopilot from "@/assets/account-manager-copilot.png";
import voiceAiAssistant from "@/assets/voice-ai-assistant.png";
import mobilityBenefitsBackground from "@/assets/mobility-benefits-background.jpg";
import competitiveLandscapeMap from "@/assets/competitive-landscape-map.png";
import processStep1 from "@/assets/process-step-1-documents.jpg";
import processStep2 from "@/assets/process-step-2-notify.jpg";
import processStep3 from "@/assets/process-step-3-inquiries.jpg";
import processStep4 from "@/assets/process-step-4-repeat.jpg";
import CompetitiveLandscapeChart from "@/components/CompetitiveLandscapeChart";
import RoadmapMatrix from "@/components/RoadmapMatrix";
import FleetManagementGrowthChart from "@/components/FleetManagementGrowthChart";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const marketData = [
    { name: "Fleet Management Software", value: 35, color: "#9b87f5" },
    { name: "Mobility Benefits", value: 25, color: "#7E69AB" },
    { name: "Traditional Leasing", value: 40, color: "#6E59A5" },
  ];

  const testimonials = [
    {
      quote: "The AI support has transformed how we handle customer inquiries. Response times are down 80%.",
      author: "Sarah Chen",
      role: "Head of Customer Success",
      company: "TechFleet Solutions"
    },
    {
      quote: "Integration was seamless and the ROI was visible within the first month.",
      author: "Michael Torres",
      role: "Operations Director",
      company: "Global Mobility Corp"
    },
    {
      quote: "Our team can now focus on strategic initiatives instead of repetitive support tasks.",
      author: "Emma Schmidt",
      role: "VP of Operations",
      company: "FleetPro International"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-electric to-purple-600 rounded-lg"></div>
              <span className="text-xl font-bold bg-gradient-to-r from-electric to-purple-600 bg-clip-text text-transparent">
                Lovable
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-electric transition-colors">Features</a>
              <a href="#solutions" className="text-gray-600 hover:text-electric transition-colors">Solutions</a>
              <a href="#pricing" className="text-gray-600 hover:text-electric transition-colors">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-electric transition-colors">About</a>
              <Button className="bg-electric hover:bg-electric/90">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8 animate-fade-in">
            <Badge className="bg-electric/10 text-electric border-electric/20 hover:bg-electric/20">
              🚀 Revolutionizing Fleet Management Support
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              AI-Powered Support for
              <span className="block bg-gradient-to-r from-electric to-purple-600 bg-clip-text text-transparent">
                Fleet Management
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your customer support with intelligent AI agents that handle inquiries 24/7, 
              reduce costs by 70%, and delight your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-electric hover:bg-electric/90 text-lg px-8">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center justify-center gap-8 pt-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-electric" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-electric" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-electric" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
            <img 
              src={videoThumbnail} 
              alt="Product Demo" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-l-[20px] border-l-electric border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "70%", label: "Cost Reduction" },
              { value: "24/7", label: "Availability" },
              { value: "80%", label: "Faster Response" },
              { value: "95%", label: "Customer Satisfaction" },
            ].map((stat, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold bg-gradient-to-r from-electric to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="bg-red-100 text-red-700 border-red-200 mb-4">
              The Challenge
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Fleet Management Support is Broken
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional support models can't keep up with the demands of modern fleet management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: UserX,
                title: "High Support Costs",
                description: "Maintaining 24/7 human support teams is expensive and unsustainable",
                color: "text-red-600"
              },
              {
                icon: AlertTriangle,
                title: "Slow Response Times",
                description: "Customers wait hours or days for answers to simple questions",
                color: "text-orange-600"
              },
              {
                icon: TrendingUp,
                title: "Scaling Challenges",
                description: "Growing customer base overwhelms support capacity",
                color: "text-red-600"
              },
              {
                icon: DollarSign,
                title: "Revenue Leakage",
                description: "Poor support leads to customer churn and lost opportunities",
                color: "text-orange-600"
              },
              {
                icon: FileSearch,
                title: "Inconsistent Answers",
                description: "Different agents provide different information to customers",
                color: "text-red-600"
              },
              {
                icon: RefreshCw,
                title: "Repetitive Inquiries",
                description: "Support teams waste time on the same questions over and over",
                color: "text-orange-600"
              }
            ].map((problem, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white">
                <problem.icon className={`h-12 w-12 ${problem.color} mb-4`} />
                <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solutions" className="py-20 px-6 bg-gradient-to-br from-electric/5 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="bg-electric/10 text-electric border-electric/20 mb-4">
              Our Solution
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Three AI Agents, Infinite Possibilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized AI agents working together to transform your customer support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                image: aiSupportAgent,
                title: "AI Support Agent",
                description: "Handles customer inquiries instantly via chat, email, and web",
                features: ["24/7 Availability", "Instant Responses", "Multi-language Support"]
              },
              {
                image: accountManagerCopilot,
                title: "Account Manager Copilot",
                description: "Empowers your team with AI-assisted customer management",
                features: ["Smart Insights", "Automated Tasks", "Proactive Alerts"]
              },
              {
                image: voiceAiAssistant,
                title: "Voice AI Assistant",
                description: "Natural phone conversations that feel human",
                features: ["Natural Speech", "Call Routing", "Sentiment Analysis"]
              }
            ].map((agent, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow bg-white">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={agent.image} 
                    alt={agent.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{agent.title}</h3>
                  <p className="text-gray-600 mb-4">{agent.description}</p>
                  <ul className="space-y-2">
                    {agent.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-electric flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          {/* Interactive Demo */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">See It In Action</h3>
              <p className="text-gray-600">Try our AI Support Agent with a real fleet management scenario</p>
            </div>
            <ChatSimulation />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="bg-electric/10 text-electric border-electric/20 mb-4">
              Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need to Succeed
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Respond to customer inquiries in seconds, not hours"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-level encryption and compliance with GDPR, SOC 2"
              },
              {
                icon: Network,
                title: "Seamless Integration",
                description: "Connect with your existing CRM, helpdesk, and tools"
              },
              {
                icon: TrendingUp,
                title: "Smart Analytics",
                description: "Deep insights into customer behavior and support metrics"
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "AI and humans working together for best results"
              },
              {
                icon: Headset,
                title: "Multi-Channel",
                description: "Support via chat, email, phone, and social media"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 text-electric mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="bg-electric/10 text-electric border-electric/20 mb-4">
              Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started in minutes, not months
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                image: processStep1,
                step: "1",
                title: "Upload Documents",
                description: "Share your fleet management documentation and FAQs"
              },
              {
                image: processStep2,
                step: "2",
                title: "AI Training",
                description: "Our AI learns your business in minutes"
              },
              {
                image: processStep3,
                step: "3",
                title: "Handle Inquiries",
                description: "AI agents start supporting your customers"
              },
              {
                image: processStep4,
                step: "4",
                title: "Continuous Improvement",
                description: "System learns and improves from every interaction"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-electric text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </Card>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-electric" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="bg-electric/10 text-electric border-electric/20 mb-4">
              Market Opportunity
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              A Growing Market Ready for Disruption
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6">Fleet Management Software Market</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-electric flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">$34.6B Market Size (2024)</p>
                    <p className="text-gray-600">Growing at 15.5% CAGR through 2030</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-electric flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">500K+ Fleet Operators Globally</p>
                    <p className="text-gray-600">All need better customer support solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="h-6 w-6 text-electric flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">$2.8B Support Cost Opportunity</p>
                    <p className="text-gray-600">Potential savings from AI automation</p>
                  </div>
                </div>
              </div>
              <FleetManagementGrowthChart />
            </div>
            <div>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={marketData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {marketData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
              <p className="text-center text-gray-600 mt-4">
                Market Distribution by Segment
              </p>
            </div>
          </div>

          {/* Competitive Landscape */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Competitive Landscape</h3>
            <CompetitiveLandscapeChart />
          </div>

          {/* Mobility Benefits Background */}
          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={mobilityBenefitsBackground} 
                  alt="Mobility Benefits"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-6">Why Mobility Benefits Matter</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-electric flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Tax Advantages</p>
                      <p className="text-gray-600">Significant savings for employers and employees</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-electric flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Employee Satisfaction</p>
                      <p className="text-gray-600">Attractive benefit that improves retention</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-electric flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Sustainability</p>
                      <p className="text-gray-600">Promotes eco-friendly transportation options</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-electric flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Flexibility</p>
                      <p className="text-gray-600">Employees choose what works best for them</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-electric/5 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="bg-electric/10 text-electric border-electric/20 mb-4">
              Testimonials
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Loved by Fleet Managers
            </h2>
          </div>

          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="p-8 md:p-12 bg-white">
                    <div className="text-center space-y-6">
                      <div className="text-4xl text-electric">"</div>
                      <p className="text-xl md:text-2xl text-gray-700 italic">
                        {testimonial.quote}
                      </p>
                      <div>
                        <p className="font-semibold text-lg">{testimonial.author}</p>
                        <p className="text-gray-600">{testimonial.role}</p>
                        <p className="text-electric font-medium">{testimonial.company}</p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="bg-electric/10 text-electric border-electric/20 mb-4">
              Pricing
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$499",
                period: "/month",
                description: "Perfect for small fleets",
                features: [
                  "Up to 1,000 conversations/month",
                  "AI Support Agent",
                  "Email & Chat support",
                  "Basic analytics",
                  "14-day free trial"
                ]
              },
              {
                name: "Professional",
                price: "$1,499",
                period: "/month",
                description: "For growing businesses",
                features: [
                  "Up to 5,000 conversations/month",
                  "All AI Agents",
                  "Phone support",
                  "Advanced analytics",
                  "Custom integrations",
                  "Priority support"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "For large organizations",
                features: [
                  "Unlimited conversations",
                  "All AI Agents",
                  "Dedicated account manager",
                  "Custom AI training",
                  "SLA guarantees",
                  "White-label options"
                ]
              }
            ].map((plan, index) => (
              <Card 
                key={index} 
                className={`p-8 relative ${plan.popular ? 'border-2 border-electric shadow-xl scale-105' : ''}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-electric text-white">
                    Most Popular
                  </Badge>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-electric flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-electric hover:bg-electric/90' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="bg-electric/10 text-electric border-electric/20 mb-4">
              Product Roadmap
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Vision for the Future
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're constantly innovating to bring you the best AI-powered support solutions
            </p>
          </div>

          <RoadmapMatrix />

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Q1 2025 - Foundation</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg">
                    <span className="font-semibold">Launch MVP</span> with core AI Support Agent functionality
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg">
                    <span className="font-semibold">Onboard pilot customers</span> from fleet management sector
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg">
                    <span className="font-semibold">Integrate with top 3 CRM platforms</span> (Salesforce, HubSpot, Zoho)
                  </p>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Q2 2025 - Expansion</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg">
                    <span className="font-semibold">Add Voice AI Assistant</span> for phone support
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg">
                    <span className="font-semibold">Multi-language support</span> (German, French, Spanish)
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg">
                    <span className="font-semibold">Advanced analytics dashboard</span> with predictive insights
                  </p>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Q3 2025 - Intelligence</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg">
                    <span className="font-semibold">Launch Account Manager Copilot</span> for proactive support
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg">
                    <span className="font-semibold">Sentiment analysis</span> and customer health scoring
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg">
                    <span className="font-semibold">API marketplace</span> for third-party integrations
                  </p>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Q4 2025 - Scale</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg">
                    <span className="font-semibold">Enterprise features</span> (SSO, advanced security, compliance)
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg">
                    <span className="font-semibold">White-label solution</span> for fleet management platforms
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-electric mt-2"></div>
                  <p className="text-lg">
                    <span className="font-semibold">20% Business Development</span> Start with our pilot customer and find fleet management software partner for post market launch phase
                  </p>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="bg-electric/10 text-electric border-electric/20 mb-4">
              Our Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet the Founders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced entrepreneurs with a passion for AI and customer success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={andreasReichert} 
                  alt="Andreas Reichert"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Andreas Reichert</h3>
                <p className="text-electric font-semibold mb-4">Co-Founder & CEO</p>
                <p className="text-gray-600 mb-4">
                  Former VP of Product at a leading SaaS company. 15+ years building customer-centric solutions. 
                  Passionate about using AI to transform customer support.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-electric hover:text-electric/80">
                    <Mail className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-electric hover:text-electric/80">
                    <Network className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={viktorShcherban} 
                  alt="Viktor Shcherban"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Viktor Shcherban</h3>
                <p className="text-electric font-semibold mb-4">Co-Founder & CTO</p>
                <p className="text-gray-600 mb-4">
                  AI researcher and engineer with PhD in Machine Learning. Previously led AI teams at tech giants. 
                  Expert in natural language processing and conversational AI.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-electric hover:text-electric/80">
                    <Mail className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-electric hover:text-electric/80">
                    <Network className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-electric to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Customer Support?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of fleet managers who are already saving time and delighting customers with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-electric hover:bg-gray-100 text-lg px-8">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
              Schedule Demo
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-75">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-electric to-purple-600 rounded-lg"></div>
                <span className="text-xl font-bold text-white">Lovable</span>
              </div>
              <p className="text-sm">
                AI-powered customer support for the fleet management industry
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-electric transition-colors">Features</a></li>
                <li><a href="#solutions" className="hover:text-electric transition-colors">Solutions</a></li>
                <li><a href="#pricing" className="hover:text-electric transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-electric transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-electric transition-colors">About</a></li>
                <li><a href="#" className="hover:text-electric transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-electric transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-electric transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-electric transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-electric transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-electric transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2024 Lovable. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-electric transition-colors">
                <Network className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-electric transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-electric transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

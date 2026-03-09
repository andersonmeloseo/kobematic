import { motion, AnimatePresence, useInView, animate } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Database,
  FileText,
  LayoutDashboard,
  LineChart,
  MessageSquare,
  Rocket,
  Link,
  LifeBuoy,
  Settings,
  ShieldCheck,
  AlertTriangle,
  BrainCircuit,
  Calendar,
  ClipboardList,
  FileSpreadsheet,
  MessageCircle,
  Search,
  StickyNote,
  Users,
  Zap,
  TrendingUp,
  Target,
  Filter,
  X,
  Star,
  Crown,
  Building2,
  Briefcase,
  GraduationCap,
  Scale,
  Stethoscope,
  Home,
  Sun,
  Sparkles,
  Wrench,
  Utensils,
} from "lucide-react";
import { useState, type FC, useEffect, useRef, type ReactNode } from "react";
import { cn } from "./lib/utils";
import { GlowingEffect } from "./components/ui/glowing-effect";
import { PointerHighlight } from "./components/ui/pointer-highlight";
import { LiquidButton } from "./components/ui/liquid-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-purple-200 selection:text-purple-900">
      <TopBar />
      <Hero />
      <HeroCTA />
      <NextLevel />
      <VSLSection />
      <HowItWorks />
      <Solutions />
      <Results />
      <Implementation />
      <TargetAudience />
      <Plans />
      <Provocation />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <div className="bg-[#cbf51c] py-2.5 relative z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <p className="text-xs font-bold text-black tracking-wider uppercase flex items-center justify-center gap-2">
          <Zap className="h-3 w-3" />
          Sistema completo de CRM, Vendas e Marketing pronto para operar
        </p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-32 lg:pb-40 bg-slate-950">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: 'url("https://github.com/andersonmeloseo/converter-img/blob/main/fundo.jpg?raw=true")',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Overlay Mask */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0A0118]/80 via-[#0A0118]/90 to-slate-950" />

      {/* Animated Spotlight Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none mix-blend-screen">
        {/* Primary Spotlight */}
        <motion.div
          animate={{
            x: ["-10%", "10%", "-10%"],
            y: ["-5%", "5%", "-5%"],
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[20%] left-[10%] w-[70vw] h-[70vw] bg-[radial-gradient(circle,rgba(147,51,234,0.4)_0%,transparent_60%)] blur-[100px]"
        />
        
        {/* Secondary Spotlight */}
        <motion.div
           animate={{
            x: ["10%", "-10%", "10%"],
            y: ["5%", "-5%", "5%"],
            opacity: [0.3, 0.5, 0.3],
            scale: [1.1, 1, 1.1],
           }}
           transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
           }}
           className="absolute top-[0%] right-[0%] w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(124,58,237,0.3)_0%,transparent_60%)] blur-[100px]"
        />

        {/* Moving Beam Effect */}
        <motion.div
          animate={{
            rotate: [0, 15, 0, -15, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-[50%] left-[50%] -translate-x-1/2 w-[100vw] h-[100vw] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(168,85,247,0.2)_20deg,transparent_40deg)] blur-[80px]"
        />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-3 mb-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300 ring-1 ring-inset ring-purple-500/20 backdrop-blur-sm">
                <Zap className="h-3 w-3 text-purple-400" />
                IMPLEMENTAÇÃO COMPLETA EM ATÉ 24 HORAS
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl mb-8 leading-tight max-w-4xl drop-shadow-xl"
            >
              Você já <span className="text-purple-400">vende bem</span>, mas sente que precisa se <span className="text-purple-400">organizar</span> para <span className="text-purple-400">crescer</span>?
            </motion.h1>
            
            {/* Subhead */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl leading-relaxed text-slate-300 mb-10 max-w-3xl mx-auto space-y-6"
            >
              <p>
                Clientes chegam, mas acabam espalhados entre <strong className="text-white font-semibold">WhatsApp, planilhas e anotações</strong>, o que trava decisões e faz negociações esfriarem.
              </p>
              <div className="pt-2 flex justify-center">
                <PointerHighlight
                  rectangleClassName="border-purple-500"
                  pointerClassName="text-purple-500"
                >
                  <span className="text-white font-bold px-4 py-2 text-sm sm:text-base tracking-wide inline-block leading-none">
                    NÓS CONSEGUIMOS RESOLVER ESSE SEU PROBLEMA
                  </span>
                </PointerHighlight>
              </div>
            </motion.div>

            {/* Trust Elements (Safety) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mb-12 text-sm text-white border-y border-white/5 py-6 px-12 w-fit bg-white/5 backdrop-blur-sm rounded-xl"
            >
              <div className="flex flex-col gap-3 items-start w-fit mx-auto">
                {[
                  "Todos os clientes e negociações em um só lugar",
                  "Pipeline mostrando exatamente o que vai fechar",
                  "Follow-ups automáticos para não perder oportunidades",
                  "Base organizada para crescer com previsibilidade",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-left">
                    <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center gap-4 mb-8 w-full"
            >
              <LiquidButton href="#" className="w-full sm:w-auto text-center">
                AGENDAR DEMONSTRAÇÃO ESTRATÉGICA
              </LiquidButton>
              <p className="text-sm text-slate-400">
                Veja como funcionaria na sua empresa antes de decidir
              </p>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col items-center gap-3 mt-4"
            >
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&q=80&crop=faces&fit=crop",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&q=80&crop=faces&fit=crop",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&q=80&crop=faces&fit=crop",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&q=80&crop=faces&fit=crop",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&q=80&crop=faces&fit=crop",
                ].map((src, i) => (
                  <Avatar key={i} className="border-2 border-[#1e003e] w-10 h-10">
                    <AvatarImage src={src} alt={`User ${i + 1}`} />
                    <AvatarFallback>U{i + 1}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm font-medium">
                  <span className="text-white font-bold">+ de 200</span> empresas atendidas
                </p>
              </div>
            </motion.div>
          </div>
      </div>
    </section>
  );
}

function HeroCTA() {
  return (
    <section className="relative bg-slate-950 py-12 sm:py-20 border-t border-white/5 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,theme(colors.purple.900/0.2),transparent)]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-400 ring-1 ring-inset ring-green-500/20 mb-8"
          >
            <Zap className="h-4 w-4" />
            Sua máquina implementada em 24 horas
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl leading-relaxed text-slate-300 mb-12 font-medium"
          >
            Implantamos em até 24 horas um sistema que centraliza <strong className="text-white font-semibold">atendimento, vendas e marketing</strong> em um único painel, dando <strong className="text-white font-semibold">visão clara da operação</strong>, processos definidos e controle para crescer com segurança.
          </motion.p>
          
          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 mb-12 text-left max-w-3xl w-full"
          >
            {[
              "Todos os clientes e negociações em um só lugar",
              "Pipeline mostrando exatamente o que vai fechar",
              "Follow-ups automáticos para não perder oportunidades",
              "Base organizada para crescer com previsibilidade",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-none rounded-full bg-purple-500/10 p-1">
                  <CheckCircle2 className="h-5 w-5 text-purple-400" />
                </div>
                <span className="text-slate-200 text-lg font-medium">{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <LiquidButton href="#" className="w-full sm:w-auto text-center">
              Agendar Sessão de Demonstração
            </LiquidButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function NextLevel() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-600 mb-6"
          >
            O PRÓXIMO NÍVEL DA EMPRESA
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6"
          >
            Sua empresa aprendeu a vender. <br />
            Agora precisa aprender a operar.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 text-lg leading-8 text-slate-600"
          >
            <p className="font-medium text-slate-900">
              Crescer traz um problema novo que ninguém ensina a resolver.
            </p>
            <p>
              Mais clientes. Mais conversas. Mais negociações. Mais tarefas acontecendo ao mesmo tempo.
            </p>
            <p>
              Sem uma estrutura clara, tudo começa a depender de memória, esforço e improviso.
              A empresa continua vendendo, mas perde eficiência, velocidade e controle.
            </p>
            <p className="font-semibold text-purple-900">
              Não por falta de demanda. Por falta de organização para sustentar o crescimento.
            </p>
          </motion.div>
        </div>

        {/* Contrast Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {/* Left: Chaos */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-slate-50 p-8 border border-slate-200 relative overflow-hidden"
          >
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={3}
            />
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-slate-500 mb-6 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Quando a operação não acompanha
              </h3>
              <ul className="space-y-4">
                {[
                  { text: "Informações espalhadas", icon: FileText },
                  { text: "Equipe sem visão do todo", icon: Users },
                  { text: "Follow-ups esquecidos", icon: MessageSquare },
                  { text: "Decisões baseadas em suposição", icon: AlertTriangle },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-500 bg-white p-3 rounded-lg border border-slate-100 shadow-sm relative overflow-hidden">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={3}
                    />
                    <div className="relative z-10 flex items-center gap-3 w-full">
                      <item.icon className="h-5 w-5 flex-none opacity-50" />
                      <span>{item.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Order */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-purple-50 p-8 border border-purple-100 relative overflow-hidden"
          >
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={3}
            />
            <div className="relative z-10">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-purple-200 rounded-full blur-2xl opacity-50"></div>
              <h3 className="text-lg font-semibold text-purple-900 mb-6 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-purple-600" />
                Quando existe um sistema organizando
              </h3>
              <ul className="space-y-4 relative z-10">
                {[
                  { text: "Clientes centralizados", icon: Users },
                  { text: "Pipeline visível", icon: LayoutDashboard },
                  { text: "Prioridades claras", icon: CheckCircle2 },
                  { text: "Decisões baseadas em dados", icon: BarChart3 },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-purple-900 bg-white p-3 rounded-lg border border-purple-100 shadow-sm relative overflow-hidden">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={3}
                    />
                    <div className="relative z-10 flex items-center gap-3 w-full">
                      <div className="p-1 bg-purple-100 rounded-md">
                        <item.icon className="h-4 w-4 flex-none text-purple-600" />
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Future Visualization & Fake Dashboard */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-12 max-w-4xl mx-auto">
            Você abre o sistema e entende a situação da empresa em minutos.
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Fake Dashboard UI */}
              <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
                {/* Fake Header */}
                <div className="bg-slate-50 border-b border-slate-200 p-4 flex items-center gap-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  </div>
                  <div className="h-4 w-32 bg-slate-200 rounded-full"></div>
                </div>
                {/* Fake Body */}
                <div className="p-6 grid grid-cols-3 gap-4">
                  {/* Sidebar */}
                  <div className="col-span-1 space-y-3">
                    <div className="h-8 w-full bg-purple-50 rounded-lg border border-purple-100"></div>
                    <div className="h-8 w-3/4 bg-slate-50 rounded-lg"></div>
                    <div className="h-8 w-4/5 bg-slate-50 rounded-lg"></div>
                    <div className="h-8 w-2/3 bg-slate-50 rounded-lg"></div>
                  </div>
                  {/* Main Content */}
                  <div className="col-span-2 space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-20 bg-purple-50 rounded-lg border border-purple-100 p-3">
                        <div className="h-4 w-8 bg-purple-200 rounded mb-2"></div>
                        <div className="h-6 w-16 bg-purple-300 rounded"></div>
                      </div>
                      <div className="h-20 bg-slate-50 rounded-lg border border-slate-100 p-3">
                        <div className="h-4 w-8 bg-slate-200 rounded mb-2"></div>
                        <div className="h-6 w-16 bg-slate-300 rounded"></div>
                      </div>
                    </div>
                    <div className="h-32 bg-slate-50 rounded-lg border border-slate-100 p-3 space-y-2">
                      <div className="h-4 w-1/3 bg-slate-200 rounded"></div>
                      <div className="h-2 w-full bg-slate-100 rounded"></div>
                      <div className="h-2 w-full bg-slate-100 rounded"></div>
                      <div className="h-2 w-2/3 bg-slate-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-purple-600/5 rounded-xl"></div>
            </motion.div>

            <div>
              <ul className="space-y-4 mb-8">
                {[
                  "O que entrou hoje",
                  "O que está parado",
                  "O que precisa de ação",
                  "O que pode virar receita",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg text-slate-700">
                    <div className="h-2 w-2 rounded-full bg-purple-600 flex-none"></div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-2 text-slate-500 italic border-l-4 border-purple-200 pl-6 py-2">
                <p>Sem procurar informação.</p>
                <p>Sem depender de alguém lembrar.</p>
                <p>Sem apagar incêndio.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Checklist & CTA */}
        <div className="text-center mt-20">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              "Visão clara",
              "Controle das oportunidades",
              "Organização da equipe",
              "Decisões seguras",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-purple-600" />
                {item}
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl p-8 sm:p-12 relative overflow-hidden max-w-4xl mx-auto"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.purple.900),transparent)] opacity-50" />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Empresas que crescem com consistência não trabalham mais. <br />
                <span className="text-purple-400">Elas operam melhor.</span>
              </h3>
              <p className="text-slate-300 mb-8">
                Veja como sua empresa pode operar com essa clareza
              </p>
              <a
                href="#"
                className="inline-block rounded-md bg-white px-8 py-3.5 text-sm font-semibold text-purple-900 shadow-sm hover:bg-purple-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all hover:scale-105"
              >
                AGENDAR DEMONSTRAÇÃO ESTRATÉGICA
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function VSLSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center mb-10">
          <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-bold text-purple-600 mb-6 uppercase tracking-wider">
            VEJA COMO EMPRESAS ESTÃO SAINDO DO CAOS OPERACIONAL
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl mb-6 leading-tight">
            Se sua empresa trabalha muito, mas não cresce na mesma velocidade, <span className="text-purple-600">este vídeo é para você.</span>
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-slate-600 mb-8 max-w-3xl mx-auto">
            Em poucos minutos, você vai entender por que tantas empresas ficam presas mesmo com demanda, e o que precisa mudar para transformar esforço em crescimento previsível.
          </p>
          <h3 className="text-lg sm:text-xl font-semibold text-slate-800 animate-pulse">
            Se você sente que sua empresa poderia faturar mais, mas a desorganização está travando o crescimento, preste atenção nisso.
          </h3>
        </div>

        {/* Video */}
        <div className="mx-auto max-w-5xl mb-12">
          <style>{`
            wistia-player[media-id='8ly7uic4ta']:not(:defined) {
              background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/8ly7uic4ta/swatch');
              display: block;
              filter: blur(5px);
              padding-top: 56.25%;
            }
          `}</style>
          <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10 bg-slate-900 relative z-10">
            {/* @ts-ignore */}
            <wistia-player media-id="8ly7uic4ta" aspect="1.7777777777777777"></wistia-player>
          </div>
        </div>

        {/* Content Below Video */}
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
           {/* Bullets */}
           <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-full">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-purple-600">⚙️</span> Neste vídeo você vai ver:
              </h3>
              <ul className="space-y-3">
                {[
                  "Por que empresas travam justamente quando começam a crescer",
                  "Onde as oportunidades estão sendo perdidas hoje",
                  "O que muda quando a operação passa a ter controle",
                  "Como transformar vendas isoladas em receita previsível"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
           </div>

           {/* Text Explanation */}
           <div className="flex flex-col justify-center space-y-4 text-slate-600 p-4">
              <p className="font-bold text-slate-900 text-lg">Este não é um vídeo motivacional.</p>
              <p>É uma explicação clara do que acontece dentro da maioria das empresas quando tentam crescer sem estrutura.</p>
              <p>Se você quer parar de correr em círculos e entender o próximo passo para organizar sua operação, comece por aqui.</p>
           </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <LiquidButton href="#" className="w-full sm:w-auto px-10 py-5 text-lg">
            AGENDAR DEMONSTRAÇÃO ESTRATÉGICA
          </LiquidButton>
          <p className="mt-4 text-sm text-slate-500 font-medium">
            Veja como aplicar isso na sua empresa
          </p>
        </div>

      </div>
    </section>
  );
}

function HowItWorks() {
  const features = [
    {
      name: "Clientes organizados de verdade",
      description: "Você encontra qualquer cliente em segundos, com histórico completo do que já foi conversado e combinado.",
      icon: Users,
    },
    {
      name: "Negociações sob controle",
      description: "Você sabe exatamente quem está interessado, quem precisa de resposta e quem está perto de fechar.",
      icon: ClipboardList,
    },
    {
      name: "Processos que a equipe segue",
      description: "Cada atendimento, proposta e acompanhamento acontece dentro de um padrão claro, sem improviso.",
      icon: CheckCircle2,
    },
    {
      name: "Informações na mão para decidir",
      description: "Você enxerga números reais da operação e sabe onde agir para aumentar resultados.",
      icon: BarChart3,
    },
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="text-base font-semibold leading-7 text-purple-600">
            COMO EMPRESAS ORGANIZADAS OPERAM
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Quando a empresa está organizada, tudo fica claro
          </p>
          
          <div className="mt-8 space-y-4 text-lg leading-8 text-slate-600">
            <p className="font-medium text-slate-900">
              O dono não precisa perguntar o que está acontecendo. <br />
              Ele abre o sistema e entende na hora.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-slate-500 text-base">
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400" /> Sem procurar conversa perdida</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400" /> Sem perguntar para a equipe</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400" /> Sem depender de memória</span>
            </div>
            <p className="mt-4 border-t border-slate-200 pt-4">
              A operação deixa de ser um monte de coisas acontecendo ao mesmo tempo e passa a ser um <span className="text-purple-600 font-semibold">fluxo visível</span>.
            </p>
          </div>
        </div>

        {/* Visual Transformation: Chaos vs Order */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-center">
          {/* Before (Chaos) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-center text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wider">Antes</div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "WhatsApp", icon: MessageCircle },
                { name: "Planilhas", icon: FileSpreadsheet },
                { name: "Notas", icon: StickyNote },
                { name: "Memória", icon: BrainCircuit },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center gap-2 text-slate-400 grayscale opacity-70">
                  <item.icon className="h-6 w-6" />
                  <span className="text-xs font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="lg:col-span-1 flex justify-center py-4 lg:py-0">
            <ArrowRight className="h-8 w-8 text-slate-300 rotate-90 lg:rotate-0" />
          </div>

          {/* After (Order) - Dashboard Animation */}
          <div className="lg:col-span-8">
            <div className="text-center text-sm font-semibold text-purple-600 mb-4 uppercase tracking-wider">Depois</div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden ring-1 ring-white/10"
            >
              {/* Dashboard Header */}
              <div className="bg-slate-950/50 border-b border-white/5 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                  </div>
                  <div className="h-4 w-24 bg-white/10 rounded-full"></div>
                </div>
                <div className="flex gap-3">
                   <Search className="h-4 w-4 text-slate-500" />
                   <div className="h-4 w-4 rounded-full bg-purple-500"></div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Sidebar */}
                <div className="hidden md:block col-span-1 space-y-2">
                  {[
                    { name: "Painel", icon: LayoutDashboard, active: true },
                    { name: "Clientes", icon: Users, active: false },
                    { name: "Pipeline", icon: ClipboardList, active: false },
                    { name: "Agenda", icon: Calendar, active: false },
                  ].map((item, idx) => (
                    <div key={idx} className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      item.active ? "bg-purple-500/10 text-purple-400" : "text-slate-500 hover:text-slate-300"
                    )}>
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </div>
                  ))}
                </div>

                {/* Main Area */}
                <div className="col-span-3 space-y-6">
                  {/* Stats Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { label: "Clientes ativos", value: "1,240", color: "text-white" },
                      { label: "Negociações", value: "86", color: "text-purple-400" },
                      { label: "Tarefas hoje", value: "12", color: "text-white" },
                      { label: "Conversão", value: "24%", color: "text-green-400" },
                    ].map((stat, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className="bg-white/5 p-4 rounded-xl border border-white/5"
                      >
                        <div className="text-xs text-slate-500 mb-1">{stat.label}</div>
                        <div className={cn("text-xl font-bold", stat.color)}>{stat.value}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Lists Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Tasks */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      className="bg-white/5 rounded-xl border border-white/5 p-4"
                    >
                      <div className="text-sm font-medium text-slate-300 mb-4 flex items-center gap-2">
                        <ClipboardList className="h-4 w-4 text-purple-500" />
                        Tarefas pendentes
                      </div>
                      <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded border border-slate-600"></div>
                            <div className="h-2 w-3/4 bg-white/10 rounded-full"></div>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Agenda */}
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                      className="bg-white/5 rounded-xl border border-white/5 p-4"
                    >
                      <div className="text-sm font-medium text-slate-300 mb-4 flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-purple-500" />
                        Agenda do dia
                      </div>
                      <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="text-xs text-slate-500 w-8">1{i}:00</div>
                            <div className="h-8 flex-1 bg-purple-500/10 rounded border-l-2 border-purple-500"></div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-start bg-white p-6 rounded-2xl shadow-sm ring-1 ring-slate-900/5 hover:shadow-md transition-shadow relative overflow-hidden">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative z-10">
                  <div className="rounded-lg bg-purple-50 p-3 ring-1 ring-purple-600/10 mb-4">
                    <feature.icon
                      className="h-6 w-6 text-purple-600"
                      aria-hidden="true"
                    />
                  </div>
                  <dt className="text-lg font-bold text-slate-900 leading-6">
                    {feature.name}
                  </dt>
                  <dd className="mt-4 text-base leading-7 text-slate-600">
                    {feature.description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        {/* Final Phrase */}
        <div className="mt-24 text-center">
          <p className="text-2xl font-medium text-slate-900">
            Empresas organizadas não parecem mais ocupadas.
          </p>
          <p className="mt-2 text-3xl font-bold text-purple-600">
            Elas parecem no controle.
          </p>
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section className="bg-slate-900 py-16 sm:py-24 lg:py-32 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.purple.900/0.2),transparent)] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="text-base font-semibold leading-7 text-purple-400">
            SOLUÇÕES COMPLETAS
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tudo que sua empresa precisa para crescer com organização
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            Sem trocar de ferramenta toda hora. Sem adaptar processo a software. <br />
            Uma estrutura pensada para o funcionamento real de um negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent -z-10" />

          {/* VENDA */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative rounded-2xl bg-slate-800/50 p-8 ring-1 ring-white/10 hover:bg-slate-800 hover:ring-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(147,51,234,0.3)] transition-all duration-300 overflow-hidden"
          >
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={3}
            />
            <div className="relative z-10">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300">
                <Users className="h-6 w-6 text-purple-400" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">VENDA</h3>
              <p className="text-lg font-medium text-purple-200 mb-4">
                Organize a entrada de clientes e aumente conversões
              </p>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                Pare de depender de páginas improvisadas, mensagens soltas e contatos espalhados. Toda a captação e comunicação passam a acontecer dentro de um fluxo organizado.
              </p>

              {/* Mini Mockup */}
              <div className="mb-8 rounded-lg bg-slate-900/50 border border-white/5 p-3 overflow-hidden relative">
                <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-1/3 bg-purple-500/20 rounded" />
                  <div className="h-16 w-full bg-slate-800 rounded border border-white/5" />
                  <div className="flex gap-2">
                     <div className="h-8 w-1/2 bg-purple-500/10 rounded border border-purple-500/20" />
                     <div className="h-8 w-1/2 bg-slate-800 rounded border border-white/5" />
                  </div>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-slate-300">
                {[
                  "Páginas feitas para gerar oportunidades reais",
                  "Vídeos hospedados sem travamento",
                  "Formulários que qualificam o cliente",
                  "WhatsApp integrado à operação",
                  "Campanhas de email inteligentes",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 flex-none text-purple-500 mt-0.5" />
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ESCALE */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative rounded-2xl bg-slate-800/50 p-8 ring-1 ring-white/10 hover:bg-slate-800 hover:ring-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(147,51,234,0.3)] transition-all duration-300 overflow-hidden"
          >
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={3}
            />
            <div className="relative z-10">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300">
                <LineChart className="h-6 w-6 text-purple-400" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">ESCALE</h3>
              <p className="text-lg font-medium text-purple-200 mb-4">
                Controle o crescimento sem perder qualidade
              </p>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                Quando as vendas aumentam, a organização precisa acompanhar. Aqui é onde a empresa deixa de improvisar e passa a operar com método.
              </p>

               {/* Mini Mockup */}
               <div className="mb-8 rounded-lg bg-slate-900/50 border border-white/5 p-3 overflow-hidden relative">
                <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-1 space-y-1">
                     <div className="h-20 bg-slate-800 rounded border border-white/5" />
                     <div className="h-10 bg-slate-800 rounded border border-white/5" />
                  </div>
                  <div className="col-span-1 space-y-1 mt-4">
                     <div className="h-20 bg-purple-500/10 rounded border border-purple-500/20" />
                     <div className="h-10 bg-slate-800 rounded border border-white/5" />
                  </div>
                  <div className="col-span-1 space-y-1 mt-2">
                     <div className="h-20 bg-slate-800 rounded border border-white/5" />
                  </div>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-slate-300">
                {[
                  "Clientes e histórico em um só lugar",
                  "Negociações visíveis do início ao fim",
                  "Relatórios que mostram onde agir",
                  "Expansão de vendas através de parceiros",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 flex-none text-purple-500 mt-0.5" />
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* AUTOMATIZE */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative rounded-2xl bg-slate-800/50 p-8 ring-1 ring-white/10 hover:bg-slate-800 hover:ring-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(147,51,234,0.3)] transition-all duration-300 overflow-hidden"
          >
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={3}
            />
            <div className="relative z-10">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300">
                <Zap className="h-6 w-6 text-purple-400" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">AUTOMATIZE</h3>
              <p className="text-lg font-medium text-purple-200 mb-4">
                Reduza tarefas repetitivas e libere tempo
              </p>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                A equipe deixa de gastar energia com tarefas operacionais e passa a focar no que realmente move o negócio.
              </p>

               {/* Mini Mockup */}
               <div className="mb-8 rounded-lg bg-slate-900/50 border border-white/5 p-3 overflow-hidden relative">
                <div className="flex justify-between items-center mb-3 border-b border-white/5 pb-2">
                   <div className="h-2 w-10 bg-slate-700 rounded" />
                   <div className="h-3 w-3 rounded-full bg-purple-500" />
                </div>
                <div className="space-y-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded bg-slate-800 border border-white/5">
                      <div className="w-3 h-3 rounded-full border border-purple-500/50" />
                      <div className="h-1.5 w-2/3 bg-slate-600 rounded" />
                    </div>
                  ))}
                </div>
              </div>

              <ul className="space-y-3 text-sm text-slate-300">
                {[
                  "Agenda organizada automaticamente",
                  "Presença digital funcionando 24/7",
                  "Processos independentes de memória",
                  "Cobranças recorrentes sem esforço",
                  "Comunicação ativa com clientes",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 flex-none text-purple-500 mt-0.5" />
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Central Impact Phrase */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Tudo conectado. Nada isolado.
          </div>
          <h3 className="text-2xl font-medium text-white">
            Empresas organizadas não fazem mais coisas. <br />
            <span className="text-purple-400 font-bold">Fazem melhor o que já fazem.</span>
          </h3>
        </div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-600 mb-6">
              O RESULTADO NA PRÁTICA
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              O dia a dia da empresa muda quando tudo passa a estar sob controle
            </h2>
            
            <div className="prose prose-lg text-slate-600 mb-8">
              <p className="font-medium text-slate-900">
                Você abre o sistema pela manhã e entende exatamente como está o negócio.
              </p>
              <ul className="list-none pl-0 space-y-2 mt-4">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                  Quantas oportunidades entraram
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                  Quais precisam de resposta
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                  Quais estão próximas de fechar
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                  Onde a equipe precisa agir hoje
                </li>
              </ul>
              <div className="flex gap-4 text-sm text-slate-400 mt-4 italic border-l-2 border-slate-200 pl-4">
                <span>Sem procurar informação.</span>
                <span>Sem perguntar para ninguém.</span>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-8 relative overflow-hidden">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div className="relative z-10">
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                  O que começa a acontecer na prática
                </h3>
                <ul className="space-y-3">
                  {[
                    "Você sabe onde estão as oportunidades que podem virar receita",
                    "Você identifica rapidamente o que está travando vendas",
                    "Você prioriza ações que realmente aumentam resultados",
                    "Você toma decisões baseado em dados, não em sensação",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-700">
                      <CheckCircle2 className="h-5 w-5 flex-none text-purple-600" />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-lg font-medium text-slate-900 border-l-4 border-purple-600 pl-4">
              O crescimento deixa de depender de esforço individual e passa a depender de organização.
            </p>
          </div>

          {/* Right Visuals */}
          <div className="relative">
            {/* Timeline Before -> Now */}
            <div className="absolute -top-12 right-0 bg-white p-4 rounded-xl shadow-lg border border-slate-100 z-20 hidden lg:block">
              <div className="flex items-center gap-8 text-sm">
                <div className="text-slate-400">
                  <div className="font-semibold mb-1">ANTES</div>
                  <div className="flex flex-col gap-1 text-xs">
                    <span>Caos</span>
                    <span>Atrasos</span>
                    <span>Esforço</span>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-300" />
                <div className="text-purple-600">
                  <div className="font-semibold mb-1">AGORA</div>
                  <div className="flex flex-col gap-1 text-xs font-medium">
                    <span>Controle</span>
                    <span>Velocidade</span>
                    <span>Previsibilidade</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl bg-slate-900 p-1 shadow-2xl ring-1 ring-white/10"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur opacity-30" />
              <div className="relative rounded-xl bg-slate-950 overflow-hidden">
                {/* Header */}
                <div className="border-b border-white/5 bg-white/5 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/50" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                    <div className="h-3 w-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-xs font-medium text-slate-400">Painel de Controle</div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Top Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                      <div className="text-xs text-slate-400 mb-1">Conversão</div>
                      <div className="text-xl font-bold text-white flex items-center gap-2">
                        <CountUp to={42} suffix="%" />
                        <TrendingUp className="h-3 w-3 text-green-500" />
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                      <div className="text-xs text-slate-400 mb-1">Leads</div>
                      <div className="text-xl font-bold text-white flex items-center gap-2">
                        <CountUp to={12} suffix="%" />
                        <TrendingUp className="h-3 w-3 text-green-500" />
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                      <div className="text-xs text-slate-400 mb-1">Vendas</div>
                      <div className="text-xl font-bold text-white flex items-center gap-2">
                        <CountUp to={24} suffix="%" />
                        <TrendingUp className="h-3 w-3 text-green-500" />
                      </div>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="bg-white/5 rounded-lg p-4 border border-white/5 h-40 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-end justify-between px-4 pb-4 pt-8 gap-2">
                      {[30, 45, 35, 60, 55, 70, 65, 80, 75, 90].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05, duration: 0.5 }}
                          className="w-full bg-purple-500/20 rounded-t-sm hover:bg-purple-500/40 transition-colors relative group"
                        >
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            {h}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    {/* Grid Lines */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="h-full w-full border-b border-white/5" />
                      <div className="h-2/3 w-full border-b border-white/5" />
                      <div className="h-1/3 w-full border-b border-white/5" />
                    </div>
                  </div>

                  {/* Recent Activity List */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span>Atividades Recentes</span>
                      <Filter className="h-3 w-3" />
                    </div>
                    {[
                      { icon: MessageSquare, text: "Novo lead qualificado", time: "2m" },
                      { icon: CheckCircle2, text: "Venda fechada: R$ 5k", time: "15m" },
                      { icon: Target, text: "Meta diária atingida", time: "1h" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-white/5 p-2 rounded border border-white/5">
                        <div className="flex items-center gap-2">
                          <item.icon className="h-3 w-3 text-purple-400" />
                          <span className="text-xs text-slate-300">{item.text}</span>
                        </div>
                        <span className="text-[10px] text-slate-500">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Final Emotional Phrase */}
            <div className="mt-8 text-center lg:text-right">
              <p className="text-lg font-medium text-slate-900">
                Não é só trabalhar mais.
              </p>
              <p className="text-xl font-bold text-purple-600">
                É finalmente sentir que a empresa está sob controle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (inView) {
      const node = nodeRef.current;
      const controls = animate(0, to, {
        duration: 1.5,
        onUpdate(value) {
          if (node) {
            node.textContent = `+${Math.round(value)}${suffix}`;
          }
        },
      });
      return () => controls.stop();
    }
  }, [to, suffix, inView]);

  return <span ref={nodeRef}>0{suffix}</span>;
}

function Implementation() {
  const steps = [
    {
      title: "Configuração do ambiente",
      desc: "O sistema é preparado com base no seu modelo de vendas, atendimento e operação atual.",
      icon: Settings,
    },
    {
      title: "Integração com o seu processo",
      desc: "Conectamos o sistema ao que já funciona na empresa, evitando retrabalho e mudanças bruscas.",
      icon: Link,
    },
    {
      title: "Treinamento da equipe",
      desc: "Sua equipe aprende a usar o sistema no contexto do dia a dia, não em teoria.",
      icon: Users,
    },
    {
      title: "Acompanhamento inicial",
      desc: "Você não fica sozinho após a implantação. Existe suporte ativo até a operação estar rodando com segurança.",
      icon: LifeBuoy,
    },
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-600 mb-6">
            IMPLEMENTAÇÃO
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
            Você não precisa parar a empresa para organizar a empresa
          </h2>
          <p className="text-lg leading-8 text-slate-600 mb-8">
            A estrutura é implantada enquanto sua operação continua rodando normalmente. <br className="hidden sm:block" />
            <span className="font-medium text-slate-900">Sem caos. Sem ruptura. Sem depender de disponibilidade da equipe.</span>
          </p>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-left relative">
            <div className="absolute -top-3 left-6 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
              Nosso Compromisso
            </div>
            <p className="text-slate-600">
              Nós cuidamos da configuração, adaptação e organização do sistema com base na realidade do seu negócio.
              O objetivo não é mudar a forma como você trabalha. <span className="text-purple-600 font-medium">É dar clareza, controle e método ao que já acontece hoje.</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Timeline Steps */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200" />
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-6 group">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-white border-2 border-slate-200 shadow-sm group-hover:border-purple-500 group-hover:scale-110 transition-all z-10">
                    <step.icon className="h-5 w-5 text-slate-400 group-hover:text-purple-600 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-purple-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-slate-600">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Trust Seal */}
            <div className="mt-12 ml-16 inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-100 text-green-700 text-sm font-medium">
              <CheckCircle2 className="h-4 w-4" />
              Implantação guiada passo a passo
            </div>
          </div>

          {/* Visual "Without Stopping" */}
          <div className="relative lg:sticky lg:top-8">
            <div className="bg-slate-900 rounded-2xl p-8 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
              
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-white text-xs font-medium mb-2">
                  <Clock className="h-3 w-3" />
                  Estrutura funcionando em poucos dias
                </div>
                <h3 className="text-white font-semibold">Operação em Paralelo</h3>
              </div>

              <div className="space-y-4 relative">
                {/* Connecting Line */}
                <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-white/10 -translate-x-1/2 border-l border-dashed border-white/20"></div>

                {/* Company Running */}
                <div className="relative bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-between group hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    <div>
                      <div className="text-white font-medium text-sm">Sua Empresa</div>
                      <div className="text-slate-400 text-xs">Rodando normalmente</div>
                    </div>
                  </div>
                  <div className="text-green-400 text-xs font-medium bg-green-500/10 px-2 py-1 rounded">100% Ativa</div>
                </div>

                {/* System Implementation */}
                <div className="relative bg-purple-500/10 p-4 rounded-xl border border-purple-500/20 flex items-center justify-between group hover:bg-purple-500/20 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-purple-400 animate-pulse"></div>
                    <div>
                      <div className="text-white font-medium text-sm">Implantação</div>
                      <div className="text-purple-200 text-xs">Configuração em andamento</div>
                    </div>
                  </div>
                  <div className="text-purple-300 text-xs font-medium bg-purple-500/20 px-2 py-1 rounded">Sem interferência</div>
                </div>

                {/* More Items to show activity */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                   <div className="bg-white/5 p-3 rounded-lg border border-white/5 text-center">
                      <div className="text-slate-400 text-xs mb-1">Vendas</div>
                      <div className="text-white font-bold">Acontecendo</div>
                   </div>
                   <div className="bg-white/5 p-3 rounded-lg border border-white/5 text-center">
                      <div className="text-slate-400 text-xs mb-1">Equipe</div>
                      <div className="text-white font-bold">Focada</div>
                   </div>
                </div>
              </div>
            </div>

            {/* Confidence Phrase */}
            <div className="mt-8 text-center bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <p className="text-lg font-medium text-slate-900">
                Empresas não travam por falta de ferramentas.
              </p>
              <p className="text-purple-600 font-bold mt-1">
                Travam por falta de implementação bem conduzida.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <p className="text-sm text-slate-500 mb-4">Veja como a implantação funciona na prática</p>
              <LiquidButton href="#" className="w-full sm:w-auto">
                AGENDAR DEMONSTRAÇÃO ESTRATÉGICA
              </LiquidButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function TargetAudience() {
  const segments = [
    {
      title: "Pequenas e Médias Empresas",
      subtitle: "Centralização da Operação",
      description: "Pare de depender de WhatsApp pessoal, planilhas e memória do time. Tudo passa a funcionar em um único sistema, com visão clara do que está acontecendo.",
      icon: Building2,
    },
    {
      title: "Prestadores de Serviço",
      subtitle: "Controle do Comercial",
      description: "Saiba exatamente quantos orçamentos foram enviados, quais estão em negociação e quais precisam de follow-up.",
      icon: Briefcase,
    },
    {
      title: "Coaches e Mentores",
      subtitle: "Gestão de Leads e Alunos",
      description: "Captação organizada, acompanhamento automático e comunicação estruturada sem precisar gerenciar tudo manualmente.",
      icon: BrainCircuit,
    },
    {
      title: "Advogados",
      subtitle: "Triagem e Organização de Casos",
      description: "O sistema coleta informações iniciais do cliente antes do atendimento e mantém todo o histórico organizado.",
      icon: Scale,
    },
    {
      title: "Clínicas e Profissionais de Saúde",
      subtitle: "Redução de Faltas e Agenda Cheia",
      description: "Confirmações automáticas e lembretes inteligentes reduzem faltas e mantêm a agenda preenchida.",
      icon: Stethoscope,
    },
    {
      title: "Imobiliárias",
      subtitle: "Agendamento e Gestão de Leads",
      description: "Leads são distribuídos automaticamente, visitas organizadas e acompanhamento feito sem perder oportunidades.",
      icon: Home,
    },
    {
      title: "Energia Solar e Projetos",
      subtitle: "Acompanhamento de Negociações Longas",
      description: "O sistema mantém contato contínuo com clientes indecisos até o fechamento.",
      icon: Sun,
    },
    {
      title: "Estética, Beleza e Bem-Estar",
      subtitle: "Venda Recorrente",
      description: "Campanhas automáticas incentivam retorno de clientes e venda de pacotes.",
      icon: Sparkles,
    },
    {
      title: "Oficinas e Serviços Técnicos",
      subtitle: "Ciclo de Retorno de Clientes",
      description: "Lembretes automáticos para revisões e manutenção mantêm o fluxo constante.",
      icon: Wrench,
    },
    {
      title: "Restaurantes e Negócios Locais",
      subtitle: "Reservas, Atendimento e Avaliações",
      description: "Gerencie reservas e solicite avaliações automaticamente após o atendimento.",
      icon: Utensils,
    },
    {
      title: "Infoprodutores e Empresas de Educação",
      subtitle: "Gestão de Leads e Alunos",
      description: "Organize captação, acompanhamento e comunicação com leads e alunos em um único sistema, sem depender de várias ferramentas desconectadas.",
      icon: GraduationCap,
    },
    {
      title: "Agências e Empresas de Marketing",
      subtitle: "Controle de Pipeline e Clientes",
      description: "Visualize oportunidades, organize negociações e acompanhe cada cliente sem depender de planilhas ou mensagens espalhadas.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-600 mb-6"
          >
            <Target className="h-4 w-4 mr-2" />
            PARA QUEM É
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6"
          >
            Feito para empresas que querem <br />
            <span className="text-purple-600">crescer sem virar caos</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg leading-8 text-slate-600"
          >
            Não importa o nicho. <br />
            Se sua empresa depende de clientes, atendimento e vendas organizadas, esse sistema foi feito para você.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 overflow-hidden"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                    <segment.icon className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 leading-tight">
                    {segment.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-purple-700">
                    {segment.subtitle}
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {segment.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg font-medium text-slate-900 mb-6">
            Se sua empresa depende de clientes, precisa de organização.
          </p>
          <LiquidButton href="#">
            AGENDAR DEMONSTRAÇÃO ESTRATÉGICA
          </LiquidButton>
        </motion.div>
      </div>
    </section>
  );
}

function Plans() {
  const plans = [
    {
      name: "Starter",
      price: "297",
      implementationFee: "R$ 1.697",
      description: "Para empresas que estão organizando a operação e querem sair do improviso com segurança.",
      changes: [
        "Base organizada de clientes",
        "Controle inicial das oportunidades",
        "Centralização das conversas",
        "Automação básica funcionando",
      ],
      features: [
        "1 usuário",
        "10 mil leads e contatos",
        "Sem integração com WhatsApp",
        "Funcionalidades essenciais liberadas",
        "Suporte padrão",
        "Acesso à comunidade",
      ],
      cta: "INICIAR MEU TESTE",
      featured: false,
      icon: Zap,
    },
    {
      name: "Scale",
      price: "497",
      implementationFee: "R$ 2.497",
      description: "Para empresas que já vendem e querem previsibilidade, controle e crescimento consistente.",
      changes: [
        "Visão completa das negociações",
        "Acompanhamento automático de oportunidades",
        "Processos claros para equipe",
        "Decisões baseadas em dados",
      ],
      features: [
        "3 usuários",
        "100 mil leads e contatos",
        "1 WhatsApp integrado",
        "Tudo do Starter +",
        "Templates de funis e estratégias validadas",
        "Suporte Premium",
        "Aulas semanais de crescimento",
      ],
      cta: "INICIAR MEU TESTE",
      featured: true,
      tag: "MAIS ESCOLHIDO",
      icon: Star,
    },
    {
      name: "Elite",
      price: "997",
      implementationFee: "R$ 3.000",
      description: "Para empresas que querem operar com máxima eficiência, suporte prioritário e estrutura pronta para crescer sem limites.",
      changes: [
        "Operação totalmente centralizada",
        "Equipe trabalhando com coordenação real",
        "Crescimento sem perda de controle",
        "Suporte estratégico contínuo",
      ],
      features: [
        "Usuários ilimitados",
        "Leads e contatos ilimitados",
        "WhatsApps ilimitados",
        "Tudo do Scale +",
        "Setup Concierge (Feito por Nós)",
        "Suporte Prioritário VIP",
        "Gerente de Conta Dedicado",
        "Workshops estratégicos avançados",
        "Onboarding personalizado",
        "Implementação assistida",
      ],
      cta: "INICIAR MEU TESTE",
      featured: false,
      tag: "PARA OPERAÇÕES EM ESCALA",
      icon: Crown,
    },
  ];

  const comparisonData = [
    {
      category: "ESTRUTURA E CAPACIDADE",
      rows: [
        { label: "Usuários do sistema", values: ["1", "3", "Ilimitados"] },
        { label: "Contas de WhatsApp integradas", values: ["Não inclui", "1 número", "Até 3 números"] },
        { label: "Leads e contatos armazenados", values: ["10 mil", "100 mil", "Ilimitados"] },
      ],
    },
    {
      category: "CENTRALIZAÇÃO DE ATENDIMENTO",
      description: "Painel único integrando: WhatsApp, Instagram, Facebook, Google, E-mail, Ligações",
      rows: [
        { label: "Painel Multicanal", values: [true, true, true] },
      ],
    },
    {
      category: "COMUNICAÇÃO E RELACIONAMENTO",
      rows: [
        { label: "API Oficial do WhatsApp", values: [true, true, true] },
        { label: "Campanhas de e-mail marketing", values: [true, true, true] },
        { label: "Histórico completo de conversas", values: [true, true, true] },
      ],
    },
    {
      category: "GESTÃO DE VENDAS",
      rows: [
        { label: "CRM completo", values: [true, true, true] },
        { label: "Pipelines ilimitados", values: [true, true, true] },
        { label: "Controle das negociações", values: [true, true, true] },
        { label: "Funis de venda", values: [true, true, true] },
      ],
    },
    {
      category: "MARKETING E AQUISIÇÃO",
      rows: [
        { label: "Criador de sites e landing pages", values: [true, true, true] },
        { label: "Hospedagem e streaming de vídeos", values: [true, true, true] },
        { label: "Formulários e pesquisas", values: [true, true, true] },
      ],
    },
    {
      category: "AUTOMAÇÃO OPERACIONAL",
      rows: [
        { label: "Calendários e agendamentos", values: [true, true, true] },
        { label: "Automações de processos", values: [true, true, true] },
        { label: "Cobranças e recorrência", values: [true, true, true] },
        { label: "Integrações e API", values: [true, true, true] },
      ],
    },
    {
      category: "ANÁLISES E CONTROLE",
      rows: [
        { label: "Dashboards e relatórios", values: [true, true, true] },
        { label: "Análises de desempenho", values: [true, true, true] },
        { label: "Teste A/B", values: [true, true, true] },
      ],
    },
    {
      category: "RECURSOS AVANÇADOS",
      rows: [
        { label: "Templates prontos de e-mail", values: [false, true, true] },
        { label: "Templates validados de funis", values: [false, true, true] },
      ],
    },
    {
      category: "CUSTOS OPERACIONAIS",
      rows: [
        { label: "Disparo de e-mail marketing", values: ["R$0,010", "R$0,005", "R$0,005"] },
        { label: "Verificação de e-mail", values: ["R$0,025", "R$0,012", "R$0,012"] },
        { label: "Recursos premium de automação", values: ["R$0,010", "R$0,005", "R$0,005"] },
      ],
    },
    {
      category: "SUPORTE E IMPLEMENTAÇÃO",
      rows: [
        { label: "Comunidade e conteúdos", values: [true, true, true] },
        { label: "Treinamentos gravados", values: [true, true, true] },
        { label: "Suporte por e-mail", values: [true, true, true] },
        { label: "Aulas semanais ao vivo", values: [false, true, true] },
        { label: "Suporte ao vivo com especialista", values: [false, true, true] },
        { label: "Suporte prioritário no WhatsApp", values: [false, false, true] },
        { label: "Onboarding personalizado", values: [false, false, true] },
        { label: "Implementação individual assistida", values: [false, false, true] },
      ],
    },
  ];

  const [openCategory, setOpenCategory] = useState<string | null>(null);

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32" id="plans">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-purple-600 uppercase tracking-wide">
            Planos
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Escolha o nível de estrutura ideal para o momento da sua empresa
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Todos os planos organizam sua operação e centralizam clientes, vendas e processos em um único sistema.
            <br className="hidden sm:block" />
            <span className="font-medium text-slate-900">A diferença está no nível de controle, automação e suporte necessário para acompanhar o crescimento da sua empresa.</span>
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-24">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "flex flex-col rounded-3xl bg-white p-8 xl:p-10 transition-all relative overflow-hidden",
                plan.featured
                  ? "ring-2 ring-purple-600 shadow-2xl scale-105 z-10"
                  : "ring-1 ring-slate-200 hover:shadow-lg hover:scale-[1.02]"
              )}
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              {plan.tag && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-b-xl bg-purple-600 px-4 py-1 text-xs font-bold text-white uppercase tracking-wider shadow-sm z-20">
                  {plan.icon === Star && <Star className="h-3 w-3 fill-current" />}
                  {plan.icon === Crown && <Crown className="h-3 w-3 fill-current" />}
                  {plan.tag}
                </div>
              )}
              <div className="relative z-10 flex flex-col h-full pt-4">

                <div className="mb-6">
                  <h3 className={cn("text-xl font-bold", plan.featured ? "text-purple-600" : "text-slate-900")}>
                    Plano {plan.name}
                  </h3>
                  <div className="mt-4 flex flex-col gap-1">
                    <div className="flex items-baseline gap-x-2">
                      <span className="text-4xl font-bold tracking-tight text-slate-900">R${plan.price}</span>
                      <span className="text-base font-semibold leading-7 text-slate-500">/mês</span>
                    </div>
                    <p className="text-xs font-medium text-slate-500">
                      + {plan.implementationFee} de implementação (pagamento único)
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600 min-h-[60px]">
                    {plan.description}
                  </p>
                </div>

                <div className="flex-1 flex flex-col gap-6">
                  {/* Changes Block */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 relative overflow-hidden">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={3}
                    />
                    <div className="relative z-10">
                      <div className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
                        O que muda na prática
                      </div>
                      <ul className="space-y-2">
                        {plan.changes.map((change, idx) => (
                          <li key={idx} className="flex gap-2 text-sm text-slate-700">
                            <div className="h-1.5 w-1.5 rounded-full bg-purple-600 mt-1.5 flex-none" />
                            {change}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Features List */}
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                      Recursos de destaque
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-slate-600">
                          <CheckCircle2 className={cn("h-5 w-5 flex-none", plan.featured ? "text-purple-600" : "text-slate-400")} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {plan.featured ? (
                  <LiquidButton href="#" className="mt-8 w-full">
                    {plan.cta}
                  </LiquidButton>
                ) : (
                  <a
                    href="#"
                    className="mt-8 block rounded-md px-3 py-4 text-center text-sm font-semibold leading-6 bg-slate-50 text-purple-600 hover:bg-slate-100 ring-1 ring-inset ring-slate-200 transition-all"
                  >
                    {plan.cta}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl mb-4">
              Compare tudo que cada plano libera na prática
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Todos os planos organizam sua operação. A diferença está no nível de controle, automação e suporte que você quer ter para crescer.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <div className="grid grid-cols-4 bg-slate-50 border-b border-slate-200">
              <div className="p-6 text-sm font-semibold text-slate-500 uppercase tracking-wider">Funcionalidade</div>
              <div className="p-6 text-center font-bold text-slate-900">Starter</div>
              <div className="p-6 text-center font-bold text-purple-600 bg-purple-50/50 border-x border-purple-100">Scale</div>
              <div className="p-6 text-center font-bold text-slate-900">Elite</div>
            </div>
            
            <div className="bg-white divide-y divide-slate-100">
              {comparisonData.map((category, catIdx) => (
                <div key={catIdx}>
                  <div className="bg-slate-50/50 px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider border-y border-slate-100">
                    {category.category}
                  </div>
                  {category.description && (
                    <div className="px-6 py-2 text-xs text-slate-500 italic bg-white border-b border-slate-50">
                      {category.description}
                    </div>
                  )}
                  {category.rows.map((row, rowIdx) => (
                    <div key={rowIdx} className="grid grid-cols-4 hover:bg-slate-50/30 transition-colors">
                      <div className="p-4 pl-6 text-sm font-medium text-slate-700 flex items-center">
                        {row.label}
                      </div>
                      {row.values.map((val, valIdx) => (
                        <div 
                          key={valIdx} 
                          className={cn(
                            "p-4 text-sm text-center flex items-center justify-center text-slate-600",
                            valIdx === 1 && "bg-purple-50/10 border-x border-purple-50 font-medium text-slate-900"
                          )}
                        >
                          {typeof val === 'boolean' ? (
                            val ? (
                              <CheckCircle2 className="h-5 w-5 text-green-500" />
                            ) : (
                              <X className="h-5 w-5 text-slate-300" />
                            )
                          ) : (
                            val
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Accordion */}
          <div className="lg:hidden space-y-4">
            {comparisonData.map((category, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => setOpenCategory(openCategory === category.category ? null : category.category)}
                  className="w-full flex items-center justify-between p-4 bg-slate-50 text-left"
                >
                  <span className="font-semibold text-slate-900 text-sm">{category.category}</span>
                  {openCategory === category.category ? (
                    <ChevronDown className="h-5 w-5 text-slate-400 rotate-180 transition-transform" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-400 transition-transform" />
                  )}
                </button>
                
                <AnimatePresence>
                  {openCategory === category.category && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 space-y-6 border-t border-slate-200">
                        {category.description && (
                          <p className="text-xs text-slate-500 italic mb-4">{category.description}</p>
                        )}
                        {category.rows.map((row, rIdx) => (
                          <div key={rIdx} className="space-y-3">
                            <div className="text-sm font-medium text-slate-900 border-b border-slate-100 pb-1">
                              {row.label}
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-xs">
                              <div className="text-center space-y-1">
                                <div className="text-slate-400 font-medium">Starter</div>
                                <div className="flex justify-center h-6 items-center">
                                  {typeof row.values[0] === 'boolean' ? (
                                    row.values[0] ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <X className="h-4 w-4 text-slate-300" />
                                  ) : (
                                    <span className="text-slate-600">{row.values[0]}</span>
                                  )}
                                </div>
                              </div>
                              <div className="text-center space-y-1 bg-purple-50 rounded p-1 -my-1">
                                <div className="text-purple-600 font-bold">Scale</div>
                                <div className="flex justify-center h-6 items-center">
                                  {typeof row.values[1] === 'boolean' ? (
                                    row.values[1] ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <X className="h-4 w-4 text-slate-300" />
                                  ) : (
                                    <span className="text-slate-900 font-medium">{row.values[1]}</span>
                                  )}
                                </div>
                              </div>
                              <div className="text-center space-y-1">
                                <div className="text-slate-400 font-medium">Elite</div>
                                <div className="flex justify-center h-6 items-center">
                                  {typeof row.values[2] === 'boolean' ? (
                                    row.values[2] ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <X className="h-4 w-4 text-slate-300" />
                                  ) : (
                                    <span className="text-slate-600">{row.values[2]}</span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Block */}
        <div className="mt-24 relative isolate overflow-hidden bg-slate-900 px-6 py-16 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-20 text-center">
           {/* Gradient Background */}
           <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,theme(colors.purple.900),theme(colors.slate.900))]" />
           <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-800/30 to-transparent" />
           
           <div className="mx-auto max-w-3xl">
             <div className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-300 ring-1 ring-inset ring-purple-500/20 mb-6">
                NÃO É SOBRE ESCOLHER UM PLANO
             </div>
             <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
               É sobre entender o que sua empresa precisa agora
             </h2>
             <p className="text-lg leading-8 text-slate-300 mb-8">
               Empresas travam quando tentam crescer sem estrutura. <br className="hidden sm:block" />
               Na demonstração estratégica, mostramos exatamente como organizar seu atendimento, suas vendas e sua operação para parar de perder oportunidades e ganhar previsibilidade.
             </p>
             
             <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-10 backdrop-blur-sm">
               <p className="text-lg font-medium text-white mb-2">
                 Você vai enxergar onde está hoje e o que precisa ajustar para crescer sem caos.
               </p>
               <p className="text-sm text-purple-200 opacity-80">
                 Sem compromisso. Sem pressão. Só clareza.
               </p>
             </div>
             
             <div className="flex flex-col items-center gap-4">
               <div className="flex items-center gap-2 text-purple-300">
                 <Calendar className="h-5 w-5" />
                 <span className="text-sm font-medium">Próximos horários disponíveis</span>
               </div>
               <a
                 href="#"
                 className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-base font-bold text-purple-900 shadow-lg hover:bg-purple-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all hover:scale-105 w-full sm:w-auto"
               >
                 AGENDAR DEMONSTRAÇÃO ESTRATÉGICA
               </a>
               <div className="text-xs text-slate-400 flex items-center gap-2 mt-2">
                 <span>Duração média: 30 minutos</span>
                 <span className="w-1 h-1 rounded-full bg-slate-600" />
                 <span>Sem compromisso</span>
               </div>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}

function Provocation() {
  return (
    <section className="bg-slate-900 py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.purple.900/0.4),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,theme(colors.slate.800),transparent)]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Context & Copy */}
          <div>
            <div className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-300 ring-1 ring-inset ring-purple-500/20 mb-6">
              O PRÓXIMO NÍVEL DA OPERAÇÃO
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              A diferença entre vender bem <br className="hidden lg:block" />
              e ter uma empresa sob controle
            </h2>
            <p className="text-lg text-slate-300 mb-8 font-medium">
              Muitas empresas conseguem vender. <br />
              Poucas conseguem crescer sem virar caos.
            </p>
            
            <div className="space-y-6 text-slate-400">
              <p>
                Enquanto uma empresa controla clientes no WhatsApp, em planilhas e na memória do dono, outra acompanha tudo em tempo real.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Quem precisa de retorno",
                  "Quem está pronto para comprar",
                  "Quem sumiu e precisa de follow-up",
                  "Quanto pode entrar no mês",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-white font-medium border-l-2 border-purple-500 pl-4 py-1">
                Organização transforma esforço em previsibilidade.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Element (Chaos vs Control) */}
          <div className="relative">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/5 backdrop-blur-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center relative">
                
                {/* Chaos Side */}
                <div className="text-center space-y-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                  <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
                    Antes (Improviso)
                  </div>
                  <div className="relative h-32 w-full bg-slate-900/50 rounded-xl border border-white/5 p-4 flex items-center justify-center overflow-hidden group">
                    {/* Scattered Icons */}
                    <MessageCircle className="absolute top-4 left-4 h-8 w-8 text-green-500 rotate-[-12deg] group-hover:scale-110 transition-transform" />
                    <FileSpreadsheet className="absolute bottom-6 right-8 h-8 w-8 text-emerald-500 rotate-[15deg] group-hover:scale-110 transition-transform" />
                    <StickyNote className="absolute top-8 right-6 h-8 w-8 text-yellow-500 rotate-[5deg] group-hover:scale-110 transition-transform" />
                    <div className="absolute bottom-4 left-8 h-6 w-6 rounded bg-red-500/20 rotate-[-8deg]" />
                    
                    <span className="text-xs text-slate-500 font-mono mt-16">Dados espalhados</span>
                  </div>
                  <div className="text-sm text-slate-400">
                    Depende da memória
                  </div>
                </div>

                {/* Arrow */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden sm:flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 border border-slate-600">
                  <ArrowRight className="h-4 w-4 text-white" />
                </div>

                {/* Control Side */}
                <div className="text-center space-y-4">
                  <div className="text-xs font-bold text-green-400 uppercase tracking-wider mb-2">
                    Depois (Controle)
                  </div>
                  <div className="relative h-32 w-full bg-slate-900 rounded-xl border border-purple-500/30 p-4 shadow-lg shadow-purple-900/20 overflow-hidden">
                    <div className="absolute inset-0 bg-purple-500/5" />
                    {/* Organized List */}
                    <div className="space-y-2 relative z-10">
                      <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded border border-white/5">
                        <CheckCircle2 className="h-3 w-3 text-green-500" />
                        <div className="h-1.5 w-16 bg-slate-700 rounded" />
                        <div className="h-1.5 w-8 bg-purple-500/50 rounded ml-auto" />
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded border border-white/5">
                        <CheckCircle2 className="h-3 w-3 text-green-500" />
                        <div className="h-1.5 w-12 bg-slate-700 rounded" />
                        <div className="h-1.5 w-8 bg-purple-500/50 rounded ml-auto" />
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded border border-white/5">
                        <CheckCircle2 className="h-3 w-3 text-green-500" />
                        <div className="h-1.5 w-20 bg-slate-700 rounded" />
                        <div className="h-1.5 w-8 bg-purple-500/50 rounded ml-auto" />
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-white font-medium">
                    Visão Centralizada
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Impact & CTA */}
        <div className="mt-20 text-center border-t border-white/10 pt-12">
          <h3 className="text-2xl font-bold text-white mb-2">
            Empresas organizadas crescem com controle.
          </h3>
          <p className="text-lg text-slate-400 mb-8">
            As outras crescem até onde a bagunça permite.
          </p>
          
          <LiquidButton href="#" className="w-full sm:w-auto">
            AGENDAR DEMONSTRAÇÃO ESTRATÉGICA
          </LiquidButton>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      question: "Funciona para o meu tipo de negócio?",
      answer: (
        <>
          <p className="mb-4">Se sua empresa depende de clientes, vendas ou relacionamento, sim.</p>
          <p className="mb-4">Não importa se você presta serviços, vende produtos, tem equipe comercial ou atende sozinho. O sistema foi criado para organizar qualquer operação que precise atrair, atender e converter clientes com consistência.</p>
          <p>Empresas tradicionais, digitais ou híbridas usam exatamente a mesma lógica de organização.</p>
        </>
      ),
    },
    {
      question: "Em quanto tempo começo a sentir diferença?",
      answer: (
        <>
          <p className="mb-4">A clareza operacional aparece nos primeiros dias após a implantação.</p>
          <p className="mb-4">Você passa a enxergar clientes, negociações e tarefas centralizadas, sem precisar procurar informações em vários lugares.</p>
          <p>Resultados comerciais vêm como consequência da organização.</p>
        </>
      ),
    },
    {
      question: "Minha equipe vai conseguir usar?",
      answer: (
        <>
          <p className="mb-4">Sim. O sistema foi pensado para simplificar, não complicar.</p>
          <p className="mb-4">A maioria das equipes aprende rapidamente porque tudo fica visual, centralizado e padronizado. Além disso, oferecemos treinamento e suporte durante a adaptação.</p>
          <p>Quando o processo fica claro, a resistência desaparece.</p>
        </>
      ),
    },
    {
      question: "Preciso abandonar o que já uso hoje?",
      answer: (
        <>
          <p className="mb-4">Não.</p>
          <p className="mb-4">Nós integramos e adaptamos a estrutura ao que já funciona na sua empresa. O objetivo não é começar do zero, mas organizar o que você já construiu.</p>
          <p>Você evolui sem parar a operação.</p>
        </>
      ),
    },
    {
      question: "Dá para integrar com minhas ferramentas atuais?",
      answer: (
        <>
          <p className="mb-4">Sim. Integramos com os principais canais e ferramentas que empresas já utilizam no dia a dia.</p>
          <p>Centralizamos comunicação, dados e processos para que você não precise alternar entre vários sistemas.</p>
        </>
      ),
    },
    {
      question: "Vou ter suporte ou fico sozinho depois?",
      answer: (
        <>
          <p className="mb-4">Você terá acompanhamento durante a implantação e suporte contínuo depois.</p>
          <p className="mb-4">Nosso objetivo é garantir que a estrutura funcione na prática, não apenas entregar acesso a uma ferramenta.</p>
          <p>Seu crescimento depende do uso correto, e nós ajudamos nisso.</p>
        </>
      ),
    },
    {
      question: "Isso vai exigir muito tempo meu?",
      answer: (
        <>
          <p className="mb-4">Não.</p>
          <p className="mb-4">A implantação é feita de forma progressiva para não travar sua operação. A ideia é organizar enquanto o negócio continua rodando.</p>
          <p>Você investe tempo agora para ganhar controle permanente depois.</p>
        </>
      ),
    },
  ];

  return (
    <section className="bg-slate-50 py-24 sm:py-32" id="faq">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header with Trust Seal */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700 uppercase tracking-wider mb-6">
            <ShieldCheck className="h-3 w-3" />
            Sem fidelidade • Sem risco • Cancelamento simples
          </div>
          <h2 className="text-base font-semibold leading-7 text-purple-600 uppercase tracking-wide">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Tudo que você precisa saber antes de estruturar sua empresa para crescer com controle
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-3xl divide-y divide-slate-200">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Ainda com dúvidas se isso funciona na sua empresa?
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Agende uma demonstração estratégica e veja exatamente como a estrutura se adaptaria ao seu cenário antes de decidir.
          </p>
          <LiquidButton href="#" className="w-full sm:w-auto">
            AGENDAR DEMONSTRAÇÃO ESTRATÉGICA
          </LiquidButton>
        </div>

      </div>
    </section>
  );
}

const FAQItem: FC<{ faq: { question: string; answer: ReactNode } }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-6 border-b border-slate-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-start justify-between text-left text-slate-900 focus:outline-none group"
      >
        <span className="text-lg font-semibold leading-7 group-hover:text-purple-600 transition-colors">{faq.question}</span>
        <span className="ml-6 flex h-7 items-center">
          <ChevronDown
            className={cn(
              "h-6 w-6 transform transition-transform duration-200 text-slate-400 group-hover:text-purple-600",
              isOpen ? "-rotate-180" : "rotate-0"
            )}
          />
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-4 pr-12 text-base leading-7 text-slate-600">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function FinalCTA() {
  return (
    <section className="bg-slate-900 py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.purple.900),theme(colors.slate.900))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,theme(colors.slate.800),transparent)]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6 leading-tight">
            Se sua empresa quer crescer sem virar refém do caos, <br className="hidden sm:block" />
            <span className="text-purple-400">precisa evoluir a forma de operar.</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Crescimento sem estrutura gera desorganização, retrabalho e perda de controle. <br className="hidden sm:block" />
            Crescimento com estrutura gera previsibilidade, eficiência e escala.
          </p>
        </div>

        {/* Comparison Block */}
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Left: Improviso */}
          <div className="bg-slate-800/30 rounded-2xl p-8 border border-white/5 backdrop-blur-sm relative overflow-hidden group hover:bg-slate-800/50 transition-all">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={3}
            />
            <div className="relative z-10">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500/50" />
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <X className="h-5 w-5 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Empresas no Improviso</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-400">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500/50" />
                  <span>Caos operacional constante</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500/50" />
                  <span>Falta de controle real</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500/50" />
                  <span>Decisões tomadas no escuro</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Estruturada */}
          <div className="bg-slate-800/80 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm relative overflow-hidden shadow-2xl shadow-purple-900/20 transform md:scale-105 z-10">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={3}
            />
            <div className="relative z-10">
              <div className="absolute top-0 left-0 w-1 h-full bg-purple-500" />
              <div className="absolute inset-0 bg-purple-500/5" />
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="h-10 w-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Empresas Estruturadas</h3>
              </div>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span>Clareza total da operação</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span>Previsibilidade de vendas</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span>Capacidade de escala</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits & CTA */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 text-purple-200">
            {[
              "Mais organização",
              "Mais clareza",
              "Mais controle",
              "Mais capacidade de escalar",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-purple-400" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4">
            <LiquidButton href="#" className="w-full sm:w-auto">
              AGENDAR DEMONSTRAÇÃO ESTRATÉGICA
            </LiquidButton>
            <p className="text-sm text-slate-400 font-medium">
              Sem compromisso • Demonstração personalizada • Sem risco
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-center text-slate-500 text-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p>&copy; {new Date().getFullYear()} Operação Pro. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

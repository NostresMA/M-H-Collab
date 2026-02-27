import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Cpu,
  TrendingUp,
  Megaphone,
  Heart,
  Shield,
  BookOpen,
  Users } from
'lucide-react';
const leftCapabilities = [
{
  icon: Cpu,
  label: 'AI & Automation'
},
{
  icon: TrendingUp,
  label: 'Growth Strategy'
},
{
  icon: Megaphone,
  label: 'Digital Marketing'
},
{
  icon: Brain,
  label: 'Data Intelligence'
}];

const rightCapabilities = [
{
  icon: Heart,
  label: 'Trauma-Informed Care'
},
{
  icon: Shield,
  label: 'Ethical Frameworks'
},
{
  icon: BookOpen,
  label: 'Clinical Expertise'
},
{
  icon: Users,
  label: 'Community Wellbeing'
}];

export function SynergySection() {
  return (
    <section
      id="synergy"
      className="py-24 md:py-32 bg-cream-200 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-80 h-80 bg-navy-400/5 rounded-full blur-[80px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sage-400/5 rounded-full blur-[80px] translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="text-3xl md:text-5xl font-serif font-bold text-navy-500 mb-6">

            Innovation Meets{' '}
            <span className="text-sage-400 italic">Empathy</span>
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.1
            }}
            className="text-lg text-navy-400">

            Two organizations, one shared conviction — that the future of mental
            health lives at the intersection of technological precision and
            human understanding.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-stretch">
          {/* LEFT — Star&Unicorn (The Brain) */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.7
            }}
            className="glass-dark rounded-glass p-8 md:p-10 lg:rounded-r-none">

            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Brain size={20} className="text-sage-200" />
              </div>
              <span className="text-xs font-medium uppercase tracking-widest text-white/40">
                The Brain
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">
              Star&Unicorn
            </h3>
            <p className="text-white/60 leading-relaxed mb-8 text-sm">
              Strategic technology partner delivering AI-powered solutions,
              digital marketing systems, and scalable platforms that drive
              measurable growth.
            </p>

            <div className="space-y-4">
              {leftCapabilities.map((cap, i) =>
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: -20
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: 0.3 + i * 0.08
                }}
                className="flex items-center gap-3">

                  <div className="w-8 h-8 rounded-lg bg-sage-400/20 flex items-center justify-center flex-shrink-0">
                    <cap.icon size={16} className="text-sage-400" />
                  </div>
                  <span className="text-white/80 text-sm font-medium">
                    {cap.label}
                  </span>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* RIGHT — LoveElement (The Heart) */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.7
            }}
            className="glass-sage rounded-glass p-8 md:p-10 lg:rounded-l-none">

            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-sage-400/15 flex items-center justify-center">
                <Heart size={20} className="text-sage-400" />
              </div>
              <span className="text-xs font-medium uppercase tracking-widest text-sage-400/60">
                The Heart
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy-500 mb-3">
              LoveElement
            </h3>
            <p className="text-navy-400 leading-relaxed mb-8 text-sm">
              Mental health initiative grounded in trauma-informed values,
              clinical expertise, and a deep commitment to accessible, ethical
              care for all.
            </p>

            <div className="space-y-4">
              {rightCapabilities.map((cap, i) =>
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: 20
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: 0.3 + i * 0.08
                }}
                className="flex items-center gap-3">

                  <div className="w-8 h-8 rounded-lg bg-white/60 flex items-center justify-center flex-shrink-0">
                    <cap.icon size={16} className="text-sage-400" />
                  </div>
                  <span className="text-navy-500 text-sm font-medium">
                    {cap.label}
                  </span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
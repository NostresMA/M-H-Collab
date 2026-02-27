import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, TrendingUp, Megaphone, Heart, Shield, BookOpen, Users } from 'lucide-react';
const leftCapabilities = [{
  icon: Cpu,
  label: 'ШІ та Автоматизація'
}, {
  icon: TrendingUp,
  label: 'Стратегія росту'
}, {
  icon: Megaphone,
  label: 'Цифровий маркетинг'
}, {
  icon: Brain,
  label: 'Інтелектуальний аналіз даних'
}];
const rightCapabilities = [{
  icon: Heart,
  label: 'Травма-інформована допомога'
}, {
  icon: Shield,
  label: 'Етичні рамки'
}, {
  icon: BookOpen,
  label: 'Клінічна експертиза'
}, {
  icon: Users,
  label: 'Благополуччя спільноти'
}];
export function SynergySectionUA() {
  return <section id="synergy" className="py-24 md:py-32 bg-cream-200 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-80 h-80 bg-navy-400/5 rounded-full blur-[80px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sage-400/5 rounded-full blur-[80px] translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-3xl md:text-5xl font-serif font-bold text-navy-500 mb-6">

            Інновації зустрічають{' '}
            <span className="text-sage-400 italic">Емпатію</span>
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }} className="text-lg text-navy-400">

            Дві організації, одне спільне переконання — майбутнє ментального
            здоров'я живе на перетині технологічної точності та людського
            розуміння.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-stretch">
          {/* LEFT — Star&Unicorn (The Brain) */}
          <motion.div initial={{
          opacity: 0,
          x: -40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }} className="glass-dark rounded-glass p-8 md:p-10 lg:rounded-r-none">

            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Brain size={20} className="text-sage-200" />
              </div>
              <span className="text-xs font-medium uppercase tracking-widest text-white/40">
                Мозок
              </span>
            </div>
            <a href="https://snu.agency" target="_blank" rel="noopener noreferrer">

              <img src="/3_2_SU_Logo_Horizontal_Full_Cyr_P.png" alt="Star&Unicorn" className="h-12 md:h-16 object-contain mb-3 mt-[20px]" />

            </a>
            <p className="text-white/60 leading-relaxed mb-8 text-sm">
              Експерти в маркетингу, автоматизації та проєктуванні ШІ-агентів.
              Відповідають за «двигун» вашого проєкту.
            </p>

            <div className="space-y-4">
              {leftCapabilities.map((cap, i) => <motion.div key={i} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.3 + i * 0.08
            }} className="flex items-center gap-3">

                  <div className="w-8 h-8 rounded-lg bg-sage-400/20 flex items-center justify-center flex-shrink-0">
                    <cap.icon size={16} className="text-sage-400" />
                  </div>
                  <span className="text-white/80 text-sm font-medium">
                    {cap.label}
                  </span>
                </motion.div>)}
            </div>
          </motion.div>

          {/* RIGHT — LoveElement (The Heart) */}
          <motion.div initial={{
          opacity: 0,
          x: 40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }} className="glass-sage rounded-glass p-8 md:p-10 lg:rounded-l-none">

            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-sage-400/15 flex items-center justify-center">
                <Heart size={20} className="text-sage-400" />
              </div>
              <span className="text-xs font-medium uppercase tracking-widest text-sage-400/60">
                Серце
              </span>
            </div>
            <a href="https://love-element.com" target="_blank" rel="noopener noreferrer">

              <img src="/Love_Element_Logo_purple.png" alt="LoveElement" className="h-12 md:h-16 object-contain mb-3 pt-[0px] mt-[20px]" />

            </a>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy-500 mb-3"></h3>
            <p className="text-navy-400 leading-relaxed mb-8 text-sm">
              Проєкт про усвідомлений розвиток та травмаінформований підхід.
              Відповідають за «душу» та етичність рішень.
            </p>

            <div className="space-y-4">
              {rightCapabilities.map((cap, i) => <motion.div key={i} initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.3 + i * 0.08
            }} className="flex items-center gap-3">

                  <div className="w-8 h-8 rounded-lg bg-white/60 flex items-center justify-center flex-shrink-0">
                    <cap.icon size={16} className="text-sage-400" />
                  </div>
                  <span className="text-navy-500 text-sm font-medium">
                    {cap.label}
                  </span>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}
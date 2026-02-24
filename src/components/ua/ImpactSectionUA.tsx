import React from 'react';
import { motion } from 'framer-motion';
import { Award, HeartPulse, Building2 } from 'lucide-react';
const trustPoints = [
{
  number: '15+',
  caption: 'Років експертизи в маркетингу та інноваціях',
  icon: Award,
  accentColor: 'bg-sage-400/10',
  iconColor: 'text-sage-400/30'
},
{
  number: '7',
  caption: "Років сервіс-дизайну в підтримці ментального здоров'я",
  icon: HeartPulse,
  accentColor: 'bg-warm-400/10',
  iconColor: 'text-warm-400/30'
},
{
  number: '2',
  caption: 'Засновані / керовані НУО в нашому портфоліо',
  icon: Building2,
  accentColor: 'bg-navy-400/5',
  iconColor: 'text-navy-400/20'
}];

export function ImpactSectionUA() {
  return (
    <section
      id="impact"
      className="py-24 md:py-32 bg-cream-100 relative overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sage-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
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
            className="text-3xl md:text-5xl font-serif font-bold text-navy-500 mb-5">

            Наш фундамент <span className="text-sage-400 italic">Довіри</span>
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

            Десятиліття спільного досвіду в технологіях, ментальному здоров'ї та
            соціальному впливі — основа всього, що ми будуємо.
          </motion.p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {trustPoints.map((point, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.12
            }}
            className="glass rounded-glass p-10 md:p-12 text-center relative overflow-hidden">

              {/* Soft background shape */}
              <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 ${point.accentColor} rounded-full blur-2xl pointer-events-none`} />


              {/* Decorative icon behind number */}
              <div className="relative mb-6">
                <span className="block text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-navy-500 leading-none">
                  {point.number}
                </span>
              </div>

              {/* Divider */}
              <div className="w-10 h-0.5 bg-sage-400/30 mx-auto mb-5 rounded-full" />

              {/* Caption */}
              <p className="text-navy-400 text-sm md:text-base leading-relaxed font-medium">
                {point.caption}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
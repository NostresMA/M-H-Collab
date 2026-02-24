import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
export function CTASectionUA() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-100 via-sage-100/20 to-sage-100/40 -z-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sage-400/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
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
            duration: 0.8
          }}>

          {/* Exclusivity badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-warm-400/10 border border-warm-400/20 mb-10">
            <Sparkles className="w-4 h-4 text-warm-400" />
            <span className="text-sm font-medium text-warm-400 tracking-wide">
              Пілотна програма — Обмежена доступність
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif font-bold text-navy-500 mb-6 leading-tight">
            Готові до технологічного стрибка{' '}
            <span className="text-sage-400 italic">у вашій діяльності?</span>
          </h2>

          <p className="text-lg md:text-xl text-navy-400 mb-12 max-w-xl mx-auto leading-relaxed">
            Це експериментальний проєкт, тому ми шукаємо обмежену кількість
            партнерів для пілотних запусків на особливих умовах.
          </p>

          <motion.div
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
              delay: 0.3
            }}
            className="flex flex-col items-center gap-4">

            <a
              href="#"
              className="group inline-flex items-center justify-center px-10 py-5 bg-navy-500 text-white rounded-full font-medium text-lg transition-all duration-300 hover:bg-navy-400 hover:shadow-2xl hover:shadow-navy-500/25">

              Забронювати консультацію
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <span className="text-sm text-navy-400/50">
              Безкоштовна 30-хвилинна стратегічна сесія · Без зобов'язань
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>);

}
import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  GraduationCap,
  Palette,
  Compass,
  ArrowRight } from
'lucide-react';
export function ServicesSectionUA() {
  const services = [
  {
    featured: true,
    category: 'Технології',
    icon: Rocket,
    title: 'Швидкі веб-додатки',
    description:
    'Клієнтські портали та цифрові платформи на базі Lovable, створені за дні, а не місяці. Сучасні, адаптивні та розроблені для масштабування вашої практики.'
  },
  {
    featured: false,
    category: 'Етика',
    icon: GraduationCap,
    title: 'Травма-інформоване навчання',
    description:
    'Комплексні навчальні програми, що озброюють вашу команду чутливістю та навичками для надання допомоги з використанням технологій без ризику ретравматизації.'
  },
  {
    featured: false,
    category: 'Візуал',
    icon: Palette,
    title: 'Брендинг та цифрова ідентичність',
    description:
    'Стратегічна еволюція бренду, що будує довіру з першого погляду — від систем візуальної ідентичності до цифрової присутності, яка відображає вашу експертизу та тепло.'
  },
  {
    featured: false,
    category: 'Стратегія',
    icon: Compass,
    title: 'Сервіс-дизайн та консалтинг',
    description:
    'Наскрізний дизайн сервісу, що картує шлях вашого клієнта, виявляє точки тертя та архітектурує рішення, що ґрунтуються як на даних, так і на емпатії.'
  }];

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-cream-200 relative overflow-hidden">

      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-sage-100/30 skew-x-12 pointer-events-none" />

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
            className="text-4xl md:text-5xl font-serif font-bold text-navy-500 mb-6">

            Наш інструментарій інновацій
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

            Чотири дисципліни, одна місія — озброїти фахівців з ментального
            здоров'я інструментами, які є настільки ж співчутливими, наскільки й
            передовими.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) =>
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
              delay: index * 0.1
            }}
            className={`p-8 rounded-glass relative overflow-hidden transition-all duration-300 flex flex-col h-full ${service.featured ? 'bg-navy-500 text-white shadow-xl shadow-navy-500/30 ring-1 ring-white/10' : 'glass'}`}>

              <div className="flex items-start justify-between mb-6">
                <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.featured ? 'bg-sage-400 text-white' : 'bg-sage-100 text-sage-400'}`}>

                  <service.icon size={24} strokeWidth={1.5} />
                </div>
                <span
                className={`text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full ${service.featured ? 'bg-sage-400/20 text-sage-200' : 'bg-sage-100 text-sage-400'}`}>

                  {service.category}
                </span>
              </div>

              <h3
              className={`text-2xl font-serif font-bold mb-3 ${service.featured ? 'text-white' : 'text-navy-500'}`}>

                {service.title}
              </h3>

              <p
              className={`leading-relaxed mb-8 flex-grow ${service.featured ? 'text-white/80' : 'text-navy-400'}`}>

                {service.description}
              </p>

              <a
              href="#"
              className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${service.featured ? 'text-sage-200 hover:text-white' : 'text-sage-400 hover:text-navy-500'}`}>

                Дізнатися більше <ArrowRight size={16} />
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
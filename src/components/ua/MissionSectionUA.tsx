import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Zap } from 'lucide-react';
export function MissionSectionUA() {
  const features = [
  {
    icon: Heart,
    title: 'Емпатія передусім',
    description:
    'Ми віримо, що технології повинні адаптуватися до потреб людини, а не навпаки. Кожен рядок коду написаний зі співчуттям.'
  },
  {
    icon: Shield,
    title: 'Довіра та Приватність',
    description:
    'Створення безпечних цифрових просторів, де користувачі почуваються захищеними, досліджуючи своє ментальне благополуччя.'
  },
  {
    icon: Zap,
    title: 'Інновації',
    description:
    'Використання передового ШІ та науки про дані для надання персоналізованої підтримки, яка масштабується для кожного.'
  }];

  return (
    <section id="mission" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-500 mb-6 leading-tight">
              Технології для <br />
              <span className="text-sage-400">Розквіту Людини</span>
            </h2>
            <p className="text-lg text-navy-400 mb-6 leading-relaxed">
              У світі, де все більше керують метрики та залученість, ми
              поставили інше запитання: Що якби технології були оптимізовані для
              душевного спокою?
            </p>
            <p className="text-lg text-navy-400 mb-8 leading-relaxed">
              Співпраця між Star&Unicorn та LoveElement представляє зміну
              парадигми. Ми переходимо від "утримання користувачів" до
              "відновлення людини", створюючи платформи, що підтримують складну,
              прекрасну реальність людського емоційного досвіду.
            </p>

            <div className="h-1 w-24 bg-sage-400 rounded-full"></div>
          </motion.div>

          <div className="grid gap-6">
            {features.map((feature, index) =>
            <motion.div
              key={index}
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
                duration: 0.5,
                delay: index * 0.1
              }}
              className="glass p-6 rounded-glass flex items-start space-x-4 hover:bg-white/80 transition-colors duration-300">

                <div className="p-3 bg-sage-100 rounded-xl text-sage-400">
                  <feature.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-navy-500 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-navy-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}
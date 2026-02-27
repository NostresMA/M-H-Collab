import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Zap } from 'lucide-react';
export function MissionSection() {
  const features = [
  {
    icon: Heart,
    title: 'Empathy First',
    description:
    'We believe technology should adapt to human needs, not the other way around. Every line of code is written with compassion.'
  },
  {
    icon: Shield,
    title: 'Trust & Privacy',
    description:
    'Creating safe digital spaces where users feel secure to explore their mental well-being without compromise.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description:
    'Leveraging cutting-edge AI and data science to provide personalized support that scales to reach everyone.'
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
              Technology for <br />
              <span className="text-sage-400">Human Flourishing</span>
            </h2>
            <p className="text-lg text-navy-400 mb-6 leading-relaxed">
              In a world increasingly driven by metrics and engagement, we asked
              a different question: What if technology was optimized for peace
              of mind?
            </p>
            <p className="text-lg text-navy-400 mb-8 leading-relaxed">
              The collaboration between Star&Unicorn and LoveElement represents
              a paradigm shift. We are moving beyond "user retention" to "human
              restoration," building platforms that support the complex,
              beautiful reality of the human emotional experience.
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
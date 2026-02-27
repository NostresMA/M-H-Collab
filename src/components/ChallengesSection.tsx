import React from 'react';
import { motion } from 'framer-motion';
import { FileStack, RefreshCw, ThermometerSnowflake, MessageSquareWarning } from 'lucide-react';
export function ChallengesSection() {
  const challenges = [{
    icon: ThermometerSnowflake,
    title: 'Fear of Cold Technology',
    description: 'Digital tools often feel sterile and impersonal. We design with warmth to prevent the risk of re-traumatization and ensure users feel safe.'
  }, {
    icon: FileStack,
    title: 'Administrative Overload',
    description: 'When routine tasks consume valuable time, the capacity for genuine human connection diminishes. We streamline the process to bring focus back to care.'
  }, {
    icon: RefreshCw,
    title: 'Outdated Brand Identity',
    description: 'Trust is the currency of mental health. An outdated digital presence can inadvertently signal a lack of modern, effective care methodologies.'
  }, {
    icon: MessageSquareWarning,
    title: 'Complex Communication',
    description: 'Translating clinical value into clear, accessible language is difficult. We bridge the gap between professional expertise and patient understanding.'
  }];
  return <section className="py-24 bg-cream-100 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sage-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy-500 mb-6">

            Why technology must serve{' '}
            <span className="text-sage-400 italic">humanity now</span>.
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
        }} className="text-lg text-navy-400 leading-relaxed">

            The intersection of mental health and digital innovation is fraught
            with challenges. We address these pain points directly to create a
            more compassionate future.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {challenges.map((challenge, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="bg-white/60 backdrop-blur-md border border-white/50 p-8 rounded-2xl hover:bg-white/80 transition-colors duration-300 shadow-sm hover:shadow-md">

              <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center text-sage-400 mb-6">
                <challenge.icon size={24} strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-serif font-bold text-navy-500 mb-3">
                {challenge.title}
              </h3>

              <p className="text-navy-400 text-sm leading-relaxed">
                {challenge.description}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}
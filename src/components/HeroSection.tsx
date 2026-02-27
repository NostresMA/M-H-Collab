import { motion } from 'framer-motion';
import { Sparkles, Clock, Heart, Mail, Table2 } from 'lucide-react';
import { trackBookingClick } from '../services/tracking';
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 lg:pt-0">
      {/* Background Decorative Elements - Repositioned for split layout */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{
            duration: 8,
            repeat: 999,
            ease: 'easeInOut'
          }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-sage-400 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/4" />

        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{
            duration: 10,
            repeat: 999,
            ease: 'easeInOut',
            delay: 1
          }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-navy-400 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left pt-10 lg:pt-0">
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                ease: 'easeOut'
              }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-sage-100/50 border border-sage-200/50 backdrop-blur-sm mb-8">

              <Sparkles className="w-4 h-4 text-sage-400" />
              <span className="text-sm font-medium text-navy-400 tracking-wide uppercase">
                Love Element x Star&Unicorn partnership
              </span>
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: 'easeOut'
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy-500 leading-[1.1] mb-6 text-balance">

              Transforming Mental Health Services with{' '}
              <span className="text-sage-400 italic">Strategy and AI</span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: 'easeOut'
              }}
              className="text-lg text-navy-400 max-w-xl mb-10 leading-relaxed">

              By combining LoveElement's trauma-informed, evidence-based care
              models with Star&Unicorn's strategic AI capabilities, we're
              creating digital ecosystems that are both technologically advanced
              and deeply human.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: 'easeOut'
              }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full">

              <a
                href="https://widget.easyweek.com.ua/love-element/team/152718/264489"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackBookingClick({ lang: 'en', context: 'Hero Section' })}
                className="group px-8 py-4 bg-navy-500 text-white rounded-full font-medium text-lg transition-all duration-300 hover:bg-navy-400 hover:shadow-xl hover:shadow-navy-500/20 flex items-center justify-center whitespace-nowrap shrink-0">

                Book a Session
              </a>

              <div className="flex items-center text-navy-400/70 text-sm font-medium whitespace-nowrap">
                <Clock className="w-4 h-4 mr-2" />
                <span>30-minute free consulting call</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Abstract Visual */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: 'easeOut'
            }}
            className="relative w-full aspect-square max-w-[500px] mx-auto lg:mx-0 flex items-center justify-center">

            {/* Background Soft Circles (Venn Diagram Effect) */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Purple Glow (Love Element side - Top Rightish) */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: 999,
                  ease: 'easeInOut'
                }}
                className="absolute w-64 h-64 bg-[#D8B4FE]/20 rounded-full blur-2xl translate-x-12 -translate-y-8 mix-blend-multiply" />

              {/* Blue Glow (Star&Unicorn side - Bottom Leftish) */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 9,
                  repeat: 999,
                  ease: 'easeInOut',
                  delay: 1
                }}
                className="absolute w-64 h-64 bg-navy-200/20 rounded-full blur-2xl -translate-x-12 translate-y-8 mix-blend-multiply" />

            </div>

            {/* Orbital Ring Paths (static, behind satellites) */}
            <svg
              className="absolute inset-0 w-full h-full z-[5] pointer-events-none"
              viewBox="0 0 500 500">

              {/* Inner orbit ring */}
              <motion.ellipse
                cx="250"
                cy="250"
                rx="130"
                ry="130"
                fill="none"
                stroke="rgba(124, 154, 130, 0.15)"
                strokeWidth="1"
                strokeDasharray="6 8"
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 60,
                  repeat: 999,
                  ease: 'linear'
                }}
                style={{
                  transformOrigin: '250px 250px'
                }} />

              {/* Outer orbit ring */}
              <motion.ellipse
                cx="250"
                cy="250"
                rx="200"
                ry="185"
                fill="none"
                stroke="rgba(27, 42, 74, 0.08)"
                strokeWidth="1"
                strokeDasharray="4 10"
                animate={{
                  rotate: [0, -360]
                }}
                transition={{
                  duration: 90,
                  repeat: 999,
                  ease: 'linear'
                }}
                style={{
                  transformOrigin: '250px 250px'
                }} />

            </svg>

            {/* Central Glass Orb */}
            <motion.div
              animate={{
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 6,
                repeat: 999,
                ease: 'easeInOut'
              }}
              className="relative w-72 h-72 rounded-full glass flex items-center justify-center z-10 overflow-hidden shadow-2xl shadow-sage-400/10 border border-white/60">

              {/* Inner Grid Pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, #1B2A4A 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }} />


              {/* Inner Radial Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sage-100/40 via-transparent to-white/40" />

              {/* Soft glow behind text */}
              <div className="absolute w-32 h-32 bg-sage-200/30 rounded-full blur-2xl" />

              {/* Social Services Text */}
              <motion.div
                animate={{
                  opacity: [0.55, 0.8, 0.55]
                }}
                transition={{
                  duration: 5,
                  repeat: 999,
                  ease: 'easeInOut'
                }}
                className="relative z-10 flex flex-col items-center text-center">

                <span className="text-xl font-serif font-bold italic text-navy-500/50 leading-tight tracking-wide">
                  Social
                </span>
                <span className="text-xl font-serif font-bold italic text-navy-500/50 leading-tight tracking-wide">
                  Services
                </span>
              </motion.div>
            </motion.div>

            {/* Satellite Orbs & Logos */}

            {/* 1. Love Element (Large - Top Right) */}
            <motion.div
              animate={{
                y: [0, -15, 0]
              }}
              transition={{
                duration: 5,
                repeat: 999,
                ease: 'easeInOut'
              }}
              className="absolute top-[12%] right-[5%] z-20">

              <div className="w-20 h-20 rounded-full glass flex items-center justify-center shadow-lg backdrop-blur-md border border-white/40 p-4 bg-white/30">
                <img
                  src="/Love_Element_Sign_purple_soft.png"
                  alt="Love Element"
                  className="w-full h-full object-contain" />

              </div>
            </motion.div>

            {/* 2. Star&Unicorn (Large - Bottom Left) */}
            <motion.div
              animate={{
                y: [0, 15, 0]
              }}
              transition={{
                duration: 7,
                repeat: 999,
                ease: 'easeInOut',
                delay: 0.5
              }}
              className="absolute bottom-[12%] left-[3%] z-20">

              <div className="w-24 h-24 rounded-full glass flex items-center justify-center shadow-lg backdrop-blur-md border border-white/40 p-5 bg-white/30">
                <img
                  src="/1_2_SU_Logo_Sign_Blue.png"
                  alt="Star&Unicorn"
                  className="w-full h-full object-contain" />

              </div>
            </motion.div>

            {/* 3. n8n (Small - Top Left) */}
            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 6,
                repeat: 999,
                ease: 'easeInOut',
                delay: 1.2
              }}
              className="absolute top-[22%] left-[8%] z-20">

              <div className="w-14 h-14 rounded-full glass flex items-center justify-center shadow-md border border-white/30 bg-white/60">
                <span className="font-bold text-[#EA4B71] text-sm tracking-tight">
                  n8n
                </span>
              </div>
            </motion.div>

            {/* 4. Lovable (Small - Bottom Right) */}
            <motion.div
              animate={{
                y: [0, 12, 0]
              }}
              transition={{
                duration: 8,
                repeat: 999,
                ease: 'easeInOut',
                delay: 2
              }}
              className="absolute bottom-[22%] right-[8%] z-20">

              <div className="w-16 h-16 rounded-full glass flex items-center justify-center shadow-md border border-white/30 bg-white/60 flex-col gap-0.5">
                <Heart className="w-4 h-4 text-[#E91E63] fill-[#E91E63]" />
                <span className="font-bold text-[#E91E63] text-[10px] leading-none">
                  Lovable
                </span>
              </div>
            </motion.div>

            {/* 5. Gemini (Small - Top Center) */}
            <motion.div
              animate={{
                y: [0, -8, 0]
              }}
              transition={{
                duration: 5.5,
                repeat: 999,
                ease: 'easeInOut',
                delay: 0.8
              }}
              className="absolute top-[3%] left-[42%] z-20">

              <div className="w-14 h-14 rounded-full glass flex items-center justify-center shadow-md border border-white/30 bg-white/60">
                <Sparkles className="w-6 h-6 text-[#1A73E8]" />
              </div>
            </motion.div>

            {/* 6. Google Sheets (Small - Right Center) */}
            <motion.div
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                duration: 6.5,
                repeat: 999,
                ease: 'easeInOut',
                delay: 1.5
              }}
              className="absolute top-[48%] right-[2%] z-20">

              <div className="w-13 h-13 w-[52px] h-[52px] rounded-full glass flex items-center justify-center shadow-md border border-white/30 bg-white/60">
                <Table2 className="w-5 h-5 text-[#34A853]" />
              </div>
            </motion.div>

            {/* 7. Gmail (Small - Bottom Center) */}
            <motion.div
              animate={{
                y: [0, 8, 0]
              }}
              transition={{
                duration: 7.5,
                repeat: 999,
                ease: 'easeInOut',
                delay: 2.5
              }}
              className="absolute bottom-[5%] left-[40%] z-20">

              <div className="w-[52px] h-[52px] rounded-full glass flex items-center justify-center shadow-md border border-white/30 bg-white/60">
                <Mail className="w-5 h-5 text-[#EA4335]" />
              </div>
            </motion.div>

            {/* 8. Google Vertex AI (Small - Left Center) */}
            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 6.8,
                repeat: 999,
                ease: 'easeInOut',
                delay: 1.8
              }}
              className="absolute top-[48%] left-[2%] z-20">

              <div className="w-[52px] h-[52px] rounded-full glass flex items-center justify-center shadow-md border border-white/30 bg-white/60">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 19.5H7.5L12 11.5L16.5 19.5H22L12 2Z"
                    fill="#1A73E8" />

                  <path d="M12 11.5L7.5 19.5H16.5L12 11.5Z" fill="#E8710A" />
                  <path
                    d="M7.5 19.5H2L12 11.5L7.5 19.5Z"
                    fill="#1A73E8"
                    opacity="0.7" />

                  <path
                    d="M16.5 19.5H22L12 11.5L16.5 19.5Z"
                    fill="#34A853"
                    opacity="0.8" />

                </svg>
              </div>
            </motion.div>

            {/* 9. Claude / Anthropic (Small - Between Bottom-Left and Bottom-Center) */}
            <motion.div
              animate={{
                y: [0, 11, 0]
              }}
              transition={{
                duration: 7.2,
                repeat: 999,
                ease: 'easeInOut',
                delay: 3
              }}
              className="absolute bottom-[20%] left-[28%] z-20">

              <div className="w-[52px] h-[52px] rounded-full glass flex items-center justify-center shadow-md border border-white/30 bg-white/60">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3C12 3 12.8 5.5 14.5 7.5C16.2 9.5 19 10.5 19 10.5C19 10.5 16.2 11.5 14.5 13.5C12.8 15.5 12 18 12 18C12 18 11.2 15.5 9.5 13.5C7.8 11.5 5 10.5 5 10.5C5 10.5 7.8 9.5 9.5 7.5C11.2 5.5 12 3 12 3Z"
                    fill="#D97757" />

                  <circle
                    cx="17.5"
                    cy="5.5"
                    r="2"
                    fill="#D97757"
                    opacity="0.6" />

                  <circle cx="6" cy="17" r="1.5" fill="#D97757" opacity="0.4" />
                </svg>
              </div>
            </motion.div>

            {/* Floating Decorative Dots */}
            <motion.div
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 4,
                repeat: 999
              }}
              className="absolute top-[10%] left-[25%] w-2 h-2 bg-sage-400 rounded-full opacity-60" />

            <motion.div
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 5,
                repeat: 999,
                delay: 2
              }}
              className="absolute bottom-[35%] right-[3%] w-1.5 h-1.5 bg-navy-400 rounded-full opacity-40" />

            <motion.div
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 6,
                repeat: 999,
                delay: 3
              }}
              className="absolute bottom-[8%] left-[20%] w-1.5 h-1.5 bg-sage-400 rounded-full opacity-30" />

          </motion.div>
        </div>
      </div>
    </section>);

}
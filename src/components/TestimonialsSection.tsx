import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, X } from 'lucide-react';
const testimonials = [
  {
    quote:
      'For the first time, our digital tools feel like an extension of our therapeutic space — not a disruption to it. The care that went into every interaction detail is remarkable.',
    name: 'Dr. Elena Vasquez',
    role: 'Clinical Psychologist',
    initials: 'EV'
  },
  {
    quote:
      'The trauma-informed training transformed how our entire team thinks about technology. We went from anxious about digital adoption to genuinely excited about the possibilities.',
    name: 'Dr. Marcus Chen',
    role: 'Trauma Specialist & Supervisor',
    initials: 'MC'
  },
  {
    quote:
      "Our client portal has a 94% adoption rate — unheard of in our field. Parents tell us it feels safe and intuitive. That's not an accident, it's intentional design.",
    name: 'Dr. Sarah Okonkwo',
    role: 'Child & Adolescent Psychologist',
    initials: 'SO'
  },
  {
    quote:
      "They didn't just redesign our brand — they helped us articulate our value in a way that resonates. Referrals increased 40% within three months of launching our new identity.",
    name: 'Dr. James Hartley',
    role: 'Practice Director, Hartley & Associates',
    initials: 'JH'
  }];

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);
  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    const cardWidth = el.firstElementChild ?
      (el.firstElementChild as HTMLElement).offsetWidth + 24 :
      400;
    setActiveIndex(Math.round(el.scrollLeft / cardWidth));
  };
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollState, {
      passive: true
    });
    updateScrollState();
    return () => el.removeEventListener('scroll', updateScrollState);
  }, []);
  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild ?
      (el.firstElementChild as HTMLElement).offsetWidth + 24 :
      400;
    el.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth'
    });
  };

  const closeModal = () => setSelectedTestimonial(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);
  return (
    <section className="py-24 md:py-32 bg-sage-100/30 relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-200/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-16">
          <div>
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
              className="text-3xl md:text-5xl font-serif font-bold text-navy-500 mb-4">

              Voices of Professionals
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
              className="text-lg text-navy-400 max-w-xl">

              Hear from the clinicians and practice leaders who've experienced
              the difference firsthand.
            </motion.p>
          </div>

          {/* Navigation Arrows */}
          <motion.div
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.2
            }}
            className="hidden md:flex items-center gap-3 mt-6 md:mt-0">

            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous testimonial"
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 ${canScrollLeft ? 'border-navy-500/20 text-navy-500 hover:bg-navy-500 hover:text-white hover:border-navy-500' : 'border-navy-500/10 text-navy-500/20 cursor-not-allowed'}`}>

              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Next testimonial"
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 ${canScrollRight ? 'border-navy-500/20 text-navy-500 hover:bg-navy-500 hover:text-white hover:border-navy-500' : 'border-navy-500/10 text-navy-500/20 cursor-not-allowed'}`}>

              <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}>

          {testimonials.map((testimonial, index) =>
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
              onClick={() => setSelectedTestimonial(testimonial)}
              className="min-w-[320px] md:min-w-[420px] max-w-[420px] h-[400px] flex-shrink-0 snap-start glass p-8 md:p-10 rounded-glass flex flex-col justify-between cursor-pointer group hover:border-sage-400/50 transition-colors">

              <div className="overflow-hidden">
                <Quote
                  size={32}
                  className="text-sage-400/40 mb-6 group-hover:text-sage-400/60 transition-colors"
                  strokeWidth={1.5} />

                <p className="font-serif text-navy-500 text-lg md:text-xl leading-relaxed italic line-clamp-6">
                  "{testimonial.quote}"
                </p>
                {testimonial.quote.length > 150 && (
                  <span className="text-sage-500 text-sm font-medium mt-2 inline-block">Read more →</span>
                )}
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-sage-200/40">
                <div className="w-11 h-11 rounded-full bg-sage-100 flex items-center justify-center text-sage-400 font-medium text-sm flex-shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-navy-500 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-navy-400/70 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Dot Indicators (mobile) */}
        <div className="flex md:hidden justify-center gap-2 mt-6">
          {testimonials.map((_, index) =>
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-sage-400 w-6' : 'bg-sage-400/25'}`} />

          )}
        </div>
      </div>

      {/* Testimonial Modal */}
      <AnimatePresence>
        {selectedTestimonial && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-navy-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-sage-50 text-navy-400 hover:text-navy-500 transition-colors"
              >
                <X size={24} />
              </button>

              <Quote size={48} className="text-sage-400/30 mb-8" strokeWidth={1.5} />

              <div className="space-y-6">
                <p className="font-serif text-navy-500 text-xl md:text-2xl leading-relaxed italic">
                  "{selectedTestimonial.quote}"
                </p>

                <div className="flex items-center gap-4 pt-8 border-t border-sage-100">
                  <div className="w-14 h-14 rounded-full bg-sage-50 flex items-center justify-center text-sage-400 font-semibold text-lg">
                    {selectedTestimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-navy-500 text-lg">
                      {selectedTestimonial.name}
                    </p>
                    <p className="text-navy-400/80">{selectedTestimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>);
}
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
const testimonials = [
{
  quote:
  'Вперше наші цифрові інструменти відчуваються як продовження нашого терапевтичного простору, а не перешкода йому. Увага до кожної деталі взаємодії вражає.',
  name: 'Д-р Елена Васкес',
  role: 'Клінічний психолог',
  initials: 'ЕВ'
},
{
  quote:
  'Травма-інформоване навчання змінило те, як вся наша команда думає про технології. Ми перейшли від тривоги щодо цифрової адаптації до щирого захоплення можливостями.',
  name: 'Д-р Маркус Чен',
  role: 'Спеціаліст з травми та супервізор',
  initials: 'МЧ'
},
{
  quote:
  'Наш клієнтський портал має 94% рівень прийняття — нечувано для нашої сфери. Батьки кажуть нам, що він відчувається безпечним та інтуїтивним. Це не випадковість, це навмисний дизайн.',
  name: 'Д-р Сара Оконкво',
  role: 'Дитячий та підлітковий психолог',
  initials: 'СО'
},
{
  quote:
  'Вони не просто переробили наш бренд — вони допомогли нам сформулювати нашу цінність так, щоб вона резонувала. Кількість звернень зросла на 40% протягом трьох місяців після запуску нашої нової ідентичності.',
  name: 'Д-р Джеймс Хартлі',
  role: 'Директор практики, Хартлі та Партнери',
  initials: 'ДХ'
}];

export function TestimonialsSectionUA() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
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

              Голоси професіоналів
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

              Почуйте від клініцистів та керівників практик, які відчули різницю
              на власному досвіді.
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
            className="min-w-[320px] md:min-w-[420px] max-w-[420px] flex-shrink-0 snap-start glass p-8 md:p-10 rounded-glass flex flex-col justify-between">

              <div>
                <Quote
                size={32}
                className="text-sage-400/40 mb-6"
                strokeWidth={1.5} />

                <p className="font-serif text-navy-500 text-lg md:text-xl leading-relaxed italic mb-8">
                  "{testimonial.quote}"
                </p>
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
    </section>);

}
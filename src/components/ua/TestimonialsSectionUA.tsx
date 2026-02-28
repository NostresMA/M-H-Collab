import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, X } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Дякуємо вашій команді за те, що допомогли здійснити нашу давню мрію - створення «Неба Пам’яті», онлайн-меморіального простору для батьків, які пережили втрату. Завдяки вашій підтримці ми змогли подарувати родинам місце пам’яті та турботи, де можна зберегти спогади про своїх діток.',
    name: 'Команда ГО «Опіка Ангела»',
    role: 'Організація підтримки',
    initials: 'ОА'
  },
  {
    quote:
      'Хочу подякувати усій команді «СТАР ЕНД ЮНІКОРН» за допомогу у запуску мого аудіо-курсу. Наша спільна плідна робота втілилася в чудовому інформаційному продукті. Нам вдалося досягти покладених цілей, реалізувати задумане і створити дуже чуйний інфопродукт для думаючого споживача. Дякую усім, хто постійно був на звʼязку зі мною, допомагав розібратися в тонкощах автоматизації моєї програми та просування курсу. Ваші поради та рекомендації покращили кінцевий результат. Ми створили глибокий аудіо-курс з чуттєвим телеграм каналом, що дає відчуття присутності автора на всіх етапах проходження курсу. Це саме те чого я хотіла. Дякують вам за сервісність, тактовність та культуру спілкування, системність та образність в роботі. Бажаю вдячних клієнтів та цікавих нових проєктів.',
    name: 'Тетяна Попович',
    role: 'Перинатальна психологиня, гештальт-терапевтка',
    initials: 'ТП'
  },
  {
    quote:
      'Консультація пройшла в дуже приємній атмосфері. Спеціалісти дуже компетентні. Я отримала багато корисної інформації 😊',
    name: 'Ірина Рега',
    role: 'Практичний психолог',
    initials: 'ІР'
  },
  {
    quote:
      'Дякуємо вам за допомогу в оновленні нашої онлайн-програми «Бути Батьками Ангела». Завдяки вашим зусиллям ми додали нові можливості та покращили користувацький досвід, зробивши програму більш доступною та зручною для батьків, які потребують підтримки.',
    name: 'Команда ГО «Опіка Ангела»',
    role: 'Програма «Бути Батьками Ангела»',
    initials: 'ОА'
  }
];

export function TestimonialsSectionUA() {
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
      (el.firstElementChild as HTMLElement).offsetWidth + 48 :
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
      (el.firstElementChild as HTMLElement).offsetWidth + 48 :
      400;
    el.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-24 md:py-32 bg-sage-100/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-200/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mb-14 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-navy-500 mb-4"
          >
            Досвід тих, хто вже з нами
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-navy-400 max-w-xl mb-8"
          >
            Ми вже допомагаємо професіоналам поєднувати етику терапії з інноваціями.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex items-center gap-3"
          >
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous testimonial"
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 ${canScrollLeft ? 'border-navy-500/20 text-navy-500 hover:bg-navy-500 hover:text-white hover:border-navy-500' : 'border-navy-500/10 text-navy-500/20 cursor-not-allowed'}`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Next testimonial"
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 ${canScrollRight ? 'border-navy-500/20 text-navy-500 hover:bg-navy-500 hover:text-white hover:border-navy-500' : 'border-navy-500/10 text-navy-500/20 cursor-not-allowed'}`}
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-12 overflow-x-auto py-10 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => testimonial.quote.length > 200 && setSelectedTestimonial(testimonial)}
              className={`min-w-[320px] md:min-w-[420px] max-w-[420px] h-[400px] flex-shrink-0 snap-start glass p-8 md:p-10 rounded-glass flex flex-col justify-between transition-all duration-300 relative hover:z-10 ${testimonial.quote.length > 200 ? 'cursor-pointer hover:bg-white/40 hover:shadow-xl hover:-translate-y-1' : ''}`}
            >
              <div className="flex-1 overflow-hidden">
                <Quote size={32} className="text-sage-400/40 mb-6" strokeWidth={1.5} />
                <div className="relative h-[180px] overflow-hidden">
                  <p className="font-serif text-navy-500 text-lg md:text-xl leading-relaxed italic line-clamp-6">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-sage-200/40">
                <div className="w-11 h-11 rounded-full bg-sage-100 flex items-center justify-center text-sage-400 font-medium text-sm flex-shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-navy-500 text-sm">{testimonial.name}</p>
                  <p className="text-navy-400/70 text-sm line-clamp-1">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="px-4 sm:px-6 lg:px-8 flex md:hidden justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-sage-400 w-6' : 'bg-sage-400/25'}`}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy-500/40 backdrop-blur-sm"
            onClick={() => setSelectedTestimonial(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedTestimonial(null)}
                className="absolute top-6 right-6 text-navy-300 hover:text-navy-500 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <Quote size={40} className="text-sage-400/40 mb-8" strokeWidth={1.5} />

              <div className="mb-10">
                <p className="font-serif text-navy-500 text-xl md:text-2xl leading-relaxed italic">
                  "{selectedTestimonial.quote}"
                </p>
              </div>

              <div className="flex items-center gap-5 pt-8 border-t border-sage-100">
                <div className="w-14 h-14 rounded-full bg-sage-100 flex items-center justify-center text-sage-400 font-semibold text-lg">
                  {selectedTestimonial.initials}
                </div>
                <div>
                  <p className="font-bold text-navy-500 text-lg">{selectedTestimonial.name}</p>
                  <p className="text-navy-400/70">{selectedTestimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
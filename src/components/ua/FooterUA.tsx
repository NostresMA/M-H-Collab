import React from 'react';
import { Phone, Mail, ExternalLink } from 'lucide-react';
export function FooterUA() {
  return <footer className="bg-navy-500 text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-14">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-5">
              <span className="font-serif text-xl font-bold text-white tracking-tight">
                Star&Unicorn
              </span>
              <span className="text-sage-400 font-light">×</span>
              <span className="font-serif text-xl font-bold text-sage-400 tracking-tight">
                LoveElement
              </span>
            </div>
            <p className="text-white/50 leading-relaxed text-sm">
              Стратегічний альянс, присвячений гуманізації технологій та
              забезпеченню доступності підтримки ментального здоров'я для
              кожного.
            </p>
          </div>

          {/* Partner Sites */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Наші партнери
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="https://snu.agency" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/60 hover:text-sage-400 transition-colors text-sm">

                  snu.agency
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="https://love-element.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/60 hover:text-sage-400 transition-colors text-sm">

                  love-element.com
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Навігація
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#mission" className="text-white/60 hover:text-sage-400 transition-colors text-sm">

                  Місія
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/60 hover:text-sage-400 transition-colors text-sm">

                  Послуги
                </a>
              </li>
              <li>
                <a href="#synergy" className="text-white/60 hover:text-sage-400 transition-colors text-sm">

                  Синергія
                </a>
              </li>
              <li>
                <a href="#impact" className="text-white/60 hover:text-sage-400 transition-colors text-sm">

                  Вплив
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Зв'язатися
            </h4>
            <div className="flex gap-3">
              <a href="tel:+380969453153" aria-label="LinkedIn" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-sage-400 hover:border-sage-400/30 transition-all">

                <Phone size={18} />
              </a>
              <a href="mailto:collab@snu.agency" aria-label="Instagram" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-sage-400 hover:border-sage-400/30 transition-all">

                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/30">
          <p>
            &copy; {new Date().getFullYear()} Star&Unicorn × LoveElement. Всі
            права захищено.
          </p>
          <p>Спроектовано з емпатією, створено з точністю.</p>
        </div>
      </div>
    </footer>;
}
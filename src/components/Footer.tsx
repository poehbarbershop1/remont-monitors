import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Monitor className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">МониторСервис</span>
            </div>
            <p className="text-gray-400 mb-4">
              Профессиональный ремонт и обслуживание мониторов всех типов и брендов
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Clock className="h-4 w-4" />
              <span>Работаем ежедневно 9:00-21:00</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><Link to="/diagnostics" className="text-gray-400 hover:text-white transition-colors">Диагностика</Link></li>
              <li><Link to="/repair" className="text-gray-400 hover:text-white transition-colors">Ремонт</Link></li>
              <li><Link to="/maintenance" className="text-gray-400 hover:text-white transition-colors">Обслуживание</Link></li>
              <li><Link to="/parts" className="text-gray-400 hover:text-white transition-colors">Запчасти</Link></li>
              <li><Link to="/warranty" className="text-gray-400 hover:text-white transition-colors">Гарантия</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">О компании</Link></li>
              <li><Link to="/prices" className="text-gray-400 hover:text-white transition-colors">Цены</Link></li>
              <li><Link to="/reviews" className="text-gray-400 hover:text-white transition-colors">Отзывы</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Блог</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">info@monitorservice.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">Москва, ул. Примерная, 123</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 МониторСервис. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'О группе', href: '#about' },
    { name: 'Музыка', href: '#music' },
    { name: 'Галерея', href: '#gallery' },
    { name: 'Видео', href: '#video' },
    { name: 'Магазин', href: '/shop' },
    { name: 'Контакты', href: '#contacts' }
  ];

  const socialLinks = [
    { name: 'Telegram', href: '#', icon: 'telegram' },
    { name: 'VK', href: '#', icon: 'vk' },
    { name: 'YouTube', href: '#', icon: 'youtube' },
    { name: 'Яндекс Музыка', href: '#', icon: 'yandex-music' },
  ]


  // Обработчик скролла для изменения стилей шапки.
  // Если пользователь прокручивает страницу больше, чем на 10 пикселей вниз, то добавляются динамические стили шапки `... ${isScrolled ? 'bg-black/90 py-2' : 'bg-black/50 py-4'}`
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  // Закрытие меню при изменении размера экрана
  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth >= 768) { // 768px — стандартный брейкпойнт для перехода на десктоп
        setIsMenuOpen(false); // Закрывается бургер
      }
    };
    window.addEventListener('resize', handleResize)
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all diration-300 ${isScrolled ? 'bg-black/90 py-2' : 'bg-black/50 py-4'}`}>
      <div className='container mx-auto p-8 flex items-center justify-between'>
        {/*Навигационное меню (левая часть)*/}
        <div className='flex items-center'>
          {/* Бургер для мобилок */}
          <button 
            className='md:hidden mr-4 text-white focus:outline-none' 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label='Меню'
          >
            <svg className='w-6 h-6' fill="none" stroke="currentColor" viewBox='0 0 24 24'>
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Полное меню для десктопа */}
          <nav className='hidden md:flex space-x-6'>
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className='font-cinzel font-normal text-white hover:text-yellow-400 transition-colors '
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Логотип */}
        <div className='flex-shrink-0 mx-4'>
          <Link 
            href='/' 
            className='block'
          >
            <Image 
              src='/images/Logo_black.png' 
              alt='Bogobes' 
              width={120} 
              height={60} 
              className='h-12 w-auto' 
              priority 
            />
          </Link>
        </div>
                {/* Соцсети (правая часть) */}
        <div className="flex items-center space-x-4">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={item.name}
              >
                {item.icon === 'telegram' && (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.534.26l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.12l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.57-4.46c.538-.196 1.006.128.832.94z" />
                  </svg>
                )}
                {item.icon === 'vk' && (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.073 2H8.938C3.332 2 2 3.333 2 8.927v6.136C2 20.667 3.323 22 8.927 22h6.136C20.667 22 22 20.677 22 15.073V8.938C22 3.332 20.677 2 15.073 2zm3.073 14.27h-1.459c-.552 0-.718-.447-1.708-1.437-.864-.866-1.229-.937-1.448-.937-.302 0-.385.083-.385.5v1.312c0 .354-.115.562-1.042.562-1.51 0-3.062-.531-4.208-1.438-2.062-1.729-2.583-3.021-2.583-5.25 0-.271.083-.5.5-.5h1.459c.375 0 .51.167.656.552.708 2.084 1.916 3.854 2.604 3.854.229 0 .333-.104.333-.677v-2.146c-.062-.979-.582-1.062-.582-1.416 0-.146.146-.292.333-.292h2.292c.291 0 .375.146.375.49v3.104c0 .375.188.49.24.49.229 0 .407-.104.792-.469 1.291-1.291 1.708-3.125 1.708-3.125 0-.218.115-.427.479-.427h1.459c.354 0 .479.208.427.469-.229 1.562-1.666 4.083-1.666 4.083-.146.229-.229.354 0 .583.125.229.5.666.791 1.083.354.521.729 1.041.729 1.343 0 .25-.167.395-.479.395z" />
                  </svg>
                )}
                {item.icon === 'youtube' && (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                )}
                {item.icon === 'yandex-music' && (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5c-5.799 0-10.5-4.701-10.5-10.5S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5zm4.5-12.75v-1.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 .75.75h7.5a.75.75 0 0 0 .75-.75zm0 3v-1.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 .75.75h7.5a.75.75 0 0 0 .75-.75zm0 3v-1.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 .75.75h7.5a.75.75 0 0 0 .75-.75z" />
                  </svg>
                )}
            </a>
          ))}
        </div>
        {/* Мобильное меню (появляется при нажатии на бургер) */}
        {isMenuOpen && (
          <div className='absolute top-full left-0 w-full bg-black/95 md:hidden shadow-lg'>
            <nav className='flex flex-col py-4'>
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className='px-4 py-3 text-white hover:bg-grey-800 transition-colors font-medium' 
                  onClick={() => setIsMenuOpen(false)}
                >
                {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
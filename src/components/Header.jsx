import { useState, useEffect, useRef } from 'react';

function Header() {
  const [links] = useState(['Features', 'Team', 'Signin']);
  const headerRef = useRef();

  useEffect(function () {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 100) {
        headerRef.current.style.cssText = `
          background-color:#0c1524;
          padding:20px 0;
        `;
      } else {
        headerRef.current.style.cssText = `
        background-color:transparent;
        padding:60px 0;
      `;
      }
    });
  }, []);

  return (
    <header
      className="pt-[60px] fixed top-0 left-0 w-full z-50 transition-all duration-200"
      ref={headerRef}
    >
      <div className="container mx-auto flex justify-between items-center gap-[30px] sm:gap-0 flex-col sm:flex-row">
        <a href="/">
          <img src="/src/assets/images/logo.svg" alt="Logo" />
        </a>
        <nav>
          <ul className="flex items-center gap-[50px]">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLocaleLowerCase()}`}
                  className="text-white opacity-[0.9] hover:underline hover:translate-opacity duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

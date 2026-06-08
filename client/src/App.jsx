import { useState, useEffect } from 'react';
import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import Ticker         from './components/Ticker';
import Story          from './components/Story';
import Deserve        from './components/Deserve';
import CreditCards    from './components/CreditCards';
import Upgrade        from './components/Upgrade';
import Security       from './components/Security';
import Ratings        from './components/Ratings';
import Exclusive      from './components/Exclusive';
import FAQ            from './components/FAQ';
import Footer         from './components/Footer';
import AIChat         from './components/AIChat';
import SearchOverlay  from './components/SearchOverlay';

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handler = e => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      <Navbar onSearchOpen={() => setSearchOpen(true)} />
      <main>
        <Hero />
        <Ticker />
        <Story />
        <Deserve />
        <CreditCards />
        <Upgrade />
        <Security />
        <Ratings />
        <Exclusive />
        <FAQ />
      </main>
      <Footer />
      <AIChat />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

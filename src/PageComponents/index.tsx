import Hero from './Hero';
import Footer from './Footer';
import Special from './Special';
import Promotion from './Promotion';
import Categories from './Categories';
import Reservation from './Reservation';
import Subscribe from './Subscribe';
import MobileHeader from './Header/MobileHeader';
import { useResize } from '../Hooks';

const main = () => {
  const [width] = useResize();
  return (
    <>
      {width <= 500 && <MobileHeader />}
      <Hero />
      <Categories />
      <Special />
      <Promotion />
      <Reservation />
      <Subscribe />
      <Footer />
    </>
  );
};

export default main;

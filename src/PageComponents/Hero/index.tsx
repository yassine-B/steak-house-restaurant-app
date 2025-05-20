import React from 'react';
import Banner from './Banner';
import DesktopHeader from '../Header/DesktopHeader';
import { useResize } from '@src/Hooks';

const styles = {
  hero_container: 'static flex h-96 items-center sm:relative',
  hero: 'bg-hero relative rounded-bl-3xl h-full w-full md:w-10/12',
  hero_header: 'absolute w-full z-20',
  hero_overlay: 'absolute z-10 w-full h-full bg-gradient-t-dark_1',
  banner: 'm-auto absolute w-full z-20 xs:w-10/12 md:static md:w-7/12'
};
export default function Hero() {
  const [width] = useResize();
  return (
    <div className={`${styles.hero_container} ${width <= 500 ? 'bg-hero ' : ''}`}>
      {width <= 500 && <div className={styles.hero_overlay}></div>}
      <div className={styles.banner}>
        <Banner />
      </div>
      {width > 500 && (
        <div className={styles.hero}>
          <div className={styles.hero_overlay}></div>
          <div className={styles.hero_header}>
            <DesktopHeader />
          </div>
        </div>
      )}
    </div>
  );
}

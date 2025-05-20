import { Fragment } from 'react';
import Link from 'next/link';
import { navigationList } from '@public/DummyData/data';

const styles = {
  nav: 'flex flex-row items-center justify-between mt-4 mx-5 mb-auto lg:w-8/12',
  link: 'text-white uppercase',
  login_button: 'text-white px-5 py-2 border-white border-px border-2 rounded uppercase text-sm',
  active_link: 'text-white bg-primary p-2 rounded-md'
};

const Navigation = () => {
  const result = navigationList.map((nav) => {
    return (
      <Fragment key={nav.id}>
        <Link href="#">
          <a className={`${styles.link} ${nav.path_name === 'home' ? styles.active_link : ''}`}>
            {nav.path_name}
          </a>
        </Link>
      </Fragment>
    );
  });
  return (
    <header>
      <nav className={styles.nav}>
        {result}
        <button className={styles.login_button}>login</button>
      </nav>
    </header>
  );
};

export default Navigation;

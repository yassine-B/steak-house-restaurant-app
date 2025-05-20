import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CloseIcon, MobileToggleIcon } from '@public/icons';

import { useToggle } from '@src/Hooks/useToggle';
import { navigationList } from '@public/DummyData/data';
import Logo from '@src/Components/Logo';

export const styles = {
  header_container:
    'fixed z-40 flex flex-row justify-between w-full h-12 bg-accentColor  px-4 items-center',
  header_overlay: 'w-full z-30 fixed bg-gray-800 h-100vh',
  header_menu_list: 'flex items-center justify-between',
  header_menu_list_content: 'flex items-center w-14',
  header_menu_button: 'pr-0 pl-0',
  header_navigation_list: 'fixed z-30 w-full bg-primary flex flex-col items-center py-6 gap-2',
  header_navigation_list_item: 'text-white flex gap-2 items-center uppercase'
};
export const mobileMenuVariants = {
  hidden: { y: '-100%' },
  visible: { y: '48px' }
};
export const mobileIconVariants = {
  open: { rotate: [45, 90] },
  closed: { rotate: 0 }
};

function MobileHeader() {
  const { isOpen, onToggle, onClose } = useToggle();

  const navigationLinks = navigationList.map((nav) => {
    const { icon, path_name } = nav;
    return (
      <li className={styles.header_navigation_list_item}>
        <span>{icon}</span> <span>{path_name}</span>
      </li>
    );
  });
  const navigationHeader = (
    <header className={`${styles.header_container}`}>
      <Logo />
      <div className={`${styles.header_menu_list}`}>
        <button className={styles.header_menu_button} onClick={onToggle}>
          <motion.div
            animate={isOpen ? 'open' : 'closed'}
            variants={mobileIconVariants}
            transition={{ duration: 0.3 }}>
            {isOpen ? <CloseIcon /> : <MobileToggleIcon />}
          </motion.div>
        </button>
      </div>
    </header>
  );
  const navigationListComponent = (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={mobileMenuVariants}
          transition={{ duration: 0.5 }}
          className={styles.header_navigation_list}>
          <ul>{navigationLinks}</ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
  return (
    <section className="relative">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.header_overlay}></motion.div>
        )}
      </AnimatePresence>
      {navigationHeader}
      {navigationListComponent}
    </section>
  );
}

export default MobileHeader;

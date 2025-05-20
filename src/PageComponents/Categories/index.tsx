import React from 'react';
import { content } from '@public/DummyData/data';
import Wrapper from '@src/Components/Wrapper';
import SectionHeader from '@src/Components/SectionHeader';
import { useResize } from '@src/Hooks';

const styles = {
  wrapper:
    'grid grid-cols-1 gap-10 w-8/10 mx-auto xs:w-10/12 sm:w-full sm:grid-cols-2 lg:grid-cols-3',
  card: ' bg-white p-6 border-0 rounded-xl shadow-xl',
  icon: 'bg-primary text-white align-center w-max rounded-md p-1.5',
  header: 'my-4',
  title: 'font-bold capitalize text-xl mb-2',
  description: 'font-medium',
  button:
    'flex justify-around gap-2 items-center px-4 border py-2 rounded capitalize font-medium text-gray-600 hover:text-white hover:bg-primary transition-all ease-in focus-none'
};
export default function Categories() {
  const [width] = useResize();
  const result = content.categoriesSection.categories.map((item) => {
    const { id, icon, title, description, buttonText, buttonIcon } = item;
    return (
      <div key={id} className={styles.card}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>

        <button className={styles.button}>
          <span>{buttonText}</span>
          {buttonIcon && <span>{buttonIcon}</span>}
        </button>
      </div>
    );
  });
  return (
    <>
      <Wrapper>
        <SectionHeader
          textAlign={width <= 769 ? 'center' : 'left'}
          title={content.categoriesSection.title}
          subTitle={content.categoriesSection.description}
          link={content.categoriesSection.linkText}
        />
        <div className={styles.wrapper}>{result}</div>
      </Wrapper>
    </>
  );
}

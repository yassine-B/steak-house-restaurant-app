import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Header from '@src/Components/SectionHeader';
import { content } from '@public/DummyData/data';
import { useResize } from '@src/Hooks';

const styles = {
  specials_container: 'gap-10 mx-auto my-20 w-10/12',
  specials_list: 'grid md:grid-cols-2 gap-5',
  card: 'p-2 flex relative bg-white border rounded-lg shadow-xl overflow-hidden flex-col sm:flex-row md:flex-col lg:flex-row',
  badge: 'ml-2 text-white text-sm bg-primary p-2 rounded-md tracking-widest',
  card_image:
    'rounded-md overflow-hidden relative w-full h-56 sm:h-full sm:w-1/3 md:h-56 md:w-full lg:w-1/3 lg:h-full',
  card_header: 'py-4 px-4 sm:w-2/3 md:w-full lg:w-2/3',
  card_title: 'font-bold capitalize text-xl',
  card_description: 'font-medium text-sm my-2',
  card_price_container: 'flex gap-6 items-center mt-4',
  card_price:
    'uppercase text-md py-2 px-4 border rounded-xl border-primary text-primary font-bold ',
  card_old_price: 'uppercase line-through text-sm font-semibold'
};

interface specialsProps {
  discount: string;
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  imageSource: StaticImageData;
  imageDescription: string;
}
const SpecialCard = ({
  discount,
  title,
  imageSource,
  imageDescription,
  description,
  price,
  oldPrice
}: specialsProps) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image
            objectFit="cover"
            layout="fill"
            placeholder="blur"
            blurDataURL={imageSource.blurDataURL}
            src={imageSource.src}
            alt={imageDescription}
          />
        </div>
        <div className={styles.card_header}>
          <h1 className={styles.card_title}>
            {title} <span className={styles.badge}>-{discount}</span>
          </h1>
          <p className={styles.card_description}>{description}</p>
          <div className={styles.card_price_container}>
            <button className={styles.card_price}>{price}</button>
            <p className={styles.card_old_price}>{oldPrice && `${oldPrice}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};
const Specials = () => {
  const [width] = useResize();
  return (
    <div className={styles.specials_container}>
      <Header
        textAlign={width <= 769 ? 'center' : 'left'}
        title={content.specialTodaySection.title}
        subTitle={content.specialTodaySection.description}
        link={content.specialTodaySection.linkText}
      />
      <div className={styles.specials_list}>
        {content.specialTodaySection.specials.map((item) => {
          return (
            <SpecialCard
              key={item.id}
              discount={item.discount}
              title={item.title}
              imageSource={item.imageSource}
              imageDescription={item.imageDescription}
              description={item.description}
              price={item.price}
              oldPrice={item.oldPrice}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Specials;

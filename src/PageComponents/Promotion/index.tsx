import React from 'react';
import Image from 'next/image';
import Header from '@src/Components/SectionHeader';
import Wrapper from '@src/Components/Wrapper';
import { content } from '@public/DummyData/data';
import { useResize } from '@src/Hooks';

const styles = {
  promotions_container: 'grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3',
  promotion_card:
    ' overflow-hidden relative w-full h-52 text-white rounded-xl flex flex-col justify-end',
  promotion_title: 'text-white font-bold capitalize text-md',
  promotion_link: 'text-white text-sm capitalize text-gray-100'
};

const PromotionsList = () => {
  const result = content.promotionSection.promotions.map((promotion) => {
    return (
      <div key={promotion.id} className={styles.promotion_card}>
        <Image
          objectFit="cover"
          layout="fill"
          placeholder="blur"
          blurDataURL={promotion.imageSource.blurDataURL}
          className="absolute z-10"
          src={promotion.imageSource.src}
          alt={promotion.imageDescription}
        />
        <div className="h-full w-full absolute z-20 overlay"></div>
        <div className="cursor-pointer absolute p-2 z-30">
          <h1 className={styles.promotion_title}>{promotion.title}</h1>
          <p className={styles.promotion_link}>{promotion.description}</p>
        </div>
      </div>
    );
  });
  return <>{result}</>;
};

const Promotion = () => {
  const [width] = useResize();
  return (
    <Wrapper>
      <Header
        textAlign={width <= 769 ? 'center' : 'left'}
        title={content.promotionSection.title}
        subTitle={content.promotionSection.description}
        link={content.promotionSection.linkText}
      />

      <div className={styles.promotions_container}>
        <PromotionsList />
      </div>
    </Wrapper>
  );
};
export default Promotion;

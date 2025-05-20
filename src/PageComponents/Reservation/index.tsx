import React from 'react';
import Wrapper from '@src/Components/Wrapper';
import Header from '@src/Components/SectionHeader';
import ReservationForm from './ReservationFrom';
import { useResize } from '@src/Hooks';
import { content } from '@public/DummyData/data';

const styles = {
  reservation_container: 'grid grid-cols-1 gap-10 m-auto md:w-10/12 lg:grid-cols-2 lg:w-full',
  reservation_form: 'w-full h-full',
  reservation_image:
    'relative bg-reservation overflow-hidden mx-auto w-full h-96 rounded-xl flex flex-col justify-end sm:w-10/12',
  reservation_image_overlay: 'bg-gradient-b-dark_2 absolute z-20 h-full w-full',
  reservation_image_title:
    'absolute z-40 text-white p-4 font-semibold text-2xl tracking-wider capitalize'
};

export default function Reservation() {
  const [width] = useResize();
  return (
    <Wrapper>
      <Header
        textAlign={width >= 1024 ? 'left' : 'center'}
        title={content.reservationSection.title}
        subTitle={content.reservationSection.description}
      />

      <div className={styles.reservation_container}>
        <div className={styles.reservation_form}>
          <ReservationForm />
        </div>
        <div className={styles.reservation_image}>
          <div className={styles.reservation_image_overlay}></div>
          <h1 className={styles.reservation_image_title}>
            {content.reservationSection.imageTitle}
          </h1>
        </div>
      </div>
    </Wrapper>
  );
}

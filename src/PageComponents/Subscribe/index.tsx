import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Wrapper from '@src/Components/Wrapper';
import SectionHeader from '@src/Components/SectionHeader';
import { ArrowIcon } from '@public/icons';
import { content } from '@public/DummyData/data';

const subscribeSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required')
});

const styles = {
  subscribe_container: 'flex flex-col items-center',
  form_container: 'flex flex-col gap-2',
  form: 'flex items-center justify-between bg-white w-80 p-2 rounded-md',
  form_input: 'w-10/12 p-2',
  form_button: 'p-1 bg-primary text-white rounded-md',
  form_input_error_message: 'pl-2 text-primary'
};
function Subscribe() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(subscribeSchema)
  });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
    reset();
  };
  return (
    <Wrapper>
      <div className={styles.subscribe_container}>
        <SectionHeader
          textAlign="center"
          title={content.subscribeSection.title}
          subTitle={content.subscribeSection.description}
        />
        <div className={styles.form_container}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <input
              className={styles.form_input}
              type="text"
              {...register('email')}
              placeholder="your email address"
            />
            <button type="submit" className={styles.form_button}>
              <ArrowIcon />
            </button>
          </form>
          {errors.email && (
            <p className={styles.form_input_error_message}>{errors.email.message}</p>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default Subscribe;

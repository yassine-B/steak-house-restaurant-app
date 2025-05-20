import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { content } from '@public/DummyData/data';

const reservationSchema = yup.object().shape({
  fullname: yup.string().required('Full name is required'),
  number: yup
    .string()
    .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),
  date: yup.date().required('Date is required').typeError('Invalid date'),
  time: yup.string().required('Time is required'),
  message: yup.string().optional()
});

const styles = {
  reservation_form: 'flex flex-col gap-6',
  reservation_input_group_container: 'flex w-full gap-6 flex-col sm:flex-row',
  reservation_input_group: 'flex flex-col gap-1 w-full sm:w-1/2',
  reservation_input_error_message: 'pl-2 text-primary',
  reservation_input: 'py-3 px-4 w-full rounded-md',
  reservation_textarea: 'text-md py-3 px-4 rounded-md ',
  reservation_button_group: 'flex flex-col items-start gap-2',
  reservation_note: ' text-md font-bold w-full',
  reservation_button:
    'py-3 px-4 bg-red-700 rounded-xl text-1xl uppercase text-white font-bold tracking-widest'
};
const ReservationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(reservationSchema)
  });

  const onSubmit = (data: any) => {
    console.log(data);
    alert(JSON.stringify(data, null, 2));
    reset();
  };
  return (
    <form className={styles.reservation_form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.reservation_input_group_container}>
        <div className={styles.reservation_input_group}>
          <input
            className={styles.reservation_input}
            type="text"
            placeholder=" full name"
            {...register('fullname')}
          />
          {errors.fullname && (
            <p className={styles.reservation_input_error_message}>{errors.fullname.message}</p>
          )}
        </div>
        <div className={styles.reservation_input_group}>
          <input
            className={styles.reservation_input}
            placeholder=" phone number"
            {...register('number')}
          />
          {errors.number && (
            <p className={styles.reservation_input_error_message}>{errors.number.message}</p>
          )}
        </div>
      </div>

      <div className={styles.reservation_input_group_container}>
        <div className={styles.reservation_input_group}>
          <input
            className={styles.reservation_input}
            type="date"
            placeholder="select date"
            {...register('date')}
          />
          {errors.date && (
            <p className={styles.reservation_input_error_message}>{errors.date.message}</p>
          )}
        </div>
        <div className={styles.reservation_input_group}>
          <input
            className={styles.reservation_input}
            type="time"
            placeholder="select time"
            {...register('time')}
          />
          {errors.time && (
            <p className={styles.reservation_input_error_message}>{errors.time.message}</p>
          )}
        </div>
      </div>

      <textarea
        className={styles.reservation_textarea}
        rows={6}
        {...register('message')}
        placeholder=" Leave your note (optional)"
      />

      <div className={styles.reservation_button_group}>
        <p className={styles.reservation_note}>{content.reservationSection.note}</p>
        <button type="submit" className={styles.reservation_button}>
          {content.reservationSection.linkText}
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;

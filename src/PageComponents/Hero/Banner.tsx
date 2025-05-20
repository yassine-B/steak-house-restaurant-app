import { content } from '@public/DummyData/data';
import { ArrowIcon } from '@public/icons';

const styles = {
  banner: 'w-10/12 md:w-11/12 m-auto',
  title: 'text-4xl text-white font-semibold tracking-wide text-3xl md:4xl md:text-black',
  sub_title: 'font-semibold tracking-wider my-3 text-md text-white md:text-black',
  button:
    'flex gap-2 items-center capitalize bg-primary font-semibold px-4 py-4 rounded-lg text-white'
};
export default function Banner() {
  return (
    <div className={styles.banner}>
      <div>
        <div>
          <h1 className={styles.title}>{content.heroSection.title}</h1>
        </div>
        <h2 className={styles.sub_title}>{content.heroSection.subTitle}</h2>
        <button className={styles.button}>
          <span>{content.heroSection.buttonText}</span>
          <span>
            <ArrowIcon />
          </span>
        </button>
      </div>
    </div>
  );
}

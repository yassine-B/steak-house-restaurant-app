import { content } from '@public/DummyData/data';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '@public/icons';
import Logo from '@src/Components/Logo';

const styles = {
  footer:
    'grid grid-cols-1 gap-4 border-t-2 pt-4 border-gray-400 mx-auto w-10/12 my-10 place-items-center text-center md:grid-cols-4 lg:flex lg:flex-wrap lg:justify-between',
  footer_info_title: 'text-lg tracking-wide capitalize font-bold mb-2 text-gray-700',
  footer_social_media_container: 'flex gap-2 text-gray-600'
};

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Logo rounded />
      <div>
        <h1 className={styles.footer_info_title}>address:</h1>
        <p>{content.footerSection.address}</p>
      </div>
      <div>
        <h1 className={styles.footer_info_title}>tel:</h1>
        <p>{content.footerSection.tel}</p>
      </div>
      <div>
        <h1 className={styles.footer_info_title}>email:</h1>
        <p>{content.footerSection.email}</p>
      </div>
      <div>
        <h1 className={styles.footer_info_title}>social media:</h1>
        <div className={styles.footer_social_media_container}>
          <span>
            <InstagramIcon />
          </span>
          <span>
            <FacebookIcon />
          </span>
          <span>
            <TwitterIcon />
          </span>
          <span>
            <YoutubeIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

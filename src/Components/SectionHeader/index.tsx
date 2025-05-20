import React from 'react';

interface sectionHeaderProps {
  title: string;
  subTitle: string;
  link?: string;
  textAlign?: 'center' | 'left';
}

const styles = {
  header: 'mb-5',
  title: 'font-semibold text-2xl xs:text-3xl capitalize mb-2',
  subTitle: 'font-medium text-lg',
  link: 'text-primary capitalize underline cursor-pointer'
};

export default function SectionHeader({
  title,
  subTitle,
  textAlign = 'left',
  link
}: sectionHeaderProps) {
  return (
    <div className={`${styles.header} text-${textAlign}`}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subTitle}>
        {subTitle}
        {link && <span className={styles.link}>{link}</span>}
      </p>
    </div>
  );
}

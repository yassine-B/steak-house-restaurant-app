import React from 'react';

type IProps = {
  children: React.ReactChild[] | React.ReactChild;
};

const styles = {
  wrapper: 'my-20 w-10/12 mx-auto'
};

const Wrapper = ({ children }: IProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};
export default Wrapper;

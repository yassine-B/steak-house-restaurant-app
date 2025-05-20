import React from 'react';
import Image from 'next/image';
import logoImg from '@public/images/logo.jpg';

function Logo({ rounded = false }: { rounded?: boolean }) {
  return (
    <div className={`relative rounded-full overflow-hidden ${rounded ? 'h-32 w-32' : 'h-10 w-16'}`}>
      <Image
        layout="fill"
        placeholder="blur"
        blurDataURL={logoImg.blurDataURL}
        src={logoImg.src}
        alt="logo image"
      />
    </div>
  );
}

export default Logo;

import React from 'react';

import { config } from '../config/siteData';

type ILogoProps = {
  xl?: boolean;
  showTitle?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '64' : '32';
  const fontStyle = props.xl ? 'font-semibold text-3xl' : 'font-semibold text-xl';

  return (
    <span className={`text-primary-100 inline-flex items-center font-cursive ${fontStyle}`}>
      {/* <svg
        className="text-primary-500 stroke-current mr-1"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <rect x="3" y="12" width="6" height="8" rx="1" />
        <rect x="9" y="8" width="6" height="12" rx="1" />
        <rect x="15" y="4" width="6" height="16" rx="1" />
        <path d="M4 20h14" />
      </svg> */}

      <img
        className="mr-2"
        width={size}
        height={size}
        alt="logo"
        src="/assets/images/logo.png"
      />

      {props.showTitle && config.site_name}
    </span>
  );
};

export { Logo };

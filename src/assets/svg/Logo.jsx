import React from 'react';

export default function LogoSvg({ color = 'currentColor' }) {
  return (
    <svg
      width="76"
      viewBox="0 0 77 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.107 0.130859L11.8734 17.9937L17.6399 0.130859H23.7391L15.5423 23.87H8.17363L0 0.130859H6.107Z"
        fill={color}
      ></path>
      <path
        d="M38.9987 23.8466L33.8298 14.895H32.5121V23.8466H26.7391V0.136575H36.6064C38.2571 0.0826855 39.8978 0.410461 41.3989 1.09401C42.6283 1.66919 43.6536 2.5999 44.3403 3.76392C45.0108 4.95134 45.3493 6.29505 45.3207 7.65592C45.3658 9.23966 44.8588 10.7903 43.8853 12.0461C42.8226 13.3243 41.3493 14.201 39.7125 14.5292L45.3913 23.87L38.9987 23.8466ZM32.5121 10.9719H36.0966C37.0097 11.0379 37.9143 10.76 38.6301 10.1935C38.9107 9.89608 39.1255 9.54365 39.2606 9.15889C39.3956 8.77413 39.4481 8.36557 39.4145 7.95949C39.4419 7.55746 39.3865 7.15409 39.2517 6.77401C39.1168 6.39393 38.9053 6.04511 38.6301 5.74884C37.9269 5.17036 37.0221 4.89063 36.1123 4.97044H32.5121V10.9719Z"
        fill={color}
      ></path>
      <path
        d="M53.4783 0.130859V23.87H48.3913V0.130859H53.4783Z"
        fill={color}
      ></path>
      <path
        d="M76.8261 23.87H71.2842L62.0202 9.29606V23.87H56.4783V0.130859H62.0202L71.2842 14.8373V0.130859H76.8261V23.87Z"
        fill={color}
      ></path>
    </svg>
  );
}

import React from 'react';

export default function CloseSvg({ color = 'currentColor' }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2786_9881)">
        <path
          d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          fill={color}
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2786_9881">
          <rect
            width="24"
            height="24"
            fill={color}
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );
}

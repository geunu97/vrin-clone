import React from 'react';

export default function ArrowRightSvg({ color = 'currentColor' }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        opacity="0.8"
        cx="18"
        cy="18"
        r="18"
        transform="matrix(-1 0 0 1 36 0)"
        fill="white"
      ></circle>
      <path
        d="M15.3 11.7002L21.6 18.0002L15.3 24.3002"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
    </svg>
  );
}

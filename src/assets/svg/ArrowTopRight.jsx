const ArrowTopRightSvg = ({ color = 'currentColor' }) => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.2">
        <path
          d="M18.7208 37.5996L16.8008 35.6796L33.1208 19.3596H18.2408V16.6396H37.7608V36.1596H35.0408V21.2796L18.7208 37.5996Z"
          fill={color}
        ></path>
        <circle
          cx="28"
          cy="28"
          r="27.3333"
          stroke={color}
          strokeWidth="1.33333"
        ></circle>
      </g>
    </svg>
  );
};

export default ArrowTopRightSvg;

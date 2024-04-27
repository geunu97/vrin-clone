const ArrowLeftSvg = ({ color = 'currentColor' }) => {
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
        fill="white"
      ></circle>
      <path
        d="M20.7 11.7002L14.4 18.0002L20.7 24.3002"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

export default ArrowLeftSvg;

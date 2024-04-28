const DotSvg = ({ color = 'currentColor' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <circle
        cx="12.5"
        cy="12"
        r="3"
        fill={color}
      ></circle>
    </svg>
  );
};

export default DotSvg;

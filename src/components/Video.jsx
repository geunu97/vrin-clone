const Video = ({ width = '100%', height = '100%', loop = true, playsInline = true, autoPlay = true, muted = true, className = '', src }) => {
  return (
    <video
      className={className}
      width={width}
      height={height}
      loop={loop}
      playsInline={playsInline}
      autoPlay={autoPlay}
      muted={muted}
      src={src}
    />
  );
};

export default Video;

import Head from 'next/head';

const Meta = () => {
  return (
    <Head>
      {/* HTML Meta Tags */}
      <title>VRIN 3D</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=0"
      />
      <meta
        name="description"
        content="3D Model generated with AI, Mobile 3D Scanner"
      />

      {/* Facebook Meta Tags */}
      <meta
        property="og:url"
        content="https://vrin.co.kr"
      />
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:title"
        content="VRIN 3D"
      />
      <meta
        property="og:description"
        content="3D Model generated with AI, Mobile 3D Scanner"
      />
      <meta
        property="og:image"
        content="https://vrin.co.kr/web_thumbnail.png"
      />

      {/* Twitter Meta Tags */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        property="twitter:domain"
        content="vrin.co.kr"
      />
      <meta
        property="twitter:url"
        content="https://vrin.co.kr"
      />
      <meta
        name="twitter:title"
        content="VRIN 3D"
      />
      <meta
        name="twitter:description"
        content="3D Model generated with AI, Mobile 3D Scanner"
      />
      <meta
        name="twitter:image"
        content="https://vrin.co.kr/web_thumbnail.png"
      />
    </Head>
  );
};

export default Meta;

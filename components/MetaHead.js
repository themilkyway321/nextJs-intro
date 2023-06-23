import Head from "next/head";

export default function MetaHead({ metaTitle }) {
  return (
    <Head>
      <title>{metaTitle}</title>
    </Head>
  );
}
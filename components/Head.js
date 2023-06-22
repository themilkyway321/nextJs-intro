import Head from "next/head";

export default function Head({ title }) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
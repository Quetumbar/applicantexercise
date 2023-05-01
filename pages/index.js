// index.js

import Head from 'next/head';
import FilterNFTs from '../components/FilterNFTs';
import { HomePageWrapper } from '../styles/HomeStyles';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Midnight Breeze by Dutchtide Studios</title>
        <meta name="description" content="Midnight Breeze by Dutchtide Studios" />
        <meta property="twitter:title" content="Midnight Breeze by Dutchtide Studios" />
        <meta property="twitter:description" content="Midnight Breeze" />
        <meta property="og:description" content="Midnight Breeze" />
        <meta property="og:title" content="Midnight Breeze" />
        <meta property="og:url" content="https://www.midnightbreeze.io/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:image" content="https://www.midnightbreeze.store/thumbnail.png" />
        <meta property="twitter:image" content="https://www.midnightbreeze.store/thumbnail.png" />
      </Head>

      <HomePageWrapper>
        <div className="header-home-intro">
          <h1>Midnight Breeze Applicant Exercise - Quetumbar</h1>
        </div>
        <FilterNFTs />
      </HomePageWrapper>
    </div>
  );
}

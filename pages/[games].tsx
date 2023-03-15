import {
  builder,
  BuilderComponent,
  BuilderContent,
  useIsPreviewing,
} from '@builder.io/react';
import Head from 'next/head';
import DefaultErrorPage from 'next/error';
import React from 'react';
import gamePage from './gamePage';

builder.init('6c0d4021155d4cd3b77463a8a938bea8');

export interface GamePage {
  // children?: JSX.Element | JSX.Element[];
  children?: React.ReactNode;
}

function Games({ game }) {
  const isPreviewing = useIsPreviewing();
  if (!game && !isPreviewing) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    );
  }

  return (
    <BuilderContent
      content={game}
      options={{ includeRefs: true }}
      model="game-data"
    >
      {(content) => (
        <>
          <Head>
            <title>{content?.data.title}</title>
            <meta name="description" content={content?.data.blurb} />
            <meta name="og:image" content={content?.data.image} />
          </Head>

          <div>
            <div>{content?.data.title}</div>

            <BuilderComponent
              name="game-data"
              content={content}
              options={{ includeRefs: true }}
            />
          </div>
        </>
      )}
    </BuilderContent>
  );
}

export async function getStaticProps({ params }) {
  const game = await builder
    .get('game-data', {
      options: { includedRefs: true },
      query: {
        'data.handle': params.handle,
      },
    })
    .promise();

  return {
    props: {
      game,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export default Games;

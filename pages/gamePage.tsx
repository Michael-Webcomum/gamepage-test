import { builder } from '@builder.io/react';
import Link from 'next/link';

builder.init('6c0d4021155d4cd3b77463a8a938bea8');

const gamesPerPage = 1;

function gamePage({ games }) {
  return (
    <div>
      {games.map((item) => (
        <Link href={`/${item.data.handle}`}>
          <div css={{ overflow: 'hidden', width: 300 }}>
            <div css={{ width: 300, height: 200, display: 'block' }}>
              <img src={item.data.image} />
            </div>
            {item.data.title}
            {item.data.description}
          </div>
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps({ query }) {
  const games = await builder.getAll('game-data', {
    options: { includeRefs: true },
    omit: 'data-blocks',
    limit: gamesPerPage,
  });

  return { games };
}

export default gamePage;

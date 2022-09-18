import axios from 'axios';
import { useEffect } from 'react';

import { getRandomFact } from 'services/chuckNorris';

export const Card = () => {
  useEffect(() => {
    const res = getRandomFact();
    console.log(res);
  });

  return (
    <div className="bg-light border-none max-w-sm max-h-64 rounded-lg shadow-lg px-5 py-5">
      <div className="flex flex-col gap-4 mb-5">
        <p className="text-xl text-left text-dark">Title</p>
        <p className="text-lg text-left text-dark">Content</p>
      </div>
      <div className="flex flex-row gap-3">
        <span className="inline-block bg-neutral rounded-full px-4 text-sm font-lora font-semibold text-dark">
          Label #1
        </span>
        <span className="inline-block bg-neutral rounded-full px-4 text-sm font-lora font-semibold text-dark">
          Label #2
        </span>
      </div>
    </div>
  );
};

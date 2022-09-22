/* eslint-disable react/jsx-newline */
import { TiHeart } from 'react-icons/ti';

import { Anchor } from 'components/Anchor';

export const Footer = () => {
  return (
    <div
      className="
          flex flex-col
          sm:flex-row
          gap-5
          bottom-0 mb-5
          items-center justify-center
          w-full
          
        "
    >
      <Anchor href="https://api.chucknorris.io/">About the API</Anchor>

      <p className="flex flex-row">
        Designed and Built with <TiHeart className="m-1" /> by
        <Anchor href="https://www.celinesoeiro.com/">Celine Soeiro</Anchor>
      </p>
    </div>
  );
};

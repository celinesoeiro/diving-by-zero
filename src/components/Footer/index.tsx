import { TiHeart } from 'react-icons/ti';

import { Typography } from 'components/Typography';

export const Footer = () => {
  return (
    <div className="max-w-7xl w-full">
      <div
        className="
          flex flex-row
          gap-8 
          bottom-0 
          absolute 
          items-center justify-center
          w-full h-20
          px-20
        "
      >
        <a
          className="
            text-dark text-end
            font-poppins font-semibold
            w-full
            justify-end
            underline
            underline-offset-4
            hover:text-primary
            transition-colors
          "
          href="https://api.chucknorris.io/"
          target={'_blank'}
          rel="noreferrer"
        >
          About the API
        </a>

        <Typography alignment="center">
          Designed and Built with <TiHeart className="m-1" /> by Celine Soeiro
        </Typography>
      </div>
    </div>
  );
};

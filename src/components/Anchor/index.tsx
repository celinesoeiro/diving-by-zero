import { PropsWithChildren } from 'react';

interface AnchorProps extends PropsWithChildren {
  href: string;
}

export const Anchor: React.FC<AnchorProps> = ({ href, children }) => (
  <a
    className="
    text-dark text-end
    font-poppins font-semibold
    flex
    md:justify-end
    justify-center content-center self-center
    underline
    underline-offset-4
    hover:text-primary
    transition-colors
    mx-1
  "
    href={href}
    target={'_blank'}
    rel="noreferrer"
  >
    {children}
  </a>
);

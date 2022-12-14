import { PropsWithChildren } from 'react';

type Colors = 'neutral' | 'primary' | 'secondary' | 'dark' | 'light';

interface TypographyProps extends PropsWithChildren, React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'heading' | 'highlight' | 'text' | 'text_display';
  color?: Colors;
  weight?: 'bold' | 'medium' | 'light';
  alignment?: 'center' | 'left' | 'justify';
  animation?: boolean;
  blur?: boolean;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'text',
  color = 'dark',
  weight = 'bold',
  alignment = 'left',
  animation = false,
  blur = false,
  children,
  ...props
}) => {
  const heading = () => {
    return (
      <h1
        className={`
        flex
        text-${color}
        lg:text-9xl
        md:text-7xl
        sm:text-6xl
        text-7xl
        font-poppins uppercase font-${weight} italic
        text-center md:text-left
        self-center items-center justify-center
        my-5
        ${animation ? `hover:animate-horizontalShaking` : ''}
        ${blur ? `blur-sm hover:blur-0` : 'blur-0'}
        `}
        {...props}
      >
        {children}
      </h1>
    );
  };

  const text = () => {
    return (
      <p
        className={`
          text-md text-${color} text-${alignment}
          font-poppins font-${weight} 
          w-full my-2
          shadow-${color} drop-shadow-2xl 
          flex flex-row align-center
          ${blur ? `blur-sm hover:blur-0` : 'blur-0'}
          `}
        {...props}
      >
        {children}
      </p>
    );
  };

  const highlight = () => {
    return (
      <p
        className={`text-md font-poppins font-${weight} text-${color} text-${alignment} w-full shadow-${color} drop-shadow-2xl my-2`}
        {...props}
      >
        {children}
      </p>
    );
  };

  const textDisplay = () => {
    return (
      <p
        className={`text-lg sm:text-xl text-${alignment} text-${color} font-poppins font-${weight} my-2
        ${blur ? `blur-sm hover:blur-0` : 'blur-0'}
        `}
      >
        {children}
      </p>
    );
  };

  switch (variant) {
    case 'heading':
      return heading();
    case 'text':
      return text();
    case 'highlight':
      return highlight();
    case 'text_display':
      return textDisplay();
    default:
      return text();
  }
};

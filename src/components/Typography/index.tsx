import { PropsWithChildren } from 'react';

type Colors = 'neutral' | 'primary' | 'secondary' | 'dark' | 'light';

interface TypographyProps extends PropsWithChildren, React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'heading' | 'highlight' | 'text' | 'text_display';
  color?: Colors;
  weight?: 'black' | 'bold' | 'medium' | 'light';
  alignment?: 'center' | 'left' | 'justify';
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'text',
  color = 'dark',
  weight = 'bold',
  alignment = 'left',
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
        md:text-8xl
        sm:text-7xl
        text-4xl
        h-full
        font-poppins uppercase font-${weight} italic
        text-${alignment} md:text-left
        self-center items-center justify-center
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
          w-full
          shadow-${color} drop-shadow-2xl 
          flex flex-row align-center`}
        {...props}
      >
        {children}
      </p>
    );
  };

  const highlight = () => {
    return (
      <p
        className={`text-md font-poppins font-${weight} text-${color} text-${alignment} w-full shadow-${color} drop-shadow-2xl`}
        {...props}
      >
        {children}
      </p>
    );
  };

  const textDisplay = () => {
    return (
      <p
        className={`text-lg sm:text-xl text-${alignment} text-${color} font-poppins font-${weight}`}
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

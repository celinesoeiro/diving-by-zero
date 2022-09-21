import { Typography } from 'components/Typography';
import { Wrapper } from 'components/Wrapper';

interface ErrorProps {
  status: '404' | '500';
  message: string;
}

export const NotFound: React.FC<ErrorProps> = ({ status, message }) => {
  return (
    <Wrapper>
      <div className="flex flex-col justify-center w-full h-full content-center items-center px-5">
        <Typography variant="heading">{status}</Typography>

        <Typography variant="text_display" alignment="center">
          {message}
        </Typography>
      </div>
    </Wrapper>
  );
};

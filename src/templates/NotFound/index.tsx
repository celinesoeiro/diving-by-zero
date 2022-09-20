import { Typography } from 'components/Typography';
import { Wrapper } from 'components/Wrapper';

interface ErrorProps {
  status: '404' | '500';
  message: string;
}

export const NotFound: React.FC<ErrorProps> = ({ status, message }) => {
  return (
    <Wrapper>
      <div className="flex flex-col">
        <Typography variant="heading">{status}</Typography>

        <Typography variant="text_display">{message}</Typography>
      </div>
    </Wrapper>
  );
};

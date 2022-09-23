import { useRouter } from 'next/router';

import { Typography } from 'components/Typography';
import { Wrapper } from 'components/Wrapper';
import { Button } from 'components/Button';

interface ErrorProps {
  status: '404' | '500';
  message: string;
}

export const NotFound: React.FC<ErrorProps> = ({ status, message }) => {
  const router = useRouter();

  return (
    <Wrapper>
      <div className="flex flex-col justify-center w-full h-full content-center items-center px-5">
        <Typography variant="heading" animation>
          {status}
        </Typography>

        <Typography variant="text_display" alignment="center">
          {message}
        </Typography>

        <Button onClick={() => router.push('/')} label="back to homepage" />
      </div>
    </Wrapper>
  );
};

import { NotFound } from 'templates/NotFound';

export const Error: React.FC = () => {
  return (
    <NotFound status="404" message="If Chuck Norris couldn't find, it's because it doesn't exist" />
  );
};

export default Error;

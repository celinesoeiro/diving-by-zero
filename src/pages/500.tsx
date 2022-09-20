import { NotFound } from 'templates/NotFound';

export const Error: React.FC = () => {
  return (
    <NotFound
      status="500"
      message="Unfortunatelly this server was not made by Chuck Norris, otherwise it would know how to handle the situation"
    />
  );
};

export default Error;

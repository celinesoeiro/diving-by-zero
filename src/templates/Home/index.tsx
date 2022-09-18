import { Card } from 'components/Card';

export const Hero = () => {
  return (
    <div className="bg-image bg-bottom bg-no-repeat bg-cover flex w-full h-full">
      <div className="grid grid-cols-2 w-full">
        <div className="text-dark w-full">
          <h1>Chuck Norris Facts</h1>
        </div>
        <div className="w-full">
          <Card />
        </div>
      </div>
    </div>
  );
};

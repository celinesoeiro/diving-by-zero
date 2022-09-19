import { Spinner } from 'components/Spinner';
import { Bagde } from 'components/Bagde';

interface CardProps {
  content: string;
  categories: string[];
  loading?: boolean;
}

export const Card: React.FC<CardProps> = ({ content, categories, loading }) => {
  return (
    <div
      className="
      bg-light 
      rounded border-none 
      max-w-md max-h-64 
      overflow-auto
      shadow-lg 
      px-6 sm:px-8 py-5
      w-full"
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex flex-col gap-4">
            <p className="text-xl sm:text-2xl text-left sm:text-justify text-dark font-poppins font-semibold">
              {content}
            </p>
          </div>
          {categories.length > 0 && (
            <div className="flex flex-row gap-3">
              {categories.map((category) => (
                <Bagde color="neutral" key={category} label={category} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

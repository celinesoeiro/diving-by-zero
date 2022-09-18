interface CardProps {
  content: string;
  categories: string[];
}

export const Card: React.FC<CardProps> = ({ content, categories }) => {
  return (
    <div
      className="
      bg-light 
      rounded-lg border-none 
      max-w-md max-h-64 
      overflow-auto
      shadow-lg 
      px-6 sm:px-8 py-5
      w-full"
    >
      <div className="flex flex-col gap-4">
        <p className="text-xl sm:text-2xl text-left sm:text-justify text-dark font-poppins font-semibold">
          {content}
        </p>
      </div>
      <div className="flex flex-row gap-3">
        {categories.map((category) => (
          <span className="inline-block bg-neutral rounded-full px-4 text-sm font-poppins font-medium text-dark mt-5">
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

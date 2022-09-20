import { useEffect, useState } from 'react';

import { Bagde } from 'components/Bagde';
import { Spinner } from 'components/Spinner';
import { Typography } from 'components/Typography';

interface CardProps {
  content?: string;
  categories?: string[] | [];
  loading?: boolean;
  hasToggle?: boolean;
}

export const Card: React.FC<CardProps> = ({ content, categories, loading, hasToggle = false }) => {
  const [showMore, setShowMore] = useState(true);
  const [text, setText] = useState(content);

  const limit = 75;

  useEffect(() => {
    if (hasToggle && content && content.length > limit) {
      setText(`${content?.substring(0, limit)}...`);

      return;
    }

    setText(content);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  const showWholeContent = () => {
    setShowMore((current) => !current);

    if (showMore === true) {
      setText(content);

      return;
    }

    setText(`${content ? content.substring(0, limit) : ''}...`);
  };

  return (
    <div
      className="
      bg-light 
      rounded border-none 
      max-w-lg max-h-64 
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
            <Typography alignment="center" variant="text_display">
              {text}
            </Typography>

            {hasToggle && (
              <button
                className="font-semibold text-xs text-secondary cursor-pointer self-end"
                onClick={showWholeContent}
              >
                Show {showMore ? 'more' : 'less'}
              </button>
            )}
          </div>

          {categories && categories.length > 0 && (
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

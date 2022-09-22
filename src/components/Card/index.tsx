import { useEffect, useState, HTMLAttributes } from 'react';

import { Bagde } from 'components/Bagde';
import { Spinner } from 'components/Spinner';
import { Typography } from 'components/Typography';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  content?: string;
  categories?: string[] | [];
  loading?: boolean;
  hasToggle?: boolean;
  factId?: string;
}

export const Card: React.FC<CardProps> = ({
  content,
  categories,
  loading,
  hasToggle = false,
  factId,
  ...props
}) => {
  const [showMore, setShowMore] = useState(true);
  const [showsButton, setShowsButton] = useState(false);
  const [text, setText] = useState(content);
  const [isExplicit, setIsExplicit] = useState(false);

  const limit = 75;

  useEffect(() => {
    if (hasToggle && content && content.length > limit) {
      setText(`${content?.substring(0, limit)}...`);
      setShowsButton(true);

      return;
    }

    setText(content);
  }, [content]);

  useEffect(() => {
    if (categories && categories?.length > 0) {
      categories?.map((category) => {
        if (category === 'explicit') {
          setIsExplicit(true);
        } else {
          setIsExplicit(false);
        }
      });
    } else {
      setIsExplicit(false);
    }
  }, [categories, factId]);

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
      overflow-auto
      shadow-lg
      p-5 sm:p-6
      w-full h-full
      max-h-40"
      {...props}
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex flex-col gap-4 h-full justify-center">
            <Typography alignment="center" variant="text_display" blur={isExplicit}>
              {text}
            </Typography>

            {hasToggle && showsButton && (
              <button
                className="font-semibold text-xs text-secondary cursor-pointer self-end p-0 m-0"
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

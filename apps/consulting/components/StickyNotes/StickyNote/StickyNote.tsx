import { FC } from 'react';

import clsx from 'clsx';

import { Button } from './Button';
import { Description } from './Description';
import { Header } from './Header';
import { TStickyNoteComponentProps } from './types';
import {
  getBackgroundColor,
  getFirstNoteMargins,
  getLastNoteMargins,
} from './utils';

export const StickyNote: FC<TStickyNoteComponentProps> = ({
  title,
  variant,
  buttonLink,
  buttonText,
  description,
  descriptionSize,
  isFirst,
  isLast,
  notesVariant,
}) => {
  const showButton = buttonLink && buttonText;
  const noteStyle = clsx(
    'h-full basis-1/2 px-[2.5rem] pb-[3.9rem] sm:mx-0 sm:px-[5.1rem] sm:pb-[5.1rem] sm:pt-[4.1rem]',
    isFirst && 'z-1 relative ml-[2rem] pt-[2.8rem] sm:ml-0',
    isLast &&
      'mr-[2rem] mt-[-9rem] pt-[11.8rem] sm:mr-0 sm:mt-0 sm:pt-[4.1rem]',
    isFirst && getFirstNoteMargins(notesVariant),
    isLast && getLastNoteMargins(notesVariant),
    getBackgroundColor(variant),
  );

  return (
    <div className={noteStyle}>
      {title && <Header text={title} variant={variant} />}
      <Description
        text={description}
        size={descriptionSize}
        variant={variant}
      />
      {showButton && <Button text={buttonText} link={buttonLink} />}
    </div>
  );
};

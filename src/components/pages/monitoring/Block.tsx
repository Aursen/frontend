import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import StyledSubSubContainer from '@/components/common/StyledSubSubContainer/StyledSubSubContainer';

export default function Block({
  columnsTitles,
  className,
  data,
}: {
  className?: string;
  columnsTitles?: ReactNode[];
  data: (
    | {
        rowTitle: ReactNode;
        values: ReactNode[];
      }
    | {
        rowTitle: ReactNode;
        value: ReactNode;
      }
  )[];
}) {
  return (
    <StyledSubSubContainer
      className={twMerge(
        'flex flex-col gap-6 bg-secondary p-0 border-none',
        className,
      )}
    >
      {data.map(({ rowTitle, ...v }, i) => (
        <div className="bg-third rounded-md p-3" key={i}>
          <p className="opacity-50">{rowTitle}</p>
          <ul className="flex flex-col gap-2 py-2">
            {(() => {
              const values = Object.hasOwn(v, 'value')
                ? [(v as { value: ReactNode }).value]
                : (v as { values: ReactNode[] }).values;

              return values.map((value, j) => (
                <li
                  className="flex flex-row justify-between items-center"
                  key={'li-' + j}
                >
                  {columnsTitles?.[j] && <p> {columnsTitles[j]} </p>}
                  {value}
                </li>
              ));
            })()}
          </ul>
        </div>
      ))}
    </StyledSubSubContainer>
  );
}

import { FC, Fragment, Children } from 'react';
import { nanoid } from 'nanoid';

import classes from './Console.module.scss';

interface Props {
  html: { name: string; paragraph: string }[];
}

// eslint-disable-next-line arrow-body-style
const Console: FC<Props> = ({ html }) => {
  return (
    <div>
      {Children.toArray(
        html?.map((section) => (
          <Fragment key={nanoid()}>
            {section.name === 'header' && (
              <>
                <span className="text-terminal">tanlipwei@portfolio:~$&nbsp;</span>
                {section.paragraph}
              </>
            )}
            {section.name === 'paragraph' && (
              <p
                className={classes.paragraph}
                dangerouslySetInnerHTML={{ __html: section.paragraph }}
              />
            )}
          </Fragment>
        ))
      )}
    </div>
  );
};

export default Console;

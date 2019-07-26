import React, { FC } from 'react';
import { useIntl } from 'react-intl';

import { useTime } from '../../../utils/useTime';
import { messages } from './messages';
import { Props, defaultData } from './types';

const Greeting: FC<Props> = ({ data = defaultData }) => {
  const hour = useTime().getHours();
  const intl = useIntl();

  const greeting = data.name
    ? intl.formatMessage(messages.greetingWithName, {
        hour: hour,
        name: data.name,
      })
    : intl.formatMessage(messages.greeting, {
        hour: hour,
      });

  return (
    <div className="Greeting">
      <h2>{greeting}</h2>
    </div>
  );
};

export default Greeting;

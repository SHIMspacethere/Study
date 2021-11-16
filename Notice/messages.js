/*
 * Notice Messages
 *
 * This contains all the text for the Notice container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Notice';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Notice container!',
  },
});

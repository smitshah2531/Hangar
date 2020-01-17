import { App } from '@slack/bolt';
import dashboardBlocks from '../blocks/dashboardBlocks';
import { getDashboardContext } from '../utilities/getDashboardContext';
import { slackAPI } from '..';

// Ignore snake_case types from @slack/bolt
/* eslint-disable @typescript-eslint/camelcase */

function register(bolt: App): void {
  bolt.event('app_home_opened', async ({ event }) => {
    const dashboardContext = await getDashboardContext(event.user);
    await slackAPI.views.publish({
      user_id: event.user,
      view: {
        type: 'home',
        blocks: dashboardBlocks(dashboardContext),
      },
    });
  });
}

export default register;

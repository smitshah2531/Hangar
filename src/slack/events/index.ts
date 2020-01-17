import { App } from '@slack/bolt';
import logger from '../../logger';
import message from './message';
import appHomeOpened from './appHomeOpened';

export default function register(app: App): void {
  logger.info('Registering event listeners');
  message(app);
  appHomeOpened(app);
}

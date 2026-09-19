import {logger} from './logger/logger';

async function globalTeardown():Promise<void> {
    logger.info('Global teardown started');
    logger.info('Global teardown completed');
}
export default globalTeardown;
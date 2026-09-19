import {logger} from './logger/logger';

async function globalSetup():Promise<void>{
    logger.info('global setup started');
    logger.info('Applicaton is available.tests can start.');
    logger.info('global setup completed');
}
export default globalSetup;
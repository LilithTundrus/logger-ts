
import Logger from './logger';
import { logLevels } from './enuns';

let logger = new Logger('./logs', logLevels.error, true)


logger.debug(`BEH ${5 + 1}`)
logger.debug('beh', 'BEH')

logger.info('THIS IS INFORMATION', 'THIS IS ALSO INFO')

logger.db('DB ACCESS!')

logger.db(`Accessed at ${new Date().toTimeString()}`, 'AAAAA')

logger.auth('A person dide a thing!');
logger.auth('a person did ANOTHER thing', 'And this too!')
// TODO: check config
// import config from 'moleculer.config';

import { api } from '../../../../server/sdk/api';
import { Presence } from './actions';

import '../../broker';

api.registerService(new Presence());
import { Environment } from './environment.interface';

const REPOSITORY_API = 'http://localhost:3100/';

export const environment: Environment = {
  production: false,
  envName: 'local',
  repositoryServer: REPOSITORY_API
};

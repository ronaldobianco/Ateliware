import { Environment } from './environment.interface';

const REPOSITORY_API = 'https://ateliware-backend-test.herokuapp.com/';

export const environment: Environment = {
  production: true,
  envName: 'production',
  repositoryServer: REPOSITORY_API
};

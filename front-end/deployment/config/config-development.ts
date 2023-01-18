/**
 * Add your hosted dev URL here
 */
const HOSTED_URL = 'https://main.d1r3p360xynkfx.amplifyapp.com';

const configDevelopment = {
  HOSTED_URL,
  MODE: 'DEVELOPMENT',
  REGION: 'us-east-1',
  REDIRECT_SIGN_IN: `${HOSTED_URL}/`,
  REDIRECT_SIGN_OUT: `${HOSTED_URL}/signout/`,
  AUTHENTICATION_TYPE: 'AWS_IAM' as const,

  /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */
  USER_POOL_CLIENT_ID: '18oa3e1fhqnlv3ooqe9ffo8i2a',
  USER_POOL_ID: 'us-east-1_xxIKf4fFr',
  IDENTITY_POOL_ID: 'us-east-1:ca4626d3-9143-45ef-97f0-c21e9d0d3b99',
  GRAPHQL_ENDPOINT: 'https://6tv5k4ptubclxeu7nbpomsd3d4.appsync-api.us-east-1.amazonaws.com/graphql',
};

export default configDevelopment;

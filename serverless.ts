import type { AWS } from '@serverless/typescript'
import getUsers from '@handlers/getUsers'
import getUser from '@handlers/getUser'
import createUser from '@handlers/createUser'
import updateUser from '@handlers/updateUser'
import removeUser from '@handlers/removeUser'

const serverlessConfiguration: AWS = {
  service: 'first-api',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: ['serverless-webpack', 'serverless-offline'],
  provider: {
    name: 'aws',
    // runtime: 'nodejs14.x',
    stage: 'dev',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: { getUser, getUsers, createUser, updateUser, removeUser },
}

module.exports = serverlessConfiguration

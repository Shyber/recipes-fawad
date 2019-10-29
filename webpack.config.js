require('@babel/register');
const webpackMerge = require('webpack-merge');

const common = require('./config/webpack/webpack.common.babel');

const envs = {
    development: 'dev',
    production: 'prod'
};

var API_URL = {
    production: JSON.stringify('localhost:3000'),
    development: JSON.stringify('localhost:3000') 
  }

/* eslint-disable global-require,import/no-dynamic-require */
const env = envs[process.env.NODE_ENV || 'development'];
const envConfig = require(`./config/webpack/webpack.${env}.babel`);
module.exports = webpackMerge(common, envConfig);
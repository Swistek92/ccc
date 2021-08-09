const { merge } = require('webpack-merge');


const comonConfiguration = require('./webpack/common');

module.exports = (_env, {mode}) => {
  const propertyConfig = require(`./webpack/${mode}`);
  const mergedConfig = merge(comonConfiguration, propertyConfig);
 
  return mergedConfig;
}
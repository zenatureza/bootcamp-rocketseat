const { addBabelPlugin, override } = require('customize-cra');

// replacing create-react-app configs
module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ])
);

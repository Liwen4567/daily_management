const {
  override,
  addWebpackAlias,
  overrideDevServer,
  fixBabelImports,
  disableEsLint,
} = require('customize-cra');
const { addReactRefresh } = require("customize-cra-react-refresh")
const path = require('path');

const appPath = target => path.resolve(__dirname, target);

// 配置devServer,代理   http://www.ljhhhx.com:8080
const devServerConfig = () => config => {
  return {
    ...config,
    compress: true,
    proxy: {
      '/meeting/**': {
        target: 'http://202.202.43.92:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/meeting': ''
        }
      }
    }
  }
}

module.exports = {
  webpack: override(
    addWebpackAlias({
      '@': appPath('src'),
      '~': appPath('src/assets')
    }),
    disableEsLint(),
    // react快速刷新,hmr
    addReactRefresh(),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
    }),
  ),
  devServer: overrideDevServer(
    devServerConfig()
  ),
  paths: (paths, env) => {
    return paths;
  }
};
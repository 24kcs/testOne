
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

// 配置babel-plugin-import包
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',   // 使用antd包,app.jsx引入button简单了
    libraryDirectory: 'es', // 去es文件夹下找对应的组件
    //style: 'css', // 自动打包组件对应的css样式
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
);
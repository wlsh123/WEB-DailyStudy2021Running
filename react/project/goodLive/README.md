###  项目配置
  1.支持less环境：npm install --save less less-loader    然后再修改webpack配置

```json
先暴露webpack：npm run eject
//WEB-DailyStudy2021Running/react/project/my-app/config/webpack.config.js
// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

{
              test: lessRegex,
              exclude: lessModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 3,
                  sourceMap: isEnvProduction
                    ? shouldUseSourceMap
                    : isEnvDevelopment,
                },
                'less-loader'
              ),
              // Don't consider CSS imports dead code even if the
              // containing package claims to have no side effects.
              // Remove this when webpack adds a warning or an error for this.
              // See https://github.com/webpack/webpack/issues/6571
              sideEffects: true,
            },
              
{
              test: lessModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 3,
                  sourceMap: isEnvProduction
                    ? shouldUseSourceMap
                    : isEnvDevelopment,
                  modules: {
                    getLocalIdent: getCSSModuleLocalIdent,
                  },
                },
                'less-loader'
              ),
            },
```

  2.增加全局less样式。 static/css/common.less
  3.支持REM

```javascript
(function (doc, win) {
        var docEl = doc.documentElement,
          resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
          recalc = function(){
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return
            if (clientWidth >= 750) {
              docEl.style.fontSize = '100px';
            }else{
              docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
          };
          if (!doc.addEventListener) return;
          win.addEventListener(resizeEvt,recalc,false);
          doc.addEventListener('DOMContentLoaded', recalc, false);
      })(document, window);
```

​	

轮播图插件 ；npm install --save react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
https://github.com/oliviertassinari/react-swipeable-views

安装依赖：npm install --save react-swipeable-views-utils



搭建后台：react/project/goodLive/server

npm install --save express

安装依赖解决跨域问题：npm install --save-dev http-proxy-middleware



redux环境配置：

npm install --save-dev redux react-redux

安装redux依赖

npm install --save-dev redux-devtools-extension
# Vue开发

- vuex ： user 、permission
-------------------------
- 登录：登录获取token；
- 跳转：根据token触发user的action获取roles，再根据roles通过触发permission的action获取权限路由
- --------------------------
- 展示：展示hidden为false的项
------------------------
- XHR：
-    生产环境
-    开发环境 - 通过webpack-devServer-before -> Mock;

### Mock：
  使用Chokidar.js，对mock下的文件进行监控，当文件发生变化的时候，重新构建routes

### Optimization
- externals - CDN
- Element-UI 按需加载

# Q:
### /static 和 /src/assets 区别
- static用于存放静态资源文件、第三方资源文件；通过绝对路径来引用，webpack会对该文件夹打包，会直接复制该文件夹
- assets存放图片、字体图标、logo等文件；相对路径，会被打包
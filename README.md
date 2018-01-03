声明：所有的接口都是爬取得豆瓣的电影，该项目只是用来个人练习和学习使用，不涉及任何商用用途。如果侵权，请及时联系本人，本人会尽快删除。
# vue + vuex 尝试
    1.尝试构建vue程序
    2.webpack 2.0
    3.eslint 加入


# 启动 运行

    yarn                      npm 
    yarn install              npm install 
    yarn start                npm start        

    * 注意事项：yarn和npm安装node-sass 有可能会出问题，如果失败请采用 cnpm 安装
    * 具体node-sass怎么安装上，看命吧！结局方案:https://www.npmjs.com/package/node-gyp


# 更改

    
    * 2017-06-27
        webpack升级3.0
    
    * 2017-12-05
        修复babel问题，build文件修复
    
    * 2017-12-28
        重新优化build,将koa集成，服务器部署，通过nginx做的反向代理。数据采用node作为转发层，抓取豆瓣影视的借口获取数据。

    * 2017-12-30
        合并dev到master,优化部分代码：完成了film-item的组件
                
                
# ToDo
    * 将主页的film-item剥离（Done）
    * 完成Nav组件
    * film-detail页面的实现
    * 加入loading动画
    

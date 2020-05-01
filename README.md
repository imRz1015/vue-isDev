# vue-isDev

A sign of development environment

一个返回是否是开发环境的插件

## Useage

        npm i vue-isDev --save-dev

        // main.js
        import vueIsDev from 'vue-isDev'
        Vue.use(vueIsDev)

        //some components
        if(this.$isDev){
            // ...do something
        }

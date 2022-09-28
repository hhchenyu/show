//设置目录的别名
module.exports={
    configureWebpack:{
        resolve:{
            alias: {
                'assets':'@/assets',
                'components':'@/components',
                'network':'@/network',
                'router':'@/router',
                'views':'@/views',
                'common':'@/common',
                'store':'@store'
            }
        }
    },
    // devServer: {
    //     host: '128.0.0.1',
    //    port: 8080,
    //    client: {
    //      webSocketURL: 'ws://192.168.0.103:8080/ws',
    //    },
    //     headers: {
    //      'Access-Control-Allow-Origin': '*',
    //   }
    // },
   }
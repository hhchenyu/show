import axioss from 'network/request.js'

export  function getHome(){
    //api
    return axioss({
        url:'/home/multidata',
        method:'get'
    })
}

export  function getHomeGoods(type,page){
    //api
    return axioss({
        url:'/home/data',
        method:'get',
        params:{
            type,page
        }
    })
}
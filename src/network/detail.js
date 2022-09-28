import axioss from 'network/request.js'

export function getDetail(iid){
    //api
    return axioss({
        url:'/detail',
        method:'get',
        params:{
            iid
        }
    })
}

export  function getRecommends(){
    //api
    return axioss({
        url:'/recommend',
        method:'get'
    })
}
import axioss from 'network/request.js'

export  function getCategory(){
    //api
    return axioss({
        url:'/category',
        method:'get'
    })
}

export  function getSubCategory(maitKey){
    //api
    return axioss({
        url:'/subcategory',
        params:{
            maitKey
        }
    })
}

export  function getTypeCategory(miniWallkey,type){
    //api
    return axioss({
        url:'/subcategory/detail',
        params:{
            miniWallkey,type
        }
    })
}
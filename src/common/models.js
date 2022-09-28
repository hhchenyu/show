// 定义要用到的类 Goods商品基础信息
export class Goods{
    constructor(itemInfo,columns,shopInfo){
        //id
        this.iid=itemInfo.iid;
        //标题
        this.title=itemInfo.title;
        //价格
        this.lowNowPrice=itemInfo.lowNowPrice;
        //备注
        this.desc=itemInfo.desc;
        this.price=itemInfo.price;
        this.oldPrice=itemInfo.oldPrice;
        this.discount=itemInfo.discountDesc;

        this.columns=columns;

        this.services=shopInfo.services;
    }
}

//店铺类
export class Shop{
    constructor(shopInfo){
        this.name=shopInfo.name;
        this.shopLogo=shopInfo.shopLogo;
        this.cSells=shopInfo.cSells;
        this.cGoods=shopInfo.cGoods;
        this.score=shopInfo.score;
    }
}

//商品参数类
export class shopParams{
    constructor(info,rule){
        this.infoSet=info.set;
        this.ruleTables=rule.tables;
    }
}
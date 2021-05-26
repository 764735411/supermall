import { requst } from './requst.js';

export function getDetailData(iid) {
  return requst({
    url: '/detail',
    params:{
      iid
    }
  });
}

export function getRecommend(){
  return requst({
    url:'/recommend',
  });
}

export class GoodsInfo{
  constructor(columns,itemInfo,shopInfo){
    this.title = itemInfo.title,
    this.columns= columns,
    this.oldPrice= itemInfo.oldPrice,
    this.price = itemInfo.price,
    this.serveices = shopInfo.services,
    this.discount = itemInfo.discountDesc
  }
}
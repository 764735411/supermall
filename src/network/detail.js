import { requst } from './requst.js';

export function getDetailData(iid) {
  return requst({
    url: '/detail',
    params:{
      iid
    }
  });
}
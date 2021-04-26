import { requst } from './requst.js'

export function getHomeMultidata() {
  return requst({
    url: '/home/multidata'
  })
}

export function getGoodsList(type, page) {
  return requst({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
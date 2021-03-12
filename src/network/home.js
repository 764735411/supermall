import { requst } from './requst.js'

export function getHomeMultidata(){
    return requst({
        url: '/home/multidata'
    })
}
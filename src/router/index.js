import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('views/home/Home.vue')
const Classify = () => import('views/classify/Classify.vue')
const Cat = () => import('views/cat/ShopCat.vue')
const Profile = () => import('../views/profile/Profile.vue')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/cat',
    component: Cat
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carList: [],
  },
  mutations: {
    addCartCount(state, shop) {
      shop.count++;
    },
    addShop(state, payLoad) {
      payLoad.count = 1;
      payLoad.checked = false;
      state.carList.push(payLoad);
    },
    changeChecked(state,shop){
      shop.checked = !shop.checked;
    },
    allChoose(state){
      state.carList.forEach(item=>item.checked=true);
    },
    noAllChoose(state){
      state.carList.forEach(item=>item.checked=false);
    }
  },

  actions: {
    addCart(context, payLoad) {
      let shop = context.state.carList.find((item) => {
        return item.iid === payLoad.iid;
      });
      if (shop) {
        context.commit('addCartCount', shop);
      }
      else {
        context.commit('addShop', payLoad);
      }
    },
    changeIsChooseShop(context, payLoad){
      let shop = context.state.carList.find((item) => {
        return item.iid === payLoad.iid;
      });
      if(shop){
        context.commit('changeChecked', shop);
      }
    }
  },
  getters:{
    shopCarLength(state){
      return state.carList.length;
    },
    checkedNumber(state){
     return  state.carList.filter((item)=>{
        return item.checked;
      }).length;
    }
  },
  modules: {
  }
});

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      selectGoods:[],

  },
  mutations: {
      add( state , data ){
          state.selectGoods.push( data )
      },
      remove( state , data){
          state.selectGoods.splice(data, 1);
      }
  },
  actions: {
      addGoods( {commit} , data ){
          commit('add',data)
      },
      removeGoods( {commit} , data ){
          commit('remove',data)
      }

  }
})

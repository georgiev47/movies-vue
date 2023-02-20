import { createStore } from 'vuex'
import loadData from '@/helpers/loadData'
import router from '../router'

export default createStore({
  state: {
    resultMovieList: []
  },
  getters: {
  },
  mutations: {
    searchMovie(state, movieList) {
      state.resultMovieList = movieList
    }
  },
  actions: {
    async searchMovie({ commit }, searchWord) {
      const data = await loadData(`http://www.omdbapi.com/?apikey=e7c8ef66&s=%22${searchWord}%22`)
      commit('searchMovie', data.Search)
      router.push({ name: 'movies' })
    }
  },
  modules: {
  }
})

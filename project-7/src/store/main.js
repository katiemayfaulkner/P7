import Vue from 'vue'
import Vuex from 'vuex' // State management pattern & library for Vue.js apps : helps create a centralized data store

Vue.use(Vuex)   // Allows you to add global functionality to a Vue instance

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {}
})
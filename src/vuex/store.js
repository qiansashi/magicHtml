import Vue from 'vue'
import Vuex from 'vuex'
import {traverseArray, htmlBeautify} from './json2Html'
Vue.use(Vuex)

const state = {
  div: 'div',
  nodeData: [{
    id: 1,
    label: 'div',
    text: '',
    style: '',
    labelClass: 'container1',
    children: []
  }],
  htmlData: '<div></div>',
  selectedNode: {},
  selectedData: {},
  newNode: [],
  divShow: false
}
const getters = {
  getterDiv: state => {
    return ('<' + state.div + '>' + '</' + state.div + '>')
  }
}
const mutations = {
  mutationsAddDiv: (state, node) => {
    console.log(node)
    return (state.nodeData = node)
  },
  mutationsJs2Html: (state, node) => {
    return (state.htmlData = htmlBeautify(traverseArray(node)))
  },
  mutationsSelectedNode: (state, node) => {
    console.log(node)
    return (state.selectedNode = node)
  },
  mutationsSelectedData: (state, data) => {
    console.log(data)
    return (state.selectedData = data)
  },
  mutationsNewNode: (state, data) => {
    console.log(data)
    return (state.newNode = data)
  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations
})

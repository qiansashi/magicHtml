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
    children: [ {
      id: 2,
      label: 'div',
      text: '',
      style: '',
      labelClass: 'container',
      children: [{
        id: 3,
        label: 'div',
        text: '',
        style: '',
        labelClass: 'row clearfix',
        children: [{
          id: 4,
          label: 'div',
          text: '',
          style: 'border:0',
          labelClass: 'col-md-12 column',
          children: [{
            id: 5,
            label: 'nav',
            text: '',
            style: '',
            labelClass: 'navbar navbar-default',
            children: []
          }, {
            id: 6,
            label: 'div',
            text: 'Hello, world!',
            style: '',
            labelClass: 'jumbotron',
            children: [{
              id: 7,
              label: 'h1',
              text: '',
              style: '',
              labelClass: '',
              children: []
            }, {
              id: 8,
              label: 'p',
              text: 'This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.',
              style: '',
              labelClass: '',
              children: []
            }, {
              id: 9,
              label: 'p',
              text: '',
              style: '',
              labelClass: '',
              children: [{
                id: 10,
                label: 'a',
                text: 'learn more',
                style: '',
                labelClass: 'btn btn-primary btn-large',
                href: '#',
                children: []

              }]

            }]

          }]
        }]
      }]
    }]
  }],
  htmlData: '<div></div>',
  selectedNode: {},
  selectedData: {},
  newNode: [],
  divShow: false,
  userInfo: {},
  styleStatus: false,
  newStyleNode: {}
}
const getters = {
  getterDiv: state => {
    return ('<' + state.div + '>' + '</' + state.div + '>')
  },
  getLoginTime: state => () => {
    // const lastLoginTime = state.userInfo.last_login_time
    if (JSON.stringify(state.userInfo) !== '{}' && state.userInfo.name !== null && state.userInfo.last_login_time !== null) {
      const lastLoginTime = state.userInfo.last_login_time
      return ({
        userWelcome: state.userInfo.name + '，欢迎回来！',
        lastTime: '上次登录时间：' + new Date(parseInt(lastLoginTime) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ')
      })
    } else {
      return ({userWelcome: '未登录，请先登录'})
    }
  },
  getHtmlData: state => {
    return htmlBeautify(traverseArray(state.nodeData))
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
  },
  mutationsUserInfo: (state, data) => {
    console.log(data)
    return (state.userInfo = data)
  },
  mutationsStyleStatus: (state, data) => {
    return (state.styleStatus = data)
  },
  mutationsStyle: (state, data) => {
    return (state.newStyleNode = data)
  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations
})

export function insertNodeArray (oldNodeArray, newNodeArray) {
  if (oldNodeArray.length === 0) {
    if (oldNodeArray.parent.data != null) {
      var newNodeId = oldNodeArray.parent.data.id++
      newNodeArray.id = newNodeId
    }
  }
}

export function searchNodeArray (nodeArray, id) {
  if (nodeArray.length > 0) {
  }
}

export function increaseNodeId (nodeArray, id) {
  if (nodeArray.length >= 0) {
    for (let nodeValue of nodeArray) {
      console.log(id)
      id += 1
      if (nodeValue.children && nodeValue.children.length > 0) {
        id = increaseNodeId(nodeValue.children, id)
      }
    }
  }
  return id
}

export function pushChildren (nodeArray, data, _this) {
  if (nodeArray.length > 0) {
    for (let nodeValue of nodeArray) {
      console.log(nodeValue)
      let id = increaseNodeId(_this.nodeData, _this.nodeData[0].id)
      let label = nodeValue.label
      let text = nodeValue.text
      let style = nodeValue.style
      let labelClass = nodeValue.labelClass
      const newChild = {
        id: id++,
        label: label,
        text: text,
        style: style,
        labelClass: labelClass,
        children: []
      }
      data.children.push(newChild)
      _this.$store.commit('mutationsAddDiv', _this.$store.state.nodeData)
      _this.$store.commit('mutationsJs2Html', _this.$store.state.nodeData)
      // _this.$store.commit('mutationsSelectedNode', node)
      _this.$store.commit('mutationsSelectedData', data)
      if (nodeValue.children && nodeValue.children.length >= 0) {
        console.log(data)
        pushChildren(nodeValue.children, data, _this)
      }
    }
  }
}

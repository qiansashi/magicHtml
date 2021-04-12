// js dom树
// 初始化
function initTree (tree) {
  if (tree.length > 0) {
    return []
  }
}
// 查找根节点
function findRoot (tree, parentId) {
  if (tree.length > 0 && tree[1].label != null) {
    return (tree[parentId].label)
  }
}
// 添加一个根节点
function addRoot (tree, node) {
  if (tree.length > 0 && node.label != null) {
    tree.push(node)
    return (tree)
  }
}
// 删除中间节点
function deleteNode (tree, parent) {
  if (tree.length > 0 && parent.label != null) {

  }
}
// 插入中间节点
function insertNode (tree, parent) {
  if (tree.length > 0 && parent.label != null) {

  }
}
export default {
  initTree, findRoot, addRoot, deleteNode, insertNode
}

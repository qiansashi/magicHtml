var beautifyJs = require('js-beautify')

export function traverseArray2 (array, htmlString = '') {
  for (let nodeValue of array) {
    htmlString += transferLabel2(nodeValue.label, nodeValue.style)
    console.log(htmlString)
    if (nodeValue.children && nodeValue.children.length !== 0) {
      for (let childValue of nodeValue.children) {
        htmlString += transferLabel2(childValue.label, childValue.style)
        traverseArray2(childValue.children, htmlString)
        // htmlString += transferEndLabel(nodeValue.style)
      }
    } else {
      htmlString += transferLabel(nodeValue.label, nodeValue.style)
    }
  }
  return htmlString
}

function transferLabel2 (label, style = '') {
  var htmlLabel = '<' + label + ' ' + "style='" + style + "'" + '>'
  return htmlLabel
}

export function traverseArray (nodeArray, htmlStr = '') {
  if (nodeArray.length >= 0) {
    for (let nodeValue of nodeArray) {
      console.log(htmlStr)
      htmlStr += (nodeValue.text)
        ? (transferLabel(nodeValue.label, nodeValue.labelClass, nodeValue.style) + addText(nodeValue.text))
        : (transferLabel(nodeValue.label, nodeValue.labelClass, nodeValue.style))
      // htmlStr += transferLabel(nodeValue.label, nodeValue.labelClass, nodeValue.style)
      if (nodeValue.children && nodeValue.children.length > 0) {
        htmlStr = traverseArray(nodeValue.children, htmlStr)
      }
      htmlStr += transferEndLabel(nodeValue.label)
    }
  }
  return htmlStr
}

function transferLabel (label, labelClass = '', labelStyle = '') {
  var htmlLabel = '<' + label + ' ' + "class='" + labelClass + "'" + ' ' + "style='" + labelStyle + "'" + '>'
  return htmlLabel
}

function transferEndLabel (label) {
  return ('</' + label + '>')
}

function addText (txt) {
  return ('\n' + txt + '\n')
}

export function htmlBeautify (htmlStr) {
  console.log(beautifyJs.html(htmlStr))
  return (beautifyJs.html(htmlStr))
}

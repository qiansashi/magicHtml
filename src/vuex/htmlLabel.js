var labelModel = {
  id: 1,
  label: '',
  text: '',
  style: '',
  labelClass: '',
  children: []
}
export function addComponentModel (id) {
  const ComponentModel = {
    id: id++,
    label: 'div',
    text: '',
    style: '',
    labelClass: 'container',
    children: [{
      id: id++,
      label: 'div',
      text: '',
      style: '',
      labelClass: 'row clearfix',
      children: [{
        id: id++,
        label: 'div',
        text: '',
        style: 'border:0',
        labelClass: 'col-md-12 column',
        children: [{
          id: id++,
          label: 'nav',
          text: '',
          style: '',
          labelClass: 'navbar navbar-default',
          children: []
        }, {
          id: id++,
          label: 'div',
          text: 'Hello, world!',
          style: '',
          labelClass: 'jumbotron',
          children: [{
            id: id++,
            label: 'h1',
            text: '',
            style: '',
            labelClass: '',
            children: []
          }, {
            id: id++,
            label: 'p',
            text: 'This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.',
            style: '',
            labelClass: '',
            children: []
          }, {
            id: id++,
            label: 'p',
            text: '',
            style: '',
            labelClass: '',
            children: [{
              id: id++,
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
  }
  return ComponentModel
}
export function addNavModel (id) {
  const navModel = {
    id: id++,
    label: 'nav',
    text: '',
    style: 'display:flex;flex-direction:raw;',
    labelClass: 'navbar navbar-expand-lg fixed-top navbar-dark',
    children: [{
      id: id++,
      label: 'a',
      text: 'magic Html',
      style: 'border:0',
      labelClass: 'navbar-brand main-logo',
      children: [{
        id: id++,
        label: 'i',
        text: '',
        style: 'border:0',
        labelClass: 'fas fa-layer-group',
        children: []
      }, {
        id: id++,
        label: 'button',
        text: '',
        style: '',
        labelClass: 'navbar-toggler',
        type: 'button',
        children: [{
          id: id++,
          label: 'span',
          text: '',
          style: '',
          labelClass: 'navbar-toggler-icon',
          children: []
        }, {
          id: id++,
          label: 'div',
          text: '',
          style: '',
          labelClass: 'collapse navbar-collapse',
          children: [{
            id: id++,
            label: 'ul',
            text: '',
            style: '',
            labelClass: 'navbar-nav ml-auto',
            children: [{
              id: id++,
              label: 'li',
              text: '',
              style: '',
              labelClass: 'nav-item',
              children: [{
                id: id++,
                label: 'a',
                text: 'author',
                style: '',
                labelClass: 'nav-link',
                children: []
              }]
            }, {
              id: id++,
              label: 'li',
              text: '',
              style: '',
              labelClass: 'nav-item',
              children: [{
                id: id++,
                label: 'a',
                text: 'dyf',
                style: '',
                labelClass: 'nav-link',
                children: []
              }]

            }]

          }]
        }]
      }]
    }]
  }
  return navModel
}
export function addLabelModel (label) {
  labelModel.label = label
  console.log(labelModel)
  return (labelModel)
}

export function alertLabelId (id) {
  labelModel.id = id
  return (labelModel)
}

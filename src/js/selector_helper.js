(function() {

  var selector_helper = document.querySelector('#selector_helper')
  if (!selector_helper) {
    return
  }

  /*<injection-js>*/
  var elements = [].slice.apply(selector_helper.querySelectorAll('*'))

  elements.forEach(function (item) {
    if (item.style) {
      // 內连样式
      item.style['-webkit-animation'] = item.style.animation = 'none'
    }
  })

  var style = selector_helper.querySelector('style');
  if (!style) {
    return
  }
  var styleTemplate = selector_helper.querySelector('style[type="text/template"]')
  if (!styleTemplate) {
    return
  }

  var selector_close = selector_helper.querySelector('.selector_close')

  if (selector_close) {
    selector_close.addEventListener('click', function() {
      selector_helper.style.display = 'none'
    })
  }

  var selector_query = selector_helper.querySelector('.selector_query')

  if (selector_query) {
    selector_query.addEventListener('input', function() {
      if (!(/[{}]/.test(selector_query.value))) {
        style.innerHTML = styleTemplate.innerHTML.replace('{{input}}', selector_query.value)
      }
    })
  }
  /*</injection-js>*/

})()
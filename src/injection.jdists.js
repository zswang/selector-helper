(function() {

  var selector_helper = document.querySelector('#selector_helper')

  if (selector_helper) {
    selector_helper.style.display = ''
    if (selector_helper.onshow) {
      selector_helper.onshow()
    }
    return
  }

  selector_helper = document.createElement('div')
  selector_helper.id = 'selector_helper'
  selector_helper.innerHTML = <!--jdists encoding='quoted' import='dev.html?injection-html' /-->

  document.body.appendChild(selector_helper)

  <!--jdists import='js/selector_helper.js?injection-js' /-->

})()
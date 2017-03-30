(function() {

  var selector_helper = document.querySelector('#selector_helper')
  if (!selector_helper) {
    return
  }

  /*<injection-js>*/
  var selector_query = selector_helper.querySelector('.panel_content .text_query')

  selector_helper.onshow = function () {
    if (selector_query) {
      selector_query.focus()
      changeQuery(selector_query.value)
    }
  }

  function selectors() {
    var dict = {}

    var selectorHelperChilds = [].slice.apply(selector_helper.querySelectorAll('*'))
    selectorHelperChilds.push(selector_helper);

    ':link:visited:active:hover:focus:first-letter:first-line:first-child:before:afte:lang:first-of-type:last-of-type:only-of-type:only-child:nth-child:nth-last-child:nth-of-type:nth-last-of-type:last-child:root:empty:target:enabled:disabled:checked:not::selection'
    .replace(/:+[\w\-]+/g, function(selector) {
      dict[selector] = true
    });

    [].slice.apply(document.querySelectorAll('*')).forEach(function(element) {
      if (selectorHelperChilds.indexOf(element) >= 0) {
        return
      }
      var key = element.tagName.toLowerCase()

      if (['style', 'script', 'link', 'meta', 'head', 'title'].indexOf(key) >= 0) {
        return
      }

      dict[key] = true;

      [].slice.apply(element.classList).forEach(function(name) {
        dict['.' + name] = true
      })

      if (element.id) {
        dict['#' + element.id] = true
      }
    })
    return Object.keys(dict).sort()
  }

  var items = selectors();

  var style = selector_helper.querySelector('style')
  if (!style) {
    return
  }
  var styleTemplate = selector_helper.querySelector('style[type="text/template"]')
  if (!styleTemplate) {
    return
  }

  var selector_header = selector_helper.querySelector('.panel_header')
  if (selector_header) {
    var origin;
    var startPos;

    selector_header.addEventListener('mousedown', function (e) {
      var style = getComputedStyle(selector_helper, true);
      origin = [parseFloat(style.left), parseFloat(style.top)];
      startPos = [e.screenX, e.screenY];

      function handlerMouseMove(e) {
        selector_helper.style.left = Math.max(0, Math.min(
          document.documentElement.clientWidth - selector_helper.clientWidth,
          origin[0] + (e.screenX - startPos[0]))
        ) + 'px';
        selector_helper.style.top = Math.max(0, Math.min(
          document.documentElement.clientHeight - selector_helper.clientHeight,
          origin[1] + (e.screenY - startPos[1]))
        ) + 'px';
      }

      function handlerMouseUp(e) {
        document.removeEventListener('mousemove', handlerMouseMove);
        document.removeEventListener('mouseup', handlerMouseUp);
      }

      document.addEventListener('mousemove', handlerMouseMove);
      document.addEventListener('mouseup', handlerMouseUp);
    });
  }

  var selector_close = selector_helper.querySelector('.panel_header .btn_close')

  if (selector_close) {
    selector_close.addEventListener('click', function() {
      selector_helper.style.display = 'none'
      if (selector_query) {
        changeQuery('')
      }
    })
  }

  if (!selector_query) {
    return;
  }

  function changeQuery(text) {
    if (!(/[{}]/.test(text))) {
      var css = styleTemplate.innerHTML.replace('{{input}}', text)
      var textNode = style.firstChild
      if (!textNode) {
        textNode = document.createTextNode(css)
        style.appendChild(textNode)
      } else {
        textNode.nodeValue = css
      }
    }
  }

  var listDropDown = document.querySelector('.list_drop_down')

  var dropDownList = [];
  var selectIndex = 0;

  selector_query.addEventListener('input', function (e) {
    changeQuery(selector_query.value)
    var text = selector_query.value.slice(0, selector_query.selectionEnd)
    var query = ''

    var flag = ''
    var html = ''

    dropDownList = []
    selectIndex = 0

    text.replace(/(::?|#|\.)?([\w\-]*)$/, function (all, flag, word) {
      var left = RegExp['$`']

      if (!word && !flag) {
        return
      }

      word = word.toLowerCase()

      dropDownList = items.filter(function (item) {
        return item.toLowerCase().indexOf(word) >= 0
      }).sort(function (a, b) {
        if (!flag) {
          return a.indexOf(word) - b.indexOf(word)
        }
        var flagA = (a.match(/^(::?|#|\.)/) || [''])[0]
        var flagB = (b.match(/^(::?|#|\.)/) || [''])[0]
        if (flagA !== flagB) {
          if (flagA === flag) {
            return -1
          }
          if (flagB === flag) {
            return 1
          }
        }
        return a.indexOf(word) - b.indexOf(word)
      }).slice(0, 10)

      if (dropDownList.length === 1 && dropDownList[0] === all) {
        dropDownList = []
        return
      }
      html = dropDownList.map(function (item, index) {
        return '<li' + (index === 0 ? ' class="selected"' : '') + ' style="outline:none;-webkit-animation:none;animation:none">' +
          item.replace(new RegExp(word, 'gi'), '<em>$&</em>') +
          '</li>'
      }).join('\n')

    })

    if (dropDownList.length <= 0) {
      listDropDown.style.display = ''
    } else {
      listDropDown.style.display = 'block'
    }

    listDropDown.innerHTML = html
  })

  selector_query.addEventListener('keydown', function (e) {
    function changeSelect(offset) {
      if (dropDownList.length <= 0) {
        return
      }
      var value = Math.min(Math.max(0, selectIndex + offset), dropDownList.length - 1);
      if (value === selectIndex) {
        return
      }
      selectIndex = value;
      var item = listDropDown.querySelector('li.selected')
      if (item) {
        item.classList.remove('selected')
      }
      var element = listDropDown.querySelector('li:nth-of-type(' + (selectIndex + 1) +')')
      if (element) {
        element.classList.add('selected')
      }
    }

    function enter() {
      if (dropDownList.length <= 0) {
        return
      }

      var text = selector_query.value.slice(0, selector_query.selectionEnd)
      var right = selector_query.value.slice(selector_query.selectionEnd)
      var value = text.replace(/(::?|#|\.)?([\w\-]*)$/, dropDownList[selectIndex])

      selector_query.value = value + right
      selector_query.selectionEnd = selector_query.value.length - right.length
      listDropDown.style.display = ''
      changeQuery(selector_query.value)
    }

    // console.log(e.keyCode)
    switch (e.keyCode) {
      case 38: // ⬆️
        changeSelect(-1)
        break
      case 40: // ⬇️
        changeSelect(+1)
        break
      case 9: // tab
      case 13: // enter
        enter()
        break
      case 27: // esc
        listDropDown.style.display = ''
        break
      default:
        return
    }
    e.preventDefault()
  })
  /*</injection-js>*/

})()
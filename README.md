## Usage

### Injection

```js
javascript:with(document)0[body.appendChild(createElement('script')).src='//raw.githubusercontent.com/zswang/selector-helper/master/injection.js?'+Math.random()]
```

### Inline

```js
javascript:!function()%7Bvar%20e%3Ddocument.querySelector(%22%23selector_helper%22)%3Bif(e)return%20void(e.style.display%3D%22%22)%3Bvar%20e%3Ddocument.createElement(%22div%22)%3Be.id%3D%22selector_helper%22%2Ce.innerHTML%3D'%20%20%20%20%3Cstyle%3E%3C%2Fstyle%3E%5Cn%20%20%20%20%3Cstyle%3E%23selector_helper%7Bposition%3Afixed%3Btop%3A0%3Bleft%3A0%3Bright%3A0%3Bz-index%3A2012122324%7D%23selector_helper%20a%2C%23selector_helper%20button%2C%23selector_helper%20input%2C%23selector_helper%20label%2C%23selector_helper%20li%2C%23selector_helper%20p%2C%23selector_helper%20select%2C%23selector_helper%20textarea%2C%23selector_helper%20ul%7Bmargin%3A0%3Bpadding%3A0%3Bfont%3A12px%2F1.125%20Arial%2CHelvetica%2Csans-serif%7D%23selector_helper%20.selector_helper_panel%7Bheight%3A38px%3Bbackground-color%3A%23484848%3Bopacity%3A.8%7D%23selector_helper%20.selector_icon%7Btext-decoration%3Anone%7D%23selector_helper%20.selector_icon%3Aafter%7Bmargin-left%3A4px%3Bdisplay%3Ainline-block%3Bcontent%3A%5C'%40zswang%5C'%3Bcolor%3Agray%3Bline-height%3A40px%7D%23selector_helper%20.selector_logo%7Bbackground-position%3Aleft%20-1017px%3Bdisplay%3Ablock%3Bwidth%3A75px%3Bheight%3A38px%7D%23selector_helper%20ul%7Bheight%3A38px%3Bleft%3A80px%3Btop%3A0%3Bposition%3Aabsolute%3Blist-style%3Anone%20outside%20none%7D%23selector_helper%20li%7Bfloat%3Aleft%3Bmargin%3A10px%205px%7D%23selector_helper%20label%7Bcolor%3A%23848484%3Bmargin%3A0%205px%200%200%7D%23selector_helper%20input%5Btype%3Dtext%5D%7Bbackground-color%3A%239f9f9f%3Bborder%3A1px%20solid%20%23000%3Bcolor%3A%23222%3Bheight%3A18px%3Bwidth%3A400px%7D%23selector_helper%20select%7Bheight%3A20px%7D%23selector_helper%20.selector_contraction%7Bbackground-position%3Aleft%20-1060px%3Bposition%3Aabsolute%3Bleft%3A148px%3Btop%3A5px%3Bdisplay%3Ablock%3Bheight%3A27px%3Bwidth%3A26px%7D%23selector_helper%20.selector_contraction%3Ahover%7Bbackground-position%3A-29px%20-1060px%7D%23selector_helper%20%23selector_close%7Bfloat%3Aright%7D%40keyframes%20selector_helper_flash%7Bfrom%7Boutline-color%3A%231e90ff%3Boutline-offset%3A-3px%7Dto%7Boutline-color%3Ared%3Boutline-offset%3A0%7D%7D%3C%2Fstyle%3E%5Cn%20%20%20%20%3Cstyle%20type%3D%22text%2Ftemplate%22%3E%5Cn%20%20%20%20%20%20%7B%7Binput%7D%7D%20%7B%5Cn%20%20%20%20%20%20%20%20outline%3A%20dodgerblue%20dashed%202px%3B%5Cn%20%20%20%20%20%20%20%20animation%3A%20selector_helper_flash%202s%20infinite%20ease-in-out%3B%5Cn%20%20%20%20%20%20%20%20-webkit-animation%3A%20selector_helper_flash%202s%20infinite%20ease-in-out%3B%5Cn%20%20%20%20%20%20%7D%5Cn%20%20%20%20%3C%2Fstyle%3E%5Cn%20%20%20%20%3Cdiv%20class%3D%22selector_helper_panel%22%3E%5Cn%20%20%20%20%20%20%3Ca%20class%3D%22selector_logo%20selector_icon%22%20href%3D%22http%3A%2F%2Fweibo.com%2Fzswang%22%20target%3D%22_blank%22%3E%3C%2Fa%3E%5Cn%20%20%20%20%20%20%3Cul%3E%5Cn%20%20%20%20%20%20%20%20%3Cli%3E%3Clabel%3Eselector%20query%3C%2Flabel%3E%3Cinput%20type%3D%22text%22%20class%3D%22selector_query%22%3E%3C%2Fli%3E%5Cn%20%20%20%20%20%20%20%20%3Cli%3E%3Cinput%20class%3D%22selector_close%22%20type%3D%22button%22%20value%3D%22Close%22%3E%3C%2Fli%3E%5Cn%20%20%20%20%20%20%3C%2Ful%3E%5Cn%20%20%20%20%3C%2Fdiv%3E'%2Cdocument.body.appendChild(e)%2C%5B%5D.slice.apply(e.querySelectorAll(%22*%22)).forEach(function(e)%7Be.style%26%26(e.style.outline%3De.style%5B%22-webkit-animation%22%5D%3De.style.animation%3D%22none%22)%7D)%3Bvar%20t%3De.querySelector(%22style%22)%3Bif(t)%7Bvar%20l%3De.querySelector('style%5Btype%3D%22text%2Ftemplate%22%5D')%3Bif(l)%7Bvar%20o%3De.querySelector(%22.selector_close%22)%3Bo%26%26o.addEventListener(%22click%22%2Cfunction()%7Be.style.display%3D%22none%22%7D)%3Bvar%20r%3De.querySelector(%22.selector_query%22)%3Br%26%26r.addEventListener(%22input%22%2Cfunction()%7Bif(!%2F%5B%7B%7D%5D%2F.test(r.value))%7Bvar%20e%3Dl.innerHTML.replace(%22%7B%7Binput%7D%7D%22%2Cr.value)%2Co%3Dt.firstChild%3Bo%3Fo.nodeValue%3De%3A(o%3Ddocument.createTextNode(e)%2Ct.appendChild(o))%7D%7D)%7D%7D%7D()%3B
```
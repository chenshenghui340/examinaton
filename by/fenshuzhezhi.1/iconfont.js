;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M852.002 1000.016h-602.794v-828.841h263.721v343.779l133.406-101.323 130.317 101.323v-343.779h150.699v753.492c0 41.573-33.775 75.347-75.349 75.347v0zM646.335 364.259l-95.73 75.348v-306.106h188.371v306.106l-92.641-75.348zM136.186 95.827v37.674c0 20.825 16.849 37.676 37.673 37.676h37.676v828.841h-37.676c-41.647 0-75.347-33.774-75.347-75.348v-828.842c0-41.647 33.7-75.348 75.347-75.348h678.143c27.814 0 51.802 15.233 64.901 37.674h-743.044c-20.825 0-37.673 16.85-37.673 37.674v0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-duihao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C229.239467 0 0 229.239467 0 512s229.239467 512 512 512 512-229.239467 512-512S794.760533 0 512 0zM474.965333 785.066667C396.288 685.329067 303.7184 609.348267 238.933333 585.591467l152.746667-94.993067 74.0352 147.2512c0 0 120.354133-299.2128 310.101333-398.9504-4.608 71.236267-23.1424 132.949333 9.250133 208.964267C701.7472 466.875733 530.500267 680.584533 474.965333 785.066667z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantou-copy-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M97.524 512c0 229.361 186.018 414.476 414.476 414.476s414.476-186.018 414.476-414.476-186.018-414.476-414.476-414.476-414.476 185.115-414.476 414.476zM534.575 365.714l206.787 205.883c6.321 6.321 9.030 14.448 9.030 22.575s-2.709 16.254-9.030 22.575c-12.642 12.642-32.508 12.642-45.15 0l-184.212-184.212-181.503 183.309c-12.642 12.642-32.508 12.642-44.246 0-12.642-12.642-12.642-32.508 0-44.246l204.078-205.884c6.321-6.321 13.545-9.030 22.575-9.030 7.224 0 15.351 2.709 21.672 9.030z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiasanjiao-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M256.204389 384.30607 512.410832 704.565408 768.617276 384.30607Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantou-copy-copy-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M926.476 512c0-229.361-186.018-414.476-414.476-414.476s-414.476 186.018-414.476 414.476 186.018 414.476 414.476 414.476 414.476-185.115 414.476-414.476zM489.425 658.286l-206.787-205.883c-6.321-6.321-9.030-14.448-9.030-22.575s2.709-16.254 9.030-22.575c12.642-12.642 32.508-12.642 45.15 0l184.212 184.212 181.503-183.309c12.642-12.642 32.508-12.642 44.246 0 12.642 12.642 12.642 32.508 0 44.246l-204.078 205.884c-6.321 6.321-13.545 9.030-22.575 9.030-7.224 0-15.351-2.709-21.672-9.030z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiasanjiao-copy-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M767.796 639.694l-256.206-320.259-256.206 320.259z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yuandian" viewBox="0 0 1098 1024">' +
    '' +
    '<path d="M540.374384 1017.904764C817.305615 1017.904764 1041.655172 791.322873 1041.655172 512 1041.655172 232.677127 817.305615 6.095238 540.374384 6.095238 263.443151 6.095238 39.093596 232.677127 39.093596 512 39.093596 791.322873 263.443151 1017.904764 540.374384 1017.904764L540.374384 1017.904764ZM540.374384 944.761907C304.001833 944.761907 112.236453 751.088413 112.236453 512 112.236453 272.911588 304.001833 79.238095 540.374384 79.238095 776.746935 79.238095 968.512315 272.911588 968.512315 512 968.512315 751.088413 776.746935 944.761907 540.374384 944.761907L540.374384 944.761907Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yuandian1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.999 248.896c145.299 0 263.104 117.777 263.104 263.104 0 145.321-117.803 263.104-263.104 263.104-145.324 0-263.104-117.781-263.104-263.104 0-145.328 117.781-263.104 263.104-263.104z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)
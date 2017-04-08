;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M852.002 1000.016h-602.794v-828.841h263.721v343.779l133.406-101.323 130.317 101.323v-343.779h150.699v753.492c0 41.573-33.775 75.347-75.349 75.347v0zM646.335 364.259l-95.73 75.348v-306.106h188.371v306.106l-92.641-75.348zM136.186 95.827v37.674c0 20.825 16.849 37.676 37.673 37.676h37.676v828.841h-37.676c-41.647 0-75.347-33.774-75.347-75.348v-828.842c0-41.647 33.7-75.348 75.347-75.348h678.143c27.814 0 51.802 15.233 64.901 37.674h-743.044c-20.825 0-37.673 16.85-37.673 37.674v0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantou-copy-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M97.524 512c0 229.361 186.018 414.476 414.476 414.476s414.476-186.018 414.476-414.476-186.018-414.476-414.476-414.476-414.476 185.115-414.476 414.476zM534.575 365.714l206.787 205.883c6.321 6.321 9.030 14.448 9.030 22.575s-2.709 16.254-9.030 22.575c-12.642 12.642-32.508 12.642-45.15 0l-184.212-184.212-181.503 183.309c-12.642 12.642-32.508 12.642-44.246 0-12.642-12.642-12.642-32.508 0-44.246l204.078-205.884c6.321-6.321 13.545-9.030 22.575-9.030 7.224 0 15.351 2.709 21.672 9.030z"  ></path>' +
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
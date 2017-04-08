;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-iconshugang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M385.593344 215.764992c0-108.370944 34.661376-152.725504 95.468544-152.725504l0 0c60.790784 0 95.470592 44.35456 95.470592 152.725504l0 589.556736c0 108.332032-34.679808 155.626496-95.470592 155.626496l0 0c-60.807168 0-95.468544-47.294464-95.468544-155.626496L385.593344 215.764992z" fill="#e98f36" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-minus" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M64.782336 471.387136l892.371968 0 0 81.92-892.371968 0 0-81.92Z" fill="#1afa29" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-plus" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M957.15328 471.387136 551.927808 471.387136 551.927808 66.161664 470.007808 66.161664 470.007808 471.387136 64.782336 471.387136 64.782336 553.307136 470.007808 553.307136 470.007808 958.533632 551.927808 958.533632 551.927808 553.307136 957.15328 553.307136Z" fill="#1afa29" ></path>' +
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
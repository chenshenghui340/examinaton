;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shanchu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M693.970944 231.906304c33.959936 4.780032 69.298176-1.37216 97.028096 3.345408 44.90752 7.640064 67.670016 45.82912 62.736384 102.047744-18.123776 0-36.245504 0-54.372352 0-1.531904 99.728384-0.833536 198.555648-0.833536 298.615808 0 50.50368 4.205568 103.617536-0.835584 148.888576-4.769792 42.800128-36.119552 68.866048-74.445824 75.282432-37.791744 6.326272-87.942144 1.673216-129.649664 1.673216-87.457792 0-176.078848 1.693696-261.8112 0-41.751552-0.826368-72.511488-14.076928-91.173888-39.315456-18.664448-25.23648-16.729088-63.427584-16.729088-108.737536 0-126.232576 0-251.404288 0-376.40704-17.288192 0-34.57536 0-51.861504 0-8.421376-51.725312 13.971456-88.896512 51.861504-101.211136 27.851776-9.054208 64.98304-1.7408 104.55552-4.182016-3.19488-55.675904-0.186368-97.969152 47.679488-103.72096 21.392384-2.571264 49.959936 0 76.115968 0 47.161344 0 101.813248 0 152.237056 0 29.026304 0 58.730496-2.801664 73.608192 10.037248C698.684416 156.007424 693.289984 196.973568 693.970944 231.906304zM380.29824 183.391232c0 16.729088 0 33.458176 0 50.187264 87.2704 0 174.5408 0 261.810176 0 0-17.565696 0-35.131392 0-52.696064-86.989824 0-173.983744 0-260.974592 0C380.158976 181.02272 380.225536 182.204416 380.29824 183.391232zM329.274368 343.154688c0 105.859072 0 211.275776 0 318.690304 0 27.22304-6.258688 85.224448 10.037248 97.02912 6.482944 4.697088 23.19872 5.390336 30.949376 0 16.86016-11.718656 10.873856-68.069376 10.873856-96.192512 0-108.795904 0-219.029504 0-322.036736-17.006592 0-34.016256 0-51.023872 0C329.136128 340.785152 329.201664 341.966848 329.274368 343.154688zM484.854784 343.154688c0 95.297536 0 206.577664 0 308.653056 0 24.351744-5.6576 81.993728 4.182016 98.702336 6.501376 11.03872 28.381184 16.043008 39.313408 7.529472 14.824448-11.544576 8.36608-72.590336 8.36608-97.865728 0-109.07136 0-213.696512 0-319.526912-17.007616 0-34.018304 0-51.024896 0C484.716544 340.785152 484.783104 341.966848 484.854784 343.154688zM642.108416 343.154688c0 102.566912 0 216.736768 0 322.873344 0 33.067008-6.44608 83.785728 15.055872 92.84608 9.362432 3.946496 25.977856 0.893952 30.111744-2.507776 14.038016-11.556864 7.530496-73.517056 7.530496-97.865728 0-108.521472 0-212.59264 0-317.853696-17.288192 0-34.576384 0-51.861504 0C641.970176 340.785152 642.036736 341.966848 642.108416 343.154688z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiazai" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M820.156894 477.761198l-205.438952 0L614.717941 66.884316l-205.438952 0 0 410.877905L203.842083 477.762221l308.157405 273.915533L820.156894 477.761198zM203.842083 957.115684l616.313787 0 0-68.477604L203.842083 888.638079 203.842083 957.115684z"  ></path>' +
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
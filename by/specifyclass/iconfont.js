;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-iconfontshijuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M756.326387 308.234343 368.05972 308.234343c-12.929293 0-23.40202 10.472727-23.40202 23.40202 0 12.929293 10.472727 23.40202 23.40202 23.40202l388.266667 0c12.929293 0 23.40202-10.472727 23.40202-23.40202C779.728407 318.707071 769.25568 308.234343 756.326387 308.234343L756.326387 308.234343zM736.15669 495.579798c0-12.929293-10.472727-23.40202-23.40202-23.40202L368.05972 472.177778c-12.929293 0-23.40202 10.472727-23.40202 23.40202 0 12.929293 10.472727 23.40202 23.40202 23.40202l344.694949 0C725.683963 518.981818 736.15669 508.509091 736.15669 495.579798L736.15669 495.579798zM368.05972 636.379798c-12.929293 0-23.40202 10.472727-23.40202 23.40202 0 12.929293 10.472727 23.40202 23.40202 23.40202l229.753535 0c12.929293 0 23.40202-10.472727 23.40202-23.40202 0-12.929293-10.472727-23.40202-23.40202-23.40202L368.05972 636.379798 368.05972 636.379798zM607.898104 877.640404 173.861741 877.640404c-11.119192 0-14.222222-3.10303-14.222222-14.222222L159.639518 157.090909c0-11.119192 3.10303-14.222222 14.222222-14.222222l659.911111 0c11.119192 0 14.222222 3.10303 14.222222 14.222222l0 369.907071 0.129293 0c0.517172 12.412121 10.731313 22.367677 23.40202 22.367677 12.670707 0 22.755556-9.955556 23.40202-22.367677l0.129293 0L895.0577 119.59596c0-12.929293-10.472727-23.40202-23.40202-23.40202L136.108205 96.193939C123.178912 96.193939 112.706185 106.666667 112.706185 119.59596l0 781.446465c0 12.929293 10.472727 23.40202 23.40202 23.40202l471.143434 0M907.599114 582.464646M367.413256 877.640404c-12.929293 0-23.40202 10.472727-23.40202 23.40202 0 12.929293 10.472727 23.40202 23.40202 23.40202l229.753535 0c12.929293 0 23.40202-10.472727 23.40202-23.40202 0-12.929293-10.472727-23.40202-23.40202-23.40202L367.413256 877.640404 367.413256 877.640404z"  ></path>' +
    '' +
    '<path d="M267.211236 331.636364m-33.616162 0a26 26 0 1 0 67.232323 0 26 26 0 1 0-67.232323 0Z"  ></path>' +
    '' +
    '<path d="M271.736488 497.131313m-33.616162 0a26 26 0 1 0 67.232323 0 26 26 0 1 0-67.232323 0Z"  ></path>' +
    '' +
    '<path d="M271.736488 660.686869m-33.616162 0a26 26 0 1 0 67.232323 0 26 26 0 1 0-67.232323 0Z"  ></path>' +
    '' +
    '<path d="M630.395074 736.581818l74.214141 59.216162 184.888889-170.408081c0 0 12.412121-11.377778 23.272727-2.456566 3.232323 2.585859 6.981818 10.214141-1.422222 21.979798L718.314266 871.046465c0 0-14.739394 20.29899-32.323232-0.258586l-83.393939-112.484848c0 0-9.826263-15.256566 2.456566-24.307071C609.320326 730.892929 618.75871 726.109091 630.395074 736.581818L630.395074 736.581818zM630.395074 736.581818"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-duihaocuohao54" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M6.499 649.844c0 0 158.27 56.743 254.061 162.857s179.241 198.574 179.241 198.574 72.198-154.337 263.072-361.431 314.682-263.072 314.682-263.072-15.127-86.125-17.422-158.925c-3.604-115.070 1.911-215.068 1.911-215.068s-151.333 28.345-345.594 317.249-232.107 412.658-232.107 412.658l-139.264-283.716-278.582 190.874z" fill="#d81e06" ></path>' +
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
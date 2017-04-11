;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-clock" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M497.11104 842.46528c180.67456 0 327.68-147.00544 327.68-327.68s-147.00544-327.68-327.68-327.68-327.68 147.00544-327.68 327.68S316.43648 842.46528 497.11104 842.46528zM497.11104 228.06528c158.1056 0 286.72 128.6144 286.72 286.72s-128.6144 286.72-286.72 286.72-286.72-128.6144-286.72-286.72S339.02592 228.06528 497.11104 228.06528z"  ></path>' +
    '' +
    '<path d="M608.8704 655.50336c3.9936 3.9936 9.23648 6.00064 14.47936 6.00064s10.48576-2.00704 14.47936-6.00064c8.00768-8.00768 8.00768-20.95104 0-28.95872l-120.23808-120.23808L517.59104 285.20448c0-11.30496-9.15456-20.48-20.48-20.48s-20.48 9.17504-20.48 20.48l0 229.5808c0 5.4272 2.1504 10.6496 6.00064 14.47936L608.8704 655.50336z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-duihao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C229.239467 0 0 229.239467 0 512s229.239467 512 512 512 512-229.239467 512-512S794.760533 0 512 0zM474.965333 785.066667C396.288 685.329067 303.7184 609.348267 238.933333 585.591467l152.746667-94.993067 74.0352 147.2512c0 0 120.354133-299.2128 310.101333-398.9504-4.608 71.236267-23.1424 132.949333 9.250133 208.964267C701.7472 466.875733 530.500267 680.584533 474.965333 785.066667z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiahao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.563048 64.233953c-247.579725 0-448.281793 200.705138-448.281793 448.284863s200.701045 448.281793 448.281793 448.281793S959.844841 760.098541 959.844841 512.518816 759.142773 64.233953 511.563048 64.233953zM511.563048 896.802016c-212.235752 0-384.2832-172.051541-384.2832-384.2832 0-212.235752 172.047448-384.2832 384.2832-384.2832 212.231659 0 384.2832 172.047448 384.2832 384.2832C895.846248 724.750475 723.79573 896.802016 511.563048 896.802016z"  ></path>' +
    '' +
    '<path d="M765.295913 475.385081 548.694737 475.385081 548.694737 258.783905 474.43136 258.783905 474.43136 475.385081 257.830183 475.385081 257.830183 549.648458 474.43136 549.648458 474.43136 766.250658 548.694737 766.250658 548.694737 549.648458 765.295913 549.648458Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shuxian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M437.497169 64.986083l149.004639 0 0 894.028856-149.004639 0 0-894.028856Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.040421 222.720547l81.815377 121.265878c18.059308 26.750247 53.676503 52.598962 84.677565 61.466933l140.671856 40.379663L729.089805 561.255821c-19.818371 25.51-33.378202 67.36834-32.239262 99.496062l5.081739 146.265248-137.554866-49.998741c-18.680455-6.797823-38.779212-8.229428-52.338019-8.229428-13.55983 0-33.658587 1.431605-52.358485 8.229428l-137.535423 49.989531 5.078669-146.21306c1.14201-32.159444-12.43931-74.018807-32.337499-99.597369l-90.136903-115.354238 140.696416-40.389896c30.996968-8.879228 66.615187-34.738176 84.655052-61.4567L512.040421 222.720547M512.019954 169.311127c-8.259104 0-16.540721 4.660136-22.781866 13.980409L396.164297 321.06539c-12.56006 18.600637-40.436968 38.84061-61.997006 45.020356l-159.833265 45.876863c-21.561062 6.180769-27.918863 25.718755-14.120602 43.418882l102.397135 131.034359c13.758352 17.679661 24.478508 50.516534 23.679305 72.915683l-5.760191 166.194136c-0.642636 17.817808 9.738805 29.099758 24.639167 29.099758 3.821025 0 7.959276-0.740874 12.279674-2.320858l156.232251-56.798611c10.559497-3.838422 24.460088-5.760191 38.359656-5.760191 13.878079 0 27.777647 1.921769 38.317701 5.760191l156.273183 56.798611c4.321422 1.579985 8.439206 2.320858 12.259208 2.320858 14.878872 0 25.25929-11.290137 24.659633-29.099758l-5.760191-166.194136c-0.799202-22.399149 9.881045-55.236022 23.639396-72.935126l102.275361-131.014916c13.878079-17.700127 7.519254-37.239136-14.039761-43.418882l-159.832242-45.876863c-21.597901-6.180769-49.480948-26.419719-62.037938-45.020356l-92.956112-137.773853C528.578072 173.972287 520.298502 169.311127 512.019954 169.311127L512.019954 169.311127z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon-test" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M288 384h448l-226.304 256z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-loudou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M855.552 151.552c-6.144-11.776-18.944-19.456-33.28-19.456H101.888c-14.336 0-27.648 7.68-33.28 19.968-6.144 11.776-4.096 26.112 5.632 36.352l256 274.432v309.248c0 12.8 7.68 24.576 20.48 30.208l188.928 86.528c5.12 2.56 10.752 3.584 16.384 3.584 6.656 0 13.312-1.536 18.944-4.608 10.752-6.144 17.408-16.384 17.92-28.16l12.8-396.8 245.248-274.944c8.704-10.752 10.24-24.576 4.608-36.352z m-334.848 652.8l-117.248-53.76V483.84h128l-10.752 320.512z m30.208-387.584c-2.048-0.512-3.584-1.024-5.632-1.024H383.488L181.76 199.68h562.176L550.912 416.768z" fill="" ></path>' +
    '' +
    '<path d="M685.568 523.776h173.568v59.904H685.568z m0 130.56h173.568v59.904H685.568z m0 119.296h173.568v59.904H685.568z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shuxian1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M495.285 161.458h35.133v701.366h-35.133V161.458z" fill="#cdcdcd" ></path>' +
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
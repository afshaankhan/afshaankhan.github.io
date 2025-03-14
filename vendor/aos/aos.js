!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.AOS = t())
    : (e.AOS = t());
})(this, function () {
  return (function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var i = (n[o] = { exports: {}, id: o, loaded: !1 });
      return e[o].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
    }
    var n = {};
    return (t.m = e), (t.c = n), (t.p = "dist/"), t(0);
  })([
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var i = Object.assign || function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        },
        r = n(1),
        a = o(r),
        u = n(6),
        c = o(u),
        s = n(7),
        f = o(s),
        d = n(8),
        l = o(d),
        p = n(9),
        m = o(p),
        v = n(10),
        y = o(v),
        g = n(11),
        h = o(g),
        w = [],
        x = !1,
        k = {
          offset: 120,
          delay: 100,
          easing: "ease-in-out",
          duration: 800,
          disable: !1,
          once: !1,
          startEvent: "DOMContentLoaded",
          throttleDelay: 99,
          debounceDelay: 50,
          disableMutationObserver: !1,
        },
        j = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (e && (x = !0), x) return w = (0, y.default)(w, k), (0, m.default)(w, k.once), w;
        },
        O = function () {
          w = (0, h.default)();
          j();
        },
        S = function () {
          w.forEach(function (e) {
            e.node.removeAttribute("data-aos"),
              e.node.removeAttribute("data-aos-easing"),
              e.node.removeAttribute("data-aos-duration"),
              e.node.removeAttribute("data-aos-delay");
          });
        },
        _ = function (e) {
          return (
            e === !0 ||
            ("mobile" === e && l.default.mobile()) ||
            ("phone" === e && l.default.phone()) ||
            ("tablet" === e && l.default.tablet()) ||
            ("function" == typeof e && e() === !0)
          );
        },
        M = function (e) {
          k = i(k, e);
          var t = document.all && !window.atob;
          return _(
            k.disable
          ) || t
            ? S()
            : (document.querySelector("body").setAttribute("data-aos-easing", k.easing),
              document.querySelector("body").setAttribute("data-aos-duration", k.duration),
              document.querySelector("body").setAttribute("data-aos-delay", k.delay),
              "DOMContentLoaded" === k.startEvent &&
              ["complete", "interactive"].indexOf(document.readyState) > -1
                ? j(!0)
                : "load" === k.startEvent
                ? window.addEventListener(k.startEvent, function () {
                    j(!0);
                  })
                : document.addEventListener(k.startEvent, function () {
                    j(!0);
                  }),
              window.addEventListener(
                "resize",
                (0, f.default)(j, k.debounceDelay, !0)
              ),
              window.addEventListener(
                "orientationchange",
                (0, f.default)(j, k.debounceDelay, !0)
              ),
              window.addEventListener(
                "scroll",
                (0, c.default)(function () {
                  (0, m.default)(w, k.once);
                }, k.throttleDelay)
              ),
              w);
        };
      e.exports = { init: M, refresh: j, refreshHard: O };
    },
    function (e, t) {},
    function (e, t) {
      function n(e) {
        var t = 0,
          n = 0;
        for (; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); )
          (t += e.offsetLeft - ("BODY" !== e.tagName ? e.scrollLeft : 0)),
            (n += e.offsetTop - ("BODY" !== e.tagName ? e.scrollTop : 0)),
            (e = e.offsetParent);
        return { top: n, left: t };
      }
      t.default = n;
    },
    function (e, t) {
      function n(e) {
        return e.getBoundingClientRect().top + window.pageYOffset;
      }
      t.default = n;
    },
    function (e, t) {
      function n(e, t) {
        var n = e.node.getAttribute("data-aos-once");
        t > e.position
          ? e.node.classList.add("aos-animate")
          : "false" === n ||
            (!t && "true" !== n) ||
            e.node.classList.remove("aos-animate");
      }
      function o(e, t) {
        var o = window.pageYOffset,
          i = window.innerHeight;
        e.forEach(function (e) {
          n(e, i + o, t);
        });
      }
      t.default = o;
    },
  ]);
});

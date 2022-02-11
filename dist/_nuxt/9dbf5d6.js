;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5, 2],
  {
    235: function (t, n, e) {
      var content = e(237)
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, e(46).default)('83bc4a6c', content, !0, { sourceMap: !1 })
    },
    236: function (t, n, e) {
      'use strict'
      e(235)
    },
    237: function (t, n, e) {
      var o = e(45)(!1)
      o.push([t.i, '', '']), (t.exports = o)
    },
    238: function (t, n, e) {
      'use strict'
      e.r(n)
      var o = { name: 'Content' },
        l = (e(236), e(17)),
        component = Object(l.a)(
          o,
          function () {
            var t = this,
              n = t.$createElement
            return (t._self._c || n)('div', [t._t('content')], 2)
          },
          [],
          !1,
          null,
          '2f184908',
          null
        )
      n.default = component.exports
    },
    240: function (t, n, e) {
      'use strict'
      e.r(n)
      var o = { layout: 'main' },
        l = e(17),
        component = Object(l.a)(
          o,
          function () {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n
            return e('Content', {
              scopedSlots: t._u([
                {
                  key: 'content',
                  fn: function () {
                    return [e('h1', [t._v('Components')])]
                  },
                  proxy: !0,
                },
              ]),
            })
          },
          [],
          !1,
          null,
          null,
          null
        )
      n.default = component.exports
      installComponents(component, { Content: e(238).default })
    },
  },
])

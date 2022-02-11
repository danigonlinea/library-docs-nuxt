;(window.webpackJsonp = window.webpackJsonp || []).push([
  [8, 2],
  {
    235: function (n, t, e) {
      var content = e(237)
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[n.i, content, '']]),
        content.locals && (n.exports = content.locals)
      ;(0, e(46).default)('83bc4a6c', content, !0, { sourceMap: !1 })
    },
    236: function (n, t, e) {
      'use strict'
      e(235)
    },
    237: function (n, t, e) {
      var o = e(45)(!1)
      o.push([n.i, '', '']), (n.exports = o)
    },
    238: function (n, t, e) {
      'use strict'
      e.r(t)
      var o = { name: 'Content' },
        c = (e(236), e(17)),
        component = Object(c.a)(
          o,
          function () {
            var n = this,
              t = n.$createElement
            return (n._self._c || t)('div', [n._t('content')], 2)
          },
          [],
          !1,
          null,
          '2f184908',
          null
        )
      t.default = component.exports
    },
    244: function (n, t, e) {
      'use strict'
      e.r(t)
      var o = { layout: 'main' },
        c = e(17),
        component = Object(c.a)(
          o,
          function () {
            var n = this,
              t = n.$createElement,
              e = n._self._c || t
            return e('Content', {
              scopedSlots: n._u([
                {
                  key: 'content',
                  fn: function () {
                    return [
                      e('article', [
                        e('h1', [
                          n._v(
                            "Welcome to Watson, the Docplanner's design system."
                          ),
                        ]),
                        n._v(' '),
                        e('p', [
                          n._v(
                            "\n        Watson is Docplanner's design language for products and digital\n        experiences. With the Docplanner Design Language as its foundation,\n        the system consists of working code, design tools and resources, human\n        interface guidelines, and a vibrant community of contributors.\n      "
                          ),
                        ]),
                      ]),
                    ]
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
      t.default = component.exports
      installComponents(component, { Content: e(238).default })
    },
  },
])

;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    166: function (t, e, n) {
      var content = n(229)
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(46).default)('7f2c86e8', content, !0, { sourceMap: !1 })
    },
    167: function (t, e, n) {
      var content = n(231)
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(46).default)('2d297855', content, !0, { sourceMap: !1 })
    },
    168: function (t, e, n) {
      var content = n(233)
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(46).default)('76e5fda1', content, !0, { sourceMap: !1 })
    },
    169: function (t, e, n) {
      'use strict'
      n.r(e)
      var o = { name: 'Header' },
        r = (n(232), n(17)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement
            t._self._c
            return t._m(0)
          },
          [
            function () {
              var t = this.$createElement,
                e = this._self._c || t
              return e('header', { staticClass: 'watson-header' }, [
                e('input', { attrs: { type: 'text', placeholder: 'Search' } }),
              ])
            },
          ],
          !1,
          null,
          '1f33f248',
          null
        )
      e.default = component.exports
      installComponents(component, { Header: n(169).default })
    },
    175: function (t, e, n) {
      'use strict'
      n(228)
      var o = n(17),
        component = Object(o.a)(
          {},
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n('div', { staticClass: 'watson-site-container' }, [
              n(
                'div',
                { staticClass: 'watson-main-container' },
                [
                  n('Sidebar'),
                  t._v(' '),
                  n('div', [n('Header'), t._v(' '), n('Nuxt')], 1),
                ],
                1
              ),
            ])
          },
          [],
          !1,
          null,
          '6c9d3730',
          null
        )
      e.a = component.exports
      installComponents(component, {
        Sidebar: n(234).default,
        Header: n(169).default,
      })
    },
    176: function (t, e, n) {
      n(177), (t.exports = n(178))
    },
    226: function (t, e, n) {
      var content = n(227)
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(46).default)('2d79f4b2', content, !0, { sourceMap: !1 })
    },
    227: function (t, e, n) {
      var o = n(45)(!1)
      o.push([
        t.i,
        '*,:after,:before{box-sizing:border-box}*{margin:0}body,html{height:100%}body{line-height:1.5;-webkit-font-smoothing:antialiased;font-family:"Inter",sans-serif;font-weight:400}canvas,img,picture,svg,video{display:block;max-width:100%}button,input,select,textarea{font:inherit}h1,h2,h3,h4,h5,h6,p{word-wrap:break-word}#__next,#root{isolation:isolate}h1,h2,h3,h4{font-family:"Noto Serif",serif}p{max-width:55ch}h1{font-size:3rem;line-height:1.25;max-width:30ch;margin-bottom:1.5rem;letter-spacing:-.03em}h1:first-letter{text-transform:capitalize}',
        '',
      ]),
        (t.exports = o)
    },
    228: function (t, e, n) {
      'use strict'
      n(166)
    },
    229: function (t, e, n) {
      var o = n(45)(!1)
      o.push([
        t.i,
        '.watson-site-container[data-v-6c9d3730]{min-height:100vh}.watson-main-container[data-v-6c9d3730]{display:grid;grid-template-columns:repeat(12,1fr);grid-column-gap:24px;min-height:100%}.watson-main-container[data-v-6c9d3730] :first-child{grid-column:1/3}.watson-main-container[data-v-6c9d3730] :nth-child(2){grid-column:3/-1}',
        '',
      ]),
        (t.exports = o)
    },
    230: function (t, e, n) {
      'use strict'
      n(167)
    },
    231: function (t, e, n) {
      var o = n(45)(!1)
      o.push([
        t.i,
        '.watson-sidebar[data-v-4dee6e2c]{height:100vh;overflow-y:auto;background-color:#f5f5f5;position:-webkit-sticky;position:sticky;top:0;padding:2rem 1rem}.watson-sidebar ul[data-v-4dee6e2c]{list-style:none;margin:0;padding:0}.watson-sidebar ul[data-v-4dee6e2c]:nth-child(2){padding-left:2rem}.watson-sidebar a[data-v-4dee6e2c]{color:currentColor}.watson-logo[data-v-4dee6e2c]{text-decoration:none;font-weight:700;margin-bottom:2rem;display:inline-block;font-family:"Noto serif";letter-spacing:-.05em}',
        '',
      ]),
        (t.exports = o)
    },
    232: function (t, e, n) {
      'use strict'
      n(168)
    },
    233: function (t, e, n) {
      var o = n(45)(!1)
      o.push([
        t.i,
        '.watson-header[data-v-1f33f248]{position:-webkit-sticky;position:sticky;top:0;background:#fff;padding:1.5rem 0}',
        '',
      ]),
        (t.exports = o)
    },
    234: function (t, e, n) {
      'use strict'
      n.r(e)
      n(42), n(41), n(90)
      var o = {
          Foundations: ['Design', 'Spacing', 'Colors', 'Typography'],
          Components: ['Button', 'Dropdown', 'Input'],
        },
        r = {
          name: 'Sidebar',
          computed: {
            sidebarMenu: function () {
              return Object.keys(o).map(function (t) {
                return {
                  name: t,
                  key: t.toLowerCase(),
                  path: '/'.concat(t.toLowerCase()),
                  items: o[t].map(function (e) {
                    return {
                      name: e,
                      key: e.toLowerCase(),
                      path: '/'
                        .concat(t.toLowerCase(), '/')
                        .concat(e.toLowerCase()),
                    }
                  }),
                }
              })
            },
          },
        },
        c = (n(230), n(17)),
        component = Object(c.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'div',
              { staticClass: 'watson-sidebar' },
              [
                n(
                  'NuxtLink',
                  { staticClass: 'watson-logo', attrs: { to: '/' } },
                  [t._v('Watson')]
                ),
                t._v(' '),
                n('nav', [
                  n(
                    'ul',
                    t._l(t.sidebarMenu, function (section) {
                      return n(
                        'li',
                        {
                          key: section.name,
                          staticClass: 'watson-sidebar-section',
                        },
                        [
                          n('NuxtLink', { attrs: { to: section.path } }, [
                            t._v(t._s(section.name)),
                          ]),
                          t._v(' '),
                          section.items
                            ? n(
                                'ul',
                                { staticClass: 'watson-sidebar-item' },
                                t._l(section.items, function (e) {
                                  return n(
                                    'li',
                                    {
                                      key: e.name,
                                      staticClass:
                                        'watson-sidebar-section-item',
                                    },
                                    [
                                      n('NuxtLink', { attrs: { to: e.path } }, [
                                        t._v(t._s(e.name)),
                                      ]),
                                    ],
                                    1
                                  )
                                }),
                                0
                              )
                            : t._e(),
                        ],
                        1
                      )
                    }),
                    0
                  ),
                ]),
              ],
              1
            )
          },
          [],
          !1,
          null,
          '4dee6e2c',
          null
        )
      e.default = component.exports
    },
  },
  [[176, 9, 1, 10]],
])

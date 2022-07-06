'use strict';
(self.webpackChunkmesh_web = self.webpackChunkmesh_web || []).push([
  [974],
  {
    14974: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, { ColorControl: () => ColorControl, default: () => ColorControl });
      __webpack_require__(19601),
        __webpack_require__(47941),
        __webpack_require__(69600),
        __webpack_require__(57327),
        __webpack_require__(41539),
        __webpack_require__(9653),
        __webpack_require__(74916),
        __webpack_require__(39714),
        __webpack_require__(15306),
        __webpack_require__(66992),
        __webpack_require__(51532),
        __webpack_require__(78783),
        __webpack_require__(33948),
        __webpack_require__(4723),
        __webpack_require__(21249),
        __webpack_require__(23123),
        __webpack_require__(54747),
        __webpack_require__(47042),
        __webpack_require__(92222),
        __webpack_require__(26833),
        __webpack_require__(23157),
        __webpack_require__(68309),
        __webpack_require__(82526),
        __webpack_require__(41817),
        __webpack_require__(32165),
        __webpack_require__(91038);
      var _ColorPicker,
        _fallbackColor,
        _index_3ae04fda_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(7162),
        react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(67294),
        _storybook_theming__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(65316);
      __webpack_require__(35032), __webpack_require__(80129);
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, { value, enumerable: !0, configurable: !0, writable: !0 })
            : (obj[key] = value),
          obj
        );
      }
      function _typeof(obj) {
        return (
          (_typeof =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                    ? 'symbol'
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i = null == arr ? null : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function u() {
        return (u =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r];
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function c(e, r) {
        if (null == e) return {};
        var t,
          n,
          o = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++) r.indexOf((t = a[n])) >= 0 || (o[t] = e[t]);
        return o;
      }
      function i(e) {
        var t = (0, react__WEBPACK_IMPORTED_MODULE_26__.useRef)(e),
          n = (0, react__WEBPACK_IMPORTED_MODULE_26__.useRef)(function (e) {
            t.current && t.current(e);
          });
        return (t.current = e), n.current;
      }
      var s = function s(e, r, t) {
          return void 0 === r && (r = 0), void 0 === t && (t = 1), e > t ? t : e < r ? r : e;
        },
        f = function f(e) {
          return 'touches' in e;
        },
        v = function v(e) {
          return (e && e.ownerDocument.defaultView) || self;
        },
        d = function d(e, r, t) {
          var n = e.getBoundingClientRect(),
            o = f(r)
              ? (function (e, r) {
                  for (var t = 0; t < e.length; t++) if (e[t].identifier === r) return e[t];
                  return e[0];
                })(r.touches, t)
              : r;
          return {
            left: s((o.pageX - (n.left + v(e).pageXOffset)) / n.width),
            top: s((o.pageY - (n.top + v(e).pageYOffset)) / n.height),
          };
        },
        h = function h(e) {
          !f(e) && e.preventDefault();
        },
        m = react__WEBPACK_IMPORTED_MODULE_26__.memo(function (o) {
          var a = o.onMove,
            l = o.onKey,
            s = c(o, ['onMove', 'onKey']),
            m = (0, react__WEBPACK_IMPORTED_MODULE_26__.useRef)(null),
            g = i(a),
            p = i(l),
            b = (0, react__WEBPACK_IMPORTED_MODULE_26__.useRef)(null),
            _ = (0, react__WEBPACK_IMPORTED_MODULE_26__.useRef)(!1),
            x = (0, react__WEBPACK_IMPORTED_MODULE_26__.useMemo)(
              function () {
                var e = function e(_e) {
                    h(_e),
                      (f(_e) ? _e.touches.length > 0 : _e.buttons > 0) && m.current
                        ? g(d(m.current, _e, b.current))
                        : t(!1);
                  },
                  r = function r() {
                    return t(!1);
                  };
                function t(t) {
                  var n = _.current,
                    o = v(m.current),
                    a = t ? o.addEventListener : o.removeEventListener;
                  a(n ? 'touchmove' : 'mousemove', e), a(n ? 'touchend' : 'mouseup', r);
                }
                return [
                  function (e) {
                    var r = e.nativeEvent,
                      n = m.current;
                    if (
                      n &&
                      (h(r),
                      !(function (e, r) {
                        return r && !f(e);
                      })(r, _.current) && n)
                    ) {
                      if (f(r)) {
                        _.current = !0;
                        var o = r.changedTouches || [];
                        o.length && (b.current = o[0].identifier);
                      }
                      n.focus(), g(d(n, r, b.current)), t(!0);
                    }
                  },
                  function (e) {
                    var r = e.which || e.keyCode;
                    r < 37 ||
                      r > 40 ||
                      (e.preventDefault(),
                      p({ left: 39 === r ? 0.05 : 37 === r ? -0.05 : 0, top: 40 === r ? 0.05 : 38 === r ? -0.05 : 0 }));
                  },
                  t,
                ];
              },
              [p, g],
            ),
            C = x[0],
            E = x[1],
            H = x[2];
          return (
            (0, react__WEBPACK_IMPORTED_MODULE_26__.useEffect)(
              function () {
                return H;
              },
              [H],
            ),
            react__WEBPACK_IMPORTED_MODULE_26__.createElement(
              'div',
              u({}, s, {
                onTouchStart: C,
                onMouseDown: C,
                className: 'react-colorful__interactive',
                ref: m,
                onKeyDown: E,
                tabIndex: 0,
                role: 'slider',
              }),
            )
          );
        }),
        g = function g(e) {
          return e.filter(Boolean).join(' ');
        },
        p = function p(r) {
          var t = r.color,
            n = r.left,
            o = r.top,
            a = void 0 === o ? 0.5 : o,
            l = g(['react-colorful__pointer', r.className]);
          return react__WEBPACK_IMPORTED_MODULE_26__.createElement(
            'div',
            { className: l, style: { top: 100 * a + '%', left: 100 * n + '%' } },
            react__WEBPACK_IMPORTED_MODULE_26__.createElement('div', {
              className: 'react-colorful__pointer-fill',
              style: { backgroundColor: t },
            }),
          );
        },
        b = function b(e, r, t) {
          return void 0 === r && (r = 0), void 0 === t && (t = Math.pow(10, r)), Math.round(t * e) / t;
        },
        _ = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) },
        x = function x(e) {
          return (
            '#' === e[0] && (e = e.substr(1)),
            e.length < 6
              ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: 1 }
              : {
                  r: parseInt(e.substr(0, 2), 16),
                  g: parseInt(e.substr(2, 2), 16),
                  b: parseInt(e.substr(4, 2), 16),
                  a: 1,
                }
          );
        },
        C = function C(e, r) {
          return void 0 === r && (r = 'deg'), Number(e) * (_[r] || 1);
        },
        M = function M(e) {
          var r = e.s,
            t = e.l;
          return {
            h: e.h,
            s: (r *= (t < 50 ? t : 100 - t) / 100) > 0 ? ((2 * r) / (t + r)) * 100 : 0,
            v: t + r,
            a: e.a,
          };
        },
        N = function N(e) {
          var r = e.s,
            t = e.v,
            n = e.a,
            o = ((200 - r) * t) / 100;
          return {
            h: b(e.h),
            s: b(o > 0 && o < 200 ? ((r * t) / 100 / (o <= 100 ? o : 200 - o)) * 100 : 0),
            l: b(o / 2),
            a: b(n, 2),
          };
        },
        w = function w(e) {
          var r = N(e);
          return 'hsl(' + r.h + ', ' + r.s + '%, ' + r.l + '%)';
        },
        y = function y(e) {
          var r = N(e);
          return 'hsla(' + r.h + ', ' + r.s + '%, ' + r.l + '%, ' + r.a + ')';
        },
        q = function q(e) {
          var r = e.h,
            t = e.s,
            n = e.v,
            o = e.a;
          (r = (r / 360) * 6), (t /= 100), (n /= 100);
          var a = Math.floor(r),
            l = n * (1 - t),
            u = n * (1 - (r - a) * t),
            c = n * (1 - (1 - r + a) * t),
            i = a % 6;
          return {
            r: b(255 * [n, u, l, l, c, n][i]),
            g: b(255 * [c, n, n, u, l, l][i]),
            b: b(255 * [l, l, c, n, n, u][i]),
            a: b(o, 2),
          };
        },
        z = function z(e) {
          var r = e.toString(16);
          return r.length < 2 ? '0' + r : r;
        },
        B = function B(e) {
          var r = e.r,
            t = e.g,
            n = e.b,
            o = e.a,
            a = Math.max(r, t, n),
            l = a - Math.min(r, t, n),
            u = l ? (a === r ? (t - n) / l : a === t ? 2 + (n - r) / l : 4 + (r - t) / l) : 0;
          return { h: b(60 * (u < 0 ? u + 6 : u)), s: b(a ? (l / a) * 100 : 0), v: b((a / 255) * 100), a: o };
        },
        K = react__WEBPACK_IMPORTED_MODULE_26__.memo(function (r) {
          var t = r.hue,
            n = r.onChange,
            o = g(['react-colorful__hue', r.className]);
          return react__WEBPACK_IMPORTED_MODULE_26__.createElement(
            'div',
            { className: o },
            react__WEBPACK_IMPORTED_MODULE_26__.createElement(
              m,
              {
                onMove: function onMove(e) {
                  n({ h: 360 * e.left });
                },
                onKey: function onKey(e) {
                  n({ h: s(t + 360 * e.left, 0, 360) });
                },
                'aria-label': 'Hue',
                'aria-valuetext': b(t),
              },
              react__WEBPACK_IMPORTED_MODULE_26__.createElement(p, {
                className: 'react-colorful__hue-pointer',
                left: t / 360,
                color: w({ h: t, s: 100, v: 100, a: 1 }),
              }),
            ),
          );
        }),
        L = react__WEBPACK_IMPORTED_MODULE_26__.memo(function (r) {
          var t = r.hsva,
            n = r.onChange,
            o = { backgroundColor: w({ h: t.h, s: 100, v: 100, a: 1 }) };
          return react__WEBPACK_IMPORTED_MODULE_26__.createElement(
            'div',
            { className: 'react-colorful__saturation', style: o },
            react__WEBPACK_IMPORTED_MODULE_26__.createElement(
              m,
              {
                onMove: function onMove(e) {
                  n({ s: 100 * e.left, v: 100 - 100 * e.top });
                },
                onKey: function onKey(e) {
                  n({ s: s(t.s + 100 * e.left, 0, 100), v: s(t.v - 100 * e.top, 0, 100) });
                },
                'aria-label': 'Color',
                'aria-valuetext': 'Saturation ' + b(t.s) + '%, Brightness ' + b(t.v) + '%',
              },
              react__WEBPACK_IMPORTED_MODULE_26__.createElement(p, {
                className: 'react-colorful__saturation-pointer',
                top: 1 - t.v / 100,
                left: t.s / 100,
                color: w(t),
              }),
            ),
          );
        }),
        A = function A(e, r) {
          if (e === r) return !0;
          for (var t in e) if (e[t] !== r[t]) return !1;
          return !0;
        },
        S = function S(e, r) {
          return e.replace(/\s/g, '') === r.replace(/\s/g, '');
        };
      function T(e, t, l) {
        var u = i(l),
          c = (0, react__WEBPACK_IMPORTED_MODULE_26__.useState)(function () {
            return e.toHsva(t);
          }),
          s = c[0],
          f = c[1],
          v = (0, react__WEBPACK_IMPORTED_MODULE_26__.useRef)({ color: t, hsva: s });
        (0, react__WEBPACK_IMPORTED_MODULE_26__.useEffect)(
          function () {
            if (!e.equal(t, v.current.color)) {
              var r = e.toHsva(t);
              (v.current = { hsva: r, color: t }), f(r);
            }
          },
          [t, e],
        ),
          (0, react__WEBPACK_IMPORTED_MODULE_26__.useEffect)(
            function () {
              var r;
              A(s, v.current.hsva) ||
                e.equal((r = e.fromHsva(s)), v.current.color) ||
                ((v.current = { hsva: s, color: r }), u(r));
            },
            [s, e, u],
          );
        var d = (0, react__WEBPACK_IMPORTED_MODULE_26__.useCallback)(function (e) {
          f(function (r) {
            return Object.assign({}, r, e);
          });
        }, []);
        return [s, d];
      }
      for (
        var P =
            'undefined' != typeof window
              ? react__WEBPACK_IMPORTED_MODULE_26__.useLayoutEffect
              : react__WEBPACK_IMPORTED_MODULE_26__.useEffect,
          R = new Map(),
          V = function V(e) {
            P(function () {
              var r = e.current ? e.current.ownerDocument : document;
              if (void 0 !== r && !R.has(r)) {
                var t = r.createElement('style');
                (t.innerHTML =
                  '.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}'),
                  R.set(r, t);
                var n = (function X() {
                  return __webpack_require__.nc;
                })();
                n && t.setAttribute('nonce', n), r.head.appendChild(t);
              }
            }, []);
          },
          $ = function $(t) {
            var n = t.className,
              o = t.colorModel,
              a = t.color,
              l = void 0 === a ? o.defaultColor : a,
              i = t.onChange,
              s = c(t, ['className', 'colorModel', 'color', 'onChange']),
              f = (0, react__WEBPACK_IMPORTED_MODULE_26__.useRef)(null);
            V(f);
            var v = T(o, l, i),
              d = v[0],
              h = v[1],
              m = g(['react-colorful', n]);
            return react__WEBPACK_IMPORTED_MODULE_26__.createElement(
              'div',
              u({}, s, { ref: f, className: m }),
              react__WEBPACK_IMPORTED_MODULE_26__.createElement(L, { hsva: d, onChange: h }),
              react__WEBPACK_IMPORTED_MODULE_26__.createElement(K, {
                hue: d.h,
                onChange: h,
                className: 'react-colorful__last-control',
              }),
            );
          },
          G = {
            defaultColor: '000',
            toHsva: function toHsva(e) {
              return B(x(e));
            },
            fromHsva: function fromHsva(e) {
              return (t = (r = q(e)).g), (n = r.b), '#' + z(r.r) + z(t) + z(n);
              var r, t, n;
            },
            equal: function equal(e, r) {
              return e.toLowerCase() === r.toLowerCase() || A(x(e), x(r));
            },
          },
          Q = function Q(r) {
            var t = r.className,
              n = r.hsva,
              o = r.onChange,
              a = {
                backgroundImage:
                  'linear-gradient(90deg, ' +
                  y(Object.assign({}, n, { a: 0 })) +
                  ', ' +
                  y(Object.assign({}, n, { a: 1 })) +
                  ')',
              },
              l = g(['react-colorful__alpha', t]);
            return react__WEBPACK_IMPORTED_MODULE_26__.createElement(
              'div',
              { className: l },
              react__WEBPACK_IMPORTED_MODULE_26__.createElement('div', {
                className: 'react-colorful__alpha-gradient',
                style: a,
              }),
              react__WEBPACK_IMPORTED_MODULE_26__.createElement(
                m,
                {
                  onMove: function onMove(e) {
                    o({ a: e.left });
                  },
                  onKey: function onKey(e) {
                    o({ a: s(n.a + e.left) });
                  },
                  'aria-label': 'Alpha',
                  'aria-valuetext': b(100 * n.a) + '%',
                },
                react__WEBPACK_IMPORTED_MODULE_26__.createElement(p, {
                  className: 'react-colorful__alpha-pointer',
                  left: n.a,
                  color: y(n),
                }),
              ),
            );
          },
          U = function U(t) {
            var n = t.className,
              o = t.colorModel,
              a = t.color,
              l = void 0 === a ? o.defaultColor : a,
              i = t.onChange,
              s = c(t, ['className', 'colorModel', 'color', 'onChange']),
              f = (0, react__WEBPACK_IMPORTED_MODULE_26__.useRef)(null);
            V(f);
            var v = T(o, l, i),
              d = v[0],
              h = v[1],
              m = g(['react-colorful', n]);
            return react__WEBPACK_IMPORTED_MODULE_26__.createElement(
              'div',
              u({}, s, { ref: f, className: m }),
              react__WEBPACK_IMPORTED_MODULE_26__.createElement(L, { hsva: d, onChange: h }),
              react__WEBPACK_IMPORTED_MODULE_26__.createElement(K, { hue: d.h, onChange: h }),
              react__WEBPACK_IMPORTED_MODULE_26__.createElement(Q, {
                hsva: d,
                onChange: h,
                className: 'react-colorful__last-control',
              }),
            );
          },
          ee = {
            defaultColor: 'hsla(0, 0%, 0%, 1)',
            toHsva: function E(e) {
              var r =
                /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
                  e,
                );
              return r
                ? M({
                    h: C(r[1], r[2]),
                    s: Number(r[3]),
                    l: Number(r[4]),
                    a: void 0 === r[5] ? 1 : Number(r[5]) / (r[6] ? 100 : 1),
                  })
                : { h: 0, s: 0, v: 0, a: 1 };
            },
            fromHsva: y,
            equal: S,
          },
          ge = {
            defaultColor: 'rgba(0, 0, 0, 1)',
            toHsva: function I(e) {
              var r =
                /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
                  e,
                );
              return r
                ? B({
                    r: Number(r[1]) / (r[2] ? 100 / 255 : 1),
                    g: Number(r[3]) / (r[4] ? 100 / 255 : 1),
                    b: Number(r[5]) / (r[6] ? 100 / 255 : 1),
                    a: void 0 === r[7] ? 1 : Number(r[7]) / (r[8] ? 100 : 1),
                  })
                : { h: 0, s: 0, v: 0, a: 1 };
            },
            fromHsva: function fromHsva(e) {
              var r = q(e);
              return 'rgba(' + r.r + ', ' + r.g + ', ' + r.b + ', ' + r.a + ')';
            },
            equal: S,
          },
          cssKeywords = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50],
          },
          reverseKeywords = {},
          _i = 0,
          _Object$keys = Object.keys(cssKeywords);
        _i < _Object$keys.length;
        _i++
      ) {
        var key = _Object$keys[_i];
        reverseKeywords[cssKeywords[key]] = key;
      }
      for (
        var convert$1 = {
            rgb: { channels: 3, labels: 'rgb' },
            hsl: { channels: 3, labels: 'hsl' },
            hsv: { channels: 3, labels: 'hsv' },
            hwb: { channels: 3, labels: 'hwb' },
            cmyk: { channels: 4, labels: 'cmyk' },
            xyz: { channels: 3, labels: 'xyz' },
            lab: { channels: 3, labels: 'lab' },
            lch: { channels: 3, labels: 'lch' },
            hex: { channels: 1, labels: ['hex'] },
            keyword: { channels: 1, labels: ['keyword'] },
            ansi16: { channels: 1, labels: ['ansi16'] },
            ansi256: { channels: 1, labels: ['ansi256'] },
            hcg: { channels: 3, labels: ['h', 'c', 'g'] },
            apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
            gray: { channels: 1, labels: ['gray'] },
          },
          conversions$2 = convert$1,
          _i2 = 0,
          _Object$keys2 = Object.keys(convert$1);
        _i2 < _Object$keys2.length;
        _i2++
      ) {
        var model = _Object$keys2[_i2];
        if (!('channels' in convert$1[model])) throw new Error('missing channels property: ' + model);
        if (!('labels' in convert$1[model])) throw new Error('missing channel labels property: ' + model);
        if (convert$1[model].labels.length !== convert$1[model].channels)
          throw new Error('channel and label counts mismatch: ' + model);
        var _convert$1$model = convert$1[model],
          channels = _convert$1$model.channels,
          labels = _convert$1$model.labels;
        delete convert$1[model].channels,
          delete convert$1[model].labels,
          Object.defineProperty(convert$1[model], 'channels', { value: channels }),
          Object.defineProperty(convert$1[model], 'labels', { value: labels });
      }
      function comparativeDistance(x, y) {
        return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
      }
      (convert$1.rgb.hsl = function (rgb) {
        var h,
          r = rgb[0] / 255,
          g = rgb[1] / 255,
          b = rgb[2] / 255,
          min = Math.min(r, g, b),
          max = Math.max(r, g, b),
          delta = max - min;
        max === min
          ? (h = 0)
          : r === max
          ? (h = (g - b) / delta)
          : g === max
          ? (h = 2 + (b - r) / delta)
          : b === max && (h = 4 + (r - g) / delta),
          (h = Math.min(60 * h, 360)) < 0 && (h += 360);
        var l = (min + max) / 2;
        return [h, 100 * (max === min ? 0 : l <= 0.5 ? delta / (max + min) : delta / (2 - max - min)), 100 * l];
      }),
        (convert$1.rgb.hsv = function (rgb) {
          var rdif,
            gdif,
            bdif,
            h,
            s,
            r = rgb[0] / 255,
            g = rgb[1] / 255,
            b = rgb[2] / 255,
            v = Math.max(r, g, b),
            diff = v - Math.min(r, g, b),
            diffc = function diffc(c) {
              return (v - c) / 6 / diff + 0.5;
            };
          return (
            0 === diff
              ? ((h = 0), (s = 0))
              : ((s = diff / v),
                (rdif = diffc(r)),
                (gdif = diffc(g)),
                (bdif = diffc(b)),
                r === v
                  ? (h = bdif - gdif)
                  : g === v
                  ? (h = 1 / 3 + rdif - bdif)
                  : b === v && (h = 2 / 3 + gdif - rdif),
                h < 0 ? (h += 1) : h > 1 && (h -= 1)),
            [360 * h, 100 * s, 100 * v]
          );
        }),
        (convert$1.rgb.hwb = function (rgb) {
          var r = rgb[0],
            g = rgb[1],
            b = rgb[2];
          return [
            convert$1.rgb.hsl(rgb)[0],
            100 * ((1 / 255) * Math.min(r, Math.min(g, b))),
            100 * (b = 1 - (1 / 255) * Math.max(r, Math.max(g, b))),
          ];
        }),
        (convert$1.rgb.cmyk = function (rgb) {
          var r = rgb[0] / 255,
            g = rgb[1] / 255,
            b = rgb[2] / 255,
            k = Math.min(1 - r, 1 - g, 1 - b);
          return [
            100 * ((1 - r - k) / (1 - k) || 0),
            100 * ((1 - g - k) / (1 - k) || 0),
            100 * ((1 - b - k) / (1 - k) || 0),
            100 * k,
          ];
        }),
        (convert$1.rgb.keyword = function (rgb) {
          var reversed = reverseKeywords[rgb];
          if (reversed) return reversed;
          for (
            var currentClosestKeyword,
              currentClosestDistance = 1 / 0,
              _i3 = 0,
              _Object$keys3 = Object.keys(cssKeywords);
            _i3 < _Object$keys3.length;
            _i3++
          ) {
            var keyword = _Object$keys3[_i3],
              distance = comparativeDistance(rgb, cssKeywords[keyword]);
            distance < currentClosestDistance &&
              ((currentClosestDistance = distance), (currentClosestKeyword = keyword));
          }
          return currentClosestKeyword;
        }),
        (convert$1.keyword.rgb = function (keyword) {
          return cssKeywords[keyword];
        }),
        (convert$1.rgb.xyz = function (rgb) {
          var r = rgb[0] / 255,
            g = rgb[1] / 255,
            b = rgb[2] / 255;
          return [
            100 *
              (0.4124 * (r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92) +
                0.3576 * (g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92) +
                0.1805 * (b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92)),
            100 * (0.2126 * r + 0.7152 * g + 0.0722 * b),
            100 * (0.0193 * r + 0.1192 * g + 0.9505 * b),
          ];
        }),
        (convert$1.rgb.lab = function (rgb) {
          var xyz = convert$1.rgb.xyz(rgb),
            x = xyz[0],
            y = xyz[1],
            z = xyz[2];
          return (
            (y /= 100),
            (z /= 108.883),
            (x = (x /= 95.047) > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116),
            [
              116 * (y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116) - 16,
              500 * (x - y),
              200 * (y - (z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116)),
            ]
          );
        }),
        (convert$1.hsl.rgb = function (hsl) {
          var t2,
            t3,
            val,
            h = hsl[0] / 360,
            s = hsl[1] / 100,
            l = hsl[2] / 100;
          if (0 === s) return [(val = 255 * l), val, val];
          for (var t1 = 2 * l - (t2 = l < 0.5 ? l * (1 + s) : l + s - l * s), rgb = [0, 0, 0], _i4 = 0; _i4 < 3; _i4++)
            (t3 = h + (1 / 3) * -(_i4 - 1)) < 0 && t3++,
              t3 > 1 && t3--,
              (val =
                6 * t3 < 1
                  ? t1 + 6 * (t2 - t1) * t3
                  : 2 * t3 < 1
                  ? t2
                  : 3 * t3 < 2
                  ? t1 + (t2 - t1) * (2 / 3 - t3) * 6
                  : t1),
              (rgb[_i4] = 255 * val);
          return rgb;
        }),
        (convert$1.hsl.hsv = function (hsl) {
          var h = hsl[0],
            s = hsl[1] / 100,
            l = hsl[2] / 100,
            smin = s,
            lmin = Math.max(l, 0.01);
          return (
            (s *= (l *= 2) <= 1 ? l : 2 - l),
            (smin *= lmin <= 1 ? lmin : 2 - lmin),
            [h, 100 * (0 === l ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s)), 100 * ((l + s) / 2)]
          );
        }),
        (convert$1.hsv.rgb = function (hsv) {
          var h = hsv[0] / 60,
            s = hsv[1] / 100,
            v = hsv[2] / 100,
            hi = Math.floor(h) % 6,
            f = h - Math.floor(h),
            p = 255 * v * (1 - s),
            q = 255 * v * (1 - s * f),
            t = 255 * v * (1 - s * (1 - f));
          switch (((v *= 255), hi)) {
            case 0:
              return [v, t, p];
            case 1:
              return [q, v, p];
            case 2:
              return [p, v, t];
            case 3:
              return [p, q, v];
            case 4:
              return [t, p, v];
            case 5:
              return [v, p, q];
          }
        }),
        (convert$1.hsv.hsl = function (hsv) {
          var sl,
            l,
            h = hsv[0],
            s = hsv[1] / 100,
            v = hsv[2] / 100,
            vmin = Math.max(v, 0.01);
          l = (2 - s) * v;
          var lmin = (2 - s) * vmin;
          return (sl = s * vmin), [h, 100 * (sl = (sl /= lmin <= 1 ? lmin : 2 - lmin) || 0), 100 * (l /= 2)];
        }),
        (convert$1.hwb.rgb = function (hwb) {
          var f,
            h = hwb[0] / 360,
            wh = hwb[1] / 100,
            bl = hwb[2] / 100,
            ratio = wh + bl;
          ratio > 1 && ((wh /= ratio), (bl /= ratio));
          var i = Math.floor(6 * h),
            v = 1 - bl;
          (f = 6 * h - i), 0 != (1 & i) && (f = 1 - f);
          var r,
            g,
            b,
            n = wh + f * (v - wh);
          switch (i) {
            default:
            case 6:
            case 0:
              (r = v), (g = n), (b = wh);
              break;
            case 1:
              (r = n), (g = v), (b = wh);
              break;
            case 2:
              (r = wh), (g = v), (b = n);
              break;
            case 3:
              (r = wh), (g = n), (b = v);
              break;
            case 4:
              (r = n), (g = wh), (b = v);
              break;
            case 5:
              (r = v), (g = wh), (b = n);
          }
          return [255 * r, 255 * g, 255 * b];
        }),
        (convert$1.cmyk.rgb = function (cmyk) {
          var c = cmyk[0] / 100,
            m = cmyk[1] / 100,
            y = cmyk[2] / 100,
            k = cmyk[3] / 100;
          return [
            255 * (1 - Math.min(1, c * (1 - k) + k)),
            255 * (1 - Math.min(1, m * (1 - k) + k)),
            255 * (1 - Math.min(1, y * (1 - k) + k)),
          ];
        }),
        (convert$1.xyz.rgb = function (xyz) {
          var r,
            g,
            b,
            x = xyz[0] / 100,
            y = xyz[1] / 100,
            z = xyz[2] / 100;
          return (
            (g = -0.9689 * x + 1.8758 * y + 0.0415 * z),
            (b = 0.0557 * x + -0.204 * y + 1.057 * z),
            (r =
              (r = 3.2406 * x + -1.5372 * y + -0.4986 * z) > 0.0031308
                ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055
                : 12.92 * r),
            (g = g > 0.0031308 ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055 : 12.92 * g),
            (b = b > 0.0031308 ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : 12.92 * b),
            [
              255 * (r = Math.min(Math.max(0, r), 1)),
              255 * (g = Math.min(Math.max(0, g), 1)),
              255 * (b = Math.min(Math.max(0, b), 1)),
            ]
          );
        }),
        (convert$1.xyz.lab = function (xyz) {
          var x = xyz[0],
            y = xyz[1],
            z = xyz[2];
          return (
            (y /= 100),
            (z /= 108.883),
            (x = (x /= 95.047) > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116),
            [
              116 * (y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116) - 16,
              500 * (x - y),
              200 * (y - (z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116)),
            ]
          );
        }),
        (convert$1.lab.xyz = function (lab) {
          var x,
            y,
            z,
            l = lab[0];
          (x = lab[1] / 500 + (y = (l + 16) / 116)), (z = y - lab[2] / 200);
          var y2 = Math.pow(y, 3),
            x2 = Math.pow(x, 3),
            z2 = Math.pow(z, 3);
          return (
            (y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787),
            (x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787),
            (z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787),
            [(x *= 95.047), (y *= 100), (z *= 108.883)]
          );
        }),
        (convert$1.lab.lch = function (lab) {
          var h,
            l = lab[0],
            a = lab[1],
            b = lab[2];
          return (h = (360 * Math.atan2(b, a)) / 2 / Math.PI) < 0 && (h += 360), [l, Math.sqrt(a * a + b * b), h];
        }),
        (convert$1.lch.lab = function (lch) {
          var l = lch[0],
            c = lch[1],
            hr = (lch[2] / 360) * 2 * Math.PI;
          return [l, c * Math.cos(hr), c * Math.sin(hr)];
        }),
        (convert$1.rgb.ansi16 = function (args) {
          var saturation = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            _args = _slicedToArray(args, 3),
            r = _args[0],
            g = _args[1],
            b = _args[2],
            value = null === saturation ? convert$1.rgb.hsv(args)[2] : saturation;
          if (0 === (value = Math.round(value / 50))) return 30;
          var ansi = 30 + ((Math.round(b / 255) << 2) | (Math.round(g / 255) << 1) | Math.round(r / 255));
          return 2 === value && (ansi += 60), ansi;
        }),
        (convert$1.hsv.ansi16 = function (args) {
          return convert$1.rgb.ansi16(convert$1.hsv.rgb(args), args[2]);
        }),
        (convert$1.rgb.ansi256 = function (args) {
          var r = args[0],
            g = args[1],
            b = args[2];
          return r === g && g === b
            ? r < 8
              ? 16
              : r > 248
              ? 231
              : Math.round(((r - 8) / 247) * 24) + 232
            : 16 + 36 * Math.round((r / 255) * 5) + 6 * Math.round((g / 255) * 5) + Math.round((b / 255) * 5);
        }),
        (convert$1.ansi16.rgb = function (args) {
          var color = args % 10;
          if (0 === color || 7 === color)
            return args > 50 && (color += 3.5), [(color = (color / 10.5) * 255), color, color];
          var mult = 0.5 * (1 + ~~(args > 50));
          return [(1 & color) * mult * 255, ((color >> 1) & 1) * mult * 255, ((color >> 2) & 1) * mult * 255];
        }),
        (convert$1.ansi256.rgb = function (args) {
          if (args >= 232) {
            var _c = 10 * (args - 232) + 8;
            return [_c, _c, _c];
          }
          var rem;
          return (
            (args -= 16),
            [(Math.floor(args / 36) / 5) * 255, (Math.floor((rem = args % 36) / 6) / 5) * 255, ((rem % 6) / 5) * 255]
          );
        }),
        (convert$1.rgb.hex = function (args) {
          var string = (
            ((255 & Math.round(args[0])) << 16) +
            ((255 & Math.round(args[1])) << 8) +
            (255 & Math.round(args[2]))
          )
            .toString(16)
            .toUpperCase();
          return '000000'.substring(string.length) + string;
        }),
        (convert$1.hex.rgb = function (args) {
          var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
          if (!match) return [0, 0, 0];
          var colorString = match[0];
          3 === match[0].length &&
            (colorString = colorString
              .split('')
              .map(function (char) {
                return char + char;
              })
              .join(''));
          var integer = parseInt(colorString, 16);
          return [(integer >> 16) & 255, (integer >> 8) & 255, 255 & integer];
        }),
        (convert$1.rgb.hcg = function (rgb) {
          var hue,
            r = rgb[0] / 255,
            g = rgb[1] / 255,
            b = rgb[2] / 255,
            max = Math.max(Math.max(r, g), b),
            min = Math.min(Math.min(r, g), b),
            chroma = max - min;
          return (
            (hue =
              chroma <= 0
                ? 0
                : max === r
                ? ((g - b) / chroma) % 6
                : max === g
                ? 2 + (b - r) / chroma
                : 4 + (r - g) / chroma),
            (hue /= 6),
            [360 * (hue %= 1), 100 * chroma, 100 * (chroma < 1 ? min / (1 - chroma) : 0)]
          );
        }),
        (convert$1.hsl.hcg = function (hsl) {
          var s = hsl[1] / 100,
            l = hsl[2] / 100,
            c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l),
            f = 0;
          return c < 1 && (f = (l - 0.5 * c) / (1 - c)), [hsl[0], 100 * c, 100 * f];
        }),
        (convert$1.hsv.hcg = function (hsv) {
          var s = hsv[1] / 100,
            v = hsv[2] / 100,
            c = s * v,
            f = 0;
          return c < 1 && (f = (v - c) / (1 - c)), [hsv[0], 100 * c, 100 * f];
        }),
        (convert$1.hcg.rgb = function (hcg) {
          var h = hcg[0] / 360,
            c = hcg[1] / 100,
            g = hcg[2] / 100;
          if (0 === c) return [255 * g, 255 * g, 255 * g];
          var mg,
            pure = [0, 0, 0],
            hi = (h % 1) * 6,
            v = hi % 1,
            w = 1 - v;
          switch (Math.floor(hi)) {
            case 0:
              (pure[0] = 1), (pure[1] = v), (pure[2] = 0);
              break;
            case 1:
              (pure[0] = w), (pure[1] = 1), (pure[2] = 0);
              break;
            case 2:
              (pure[0] = 0), (pure[1] = 1), (pure[2] = v);
              break;
            case 3:
              (pure[0] = 0), (pure[1] = w), (pure[2] = 1);
              break;
            case 4:
              (pure[0] = v), (pure[1] = 0), (pure[2] = 1);
              break;
            default:
              (pure[0] = 1), (pure[1] = 0), (pure[2] = w);
          }
          return (mg = (1 - c) * g), [255 * (c * pure[0] + mg), 255 * (c * pure[1] + mg), 255 * (c * pure[2] + mg)];
        }),
        (convert$1.hcg.hsv = function (hcg) {
          var c = hcg[1] / 100,
            v = c + (hcg[2] / 100) * (1 - c),
            f = 0;
          return v > 0 && (f = c / v), [hcg[0], 100 * f, 100 * v];
        }),
        (convert$1.hcg.hsl = function (hcg) {
          var c = hcg[1] / 100,
            l = (hcg[2] / 100) * (1 - c) + 0.5 * c,
            s = 0;
          return (
            l > 0 && l < 0.5 ? (s = c / (2 * l)) : l >= 0.5 && l < 1 && (s = c / (2 * (1 - l))),
            [hcg[0], 100 * s, 100 * l]
          );
        }),
        (convert$1.hcg.hwb = function (hcg) {
          var c = hcg[1] / 100,
            v = c + (hcg[2] / 100) * (1 - c);
          return [hcg[0], 100 * (v - c), 100 * (1 - v)];
        }),
        (convert$1.hwb.hcg = function (hwb) {
          var w = hwb[1] / 100,
            v = 1 - hwb[2] / 100,
            c = v - w,
            g = 0;
          return c < 1 && (g = (v - c) / (1 - c)), [hwb[0], 100 * c, 100 * g];
        }),
        (convert$1.apple.rgb = function (apple) {
          return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
        }),
        (convert$1.rgb.apple = function (rgb) {
          return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
        }),
        (convert$1.gray.rgb = function (args) {
          return [(args[0] / 100) * 255, (args[0] / 100) * 255, (args[0] / 100) * 255];
        }),
        (convert$1.gray.hsl = function (args) {
          return [0, 0, args[0]];
        }),
        (convert$1.gray.hsv = convert$1.gray.hsl),
        (convert$1.gray.hwb = function (gray) {
          return [0, 100, gray[0]];
        }),
        (convert$1.gray.cmyk = function (gray) {
          return [0, 0, 0, gray[0]];
        }),
        (convert$1.gray.lab = function (gray) {
          return [gray[0], 0, 0];
        }),
        (convert$1.gray.hex = function (gray) {
          var val = 255 & Math.round((gray[0] / 100) * 255),
            string = ((val << 16) + (val << 8) + val).toString(16).toUpperCase();
          return '000000'.substring(string.length) + string;
        }),
        (convert$1.rgb.gray = function (rgb) {
          return [((rgb[0] + rgb[1] + rgb[2]) / 3 / 255) * 100];
        });
      var conversions$1 = conversions$2;
      function deriveBFS(fromModel) {
        var graph = (function buildGraph() {
            for (var graph = {}, models = Object.keys(conversions$1), len = models.length, _i5 = 0; _i5 < len; _i5++)
              graph[models[_i5]] = { distance: -1, parent: null };
            return graph;
          })(),
          queue = [fromModel];
        for (graph[fromModel].distance = 0; queue.length; )
          for (
            var current = queue.pop(), adjacents = Object.keys(conversions$1[current]), len = adjacents.length, _i6 = 0;
            _i6 < len;
            _i6++
          ) {
            var adjacent = adjacents[_i6],
              node = graph[adjacent];
            -1 === node.distance &&
              ((node.distance = graph[current].distance + 1), (node.parent = current), queue.unshift(adjacent));
          }
        return graph;
      }
      function link(from, to) {
        return function (args) {
          return to(from(args));
        };
      }
      function wrapConversion(toModel, graph) {
        for (
          var path = [graph[toModel].parent, toModel],
            fn = conversions$1[graph[toModel].parent][toModel],
            cur = graph[toModel].parent;
          graph[cur].parent;

        )
          path.unshift(graph[cur].parent),
            (fn = link(conversions$1[graph[cur].parent][cur], fn)),
            (cur = graph[cur].parent);
        return (fn.conversion = path), fn;
      }
      var conversions = conversions$2,
        route = function route$1(fromModel) {
          for (
            var graph = deriveBFS(fromModel),
              conversion = {},
              models = Object.keys(graph),
              len = models.length,
              _i7 = 0;
            _i7 < len;
            _i7++
          ) {
            var toModel = models[_i7];
            null !== graph[toModel].parent && (conversion[toModel] = wrapConversion(toModel, graph));
          }
          return conversion;
        },
        convert = {};
      Object.keys(conversions).forEach(function (fromModel) {
        (convert[fromModel] = {}),
          Object.defineProperty(convert[fromModel], 'channels', { value: conversions[fromModel].channels }),
          Object.defineProperty(convert[fromModel], 'labels', { value: conversions[fromModel].labels });
        var routes = route(fromModel);
        Object.keys(routes).forEach(function (toModel) {
          var fn = routes[toModel];
          (convert[fromModel][toModel] = (function wrapRounded(fn) {
            var wrappedFn = function wrappedFn() {
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
                args[_key2] = arguments[_key2];
              var arg0 = args[0];
              if (null == arg0) return arg0;
              arg0.length > 1 && (args = arg0);
              var result = fn(args);
              if ('object' === _typeof(result))
                for (var len = result.length, _i8 = 0; _i8 < len; _i8++) result[_i8] = Math.round(result[_i8]);
              return result;
            };
            return 'conversion' in fn && (wrappedFn.conversion = fn.conversion), wrappedFn;
          })(fn)),
            (convert[fromModel][toModel].raw = (function wrapRaw(fn) {
              var wrappedFn = function wrappedFn() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
                  args[_key] = arguments[_key];
                var arg0 = args[0];
                return null == arg0 ? arg0 : (arg0.length > 1 && (args = arg0), fn(args));
              };
              return 'conversion' in fn && (wrappedFn.conversion = fn.conversion), wrappedFn;
            })(fn));
        });
      });
      var colorConvert = convert,
        root = _index_3ae04fda_js__WEBPACK_IMPORTED_MODULE_29__.x,
        now_1 = function now$1() {
          return root.Date.now();
        },
        reWhitespace = /\s/;
      var trimmedEndIndex = function trimmedEndIndex$1(string) {
          for (var index = string.length; index-- && reWhitespace.test(string.charAt(index)); );
          return index;
        },
        reTrimStart = /^\s+/;
      var baseTrim = function baseTrim$1(string) {
          return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
        },
        isObject$2 = _index_3ae04fda_js__WEBPACK_IMPORTED_MODULE_29__.y,
        isSymbol = _index_3ae04fda_js__WEBPACK_IMPORTED_MODULE_29__.z,
        reIsBadHex = /^[-+]0x[0-9a-f]+$/i,
        reIsBinary = /^0b[01]+$/i,
        reIsOctal = /^0o[0-7]+$/i,
        freeParseInt = parseInt;
      var toNumber_1 = function toNumber$1(value) {
          if ('number' == typeof value) return value;
          if (isSymbol(value)) return NaN;
          if (isObject$2(value)) {
            var other = 'function' == typeof value.valueOf ? value.valueOf() : value;
            value = isObject$2(other) ? other + '' : other;
          }
          if ('string' != typeof value) return 0 === value ? value : +value;
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value)
            ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
            : reIsBadHex.test(value)
            ? NaN
            : +value;
        },
        isObject$1 = _index_3ae04fda_js__WEBPACK_IMPORTED_MODULE_29__.y,
        now = now_1,
        toNumber = toNumber_1,
        nativeMax = Math.max,
        nativeMin = Math.min;
      var debounce = function debounce$1(func, wait, options) {
          var lastArgs,
            lastThis,
            maxWait,
            result,
            timerId,
            lastCallTime,
            lastInvokeTime = 0,
            leading = !1,
            maxing = !1,
            trailing = !0;
          if ('function' != typeof func) throw new TypeError('Expected a function');
          function invokeFunc(time) {
            var args = lastArgs,
              thisArg = lastThis;
            return (lastArgs = lastThis = void 0), (lastInvokeTime = time), (result = func.apply(thisArg, args));
          }
          function leadingEdge(time) {
            return (
              (lastInvokeTime = time), (timerId = setTimeout(timerExpired, wait)), leading ? invokeFunc(time) : result
            );
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime;
            return (
              void 0 === lastCallTime ||
              timeSinceLastCall >= wait ||
              timeSinceLastCall < 0 ||
              (maxing && time - lastInvokeTime >= maxWait)
            );
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) return trailingEdge(time);
            timerId = setTimeout(
              timerExpired,
              (function remainingWait(time) {
                var timeWaiting = wait - (time - lastCallTime);
                return maxing ? nativeMin(timeWaiting, maxWait - (time - lastInvokeTime)) : timeWaiting;
              })(time),
            );
          }
          function trailingEdge(time) {
            return (
              (timerId = void 0), trailing && lastArgs ? invokeFunc(time) : ((lastArgs = lastThis = void 0), result)
            );
          }
          function debounced() {
            var time = now(),
              isInvoking = shouldInvoke(time);
            if (((lastArgs = arguments), (lastThis = this), (lastCallTime = time), isInvoking)) {
              if (void 0 === timerId) return leadingEdge(lastCallTime);
              if (maxing)
                return clearTimeout(timerId), (timerId = setTimeout(timerExpired, wait)), invokeFunc(lastCallTime);
            }
            return void 0 === timerId && (timerId = setTimeout(timerExpired, wait)), result;
          }
          return (
            (wait = toNumber(wait) || 0),
            isObject$1(options) &&
              ((leading = !!options.leading),
              (maxWait = (maxing = 'maxWait' in options) ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait),
              (trailing = 'trailing' in options ? !!options.trailing : trailing)),
            (debounced.cancel = function cancel() {
              void 0 !== timerId && clearTimeout(timerId),
                (lastInvokeTime = 0),
                (lastArgs = lastCallTime = lastThis = timerId = void 0);
            }),
            (debounced.flush = function flush() {
              return void 0 === timerId ? result : trailingEdge(now());
            }),
            debounced
          );
        },
        isObject = _index_3ae04fda_js__WEBPACK_IMPORTED_MODULE_29__.y;
      var ColorSpace,
        throttle_1 = function throttle(func, wait, options) {
          var leading = !0,
            trailing = !0;
          if ('function' != typeof func) throw new TypeError('Expected a function');
          return (
            isObject(options) &&
              ((leading = 'leading' in options ? !!options.leading : leading),
              (trailing = 'trailing' in options ? !!options.trailing : trailing)),
            debounce(func, wait, { leading, maxWait: wait, trailing })
          );
        },
        Wrapper = _storybook_theming__WEBPACK_IMPORTED_MODULE_30__.zo.div({ position: 'relative', maxWidth: 250 }),
        PickerTooltip = (0, _storybook_theming__WEBPACK_IMPORTED_MODULE_30__.zo)(
          _index_3ae04fda_js__WEBPACK_IMPORTED_MODULE_29__.W,
        )({ position: 'absolute', zIndex: 1, top: 4, left: 4 }),
        TooltipContent = _storybook_theming__WEBPACK_IMPORTED_MODULE_30__.zo.div({
          width: 200,
          margin: 5,
          '.react-colorful__saturation': { borderRadius: '4px 4px 0 0' },
          '.react-colorful__hue': { boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 5%)' },
          '.react-colorful__last-control': { borderRadius: '0 0 4px 4px' },
        }),
        Note = (0, _storybook_theming__WEBPACK_IMPORTED_MODULE_30__.zo)(
          _index_3ae04fda_js__WEBPACK_IMPORTED_MODULE_29__.T,
        )(function (_ref) {
          return { fontFamily: _ref.theme.typography.fonts.base };
        }),
        Swatches = _storybook_theming__WEBPACK_IMPORTED_MODULE_30__.zo.div({
          display: 'grid',
          gridTemplateColumns: 'repeat(9, 16px)',
          gap: 6,
          padding: 3,
          marginTop: 5,
          width: 200,
        }),
        SwatchColor = _storybook_theming__WEBPACK_IMPORTED_MODULE_30__.zo.div(function (_ref2) {
          var theme = _ref2.theme;
          return {
            width: 16,
            height: 16,
            boxShadow: _ref2.active
              ? ''.concat(theme.appBorderColor, ' 0 0 0 1px inset, ').concat(theme.color.mediumdark, '50 0 0 0 4px')
              : ''.concat(theme.appBorderColor, ' 0 0 0 1px inset'),
            borderRadius: theme.appBorderRadius,
          };
        }),
        Swatch = function Swatch(_a) {
          var value = _a.value,
            active = _a.active,
            onClick = _a.onClick,
            style = _a.style,
            props = (0, _index_3ae04fda_js__WEBPACK_IMPORTED_MODULE_29__.a)(_a, [
              'value',
              'active',
              'onClick',
              'style',
            ]),
            backgroundImage = 'linear-gradient('
              .concat(value, ', ')
              .concat(value, '), ')
              .concat(
                'url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')',
                ', linear-gradient(#fff, #fff)',
              );
          return react__WEBPACK_IMPORTED_MODULE_26__.createElement(
            SwatchColor,
            Object.assign(
              {},
              props,
              { active, onClick },
              { style: Object.assign(Object.assign({}, style), { backgroundImage }) },
            ),
          );
        },
        Input = (0, _storybook_theming__WEBPACK_IMPORTED_MODULE_30__.zo)(
          _index_3ae04fda_js__WEBPACK_IMPORTED_MODULE_29__.F.Input,
        )(function (_ref3) {
          return {
            width: '100%',
            paddingLeft: 30,
            paddingRight: 30,
            boxSizing: 'border-box',
            fontFamily: _ref3.theme.typography.fonts.base,
          };
        }),
        ToggleIcon = (0, _storybook_theming__WEBPACK_IMPORTED_MODULE_30__.zo)(
          _index_3ae04fda_js__WEBPACK_IMPORTED_MODULE_29__.I,
        )(function (_ref4) {
          return {
            position: 'absolute',
            zIndex: 1,
            top: 6,
            right: 7,
            width: 20,
            height: 20,
            padding: 4,
            boxSizing: 'border-box',
            cursor: 'pointer',
            color: _ref4.theme.input.color,
          };
        });
      !(function (ColorSpace) {
        (ColorSpace.RGB = 'rgb'), (ColorSpace.HSL = 'hsl'), (ColorSpace.HEX = 'hex');
      })(ColorSpace || (ColorSpace = {}));
      var COLOR_SPACES = Object.values(ColorSpace),
        COLOR_REGEXP = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,
        RGB_REGEXP = /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,
        HSL_REGEXP = /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,
        HEX_REGEXP = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,
        SHORTHEX_REGEXP = /^\s*#?([0-9a-f]{3})\s*$/i,
        ColorPicker =
          (_defineProperty((_ColorPicker = {}), ColorSpace.HEX, function J(r) {
            return react__WEBPACK_IMPORTED_MODULE_26__.createElement($, u({}, r, { colorModel: G }));
          }),
          _defineProperty(_ColorPicker, ColorSpace.RGB, function pe(r) {
            return react__WEBPACK_IMPORTED_MODULE_26__.createElement(U, u({}, r, { colorModel: ge }));
          }),
          _defineProperty(_ColorPicker, ColorSpace.HSL, function re(r) {
            return react__WEBPACK_IMPORTED_MODULE_26__.createElement(U, u({}, r, { colorModel: ee }));
          }),
          _ColorPicker),
        fallbackColor =
          (_defineProperty((_fallbackColor = {}), ColorSpace.HEX, 'transparent'),
          _defineProperty(_fallbackColor, ColorSpace.RGB, 'rgba(0, 0, 0, 0)'),
          _defineProperty(_fallbackColor, ColorSpace.HSL, 'hsla(0, 0%, 0%, 0)'),
          _fallbackColor),
        stringToArgs = function stringToArgs(value) {
          var match = null == value ? void 0 : value.match(COLOR_REGEXP);
          if (!match) return [0, 0, 0, 1];
          var _match = _slicedToArray(match, 5),
            x = _match[1],
            y = _match[2],
            z = _match[3],
            _match$ = _match[4];
          return [x, y, z, void 0 === _match$ ? 1 : _match$].map(Number);
        },
        parseValue = function parseValue(value) {
          var _ref11;
          if (value) {
            var valid = !0;
            if (RGB_REGEXP.test(value)) {
              var _ref7,
                _stringToArgs2 = _slicedToArray(stringToArgs(value), 4),
                r = _stringToArgs2[0],
                _g = _stringToArgs2[1],
                _b = _stringToArgs2[2],
                a = _stringToArgs2[3],
                _ref6 = _slicedToArray(colorConvert.rgb.hsl([r, _g, _b]) || [0, 0, 0], 3),
                _h = _ref6[0],
                _s2 = _ref6[1],
                l = _ref6[2];
              return (
                _defineProperty(
                  (_ref7 = {
                    valid,
                    value,
                    keyword: colorConvert.rgb.keyword([r, _g, _b]),
                    colorSpace: ColorSpace.RGB,
                  }),
                  ColorSpace.RGB,
                  value,
                ),
                _defineProperty(
                  _ref7,
                  ColorSpace.HSL,
                  'hsla('.concat(_h, ', ').concat(_s2, '%, ').concat(l, '%, ').concat(a, ')'),
                ),
                _defineProperty(_ref7, ColorSpace.HEX, '#'.concat(colorConvert.rgb.hex([r, _g, _b]).toLowerCase())),
                _ref7
              );
            }
            if (HSL_REGEXP.test(value)) {
              var _ref10,
                _stringToArgs4 = _slicedToArray(stringToArgs(value), 4),
                _h2 = _stringToArgs4[0],
                _s3 = _stringToArgs4[1],
                _l = _stringToArgs4[2],
                _a2 = _stringToArgs4[3],
                _ref9 = _slicedToArray(colorConvert.hsl.rgb([_h2, _s3, _l]) || [0, 0, 0], 3),
                _r = _ref9[0],
                _g2 = _ref9[1],
                _b2 = _ref9[2];
              return (
                _defineProperty(
                  (_ref10 = {
                    valid,
                    value,
                    keyword: colorConvert.hsl.keyword([_h2, _s3, _l]),
                    colorSpace: ColorSpace.HSL,
                  }),
                  ColorSpace.RGB,
                  'rgba('.concat(_r, ', ').concat(_g2, ', ').concat(_b2, ', ').concat(_a2, ')'),
                ),
                _defineProperty(_ref10, ColorSpace.HSL, value),
                _defineProperty(_ref10, ColorSpace.HEX, '#'.concat(colorConvert.hsl.hex([_h2, _s3, _l]).toLowerCase())),
                _ref10
              );
            }
            var plain = value.replace('#', ''),
              rgb = colorConvert.keyword.rgb(plain) || colorConvert.hex.rgb(plain),
              hsl = colorConvert.rgb.hsl(rgb),
              mapped = value;
            if (
              (/[^#a-f0-9]/i.test(value) ? (mapped = plain) : HEX_REGEXP.test(value) && (mapped = '#'.concat(plain)),
              mapped.startsWith('#'))
            )
              valid = HEX_REGEXP.test(mapped);
            else
              try {
                colorConvert.keyword.hex(mapped);
              } catch (e) {
                valid = !1;
              }
            return (
              _defineProperty(
                (_ref11 = { valid, value: mapped, keyword: colorConvert.rgb.keyword(rgb), colorSpace: ColorSpace.HEX }),
                ColorSpace.RGB,
                'rgba('.concat(rgb[0], ', ').concat(rgb[1], ', ').concat(rgb[2], ', 1)'),
              ),
              _defineProperty(
                _ref11,
                ColorSpace.HSL,
                'hsla('.concat(hsl[0], ', ').concat(hsl[1], '%, ').concat(hsl[2], '%, 1)'),
              ),
              _defineProperty(_ref11, ColorSpace.HEX, mapped),
              _ref11
            );
          }
        },
        useColorInput = function useColorInput(initialValue, onChange) {
          var _useState2 = _slicedToArray((0, react__WEBPACK_IMPORTED_MODULE_26__.useState)(initialValue || ''), 2),
            value = _useState2[0],
            setValue = _useState2[1],
            _useState4 = _slicedToArray(
              (0, react__WEBPACK_IMPORTED_MODULE_26__.useState)(function () {
                return parseValue(value);
              }),
              2,
            ),
            color = _useState4[0],
            setColor = _useState4[1],
            _useState6 = _slicedToArray(
              (0, react__WEBPACK_IMPORTED_MODULE_26__.useState)(
                (null == color ? void 0 : color.colorSpace) || ColorSpace.HEX,
              ),
              2,
            ),
            colorSpace = _useState6[0],
            setColorSpace = _useState6[1];
          (0, react__WEBPACK_IMPORTED_MODULE_26__.useEffect)(
            function () {
              void 0 === initialValue && (setValue(''), setColor(void 0), setColorSpace(ColorSpace.HEX));
            },
            [initialValue],
          );
          var realValue = (0, react__WEBPACK_IMPORTED_MODULE_26__.useMemo)(
              function () {
                return (function getRealValue(value, color, colorSpace) {
                  if (!value || !(null == color ? void 0 : color.valid)) return fallbackColor[colorSpace];
                  if (colorSpace !== ColorSpace.HEX)
                    return (null == color ? void 0 : color[colorSpace]) || fallbackColor[colorSpace];
                  if (!color.hex.startsWith('#'))
                    try {
                      return '#'.concat(colorConvert.keyword.hex(color.hex));
                    } catch (e) {
                      return fallbackColor.hex;
                    }
                  var short = color.hex.match(SHORTHEX_REGEXP);
                  if (!short) return HEX_REGEXP.test(color.hex) ? color.hex : fallbackColor.hex;
                  var _short$1$split2 = _slicedToArray(short[1].split(''), 3),
                    r = _short$1$split2[0],
                    g = _short$1$split2[1],
                    b = _short$1$split2[2];
                  return '#'.concat(r).concat(r).concat(g).concat(g).concat(b).concat(b);
                })(value, color, colorSpace).toLowerCase();
              },
              [value, color, colorSpace],
            ),
            updateValue = (0, react__WEBPACK_IMPORTED_MODULE_26__.useCallback)(
              function (update) {
                var parsed = parseValue(update);
                setValue((null == parsed ? void 0 : parsed.value) || update || ''),
                  parsed && (setColor(parsed), setColorSpace(parsed.colorSpace), onChange(parsed.value));
              },
              [onChange],
            ),
            cycleColorSpace = (0, react__WEBPACK_IMPORTED_MODULE_26__.useCallback)(
              function () {
                var next = COLOR_SPACES.indexOf(colorSpace) + 1;
                next >= COLOR_SPACES.length && (next = 0), setColorSpace(COLOR_SPACES[next]);
                var update = (null == color ? void 0 : color[COLOR_SPACES[next]]) || '';
                setValue(update), onChange(update);
              },
              [color, colorSpace, onChange],
            );
          return { value, realValue, updateValue, color, colorSpace, cycleColorSpace };
        },
        id = function id(value) {
          return value.replace(/\s*/, '').toLowerCase();
        },
        ColorControl = function ColorControl(_ref12) {
          var name = _ref12.name,
            initialValue = _ref12.value,
            onChange = _ref12.onChange,
            onFocus = _ref12.onFocus,
            onBlur = _ref12.onBlur,
            presetColors = _ref12.presetColors,
            startOpen = _ref12.startOpen,
            _useColorInput = useColorInput(initialValue, throttle_1(onChange, 200)),
            value = _useColorInput.value,
            realValue = _useColorInput.realValue,
            updateValue = _useColorInput.updateValue,
            color = _useColorInput.color,
            colorSpace = _useColorInput.colorSpace,
            cycleColorSpace = _useColorInput.cycleColorSpace,
            _usePresets = (function usePresets(presetColors, currentColor, colorSpace) {
              var _useState8 = _slicedToArray(
                  (0, react__WEBPACK_IMPORTED_MODULE_26__.useState)(
                    (null == currentColor ? void 0 : currentColor.valid) ? [currentColor] : [],
                  ),
                  2,
                ),
                selectedColors = _useState8[0],
                setSelectedColors = _useState8[1];
              (0, react__WEBPACK_IMPORTED_MODULE_26__.useEffect)(
                function () {
                  void 0 === currentColor && setSelectedColors([]);
                },
                [currentColor],
              );
              var presets = (0, react__WEBPACK_IMPORTED_MODULE_26__.useMemo)(
                  function () {
                    return (presetColors || [])
                      .map(function (preset) {
                        return 'string' == typeof preset
                          ? parseValue(preset)
                          : preset.title
                          ? Object.assign(Object.assign({}, parseValue(preset.color)), { keyword: preset.title })
                          : parseValue(preset.color);
                      })
                      .concat(selectedColors)
                      .filter(Boolean)
                      .slice(-27);
                  },
                  [presetColors, selectedColors],
                ),
                addPreset = (0, react__WEBPACK_IMPORTED_MODULE_26__.useCallback)(
                  function (color) {
                    (null == color ? void 0 : color.valid) &&
                      (presets.some(function (preset) {
                        return id(preset[colorSpace]) === id(color[colorSpace]);
                      }) ||
                        setSelectedColors(function (arr) {
                          return arr.concat(color);
                        }));
                  },
                  [colorSpace, presets],
                );
              return { presets, addPreset };
            })(presetColors, color, colorSpace),
            presets = _usePresets.presets,
            addPreset = _usePresets.addPreset,
            Picker = ColorPicker[colorSpace];
          return react__WEBPACK_IMPORTED_MODULE_26__.createElement(
            Wrapper,
            null,
            react__WEBPACK_IMPORTED_MODULE_26__.createElement(
              PickerTooltip,
              {
                trigger: 'click',
                startOpen,
                closeOnClick: !0,
                onVisibilityChange: function onVisibilityChange() {
                  return addPreset(color);
                },
                tooltip: react__WEBPACK_IMPORTED_MODULE_26__.createElement(
                  TooltipContent,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_26__.createElement(
                    Picker,
                    Object.assign(
                      { color: 'transparent' === realValue ? '#000000' : realValue },
                      { onChange: updateValue, onFocus, onBlur },
                    ),
                  ),
                  presets.length > 0 &&
                    react__WEBPACK_IMPORTED_MODULE_26__.createElement(
                      Swatches,
                      null,
                      presets.map(function (preset, index) {
                        return react__WEBPACK_IMPORTED_MODULE_26__.createElement(
                          _index_3ae04fda_js__WEBPACK_IMPORTED_MODULE_29__.W,
                          {
                            key: ''.concat(preset.value, '-').concat(index),
                            hasChrome: !1,
                            tooltip: react__WEBPACK_IMPORTED_MODULE_26__.createElement(Note, {
                              note: preset.keyword || preset.value,
                            }),
                          },
                          react__WEBPACK_IMPORTED_MODULE_26__.createElement(Swatch, {
                            value: preset[colorSpace],
                            active: color && id(preset[colorSpace]) === id(color[colorSpace]),
                            onClick: function onClick() {
                              return updateValue(preset.value);
                            },
                          }),
                        );
                      }),
                    ),
                ),
              },
              react__WEBPACK_IMPORTED_MODULE_26__.createElement(Swatch, { value: realValue, style: { margin: 4 } }),
            ),
            react__WEBPACK_IMPORTED_MODULE_26__.createElement(Input, {
              id: (0, _index_3ae04fda_js__WEBPACK_IMPORTED_MODULE_29__.B)(name),
              value,
              onChange: function onChange(e) {
                return updateValue(e.target.value);
              },
              onFocus: function onFocus(e) {
                return e.target.select();
              },
              placeholder: 'Choose color...',
            }),
            value
              ? react__WEBPACK_IMPORTED_MODULE_26__.createElement(ToggleIcon, {
                  icon: 'markup',
                  onClick: cycleColorSpace,
                })
              : null,
          );
        };
    },
  },
]);

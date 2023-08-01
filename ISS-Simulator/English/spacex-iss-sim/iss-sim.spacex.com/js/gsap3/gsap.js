/*!
 * GSAP 3.1.1
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(((t = t || self).window = t.window || {}));
})(this, function (e) {
    "use strict";
    function _inheritsLoose(t, e) {
        (t.prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
    }
    function _assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }
    function n(t) {
        return "string" == typeof t;
    }
    function o(t) {
        return "function" == typeof t;
    }
    function p(t) {
        return "number" == typeof t;
    }
    function q(t) {
        return void 0 === t;
    }
    function r(t) {
        return "object" == typeof t;
    }
    function s(t) {
        return !1 !== t;
    }
    function t() {
        return "undefined" != typeof window;
    }
    function u(t) {
        return o(t) || n(t);
    }
    function J(t) {
        return (l = _t(t, at)) && ne;
    }
    function K(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
    }
    function L(t, e) {
        return !e && console.warn(t);
    }
    function M(t, e) {
        return (t && (at[t] = e) && l && (l[t] = e)) || at;
    }
    function N() {
        return 0;
    }
    function X(t) {
        var e,
            n,
            i = t[0];
        if ((r(i) || o(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
            for (n = pt.length; n-- && !pt[n].targetTest(i); );
            e = pt[n];
        }
        for (n = t.length; n--; ) (t[n] && (t[n]._gsap || (t[n]._gsap = new Et(t[n], e)))) || t.splice(n, 1);
        return t;
    }
    function Y(t) {
        return t._gsap || X(yt(t))[0]._gsap;
    }
    function Z(t, e) {
        var r = t[e];
        return o(r) ? t[e]() : (q(r) && t.getAttribute(e)) || r;
    }
    function $(t, e) {
        return (t = t.split(",")).forEach(e) || t;
    }
    function _(t) {
        return Math.round(1e4 * t) / 1e4;
    }
    function aa(t, e) {
        for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; );
        return n < r;
    }
    function ba(t, e, r) {
        var n,
            i = p(t[1]),
            a = (i ? 2 : 1) + (e < 2 ? 0 : 1),
            o = t[a];
        if ((i && (o.duration = t[1]), (o.parent = r), e)) {
            for (n = o; r && !("immediateRender" in n); ) (n = r.vars.defaults || {}), (r = s(r.vars.inherit) && r.parent);
            (o.immediateRender = s(n.immediateRender)), e < 2 ? (o.runBackwards = 1) : (o.startAt = t[a - 1]);
        }
        return o;
    }
    function ca() {
        var t,
            e,
            r = ot.length,
            n = ot.slice(0);
        for (ut = {}, t = ot.length = 0; t < r; t++) (e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    }
    function da(t, e, r, n) {
        ot.length && ca(), t.render(e, r, n), ot.length && ca();
    }
    function ea(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(it).length < 2 ? e : t;
    }
    function fa(t) {
        return t;
    }
    function ga(t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t;
    }
    function ha(t, e) {
        for (var r in e) r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
    }
    function ja(t, e) {
        for (var n in e) t[n] = r(e[n]) ? ja(t[n] || (t[n] = {}), e[n]) : e[n];
        return t;
    }
    function ka(t, e) {
        var r,
            n = {};
        for (r in t) r in e || (n[r] = t[r]);
        return n;
    }
    function oa(t, e, r, n) {
        void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
        var i = e._prev,
            a = e._next;
        i ? (i._next = a) : t[r] === e && (t[r] = a), a ? (a._prev = i) : t[n] === e && (t[n] = i), (e._dp = t), (e._next = e._prev = e.parent = null);
    }
    function pa(t, e) {
        !t.parent || (e && !t.parent.autoRemoveChildren) || t.parent.remove(t), (t._act = 0);
    }
    function qa(t) {
        for (var e = t; e; ) (e._dirty = 1), (e = e.parent);
        return t;
    }
    function ta(t) {
        return t._repeat ? ct(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    }
    function va(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur);
    }
    function wa(t, e, r) {
        if (
            (e.parent && pa(e),
            (e._start = r + e._delay),
            (e._end = e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
            (function _addLinkedListItem(t, e, r, n, i) {
                void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
                var a,
                    s = t[n];
                if (i) for (a = e[i]; s && s[i] > a; ) s = s._prev;
                s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[r]), (t[r] = e)), e._next ? (e._next._prev = e) : (t[n] = e), (e._prev = s), (e.parent = t);
            })(t, e, "_first", "_last", t._sort ? "_start" : 0),
            (t._recent = e)._time || (!e._dur && e._initted))
        ) {
            var n = (t.rawTime() - e._start) * e._ts;
            (!e._dur || gt(0, e.totalDuration(), n) - e._tTime > B) && e.render(n, !0);
        }
        if ((qa(t), t._dp && t._time >= t._dur && t._ts && t._dur < t.duration())) for (var i = t; i._dp; ) i.totalTime(i._tTime, !0), (i = i._dp);
        return t;
    }
    function xa(t, e, r, n) {
        return Nt(t, e), t._initted ? (!r && t._pt && ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) && d !== Ct.frame ? (ot.push(t), (t._lazy = [e, n]), 1) : void 0) : 1;
    }
    function Aa(t) {
        if (t instanceof Bt) return qa(t);
        var e = t._repeat;
        return (t._tDur = e ? (e < 0 ? 1e12 : _(t._dur * (e + 1) + t._rDelay * e)) : t._dur), qa(t.parent), t;
    }
    function Ca(t, e) {
        var r,
            i,
            a = t.labels,
            s = t._recent || mt,
            o = t.duration() >= F ? s.endTime(!1) : t._dur;
        return n(e) && (isNaN(e) || e in a)
            ? "<" === (r = e.charAt(0)) || ">" === r
                ? ("<" === r ? s._start : s.endTime(0 <= s._repeat)) + (parseFloat(e.substr(1)) || 0)
                : (r = e.indexOf("=")) < 0
                ? (e in a || (a[e] = o), a[e])
                : ((i = +(e.charAt(r - 1) + e.substr(r + 1))), 1 < r ? Ca(t, e.substr(0, r - 1)) + i : o + i)
            : null == e
            ? o
            : +e;
    }
    function Da(t, e) {
        return t || 0 === t ? e(t) : e;
    }
    function Fa(t) {
        return (t + "").substr((parseFloat(t) + "").length);
    }
    function Ia(t, e) {
        return t && r(t) && "length" in t && ((!e && !t.length) || (t.length - 1 in t && r(t[0]))) && !t.nodeType && t !== i;
    }
    function La(t) {
        return t.sort(function () {
            return 0.5 - Math.random();
        });
    }
    function Ma(t) {
        if (o(t)) return t;
        var c = r(t) ? t : { each: t },
            m = Ft(c.ease),
            g = c.from || 0,
            v = parseFloat(c.base) || 0,
            y = {},
            e = 0 < g && g < 1,
            b = isNaN(g) || e,
            w = c.axis,
            T = g,
            x = g;
        return (
            n(g) ? (T = x = { center: 0.5, edges: 0.5, end: 1 }[g] || 0) : !e && b && ((T = g[0]), (x = g[1])),
            function (t, e, r) {
                var n,
                    i,
                    a,
                    s,
                    o,
                    u,
                    h,
                    l,
                    f,
                    p = (r || c).length,
                    d = y[p];
                if (!d) {
                    if (!(f = "auto" === c.grid ? 0 : (c.grid || [1, F])[1])) {
                        for (h = -F; h < (h = r[f++].getBoundingClientRect().left) && f < p; );
                        f--;
                    }
                    for (d = y[p] = [], n = b ? Math.min(f, p) * T - 0.5 : g % f, i = b ? (p * x) / f - 0.5 : (g / f) | 0, l = F, u = h = 0; u < p; u++)
                        (a = (u % f) - n), (s = i - ((u / f) | 0)), (d[u] = o = w ? Math.abs("y" === w ? s : a) : V(a * a + s * s)), h < o && (h = o), o < l && (l = o);
                    "random" === g && La(d),
                        (d.max = h - l),
                        (d.min = l),
                        (d.v = p = (parseFloat(c.amount) || parseFloat(c.each) * (p < f ? p - 1 : w ? ("y" === w ? p / f : f) : Math.max(f, p / f)) || 0) * ("edges" === g ? -1 : 1)),
                        (d.b = p < 0 ? v - p : v),
                        (d.u = Fa(c.amount || c.each) || 0),
                        (m = m && p < 0 ? At(m) : m);
                }
                return (p = (d[t] - d.min) / d.max || 0), _(d.b + (m ? m(p) : p) * d.v) + d.u;
            }
        );
    }
    function Na(e) {
        var r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
        return function (t) {
            return ~~(Math.round(parseFloat(t) / e) * e * r) / r + (p(t) ? 0 : Fa(t));
        };
    }
    function Oa(u, t) {
        var h,
            l,
            e = G(u);
        return (
            !e && r(u) && ((h = e = u.radius || F), u.values ? ((u = yt(u.values)), (l = !p(u[0])) && (h *= h)) : (u = Na(u.increment))),
            Da(
                t,
                e
                    ? o(u)
                        ? function (t) {
                              return (l = u(t)), Math.abs(l - t) <= h ? l : t;
                          }
                        : function (t) {
                              for (var e, r, n = parseFloat(l ? t.x : t), i = parseFloat(l ? t.y : 0), a = F, s = 0, o = u.length; o--; ) (e = l ? (e = u[o].x - n) * e + (r = u[o].y - i) * r : Math.abs(u[o] - n)) < a && ((a = e), (s = o));
                              return (s = !h || a <= h ? u[s] : t), l || s === t || p(t) ? s : s + Fa(t);
                          }
                    : Na(u)
            )
        );
    }
    function Pa(t, e, r, n) {
        return Da(G(t) ? !e : !0 === r ? !!(r = 0) : !n, function () {
            return G(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && ~~(Math.round((t + Math.random() * (e - t)) / r) * r * n) / n;
        });
    }
    function Ta(e, r, t) {
        return Da(t, function (t) {
            return e[~~r(t)];
        });
    }
    function Wa(t) {
        for (var e, r, n, i, a = 0, s = ""; ~(e = t.indexOf("random(", a)); )
            (n = t.indexOf(")", e)), (i = "[" === t.charAt(e + 7)), (r = t.substr(e + 7, n - e - 7).match(i ? it : H)), (s += t.substr(a, e - a) + Pa(i ? r : +r[0], +r[1], +r[2] || 1e-5)), (a = n + 1);
        return s + t.substr(a, t.length - a);
    }
    function Za(t, e, r) {
        var n,
            i,
            a,
            s = t.labels,
            o = F;
        for (n in s) (i = s[n] - e) < 0 == !!r && i && o > (i = Math.abs(i)) && ((a = n), (o = i));
        return a;
    }
    function _a(t) {
        return pa(t), t.progress() < 1 && wt(t, "onInterrupt"), t;
    }
    function eb(t, e, r) {
        return ((6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < 0.5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * Tt + 0.5) | 0;
    }
    function fb(t, e) {
        var r,
            n,
            i,
            a,
            s,
            o,
            u,
            h,
            l,
            f,
            d = t ? (p(t) ? [t >> 16, (t >> 8) & Tt, t & Tt] : 0) : xt.black;
        if (!d) {
            if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), xt[t])) d = xt[t];
            else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (r = t.charAt(1)) + r + (n = t.charAt(2)) + n + (i = t.charAt(3)) + i), (d = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & Tt, t & Tt]);
            else if ("hsl" === t.substr(0, 3))
                if (((d = f = t.match(H)), e)) {
                    if (~t.indexOf("=")) return t.match(tt);
                } else
                    (a = (+d[0] % 360) / 360),
                        (s = d[1] / 100),
                        (r = 2 * (o = d[2] / 100) - (n = o <= 0.5 ? o * (s + 1) : o + s - o * s)),
                        3 < d.length && (d[3] *= 1),
                        (d[0] = eb(a + 1 / 3, r, n)),
                        (d[1] = eb(a, r, n)),
                        (d[2] = eb(a - 1 / 3, r, n));
            else d = t.match(H) || xt.transparent;
            d = d.map(Number);
        }
        return (
            e &&
                !f &&
                ((r = d[0] / Tt),
                (n = d[1] / Tt),
                (i = d[2] / Tt),
                (o = ((u = Math.max(r, n, i)) + (h = Math.min(r, n, i))) / 2),
                u === h ? (a = s = 0) : ((l = u - h), (s = 0.5 < o ? l / (2 - u - h) : l / (u + h)), (a = u === r ? (n - i) / l + (n < i ? 6 : 0) : u === n ? (i - r) / l + 2 : (r - n) / l + 4), (a *= 60)),
                (d[0] = (a + 0.5) | 0),
                (d[1] = (100 * s + 0.5) | 0),
                (d[2] = (100 * o + 0.5) | 0)),
            d
        );
    }
    function gb(t, e) {
        var r,
            n,
            i,
            a = (t + "").match(kt),
            s = 0,
            o = "";
        if (!a) return t;
        for (r = 0; r < a.length; r++)
            (n = a[r]), (s += (i = t.substr(s, t.indexOf(n, s) - s)).length + n.length), 3 === (n = fb(n, e)).length && n.push(1), (o += i + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")");
        return o + t.substr(s);
    }
    function jb(t) {
        var e,
            r = t.join(" ");
        (kt.lastIndex = 0), kt.test(r) && ((e = Ot.test(r)), (t[0] = gb(t[0], e)), (t[1] = gb(t[1], e)));
    }
    function rb(t) {
        var e = (t + "").split("("),
            r = Pt[e[0]];
        return r && 1 < e.length && r.config
            ? r.config.apply(
                  null,
                  ~t.indexOf("{")
                      ? [
                            (function _parseObjectInString(t) {
                                for (var e, r, n, i = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++)
                                    (r = a[o]), (e = o !== u - 1 ? r.lastIndexOf(",") : r.length), (n = r.substr(0, e)), (i[s] = isNaN(n) ? n.replace(Dt, "").trim() : +n), (s = r.substr(e + 1).trim());
                                return i;
                            })(e[1]),
                        ]
                      : rt.exec(t)[1].split(",").map(ea)
              )
            : Pt._CE && St.test(t)
            ? Pt._CE("", t)
            : r;
    }
    function ub(t, e, r, n) {
        void 0 === r &&
            (r = function easeOut(t) {
                return 1 - e(1 - t);
            }),
            void 0 === n &&
                (n = function easeInOut(t) {
                    return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
                });
        var i,
            a = { easeIn: e, easeOut: r, easeInOut: n };
        return (
            $(t, function (t) {
                for (var e in ((Pt[t] = at[t] = a), (Pt[(i = t.toLowerCase())] = r), a)) Pt[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Pt[t + "." + e] = a[e];
            }),
            a
        );
    }
    function vb(e) {
        return function (t) {
            return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
        };
    }
    function wb(r, t, e) {
        function Dk(t) {
            return 1 === t ? 1 : n * Math.pow(2, -10 * t) * Q((t - a) * i) + 1;
        }
        var n = 1 <= t ? t : 1,
            i = (e || (r ? 0.3 : 0.45)) / (t < 1 ? t : 1),
            a = (i / R) * (Math.asin(1 / n) || 0),
            s =
                "out" === r
                    ? Dk
                    : "in" === r
                    ? function (t) {
                          return 1 - Dk(1 - t);
                      }
                    : vb(Dk);
        return (
            (i = R / i),
            (s.config = function (t, e) {
                return wb(r, t, e);
            }),
            s
        );
    }
    function xb(e, r) {
        function Lk(t) {
            return --t * t * ((r + 1) * t + r) + 1;
        }
        void 0 === r && (r = 1.70158);
        var t =
            "out" === e
                ? Lk
                : "in" === e
                ? function (t) {
                      return 1 - Lk(1 - t);
                  }
                : vb(Lk);
        return (
            (t.config = function (t) {
                return xb(e, t);
            }),
            t
        );
    }
    var E,
        i,
        a,
        h,
        l,
        f,
        d,
        c,
        m,
        g,
        v,
        y,
        b,
        w,
        T,
        x,
        k,
        O,
        C,
        P,
        S,
        D,
        A,
        j = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
        z = { duration: 0.5, overwrite: !1, delay: 0 },
        F = 1e8,
        B = 1 / F,
        R = 2 * Math.PI,
        I = R / 4,
        U = 0,
        V = Math.sqrt,
        W = Math.cos,
        Q = Math.sin,
        G = Array.isArray,
        H = /(?:-?\.?\d|\.)+/gi,
        tt = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/g,
        et = /[-+=\.]*\d+(?:\.|e-|e)*\d*/gi,
        rt = /\(([^()]+)\)/i,
        nt = /[\+-]=-?[\.\d]+/,
        it = /[#\-+\.]*\b[a-z\d-=+%.]+/gi,
        at = {},
        st = {},
        ot = [],
        ut = {},
        ht = {},
        lt = {},
        ft = 30,
        pt = [],
        dt = "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
        _t = function _merge(t, e) {
            for (var r in e) t[r] = e[r];
            return t;
        },
        ct = function _animationCycle(t, e) {
            return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
        },
        mt = { _start: 0, endTime: N },
        gt = function _clamp(t, e, r) {
            return r < t ? t : e < r ? e : r;
        },
        vt = [].slice,
        yt = function toArray(t, e) {
            return !n(t) || e || (!a && Mt())
                ? G(t)
                    ? (function _flatten(t, e, r) {
                          return (
                              void 0 === r && (r = []),
                              t.forEach(function (t) {
                                  return (n(t) && !e) || Ia(t, 1) ? r.push.apply(r, yt(t)) : r.push(t);
                              }) || r
                          );
                      })(t, e)
                    : Ia(t)
                    ? vt.call(t, 0)
                    : t
                    ? [t]
                    : []
                : vt.call(h.querySelectorAll(t), 0);
        },
        bt = function mapRange(e, t, r, n, i) {
            var a = t - e,
                s = n - r;
            return Da(i, function (t) {
                return r + ((t - e) / a) * s;
            });
        },
        wt = function _callback(t, e, r) {
            var n,
                i,
                a = t.vars,
                s = a[e];
            if (s) return (n = a[e + "Params"]), (i = a.callbackScope || t), r && ot.length && ca(), n ? s.apply(i, n) : s.call(i);
        },
        Tt = 255,
        xt = {
            aqua: [0, Tt, Tt],
            lime: [0, Tt, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, Tt],
            navy: [0, 0, 128],
            white: [Tt, Tt, Tt],
            olive: [128, 128, 0],
            yellow: [Tt, Tt, 0],
            orange: [Tt, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [Tt, 0, 0],
            pink: [Tt, 192, 203],
            cyan: [0, Tt, Tt],
            transparent: [Tt, Tt, Tt, 0],
        },
        kt = (function () {
            var t,
                e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (t in xt) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi");
        })(),
        Ot = /hsl[a]?\(/,
        Ct =
            ((w = Date.now),
            (T = 500),
            (x = 33),
            (k = w()),
            (O = k),
            (P = C = 1 / 60),
            (b = {
                time: 0,
                frame: 0,
                tick: function tick() {
                    Jj(!0);
                },
                wake: function wake() {
                    f &&
                        (!a && t() && ((i = a = window), (h = i.document || {}), (at.gsap = ne), (i.gsapVersions || (i.gsapVersions = [])).push(ne.version), J(l || i.GreenSockGlobals || (!i.gsap && i) || {}), (y = i.requestAnimationFrame)),
                        g && b.sleep(),
                        (v =
                            y ||
                            function (t) {
                                return setTimeout(t, (1e3 * (P - b.time) + 1) | 0);
                            }),
                        (m = 1),
                        Jj(2));
                },
                sleep: function sleep() {
                    (y ? i.cancelAnimationFrame : clearTimeout)(g), (m = 0), (v = N);
                },
                lagSmoothing: function lagSmoothing(t, e) {
                    (T = t || 1e8), (x = Math.min(e, T, 0));
                },
                fps: function fps(t) {
                    (C = 1 / (t || 60)), (P = b.time + C);
                },
                add: function add(t) {
                    S.indexOf(t) < 0 && S.push(t), Mt();
                },
                remove: function remove(t) {
                    var e;
                    ~(e = S.indexOf(t)) && S.splice(e, 1);
                },
                _listeners: (S = []),
            })),
        Mt = function _wake() {
            return !m && Ct.wake();
        },
        Pt = {},
        St = /^[\d.\-M][\d.\-,\s]/,
        Dt = /["']/g,
        At = function _invertEase(e) {
            return function (t) {
                return 1 - e(1 - t);
            };
        },
        Ft = function _parseEase(t, e) {
            return (t && (o(t) ? t : Pt[t] || rb(t))) || e;
        };
    function Jj(e) {
        var t,
            r,
            n = w() - O,
            i = !0 === e;
        T < n && (k += n - x),
            (O += n),
            (b.time = (O - k) / 1e3),
            (0 < (t = b.time - P) || i) && (b.frame++, (P += t + (C <= t ? 0.004 : C - t)), (r = 1)),
            i || (g = v(Jj)),
            r &&
                S.forEach(function (t) {
                    return t(b.time, n, b.frame, e);
                });
    }
    function al(t) {
        return t < A ? D * t * t : t < 0.7272727272727273 ? D * Math.pow(t - 1.5 / 2.75, 2) + 0.75 : t < 0.9090909090909092 ? D * (t -= 2.25 / 2.75) * t + 0.9375 : D * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
    }
    $("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var r = e < 5 ? e + 1 : e;
        ub(
            t + ",Power" + (r - 1),
            e
                ? function (t) {
                      return Math.pow(t, r);
                  }
                : function (t) {
                      return t;
                  },
            function (t) {
                return 1 - Math.pow(1 - t, r);
            },
            function (t) {
                return t < 0.5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2;
            }
        );
    }),
        (Pt.Linear.easeNone = Pt.none = Pt.Linear.easeIn),
        ub("Elastic", wb("in"), wb("out"), wb()),
        (D = 7.5625),
        (A = 1 / 2.75),
        ub(
            "Bounce",
            function (t) {
                return 1 - al(1 - t);
            },
            al
        ),
        ub("Expo", function (t) {
            return t ? Math.pow(2, 10 * (t - 1)) : 0;
        }),
        ub("Circ", function (t) {
            return -(V(1 - t * t) - 1);
        }),
        ub("Sine", function (t) {
            return 1 - W(t * I);
        }),
        ub("Back", xb("in"), xb("out"), xb()),
        (Pt.SteppedEase = Pt.steps = at.SteppedEase = {
            config: function config(t, e) {
                void 0 === t && (t = 1);
                var r = 1 / t,
                    n = t + (e ? 0 : 1),
                    i = e ? 1 : 0;
                return function (t) {
                    return (((n * gt(0, 0.99999999, t)) | 0) + i) * r;
                };
            },
        }),
        (z.ease = Pt["quad.out"]);
    var Rt,
        Et = function GSCache(t, e) {
            (this.id = U++), ((t._gsap = this).target = t), (this.harness = e), (this.get = e ? e.get : Z), (this.set = e ? e.getSetter : Wt);
        },
        zt =
            (((Rt = Animation.prototype).delay = function delay(t) {
                return t || 0 === t ? ((this._delay = t), this) : this._delay;
            }),
            (Rt.duration = function duration(t) {
                var e = arguments.length,
                    r = this._repeat,
                    n = 0 < r ? r * ((e ? t : this._dur) + this._rDelay) : 0;
                return e ? this.totalDuration(r < 0 ? t : t + n) : this.totalDuration() && this._dur;
            }),
            (Rt.totalDuration = function totalDuration(t) {
                if (!arguments.length) return this._tDur;
                var e = this._repeat,
                    r = (t || this._rDelay) && e < 0;
                return (this._tDur = r ? 1e12 : t), (this._dur = r ? t : (t - e * this._rDelay) / (e + 1)), (this._dirty = 0), qa(this.parent), this;
            }),
            (Rt.totalTime = function totalTime(t, e) {
                if ((Mt(), !arguments.length)) return this._tTime;
                var r,
                    n = this.parent || this._dp;
                if (n && n.smoothChildTiming && this._ts) {
                    for (r = this._start, this._start = n._time - (0 < this._ts ? t / this._ts : ((this._dirty ? this.totalDuration() : this._tDur) - t) / -this._ts), this._end += this._start - r, n._dirty || qa(n); n.parent; )
                        n.parent._time !== n._start + (0 < n._ts ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), (n = n.parent);
                    !this.parent && n.autoRemoveChildren && wa(n, this, this._start - this._delay);
                }
                return (this._tTime === t && (this._dur || e)) || (this._ts || (this._pTime = t), da(this, t, e)), this;
            }),
            (Rt.time = function time(t, e) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + ta(this)) % this._dur || (t ? this._dur : 0), e) : this._time;
            }),
            (Rt.totalProgress = function totalProgress(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._tTime / this.totalDuration();
            }),
            (Rt.progress = function progress(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + ta(this), e) : this.duration() ? this._time / this._dur : this.ratio;
            }),
            (Rt.iteration = function iteration(t, e) {
                var r = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? ct(this._tTime, r) + 1 : 1;
            }),
            (Rt.timeScale = function timeScale(t) {
                if (!arguments.length) return this._ts || this._pauseTS || 0;
                if (null !== this._pauseTS) return (this._pauseTS = t), this;
                var e = this.parent && this._ts ? va(this.parent._time, this) : this._tTime;
                return (
                    (this._ts = t),
                    (function _recacheAncestors(t) {
                        for (var e = t.parent; e && e.parent; ) (e._dirty = 1), e.totalDuration(), (e = e.parent);
                        return t;
                    })(this.totalTime(e, !0))
                );
            }),
            (Rt.paused = function paused(t) {
                var e = !this._ts;
                return arguments.length
                    ? (e !== t &&
                          (t
                              ? ((this._pauseTS = this._ts), (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
                              : ((this._ts = this._pauseTS || 1), (this._pauseTS = null), (t = this._tTime || this._pTime), 1 === this.progress() && (this._tTime -= B), this.totalTime(t, !0))),
                      this)
                    : e;
            }),
            (Rt.startTime = function startTime(t) {
                return arguments.length ? (this.parent && this.parent._sort && wa(this.parent, this, t - this._delay), this) : this._start;
            }),
            (Rt.endTime = function endTime(t) {
                return this._start + (s(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
            }),
            (Rt.rawTime = function rawTime(t) {
                var e = this.parent || this._dp;
                return e ? (t && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1)) ? this._tTime % (this._dur + this._rDelay) : this._ts ? va(e.rawTime(t), this) : this._tTime) : this._tTime;
            }),
            (Rt.repeat = function repeat(t) {
                return arguments.length ? ((this._repeat = t), Aa(this)) : this._repeat;
            }),
            (Rt.repeatDelay = function repeatDelay(t) {
                return arguments.length ? ((this._rDelay = t), Aa(this)) : this._rDelay;
            }),
            (Rt.yoyo = function yoyo(t) {
                return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (Rt.seek = function seek(t, e) {
                return this.totalTime(Ca(this, t), s(e));
            }),
            (Rt.restart = function restart(t, e) {
                return this.play().totalTime(t ? -this._delay : 0, s(e));
            }),
            (Rt.play = function play(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (Rt.reverse = function reverse(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
            }),
            (Rt.pause = function pause(t, e) {
                return null != t && this.seek(t, e), this.paused(!0);
            }),
            (Rt.resume = function resume() {
                return this.paused(!1);
            }),
            (Rt.reversed = function reversed(t) {
                var e = this._ts || this._pauseTS || 0;
                return arguments.length ? (t !== this.reversed() && ((this[null === this._pauseTS ? "_ts" : "_pauseTS"] = Math.abs(e) * (t ? -1 : 1)), this.totalTime(this._tTime, !0)), this) : e < 0;
            }),
            (Rt.invalidate = function invalidate() {
                return (this._initted = 0), this;
            }),
            (Rt.isActive = function isActive(t) {
                var e,
                    r = this.parent || this._dp,
                    n = this._start;
                return !(r && !(this._ts && (this._initted || !t) && r.isActive(t) && (e = r.rawTime(!0)) >= n && e < this.endTime(!0) - B));
            }),
            (Rt.eventCallback = function eventCallback(t, e, r) {
                var n = this.vars;
                return 1 < arguments.length ? (e ? ((n[t] = e), r && (n[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t];
            }),
            (Rt.then = function then(t) {
                var n = this;
                return new Promise(function (e) {
                    function vm() {
                        var t = n.then;
                        (n.then = null), (r = r(n)) && (r.then || r === n ? (n.then = t) : o(r) || (r = fa)), e(r), (n.then = t);
                    }
                    var r = o(t) ? t : fa;
                    (n._initted && 1 === n.totalProgress() && 0 <= n._ts) || (!n._tTime && n._ts < 0) ? vm() : (n._prom = vm);
                });
            }),
            (Rt.kill = function kill() {
                _a(this);
            }),
            Animation);
    function Animation(t, e) {
        var r = t.parent || E;
        (this.vars = t),
            (this._dur = this._tDur = +t.duration || 0),
            (this._delay = +t.delay || 0),
            (this._repeat = t.repeat || 0) && ((this._rDelay = t.repeatDelay || 0), (this._yoyo = !!t.yoyo || !!t.yoyoEase), Aa(this)),
            (this._ts = 1),
            (this.data = t.data),
            m || Ct.wake(),
            r && wa(r, this, e || 0 === e ? e : r._time),
            t.reversed && this.reversed(!0),
            t.paused && this.paused(!0);
    }
    ga(zt.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: 0, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -B, _prom: 0, _pauseTS: null });
    var Bt = (function (i) {
        function Timeline(t, e) {
            var r;
            return void 0 === t && (t = {}), ((r = i.call(this, t, e) || this).labels = {}), (r.smoothChildTiming = s(t.smoothChildTiming)), (r.autoRemoveChildren = !!t.autoRemoveChildren), (r._sort = s(t.sortChildren)), r;
        }
        _inheritsLoose(Timeline, i);
        var t = Timeline.prototype;
        return (
            (t.to = function to(t, e, r, n) {
                return new jt(t, ba(arguments, 0, this), Ca(this, p(e) ? n : r)), this;
            }),
            (t.from = function from(t, e, r, n) {
                return new jt(t, ba(arguments, 1, this), Ca(this, p(e) ? n : r)), this;
            }),
            (t.fromTo = function fromTo(t, e, r, n, i) {
                return new jt(t, ba(arguments, 2, this), Ca(this, p(e) ? i : n)), this;
            }),
            (t.set = function set(t, e, r) {
                return (e.duration = 0), (e.parent = this), e.repeatDelay || (e.repeat = 0), (e.immediateRender = !!e.immediateRender), new jt(t, e, Ca(this, r)), this;
            }),
            (t.call = function call(t, e, r) {
                return wa(this, jt.delayedCall(0, t, e), Ca(this, r));
            }),
            (t.staggerTo = function staggerTo(t, e, r, n, i, a, s) {
                return (r.duration = e), (r.stagger = r.stagger || n), (r.onComplete = a), (r.onCompleteParams = s), (r.parent = this), new jt(t, r, Ca(this, i)), this;
            }),
            (t.staggerFrom = function staggerFrom(t, e, r, n, i, a, o) {
                return (r.runBackwards = 1), (r.immediateRender = s(r.immediateRender)), this.staggerTo(t, e, r, n, i, a, o);
            }),
            (t.staggerFromTo = function staggerFromTo(t, e, r, n, i, a, o, u) {
                return (n.startAt = r), (n.immediateRender = s(n.immediateRender)), this.staggerTo(t, e, n, i, a, o, u);
            }),
            (t.render = function render(t, e, r) {
                var n,
                    i,
                    a,
                    s,
                    o,
                    u,
                    h,
                    l,
                    f,
                    p,
                    d,
                    c,
                    m = this._time,
                    g = this._dirty ? this.totalDuration() : this._tDur,
                    v = this._dur,
                    y = g - B < t && 0 <= t && this !== E ? g : t < B ? 0 : t,
                    b = this._zTime < 0 != t < 0 && (this._initted || !v);
                if (y !== this._tTime || r || b) {
                    if (
                        (b && (v || (m = this._zTime), (!t && e) || (this._zTime = t)),
                        (n = y),
                        (f = this._start),
                        (u = 0 === (l = this._ts)),
                        m !== this._time && v && (n += this._time - m),
                        this._repeat &&
                            ((d = this._yoyo),
                            (o = v + this._rDelay),
                            (v < (n = _(y % o)) || g === y) && (n = v),
                            (s = ~~(y / o)) && s === y / o && ((n = v), s--),
                            d && 1 & s && ((n = v - n), (c = 1)),
                            s !== (p = ct(this._tTime, o)) && !this._lock))
                    ) {
                        var w = d && 1 & p,
                            T = w === (d && 1 & s);
                        if (
                            (s < p && (w = !w),
                            (m = w ? 0 : v),
                            (this._lock = 1),
                            (this.render(m, e, !v)._lock = 0),
                            !e && this.parent && wt(this, "onRepeat"),
                            this.vars.repeatRefresh &&
                                !c &&
                                this.getChildren().forEach(function (t) {
                                    return t.invalidate();
                                }),
                            m !== this._time || u != !this._ts)
                        )
                            return this;
                        if ((T && ((this._lock = 2), (m = w ? v + 1e-4 : -1e-4), this.render(m, !0)), (this._lock = 0), !this._ts && !u)) return this;
                    }
                    if (
                        (this._hasPause &&
                            !this._forcing &&
                            this._lock < 2 &&
                            (h = (function _findNextPauseTween(t, e, r) {
                                var n;
                                if (e < r)
                                    for (n = t._first; n && n._start <= r; ) {
                                        if (!n._dur && "isPause" === n.data && n._start > e) return n;
                                        n = n._next;
                                    }
                                else
                                    for (n = t._last; n && n._start >= r; ) {
                                        if (!n._dur && "isPause" === n.data && n._start < e) return n;
                                        n = n._prev;
                                    }
                            })(this, _(m), _(n))) &&
                            (y -= n - (n = h._start)),
                        (this._tTime = y),
                        (this._time = n),
                        (this._act = !l),
                        this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1)),
                        m || !n || e || wt(this, "onStart"),
                        m <= n && 0 <= t)
                    )
                        for (i = this._first; i; ) {
                            if (((a = i._next), (i._act || n >= i._start) && i._ts && h !== i)) {
                                if (i.parent !== this) return this.render(t, e, r);
                                if ((i.render(0 < i._ts ? (n - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts, e, r), n !== this._time || (!this._ts && !u))) {
                                    h = 0;
                                    break;
                                }
                            }
                            i = a;
                        }
                    else {
                        i = this._last;
                        for (var x = t < 0 ? t : n; i; ) {
                            if (((a = i._prev), (i._act || x <= i._end) && i._ts && h !== i)) {
                                if (i.parent !== this) return this.render(t, e, r);
                                if ((i.render(0 < i._ts ? (x - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (x - i._start) * i._ts, e, r), n !== this._time || (!this._ts && !u))) {
                                    h = 0;
                                    break;
                                }
                            }
                            i = a;
                        }
                    }
                    if (h && !e && (this.pause(), (h.render(m <= n ? 0 : -B)._zTime = m <= n ? 1 : -1), this._ts)) return (this._start = f), this.render(t, e, r);
                    this._onUpdate && !e && wt(this, "onUpdate", !0),
                        ((y === g && g >= this.totalDuration()) || (!y && this._ts < 0)) &&
                            ((f !== this._start && Math.abs(l) === Math.abs(this._ts)) ||
                                ((!t && v) || !((t && 0 < this._ts) || (!y && this._ts < 0)) || pa(this, 1), e || (t < 0 && !m) || (wt(this, y === g ? "onComplete" : "onReverseComplete", !0), this._prom && this._prom())));
                }
                return this;
            }),
            (t.add = function add(t, e) {
                var r = this;
                if ((p(e) || (e = Ca(this, e)), !(t instanceof zt))) {
                    if (G(t))
                        return (
                            t.forEach(function (t) {
                                return r.add(t, e);
                            }),
                            qa(this)
                        );
                    if (n(t)) return this.addLabel(t, e);
                    if (!o(t)) return this;
                    t = jt.delayedCall(0, t);
                }
                return this !== t ? wa(this, t, e) : this;
            }),
            (t.getChildren = function getChildren(t, e, r, n) {
                void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === n && (n = -F);
                for (var i = [], a = this._first; a; ) a._start >= n && (a instanceof jt ? e && i.push(a) : (r && i.push(a), t && i.push.apply(i, a.getChildren(!0, e, r)))), (a = a._next);
                return i;
            }),
            (t.getById = function getById(t) {
                for (var e = this.getChildren(1, 1, 1), r = e.length; r--; ) if (e[r].vars.id === t) return e[r];
            }),
            (t.remove = function remove(t) {
                return n(t) ? this.removeLabel(t) : o(t) ? this.killTweensOf(t) : (oa(this, t), t === this._recent && (this._recent = this._last), qa(this));
            }),
            (t.totalTime = function totalTime(t, e) {
                return arguments.length
                    ? ((this._forcing = 1),
                      this.parent || this._dp || !this._ts || (this._start = Ct.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts)),
                      i.prototype.totalTime.call(this, t, e),
                      (this._forcing = 0),
                      this)
                    : this._tTime;
            }),
            (t.addLabel = function addLabel(t, e) {
                return (this.labels[t] = Ca(this, e)), this;
            }),
            (t.removeLabel = function removeLabel(t) {
                return delete this.labels[t], this;
            }),
            (t.addPause = function addPause(t, e, r) {
                var n = jt.delayedCall(0, e || N, r);
                return (n.data = "isPause"), (this._hasPause = 1), wa(this, n, Ca(this, t));
            }),
            (t.removePause = function removePause(t) {
                var e = this._first;
                for (t = Ca(this, t); e; ) e._start === t && "isPause" === e.data && pa(e), (e = e._next);
            }),
            (t.killTweensOf = function killTweensOf(t, e, r) {
                for (var n = this.getTweensOf(t, r), i = n.length; i--; ) Lt !== n[i] && n[i].kill(t, e);
                return this;
            }),
            (t.getTweensOf = function getTweensOf(t, e) {
                for (var r, n = [], i = yt(t), a = this._first; a; ) a instanceof jt ? !aa(a._targets, i) || (e && !a.isActive("started" === e)) || n.push(a) : (r = a.getTweensOf(i, e)).length && n.push.apply(n, r), (a = a._next);
                return n;
            }),
            (t.tweenTo = function tweenTo(t, e) {
                var r = this,
                    n = Ca(r, t),
                    i = e && e.startAt,
                    a = jt.to(
                        r,
                        ga(
                            {
                                ease: "none",
                                lazy: !1,
                                time: n,
                                duration: Math.abs(n - (i && "time" in i ? i.time : r._time)) / r.timeScale() || B,
                                onStart: function onStart() {
                                    r.pause();
                                    var t = Math.abs(n - r._time) / r.timeScale();
                                    a._dur !== t && ((a._dur = t), a.render(a._time, !0, !0)), e && e.onStart && e.onStart.apply(a, e.onStartParams || []);
                                },
                            },
                            e
                        )
                    );
                return a;
            }),
            (t.tweenFromTo = function tweenFromTo(t, e, r) {
                return this.tweenTo(e, ga({ startAt: { time: Ca(this, t) } }, r));
            }),
            (t.recent = function recent() {
                return this._recent;
            }),
            (t.nextLabel = function nextLabel(t) {
                return void 0 === t && (t = this._time), Za(this, Ca(this, t));
            }),
            (t.previousLabel = function previousLabel(t) {
                return void 0 === t && (t = this._time), Za(this, Ca(this, t), 1);
            }),
            (t.currentLabel = function currentLabel(t) {
                return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + B);
            }),
            (t.shiftChildren = function shiftChildren(t, e, r) {
                void 0 === r && (r = 0);
                for (var n, i = this._first, a = this.labels; i; ) i._start >= r && (i._start += t), (i = i._next);
                if (e) for (n in a) a[n] >= r && (a[n] += t);
                return qa(this);
            }),
            (t.invalidate = function invalidate() {
                var t = this._first;
                for (this._lock = 0; t; ) t.invalidate(), (t = t._next);
                return i.prototype.invalidate.call(this);
            }),
            (t.clear = function clear(t) {
                void 0 === t && (t = !0);
                for (var e, r = this._first; r; ) (e = r._next), this.remove(r), (r = e);
                return (this._time = this._tTime = 0), t && (this.labels = {}), qa(this);
            }),
            (t.totalDuration = function totalDuration(t) {
                var e,
                    r,
                    n = 0,
                    i = this,
                    a = i._last,
                    s = F,
                    o = i._repeat,
                    u = o * i._rDelay || 0,
                    h = o < 0;
                if (arguments.length) return h ? i : i.timeScale(i.totalDuration() / t);
                if (i._dirty) {
                    for (; a; )
                        (e = a._prev),
                            a._dirty && a.totalDuration(),
                            a._start > s && i._sort && a._ts && !i._lock ? ((i._lock = 1), wa(i, a, a._start - a._delay), (i._lock = 0)) : (s = a._start),
                            a._start < 0 &&
                                a._ts &&
                                ((n -= a._start),
                                ((!i.parent && !i._dp) || (i.parent && i.parent.smoothChildTiming)) && ((i._start += a._start / i._ts), (i._time -= a._start), (i._tTime -= a._start)),
                                i.shiftChildren(-a._start, !1, -1e20),
                                (s = 0)),
                            n < (r = a._end = a._start + a._tDur / Math.abs(a._ts || a._pauseTS || B)) && a._ts && (n = _(r)),
                            (a = e);
                    (i._dur = i === E && i._time > n ? i._time : Math.min(F, n)),
                        (i._tDur = h && (i._dur || u) ? 1e12 : Math.min(F, n * (o + 1) + u)),
                        (i._end = i._start + (i._tDur / Math.abs(i._ts || i._pauseTS || B) || 0)),
                        (i._dirty = 0);
                }
                return i._tDur;
            }),
            (Timeline.updateRoot = function updateRoot(t) {
                if ((E._ts && (da(E, va(t, E)), (d = Ct.frame)), Ct.frame >= ft)) {
                    ft += j.autoSleep || 120;
                    var e = E._first;
                    if ((!e || !e._ts) && j.autoSleep && Ct._listeners.length < 2) {
                        for (; e && !e._ts; ) e = e._next;
                        e || Ct.sleep();
                    }
                }
            }),
            Timeline
        );
    })(zt);
    ga(Bt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    function Eb(t, e, i, a, s, u) {
        var h, l, f, p;
        if (
            ht[t] &&
            !1 !==
                (h = new ht[t]()).init(
                    s,
                    h.rawVars
                        ? e[t]
                        : (function _processVars(t, e, i, a, s) {
                              if ((o(t) && (t = Yt(t, s, e, i, a)), !r(t) || (t.style && t.nodeType) || G(t))) return n(t) ? Yt(t, s, e, i, a) : t;
                              var u,
                                  h = {};
                              for (u in t) h[u] = Yt(t[u], s, e, i, a);
                              return h;
                          })(e[t], a, s, u, i),
                    i,
                    a,
                    u
                ) &&
            ((i._pt = l = new ee(i._pt, s, t, 0, 1, h.render, h, 0, h.priority)), i !== c)
        )
            for (f = i._ptLookup[i._targets.indexOf(s)], p = h._props.length; p--; ) f[h._props[p]] = l;
        return h;
    }
    var Lt,
        It = function _addPropTween(t, e, r, i, a, s, u, h, l) {
            o(i) && (i = i(a || 0, t, s));
            var f,
                p = t[e],
                d = "get" !== r ? r : o(p) ? (l ? t[e.indexOf("set") || !o(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]()) : p,
                _ = o(p) ? (l ? $t : Vt) : Ut;
            if ((n(i) && (~i.indexOf("random(") && (i = Wa(i)), "=" === i.charAt(1) && (i = parseFloat(d) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (Fa(d) || 0))), d !== i))
                return isNaN(d + i)
                    ? (p || e in t || K(e, i),
                      function _addComplexStringPropTween(t, e, r, n, i, a, s) {
                          var o,
                              u,
                              h,
                              l,
                              f,
                              p,
                              d,
                              _,
                              c = new ee(this._pt, t, e, 0, 1, Gt, null, i),
                              m = 0,
                              g = 0;
                          for (c.b = r, c.e = n, r += "", (d = ~(n += "").indexOf("random(")) && (n = Wa(n)), a && (a((_ = [r, n]), t, e), (r = _[0]), (n = _[1])), u = r.match(et) || []; (o = et.exec(n)); )
                              (l = o[0]),
                                  (f = n.substring(m, o.index)),
                                  h ? (h = (h + 1) % 5) : "rgba(" === f.substr(-5) && (h = 1),
                                  l !== u[g++] &&
                                      ((p = parseFloat(u[g - 1]) || 0),
                                      (c._pt = { _next: c._pt, p: f || 1 === g ? f : ",", s: p, c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - p, m: h && h < 4 ? Math.round : 0 }),
                                      (m = et.lastIndex));
                          return (c.c = m < n.length ? n.substring(m, n.length) : ""), (c.fp = s), (nt.test(n) || d) && (c.e = 0), (this._pt = c);
                      }.call(this, t, e, d, i, _, h || j.stringFilter, l))
                    : ((f = new ee(this._pt, t, e, +d || 0, i - (d || 0), "boolean" == typeof p ? Zt : Qt, 0, _)), l && (f.fp = l), u && f.modifier(u, this, t), (this._pt = f));
        },
        Nt = function _initTween(t, e) {
            var r,
                n,
                i,
                a,
                o,
                u,
                h,
                l,
                f,
                p,
                d,
                _,
                c = t.vars,
                m = c.ease,
                g = c.startAt,
                v = c.immediateRender,
                y = c.lazy,
                b = c.onUpdate,
                w = c.onUpdateParams,
                T = c.callbackScope,
                x = c.runBackwards,
                k = c.yoyoEase,
                O = c.keyframes,
                C = c.autoRevert,
                M = t._dur,
                P = t._startAt,
                S = t._targets,
                D = t.parent,
                A = D && "nested" === D.data ? D.parent._targets : S,
                F = "auto" === t._overwrite,
                R = t.timeline;
            if ((!R || (O && m) || (m = "none"), (t._ease = Ft(m, z.ease)), (t._yEase = k ? At(Ft(!0 === k ? m : k, z.ease)) : 0), k && t._yoyo && !t._repeat && ((k = t._yEase), (t._yEase = t._ease), (t._ease = k)), !R)) {
                if ((P && P.render(-1, !0).kill(), g)) {
                    if ((pa((t._startAt = jt.set(S, ga({ data: "isStart", overwrite: !1, parent: D, immediateRender: !0, lazy: s(y), startAt: null, delay: 0, onUpdate: b, onUpdateParams: w, callbackScope: T, stagger: 0 }, g)))), v))
                        if (0 < e) C || (t._startAt = 0);
                        else if (M) return;
                } else if (x && M)
                    if (P) C || (t._startAt = 0);
                    else if ((e && (v = !1), pa((t._startAt = jt.set(S, _t(ka(c, st), { overwrite: !1, data: "isFromStart", lazy: v && s(y), immediateRender: v, stagger: 0, parent: D })))), v)) {
                        if (!e) return;
                    } else _initTween(t._startAt, B);
                for (r = ka(c, st), _ = (l = S[(t._pt = 0)] ? Y(S[0]).harness : 0) && c[l.prop], y = (M && s(y)) || (y && !M), n = 0; n < S.length; n++) {
                    if (
                        ((h = (o = S[n])._gsap || X(S)[n]._gsap),
                        (t._ptLookup[n] = p = {}),
                        ut[h.id] && ca(),
                        (d = A === S ? n : A.indexOf(o)),
                        l &&
                            !1 !== (f = new l()).init(o, _ || r, t, d, A) &&
                            ((t._pt = a = new ee(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority)),
                            f._props.forEach(function (t) {
                                p[t] = a;
                            }),
                            f.priority && (u = 1)),
                        !l || _)
                    )
                        for (i in r) ht[i] && (f = Eb(i, r, t, d, o, A)) ? f.priority && (u = 1) : (p[i] = a = It.call(t, o, i, "get", r[i], d, A, 0, c.stringFilter));
                    t._op && t._op[n] && t.kill(o, t._op[n]), F && t._pt && ((Lt = t), E.killTweensOf(o, p, "started"), (Lt = 0)), t._pt && y && (ut[h.id] = 1);
                }
                u && te(t), t._onInit && t._onInit(t);
            }
            (t._from = !R && !!c.runBackwards), (t._onUpdate = b), (t._initted = 1);
        },
        Yt = function _parseFuncOrString(t, e, r, i, a) {
            return o(t) ? t.call(e, r, i, a) : n(t) && ~t.indexOf("random(") ? Wa(t) : t;
        },
        qt = dt + ",repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Xt = (qt + ",id,stagger,delay,duration,paused").split(","),
        jt = (function (O) {
            function Tween(t, e, n) {
                var i;
                "number" == typeof e && ((n.duration = e), (e = n), (n = null));
                var a,
                    o,
                    h,
                    l,
                    f,
                    d,
                    _,
                    c,
                    m = (i =
                        O.call(
                            this,
                            (function _inheritDefaults(t) {
                                var e = t.parent || E,
                                    r = t.keyframes ? ha : ga;
                                if (s(t.inherit)) for (; e; ) r(t, e.vars.defaults), (e = e.parent);
                                return t;
                            })(e),
                            n
                        ) || this).vars,
                    g = m.duration,
                    v = m.delay,
                    y = m.immediateRender,
                    b = m.stagger,
                    w = m.overwrite,
                    T = m.keyframes,
                    x = m.defaults,
                    k = G(t) && p(t[0]) ? [t] : yt(t);
                if (((i._targets = k.length ? X(k) : L("GSAP target " + t + " not found. https://greensock.com", !j.nullTargetWarn) || []), (i._ptLookup = []), (i._overwrite = w), T || b || u(g) || u(v))) {
                    if (((e = i.vars), (a = i.timeline = new Bt({ data: "nested", defaults: x || {} })).kill(), (a.parent = _assertThisInitialized(i)), T))
                        ga(a.vars.defaults, { ease: "none" }),
                            T.forEach(function (t) {
                                return a.to(k, t, ">");
                            });
                    else {
                        if (((l = k.length), (_ = b ? Ma(b) : N), r(b))) for (f in b) ~qt.indexOf(f) && ((c = c || {})[f] = b[f]);
                        for (o = 0; o < l; o++) {
                            for (f in ((h = {}), e)) Xt.indexOf(f) < 0 && (h[f] = e[f]);
                            (h.stagger = 0),
                                c && _t(h, c),
                                e.yoyoEase && !e.repeat && (h.yoyoEase = e.yoyoEase),
                                (d = k[o]),
                                (h.duration = +Yt(g, _assertThisInitialized(i), o, d, k)),
                                (h.delay = (+Yt(v, _assertThisInitialized(i), o, d, k) || 0) - i._delay),
                                !b && 1 === l && h.delay && ((i._delay = v = h.delay), (i._start += v), (h.delay = 0)),
                                a.to(d, h, _(o, d, k));
                        }
                        g = v = 0;
                    }
                    g || i.duration((g = a.duration()));
                } else i.timeline = 0;
                return (
                    !0 === w && ((Lt = _assertThisInitialized(i)), E.killTweensOf(k), (Lt = 0)),
                    (y ||
                        (!g &&
                            !T &&
                            i._start === i.parent._time &&
                            s(y) &&
                            (function _hasNoPausedAncestors(t) {
                                return !t || (t._ts && _hasNoPausedAncestors(t.parent));
                            })(_assertThisInitialized(i)) &&
                            "nested" !== i.parent.data)) &&
                        ((i._tTime = -B), i.render(Math.max(0, -v))),
                    i
                );
            }
            _inheritsLoose(Tween, O);
            var t = Tween.prototype;
            return (
                (t.render = function render(t, e, r) {
                    var n,
                        i,
                        a,
                        s,
                        o,
                        u,
                        h,
                        l,
                        f,
                        p = this._time,
                        d = this._tDur,
                        c = this._dur,
                        m = d - B < t && 0 <= t ? d : t < B ? 0 : t;
                    if (c) {
                        if (m !== this._tTime || !t || r || (this._startAt && this._zTime < 0 != t < 0)) {
                            if (((n = m), (l = this.timeline), this._repeat)) {
                                if (
                                    ((s = c + this._rDelay),
                                    c < (n = _(m % s)) && (n = c),
                                    (a = ~~(m / s)) && a === m / s && ((n = c), a--),
                                    (u = this._yoyo && 1 & a) && ((f = this._yEase), (n = c - n)),
                                    (o = ct(this._tTime, s)),
                                    n === p && !r && this._initted)
                                )
                                    return this;
                                a !== o && (!this.vars.repeatRefresh || u || this._lock || ((this._lock = r = 1), (this.render(s * a, !0).invalidate()._lock = 0)));
                            }
                            if (!this._initted && xa(this, n, r, e)) return (this._tTime = 0), this;
                            for (
                                this._tTime = m,
                                    this._time = n,
                                    !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                                    this.ratio = h = (f || this._ease)(n / c),
                                    this._from && (this.ratio = h = 1 - h),
                                    p || !n || e || wt(this, "onStart"),
                                    i = this._pt;
                                i;

                            )
                                i.r(h, i.d), (i = i._next);
                            (l && l.render(t < 0 ? t : !n && u ? -B : l._dur * h, e, r)) || (this._startAt && (this._zTime = t)),
                                this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), wt(this, "onUpdate")),
                                this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && wt(this, "onRepeat"),
                                (m !== this._tDur && m) ||
                                    this._tTime !== m ||
                                    (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, r),
                                    (!t && c) || !((t && 0 < this._ts) || (!m && this._ts < 0)) || pa(this, 1),
                                    e || (t < 0 && !p) || (wt(this, m === d ? "onComplete" : "onReverseComplete", !0), this._prom && this._prom()));
                        }
                    } else
                        !(function _renderZeroDurationTween(t, e, r, n) {
                            var i,
                                a = t._zTime < 0 ? 0 : 1,
                                s = e < 0 ? 0 : 1,
                                o = t._rDelay,
                                u = 0;
                            if (
                                (o && t._repeat && ((u = gt(0, t._tDur, e)), ct(u, o) !== ct(t._tTime, o) && ((a = 1 - s), t.vars.repeatRefresh && t._initted && t.invalidate())),
                                (t._initted || !xa(t, e, n, r)) && (s !== a || n || t._zTime === B || (!e && t._zTime)))
                            ) {
                                for (t._zTime = e || (r ? B : 0), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = u, r || wt(t, "onStart"), i = t._pt; i; ) i.r(s, i.d), (i = i._next);
                                !s && t._startAt && !t._onUpdate && t._start && t._startAt.render(e, !0, n),
                                    t._onUpdate && !r && wt(t, "onUpdate"),
                                    u && t._repeat && !r && t.parent && wt(t, "onRepeat"),
                                    (e >= t._tDur || e < 0) && t.ratio === s && (t.ratio && pa(t, 1), r || (wt(t, t.ratio ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
                            }
                        })(this, t, e, r);
                    return this;
                }),
                (t.targets = function targets() {
                    return this._targets;
                }),
                (t.invalidate = function invalidate() {
                    return (this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0), (this._ptLookup = []), this.timeline && this.timeline.invalidate(), O.prototype.invalidate.call(this);
                }),
                (t.kill = function kill(t, e) {
                    if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e)) && ((this._lazy = 0), this.parent))) return _a(this);
                    if (this.timeline) return this.timeline.killTweensOf(t, e, Lt && !0 !== Lt.vars.overwrite), this;
                    var r,
                        i,
                        a,
                        s,
                        o,
                        u,
                        h,
                        l = this._targets,
                        f = t ? yt(t) : l,
                        p = this._ptLookup,
                        d = this._pt;
                    if (
                        (!e || "all" === e) &&
                        (function _arraysMatch(t, e) {
                            for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r]; );
                            return r < 0;
                        })(l, f)
                    )
                        return _a(this);
                    for (
                        r = this._op = this._op || [],
                            "all" !== e &&
                                (n(e) &&
                                    ((o = {}),
                                    $(e, function (t) {
                                        return (o[t] = 1);
                                    }),
                                    (e = o)),
                                (e = (function _addAliasesToVars(t, e) {
                                    var r,
                                        n,
                                        i,
                                        a,
                                        s = t[0] ? Y(t[0]).harness : 0,
                                        o = s && s.aliases;
                                    if (!o) return e;
                                    for (n in ((r = _t({}, e)), o)) if ((n in r)) for (i = (a = o[n].split(",")).length; i--; ) r[a[i]] = r[n];
                                    return r;
                                })(l, e))),
                            h = l.length;
                        h--;

                    )
                        if (~f.indexOf(l[h]))
                            for (o in ((i = p[h]), "all" === e ? ((r[h] = e), (s = i), (a = {})) : ((a = r[h] = r[h] || {}), (s = e)), s))
                                (u = i && i[o]) && (("kill" in u.d && !0 !== u.d.kill(o)) || oa(this, u, "_pt"), delete i[o]), "all" !== a && (a[o] = 1);
                    return this._initted && !this._pt && d && _a(this), this;
                }),
                (Tween.to = function to(t, e, r) {
                    return new Tween(t, e, r);
                }),
                (Tween.from = function from(t, e) {
                    return new Tween(t, ba(arguments, 1));
                }),
                (Tween.delayedCall = function delayedCall(t, e, r, n) {
                    return new Tween(e, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: t, onComplete: e, onReverseComplete: e, onCompleteParams: r, onReverseCompleteParams: r, callbackScope: n });
                }),
                (Tween.fromTo = function fromTo(t, e, r) {
                    return new Tween(t, ba(arguments, 2));
                }),
                (Tween.set = function set(t, e) {
                    return (e.duration = 0), e.repeatDelay || (e.repeat = 0), new Tween(t, e);
                }),
                (Tween.killTweensOf = function killTweensOf(t, e, r) {
                    return E.killTweensOf(t, e, r);
                }),
                Tween
            );
        })(zt);
    ga(jt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
        $("staggerTo,staggerFrom,staggerFromTo", function (r) {
            jt[r] = function () {
                var t = new Bt(),
                    e = vt.call(arguments, 0);
                return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
            };
        });
    function Pb(t, e, r) {
        return t.setAttribute(e, r);
    }
    function Xb(t, e, r, n) {
        n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
    }
    var Ut = function _setterPlain(t, e, r) {
            return (t[e] = r);
        },
        Vt = function _setterFunc(t, e, r) {
            return t[e](r);
        },
        $t = function _setterFuncWithParam(t, e, r, n) {
            return t[e](n.fp, r);
        },
        Wt = function _getSetter(t, e) {
            return o(t[e]) ? Vt : q(t[e]) && t.setAttribute ? Pb : Ut;
        },
        Qt = function _renderPlain(t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
        },
        Zt = function _renderBoolean(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e);
        },
        Gt = function _renderComplexString(t, e) {
            var r = e._pt,
                n = "";
            if (!t && e.b) n = e.b;
            else if (1 === t && e.e) n = e.e;
            else {
                for (; r; ) (n = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + n), (r = r._next);
                n += e.c;
            }
            e.set(e.t, e.p, n, e);
        },
        Jt = function _renderPropTweens(t, e) {
            for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
        },
        Ht = function _addPluginModifier(t, e, r, n) {
            for (var i, a = this._pt; a; ) (i = a._next), a.p === n && a.modifier(t, e, r), (a = i);
        },
        Kt = function _killPropTweensOf(t) {
            for (var e, r, n = this._pt; n; ) (r = n._next), (n.p === t && !n.op) || n.op === t ? oa(this, n, "_pt") : n.dep || (e = 1), (n = r);
            return !e;
        },
        te = function _sortPropTweensByPriority(t) {
            for (var e, r, n, i, a = t._pt; a; ) {
                for (e = a._next, r = n; r && r.pr > a.pr; ) r = r._next;
                (a._prev = r ? r._prev : i) ? (a._prev._next = a) : (n = a), (a._next = r) ? (r._prev = a) : (i = a), (a = e);
            }
            t._pt = n;
        },
        ee =
            ((PropTween.prototype.modifier = function modifier(t, e, r) {
                (this.mSet = this.mSet || this.set), (this.set = Xb), (this.m = t), (this.mt = r), (this.tween = e);
            }),
            PropTween);
    function PropTween(t, e, r, n, i, a, s, o, u) {
        (this.t = e), (this.s = n), (this.c = i), (this.p = r), (this.r = a || Qt), (this.d = s || this), (this.set = o || Ut), (this.pr = u || 0), (this._next = t) && (t._prev = this);
    }
    $(dt + ",parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert", function (
        t
    ) {
        (st[t] = 1), "on" === t.substr(0, 2) && (st[t + "Params"] = 1);
    }),
        (at.TweenMax = at.TweenLite = jt),
        (at.TimelineLite = at.TimelineMax = Bt),
        (E = new Bt({ sortChildren: !1, defaults: z, autoRemoveChildren: !0, id: "root" })),
        (j.stringFilter = jb);
    var re = {
        registerPlugin: function registerPlugin() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach(function (t) {
                return (function _createPlugin(t) {
                    var e = (t = (!t.name && t.default) || t).name,
                        r = o(t),
                        n =
                            e && !r && t.init
                                ? function () {
                                      this._props = [];
                                  }
                                : t,
                        i = { init: N, render: Jt, add: It, kill: Kt, modifier: Ht, rawVars: 0 },
                        a = { targetTest: 0, get: 0, getSetter: Wt, aliases: {}, register: 0 };
                    if ((Mt(), t !== n)) {
                        if (ht[e]) return;
                        ga(n, ga(ka(t, i), a)), _t(n.prototype, _t(i, ka(t, a))), (ht[(n.prop = e)] = n), t.targetTest && (pt.push(n), (st[e] = 1)), (e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
                    }
                    M(e, n), t.register && t.register(ne, n, ee);
                })(t);
            });
        },
        timeline: function timeline(t) {
            return new Bt(t);
        },
        getTweensOf: function getTweensOf(t, e) {
            return E.getTweensOf(t, e);
        },
        getProperty: function getProperty(i, t, e, r) {
            n(i) && (i = yt(i)[0]);
            var a = Y(i || {}).get,
                s = e ? fa : ea;
            return (
                "native" === e && (e = ""),
                i
                    ? t
                        ? s(((ht[t] && ht[t].get) || a)(i, t, e, r))
                        : function (t, e, r) {
                              return s(((ht[t] && ht[t].get) || a)(i, t, e, r));
                          }
                    : i
            );
        },
        quickSetter: function quickSetter(r, e, n) {
            if (1 < (r = yt(r)).length) {
                var i = r.map(function (t) {
                        return ne.quickSetter(t, e, n);
                    }),
                    a = i.length;
                return function (t) {
                    for (var e = a; e--; ) i[e](t);
                };
            }
            r = r[0] || {};
            var s = ht[e],
                o = Y(r),
                u = s
                    ? function (t) {
                          var e = new s();
                          (c._pt = 0), e.init(r, n ? t + n : t, c, 0, [r]), e.render(1, e), c._pt && Jt(1, c);
                      }
                    : o.set(r, e);
            return s
                ? u
                : function (t) {
                      return u(r, e, n ? t + n : t, o, 1);
                  };
        },
        isTweening: function isTweening(t) {
            return 0 < E.getTweensOf(t, !0).length;
        },
        defaults: function defaults(t) {
            return t && t.ease && (t.ease = Ft(t.ease, z.ease)), ja(z, t || {});
        },
        config: function config(t) {
            return ja(j, t || {});
        },
        registerEffect: function registerEffect(t) {
            var i = t.name,
                n = t.effect,
                e = t.plugins,
                a = t.defaults,
                s = t.extendTimeline;
            (e || "").split(",").forEach(function (t) {
                return t && !ht[t] && !at[t] && L(i + " effect requires " + t + " plugin.");
            }),
                (lt[i] = function (t, e) {
                    return n(yt(t), ga(e || {}, a));
                }),
                s &&
                    (Bt.prototype[i] = function (t, e, n) {
                        return this.add(lt[i](t, r(e) ? e : (n = e) && {}), n);
                    });
        },
        registerEase: function registerEase(t, e) {
            Pt[t] = Ft(e);
        },
        parseEase: function parseEase(t, e) {
            return arguments.length ? Ft(t, e) : Pt;
        },
        getById: function getById(t) {
            return E.getById(t);
        },
        exportRoot: function exportRoot(t, e) {
            void 0 === t && (t = {});
            var r,
                n,
                i = new Bt(t);
            for (i.smoothChildTiming = s(t.smoothChildTiming), E.remove(i), i._dp = 0, i._time = i._tTime = E._time, r = E._first; r; )
                (n = r._next), (!e && !r._dur && r instanceof jt && r.vars.onComplete === r._targets[0]) || wa(i, r, r._start - r._delay), (r = n);
            return wa(E, i, 0), i;
        },
        utils: {
            wrap: function wrap(e, t, r) {
                var n = t - e;
                return G(e)
                    ? Ta(e, wrap(0, e.length), t)
                    : Da(r, function (t) {
                          return ((n + ((t - e) % n)) % n) + e;
                      });
            },
            wrapYoyo: function wrapYoyo(e, t, r) {
                var n = t - e,
                    i = 2 * n;
                return G(e)
                    ? Ta(e, wrapYoyo(0, e.length - 1), t)
                    : Da(r, function (t) {
                          return e + (n < (t = (i + ((t - e) % i)) % i) ? i - t : t);
                      });
            },
            distribute: Ma,
            random: Pa,
            snap: Oa,
            normalize: function normalize(t, e, r) {
                return bt(t, e, 0, 1, r);
            },
            getUnit: Fa,
            clamp: function clamp(e, r, t) {
                return Da(t, function (t) {
                    return gt(e, r, t);
                });
            },
            splitColor: fb,
            toArray: yt,
            mapRange: bt,
            pipe: function pipe() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return function (t) {
                    return e.reduce(function (t, e) {
                        return e(t);
                    }, t);
                };
            },
            unitize: function unitize(e, r) {
                return function (t) {
                    return e(parseFloat(t)) + (r || Fa(t));
                };
            },
            interpolate: function interpolate(e, r, t, i) {
                var a = isNaN(e + r)
                    ? 0
                    : function (t) {
                          return (1 - t) * e + t * r;
                      };
                if (!a) {
                    var s,
                        o,
                        u,
                        h,
                        l,
                        f = n(e),
                        p = {};
                    if ((!0 === t && (i = 1) && (t = null), f)) (e = { p: e }), (r = { p: r });
                    else if (G(e) && !G(r)) {
                        for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) u.push(interpolate(e[o - 1], e[o]));
                        h--,
                            (a = function func(t) {
                                t *= h;
                                var e = Math.min(l, ~~t);
                                return u[e](t - e);
                            }),
                            (t = r);
                    } else i || (e = _t(G(e) ? [] : {}, e));
                    if (!u) {
                        for (s in r) It.call(p, e, s, "get", r[s]);
                        a = function func(t) {
                            return Jt(t, p) || (f ? e.p : e);
                        };
                    }
                }
                return Da(t, a);
            },
            shuffle: La,
        },
        install: J,
        effects: lt,
        ticker: Ct,
        updateRoot: Bt.updateRoot,
        plugins: ht,
        globalTimeline: E,
        core: { PropTween: ee, globals: M, Tween: jt, Timeline: Bt, Animation: zt, getCache: Y },
    };
    $("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return (re[t] = jt[t]);
    }),
        Ct.add(Bt.updateRoot),
        (c = re.to({}, { duration: 0 }));
    function _b(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; ) r = r._next;
        return r;
    }
    function bc(t, a) {
        return {
            name: t,
            rawVars: 1,
            init: function init(t, i, e) {
                e._onInit = function (t) {
                    var e, r;
                    if (
                        (n(i) &&
                            ((e = {}),
                            $(i, function (t) {
                                return (e[t] = 1);
                            }),
                            (i = e)),
                        a)
                    ) {
                        for (r in ((e = {}), i)) e[r] = a(i[r]);
                        i = e;
                    }
                    !(function _addModifiers(t, e) {
                        var r,
                            n,
                            i,
                            a = t._targets;
                        for (r in e) for (n = a.length; n--; ) (i = (i = t._ptLookup[n][r]) && i.d) && (i._pt && (i = _b(i, r)), i && i.modifier && i.modifier(e[r], t, a[n], r));
                    })(t, i);
                };
            },
        };
    }
    var ne =
        re.registerPlugin(
            {
                name: "attr",
                init: function init(t, e, r, n, i) {
                    for (var a in e) this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], n, i, 0, 0, a), this._props.push(a);
                },
            },
            {
                name: "endArray",
                init: function init(t, e) {
                    for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r]);
                },
            },
            bc("roundProps", Na),
            bc("modifiers"),
            bc("snap", Oa)
        ) || re;
    (jt.version = Bt.version = ne.version = "3.1.1"), (f = 1), t() && Mt();
    function Nc(t, e) {
        return e.set(e.t, e.p, ~~(1e3 * (e.s + e.c * t)) / 1e3 + e.u, e);
    }
    function Oc(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : ~~(1e3 * (e.s + e.c * t)) / 1e3 + e.u, e);
    }
    function Pc(t, e) {
        return e.set(e.t, e.p, t ? ~~(1e3 * (e.s + e.c * t)) / 1e3 + e.u : e.b, e);
    }
    function Qc(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
    }
    function Rc(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e);
    }
    function Sc(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
    }
    function Tc(t, e, r) {
        return (t.style[e] = r);
    }
    function Uc(t, e, r) {
        return t.style.setProperty(e, r);
    }
    function Vc(t, e, r) {
        return (t._gsap[e] = r);
    }
    function Wc(t, e, r) {
        return (t._gsap.scaleX = t._gsap.scaleY = r);
    }
    function Xc(t, e, r, n, i) {
        var a = t._gsap;
        (a.scaleX = a.scaleY = r), a.renderTransform(i, a);
    }
    function Yc(t, e, r, n, i) {
        var a = t._gsap;
        (a[e] = r), a.renderTransform(i, a);
    }
    function ad(t, e) {
        var r = ae.createElementNS ? ae.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : ae.createElement(t);
        return r.style ? r : ae.createElement(t);
    }
    function bd(t, e, r) {
        var n = getComputedStyle(t);
        return n[e] || n.getPropertyValue(e.replace(Ee, "-$1").toLowerCase()) || n.getPropertyValue(e) || (!r && bd(t, Xe(e) || e, 1)) || "";
    }
    function ed() {
        !(function _windowExists() {
            return "undefined" != typeof window;
        })() ||
            ((ie = window),
            (ae = ie.document),
            (se = ae.documentElement),
            (ue = ad("div") || { style: {} }),
            (he = ad("div")),
            (Ne = Xe(Ne)),
            (Ye = Xe(Ye)),
            (ue.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
            (fe = !!Xe("perspective")),
            (oe = 1));
    }
    function gd(t, e) {
        for (var r = e.length; r--; ) if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
    }
    function hd(e) {
        var r;
        try {
            r = e.getBBox();
        } catch (t) {
            r = function _getBBoxHack(t) {
                var e,
                    r = ad("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
                    n = this.parentNode,
                    i = this.nextSibling,
                    a = this.style.cssText;
                if ((se.appendChild(r), r.appendChild(this), (this.style.display = "block"), t))
                    try {
                        (e = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = _getBBoxHack);
                    } catch (t) {}
                else this._gsapBBox && (e = this._gsapBBox());
                return i ? n.insertBefore(this, i) : n.appendChild(this), se.removeChild(r), (this.style.cssText = a), e;
            }.call(e, !0);
        }
        return !r || r.width || r.x || r.y ? r : { x: +gd(e, ["x", "cx", "x1"]) || 0, y: +gd(e, ["y", "cy", "y1"]) || 0, width: 0, height: 0 };
    }
    function id(t) {
        return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !hd(t));
    }
    function jd(t, e) {
        if (e) {
            var r = t.style;
            e in De && (e = Ne), r.removeProperty ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) || (e = "-" + e), r.removeProperty(e.replace(Ee, "-$1").toLowerCase())) : r.removeAttribute(e);
        }
    }
    function kd(t, e, r, n, i, a) {
        var s = new ee(t._pt, e, r, 0, 1, a ? Sc : Rc);
        return ((t._pt = s).b = n), (s.e = i), t._props.push(r), s;
    }
    function md(t, e, r, n) {
        var i,
            a,
            s,
            o,
            u = parseFloat(r) || 0,
            h = (r + "").trim().substr((u + "").length) || "px",
            l = ue.style,
            f = Be.test(e),
            p = "svg" === t.tagName.toLowerCase(),
            d = (p ? "client" : "offset") + (f ? "Width" : "Height"),
            c = "px" === n;
        return n === h || !u || je[n] || je[h]
            ? u
            : ((o = t.getCTM && id(t)),
              "%" === n && (De[e] || ~e.indexOf("adius"))
                  ? _((u / (o ? t.getBBox()[f ? "width" : "height"] : t[d])) * 100)
                  : ((l[f ? "width" : "height"] = 100 + (c ? h : n)),
                    (a = ~e.indexOf("adius") || ("em" === n && t.appendChild && !p) ? t : t.parentNode),
                    o && (a = (t.ownerSVGElement || {}).parentNode),
                    (a && a !== ae && a.appendChild) || (a = ae.body),
                    (s = a._gsap) && "%" === n && s.width && f && s.time === Ct.time
                        ? _((u / s.width) * 100)
                        : (a === t && (l.position = "static"),
                          a.appendChild(ue),
                          (i = ue[d]),
                          a.removeChild(ue),
                          (l.position = "absolute"),
                          f && "%" === n && (((s = Y(a)).time = Ct.time), (s.width = a[d])),
                          _(c ? (i * u) / 100 : (100 / i) * u))));
    }
    function nd(t, e, r, n) {
        var i;
        return (
            oe || ed(),
            e in Ie && "transform" !== e && ~(e = Ie[e]).indexOf(",") && (e = e.split(",")[0]),
            De[e] && "transform" !== e
                ? ((i = Qe(t, n)), (i = "transformOrigin" !== e ? i[e] : Ze(bd(t, Ye)) + i.zOrigin + "px"))
                : ((i = t.style[e]) && "auto" !== i && !n && !~(i + "").indexOf("calc(")) || (i = (Ve[e] && Ve[e](t, e, r)) || bd(t, e) || Z(t, e) || ("opacity" === e ? 1 : 0)),
            r && !~(i + "").indexOf(" ") ? md(t, e, i, r) + r : i
        );
    }
    function od(t, e, r, n) {
        var i,
            a,
            s,
            o,
            u,
            h,
            l,
            f,
            p,
            d,
            _,
            c,
            m = new ee(this._pt, t.style, e, 0, 1, Gt),
            g = 0,
            v = 0;
        if (
            ((m.b = r),
            (m.e = n),
            (r += ""),
            "auto" === (n += "") && ((t.style[e] = n), (n = bd(t, e) || n), (t.style[e] = r)),
            jb((i = [r, n])),
            (n = i[1]),
            !!(h = (r = i[0]).indexOf("rgba(")) != !!(l = n.indexOf("rgba(")) && (h ? (r = r.substr(h) + " " + r.substr(0, h - 1)) : (n = n.substr(l) + " " + n.substr(0, l - 1))),
            (s = r.match(ze) || []),
            (n.match(ze) || []).length)
        ) {
            for (; (a = ze.exec(n)); )
                (l = a[0]),
                    (p = n.substring(g, a.index)),
                    u ? (u = (u + 1) % 5) : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) || (u = 1),
                    l !== (h = s[v++] || "") &&
                        ((o = parseFloat(h) || 0),
                        (_ = h.substr((o + "").length)),
                        (c = "=" === l.charAt(1) ? +(l.charAt(0) + "1") : 0) && (l = l.substr(2)),
                        (f = parseFloat(l)),
                        (d = l.substr((f + "").length)),
                        (g = ze.lastIndex - d.length),
                        d || ((d = d || j.units[e] || _), g === n.length && ((n += d), (m.e += d))),
                        _ !== d && (o = md(t, e, h, d) || 0),
                        (m._pt = { _next: m._pt, p: p || 1 === v ? p : ",", s: o, c: c ? c * f : f - o, m: u && u < 4 ? Math.round : 0 }));
            m.c = g < n.length ? n.substring(g, n.length) : "";
        } else m.r = "display" === e && "none" === n ? Sc : Rc;
        return nt.test(n) && (m.e = 0), (this._pt = m);
    }
    function qd(t) {
        var e = t.split(" "),
            r = e[0],
            n = e[1] || "50%";
        return ("top" !== r && "bottom" !== r && "left" !== n && "right" !== n) || ((t = r), (r = n), (n = t)), (e[0] = Ue[r] || r), (e[1] = Ue[n] || n), e.join(" ");
    }
    function rd(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r,
                n,
                i,
                a = e.t,
                s = a.style,
                o = e.u;
            if ("all" === o || !0 === o) (s.cssText = ""), (n = 1);
            else for (i = (o = o.split(",")).length; -1 < --i; ) (r = o[i]), De[r] && ((n = 1), (r = "transformOrigin" === r ? Ye : Ne)), jd(a, r);
            n && (jd(a, Ne), (n = a._gsap) && (n.svg && a.removeAttribute("transform"), Qe(a, 1)));
        }
    }
    function vd(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
    }
    function wd(t) {
        var e = bd(t, Ne);
        return vd(e) ? $e : e.substr(7).match(tt).map(_);
    }
    function xd(t, e) {
        var r,
            n,
            i,
            a,
            s = t._gsap,
            o = t.style,
            u = wd(t);
        return s.svg && t.getAttribute("transform")
            ? "1,0,0,1,0,0" === (u = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",")
                ? $e
                : u
            : (u !== $e ||
                  t.offsetParent ||
                  t === se ||
                  s.svg ||
                  ((i = o.display),
                  (o.display = "block"),
                  ((r = t.parentNode) && t.offsetParent) || ((a = 1), (n = t.nextSibling), se.appendChild(t)),
                  (u = wd(t)),
                  i ? (o.display = i) : jd(t, "display"),
                  a && (n ? r.insertBefore(t, n) : r ? r.appendChild(t) : se.removeChild(t))),
              e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
    }
    function yd(t, e, r, n, i, a) {
        var s,
            o,
            u,
            h = t._gsap,
            l = i || xd(t, !0),
            f = h.xOrigin || 0,
            p = h.yOrigin || 0,
            d = h.xOffset || 0,
            _ = h.yOffset || 0,
            c = l[0],
            m = l[1],
            g = l[2],
            v = l[3],
            y = l[4],
            b = l[5],
            w = e.split(" "),
            T = parseFloat(w[0]) || 0,
            x = parseFloat(w[1]) || 0;
        r
            ? l !== $e && (o = c * v - m * g) && ((u = T * (-m / o) + x * (c / o) - (c * b - m * y) / o), (T = T * (v / o) + x * (-g / o) + (g * b - v * y) / o), (x = u))
            : ((T = (s = hd(t)).x + (~w[0].indexOf("%") ? (T / 100) * s.width : T)), (x = s.y + (~(w[1] || w[0]).indexOf("%") ? (x / 100) * s.height : x))),
            n || (!1 !== n && h.smooth) ? ((y = T - f), (b = x - p), (h.xOffset = d + (y * c + b * g) - y), (h.yOffset = _ + (y * m + b * v) - b)) : (h.xOffset = h.yOffset = 0),
            (h.xOrigin = T),
            (h.yOrigin = x),
            (h.smooth = !!n),
            (h.origin = e),
            (h.originIsAbsolute = !!r),
            (t.style[Ye] = "0px 0px"),
            a && (kd(a, h, "xOrigin", f, T), kd(a, h, "yOrigin", p, x), kd(a, h, "xOffset", d, h.xOffset), kd(a, h, "yOffset", _, h.yOffset));
    }
    function Bd(t, e, r) {
        var n = Fa(e);
        return _(parseFloat(e) + parseFloat(md(t, "x", r + "px", n))) + n;
    }
    function Id(t, e, r, i, a, s) {
        var o,
            u,
            h = 360,
            l = n(a),
            f = parseFloat(a) * (l && ~a.indexOf("rad") ? Ae : 1),
            p = s ? f * s : f - i,
            d = i + p + "deg";
        return (
            l && ("short" === (o = a.split("_")[1]) && (p %= h) !== p % 180 && (p += p < 0 ? h : -h), "cw" === o && p < 0 ? (p = ((p + 36e9) % h) - ~~(p / h) * h) : "ccw" === o && 0 < p && (p = ((p - 36e9) % h) - ~~(p / h) * h)),
            (t._pt = u = new ee(t._pt, e, r, i, p, Oc)),
            (u.e = d),
            (u.u = "deg"),
            t._props.push(r),
            u
        );
    }
    function Jd(t, e, r) {
        var n,
            i,
            a,
            s,
            o,
            u,
            h,
            l = he.style,
            f = r._gsap;
        for (i in ((l.cssText = getComputedStyle(r).cssText + ";position:absolute;display:block;"), (l[Ne] = e), ae.body.appendChild(he), (n = Qe(he, 1)), De))
            (a = f[i]) !== (s = n[i]) &&
                "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
                ((o = Fa(a) !== (h = Fa(s)) ? md(r, i, a, h) : parseFloat(a)), (u = parseFloat(s)), (t._pt = new ee(t._pt, f, i, o, u - o, Nc)), (t._pt.u = h || 0), t._props.push(i));
        ae.body.removeChild(he);
    }
    var ie,
        ae,
        se,
        oe,
        ue,
        he,
        le,
        fe,
        pe = Pt.Power0,
        de = Pt.Power1,
        _e = Pt.Power2,
        ce = Pt.Power3,
        me = Pt.Power4,
        ge = Pt.Linear,
        ve = Pt.Quad,
        ye = Pt.Cubic,
        be = Pt.Quart,
        we = Pt.Quint,
        Te = Pt.Strong,
        xe = Pt.Elastic,
        ke = Pt.Back,
        Oe = Pt.SteppedEase,
        Ce = Pt.Bounce,
        Me = Pt.Sine,
        Pe = Pt.Expo,
        Se = Pt.Circ,
        De = {},
        Ae = 180 / Math.PI,
        Fe = Math.PI / 180,
        Re = Math.atan2,
        Ee = /([A-Z])/g,
        ze = /[-+=\.]*\d+[\.e-]*\d*[a-z%]*/g,
        Be = /(?:left|right|width|margin|padding|x)/i,
        Le = /[\s,\(]\S/,
        Ie = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
        Ne = "transform",
        Ye = Ne + "Origin",
        qe = "O,Moz,ms,Ms,Webkit".split(","),
        Xe = function _checkPropPrefix(t, e) {
            var r = (e || ue).style,
                n = 5;
            if (t in r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(qe[n] + t in r); );
            return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? qe[n] : "") + t;
        },
        je = { deg: 1, rad: 1, turn: 1 },
        Ue = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
        Ve = {
            clearProps: function clearProps(t, e, r, n, i) {
                if ("isFromStart" !== i.data) {
                    var a = (t._pt = new ee(t._pt, e, r, 0, 0, rd));
                    return (a.u = n), (a.pr = -10), (a.tween = i), t._props.push(r), 1;
                }
            },
        },
        $e = [1, 0, 0, 1, 0, 0],
        We = {},
        Qe = function _parseTransform(t, e) {
            var r = t._gsap || new Et(t);
            if ("x" in r && !e && !r.uncache) return r;
            var n,
                i,
                a,
                s,
                o,
                u,
                h,
                l,
                f,
                p,
                d,
                c,
                m,
                g,
                v,
                y,
                b,
                w,
                T,
                x,
                k,
                O,
                C,
                M,
                P,
                S,
                D,
                A,
                F,
                R,
                E = t.style,
                z = r.scaleX < 0,
                B = r.xOrigin || 0,
                L = r.yOrigin || 0,
                I = "deg",
                N = bd(t, Ye) || "0";
            return (
                (n = i = a = u = h = l = f = p = d = 0),
                (s = o = 1),
                (r.svg = !(!t.getCTM || !id(t))),
                (c = xd(t, r.svg)),
                r.svg && yd(t, N, r.originIsAbsolute, !1 !== r.smooth, c),
                c !== $e &&
                    ((y = c[0]),
                    (b = c[1]),
                    (w = c[2]),
                    (T = c[3]),
                    (n = x = c[4]),
                    (i = k = c[5]),
                    6 === c.length
                        ? ((s = Math.sqrt(y * y + b * b)), (o = Math.sqrt(T * T + w * w)), (u = y || b ? Re(b, y) * Ae : 0), (f = w || T ? Re(w, T) * Ae + u : 0), r.svg && ((n -= B - (B * y + L * w)), (i -= L - (B * b + L * T))))
                        : ((R = c[6]),
                          (A = c[7]),
                          (P = c[8]),
                          (S = c[9]),
                          (D = c[10]),
                          (F = c[11]),
                          (n = c[12]),
                          (i = c[13]),
                          (a = c[14]),
                          (h = (m = Re(R, D)) * Ae),
                          m &&
                              ((O = x * (g = Math.cos(-m)) + P * (v = Math.sin(-m))),
                              (C = k * g + S * v),
                              (M = R * g + D * v),
                              (P = x * -v + P * g),
                              (S = k * -v + S * g),
                              (D = R * -v + D * g),
                              (F = A * -v + F * g),
                              (x = O),
                              (k = C),
                              (R = M)),
                          (l = (m = Re(-w, D)) * Ae),
                          m && ((g = Math.cos(-m)), (F = T * (v = Math.sin(-m)) + F * g), (y = O = y * g - P * v), (b = C = b * g - S * v), (w = M = w * g - D * v)),
                          (u = (m = Re(b, y)) * Ae),
                          m && ((O = y * (g = Math.cos(m)) + b * (v = Math.sin(m))), (C = x * g + k * v), (b = b * g - y * v), (k = k * g - x * v), (y = O), (x = C)),
                          h && 359.9 < Math.abs(h) + Math.abs(u) && ((h = u = 0), (l = 180 - l)),
                          (s = _(Math.sqrt(y * y + b * b + w * w))),
                          (o = _(Math.sqrt(k * k + R * R))),
                          (m = Re(x, k)),
                          (f = 2e-4 < Math.abs(m) ? m * Ae : 0),
                          (d = F ? 1 / (F < 0 ? -F : F) : 0)),
                    r.svg && ((c = t.getAttribute("transform")), (r.forceCSS = t.setAttribute("transform", "") || !vd(bd(t, Ne))), c && t.setAttribute("transform", c))),
                90 < Math.abs(f) && Math.abs(f) < 270 && (z ? ((s *= -1), (f += u <= 0 ? 180 : -180), (u += u <= 0 ? 180 : -180)) : ((o *= -1), (f += f <= 0 ? 180 : -180))),
                (r.x = ((r.xPercent = n && Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + "px"),
                (r.y = ((r.yPercent = i && Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px"),
                (r.z = a + "px"),
                (r.scaleX = _(s)),
                (r.scaleY = _(o)),
                (r.rotation = _(u) + I),
                (r.rotationX = _(h) + I),
                (r.rotationY = _(l) + I),
                (r.skewX = f + I),
                (r.skewY = p + I),
                (r.transformPerspective = d + "px"),
                (r.zOrigin = parseFloat(N.split(" ")[2]) || 0) && (E[Ye] = Ze(N)),
                (r.xOffset = r.yOffset = 0),
                (r.force3D = j.force3D),
                (r.renderTransform = r.svg ? er : fe ? tr : Ge),
                (r.uncache = 0),
                r
            );
        },
        Ze = function _firstTwoOnly(t) {
            return (t = t.split(" "))[0] + " " + t[1];
        },
        Ge = function _renderNon3DTransforms(t, e) {
            (e.z = "0px"), (e.rotationY = e.rotationX = "0deg"), (e.force3D = 0), tr(t, e);
        },
        Je = "0deg",
        He = "0px",
        Ke = ") ",
        tr = function _renderCSSTransforms(t, e) {
            var r = e || this,
                n = r.xPercent,
                i = r.yPercent,
                a = r.x,
                s = r.y,
                o = r.z,
                u = r.rotation,
                h = r.rotationY,
                l = r.rotationX,
                f = r.skewX,
                p = r.skewY,
                d = r.scaleX,
                _ = r.scaleY,
                c = r.transformPerspective,
                m = r.force3D,
                g = r.target,
                v = r.zOrigin,
                y = "",
                b = ("auto" === m && t && 1 !== t) || !0 === m;
            if (v && (l !== Je || h !== Je)) {
                var w,
                    T = parseFloat(h) * Fe,
                    x = Math.sin(T),
                    k = Math.cos(T);
                (T = parseFloat(l) * Fe), (w = Math.cos(T)), (a = Bd(g, a, x * w * -v)), (s = Bd(g, s, -Math.sin(T) * -v)), (o = Bd(g, o, k * w * -v + v));
            }
            c !== He && (y += "perspective(" + c + Ke),
                (n || i) && (y += "translate(" + n + "%, " + i + "%) "),
                (!b && a === He && s === He && o === He) || (y += o !== He || b ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + Ke),
                u !== Je && (y += "rotate(" + u + Ke),
                h !== Je && (y += "rotateY(" + h + Ke),
                l !== Je && (y += "rotateX(" + l + Ke),
                (f === Je && p === Je) || (y += "skew(" + f + ", " + p + Ke),
                (1 === d && 1 === _) || (y += "scale(" + d + ", " + _ + Ke),
                (g.style[Ne] = y || "translate(0, 0)");
        },
        er = function _renderSVGTransforms(t, e) {
            var r,
                n,
                i,
                a,
                s,
                o = e || this,
                u = o.xPercent,
                h = o.yPercent,
                l = o.x,
                f = o.y,
                p = o.rotation,
                d = o.skewX,
                c = o.skewY,
                m = o.scaleX,
                g = o.scaleY,
                v = o.target,
                y = o.xOrigin,
                b = o.yOrigin,
                w = o.xOffset,
                T = o.yOffset,
                x = o.forceCSS,
                k = parseFloat(l),
                O = parseFloat(f);
            (p = parseFloat(p)),
                (d = parseFloat(d)),
                (c = parseFloat(c)) && ((d += c = parseFloat(c)), (p += c)),
                p || d
                    ? ((p *= Fe),
                      (d *= Fe),
                      (r = Math.cos(p) * m),
                      (n = Math.sin(p) * m),
                      (i = Math.sin(p - d) * -g),
                      (a = Math.cos(p - d) * g),
                      d && ((c *= Fe), (s = Math.tan(d - c)), (i *= s = Math.sqrt(1 + s * s)), (a *= s), c && ((s = Math.tan(c)), (r *= s = Math.sqrt(1 + s * s)), (n *= s))),
                      (r = _(r)),
                      (n = _(n)),
                      (i = _(i)),
                      (a = _(a)))
                    : ((r = m), (a = g), (n = i = 0)),
                ((k && !~(l + "").indexOf("px")) || (O && !~(f + "").indexOf("px"))) && ((k = md(v, "x", l, "px")), (O = md(v, "y", f, "px"))),
                (y || b || w || T) && ((k = _(k + y - (y * r + b * i) + w)), (O = _(O + b - (y * n + b * a) + T))),
                (u || h) && ((s = v.getBBox()), (k = _(k + (u / 100) * s.width)), (O = _(O + (h / 100) * s.height))),
                (s = "matrix(" + r + "," + n + "," + i + "," + a + "," + k + "," + O + ")"),
                v.setAttribute("transform", s),
                x && (v.style[Ne] = s);
        };
    $("padding,margin,Width,Radius", function (e, r) {
        var t = "Right",
            n = "Bottom",
            i = "Left",
            o = (r < 3 ? ["Top", t, n, i] : ["Top" + i, "Top" + t, n + t, n + i]).map(function (t) {
                return r < 2 ? e + t : "border" + t + e;
            });
        Ve[1 < r ? "border" + e : e] = function (e, t, r, n, i) {
            var a, s;
            if (arguments.length < 4)
                return (
                    (a = o.map(function (t) {
                        return nd(e, t, r);
                    })),
                    5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s
                );
            (a = (n + "").split(" ")),
                (s = {}),
                o.forEach(function (t, e) {
                    return (s[t] = a[e] = a[e] || a[((e - 1) / 2) | 0]);
                }),
                e.init(t, s, i);
        };
    });
    var rr,
        nr,
        ir,
        ar = {
            name: "css",
            register: ed,
            targetTest: function targetTest(t) {
                return t.style && t.nodeType;
            },
            init: function init(t, e, r, n, i) {
                var a,
                    s,
                    o,
                    u,
                    h,
                    l,
                    f,
                    p,
                    d,
                    _,
                    c,
                    m,
                    g,
                    v,
                    y,
                    b = this._props,
                    w = t.style;
                for (f in (oe || ed(), e))
                    if ("autoRound" !== f && ((s = e[f]), !ht[f] || !Eb(f, e, r, n, t, i)))
                        if (((h = typeof s), (l = Ve[f]), "function" === h && (h = typeof (s = s.call(r, n, t, i))), "string" === h && ~s.indexOf("random(") && (s = Wa(s)), l)) l(this, t, f, s, r) && (y = 1);
                        else if ("--" === f.substr(0, 2)) this.add(w, "setProperty", getComputedStyle(t).getPropertyValue(f) + "", s + "", n, i, 0, 0, f);
                        else {
                            if (
                                ((a = nd(t, f)),
                                (u = parseFloat(a)),
                                (_ = "string" === h && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)),
                                (o = parseFloat(s)),
                                f in Ie &&
                                    ("autoAlpha" === f && (1 === u && "hidden" === nd(t, "visibility") && o && (u = 0), kd(this, w, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)),
                                    "scale" !== f && "transform" !== f && ~(f = Ie[f]).indexOf(",") && (f = f.split(",")[0])),
                                (c = f in De))
                            )
                                if ((m || ((g = t._gsap).renderTransform || Qe(t), (v = !1 !== e.smoothOrigin && g.smooth), ((m = this._pt = new ee(this._pt, w, Ne, 0, 1, g.renderTransform, g, 0, -1)).dep = 1)), "scale" === f))
                                    (this._pt = new ee(this._pt, g, "scaleY", g.scaleY, _ ? _ * o : o - g.scaleY)), b.push("scaleY", f), (f += "X");
                                else {
                                    if ("transformOrigin" === f) {
                                        (s = qd(s)), g.svg ? yd(t, s, 0, v, 0, this) : ((d = parseFloat(s.split(" ")[2])) !== g.zOrigin && kd(this, g, "zOrigin", g.zOrigin, d), kd(this, w, f, Ze(a), Ze(s)));
                                        continue;
                                    }
                                    if ("svgOrigin" === f) {
                                        yd(t, s, 1, v, 0, this);
                                        continue;
                                    }
                                    if (f in We) {
                                        Id(this, g, f, u, s, _);
                                        continue;
                                    }
                                    if ("smoothOrigin" === f) {
                                        kd(this, g, "smooth", g.smooth, s);
                                        continue;
                                    }
                                    if ("force3D" === f) {
                                        g[f] = s;
                                        continue;
                                    }
                                    if ("transform" === f) {
                                        Jd(this, s, t);
                                        continue;
                                    }
                                }
                            else f in w || (f = Xe(f) || f);
                            if (c || ((o || 0 === o) && (u || 0 === u) && !Le.test(s) && f in w))
                                (p = (a + "").substr((u + "").length)) !== (d = (s + "").substr((o + "").length) || (f in j.units ? j.units[f] : p)) && (u = md(t, f, a, d)),
                                    (this._pt = new ee(this._pt, c ? g : w, f, u, _ ? _ * o : o - u, "px" !== d || !1 === e.autoRound || c ? Nc : Qc)),
                                    (this._pt.u = d || 0),
                                    p !== d && ((this._pt.b = a), (this._pt.r = Pc));
                            else if (f in w) od.call(this, t, f, a, s);
                            else {
                                if (!(f in t)) {
                                    K(f, s);
                                    continue;
                                }
                                this.add(t, f, t[f], s, n, i);
                            }
                            b.push(f);
                        }
                y && te(this);
            },
            get: nd,
            aliases: Ie,
            getSetter: function getSetter(t, e, r) {
                return (e = Ie[e] || e) in De && e !== Ye && (t._gsap.x || nd(t, "x"))
                    ? r && le === r
                        ? "scale" === e
                            ? Wc
                            : Vc
                        : (le = r || {}) && ("scale" === e ? Xc : Yc)
                    : t.style && !q(t.style[e])
                    ? Tc
                    : ~e.indexOf("-")
                    ? Uc
                    : Wt(t, e);
            },
        };
    (ne.utils.checkPrefix = Xe),
        (ir = $((rr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (nr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
            De[t] = 1;
        })),
        $(nr, function (t) {
            (j.units[t] = "deg"), (We[t] = 1);
        }),
        (Ie[ir[13]] = rr + "," + nr),
        $("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
            var e = t.split(":");
            Ie[e[1]] = ir[e[0]];
        }),
        $("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
            j.units[t] = "px";
        }),
        ne.registerPlugin(ar);
    var sr = ne.registerPlugin(ar) || ne,
        or = sr.core.Tween;
    (e.Back = ke),
        (e.Bounce = Ce),
        (e.CSSPlugin = ar),
        (e.Circ = Se),
        (e.Cubic = ye),
        (e.Elastic = xe),
        (e.Expo = Pe),
        (e.Linear = ge),
        (e.Power0 = pe),
        (e.Power1 = de),
        (e.Power2 = _e),
        (e.Power3 = ce),
        (e.Power4 = me),
        (e.Quad = ve),
        (e.Quart = be),
        (e.Quint = we),
        (e.Sine = Me),
        (e.SteppedEase = Oe),
        (e.Strong = Te),
        (e.TimelineLite = Bt),
        (e.TimelineMax = Bt),
        (e.TweenLite = jt),
        (e.TweenMax = or),
        (e.default = sr),
        (e.gsap = sr);
    if (typeof window === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
    } else {
        delete e.default;
    }
});

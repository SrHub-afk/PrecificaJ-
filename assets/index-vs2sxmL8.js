var Xh = e => {
    throw TypeError(e)
}
;
var Tc = (e, t, n) => t.has(e) || Xh("Cannot " + n);
var S = (e, t, n) => (Tc(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , V = (e, t, n) => t.has(e) ? Xh("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , M = (e, t, n, r) => (Tc(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , G = (e, t, n) => (Tc(e, t, "access private method"),
n);
var ea = (e, t, n, r) => ({
    set _(s) {
        M(e, t, s, n)
    },
    get _() {
        return S(e, t, r)
    }
});
function Ib(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const s in r)
                if (s !== "default" && !(s in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, s);
                    o && Object.defineProperty(e, s, o.get ? o : {
                        enumerable: !0,
                        get: () => r[s]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        r(s);
    new MutationObserver(s => {
        for (const o of s)
            if (o.type === "childList")
                for (const i of o.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(s) {
        const o = {};
        return s.integrity && (o.integrity = s.integrity),
        s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const o = n(s);
        fetch(s.href, o)
    }
}
)();
var Rt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ng(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function Lb(e) {
    if (e.__esModule)
        return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else
        n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.keys(e).forEach(function(r) {
        var s = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, s.get ? s : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }),
    n
}
var Tg = {
    exports: {}
}
  , $l = {}
  , Rg = {
    exports: {}
}
  , X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bi = Symbol.for("react.element")
  , Mb = Symbol.for("react.portal")
  , Db = Symbol.for("react.fragment")
  , $b = Symbol.for("react.strict_mode")
  , Fb = Symbol.for("react.profiler")
  , Ub = Symbol.for("react.provider")
  , zb = Symbol.for("react.context")
  , Bb = Symbol.for("react.forward_ref")
  , Vb = Symbol.for("react.suspense")
  , Hb = Symbol.for("react.memo")
  , Wb = Symbol.for("react.lazy")
  , Zh = Symbol.iterator;
function qb(e) {
    return e === null || typeof e != "object" ? null : (e = Zh && e[Zh] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Ag = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Og = Object.assign
  , Ig = {};
function wo(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Ig,
    this.updater = n || Ag
}
wo.prototype.isReactComponent = {};
wo.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
wo.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Lg() {}
Lg.prototype = wo.prototype;
function cf(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Ig,
    this.updater = n || Ag
}
var uf = cf.prototype = new Lg;
uf.constructor = cf;
Og(uf, wo.prototype);
uf.isPureReactComponent = !0;
var ep = Array.isArray
  , Mg = Object.prototype.hasOwnProperty
  , df = {
    current: null
}
  , Dg = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function $g(e, t, n) {
    var r, s = {}, o = null, i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            Mg.call(t, r) && !Dg.hasOwnProperty(r) && (s[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        s.children = n;
    else if (1 < a) {
        for (var l = Array(a), c = 0; c < a; c++)
            l[c] = arguments[c + 2];
        s.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            s[r] === void 0 && (s[r] = a[r]);
    return {
        $$typeof: Bi,
        type: e,
        key: o,
        ref: i,
        props: s,
        _owner: df.current
    }
}
function Kb(e, t) {
    return {
        $$typeof: Bi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function ff(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Bi
}
function Qb(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var tp = /\/+/g;
function Rc(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Qb("" + e.key) : t.toString(36)
}
function Aa(e, t, n, r, s) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null)
        i = !0;
    else
        switch (o) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Bi:
            case Mb:
                i = !0
            }
        }
    if (i)
        return i = e,
        s = s(i),
        e = r === "" ? "." + Rc(i, 0) : r,
        ep(s) ? (n = "",
        e != null && (n = e.replace(tp, "$&/") + "/"),
        Aa(s, t, n, "", function(c) {
            return c
        })) : s != null && (ff(s) && (s = Kb(s, n + (!s.key || i && i.key === s.key ? "" : ("" + s.key).replace(tp, "$&/") + "/") + e)),
        t.push(s)),
        1;
    if (i = 0,
    r = r === "" ? "." : r + ":",
    ep(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var l = r + Rc(o, a);
            i += Aa(o, t, n, l, s)
        }
    else if (l = qb(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(o = e.next()).done; )
            o = o.value,
            l = r + Rc(o, a++),
            i += Aa(o, t, n, l, s);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}
function ta(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , s = 0;
    return Aa(e, r, "", "", function(o) {
        return t.call(n, o, s++)
    }),
    r
}
function Gb(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Xe = {
    current: null
}
  , Oa = {
    transition: null
}
  , Yb = {
    ReactCurrentDispatcher: Xe,
    ReactCurrentBatchConfig: Oa,
    ReactCurrentOwner: df
};
function Fg() {
    throw Error("act(...) is not supported in production builds of React.")
}
X.Children = {
    map: ta,
    forEach: function(e, t, n) {
        ta(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ta(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return ta(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!ff(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
X.Component = wo;
X.Fragment = Db;
X.Profiler = Fb;
X.PureComponent = cf;
X.StrictMode = $b;
X.Suspense = Vb;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yb;
X.act = Fg;
X.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Og({}, e.props)
      , s = e.key
      , o = e.ref
      , i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        i = df.current),
        t.key !== void 0 && (s = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            Mg.call(t, l) && !Dg.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var c = 0; c < l; c++)
            a[c] = arguments[c + 2];
        r.children = a
    }
    return {
        $$typeof: Bi,
        type: e.type,
        key: s,
        ref: o,
        props: r,
        _owner: i
    }
}
;
X.createContext = function(e) {
    return e = {
        $$typeof: zb,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Ub,
        _context: e
    },
    e.Consumer = e
}
;
X.createElement = $g;
X.createFactory = function(e) {
    var t = $g.bind(null, e);
    return t.type = e,
    t
}
;
X.createRef = function() {
    return {
        current: null
    }
}
;
X.forwardRef = function(e) {
    return {
        $$typeof: Bb,
        render: e
    }
}
;
X.isValidElement = ff;
X.lazy = function(e) {
    return {
        $$typeof: Wb,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Gb
    }
}
;
X.memo = function(e, t) {
    return {
        $$typeof: Hb,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
X.startTransition = function(e) {
    var t = Oa.transition;
    Oa.transition = {};
    try {
        e()
    } finally {
        Oa.transition = t
    }
}
;
X.unstable_act = Fg;
X.useCallback = function(e, t) {
    return Xe.current.useCallback(e, t)
}
;
X.useContext = function(e) {
    return Xe.current.useContext(e)
}
;
X.useDebugValue = function() {}
;
X.useDeferredValue = function(e) {
    return Xe.current.useDeferredValue(e)
}
;
X.useEffect = function(e, t) {
    return Xe.current.useEffect(e, t)
}
;
X.useId = function() {
    return Xe.current.useId()
}
;
X.useImperativeHandle = function(e, t, n) {
    return Xe.current.useImperativeHandle(e, t, n)
}
;
X.useInsertionEffect = function(e, t) {
    return Xe.current.useInsertionEffect(e, t)
}
;
X.useLayoutEffect = function(e, t) {
    return Xe.current.useLayoutEffect(e, t)
}
;
X.useMemo = function(e, t) {
    return Xe.current.useMemo(e, t)
}
;
X.useReducer = function(e, t, n) {
    return Xe.current.useReducer(e, t, n)
}
;
X.useRef = function(e) {
    return Xe.current.useRef(e)
}
;
X.useState = function(e) {
    return Xe.current.useState(e)
}
;
X.useSyncExternalStore = function(e, t, n) {
    return Xe.current.useSyncExternalStore(e, t, n)
}
;
X.useTransition = function() {
    return Xe.current.useTransition()
}
;
X.version = "18.3.1";
Rg.exports = X;
var p = Rg.exports;
const N = Ng(p)
  , Ug = Ib({
    __proto__: null,
    default: N
}, [p]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jb = p
  , Xb = Symbol.for("react.element")
  , Zb = Symbol.for("react.fragment")
  , e1 = Object.prototype.hasOwnProperty
  , t1 = Jb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , n1 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function zg(e, t, n) {
    var r, s = {}, o = null, i = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
    for (r in t)
        e1.call(t, r) && !n1.hasOwnProperty(r) && (s[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            s[r] === void 0 && (s[r] = t[r]);
    return {
        $$typeof: Xb,
        type: e,
        key: o,
        ref: i,
        props: s,
        _owner: t1.current
    }
}
$l.Fragment = Zb;
$l.jsx = zg;
$l.jsxs = zg;
Tg.exports = $l;
var u = Tg.exports
  , Bg = {
    exports: {}
}
  , bt = {}
  , Vg = {
    exports: {}
}
  , Hg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(P, O) {
        var F = P.length;
        P.push(O);
        e: for (; 0 < F; ) {
            var L = F - 1 >>> 1
              , B = P[L];
            if (0 < s(B, O))
                P[L] = O,
                P[F] = B,
                F = L;
            else
                break e
        }
    }
    function n(P) {
        return P.length === 0 ? null : P[0]
    }
    function r(P) {
        if (P.length === 0)
            return null;
        var O = P[0]
          , F = P.pop();
        if (F !== O) {
            P[0] = F;
            e: for (var L = 0, B = P.length, J = B >>> 1; L < J; ) {
                var de = 2 * (L + 1) - 1
                  , ke = P[de]
                  , oe = de + 1
                  , ut = P[oe];
                if (0 > s(ke, F))
                    oe < B && 0 > s(ut, ke) ? (P[L] = ut,
                    P[oe] = F,
                    L = oe) : (P[L] = ke,
                    P[de] = F,
                    L = de);
                else if (oe < B && 0 > s(ut, F))
                    P[L] = ut,
                    P[oe] = F,
                    L = oe;
                else
                    break e
            }
        }
        return O
    }
    function s(P, O) {
        var F = P.sortIndex - O.sortIndex;
        return F !== 0 ? F : P.id - O.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var i = Date
          , a = i.now();
        e.unstable_now = function() {
            return i.now() - a
        }
    }
    var l = []
      , c = []
      , d = 1
      , h = null
      , f = 3
      , g = !1
      , y = !1
      , m = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , x = typeof clearTimeout == "function" ? clearTimeout : null
      , v = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function b(P) {
        for (var O = n(c); O !== null; ) {
            if (O.callback === null)
                r(c);
            else if (O.startTime <= P)
                r(c),
                O.sortIndex = O.expirationTime,
                t(l, O);
            else
                break;
            O = n(c)
        }
    }
    function _(P) {
        if (m = !1,
        b(P),
        !y)
            if (n(l) !== null)
                y = !0,
                z(C);
            else {
                var O = n(c);
                O !== null && Y(_, O.startTime - P)
            }
    }
    function C(P, O) {
        y = !1,
        m && (m = !1,
        x(j),
        j = -1),
        g = !0;
        var F = f;
        try {
            for (b(O),
            h = n(l); h !== null && (!(h.expirationTime > O) || P && !U()); ) {
                var L = h.callback;
                if (typeof L == "function") {
                    h.callback = null,
                    f = h.priorityLevel;
                    var B = L(h.expirationTime <= O);
                    O = e.unstable_now(),
                    typeof B == "function" ? h.callback = B : h === n(l) && r(l),
                    b(O)
                } else
                    r(l);
                h = n(l)
            }
            if (h !== null)
                var J = !0;
            else {
                var de = n(c);
                de !== null && Y(_, de.startTime - O),
                J = !1
            }
            return J
        } finally {
            h = null,
            f = F,
            g = !1
        }
    }
    var k = !1
      , E = null
      , j = -1
      , R = 5
      , A = -1;
    function U() {
        return !(e.unstable_now() - A < R)
    }
    function D() {
        if (E !== null) {
            var P = e.unstable_now();
            A = P;
            var O = !0;
            try {
                O = E(!0, P)
            } finally {
                O ? H() : (k = !1,
                E = null)
            }
        } else
            k = !1
    }
    var H;
    if (typeof v == "function")
        H = function() {
            v(D)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var I = new MessageChannel
          , W = I.port2;
        I.port1.onmessage = D,
        H = function() {
            W.postMessage(null)
        }
    } else
        H = function() {
            w(D, 0)
        }
        ;
    function z(P) {
        E = P,
        k || (k = !0,
        H())
    }
    function Y(P, O) {
        j = w(function() {
            P(e.unstable_now())
        }, O)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(P) {
        P.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        y || g || (y = !0,
        z(C))
    }
    ,
    e.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < P ? Math.floor(1e3 / P) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(P) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var O = 3;
            break;
        default:
            O = f
        }
        var F = f;
        f = O;
        try {
            return P()
        } finally {
            f = F
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(P, O) {
        switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            P = 3
        }
        var F = f;
        f = P;
        try {
            return O()
        } finally {
            f = F
        }
    }
    ,
    e.unstable_scheduleCallback = function(P, O, F) {
        var L = e.unstable_now();
        switch (typeof F == "object" && F !== null ? (F = F.delay,
        F = typeof F == "number" && 0 < F ? L + F : L) : F = L,
        P) {
        case 1:
            var B = -1;
            break;
        case 2:
            B = 250;
            break;
        case 5:
            B = 1073741823;
            break;
        case 4:
            B = 1e4;
            break;
        default:
            B = 5e3
        }
        return B = F + B,
        P = {
            id: d++,
            callback: O,
            priorityLevel: P,
            startTime: F,
            expirationTime: B,
            sortIndex: -1
        },
        F > L ? (P.sortIndex = F,
        t(c, P),
        n(l) === null && P === n(c) && (m ? (x(j),
        j = -1) : m = !0,
        Y(_, F - L))) : (P.sortIndex = B,
        t(l, P),
        y || g || (y = !0,
        z(C))),
        P
    }
    ,
    e.unstable_shouldYield = U,
    e.unstable_wrapCallback = function(P) {
        var O = f;
        return function() {
            var F = f;
            f = O;
            try {
                return P.apply(this, arguments)
            } finally {
                f = F
            }
        }
    }
}
)(Hg);
Vg.exports = Hg;
var r1 = Vg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var s1 = p
  , xt = r1;
function T(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Wg = new Set
  , mi = {};
function ns(e, t) {
    io(e, t),
    io(e + "Capture", t)
}
function io(e, t) {
    for (mi[e] = t,
    e = 0; e < t.length; e++)
        Wg.add(t[e])
}
var Sn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , ku = Object.prototype.hasOwnProperty
  , o1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , np = {}
  , rp = {};
function i1(e) {
    return ku.call(rp, e) ? !0 : ku.call(np, e) ? !1 : o1.test(e) ? rp[e] = !0 : (np[e] = !0,
    !1)
}
function a1(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function l1(e, t, n, r) {
    if (t === null || typeof t > "u" || a1(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Ze(e, t, n, r, s, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = s,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = i
}
var $e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    $e[e] = new Ze(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    $e[t] = new Ze(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    $e[e] = new Ze(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    $e[e] = new Ze(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    $e[e] = new Ze(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    $e[e] = new Ze(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    $e[e] = new Ze(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    $e[e] = new Ze(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    $e[e] = new Ze(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var hf = /[\-:]([a-z])/g;
function pf(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(hf, pf);
    $e[t] = new Ze(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(hf, pf);
    $e[t] = new Ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(hf, pf);
    $e[t] = new Ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    $e[e] = new Ze(e,1,!1,e.toLowerCase(),null,!1,!1)
});
$e.xlinkHref = new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    $e[e] = new Ze(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function mf(e, t, n, r) {
    var s = $e.hasOwnProperty(t) ? $e[t] : null;
    (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (l1(t, n, s, r) && (n = null),
    r || s === null ? i1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName,
    r = s.attributeNamespace,
    n === null ? e.removeAttribute(t) : (s = s.type,
    n = s === 3 || s === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Tn = s1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , na = Symbol.for("react.element")
  , Cs = Symbol.for("react.portal")
  , Es = Symbol.for("react.fragment")
  , gf = Symbol.for("react.strict_mode")
  , ju = Symbol.for("react.profiler")
  , qg = Symbol.for("react.provider")
  , Kg = Symbol.for("react.context")
  , vf = Symbol.for("react.forward_ref")
  , Pu = Symbol.for("react.suspense")
  , Nu = Symbol.for("react.suspense_list")
  , yf = Symbol.for("react.memo")
  , Vn = Symbol.for("react.lazy")
  , Qg = Symbol.for("react.offscreen")
  , sp = Symbol.iterator;
function Mo(e) {
    return e === null || typeof e != "object" ? null : (e = sp && e[sp] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var be = Object.assign, Ac;
function Qo(e) {
    if (Ac === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ac = t && t[1] || ""
        }
    return `
` + Ac + e
}
var Oc = !1;
function Ic(e, t) {
    if (!e || Oc)
        return "";
    Oc = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var s = c.stack.split(`
`), o = r.stack.split(`
`), i = s.length - 1, a = o.length - 1; 1 <= i && 0 <= a && s[i] !== o[a]; )
                a--;
            for (; 1 <= i && 0 <= a; i--,
            a--)
                if (s[i] !== o[a]) {
                    if (i !== 1 || a !== 1)
                        do
                            if (i--,
                            a--,
                            0 > a || s[i] !== o[a]) {
                                var l = `
` + s[i].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= i && 0 <= a);
                    break
                }
        }
    } finally {
        Oc = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Qo(e) : ""
}
function c1(e) {
    switch (e.tag) {
    case 5:
        return Qo(e.type);
    case 16:
        return Qo("Lazy");
    case 13:
        return Qo("Suspense");
    case 19:
        return Qo("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Ic(e.type, !1),
        e;
    case 11:
        return e = Ic(e.type.render, !1),
        e;
    case 1:
        return e = Ic(e.type, !0),
        e;
    default:
        return ""
    }
}
function Tu(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Es:
        return "Fragment";
    case Cs:
        return "Portal";
    case ju:
        return "Profiler";
    case gf:
        return "StrictMode";
    case Pu:
        return "Suspense";
    case Nu:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Kg:
            return (e.displayName || "Context") + ".Consumer";
        case qg:
            return (e._context.displayName || "Context") + ".Provider";
        case vf:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case yf:
            return t = e.displayName || null,
            t !== null ? t : Tu(e.type) || "Memo";
        case Vn:
            t = e._payload,
            e = e._init;
            try {
                return Tu(e(t))
            } catch {}
        }
    return null
}
function u1(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Tu(t);
    case 8:
        return t === gf ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function gr(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Gg(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function d1(e) {
    var t = Gg(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var s = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return s.call(this)
            },
            set: function(i) {
                r = "" + i,
                o.call(this, i)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function ra(e) {
    e._valueTracker || (e._valueTracker = d1(e))
}
function Yg(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Gg(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function el(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Ru(e, t) {
    var n = t.checked;
    return be({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function op(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = gr(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Jg(e, t) {
    t = t.checked,
    t != null && mf(e, "checked", t, !1)
}
function Au(e, t) {
    Jg(e, t);
    var n = gr(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Ou(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ou(e, t.type, gr(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function ip(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Ou(e, t, n) {
    (t !== "number" || el(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Go = Array.isArray;
function Ms(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var s = 0; s < n.length; s++)
            t["$" + n[s]] = !0;
        for (n = 0; n < e.length; n++)
            s = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== s && (e[n].selected = s),
            s && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + gr(n),
        t = null,
        s = 0; s < e.length; s++) {
            if (e[s].value === n) {
                e[s].selected = !0,
                r && (e[s].defaultSelected = !0);
                return
            }
            t !== null || e[s].disabled || (t = e[s])
        }
        t !== null && (t.selected = !0)
    }
}
function Iu(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(T(91));
    return be({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function ap(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(T(92));
            if (Go(n)) {
                if (1 < n.length)
                    throw Error(T(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: gr(n)
    }
}
function Xg(e, t) {
    var n = gr(t.value)
      , r = gr(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function lp(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Zg(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Lu(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Zg(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var sa, ev = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, s)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (sa = sa || document.createElement("div"),
        sa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = sa.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function gi(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var ei = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , f1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ei).forEach(function(e) {
    f1.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        ei[t] = ei[e]
    })
});
function tv(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ei.hasOwnProperty(e) && ei[e] ? ("" + t).trim() : t + "px"
}
function nv(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , s = tv(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, s) : e[n] = s
        }
}
var h1 = be({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Mu(e, t) {
    if (t) {
        if (h1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(T(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(T(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(T(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(T(62))
    }
}
function Du(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var $u = null;
function xf(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Fu = null
  , Ds = null
  , $s = null;
function cp(e) {
    if (e = Wi(e)) {
        if (typeof Fu != "function")
            throw Error(T(280));
        var t = e.stateNode;
        t && (t = Vl(t),
        Fu(e.stateNode, e.type, t))
    }
}
function rv(e) {
    Ds ? $s ? $s.push(e) : $s = [e] : Ds = e
}
function sv() {
    if (Ds) {
        var e = Ds
          , t = $s;
        if ($s = Ds = null,
        cp(e),
        t)
            for (e = 0; e < t.length; e++)
                cp(t[e])
    }
}
function ov(e, t) {
    return e(t)
}
function iv() {}
var Lc = !1;
function av(e, t, n) {
    if (Lc)
        return e(t, n);
    Lc = !0;
    try {
        return ov(e, t, n)
    } finally {
        Lc = !1,
        (Ds !== null || $s !== null) && (iv(),
        sv())
    }
}
function vi(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Vl(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(T(231, t, typeof n));
    return n
}
var Uu = !1;
if (Sn)
    try {
        var Do = {};
        Object.defineProperty(Do, "passive", {
            get: function() {
                Uu = !0
            }
        }),
        window.addEventListener("test", Do, Do),
        window.removeEventListener("test", Do, Do)
    } catch {
        Uu = !1
    }
function p1(e, t, n, r, s, o, i, a, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (d) {
        this.onError(d)
    }
}
var ti = !1
  , tl = null
  , nl = !1
  , zu = null
  , m1 = {
    onError: function(e) {
        ti = !0,
        tl = e
    }
};
function g1(e, t, n, r, s, o, i, a, l) {
    ti = !1,
    tl = null,
    p1.apply(m1, arguments)
}
function v1(e, t, n, r, s, o, i, a, l) {
    if (g1.apply(this, arguments),
    ti) {
        if (ti) {
            var c = tl;
            ti = !1,
            tl = null
        } else
            throw Error(T(198));
        nl || (nl = !0,
        zu = c)
    }
}
function rs(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function lv(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function up(e) {
    if (rs(e) !== e)
        throw Error(T(188))
}
function y1(e) {
    var t = e.alternate;
    if (!t) {
        if (t = rs(e),
        t === null)
            throw Error(T(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var s = n.return;
        if (s === null)
            break;
        var o = s.alternate;
        if (o === null) {
            if (r = s.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (s.child === o.child) {
            for (o = s.child; o; ) {
                if (o === n)
                    return up(s),
                    e;
                if (o === r)
                    return up(s),
                    t;
                o = o.sibling
            }
            throw Error(T(188))
        }
        if (n.return !== r.return)
            n = s,
            r = o;
        else {
            for (var i = !1, a = s.child; a; ) {
                if (a === n) {
                    i = !0,
                    n = s,
                    r = o;
                    break
                }
                if (a === r) {
                    i = !0,
                    r = s,
                    n = o;
                    break
                }
                a = a.sibling
            }
            if (!i) {
                for (a = o.child; a; ) {
                    if (a === n) {
                        i = !0,
                        n = o,
                        r = s;
                        break
                    }
                    if (a === r) {
                        i = !0,
                        r = o,
                        n = s;
                        break
                    }
                    a = a.sibling
                }
                if (!i)
                    throw Error(T(189))
            }
        }
        if (n.alternate !== r)
            throw Error(T(190))
    }
    if (n.tag !== 3)
        throw Error(T(188));
    return n.stateNode.current === n ? e : t
}
function cv(e) {
    return e = y1(e),
    e !== null ? uv(e) : null
}
function uv(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = uv(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var dv = xt.unstable_scheduleCallback
  , dp = xt.unstable_cancelCallback
  , x1 = xt.unstable_shouldYield
  , w1 = xt.unstable_requestPaint
  , Ce = xt.unstable_now
  , b1 = xt.unstable_getCurrentPriorityLevel
  , wf = xt.unstable_ImmediatePriority
  , fv = xt.unstable_UserBlockingPriority
  , rl = xt.unstable_NormalPriority
  , _1 = xt.unstable_LowPriority
  , hv = xt.unstable_IdlePriority
  , Fl = null
  , ln = null;
function S1(e) {
    if (ln && typeof ln.onCommitFiberRoot == "function")
        try {
            ln.onCommitFiberRoot(Fl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Bt = Math.clz32 ? Math.clz32 : k1
  , C1 = Math.log
  , E1 = Math.LN2;
function k1(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (C1(e) / E1 | 0) | 0
}
var oa = 64
  , ia = 4194304;
function Yo(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function sl(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , s = e.suspendedLanes
      , o = e.pingedLanes
      , i = n & 268435455;
    if (i !== 0) {
        var a = i & ~s;
        a !== 0 ? r = Yo(a) : (o &= i,
        o !== 0 && (r = Yo(o)))
    } else
        i = n & ~s,
        i !== 0 ? r = Yo(i) : o !== 0 && (r = Yo(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & s) && (s = r & -r,
    o = t & -t,
    s >= o || s === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Bt(t),
            s = 1 << n,
            r |= e[n],
            t &= ~s;
    return r
}
function j1(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function P1(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var i = 31 - Bt(o)
          , a = 1 << i
          , l = s[i];
        l === -1 ? (!(a & n) || a & r) && (s[i] = j1(a, t)) : l <= t && (e.expiredLanes |= a),
        o &= ~a
    }
}
function Bu(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function pv() {
    var e = oa;
    return oa <<= 1,
    !(oa & 4194240) && (oa = 64),
    e
}
function Mc(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Vi(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Bt(t),
    e[t] = n
}
function N1(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var s = 31 - Bt(n)
          , o = 1 << s;
        t[s] = 0,
        r[s] = -1,
        e[s] = -1,
        n &= ~o
    }
}
function bf(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Bt(n)
          , s = 1 << r;
        s & t | e[r] & t && (e[r] |= t),
        n &= ~s
    }
}
var ae = 0;
function mv(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var gv, _f, vv, yv, xv, Vu = !1, aa = [], ar = null, lr = null, cr = null, yi = new Map, xi = new Map, qn = [], T1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function fp(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        ar = null;
        break;
    case "dragenter":
    case "dragleave":
        lr = null;
        break;
    case "mouseover":
    case "mouseout":
        cr = null;
        break;
    case "pointerover":
    case "pointerout":
        yi.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        xi.delete(t.pointerId)
    }
}
function $o(e, t, n, r, s, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [s]
    },
    t !== null && (t = Wi(t),
    t !== null && _f(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    s !== null && t.indexOf(s) === -1 && t.push(s),
    e)
}
function R1(e, t, n, r, s) {
    switch (t) {
    case "focusin":
        return ar = $o(ar, e, t, n, r, s),
        !0;
    case "dragenter":
        return lr = $o(lr, e, t, n, r, s),
        !0;
    case "mouseover":
        return cr = $o(cr, e, t, n, r, s),
        !0;
    case "pointerover":
        var o = s.pointerId;
        return yi.set(o, $o(yi.get(o) || null, e, t, n, r, s)),
        !0;
    case "gotpointercapture":
        return o = s.pointerId,
        xi.set(o, $o(xi.get(o) || null, e, t, n, r, s)),
        !0
    }
    return !1
}
function wv(e) {
    var t = Ir(e.target);
    if (t !== null) {
        var n = rs(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = lv(n),
                t !== null) {
                    e.blockedOn = t,
                    xv(e.priority, function() {
                        vv(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Ia(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Hu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            $u = r,
            n.target.dispatchEvent(r),
            $u = null
        } else
            return t = Wi(n),
            t !== null && _f(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function hp(e, t, n) {
    Ia(e) && n.delete(t)
}
function A1() {
    Vu = !1,
    ar !== null && Ia(ar) && (ar = null),
    lr !== null && Ia(lr) && (lr = null),
    cr !== null && Ia(cr) && (cr = null),
    yi.forEach(hp),
    xi.forEach(hp)
}
function Fo(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Vu || (Vu = !0,
    xt.unstable_scheduleCallback(xt.unstable_NormalPriority, A1)))
}
function wi(e) {
    function t(s) {
        return Fo(s, e)
    }
    if (0 < aa.length) {
        Fo(aa[0], e);
        for (var n = 1; n < aa.length; n++) {
            var r = aa[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (ar !== null && Fo(ar, e),
    lr !== null && Fo(lr, e),
    cr !== null && Fo(cr, e),
    yi.forEach(t),
    xi.forEach(t),
    n = 0; n < qn.length; n++)
        r = qn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < qn.length && (n = qn[0],
    n.blockedOn === null); )
        wv(n),
        n.blockedOn === null && qn.shift()
}
var Fs = Tn.ReactCurrentBatchConfig
  , ol = !0;
function O1(e, t, n, r) {
    var s = ae
      , o = Fs.transition;
    Fs.transition = null;
    try {
        ae = 1,
        Sf(e, t, n, r)
    } finally {
        ae = s,
        Fs.transition = o
    }
}
function I1(e, t, n, r) {
    var s = ae
      , o = Fs.transition;
    Fs.transition = null;
    try {
        ae = 4,
        Sf(e, t, n, r)
    } finally {
        ae = s,
        Fs.transition = o
    }
}
function Sf(e, t, n, r) {
    if (ol) {
        var s = Hu(e, t, n, r);
        if (s === null)
            qc(e, t, r, il, n),
            fp(e, r);
        else if (R1(s, e, t, n, r))
            r.stopPropagation();
        else if (fp(e, r),
        t & 4 && -1 < T1.indexOf(e)) {
            for (; s !== null; ) {
                var o = Wi(s);
                if (o !== null && gv(o),
                o = Hu(e, t, n, r),
                o === null && qc(e, t, r, il, n),
                o === s)
                    break;
                s = o
            }
            s !== null && r.stopPropagation()
        } else
            qc(e, t, r, null, n)
    }
}
var il = null;
function Hu(e, t, n, r) {
    if (il = null,
    e = xf(r),
    e = Ir(e),
    e !== null)
        if (t = rs(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = lv(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return il = e,
    null
}
function bv(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (b1()) {
        case wf:
            return 1;
        case fv:
            return 4;
        case rl:
        case _1:
            return 16;
        case hv:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var sr = null
  , Cf = null
  , La = null;
function _v() {
    if (La)
        return La;
    var e, t = Cf, n = t.length, r, s = "value"in sr ? sr.value : sr.textContent, o = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++)
        ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === s[o - r]; r++)
        ;
    return La = s.slice(e, 1 < r ? 1 - r : void 0)
}
function Ma(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function la() {
    return !0
}
function pp() {
    return !1
}
function _t(e) {
    function t(n, r, s, o, i) {
        this._reactName = n,
        this._targetInst = s,
        this.type = r,
        this.nativeEvent = o,
        this.target = i,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? la : pp,
        this.isPropagationStopped = pp,
        this
    }
    return be(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = la)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = la)
        },
        persist: function() {},
        isPersistent: la
    }),
    t
}
var bo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Ef = _t(bo), Hi = be({}, bo, {
    view: 0,
    detail: 0
}), L1 = _t(Hi), Dc, $c, Uo, Ul = be({}, Hi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: kf,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Uo && (Uo && e.type === "mousemove" ? (Dc = e.screenX - Uo.screenX,
        $c = e.screenY - Uo.screenY) : $c = Dc = 0,
        Uo = e),
        Dc)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : $c
    }
}), mp = _t(Ul), M1 = be({}, Ul, {
    dataTransfer: 0
}), D1 = _t(M1), $1 = be({}, Hi, {
    relatedTarget: 0
}), Fc = _t($1), F1 = be({}, bo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), U1 = _t(F1), z1 = be({}, bo, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), B1 = _t(z1), V1 = be({}, bo, {
    data: 0
}), gp = _t(V1), H1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, W1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, q1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function K1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = q1[e]) ? !!t[e] : !1
}
function kf() {
    return K1
}
var Q1 = be({}, Hi, {
    key: function(e) {
        if (e.key) {
            var t = H1[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Ma(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? W1[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: kf,
    charCode: function(e) {
        return e.type === "keypress" ? Ma(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Ma(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , G1 = _t(Q1)
  , Y1 = be({}, Ul, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , vp = _t(Y1)
  , J1 = be({}, Hi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: kf
})
  , X1 = _t(J1)
  , Z1 = be({}, bo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , e_ = _t(Z1)
  , t_ = be({}, Ul, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , n_ = _t(t_)
  , r_ = [9, 13, 27, 32]
  , jf = Sn && "CompositionEvent"in window
  , ni = null;
Sn && "documentMode"in document && (ni = document.documentMode);
var s_ = Sn && "TextEvent"in window && !ni
  , Sv = Sn && (!jf || ni && 8 < ni && 11 >= ni)
  , yp = " "
  , xp = !1;
function Cv(e, t) {
    switch (e) {
    case "keyup":
        return r_.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Ev(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var ks = !1;
function o_(e, t) {
    switch (e) {
    case "compositionend":
        return Ev(t);
    case "keypress":
        return t.which !== 32 ? null : (xp = !0,
        yp);
    case "textInput":
        return e = t.data,
        e === yp && xp ? null : e;
    default:
        return null
    }
}
function i_(e, t) {
    if (ks)
        return e === "compositionend" || !jf && Cv(e, t) ? (e = _v(),
        La = Cf = sr = null,
        ks = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Sv && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var a_ = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function wp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!a_[e.type] : t === "textarea"
}
function kv(e, t, n, r) {
    rv(r),
    t = al(t, "onChange"),
    0 < t.length && (n = new Ef("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var ri = null
  , bi = null;
function l_(e) {
    Dv(e, 0)
}
function zl(e) {
    var t = Ns(e);
    if (Yg(t))
        return e
}
function c_(e, t) {
    if (e === "change")
        return t
}
var jv = !1;
if (Sn) {
    var Uc;
    if (Sn) {
        var zc = "oninput"in document;
        if (!zc) {
            var bp = document.createElement("div");
            bp.setAttribute("oninput", "return;"),
            zc = typeof bp.oninput == "function"
        }
        Uc = zc
    } else
        Uc = !1;
    jv = Uc && (!document.documentMode || 9 < document.documentMode)
}
function _p() {
    ri && (ri.detachEvent("onpropertychange", Pv),
    bi = ri = null)
}
function Pv(e) {
    if (e.propertyName === "value" && zl(bi)) {
        var t = [];
        kv(t, bi, e, xf(e)),
        av(l_, t)
    }
}
function u_(e, t, n) {
    e === "focusin" ? (_p(),
    ri = t,
    bi = n,
    ri.attachEvent("onpropertychange", Pv)) : e === "focusout" && _p()
}
function d_(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return zl(bi)
}
function f_(e, t) {
    if (e === "click")
        return zl(t)
}
function h_(e, t) {
    if (e === "input" || e === "change")
        return zl(t)
}
function p_(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ht = typeof Object.is == "function" ? Object.is : p_;
function _i(e, t) {
    if (Ht(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var s = n[r];
        if (!ku.call(t, s) || !Ht(e[s], t[s]))
            return !1
    }
    return !0
}
function Sp(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Cp(e, t) {
    var n = Sp(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Sp(n)
    }
}
function Nv(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Nv(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Tv() {
    for (var e = window, t = el(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = el(e.document)
    }
    return t
}
function Pf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function m_(e) {
    var t = Tv()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Nv(n.ownerDocument.documentElement, n)) {
        if (r !== null && Pf(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var s = n.textContent.length
                  , o = Math.min(r.start, s);
                r = r.end === void 0 ? o : Math.min(r.end, s),
                !e.extend && o > r && (s = r,
                r = o,
                o = s),
                s = Cp(n, o);
                var i = Cp(n, r);
                s && i && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(),
                t.setStart(s.node, s.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var g_ = Sn && "documentMode"in document && 11 >= document.documentMode
  , js = null
  , Wu = null
  , si = null
  , qu = !1;
function Ep(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    qu || js == null || js !== el(r) || (r = js,
    "selectionStart"in r && Pf(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    si && _i(si, r) || (si = r,
    r = al(Wu, "onSelect"),
    0 < r.length && (t = new Ef("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = js)))
}
function ca(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Ps = {
    animationend: ca("Animation", "AnimationEnd"),
    animationiteration: ca("Animation", "AnimationIteration"),
    animationstart: ca("Animation", "AnimationStart"),
    transitionend: ca("Transition", "TransitionEnd")
}
  , Bc = {}
  , Rv = {};
Sn && (Rv = document.createElement("div").style,
"AnimationEvent"in window || (delete Ps.animationend.animation,
delete Ps.animationiteration.animation,
delete Ps.animationstart.animation),
"TransitionEvent"in window || delete Ps.transitionend.transition);
function Bl(e) {
    if (Bc[e])
        return Bc[e];
    if (!Ps[e])
        return e;
    var t = Ps[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Rv)
            return Bc[e] = t[n];
    return e
}
var Av = Bl("animationend")
  , Ov = Bl("animationiteration")
  , Iv = Bl("animationstart")
  , Lv = Bl("transitionend")
  , Mv = new Map
  , kp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function _r(e, t) {
    Mv.set(e, t),
    ns(t, [e])
}
for (var Vc = 0; Vc < kp.length; Vc++) {
    var Hc = kp[Vc]
      , v_ = Hc.toLowerCase()
      , y_ = Hc[0].toUpperCase() + Hc.slice(1);
    _r(v_, "on" + y_)
}
_r(Av, "onAnimationEnd");
_r(Ov, "onAnimationIteration");
_r(Iv, "onAnimationStart");
_r("dblclick", "onDoubleClick");
_r("focusin", "onFocus");
_r("focusout", "onBlur");
_r(Lv, "onTransitionEnd");
io("onMouseEnter", ["mouseout", "mouseover"]);
io("onMouseLeave", ["mouseout", "mouseover"]);
io("onPointerEnter", ["pointerout", "pointerover"]);
io("onPointerLeave", ["pointerout", "pointerover"]);
ns("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ns("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ns("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ns("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ns("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ns("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Jo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , x_ = new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));
function jp(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    v1(r, t, void 0, e),
    e.currentTarget = null
}
function Dv(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , s = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var a = r[i]
                      , l = a.instance
                      , c = a.currentTarget;
                    if (a = a.listener,
                    l !== o && s.isPropagationStopped())
                        break e;
                    jp(s, a, c),
                    o = l
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (a = r[i],
                    l = a.instance,
                    c = a.currentTarget,
                    a = a.listener,
                    l !== o && s.isPropagationStopped())
                        break e;
                    jp(s, a, c),
                    o = l
                }
        }
    }
    if (nl)
        throw e = zu,
        nl = !1,
        zu = null,
        e
}
function pe(e, t) {
    var n = t[Ju];
    n === void 0 && (n = t[Ju] = new Set);
    var r = e + "__bubble";
    n.has(r) || ($v(t, e, 2, !1),
    n.add(r))
}
function Wc(e, t, n) {
    var r = 0;
    t && (r |= 4),
    $v(n, e, r, t)
}
var ua = "_reactListening" + Math.random().toString(36).slice(2);
function Si(e) {
    if (!e[ua]) {
        e[ua] = !0,
        Wg.forEach(function(n) {
            n !== "selectionchange" && (x_.has(n) || Wc(n, !1, e),
            Wc(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ua] || (t[ua] = !0,
        Wc("selectionchange", !1, t))
    }
}
function $v(e, t, n, r) {
    switch (bv(t)) {
    case 1:
        var s = O1;
        break;
    case 4:
        s = I1;
        break;
    default:
        s = Sf
    }
    n = s.bind(null, t, n, e),
    s = void 0,
    !Uu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0),
    r ? s !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: s
    }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, {
        passive: s
    }) : e.addEventListener(t, n, !1)
}
function qc(e, t, n, r, s) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var a = r.stateNode.containerInfo;
                if (a === s || a.nodeType === 8 && a.parentNode === s)
                    break;
                if (i === 4)
                    for (i = r.return; i !== null; ) {
                        var l = i.tag;
                        if ((l === 3 || l === 4) && (l = i.stateNode.containerInfo,
                        l === s || l.nodeType === 8 && l.parentNode === s))
                            return;
                        i = i.return
                    }
                for (; a !== null; ) {
                    if (i = Ir(a),
                    i === null)
                        return;
                    if (l = i.tag,
                    l === 5 || l === 6) {
                        r = o = i;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    av(function() {
        var c = o
          , d = xf(n)
          , h = [];
        e: {
            var f = Mv.get(e);
            if (f !== void 0) {
                var g = Ef
                  , y = e;
                switch (e) {
                case "keypress":
                    if (Ma(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    g = G1;
                    break;
                case "focusin":
                    y = "focus",
                    g = Fc;
                    break;
                case "focusout":
                    y = "blur",
                    g = Fc;
                    break;
                case "beforeblur":
                case "afterblur":
                    g = Fc;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    g = mp;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    g = D1;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    g = X1;
                    break;
                case Av:
                case Ov:
                case Iv:
                    g = U1;
                    break;
                case Lv:
                    g = e_;
                    break;
                case "scroll":
                    g = L1;
                    break;
                case "wheel":
                    g = n_;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    g = B1;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    g = vp
                }
                var m = (t & 4) !== 0
                  , w = !m && e === "scroll"
                  , x = m ? f !== null ? f + "Capture" : null : f;
                m = [];
                for (var v = c, b; v !== null; ) {
                    b = v;
                    var _ = b.stateNode;
                    if (b.tag === 5 && _ !== null && (b = _,
                    x !== null && (_ = vi(v, x),
                    _ != null && m.push(Ci(v, _, b)))),
                    w)
                        break;
                    v = v.return
                }
                0 < m.length && (f = new g(f,y,null,n,d),
                h.push({
                    event: f,
                    listeners: m
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                g = e === "mouseout" || e === "pointerout",
                f && n !== $u && (y = n.relatedTarget || n.fromElement) && (Ir(y) || y[Cn]))
                    break e;
                if ((g || f) && (f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window,
                g ? (y = n.relatedTarget || n.toElement,
                g = c,
                y = y ? Ir(y) : null,
                y !== null && (w = rs(y),
                y !== w || y.tag !== 5 && y.tag !== 6) && (y = null)) : (g = null,
                y = c),
                g !== y)) {
                    if (m = mp,
                    _ = "onMouseLeave",
                    x = "onMouseEnter",
                    v = "mouse",
                    (e === "pointerout" || e === "pointerover") && (m = vp,
                    _ = "onPointerLeave",
                    x = "onPointerEnter",
                    v = "pointer"),
                    w = g == null ? f : Ns(g),
                    b = y == null ? f : Ns(y),
                    f = new m(_,v + "leave",g,n,d),
                    f.target = w,
                    f.relatedTarget = b,
                    _ = null,
                    Ir(d) === c && (m = new m(x,v + "enter",y,n,d),
                    m.target = b,
                    m.relatedTarget = w,
                    _ = m),
                    w = _,
                    g && y)
                        t: {
                            for (m = g,
                            x = y,
                            v = 0,
                            b = m; b; b = hs(b))
                                v++;
                            for (b = 0,
                            _ = x; _; _ = hs(_))
                                b++;
                            for (; 0 < v - b; )
                                m = hs(m),
                                v--;
                            for (; 0 < b - v; )
                                x = hs(x),
                                b--;
                            for (; v--; ) {
                                if (m === x || x !== null && m === x.alternate)
                                    break t;
                                m = hs(m),
                                x = hs(x)
                            }
                            m = null
                        }
                    else
                        m = null;
                    g !== null && Pp(h, f, g, m, !1),
                    y !== null && w !== null && Pp(h, w, y, m, !0)
                }
            }
            e: {
                if (f = c ? Ns(c) : window,
                g = f.nodeName && f.nodeName.toLowerCase(),
                g === "select" || g === "input" && f.type === "file")
                    var C = c_;
                else if (wp(f))
                    if (jv)
                        C = h_;
                    else {
                        C = d_;
                        var k = u_
                    }
                else
                    (g = f.nodeName) && g.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (C = f_);
                if (C && (C = C(e, c))) {
                    kv(h, C, n, d);
                    break e
                }
                k && k(e, f, c),
                e === "focusout" && (k = f._wrapperState) && k.controlled && f.type === "number" && Ou(f, "number", f.value)
            }
            switch (k = c ? Ns(c) : window,
            e) {
            case "focusin":
                (wp(k) || k.contentEditable === "true") && (js = k,
                Wu = c,
                si = null);
                break;
            case "focusout":
                si = Wu = js = null;
                break;
            case "mousedown":
                qu = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                qu = !1,
                Ep(h, n, d);
                break;
            case "selectionchange":
                if (g_)
                    break;
            case "keydown":
            case "keyup":
                Ep(h, n, d)
            }
            var E;
            if (jf)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var j = "onCompositionStart";
                        break e;
                    case "compositionend":
                        j = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        j = "onCompositionUpdate";
                        break e
                    }
                    j = void 0
                }
            else
                ks ? Cv(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
            j && (Sv && n.locale !== "ko" && (ks || j !== "onCompositionStart" ? j === "onCompositionEnd" && ks && (E = _v()) : (sr = d,
            Cf = "value"in sr ? sr.value : sr.textContent,
            ks = !0)),
            k = al(c, j),
            0 < k.length && (j = new gp(j,e,null,n,d),
            h.push({
                event: j,
                listeners: k
            }),
            E ? j.data = E : (E = Ev(n),
            E !== null && (j.data = E)))),
            (E = s_ ? o_(e, n) : i_(e, n)) && (c = al(c, "onBeforeInput"),
            0 < c.length && (d = new gp("onBeforeInput","beforeinput",null,n,d),
            h.push({
                event: d,
                listeners: c
            }),
            d.data = E))
        }
        Dv(h, t)
    })
}
function Ci(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function al(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var s = e
          , o = s.stateNode;
        s.tag === 5 && o !== null && (s = o,
        o = vi(e, n),
        o != null && r.unshift(Ci(e, o, s)),
        o = vi(e, t),
        o != null && r.push(Ci(e, o, s))),
        e = e.return
    }
    return r
}
function hs(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Pp(e, t, n, r, s) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , c = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && c !== null && (a = c,
        s ? (l = vi(n, o),
        l != null && i.unshift(Ci(n, l, a))) : s || (l = vi(n, o),
        l != null && i.push(Ci(n, l, a)))),
        n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var w_ = /\r\n?/g
  , b_ = /\u0000|\uFFFD/g;
function Np(e) {
    return (typeof e == "string" ? e : "" + e).replace(w_, `
`).replace(b_, "")
}
function da(e, t, n) {
    if (t = Np(t),
    Np(e) !== t && n)
        throw Error(T(425))
}
function ll() {}
var Ku = null
  , Qu = null;
function Gu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Yu = typeof setTimeout == "function" ? setTimeout : void 0
  , __ = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Tp = typeof Promise == "function" ? Promise : void 0
  , S_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof Tp < "u" ? function(e) {
    return Tp.resolve(null).then(e).catch(C_)
}
: Yu;
function C_(e) {
    setTimeout(function() {
        throw e
    })
}
function Kc(e, t) {
    var n = t
      , r = 0;
    do {
        var s = n.nextSibling;
        if (e.removeChild(n),
        s && s.nodeType === 8)
            if (n = s.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(s),
                    wi(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = s
    } while (n);
    wi(t)
}
function ur(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Rp(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var _o = Math.random().toString(36).slice(2)
  , on = "__reactFiber$" + _o
  , Ei = "__reactProps$" + _o
  , Cn = "__reactContainer$" + _o
  , Ju = "__reactEvents$" + _o
  , E_ = "__reactListeners$" + _o
  , k_ = "__reactHandles$" + _o;
function Ir(e) {
    var t = e[on];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Cn] || n[on]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Rp(e); e !== null; ) {
                    if (n = e[on])
                        return n;
                    e = Rp(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Wi(e) {
    return e = e[on] || e[Cn],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Ns(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(T(33))
}
function Vl(e) {
    return e[Ei] || null
}
var Xu = []
  , Ts = -1;
function Sr(e) {
    return {
        current: e
    }
}
function me(e) {
    0 > Ts || (e.current = Xu[Ts],
    Xu[Ts] = null,
    Ts--)
}
function ue(e, t) {
    Ts++,
    Xu[Ts] = e.current,
    e.current = t
}
var vr = {}
  , He = Sr(vr)
  , at = Sr(!1)
  , Kr = vr;
function ao(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return vr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var s = {}, o;
    for (o in n)
        s[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = s),
    s
}
function lt(e) {
    return e = e.childContextTypes,
    e != null
}
function cl() {
    me(at),
    me(He)
}
function Ap(e, t, n) {
    if (He.current !== vr)
        throw Error(T(168));
    ue(He, t),
    ue(at, n)
}
function Fv(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var s in r)
        if (!(s in t))
            throw Error(T(108, u1(e) || "Unknown", s));
    return be({}, n, r)
}
function ul(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || vr,
    Kr = He.current,
    ue(He, e),
    ue(at, at.current),
    !0
}
function Op(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(T(169));
    n ? (e = Fv(e, t, Kr),
    r.__reactInternalMemoizedMergedChildContext = e,
    me(at),
    me(He),
    ue(He, e)) : me(at),
    ue(at, n)
}
var vn = null
  , Hl = !1
  , Qc = !1;
function Uv(e) {
    vn === null ? vn = [e] : vn.push(e)
}
function j_(e) {
    Hl = !0,
    Uv(e)
}
function Cr() {
    if (!Qc && vn !== null) {
        Qc = !0;
        var e = 0
          , t = ae;
        try {
            var n = vn;
            for (ae = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            vn = null,
            Hl = !1
        } catch (s) {
            throw vn !== null && (vn = vn.slice(e + 1)),
            dv(wf, Cr),
            s
        } finally {
            ae = t,
            Qc = !1
        }
    }
    return null
}
var Rs = []
  , As = 0
  , dl = null
  , fl = 0
  , Et = []
  , kt = 0
  , Qr = null
  , xn = 1
  , wn = "";
function Tr(e, t) {
    Rs[As++] = fl,
    Rs[As++] = dl,
    dl = e,
    fl = t
}
function zv(e, t, n) {
    Et[kt++] = xn,
    Et[kt++] = wn,
    Et[kt++] = Qr,
    Qr = e;
    var r = xn;
    e = wn;
    var s = 32 - Bt(r) - 1;
    r &= ~(1 << s),
    n += 1;
    var o = 32 - Bt(t) + s;
    if (30 < o) {
        var i = s - s % 5;
        o = (r & (1 << i) - 1).toString(32),
        r >>= i,
        s -= i,
        xn = 1 << 32 - Bt(t) + s | n << s | r,
        wn = o + e
    } else
        xn = 1 << o | n << s | r,
        wn = e
}
function Nf(e) {
    e.return !== null && (Tr(e, 1),
    zv(e, 1, 0))
}
function Tf(e) {
    for (; e === dl; )
        dl = Rs[--As],
        Rs[As] = null,
        fl = Rs[--As],
        Rs[As] = null;
    for (; e === Qr; )
        Qr = Et[--kt],
        Et[kt] = null,
        wn = Et[--kt],
        Et[kt] = null,
        xn = Et[--kt],
        Et[kt] = null
}
var vt = null
  , gt = null
  , ge = !1
  , Ut = null;
function Bv(e, t) {
    var n = Nt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Ip(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        vt = e,
        gt = ur(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        vt = e,
        gt = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Qr !== null ? {
            id: xn,
            overflow: wn
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Nt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        vt = e,
        gt = null,
        !0) : !1;
    default:
        return !1
    }
}
function Zu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ed(e) {
    if (ge) {
        var t = gt;
        if (t) {
            var n = t;
            if (!Ip(e, t)) {
                if (Zu(e))
                    throw Error(T(418));
                t = ur(n.nextSibling);
                var r = vt;
                t && Ip(e, t) ? Bv(r, n) : (e.flags = e.flags & -4097 | 2,
                ge = !1,
                vt = e)
            }
        } else {
            if (Zu(e))
                throw Error(T(418));
            e.flags = e.flags & -4097 | 2,
            ge = !1,
            vt = e
        }
    }
}
function Lp(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    vt = e
}
function fa(e) {
    if (e !== vt)
        return !1;
    if (!ge)
        return Lp(e),
        ge = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Gu(e.type, e.memoizedProps)),
    t && (t = gt)) {
        if (Zu(e))
            throw Vv(),
            Error(T(418));
        for (; t; )
            Bv(e, t),
            t = ur(t.nextSibling)
    }
    if (Lp(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(T(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            gt = ur(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            gt = null
        }
    } else
        gt = vt ? ur(e.stateNode.nextSibling) : null;
    return !0
}
function Vv() {
    for (var e = gt; e; )
        e = ur(e.nextSibling)
}
function lo() {
    gt = vt = null,
    ge = !1
}
function Rf(e) {
    Ut === null ? Ut = [e] : Ut.push(e)
}
var P_ = Tn.ReactCurrentBatchConfig;
function zo(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(T(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(T(147, e));
            var s = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
                var a = s.refs;
                i === null ? delete a[o] : a[o] = i
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(T(284));
        if (!n._owner)
            throw Error(T(290, e))
    }
    return e
}
function ha(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(T(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Mp(e) {
    var t = e._init;
    return t(e._payload)
}
function Hv(e) {
    function t(x, v) {
        if (e) {
            var b = x.deletions;
            b === null ? (x.deletions = [v],
            x.flags |= 16) : b.push(v)
        }
    }
    function n(x, v) {
        if (!e)
            return null;
        for (; v !== null; )
            t(x, v),
            v = v.sibling;
        return null
    }
    function r(x, v) {
        for (x = new Map; v !== null; )
            v.key !== null ? x.set(v.key, v) : x.set(v.index, v),
            v = v.sibling;
        return x
    }
    function s(x, v) {
        return x = pr(x, v),
        x.index = 0,
        x.sibling = null,
        x
    }
    function o(x, v, b) {
        return x.index = b,
        e ? (b = x.alternate,
        b !== null ? (b = b.index,
        b < v ? (x.flags |= 2,
        v) : b) : (x.flags |= 2,
        v)) : (x.flags |= 1048576,
        v)
    }
    function i(x) {
        return e && x.alternate === null && (x.flags |= 2),
        x
    }
    function a(x, v, b, _) {
        return v === null || v.tag !== 6 ? (v = tu(b, x.mode, _),
        v.return = x,
        v) : (v = s(v, b),
        v.return = x,
        v)
    }
    function l(x, v, b, _) {
        var C = b.type;
        return C === Es ? d(x, v, b.props.children, _, b.key) : v !== null && (v.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Vn && Mp(C) === v.type) ? (_ = s(v, b.props),
        _.ref = zo(x, v, b),
        _.return = x,
        _) : (_ = Va(b.type, b.key, b.props, null, x.mode, _),
        _.ref = zo(x, v, b),
        _.return = x,
        _)
    }
    function c(x, v, b, _) {
        return v === null || v.tag !== 4 || v.stateNode.containerInfo !== b.containerInfo || v.stateNode.implementation !== b.implementation ? (v = nu(b, x.mode, _),
        v.return = x,
        v) : (v = s(v, b.children || []),
        v.return = x,
        v)
    }
    function d(x, v, b, _, C) {
        return v === null || v.tag !== 7 ? (v = Wr(b, x.mode, _, C),
        v.return = x,
        v) : (v = s(v, b),
        v.return = x,
        v)
    }
    function h(x, v, b) {
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return v = tu("" + v, x.mode, b),
            v.return = x,
            v;
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case na:
                return b = Va(v.type, v.key, v.props, null, x.mode, b),
                b.ref = zo(x, null, v),
                b.return = x,
                b;
            case Cs:
                return v = nu(v, x.mode, b),
                v.return = x,
                v;
            case Vn:
                var _ = v._init;
                return h(x, _(v._payload), b)
            }
            if (Go(v) || Mo(v))
                return v = Wr(v, x.mode, b, null),
                v.return = x,
                v;
            ha(x, v)
        }
        return null
    }
    function f(x, v, b, _) {
        var C = v !== null ? v.key : null;
        if (typeof b == "string" && b !== "" || typeof b == "number")
            return C !== null ? null : a(x, v, "" + b, _);
        if (typeof b == "object" && b !== null) {
            switch (b.$$typeof) {
            case na:
                return b.key === C ? l(x, v, b, _) : null;
            case Cs:
                return b.key === C ? c(x, v, b, _) : null;
            case Vn:
                return C = b._init,
                f(x, v, C(b._payload), _)
            }
            if (Go(b) || Mo(b))
                return C !== null ? null : d(x, v, b, _, null);
            ha(x, b)
        }
        return null
    }
    function g(x, v, b, _, C) {
        if (typeof _ == "string" && _ !== "" || typeof _ == "number")
            return x = x.get(b) || null,
            a(v, x, "" + _, C);
        if (typeof _ == "object" && _ !== null) {
            switch (_.$$typeof) {
            case na:
                return x = x.get(_.key === null ? b : _.key) || null,
                l(v, x, _, C);
            case Cs:
                return x = x.get(_.key === null ? b : _.key) || null,
                c(v, x, _, C);
            case Vn:
                var k = _._init;
                return g(x, v, b, k(_._payload), C)
            }
            if (Go(_) || Mo(_))
                return x = x.get(b) || null,
                d(v, x, _, C, null);
            ha(v, _)
        }
        return null
    }
    function y(x, v, b, _) {
        for (var C = null, k = null, E = v, j = v = 0, R = null; E !== null && j < b.length; j++) {
            E.index > j ? (R = E,
            E = null) : R = E.sibling;
            var A = f(x, E, b[j], _);
            if (A === null) {
                E === null && (E = R);
                break
            }
            e && E && A.alternate === null && t(x, E),
            v = o(A, v, j),
            k === null ? C = A : k.sibling = A,
            k = A,
            E = R
        }
        if (j === b.length)
            return n(x, E),
            ge && Tr(x, j),
            C;
        if (E === null) {
            for (; j < b.length; j++)
                E = h(x, b[j], _),
                E !== null && (v = o(E, v, j),
                k === null ? C = E : k.sibling = E,
                k = E);
            return ge && Tr(x, j),
            C
        }
        for (E = r(x, E); j < b.length; j++)
            R = g(E, x, j, b[j], _),
            R !== null && (e && R.alternate !== null && E.delete(R.key === null ? j : R.key),
            v = o(R, v, j),
            k === null ? C = R : k.sibling = R,
            k = R);
        return e && E.forEach(function(U) {
            return t(x, U)
        }),
        ge && Tr(x, j),
        C
    }
    function m(x, v, b, _) {
        var C = Mo(b);
        if (typeof C != "function")
            throw Error(T(150));
        if (b = C.call(b),
        b == null)
            throw Error(T(151));
        for (var k = C = null, E = v, j = v = 0, R = null, A = b.next(); E !== null && !A.done; j++,
        A = b.next()) {
            E.index > j ? (R = E,
            E = null) : R = E.sibling;
            var U = f(x, E, A.value, _);
            if (U === null) {
                E === null && (E = R);
                break
            }
            e && E && U.alternate === null && t(x, E),
            v = o(U, v, j),
            k === null ? C = U : k.sibling = U,
            k = U,
            E = R
        }
        if (A.done)
            return n(x, E),
            ge && Tr(x, j),
            C;
        if (E === null) {
            for (; !A.done; j++,
            A = b.next())
                A = h(x, A.value, _),
                A !== null && (v = o(A, v, j),
                k === null ? C = A : k.sibling = A,
                k = A);
            return ge && Tr(x, j),
            C
        }
        for (E = r(x, E); !A.done; j++,
        A = b.next())
            A = g(E, x, j, A.value, _),
            A !== null && (e && A.alternate !== null && E.delete(A.key === null ? j : A.key),
            v = o(A, v, j),
            k === null ? C = A : k.sibling = A,
            k = A);
        return e && E.forEach(function(D) {
            return t(x, D)
        }),
        ge && Tr(x, j),
        C
    }
    function w(x, v, b, _) {
        if (typeof b == "object" && b !== null && b.type === Es && b.key === null && (b = b.props.children),
        typeof b == "object" && b !== null) {
            switch (b.$$typeof) {
            case na:
                e: {
                    for (var C = b.key, k = v; k !== null; ) {
                        if (k.key === C) {
                            if (C = b.type,
                            C === Es) {
                                if (k.tag === 7) {
                                    n(x, k.sibling),
                                    v = s(k, b.props.children),
                                    v.return = x,
                                    x = v;
                                    break e
                                }
                            } else if (k.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Vn && Mp(C) === k.type) {
                                n(x, k.sibling),
                                v = s(k, b.props),
                                v.ref = zo(x, k, b),
                                v.return = x,
                                x = v;
                                break e
                            }
                            n(x, k);
                            break
                        } else
                            t(x, k);
                        k = k.sibling
                    }
                    b.type === Es ? (v = Wr(b.props.children, x.mode, _, b.key),
                    v.return = x,
                    x = v) : (_ = Va(b.type, b.key, b.props, null, x.mode, _),
                    _.ref = zo(x, v, b),
                    _.return = x,
                    x = _)
                }
                return i(x);
            case Cs:
                e: {
                    for (k = b.key; v !== null; ) {
                        if (v.key === k)
                            if (v.tag === 4 && v.stateNode.containerInfo === b.containerInfo && v.stateNode.implementation === b.implementation) {
                                n(x, v.sibling),
                                v = s(v, b.children || []),
                                v.return = x,
                                x = v;
                                break e
                            } else {
                                n(x, v);
                                break
                            }
                        else
                            t(x, v);
                        v = v.sibling
                    }
                    v = nu(b, x.mode, _),
                    v.return = x,
                    x = v
                }
                return i(x);
            case Vn:
                return k = b._init,
                w(x, v, k(b._payload), _)
            }
            if (Go(b))
                return y(x, v, b, _);
            if (Mo(b))
                return m(x, v, b, _);
            ha(x, b)
        }
        return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b,
        v !== null && v.tag === 6 ? (n(x, v.sibling),
        v = s(v, b),
        v.return = x,
        x = v) : (n(x, v),
        v = tu(b, x.mode, _),
        v.return = x,
        x = v),
        i(x)) : n(x, v)
    }
    return w
}
var co = Hv(!0)
  , Wv = Hv(!1)
  , hl = Sr(null)
  , pl = null
  , Os = null
  , Af = null;
function Of() {
    Af = Os = pl = null
}
function If(e) {
    var t = hl.current;
    me(hl),
    e._currentValue = t
}
function td(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Us(e, t) {
    pl = e,
    Af = Os = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (it = !0),
    e.firstContext = null)
}
function At(e) {
    var t = e._currentValue;
    if (Af !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Os === null) {
            if (pl === null)
                throw Error(T(308));
            Os = e,
            pl.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Os = Os.next = e;
    return t
}
var Lr = null;
function Lf(e) {
    Lr === null ? Lr = [e] : Lr.push(e)
}
function qv(e, t, n, r) {
    var s = t.interleaved;
    return s === null ? (n.next = n,
    Lf(t)) : (n.next = s.next,
    s.next = n),
    t.interleaved = n,
    En(e, r)
}
function En(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Hn = !1;
function Mf(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Kv(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function bn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function dr(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    re & 2) {
        var s = r.pending;
        return s === null ? t.next = t : (t.next = s.next,
        s.next = t),
        r.pending = t,
        En(e, n)
    }
    return s = r.interleaved,
    s === null ? (t.next = t,
    Lf(r)) : (t.next = s.next,
    s.next = t),
    r.interleaved = t,
    En(e, n)
}
function Da(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        bf(e, n)
    }
}
function Dp(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var s = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? s = o = i : o = o.next = i,
                n = n.next
            } while (n !== null);
            o === null ? s = o = t : o = o.next = t
        } else
            s = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function ml(e, t, n, r) {
    var s = e.updateQueue;
    Hn = !1;
    var o = s.firstBaseUpdate
      , i = s.lastBaseUpdate
      , a = s.shared.pending;
    if (a !== null) {
        s.shared.pending = null;
        var l = a
          , c = l.next;
        l.next = null,
        i === null ? o = c : i.next = c,
        i = l;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        a = d.lastBaseUpdate,
        a !== i && (a === null ? d.firstBaseUpdate = c : a.next = c,
        d.lastBaseUpdate = l))
    }
    if (o !== null) {
        var h = s.baseState;
        i = 0,
        d = c = l = null,
        a = o;
        do {
            var f = a.lane
              , g = a.eventTime;
            if ((r & f) === f) {
                d !== null && (d = d.next = {
                    eventTime: g,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var y = e
                      , m = a;
                    switch (f = t,
                    g = n,
                    m.tag) {
                    case 1:
                        if (y = m.payload,
                        typeof y == "function") {
                            h = y.call(g, h, f);
                            break e
                        }
                        h = y;
                        break e;
                    case 3:
                        y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = m.payload,
                        f = typeof y == "function" ? y.call(g, h, f) : y,
                        f == null)
                            break e;
                        h = be({}, h, f);
                        break e;
                    case 2:
                        Hn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                f = s.effects,
                f === null ? s.effects = [a] : f.push(a))
            } else
                g = {
                    eventTime: g,
                    lane: f,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                d === null ? (c = d = g,
                l = h) : d = d.next = g,
                i |= f;
            if (a = a.next,
            a === null) {
                if (a = s.shared.pending,
                a === null)
                    break;
                f = a,
                a = f.next,
                f.next = null,
                s.lastBaseUpdate = f,
                s.shared.pending = null
            }
        } while (!0);
        if (d === null && (l = h),
        s.baseState = l,
        s.firstBaseUpdate = c,
        s.lastBaseUpdate = d,
        t = s.shared.interleaved,
        t !== null) {
            s = t;
            do
                i |= s.lane,
                s = s.next;
            while (s !== t)
        } else
            o === null && (s.shared.lanes = 0);
        Yr |= i,
        e.lanes = i,
        e.memoizedState = h
    }
}
function $p(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , s = r.callback;
            if (s !== null) {
                if (r.callback = null,
                r = n,
                typeof s != "function")
                    throw Error(T(191, s));
                s.call(r)
            }
        }
}
var qi = {}
  , cn = Sr(qi)
  , ki = Sr(qi)
  , ji = Sr(qi);
function Mr(e) {
    if (e === qi)
        throw Error(T(174));
    return e
}
function Df(e, t) {
    switch (ue(ji, t),
    ue(ki, e),
    ue(cn, qi),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Lu(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Lu(t, e)
    }
    me(cn),
    ue(cn, t)
}
function uo() {
    me(cn),
    me(ki),
    me(ji)
}
function Qv(e) {
    Mr(ji.current);
    var t = Mr(cn.current)
      , n = Lu(t, e.type);
    t !== n && (ue(ki, e),
    ue(cn, n))
}
function $f(e) {
    ki.current === e && (me(cn),
    me(ki))
}
var ye = Sr(0);
function gl(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Gc = [];
function Ff() {
    for (var e = 0; e < Gc.length; e++)
        Gc[e]._workInProgressVersionPrimary = null;
    Gc.length = 0
}
var $a = Tn.ReactCurrentDispatcher
  , Yc = Tn.ReactCurrentBatchConfig
  , Gr = 0
  , xe = null
  , je = null
  , Ae = null
  , vl = !1
  , oi = !1
  , Pi = 0
  , N_ = 0;
function Fe() {
    throw Error(T(321))
}
function Uf(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ht(e[n], t[n]))
            return !1;
    return !0
}
function zf(e, t, n, r, s, o) {
    if (Gr = o,
    xe = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    $a.current = e === null || e.memoizedState === null ? O_ : I_,
    e = n(r, s),
    oi) {
        o = 0;
        do {
            if (oi = !1,
            Pi = 0,
            25 <= o)
                throw Error(T(301));
            o += 1,
            Ae = je = null,
            t.updateQueue = null,
            $a.current = L_,
            e = n(r, s)
        } while (oi)
    }
    if ($a.current = yl,
    t = je !== null && je.next !== null,
    Gr = 0,
    Ae = je = xe = null,
    vl = !1,
    t)
        throw Error(T(300));
    return e
}
function Bf() {
    var e = Pi !== 0;
    return Pi = 0,
    e
}
function en() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ae === null ? xe.memoizedState = Ae = e : Ae = Ae.next = e,
    Ae
}
function Ot() {
    if (je === null) {
        var e = xe.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = je.next;
    var t = Ae === null ? xe.memoizedState : Ae.next;
    if (t !== null)
        Ae = t,
        je = e;
    else {
        if (e === null)
            throw Error(T(310));
        je = e,
        e = {
            memoizedState: je.memoizedState,
            baseState: je.baseState,
            baseQueue: je.baseQueue,
            queue: je.queue,
            next: null
        },
        Ae === null ? xe.memoizedState = Ae = e : Ae = Ae.next = e
    }
    return Ae
}
function Ni(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Jc(e) {
    var t = Ot()
      , n = t.queue;
    if (n === null)
        throw Error(T(311));
    n.lastRenderedReducer = e;
    var r = je
      , s = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (s !== null) {
            var i = s.next;
            s.next = o.next,
            o.next = i
        }
        r.baseQueue = s = o,
        n.pending = null
    }
    if (s !== null) {
        o = s.next,
        r = r.baseState;
        var a = i = null
          , l = null
          , c = o;
        do {
            var d = c.lane;
            if ((Gr & d) === d)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var h = {
                    lane: d,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                l === null ? (a = l = h,
                i = r) : l = l.next = h,
                xe.lanes |= d,
                Yr |= d
            }
            c = c.next
        } while (c !== null && c !== o);
        l === null ? i = r : l.next = a,
        Ht(r, t.memoizedState) || (it = !0),
        t.memoizedState = r,
        t.baseState = i,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        s = e;
        do
            o = s.lane,
            xe.lanes |= o,
            Yr |= o,
            s = s.next;
        while (s !== e)
    } else
        s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Xc(e) {
    var t = Ot()
      , n = t.queue;
    if (n === null)
        throw Error(T(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , s = n.pending
      , o = t.memoizedState;
    if (s !== null) {
        n.pending = null;
        var i = s = s.next;
        do
            o = e(o, i.action),
            i = i.next;
        while (i !== s);
        Ht(o, t.memoizedState) || (it = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function Gv() {}
function Yv(e, t) {
    var n = xe
      , r = Ot()
      , s = t()
      , o = !Ht(r.memoizedState, s);
    if (o && (r.memoizedState = s,
    it = !0),
    r = r.queue,
    Vf(Zv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || Ae !== null && Ae.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Ti(9, Xv.bind(null, n, r, s, t), void 0, null),
        Oe === null)
            throw Error(T(349));
        Gr & 30 || Jv(n, t, s)
    }
    return s
}
function Jv(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = xe.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    xe.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Xv(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    ey(t) && ty(e)
}
function Zv(e, t, n) {
    return n(function() {
        ey(t) && ty(e)
    })
}
function ey(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ht(e, n)
    } catch {
        return !0
    }
}
function ty(e) {
    var t = En(e, 1);
    t !== null && Vt(t, e, 1, -1)
}
function Fp(e) {
    var t = en();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ni,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = A_.bind(null, xe, e),
    [t.memoizedState, e]
}
function Ti(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = xe.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    xe.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function ny() {
    return Ot().memoizedState
}
function Fa(e, t, n, r) {
    var s = en();
    xe.flags |= e,
    s.memoizedState = Ti(1 | t, n, void 0, r === void 0 ? null : r)
}
function Wl(e, t, n, r) {
    var s = Ot();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (je !== null) {
        var i = je.memoizedState;
        if (o = i.destroy,
        r !== null && Uf(r, i.deps)) {
            s.memoizedState = Ti(t, n, o, r);
            return
        }
    }
    xe.flags |= e,
    s.memoizedState = Ti(1 | t, n, o, r)
}
function Up(e, t) {
    return Fa(8390656, 8, e, t)
}
function Vf(e, t) {
    return Wl(2048, 8, e, t)
}
function ry(e, t) {
    return Wl(4, 2, e, t)
}
function sy(e, t) {
    return Wl(4, 4, e, t)
}
function oy(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function iy(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Wl(4, 4, oy.bind(null, t, e), n)
}
function Hf() {}
function ay(e, t) {
    var n = Ot();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Uf(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function ly(e, t) {
    var n = Ot();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Uf(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function cy(e, t, n) {
    return Gr & 21 ? (Ht(n, t) || (n = pv(),
    xe.lanes |= n,
    Yr |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    it = !0),
    e.memoizedState = n)
}
function T_(e, t) {
    var n = ae;
    ae = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Yc.transition;
    Yc.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ae = n,
        Yc.transition = r
    }
}
function uy() {
    return Ot().memoizedState
}
function R_(e, t, n) {
    var r = hr(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    dy(e))
        fy(t, n);
    else if (n = qv(e, t, n, r),
    n !== null) {
        var s = Je();
        Vt(n, e, r, s),
        hy(n, t, r)
    }
}
function A_(e, t, n) {
    var r = hr(e)
      , s = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (dy(e))
        fy(t, s);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var i = t.lastRenderedState
                  , a = o(i, n);
                if (s.hasEagerState = !0,
                s.eagerState = a,
                Ht(a, i)) {
                    var l = t.interleaved;
                    l === null ? (s.next = s,
                    Lf(t)) : (s.next = l.next,
                    l.next = s),
                    t.interleaved = s;
                    return
                }
            } catch {} finally {}
        n = qv(e, t, s, r),
        n !== null && (s = Je(),
        Vt(n, e, r, s),
        hy(n, t, r))
    }
}
function dy(e) {
    var t = e.alternate;
    return e === xe || t !== null && t === xe
}
function fy(e, t) {
    oi = vl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function hy(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        bf(e, n)
    }
}
var yl = {
    readContext: At,
    useCallback: Fe,
    useContext: Fe,
    useEffect: Fe,
    useImperativeHandle: Fe,
    useInsertionEffect: Fe,
    useLayoutEffect: Fe,
    useMemo: Fe,
    useReducer: Fe,
    useRef: Fe,
    useState: Fe,
    useDebugValue: Fe,
    useDeferredValue: Fe,
    useTransition: Fe,
    useMutableSource: Fe,
    useSyncExternalStore: Fe,
    useId: Fe,
    unstable_isNewReconciler: !1
}
  , O_ = {
    readContext: At,
    useCallback: function(e, t) {
        return en().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: At,
    useEffect: Up,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Fa(4194308, 4, oy.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Fa(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Fa(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = en();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = en();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = R_.bind(null, xe, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = en();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Fp,
    useDebugValue: Hf,
    useDeferredValue: function(e) {
        return en().memoizedState = e
    },
    useTransition: function() {
        var e = Fp(!1)
          , t = e[0];
        return e = T_.bind(null, e[1]),
        en().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = xe
          , s = en();
        if (ge) {
            if (n === void 0)
                throw Error(T(407));
            n = n()
        } else {
            if (n = t(),
            Oe === null)
                throw Error(T(349));
            Gr & 30 || Jv(r, t, n)
        }
        s.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return s.queue = o,
        Up(Zv.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        Ti(9, Xv.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = en()
          , t = Oe.identifierPrefix;
        if (ge) {
            var n = wn
              , r = xn;
            n = (r & ~(1 << 32 - Bt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Pi++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = N_++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , I_ = {
    readContext: At,
    useCallback: ay,
    useContext: At,
    useEffect: Vf,
    useImperativeHandle: iy,
    useInsertionEffect: ry,
    useLayoutEffect: sy,
    useMemo: ly,
    useReducer: Jc,
    useRef: ny,
    useState: function() {
        return Jc(Ni)
    },
    useDebugValue: Hf,
    useDeferredValue: function(e) {
        var t = Ot();
        return cy(t, je.memoizedState, e)
    },
    useTransition: function() {
        var e = Jc(Ni)[0]
          , t = Ot().memoizedState;
        return [e, t]
    },
    useMutableSource: Gv,
    useSyncExternalStore: Yv,
    useId: uy,
    unstable_isNewReconciler: !1
}
  , L_ = {
    readContext: At,
    useCallback: ay,
    useContext: At,
    useEffect: Vf,
    useImperativeHandle: iy,
    useInsertionEffect: ry,
    useLayoutEffect: sy,
    useMemo: ly,
    useReducer: Xc,
    useRef: ny,
    useState: function() {
        return Xc(Ni)
    },
    useDebugValue: Hf,
    useDeferredValue: function(e) {
        var t = Ot();
        return je === null ? t.memoizedState = e : cy(t, je.memoizedState, e)
    },
    useTransition: function() {
        var e = Xc(Ni)[0]
          , t = Ot().memoizedState;
        return [e, t]
    },
    useMutableSource: Gv,
    useSyncExternalStore: Yv,
    useId: uy,
    unstable_isNewReconciler: !1
};
function Mt(e, t) {
    if (e && e.defaultProps) {
        t = be({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function nd(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : be({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var ql = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? rs(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Je()
          , s = hr(e)
          , o = bn(r, s);
        o.payload = t,
        n != null && (o.callback = n),
        t = dr(e, o, s),
        t !== null && (Vt(t, e, s, r),
        Da(t, e, s))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Je()
          , s = hr(e)
          , o = bn(r, s);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = dr(e, o, s),
        t !== null && (Vt(t, e, s, r),
        Da(t, e, s))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Je()
          , r = hr(e)
          , s = bn(n, r);
        s.tag = 2,
        t != null && (s.callback = t),
        t = dr(e, s, r),
        t !== null && (Vt(t, e, r, n),
        Da(t, e, r))
    }
};
function zp(e, t, n, r, s, o, i) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !_i(n, r) || !_i(s, o) : !0
}
function py(e, t, n) {
    var r = !1
      , s = vr
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = At(o) : (s = lt(t) ? Kr : He.current,
    r = t.contextTypes,
    o = (r = r != null) ? ao(e, s) : vr),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = ql,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = s,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function Bp(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ql.enqueueReplaceState(t, t.state, null)
}
function rd(e, t, n, r) {
    var s = e.stateNode;
    s.props = n,
    s.state = e.memoizedState,
    s.refs = {},
    Mf(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? s.context = At(o) : (o = lt(t) ? Kr : He.current,
    s.context = ao(e, o)),
    s.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (nd(e, t, o, n),
    s.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state,
    typeof s.componentWillMount == "function" && s.componentWillMount(),
    typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
    t !== s.state && ql.enqueueReplaceState(s, s.state, null),
    ml(e, n, s, r),
    s.state = e.memoizedState),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308)
}
function fo(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += c1(r),
            r = r.return;
        while (r);
        var s = n
    } catch (o) {
        s = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: s,
        digest: null
    }
}
function Zc(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function sd(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var M_ = typeof WeakMap == "function" ? WeakMap : Map;
function my(e, t, n) {
    n = bn(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        wl || (wl = !0,
        pd = r),
        sd(e, t)
    }
    ,
    n
}
function gy(e, t, n) {
    n = bn(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var s = t.value;
        n.payload = function() {
            return r(s)
        }
        ,
        n.callback = function() {
            sd(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        sd(e, t),
        typeof r != "function" && (fr === null ? fr = new Set([this]) : fr.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }
    ),
    n
}
function Vp(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new M_;
        var s = new Set;
        r.set(t, s)
    } else
        s = r.get(t),
        s === void 0 && (s = new Set,
        r.set(t, s));
    s.has(n) || (s.add(n),
    e = Y_.bind(null, e, t, n),
    t.then(e, e))
}
function Hp(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Wp(e, t, n, r, s) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = s,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = bn(-1, 1),
    t.tag = 2,
    dr(n, t, 1))),
    n.lanes |= 1),
    e)
}
var D_ = Tn.ReactCurrentOwner
  , it = !1;
function Ke(e, t, n, r) {
    t.child = e === null ? Wv(t, null, n, r) : co(t, e.child, n, r)
}
function qp(e, t, n, r, s) {
    n = n.render;
    var o = t.ref;
    return Us(t, s),
    r = zf(e, t, n, r, o, s),
    n = Bf(),
    e !== null && !it ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~s,
    kn(e, t, s)) : (ge && n && Nf(t),
    t.flags |= 1,
    Ke(e, t, r, s),
    t.child)
}
function Kp(e, t, n, r, s) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !Xf(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        vy(e, t, o, r, s)) : (e = Va(n.type, null, r, t, t.mode, s),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & s)) {
        var i = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : _i,
        n(i, r) && e.ref === t.ref)
            return kn(e, t, s)
    }
    return t.flags |= 1,
    e = pr(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function vy(e, t, n, r, s) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (_i(o, r) && e.ref === t.ref)
            if (it = !1,
            t.pendingProps = r = o,
            (e.lanes & s) !== 0)
                e.flags & 131072 && (it = !0);
            else
                return t.lanes = e.lanes,
                kn(e, t, s)
    }
    return od(e, t, n, r, s)
}
function yy(e, t, n) {
    var r = t.pendingProps
      , s = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ue(Ls, pt),
            pt |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ue(Ls, pt),
                pt |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            ue(Ls, pt),
            pt |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        ue(Ls, pt),
        pt |= r;
    return Ke(e, t, s, n),
    t.child
}
function xy(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function od(e, t, n, r, s) {
    var o = lt(n) ? Kr : He.current;
    return o = ao(t, o),
    Us(t, s),
    n = zf(e, t, n, r, o, s),
    r = Bf(),
    e !== null && !it ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~s,
    kn(e, t, s)) : (ge && r && Nf(t),
    t.flags |= 1,
    Ke(e, t, n, s),
    t.child)
}
function Qp(e, t, n, r, s) {
    if (lt(n)) {
        var o = !0;
        ul(t)
    } else
        o = !1;
    if (Us(t, s),
    t.stateNode === null)
        Ua(e, t),
        py(t, n, r),
        rd(t, n, r, s),
        r = !0;
    else if (e === null) {
        var i = t.stateNode
          , a = t.memoizedProps;
        i.props = a;
        var l = i.context
          , c = n.contextType;
        typeof c == "object" && c !== null ? c = At(c) : (c = lt(n) ? Kr : He.current,
        c = ao(t, c));
        var d = n.getDerivedStateFromProps
          , h = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || l !== c) && Bp(t, i, r, c),
        Hn = !1;
        var f = t.memoizedState;
        i.state = f,
        ml(t, r, i, s),
        l = t.memoizedState,
        a !== r || f !== l || at.current || Hn ? (typeof d == "function" && (nd(t, n, d, r),
        l = t.memoizedState),
        (a = Hn || zp(t, n, a, r, f, l, c)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        i.props = r,
        i.state = l,
        i.context = c,
        r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        i = t.stateNode,
        Kv(e, t),
        a = t.memoizedProps,
        c = t.type === t.elementType ? a : Mt(t.type, a),
        i.props = c,
        h = t.pendingProps,
        f = i.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = At(l) : (l = lt(n) ? Kr : He.current,
        l = ao(t, l));
        var g = n.getDerivedStateFromProps;
        (d = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== h || f !== l) && Bp(t, i, r, l),
        Hn = !1,
        f = t.memoizedState,
        i.state = f,
        ml(t, r, i, s);
        var y = t.memoizedState;
        a !== h || f !== y || at.current || Hn ? (typeof g == "function" && (nd(t, n, g, r),
        y = t.memoizedState),
        (c = Hn || zp(t, n, c, r, f, y, l) || !1) ? (d || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, y, l),
        typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, y, l)),
        typeof i.componentDidUpdate == "function" && (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = y),
        i.props = r,
        i.state = y,
        i.context = l,
        r = c) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return id(e, t, n, r, o, s)
}
function id(e, t, n, r, s, o) {
    xy(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i)
        return s && Op(t, n, !1),
        kn(e, t, o);
    r = t.stateNode,
    D_.current = t;
    var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && i ? (t.child = co(t, e.child, null, o),
    t.child = co(t, null, a, o)) : Ke(e, t, a, o),
    t.memoizedState = r.state,
    s && Op(t, n, !0),
    t.child
}
function wy(e) {
    var t = e.stateNode;
    t.pendingContext ? Ap(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ap(e, t.context, !1),
    Df(e, t.containerInfo)
}
function Gp(e, t, n, r, s) {
    return lo(),
    Rf(s),
    t.flags |= 256,
    Ke(e, t, n, r),
    t.child
}
var ad = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function ld(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function by(e, t, n) {
    var r = t.pendingProps, s = ye.current, o = !1, i = (t.flags & 128) !== 0, a;
    if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    a ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1),
    ue(ye, s & 1),
    e === null)
        return ed(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (i = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        i = {
            mode: "hidden",
            children: i
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = i) : o = Gl(i, r, 0, null),
        e = Wr(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = ld(n),
        t.memoizedState = ad,
        e) : Wf(t, i));
    if (s = e.memoizedState,
    s !== null && (a = s.dehydrated,
    a !== null))
        return $_(e, t, i, r, a, s, n);
    if (o) {
        o = r.fallback,
        i = t.mode,
        s = e.child,
        a = s.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== s ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = pr(s, l),
        r.subtreeFlags = s.subtreeFlags & 14680064),
        a !== null ? o = pr(a, o) : (o = Wr(o, i, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        i = e.child.memoizedState,
        i = i === null ? ld(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        },
        o.memoizedState = i,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = ad,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = pr(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Wf(e, t) {
    return t = Gl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function pa(e, t, n, r) {
    return r !== null && Rf(r),
    co(t, e.child, null, n),
    e = Wf(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function $_(e, t, n, r, s, o, i) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Zc(Error(T(422))),
        pa(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        s = t.mode,
        r = Gl({
            mode: "visible",
            children: r.children
        }, s, 0, null),
        o = Wr(o, s, i, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && co(t, e.child, null, i),
        t.child.memoizedState = ld(i),
        t.memoizedState = ad,
        o);
    if (!(t.mode & 1))
        return pa(e, t, i, null);
    if (s.data === "$!") {
        if (r = s.nextSibling && s.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        o = Error(T(419)),
        r = Zc(o, r, void 0),
        pa(e, t, i, r)
    }
    if (a = (i & e.childLanes) !== 0,
    it || a) {
        if (r = Oe,
        r !== null) {
            switch (i & -i) {
            case 4:
                s = 2;
                break;
            case 16:
                s = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                s = 32;
                break;
            case 536870912:
                s = 268435456;
                break;
            default:
                s = 0
            }
            s = s & (r.suspendedLanes | i) ? 0 : s,
            s !== 0 && s !== o.retryLane && (o.retryLane = s,
            En(e, s),
            Vt(r, e, s, -1))
        }
        return Jf(),
        r = Zc(Error(T(421))),
        pa(e, t, i, r)
    }
    return s.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = J_.bind(null, e),
    s._reactRetry = t,
    null) : (e = o.treeContext,
    gt = ur(s.nextSibling),
    vt = t,
    ge = !0,
    Ut = null,
    e !== null && (Et[kt++] = xn,
    Et[kt++] = wn,
    Et[kt++] = Qr,
    xn = e.id,
    wn = e.overflow,
    Qr = t),
    t = Wf(t, r.children),
    t.flags |= 4096,
    t)
}
function Yp(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    td(e.return, t, n)
}
function eu(e, t, n, r, s) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = s)
}
function _y(e, t, n) {
    var r = t.pendingProps
      , s = r.revealOrder
      , o = r.tail;
    if (Ke(e, t, r.children, n),
    r = ye.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Yp(e, n, t);
                else if (e.tag === 19)
                    Yp(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (ue(ye, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (s) {
        case "forwards":
            for (n = t.child,
            s = null; n !== null; )
                e = n.alternate,
                e !== null && gl(e) === null && (s = n),
                n = n.sibling;
            n = s,
            n === null ? (s = t.child,
            t.child = null) : (s = n.sibling,
            n.sibling = null),
            eu(t, !1, s, n, o);
            break;
        case "backwards":
            for (n = null,
            s = t.child,
            t.child = null; s !== null; ) {
                if (e = s.alternate,
                e !== null && gl(e) === null) {
                    t.child = s;
                    break
                }
                e = s.sibling,
                s.sibling = n,
                n = s,
                s = e
            }
            eu(t, !0, n, null, o);
            break;
        case "together":
            eu(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Ua(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function kn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Yr |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(T(153));
    if (t.child !== null) {
        for (e = t.child,
        n = pr(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = pr(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function F_(e, t, n) {
    switch (t.tag) {
    case 3:
        wy(t),
        lo();
        break;
    case 5:
        Qv(t);
        break;
    case 1:
        lt(t.type) && ul(t);
        break;
    case 4:
        Df(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , s = t.memoizedProps.value;
        ue(hl, r._currentValue),
        r._currentValue = s;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (ue(ye, ye.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? by(e, t, n) : (ue(ye, ye.current & 1),
            e = kn(e, t, n),
            e !== null ? e.sibling : null);
        ue(ye, ye.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return _y(e, t, n);
            t.flags |= 128
        }
        if (s = t.memoizedState,
        s !== null && (s.rendering = null,
        s.tail = null,
        s.lastEffect = null),
        ue(ye, ye.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        yy(e, t, n)
    }
    return kn(e, t, n)
}
var Sy, cd, Cy, Ey;
Sy = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
cd = function() {}
;
Cy = function(e, t, n, r) {
    var s = e.memoizedProps;
    if (s !== r) {
        e = t.stateNode,
        Mr(cn.current);
        var o = null;
        switch (n) {
        case "input":
            s = Ru(e, s),
            r = Ru(e, r),
            o = [];
            break;
        case "select":
            s = be({}, s, {
                value: void 0
            }),
            r = be({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            s = Iu(e, s),
            r = Iu(e, r),
            o = [];
            break;
        default:
            typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ll)
        }
        Mu(n, r);
        var i;
        n = null;
        for (c in s)
            if (!r.hasOwnProperty(c) && s.hasOwnProperty(c) && s[c] != null)
                if (c === "style") {
                    var a = s[c];
                    for (i in a)
                        a.hasOwnProperty(i) && (n || (n = {}),
                        n[i] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (mi.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
        for (c in r) {
            var l = r[c];
            if (a = s != null ? s[c] : void 0,
            r.hasOwnProperty(c) && l !== a && (l != null || a != null))
                if (c === "style")
                    if (a) {
                        for (i in a)
                            !a.hasOwnProperty(i) || l && l.hasOwnProperty(i) || (n || (n = {}),
                            n[i] = "");
                        for (i in l)
                            l.hasOwnProperty(i) && a[i] !== l[i] && (n || (n = {}),
                            n[i] = l[i])
                    } else
                        n || (o || (o = []),
                        o.push(c, n)),
                        n = l;
                else
                    c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (o = o || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (mi.hasOwnProperty(c) ? (l != null && c === "onScroll" && pe("scroll", e),
                    o || a === l || (o = [])) : (o = o || []).push(c, l))
        }
        n && (o = o || []).push("style", n);
        var c = o;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
Ey = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Bo(e, t) {
    if (!ge)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Ue(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var s = e.child; s !== null; )
            n |= s.lanes | s.childLanes,
            r |= s.subtreeFlags & 14680064,
            r |= s.flags & 14680064,
            s.return = e,
            s = s.sibling;
    else
        for (s = e.child; s !== null; )
            n |= s.lanes | s.childLanes,
            r |= s.subtreeFlags,
            r |= s.flags,
            s.return = e,
            s = s.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function U_(e, t, n) {
    var r = t.pendingProps;
    switch (Tf(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Ue(t),
        null;
    case 1:
        return lt(t.type) && cl(),
        Ue(t),
        null;
    case 3:
        return r = t.stateNode,
        uo(),
        me(at),
        me(He),
        Ff(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (fa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Ut !== null && (vd(Ut),
        Ut = null))),
        cd(e, t),
        Ue(t),
        null;
    case 5:
        $f(t);
        var s = Mr(ji.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Cy(e, t, n, r, s),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(T(166));
                return Ue(t),
                null
            }
            if (e = Mr(cn.current),
            fa(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[on] = t,
                r[Ei] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    pe("cancel", r),
                    pe("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    pe("load", r);
                    break;
                case "video":
                case "audio":
                    for (s = 0; s < Jo.length; s++)
                        pe(Jo[s], r);
                    break;
                case "source":
                    pe("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    pe("error", r),
                    pe("load", r);
                    break;
                case "details":
                    pe("toggle", r);
                    break;
                case "input":
                    op(r, o),
                    pe("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    pe("invalid", r);
                    break;
                case "textarea":
                    ap(r, o),
                    pe("invalid", r)
                }
                Mu(n, o),
                s = null;
                for (var i in o)
                    if (o.hasOwnProperty(i)) {
                        var a = o[i];
                        i === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && da(r.textContent, a, e),
                        s = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && da(r.textContent, a, e),
                        s = ["children", "" + a]) : mi.hasOwnProperty(i) && a != null && i === "onScroll" && pe("scroll", r)
                    }
                switch (n) {
                case "input":
                    ra(r),
                    ip(r, o, !0);
                    break;
                case "textarea":
                    ra(r),
                    lp(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = ll)
                }
                r = s,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                i = s.nodeType === 9 ? s : s.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Zg(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                    is: r.is
                }) : (e = i.createElement(n),
                n === "select" && (i = e,
                r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n),
                e[on] = t,
                e[Ei] = r,
                Sy(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (i = Du(n, r),
                    n) {
                    case "dialog":
                        pe("cancel", e),
                        pe("close", e),
                        s = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        pe("load", e),
                        s = r;
                        break;
                    case "video":
                    case "audio":
                        for (s = 0; s < Jo.length; s++)
                            pe(Jo[s], e);
                        s = r;
                        break;
                    case "source":
                        pe("error", e),
                        s = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        pe("error", e),
                        pe("load", e),
                        s = r;
                        break;
                    case "details":
                        pe("toggle", e),
                        s = r;
                        break;
                    case "input":
                        op(e, r),
                        s = Ru(e, r),
                        pe("invalid", e);
                        break;
                    case "option":
                        s = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        s = be({}, r, {
                            value: void 0
                        }),
                        pe("invalid", e);
                        break;
                    case "textarea":
                        ap(e, r),
                        s = Iu(e, r),
                        pe("invalid", e);
                        break;
                    default:
                        s = r
                    }
                    Mu(n, s),
                    a = s;
                    for (o in a)
                        if (a.hasOwnProperty(o)) {
                            var l = a[o];
                            o === "style" ? nv(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && ev(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && gi(e, l) : typeof l == "number" && gi(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (mi.hasOwnProperty(o) ? l != null && o === "onScroll" && pe("scroll", e) : l != null && mf(e, o, l, i))
                        }
                    switch (n) {
                    case "input":
                        ra(e),
                        ip(e, r, !1);
                        break;
                    case "textarea":
                        ra(e),
                        lp(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + gr(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? Ms(e, !!r.multiple, o, !1) : r.defaultValue != null && Ms(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof s.onClick == "function" && (e.onclick = ll)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Ue(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Ey(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(T(166));
            if (n = Mr(ji.current),
            Mr(cn.current),
            fa(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[on] = t,
                (o = r.nodeValue !== n) && (e = vt,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        da(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && da(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[on] = t,
                t.stateNode = r
        }
        return Ue(t),
        null;
    case 13:
        if (me(ye),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ge && gt !== null && t.mode & 1 && !(t.flags & 128))
                Vv(),
                lo(),
                t.flags |= 98560,
                o = !1;
            else if (o = fa(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(T(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(T(317));
                    o[on] = t
                } else
                    lo(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Ue(t),
                o = !1
            } else
                Ut !== null && (vd(Ut),
                Ut = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ye.current & 1 ? Ne === 0 && (Ne = 3) : Jf())),
        t.updateQueue !== null && (t.flags |= 4),
        Ue(t),
        null);
    case 4:
        return uo(),
        cd(e, t),
        e === null && Si(t.stateNode.containerInfo),
        Ue(t),
        null;
    case 10:
        return If(t.type._context),
        Ue(t),
        null;
    case 17:
        return lt(t.type) && cl(),
        Ue(t),
        null;
    case 19:
        if (me(ye),
        o = t.memoizedState,
        o === null)
            return Ue(t),
            null;
        if (r = (t.flags & 128) !== 0,
        i = o.rendering,
        i === null)
            if (r)
                Bo(o, !1);
            else {
                if (Ne !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (i = gl(e),
                        i !== null) {
                            for (t.flags |= 128,
                            Bo(o, !1),
                            r = i.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                i = o.alternate,
                                i === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = i.childLanes,
                                o.lanes = i.lanes,
                                o.child = i.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = i.memoizedProps,
                                o.memoizedState = i.memoizedState,
                                o.updateQueue = i.updateQueue,
                                o.type = i.type,
                                e = i.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ue(ye, ye.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && Ce() > ho && (t.flags |= 128,
                r = !0,
                Bo(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = gl(i),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Bo(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !i.alternate && !ge)
                        return Ue(t),
                        null
                } else
                    2 * Ce() - o.renderingStartTime > ho && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Bo(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (i.sibling = t.child,
            t.child = i) : (n = o.last,
            n !== null ? n.sibling = i : t.child = i,
            o.last = i)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = Ce(),
        t.sibling = null,
        n = ye.current,
        ue(ye, r ? n & 1 | 2 : n & 1),
        t) : (Ue(t),
        null);
    case 22:
    case 23:
        return Yf(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? pt & 1073741824 && (Ue(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(T(156, t.tag))
}
function z_(e, t) {
    switch (Tf(t),
    t.tag) {
    case 1:
        return lt(t.type) && cl(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return uo(),
        me(at),
        me(He),
        Ff(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return $f(t),
        null;
    case 13:
        if (me(ye),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(T(340));
            lo()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return me(ye),
        null;
    case 4:
        return uo(),
        null;
    case 10:
        return If(t.type._context),
        null;
    case 22:
    case 23:
        return Yf(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var ma = !1
  , Ve = !1
  , B_ = typeof WeakSet == "function" ? WeakSet : Set
  , $ = null;
function Is(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Se(e, t, r)
            }
        else
            n.current = null
}
function ud(e, t, n) {
    try {
        n()
    } catch (r) {
        Se(e, t, r)
    }
}
var Jp = !1;
function V_(e, t) {
    if (Ku = ol,
    e = Tv(),
    Pf(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var s = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var i = 0
                      , a = -1
                      , l = -1
                      , c = 0
                      , d = 0
                      , h = e
                      , f = null;
                    t: for (; ; ) {
                        for (var g; h !== n || s !== 0 && h.nodeType !== 3 || (a = i + s),
                        h !== o || r !== 0 && h.nodeType !== 3 || (l = i + r),
                        h.nodeType === 3 && (i += h.nodeValue.length),
                        (g = h.firstChild) !== null; )
                            f = h,
                            h = g;
                        for (; ; ) {
                            if (h === e)
                                break t;
                            if (f === n && ++c === s && (a = i),
                            f === o && ++d === r && (l = i),
                            (g = h.nextSibling) !== null)
                                break;
                            h = f,
                            f = h.parentNode
                        }
                        h = g
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Qu = {
        focusedElem: e,
        selectionRange: n
    },
    ol = !1,
    $ = t; $ !== null; )
        if (t = $,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            $ = e;
        else
            for (; $ !== null; ) {
                t = $;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var m = y.memoizedProps
                                  , w = y.memoizedState
                                  , x = t.stateNode
                                  , v = x.getSnapshotBeforeUpdate(t.elementType === t.type ? m : Mt(t.type, m), w);
                                x.__reactInternalSnapshotBeforeUpdate = v
                            }
                            break;
                        case 3:
                            var b = t.stateNode.containerInfo;
                            b.nodeType === 1 ? b.textContent = "" : b.nodeType === 9 && b.documentElement && b.removeChild(b.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(T(163))
                        }
                } catch (_) {
                    Se(t, t.return, _)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    $ = e;
                    break
                }
                $ = t.return
            }
    return y = Jp,
    Jp = !1,
    y
}
function ii(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var s = r = r.next;
        do {
            if ((s.tag & e) === e) {
                var o = s.destroy;
                s.destroy = void 0,
                o !== void 0 && ud(t, n, o)
            }
            s = s.next
        } while (s !== r)
    }
}
function Kl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function dd(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function ky(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    ky(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[on],
    delete t[Ei],
    delete t[Ju],
    delete t[E_],
    delete t[k_])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function jy(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Xp(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || jy(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function fd(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = ll));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (fd(e, t, n),
        e = e.sibling; e !== null; )
            fd(e, t, n),
            e = e.sibling
}
function hd(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (hd(e, t, n),
        e = e.sibling; e !== null; )
            hd(e, t, n),
            e = e.sibling
}
var Me = null
  , $t = !1;
function Ln(e, t, n) {
    for (n = n.child; n !== null; )
        Py(e, t, n),
        n = n.sibling
}
function Py(e, t, n) {
    if (ln && typeof ln.onCommitFiberUnmount == "function")
        try {
            ln.onCommitFiberUnmount(Fl, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Ve || Is(n, t);
    case 6:
        var r = Me
          , s = $t;
        Me = null,
        Ln(e, t, n),
        Me = r,
        $t = s,
        Me !== null && ($t ? (e = Me,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Me.removeChild(n.stateNode));
        break;
    case 18:
        Me !== null && ($t ? (e = Me,
        n = n.stateNode,
        e.nodeType === 8 ? Kc(e.parentNode, n) : e.nodeType === 1 && Kc(e, n),
        wi(e)) : Kc(Me, n.stateNode));
        break;
    case 4:
        r = Me,
        s = $t,
        Me = n.stateNode.containerInfo,
        $t = !0,
        Ln(e, t, n),
        Me = r,
        $t = s;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ve && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            s = r = r.next;
            do {
                var o = s
                  , i = o.destroy;
                o = o.tag,
                i !== void 0 && (o & 2 || o & 4) && ud(n, t, i),
                s = s.next
            } while (s !== r)
        }
        Ln(e, t, n);
        break;
    case 1:
        if (!Ve && (Is(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                Se(n, t, a)
            }
        Ln(e, t, n);
        break;
    case 21:
        Ln(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Ve = (r = Ve) || n.memoizedState !== null,
        Ln(e, t, n),
        Ve = r) : Ln(e, t, n);
        break;
    default:
        Ln(e, t, n)
    }
}
function Zp(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new B_),
        t.forEach(function(r) {
            var s = X_.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(s, s))
        })
    }
}
function Lt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var s = n[r];
            try {
                var o = e
                  , i = t
                  , a = i;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        Me = a.stateNode,
                        $t = !1;
                        break e;
                    case 3:
                        Me = a.stateNode.containerInfo,
                        $t = !0;
                        break e;
                    case 4:
                        Me = a.stateNode.containerInfo,
                        $t = !0;
                        break e
                    }
                    a = a.return
                }
                if (Me === null)
                    throw Error(T(160));
                Py(o, i, s),
                Me = null,
                $t = !1;
                var l = s.alternate;
                l !== null && (l.return = null),
                s.return = null
            } catch (c) {
                Se(s, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Ny(t, e),
            t = t.sibling
}
function Ny(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Lt(t, e),
        Xt(e),
        r & 4) {
            try {
                ii(3, e, e.return),
                Kl(3, e)
            } catch (m) {
                Se(e, e.return, m)
            }
            try {
                ii(5, e, e.return)
            } catch (m) {
                Se(e, e.return, m)
            }
        }
        break;
    case 1:
        Lt(t, e),
        Xt(e),
        r & 512 && n !== null && Is(n, n.return);
        break;
    case 5:
        if (Lt(t, e),
        Xt(e),
        r & 512 && n !== null && Is(n, n.return),
        e.flags & 32) {
            var s = e.stateNode;
            try {
                gi(s, "")
            } catch (m) {
                Se(e, e.return, m)
            }
        }
        if (r & 4 && (s = e.stateNode,
        s != null)) {
            var o = e.memoizedProps
              , i = n !== null ? n.memoizedProps : o
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && o.type === "radio" && o.name != null && Jg(s, o),
                    Du(a, i);
                    var c = Du(a, o);
                    for (i = 0; i < l.length; i += 2) {
                        var d = l[i]
                          , h = l[i + 1];
                        d === "style" ? nv(s, h) : d === "dangerouslySetInnerHTML" ? ev(s, h) : d === "children" ? gi(s, h) : mf(s, d, h, c)
                    }
                    switch (a) {
                    case "input":
                        Au(s, o);
                        break;
                    case "textarea":
                        Xg(s, o);
                        break;
                    case "select":
                        var f = s._wrapperState.wasMultiple;
                        s._wrapperState.wasMultiple = !!o.multiple;
                        var g = o.value;
                        g != null ? Ms(s, !!o.multiple, g, !1) : f !== !!o.multiple && (o.defaultValue != null ? Ms(s, !!o.multiple, o.defaultValue, !0) : Ms(s, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    s[Ei] = o
                } catch (m) {
                    Se(e, e.return, m)
                }
        }
        break;
    case 6:
        if (Lt(t, e),
        Xt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(T(162));
            s = e.stateNode,
            o = e.memoizedProps;
            try {
                s.nodeValue = o
            } catch (m) {
                Se(e, e.return, m)
            }
        }
        break;
    case 3:
        if (Lt(t, e),
        Xt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                wi(t.containerInfo)
            } catch (m) {
                Se(e, e.return, m)
            }
        break;
    case 4:
        Lt(t, e),
        Xt(e);
        break;
    case 13:
        Lt(t, e),
        Xt(e),
        s = e.child,
        s.flags & 8192 && (o = s.memoizedState !== null,
        s.stateNode.isHidden = o,
        !o || s.alternate !== null && s.alternate.memoizedState !== null || (Qf = Ce())),
        r & 4 && Zp(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Ve = (c = Ve) || d,
        Lt(t, e),
        Ve = c) : Lt(t, e),
        Xt(e),
        r & 8192) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !d && e.mode & 1)
                for ($ = e,
                d = e.child; d !== null; ) {
                    for (h = $ = d; $ !== null; ) {
                        switch (f = $,
                        g = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            ii(4, f, f.return);
                            break;
                        case 1:
                            Is(f, f.return);
                            var y = f.stateNode;
                            if (typeof y.componentWillUnmount == "function") {
                                r = f,
                                n = f.return;
                                try {
                                    t = r,
                                    y.props = t.memoizedProps,
                                    y.state = t.memoizedState,
                                    y.componentWillUnmount()
                                } catch (m) {
                                    Se(r, n, m)
                                }
                            }
                            break;
                        case 5:
                            Is(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                tm(h);
                                continue
                            }
                        }
                        g !== null ? (g.return = f,
                        $ = g) : tm(h)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            h = e; ; ) {
                if (h.tag === 5) {
                    if (d === null) {
                        d = h;
                        try {
                            s = h.stateNode,
                            c ? (o = s.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = h.stateNode,
                            l = h.memoizedProps.style,
                            i = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = tv("display", i))
                        } catch (m) {
                            Se(e, e.return, m)
                        }
                    }
                } else if (h.tag === 6) {
                    if (d === null)
                        try {
                            h.stateNode.nodeValue = c ? "" : h.memoizedProps
                        } catch (m) {
                            Se(e, e.return, m)
                        }
                } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                    h.child.return = h,
                    h = h.child;
                    continue
                }
                if (h === e)
                    break e;
                for (; h.sibling === null; ) {
                    if (h.return === null || h.return === e)
                        break e;
                    d === h && (d = null),
                    h = h.return
                }
                d === h && (d = null),
                h.sibling.return = h.return,
                h = h.sibling
            }
        }
        break;
    case 19:
        Lt(t, e),
        Xt(e),
        r & 4 && Zp(e);
        break;
    case 21:
        break;
    default:
        Lt(t, e),
        Xt(e)
    }
}
function Xt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (jy(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(T(160))
            }
            switch (r.tag) {
            case 5:
                var s = r.stateNode;
                r.flags & 32 && (gi(s, ""),
                r.flags &= -33);
                var o = Xp(e);
                hd(e, o, s);
                break;
            case 3:
            case 4:
                var i = r.stateNode.containerInfo
                  , a = Xp(e);
                fd(e, a, i);
                break;
            default:
                throw Error(T(161))
            }
        } catch (l) {
            Se(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function H_(e, t, n) {
    $ = e,
    Ty(e)
}
function Ty(e, t, n) {
    for (var r = (e.mode & 1) !== 0; $ !== null; ) {
        var s = $
          , o = s.child;
        if (s.tag === 22 && r) {
            var i = s.memoizedState !== null || ma;
            if (!i) {
                var a = s.alternate
                  , l = a !== null && a.memoizedState !== null || Ve;
                a = ma;
                var c = Ve;
                if (ma = i,
                (Ve = l) && !c)
                    for ($ = s; $ !== null; )
                        i = $,
                        l = i.child,
                        i.tag === 22 && i.memoizedState !== null ? nm(s) : l !== null ? (l.return = i,
                        $ = l) : nm(s);
                for (; o !== null; )
                    $ = o,
                    Ty(o),
                    o = o.sibling;
                $ = s,
                ma = a,
                Ve = c
            }
            em(e)
        } else
            s.subtreeFlags & 8772 && o !== null ? (o.return = s,
            $ = o) : em(e)
    }
}
function em(e) {
    for (; $ !== null; ) {
        var t = $;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ve || Kl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ve)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var s = t.elementType === t.type ? n.memoizedProps : Mt(t.type, n.memoizedProps);
                                r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && $p(t, o, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            $p(t, i, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var d = c.memoizedState;
                                if (d !== null) {
                                    var h = d.dehydrated;
                                    h !== null && wi(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(T(163))
                    }
                Ve || t.flags & 512 && dd(t)
            } catch (f) {
                Se(t, t.return, f)
            }
        }
        if (t === e) {
            $ = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            $ = n;
            break
        }
        $ = t.return
    }
}
function tm(e) {
    for (; $ !== null; ) {
        var t = $;
        if (t === e) {
            $ = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            $ = n;
            break
        }
        $ = t.return
    }
}
function nm(e) {
    for (; $ !== null; ) {
        var t = $;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Kl(4, t)
                } catch (l) {
                    Se(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var s = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        Se(t, s, l)
                    }
                }
                var o = t.return;
                try {
                    dd(t)
                } catch (l) {
                    Se(t, o, l)
                }
                break;
            case 5:
                var i = t.return;
                try {
                    dd(t)
                } catch (l) {
                    Se(t, i, l)
                }
            }
        } catch (l) {
            Se(t, t.return, l)
        }
        if (t === e) {
            $ = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            $ = a;
            break
        }
        $ = t.return
    }
}
var W_ = Math.ceil
  , xl = Tn.ReactCurrentDispatcher
  , qf = Tn.ReactCurrentOwner
  , Tt = Tn.ReactCurrentBatchConfig
  , re = 0
  , Oe = null
  , Ee = null
  , De = 0
  , pt = 0
  , Ls = Sr(0)
  , Ne = 0
  , Ri = null
  , Yr = 0
  , Ql = 0
  , Kf = 0
  , ai = null
  , st = null
  , Qf = 0
  , ho = 1 / 0
  , mn = null
  , wl = !1
  , pd = null
  , fr = null
  , ga = !1
  , or = null
  , bl = 0
  , li = 0
  , md = null
  , za = -1
  , Ba = 0;
function Je() {
    return re & 6 ? Ce() : za !== -1 ? za : za = Ce()
}
function hr(e) {
    return e.mode & 1 ? re & 2 && De !== 0 ? De & -De : P_.transition !== null ? (Ba === 0 && (Ba = pv()),
    Ba) : (e = ae,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : bv(e.type)),
    e) : 1
}
function Vt(e, t, n, r) {
    if (50 < li)
        throw li = 0,
        md = null,
        Error(T(185));
    Vi(e, n, r),
    (!(re & 2) || e !== Oe) && (e === Oe && (!(re & 2) && (Ql |= n),
    Ne === 4 && Kn(e, De)),
    ct(e, r),
    n === 1 && re === 0 && !(t.mode & 1) && (ho = Ce() + 500,
    Hl && Cr()))
}
function ct(e, t) {
    var n = e.callbackNode;
    P1(e, t);
    var r = sl(e, e === Oe ? De : 0);
    if (r === 0)
        n !== null && dp(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && dp(n),
        t === 1)
            e.tag === 0 ? j_(rm.bind(null, e)) : Uv(rm.bind(null, e)),
            S_(function() {
                !(re & 6) && Cr()
            }),
            n = null;
        else {
            switch (mv(r)) {
            case 1:
                n = wf;
                break;
            case 4:
                n = fv;
                break;
            case 16:
                n = rl;
                break;
            case 536870912:
                n = hv;
                break;
            default:
                n = rl
            }
            n = $y(n, Ry.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Ry(e, t) {
    if (za = -1,
    Ba = 0,
    re & 6)
        throw Error(T(327));
    var n = e.callbackNode;
    if (zs() && e.callbackNode !== n)
        return null;
    var r = sl(e, e === Oe ? De : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = _l(e, r);
    else {
        t = r;
        var s = re;
        re |= 2;
        var o = Oy();
        (Oe !== e || De !== t) && (mn = null,
        ho = Ce() + 500,
        Hr(e, t));
        do
            try {
                Q_();
                break
            } catch (a) {
                Ay(e, a)
            }
        while (!0);
        Of(),
        xl.current = o,
        re = s,
        Ee !== null ? t = 0 : (Oe = null,
        De = 0,
        t = Ne)
    }
    if (t !== 0) {
        if (t === 2 && (s = Bu(e),
        s !== 0 && (r = s,
        t = gd(e, s))),
        t === 1)
            throw n = Ri,
            Hr(e, 0),
            Kn(e, r),
            ct(e, Ce()),
            n;
        if (t === 6)
            Kn(e, r);
        else {
            if (s = e.current.alternate,
            !(r & 30) && !q_(s) && (t = _l(e, r),
            t === 2 && (o = Bu(e),
            o !== 0 && (r = o,
            t = gd(e, o))),
            t === 1))
                throw n = Ri,
                Hr(e, 0),
                Kn(e, r),
                ct(e, Ce()),
                n;
            switch (e.finishedWork = s,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(T(345));
            case 2:
                Rr(e, st, mn);
                break;
            case 3:
                if (Kn(e, r),
                (r & 130023424) === r && (t = Qf + 500 - Ce(),
                10 < t)) {
                    if (sl(e, 0) !== 0)
                        break;
                    if (s = e.suspendedLanes,
                    (s & r) !== r) {
                        Je(),
                        e.pingedLanes |= e.suspendedLanes & s;
                        break
                    }
                    e.timeoutHandle = Yu(Rr.bind(null, e, st, mn), t);
                    break
                }
                Rr(e, st, mn);
                break;
            case 4:
                if (Kn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                s = -1; 0 < r; ) {
                    var i = 31 - Bt(r);
                    o = 1 << i,
                    i = t[i],
                    i > s && (s = i),
                    r &= ~o
                }
                if (r = s,
                r = Ce() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * W_(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Yu(Rr.bind(null, e, st, mn), r);
                    break
                }
                Rr(e, st, mn);
                break;
            case 5:
                Rr(e, st, mn);
                break;
            default:
                throw Error(T(329))
            }
        }
    }
    return ct(e, Ce()),
    e.callbackNode === n ? Ry.bind(null, e) : null
}
function gd(e, t) {
    var n = ai;
    return e.current.memoizedState.isDehydrated && (Hr(e, t).flags |= 256),
    e = _l(e, t),
    e !== 2 && (t = st,
    st = n,
    t !== null && vd(t)),
    e
}
function vd(e) {
    st === null ? st = e : st.push.apply(st, e)
}
function q_(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var s = n[r]
                      , o = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!Ht(o(), s))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Kn(e, t) {
    for (t &= ~Kf,
    t &= ~Ql,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Bt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function rm(e) {
    if (re & 6)
        throw Error(T(327));
    zs();
    var t = sl(e, 0);
    if (!(t & 1))
        return ct(e, Ce()),
        null;
    var n = _l(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Bu(e);
        r !== 0 && (t = r,
        n = gd(e, r))
    }
    if (n === 1)
        throw n = Ri,
        Hr(e, 0),
        Kn(e, t),
        ct(e, Ce()),
        n;
    if (n === 6)
        throw Error(T(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Rr(e, st, mn),
    ct(e, Ce()),
    null
}
function Gf(e, t) {
    var n = re;
    re |= 1;
    try {
        return e(t)
    } finally {
        re = n,
        re === 0 && (ho = Ce() + 500,
        Hl && Cr())
    }
}
function Jr(e) {
    or !== null && or.tag === 0 && !(re & 6) && zs();
    var t = re;
    re |= 1;
    var n = Tt.transition
      , r = ae;
    try {
        if (Tt.transition = null,
        ae = 1,
        e)
            return e()
    } finally {
        ae = r,
        Tt.transition = n,
        re = t,
        !(re & 6) && Cr()
    }
}
function Yf() {
    pt = Ls.current,
    me(Ls)
}
function Hr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    __(n)),
    Ee !== null)
        for (n = Ee.return; n !== null; ) {
            var r = n;
            switch (Tf(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && cl();
                break;
            case 3:
                uo(),
                me(at),
                me(He),
                Ff();
                break;
            case 5:
                $f(r);
                break;
            case 4:
                uo();
                break;
            case 13:
                me(ye);
                break;
            case 19:
                me(ye);
                break;
            case 10:
                If(r.type._context);
                break;
            case 22:
            case 23:
                Yf()
            }
            n = n.return
        }
    if (Oe = e,
    Ee = e = pr(e.current, null),
    De = pt = t,
    Ne = 0,
    Ri = null,
    Kf = Ql = Yr = 0,
    st = ai = null,
    Lr !== null) {
        for (t = 0; t < Lr.length; t++)
            if (n = Lr[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var s = r.next
                  , o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    o.next = s,
                    r.next = i
                }
                n.pending = r
            }
        Lr = null
    }
    return e
}
function Ay(e, t) {
    do {
        var n = Ee;
        try {
            if (Of(),
            $a.current = yl,
            vl) {
                for (var r = xe.memoizedState; r !== null; ) {
                    var s = r.queue;
                    s !== null && (s.pending = null),
                    r = r.next
                }
                vl = !1
            }
            if (Gr = 0,
            Ae = je = xe = null,
            oi = !1,
            Pi = 0,
            qf.current = null,
            n === null || n.return === null) {
                Ne = 1,
                Ri = t,
                Ee = null;
                break
            }
            e: {
                var o = e
                  , i = n.return
                  , a = n
                  , l = t;
                if (t = De,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var c = l
                      , d = a
                      , h = d.tag;
                    if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var f = d.alternate;
                        f ? (d.updateQueue = f.updateQueue,
                        d.memoizedState = f.memoizedState,
                        d.lanes = f.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var g = Hp(i);
                    if (g !== null) {
                        g.flags &= -257,
                        Wp(g, i, a, o, t),
                        g.mode & 1 && Vp(o, c, t),
                        t = g,
                        l = c;
                        var y = t.updateQueue;
                        if (y === null) {
                            var m = new Set;
                            m.add(l),
                            t.updateQueue = m
                        } else
                            y.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Vp(o, c, t),
                            Jf();
                            break e
                        }
                        l = Error(T(426))
                    }
                } else if (ge && a.mode & 1) {
                    var w = Hp(i);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        Wp(w, i, a, o, t),
                        Rf(fo(l, a));
                        break e
                    }
                }
                o = l = fo(l, a),
                Ne !== 4 && (Ne = 2),
                ai === null ? ai = [o] : ai.push(o),
                o = i;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var x = my(o, l, t);
                        Dp(o, x);
                        break e;
                    case 1:
                        a = l;
                        var v = o.type
                          , b = o.stateNode;
                        if (!(o.flags & 128) && (typeof v.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (fr === null || !fr.has(b)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var _ = gy(o, a, t);
                            Dp(o, _);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            Ly(n)
        } catch (C) {
            t = C,
            Ee === n && n !== null && (Ee = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Oy() {
    var e = xl.current;
    return xl.current = yl,
    e === null ? yl : e
}
function Jf() {
    (Ne === 0 || Ne === 3 || Ne === 2) && (Ne = 4),
    Oe === null || !(Yr & 268435455) && !(Ql & 268435455) || Kn(Oe, De)
}
function _l(e, t) {
    var n = re;
    re |= 2;
    var r = Oy();
    (Oe !== e || De !== t) && (mn = null,
    Hr(e, t));
    do
        try {
            K_();
            break
        } catch (s) {
            Ay(e, s)
        }
    while (!0);
    if (Of(),
    re = n,
    xl.current = r,
    Ee !== null)
        throw Error(T(261));
    return Oe = null,
    De = 0,
    Ne
}
function K_() {
    for (; Ee !== null; )
        Iy(Ee)
}
function Q_() {
    for (; Ee !== null && !x1(); )
        Iy(Ee)
}
function Iy(e) {
    var t = Dy(e.alternate, e, pt);
    e.memoizedProps = e.pendingProps,
    t === null ? Ly(e) : Ee = t,
    qf.current = null
}
function Ly(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = z_(n, t),
            n !== null) {
                n.flags &= 32767,
                Ee = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Ne = 6,
                Ee = null;
                return
            }
        } else if (n = U_(n, t, pt),
        n !== null) {
            Ee = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Ee = t;
            return
        }
        Ee = t = e
    } while (t !== null);
    Ne === 0 && (Ne = 5)
}
function Rr(e, t, n) {
    var r = ae
      , s = Tt.transition;
    try {
        Tt.transition = null,
        ae = 1,
        G_(e, t, n, r)
    } finally {
        Tt.transition = s,
        ae = r
    }
    return null
}
function G_(e, t, n, r) {
    do
        zs();
    while (or !== null);
    if (re & 6)
        throw Error(T(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(T(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (N1(e, o),
    e === Oe && (Ee = Oe = null,
    De = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ga || (ga = !0,
    $y(rl, function() {
        return zs(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = Tt.transition,
        Tt.transition = null;
        var i = ae;
        ae = 1;
        var a = re;
        re |= 4,
        qf.current = null,
        V_(e, n),
        Ny(n, e),
        m_(Qu),
        ol = !!Ku,
        Qu = Ku = null,
        e.current = n,
        H_(n),
        w1(),
        re = a,
        ae = i,
        Tt.transition = o
    } else
        e.current = n;
    if (ga && (ga = !1,
    or = e,
    bl = s),
    o = e.pendingLanes,
    o === 0 && (fr = null),
    S1(n.stateNode),
    ct(e, Ce()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            s = t[n],
            r(s.value, {
                componentStack: s.stack,
                digest: s.digest
            });
    if (wl)
        throw wl = !1,
        e = pd,
        pd = null,
        e;
    return bl & 1 && e.tag !== 0 && zs(),
    o = e.pendingLanes,
    o & 1 ? e === md ? li++ : (li = 0,
    md = e) : li = 0,
    Cr(),
    null
}
function zs() {
    if (or !== null) {
        var e = mv(bl)
          , t = Tt.transition
          , n = ae;
        try {
            if (Tt.transition = null,
            ae = 16 > e ? 16 : e,
            or === null)
                var r = !1;
            else {
                if (e = or,
                or = null,
                bl = 0,
                re & 6)
                    throw Error(T(331));
                var s = re;
                for (re |= 4,
                $ = e.current; $ !== null; ) {
                    var o = $
                      , i = o.child;
                    if ($.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var c = a[l];
                                for ($ = c; $ !== null; ) {
                                    var d = $;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ii(8, d, o)
                                    }
                                    var h = d.child;
                                    if (h !== null)
                                        h.return = d,
                                        $ = h;
                                    else
                                        for (; $ !== null; ) {
                                            d = $;
                                            var f = d.sibling
                                              , g = d.return;
                                            if (ky(d),
                                            d === c) {
                                                $ = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = g,
                                                $ = f;
                                                break
                                            }
                                            $ = g
                                        }
                                }
                            }
                            var y = o.alternate;
                            if (y !== null) {
                                var m = y.child;
                                if (m !== null) {
                                    y.child = null;
                                    do {
                                        var w = m.sibling;
                                        m.sibling = null,
                                        m = w
                                    } while (m !== null)
                                }
                            }
                            $ = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null)
                        i.return = o,
                        $ = i;
                    else
                        e: for (; $ !== null; ) {
                            if (o = $,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ii(9, o, o.return)
                                }
                            var x = o.sibling;
                            if (x !== null) {
                                x.return = o.return,
                                $ = x;
                                break e
                            }
                            $ = o.return
                        }
                }
                var v = e.current;
                for ($ = v; $ !== null; ) {
                    i = $;
                    var b = i.child;
                    if (i.subtreeFlags & 2064 && b !== null)
                        b.return = i,
                        $ = b;
                    else
                        e: for (i = v; $ !== null; ) {
                            if (a = $,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Kl(9, a)
                                    }
                                } catch (C) {
                                    Se(a, a.return, C)
                                }
                            if (a === i) {
                                $ = null;
                                break e
                            }
                            var _ = a.sibling;
                            if (_ !== null) {
                                _.return = a.return,
                                $ = _;
                                break e
                            }
                            $ = a.return
                        }
                }
                if (re = s,
                Cr(),
                ln && typeof ln.onPostCommitFiberRoot == "function")
                    try {
                        ln.onPostCommitFiberRoot(Fl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ae = n,
            Tt.transition = t
        }
    }
    return !1
}
function sm(e, t, n) {
    t = fo(n, t),
    t = my(e, t, 1),
    e = dr(e, t, 1),
    t = Je(),
    e !== null && (Vi(e, 1, t),
    ct(e, t))
}
function Se(e, t, n) {
    if (e.tag === 3)
        sm(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                sm(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (fr === null || !fr.has(r))) {
                    e = fo(n, e),
                    e = gy(t, e, 1),
                    t = dr(t, e, 1),
                    e = Je(),
                    t !== null && (Vi(t, 1, e),
                    ct(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Y_(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Je(),
    e.pingedLanes |= e.suspendedLanes & n,
    Oe === e && (De & n) === n && (Ne === 4 || Ne === 3 && (De & 130023424) === De && 500 > Ce() - Qf ? Hr(e, 0) : Kf |= n),
    ct(e, t)
}
function My(e, t) {
    t === 0 && (e.mode & 1 ? (t = ia,
    ia <<= 1,
    !(ia & 130023424) && (ia = 4194304)) : t = 1);
    var n = Je();
    e = En(e, t),
    e !== null && (Vi(e, t, n),
    ct(e, n))
}
function J_(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    My(e, n)
}
function X_(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(T(314))
    }
    r !== null && r.delete(t),
    My(e, n)
}
var Dy;
Dy = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || at.current)
            it = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return it = !1,
                F_(e, t, n);
            it = !!(e.flags & 131072)
        }
    else
        it = !1,
        ge && t.flags & 1048576 && zv(t, fl, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Ua(e, t),
        e = t.pendingProps;
        var s = ao(t, He.current);
        Us(t, n),
        s = zf(null, t, r, e, s, n);
        var o = Bf();
        return t.flags |= 1,
        typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        lt(r) ? (o = !0,
        ul(t)) : o = !1,
        t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
        Mf(t),
        s.updater = ql,
        t.stateNode = s,
        s._reactInternals = t,
        rd(t, r, e, n),
        t = id(null, t, r, !0, o, n)) : (t.tag = 0,
        ge && o && Nf(t),
        Ke(null, t, s, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Ua(e, t),
            e = t.pendingProps,
            s = r._init,
            r = s(r._payload),
            t.type = r,
            s = t.tag = eS(r),
            e = Mt(r, e),
            s) {
            case 0:
                t = od(null, t, r, e, n);
                break e;
            case 1:
                t = Qp(null, t, r, e, n);
                break e;
            case 11:
                t = qp(null, t, r, e, n);
                break e;
            case 14:
                t = Kp(null, t, r, Mt(r.type, e), n);
                break e
            }
            throw Error(T(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : Mt(r, s),
        od(e, t, r, s, n);
    case 1:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : Mt(r, s),
        Qp(e, t, r, s, n);
    case 3:
        e: {
            if (wy(t),
            e === null)
                throw Error(T(387));
            r = t.pendingProps,
            o = t.memoizedState,
            s = o.element,
            Kv(e, t),
            ml(t, r, null, n);
            var i = t.memoizedState;
            if (r = i.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: i.cache,
                    pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                    transitions: i.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    s = fo(Error(T(423)), t),
                    t = Gp(e, t, r, n, s);
                    break e
                } else if (r !== s) {
                    s = fo(Error(T(424)), t),
                    t = Gp(e, t, r, n, s);
                    break e
                } else
                    for (gt = ur(t.stateNode.containerInfo.firstChild),
                    vt = t,
                    ge = !0,
                    Ut = null,
                    n = Wv(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (lo(),
                r === s) {
                    t = kn(e, t, n);
                    break e
                }
                Ke(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Qv(t),
        e === null && ed(t),
        r = t.type,
        s = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        i = s.children,
        Gu(r, s) ? i = null : o !== null && Gu(r, o) && (t.flags |= 32),
        xy(e, t),
        Ke(e, t, i, n),
        t.child;
    case 6:
        return e === null && ed(t),
        null;
    case 13:
        return by(e, t, n);
    case 4:
        return Df(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = co(t, null, r, n) : Ke(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : Mt(r, s),
        qp(e, t, r, s, n);
    case 7:
        return Ke(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Ke(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Ke(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            s = t.pendingProps,
            o = t.memoizedProps,
            i = s.value,
            ue(hl, r._currentValue),
            r._currentValue = i,
            o !== null)
                if (Ht(o.value, i)) {
                    if (o.children === s.children && !at.current) {
                        t = kn(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var a = o.dependencies;
                        if (a !== null) {
                            i = o.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (o.tag === 1) {
                                        l = bn(-1, n & -n),
                                        l.tag = 2;
                                        var c = o.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var d = c.pending;
                                            d === null ? l.next = l : (l.next = d.next,
                                            d.next = l),
                                            c.pending = l
                                        }
                                    }
                                    o.lanes |= n,
                                    l = o.alternate,
                                    l !== null && (l.lanes |= n),
                                    td(o.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (o.tag === 10)
                            i = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (i = o.return,
                            i === null)
                                throw Error(T(341));
                            i.lanes |= n,
                            a = i.alternate,
                            a !== null && (a.lanes |= n),
                            td(i, n, t),
                            i = o.sibling
                        } else
                            i = o.child;
                        if (i !== null)
                            i.return = o;
                        else
                            for (i = o; i !== null; ) {
                                if (i === t) {
                                    i = null;
                                    break
                                }
                                if (o = i.sibling,
                                o !== null) {
                                    o.return = i.return,
                                    i = o;
                                    break
                                }
                                i = i.return
                            }
                        o = i
                    }
            Ke(e, t, s.children, n),
            t = t.child
        }
        return t;
    case 9:
        return s = t.type,
        r = t.pendingProps.children,
        Us(t, n),
        s = At(s),
        r = r(s),
        t.flags |= 1,
        Ke(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        s = Mt(r, t.pendingProps),
        s = Mt(r.type, s),
        Kp(e, t, r, s, n);
    case 15:
        return vy(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : Mt(r, s),
        Ua(e, t),
        t.tag = 1,
        lt(r) ? (e = !0,
        ul(t)) : e = !1,
        Us(t, n),
        py(t, r, s),
        rd(t, r, s, n),
        id(null, t, r, !0, e, n);
    case 19:
        return _y(e, t, n);
    case 22:
        return yy(e, t, n)
    }
    throw Error(T(156, t.tag))
}
;
function $y(e, t) {
    return dv(e, t)
}
function Z_(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Nt(e, t, n, r) {
    return new Z_(e,t,n,r)
}
function Xf(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function eS(e) {
    if (typeof e == "function")
        return Xf(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === vf)
            return 11;
        if (e === yf)
            return 14
    }
    return 2
}
function pr(e, t) {
    var n = e.alternate;
    return n === null ? (n = Nt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Va(e, t, n, r, s, o) {
    var i = 2;
    if (r = e,
    typeof e == "function")
        Xf(e) && (i = 1);
    else if (typeof e == "string")
        i = 5;
    else
        e: switch (e) {
        case Es:
            return Wr(n.children, s, o, t);
        case gf:
            i = 8,
            s |= 8;
            break;
        case ju:
            return e = Nt(12, n, t, s | 2),
            e.elementType = ju,
            e.lanes = o,
            e;
        case Pu:
            return e = Nt(13, n, t, s),
            e.elementType = Pu,
            e.lanes = o,
            e;
        case Nu:
            return e = Nt(19, n, t, s),
            e.elementType = Nu,
            e.lanes = o,
            e;
        case Qg:
            return Gl(n, s, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case qg:
                    i = 10;
                    break e;
                case Kg:
                    i = 9;
                    break e;
                case vf:
                    i = 11;
                    break e;
                case yf:
                    i = 14;
                    break e;
                case Vn:
                    i = 16,
                    r = null;
                    break e
                }
            throw Error(T(130, e == null ? e : typeof e, ""))
        }
    return t = Nt(i, n, t, s),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function Wr(e, t, n, r) {
    return e = Nt(7, e, r, t),
    e.lanes = n,
    e
}
function Gl(e, t, n, r) {
    return e = Nt(22, e, r, t),
    e.elementType = Qg,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function tu(e, t, n) {
    return e = Nt(6, e, null, t),
    e.lanes = n,
    e
}
function nu(e, t, n) {
    return t = Nt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function tS(e, t, n, r, s) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Mc(0),
    this.expirationTimes = Mc(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Mc(0),
    this.identifierPrefix = r,
    this.onRecoverableError = s,
    this.mutableSourceEagerHydrationData = null
}
function Zf(e, t, n, r, s, o, i, a, l) {
    return e = new tS(e,t,n,a,l),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = Nt(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Mf(o),
    e
}
function nS(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Cs,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Fy(e) {
    if (!e)
        return vr;
    e = e._reactInternals;
    e: {
        if (rs(e) !== e || e.tag !== 1)
            throw Error(T(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (lt(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(T(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (lt(n))
            return Fv(e, n, t)
    }
    return t
}
function Uy(e, t, n, r, s, o, i, a, l) {
    return e = Zf(n, r, !0, e, s, o, i, a, l),
    e.context = Fy(null),
    n = e.current,
    r = Je(),
    s = hr(n),
    o = bn(r, s),
    o.callback = t ?? null,
    dr(n, o, s),
    e.current.lanes = s,
    Vi(e, s, r),
    ct(e, r),
    e
}
function Yl(e, t, n, r) {
    var s = t.current
      , o = Je()
      , i = hr(s);
    return n = Fy(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = bn(o, i),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = dr(s, t, i),
    e !== null && (Vt(e, s, i, o),
    Da(e, s, i)),
    i
}
function Sl(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function om(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function eh(e, t) {
    om(e, t),
    (e = e.alternate) && om(e, t)
}
function rS() {
    return null
}
var zy = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function th(e) {
    this._internalRoot = e
}
Jl.prototype.render = th.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(T(409));
    Yl(e, t, null, null)
}
;
Jl.prototype.unmount = th.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Jr(function() {
            Yl(null, e, null, null)
        }),
        t[Cn] = null
    }
}
;
function Jl(e) {
    this._internalRoot = e
}
Jl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = yv();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < qn.length && t !== 0 && t < qn[n].priority; n++)
            ;
        qn.splice(n, 0, e),
        n === 0 && wv(e)
    }
}
;
function nh(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Xl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function im() {}
function sS(e, t, n, r, s) {
    if (s) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var c = Sl(i);
                o.call(c)
            }
        }
        var i = Uy(t, r, e, 0, null, !1, !1, "", im);
        return e._reactRootContainer = i,
        e[Cn] = i.current,
        Si(e.nodeType === 8 ? e.parentNode : e),
        Jr(),
        i
    }
    for (; s = e.lastChild; )
        e.removeChild(s);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var c = Sl(l);
            a.call(c)
        }
    }
    var l = Zf(e, 0, !1, null, null, !1, !1, "", im);
    return e._reactRootContainer = l,
    e[Cn] = l.current,
    Si(e.nodeType === 8 ? e.parentNode : e),
    Jr(function() {
        Yl(t, l, n, r)
    }),
    l
}
function Zl(e, t, n, r, s) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof s == "function") {
            var a = s;
            s = function() {
                var l = Sl(i);
                a.call(l)
            }
        }
        Yl(t, i, e, s)
    } else
        i = sS(n, t, e, s, r);
    return Sl(i)
}
gv = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Yo(t.pendingLanes);
            n !== 0 && (bf(t, n | 1),
            ct(t, Ce()),
            !(re & 6) && (ho = Ce() + 500,
            Cr()))
        }
        break;
    case 13:
        Jr(function() {
            var r = En(e, 1);
            if (r !== null) {
                var s = Je();
                Vt(r, e, 1, s)
            }
        }),
        eh(e, 1)
    }
}
;
_f = function(e) {
    if (e.tag === 13) {
        var t = En(e, 134217728);
        if (t !== null) {
            var n = Je();
            Vt(t, e, 134217728, n)
        }
        eh(e, 134217728)
    }
}
;
vv = function(e) {
    if (e.tag === 13) {
        var t = hr(e)
          , n = En(e, t);
        if (n !== null) {
            var r = Je();
            Vt(n, e, t, r)
        }
        eh(e, t)
    }
}
;
yv = function() {
    return ae
}
;
xv = function(e, t) {
    var n = ae;
    try {
        return ae = e,
        t()
    } finally {
        ae = n
    }
}
;
Fu = function(e, t, n) {
    switch (t) {
    case "input":
        if (Au(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var s = Vl(r);
                    if (!s)
                        throw Error(T(90));
                    Yg(r),
                    Au(r, s)
                }
            }
        }
        break;
    case "textarea":
        Xg(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Ms(e, !!n.multiple, t, !1)
    }
}
;
ov = Gf;
iv = Jr;
var oS = {
    usingClientEntryPoint: !1,
    Events: [Wi, Ns, Vl, rv, sv, Gf]
}
  , Vo = {
    findFiberByHostInstance: Ir,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , iS = {
    bundleType: Vo.bundleType,
    version: Vo.version,
    rendererPackageName: Vo.rendererPackageName,
    rendererConfig: Vo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Tn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = cv(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Vo.findFiberByHostInstance || rS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var va = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!va.isDisabled && va.supportsFiber)
        try {
            Fl = va.inject(iS),
            ln = va
        } catch {}
}
bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oS;
bt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!nh(t))
        throw Error(T(200));
    return nS(e, t, null, n)
}
;
bt.createRoot = function(e, t) {
    if (!nh(e))
        throw Error(T(299));
    var n = !1
      , r = ""
      , s = zy;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    t = Zf(e, 1, !1, null, null, n, !1, r, s),
    e[Cn] = t.current,
    Si(e.nodeType === 8 ? e.parentNode : e),
    new th(t)
}
;
bt.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(T(188)) : (e = Object.keys(e).join(","),
        Error(T(268, e)));
    return e = cv(t),
    e = e === null ? null : e.stateNode,
    e
}
;
bt.flushSync = function(e) {
    return Jr(e)
}
;
bt.hydrate = function(e, t, n) {
    if (!Xl(t))
        throw Error(T(200));
    return Zl(null, e, t, !0, n)
}
;
bt.hydrateRoot = function(e, t, n) {
    if (!nh(e))
        throw Error(T(405));
    var r = n != null && n.hydratedSources || null
      , s = !1
      , o = ""
      , i = zy;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    t = Uy(t, null, e, 1, n ?? null, s, !1, o, i),
    e[Cn] = t.current,
    Si(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            s = n._getVersion,
            s = s(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(n, s);
    return new Jl(t)
}
;
bt.render = function(e, t, n) {
    if (!Xl(t))
        throw Error(T(200));
    return Zl(null, e, t, !1, n)
}
;
bt.unmountComponentAtNode = function(e) {
    if (!Xl(e))
        throw Error(T(40));
    return e._reactRootContainer ? (Jr(function() {
        Zl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Cn] = null
        })
    }),
    !0) : !1
}
;
bt.unstable_batchedUpdates = Gf;
bt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Xl(n))
        throw Error(T(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(T(38));
    return Zl(e, t, n, !1, r)
}
;
bt.version = "18.3.1-next-f1338f8080-20240426";
function By() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(By)
        } catch (e) {
            console.error(e)
        }
}
By(),
Bg.exports = bt;
var Ki = Bg.exports;
const Vy = Ng(Ki);
var Hy, am = Ki;
Hy = am.createRoot,
am.hydrateRoot;
const aS = 1
  , lS = 1e6;
let ru = 0;
function cS() {
    return ru = (ru + 1) % Number.MAX_SAFE_INTEGER,
    ru.toString()
}
const su = new Map
  , lm = e => {
    if (su.has(e))
        return;
    const t = setTimeout( () => {
        su.delete(e),
        ci({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , lS);
    su.set(e, t)
}
  , uS = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, aS)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? lm(n) : e.toasts.forEach(r => {
                lm(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , Ha = [];
let Wa = {
    toasts: []
};
function ci(e) {
    Wa = uS(Wa, e),
    Ha.forEach(t => {
        t(Wa)
    }
    )
}
function dS({...e}) {
    const t = cS()
      , n = s => ci({
        type: "UPDATE_TOAST",
        toast: {
            ...s,
            id: t
        }
    })
      , r = () => ci({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return ci({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: s => {
                s || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function ss() {
    const [e,t] = p.useState(Wa);
    return p.useEffect( () => (Ha.push(t),
    () => {
        const n = Ha.indexOf(t);
        n > -1 && Ha.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: dS,
        dismiss: n => ci({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function te(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(s) {
        if (e == null || e(s),
        n === !1 || !s.defaultPrevented)
            return t == null ? void 0 : t(s)
    }
}
function fS(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}
function Wy(...e) {
    return t => e.forEach(n => fS(n, t))
}
function Ie(...e) {
    return p.useCallback(Wy(...e), e)
}
function hS(e, t=[]) {
    let n = [];
    function r(o, i) {
        const a = p.createContext(i)
          , l = n.length;
        n = [...n, i];
        function c(h) {
            const {scope: f, children: g, ...y} = h
              , m = (f == null ? void 0 : f[e][l]) || a
              , w = p.useMemo( () => y, Object.values(y));
            return u.jsx(m.Provider, {
                value: w,
                children: g
            })
        }
        function d(h, f) {
            const g = (f == null ? void 0 : f[e][l]) || a
              , y = p.useContext(g);
            if (y)
                return y;
            if (i !== void 0)
                return i;
            throw new Error(`\`${h}\` must be used within \`${o}\``)
        }
        return c.displayName = o + "Provider",
        [c, d]
    }
    const s = () => {
        const o = n.map(i => p.createContext(i));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || o;
            return p.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return s.scopeName = e,
    [r, pS(s, ...t)]
}
function pS(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(s => ({
            useScope: s(),
            scopeName: s.scopeName
        }));
        return function(o) {
            const i = r.reduce( (a, {useScope: l, scopeName: c}) => {
                const h = l(o)[`__scope${c}`];
                return {
                    ...a,
                    ...h
                }
            }
            , {});
            return p.useMemo( () => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var po = p.forwardRef( (e, t) => {
    const {children: n, ...r} = e
      , s = p.Children.toArray(n)
      , o = s.find(mS);
    if (o) {
        const i = o.props.children
          , a = s.map(l => l === o ? p.Children.count(i) > 1 ? p.Children.only(null) : p.isValidElement(i) ? i.props.children : null : l);
        return u.jsx(yd, {
            ...r,
            ref: t,
            children: p.isValidElement(i) ? p.cloneElement(i, void 0, a) : null
        })
    }
    return u.jsx(yd, {
        ...r,
        ref: t,
        children: n
    })
}
);
po.displayName = "Slot";
var yd = p.forwardRef( (e, t) => {
    const {children: n, ...r} = e;
    if (p.isValidElement(n)) {
        const s = vS(n);
        return p.cloneElement(n, {
            ...gS(r, n.props),
            ref: t ? Wy(t, s) : s
        })
    }
    return p.Children.count(n) > 1 ? p.Children.only(null) : null
}
);
yd.displayName = "SlotClone";
var qy = ({children: e}) => u.jsx(u.Fragment, {
    children: e
});
function mS(e) {
    return p.isValidElement(e) && e.type === qy
}
function gS(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const s = e[r]
          , o = t[r];
        /^on[A-Z]/.test(r) ? s && o ? n[r] = (...a) => {
            o(...a),
            s(...a)
        }
        : s && (n[r] = s) : r === "style" ? n[r] = {
            ...s,
            ...o
        } : r === "className" && (n[r] = [s, o].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function vS(e) {
    var r, s;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function rh(e) {
    const t = e + "CollectionProvider"
      , [n,r] = hS(t)
      , [s,o] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , i = g => {
        const {scope: y, children: m} = g
          , w = N.useRef(null)
          , x = N.useRef(new Map).current;
        return u.jsx(s, {
            scope: y,
            itemMap: x,
            collectionRef: w,
            children: m
        })
    }
    ;
    i.displayName = t;
    const a = e + "CollectionSlot"
      , l = N.forwardRef( (g, y) => {
        const {scope: m, children: w} = g
          , x = o(a, m)
          , v = Ie(y, x.collectionRef);
        return u.jsx(po, {
            ref: v,
            children: w
        })
    }
    );
    l.displayName = a;
    const c = e + "CollectionItemSlot"
      , d = "data-radix-collection-item"
      , h = N.forwardRef( (g, y) => {
        const {scope: m, children: w, ...x} = g
          , v = N.useRef(null)
          , b = Ie(y, v)
          , _ = o(c, m);
        return N.useEffect( () => (_.itemMap.set(v, {
            ref: v,
            ...x
        }),
        () => void _.itemMap.delete(v))),
        u.jsx(po, {
            [d]: "",
            ref: b,
            children: w
        })
    }
    );
    h.displayName = c;
    function f(g) {
        const y = o(e + "CollectionConsumer", g);
        return N.useCallback( () => {
            const w = y.collectionRef.current;
            if (!w)
                return [];
            const x = Array.from(w.querySelectorAll(`[${d}]`));
            return Array.from(y.itemMap.values()).sort( (_, C) => x.indexOf(_.ref.current) - x.indexOf(C.ref.current))
        }
        , [y.collectionRef, y.itemMap])
    }
    return [{
        Provider: i,
        Slot: l,
        ItemSlot: h
    }, f, r]
}
function yS(e, t) {
    const n = p.createContext(t)
      , r = o => {
        const {children: i, ...a} = o
          , l = p.useMemo( () => a, Object.values(a));
        return u.jsx(n.Provider, {
            value: l,
            children: i
        })
    }
    ;
    r.displayName = e + "Provider";
    function s(o) {
        const i = p.useContext(n);
        if (i)
            return i;
        if (t !== void 0)
            return t;
        throw new Error(`\`${o}\` must be used within \`${e}\``)
    }
    return [r, s]
}
function So(e, t=[]) {
    let n = [];
    function r(o, i) {
        const a = p.createContext(i)
          , l = n.length;
        n = [...n, i];
        const c = h => {
            var x;
            const {scope: f, children: g, ...y} = h
              , m = ((x = f == null ? void 0 : f[e]) == null ? void 0 : x[l]) || a
              , w = p.useMemo( () => y, Object.values(y));
            return u.jsx(m.Provider, {
                value: w,
                children: g
            })
        }
        ;
        c.displayName = o + "Provider";
        function d(h, f) {
            var m;
            const g = ((m = f == null ? void 0 : f[e]) == null ? void 0 : m[l]) || a
              , y = p.useContext(g);
            if (y)
                return y;
            if (i !== void 0)
                return i;
            throw new Error(`\`${h}\` must be used within \`${o}\``)
        }
        return [c, d]
    }
    const s = () => {
        const o = n.map(i => p.createContext(i));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || o;
            return p.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return s.scopeName = e,
    [r, xS(s, ...t)]
}
function xS(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(s => ({
            useScope: s(),
            scopeName: s.scopeName
        }));
        return function(o) {
            const i = r.reduce( (a, {useScope: l, scopeName: c}) => {
                const h = l(o)[`__scope${c}`];
                return {
                    ...a,
                    ...h
                }
            }
            , {});
            return p.useMemo( () => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var wS = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
  , ne = wS.reduce( (e, t) => {
    const n = p.forwardRef( (r, s) => {
        const {asChild: o, ...i} = r
          , a = o ? po : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        u.jsx(a, {
            ...i,
            ref: s
        })
    }
    );
    return n.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: n
    }
}
, {});
function Ky(e, t) {
    e && Ki.flushSync( () => e.dispatchEvent(t))
}
function wt(e) {
    const t = p.useRef(e);
    return p.useEffect( () => {
        t.current = e
    }
    ),
    p.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function bS(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = wt(e);
    p.useEffect( () => {
        const r = s => {
            s.key === "Escape" && n(s)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var _S = "DismissableLayer", xd = "dismissableLayer.update", SS = "dismissableLayer.pointerDownOutside", CS = "dismissableLayer.focusOutside", cm, Qy = p.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), ec = p.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: s, onFocusOutside: o, onInteractOutside: i, onDismiss: a, ...l} = e
      , c = p.useContext(Qy)
      , [d,h] = p.useState(null)
      , f = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,g] = p.useState({})
      , y = Ie(t, E => h(E))
      , m = Array.from(c.layers)
      , [w] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1)
      , x = m.indexOf(w)
      , v = d ? m.indexOf(d) : -1
      , b = c.layersWithOutsidePointerEventsDisabled.size > 0
      , _ = v >= x
      , C = kS(E => {
        const j = E.target
          , R = [...c.branches].some(A => A.contains(j));
        !_ || R || (s == null || s(E),
        i == null || i(E),
        E.defaultPrevented || a == null || a())
    }
    , f)
      , k = jS(E => {
        const j = E.target;
        [...c.branches].some(A => A.contains(j)) || (o == null || o(E),
        i == null || i(E),
        E.defaultPrevented || a == null || a())
    }
    , f);
    return bS(E => {
        v === c.layers.size - 1 && (r == null || r(E),
        !E.defaultPrevented && a && (E.preventDefault(),
        a()))
    }
    , f),
    p.useEffect( () => {
        if (d)
            return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (cm = f.body.style.pointerEvents,
            f.body.style.pointerEvents = "none"),
            c.layersWithOutsidePointerEventsDisabled.add(d)),
            c.layers.add(d),
            um(),
            () => {
                n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = cm)
            }
    }
    , [d, f, n, c]),
    p.useEffect( () => () => {
        d && (c.layers.delete(d),
        c.layersWithOutsidePointerEventsDisabled.delete(d),
        um())
    }
    , [d, c]),
    p.useEffect( () => {
        const E = () => g({});
        return document.addEventListener(xd, E),
        () => document.removeEventListener(xd, E)
    }
    , []),
    u.jsx(ne.div, {
        ...l,
        ref: y,
        style: {
            pointerEvents: b ? _ ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: te(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: te(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: te(e.onPointerDownCapture, C.onPointerDownCapture)
    })
}
);
ec.displayName = _S;
var ES = "DismissableLayerBranch"
  , Gy = p.forwardRef( (e, t) => {
    const n = p.useContext(Qy)
      , r = p.useRef(null)
      , s = Ie(t, r);
    return p.useEffect( () => {
        const o = r.current;
        if (o)
            return n.branches.add(o),
            () => {
                n.branches.delete(o)
            }
    }
    , [n.branches]),
    u.jsx(ne.div, {
        ...e,
        ref: s
    })
}
);
Gy.displayName = ES;
function kS(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = wt(e)
      , r = p.useRef(!1)
      , s = p.useRef( () => {}
    );
    return p.useEffect( () => {
        const o = a => {
            if (a.target && !r.current) {
                let l = function() {
                    Yy(SS, n, c, {
                        discrete: !0
                    })
                };
                const c = {
                    originalEvent: a
                };
                a.pointerType === "touch" ? (t.removeEventListener("click", s.current),
                s.current = l,
                t.addEventListener("click", s.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", s.current);
            r.current = !1
        }
          , i = window.setTimeout( () => {
            t.addEventListener("pointerdown", o)
        }
        , 0);
        return () => {
            window.clearTimeout(i),
            t.removeEventListener("pointerdown", o),
            t.removeEventListener("click", s.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function jS(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = wt(e)
      , r = p.useRef(!1);
    return p.useEffect( () => {
        const s = o => {
            o.target && !r.current && Yy(CS, n, {
                originalEvent: o
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", s),
        () => t.removeEventListener("focusin", s)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function um() {
    const e = new CustomEvent(xd);
    document.dispatchEvent(e)
}
function Yy(e, t, n, {discrete: r}) {
    const s = n.originalEvent.target
      , o = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && s.addEventListener(e, t, {
        once: !0
    }),
    r ? Ky(s, o) : s.dispatchEvent(o)
}
var PS = ec
  , NS = Gy
  , jn = globalThis != null && globalThis.document ? p.useLayoutEffect : () => {}
  , TS = "Portal"
  , sh = p.forwardRef( (e, t) => {
    var a;
    const {container: n, ...r} = e
      , [s,o] = p.useState(!1);
    jn( () => o(!0), []);
    const i = n || s && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return i ? Vy.createPortal(u.jsx(ne.div, {
        ...r,
        ref: t
    }), i) : null
}
);
sh.displayName = TS;
function RS(e, t) {
    return p.useReducer( (n, r) => t[n][r] ?? n, e)
}
var Er = e => {
    const {present: t, children: n} = e
      , r = AS(t)
      , s = typeof n == "function" ? n({
        present: r.isPresent
    }) : p.Children.only(n)
      , o = Ie(r.ref, OS(s));
    return typeof n == "function" || r.isPresent ? p.cloneElement(s, {
        ref: o
    }) : null
}
;
Er.displayName = "Presence";
function AS(e) {
    const [t,n] = p.useState()
      , r = p.useRef({})
      , s = p.useRef(e)
      , o = p.useRef("none")
      , i = e ? "mounted" : "unmounted"
      , [a,l] = RS(i, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return p.useEffect( () => {
        const c = ya(r.current);
        o.current = a === "mounted" ? c : "none"
    }
    , [a]),
    jn( () => {
        const c = r.current
          , d = s.current;
        if (d !== e) {
            const f = o.current
              , g = ya(c);
            e ? l("MOUNT") : g === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(d && f !== g ? "ANIMATION_OUT" : "UNMOUNT"),
            s.current = e
        }
    }
    , [e, l]),
    jn( () => {
        if (t) {
            let c;
            const d = t.ownerDocument.defaultView ?? window
              , h = g => {
                const m = ya(r.current).includes(g.animationName);
                if (g.target === t && m && (l("ANIMATION_END"),
                !s.current)) {
                    const w = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    c = d.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                    }
                    )
                }
            }
              , f = g => {
                g.target === t && (o.current = ya(r.current))
            }
            ;
            return t.addEventListener("animationstart", f),
            t.addEventListener("animationcancel", h),
            t.addEventListener("animationend", h),
            () => {
                d.clearTimeout(c),
                t.removeEventListener("animationstart", f),
                t.removeEventListener("animationcancel", h),
                t.removeEventListener("animationend", h)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: p.useCallback(c => {
            c && (r.current = getComputedStyle(c)),
            n(c)
        }
        , [])
    }
}
function ya(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function OS(e) {
    var r, s;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function os({prop: e, defaultProp: t, onChange: n= () => {}
}) {
    const [r,s] = IS({
        defaultProp: t,
        onChange: n
    })
      , o = e !== void 0
      , i = o ? e : r
      , a = wt(n)
      , l = p.useCallback(c => {
        if (o) {
            const h = typeof c == "function" ? c(e) : c;
            h !== e && a(h)
        } else
            s(c)
    }
    , [o, e, s, a]);
    return [i, l]
}
function IS({defaultProp: e, onChange: t}) {
    const n = p.useState(e)
      , [r] = n
      , s = p.useRef(r)
      , o = wt(t);
    return p.useEffect( () => {
        s.current !== r && (o(r),
        s.current = r)
    }
    , [r, s, o]),
    n
}
var LS = "VisuallyHidden"
  , tc = p.forwardRef( (e, t) => u.jsx(ne.span, {
    ...e,
    ref: t,
    style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
    }
}));
tc.displayName = LS;
var MS = tc
  , oh = "ToastProvider"
  , [ih,DS,$S] = rh("Toast")
  , [Jy,CA] = So("Toast", [$S])
  , [FS,nc] = Jy(oh)
  , Xy = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: s="right", swipeThreshold: o=50, children: i} = e
      , [a,l] = p.useState(null)
      , [c,d] = p.useState(0)
      , h = p.useRef(!1)
      , f = p.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${oh}\`. Expected non-empty \`string\`.`),
    u.jsx(ih.Provider, {
        scope: t,
        children: u.jsx(FS, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: s,
            swipeThreshold: o,
            toastCount: c,
            viewport: a,
            onViewportChange: l,
            onToastAdd: p.useCallback( () => d(g => g + 1), []),
            onToastRemove: p.useCallback( () => d(g => g - 1), []),
            isFocusedToastEscapeKeyDownRef: h,
            isClosePausedRef: f,
            children: i
        })
    })
}
;
Xy.displayName = oh;
var Zy = "ToastViewport"
  , US = ["F8"]
  , wd = "toast.viewportPause"
  , bd = "toast.viewportResume"
  , e0 = p.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=US, label: s="Notifications ({hotkey})", ...o} = e
      , i = nc(Zy, n)
      , a = DS(n)
      , l = p.useRef(null)
      , c = p.useRef(null)
      , d = p.useRef(null)
      , h = p.useRef(null)
      , f = Ie(t, h, i.onViewportChange)
      , g = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , y = i.toastCount > 0;
    p.useEffect( () => {
        const w = x => {
            var b;
            r.length !== 0 && r.every(_ => x[_] || x.code === _) && ((b = h.current) == null || b.focus())
        }
        ;
        return document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
    }
    , [r]),
    p.useEffect( () => {
        const w = l.current
          , x = h.current;
        if (y && w && x) {
            const v = () => {
                if (!i.isClosePausedRef.current) {
                    const k = new CustomEvent(wd);
                    x.dispatchEvent(k),
                    i.isClosePausedRef.current = !0
                }
            }
              , b = () => {
                if (i.isClosePausedRef.current) {
                    const k = new CustomEvent(bd);
                    x.dispatchEvent(k),
                    i.isClosePausedRef.current = !1
                }
            }
              , _ = k => {
                !w.contains(k.relatedTarget) && b()
            }
              , C = () => {
                w.contains(document.activeElement) || b()
            }
            ;
            return w.addEventListener("focusin", v),
            w.addEventListener("focusout", _),
            w.addEventListener("pointermove", v),
            w.addEventListener("pointerleave", C),
            window.addEventListener("blur", v),
            window.addEventListener("focus", b),
            () => {
                w.removeEventListener("focusin", v),
                w.removeEventListener("focusout", _),
                w.removeEventListener("pointermove", v),
                w.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", v),
                window.removeEventListener("focus", b)
            }
        }
    }
    , [y, i.isClosePausedRef]);
    const m = p.useCallback( ({tabbingDirection: w}) => {
        const v = a().map(b => {
            const _ = b.ref.current
              , C = [_, ...ZS(_)];
            return w === "forwards" ? C : C.reverse()
        }
        );
        return (w === "forwards" ? v.reverse() : v).flat()
    }
    , [a]);
    return p.useEffect( () => {
        const w = h.current;
        if (w) {
            const x = v => {
                var C, k, E;
                const b = v.altKey || v.ctrlKey || v.metaKey;
                if (v.key === "Tab" && !b) {
                    const j = document.activeElement
                      , R = v.shiftKey;
                    if (v.target === w && R) {
                        (C = c.current) == null || C.focus();
                        return
                    }
                    const D = m({
                        tabbingDirection: R ? "backwards" : "forwards"
                    })
                      , H = D.findIndex(I => I === j);
                    ou(D.slice(H + 1)) ? v.preventDefault() : R ? (k = c.current) == null || k.focus() : (E = d.current) == null || E.focus()
                }
            }
            ;
            return w.addEventListener("keydown", x),
            () => w.removeEventListener("keydown", x)
        }
    }
    , [a, m]),
    u.jsxs(NS, {
        ref: l,
        role: "region",
        "aria-label": s.replace("{hotkey}", g),
        tabIndex: -1,
        style: {
            pointerEvents: y ? void 0 : "none"
        },
        children: [y && u.jsx(_d, {
            ref: c,
            onFocusFromOutsideViewport: () => {
                const w = m({
                    tabbingDirection: "forwards"
                });
                ou(w)
            }
        }), u.jsx(ih.Slot, {
            scope: n,
            children: u.jsx(ne.ol, {
                tabIndex: -1,
                ...o,
                ref: f
            })
        }), y && u.jsx(_d, {
            ref: d,
            onFocusFromOutsideViewport: () => {
                const w = m({
                    tabbingDirection: "backwards"
                });
                ou(w)
            }
        })]
    })
}
);
e0.displayName = Zy;
var t0 = "ToastFocusProxy"
  , _d = p.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...s} = e
      , o = nc(t0, n);
    return u.jsx(tc, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...s,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: i => {
            var c;
            const a = i.relatedTarget;
            !((c = o.viewport) != null && c.contains(a)) && r()
        }
    })
}
);
_d.displayName = t0;
var rc = "Toast"
  , zS = "toast.swipeStart"
  , BS = "toast.swipeMove"
  , VS = "toast.swipeCancel"
  , HS = "toast.swipeEnd"
  , n0 = p.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: s, onOpenChange: o, ...i} = e
      , [a=!0,l] = os({
        prop: r,
        defaultProp: s,
        onChange: o
    });
    return u.jsx(Er, {
        present: n || a,
        children: u.jsx(KS, {
            open: a,
            ...i,
            ref: t,
            onClose: () => l(!1),
            onPause: wt(e.onPause),
            onResume: wt(e.onResume),
            onSwipeStart: te(e.onSwipeStart, c => {
                c.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: te(e.onSwipeMove, c => {
                const {x: d, y: h} = c.detail.delta;
                c.currentTarget.setAttribute("data-swipe", "move"),
                c.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`),
                c.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${h}px`)
            }
            ),
            onSwipeCancel: te(e.onSwipeCancel, c => {
                c.currentTarget.setAttribute("data-swipe", "cancel"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: te(e.onSwipeEnd, c => {
                const {x: d, y: h} = c.detail.delta;
                c.currentTarget.setAttribute("data-swipe", "end"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                c.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`),
                c.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${h}px`),
                l(!1)
            }
            )
        })
    })
}
);
n0.displayName = rc;
var [WS,qS] = Jy(rc, {
    onClose() {}
})
  , KS = p.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: s, open: o, onClose: i, onEscapeKeyDown: a, onPause: l, onResume: c, onSwipeStart: d, onSwipeMove: h, onSwipeCancel: f, onSwipeEnd: g, ...y} = e
      , m = nc(rc, n)
      , [w,x] = p.useState(null)
      , v = Ie(t, I => x(I))
      , b = p.useRef(null)
      , _ = p.useRef(null)
      , C = s || m.duration
      , k = p.useRef(0)
      , E = p.useRef(C)
      , j = p.useRef(0)
      , {onToastAdd: R, onToastRemove: A} = m
      , U = wt( () => {
        var W;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((W = m.viewport) == null || W.focus()),
        i()
    }
    )
      , D = p.useCallback(I => {
        !I || I === 1 / 0 || (window.clearTimeout(j.current),
        k.current = new Date().getTime(),
        j.current = window.setTimeout(U, I))
    }
    , [U]);
    p.useEffect( () => {
        const I = m.viewport;
        if (I) {
            const W = () => {
                D(E.current),
                c == null || c()
            }
              , z = () => {
                const Y = new Date().getTime() - k.current;
                E.current = E.current - Y,
                window.clearTimeout(j.current),
                l == null || l()
            }
            ;
            return I.addEventListener(wd, z),
            I.addEventListener(bd, W),
            () => {
                I.removeEventListener(wd, z),
                I.removeEventListener(bd, W)
            }
        }
    }
    , [m.viewport, C, l, c, D]),
    p.useEffect( () => {
        o && !m.isClosePausedRef.current && D(C)
    }
    , [o, C, m.isClosePausedRef, D]),
    p.useEffect( () => (R(),
    () => A()), [R, A]);
    const H = p.useMemo( () => w ? c0(w) : null, [w]);
    return m.viewport ? u.jsxs(u.Fragment, {
        children: [H && u.jsx(QS, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: H
        }), u.jsx(WS, {
            scope: n,
            onClose: U,
            children: Ki.createPortal(u.jsx(ih.ItemSlot, {
                scope: n,
                children: u.jsx(PS, {
                    asChild: !0,
                    onEscapeKeyDown: te(a, () => {
                        m.isFocusedToastEscapeKeyDownRef.current || U(),
                        m.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: u.jsx(ne.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": o ? "open" : "closed",
                        "data-swipe-direction": m.swipeDirection,
                        ...y,
                        ref: v,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: te(e.onKeyDown, I => {
                            I.key === "Escape" && (a == null || a(I.nativeEvent),
                            I.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0,
                            U()))
                        }
                        ),
                        onPointerDown: te(e.onPointerDown, I => {
                            I.button === 0 && (b.current = {
                                x: I.clientX,
                                y: I.clientY
                            })
                        }
                        ),
                        onPointerMove: te(e.onPointerMove, I => {
                            if (!b.current)
                                return;
                            const W = I.clientX - b.current.x
                              , z = I.clientY - b.current.y
                              , Y = !!_.current
                              , P = ["left", "right"].includes(m.swipeDirection)
                              , O = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max
                              , F = P ? O(0, W) : 0
                              , L = P ? 0 : O(0, z)
                              , B = I.pointerType === "touch" ? 10 : 2
                              , J = {
                                x: F,
                                y: L
                            }
                              , de = {
                                originalEvent: I,
                                delta: J
                            };
                            Y ? (_.current = J,
                            xa(BS, h, de, {
                                discrete: !1
                            })) : dm(J, m.swipeDirection, B) ? (_.current = J,
                            xa(zS, d, de, {
                                discrete: !1
                            }),
                            I.target.setPointerCapture(I.pointerId)) : (Math.abs(W) > B || Math.abs(z) > B) && (b.current = null)
                        }
                        ),
                        onPointerUp: te(e.onPointerUp, I => {
                            const W = _.current
                              , z = I.target;
                            if (z.hasPointerCapture(I.pointerId) && z.releasePointerCapture(I.pointerId),
                            _.current = null,
                            b.current = null,
                            W) {
                                const Y = I.currentTarget
                                  , P = {
                                    originalEvent: I,
                                    delta: W
                                };
                                dm(W, m.swipeDirection, m.swipeThreshold) ? xa(HS, g, P, {
                                    discrete: !0
                                }) : xa(VS, f, P, {
                                    discrete: !0
                                }),
                                Y.addEventListener("click", O => O.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), m.viewport)
        })]
    }) : null
}
)
  , QS = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , s = nc(rc, t)
      , [o,i] = p.useState(!1)
      , [a,l] = p.useState(!1);
    return JS( () => i(!0)),
    p.useEffect( () => {
        const c = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(c)
    }
    , []),
    a ? null : u.jsx(sh, {
        asChild: !0,
        children: u.jsx(tc, {
            ...r,
            children: o && u.jsxs(u.Fragment, {
                children: [s.label, " ", n]
            })
        })
    })
}
  , GS = "ToastTitle"
  , r0 = p.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return u.jsx(ne.div, {
        ...r,
        ref: t
    })
}
);
r0.displayName = GS;
var YS = "ToastDescription"
  , s0 = p.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return u.jsx(ne.div, {
        ...r,
        ref: t
    })
}
);
s0.displayName = YS;
var o0 = "ToastAction"
  , i0 = p.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? u.jsx(l0, {
        altText: n,
        asChild: !0,
        children: u.jsx(ah, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${o0}\`. Expected non-empty \`string\`.`),
    null)
}
);
i0.displayName = o0;
var a0 = "ToastClose"
  , ah = p.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , s = qS(a0, n);
    return u.jsx(l0, {
        asChild: !0,
        children: u.jsx(ne.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: te(e.onClick, s.onClose)
        })
    })
}
);
ah.displayName = a0;
var l0 = p.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...s} = e;
    return u.jsx(ne.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...s,
        ref: t
    })
}
);
function c0(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        XS(r)) {
            const s = r.ariaHidden || r.hidden || r.style.display === "none"
              , o = r.dataset.radixToastAnnounceExclude === "";
            if (!s)
                if (o) {
                    const i = r.dataset.radixToastAnnounceAlt;
                    i && t.push(i)
                } else
                    t.push(...c0(r))
        }
    }
    ),
    t
}
function xa(e, t, n, {discrete: r}) {
    const s = n.originalEvent.currentTarget
      , o = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && s.addEventListener(e, t, {
        once: !0
    }),
    r ? Ky(s, o) : s.dispatchEvent(o)
}
var dm = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , s = Math.abs(e.y)
      , o = r > s;
    return t === "left" || t === "right" ? o && r > n : !o && s > n
}
;
function JS(e= () => {}
) {
    const t = wt(e);
    jn( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function XS(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function ZS(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const s = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || s ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function ou(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var eC = Xy
  , u0 = e0
  , d0 = n0
  , f0 = r0
  , h0 = s0
  , p0 = i0
  , m0 = ah;
function g0(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var s = e.length;
            for (t = 0; t < s; t++)
                e[t] && (n = g0(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function v0() {
    for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++)
        (e = arguments[n]) && (t = g0(e)) && (r && (r += " "),
        r += t);
    return r
}
const fm = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , hm = v0
  , sc = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return hm(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: s, defaultVariants: o} = t
      , i = Object.keys(s).map(c => {
        const d = n == null ? void 0 : n[c]
          , h = o == null ? void 0 : o[c];
        if (d === null)
            return null;
        const f = fm(d) || fm(h);
        return s[c][f]
    }
    )
      , a = n && Object.entries(n).reduce( (c, d) => {
        let[h,f] = d;
        return f === void 0 || (c[h] = f),
        c
    }
    , {})
      , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (c, d) => {
        let {class: h, className: f, ...g} = d;
        return Object.entries(g).every(y => {
            let[m,w] = y;
            return Array.isArray(w) ? w.includes({
                ...o,
                ...a
            }[m]) : {
                ...o,
                ...a
            }[m] === w
        }
        ) ? [...c, h, f] : c
    }
    , []);
    return hm(e, i, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tC = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , y0 = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var nC = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rC = p.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: s="", children: o, iconNode: i, ...a}, l) => p.createElement("svg", {
    ref: l,
    ...nC,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: y0("lucide", s),
    ...a
}, [...i.map( ([c,d]) => p.createElement(c, d)), ...Array.isArray(o) ? o : [o]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Te = (e, t) => {
    const n = p.forwardRef( ({className: r, ...s}, o) => p.createElement(rC, {
        ref: o,
        iconNode: t,
        className: y0(`lucide-${tC(e)}`, r),
        ...s
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sC = Te("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lh = Te("Calculator", [["rect", {
    width: "16",
    height: "20",
    x: "4",
    y: "2",
    rx: "2",
    key: "1nb95v"
}], ["line", {
    x1: "8",
    x2: "16",
    y1: "6",
    y2: "6",
    key: "x4nwl0"
}], ["line", {
    x1: "16",
    x2: "16",
    y1: "14",
    y2: "18",
    key: "wjye3r"
}], ["path", {
    d: "M16 10h.01",
    key: "1m94wz"
}], ["path", {
    d: "M12 10h.01",
    key: "1nrarc"
}], ["path", {
    d: "M8 10h.01",
    key: "19clt8"
}], ["path", {
    d: "M12 14h.01",
    key: "1etili"
}], ["path", {
    d: "M8 14h.01",
    key: "6423bh"
}], ["path", {
    d: "M12 18h.01",
    key: "mhygvu"
}], ["path", {
    d: "M8 18h.01",
    key: "lrp35t"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ho = Te("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oC = Te("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iC = Te("CircleHelp", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
    key: "1u773s"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x0 = Te("CreditCard", [["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "5",
    rx: "2",
    key: "ynyp8z"
}], ["line", {
    x1: "2",
    x2: "22",
    y1: "10",
    y2: "10",
    key: "1b3vmo"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sd = Te("Download", [["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["polyline", {
    points: "7 10 12 15 17 10",
    key: "2ggqvy"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "15",
    y2: "3",
    key: "1vk2je"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aC = Te("FilePen", [["path", {
    d: "M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5",
    key: "1couwa"
}], ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
}], ["path", {
    d: "M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
    key: "1y4qbx"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lC = Te("Info", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 16v-4",
    key: "1dtifu"
}], ["path", {
    d: "M12 8h.01",
    key: "e9boi3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cC = Te("LoaderCircle", [["path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56",
    key: "13zald"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uC = Te("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dC = Te("Package", [["path", {
    d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
    key: "1a0edw"
}], ["path", {
    d: "M12 22V12",
    key: "d0xqtd"
}], ["path", {
    d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",
    key: "yx3hmr"
}], ["path", {
    d: "m7.5 4.27 9 5.15",
    key: "1c824w"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fC = Te("Percent", [["line", {
    x1: "19",
    x2: "5",
    y1: "5",
    y2: "19",
    key: "1x9vlm"
}], ["circle", {
    cx: "6.5",
    cy: "6.5",
    r: "2.5",
    key: "4mh3h7"
}], ["circle", {
    cx: "17.5",
    cy: "17.5",
    r: "2.5",
    key: "1mdrzq"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pm = Te("Plus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "M12 5v14",
    key: "s699le"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mm = Te("Save", [["path", {
    d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
    key: "1c8476"
}], ["path", {
    d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
    key: "1ydtos"
}], ["path", {
    d: "M7 3v4a1 1 0 0 0 1 1h7",
    key: "t51u73"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hC = Te("Trash2", [["path", {
    d: "M3 6h18",
    key: "d0wm0j"
}], ["path", {
    d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
    key: "4alrt4"
}], ["path", {
    d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
    key: "v07s0e"
}], ["line", {
    x1: "10",
    x2: "10",
    y1: "11",
    y2: "17",
    key: "1uufr5"
}], ["line", {
    x1: "14",
    x2: "14",
    y1: "11",
    y2: "17",
    key: "xtxkd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gm = Te("TriangleAlert", [["path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
    key: "wmoenq"
}], ["path", {
    d: "M12 9v4",
    key: "juzpu7"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pC = Te("Truck", [["path", {
    d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
    key: "wrbu53"
}], ["path", {
    d: "M15 18H9",
    key: "1lyqi6"
}], ["path", {
    d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
    key: "lysw3i"
}], ["circle", {
    cx: "17",
    cy: "18",
    r: "2",
    key: "332jqn"
}], ["circle", {
    cx: "7",
    cy: "18",
    r: "2",
    key: "19iecd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oc = Te("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , ch = "-"
  , mC = e => {
    const t = vC(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: i => {
            const a = i.split(ch);
            return a[0] === "" && a.length !== 1 && a.shift(),
            w0(a, t) || gC(i)
        }
        ,
        getConflictingClassGroupIds: (i, a) => {
            const l = n[i] || [];
            return a && r[i] ? [...l, ...r[i]] : l
        }
    }
}
  , w0 = (e, t) => {
    var i;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , s = r ? w0(e.slice(1), r) : void 0;
    if (s)
        return s;
    if (t.validators.length === 0)
        return;
    const o = e.join(ch);
    return (i = t.validators.find( ({validator: a}) => a(o))) == null ? void 0 : i.classGroupId
}
  , vm = /^\[(.+)\]$/
  , gC = e => {
    if (vm.test(e)) {
        const t = vm.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , vC = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return xC(Object.entries(e.classGroups), n).forEach( ([o,i]) => {
        Cd(i, r, o, t)
    }
    ),
    r
}
  , Cd = (e, t, n, r) => {
    e.forEach(s => {
        if (typeof s == "string") {
            const o = s === "" ? t : ym(t, s);
            o.classGroupId = n;
            return
        }
        if (typeof s == "function") {
            if (yC(s)) {
                Cd(s(r), t, n, r);
                return
            }
            t.validators.push({
                validator: s,
                classGroupId: n
            });
            return
        }
        Object.entries(s).forEach( ([o,i]) => {
            Cd(i, ym(t, o), n, r)
        }
        )
    }
    )
}
  , ym = (e, t) => {
    let n = e;
    return t.split(ch).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , yC = e => e.isThemeGetter
  , xC = (e, t) => t ? e.map( ([n,r]) => {
    const s = r.map(o => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map( ([i,a]) => [t + i, a])) : o);
    return [n, s]
}
) : e
  , wC = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const s = (o, i) => {
        n.set(o, i),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(o) {
            let i = n.get(o);
            if (i !== void 0)
                return i;
            if ((i = r.get(o)) !== void 0)
                return s(o, i),
                i
        },
        set(o, i) {
            n.has(o) ? n.set(o, i) : s(o, i)
        }
    }
}
  , b0 = "!"
  , bC = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , s = t[0]
      , o = t.length
      , i = a => {
        const l = [];
        let c = 0, d = 0, h;
        for (let w = 0; w < a.length; w++) {
            let x = a[w];
            if (c === 0) {
                if (x === s && (r || a.slice(w, w + o) === t)) {
                    l.push(a.slice(d, w)),
                    d = w + o;
                    continue
                }
                if (x === "/") {
                    h = w;
                    continue
                }
            }
            x === "[" ? c++ : x === "]" && c--
        }
        const f = l.length === 0 ? a : a.substring(d)
          , g = f.startsWith(b0)
          , y = g ? f.substring(1) : f
          , m = h && h > d ? h - d : void 0;
        return {
            modifiers: l,
            hasImportantModifier: g,
            baseClassName: y,
            maybePostfixModifierPosition: m
        }
    }
    ;
    return n ? a => n({
        className: a,
        parseClassName: i
    }) : i
}
  , _C = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , SC = e => ({
    cache: wC(e.cacheSize),
    parseClassName: bC(e),
    ...mC(e)
})
  , CC = /\s+/
  , EC = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: s} = t
      , o = []
      , i = e.trim().split(CC);
    let a = "";
    for (let l = i.length - 1; l >= 0; l -= 1) {
        const c = i[l]
          , {modifiers: d, hasImportantModifier: h, baseClassName: f, maybePostfixModifierPosition: g} = n(c);
        let y = !!g
          , m = r(y ? f.substring(0, g) : f);
        if (!m) {
            if (!y) {
                a = c + (a.length > 0 ? " " + a : a);
                continue
            }
            if (m = r(f),
            !m) {
                a = c + (a.length > 0 ? " " + a : a);
                continue
            }
            y = !1
        }
        const w = _C(d).join(":")
          , x = h ? w + b0 : w
          , v = x + m;
        if (o.includes(v))
            continue;
        o.push(v);
        const b = s(m, y);
        for (let _ = 0; _ < b.length; ++_) {
            const C = b[_];
            o.push(x + C)
        }
        a = c + (a.length > 0 ? " " + a : a)
    }
    return a
}
;
function kC() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = _0(t)) && (r && (r += " "),
        r += n);
    return r
}
const _0 = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = _0(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function jC(e, ...t) {
    let n, r, s, o = i;
    function i(l) {
        const c = t.reduce( (d, h) => h(d), e());
        return n = SC(c),
        r = n.cache.get,
        s = n.cache.set,
        o = a,
        a(l)
    }
    function a(l) {
        const c = r(l);
        if (c)
            return c;
        const d = EC(l, n);
        return s(l, d),
        d
    }
    return function() {
        return o(kC.apply(null, arguments))
    }
}
const he = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , S0 = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , PC = /^\d+\/\d+$/
  , NC = new Set(["px", "full", "screen"])
  , TC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , RC = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , AC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , OC = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , IC = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , hn = e => Bs(e) || NC.has(e) || PC.test(e)
  , Mn = e => Co(e, "length", BC)
  , Bs = e => !!e && !Number.isNaN(Number(e))
  , iu = e => Co(e, "number", Bs)
  , Wo = e => !!e && Number.isInteger(Number(e))
  , LC = e => e.endsWith("%") && Bs(e.slice(0, -1))
  , K = e => S0.test(e)
  , Dn = e => TC.test(e)
  , MC = new Set(["length", "size", "percentage"])
  , DC = e => Co(e, MC, C0)
  , $C = e => Co(e, "position", C0)
  , FC = new Set(["image", "url"])
  , UC = e => Co(e, FC, HC)
  , zC = e => Co(e, "", VC)
  , qo = () => !0
  , Co = (e, t, n) => {
    const r = S0.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , BC = e => RC.test(e) && !AC.test(e)
  , C0 = () => !1
  , VC = e => OC.test(e)
  , HC = e => IC.test(e)
  , WC = () => {
    const e = he("colors")
      , t = he("spacing")
      , n = he("blur")
      , r = he("brightness")
      , s = he("borderColor")
      , o = he("borderRadius")
      , i = he("borderSpacing")
      , a = he("borderWidth")
      , l = he("contrast")
      , c = he("grayscale")
      , d = he("hueRotate")
      , h = he("invert")
      , f = he("gap")
      , g = he("gradientColorStops")
      , y = he("gradientColorStopPositions")
      , m = he("inset")
      , w = he("margin")
      , x = he("opacity")
      , v = he("padding")
      , b = he("saturate")
      , _ = he("scale")
      , C = he("sepia")
      , k = he("skew")
      , E = he("space")
      , j = he("translate")
      , R = () => ["auto", "contain", "none"]
      , A = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , U = () => ["auto", K, t]
      , D = () => [K, t]
      , H = () => ["", hn, Mn]
      , I = () => ["auto", Bs, K]
      , W = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , z = () => ["solid", "dashed", "dotted", "double", "none"]
      , Y = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , O = () => ["", "0", K]
      , F = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , L = () => [Bs, K];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [qo],
            spacing: [hn, Mn],
            blur: ["none", "", Dn, K],
            brightness: L(),
            borderColor: [e],
            borderRadius: ["none", "", "full", Dn, K],
            borderSpacing: D(),
            borderWidth: H(),
            contrast: L(),
            grayscale: O(),
            hueRotate: L(),
            invert: O(),
            gap: D(),
            gradientColorStops: [e],
            gradientColorStopPositions: [LC, Mn],
            inset: U(),
            margin: U(),
            opacity: L(),
            padding: D(),
            saturate: L(),
            scale: L(),
            sepia: O(),
            skew: L(),
            space: D(),
            translate: D()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", K]
            }],
            container: ["container"],
            columns: [{
                columns: [Dn]
            }],
            "break-after": [{
                "break-after": F()
            }],
            "break-before": [{
                "break-before": F()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...W(), K]
            }],
            overflow: [{
                overflow: A()
            }],
            "overflow-x": [{
                "overflow-x": A()
            }],
            "overflow-y": [{
                "overflow-y": A()
            }],
            overscroll: [{
                overscroll: R()
            }],
            "overscroll-x": [{
                "overscroll-x": R()
            }],
            "overscroll-y": [{
                "overscroll-y": R()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [m]
            }],
            "inset-x": [{
                "inset-x": [m]
            }],
            "inset-y": [{
                "inset-y": [m]
            }],
            start: [{
                start: [m]
            }],
            end: [{
                end: [m]
            }],
            top: [{
                top: [m]
            }],
            right: [{
                right: [m]
            }],
            bottom: [{
                bottom: [m]
            }],
            left: [{
                left: [m]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", Wo, K]
            }],
            basis: [{
                basis: U()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", K]
            }],
            grow: [{
                grow: O()
            }],
            shrink: [{
                shrink: O()
            }],
            order: [{
                order: ["first", "last", "none", Wo, K]
            }],
            "grid-cols": [{
                "grid-cols": [qo]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", Wo, K]
                }, K]
            }],
            "col-start": [{
                "col-start": I()
            }],
            "col-end": [{
                "col-end": I()
            }],
            "grid-rows": [{
                "grid-rows": [qo]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [Wo, K]
                }, K]
            }],
            "row-start": [{
                "row-start": I()
            }],
            "row-end": [{
                "row-end": I()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", K]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", K]
            }],
            gap: [{
                gap: [f]
            }],
            "gap-x": [{
                "gap-x": [f]
            }],
            "gap-y": [{
                "gap-y": [f]
            }],
            "justify-content": [{
                justify: ["normal", ...P()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...P(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...P(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [v]
            }],
            px: [{
                px: [v]
            }],
            py: [{
                py: [v]
            }],
            ps: [{
                ps: [v]
            }],
            pe: [{
                pe: [v]
            }],
            pt: [{
                pt: [v]
            }],
            pr: [{
                pr: [v]
            }],
            pb: [{
                pb: [v]
            }],
            pl: [{
                pl: [v]
            }],
            m: [{
                m: [w]
            }],
            mx: [{
                mx: [w]
            }],
            my: [{
                my: [w]
            }],
            ms: [{
                ms: [w]
            }],
            me: [{
                me: [w]
            }],
            mt: [{
                mt: [w]
            }],
            mr: [{
                mr: [w]
            }],
            mb: [{
                mb: [w]
            }],
            ml: [{
                ml: [w]
            }],
            "space-x": [{
                "space-x": [E]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [E]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", K, t]
            }],
            "min-w": [{
                "min-w": [K, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [K, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [Dn]
                }, Dn]
            }],
            h: [{
                h: [K, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [K, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [K, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [K, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", Dn, Mn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", iu]
            }],
            "font-family": [{
                font: [qo]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", K]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Bs, iu]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", hn, K]
            }],
            "list-image": [{
                "list-image": ["none", K]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", K]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [x]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [x]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...z(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", hn, Mn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", hn, K]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: D()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", K]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", K]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [x]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...W(), $C]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", DC]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, UC]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [y]
            }],
            "gradient-via-pos": [{
                via: [y]
            }],
            "gradient-to-pos": [{
                to: [y]
            }],
            "gradient-from": [{
                from: [g]
            }],
            "gradient-via": [{
                via: [g]
            }],
            "gradient-to": [{
                to: [g]
            }],
            rounded: [{
                rounded: [o]
            }],
            "rounded-s": [{
                "rounded-s": [o]
            }],
            "rounded-e": [{
                "rounded-e": [o]
            }],
            "rounded-t": [{
                "rounded-t": [o]
            }],
            "rounded-r": [{
                "rounded-r": [o]
            }],
            "rounded-b": [{
                "rounded-b": [o]
            }],
            "rounded-l": [{
                "rounded-l": [o]
            }],
            "rounded-ss": [{
                "rounded-ss": [o]
            }],
            "rounded-se": [{
                "rounded-se": [o]
            }],
            "rounded-ee": [{
                "rounded-ee": [o]
            }],
            "rounded-es": [{
                "rounded-es": [o]
            }],
            "rounded-tl": [{
                "rounded-tl": [o]
            }],
            "rounded-tr": [{
                "rounded-tr": [o]
            }],
            "rounded-br": [{
                "rounded-br": [o]
            }],
            "rounded-bl": [{
                "rounded-bl": [o]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [x]
            }],
            "border-style": [{
                border: [...z(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [x]
            }],
            "divide-style": [{
                divide: z()
            }],
            "border-color": [{
                border: [s]
            }],
            "border-color-x": [{
                "border-x": [s]
            }],
            "border-color-y": [{
                "border-y": [s]
            }],
            "border-color-s": [{
                "border-s": [s]
            }],
            "border-color-e": [{
                "border-e": [s]
            }],
            "border-color-t": [{
                "border-t": [s]
            }],
            "border-color-r": [{
                "border-r": [s]
            }],
            "border-color-b": [{
                "border-b": [s]
            }],
            "border-color-l": [{
                "border-l": [s]
            }],
            "divide-color": [{
                divide: [s]
            }],
            "outline-style": [{
                outline: ["", ...z()]
            }],
            "outline-offset": [{
                "outline-offset": [hn, K]
            }],
            "outline-w": [{
                outline: [hn, Mn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: H()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [x]
            }],
            "ring-offset-w": [{
                "ring-offset": [hn, Mn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", Dn, zC]
            }],
            "shadow-color": [{
                shadow: [qo]
            }],
            opacity: [{
                opacity: [x]
            }],
            "mix-blend": [{
                "mix-blend": [...Y(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": Y()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", Dn, K]
            }],
            grayscale: [{
                grayscale: [c]
            }],
            "hue-rotate": [{
                "hue-rotate": [d]
            }],
            invert: [{
                invert: [h]
            }],
            saturate: [{
                saturate: [b]
            }],
            sepia: [{
                sepia: [C]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [c]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [d]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [h]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [x]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [b]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [C]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [i]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [i]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [i]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", K]
            }],
            duration: [{
                duration: L()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", K]
            }],
            delay: [{
                delay: L()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", K]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [_]
            }],
            "scale-x": [{
                "scale-x": [_]
            }],
            "scale-y": [{
                "scale-y": [_]
            }],
            rotate: [{
                rotate: [Wo, K]
            }],
            "translate-x": [{
                "translate-x": [j]
            }],
            "translate-y": [{
                "translate-y": [j]
            }],
            "skew-x": [{
                "skew-x": [k]
            }],
            "skew-y": [{
                "skew-y": [k]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", K]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", K]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": D()
            }],
            "scroll-mx": [{
                "scroll-mx": D()
            }],
            "scroll-my": [{
                "scroll-my": D()
            }],
            "scroll-ms": [{
                "scroll-ms": D()
            }],
            "scroll-me": [{
                "scroll-me": D()
            }],
            "scroll-mt": [{
                "scroll-mt": D()
            }],
            "scroll-mr": [{
                "scroll-mr": D()
            }],
            "scroll-mb": [{
                "scroll-mb": D()
            }],
            "scroll-ml": [{
                "scroll-ml": D()
            }],
            "scroll-p": [{
                "scroll-p": D()
            }],
            "scroll-px": [{
                "scroll-px": D()
            }],
            "scroll-py": [{
                "scroll-py": D()
            }],
            "scroll-ps": [{
                "scroll-ps": D()
            }],
            "scroll-pe": [{
                "scroll-pe": D()
            }],
            "scroll-pt": [{
                "scroll-pt": D()
            }],
            "scroll-pr": [{
                "scroll-pr": D()
            }],
            "scroll-pb": [{
                "scroll-pb": D()
            }],
            "scroll-pl": [{
                "scroll-pl": D()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", K]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [hn, Mn, iu]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , qC = jC(WC);
function se(...e) {
    return qC(v0(e))
}
const KC = eC
  , E0 = p.forwardRef( ({className: e, ...t}, n) => u.jsx(u0, {
    ref: n,
    className: se("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
E0.displayName = u0.displayName;
const QC = sc("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , k0 = p.forwardRef( ({className: e, variant: t, ...n}, r) => u.jsx(d0, {
    ref: r,
    className: se(QC({
        variant: t
    }), e),
    ...n
}));
k0.displayName = d0.displayName;
const GC = p.forwardRef( ({className: e, ...t}, n) => u.jsx(p0, {
    ref: n,
    className: se("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
GC.displayName = p0.displayName;
const j0 = p.forwardRef( ({className: e, ...t}, n) => u.jsx(m0, {
    ref: n,
    className: se("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: u.jsx(oc, {
        className: "h-4 w-4"
    })
}));
j0.displayName = m0.displayName;
const P0 = p.forwardRef( ({className: e, ...t}, n) => u.jsx(f0, {
    ref: n,
    className: se("text-sm font-semibold", e),
    ...t
}));
P0.displayName = f0.displayName;
const N0 = p.forwardRef( ({className: e, ...t}, n) => u.jsx(h0, {
    ref: n,
    className: se("text-sm opacity-90", e),
    ...t
}));
N0.displayName = h0.displayName;
function YC() {
    const {toasts: e} = ss();
    return u.jsxs(KC, {
        children: [e.map(function({id: t, title: n, description: r, action: s, ...o}) {
            return u.jsxs(k0, {
                ...o,
                children: [u.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && u.jsx(P0, {
                        children: n
                    }), r && u.jsx(N0, {
                        children: r
                    })]
                }), s, u.jsx(j0, {})]
            }, t)
        }), u.jsx(E0, {})]
    })
}
var xm = ["light", "dark"]
  , JC = "(prefers-color-scheme: dark)"
  , XC = p.createContext(void 0)
  , ZC = {
    setTheme: e => {}
    ,
    themes: []
}
  , eE = () => {
    var e;
    return (e = p.useContext(XC)) != null ? e : ZC
}
;
p.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: s, defaultTheme: o, value: i, attrs: a, nonce: l}) => {
    let c = o === "system"
      , d = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(y => `'${y}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , h = s ? xm.includes(o) && o ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , f = (y, m=!1, w=!0) => {
        let x = i ? i[y] : y
          , v = m ? y + "|| ''" : `'${x}'`
          , b = "";
        return s && w && !m && xm.includes(y) && (b += `d.style.colorScheme = '${y}';`),
        n === "class" ? m || x ? b += `c.add(${v})` : b += "null" : x && (b += `d[s](n,${v})`),
        b
    }
      , g = e ? `!function(){${d}${f(e)}}()` : r ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${c})){var t='${JC}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${f(i ? "x[e]" : "e", !0)}}${c ? "" : "else{" + f(o, !1, !1) + "}"}${h}}catch(e){}}()` : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${f(i ? "x[e]" : "e", !0)}}else{${f(o, !1, !1)};}${h}}catch(t){}}();`;
    return p.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: g
        }
    })
}
);
var tE = e => {
    switch (e) {
    case "success":
        return sE;
    case "info":
        return iE;
    case "warning":
        return oE;
    case "error":
        return aE;
    default:
        return null
    }
}
  , nE = Array(12).fill(0)
  , rE = ({visible: e}) => N.createElement("div", {
    className: "sonner-loading-wrapper",
    "data-visible": e
}, N.createElement("div", {
    className: "sonner-spinner"
}, nE.map( (t, n) => N.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${n}`
}))))
  , sE = N.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, N.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , oE = N.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, N.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , iE = N.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, N.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , aE = N.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, N.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , lE = () => {
    let[e,t] = N.useState(document.hidden);
    return N.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , Ed = 1
  , cE = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , s = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Ed++
              , o = this.toasts.find(a => a.id === s)
              , i = e.dismissible === void 0 ? !0 : e.dismissible;
            return o ? this.toasts = this.toasts.map(a => a.id === s ? (this.publish({
                ...a,
                ...e,
                id: s,
                title: n
            }),
            {
                ...a,
                ...e,
                id: s,
                dismissible: i,
                title: n
            }) : a) : this.addToast({
                title: n,
                ...r,
                dismissible: i,
                id: s
            }),
            s
        }
        ,
        this.dismiss = e => (e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e()
              , s = n !== void 0;
            return r.then(async o => {
                if (dE(o) && !o.ok) {
                    s = !1;
                    let i = typeof t.error == "function" ? await t.error(`HTTP error! status: ${o.status}`) : t.error
                      , a = typeof t.description == "function" ? await t.description(`HTTP error! status: ${o.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: i,
                        description: a
                    })
                } else if (t.success !== void 0) {
                    s = !1;
                    let i = typeof t.success == "function" ? await t.success(o) : t.success
                      , a = typeof t.description == "function" ? await t.description(o) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: i,
                        description: a
                    })
                }
            }
            ).catch(async o => {
                if (t.error !== void 0) {
                    s = !1;
                    let i = typeof t.error == "function" ? await t.error(o) : t.error
                      , a = typeof t.description == "function" ? await t.description(o) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: i,
                        description: a
                    })
                }
            }
            ).finally( () => {
                var o;
                s && (this.dismiss(n),
                n = void 0),
                (o = t.finally) == null || o.call(t)
            }
            ),
            n
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Ed++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.subscribers = [],
        this.toasts = []
    }
}
  , ht = new cE
  , uE = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Ed++;
    return ht.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , dE = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , fE = uE
  , hE = () => ht.toasts;
Object.assign(fE, {
    success: ht.success,
    info: ht.info,
    warning: ht.warning,
    error: ht.error,
    custom: ht.custom,
    message: ht.message,
    promise: ht.promise,
    dismiss: ht.dismiss,
    loading: ht.loading
}, {
    getHistory: hE
});
function pE(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
pE(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function wa(e) {
    return e.label !== void 0
}
var mE = 3
  , gE = "32px"
  , vE = 4e3
  , yE = 356
  , xE = 14
  , wE = 20
  , bE = 200;
function _E(...e) {
    return e.filter(Boolean).join(" ")
}
var SE = e => {
    var t, n, r, s, o, i, a, l, c, d;
    let {invert: h, toast: f, unstyled: g, interacting: y, setHeights: m, visibleToasts: w, heights: x, index: v, toasts: b, expanded: _, removeToast: C, defaultRichColors: k, closeButton: E, style: j, cancelButtonStyle: R, actionButtonStyle: A, className: U="", descriptionClassName: D="", duration: H, position: I, gap: W, loadingIcon: z, expandByDefault: Y, classNames: P, icons: O, closeButtonAriaLabel: F="Close toast", pauseWhenPageIsHidden: L, cn: B} = e
      , [J,de] = N.useState(!1)
      , [ke,oe] = N.useState(!1)
      , [ut,Qt] = N.useState(!1)
      , [Gt,It] = N.useState(!1)
      , [ls,cs] = N.useState(0)
      , [Pr,Lo] = N.useState(0)
      , Ji = N.useRef(null)
      , On = N.useRef(null)
      , kc = v === 0
      , jc = v + 1 <= w
      , Le = f.type
      , us = f.dismissible !== !1
      , jb = f.className || ""
      , Pb = f.descriptionClassName || ""
      , Xi = N.useMemo( () => x.findIndex(q => q.toastId === f.id) || 0, [x, f.id])
      , Nb = N.useMemo( () => {
        var q;
        return (q = f.closeButton) != null ? q : E
    }
    , [f.closeButton, E])
      , Kh = N.useMemo( () => f.duration || H || vE, [f.duration, H])
      , Pc = N.useRef(0)
      , ds = N.useRef(0)
      , Qh = N.useRef(0)
      , fs = N.useRef(null)
      , [Gh,Tb] = I.split("-")
      , Yh = N.useMemo( () => x.reduce( (q, fe, le) => le >= Xi ? q : q + fe.height, 0), [x, Xi])
      , Jh = lE()
      , Rb = f.invert || h
      , Nc = Le === "loading";
    ds.current = N.useMemo( () => Xi * W + Yh, [Xi, Yh]),
    N.useEffect( () => {
        de(!0)
    }
    , []),
    N.useLayoutEffect( () => {
        if (!J)
            return;
        let q = On.current
          , fe = q.style.height;
        q.style.height = "auto";
        let le = q.getBoundingClientRect().height;
        q.style.height = fe,
        Lo(le),
        m(Yt => Yt.find(Jt => Jt.toastId === f.id) ? Yt.map(Jt => Jt.toastId === f.id ? {
            ...Jt,
            height: le
        } : Jt) : [{
            toastId: f.id,
            height: le,
            position: f.position
        }, ...Yt])
    }
    , [J, f.title, f.description, m, f.id]);
    let In = N.useCallback( () => {
        oe(!0),
        cs(ds.current),
        m(q => q.filter(fe => fe.toastId !== f.id)),
        setTimeout( () => {
            C(f)
        }
        , bE)
    }
    , [f, C, m, ds]);
    N.useEffect( () => {
        if (f.promise && Le === "loading" || f.duration === 1 / 0 || f.type === "loading")
            return;
        let q, fe = Kh;
        return _ || y || L && Jh ? ( () => {
            if (Qh.current < Pc.current) {
                let le = new Date().getTime() - Pc.current;
                fe = fe - le
            }
            Qh.current = new Date().getTime()
        }
        )() : fe !== 1 / 0 && (Pc.current = new Date().getTime(),
        q = setTimeout( () => {
            var le;
            (le = f.onAutoClose) == null || le.call(f, f),
            In()
        }
        , fe)),
        () => clearTimeout(q)
    }
    , [_, y, Y, f, Kh, In, f.promise, Le, L, Jh]),
    N.useEffect( () => {
        let q = On.current;
        if (q) {
            let fe = q.getBoundingClientRect().height;
            return Lo(fe),
            m(le => [{
                toastId: f.id,
                height: fe,
                position: f.position
            }, ...le]),
            () => m(le => le.filter(Yt => Yt.toastId !== f.id))
        }
    }
    , [m, f.id]),
    N.useEffect( () => {
        f.delete && In()
    }
    , [In, f.delete]);
    function Ab() {
        return O != null && O.loading ? N.createElement("div", {
            className: "sonner-loader",
            "data-visible": Le === "loading"
        }, O.loading) : z ? N.createElement("div", {
            className: "sonner-loader",
            "data-visible": Le === "loading"
        }, z) : N.createElement(rE, {
            visible: Le === "loading"
        })
    }
    return N.createElement("li", {
        "aria-live": f.important ? "assertive" : "polite",
        "aria-atomic": "true",
        role: "status",
        tabIndex: 0,
        ref: On,
        className: B(U, jb, P == null ? void 0 : P.toast, (t = f == null ? void 0 : f.classNames) == null ? void 0 : t.toast, P == null ? void 0 : P.default, P == null ? void 0 : P[Le], (n = f == null ? void 0 : f.classNames) == null ? void 0 : n[Le]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = f.richColors) != null ? r : k,
        "data-styled": !(f.jsx || f.unstyled || g),
        "data-mounted": J,
        "data-promise": !!f.promise,
        "data-removed": ke,
        "data-visible": jc,
        "data-y-position": Gh,
        "data-x-position": Tb,
        "data-index": v,
        "data-front": kc,
        "data-swiping": ut,
        "data-dismissible": us,
        "data-type": Le,
        "data-invert": Rb,
        "data-swipe-out": Gt,
        "data-expanded": !!(_ || Y && J),
        style: {
            "--index": v,
            "--toasts-before": v,
            "--z-index": b.length - v,
            "--offset": `${ke ? ls : ds.current}px`,
            "--initial-height": Y ? "auto" : `${Pr}px`,
            ...j,
            ...f.style
        },
        onPointerDown: q => {
            Nc || !us || (Ji.current = new Date,
            cs(ds.current),
            q.target.setPointerCapture(q.pointerId),
            q.target.tagName !== "BUTTON" && (Qt(!0),
            fs.current = {
                x: q.clientX,
                y: q.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var q, fe, le, Yt;
            if (Gt || !us)
                return;
            fs.current = null;
            let Jt = Number(((q = On.current) == null ? void 0 : q.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0)
              , Zi = new Date().getTime() - ((fe = Ji.current) == null ? void 0 : fe.getTime())
              , Ob = Math.abs(Jt) / Zi;
            if (Math.abs(Jt) >= wE || Ob > .11) {
                cs(ds.current),
                (le = f.onDismiss) == null || le.call(f, f),
                In(),
                It(!0);
                return
            }
            (Yt = On.current) == null || Yt.style.setProperty("--swipe-amount", "0px"),
            Qt(!1)
        }
        ,
        onPointerMove: q => {
            var fe;
            if (!fs.current || !us)
                return;
            let le = q.clientY - fs.current.y
              , Yt = q.clientX - fs.current.x
              , Jt = (Gh === "top" ? Math.min : Math.max)(0, le)
              , Zi = q.pointerType === "touch" ? 10 : 2;
            Math.abs(Jt) > Zi ? (fe = On.current) == null || fe.style.setProperty("--swipe-amount", `${le}px`) : Math.abs(Yt) > Zi && (fs.current = null)
        }
    }, Nb && !f.jsx ? N.createElement("button", {
        "aria-label": F,
        "data-disabled": Nc,
        "data-close-button": !0,
        onClick: Nc || !us ? () => {}
        : () => {
            var q;
            In(),
            (q = f.onDismiss) == null || q.call(f, f)
        }
        ,
        className: B(P == null ? void 0 : P.closeButton, (s = f == null ? void 0 : f.classNames) == null ? void 0 : s.closeButton)
    }, N.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, N.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), N.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    }))) : null, f.jsx || N.isValidElement(f.title) ? f.jsx || f.title : N.createElement(N.Fragment, null, Le || f.icon || f.promise ? N.createElement("div", {
        "data-icon": "",
        className: B(P == null ? void 0 : P.icon, (o = f == null ? void 0 : f.classNames) == null ? void 0 : o.icon)
    }, f.promise || f.type === "loading" && !f.icon ? f.icon || Ab() : null, f.type !== "loading" ? f.icon || (O == null ? void 0 : O[Le]) || tE(Le) : null) : null, N.createElement("div", {
        "data-content": "",
        className: B(P == null ? void 0 : P.content, (i = f == null ? void 0 : f.classNames) == null ? void 0 : i.content)
    }, N.createElement("div", {
        "data-title": "",
        className: B(P == null ? void 0 : P.title, (a = f == null ? void 0 : f.classNames) == null ? void 0 : a.title)
    }, f.title), f.description ? N.createElement("div", {
        "data-description": "",
        className: B(D, Pb, P == null ? void 0 : P.description, (l = f == null ? void 0 : f.classNames) == null ? void 0 : l.description)
    }, f.description) : null), N.isValidElement(f.cancel) ? f.cancel : f.cancel && wa(f.cancel) ? N.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: f.cancelButtonStyle || R,
        onClick: q => {
            var fe, le;
            wa(f.cancel) && us && ((le = (fe = f.cancel).onClick) == null || le.call(fe, q),
            In())
        }
        ,
        className: B(P == null ? void 0 : P.cancelButton, (c = f == null ? void 0 : f.classNames) == null ? void 0 : c.cancelButton)
    }, f.cancel.label) : null, N.isValidElement(f.action) ? f.action : f.action && wa(f.action) ? N.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: f.actionButtonStyle || A,
        onClick: q => {
            var fe, le;
            wa(f.action) && (q.defaultPrevented || ((le = (fe = f.action).onClick) == null || le.call(fe, q),
            In()))
        }
        ,
        className: B(P == null ? void 0 : P.actionButton, (d = f == null ? void 0 : f.classNames) == null ? void 0 : d.actionButton)
    }, f.action.label) : null))
}
;
function wm() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
var CE = e => {
    let {invert: t, position: n="bottom-right", hotkey: r=["altKey", "KeyT"], expand: s, closeButton: o, className: i, offset: a, theme: l="light", richColors: c, duration: d, style: h, visibleToasts: f=mE, toastOptions: g, dir: y=wm(), gap: m=xE, loadingIcon: w, icons: x, containerAriaLabel: v="Notifications", pauseWhenPageIsHidden: b, cn: _=_E} = e
      , [C,k] = N.useState([])
      , E = N.useMemo( () => Array.from(new Set([n].concat(C.filter(L => L.position).map(L => L.position)))), [C, n])
      , [j,R] = N.useState([])
      , [A,U] = N.useState(!1)
      , [D,H] = N.useState(!1)
      , [I,W] = N.useState(l !== "system" ? l : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , z = N.useRef(null)
      , Y = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , P = N.useRef(null)
      , O = N.useRef(!1)
      , F = N.useCallback(L => {
        var B;
        (B = C.find(J => J.id === L.id)) != null && B.delete || ht.dismiss(L.id),
        k(J => J.filter( ({id: de}) => de !== L.id))
    }
    , [C]);
    return N.useEffect( () => ht.subscribe(L => {
        if (L.dismiss) {
            k(B => B.map(J => J.id === L.id ? {
                ...J,
                delete: !0
            } : J));
            return
        }
        setTimeout( () => {
            Vy.flushSync( () => {
                k(B => {
                    let J = B.findIndex(de => de.id === L.id);
                    return J !== -1 ? [...B.slice(0, J), {
                        ...B[J],
                        ...L
                    }, ...B.slice(J + 1)] : [L, ...B]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    N.useEffect( () => {
        if (l !== "system") {
            W(l);
            return
        }
        l === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? W("dark") : W("light")),
        typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({matches: L}) => {
            W(L ? "dark" : "light")
        }
        )
    }
    , [l]),
    N.useEffect( () => {
        C.length <= 1 && U(!1)
    }
    , [C]),
    N.useEffect( () => {
        let L = B => {
            var J, de;
            r.every(ke => B[ke] || B.code === ke) && (U(!0),
            (J = z.current) == null || J.focus()),
            B.code === "Escape" && (document.activeElement === z.current || (de = z.current) != null && de.contains(document.activeElement)) && U(!1)
        }
        ;
        return document.addEventListener("keydown", L),
        () => document.removeEventListener("keydown", L)
    }
    , [r]),
    N.useEffect( () => {
        if (z.current)
            return () => {
                P.current && (P.current.focus({
                    preventScroll: !0
                }),
                P.current = null,
                O.current = !1)
            }
    }
    , [z.current]),
    C.length ? N.createElement("section", {
        "aria-label": `${v} ${Y}`,
        tabIndex: -1
    }, E.map( (L, B) => {
        var J;
        let[de,ke] = L.split("-");
        return N.createElement("ol", {
            key: L,
            dir: y === "auto" ? wm() : y,
            tabIndex: -1,
            ref: z,
            className: i,
            "data-sonner-toaster": !0,
            "data-theme": I,
            "data-y-position": de,
            "data-x-position": ke,
            style: {
                "--front-toast-height": `${((J = j[0]) == null ? void 0 : J.height) || 0}px`,
                "--offset": typeof a == "number" ? `${a}px` : a || gE,
                "--width": `${yE}px`,
                "--gap": `${m}px`,
                ...h
            },
            onBlur: oe => {
                O.current && !oe.currentTarget.contains(oe.relatedTarget) && (O.current = !1,
                P.current && (P.current.focus({
                    preventScroll: !0
                }),
                P.current = null))
            }
            ,
            onFocus: oe => {
                oe.target instanceof HTMLElement && oe.target.dataset.dismissible === "false" || O.current || (O.current = !0,
                P.current = oe.relatedTarget)
            }
            ,
            onMouseEnter: () => U(!0),
            onMouseMove: () => U(!0),
            onMouseLeave: () => {
                D || U(!1)
            }
            ,
            onPointerDown: oe => {
                oe.target instanceof HTMLElement && oe.target.dataset.dismissible === "false" || H(!0)
            }
            ,
            onPointerUp: () => H(!1)
        }, C.filter(oe => !oe.position && B === 0 || oe.position === L).map( (oe, ut) => {
            var Qt, Gt;
            return N.createElement(SE, {
                key: oe.id,
                icons: x,
                index: ut,
                toast: oe,
                defaultRichColors: c,
                duration: (Qt = g == null ? void 0 : g.duration) != null ? Qt : d,
                className: g == null ? void 0 : g.className,
                descriptionClassName: g == null ? void 0 : g.descriptionClassName,
                invert: t,
                visibleToasts: f,
                closeButton: (Gt = g == null ? void 0 : g.closeButton) != null ? Gt : o,
                interacting: D,
                position: L,
                style: g == null ? void 0 : g.style,
                unstyled: g == null ? void 0 : g.unstyled,
                classNames: g == null ? void 0 : g.classNames,
                cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                removeToast: F,
                toasts: C.filter(It => It.position == oe.position),
                heights: j.filter(It => It.position == oe.position),
                setHeights: R,
                expandByDefault: s,
                gap: m,
                loadingIcon: w,
                expanded: A,
                pauseWhenPageIsHidden: b,
                cn: _
            })
        }
        ))
    }
    )) : null
}
;
const EE = ({...e}) => {
    const {theme: t="system"} = eE();
    return u.jsx(CE, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
;
var kE = Ug.useId || ( () => {}
)
  , jE = 0;
function qr(e) {
    const [t,n] = p.useState(kE());
    return jn( () => {
        e || n(r => r ?? String(jE++))
    }
    , [e]),
    e || (t ? `radix-${t}` : "")
}
const PE = ["top", "right", "bottom", "left"]
  , yr = Math.min
  , mt = Math.max
  , Cl = Math.round
  , ba = Math.floor
  , xr = e => ({
    x: e,
    y: e
})
  , NE = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , TE = {
    start: "end",
    end: "start"
};
function kd(e, t, n) {
    return mt(e, yr(t, n))
}
function Pn(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Nn(e) {
    return e.split("-")[0]
}
function Eo(e) {
    return e.split("-")[1]
}
function uh(e) {
    return e === "x" ? "y" : "x"
}
function dh(e) {
    return e === "y" ? "height" : "width"
}
function wr(e) {
    return ["top", "bottom"].includes(Nn(e)) ? "y" : "x"
}
function fh(e) {
    return uh(wr(e))
}
function RE(e, t, n) {
    n === void 0 && (n = !1);
    const r = Eo(e)
      , s = fh(e)
      , o = dh(s);
    let i = s === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[o] > t.floating[o] && (i = El(i)),
    [i, El(i)]
}
function AE(e) {
    const t = El(e);
    return [jd(e), t, jd(t)]
}
function jd(e) {
    return e.replace(/start|end/g, t => TE[t])
}
function OE(e, t, n) {
    const r = ["left", "right"]
      , s = ["right", "left"]
      , o = ["top", "bottom"]
      , i = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? s : r : t ? r : s;
    case "left":
    case "right":
        return t ? o : i;
    default:
        return []
    }
}
function IE(e, t, n, r) {
    const s = Eo(e);
    let o = OE(Nn(e), n === "start", r);
    return s && (o = o.map(i => i + "-" + s),
    t && (o = o.concat(o.map(jd)))),
    o
}
function El(e) {
    return e.replace(/left|right|bottom|top/g, t => NE[t])
}
function LE(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function T0(e) {
    return typeof e != "number" ? LE(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function kl(e) {
    const {x: t, y: n, width: r, height: s} = e;
    return {
        width: r,
        height: s,
        top: n,
        left: t,
        right: t + r,
        bottom: n + s,
        x: t,
        y: n
    }
}
function bm(e, t, n) {
    let {reference: r, floating: s} = e;
    const o = wr(t)
      , i = fh(t)
      , a = dh(i)
      , l = Nn(t)
      , c = o === "y"
      , d = r.x + r.width / 2 - s.width / 2
      , h = r.y + r.height / 2 - s.height / 2
      , f = r[a] / 2 - s[a] / 2;
    let g;
    switch (l) {
    case "top":
        g = {
            x: d,
            y: r.y - s.height
        };
        break;
    case "bottom":
        g = {
            x: d,
            y: r.y + r.height
        };
        break;
    case "right":
        g = {
            x: r.x + r.width,
            y: h
        };
        break;
    case "left":
        g = {
            x: r.x - s.width,
            y: h
        };
        break;
    default:
        g = {
            x: r.x,
            y: r.y
        }
    }
    switch (Eo(t)) {
    case "start":
        g[i] -= f * (n && c ? -1 : 1);
        break;
    case "end":
        g[i] += f * (n && c ? -1 : 1);
        break
    }
    return g
}
const ME = async (e, t, n) => {
    const {placement: r="bottom", strategy: s="absolute", middleware: o=[], platform: i} = n
      , a = o.filter(Boolean)
      , l = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let c = await i.getElementRects({
        reference: e,
        floating: t,
        strategy: s
    })
      , {x: d, y: h} = bm(c, r, l)
      , f = r
      , g = {}
      , y = 0;
    for (let m = 0; m < a.length; m++) {
        const {name: w, fn: x} = a[m]
          , {x: v, y: b, data: _, reset: C} = await x({
            x: d,
            y: h,
            initialPlacement: r,
            placement: f,
            strategy: s,
            middlewareData: g,
            rects: c,
            platform: i,
            elements: {
                reference: e,
                floating: t
            }
        });
        d = v ?? d,
        h = b ?? h,
        g = {
            ...g,
            [w]: {
                ...g[w],
                ..._
            }
        },
        C && y <= 50 && (y++,
        typeof C == "object" && (C.placement && (f = C.placement),
        C.rects && (c = C.rects === !0 ? await i.getElementRects({
            reference: e,
            floating: t,
            strategy: s
        }) : C.rects),
        {x: d, y: h} = bm(c, f, l)),
        m = -1)
    }
    return {
        x: d,
        y: h,
        placement: f,
        strategy: s,
        middlewareData: g
    }
}
;
async function Ai(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: s, platform: o, rects: i, elements: a, strategy: l} = e
      , {boundary: c="clippingAncestors", rootBoundary: d="viewport", elementContext: h="floating", altBoundary: f=!1, padding: g=0} = Pn(t, e)
      , y = T0(g)
      , w = a[f ? h === "floating" ? "reference" : "floating" : h]
      , x = kl(await o.getClippingRect({
        element: (n = await (o.isElement == null ? void 0 : o.isElement(w))) == null || n ? w : w.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)),
        boundary: c,
        rootBoundary: d,
        strategy: l
    }))
      , v = h === "floating" ? {
        x: r,
        y: s,
        width: i.floating.width,
        height: i.floating.height
    } : i.reference
      , b = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating))
      , _ = await (o.isElement == null ? void 0 : o.isElement(b)) ? await (o.getScale == null ? void 0 : o.getScale(b)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , C = kl(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: v,
        offsetParent: b,
        strategy: l
    }) : v);
    return {
        top: (x.top - C.top + y.top) / _.y,
        bottom: (C.bottom - x.bottom + y.bottom) / _.y,
        left: (x.left - C.left + y.left) / _.x,
        right: (C.right - x.right + y.right) / _.x
    }
}
const DE = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: s, rects: o, platform: i, elements: a, middlewareData: l} = t
          , {element: c, padding: d=0} = Pn(e, t) || {};
        if (c == null)
            return {};
        const h = T0(d)
          , f = {
            x: n,
            y: r
        }
          , g = fh(s)
          , y = dh(g)
          , m = await i.getDimensions(c)
          , w = g === "y"
          , x = w ? "top" : "left"
          , v = w ? "bottom" : "right"
          , b = w ? "clientHeight" : "clientWidth"
          , _ = o.reference[y] + o.reference[g] - f[g] - o.floating[y]
          , C = f[g] - o.reference[g]
          , k = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
        let E = k ? k[b] : 0;
        (!E || !await (i.isElement == null ? void 0 : i.isElement(k))) && (E = a.floating[b] || o.floating[y]);
        const j = _ / 2 - C / 2
          , R = E / 2 - m[y] / 2 - 1
          , A = yr(h[x], R)
          , U = yr(h[v], R)
          , D = A
          , H = E - m[y] - U
          , I = E / 2 - m[y] / 2 + j
          , W = kd(D, I, H)
          , z = !l.arrow && Eo(s) != null && I !== W && o.reference[y] / 2 - (I < D ? A : U) - m[y] / 2 < 0
          , Y = z ? I < D ? I - D : I - H : 0;
        return {
            [g]: f[g] + Y,
            data: {
                [g]: W,
                centerOffset: I - W - Y,
                ...z && {
                    alignmentOffset: Y
                }
            },
            reset: z
        }
    }
})
  , $E = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: s, middlewareData: o, rects: i, initialPlacement: a, platform: l, elements: c} = t
              , {mainAxis: d=!0, crossAxis: h=!0, fallbackPlacements: f, fallbackStrategy: g="bestFit", fallbackAxisSideDirection: y="none", flipAlignment: m=!0, ...w} = Pn(e, t);
            if ((n = o.arrow) != null && n.alignmentOffset)
                return {};
            const x = Nn(s)
              , v = wr(a)
              , b = Nn(a) === a
              , _ = await (l.isRTL == null ? void 0 : l.isRTL(c.floating))
              , C = f || (b || !m ? [El(a)] : AE(a))
              , k = y !== "none";
            !f && k && C.push(...IE(a, m, y, _));
            const E = [a, ...C]
              , j = await Ai(t, w)
              , R = [];
            let A = ((r = o.flip) == null ? void 0 : r.overflows) || [];
            if (d && R.push(j[x]),
            h) {
                const I = RE(s, i, _);
                R.push(j[I[0]], j[I[1]])
            }
            if (A = [...A, {
                placement: s,
                overflows: R
            }],
            !R.every(I => I <= 0)) {
                var U, D;
                const I = (((U = o.flip) == null ? void 0 : U.index) || 0) + 1
                  , W = E[I];
                if (W)
                    return {
                        data: {
                            index: I,
                            overflows: A
                        },
                        reset: {
                            placement: W
                        }
                    };
                let z = (D = A.filter(Y => Y.overflows[0] <= 0).sort( (Y, P) => Y.overflows[1] - P.overflows[1])[0]) == null ? void 0 : D.placement;
                if (!z)
                    switch (g) {
                    case "bestFit":
                        {
                            var H;
                            const Y = (H = A.filter(P => {
                                if (k) {
                                    const O = wr(P.placement);
                                    return O === v || O === "y"
                                }
                                return !0
                            }
                            ).map(P => [P.placement, P.overflows.filter(O => O > 0).reduce( (O, F) => O + F, 0)]).sort( (P, O) => P[1] - O[1])[0]) == null ? void 0 : H[0];
                            Y && (z = Y);
                            break
                        }
                    case "initialPlacement":
                        z = a;
                        break
                    }
                if (s !== z)
                    return {
                        reset: {
                            placement: z
                        }
                    }
            }
            return {}
        }
    }
};
function _m(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Sm(e) {
    return PE.some(t => e[t] >= 0)
}
const FE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...s} = Pn(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const o = await Ai(t, {
                        ...s,
                        elementContext: "reference"
                    })
                      , i = _m(o, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: i,
                            referenceHidden: Sm(i)
                        }
                    }
                }
            case "escaped":
                {
                    const o = await Ai(t, {
                        ...s,
                        altBoundary: !0
                    })
                      , i = _m(o, n.floating);
                    return {
                        data: {
                            escapedOffsets: i,
                            escaped: Sm(i)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function UE(e, t) {
    const {placement: n, platform: r, elements: s} = e
      , o = await (r.isRTL == null ? void 0 : r.isRTL(s.floating))
      , i = Nn(n)
      , a = Eo(n)
      , l = wr(n) === "y"
      , c = ["left", "top"].includes(i) ? -1 : 1
      , d = o && l ? -1 : 1
      , h = Pn(t, e);
    let {mainAxis: f, crossAxis: g, alignmentAxis: y} = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: h.mainAxis || 0,
        crossAxis: h.crossAxis || 0,
        alignmentAxis: h.alignmentAxis
    };
    return a && typeof y == "number" && (g = a === "end" ? y * -1 : y),
    l ? {
        x: g * d,
        y: f * c
    } : {
        x: f * c,
        y: g * d
    }
}
const zE = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: s, y: o, placement: i, middlewareData: a} = t
              , l = await UE(t, e);
            return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                x: s + l.x,
                y: o + l.y,
                data: {
                    ...l,
                    placement: i
                }
            }
        }
    }
}
  , BE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: s} = t
              , {mainAxis: o=!0, crossAxis: i=!1, limiter: a={
                fn: w => {
                    let {x, y: v} = w;
                    return {
                        x,
                        y: v
                    }
                }
            }, ...l} = Pn(e, t)
              , c = {
                x: n,
                y: r
            }
              , d = await Ai(t, l)
              , h = wr(Nn(s))
              , f = uh(h);
            let g = c[f]
              , y = c[h];
            if (o) {
                const w = f === "y" ? "top" : "left"
                  , x = f === "y" ? "bottom" : "right"
                  , v = g + d[w]
                  , b = g - d[x];
                g = kd(v, g, b)
            }
            if (i) {
                const w = h === "y" ? "top" : "left"
                  , x = h === "y" ? "bottom" : "right"
                  , v = y + d[w]
                  , b = y - d[x];
                y = kd(v, y, b)
            }
            const m = a.fn({
                ...t,
                [f]: g,
                [h]: y
            });
            return {
                ...m,
                data: {
                    x: m.x - n,
                    y: m.y - r,
                    enabled: {
                        [f]: o,
                        [h]: i
                    }
                }
            }
        }
    }
}
  , VE = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: s, rects: o, middlewareData: i} = t
              , {offset: a=0, mainAxis: l=!0, crossAxis: c=!0} = Pn(e, t)
              , d = {
                x: n,
                y: r
            }
              , h = wr(s)
              , f = uh(h);
            let g = d[f]
              , y = d[h];
            const m = Pn(a, t)
              , w = typeof m == "number" ? {
                mainAxis: m,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...m
            };
            if (l) {
                const b = f === "y" ? "height" : "width"
                  , _ = o.reference[f] - o.floating[b] + w.mainAxis
                  , C = o.reference[f] + o.reference[b] - w.mainAxis;
                g < _ ? g = _ : g > C && (g = C)
            }
            if (c) {
                var x, v;
                const b = f === "y" ? "width" : "height"
                  , _ = ["top", "left"].includes(Nn(s))
                  , C = o.reference[h] - o.floating[b] + (_ && ((x = i.offset) == null ? void 0 : x[h]) || 0) + (_ ? 0 : w.crossAxis)
                  , k = o.reference[h] + o.reference[b] + (_ ? 0 : ((v = i.offset) == null ? void 0 : v[h]) || 0) - (_ ? w.crossAxis : 0);
                y < C ? y = C : y > k && (y = k)
            }
            return {
                [f]: g,
                [h]: y
            }
        }
    }
}
  , HE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: s, rects: o, platform: i, elements: a} = t
              , {apply: l= () => {}
            , ...c} = Pn(e, t)
              , d = await Ai(t, c)
              , h = Nn(s)
              , f = Eo(s)
              , g = wr(s) === "y"
              , {width: y, height: m} = o.floating;
            let w, x;
            h === "top" || h === "bottom" ? (w = h,
            x = f === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (x = h,
            w = f === "end" ? "top" : "bottom");
            const v = m - d.top - d.bottom
              , b = y - d.left - d.right
              , _ = yr(m - d[w], v)
              , C = yr(y - d[x], b)
              , k = !t.middlewareData.shift;
            let E = _
              , j = C;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (j = b),
            (r = t.middlewareData.shift) != null && r.enabled.y && (E = v),
            k && !f) {
                const A = mt(d.left, 0)
                  , U = mt(d.right, 0)
                  , D = mt(d.top, 0)
                  , H = mt(d.bottom, 0);
                g ? j = y - 2 * (A !== 0 || U !== 0 ? A + U : mt(d.left, d.right)) : E = m - 2 * (D !== 0 || H !== 0 ? D + H : mt(d.top, d.bottom))
            }
            await l({
                ...t,
                availableWidth: j,
                availableHeight: E
            });
            const R = await i.getDimensions(a.floating);
            return y !== R.width || m !== R.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function ic() {
    return typeof window < "u"
}
function ko(e) {
    return R0(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function yt(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function dn(e) {
    var t;
    return (t = (R0(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function R0(e) {
    return ic() ? e instanceof Node || e instanceof yt(e).Node : !1
}
function Wt(e) {
    return ic() ? e instanceof Element || e instanceof yt(e).Element : !1
}
function un(e) {
    return ic() ? e instanceof HTMLElement || e instanceof yt(e).HTMLElement : !1
}
function Cm(e) {
    return !ic() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof yt(e).ShadowRoot
}
function Qi(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: s} = qt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(s)
}
function WE(e) {
    return ["table", "td", "th"].includes(ko(e))
}
function ac(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
function hh(e) {
    const t = ph()
      , n = Wt(e) ? qt(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}
function qE(e) {
    let t = br(e);
    for (; un(t) && !mo(t); ) {
        if (hh(t))
            return t;
        if (ac(t))
            return null;
        t = br(t)
    }
    return null
}
function ph() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function mo(e) {
    return ["html", "body", "#document"].includes(ko(e))
}
function qt(e) {
    return yt(e).getComputedStyle(e)
}
function lc(e) {
    return Wt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function br(e) {
    if (ko(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Cm(e) && e.host || dn(e);
    return Cm(t) ? t.host : t
}
function A0(e) {
    const t = br(e);
    return mo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : un(t) && Qi(t) ? t : A0(t)
}
function Oi(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const s = A0(e)
      , o = s === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , i = yt(s);
    if (o) {
        const a = Pd(i);
        return t.concat(i, i.visualViewport || [], Qi(s) ? s : [], a && n ? Oi(a) : [])
    }
    return t.concat(s, Oi(s, [], n))
}
function Pd(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function O0(e) {
    const t = qt(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const s = un(e)
      , o = s ? e.offsetWidth : n
      , i = s ? e.offsetHeight : r
      , a = Cl(n) !== o || Cl(r) !== i;
    return a && (n = o,
    r = i),
    {
        width: n,
        height: r,
        $: a
    }
}
function mh(e) {
    return Wt(e) ? e : e.contextElement
}
function Vs(e) {
    const t = mh(e);
    if (!un(t))
        return xr(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: s, $: o} = O0(t);
    let i = (o ? Cl(n.width) : n.width) / r
      , a = (o ? Cl(n.height) : n.height) / s;
    return (!i || !Number.isFinite(i)) && (i = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    {
        x: i,
        y: a
    }
}
const KE = xr(0);
function I0(e) {
    const t = yt(e);
    return !ph() || !t.visualViewport ? KE : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function QE(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== yt(e) ? !1 : t
}
function Xr(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const s = e.getBoundingClientRect()
      , o = mh(e);
    let i = xr(1);
    t && (r ? Wt(r) && (i = Vs(r)) : i = Vs(e));
    const a = QE(o, n, r) ? I0(o) : xr(0);
    let l = (s.left + a.x) / i.x
      , c = (s.top + a.y) / i.y
      , d = s.width / i.x
      , h = s.height / i.y;
    if (o) {
        const f = yt(o)
          , g = r && Wt(r) ? yt(r) : r;
        let y = f
          , m = Pd(y);
        for (; m && r && g !== y; ) {
            const w = Vs(m)
              , x = m.getBoundingClientRect()
              , v = qt(m)
              , b = x.left + (m.clientLeft + parseFloat(v.paddingLeft)) * w.x
              , _ = x.top + (m.clientTop + parseFloat(v.paddingTop)) * w.y;
            l *= w.x,
            c *= w.y,
            d *= w.x,
            h *= w.y,
            l += b,
            c += _,
            y = yt(m),
            m = Pd(y)
        }
    }
    return kl({
        width: d,
        height: h,
        x: l,
        y: c
    })
}
function GE(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: s} = e;
    const o = s === "fixed"
      , i = dn(r)
      , a = t ? ac(t.floating) : !1;
    if (r === i || a && o)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , c = xr(1);
    const d = xr(0)
      , h = un(r);
    if ((h || !h && !o) && ((ko(r) !== "body" || Qi(i)) && (l = lc(r)),
    un(r))) {
        const f = Xr(r);
        c = Vs(r),
        d.x = f.x + r.clientLeft,
        d.y = f.y + r.clientTop
    }
    return {
        width: n.width * c.x,
        height: n.height * c.y,
        x: n.x * c.x - l.scrollLeft * c.x + d.x,
        y: n.y * c.y - l.scrollTop * c.y + d.y
    }
}
function YE(e) {
    return Array.from(e.getClientRects())
}
function Nd(e, t) {
    const n = lc(e).scrollLeft;
    return t ? t.left + n : Xr(dn(e)).left + n
}
function JE(e) {
    const t = dn(e)
      , n = lc(e)
      , r = e.ownerDocument.body
      , s = mt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , o = mt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let i = -n.scrollLeft + Nd(e);
    const a = -n.scrollTop;
    return qt(r).direction === "rtl" && (i += mt(t.clientWidth, r.clientWidth) - s),
    {
        width: s,
        height: o,
        x: i,
        y: a
    }
}
function XE(e, t) {
    const n = yt(e)
      , r = dn(e)
      , s = n.visualViewport;
    let o = r.clientWidth
      , i = r.clientHeight
      , a = 0
      , l = 0;
    if (s) {
        o = s.width,
        i = s.height;
        const c = ph();
        (!c || c && t === "fixed") && (a = s.offsetLeft,
        l = s.offsetTop)
    }
    return {
        width: o,
        height: i,
        x: a,
        y: l
    }
}
function ZE(e, t) {
    const n = Xr(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , s = n.left + e.clientLeft
      , o = un(e) ? Vs(e) : xr(1)
      , i = e.clientWidth * o.x
      , a = e.clientHeight * o.y
      , l = s * o.x
      , c = r * o.y;
    return {
        width: i,
        height: a,
        x: l,
        y: c
    }
}
function Em(e, t, n) {
    let r;
    if (t === "viewport")
        r = XE(e, n);
    else if (t === "document")
        r = JE(dn(e));
    else if (Wt(t))
        r = ZE(t, n);
    else {
        const s = I0(e);
        r = {
            ...t,
            x: t.x - s.x,
            y: t.y - s.y
        }
    }
    return kl(r)
}
function L0(e, t) {
    const n = br(e);
    return n === t || !Wt(n) || mo(n) ? !1 : qt(n).position === "fixed" || L0(n, t)
}
function ek(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = Oi(e, [], !1).filter(a => Wt(a) && ko(a) !== "body")
      , s = null;
    const o = qt(e).position === "fixed";
    let i = o ? br(e) : e;
    for (; Wt(i) && !mo(i); ) {
        const a = qt(i)
          , l = hh(i);
        !l && a.position === "fixed" && (s = null),
        (o ? !l && !s : !l && a.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || Qi(i) && !l && L0(e, i)) ? r = r.filter(d => d !== i) : s = a,
        i = br(i)
    }
    return t.set(e, r),
    r
}
function tk(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: s} = e;
    const i = [...n === "clippingAncestors" ? ac(t) ? [] : ek(t, this._c) : [].concat(n), r]
      , a = i[0]
      , l = i.reduce( (c, d) => {
        const h = Em(t, d, s);
        return c.top = mt(h.top, c.top),
        c.right = yr(h.right, c.right),
        c.bottom = yr(h.bottom, c.bottom),
        c.left = mt(h.left, c.left),
        c
    }
    , Em(t, a, s));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function nk(e) {
    const {width: t, height: n} = O0(e);
    return {
        width: t,
        height: n
    }
}
function rk(e, t, n) {
    const r = un(t)
      , s = dn(t)
      , o = n === "fixed"
      , i = Xr(e, !0, o, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = xr(0);
    if (r || !r && !o)
        if ((ko(t) !== "body" || Qi(s)) && (a = lc(t)),
        r) {
            const g = Xr(t, !0, o, t);
            l.x = g.x + t.clientLeft,
            l.y = g.y + t.clientTop
        } else
            s && (l.x = Nd(s));
    let c = 0
      , d = 0;
    if (s && !r && !o) {
        const g = s.getBoundingClientRect();
        d = g.top + a.scrollTop,
        c = g.left + a.scrollLeft - Nd(s, g)
    }
    const h = i.left + a.scrollLeft - l.x - c
      , f = i.top + a.scrollTop - l.y - d;
    return {
        x: h,
        y: f,
        width: i.width,
        height: i.height
    }
}
function au(e) {
    return qt(e).position === "static"
}
function km(e, t) {
    if (!un(e) || qt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return dn(e) === n && (n = n.ownerDocument.body),
    n
}
function M0(e, t) {
    const n = yt(e);
    if (ac(e))
        return n;
    if (!un(e)) {
        let s = br(e);
        for (; s && !mo(s); ) {
            if (Wt(s) && !au(s))
                return s;
            s = br(s)
        }
        return n
    }
    let r = km(e, t);
    for (; r && WE(r) && au(r); )
        r = km(r, t);
    return r && mo(r) && au(r) && !hh(r) ? n : r || qE(e) || n
}
const sk = async function(e) {
    const t = this.getOffsetParent || M0
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: rk(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function ok(e) {
    return qt(e).direction === "rtl"
}
const ik = {
    convertOffsetParentRelativeRectToViewportRelativeRect: GE,
    getDocumentElement: dn,
    getClippingRect: tk,
    getOffsetParent: M0,
    getElementRects: sk,
    getClientRects: YE,
    getDimensions: nk,
    getScale: Vs,
    isElement: Wt,
    isRTL: ok
};
function ak(e, t) {
    let n = null, r;
    const s = dn(e);
    function o() {
        var a;
        clearTimeout(r),
        (a = n) == null || a.disconnect(),
        n = null
    }
    function i(a, l) {
        a === void 0 && (a = !1),
        l === void 0 && (l = 1),
        o();
        const {left: c, top: d, width: h, height: f} = e.getBoundingClientRect();
        if (a || t(),
        !h || !f)
            return;
        const g = ba(d)
          , y = ba(s.clientWidth - (c + h))
          , m = ba(s.clientHeight - (d + f))
          , w = ba(c)
          , v = {
            rootMargin: -g + "px " + -y + "px " + -m + "px " + -w + "px",
            threshold: mt(0, yr(1, l)) || 1
        };
        let b = !0;
        function _(C) {
            const k = C[0].intersectionRatio;
            if (k !== l) {
                if (!b)
                    return i();
                k ? i(!1, k) : r = setTimeout( () => {
                    i(!1, 1e-7)
                }
                , 1e3)
            }
            b = !1
        }
        try {
            n = new IntersectionObserver(_,{
                ...v,
                root: s.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(_,v)
        }
        n.observe(e)
    }
    return i(!0),
    o
}
function lk(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: s=!0, ancestorResize: o=!0, elementResize: i=typeof ResizeObserver == "function", layoutShift: a=typeof IntersectionObserver == "function", animationFrame: l=!1} = r
      , c = mh(e)
      , d = s || o ? [...c ? Oi(c) : [], ...Oi(t)] : [];
    d.forEach(x => {
        s && x.addEventListener("scroll", n, {
            passive: !0
        }),
        o && x.addEventListener("resize", n)
    }
    );
    const h = c && a ? ak(c, n) : null;
    let f = -1
      , g = null;
    i && (g = new ResizeObserver(x => {
        let[v] = x;
        v && v.target === c && g && (g.unobserve(t),
        cancelAnimationFrame(f),
        f = requestAnimationFrame( () => {
            var b;
            (b = g) == null || b.observe(t)
        }
        )),
        n()
    }
    ),
    c && !l && g.observe(c),
    g.observe(t));
    let y, m = l ? Xr(e) : null;
    l && w();
    function w() {
        const x = Xr(e);
        m && (x.x !== m.x || x.y !== m.y || x.width !== m.width || x.height !== m.height) && n(),
        m = x,
        y = requestAnimationFrame(w)
    }
    return n(),
    () => {
        var x;
        d.forEach(v => {
            s && v.removeEventListener("scroll", n),
            o && v.removeEventListener("resize", n)
        }
        ),
        h == null || h(),
        (x = g) == null || x.disconnect(),
        g = null,
        l && cancelAnimationFrame(y)
    }
}
const ck = zE
  , uk = BE
  , dk = $E
  , fk = HE
  , hk = FE
  , jm = DE
  , pk = VE
  , mk = (e, t, n) => {
    const r = new Map
      , s = {
        platform: ik,
        ...n
    }
      , o = {
        ...s.platform,
        _c: r
    };
    return ME(e, t, {
        ...s,
        platform: o
    })
}
;
var qa = typeof document < "u" ? p.useLayoutEffect : p.useEffect;
function jl(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, s;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!jl(e[r], t[r]))
                    return !1;
            return !0
        }
        if (s = Object.keys(e),
        n = s.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, s[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const o = s[r];
            if (!(o === "_owner" && e.$$typeof) && !jl(e[o], t[o]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function D0(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Pm(e, t) {
    const n = D0(e);
    return Math.round(t * n) / n
}
function lu(e) {
    const t = p.useRef(e);
    return qa( () => {
        t.current = e
    }
    ),
    t
}
function gk(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: s, elements: {reference: o, floating: i}={}, transform: a=!0, whileElementsMounted: l, open: c} = e
      , [d,h] = p.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [f,g] = p.useState(r);
    jl(f, r) || g(r);
    const [y,m] = p.useState(null)
      , [w,x] = p.useState(null)
      , v = p.useCallback(P => {
        P !== k.current && (k.current = P,
        m(P))
    }
    , [])
      , b = p.useCallback(P => {
        P !== E.current && (E.current = P,
        x(P))
    }
    , [])
      , _ = o || y
      , C = i || w
      , k = p.useRef(null)
      , E = p.useRef(null)
      , j = p.useRef(d)
      , R = l != null
      , A = lu(l)
      , U = lu(s)
      , D = lu(c)
      , H = p.useCallback( () => {
        if (!k.current || !E.current)
            return;
        const P = {
            placement: t,
            strategy: n,
            middleware: f
        };
        U.current && (P.platform = U.current),
        mk(k.current, E.current, P).then(O => {
            const F = {
                ...O,
                isPositioned: D.current !== !1
            };
            I.current && !jl(j.current, F) && (j.current = F,
            Ki.flushSync( () => {
                h(F)
            }
            ))
        }
        )
    }
    , [f, t, n, U, D]);
    qa( () => {
        c === !1 && j.current.isPositioned && (j.current.isPositioned = !1,
        h(P => ({
            ...P,
            isPositioned: !1
        })))
    }
    , [c]);
    const I = p.useRef(!1);
    qa( () => (I.current = !0,
    () => {
        I.current = !1
    }
    ), []),
    qa( () => {
        if (_ && (k.current = _),
        C && (E.current = C),
        _ && C) {
            if (A.current)
                return A.current(_, C, H);
            H()
        }
    }
    , [_, C, H, A, R]);
    const W = p.useMemo( () => ({
        reference: k,
        floating: E,
        setReference: v,
        setFloating: b
    }), [v, b])
      , z = p.useMemo( () => ({
        reference: _,
        floating: C
    }), [_, C])
      , Y = p.useMemo( () => {
        const P = {
            position: n,
            left: 0,
            top: 0
        };
        if (!z.floating)
            return P;
        const O = Pm(z.floating, d.x)
          , F = Pm(z.floating, d.y);
        return a ? {
            ...P,
            transform: "translate(" + O + "px, " + F + "px)",
            ...D0(z.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: O,
            top: F
        }
    }
    , [n, a, z.floating, d.x, d.y]);
    return p.useMemo( () => ({
        ...d,
        update: H,
        refs: W,
        elements: z,
        floatingStyles: Y
    }), [d, H, W, z, Y])
}
const vk = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: s} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? jm({
                element: r.current,
                padding: s
            }).fn(n) : {} : r ? jm({
                element: r,
                padding: s
            }).fn(n) : {}
        }
    }
}
  , yk = (e, t) => ({
    ...ck(e),
    options: [e, t]
})
  , xk = (e, t) => ({
    ...uk(e),
    options: [e, t]
})
  , wk = (e, t) => ({
    ...pk(e),
    options: [e, t]
})
  , bk = (e, t) => ({
    ...dk(e),
    options: [e, t]
})
  , _k = (e, t) => ({
    ...fk(e),
    options: [e, t]
})
  , Sk = (e, t) => ({
    ...hk(e),
    options: [e, t]
})
  , Ck = (e, t) => ({
    ...vk(e),
    options: [e, t]
});
var Ek = "Arrow"
  , $0 = p.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: s=5, ...o} = e;
    return u.jsx(ne.svg, {
        ...o,
        ref: t,
        width: r,
        height: s,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : u.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
$0.displayName = Ek;
var kk = $0;
function jk(e, t=[]) {
    let n = [];
    function r(o, i) {
        const a = p.createContext(i)
          , l = n.length;
        n = [...n, i];
        function c(h) {
            const {scope: f, children: g, ...y} = h
              , m = (f == null ? void 0 : f[e][l]) || a
              , w = p.useMemo( () => y, Object.values(y));
            return u.jsx(m.Provider, {
                value: w,
                children: g
            })
        }
        function d(h, f) {
            const g = (f == null ? void 0 : f[e][l]) || a
              , y = p.useContext(g);
            if (y)
                return y;
            if (i !== void 0)
                return i;
            throw new Error(`\`${h}\` must be used within \`${o}\``)
        }
        return c.displayName = o + "Provider",
        [c, d]
    }
    const s = () => {
        const o = n.map(i => p.createContext(i));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || o;
            return p.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return s.scopeName = e,
    [r, Pk(s, ...t)]
}
function Pk(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(s => ({
            useScope: s(),
            scopeName: s.scopeName
        }));
        return function(o) {
            const i = r.reduce( (a, {useScope: l, scopeName: c}) => {
                const h = l(o)[`__scope${c}`];
                return {
                    ...a,
                    ...h
                }
            }
            , {});
            return p.useMemo( () => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function Nk(e) {
    const [t,n] = p.useState(void 0);
    return jn( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(s => {
                if (!Array.isArray(s) || !s.length)
                    return;
                const o = s[0];
                let i, a;
                if ("borderBoxSize"in o) {
                    const l = o.borderBoxSize
                      , c = Array.isArray(l) ? l[0] : l;
                    i = c.inlineSize,
                    a = c.blockSize
                } else
                    i = e.offsetWidth,
                    a = e.offsetHeight;
                n({
                    width: i,
                    height: a
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var F0 = "Popper"
  , [U0,z0] = jk(F0)
  , [EA,B0] = U0(F0)
  , V0 = "PopperAnchor"
  , H0 = p.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...s} = e
      , o = B0(V0, n)
      , i = p.useRef(null)
      , a = Ie(t, i);
    return p.useEffect( () => {
        o.onAnchorChange((r == null ? void 0 : r.current) || i.current)
    }
    ),
    r ? null : u.jsx(ne.div, {
        ...s,
        ref: a
    })
}
);
H0.displayName = V0;
var gh = "PopperContent"
  , [Tk,Rk] = U0(gh)
  , W0 = p.forwardRef( (e, t) => {
    var ut, Qt, Gt, It, ls, cs;
    const {__scopePopper: n, side: r="bottom", sideOffset: s=0, align: o="center", alignOffset: i=0, arrowPadding: a=0, avoidCollisions: l=!0, collisionBoundary: c=[], collisionPadding: d=0, sticky: h="partial", hideWhenDetached: f=!1, updatePositionStrategy: g="optimized", onPlaced: y, ...m} = e
      , w = B0(gh, n)
      , [x,v] = p.useState(null)
      , b = Ie(t, Pr => v(Pr))
      , [_,C] = p.useState(null)
      , k = Nk(_)
      , E = (k == null ? void 0 : k.width) ?? 0
      , j = (k == null ? void 0 : k.height) ?? 0
      , R = r + (o !== "center" ? "-" + o : "")
      , A = typeof d == "number" ? d : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...d
    }
      , U = Array.isArray(c) ? c : [c]
      , D = U.length > 0
      , H = {
        padding: A,
        boundary: U.filter(Ok),
        altBoundary: D
    }
      , {refs: I, floatingStyles: W, placement: z, isPositioned: Y, middlewareData: P} = gk({
        strategy: "fixed",
        placement: R,
        whileElementsMounted: (...Pr) => lk(...Pr, {
            animationFrame: g === "always"
        }),
        elements: {
            reference: w.anchor
        },
        middleware: [yk({
            mainAxis: s + j,
            alignmentAxis: i
        }), l && xk({
            mainAxis: !0,
            crossAxis: !1,
            limiter: h === "partial" ? wk() : void 0,
            ...H
        }), l && bk({
            ...H
        }), _k({
            ...H,
            apply: ({elements: Pr, rects: Lo, availableWidth: Ji, availableHeight: On}) => {
                const {width: kc, height: jc} = Lo.reference
                  , Le = Pr.floating.style;
                Le.setProperty("--radix-popper-available-width", `${Ji}px`),
                Le.setProperty("--radix-popper-available-height", `${On}px`),
                Le.setProperty("--radix-popper-anchor-width", `${kc}px`),
                Le.setProperty("--radix-popper-anchor-height", `${jc}px`)
            }
        }), _ && Ck({
            element: _,
            padding: a
        }), Ik({
            arrowWidth: E,
            arrowHeight: j
        }), f && Sk({
            strategy: "referenceHidden",
            ...H
        })]
    })
      , [O,F] = Q0(z)
      , L = wt(y);
    jn( () => {
        Y && (L == null || L())
    }
    , [Y, L]);
    const B = (ut = P.arrow) == null ? void 0 : ut.x
      , J = (Qt = P.arrow) == null ? void 0 : Qt.y
      , de = ((Gt = P.arrow) == null ? void 0 : Gt.centerOffset) !== 0
      , [ke,oe] = p.useState();
    return jn( () => {
        x && oe(window.getComputedStyle(x).zIndex)
    }
    , [x]),
    u.jsx("div", {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...W,
            transform: Y ? W.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: ke,
            "--radix-popper-transform-origin": [(It = P.transformOrigin) == null ? void 0 : It.x, (ls = P.transformOrigin) == null ? void 0 : ls.y].join(" "),
            ...((cs = P.hide) == null ? void 0 : cs.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: u.jsx(Tk, {
            scope: n,
            placedSide: O,
            onArrowChange: C,
            arrowX: B,
            arrowY: J,
            shouldHideArrow: de,
            children: u.jsx(ne.div, {
                "data-side": O,
                "data-align": F,
                ...m,
                ref: b,
                style: {
                    ...m.style,
                    animation: Y ? void 0 : "none"
                }
            })
        })
    })
}
);
W0.displayName = gh;
var q0 = "PopperArrow"
  , Ak = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , K0 = p.forwardRef(function(t, n) {
    const {__scopePopper: r, ...s} = t
      , o = Rk(q0, r)
      , i = Ak[o.placedSide];
    return u.jsx("span", {
        ref: o.onArrowChange,
        style: {
            position: "absolute",
            left: o.arrowX,
            top: o.arrowY,
            [i]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[o.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[o.placedSide],
            visibility: o.shouldHideArrow ? "hidden" : void 0
        },
        children: u.jsx(kk, {
            ...s,
            ref: n,
            style: {
                ...s.style,
                display: "block"
            }
        })
    })
});
K0.displayName = q0;
function Ok(e) {
    return e !== null
}
var Ik = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, x, v;
        const {placement: n, rects: r, middlewareData: s} = t
          , i = ((w = s.arrow) == null ? void 0 : w.centerOffset) !== 0
          , a = i ? 0 : e.arrowWidth
          , l = i ? 0 : e.arrowHeight
          , [c,d] = Q0(n)
          , h = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[d]
          , f = (((x = s.arrow) == null ? void 0 : x.x) ?? 0) + a / 2
          , g = (((v = s.arrow) == null ? void 0 : v.y) ?? 0) + l / 2;
        let y = ""
          , m = "";
        return c === "bottom" ? (y = i ? h : `${f}px`,
        m = `${-l}px`) : c === "top" ? (y = i ? h : `${f}px`,
        m = `${r.floating.height + l}px`) : c === "right" ? (y = `${-l}px`,
        m = i ? h : `${g}px`) : c === "left" && (y = `${r.floating.width + l}px`,
        m = i ? h : `${g}px`),
        {
            data: {
                x: y,
                y: m
            }
        }
    }
});
function Q0(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var Lk = H0
  , Mk = W0
  , Dk = K0
  , [cc,kA] = So("Tooltip", [z0])
  , vh = z0()
  , G0 = "TooltipProvider"
  , $k = 700
  , Nm = "tooltip.open"
  , [Fk,Y0] = cc(G0)
  , J0 = e => {
    const {__scopeTooltip: t, delayDuration: n=$k, skipDelayDuration: r=300, disableHoverableContent: s=!1, children: o} = e
      , [i,a] = p.useState(!0)
      , l = p.useRef(!1)
      , c = p.useRef(0);
    return p.useEffect( () => {
        const d = c.current;
        return () => window.clearTimeout(d)
    }
    , []),
    u.jsx(Fk, {
        scope: t,
        isOpenDelayed: i,
        delayDuration: n,
        onOpen: p.useCallback( () => {
            window.clearTimeout(c.current),
            a(!1)
        }
        , []),
        onClose: p.useCallback( () => {
            window.clearTimeout(c.current),
            c.current = window.setTimeout( () => a(!0), r)
        }
        , [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: p.useCallback(d => {
            l.current = d
        }
        , []),
        disableHoverableContent: s,
        children: o
    })
}
;
J0.displayName = G0;
var X0 = "Tooltip"
  , [jA,uc] = cc(X0)
  , Td = "TooltipTrigger"
  , Uk = p.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , s = uc(Td, n)
      , o = Y0(Td, n)
      , i = vh(n)
      , a = p.useRef(null)
      , l = Ie(t, a, s.onTriggerChange)
      , c = p.useRef(!1)
      , d = p.useRef(!1)
      , h = p.useCallback( () => c.current = !1, []);
    return p.useEffect( () => () => document.removeEventListener("pointerup", h), [h]),
    u.jsx(Lk, {
        asChild: !0,
        ...i,
        children: u.jsx(ne.button, {
            "aria-describedby": s.open ? s.contentId : void 0,
            "data-state": s.stateAttribute,
            ...r,
            ref: l,
            onPointerMove: te(e.onPointerMove, f => {
                f.pointerType !== "touch" && !d.current && !o.isPointerInTransitRef.current && (s.onTriggerEnter(),
                d.current = !0)
            }
            ),
            onPointerLeave: te(e.onPointerLeave, () => {
                s.onTriggerLeave(),
                d.current = !1
            }
            ),
            onPointerDown: te(e.onPointerDown, () => {
                c.current = !0,
                document.addEventListener("pointerup", h, {
                    once: !0
                })
            }
            ),
            onFocus: te(e.onFocus, () => {
                c.current || s.onOpen()
            }
            ),
            onBlur: te(e.onBlur, s.onClose),
            onClick: te(e.onClick, s.onClose)
        })
    })
}
);
Uk.displayName = Td;
var zk = "TooltipPortal"
  , [PA,Bk] = cc(zk, {
    forceMount: void 0
})
  , go = "TooltipContent"
  , Z0 = p.forwardRef( (e, t) => {
    const n = Bk(go, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: s="top", ...o} = e
      , i = uc(go, e.__scopeTooltip);
    return u.jsx(Er, {
        present: r || i.open,
        children: i.disableHoverableContent ? u.jsx(ex, {
            side: s,
            ...o,
            ref: t
        }) : u.jsx(Vk, {
            side: s,
            ...o,
            ref: t
        })
    })
}
)
  , Vk = p.forwardRef( (e, t) => {
    const n = uc(go, e.__scopeTooltip)
      , r = Y0(go, e.__scopeTooltip)
      , s = p.useRef(null)
      , o = Ie(t, s)
      , [i,a] = p.useState(null)
      , {trigger: l, onClose: c} = n
      , d = s.current
      , {onPointerInTransitChange: h} = r
      , f = p.useCallback( () => {
        a(null),
        h(!1)
    }
    , [h])
      , g = p.useCallback( (y, m) => {
        const w = y.currentTarget
          , x = {
            x: y.clientX,
            y: y.clientY
        }
          , v = Kk(x, w.getBoundingClientRect())
          , b = Qk(x, v)
          , _ = Gk(m.getBoundingClientRect())
          , C = Jk([...b, ..._]);
        a(C),
        h(!0)
    }
    , [h]);
    return p.useEffect( () => () => f(), [f]),
    p.useEffect( () => {
        if (l && d) {
            const y = w => g(w, d)
              , m = w => g(w, l);
            return l.addEventListener("pointerleave", y),
            d.addEventListener("pointerleave", m),
            () => {
                l.removeEventListener("pointerleave", y),
                d.removeEventListener("pointerleave", m)
            }
        }
    }
    , [l, d, g, f]),
    p.useEffect( () => {
        if (i) {
            const y = m => {
                const w = m.target
                  , x = {
                    x: m.clientX,
                    y: m.clientY
                }
                  , v = (l == null ? void 0 : l.contains(w)) || (d == null ? void 0 : d.contains(w))
                  , b = !Yk(x, i);
                v ? f() : b && (f(),
                c())
            }
            ;
            return document.addEventListener("pointermove", y),
            () => document.removeEventListener("pointermove", y)
        }
    }
    , [l, d, i, c, f]),
    u.jsx(ex, {
        ...e,
        ref: o
    })
}
)
  , [Hk,Wk] = cc(X0, {
    isInside: !1
})
  , ex = p.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": s, onEscapeKeyDown: o, onPointerDownOutside: i, ...a} = e
      , l = uc(go, n)
      , c = vh(n)
      , {onClose: d} = l;
    return p.useEffect( () => (document.addEventListener(Nm, d),
    () => document.removeEventListener(Nm, d)), [d]),
    p.useEffect( () => {
        if (l.trigger) {
            const h = f => {
                const g = f.target;
                g != null && g.contains(l.trigger) && d()
            }
            ;
            return window.addEventListener("scroll", h, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", h, {
                capture: !0
            })
        }
    }
    , [l.trigger, d]),
    u.jsx(ec, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: i,
        onFocusOutside: h => h.preventDefault(),
        onDismiss: d,
        children: u.jsxs(Mk, {
            "data-state": l.stateAttribute,
            ...c,
            ...a,
            ref: t,
            style: {
                ...a.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [u.jsx(qy, {
                children: r
            }), u.jsx(Hk, {
                scope: n,
                isInside: !0,
                children: u.jsx(MS, {
                    id: l.contentId,
                    role: "tooltip",
                    children: s || r
                })
            })]
        })
    })
}
);
Z0.displayName = go;
var tx = "TooltipArrow"
  , qk = p.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , s = vh(n);
    return Wk(tx, n).isInside ? null : u.jsx(Dk, {
        ...s,
        ...r,
        ref: t
    })
}
);
qk.displayName = tx;
function Kk(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , s = Math.abs(t.right - e.x)
      , o = Math.abs(t.left - e.x);
    switch (Math.min(n, r, s, o)) {
    case o:
        return "left";
    case s:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function Qk(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function Gk(e) {
    const {top: t, right: n, bottom: r, left: s} = e;
    return [{
        x: s,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: s,
        y: r
    }]
}
function Yk(e, t) {
    const {x: n, y: r} = e;
    let s = !1;
    for (let o = 0, i = t.length - 1; o < t.length; i = o++) {
        const a = t[o].x
          , l = t[o].y
          , c = t[i].x
          , d = t[i].y;
        l > r != d > r && n < (c - a) * (r - l) / (d - l) + a && (s = !s)
    }
    return s
}
function Jk(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    Xk(t)
}
function Xk(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const s = e[r];
        for (; t.length >= 2; ) {
            const o = t[t.length - 1]
              , i = t[t.length - 2];
            if ((o.x - i.x) * (s.y - i.y) >= (o.y - i.y) * (s.x - i.x))
                t.pop();
            else
                break
        }
        t.push(s)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const s = e[r];
        for (; n.length >= 2; ) {
            const o = n[n.length - 1]
              , i = n[n.length - 2];
            if ((o.x - i.x) * (s.y - i.y) >= (o.y - i.y) * (s.x - i.x))
                n.pop();
            else
                break
        }
        n.push(s)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var Zk = J0
  , nx = Z0;
const ej = Zk
  , tj = p.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => u.jsx(nx, {
    ref: r,
    sideOffset: t,
    className: se("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
tj.displayName = nx.displayName;
var jo = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , Zr = typeof window > "u" || "Deno"in globalThis;
function Ct() {}
function nj(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Rd(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function rx(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Hs(e, t) {
    return typeof e == "function" ? e(t) : e
}
function zt(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Tm(e, t) {
    const {type: n="all", exact: r, fetchStatus: s, predicate: o, queryKey: i, stale: a} = e;
    if (i) {
        if (r) {
            if (t.queryHash !== yh(i, t.options))
                return !1
        } else if (!Ii(t.queryKey, i))
            return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l)
            return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || s && s !== t.state.fetchStatus || o && !o(t))
}
function Rm(e, t) {
    const {exact: n, status: r, predicate: s, mutationKey: o} = e;
    if (o) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (es(t.options.mutationKey) !== es(o))
                return !1
        } else if (!Ii(t.options.mutationKey, o))
            return !1
    }
    return !(r && t.state.status !== r || s && !s(t))
}
function yh(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || es)(e)
}
function es(e) {
    return JSON.stringify(e, (t, n) => Ad(n) ? Object.keys(n).sort().reduce( (r, s) => (r[s] = n[s],
    r), {}) : n)
}
function Ii(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !Ii(e[n], t[n])) : !1
}
function sx(e, t) {
    if (e === t)
        return e;
    const n = Am(e) && Am(t);
    if (n || Ad(e) && Ad(t)) {
        const r = n ? e : Object.keys(e)
          , s = r.length
          , o = n ? t : Object.keys(t)
          , i = o.length
          , a = n ? [] : {};
        let l = 0;
        for (let c = 0; c < i; c++) {
            const d = n ? c : o[c];
            (!n && r.includes(d) || n) && e[d] === void 0 && t[d] === void 0 ? (a[d] = void 0,
            l++) : (a[d] = sx(e[d], t[d]),
            a[d] === e[d] && e[d] !== void 0 && l++)
        }
        return s === i && l === s ? e : a
    }
    return t
}
function Pl(e, t) {
    if (!t || Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (e[n] !== t[n])
            return !1;
    return !0
}
function Am(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Ad(e) {
    if (!Om(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!Om(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function Om(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function rj(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function Od(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? sx(e, t) : t
}
function sj(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function oj(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var xh = Symbol();
function ox(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === xh ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Dr, Gn, Ks, xg, ij = (xg = class extends jo {
    constructor() {
        super();
        V(this, Dr);
        V(this, Gn);
        V(this, Ks);
        M(this, Ks, t => {
            if (!Zr && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        S(this, Gn) || this.setEventListener(S(this, Ks))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = S(this, Gn)) == null || t.call(this),
        M(this, Gn, void 0))
    }
    setEventListener(t) {
        var n;
        M(this, Ks, t),
        (n = S(this, Gn)) == null || n.call(this),
        M(this, Gn, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        S(this, Dr) !== t && (M(this, Dr, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof S(this, Dr) == "boolean" ? S(this, Dr) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
Dr = new WeakMap,
Gn = new WeakMap,
Ks = new WeakMap,
xg), wh = new ij, Qs, Yn, Gs, wg, aj = (wg = class extends jo {
    constructor() {
        super();
        V(this, Qs, !0);
        V(this, Yn);
        V(this, Gs);
        M(this, Gs, t => {
            if (!Zr && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        S(this, Yn) || this.setEventListener(S(this, Gs))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = S(this, Yn)) == null || t.call(this),
        M(this, Yn, void 0))
    }
    setEventListener(t) {
        var n;
        M(this, Gs, t),
        (n = S(this, Yn)) == null || n.call(this),
        M(this, Yn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        S(this, Qs) !== t && (M(this, Qs, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return S(this, Qs)
    }
}
,
Qs = new WeakMap,
Yn = new WeakMap,
Gs = new WeakMap,
wg), Nl = new aj;
function Id() {
    let e, t;
    const n = new Promise( (s, o) => {
        e = s,
        t = o
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(s) {
        Object.assign(n, s),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = s => {
        r({
            status: "fulfilled",
            value: s
        }),
        e(s)
    }
    ,
    n.reject = s => {
        r({
            status: "rejected",
            reason: s
        }),
        t(s)
    }
    ,
    n
}
function lj(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function ix(e) {
    return (e ?? "online") === "online" ? Nl.isOnline() : !0
}
var ax = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function cu(e) {
    return e instanceof ax
}
function lx(e) {
    let t = !1, n = 0, r = !1, s;
    const o = Id()
      , i = m => {
        var w;
        r || (f(new ax(m)),
        (w = e.abort) == null || w.call(e))
    }
      , a = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , c = () => wh.isFocused() && (e.networkMode === "always" || Nl.isOnline()) && e.canRun()
      , d = () => ix(e.networkMode) && e.canRun()
      , h = m => {
        var w;
        r || (r = !0,
        (w = e.onSuccess) == null || w.call(e, m),
        s == null || s(),
        o.resolve(m))
    }
      , f = m => {
        var w;
        r || (r = !0,
        (w = e.onError) == null || w.call(e, m),
        s == null || s(),
        o.reject(m))
    }
      , g = () => new Promise(m => {
        var w;
        s = x => {
            (r || c()) && m(x)
        }
        ,
        (w = e.onPause) == null || w.call(e)
    }
    ).then( () => {
        var m;
        s = void 0,
        r || (m = e.onContinue) == null || m.call(e)
    }
    )
      , y = () => {
        if (r)
            return;
        let m;
        const w = n === 0 ? e.initialPromise : void 0;
        try {
            m = w ?? e.fn()
        } catch (x) {
            m = Promise.reject(x)
        }
        Promise.resolve(m).then(h).catch(x => {
            var k;
            if (r)
                return;
            const v = e.retry ?? (Zr ? 0 : 3)
              , b = e.retryDelay ?? lj
              , _ = typeof b == "function" ? b(n, x) : b
              , C = v === !0 || typeof v == "number" && n < v || typeof v == "function" && v(n, x);
            if (t || !C) {
                f(x);
                return
            }
            n++,
            (k = e.onFail) == null || k.call(e, n, x),
            rj(_).then( () => c() ? void 0 : g()).then( () => {
                t ? f(x) : y()
            }
            )
        }
        )
    }
    ;
    return {
        promise: o,
        cancel: i,
        continue: () => (s == null || s(),
        o),
        cancelRetry: a,
        continueRetry: l,
        canStart: d,
        start: () => (d() ? y() : g().then(y),
        o)
    }
}
function cj() {
    let e = []
      , t = 0
      , n = a => {
        a()
    }
      , r = a => {
        a()
    }
      , s = a => setTimeout(a, 0);
    const o = a => {
        t ? e.push(a) : s( () => {
            n(a)
        }
        )
    }
      , i = () => {
        const a = e;
        e = [],
        a.length && s( () => {
            r( () => {
                a.forEach(l => {
                    n(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: a => {
            let l;
            t++;
            try {
                l = a()
            } finally {
                t--,
                t || i()
            }
            return l
        }
        ,
        batchCalls: a => (...l) => {
            o( () => {
                a(...l)
            }
            )
        }
        ,
        schedule: o,
        setNotifyFunction: a => {
            n = a
        }
        ,
        setBatchNotifyFunction: a => {
            r = a
        }
        ,
        setScheduler: a => {
            s = a
        }
    }
}
var Pe = cj(), $r, bg, cx = (bg = class {
    constructor() {
        V(this, $r)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        Rd(this.gcTime) && M(this, $r, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (Zr ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        S(this, $r) && (clearTimeout(S(this, $r)),
        M(this, $r, void 0))
    }
}
,
$r = new WeakMap,
bg), Ys, Js, St, ze, $i, Fr, Dt, pn, _g, uj = (_g = class extends cx {
    constructor(t) {
        super();
        V(this, Dt);
        V(this, Ys);
        V(this, Js);
        V(this, St);
        V(this, ze);
        V(this, $i);
        V(this, Fr);
        M(this, Fr, !1),
        M(this, $i, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        M(this, St, t.cache),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        M(this, Ys, dj(this.options)),
        this.state = t.state ?? S(this, Ys),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = S(this, ze)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...S(this, $i),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && S(this, St).remove(this)
    }
    setData(t, n) {
        const r = Od(this.state.data, t, this.options);
        return G(this, Dt, pn).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        G(this, Dt, pn).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, s;
        const n = (r = S(this, ze)) == null ? void 0 : r.promise;
        return (s = S(this, ze)) == null || s.cancel(t),
        n ? n.then(Ct).catch(Ct) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(S(this, Ys))
    }
    isActive() {
        return this.observers.some(t => zt(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === xh || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStale() {
        return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0
    }
    isStaleByTime(t=0) {
        return this.state.isInvalidated || this.state.data === void 0 || !rx(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = S(this, ze)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = S(this, ze)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        S(this, St).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (S(this, ze) && (S(this, Fr) ? S(this, ze).cancel({
            revert: !0
        }) : S(this, ze).cancelRetry()),
        this.scheduleGc()),
        S(this, St).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || G(this, Dt, pn).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var l, c, d;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (S(this, ze))
                return S(this, ze).continueRetry(),
                S(this, ze).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const h = this.observers.find(f => f.options.queryFn);
            h && this.setOptions(h.options)
        }
        const r = new AbortController
          , s = h => {
            Object.defineProperty(h, "signal", {
                enumerable: !0,
                get: () => (M(this, Fr, !0),
                r.signal)
            })
        }
          , o = () => {
            const h = ox(this.options, n)
              , f = {
                queryKey: this.queryKey,
                meta: this.meta
            };
            return s(f),
            M(this, Fr, !1),
            this.options.persister ? this.options.persister(h, f, this) : h(f)
        }
          , i = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: o
        };
        s(i),
        (l = this.options.behavior) == null || l.onFetch(i, this),
        M(this, Js, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = i.fetchOptions) == null ? void 0 : c.meta)) && G(this, Dt, pn).call(this, {
            type: "fetch",
            meta: (d = i.fetchOptions) == null ? void 0 : d.meta
        });
        const a = h => {
            var f, g, y, m;
            cu(h) && h.silent || G(this, Dt, pn).call(this, {
                type: "error",
                error: h
            }),
            cu(h) || ((g = (f = S(this, St).config).onError) == null || g.call(f, h, this),
            (m = (y = S(this, St).config).onSettled) == null || m.call(y, this.state.data, h, this)),
            this.scheduleGc()
        }
        ;
        return M(this, ze, lx({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: i.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: h => {
                var f, g, y, m;
                if (h === void 0) {
                    a(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(h)
                } catch (w) {
                    a(w);
                    return
                }
                (g = (f = S(this, St).config).onSuccess) == null || g.call(f, h, this),
                (m = (y = S(this, St).config).onSettled) == null || m.call(y, h, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: a,
            onFail: (h, f) => {
                G(this, Dt, pn).call(this, {
                    type: "failed",
                    failureCount: h,
                    error: f
                })
            }
            ,
            onPause: () => {
                G(this, Dt, pn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                G(this, Dt, pn).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: i.options.retry,
            retryDelay: i.options.retryDelay,
            networkMode: i.options.networkMode,
            canRun: () => !0
        })),
        S(this, ze).start()
    }
}
,
Ys = new WeakMap,
Js = new WeakMap,
St = new WeakMap,
ze = new WeakMap,
$i = new WeakMap,
Fr = new WeakMap,
Dt = new WeakSet,
pn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...ux(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const s = t.error;
            return cu(s) && s.revert && S(this, Js) ? {
                ...S(this, Js),
                fetchStatus: "idle"
            } : {
                ...r,
                error: s,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: s,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    Pe.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        S(this, St).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
_g);
function ux(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: ix(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function dj(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var tn, Sg, fj = (Sg = class extends jo {
    constructor(t={}) {
        super();
        V(this, tn);
        this.config = t,
        M(this, tn, new Map)
    }
    build(t, n, r) {
        const s = n.queryKey
          , o = n.queryHash ?? yh(s, n);
        let i = this.get(o);
        return i || (i = new uj({
            cache: this,
            queryKey: s,
            queryHash: o,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(s)
        }),
        this.add(i)),
        i
    }
    add(t) {
        S(this, tn).has(t.queryHash) || (S(this, tn).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = S(this, tn).get(t.queryHash);
        n && (t.destroy(),
        n === t && S(this, tn).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        Pe.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return S(this, tn).get(t)
    }
    getAll() {
        return [...S(this, tn).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Tm(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => Tm(t, r)) : n
    }
    notify(t) {
        Pe.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        Pe.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        Pe.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
tn = new WeakMap,
Sg), nn, We, Ur, rn, $n, Cg, hj = (Cg = class extends cx {
    constructor(t) {
        super();
        V(this, rn);
        V(this, nn);
        V(this, We);
        V(this, Ur);
        this.mutationId = t.mutationId,
        M(this, We, t.mutationCache),
        M(this, nn, []),
        this.state = t.state || dx(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        S(this, nn).includes(t) || (S(this, nn).push(t),
        this.clearGcTimeout(),
        S(this, We).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        M(this, nn, S(this, nn).filter(n => n !== t)),
        this.scheduleGc(),
        S(this, We).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        S(this, nn).length || (this.state.status === "pending" ? this.scheduleGc() : S(this, We).remove(this))
    }
    continue() {
        var t;
        return ((t = S(this, Ur)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var s, o, i, a, l, c, d, h, f, g, y, m, w, x, v, b, _, C, k, E;
        M(this, Ur, lx({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (j, R) => {
                G(this, rn, $n).call(this, {
                    type: "failed",
                    failureCount: j,
                    error: R
                })
            }
            ,
            onPause: () => {
                G(this, rn, $n).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                G(this, rn, $n).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => S(this, We).canRun(this)
        }));
        const n = this.state.status === "pending"
          , r = !S(this, Ur).canStart();
        try {
            if (!n) {
                G(this, rn, $n).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: r
                }),
                await ((o = (s = S(this, We).config).onMutate) == null ? void 0 : o.call(s, t, this));
                const R = await ((a = (i = this.options).onMutate) == null ? void 0 : a.call(i, t));
                R !== this.state.context && G(this, rn, $n).call(this, {
                    type: "pending",
                    context: R,
                    variables: t,
                    isPaused: r
                })
            }
            const j = await S(this, Ur).start();
            return await ((c = (l = S(this, We).config).onSuccess) == null ? void 0 : c.call(l, j, t, this.state.context, this)),
            await ((h = (d = this.options).onSuccess) == null ? void 0 : h.call(d, j, t, this.state.context)),
            await ((g = (f = S(this, We).config).onSettled) == null ? void 0 : g.call(f, j, null, this.state.variables, this.state.context, this)),
            await ((m = (y = this.options).onSettled) == null ? void 0 : m.call(y, j, null, t, this.state.context)),
            G(this, rn, $n).call(this, {
                type: "success",
                data: j
            }),
            j
        } catch (j) {
            try {
                throw await ((x = (w = S(this, We).config).onError) == null ? void 0 : x.call(w, j, t, this.state.context, this)),
                await ((b = (v = this.options).onError) == null ? void 0 : b.call(v, j, t, this.state.context)),
                await ((C = (_ = S(this, We).config).onSettled) == null ? void 0 : C.call(_, void 0, j, this.state.variables, this.state.context, this)),
                await ((E = (k = this.options).onSettled) == null ? void 0 : E.call(k, void 0, j, t, this.state.context)),
                j
            } finally {
                G(this, rn, $n).call(this, {
                    type: "error",
                    error: j
                })
            }
        } finally {
            S(this, We).runNext(this)
        }
    }
}
,
nn = new WeakMap,
We = new WeakMap,
Ur = new WeakMap,
rn = new WeakSet,
$n = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    Pe.batch( () => {
        S(this, nn).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        S(this, We).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Cg);
function dx() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var ft, Fi, Eg, pj = (Eg = class extends jo {
    constructor(t={}) {
        super();
        V(this, ft);
        V(this, Fi);
        this.config = t,
        M(this, ft, new Map),
        M(this, Fi, Date.now())
    }
    build(t, n, r) {
        const s = new hj({
            mutationCache: this,
            mutationId: ++ea(this, Fi)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(s),
        s
    }
    add(t) {
        const n = _a(t)
          , r = S(this, ft).get(n) ?? [];
        r.push(t),
        S(this, ft).set(n, r),
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        var r;
        const n = _a(t);
        if (S(this, ft).has(n)) {
            const s = (r = S(this, ft).get(n)) == null ? void 0 : r.filter(o => o !== t);
            s && (s.length === 0 ? S(this, ft).delete(n) : S(this, ft).set(n, s))
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        var r;
        const n = (r = S(this, ft).get(_a(t))) == null ? void 0 : r.find(s => s.state.status === "pending");
        return !n || n === t
    }
    runNext(t) {
        var r;
        const n = (r = S(this, ft).get(_a(t))) == null ? void 0 : r.find(s => s !== t && s.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve()
    }
    clear() {
        Pe.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    getAll() {
        return [...S(this, ft).values()].flat()
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Rm(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => Rm(t, n))
    }
    notify(t) {
        Pe.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return Pe.batch( () => Promise.all(t.map(n => n.continue().catch(Ct))))
    }
}
,
ft = new WeakMap,
Fi = new WeakMap,
Eg);
function _a(e) {
    var t;
    return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
}
function Im(e) {
    return {
        onFetch: (t, n) => {
            var d, h, f, g, y;
            const r = t.options
              , s = (f = (h = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : h.fetchMore) == null ? void 0 : f.direction
              , o = ((g = t.state.data) == null ? void 0 : g.pages) || []
              , i = ((y = t.state.data) == null ? void 0 : y.pageParams) || [];
            let a = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const c = async () => {
                let m = !1;
                const w = b => {
                    Object.defineProperty(b, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? m = !0 : t.signal.addEventListener("abort", () => {
                            m = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , x = ox(t.options, t.fetchOptions)
                  , v = async (b, _, C) => {
                    if (m)
                        return Promise.reject();
                    if (_ == null && b.pages.length)
                        return Promise.resolve(b);
                    const k = {
                        queryKey: t.queryKey,
                        pageParam: _,
                        direction: C ? "backward" : "forward",
                        meta: t.options.meta
                    };
                    w(k);
                    const E = await x(k)
                      , {maxPages: j} = t.options
                      , R = C ? oj : sj;
                    return {
                        pages: R(b.pages, E, j),
                        pageParams: R(b.pageParams, _, j)
                    }
                }
                ;
                if (s && o.length) {
                    const b = s === "backward"
                      , _ = b ? mj : Lm
                      , C = {
                        pages: o,
                        pageParams: i
                    }
                      , k = _(r, C);
                    a = await v(C, k, b)
                } else {
                    const b = e ?? o.length;
                    do {
                        const _ = l === 0 ? i[0] ?? r.initialPageParam : Lm(r, a);
                        if (l > 0 && _ == null)
                            break;
                        a = await v(a, _),
                        l++
                    } while (l < b)
                }
                return a
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var m, w;
                return (w = (m = t.options).persister) == null ? void 0 : w.call(m, c, {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = c
        }
    }
}
function Lm(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function mj(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var _e, Jn, Xn, Xs, Zs, Zn, eo, to, kg, gj = (kg = class {
    constructor(e={}) {
        V(this, _e);
        V(this, Jn);
        V(this, Xn);
        V(this, Xs);
        V(this, Zs);
        V(this, Zn);
        V(this, eo);
        V(this, to);
        M(this, _e, e.queryCache || new fj),
        M(this, Jn, e.mutationCache || new pj),
        M(this, Xn, e.defaultOptions || {}),
        M(this, Xs, new Map),
        M(this, Zs, new Map),
        M(this, Zn, 0)
    }
    mount() {
        ea(this, Zn)._++,
        S(this, Zn) === 1 && (M(this, eo, wh.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            S(this, _e).onFocus())
        }
        )),
        M(this, to, Nl.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            S(this, _e).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        ea(this, Zn)._--,
        S(this, Zn) === 0 && ((e = S(this, eo)) == null || e.call(this),
        M(this, eo, void 0),
        (t = S(this, to)) == null || t.call(this),
        M(this, to, void 0))
    }
    isFetching(e) {
        return S(this, _e).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return S(this, Jn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = S(this, _e).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0)
            return this.fetchQuery(e);
        {
            const n = this.defaultQueryOptions(e)
              , r = S(this, _e).build(this, n);
            return e.revalidateIfStale && r.isStaleByTime(Hs(n.staleTime, r)) && this.prefetchQuery(n),
            Promise.resolve(t)
        }
    }
    getQueriesData(e) {
        return S(this, _e).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , s = S(this, _e).get(r.queryHash)
          , o = s == null ? void 0 : s.state.data
          , i = nj(t, o);
        if (i !== void 0)
            return S(this, _e).build(this, r).setData(i, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return Pe.batch( () => S(this, _e).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = S(this, _e).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = S(this, _e);
        Pe.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = S(this, _e)
          , r = {
            type: "active",
            ...e
        };
        return Pe.batch( () => (n.findAll(e).forEach(s => {
            s.reset()
        }
        ),
        this.refetchQueries(r, t)))
    }
    cancelQueries(e={}, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = Pe.batch( () => S(this, _e).findAll(e).map(s => s.cancel(n)));
        return Promise.all(r).then(Ct).catch(Ct)
    }
    invalidateQueries(e={}, t={}) {
        return Pe.batch( () => {
            if (S(this, _e).findAll(e).forEach(r => {
                r.invalidate()
            }
            ),
            e.refetchType === "none")
                return Promise.resolve();
            const n = {
                ...e,
                type: e.refetchType ?? e.type ?? "active"
            };
            return this.refetchQueries(n, t)
        }
        )
    }
    refetchQueries(e={}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0
        }
          , r = Pe.batch( () => S(this, _e).findAll(e).filter(s => !s.isDisabled()).map(s => {
            let o = s.fetch(void 0, n);
            return n.throwOnError || (o = o.catch(Ct)),
            s.state.fetchStatus === "paused" ? Promise.resolve() : o
        }
        ));
        return Promise.all(r).then(Ct)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = S(this, _e).build(this, t);
        return n.isStaleByTime(Hs(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(Ct).catch(Ct)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = Im(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Ct).catch(Ct)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = Im(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return Nl.isOnline() ? S(this, Jn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return S(this, _e)
    }
    getMutationCache() {
        return S(this, Jn)
    }
    getDefaultOptions() {
        return S(this, Xn)
    }
    setDefaultOptions(e) {
        M(this, Xn, e)
    }
    setQueryDefaults(e, t) {
        S(this, Xs).set(es(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...S(this, Xs).values()];
        let n = {};
        return t.forEach(r => {
            Ii(e, r.queryKey) && (n = {
                ...n,
                ...r.defaultOptions
            })
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        S(this, Zs).set(es(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...S(this, Zs).values()];
        let n = {};
        return t.forEach(r => {
            Ii(e, r.mutationKey) && (n = {
                ...n,
                ...r.defaultOptions
            })
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...S(this, Xn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = yh(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.enabled !== !0 && t.queryFn === xh && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...S(this, Xn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        S(this, _e).clear(),
        S(this, Jn).clear()
    }
}
,
_e = new WeakMap,
Jn = new WeakMap,
Xn = new WeakMap,
Xs = new WeakMap,
Zs = new WeakMap,
Zn = new WeakMap,
eo = new WeakMap,
to = new WeakMap,
kg), tt, ee, Ui, qe, zr, no, er, sn, zi, ro, so, Br, Vr, tr, oo, ie, Xo, Ld, Md, Dd, $d, Fd, Ud, zd, fx, jg, vj = (jg = class extends jo {
    constructor(t, n) {
        super();
        V(this, ie);
        V(this, tt);
        V(this, ee);
        V(this, Ui);
        V(this, qe);
        V(this, zr);
        V(this, no);
        V(this, er);
        V(this, sn);
        V(this, zi);
        V(this, ro);
        V(this, so);
        V(this, Br);
        V(this, Vr);
        V(this, tr);
        V(this, oo, new Set);
        this.options = n,
        M(this, tt, t),
        M(this, sn, null),
        M(this, er, Id()),
        this.options.experimental_prefetchInRender || S(this, er).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),
        this.bindMethods(),
        this.setOptions(n)
    }
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (S(this, ee).addObserver(this),
        Mm(S(this, ee), this.options) ? G(this, ie, Xo).call(this) : this.updateResult(),
        G(this, ie, $d).call(this))
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return Bd(S(this, ee), this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return Bd(S(this, ee), this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set,
        G(this, ie, Fd).call(this),
        G(this, ie, Ud).call(this),
        S(this, ee).removeObserver(this)
    }
    setOptions(t, n) {
        const r = this.options
          , s = S(this, ee);
        if (this.options = S(this, tt).defaultQueryOptions(t),
        this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof zt(this.options.enabled, S(this, ee)) != "boolean")
            throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        G(this, ie, zd).call(this),
        S(this, ee).setOptions(this.options),
        r._defaulted && !Pl(this.options, r) && S(this, tt).getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: S(this, ee),
            observer: this
        });
        const o = this.hasListeners();
        o && Dm(S(this, ee), s, this.options, r) && G(this, ie, Xo).call(this),
        this.updateResult(n),
        o && (S(this, ee) !== s || zt(this.options.enabled, S(this, ee)) !== zt(r.enabled, S(this, ee)) || Hs(this.options.staleTime, S(this, ee)) !== Hs(r.staleTime, S(this, ee))) && G(this, ie, Ld).call(this);
        const i = G(this, ie, Md).call(this);
        o && (S(this, ee) !== s || zt(this.options.enabled, S(this, ee)) !== zt(r.enabled, S(this, ee)) || i !== S(this, tr)) && G(this, ie, Dd).call(this, i)
    }
    getOptimisticResult(t) {
        const n = S(this, tt).getQueryCache().build(S(this, tt), t)
          , r = this.createResult(n, t);
        return xj(this, r) && (M(this, qe, r),
        M(this, no, this.options),
        M(this, zr, S(this, ee).state)),
        r
    }
    getCurrentResult() {
        return S(this, qe)
    }
    trackResult(t, n) {
        const r = {};
        return Object.keys(t).forEach(s => {
            Object.defineProperty(r, s, {
                configurable: !1,
                enumerable: !0,
                get: () => (this.trackProp(s),
                n == null || n(s),
                t[s])
            })
        }
        ),
        r
    }
    trackProp(t) {
        S(this, oo).add(t)
    }
    getCurrentQuery() {
        return S(this, ee)
    }
    refetch({...t}={}) {
        return this.fetch({
            ...t
        })
    }
    fetchOptimistic(t) {
        const n = S(this, tt).defaultQueryOptions(t)
          , r = S(this, tt).getQueryCache().build(S(this, tt), n);
        return r.fetch().then( () => this.createResult(r, n))
    }
    fetch(t) {
        return G(this, ie, Xo).call(this, {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }).then( () => (this.updateResult(),
        S(this, qe)))
    }
    createResult(t, n) {
        var j;
        const r = S(this, ee)
          , s = this.options
          , o = S(this, qe)
          , i = S(this, zr)
          , a = S(this, no)
          , c = t !== r ? t.state : S(this, Ui)
          , {state: d} = t;
        let h = {
            ...d
        }, f = !1, g;
        if (n._optimisticResults) {
            const R = this.hasListeners()
              , A = !R && Mm(t, n)
              , U = R && Dm(t, r, n, s);
            (A || U) && (h = {
                ...h,
                ...ux(d.data, t.options)
            }),
            n._optimisticResults === "isRestoring" && (h.fetchStatus = "idle")
        }
        let {error: y, errorUpdatedAt: m, status: w} = h;
        if (n.select && h.data !== void 0)
            if (o && h.data === (i == null ? void 0 : i.data) && n.select === S(this, zi))
                g = S(this, ro);
            else
                try {
                    M(this, zi, n.select),
                    g = n.select(h.data),
                    g = Od(o == null ? void 0 : o.data, g, n),
                    M(this, ro, g),
                    M(this, sn, null)
                } catch (R) {
                    M(this, sn, R)
                }
        else
            g = h.data;
        if (n.placeholderData !== void 0 && g === void 0 && w === "pending") {
            let R;
            if (o != null && o.isPlaceholderData && n.placeholderData === (a == null ? void 0 : a.placeholderData))
                R = o.data;
            else if (R = typeof n.placeholderData == "function" ? n.placeholderData((j = S(this, so)) == null ? void 0 : j.state.data, S(this, so)) : n.placeholderData,
            n.select && R !== void 0)
                try {
                    R = n.select(R),
                    M(this, sn, null)
                } catch (A) {
                    M(this, sn, A)
                }
            R !== void 0 && (w = "success",
            g = Od(o == null ? void 0 : o.data, R, n),
            f = !0)
        }
        S(this, sn) && (y = S(this, sn),
        g = S(this, ro),
        m = Date.now(),
        w = "error");
        const x = h.fetchStatus === "fetching"
          , v = w === "pending"
          , b = w === "error"
          , _ = v && x
          , C = g !== void 0
          , E = {
            status: w,
            fetchStatus: h.fetchStatus,
            isPending: v,
            isSuccess: w === "success",
            isError: b,
            isInitialLoading: _,
            isLoading: _,
            data: g,
            dataUpdatedAt: h.dataUpdatedAt,
            error: y,
            errorUpdatedAt: m,
            failureCount: h.fetchFailureCount,
            failureReason: h.fetchFailureReason,
            errorUpdateCount: h.errorUpdateCount,
            isFetched: h.dataUpdateCount > 0 || h.errorUpdateCount > 0,
            isFetchedAfterMount: h.dataUpdateCount > c.dataUpdateCount || h.errorUpdateCount > c.errorUpdateCount,
            isFetching: x,
            isRefetching: x && !v,
            isLoadingError: b && !C,
            isPaused: h.fetchStatus === "paused",
            isPlaceholderData: f,
            isRefetchError: b && C,
            isStale: bh(t, n),
            refetch: this.refetch,
            promise: S(this, er)
        };
        if (this.options.experimental_prefetchInRender) {
            const R = D => {
                E.status === "error" ? D.reject(E.error) : E.data !== void 0 && D.resolve(E.data)
            }
              , A = () => {
                const D = M(this, er, E.promise = Id());
                R(D)
            }
              , U = S(this, er);
            switch (U.status) {
            case "pending":
                t.queryHash === r.queryHash && R(U);
                break;
            case "fulfilled":
                (E.status === "error" || E.data !== U.value) && A();
                break;
            case "rejected":
                (E.status !== "error" || E.error !== U.reason) && A();
                break
            }
        }
        return E
    }
    updateResult(t) {
        const n = S(this, qe)
          , r = this.createResult(S(this, ee), this.options);
        if (M(this, zr, S(this, ee).state),
        M(this, no, this.options),
        S(this, zr).data !== void 0 && M(this, so, S(this, ee)),
        Pl(r, n))
            return;
        M(this, qe, r);
        const s = {}
          , o = () => {
            if (!n)
                return !0;
            const {notifyOnChangeProps: i} = this.options
              , a = typeof i == "function" ? i() : i;
            if (a === "all" || !a && !S(this, oo).size)
                return !0;
            const l = new Set(a ?? S(this, oo));
            return this.options.throwOnError && l.add("error"),
            Object.keys(S(this, qe)).some(c => {
                const d = c;
                return S(this, qe)[d] !== n[d] && l.has(d)
            }
            )
        }
        ;
        (t == null ? void 0 : t.listeners) !== !1 && o() && (s.listeners = !0),
        G(this, ie, fx).call(this, {
            ...s,
            ...t
        })
    }
    onQueryUpdate() {
        this.updateResult(),
        this.hasListeners() && G(this, ie, $d).call(this)
    }
}
,
tt = new WeakMap,
ee = new WeakMap,
Ui = new WeakMap,
qe = new WeakMap,
zr = new WeakMap,
no = new WeakMap,
er = new WeakMap,
sn = new WeakMap,
zi = new WeakMap,
ro = new WeakMap,
so = new WeakMap,
Br = new WeakMap,
Vr = new WeakMap,
tr = new WeakMap,
oo = new WeakMap,
ie = new WeakSet,
Xo = function(t) {
    G(this, ie, zd).call(this);
    let n = S(this, ee).fetch(this.options, t);
    return t != null && t.throwOnError || (n = n.catch(Ct)),
    n
}
,
Ld = function() {
    G(this, ie, Fd).call(this);
    const t = Hs(this.options.staleTime, S(this, ee));
    if (Zr || S(this, qe).isStale || !Rd(t))
        return;
    const r = rx(S(this, qe).dataUpdatedAt, t) + 1;
    M(this, Br, setTimeout( () => {
        S(this, qe).isStale || this.updateResult()
    }
    , r))
}
,
Md = function() {
    return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(S(this, ee)) : this.options.refetchInterval) ?? !1
}
,
Dd = function(t) {
    G(this, ie, Ud).call(this),
    M(this, tr, t),
    !(Zr || zt(this.options.enabled, S(this, ee)) === !1 || !Rd(S(this, tr)) || S(this, tr) === 0) && M(this, Vr, setInterval( () => {
        (this.options.refetchIntervalInBackground || wh.isFocused()) && G(this, ie, Xo).call(this)
    }
    , S(this, tr)))
}
,
$d = function() {
    G(this, ie, Ld).call(this),
    G(this, ie, Dd).call(this, G(this, ie, Md).call(this))
}
,
Fd = function() {
    S(this, Br) && (clearTimeout(S(this, Br)),
    M(this, Br, void 0))
}
,
Ud = function() {
    S(this, Vr) && (clearInterval(S(this, Vr)),
    M(this, Vr, void 0))
}
,
zd = function() {
    const t = S(this, tt).getQueryCache().build(S(this, tt), this.options);
    if (t === S(this, ee))
        return;
    const n = S(this, ee);
    M(this, ee, t),
    M(this, Ui, t.state),
    this.hasListeners() && (n == null || n.removeObserver(this),
    t.addObserver(this))
}
,
fx = function(t) {
    Pe.batch( () => {
        t.listeners && this.listeners.forEach(n => {
            n(S(this, qe))
        }
        ),
        S(this, tt).getQueryCache().notify({
            query: S(this, ee),
            type: "observerResultsUpdated"
        })
    }
    )
}
,
jg);
function yj(e, t) {
    return zt(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1)
}
function Mm(e, t) {
    return yj(e, t) || e.state.data !== void 0 && Bd(e, t, t.refetchOnMount)
}
function Bd(e, t, n) {
    if (zt(t.enabled, e) !== !1) {
        const r = typeof n == "function" ? n(e) : n;
        return r === "always" || r !== !1 && bh(e, t)
    }
    return !1
}
function Dm(e, t, n, r) {
    return (e !== t || zt(r.enabled, e) === !1) && (!n.suspense || e.state.status !== "error") && bh(e, n)
}
function bh(e, t) {
    return zt(t.enabled, e) !== !1 && e.isStaleByTime(Hs(t.staleTime, e))
}
function xj(e, t) {
    return !Pl(e.getCurrentResult(), t)
}
var nr, rr, nt, yn, _n, Ka, Vd, Pg, wj = (Pg = class extends jo {
    constructor(n, r) {
        super();
        V(this, _n);
        V(this, nr);
        V(this, rr);
        V(this, nt);
        V(this, yn);
        M(this, nr, n),
        this.setOptions(r),
        this.bindMethods(),
        G(this, _n, Ka).call(this)
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this),
        this.reset = this.reset.bind(this)
    }
    setOptions(n) {
        var s;
        const r = this.options;
        this.options = S(this, nr).defaultMutationOptions(n),
        Pl(this.options, r) || S(this, nr).getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: S(this, nt),
            observer: this
        }),
        r != null && r.mutationKey && this.options.mutationKey && es(r.mutationKey) !== es(this.options.mutationKey) ? this.reset() : ((s = S(this, nt)) == null ? void 0 : s.state.status) === "pending" && S(this, nt).setOptions(this.options)
    }
    onUnsubscribe() {
        var n;
        this.hasListeners() || (n = S(this, nt)) == null || n.removeObserver(this)
    }
    onMutationUpdate(n) {
        G(this, _n, Ka).call(this),
        G(this, _n, Vd).call(this, n)
    }
    getCurrentResult() {
        return S(this, rr)
    }
    reset() {
        var n;
        (n = S(this, nt)) == null || n.removeObserver(this),
        M(this, nt, void 0),
        G(this, _n, Ka).call(this),
        G(this, _n, Vd).call(this)
    }
    mutate(n, r) {
        var s;
        return M(this, yn, r),
        (s = S(this, nt)) == null || s.removeObserver(this),
        M(this, nt, S(this, nr).getMutationCache().build(S(this, nr), this.options)),
        S(this, nt).addObserver(this),
        S(this, nt).execute(n)
    }
}
,
nr = new WeakMap,
rr = new WeakMap,
nt = new WeakMap,
yn = new WeakMap,
_n = new WeakSet,
Ka = function() {
    var r;
    const n = ((r = S(this, nt)) == null ? void 0 : r.state) ?? dx();
    M(this, rr, {
        ...n,
        isPending: n.status === "pending",
        isSuccess: n.status === "success",
        isError: n.status === "error",
        isIdle: n.status === "idle",
        mutate: this.mutate,
        reset: this.reset
    })
}
,
Vd = function(n) {
    Pe.batch( () => {
        var r, s, o, i, a, l, c, d;
        if (S(this, yn) && this.hasListeners()) {
            const h = S(this, rr).variables
              , f = S(this, rr).context;
            (n == null ? void 0 : n.type) === "success" ? ((s = (r = S(this, yn)).onSuccess) == null || s.call(r, n.data, h, f),
            (i = (o = S(this, yn)).onSettled) == null || i.call(o, n.data, null, h, f)) : (n == null ? void 0 : n.type) === "error" && ((l = (a = S(this, yn)).onError) == null || l.call(a, n.error, h, f),
            (d = (c = S(this, yn)).onSettled) == null || d.call(c, void 0, n.error, h, f))
        }
        this.listeners.forEach(h => {
            h(S(this, rr))
        }
        )
    }
    )
}
,
Pg), hx = p.createContext(void 0), _h = e => {
    const t = p.useContext(hx);
    if (!t)
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t
}
, bj = ({client: e, children: t}) => (p.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
u.jsx(hx.Provider, {
    value: e,
    children: t
})), px = p.createContext(!1), _j = () => p.useContext(px);
px.Provider;
function Sj() {
    let e = !1;
    return {
        clearReset: () => {
            e = !1
        }
        ,
        reset: () => {
            e = !0
        }
        ,
        isReset: () => e
    }
}
var Cj = p.createContext(Sj())
  , Ej = () => p.useContext(Cj);
function mx(e, t) {
    return typeof e == "function" ? e(...t) : !!e
}
function gx() {}
var kj = (e, t) => {
    (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1))
}
  , jj = e => {
    p.useEffect( () => {
        e.clearReset()
    }
    , [e])
}
  , Pj = ({result: e, errorResetBoundary: t, throwOnError: n, query: r}) => e.isError && !t.isReset() && !e.isFetching && r && mx(n, [e.error, r])
  , Nj = e => {
    e.suspense && (e.staleTime === void 0 && (e.staleTime = 1e3),
    typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)))
}
  , Tj = (e, t) => e.isLoading && e.isFetching && !t
  , Rj = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending
  , $m = (e, t, n) => t.fetchOptimistic(e).catch( () => {
    n.clearReset()
}
);
function Aj(e, t, n) {
    var d, h, f, g, y;
    const r = _h()
      , s = _j()
      , o = Ej()
      , i = r.defaultQueryOptions(e);
    (h = (d = r.getDefaultOptions().queries) == null ? void 0 : d._experimental_beforeQuery) == null || h.call(d, i),
    i._optimisticResults = s ? "isRestoring" : "optimistic",
    Nj(i),
    kj(i, o),
    jj(o);
    const a = !r.getQueryCache().get(i.queryHash)
      , [l] = p.useState( () => new t(r,i))
      , c = l.getOptimisticResult(i);
    if (p.useSyncExternalStore(p.useCallback(m => {
        const w = s ? () => {}
        : l.subscribe(Pe.batchCalls(m));
        return l.updateResult(),
        w
    }
    , [l, s]), () => l.getCurrentResult(), () => l.getCurrentResult()),
    p.useEffect( () => {
        l.setOptions(i, {
            listeners: !1
        })
    }
    , [i, l]),
    Rj(i, c))
        throw $m(i, l, o);
    if (Pj({
        result: c,
        errorResetBoundary: o,
        throwOnError: i.throwOnError,
        query: r.getQueryCache().get(i.queryHash)
    }))
        throw c.error;
    if ((g = (f = r.getDefaultOptions().queries) == null ? void 0 : f._experimental_afterQuery) == null || g.call(f, i, c),
    i.experimental_prefetchInRender && !Zr && Tj(c, s)) {
        const m = a ? $m(i, l, o) : (y = r.getQueryCache().get(i.queryHash)) == null ? void 0 : y.promise;
        m == null || m.catch(gx).finally( () => {
            l.updateResult()
        }
        )
    }
    return i.notifyOnChangeProps ? c : l.trackResult(c)
}
function Hd(e, t) {
    return Aj(e, vj)
}
function uu(e, t) {
    const n = _h()
      , [r] = p.useState( () => new wj(n,e));
    p.useEffect( () => {
        r.setOptions(e)
    }
    , [r, e]);
    const s = p.useSyncExternalStore(p.useCallback(i => r.subscribe(Pe.batchCalls(i)), [r]), () => r.getCurrentResult(), () => r.getCurrentResult())
      , o = p.useCallback( (i, a) => {
        r.mutate(i, a).catch(gx)
    }
    , [r]);
    if (s.error && mx(r.options.throwOnError, [s.error]))
        throw s.error;
    return {
        ...s,
        mutate: o,
        mutateAsync: s.mutate
    }
}
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Li() {
    return Li = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Li.apply(this, arguments)
}
var ir;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(ir || (ir = {}));
const Fm = "popstate";
function Oj(e) {
    e === void 0 && (e = {});
    function t(r, s) {
        let {pathname: o, search: i, hash: a} = r.location;
        return Wd("", {
            pathname: o,
            search: i,
            hash: a
        }, s.state && s.state.usr || null, s.state && s.state.key || "default")
    }
    function n(r, s) {
        return typeof s == "string" ? s : Tl(s)
    }
    return Lj(t, n, null, e)
}
function we(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function vx(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function Ij() {
    return Math.random().toString(36).substr(2, 8)
}
function Um(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Wd(e, t, n, r) {
    return n === void 0 && (n = null),
    Li({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Po(t) : t, {
        state: n,
        key: t && t.key || r || Ij()
    })
}
function Tl(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function Po(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function Lj(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: s=document.defaultView, v5Compat: o=!1} = r
      , i = s.history
      , a = ir.Pop
      , l = null
      , c = d();
    c == null && (c = 0,
    i.replaceState(Li({}, i.state, {
        idx: c
    }), ""));
    function d() {
        return (i.state || {
            idx: null
        }).idx
    }
    function h() {
        a = ir.Pop;
        let w = d()
          , x = w == null ? null : w - c;
        c = w,
        l && l({
            action: a,
            location: m.location,
            delta: x
        })
    }
    function f(w, x) {
        a = ir.Push;
        let v = Wd(m.location, w, x);
        c = d() + 1;
        let b = Um(v, c)
          , _ = m.createHref(v);
        try {
            i.pushState(b, "", _)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError")
                throw C;
            s.location.assign(_)
        }
        o && l && l({
            action: a,
            location: m.location,
            delta: 1
        })
    }
    function g(w, x) {
        a = ir.Replace;
        let v = Wd(m.location, w, x);
        c = d();
        let b = Um(v, c)
          , _ = m.createHref(v);
        i.replaceState(b, "", _),
        o && l && l({
            action: a,
            location: m.location,
            delta: 0
        })
    }
    function y(w) {
        let x = s.location.origin !== "null" ? s.location.origin : s.location.href
          , v = typeof w == "string" ? w : Tl(w);
        return v = v.replace(/ $/, "%20"),
        we(x, "No window.location.(origin|href) available to create URL for href: " + v),
        new URL(v,x)
    }
    let m = {
        get action() {
            return a
        },
        get location() {
            return e(s, i)
        },
        listen(w) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return s.addEventListener(Fm, h),
            l = w,
            () => {
                s.removeEventListener(Fm, h),
                l = null
            }
        },
        createHref(w) {
            return t(s, w)
        },
        createURL: y,
        encodeLocation(w) {
            let x = y(w);
            return {
                pathname: x.pathname,
                search: x.search,
                hash: x.hash
            }
        },
        push: f,
        replace: g,
        go(w) {
            return i.go(w)
        }
    };
    return m
}
var zm;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(zm || (zm = {}));
function Mj(e, t, n) {
    return n === void 0 && (n = "/"),
    Dj(e, t, n, !1)
}
function Dj(e, t, n, r) {
    let s = typeof t == "string" ? Po(t) : t
      , o = vo(s.pathname || "/", n);
    if (o == null)
        return null;
    let i = yx(e);
    $j(i);
    let a = null;
    for (let l = 0; a == null && l < i.length; ++l) {
        let c = Gj(o);
        a = Kj(i[l], c, r)
    }
    return a
}
function yx(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let s = (o, i, a) => {
        let l = {
            relativePath: a === void 0 ? o.path || "" : a,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: i,
            route: o
        };
        l.relativePath.startsWith("/") && (we(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let c = mr([r, l.relativePath])
          , d = n.concat(l);
        o.children && o.children.length > 0 && (we(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')),
        yx(o.children, t, d, c)),
        !(o.path == null && !o.index) && t.push({
            path: c,
            score: Wj(c, o.index),
            routesMeta: d
        })
    }
    ;
    return e.forEach( (o, i) => {
        var a;
        if (o.path === "" || !((a = o.path) != null && a.includes("?")))
            s(o, i);
        else
            for (let l of xx(o.path))
                s(o, i, l)
    }
    ),
    t
}
function xx(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , s = n.endsWith("?")
      , o = n.replace(/\?$/, "");
    if (r.length === 0)
        return s ? [o, ""] : [o];
    let i = xx(r.join("/"))
      , a = [];
    return a.push(...i.map(l => l === "" ? o : [o, l].join("/"))),
    s && a.push(...i),
    a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function $j(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : qj(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const Fj = /^:[\w-]+$/
  , Uj = 3
  , zj = 2
  , Bj = 1
  , Vj = 10
  , Hj = -2
  , Bm = e => e === "*";
function Wj(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Bm) && (r += Hj),
    t && (r += zj),
    n.filter(s => !Bm(s)).reduce( (s, o) => s + (Fj.test(o) ? Uj : o === "" ? Bj : Vj), r)
}
function qj(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, s) => r === t[s]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function Kj(e, t, n) {
    let {routesMeta: r} = e
      , s = {}
      , o = "/"
      , i = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a]
          , c = a === r.length - 1
          , d = o === "/" ? t : t.slice(o.length) || "/"
          , h = Rl({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: c
        }, d)
          , f = l.route;
        if (!h && c && n && !r[r.length - 1].route.index && (h = Rl({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, d)),
        !h)
            return null;
        Object.assign(s, h.params),
        i.push({
            params: s,
            pathname: mr([o, h.pathname]),
            pathnameBase: Zj(mr([o, h.pathnameBase])),
            route: f
        }),
        h.pathnameBase !== "/" && (o = mr([o, h.pathnameBase]))
    }
    return i
}
function Rl(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = Qj(e.path, e.caseSensitive, e.end)
      , s = t.match(n);
    if (!s)
        return null;
    let o = s[0]
      , i = o.replace(/(.)\/+$/, "$1")
      , a = s.slice(1);
    return {
        params: r.reduce( (c, d, h) => {
            let {paramName: f, isOptional: g} = d;
            if (f === "*") {
                let m = a[h] || "";
                i = o.slice(0, o.length - m.length).replace(/(.)\/+$/, "$1")
            }
            const y = a[h];
            return g && !y ? c[f] = void 0 : c[f] = (y || "").replace(/%2F/g, "/"),
            c
        }
        , {}),
        pathname: o,
        pathnameBase: i,
        pattern: e
    }
}
function Qj(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    vx(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , s = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, a, l) => (r.push({
        paramName: a,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? s += "\\/*$" : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s,t ? void 0 : "i"), r]
}
function Gj(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return vx(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function vo(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function Yj(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: s=""} = typeof e == "string" ? Po(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : Jj(n, t) : t,
        search: eP(r),
        hash: tP(s)
    }
}
function Jj(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(s => {
        s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function du(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function Xj(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function Sh(e, t) {
    let n = Xj(e);
    return t ? n.map( (r, s) => s === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function Ch(e, t, n, r) {
    r === void 0 && (r = !1);
    let s;
    typeof e == "string" ? s = Po(e) : (s = Li({}, e),
    we(!s.pathname || !s.pathname.includes("?"), du("?", "pathname", "search", s)),
    we(!s.pathname || !s.pathname.includes("#"), du("#", "pathname", "hash", s)),
    we(!s.search || !s.search.includes("#"), du("#", "search", "hash", s)));
    let o = e === "" || s.pathname === "", i = o ? "/" : s.pathname, a;
    if (i == null)
        a = n;
    else {
        let h = t.length - 1;
        if (!r && i.startsWith("..")) {
            let f = i.split("/");
            for (; f[0] === ".."; )
                f.shift(),
                h -= 1;
            s.pathname = f.join("/")
        }
        a = h >= 0 ? t[h] : "/"
    }
    let l = Yj(s, a)
      , c = i && i !== "/" && i.endsWith("/")
      , d = (o || i === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (c || d) && (l.pathname += "/"),
    l
}
const mr = e => e.join("/").replace(/\/\/+/g, "/")
  , Zj = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , eP = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , tP = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function nP(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const wx = ["post", "put", "patch", "delete"];
new Set(wx);
const rP = ["get", ...wx];
new Set(rP);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Mi() {
    return Mi = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Mi.apply(this, arguments)
}
const dc = p.createContext(null)
  , bx = p.createContext(null)
  , Rn = p.createContext(null)
  , fc = p.createContext(null)
  , kr = p.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , _x = p.createContext(null);
function sP(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    No() || we(!1);
    let {basename: r, navigator: s} = p.useContext(Rn)
      , {hash: o, pathname: i, search: a} = hc(e, {
        relative: n
    })
      , l = i;
    return r !== "/" && (l = i === "/" ? r : mr([r, i])),
    s.createHref({
        pathname: l,
        search: a,
        hash: o
    })
}
function No() {
    return p.useContext(fc) != null
}
function fn() {
    return No() || we(!1),
    p.useContext(fc).location
}
function Sx(e) {
    p.useContext(Rn).static || p.useLayoutEffect(e)
}
function To() {
    let {isDataRoute: e} = p.useContext(kr);
    return e ? vP() : oP()
}
function oP() {
    No() || we(!1);
    let e = p.useContext(dc)
      , {basename: t, future: n, navigator: r} = p.useContext(Rn)
      , {matches: s} = p.useContext(kr)
      , {pathname: o} = fn()
      , i = JSON.stringify(Sh(s, n.v7_relativeSplatPath))
      , a = p.useRef(!1);
    return Sx( () => {
        a.current = !0
    }
    ),
    p.useCallback(function(c, d) {
        if (d === void 0 && (d = {}),
        !a.current)
            return;
        if (typeof c == "number") {
            r.go(c);
            return
        }
        let h = Ch(c, JSON.parse(i), o, d.relative === "path");
        e == null && t !== "/" && (h.pathname = h.pathname === "/" ? t : mr([t, h.pathname])),
        (d.replace ? r.replace : r.push)(h, d.state, d)
    }, [t, r, i, o, e])
}
function hc(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {future: r} = p.useContext(Rn)
      , {matches: s} = p.useContext(kr)
      , {pathname: o} = fn()
      , i = JSON.stringify(Sh(s, r.v7_relativeSplatPath));
    return p.useMemo( () => Ch(e, JSON.parse(i), o, n === "path"), [e, i, o, n])
}
function iP(e, t) {
    return aP(e, t)
}
function aP(e, t, n, r) {
    No() || we(!1);
    let {navigator: s} = p.useContext(Rn)
      , {matches: o} = p.useContext(kr)
      , i = o[o.length - 1]
      , a = i ? i.params : {};
    i && i.pathname;
    let l = i ? i.pathnameBase : "/";
    i && i.route;
    let c = fn(), d;
    if (t) {
        var h;
        let w = typeof t == "string" ? Po(t) : t;
        l === "/" || (h = w.pathname) != null && h.startsWith(l) || we(!1),
        d = w
    } else
        d = c;
    let f = d.pathname || "/"
      , g = f;
    if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        g = "/" + f.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let y = Mj(e, {
        pathname: g
    })
      , m = fP(y && y.map(w => Object.assign({}, w, {
        params: Object.assign({}, a, w.params),
        pathname: mr([l, s.encodeLocation ? s.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? l : mr([l, s.encodeLocation ? s.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), o, n, r);
    return t && m ? p.createElement(fc.Provider, {
        value: {
            location: Mi({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: ir.Pop
        }
    }, m) : m
}
function lP() {
    let e = gP()
      , t = nP(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , s = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return p.createElement(p.Fragment, null, p.createElement("h2", null, "Unexpected Application Error!"), p.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? p.createElement("pre", {
        style: s
    }, n) : null, null)
}
const cP = p.createElement(lP, null);
class uP extends p.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? p.createElement(kr.Provider, {
            value: this.props.routeContext
        }, p.createElement(_x.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function dP(e) {
    let {routeContext: t, match: n, children: r} = e
      , s = p.useContext(dc);
    return s && s.static && s.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    p.createElement(kr.Provider, {
        value: t
    }, r)
}
function fP(e, t, n, r) {
    var s;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var o;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((o = r) != null && o.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let i = e
      , a = (s = n) == null ? void 0 : s.errors;
    if (a != null) {
        let d = i.findIndex(h => h.route.id && (a == null ? void 0 : a[h.route.id]) !== void 0);
        d >= 0 || we(!1),
        i = i.slice(0, Math.min(i.length, d + 1))
    }
    let l = !1
      , c = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < i.length; d++) {
            let h = i[d];
            if ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (c = d),
            h.route.id) {
                let {loaderData: f, errors: g} = n
                  , y = h.route.loader && f[h.route.id] === void 0 && (!g || g[h.route.id] === void 0);
                if (h.route.lazy || y) {
                    l = !0,
                    c >= 0 ? i = i.slice(0, c + 1) : i = [i[0]];
                    break
                }
            }
        }
    return i.reduceRight( (d, h, f) => {
        let g, y = !1, m = null, w = null;
        n && (g = a && h.route.id ? a[h.route.id] : void 0,
        m = h.route.errorElement || cP,
        l && (c < 0 && f === 0 ? (y = !0,
        w = null) : c === f && (y = !0,
        w = h.route.hydrateFallbackElement || null)));
        let x = t.concat(i.slice(0, f + 1))
          , v = () => {
            let b;
            return g ? b = m : y ? b = w : h.route.Component ? b = p.createElement(h.route.Component, null) : h.route.element ? b = h.route.element : b = d,
            p.createElement(dP, {
                match: h,
                routeContext: {
                    outlet: d,
                    matches: x,
                    isDataRoute: n != null
                },
                children: b
            })
        }
        ;
        return n && (h.route.ErrorBoundary || h.route.errorElement || f === 0) ? p.createElement(uP, {
            location: n.location,
            revalidation: n.revalidation,
            component: m,
            error: g,
            children: v(),
            routeContext: {
                outlet: null,
                matches: x,
                isDataRoute: !0
            }
        }) : v()
    }
    , null)
}
var Cx = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(Cx || {})
  , Al = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Al || {});
function hP(e) {
    let t = p.useContext(dc);
    return t || we(!1),
    t
}
function pP(e) {
    let t = p.useContext(bx);
    return t || we(!1),
    t
}
function mP(e) {
    let t = p.useContext(kr);
    return t || we(!1),
    t
}
function Ex(e) {
    let t = mP()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || we(!1),
    n.route.id
}
function gP() {
    var e;
    let t = p.useContext(_x)
      , n = pP(Al.UseRouteError)
      , r = Ex(Al.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function vP() {
    let {router: e} = hP(Cx.UseNavigateStable)
      , t = Ex(Al.UseNavigateStable)
      , n = p.useRef(!1);
    return Sx( () => {
        n.current = !0
    }
    ),
    p.useCallback(function(s, o) {
        o === void 0 && (o = {}),
        n.current && (typeof s == "number" ? e.navigate(s) : e.navigate(s, Mi({
            fromRouteId: t
        }, o)))
    }, [e, t])
}
function yP(e) {
    let {to: t, replace: n, state: r, relative: s} = e;
    No() || we(!1);
    let {future: o, static: i} = p.useContext(Rn)
      , {matches: a} = p.useContext(kr)
      , {pathname: l} = fn()
      , c = To()
      , d = Ch(t, Sh(a, o.v7_relativeSplatPath), l, s === "path")
      , h = JSON.stringify(d);
    return p.useEffect( () => c(JSON.parse(h), {
        replace: n,
        state: r,
        relative: s
    }), [c, h, s, n, r]),
    null
}
function Fn(e) {
    we(!1)
}
function xP(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: s=ir.Pop, navigator: o, static: i=!1, future: a} = e;
    No() && we(!1);
    let l = t.replace(/^\/*/, "/")
      , c = p.useMemo( () => ({
        basename: l,
        navigator: o,
        static: i,
        future: Mi({
            v7_relativeSplatPath: !1
        }, a)
    }), [l, a, o, i]);
    typeof r == "string" && (r = Po(r));
    let {pathname: d="/", search: h="", hash: f="", state: g=null, key: y="default"} = r
      , m = p.useMemo( () => {
        let w = vo(d, l);
        return w == null ? null : {
            location: {
                pathname: w,
                search: h,
                hash: f,
                state: g,
                key: y
            },
            navigationType: s
        }
    }
    , [l, d, h, f, g, y, s]);
    return m == null ? null : p.createElement(Rn.Provider, {
        value: c
    }, p.createElement(fc.Provider, {
        children: n,
        value: m
    }))
}
function wP(e) {
    let {children: t, location: n} = e;
    return iP(qd(t), n)
}
new Promise( () => {}
);
function qd(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return p.Children.forEach(e, (r, s) => {
        if (!p.isValidElement(r))
            return;
        let o = [...t, s];
        if (r.type === p.Fragment) {
            n.push.apply(n, qd(r.props.children, o));
            return
        }
        r.type !== Fn && we(!1),
        !r.props.index || !r.props.children || we(!1);
        let i = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (i.children = qd(r.props.children, o)),
        n.push(i)
    }
    ),
    n
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ol() {
    return Ol = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Ol.apply(this, arguments)
}
function kx(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), s, o;
    for (o = 0; o < r.length; o++)
        s = r[o],
        !(t.indexOf(s) >= 0) && (n[s] = e[s]);
    return n
}
function bP(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function _P(e, t) {
    return e.button === 0 && (!t || t === "_self") && !bP(e)
}
const SP = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , CP = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"]
  , EP = "6";
try {
    window.__reactRouterVersion = EP
} catch {}
const kP = p.createContext({
    isTransitioning: !1
})
  , jP = "startTransition"
  , Vm = Ug[jP];
function PP(e) {
    let {basename: t, children: n, future: r, window: s} = e
      , o = p.useRef();
    o.current == null && (o.current = Oj({
        window: s,
        v5Compat: !0
    }));
    let i = o.current
      , [a,l] = p.useState({
        action: i.action,
        location: i.location
    })
      , {v7_startTransition: c} = r || {}
      , d = p.useCallback(h => {
        c && Vm ? Vm( () => l(h)) : l(h)
    }
    , [l, c]);
    return p.useLayoutEffect( () => i.listen(d), [i, d]),
    p.createElement(xP, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: i,
        future: r
    })
}
const NP = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , TP = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Be = p.forwardRef(function(t, n) {
    let {onClick: r, relative: s, reloadDocument: o, replace: i, state: a, target: l, to: c, preventScrollReset: d, viewTransition: h} = t, f = kx(t, SP), {basename: g} = p.useContext(Rn), y, m = !1;
    if (typeof c == "string" && TP.test(c) && (y = c,
    NP))
        try {
            let b = new URL(window.location.href)
              , _ = c.startsWith("//") ? new URL(b.protocol + c) : new URL(c)
              , C = vo(_.pathname, g);
            _.origin === b.origin && C != null ? c = C + _.search + _.hash : m = !0
        } catch {}
    let w = sP(c, {
        relative: s
    })
      , x = AP(c, {
        replace: i,
        state: a,
        target: l,
        preventScrollReset: d,
        relative: s,
        viewTransition: h
    });
    function v(b) {
        r && r(b),
        b.defaultPrevented || x(b)
    }
    return p.createElement("a", Ol({}, f, {
        href: y || w,
        onClick: m || o ? r : v,
        ref: n,
        target: l
    }))
})
  , Sa = p.forwardRef(function(t, n) {
    let {"aria-current": r="page", caseSensitive: s=!1, className: o="", end: i=!1, style: a, to: l, viewTransition: c, children: d} = t
      , h = kx(t, CP)
      , f = hc(l, {
        relative: h.relative
    })
      , g = fn()
      , y = p.useContext(bx)
      , {navigator: m, basename: w} = p.useContext(Rn)
      , x = y != null && OP(f) && c === !0
      , v = m.encodeLocation ? m.encodeLocation(f).pathname : f.pathname
      , b = g.pathname
      , _ = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
    s || (b = b.toLowerCase(),
    _ = _ ? _.toLowerCase() : null,
    v = v.toLowerCase()),
    _ && w && (_ = vo(_, w) || _);
    const C = v !== "/" && v.endsWith("/") ? v.length - 1 : v.length;
    let k = b === v || !i && b.startsWith(v) && b.charAt(C) === "/", E = _ != null && (_ === v || !i && _.startsWith(v) && _.charAt(v.length) === "/"), j = {
        isActive: k,
        isPending: E,
        isTransitioning: x
    }, R = k ? r : void 0, A;
    typeof o == "function" ? A = o(j) : A = [o, k ? "active" : null, E ? "pending" : null, x ? "transitioning" : null].filter(Boolean).join(" ");
    let U = typeof a == "function" ? a(j) : a;
    return p.createElement(Be, Ol({}, h, {
        "aria-current": R,
        className: A,
        ref: n,
        style: U,
        to: l,
        viewTransition: c
    }), typeof d == "function" ? d(j) : d)
});
var Kd;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(Kd || (Kd = {}));
var Hm;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Hm || (Hm = {}));
function RP(e) {
    let t = p.useContext(dc);
    return t || we(!1),
    t
}
function AP(e, t) {
    let {target: n, replace: r, state: s, preventScrollReset: o, relative: i, viewTransition: a} = t === void 0 ? {} : t
      , l = To()
      , c = fn()
      , d = hc(e, {
        relative: i
    });
    return p.useCallback(h => {
        if (_P(h, n)) {
            h.preventDefault();
            let f = r !== void 0 ? r : Tl(c) === Tl(d);
            l(e, {
                replace: f,
                state: s,
                preventScrollReset: o,
                relative: i,
                viewTransition: a
            })
        }
    }
    , [c, l, d, r, s, n, e, o, i, a])
}
function OP(e, t) {
    t === void 0 && (t = {});
    let n = p.useContext(kP);
    n == null && we(!1);
    let {basename: r} = RP(Kd.useViewTransitionState)
      , s = hc(e, {
        relative: t.relative
    });
    if (!n.isTransitioning)
        return !1;
    let o = vo(n.currentLocation.pathname, r) || n.currentLocation.pathname
      , i = vo(n.nextLocation.pathname, r) || n.nextLocation.pathname;
    return Rl(s.pathname, i) != null || Rl(s.pathname, o) != null
}
const IP = "modulepreload"
  , LP = function(e) {
    return "/" + e
}
  , Wm = {}
  , yo = function(t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
        document.getElementsByTagName("link");
        const i = document.querySelector("meta[property=csp-nonce]")
          , a = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
        s = Promise.allSettled(n.map(l => {
            if (l = LP(l),
            l in Wm)
                return;
            Wm[l] = !0;
            const c = l.endsWith(".css")
              , d = c ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${l}"]${d}`))
                return;
            const h = document.createElement("link");
            if (h.rel = c ? "stylesheet" : IP,
            c || (h.as = "script"),
            h.crossOrigin = "",
            h.href = l,
            a && h.setAttribute("nonce", a),
            document.head.appendChild(h),
            c)
                return new Promise( (f, g) => {
                    h.addEventListener("load", f),
                    h.addEventListener("error", () => g(new Error(`Unable to preload CSS for ${l}`)))
                }
                )
        }
        ))
    }
    function o(i) {
        const a = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (a.payload = i,
        window.dispatchEvent(a),
        !a.defaultPrevented)
            throw i
    }
    return s.then(i => {
        for (const a of i || [])
            a.status === "rejected" && o(a.reason);
        return t().catch(o)
    }
    )
}
  , MP = e => {
    let t;
    return e ? t = e : typeof fetch > "u" ? t = (...n) => yo(async () => {
        const {default: r} = await Promise.resolve().then( () => Ro);
        return {
            default: r
        }
    }
    , void 0).then( ({default: r}) => r(...n)) : t = fetch,
    (...n) => t(...n)
}
;
class Eh extends Error {
    constructor(t, n="FunctionsError", r) {
        super(t),
        this.name = n,
        this.context = r
    }
}
class DP extends Eh {
    constructor(t) {
        super("Failed to send a request to the Edge Function", "FunctionsFetchError", t)
    }
}
class $P extends Eh {
    constructor(t) {
        super("Relay Error invoking the Edge Function", "FunctionsRelayError", t)
    }
}
class FP extends Eh {
    constructor(t) {
        super("Edge Function returned a non-2xx status code", "FunctionsHttpError", t)
    }
}
var Qd;
(function(e) {
    e.Any = "any",
    e.ApNortheast1 = "ap-northeast-1",
    e.ApNortheast2 = "ap-northeast-2",
    e.ApSouth1 = "ap-south-1",
    e.ApSoutheast1 = "ap-southeast-1",
    e.ApSoutheast2 = "ap-southeast-2",
    e.CaCentral1 = "ca-central-1",
    e.EuCentral1 = "eu-central-1",
    e.EuWest1 = "eu-west-1",
    e.EuWest2 = "eu-west-2",
    e.EuWest3 = "eu-west-3",
    e.SaEast1 = "sa-east-1",
    e.UsEast1 = "us-east-1",
    e.UsWest1 = "us-west-1",
    e.UsWest2 = "us-west-2"
}
)(Qd || (Qd = {}));
var UP = function(e, t, n, r) {
    function s(o) {
        return o instanceof n ? o : new n(function(i) {
            i(o)
        }
        )
    }
    return new (n || (n = Promise))(function(o, i) {
        function a(d) {
            try {
                c(r.next(d))
            } catch (h) {
                i(h)
            }
        }
        function l(d) {
            try {
                c(r.throw(d))
            } catch (h) {
                i(h)
            }
        }
        function c(d) {
            d.done ? o(d.value) : s(d.value).then(a, l)
        }
        c((r = r.apply(e, t || [])).next())
    }
    )
};
class zP {
    constructor(t, {headers: n={}, customFetch: r, region: s=Qd.Any}={}) {
        this.url = t,
        this.headers = n,
        this.region = s,
        this.fetch = MP(r)
    }
    setAuth(t) {
        this.headers.Authorization = `Bearer ${t}`
    }
    invoke(t, n={}) {
        var r;
        return UP(this, void 0, void 0, function*() {
            try {
                const {headers: s, method: o, body: i} = n;
                let a = {}
                  , {region: l} = n;
                l || (l = this.region),
                l && l !== "any" && (a["x-region"] = l);
                let c;
                i && (s && !Object.prototype.hasOwnProperty.call(s, "Content-Type") || !s) && (typeof Blob < "u" && i instanceof Blob || i instanceof ArrayBuffer ? (a["Content-Type"] = "application/octet-stream",
                c = i) : typeof i == "string" ? (a["Content-Type"] = "text/plain",
                c = i) : typeof FormData < "u" && i instanceof FormData ? c = i : (a["Content-Type"] = "application/json",
                c = JSON.stringify(i)));
                const d = yield this.fetch(`${this.url}/${t}`, {
                    method: o || "POST",
                    headers: Object.assign(Object.assign(Object.assign({}, a), this.headers), s),
                    body: c
                }).catch(y => {
                    throw new DP(y)
                }
                )
                  , h = d.headers.get("x-relay-error");
                if (h && h === "true")
                    throw new $P(d);
                if (!d.ok)
                    throw new FP(d);
                let f = ((r = d.headers.get("Content-Type")) !== null && r !== void 0 ? r : "text/plain").split(";")[0].trim(), g;
                return f === "application/json" ? g = yield d.json() : f === "application/octet-stream" ? g = yield d.blob() : f === "text/event-stream" ? g = d : f === "multipart/form-data" ? g = yield d.formData() : g = yield d.text(),
                {
                    data: g,
                    error: null
                }
            } catch (s) {
                return {
                    data: null,
                    error: s
                }
            }
        })
    }
}
var ot = {}
  , kh = {}
  , pc = {}
  , Gi = {}
  , mc = {}
  , gc = {}
  , BP = function() {
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("unable to locate global object")
}
  , xo = BP();
const VP = xo.fetch
  , jx = xo.fetch.bind(xo)
  , Px = xo.Headers
  , HP = xo.Request
  , WP = xo.Response
  , Ro = Object.freeze(Object.defineProperty({
    __proto__: null,
    Headers: Px,
    Request: HP,
    Response: WP,
    default: jx,
    fetch: VP
}, Symbol.toStringTag, {
    value: "Module"
}))
  , qP = Lb(Ro);
var vc = {};
Object.defineProperty(vc, "__esModule", {
    value: !0
});
let KP = class extends Error {
    constructor(t) {
        super(t.message),
        this.name = "PostgrestError",
        this.details = t.details,
        this.hint = t.hint,
        this.code = t.code
    }
}
;
vc.default = KP;
var Nx = Rt && Rt.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(gc, "__esModule", {
    value: !0
});
const QP = Nx(qP)
  , GP = Nx(vc);
let YP = class {
    constructor(t) {
        this.shouldThrowOnError = !1,
        this.method = t.method,
        this.url = t.url,
        this.headers = t.headers,
        this.schema = t.schema,
        this.body = t.body,
        this.shouldThrowOnError = t.shouldThrowOnError,
        this.signal = t.signal,
        this.isMaybeSingle = t.isMaybeSingle,
        t.fetch ? this.fetch = t.fetch : typeof fetch > "u" ? this.fetch = QP.default : this.fetch = fetch
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    setHeader(t, n) {
        return this.headers = Object.assign({}, this.headers),
        this.headers[t] = n,
        this
    }
    then(t, n) {
        this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers["Accept-Profile"] = this.schema : this.headers["Content-Profile"] = this.schema),
        this.method !== "GET" && this.method !== "HEAD" && (this.headers["Content-Type"] = "application/json");
        const r = this.fetch;
        let s = r(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal
        }).then(async o => {
            var i, a, l;
            let c = null
              , d = null
              , h = null
              , f = o.status
              , g = o.statusText;
            if (o.ok) {
                if (this.method !== "HEAD") {
                    const x = await o.text();
                    x === "" || (this.headers.Accept === "text/csv" || this.headers.Accept && this.headers.Accept.includes("application/vnd.pgrst.plan+text") ? d = x : d = JSON.parse(x))
                }
                const m = (i = this.headers.Prefer) === null || i === void 0 ? void 0 : i.match(/count=(exact|planned|estimated)/)
                  , w = (a = o.headers.get("content-range")) === null || a === void 0 ? void 0 : a.split("/");
                m && w && w.length > 1 && (h = parseInt(w[1])),
                this.isMaybeSingle && this.method === "GET" && Array.isArray(d) && (d.length > 1 ? (c = {
                    code: "PGRST116",
                    details: `Results contain ${d.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message: "JSON object requested, multiple (or no) rows returned"
                },
                d = null,
                h = null,
                f = 406,
                g = "Not Acceptable") : d.length === 1 ? d = d[0] : d = null)
            } else {
                const m = await o.text();
                try {
                    c = JSON.parse(m),
                    Array.isArray(c) && o.status === 404 && (d = [],
                    c = null,
                    f = 200,
                    g = "OK")
                } catch {
                    o.status === 404 && m === "" ? (f = 204,
                    g = "No Content") : c = {
                        message: m
                    }
                }
                if (c && this.isMaybeSingle && (!((l = c == null ? void 0 : c.details) === null || l === void 0) && l.includes("0 rows")) && (c = null,
                f = 200,
                g = "OK"),
                c && this.shouldThrowOnError)
                    throw new GP.default(c)
            }
            return {
                error: c,
                data: d,
                count: h,
                status: f,
                statusText: g
            }
        }
        );
        return this.shouldThrowOnError || (s = s.catch(o => {
            var i, a, l;
            return {
                error: {
                    message: `${(i = o == null ? void 0 : o.name) !== null && i !== void 0 ? i : "FetchError"}: ${o == null ? void 0 : o.message}`,
                    details: `${(a = o == null ? void 0 : o.stack) !== null && a !== void 0 ? a : ""}`,
                    hint: "",
                    code: `${(l = o == null ? void 0 : o.code) !== null && l !== void 0 ? l : ""}`
                },
                data: null,
                count: null,
                status: 0,
                statusText: ""
            }
        }
        )),
        s.then(t, n)
    }
    returns() {
        return this
    }
    overrideTypes() {
        return this
    }
}
;
gc.default = YP;
var JP = Rt && Rt.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(mc, "__esModule", {
    value: !0
});
const XP = JP(gc);
let ZP = class extends XP.default {
    select(t) {
        let n = !1;
        const r = (t ?? "*").split("").map(s => /\s/.test(s) && !n ? "" : (s === '"' && (n = !n),
        s)).join("");
        return this.url.searchParams.set("select", r),
        this.headers.Prefer && (this.headers.Prefer += ","),
        this.headers.Prefer += "return=representation",
        this
    }
    order(t, {ascending: n=!0, nullsFirst: r, foreignTable: s, referencedTable: o=s}={}) {
        const i = o ? `${o}.order` : "order"
          , a = this.url.searchParams.get(i);
        return this.url.searchParams.set(i, `${a ? `${a},` : ""}${t}.${n ? "asc" : "desc"}${r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"}`),
        this
    }
    limit(t, {foreignTable: n, referencedTable: r=n}={}) {
        const s = typeof r > "u" ? "limit" : `${r}.limit`;
        return this.url.searchParams.set(s, `${t}`),
        this
    }
    range(t, n, {foreignTable: r, referencedTable: s=r}={}) {
        const o = typeof s > "u" ? "offset" : `${s}.offset`
          , i = typeof s > "u" ? "limit" : `${s}.limit`;
        return this.url.searchParams.set(o, `${t}`),
        this.url.searchParams.set(i, `${n - t + 1}`),
        this
    }
    abortSignal(t) {
        return this.signal = t,
        this
    }
    single() {
        return this.headers.Accept = "application/vnd.pgrst.object+json",
        this
    }
    maybeSingle() {
        return this.method === "GET" ? this.headers.Accept = "application/json" : this.headers.Accept = "application/vnd.pgrst.object+json",
        this.isMaybeSingle = !0,
        this
    }
    csv() {
        return this.headers.Accept = "text/csv",
        this
    }
    geojson() {
        return this.headers.Accept = "application/geo+json",
        this
    }
    explain({analyze: t=!1, verbose: n=!1, settings: r=!1, buffers: s=!1, wal: o=!1, format: i="text"}={}) {
        var a;
        const l = [t ? "analyze" : null, n ? "verbose" : null, r ? "settings" : null, s ? "buffers" : null, o ? "wal" : null].filter(Boolean).join("|")
          , c = (a = this.headers.Accept) !== null && a !== void 0 ? a : "application/json";
        return this.headers.Accept = `application/vnd.pgrst.plan+${i}; for="${c}"; options=${l};`,
        i === "json" ? this : this
    }
    rollback() {
        var t;
        return ((t = this.headers.Prefer) !== null && t !== void 0 ? t : "").trim().length > 0 ? this.headers.Prefer += ",tx=rollback" : this.headers.Prefer = "tx=rollback",
        this
    }
    returns() {
        return this
    }
}
;
mc.default = ZP;
var eN = Rt && Rt.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(Gi, "__esModule", {
    value: !0
});
const tN = eN(mc);
let nN = class extends tN.default {
    eq(t, n) {
        return this.url.searchParams.append(t, `eq.${n}`),
        this
    }
    neq(t, n) {
        return this.url.searchParams.append(t, `neq.${n}`),
        this
    }
    gt(t, n) {
        return this.url.searchParams.append(t, `gt.${n}`),
        this
    }
    gte(t, n) {
        return this.url.searchParams.append(t, `gte.${n}`),
        this
    }
    lt(t, n) {
        return this.url.searchParams.append(t, `lt.${n}`),
        this
    }
    lte(t, n) {
        return this.url.searchParams.append(t, `lte.${n}`),
        this
    }
    like(t, n) {
        return this.url.searchParams.append(t, `like.${n}`),
        this
    }
    likeAllOf(t, n) {
        return this.url.searchParams.append(t, `like(all).{${n.join(",")}}`),
        this
    }
    likeAnyOf(t, n) {
        return this.url.searchParams.append(t, `like(any).{${n.join(",")}}`),
        this
    }
    ilike(t, n) {
        return this.url.searchParams.append(t, `ilike.${n}`),
        this
    }
    ilikeAllOf(t, n) {
        return this.url.searchParams.append(t, `ilike(all).{${n.join(",")}}`),
        this
    }
    ilikeAnyOf(t, n) {
        return this.url.searchParams.append(t, `ilike(any).{${n.join(",")}}`),
        this
    }
    is(t, n) {
        return this.url.searchParams.append(t, `is.${n}`),
        this
    }
    in(t, n) {
        const r = Array.from(new Set(n)).map(s => typeof s == "string" && new RegExp("[,()]").test(s) ? `"${s}"` : `${s}`).join(",");
        return this.url.searchParams.append(t, `in.(${r})`),
        this
    }
    contains(t, n) {
        return typeof n == "string" ? this.url.searchParams.append(t, `cs.${n}`) : Array.isArray(n) ? this.url.searchParams.append(t, `cs.{${n.join(",")}}`) : this.url.searchParams.append(t, `cs.${JSON.stringify(n)}`),
        this
    }
    containedBy(t, n) {
        return typeof n == "string" ? this.url.searchParams.append(t, `cd.${n}`) : Array.isArray(n) ? this.url.searchParams.append(t, `cd.{${n.join(",")}}`) : this.url.searchParams.append(t, `cd.${JSON.stringify(n)}`),
        this
    }
    rangeGt(t, n) {
        return this.url.searchParams.append(t, `sr.${n}`),
        this
    }
    rangeGte(t, n) {
        return this.url.searchParams.append(t, `nxl.${n}`),
        this
    }
    rangeLt(t, n) {
        return this.url.searchParams.append(t, `sl.${n}`),
        this
    }
    rangeLte(t, n) {
        return this.url.searchParams.append(t, `nxr.${n}`),
        this
    }
    rangeAdjacent(t, n) {
        return this.url.searchParams.append(t, `adj.${n}`),
        this
    }
    overlaps(t, n) {
        return typeof n == "string" ? this.url.searchParams.append(t, `ov.${n}`) : this.url.searchParams.append(t, `ov.{${n.join(",")}}`),
        this
    }
    textSearch(t, n, {config: r, type: s}={}) {
        let o = "";
        s === "plain" ? o = "pl" : s === "phrase" ? o = "ph" : s === "websearch" && (o = "w");
        const i = r === void 0 ? "" : `(${r})`;
        return this.url.searchParams.append(t, `${o}fts${i}.${n}`),
        this
    }
    match(t) {
        return Object.entries(t).forEach( ([n,r]) => {
            this.url.searchParams.append(n, `eq.${r}`)
        }
        ),
        this
    }
    not(t, n, r) {
        return this.url.searchParams.append(t, `not.${n}.${r}`),
        this
    }
    or(t, {foreignTable: n, referencedTable: r=n}={}) {
        const s = r ? `${r}.or` : "or";
        return this.url.searchParams.append(s, `(${t})`),
        this
    }
    filter(t, n, r) {
        return this.url.searchParams.append(t, `${n}.${r}`),
        this
    }
}
;
Gi.default = nN;
var rN = Rt && Rt.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(pc, "__esModule", {
    value: !0
});
const Ko = rN(Gi);
let sN = class {
    constructor(t, {headers: n={}, schema: r, fetch: s}) {
        this.url = t,
        this.headers = n,
        this.schema = r,
        this.fetch = s
    }
    select(t, {head: n=!1, count: r}={}) {
        const s = n ? "HEAD" : "GET";
        let o = !1;
        const i = (t ?? "*").split("").map(a => /\s/.test(a) && !o ? "" : (a === '"' && (o = !o),
        a)).join("");
        return this.url.searchParams.set("select", i),
        r && (this.headers.Prefer = `count=${r}`),
        new Ko.default({
            method: s,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
    insert(t, {count: n, defaultToNull: r=!0}={}) {
        const s = "POST"
          , o = [];
        if (this.headers.Prefer && o.push(this.headers.Prefer),
        n && o.push(`count=${n}`),
        r || o.push("missing=default"),
        this.headers.Prefer = o.join(","),
        Array.isArray(t)) {
            const i = t.reduce( (a, l) => a.concat(Object.keys(l)), []);
            if (i.length > 0) {
                const a = [...new Set(i)].map(l => `"${l}"`);
                this.url.searchParams.set("columns", a.join(","))
            }
        }
        return new Ko.default({
            method: s,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: t,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
    upsert(t, {onConflict: n, ignoreDuplicates: r=!1, count: s, defaultToNull: o=!0}={}) {
        const i = "POST"
          , a = [`resolution=${r ? "ignore" : "merge"}-duplicates`];
        if (n !== void 0 && this.url.searchParams.set("on_conflict", n),
        this.headers.Prefer && a.push(this.headers.Prefer),
        s && a.push(`count=${s}`),
        o || a.push("missing=default"),
        this.headers.Prefer = a.join(","),
        Array.isArray(t)) {
            const l = t.reduce( (c, d) => c.concat(Object.keys(d)), []);
            if (l.length > 0) {
                const c = [...new Set(l)].map(d => `"${d}"`);
                this.url.searchParams.set("columns", c.join(","))
            }
        }
        return new Ko.default({
            method: i,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: t,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
    update(t, {count: n}={}) {
        const r = "PATCH"
          , s = [];
        return this.headers.Prefer && s.push(this.headers.Prefer),
        n && s.push(`count=${n}`),
        this.headers.Prefer = s.join(","),
        new Ko.default({
            method: r,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: t,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
    delete({count: t}={}) {
        const n = "DELETE"
          , r = [];
        return t && r.push(`count=${t}`),
        this.headers.Prefer && r.unshift(this.headers.Prefer),
        this.headers.Prefer = r.join(","),
        new Ko.default({
            method: n,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
}
;
pc.default = sN;
var yc = {}
  , xc = {};
Object.defineProperty(xc, "__esModule", {
    value: !0
});
xc.version = void 0;
xc.version = "0.0.0-automated";
Object.defineProperty(yc, "__esModule", {
    value: !0
});
yc.DEFAULT_HEADERS = void 0;
const oN = xc;
yc.DEFAULT_HEADERS = {
    "X-Client-Info": `postgrest-js/${oN.version}`
};
var Tx = Rt && Rt.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(kh, "__esModule", {
    value: !0
});
const iN = Tx(pc)
  , aN = Tx(Gi)
  , lN = yc;
let cN = class Rx {
    constructor(t, {headers: n={}, schema: r, fetch: s}={}) {
        this.url = t,
        this.headers = Object.assign(Object.assign({}, lN.DEFAULT_HEADERS), n),
        this.schemaName = r,
        this.fetch = s
    }
    from(t) {
        const n = new URL(`${this.url}/${t}`);
        return new iN.default(n,{
            headers: Object.assign({}, this.headers),
            schema: this.schemaName,
            fetch: this.fetch
        })
    }
    schema(t) {
        return new Rx(this.url,{
            headers: this.headers,
            schema: t,
            fetch: this.fetch
        })
    }
    rpc(t, n={}, {head: r=!1, get: s=!1, count: o}={}) {
        let i;
        const a = new URL(`${this.url}/rpc/${t}`);
        let l;
        r || s ? (i = r ? "HEAD" : "GET",
        Object.entries(n).filter( ([d,h]) => h !== void 0).map( ([d,h]) => [d, Array.isArray(h) ? `{${h.join(",")}}` : `${h}`]).forEach( ([d,h]) => {
            a.searchParams.append(d, h)
        }
        )) : (i = "POST",
        l = n);
        const c = Object.assign({}, this.headers);
        return o && (c.Prefer = `count=${o}`),
        new aN.default({
            method: i,
            url: a,
            headers: c,
            schema: this.schemaName,
            body: l,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
}
;
kh.default = cN;
var Ao = Rt && Rt.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(ot, "__esModule", {
    value: !0
});
ot.PostgrestError = ot.PostgrestBuilder = ot.PostgrestTransformBuilder = ot.PostgrestFilterBuilder = ot.PostgrestQueryBuilder = ot.PostgrestClient = void 0;
const Ax = Ao(kh);
ot.PostgrestClient = Ax.default;
const Ox = Ao(pc);
ot.PostgrestQueryBuilder = Ox.default;
const Ix = Ao(Gi);
ot.PostgrestFilterBuilder = Ix.default;
const Lx = Ao(mc);
ot.PostgrestTransformBuilder = Lx.default;
const Mx = Ao(gc);
ot.PostgrestBuilder = Mx.default;
const Dx = Ao(vc);
ot.PostgrestError = Dx.default;
var uN = ot.default = {
    PostgrestClient: Ax.default,
    PostgrestQueryBuilder: Ox.default,
    PostgrestFilterBuilder: Ix.default,
    PostgrestTransformBuilder: Lx.default,
    PostgrestBuilder: Mx.default,
    PostgrestError: Dx.default
};
const {PostgrestClient: dN, PostgrestQueryBuilder: LA, PostgrestFilterBuilder: MA, PostgrestTransformBuilder: DA, PostgrestBuilder: $A, PostgrestError: FA} = uN
  , fN = "2.11.2"
  , hN = {
    "X-Client-Info": `realtime-js/${fN}`
}
  , pN = "1.0.0"
  , $x = 1e4
  , mN = 1e3;
var Ws;
(function(e) {
    e[e.connecting = 0] = "connecting",
    e[e.open = 1] = "open",
    e[e.closing = 2] = "closing",
    e[e.closed = 3] = "closed"
}
)(Ws || (Ws = {}));
var dt;
(function(e) {
    e.closed = "closed",
    e.errored = "errored",
    e.joined = "joined",
    e.joining = "joining",
    e.leaving = "leaving"
}
)(dt || (dt = {}));
var Ft;
(function(e) {
    e.close = "phx_close",
    e.error = "phx_error",
    e.join = "phx_join",
    e.reply = "phx_reply",
    e.leave = "phx_leave",
    e.access_token = "access_token"
}
)(Ft || (Ft = {}));
var Gd;
(function(e) {
    e.websocket = "websocket"
}
)(Gd || (Gd = {}));
var Or;
(function(e) {
    e.Connecting = "connecting",
    e.Open = "open",
    e.Closing = "closing",
    e.Closed = "closed"
}
)(Or || (Or = {}));
class gN {
    constructor() {
        this.HEADER_LENGTH = 1
    }
    decode(t, n) {
        return t.constructor === ArrayBuffer ? n(this._binaryDecode(t)) : n(typeof t == "string" ? JSON.parse(t) : {})
    }
    _binaryDecode(t) {
        const n = new DataView(t)
          , r = new TextDecoder;
        return this._decodeBroadcast(t, n, r)
    }
    _decodeBroadcast(t, n, r) {
        const s = n.getUint8(1)
          , o = n.getUint8(2);
        let i = this.HEADER_LENGTH + 2;
        const a = r.decode(t.slice(i, i + s));
        i = i + s;
        const l = r.decode(t.slice(i, i + o));
        i = i + o;
        const c = JSON.parse(r.decode(t.slice(i, t.byteLength)));
        return {
            ref: null,
            topic: a,
            event: l,
            payload: c
        }
    }
}
class Fx {
    constructor(t, n) {
        this.callback = t,
        this.timerCalc = n,
        this.timer = void 0,
        this.tries = 0,
        this.callback = t,
        this.timerCalc = n
    }
    reset() {
        this.tries = 0,
        clearTimeout(this.timer)
    }
    scheduleTimeout() {
        clearTimeout(this.timer),
        this.timer = setTimeout( () => {
            this.tries = this.tries + 1,
            this.callback()
        }
        , this.timerCalc(this.tries + 1))
    }
}
var ce;
(function(e) {
    e.abstime = "abstime",
    e.bool = "bool",
    e.date = "date",
    e.daterange = "daterange",
    e.float4 = "float4",
    e.float8 = "float8",
    e.int2 = "int2",
    e.int4 = "int4",
    e.int4range = "int4range",
    e.int8 = "int8",
    e.int8range = "int8range",
    e.json = "json",
    e.jsonb = "jsonb",
    e.money = "money",
    e.numeric = "numeric",
    e.oid = "oid",
    e.reltime = "reltime",
    e.text = "text",
    e.time = "time",
    e.timestamp = "timestamp",
    e.timestamptz = "timestamptz",
    e.timetz = "timetz",
    e.tsrange = "tsrange",
    e.tstzrange = "tstzrange"
}
)(ce || (ce = {}));
const qm = (e, t, n={}) => {
    var r;
    const s = (r = n.skipTypes) !== null && r !== void 0 ? r : [];
    return Object.keys(t).reduce( (o, i) => (o[i] = vN(i, e, t, s),
    o), {})
}
  , vN = (e, t, n, r) => {
    const s = t.find(a => a.name === e)
      , o = s == null ? void 0 : s.type
      , i = n[e];
    return o && !r.includes(o) ? Ux(o, i) : Yd(i)
}
  , Ux = (e, t) => {
    if (e.charAt(0) === "_") {
        const n = e.slice(1, e.length);
        return bN(t, n)
    }
    switch (e) {
    case ce.bool:
        return yN(t);
    case ce.float4:
    case ce.float8:
    case ce.int2:
    case ce.int4:
    case ce.int8:
    case ce.numeric:
    case ce.oid:
        return xN(t);
    case ce.json:
    case ce.jsonb:
        return wN(t);
    case ce.timestamp:
        return _N(t);
    case ce.abstime:
    case ce.date:
    case ce.daterange:
    case ce.int4range:
    case ce.int8range:
    case ce.money:
    case ce.reltime:
    case ce.text:
    case ce.time:
    case ce.timestamptz:
    case ce.timetz:
    case ce.tsrange:
    case ce.tstzrange:
        return Yd(t);
    default:
        return Yd(t)
    }
}
  , Yd = e => e
  , yN = e => {
    switch (e) {
    case "t":
        return !0;
    case "f":
        return !1;
    default:
        return e
    }
}
  , xN = e => {
    if (typeof e == "string") {
        const t = parseFloat(e);
        if (!Number.isNaN(t))
            return t
    }
    return e
}
  , wN = e => {
    if (typeof e == "string")
        try {
            return JSON.parse(e)
        } catch (t) {
            return console.log(`JSON parse error: ${t}`),
            e
        }
    return e
}
  , bN = (e, t) => {
    if (typeof e != "string")
        return e;
    const n = e.length - 1
      , r = e[n];
    if (e[0] === "{" && r === "}") {
        let o;
        const i = e.slice(1, n);
        try {
            o = JSON.parse("[" + i + "]")
        } catch {
            o = i ? i.split(",") : []
        }
        return o.map(a => Ux(t, a))
    }
    return e
}
  , _N = e => typeof e == "string" ? e.replace(" ", "T") : e
  , zx = e => {
    let t = e;
    return t = t.replace(/^ws/i, "http"),
    t = t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, ""),
    t.replace(/\/+$/, "")
}
;
class fu {
    constructor(t, n, r={}, s=$x) {
        this.channel = t,
        this.event = n,
        this.payload = r,
        this.timeout = s,
        this.sent = !1,
        this.timeoutTimer = void 0,
        this.ref = "",
        this.receivedResp = null,
        this.recHooks = [],
        this.refEvent = null
    }
    resend(t) {
        this.timeout = t,
        this._cancelRefEvent(),
        this.ref = "",
        this.refEvent = null,
        this.receivedResp = null,
        this.sent = !1,
        this.send()
    }
    send() {
        this._hasReceived("timeout") || (this.startTimeout(),
        this.sent = !0,
        this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload,
            ref: this.ref,
            join_ref: this.channel._joinRef()
        }))
    }
    updatePayload(t) {
        this.payload = Object.assign(Object.assign({}, this.payload), t)
    }
    receive(t, n) {
        var r;
        return this._hasReceived(t) && n((r = this.receivedResp) === null || r === void 0 ? void 0 : r.response),
        this.recHooks.push({
            status: t,
            callback: n
        }),
        this
    }
    startTimeout() {
        if (this.timeoutTimer)
            return;
        this.ref = this.channel.socket._makeRef(),
        this.refEvent = this.channel._replyEventName(this.ref);
        const t = n => {
            this._cancelRefEvent(),
            this._cancelTimeout(),
            this.receivedResp = n,
            this._matchReceive(n)
        }
        ;
        this.channel._on(this.refEvent, {}, t),
        this.timeoutTimer = setTimeout( () => {
            this.trigger("timeout", {})
        }
        , this.timeout)
    }
    trigger(t, n) {
        this.refEvent && this.channel._trigger(this.refEvent, {
            status: t,
            response: n
        })
    }
    destroy() {
        this._cancelRefEvent(),
        this._cancelTimeout()
    }
    _cancelRefEvent() {
        this.refEvent && this.channel._off(this.refEvent, {})
    }
    _cancelTimeout() {
        clearTimeout(this.timeoutTimer),
        this.timeoutTimer = void 0
    }
    _matchReceive({status: t, response: n}) {
        this.recHooks.filter(r => r.status === t).forEach(r => r.callback(n))
    }
    _hasReceived(t) {
        return this.receivedResp && this.receivedResp.status === t
    }
}
var Km;
(function(e) {
    e.SYNC = "sync",
    e.JOIN = "join",
    e.LEAVE = "leave"
}
)(Km || (Km = {}));
class ui {
    constructor(t, n) {
        this.channel = t,
        this.state = {},
        this.pendingDiffs = [],
        this.joinRef = null,
        this.caller = {
            onJoin: () => {}
            ,
            onLeave: () => {}
            ,
            onSync: () => {}
        };
        const r = (n == null ? void 0 : n.events) || {
            state: "presence_state",
            diff: "presence_diff"
        };
        this.channel._on(r.state, {}, s => {
            const {onJoin: o, onLeave: i, onSync: a} = this.caller;
            this.joinRef = this.channel._joinRef(),
            this.state = ui.syncState(this.state, s, o, i),
            this.pendingDiffs.forEach(l => {
                this.state = ui.syncDiff(this.state, l, o, i)
            }
            ),
            this.pendingDiffs = [],
            a()
        }
        ),
        this.channel._on(r.diff, {}, s => {
            const {onJoin: o, onLeave: i, onSync: a} = this.caller;
            this.inPendingSyncState() ? this.pendingDiffs.push(s) : (this.state = ui.syncDiff(this.state, s, o, i),
            a())
        }
        ),
        this.onJoin( (s, o, i) => {
            this.channel._trigger("presence", {
                event: "join",
                key: s,
                currentPresences: o,
                newPresences: i
            })
        }
        ),
        this.onLeave( (s, o, i) => {
            this.channel._trigger("presence", {
                event: "leave",
                key: s,
                currentPresences: o,
                leftPresences: i
            })
        }
        ),
        this.onSync( () => {
            this.channel._trigger("presence", {
                event: "sync"
            })
        }
        )
    }
    static syncState(t, n, r, s) {
        const o = this.cloneDeep(t)
          , i = this.transformState(n)
          , a = {}
          , l = {};
        return this.map(o, (c, d) => {
            i[c] || (l[c] = d)
        }
        ),
        this.map(i, (c, d) => {
            const h = o[c];
            if (h) {
                const f = d.map(w => w.presence_ref)
                  , g = h.map(w => w.presence_ref)
                  , y = d.filter(w => g.indexOf(w.presence_ref) < 0)
                  , m = h.filter(w => f.indexOf(w.presence_ref) < 0);
                y.length > 0 && (a[c] = y),
                m.length > 0 && (l[c] = m)
            } else
                a[c] = d
        }
        ),
        this.syncDiff(o, {
            joins: a,
            leaves: l
        }, r, s)
    }
    static syncDiff(t, n, r, s) {
        const {joins: o, leaves: i} = {
            joins: this.transformState(n.joins),
            leaves: this.transformState(n.leaves)
        };
        return r || (r = () => {}
        ),
        s || (s = () => {}
        ),
        this.map(o, (a, l) => {
            var c;
            const d = (c = t[a]) !== null && c !== void 0 ? c : [];
            if (t[a] = this.cloneDeep(l),
            d.length > 0) {
                const h = t[a].map(g => g.presence_ref)
                  , f = d.filter(g => h.indexOf(g.presence_ref) < 0);
                t[a].unshift(...f)
            }
            r(a, d, l)
        }
        ),
        this.map(i, (a, l) => {
            let c = t[a];
            if (!c)
                return;
            const d = l.map(h => h.presence_ref);
            c = c.filter(h => d.indexOf(h.presence_ref) < 0),
            t[a] = c,
            s(a, c, l),
            c.length === 0 && delete t[a]
        }
        ),
        t
    }
    static map(t, n) {
        return Object.getOwnPropertyNames(t).map(r => n(r, t[r]))
    }
    static transformState(t) {
        return t = this.cloneDeep(t),
        Object.getOwnPropertyNames(t).reduce( (n, r) => {
            const s = t[r];
            return "metas"in s ? n[r] = s.metas.map(o => (o.presence_ref = o.phx_ref,
            delete o.phx_ref,
            delete o.phx_ref_prev,
            o)) : n[r] = s,
            n
        }
        , {})
    }
    static cloneDeep(t) {
        return JSON.parse(JSON.stringify(t))
    }
    onJoin(t) {
        this.caller.onJoin = t
    }
    onLeave(t) {
        this.caller.onLeave = t
    }
    onSync(t) {
        this.caller.onSync = t
    }
    inPendingSyncState() {
        return !this.joinRef || this.joinRef !== this.channel._joinRef()
    }
}
var Qm;
(function(e) {
    e.ALL = "*",
    e.INSERT = "INSERT",
    e.UPDATE = "UPDATE",
    e.DELETE = "DELETE"
}
)(Qm || (Qm = {}));
var Gm;
(function(e) {
    e.BROADCAST = "broadcast",
    e.PRESENCE = "presence",
    e.POSTGRES_CHANGES = "postgres_changes",
    e.SYSTEM = "system"
}
)(Gm || (Gm = {}));
var gn;
(function(e) {
    e.SUBSCRIBED = "SUBSCRIBED",
    e.TIMED_OUT = "TIMED_OUT",
    e.CLOSED = "CLOSED",
    e.CHANNEL_ERROR = "CHANNEL_ERROR"
}
)(gn || (gn = {}));
class jh {
    constructor(t, n={
        config: {}
    }, r) {
        this.topic = t,
        this.params = n,
        this.socket = r,
        this.bindings = {},
        this.state = dt.closed,
        this.joinedOnce = !1,
        this.pushBuffer = [],
        this.subTopic = t.replace(/^realtime:/i, ""),
        this.params.config = Object.assign({
            broadcast: {
                ack: !1,
                self: !1
            },
            presence: {
                key: ""
            },
            private: !1
        }, n.config),
        this.timeout = this.socket.timeout,
        this.joinPush = new fu(this,Ft.join,this.params,this.timeout),
        this.rejoinTimer = new Fx( () => this._rejoinUntilConnected(),this.socket.reconnectAfterMs),
        this.joinPush.receive("ok", () => {
            this.state = dt.joined,
            this.rejoinTimer.reset(),
            this.pushBuffer.forEach(s => s.send()),
            this.pushBuffer = []
        }
        ),
        this._onClose( () => {
            this.rejoinTimer.reset(),
            this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
            this.state = dt.closed,
            this.socket._remove(this)
        }
        ),
        this._onError(s => {
            this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, s),
            this.state = dt.errored,
            this.rejoinTimer.scheduleTimeout())
        }
        ),
        this.joinPush.receive("timeout", () => {
            this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout),
            this.state = dt.errored,
            this.rejoinTimer.scheduleTimeout())
        }
        ),
        this._on(Ft.reply, {}, (s, o) => {
            this._trigger(this._replyEventName(o), s)
        }
        ),
        this.presence = new ui(this),
        this.broadcastEndpointURL = zx(this.socket.endPoint) + "/api/broadcast",
        this.private = this.params.config.private || !1
    }
    subscribe(t, n=this.timeout) {
        var r, s;
        if (this.socket.isConnected() || this.socket.connect(),
        this.joinedOnce)
            throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
        {
            const {config: {broadcast: o, presence: i, private: a}} = this.params;
            this._onError(d => t == null ? void 0 : t(gn.CHANNEL_ERROR, d)),
            this._onClose( () => t == null ? void 0 : t(gn.CLOSED));
            const l = {}
              , c = {
                broadcast: o,
                presence: i,
                postgres_changes: (s = (r = this.bindings.postgres_changes) === null || r === void 0 ? void 0 : r.map(d => d.filter)) !== null && s !== void 0 ? s : [],
                private: a
            };
            this.socket.accessTokenValue && (l.access_token = this.socket.accessTokenValue),
            this.updateJoinPayload(Object.assign({
                config: c
            }, l)),
            this.joinedOnce = !0,
            this._rejoin(n),
            this.joinPush.receive("ok", async ({postgres_changes: d}) => {
                var h;
                if (this.socket.setAuth(),
                d === void 0) {
                    t == null || t(gn.SUBSCRIBED);
                    return
                } else {
                    const f = this.bindings.postgres_changes
                      , g = (h = f == null ? void 0 : f.length) !== null && h !== void 0 ? h : 0
                      , y = [];
                    for (let m = 0; m < g; m++) {
                        const w = f[m]
                          , {filter: {event: x, schema: v, table: b, filter: _}} = w
                          , C = d && d[m];
                        if (C && C.event === x && C.schema === v && C.table === b && C.filter === _)
                            y.push(Object.assign(Object.assign({}, w), {
                                id: C.id
                            }));
                        else {
                            this.unsubscribe(),
                            t == null || t(gn.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
                            return
                        }
                    }
                    this.bindings.postgres_changes = y,
                    t && t(gn.SUBSCRIBED);
                    return
                }
            }
            ).receive("error", d => {
                t == null || t(gn.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(d).join(", ") || "error")))
            }
            ).receive("timeout", () => {
                t == null || t(gn.TIMED_OUT)
            }
            )
        }
        return this
    }
    presenceState() {
        return this.presence.state
    }
    async track(t, n={}) {
        return await this.send({
            type: "presence",
            event: "track",
            payload: t
        }, n.timeout || this.timeout)
    }
    async untrack(t={}) {
        return await this.send({
            type: "presence",
            event: "untrack"
        }, t)
    }
    on(t, n, r) {
        return this._on(t, n, r)
    }
    async send(t, n={}) {
        var r, s;
        if (!this._canPush() && t.type === "broadcast") {
            const {event: o, payload: i} = t
              , l = {
                method: "POST",
                headers: {
                    Authorization: this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "",
                    apikey: this.socket.apiKey ? this.socket.apiKey : "",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    messages: [{
                        topic: this.subTopic,
                        event: o,
                        payload: i,
                        private: this.private
                    }]
                })
            };
            try {
                const c = await this._fetchWithTimeout(this.broadcastEndpointURL, l, (r = n.timeout) !== null && r !== void 0 ? r : this.timeout);
                return await ((s = c.body) === null || s === void 0 ? void 0 : s.cancel()),
                c.ok ? "ok" : "error"
            } catch (c) {
                return c.name === "AbortError" ? "timed out" : "error"
            }
        } else
            return new Promise(o => {
                var i, a, l;
                const c = this._push(t.type, t, n.timeout || this.timeout);
                t.type === "broadcast" && !(!((l = (a = (i = this.params) === null || i === void 0 ? void 0 : i.config) === null || a === void 0 ? void 0 : a.broadcast) === null || l === void 0) && l.ack) && o("ok"),
                c.receive("ok", () => o("ok")),
                c.receive("error", () => o("error")),
                c.receive("timeout", () => o("timed out"))
            }
            )
    }
    updateJoinPayload(t) {
        this.joinPush.updatePayload(t)
    }
    unsubscribe(t=this.timeout) {
        this.state = dt.leaving;
        const n = () => {
            this.socket.log("channel", `leave ${this.topic}`),
            this._trigger(Ft.close, "leave", this._joinRef())
        }
        ;
        return this.rejoinTimer.reset(),
        this.joinPush.destroy(),
        new Promise(r => {
            const s = new fu(this,Ft.leave,{},t);
            s.receive("ok", () => {
                n(),
                r("ok")
            }
            ).receive("timeout", () => {
                n(),
                r("timed out")
            }
            ).receive("error", () => {
                r("error")
            }
            ),
            s.send(),
            this._canPush() || s.trigger("ok", {})
        }
        )
    }
    async _fetchWithTimeout(t, n, r) {
        const s = new AbortController
          , o = setTimeout( () => s.abort(), r)
          , i = await this.socket.fetch(t, Object.assign(Object.assign({}, n), {
            signal: s.signal
        }));
        return clearTimeout(o),
        i
    }
    _push(t, n, r=this.timeout) {
        if (!this.joinedOnce)
            throw `tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        let s = new fu(this,t,n,r);
        return this._canPush() ? s.send() : (s.startTimeout(),
        this.pushBuffer.push(s)),
        s
    }
    _onMessage(t, n, r) {
        return n
    }
    _isMember(t) {
        return this.topic === t
    }
    _joinRef() {
        return this.joinPush.ref
    }
    _trigger(t, n, r) {
        var s, o;
        const i = t.toLocaleLowerCase()
          , {close: a, error: l, leave: c, join: d} = Ft;
        if (r && [a, l, c, d].indexOf(i) >= 0 && r !== this._joinRef())
            return;
        let f = this._onMessage(i, n, r);
        if (n && !f)
            throw "channel onMessage callbacks must return the payload, modified or unmodified";
        ["insert", "update", "delete"].includes(i) ? (s = this.bindings.postgres_changes) === null || s === void 0 || s.filter(g => {
            var y, m, w;
            return ((y = g.filter) === null || y === void 0 ? void 0 : y.event) === "*" || ((w = (m = g.filter) === null || m === void 0 ? void 0 : m.event) === null || w === void 0 ? void 0 : w.toLocaleLowerCase()) === i
        }
        ).map(g => g.callback(f, r)) : (o = this.bindings[i]) === null || o === void 0 || o.filter(g => {
            var y, m, w, x, v, b;
            if (["broadcast", "presence", "postgres_changes"].includes(i))
                if ("id"in g) {
                    const _ = g.id
                      , C = (y = g.filter) === null || y === void 0 ? void 0 : y.event;
                    return _ && ((m = n.ids) === null || m === void 0 ? void 0 : m.includes(_)) && (C === "*" || (C == null ? void 0 : C.toLocaleLowerCase()) === ((w = n.data) === null || w === void 0 ? void 0 : w.type.toLocaleLowerCase()))
                } else {
                    const _ = (v = (x = g == null ? void 0 : g.filter) === null || x === void 0 ? void 0 : x.event) === null || v === void 0 ? void 0 : v.toLocaleLowerCase();
                    return _ === "*" || _ === ((b = n == null ? void 0 : n.event) === null || b === void 0 ? void 0 : b.toLocaleLowerCase())
                }
            else
                return g.type.toLocaleLowerCase() === i
        }
        ).map(g => {
            if (typeof f == "object" && "ids"in f) {
                const y = f.data
                  , {schema: m, table: w, commit_timestamp: x, type: v, errors: b} = y;
                f = Object.assign(Object.assign({}, {
                    schema: m,
                    table: w,
                    commit_timestamp: x,
                    eventType: v,
                    new: {},
                    old: {},
                    errors: b
                }), this._getPayloadRecords(y))
            }
            g.callback(f, r)
        }
        )
    }
    _isClosed() {
        return this.state === dt.closed
    }
    _isJoined() {
        return this.state === dt.joined
    }
    _isJoining() {
        return this.state === dt.joining
    }
    _isLeaving() {
        return this.state === dt.leaving
    }
    _replyEventName(t) {
        return `chan_reply_${t}`
    }
    _on(t, n, r) {
        const s = t.toLocaleLowerCase()
          , o = {
            type: s,
            filter: n,
            callback: r
        };
        return this.bindings[s] ? this.bindings[s].push(o) : this.bindings[s] = [o],
        this
    }
    _off(t, n) {
        const r = t.toLocaleLowerCase();
        return this.bindings[r] = this.bindings[r].filter(s => {
            var o;
            return !(((o = s.type) === null || o === void 0 ? void 0 : o.toLocaleLowerCase()) === r && jh.isEqual(s.filter, n))
        }
        ),
        this
    }
    static isEqual(t, n) {
        if (Object.keys(t).length !== Object.keys(n).length)
            return !1;
        for (const r in t)
            if (t[r] !== n[r])
                return !1;
        return !0
    }
    _rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout(),
        this.socket.isConnected() && this._rejoin()
    }
    _onClose(t) {
        this._on(Ft.close, {}, t)
    }
    _onError(t) {
        this._on(Ft.error, {}, n => t(n))
    }
    _canPush() {
        return this.socket.isConnected() && this._isJoined()
    }
    _rejoin(t=this.timeout) {
        this._isLeaving() || (this.socket._leaveOpenTopic(this.topic),
        this.state = dt.joining,
        this.joinPush.resend(t))
    }
    _getPayloadRecords(t) {
        const n = {
            new: {},
            old: {}
        };
        return (t.type === "INSERT" || t.type === "UPDATE") && (n.new = qm(t.columns, t.record)),
        (t.type === "UPDATE" || t.type === "DELETE") && (n.old = qm(t.columns, t.old_record)),
        n
    }
}
const SN = () => {}
  , CN = typeof WebSocket < "u"
  , EN = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class kN {
    constructor(t, n) {
        var r;
        this.accessTokenValue = null,
        this.apiKey = null,
        this.channels = [],
        this.endPoint = "",
        this.httpEndpoint = "",
        this.headers = hN,
        this.params = {},
        this.timeout = $x,
        this.heartbeatIntervalMs = 3e4,
        this.heartbeatTimer = void 0,
        this.pendingHeartbeatRef = null,
        this.ref = 0,
        this.logger = SN,
        this.conn = null,
        this.sendBuffer = [],
        this.serializer = new gN,
        this.stateChangeCallbacks = {
            open: [],
            close: [],
            error: [],
            message: []
        },
        this.accessToken = null,
        this._resolveFetch = o => {
            let i;
            return o ? i = o : typeof fetch > "u" ? i = (...a) => yo(async () => {
                const {default: l} = await Promise.resolve().then( () => Ro);
                return {
                    default: l
                }
            }
            , void 0).then( ({default: l}) => l(...a)) : i = fetch,
            (...a) => i(...a)
        }
        ,
        this.endPoint = `${t}/${Gd.websocket}`,
        this.httpEndpoint = zx(t),
        n != null && n.transport ? this.transport = n.transport : this.transport = null,
        n != null && n.params && (this.params = n.params),
        n != null && n.headers && (this.headers = Object.assign(Object.assign({}, this.headers), n.headers)),
        n != null && n.timeout && (this.timeout = n.timeout),
        n != null && n.logger && (this.logger = n.logger),
        n != null && n.heartbeatIntervalMs && (this.heartbeatIntervalMs = n.heartbeatIntervalMs);
        const s = (r = n == null ? void 0 : n.params) === null || r === void 0 ? void 0 : r.apikey;
        if (s && (this.accessTokenValue = s,
        this.apiKey = s),
        this.reconnectAfterMs = n != null && n.reconnectAfterMs ? n.reconnectAfterMs : o => [1e3, 2e3, 5e3, 1e4][o - 1] || 1e4,
        this.encode = n != null && n.encode ? n.encode : (o, i) => i(JSON.stringify(o)),
        this.decode = n != null && n.decode ? n.decode : this.serializer.decode.bind(this.serializer),
        this.reconnectTimer = new Fx(async () => {
            this.disconnect(),
            this.connect()
        }
        ,this.reconnectAfterMs),
        this.fetch = this._resolveFetch(n == null ? void 0 : n.fetch),
        n != null && n.worker) {
            if (typeof window < "u" && !window.Worker)
                throw new Error("Web Worker is not supported");
            this.worker = (n == null ? void 0 : n.worker) || !1,
            this.workerUrl = n == null ? void 0 : n.workerUrl
        }
        this.accessToken = (n == null ? void 0 : n.accessToken) || null
    }
    connect() {
        if (!this.conn) {
            if (this.transport) {
                this.conn = new this.transport(this.endpointURL(),void 0,{
                    headers: this.headers
                });
                return
            }
            if (CN) {
                this.conn = new WebSocket(this.endpointURL()),
                this.setupConnection();
                return
            }
            this.conn = new jN(this.endpointURL(),void 0,{
                close: () => {
                    this.conn = null
                }
            }),
            yo(async () => {
                const {default: t} = await import("./browser-Cru2TsYd.js").then(n => n.b);
                return {
                    default: t
                }
            }
            , []).then( ({default: t}) => {
                this.conn = new t(this.endpointURL(),void 0,{
                    headers: this.headers
                }),
                this.setupConnection()
            }
            )
        }
    }
    endpointURL() {
        return this._appendParams(this.endPoint, Object.assign({}, this.params, {
            vsn: pN
        }))
    }
    disconnect(t, n) {
        this.conn && (this.conn.onclose = function() {}
        ,
        t ? this.conn.close(t, n ?? "") : this.conn.close(),
        this.conn = null,
        this.heartbeatTimer && clearInterval(this.heartbeatTimer),
        this.reconnectTimer.reset())
    }
    getChannels() {
        return this.channels
    }
    async removeChannel(t) {
        const n = await t.unsubscribe();
        return this.channels.length === 0 && this.disconnect(),
        n
    }
    async removeAllChannels() {
        const t = await Promise.all(this.channels.map(n => n.unsubscribe()));
        return this.disconnect(),
        t
    }
    log(t, n, r) {
        this.logger(t, n, r)
    }
    connectionState() {
        switch (this.conn && this.conn.readyState) {
        case Ws.connecting:
            return Or.Connecting;
        case Ws.open:
            return Or.Open;
        case Ws.closing:
            return Or.Closing;
        default:
            return Or.Closed
        }
    }
    isConnected() {
        return this.connectionState() === Or.Open
    }
    channel(t, n={
        config: {}
    }) {
        const r = new jh(`realtime:${t}`,n,this);
        return this.channels.push(r),
        r
    }
    push(t) {
        const {topic: n, event: r, payload: s, ref: o} = t
          , i = () => {
            this.encode(t, a => {
                var l;
                (l = this.conn) === null || l === void 0 || l.send(a)
            }
            )
        }
        ;
        this.log("push", `${n} ${r} (${o})`, s),
        this.isConnected() ? i() : this.sendBuffer.push(i)
    }
    async setAuth(t=null) {
        let n = t || this.accessToken && await this.accessToken() || this.accessTokenValue;
        if (n) {
            let r = null;
            try {
                r = JSON.parse(atob(n.split(".")[1]))
            } catch {}
            if (r && r.exp && !(Math.floor(Date.now() / 1e3) - r.exp < 0))
                return this.log("auth", `InvalidJWTToken: Invalid value for JWT claim "exp" with value ${r.exp}`),
                Promise.reject(`InvalidJWTToken: Invalid value for JWT claim "exp" with value ${r.exp}`);
            this.accessTokenValue = n,
            this.channels.forEach(s => {
                n && s.updateJoinPayload({
                    access_token: n
                }),
                s.joinedOnce && s._isJoined() && s._push(Ft.access_token, {
                    access_token: n
                })
            }
            )
        }
    }
    async sendHeartbeat() {
        var t;
        if (this.isConnected()) {
            if (this.pendingHeartbeatRef) {
                this.pendingHeartbeatRef = null,
                this.log("transport", "heartbeat timeout. Attempting to re-establish connection"),
                (t = this.conn) === null || t === void 0 || t.close(mN, "hearbeat timeout");
                return
            }
            this.pendingHeartbeatRef = this._makeRef(),
            this.push({
                topic: "phoenix",
                event: "heartbeat",
                payload: {},
                ref: this.pendingHeartbeatRef
            }),
            this.setAuth()
        }
    }
    flushSendBuffer() {
        this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(t => t()),
        this.sendBuffer = [])
    }
    _makeRef() {
        let t = this.ref + 1;
        return t === this.ref ? this.ref = 0 : this.ref = t,
        this.ref.toString()
    }
    _leaveOpenTopic(t) {
        let n = this.channels.find(r => r.topic === t && (r._isJoined() || r._isJoining()));
        n && (this.log("transport", `leaving duplicate topic "${t}"`),
        n.unsubscribe())
    }
    _remove(t) {
        this.channels = this.channels.filter(n => n._joinRef() !== t._joinRef())
    }
    setupConnection() {
        this.conn && (this.conn.binaryType = "arraybuffer",
        this.conn.onopen = () => this._onConnOpen(),
        this.conn.onerror = t => this._onConnError(t),
        this.conn.onmessage = t => this._onConnMessage(t),
        this.conn.onclose = t => this._onConnClose(t))
    }
    _onConnMessage(t) {
        this.decode(t.data, n => {
            let {topic: r, event: s, payload: o, ref: i} = n;
            i && i === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null),
            this.log("receive", `${o.status || ""} ${r} ${s} ${i && "(" + i + ")" || ""}`, o),
            this.channels.filter(a => a._isMember(r)).forEach(a => a._trigger(s, o, i)),
            this.stateChangeCallbacks.message.forEach(a => a(n))
        }
        )
    }
    async _onConnOpen() {
        if (this.log("transport", `connected to ${this.endpointURL()}`),
        this.flushSendBuffer(),
        this.reconnectTimer.reset(),
        !this.worker)
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            this.heartbeatTimer = setInterval( () => this.sendHeartbeat(), this.heartbeatIntervalMs);
        else {
            this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
            const t = this._workerObjectUrl(this.workerUrl);
            this.workerRef = new Worker(t),
            this.workerRef.onerror = n => {
                this.log("worker", "worker error", n.message),
                this.workerRef.terminate()
            }
            ,
            this.workerRef.onmessage = n => {
                n.data.event === "keepAlive" && this.sendHeartbeat()
            }
            ,
            this.workerRef.postMessage({
                event: "start",
                interval: this.heartbeatIntervalMs
            })
        }
        this.stateChangeCallbacks.open.forEach(t => t())
    }
    _onConnClose(t) {
        this.log("transport", "close", t),
        this._triggerChanError(),
        this.heartbeatTimer && clearInterval(this.heartbeatTimer),
        this.reconnectTimer.scheduleTimeout(),
        this.stateChangeCallbacks.close.forEach(n => n(t))
    }
    _onConnError(t) {
        this.log("transport", t.message),
        this._triggerChanError(),
        this.stateChangeCallbacks.error.forEach(n => n(t))
    }
    _triggerChanError() {
        this.channels.forEach(t => t._trigger(Ft.error))
    }
    _appendParams(t, n) {
        if (Object.keys(n).length === 0)
            return t;
        const r = t.match(/\?/) ? "&" : "?"
          , s = new URLSearchParams(n);
        return `${t}${r}${s}`
    }
    _workerObjectUrl(t) {
        let n;
        if (t)
            n = t;
        else {
            const r = new Blob([EN],{
                type: "application/javascript"
            });
            n = URL.createObjectURL(r)
        }
        return n
    }
}
class jN {
    constructor(t, n, r) {
        this.binaryType = "arraybuffer",
        this.onclose = () => {}
        ,
        this.onerror = () => {}
        ,
        this.onmessage = () => {}
        ,
        this.onopen = () => {}
        ,
        this.readyState = Ws.connecting,
        this.send = () => {}
        ,
        this.url = null,
        this.url = t,
        this.close = r.close
    }
}
class Ph extends Error {
    constructor(t) {
        super(t),
        this.__isStorageError = !0,
        this.name = "StorageError"
    }
}
function Re(e) {
    return typeof e == "object" && e !== null && "__isStorageError"in e
}
class PN extends Ph {
    constructor(t, n) {
        super(t),
        this.name = "StorageApiError",
        this.status = n
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status
        }
    }
}
class Jd extends Ph {
    constructor(t, n) {
        super(t),
        this.name = "StorageUnknownError",
        this.originalError = n
    }
}
var NN = function(e, t, n, r) {
    function s(o) {
        return o instanceof n ? o : new n(function(i) {
            i(o)
        }
        )
    }
    return new (n || (n = Promise))(function(o, i) {
        function a(d) {
            try {
                c(r.next(d))
            } catch (h) {
                i(h)
            }
        }
        function l(d) {
            try {
                c(r.throw(d))
            } catch (h) {
                i(h)
            }
        }
        function c(d) {
            d.done ? o(d.value) : s(d.value).then(a, l)
        }
        c((r = r.apply(e, t || [])).next())
    }
    )
};
const Bx = e => {
    let t;
    return e ? t = e : typeof fetch > "u" ? t = (...n) => yo(async () => {
        const {default: r} = await Promise.resolve().then( () => Ro);
        return {
            default: r
        }
    }
    , void 0).then( ({default: r}) => r(...n)) : t = fetch,
    (...n) => t(...n)
}
  , TN = () => NN(void 0, void 0, void 0, function*() {
    return typeof Response > "u" ? (yield yo( () => Promise.resolve().then( () => Ro), void 0)).Response : Response
})
  , Xd = e => {
    if (Array.isArray(e))
        return e.map(n => Xd(n));
    if (typeof e == "function" || e !== Object(e))
        return e;
    const t = {};
    return Object.entries(e).forEach( ([n,r]) => {
        const s = n.replace(/([-_][a-z])/gi, o => o.toUpperCase().replace(/[-_]/g, ""));
        t[s] = Xd(r)
    }
    ),
    t
}
;
var is = function(e, t, n, r) {
    function s(o) {
        return o instanceof n ? o : new n(function(i) {
            i(o)
        }
        )
    }
    return new (n || (n = Promise))(function(o, i) {
        function a(d) {
            try {
                c(r.next(d))
            } catch (h) {
                i(h)
            }
        }
        function l(d) {
            try {
                c(r.throw(d))
            } catch (h) {
                i(h)
            }
        }
        function c(d) {
            d.done ? o(d.value) : s(d.value).then(a, l)
        }
        c((r = r.apply(e, t || [])).next())
    }
    )
};
const hu = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e)
  , RN = (e, t, n) => is(void 0, void 0, void 0, function*() {
    const r = yield TN();
    e instanceof r && !(n != null && n.noResolveJson) ? e.json().then(s => {
        t(new PN(hu(s),e.status || 500))
    }
    ).catch(s => {
        t(new Jd(hu(s),s))
    }
    ) : t(new Jd(hu(e),e))
})
  , AN = (e, t, n, r) => {
    const s = {
        method: e,
        headers: (t == null ? void 0 : t.headers) || {}
    };
    return e === "GET" ? s : (s.headers = Object.assign({
        "Content-Type": "application/json"
    }, t == null ? void 0 : t.headers),
    r && (s.body = JSON.stringify(r)),
    Object.assign(Object.assign({}, s), n))
}
;
function Yi(e, t, n, r, s, o) {
    return is(this, void 0, void 0, function*() {
        return new Promise( (i, a) => {
            e(n, AN(t, r, s, o)).then(l => {
                if (!l.ok)
                    throw l;
                return r != null && r.noResolveJson ? l : l.json()
            }
            ).then(l => i(l)).catch(l => RN(l, a, r))
        }
        )
    })
}
function Il(e, t, n, r) {
    return is(this, void 0, void 0, function*() {
        return Yi(e, "GET", t, n, r)
    })
}
function Wn(e, t, n, r, s) {
    return is(this, void 0, void 0, function*() {
        return Yi(e, "POST", t, r, s, n)
    })
}
function ON(e, t, n, r, s) {
    return is(this, void 0, void 0, function*() {
        return Yi(e, "PUT", t, r, s, n)
    })
}
function IN(e, t, n, r) {
    return is(this, void 0, void 0, function*() {
        return Yi(e, "HEAD", t, Object.assign(Object.assign({}, n), {
            noResolveJson: !0
        }), r)
    })
}
function Vx(e, t, n, r, s) {
    return is(this, void 0, void 0, function*() {
        return Yi(e, "DELETE", t, r, s, n)
    })
}
var et = function(e, t, n, r) {
    function s(o) {
        return o instanceof n ? o : new n(function(i) {
            i(o)
        }
        )
    }
    return new (n || (n = Promise))(function(o, i) {
        function a(d) {
            try {
                c(r.next(d))
            } catch (h) {
                i(h)
            }
        }
        function l(d) {
            try {
                c(r.throw(d))
            } catch (h) {
                i(h)
            }
        }
        function c(d) {
            d.done ? o(d.value) : s(d.value).then(a, l)
        }
        c((r = r.apply(e, t || [])).next())
    }
    )
};
const LN = {
    limit: 100,
    offset: 0,
    sortBy: {
        column: "name",
        order: "asc"
    }
}
  , Ym = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1
};
class MN {
    constructor(t, n={}, r, s) {
        this.url = t,
        this.headers = n,
        this.bucketId = r,
        this.fetch = Bx(s)
    }
    uploadOrUpdate(t, n, r, s) {
        return et(this, void 0, void 0, function*() {
            try {
                let o;
                const i = Object.assign(Object.assign({}, Ym), s);
                let a = Object.assign(Object.assign({}, this.headers), t === "POST" && {
                    "x-upsert": String(i.upsert)
                });
                const l = i.metadata;
                typeof Blob < "u" && r instanceof Blob ? (o = new FormData,
                o.append("cacheControl", i.cacheControl),
                l && o.append("metadata", this.encodeMetadata(l)),
                o.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (o = r,
                o.append("cacheControl", i.cacheControl),
                l && o.append("metadata", this.encodeMetadata(l))) : (o = r,
                a["cache-control"] = `max-age=${i.cacheControl}`,
                a["content-type"] = i.contentType,
                l && (a["x-metadata"] = this.toBase64(this.encodeMetadata(l)))),
                s != null && s.headers && (a = Object.assign(Object.assign({}, a), s.headers));
                const c = this._removeEmptyFolders(n)
                  , d = this._getFinalPath(c)
                  , h = yield this.fetch(`${this.url}/object/${d}`, Object.assign({
                    method: t,
                    body: o,
                    headers: a
                }, i != null && i.duplex ? {
                    duplex: i.duplex
                } : {}))
                  , f = yield h.json();
                return h.ok ? {
                    data: {
                        path: c,
                        id: f.Id,
                        fullPath: f.Key
                    },
                    error: null
                } : {
                    data: null,
                    error: f
                }
            } catch (o) {
                if (Re(o))
                    return {
                        data: null,
                        error: o
                    };
                throw o
            }
        })
    }
    upload(t, n, r) {
        return et(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("POST", t, n, r)
        })
    }
    uploadToSignedUrl(t, n, r, s) {
        return et(this, void 0, void 0, function*() {
            const o = this._removeEmptyFolders(t)
              , i = this._getFinalPath(o)
              , a = new URL(this.url + `/object/upload/sign/${i}`);
            a.searchParams.set("token", n);
            try {
                let l;
                const c = Object.assign({
                    upsert: Ym.upsert
                }, s)
                  , d = Object.assign(Object.assign({}, this.headers), {
                    "x-upsert": String(c.upsert)
                });
                typeof Blob < "u" && r instanceof Blob ? (l = new FormData,
                l.append("cacheControl", c.cacheControl),
                l.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (l = r,
                l.append("cacheControl", c.cacheControl)) : (l = r,
                d["cache-control"] = `max-age=${c.cacheControl}`,
                d["content-type"] = c.contentType);
                const h = yield this.fetch(a.toString(), {
                    method: "PUT",
                    body: l,
                    headers: d
                })
                  , f = yield h.json();
                return h.ok ? {
                    data: {
                        path: o,
                        fullPath: f.Key
                    },
                    error: null
                } : {
                    data: null,
                    error: f
                }
            } catch (l) {
                if (Re(l))
                    return {
                        data: null,
                        error: l
                    };
                throw l
            }
        })
    }
    createSignedUploadUrl(t, n) {
        return et(this, void 0, void 0, function*() {
            try {
                let r = this._getFinalPath(t);
                const s = Object.assign({}, this.headers);
                n != null && n.upsert && (s["x-upsert"] = "true");
                const o = yield Wn(this.fetch, `${this.url}/object/upload/sign/${r}`, {}, {
                    headers: s
                })
                  , i = new URL(this.url + o.url)
                  , a = i.searchParams.get("token");
                if (!a)
                    throw new Ph("No token returned by API");
                return {
                    data: {
                        signedUrl: i.toString(),
                        path: t,
                        token: a
                    },
                    error: null
                }
            } catch (r) {
                if (Re(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    update(t, n, r) {
        return et(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("PUT", t, n, r)
        })
    }
    move(t, n, r) {
        return et(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Wn(this.fetch, `${this.url}/object/move`, {
                        bucketId: this.bucketId,
                        sourceKey: t,
                        destinationKey: n,
                        destinationBucket: r == null ? void 0 : r.destinationBucket
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (s) {
                if (Re(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    copy(t, n, r) {
        return et(this, void 0, void 0, function*() {
            try {
                return {
                    data: {
                        path: (yield Wn(this.fetch, `${this.url}/object/copy`, {
                            bucketId: this.bucketId,
                            sourceKey: t,
                            destinationKey: n,
                            destinationBucket: r == null ? void 0 : r.destinationBucket
                        }, {
                            headers: this.headers
                        })).Key
                    },
                    error: null
                }
            } catch (s) {
                if (Re(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    createSignedUrl(t, n, r) {
        return et(this, void 0, void 0, function*() {
            try {
                let s = this._getFinalPath(t)
                  , o = yield Wn(this.fetch, `${this.url}/object/sign/${s}`, Object.assign({
                    expiresIn: n
                }, r != null && r.transform ? {
                    transform: r.transform
                } : {}), {
                    headers: this.headers
                });
                const i = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
                return o = {
                    signedUrl: encodeURI(`${this.url}${o.signedURL}${i}`)
                },
                {
                    data: o,
                    error: null
                }
            } catch (s) {
                if (Re(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    createSignedUrls(t, n, r) {
        return et(this, void 0, void 0, function*() {
            try {
                const s = yield Wn(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
                    expiresIn: n,
                    paths: t
                }, {
                    headers: this.headers
                })
                  , o = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
                return {
                    data: s.map(i => Object.assign(Object.assign({}, i), {
                        signedUrl: i.signedURL ? encodeURI(`${this.url}${i.signedURL}${o}`) : null
                    })),
                    error: null
                }
            } catch (s) {
                if (Re(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    download(t, n) {
        return et(this, void 0, void 0, function*() {
            const s = typeof (n == null ? void 0 : n.transform) < "u" ? "render/image/authenticated" : "object"
              , o = this.transformOptsToQueryString((n == null ? void 0 : n.transform) || {})
              , i = o ? `?${o}` : "";
            try {
                const a = this._getFinalPath(t);
                return {
                    data: yield(yield Il(this.fetch, `${this.url}/${s}/${a}${i}`, {
                        headers: this.headers,
                        noResolveJson: !0
                    })).blob(),
                    error: null
                }
            } catch (a) {
                if (Re(a))
                    return {
                        data: null,
                        error: a
                    };
                throw a
            }
        })
    }
    info(t) {
        return et(this, void 0, void 0, function*() {
            const n = this._getFinalPath(t);
            try {
                const r = yield Il(this.fetch, `${this.url}/object/info/${n}`, {
                    headers: this.headers
                });
                return {
                    data: Xd(r),
                    error: null
                }
            } catch (r) {
                if (Re(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    exists(t) {
        return et(this, void 0, void 0, function*() {
            const n = this._getFinalPath(t);
            try {
                return yield IN(this.fetch, `${this.url}/object/${n}`, {
                    headers: this.headers
                }),
                {
                    data: !0,
                    error: null
                }
            } catch (r) {
                if (Re(r) && r instanceof Jd) {
                    const s = r.originalError;
                    if ([400, 404].includes(s == null ? void 0 : s.status))
                        return {
                            data: !1,
                            error: r
                        }
                }
                throw r
            }
        })
    }
    getPublicUrl(t, n) {
        const r = this._getFinalPath(t)
          , s = []
          , o = n != null && n.download ? `download=${n.download === !0 ? "" : n.download}` : "";
        o !== "" && s.push(o);
        const a = typeof (n == null ? void 0 : n.transform) < "u" ? "render/image" : "object"
          , l = this.transformOptsToQueryString((n == null ? void 0 : n.transform) || {});
        l !== "" && s.push(l);
        let c = s.join("&");
        return c !== "" && (c = `?${c}`),
        {
            data: {
                publicUrl: encodeURI(`${this.url}/${a}/public/${r}${c}`)
            }
        }
    }
    remove(t) {
        return et(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Vx(this.fetch, `${this.url}/object/${this.bucketId}`, {
                        prefixes: t
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (Re(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    list(t, n, r) {
        return et(this, void 0, void 0, function*() {
            try {
                const s = Object.assign(Object.assign(Object.assign({}, LN), n), {
                    prefix: t || ""
                });
                return {
                    data: yield Wn(this.fetch, `${this.url}/object/list/${this.bucketId}`, s, {
                        headers: this.headers
                    }, r),
                    error: null
                }
            } catch (s) {
                if (Re(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    encodeMetadata(t) {
        return JSON.stringify(t)
    }
    toBase64(t) {
        return typeof Buffer < "u" ? Buffer.from(t).toString("base64") : btoa(t)
    }
    _getFinalPath(t) {
        return `${this.bucketId}/${t}`
    }
    _removeEmptyFolders(t) {
        return t.replace(/^\/|\/$/g, "").replace(/\/+/g, "/")
    }
    transformOptsToQueryString(t) {
        const n = [];
        return t.width && n.push(`width=${t.width}`),
        t.height && n.push(`height=${t.height}`),
        t.resize && n.push(`resize=${t.resize}`),
        t.format && n.push(`format=${t.format}`),
        t.quality && n.push(`quality=${t.quality}`),
        n.join("&")
    }
}
const DN = "2.7.1"
  , $N = {
    "X-Client-Info": `storage-js/${DN}`
};
var ps = function(e, t, n, r) {
    function s(o) {
        return o instanceof n ? o : new n(function(i) {
            i(o)
        }
        )
    }
    return new (n || (n = Promise))(function(o, i) {
        function a(d) {
            try {
                c(r.next(d))
            } catch (h) {
                i(h)
            }
        }
        function l(d) {
            try {
                c(r.throw(d))
            } catch (h) {
                i(h)
            }
        }
        function c(d) {
            d.done ? o(d.value) : s(d.value).then(a, l)
        }
        c((r = r.apply(e, t || [])).next())
    }
    )
};
class FN {
    constructor(t, n={}, r) {
        this.url = t,
        this.headers = Object.assign(Object.assign({}, $N), n),
        this.fetch = Bx(r)
    }
    listBuckets() {
        return ps(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Il(this.fetch, `${this.url}/bucket`, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (t) {
                if (Re(t))
                    return {
                        data: null,
                        error: t
                    };
                throw t
            }
        })
    }
    getBucket(t) {
        return ps(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Il(this.fetch, `${this.url}/bucket/${t}`, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (Re(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    createBucket(t, n={
        public: !1
    }) {
        return ps(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Wn(this.fetch, `${this.url}/bucket`, {
                        id: t,
                        name: t,
                        public: n.public,
                        file_size_limit: n.fileSizeLimit,
                        allowed_mime_types: n.allowedMimeTypes
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (Re(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    updateBucket(t, n) {
        return ps(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield ON(this.fetch, `${this.url}/bucket/${t}`, {
                        id: t,
                        name: t,
                        public: n.public,
                        file_size_limit: n.fileSizeLimit,
                        allowed_mime_types: n.allowedMimeTypes
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (Re(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    emptyBucket(t) {
        return ps(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Wn(this.fetch, `${this.url}/bucket/${t}/empty`, {}, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (Re(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    deleteBucket(t) {
        return ps(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Vx(this.fetch, `${this.url}/bucket/${t}`, {}, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (Re(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
}
class UN extends FN {
    constructor(t, n={}, r) {
        super(t, n, r)
    }
    from(t) {
        return new MN(this.url,this.headers,t,this.fetch)
    }
}
const zN = "2.49.4";
let Zo = "";
typeof Deno < "u" ? Zo = "deno" : typeof document < "u" ? Zo = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? Zo = "react-native" : Zo = "node";
const BN = {
    "X-Client-Info": `supabase-js-${Zo}/${zN}`
}
  , VN = {
    headers: BN
}
  , HN = {
    schema: "public"
}
  , WN = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit"
}
  , qN = {};
var KN = function(e, t, n, r) {
    function s(o) {
        return o instanceof n ? o : new n(function(i) {
            i(o)
        }
        )
    }
    return new (n || (n = Promise))(function(o, i) {
        function a(d) {
            try {
                c(r.next(d))
            } catch (h) {
                i(h)
            }
        }
        function l(d) {
            try {
                c(r.throw(d))
            } catch (h) {
                i(h)
            }
        }
        function c(d) {
            d.done ? o(d.value) : s(d.value).then(a, l)
        }
        c((r = r.apply(e, t || [])).next())
    }
    )
};
const QN = e => {
    let t;
    return e ? t = e : typeof fetch > "u" ? t = jx : t = fetch,
    (...n) => t(...n)
}
  , GN = () => typeof Headers > "u" ? Px : Headers
  , YN = (e, t, n) => {
    const r = QN(n)
      , s = GN();
    return (o, i) => KN(void 0, void 0, void 0, function*() {
        var a;
        const l = (a = yield t()) !== null && a !== void 0 ? a : e;
        let c = new s(i == null ? void 0 : i.headers);
        return c.has("apikey") || c.set("apikey", e),
        c.has("Authorization") || c.set("Authorization", `Bearer ${l}`),
        r(o, Object.assign(Object.assign({}, i), {
            headers: c
        }))
    })
}
;
var JN = function(e, t, n, r) {
    function s(o) {
        return o instanceof n ? o : new n(function(i) {
            i(o)
        }
        )
    }
    return new (n || (n = Promise))(function(o, i) {
        function a(d) {
            try {
                c(r.next(d))
            } catch (h) {
                i(h)
            }
        }
        function l(d) {
            try {
                c(r.throw(d))
            } catch (h) {
                i(h)
            }
        }
        function c(d) {
            d.done ? o(d.value) : s(d.value).then(a, l)
        }
        c((r = r.apply(e, t || [])).next())
    }
    )
};
function XN(e) {
    return e.replace(/\/$/, "")
}
function ZN(e, t) {
    const {db: n, auth: r, realtime: s, global: o} = e
      , {db: i, auth: a, realtime: l, global: c} = t
      , d = {
        db: Object.assign(Object.assign({}, i), n),
        auth: Object.assign(Object.assign({}, a), r),
        realtime: Object.assign(Object.assign({}, l), s),
        global: Object.assign(Object.assign({}, c), o),
        accessToken: () => JN(this, void 0, void 0, function*() {
            return ""
        })
    };
    return e.accessToken ? d.accessToken = e.accessToken : delete d.accessToken,
    d
}
const Hx = "2.69.1"
  , ws = 30 * 1e3
  , Zd = 3
  , pu = Zd * ws
  , eT = "http://localhost:9999"
  , tT = "supabase.auth.token"
  , nT = {
    "X-Client-Info": `gotrue-js/${Hx}`
}
  , ef = "X-Supabase-Api-Version"
  , Wx = {
    "2024-01-01": {
        timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
        name: "2024-01-01"
    }
}
  , rT = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i
  , sT = 6e5;
class Nh extends Error {
    constructor(t, n, r) {
        super(t),
        this.__isAuthError = !0,
        this.name = "AuthError",
        this.status = n,
        this.code = r
    }
}
function Q(e) {
    return typeof e == "object" && e !== null && "__isAuthError"in e
}
class oT extends Nh {
    constructor(t, n, r) {
        super(t, n, r),
        this.name = "AuthApiError",
        this.status = n,
        this.code = r
    }
}
function iT(e) {
    return Q(e) && e.name === "AuthApiError"
}
class qx extends Nh {
    constructor(t, n) {
        super(t),
        this.name = "AuthUnknownError",
        this.originalError = n
    }
}
class jr extends Nh {
    constructor(t, n, r, s) {
        super(t, r, s),
        this.name = n,
        this.status = r
    }
}
class Un extends jr {
    constructor() {
        super("Auth session missing!", "AuthSessionMissingError", 400, void 0)
    }
}
function aT(e) {
    return Q(e) && e.name === "AuthSessionMissingError"
}
class mu extends jr {
    constructor() {
        super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0)
    }
}
class Ca extends jr {
    constructor(t) {
        super(t, "AuthInvalidCredentialsError", 400, void 0)
    }
}
class Ea extends jr {
    constructor(t, n=null) {
        super(t, "AuthImplicitGrantRedirectError", 500, void 0),
        this.details = null,
        this.details = n
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        }
    }
}
function lT(e) {
    return Q(e) && e.name === "AuthImplicitGrantRedirectError"
}
class Jm extends jr {
    constructor(t, n=null) {
        super(t, "AuthPKCEGrantCodeExchangeError", 500, void 0),
        this.details = null,
        this.details = n
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        }
    }
}
class tf extends jr {
    constructor(t, n) {
        super(t, "AuthRetryableFetchError", n, void 0)
    }
}
function gu(e) {
    return Q(e) && e.name === "AuthRetryableFetchError"
}
class Xm extends jr {
    constructor(t, n, r) {
        super(t, "AuthWeakPasswordError", n, "weak_password"),
        this.reasons = r
    }
}
class di extends jr {
    constructor(t) {
        super(t, "AuthInvalidJwtError", 400, "invalid_jwt")
    }
}
const Zm = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("")
  , eg = ` 	
\r=`.split("")
  , cT = ( () => {
    const e = new Array(128);
    for (let t = 0; t < e.length; t += 1)
        e[t] = -1;
    for (let t = 0; t < eg.length; t += 1)
        e[eg[t].charCodeAt(0)] = -2;
    for (let t = 0; t < Zm.length; t += 1)
        e[Zm[t].charCodeAt(0)] = t;
    return e
}
)();
function Kx(e, t, n) {
    const r = cT[e];
    if (r > -1)
        for (t.queue = t.queue << 6 | r,
        t.queuedBits += 6; t.queuedBits >= 8; )
            n(t.queue >> t.queuedBits - 8 & 255),
            t.queuedBits -= 8;
    else {
        if (r === -2)
            return;
        throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)
    }
}
function tg(e) {
    const t = []
      , n = i => {
        t.push(String.fromCodePoint(i))
    }
      , r = {
        utf8seq: 0,
        codepoint: 0
    }
      , s = {
        queue: 0,
        queuedBits: 0
    }
      , o = i => {
        fT(i, r, n)
    }
    ;
    for (let i = 0; i < e.length; i += 1)
        Kx(e.charCodeAt(i), s, o);
    return t.join("")
}
function uT(e, t) {
    if (e <= 127) {
        t(e);
        return
    } else if (e <= 2047) {
        t(192 | e >> 6),
        t(128 | e & 63);
        return
    } else if (e <= 65535) {
        t(224 | e >> 12),
        t(128 | e >> 6 & 63),
        t(128 | e & 63);
        return
    } else if (e <= 1114111) {
        t(240 | e >> 18),
        t(128 | e >> 12 & 63),
        t(128 | e >> 6 & 63),
        t(128 | e & 63);
        return
    }
    throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)
}
function dT(e, t) {
    for (let n = 0; n < e.length; n += 1) {
        let r = e.charCodeAt(n);
        if (r > 55295 && r <= 56319) {
            const s = (r - 55296) * 1024 & 65535;
            r = (e.charCodeAt(n + 1) - 56320 & 65535 | s) + 65536,
            n += 1
        }
        uT(r, t)
    }
}
function fT(e, t, n) {
    if (t.utf8seq === 0) {
        if (e <= 127) {
            n(e);
            return
        }
        for (let r = 1; r < 6; r += 1)
            if (!(e >> 7 - r & 1)) {
                t.utf8seq = r;
                break
            }
        if (t.utf8seq === 2)
            t.codepoint = e & 31;
        else if (t.utf8seq === 3)
            t.codepoint = e & 15;
        else if (t.utf8seq === 4)
            t.codepoint = e & 7;
        else
            throw new Error("Invalid UTF-8 sequence");
        t.utf8seq -= 1
    } else if (t.utf8seq > 0) {
        if (e <= 127)
            throw new Error("Invalid UTF-8 sequence");
        t.codepoint = t.codepoint << 6 | e & 63,
        t.utf8seq -= 1,
        t.utf8seq === 0 && n(t.codepoint)
    }
}
function hT(e) {
    const t = []
      , n = {
        queue: 0,
        queuedBits: 0
    }
      , r = s => {
        t.push(s)
    }
    ;
    for (let s = 0; s < e.length; s += 1)
        Kx(e.charCodeAt(s), n, r);
    return new Uint8Array(t)
}
function pT(e) {
    const t = [];
    return dT(e, n => t.push(n)),
    new Uint8Array(t)
}
function mT(e) {
    return Math.round(Date.now() / 1e3) + e
}
function gT() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
        const t = Math.random() * 16 | 0;
        return (e == "x" ? t : t & 3 | 8).toString(16)
    })
}
const Zt = () => typeof window < "u" && typeof document < "u"
  , Nr = {
    tested: !1,
    writable: !1
}
  , fi = () => {
    if (!Zt())
        return !1;
    try {
        if (typeof globalThis.localStorage != "object")
            return !1
    } catch {
        return !1
    }
    if (Nr.tested)
        return Nr.writable;
    const e = `lswt-${Math.random()}${Math.random()}`;
    try {
        globalThis.localStorage.setItem(e, e),
        globalThis.localStorage.removeItem(e),
        Nr.tested = !0,
        Nr.writable = !0
    } catch {
        Nr.tested = !0,
        Nr.writable = !1
    }
    return Nr.writable
}
;
function vT(e) {
    const t = {}
      , n = new URL(e);
    if (n.hash && n.hash[0] === "#")
        try {
            new URLSearchParams(n.hash.substring(1)).forEach( (s, o) => {
                t[o] = s
            }
            )
        } catch {}
    return n.searchParams.forEach( (r, s) => {
        t[s] = r
    }
    ),
    t
}
const Qx = e => {
    let t;
    return e ? t = e : typeof fetch > "u" ? t = (...n) => yo(async () => {
        const {default: r} = await Promise.resolve().then( () => Ro);
        return {
            default: r
        }
    }
    , void 0).then( ({default: r}) => r(...n)) : t = fetch,
    (...n) => t(...n)
}
  , yT = e => typeof e == "object" && e !== null && "status"in e && "ok"in e && "json"in e && typeof e.json == "function"
  , Gx = async (e, t, n) => {
    await e.setItem(t, JSON.stringify(n))
}
  , ka = async (e, t) => {
    const n = await e.getItem(t);
    if (!n)
        return null;
    try {
        return JSON.parse(n)
    } catch {
        return n
    }
}
  , ja = async (e, t) => {
    await e.removeItem(t)
}
;
class wc {
    constructor() {
        this.promise = new wc.promiseConstructor( (t, n) => {
            this.resolve = t,
            this.reject = n
        }
        )
    }
}
wc.promiseConstructor = Promise;
function vu(e) {
    const t = e.split(".");
    if (t.length !== 3)
        throw new di("Invalid JWT structure");
    for (let r = 0; r < t.length; r++)
        if (!rT.test(t[r]))
            throw new di("JWT not in base64url format");
    return {
        header: JSON.parse(tg(t[0])),
        payload: JSON.parse(tg(t[1])),
        signature: hT(t[2]),
        raw: {
            header: t[0],
            payload: t[1]
        }
    }
}
async function xT(e) {
    return await new Promise(t => {
        setTimeout( () => t(null), e)
    }
    )
}
function wT(e, t) {
    return new Promise( (r, s) => {
        (async () => {
            for (let o = 0; o < 1 / 0; o++)
                try {
                    const i = await e(o);
                    if (!t(o, null, i)) {
                        r(i);
                        return
                    }
                } catch (i) {
                    if (!t(o, i)) {
                        s(i);
                        return
                    }
                }
        }
        )()
    }
    )
}
function bT(e) {
    return ("0" + e.toString(16)).substr(-2)
}
function _T() {
    const t = new Uint32Array(56);
    if (typeof crypto > "u") {
        const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~"
          , r = n.length;
        let s = "";
        for (let o = 0; o < 56; o++)
            s += n.charAt(Math.floor(Math.random() * r));
        return s
    }
    return crypto.getRandomValues(t),
    Array.from(t, bT).join("")
}
async function ST(e) {
    const n = new TextEncoder().encode(e)
      , r = await crypto.subtle.digest("SHA-256", n)
      , s = new Uint8Array(r);
    return Array.from(s).map(o => String.fromCharCode(o)).join("")
}
async function CT(e) {
    if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
        return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),
        e;
    const n = await ST(e);
    return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}
async function ms(e, t, n=!1) {
    const r = _T();
    let s = r;
    n && (s += "/PASSWORD_RECOVERY"),
    await Gx(e, `${t}-code-verifier`, s);
    const o = await CT(r);
    return [o, r === o ? "plain" : "s256"]
}
const ET = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function kT(e) {
    const t = e.headers.get(ef);
    if (!t || !t.match(ET))
        return null;
    try {
        return new Date(`${t}T00:00:00.0Z`)
    } catch {
        return null
    }
}
function jT(e) {
    if (!e)
        throw new Error("Missing exp claim");
    const t = Math.floor(Date.now() / 1e3);
    if (e <= t)
        throw new Error("JWT has expired")
}
function PT(e) {
    switch (e) {
    case "RS256":
        return {
            name: "RSASSA-PKCS1-v1_5",
            hash: {
                name: "SHA-256"
            }
        };
    case "ES256":
        return {
            name: "ECDSA",
            namedCurve: "P-256",
            hash: {
                name: "SHA-256"
            }
        };
    default:
        throw new Error("Invalid alg claim")
    }
}
var NT = function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
            t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
    return n
};
const Ar = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e)
  , TT = [502, 503, 504];
async function ng(e) {
    var t;
    if (!yT(e))
        throw new tf(Ar(e),0);
    if (TT.includes(e.status))
        throw new tf(Ar(e),e.status);
    let n;
    try {
        n = await e.json()
    } catch (o) {
        throw new qx(Ar(o),o)
    }
    let r;
    const s = kT(e);
    if (s && s.getTime() >= Wx["2024-01-01"].timestamp && typeof n == "object" && n && typeof n.code == "string" ? r = n.code : typeof n == "object" && n && typeof n.error_code == "string" && (r = n.error_code),
    r) {
        if (r === "weak_password")
            throw new Xm(Ar(n),e.status,((t = n.weak_password) === null || t === void 0 ? void 0 : t.reasons) || []);
        if (r === "session_not_found")
            throw new Un
    } else if (typeof n == "object" && n && typeof n.weak_password == "object" && n.weak_password && Array.isArray(n.weak_password.reasons) && n.weak_password.reasons.length && n.weak_password.reasons.reduce( (o, i) => o && typeof i == "string", !0))
        throw new Xm(Ar(n),e.status,n.weak_password.reasons);
    throw new oT(Ar(n),e.status || 500,r)
}
const RT = (e, t, n, r) => {
    const s = {
        method: e,
        headers: (t == null ? void 0 : t.headers) || {}
    };
    return e === "GET" ? s : (s.headers = Object.assign({
        "Content-Type": "application/json;charset=UTF-8"
    }, t == null ? void 0 : t.headers),
    s.body = JSON.stringify(r),
    Object.assign(Object.assign({}, s), n))
}
;
async function Z(e, t, n, r) {
    var s;
    const o = Object.assign({}, r == null ? void 0 : r.headers);
    o[ef] || (o[ef] = Wx["2024-01-01"].name),
    r != null && r.jwt && (o.Authorization = `Bearer ${r.jwt}`);
    const i = (s = r == null ? void 0 : r.query) !== null && s !== void 0 ? s : {};
    r != null && r.redirectTo && (i.redirect_to = r.redirectTo);
    const a = Object.keys(i).length ? "?" + new URLSearchParams(i).toString() : ""
      , l = await AT(e, t, n + a, {
        headers: o,
        noResolveJson: r == null ? void 0 : r.noResolveJson
    }, {}, r == null ? void 0 : r.body);
    return r != null && r.xform ? r == null ? void 0 : r.xform(l) : {
        data: Object.assign({}, l),
        error: null
    }
}
async function AT(e, t, n, r, s, o) {
    const i = RT(t, r, s, o);
    let a;
    try {
        a = await e(n, Object.assign({}, i))
    } catch (l) {
        throw console.error(l),
        new tf(Ar(l),0)
    }
    if (a.ok || await ng(a),
    r != null && r.noResolveJson)
        return a;
    try {
        return await a.json()
    } catch (l) {
        await ng(l)
    }
}
function zn(e) {
    var t;
    let n = null;
    MT(e) && (n = Object.assign({}, e),
    e.expires_at || (n.expires_at = mT(e.expires_in)));
    const r = (t = e.user) !== null && t !== void 0 ? t : e;
    return {
        data: {
            session: n,
            user: r
        },
        error: null
    }
}
function rg(e) {
    const t = zn(e);
    return !t.error && e.weak_password && typeof e.weak_password == "object" && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.message && typeof e.weak_password.message == "string" && e.weak_password.reasons.reduce( (n, r) => n && typeof r == "string", !0) && (t.data.weak_password = e.weak_password),
    t
}
function Qn(e) {
    var t;
    return {
        data: {
            user: (t = e.user) !== null && t !== void 0 ? t : e
        },
        error: null
    }
}
function OT(e) {
    return {
        data: e,
        error: null
    }
}
function IT(e) {
    const {action_link: t, email_otp: n, hashed_token: r, redirect_to: s, verification_type: o} = e
      , i = NT(e, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"])
      , a = {
        action_link: t,
        email_otp: n,
        hashed_token: r,
        redirect_to: s,
        verification_type: o
    }
      , l = Object.assign({}, i);
    return {
        data: {
            properties: a,
            user: l
        },
        error: null
    }
}
function LT(e) {
    return e
}
function MT(e) {
    return e.access_token && e.refresh_token && e.expires_in
}
var DT = function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
            t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
    return n
};
class $T {
    constructor({url: t="", headers: n={}, fetch: r}) {
        this.url = t,
        this.headers = n,
        this.fetch = Qx(r),
        this.mfa = {
            listFactors: this._listFactors.bind(this),
            deleteFactor: this._deleteFactor.bind(this)
        }
    }
    async signOut(t, n="global") {
        try {
            return await Z(this.fetch, "POST", `${this.url}/logout?scope=${n}`, {
                headers: this.headers,
                jwt: t,
                noResolveJson: !0
            }),
            {
                data: null,
                error: null
            }
        } catch (r) {
            if (Q(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
    async inviteUserByEmail(t, n={}) {
        try {
            return await Z(this.fetch, "POST", `${this.url}/invite`, {
                body: {
                    email: t,
                    data: n.data
                },
                headers: this.headers,
                redirectTo: n.redirectTo,
                xform: Qn
            })
        } catch (r) {
            if (Q(r))
                return {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async generateLink(t) {
        try {
            const {options: n} = t
              , r = DT(t, ["options"])
              , s = Object.assign(Object.assign({}, r), n);
            return "newEmail"in r && (s.new_email = r == null ? void 0 : r.newEmail,
            delete s.newEmail),
            await Z(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                body: s,
                headers: this.headers,
                xform: IT,
                redirectTo: n == null ? void 0 : n.redirectTo
            })
        } catch (n) {
            if (Q(n))
                return {
                    data: {
                        properties: null,
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async createUser(t) {
        try {
            return await Z(this.fetch, "POST", `${this.url}/admin/users`, {
                body: t,
                headers: this.headers,
                xform: Qn
            })
        } catch (n) {
            if (Q(n))
                return {
                    data: {
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async listUsers(t) {
        var n, r, s, o, i, a, l;
        try {
            const c = {
                nextPage: null,
                lastPage: 0,
                total: 0
            }
              , d = await Z(this.fetch, "GET", `${this.url}/admin/users`, {
                headers: this.headers,
                noResolveJson: !0,
                query: {
                    page: (r = (n = t == null ? void 0 : t.page) === null || n === void 0 ? void 0 : n.toString()) !== null && r !== void 0 ? r : "",
                    per_page: (o = (s = t == null ? void 0 : t.perPage) === null || s === void 0 ? void 0 : s.toString()) !== null && o !== void 0 ? o : ""
                },
                xform: LT
            });
            if (d.error)
                throw d.error;
            const h = await d.json()
              , f = (i = d.headers.get("x-total-count")) !== null && i !== void 0 ? i : 0
              , g = (l = (a = d.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
            return g.length > 0 && (g.forEach(y => {
                const m = parseInt(y.split(";")[0].split("=")[1].substring(0, 1))
                  , w = JSON.parse(y.split(";")[1].split("=")[1]);
                c[`${w}Page`] = m
            }
            ),
            c.total = parseInt(f)),
            {
                data: Object.assign(Object.assign({}, h), c),
                error: null
            }
        } catch (c) {
            if (Q(c))
                return {
                    data: {
                        users: []
                    },
                    error: c
                };
            throw c
        }
    }
    async getUserById(t) {
        try {
            return await Z(this.fetch, "GET", `${this.url}/admin/users/${t}`, {
                headers: this.headers,
                xform: Qn
            })
        } catch (n) {
            if (Q(n))
                return {
                    data: {
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async updateUserById(t, n) {
        try {
            return await Z(this.fetch, "PUT", `${this.url}/admin/users/${t}`, {
                body: n,
                headers: this.headers,
                xform: Qn
            })
        } catch (r) {
            if (Q(r))
                return {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async deleteUser(t, n=!1) {
        try {
            return await Z(this.fetch, "DELETE", `${this.url}/admin/users/${t}`, {
                headers: this.headers,
                body: {
                    should_soft_delete: n
                },
                xform: Qn
            })
        } catch (r) {
            if (Q(r))
                return {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async _listFactors(t) {
        try {
            const {data: n, error: r} = await Z(this.fetch, "GET", `${this.url}/admin/users/${t.userId}/factors`, {
                headers: this.headers,
                xform: s => ({
                    data: {
                        factors: s
                    },
                    error: null
                })
            });
            return {
                data: n,
                error: r
            }
        } catch (n) {
            if (Q(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async _deleteFactor(t) {
        try {
            return {
                data: await Z(this.fetch, "DELETE", `${this.url}/admin/users/${t.userId}/factors/${t.id}`, {
                    headers: this.headers
                }),
                error: null
            }
        } catch (n) {
            if (Q(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
}
const FT = {
    getItem: e => fi() ? globalThis.localStorage.getItem(e) : null,
    setItem: (e, t) => {
        fi() && globalThis.localStorage.setItem(e, t)
    }
    ,
    removeItem: e => {
        fi() && globalThis.localStorage.removeItem(e)
    }
};
function sg(e={}) {
    return {
        getItem: t => e[t] || null,
        setItem: (t, n) => {
            e[t] = n
        }
        ,
        removeItem: t => {
            delete e[t]
        }
    }
}
function UT() {
    if (typeof globalThis != "object")
        try {
            Object.defineProperty(Object.prototype, "__magic__", {
                get: function() {
                    return this
                },
                configurable: !0
            }),
            __magic__.globalThis = __magic__,
            delete Object.prototype.__magic__
        } catch {
            typeof self < "u" && (self.globalThis = self)
        }
}
const gs = {
    debug: !!(globalThis && fi() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class Yx extends Error {
    constructor(t) {
        super(t),
        this.isAcquireTimeout = !0
    }
}
class zT extends Yx {
}
async function BT(e, t, n) {
    gs.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
    const r = new globalThis.AbortController;
    return t > 0 && setTimeout( () => {
        r.abort(),
        gs.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", e)
    }
    , t),
    await Promise.resolve().then( () => globalThis.navigator.locks.request(e, t === 0 ? {
        mode: "exclusive",
        ifAvailable: !0
    } : {
        mode: "exclusive",
        signal: r.signal
    }, async s => {
        if (s) {
            gs.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", e, s.name);
            try {
                return await n()
            } finally {
                gs.debug && console.log("@supabase/gotrue-js: navigatorLock: released", e, s.name)
            }
        } else {
            if (t === 0)
                throw gs.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", e),
                new zT(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);
            if (gs.debug)
                try {
                    const o = await globalThis.navigator.locks.query();
                    console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(o, null, "  "))
                } catch (o) {
                    console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", o)
                }
            return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),
            await n()
        }
    }
    ))
}
UT();
const VT = {
    url: eT,
    storageKey: tT,
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: nT,
    flowType: "implicit",
    debug: !1,
    hasCustomAuthorizationHeader: !1
};
async function og(e, t, n) {
    return await n()
}
class Di {
    constructor(t) {
        var n, r;
        this.memoryStorage = null,
        this.stateChangeEmitters = new Map,
        this.autoRefreshTicker = null,
        this.visibilityChangedCallback = null,
        this.refreshingDeferred = null,
        this.initializePromise = null,
        this.detectSessionInUrl = !0,
        this.hasCustomAuthorizationHeader = !1,
        this.suppressGetSessionWarning = !1,
        this.lockAcquired = !1,
        this.pendingInLock = [],
        this.broadcastChannel = null,
        this.logger = console.log,
        this.instanceID = Di.nextInstanceID,
        Di.nextInstanceID += 1,
        this.instanceID > 0 && Zt() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
        const s = Object.assign(Object.assign({}, VT), t);
        if (this.logDebugMessages = !!s.debug,
        typeof s.debug == "function" && (this.logger = s.debug),
        this.persistSession = s.persistSession,
        this.storageKey = s.storageKey,
        this.autoRefreshToken = s.autoRefreshToken,
        this.admin = new $T({
            url: s.url,
            headers: s.headers,
            fetch: s.fetch
        }),
        this.url = s.url,
        this.headers = s.headers,
        this.fetch = Qx(s.fetch),
        this.lock = s.lock || og,
        this.detectSessionInUrl = s.detectSessionInUrl,
        this.flowType = s.flowType,
        this.hasCustomAuthorizationHeader = s.hasCustomAuthorizationHeader,
        s.lock ? this.lock = s.lock : Zt() && (!((n = globalThis == null ? void 0 : globalThis.navigator) === null || n === void 0) && n.locks) ? this.lock = BT : this.lock = og,
        this.jwks = {
            keys: []
        },
        this.jwks_cached_at = Number.MIN_SAFE_INTEGER,
        this.mfa = {
            verify: this._verify.bind(this),
            enroll: this._enroll.bind(this),
            unenroll: this._unenroll.bind(this),
            challenge: this._challenge.bind(this),
            listFactors: this._listFactors.bind(this),
            challengeAndVerify: this._challengeAndVerify.bind(this),
            getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
        },
        this.persistSession ? s.storage ? this.storage = s.storage : fi() ? this.storage = FT : (this.memoryStorage = {},
        this.storage = sg(this.memoryStorage)) : (this.memoryStorage = {},
        this.storage = sg(this.memoryStorage)),
        Zt() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
            try {
                this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey)
            } catch (o) {
                console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", o)
            }
            (r = this.broadcastChannel) === null || r === void 0 || r.addEventListener("message", async o => {
                this._debug("received broadcast notification from other tab or client", o),
                await this._notifyAllSubscribers(o.data.event, o.data.session, !1)
            }
            )
        }
        this.initialize()
    }
    _debug(...t) {
        return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${Hx}) ${new Date().toISOString()}`, ...t),
        this
    }
    async initialize() {
        return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))(),
        await this.initializePromise)
    }
    async _initialize() {
        var t;
        try {
            const n = vT(window.location.href);
            let r = "none";
            if (this._isImplicitGrantCallback(n) ? r = "implicit" : await this._isPKCECallback(n) && (r = "pkce"),
            Zt() && this.detectSessionInUrl && r !== "none") {
                const {data: s, error: o} = await this._getSessionFromURL(n, r);
                if (o) {
                    if (this._debug("#_initialize()", "error detecting session from URL", o),
                    lT(o)) {
                        const l = (t = o.details) === null || t === void 0 ? void 0 : t.code;
                        if (l === "identity_already_exists" || l === "identity_not_found" || l === "single_identity_not_deletable")
                            return {
                                error: o
                            }
                    }
                    return await this._removeSession(),
                    {
                        error: o
                    }
                }
                const {session: i, redirectType: a} = s;
                return this._debug("#_initialize()", "detected session in URL", i, "redirect type", a),
                await this._saveSession(i),
                setTimeout(async () => {
                    a === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", i) : await this._notifyAllSubscribers("SIGNED_IN", i)
                }
                , 0),
                {
                    error: null
                }
            }
            return await this._recoverAndRefresh(),
            {
                error: null
            }
        } catch (n) {
            return Q(n) ? {
                error: n
            } : {
                error: new qx("Unexpected error during initialization",n)
            }
        } finally {
            await this._handleVisibilityChange(),
            this._debug("#_initialize()", "end")
        }
    }
    async signInAnonymously(t) {
        var n, r, s;
        try {
            const o = await Z(this.fetch, "POST", `${this.url}/signup`, {
                headers: this.headers,
                body: {
                    data: (r = (n = t == null ? void 0 : t.options) === null || n === void 0 ? void 0 : n.data) !== null && r !== void 0 ? r : {},
                    gotrue_meta_security: {
                        captcha_token: (s = t == null ? void 0 : t.options) === null || s === void 0 ? void 0 : s.captchaToken
                    }
                },
                xform: zn
            })
              , {data: i, error: a} = o;
            if (a || !i)
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: a
                };
            const l = i.session
              , c = i.user;
            return i.session && (await this._saveSession(i.session),
            await this._notifyAllSubscribers("SIGNED_IN", l)),
            {
                data: {
                    user: c,
                    session: l
                },
                error: null
            }
        } catch (o) {
            if (Q(o))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: o
                };
            throw o
        }
    }
    async signUp(t) {
        var n, r, s;
        try {
            let o;
            if ("email"in t) {
                const {email: d, password: h, options: f} = t;
                let g = null
                  , y = null;
                this.flowType === "pkce" && ([g,y] = await ms(this.storage, this.storageKey)),
                o = await Z(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    redirectTo: f == null ? void 0 : f.emailRedirectTo,
                    body: {
                        email: d,
                        password: h,
                        data: (n = f == null ? void 0 : f.data) !== null && n !== void 0 ? n : {},
                        gotrue_meta_security: {
                            captcha_token: f == null ? void 0 : f.captchaToken
                        },
                        code_challenge: g,
                        code_challenge_method: y
                    },
                    xform: zn
                })
            } else if ("phone"in t) {
                const {phone: d, password: h, options: f} = t;
                o = await Z(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                        phone: d,
                        password: h,
                        data: (r = f == null ? void 0 : f.data) !== null && r !== void 0 ? r : {},
                        channel: (s = f == null ? void 0 : f.channel) !== null && s !== void 0 ? s : "sms",
                        gotrue_meta_security: {
                            captcha_token: f == null ? void 0 : f.captchaToken
                        }
                    },
                    xform: zn
                })
            } else
                throw new Ca("You must provide either an email or phone number and a password");
            const {data: i, error: a} = o;
            if (a || !i)
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: a
                };
            const l = i.session
              , c = i.user;
            return i.session && (await this._saveSession(i.session),
            await this._notifyAllSubscribers("SIGNED_IN", l)),
            {
                data: {
                    user: c,
                    session: l
                },
                error: null
            }
        } catch (o) {
            if (Q(o))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: o
                };
            throw o
        }
    }
    async signInWithPassword(t) {
        try {
            let n;
            if ("email"in t) {
                const {email: o, password: i, options: a} = t;
                n = await Z(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        email: o,
                        password: i,
                        gotrue_meta_security: {
                            captcha_token: a == null ? void 0 : a.captchaToken
                        }
                    },
                    xform: rg
                })
            } else if ("phone"in t) {
                const {phone: o, password: i, options: a} = t;
                n = await Z(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        phone: o,
                        password: i,
                        gotrue_meta_security: {
                            captcha_token: a == null ? void 0 : a.captchaToken
                        }
                    },
                    xform: rg
                })
            } else
                throw new Ca("You must provide either an email or phone number and a password");
            const {data: r, error: s} = n;
            return s ? {
                data: {
                    user: null,
                    session: null
                },
                error: s
            } : !r || !r.session || !r.user ? {
                data: {
                    user: null,
                    session: null
                },
                error: new mu
            } : (r.session && (await this._saveSession(r.session),
            await this._notifyAllSubscribers("SIGNED_IN", r.session)),
            {
                data: Object.assign({
                    user: r.user,
                    session: r.session
                }, r.weak_password ? {
                    weakPassword: r.weak_password
                } : null),
                error: s
            })
        } catch (n) {
            if (Q(n))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: n
                };
            throw n
        }
    }
    async signInWithOAuth(t) {
        var n, r, s, o;
        return await this._handleProviderSignIn(t.provider, {
            redirectTo: (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo,
            scopes: (r = t.options) === null || r === void 0 ? void 0 : r.scopes,
            queryParams: (s = t.options) === null || s === void 0 ? void 0 : s.queryParams,
            skipBrowserRedirect: (o = t.options) === null || o === void 0 ? void 0 : o.skipBrowserRedirect
        })
    }
    async exchangeCodeForSession(t) {
        return await this.initializePromise,
        this._acquireLock(-1, async () => this._exchangeCodeForSession(t))
    }
    async _exchangeCodeForSession(t) {
        const n = await ka(this.storage, `${this.storageKey}-code-verifier`)
          , [r,s] = (n ?? "").split("/");
        try {
            const {data: o, error: i} = await Z(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
                headers: this.headers,
                body: {
                    auth_code: t,
                    code_verifier: r
                },
                xform: zn
            });
            if (await ja(this.storage, `${this.storageKey}-code-verifier`),
            i)
                throw i;
            return !o || !o.session || !o.user ? {
                data: {
                    user: null,
                    session: null,
                    redirectType: null
                },
                error: new mu
            } : (o.session && (await this._saveSession(o.session),
            await this._notifyAllSubscribers("SIGNED_IN", o.session)),
            {
                data: Object.assign(Object.assign({}, o), {
                    redirectType: s ?? null
                }),
                error: i
            })
        } catch (o) {
            if (Q(o))
                return {
                    data: {
                        user: null,
                        session: null,
                        redirectType: null
                    },
                    error: o
                };
            throw o
        }
    }
    async signInWithIdToken(t) {
        try {
            const {options: n, provider: r, token: s, access_token: o, nonce: i} = t
              , a = await Z(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                headers: this.headers,
                body: {
                    provider: r,
                    id_token: s,
                    access_token: o,
                    nonce: i,
                    gotrue_meta_security: {
                        captcha_token: n == null ? void 0 : n.captchaToken
                    }
                },
                xform: zn
            })
              , {data: l, error: c} = a;
            return c ? {
                data: {
                    user: null,
                    session: null
                },
                error: c
            } : !l || !l.session || !l.user ? {
                data: {
                    user: null,
                    session: null
                },
                error: new mu
            } : (l.session && (await this._saveSession(l.session),
            await this._notifyAllSubscribers("SIGNED_IN", l.session)),
            {
                data: l,
                error: c
            })
        } catch (n) {
            if (Q(n))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: n
                };
            throw n
        }
    }
    async signInWithOtp(t) {
        var n, r, s, o, i;
        try {
            if ("email"in t) {
                const {email: a, options: l} = t;
                let c = null
                  , d = null;
                this.flowType === "pkce" && ([c,d] = await ms(this.storage, this.storageKey));
                const {error: h} = await Z(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        email: a,
                        data: (n = l == null ? void 0 : l.data) !== null && n !== void 0 ? n : {},
                        create_user: (r = l == null ? void 0 : l.shouldCreateUser) !== null && r !== void 0 ? r : !0,
                        gotrue_meta_security: {
                            captcha_token: l == null ? void 0 : l.captchaToken
                        },
                        code_challenge: c,
                        code_challenge_method: d
                    },
                    redirectTo: l == null ? void 0 : l.emailRedirectTo
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: h
                }
            }
            if ("phone"in t) {
                const {phone: a, options: l} = t
                  , {data: c, error: d} = await Z(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        phone: a,
                        data: (s = l == null ? void 0 : l.data) !== null && s !== void 0 ? s : {},
                        create_user: (o = l == null ? void 0 : l.shouldCreateUser) !== null && o !== void 0 ? o : !0,
                        gotrue_meta_security: {
                            captcha_token: l == null ? void 0 : l.captchaToken
                        },
                        channel: (i = l == null ? void 0 : l.channel) !== null && i !== void 0 ? i : "sms"
                    }
                });
                return {
                    data: {
                        user: null,
                        session: null,
                        messageId: c == null ? void 0 : c.message_id
                    },
                    error: d
                }
            }
            throw new Ca("You must provide either an email or phone number.")
        } catch (a) {
            if (Q(a))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: a
                };
            throw a
        }
    }
    async verifyOtp(t) {
        var n, r;
        try {
            let s, o;
            "options"in t && (s = (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo,
            o = (r = t.options) === null || r === void 0 ? void 0 : r.captchaToken);
            const {data: i, error: a} = await Z(this.fetch, "POST", `${this.url}/verify`, {
                headers: this.headers,
                body: Object.assign(Object.assign({}, t), {
                    gotrue_meta_security: {
                        captcha_token: o
                    }
                }),
                redirectTo: s,
                xform: zn
            });
            if (a)
                throw a;
            if (!i)
                throw new Error("An error occurred on token verification.");
            const l = i.session
              , c = i.user;
            return l != null && l.access_token && (await this._saveSession(l),
            await this._notifyAllSubscribers(t.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)),
            {
                data: {
                    user: c,
                    session: l
                },
                error: null
            }
        } catch (s) {
            if (Q(s))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: s
                };
            throw s
        }
    }
    async signInWithSSO(t) {
        var n, r, s;
        try {
            let o = null
              , i = null;
            return this.flowType === "pkce" && ([o,i] = await ms(this.storage, this.storageKey)),
            await Z(this.fetch, "POST", `${this.url}/sso`, {
                body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId"in t ? {
                    provider_id: t.providerId
                } : null), "domain"in t ? {
                    domain: t.domain
                } : null), {
                    redirect_to: (r = (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo) !== null && r !== void 0 ? r : void 0
                }), !((s = t == null ? void 0 : t.options) === null || s === void 0) && s.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: t.options.captchaToken
                    }
                } : null), {
                    skip_http_redirect: !0,
                    code_challenge: o,
                    code_challenge_method: i
                }),
                headers: this.headers,
                xform: OT
            })
        } catch (o) {
            if (Q(o))
                return {
                    data: null,
                    error: o
                };
            throw o
        }
    }
    async reauthenticate() {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._reauthenticate())
    }
    async _reauthenticate() {
        try {
            return await this._useSession(async t => {
                const {data: {session: n}, error: r} = t;
                if (r)
                    throw r;
                if (!n)
                    throw new Un;
                const {error: s} = await Z(this.fetch, "GET", `${this.url}/reauthenticate`, {
                    headers: this.headers,
                    jwt: n.access_token
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: s
                }
            }
            )
        } catch (t) {
            if (Q(t))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: t
                };
            throw t
        }
    }
    async resend(t) {
        try {
            const n = `${this.url}/resend`;
            if ("email"in t) {
                const {email: r, type: s, options: o} = t
                  , {error: i} = await Z(this.fetch, "POST", n, {
                    headers: this.headers,
                    body: {
                        email: r,
                        type: s,
                        gotrue_meta_security: {
                            captcha_token: o == null ? void 0 : o.captchaToken
                        }
                    },
                    redirectTo: o == null ? void 0 : o.emailRedirectTo
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                }
            } else if ("phone"in t) {
                const {phone: r, type: s, options: o} = t
                  , {data: i, error: a} = await Z(this.fetch, "POST", n, {
                    headers: this.headers,
                    body: {
                        phone: r,
                        type: s,
                        gotrue_meta_security: {
                            captcha_token: o == null ? void 0 : o.captchaToken
                        }
                    }
                });
                return {
                    data: {
                        user: null,
                        session: null,
                        messageId: i == null ? void 0 : i.message_id
                    },
                    error: a
                }
            }
            throw new Ca("You must provide either an email or phone number and a type")
        } catch (n) {
            if (Q(n))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: n
                };
            throw n
        }
    }
    async getSession() {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => this._useSession(async n => n))
    }
    async _acquireLock(t, n) {
        this._debug("#_acquireLock", "begin", t);
        try {
            if (this.lockAcquired) {
                const r = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve()
                  , s = (async () => (await r,
                await n()))();
                return this.pendingInLock.push((async () => {
                    try {
                        await s
                    } catch {}
                }
                )()),
                s
            }
            return await this.lock(`lock:${this.storageKey}`, t, async () => {
                this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
                try {
                    this.lockAcquired = !0;
                    const r = n();
                    for (this.pendingInLock.push((async () => {
                        try {
                            await r
                        } catch {}
                    }
                    )()),
                    await r; this.pendingInLock.length; ) {
                        const s = [...this.pendingInLock];
                        await Promise.all(s),
                        this.pendingInLock.splice(0, s.length)
                    }
                    return await r
                } finally {
                    this._debug("#_acquireLock", "lock released for storage key", this.storageKey),
                    this.lockAcquired = !1
                }
            }
            )
        } finally {
            this._debug("#_acquireLock", "end")
        }
    }
    async _useSession(t) {
        this._debug("#_useSession", "begin");
        try {
            const n = await this.__loadSession();
            return await t(n)
        } finally {
            this._debug("#_useSession", "end")
        }
    }
    async __loadSession() {
        this._debug("#__loadSession()", "begin"),
        this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
        try {
            let t = null;
            const n = await ka(this.storage, this.storageKey);
            if (this._debug("#getSession()", "session from storage", n),
            n !== null && (this._isValidSession(n) ? t = n : (this._debug("#getSession()", "session from storage is not valid"),
            await this._removeSession())),
            !t)
                return {
                    data: {
                        session: null
                    },
                    error: null
                };
            const r = t.expires_at ? t.expires_at * 1e3 - Date.now() < pu : !1;
            if (this._debug("#__loadSession()", `session has${r ? "" : " not"} expired`, "expires_at", t.expires_at),
            !r) {
                if (this.storage.isServer) {
                    let i = this.suppressGetSessionWarning;
                    t = new Proxy(t,{
                        get: (l, c, d) => (!i && c === "user" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),
                        i = !0,
                        this.suppressGetSessionWarning = !0),
                        Reflect.get(l, c, d))
                    })
                }
                return {
                    data: {
                        session: t
                    },
                    error: null
                }
            }
            const {session: s, error: o} = await this._callRefreshToken(t.refresh_token);
            return o ? {
                data: {
                    session: null
                },
                error: o
            } : {
                data: {
                    session: s
                },
                error: null
            }
        } finally {
            this._debug("#__loadSession()", "end")
        }
    }
    async getUser(t) {
        return t ? await this._getUser(t) : (await this.initializePromise,
        await this._acquireLock(-1, async () => await this._getUser()))
    }
    async _getUser(t) {
        try {
            return t ? await Z(this.fetch, "GET", `${this.url}/user`, {
                headers: this.headers,
                jwt: t,
                xform: Qn
            }) : await this._useSession(async n => {
                var r, s, o;
                const {data: i, error: a} = n;
                if (a)
                    throw a;
                return !(!((r = i.session) === null || r === void 0) && r.access_token) && !this.hasCustomAuthorizationHeader ? {
                    data: {
                        user: null
                    },
                    error: new Un
                } : await Z(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt: (o = (s = i.session) === null || s === void 0 ? void 0 : s.access_token) !== null && o !== void 0 ? o : void 0,
                    xform: Qn
                })
            }
            )
        } catch (n) {
            if (Q(n))
                return aT(n) && (await this._removeSession(),
                await ja(this.storage, `${this.storageKey}-code-verifier`)),
                {
                    data: {
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async updateUser(t, n={}) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._updateUser(t, n))
    }
    async _updateUser(t, n={}) {
        try {
            return await this._useSession(async r => {
                const {data: s, error: o} = r;
                if (o)
                    throw o;
                if (!s.session)
                    throw new Un;
                const i = s.session;
                let a = null
                  , l = null;
                this.flowType === "pkce" && t.email != null && ([a,l] = await ms(this.storage, this.storageKey));
                const {data: c, error: d} = await Z(this.fetch, "PUT", `${this.url}/user`, {
                    headers: this.headers,
                    redirectTo: n == null ? void 0 : n.emailRedirectTo,
                    body: Object.assign(Object.assign({}, t), {
                        code_challenge: a,
                        code_challenge_method: l
                    }),
                    jwt: i.access_token,
                    xform: Qn
                });
                if (d)
                    throw d;
                return i.user = c.user,
                await this._saveSession(i),
                await this._notifyAllSubscribers("USER_UPDATED", i),
                {
                    data: {
                        user: i.user
                    },
                    error: null
                }
            }
            )
        } catch (r) {
            if (Q(r))
                return {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async setSession(t) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._setSession(t))
    }
    async _setSession(t) {
        try {
            if (!t.access_token || !t.refresh_token)
                throw new Un;
            const n = Date.now() / 1e3;
            let r = n
              , s = !0
              , o = null;
            const {payload: i} = vu(t.access_token);
            if (i.exp && (r = i.exp,
            s = r <= n),
            s) {
                const {session: a, error: l} = await this._callRefreshToken(t.refresh_token);
                if (l)
                    return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: l
                    };
                if (!a)
                    return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: null
                    };
                o = a
            } else {
                const {data: a, error: l} = await this._getUser(t.access_token);
                if (l)
                    throw l;
                o = {
                    access_token: t.access_token,
                    refresh_token: t.refresh_token,
                    user: a.user,
                    token_type: "bearer",
                    expires_in: r - n,
                    expires_at: r
                },
                await this._saveSession(o),
                await this._notifyAllSubscribers("SIGNED_IN", o)
            }
            return {
                data: {
                    user: o.user,
                    session: o
                },
                error: null
            }
        } catch (n) {
            if (Q(n))
                return {
                    data: {
                        session: null,
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async refreshSession(t) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._refreshSession(t))
    }
    async _refreshSession(t) {
        try {
            return await this._useSession(async n => {
                var r;
                if (!t) {
                    const {data: i, error: a} = n;
                    if (a)
                        throw a;
                    t = (r = i.session) !== null && r !== void 0 ? r : void 0
                }
                if (!(t != null && t.refresh_token))
                    throw new Un;
                const {session: s, error: o} = await this._callRefreshToken(t.refresh_token);
                return o ? {
                    data: {
                        user: null,
                        session: null
                    },
                    error: o
                } : s ? {
                    data: {
                        user: s.user,
                        session: s
                    },
                    error: null
                } : {
                    data: {
                        user: null,
                        session: null
                    },
                    error: null
                }
            }
            )
        } catch (n) {
            if (Q(n))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: n
                };
            throw n
        }
    }
    async _getSessionFromURL(t, n) {
        try {
            if (!Zt())
                throw new Ea("No browser detected.");
            if (t.error || t.error_description || t.error_code)
                throw new Ea(t.error_description || "Error in URL with unspecified error_description",{
                    error: t.error || "unspecified_error",
                    code: t.error_code || "unspecified_code"
                });
            switch (n) {
            case "implicit":
                if (this.flowType === "pkce")
                    throw new Jm("Not a valid PKCE flow url.");
                break;
            case "pkce":
                if (this.flowType === "implicit")
                    throw new Ea("Not a valid implicit grant flow url.");
                break;
            default:
            }
            if (n === "pkce") {
                if (this._debug("#_initialize()", "begin", "is PKCE flow", !0),
                !t.code)
                    throw new Jm("No code detected.");
                const {data: v, error: b} = await this._exchangeCodeForSession(t.code);
                if (b)
                    throw b;
                const _ = new URL(window.location.href);
                return _.searchParams.delete("code"),
                window.history.replaceState(window.history.state, "", _.toString()),
                {
                    data: {
                        session: v.session,
                        redirectType: null
                    },
                    error: null
                }
            }
            const {provider_token: r, provider_refresh_token: s, access_token: o, refresh_token: i, expires_in: a, expires_at: l, token_type: c} = t;
            if (!o || !a || !i || !c)
                throw new Ea("No session defined in URL");
            const d = Math.round(Date.now() / 1e3)
              , h = parseInt(a);
            let f = d + h;
            l && (f = parseInt(l));
            const g = f - d;
            g * 1e3 <= ws && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${g}s, should have been closer to ${h}s`);
            const y = f - h;
            d - y >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", y, f, d) : d - y < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", y, f, d);
            const {data: m, error: w} = await this._getUser(o);
            if (w)
                throw w;
            const x = {
                provider_token: r,
                provider_refresh_token: s,
                access_token: o,
                expires_in: h,
                expires_at: f,
                refresh_token: i,
                token_type: c,
                user: m.user
            };
            return window.location.hash = "",
            this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
            {
                data: {
                    session: x,
                    redirectType: t.type
                },
                error: null
            }
        } catch (r) {
            if (Q(r))
                return {
                    data: {
                        session: null,
                        redirectType: null
                    },
                    error: r
                };
            throw r
        }
    }
    _isImplicitGrantCallback(t) {
        return !!(t.access_token || t.error_description)
    }
    async _isPKCECallback(t) {
        const n = await ka(this.storage, `${this.storageKey}-code-verifier`);
        return !!(t.code && n)
    }
    async signOut(t={
        scope: "global"
    }) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._signOut(t))
    }
    async _signOut({scope: t}={
        scope: "global"
    }) {
        return await this._useSession(async n => {
            var r;
            const {data: s, error: o} = n;
            if (o)
                return {
                    error: o
                };
            const i = (r = s.session) === null || r === void 0 ? void 0 : r.access_token;
            if (i) {
                const {error: a} = await this.admin.signOut(i, t);
                if (a && !(iT(a) && (a.status === 404 || a.status === 401 || a.status === 403)))
                    return {
                        error: a
                    }
            }
            return t !== "others" && (await this._removeSession(),
            await ja(this.storage, `${this.storageKey}-code-verifier`)),
            {
                error: null
            }
        }
        )
    }
    onAuthStateChange(t) {
        const n = gT()
          , r = {
            id: n,
            callback: t,
            unsubscribe: () => {
                this._debug("#unsubscribe()", "state change callback with id removed", n),
                this.stateChangeEmitters.delete(n)
            }
        };
        return this._debug("#onAuthStateChange()", "registered callback with id", n),
        this.stateChangeEmitters.set(n, r),
        (async () => (await this.initializePromise,
        await this._acquireLock(-1, async () => {
            this._emitInitialSession(n)
        }
        )))(),
        {
            data: {
                subscription: r
            }
        }
    }
    async _emitInitialSession(t) {
        return await this._useSession(async n => {
            var r, s;
            try {
                const {data: {session: o}, error: i} = n;
                if (i)
                    throw i;
                await ((r = this.stateChangeEmitters.get(t)) === null || r === void 0 ? void 0 : r.callback("INITIAL_SESSION", o)),
                this._debug("INITIAL_SESSION", "callback id", t, "session", o)
            } catch (o) {
                await ((s = this.stateChangeEmitters.get(t)) === null || s === void 0 ? void 0 : s.callback("INITIAL_SESSION", null)),
                this._debug("INITIAL_SESSION", "callback id", t, "error", o),
                console.error(o)
            }
        }
        )
    }
    async resetPasswordForEmail(t, n={}) {
        let r = null
          , s = null;
        this.flowType === "pkce" && ([r,s] = await ms(this.storage, this.storageKey, !0));
        try {
            return await Z(this.fetch, "POST", `${this.url}/recover`, {
                body: {
                    email: t,
                    code_challenge: r,
                    code_challenge_method: s,
                    gotrue_meta_security: {
                        captcha_token: n.captchaToken
                    }
                },
                headers: this.headers,
                redirectTo: n.redirectTo
            })
        } catch (o) {
            if (Q(o))
                return {
                    data: null,
                    error: o
                };
            throw o
        }
    }
    async getUserIdentities() {
        var t;
        try {
            const {data: n, error: r} = await this.getUser();
            if (r)
                throw r;
            return {
                data: {
                    identities: (t = n.user.identities) !== null && t !== void 0 ? t : []
                },
                error: null
            }
        } catch (n) {
            if (Q(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async linkIdentity(t) {
        var n;
        try {
            const {data: r, error: s} = await this._useSession(async o => {
                var i, a, l, c, d;
                const {data: h, error: f} = o;
                if (f)
                    throw f;
                const g = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, t.provider, {
                    redirectTo: (i = t.options) === null || i === void 0 ? void 0 : i.redirectTo,
                    scopes: (a = t.options) === null || a === void 0 ? void 0 : a.scopes,
                    queryParams: (l = t.options) === null || l === void 0 ? void 0 : l.queryParams,
                    skipBrowserRedirect: !0
                });
                return await Z(this.fetch, "GET", g, {
                    headers: this.headers,
                    jwt: (d = (c = h.session) === null || c === void 0 ? void 0 : c.access_token) !== null && d !== void 0 ? d : void 0
                })
            }
            );
            if (s)
                throw s;
            return Zt() && !(!((n = t.options) === null || n === void 0) && n.skipBrowserRedirect) && window.location.assign(r == null ? void 0 : r.url),
            {
                data: {
                    provider: t.provider,
                    url: r == null ? void 0 : r.url
                },
                error: null
            }
        } catch (r) {
            if (Q(r))
                return {
                    data: {
                        provider: t.provider,
                        url: null
                    },
                    error: r
                };
            throw r
        }
    }
    async unlinkIdentity(t) {
        try {
            return await this._useSession(async n => {
                var r, s;
                const {data: o, error: i} = n;
                if (i)
                    throw i;
                return await Z(this.fetch, "DELETE", `${this.url}/user/identities/${t.identity_id}`, {
                    headers: this.headers,
                    jwt: (s = (r = o.session) === null || r === void 0 ? void 0 : r.access_token) !== null && s !== void 0 ? s : void 0
                })
            }
            )
        } catch (n) {
            if (Q(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async _refreshAccessToken(t) {
        const n = `#_refreshAccessToken(${t.substring(0, 5)}...)`;
        this._debug(n, "begin");
        try {
            const r = Date.now();
            return await wT(async s => (s > 0 && await xT(200 * Math.pow(2, s - 1)),
            this._debug(n, "refreshing attempt", s),
            await Z(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                body: {
                    refresh_token: t
                },
                headers: this.headers,
                xform: zn
            })), (s, o) => {
                const i = 200 * Math.pow(2, s);
                return o && gu(o) && Date.now() + i - r < ws
            }
            )
        } catch (r) {
            if (this._debug(n, "error", r),
            Q(r))
                return {
                    data: {
                        session: null,
                        user: null
                    },
                    error: r
                };
            throw r
        } finally {
            this._debug(n, "end")
        }
    }
    _isValidSession(t) {
        return typeof t == "object" && t !== null && "access_token"in t && "refresh_token"in t && "expires_at"in t
    }
    async _handleProviderSignIn(t, n) {
        const r = await this._getUrlForProvider(`${this.url}/authorize`, t, {
            redirectTo: n.redirectTo,
            scopes: n.scopes,
            queryParams: n.queryParams
        });
        return this._debug("#_handleProviderSignIn()", "provider", t, "options", n, "url", r),
        Zt() && !n.skipBrowserRedirect && window.location.assign(r),
        {
            data: {
                provider: t,
                url: r
            },
            error: null
        }
    }
    async _recoverAndRefresh() {
        var t;
        const n = "#_recoverAndRefresh()";
        this._debug(n, "begin");
        try {
            const r = await ka(this.storage, this.storageKey);
            if (this._debug(n, "session from storage", r),
            !this._isValidSession(r)) {
                this._debug(n, "session is not valid"),
                r !== null && await this._removeSession();
                return
            }
            const s = ((t = r.expires_at) !== null && t !== void 0 ? t : 1 / 0) * 1e3 - Date.now() < pu;
            if (this._debug(n, `session has${s ? "" : " not"} expired with margin of ${pu}s`),
            s) {
                if (this.autoRefreshToken && r.refresh_token) {
                    const {error: o} = await this._callRefreshToken(r.refresh_token);
                    o && (console.error(o),
                    gu(o) || (this._debug(n, "refresh failed with a non-retryable error, removing the session", o),
                    await this._removeSession()))
                }
            } else
                await this._notifyAllSubscribers("SIGNED_IN", r)
        } catch (r) {
            this._debug(n, "error", r),
            console.error(r);
            return
        } finally {
            this._debug(n, "end")
        }
    }
    async _callRefreshToken(t) {
        var n, r;
        if (!t)
            throw new Un;
        if (this.refreshingDeferred)
            return this.refreshingDeferred.promise;
        const s = `#_callRefreshToken(${t.substring(0, 5)}...)`;
        this._debug(s, "begin");
        try {
            this.refreshingDeferred = new wc;
            const {data: o, error: i} = await this._refreshAccessToken(t);
            if (i)
                throw i;
            if (!o.session)
                throw new Un;
            await this._saveSession(o.session),
            await this._notifyAllSubscribers("TOKEN_REFRESHED", o.session);
            const a = {
                session: o.session,
                error: null
            };
            return this.refreshingDeferred.resolve(a),
            a
        } catch (o) {
            if (this._debug(s, "error", o),
            Q(o)) {
                const i = {
                    session: null,
                    error: o
                };
                return gu(o) || await this._removeSession(),
                (n = this.refreshingDeferred) === null || n === void 0 || n.resolve(i),
                i
            }
            throw (r = this.refreshingDeferred) === null || r === void 0 || r.reject(o),
            o
        } finally {
            this.refreshingDeferred = null,
            this._debug(s, "end")
        }
    }
    async _notifyAllSubscribers(t, n, r=!0) {
        const s = `#_notifyAllSubscribers(${t})`;
        this._debug(s, "begin", n, `broadcast = ${r}`);
        try {
            this.broadcastChannel && r && this.broadcastChannel.postMessage({
                event: t,
                session: n
            });
            const o = []
              , i = Array.from(this.stateChangeEmitters.values()).map(async a => {
                try {
                    await a.callback(t, n)
                } catch (l) {
                    o.push(l)
                }
            }
            );
            if (await Promise.all(i),
            o.length > 0) {
                for (let a = 0; a < o.length; a += 1)
                    console.error(o[a]);
                throw o[0]
            }
        } finally {
            this._debug(s, "end")
        }
    }
    async _saveSession(t) {
        this._debug("#_saveSession()", t),
        this.suppressGetSessionWarning = !0,
        await Gx(this.storage, this.storageKey, t)
    }
    async _removeSession() {
        this._debug("#_removeSession()"),
        await ja(this.storage, this.storageKey),
        await this._notifyAllSubscribers("SIGNED_OUT", null)
    }
    _removeVisibilityChangedCallback() {
        this._debug("#_removeVisibilityChangedCallback()");
        const t = this.visibilityChangedCallback;
        this.visibilityChangedCallback = null;
        try {
            t && Zt() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", t)
        } catch (n) {
            console.error("removing visibilitychange callback failed", n)
        }
    }
    async _startAutoRefresh() {
        await this._stopAutoRefresh(),
        this._debug("#_startAutoRefresh()");
        const t = setInterval( () => this._autoRefreshTokenTick(), ws);
        this.autoRefreshTicker = t,
        t && typeof t == "object" && typeof t.unref == "function" ? t.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(t),
        setTimeout(async () => {
            await this.initializePromise,
            await this._autoRefreshTokenTick()
        }
        , 0)
    }
    async _stopAutoRefresh() {
        this._debug("#_stopAutoRefresh()");
        const t = this.autoRefreshTicker;
        this.autoRefreshTicker = null,
        t && clearInterval(t)
    }
    async startAutoRefresh() {
        this._removeVisibilityChangedCallback(),
        await this._startAutoRefresh()
    }
    async stopAutoRefresh() {
        this._removeVisibilityChangedCallback(),
        await this._stopAutoRefresh()
    }
    async _autoRefreshTokenTick() {
        this._debug("#_autoRefreshTokenTick()", "begin");
        try {
            await this._acquireLock(0, async () => {
                try {
                    const t = Date.now();
                    try {
                        return await this._useSession(async n => {
                            const {data: {session: r}} = n;
                            if (!r || !r.refresh_token || !r.expires_at) {
                                this._debug("#_autoRefreshTokenTick()", "no session");
                                return
                            }
                            const s = Math.floor((r.expires_at * 1e3 - t) / ws);
                            this._debug("#_autoRefreshTokenTick()", `access token expires in ${s} ticks, a tick lasts ${ws}ms, refresh threshold is ${Zd} ticks`),
                            s <= Zd && await this._callRefreshToken(r.refresh_token)
                        }
                        )
                    } catch (n) {
                        console.error("Auto refresh tick failed with error. This is likely a transient error.", n)
                    }
                } finally {
                    this._debug("#_autoRefreshTokenTick()", "end")
                }
            }
            )
        } catch (t) {
            if (t.isAcquireTimeout || t instanceof Yx)
                this._debug("auto refresh token tick lock not available");
            else
                throw t
        }
    }
    async _handleVisibilityChange() {
        if (this._debug("#_handleVisibilityChange()"),
        !Zt() || !(window != null && window.addEventListener))
            return this.autoRefreshToken && this.startAutoRefresh(),
            !1;
        try {
            this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1),
            window == null || window.addEventListener("visibilitychange", this.visibilityChangedCallback),
            await this._onVisibilityChanged(!0)
        } catch (t) {
            console.error("_handleVisibilityChange", t)
        }
    }
    async _onVisibilityChanged(t) {
        const n = `#_onVisibilityChanged(${t})`;
        this._debug(n, "visibilityState", document.visibilityState),
        document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(),
        t || (await this.initializePromise,
        await this._acquireLock(-1, async () => {
            if (document.visibilityState !== "visible") {
                this._debug(n, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
                return
            }
            await this._recoverAndRefresh()
        }
        ))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh()
    }
    async _getUrlForProvider(t, n, r) {
        const s = [`provider=${encodeURIComponent(n)}`];
        if (r != null && r.redirectTo && s.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),
        r != null && r.scopes && s.push(`scopes=${encodeURIComponent(r.scopes)}`),
        this.flowType === "pkce") {
            const [o,i] = await ms(this.storage, this.storageKey)
              , a = new URLSearchParams({
                code_challenge: `${encodeURIComponent(o)}`,
                code_challenge_method: `${encodeURIComponent(i)}`
            });
            s.push(a.toString())
        }
        if (r != null && r.queryParams) {
            const o = new URLSearchParams(r.queryParams);
            s.push(o.toString())
        }
        return r != null && r.skipBrowserRedirect && s.push(`skip_http_redirect=${r.skipBrowserRedirect}`),
        `${t}?${s.join("&")}`
    }
    async _unenroll(t) {
        try {
            return await this._useSession(async n => {
                var r;
                const {data: s, error: o} = n;
                return o ? {
                    data: null,
                    error: o
                } : await Z(this.fetch, "DELETE", `${this.url}/factors/${t.factorId}`, {
                    headers: this.headers,
                    jwt: (r = s == null ? void 0 : s.session) === null || r === void 0 ? void 0 : r.access_token
                })
            }
            )
        } catch (n) {
            if (Q(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async _enroll(t) {
        try {
            return await this._useSession(async n => {
                var r, s;
                const {data: o, error: i} = n;
                if (i)
                    return {
                        data: null,
                        error: i
                    };
                const a = Object.assign({
                    friendly_name: t.friendlyName,
                    factor_type: t.factorType
                }, t.factorType === "phone" ? {
                    phone: t.phone
                } : {
                    issuer: t.issuer
                })
                  , {data: l, error: c} = await Z(this.fetch, "POST", `${this.url}/factors`, {
                    body: a,
                    headers: this.headers,
                    jwt: (r = o == null ? void 0 : o.session) === null || r === void 0 ? void 0 : r.access_token
                });
                return c ? {
                    data: null,
                    error: c
                } : (t.factorType === "totp" && (!((s = l == null ? void 0 : l.totp) === null || s === void 0) && s.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`),
                {
                    data: l,
                    error: null
                })
            }
            )
        } catch (n) {
            if (Q(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async _verify(t) {
        return this._acquireLock(-1, async () => {
            try {
                return await this._useSession(async n => {
                    var r;
                    const {data: s, error: o} = n;
                    if (o)
                        return {
                            data: null,
                            error: o
                        };
                    const {data: i, error: a} = await Z(this.fetch, "POST", `${this.url}/factors/${t.factorId}/verify`, {
                        body: {
                            code: t.code,
                            challenge_id: t.challengeId
                        },
                        headers: this.headers,
                        jwt: (r = s == null ? void 0 : s.session) === null || r === void 0 ? void 0 : r.access_token
                    });
                    return a ? {
                        data: null,
                        error: a
                    } : (await this._saveSession(Object.assign({
                        expires_at: Math.round(Date.now() / 1e3) + i.expires_in
                    }, i)),
                    await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", i),
                    {
                        data: i,
                        error: a
                    })
                }
                )
            } catch (n) {
                if (Q(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        }
        )
    }
    async _challenge(t) {
        return this._acquireLock(-1, async () => {
            try {
                return await this._useSession(async n => {
                    var r;
                    const {data: s, error: o} = n;
                    return o ? {
                        data: null,
                        error: o
                    } : await Z(this.fetch, "POST", `${this.url}/factors/${t.factorId}/challenge`, {
                        body: {
                            channel: t.channel
                        },
                        headers: this.headers,
                        jwt: (r = s == null ? void 0 : s.session) === null || r === void 0 ? void 0 : r.access_token
                    })
                }
                )
            } catch (n) {
                if (Q(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        }
        )
    }
    async _challengeAndVerify(t) {
        const {data: n, error: r} = await this._challenge({
            factorId: t.factorId
        });
        return r ? {
            data: null,
            error: r
        } : await this._verify({
            factorId: t.factorId,
            challengeId: n.id,
            code: t.code
        })
    }
    async _listFactors() {
        const {data: {user: t}, error: n} = await this.getUser();
        if (n)
            return {
                data: null,
                error: n
            };
        const r = (t == null ? void 0 : t.factors) || []
          , s = r.filter(i => i.factor_type === "totp" && i.status === "verified")
          , o = r.filter(i => i.factor_type === "phone" && i.status === "verified");
        return {
            data: {
                all: r,
                totp: s,
                phone: o
            },
            error: null
        }
    }
    async _getAuthenticatorAssuranceLevel() {
        return this._acquireLock(-1, async () => await this._useSession(async t => {
            var n, r;
            const {data: {session: s}, error: o} = t;
            if (o)
                return {
                    data: null,
                    error: o
                };
            if (!s)
                return {
                    data: {
                        currentLevel: null,
                        nextLevel: null,
                        currentAuthenticationMethods: []
                    },
                    error: null
                };
            const {payload: i} = vu(s.access_token);
            let a = null;
            i.aal && (a = i.aal);
            let l = a;
            ((r = (n = s.user.factors) === null || n === void 0 ? void 0 : n.filter(h => h.status === "verified")) !== null && r !== void 0 ? r : []).length > 0 && (l = "aal2");
            const d = i.amr || [];
            return {
                data: {
                    currentLevel: a,
                    nextLevel: l,
                    currentAuthenticationMethods: d
                },
                error: null
            }
        }
        ))
    }
    async fetchJwk(t, n={
        keys: []
    }) {
        let r = n.keys.find(i => i.kid === t);
        if (r || (r = this.jwks.keys.find(i => i.kid === t),
        r && this.jwks_cached_at + sT > Date.now()))
            return r;
        const {data: s, error: o} = await Z(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
            headers: this.headers
        });
        if (o)
            throw o;
        if (!s.keys || s.keys.length === 0)
            throw new di("JWKS is empty");
        if (this.jwks = s,
        this.jwks_cached_at = Date.now(),
        r = s.keys.find(i => i.kid === t),
        !r)
            throw new di("No matching signing key found in JWKS");
        return r
    }
    async getClaims(t, n={
        keys: []
    }) {
        try {
            let r = t;
            if (!r) {
                const {data: g, error: y} = await this.getSession();
                if (y || !g.session)
                    return {
                        data: null,
                        error: y
                    };
                r = g.session.access_token
            }
            const {header: s, payload: o, signature: i, raw: {header: a, payload: l}} = vu(r);
            if (jT(o.exp),
            !s.kid || s.alg === "HS256" || !("crypto"in globalThis && "subtle"in globalThis.crypto)) {
                const {error: g} = await this.getUser(r);
                if (g)
                    throw g;
                return {
                    data: {
                        claims: o,
                        header: s,
                        signature: i
                    },
                    error: null
                }
            }
            const c = PT(s.alg)
              , d = await this.fetchJwk(s.kid, n)
              , h = await crypto.subtle.importKey("jwk", d, c, !0, ["verify"]);
            if (!await crypto.subtle.verify(c, h, i, pT(`${a}.${l}`)))
                throw new di("Invalid JWT signature");
            return {
                data: {
                    claims: o,
                    header: s,
                    signature: i
                },
                error: null
            }
        } catch (r) {
            if (Q(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
}
Di.nextInstanceID = 0;
const HT = Di;
class WT extends HT {
    constructor(t) {
        super(t)
    }
}
var qT = function(e, t, n, r) {
    function s(o) {
        return o instanceof n ? o : new n(function(i) {
            i(o)
        }
        )
    }
    return new (n || (n = Promise))(function(o, i) {
        function a(d) {
            try {
                c(r.next(d))
            } catch (h) {
                i(h)
            }
        }
        function l(d) {
            try {
                c(r.throw(d))
            } catch (h) {
                i(h)
            }
        }
        function c(d) {
            d.done ? o(d.value) : s(d.value).then(a, l)
        }
        c((r = r.apply(e, t || [])).next())
    }
    )
};
class KT {
    constructor(t, n, r) {
        var s, o, i;
        if (this.supabaseUrl = t,
        this.supabaseKey = n,
        !t)
            throw new Error("supabaseUrl is required.");
        if (!n)
            throw new Error("supabaseKey is required.");
        const a = XN(t);
        this.realtimeUrl = `${a}/realtime/v1`.replace(/^http/i, "ws"),
        this.authUrl = `${a}/auth/v1`,
        this.storageUrl = `${a}/storage/v1`,
        this.functionsUrl = `${a}/functions/v1`;
        const l = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`
          , c = {
            db: HN,
            realtime: qN,
            auth: Object.assign(Object.assign({}, WN), {
                storageKey: l
            }),
            global: VN
        }
          , d = ZN(r ?? {}, c);
        this.storageKey = (s = d.auth.storageKey) !== null && s !== void 0 ? s : "",
        this.headers = (o = d.global.headers) !== null && o !== void 0 ? o : {},
        d.accessToken ? (this.accessToken = d.accessToken,
        this.auth = new Proxy({},{
            get: (h, f) => {
                throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(f)} is not possible`)
            }
        })) : this.auth = this._initSupabaseAuthClient((i = d.auth) !== null && i !== void 0 ? i : {}, this.headers, d.global.fetch),
        this.fetch = YN(n, this._getAccessToken.bind(this), d.global.fetch),
        this.realtime = this._initRealtimeClient(Object.assign({
            headers: this.headers,
            accessToken: this._getAccessToken.bind(this)
        }, d.realtime)),
        this.rest = new dN(`${a}/rest/v1`,{
            headers: this.headers,
            schema: d.db.schema,
            fetch: this.fetch
        }),
        d.accessToken || this._listenForAuthEvents()
    }
    get functions() {
        return new zP(this.functionsUrl,{
            headers: this.headers,
            customFetch: this.fetch
        })
    }
    get storage() {
        return new UN(this.storageUrl,this.headers,this.fetch)
    }
    from(t) {
        return this.rest.from(t)
    }
    schema(t) {
        return this.rest.schema(t)
    }
    rpc(t, n={}, r={}) {
        return this.rest.rpc(t, n, r)
    }
    channel(t, n={
        config: {}
    }) {
        return this.realtime.channel(t, n)
    }
    getChannels() {
        return this.realtime.getChannels()
    }
    removeChannel(t) {
        return this.realtime.removeChannel(t)
    }
    removeAllChannels() {
        return this.realtime.removeAllChannels()
    }
    _getAccessToken() {
        var t, n;
        return qT(this, void 0, void 0, function*() {
            if (this.accessToken)
                return yield this.accessToken();
            const {data: r} = yield this.auth.getSession();
            return (n = (t = r.session) === null || t === void 0 ? void 0 : t.access_token) !== null && n !== void 0 ? n : null
        })
    }
    _initSupabaseAuthClient({autoRefreshToken: t, persistSession: n, detectSessionInUrl: r, storage: s, storageKey: o, flowType: i, lock: a, debug: l}, c, d) {
        const h = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`
        };
        return new WT({
            url: this.authUrl,
            headers: Object.assign(Object.assign({}, h), c),
            storageKey: o,
            autoRefreshToken: t,
            persistSession: n,
            detectSessionInUrl: r,
            storage: s,
            flowType: i,
            lock: a,
            debug: l,
            fetch: d,
            hasCustomAuthorizationHeader: "Authorization"in this.headers
        })
    }
    _initRealtimeClient(t) {
        return new kN(this.realtimeUrl,Object.assign(Object.assign({}, t), {
            params: Object.assign({
                apikey: this.supabaseKey
            }, t == null ? void 0 : t.params)
        }))
    }
    _listenForAuthEvents() {
        return this.auth.onAuthStateChange( (n, r) => {
            this._handleTokenChanged(n, "CLIENT", r == null ? void 0 : r.access_token)
        }
        )
    }
    _handleTokenChanged(t, n, r) {
        (t === "TOKEN_REFRESHED" || t === "SIGNED_IN") && this.changedAccessToken !== r ? this.changedAccessToken = r : t === "SIGNED_OUT" && (this.realtime.setAuth(),
        n == "STORAGE" && this.auth.signOut(),
        this.changedAccessToken = void 0)
    }
}
const QT = (e, t, n) => new KT(e,t,n)
  , GT = "https://wpsoppvlxydmvkbpsszc.supabase.co"
  , YT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indwc29wcHZseHlkbXZrYnBzc3pjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwOTkyNTksImV4cCI6MjA2MTY3NTI1OX0.zfKkpWj1IO0VAgsh62kcU32EdxAoSurDPHeUR39usko"
  , Ye = QT(GT, YT)
  , Jx = p.createContext(void 0)
  , JT = ({children: e}) => {
    const [t,n] = p.useState(null)
      , [r,s] = p.useState(null)
      , [o,i] = p.useState(!0)
      , {toast: a} = ss();
    p.useEffect( () => {
        const {data: {subscription: f}} = Ye.auth.onAuthStateChange( (g, y) => {
            s(y),
            n((y == null ? void 0 : y.user) ?? null)
        }
        );
        return Ye.auth.getSession().then( ({data: {session: g}}) => {
            s(g),
            n((g == null ? void 0 : g.user) ?? null),
            i(!1)
        }
        ),
        () => f.unsubscribe()
    }
    , []);
    const h = {
        user: t,
        session: r,
        loading: o,
        signUp: async (f, g, y) => {
            try {
                const {error: m} = await Ye.auth.signUp({
                    email: f,
                    password: g,
                    options: {
                        data: {
                            name: y
                        }
                    }
                });
                if (m)
                    throw m;
                a({
                    title: "Conta criada com sucesso!",
                    description: "Verifique seu e-mail para confirmar seu cadastro."
                })
            } catch (m) {
                throw a({
                    variant: "destructive",
                    title: "Erro ao criar conta",
                    description: m.message || "Ocorreu um erro ao criar sua conta. Tente novamente."
                }),
                m
            }
        }
        ,
        signIn: async (f, g) => {
            try {
                const {error: y} = await Ye.auth.signInWithPassword({
                    email: f,
                    password: g
                });
                if (y)
                    throw y;
                a({
                    title: "Login realizado com sucesso!",
                    description: "Bem-vindo de volta!"
                })
            } catch (y) {
                throw a({
                    variant: "destructive",
                    title: "Erro ao fazer login",
                    description: y.message || "E-mail ou senha inválidos. Tente novamente."
                }),
                y
            }
        }
        ,
        signOut: async () => {
            try {
                await Ye.auth.signOut(),
                a({
                    title: "Logout realizado com sucesso"
                })
            } catch (f) {
                a({
                    variant: "destructive",
                    title: "Erro ao fazer logout",
                    description: f.message || "Ocorreu um erro ao sair. Tente novamente."
                })
            }
        }
    };
    return u.jsx(Jx.Provider, {
        value: h,
        children: e
    })
}
  , as = () => {
    const e = p.useContext(Jx);
    if (e === void 0)
        throw new Error("useAuth must be used within an AuthProvider");
    return e
}
  , XT = sc("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , ve = p.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...s}, o) => {
    const i = r ? po : "button";
    return u.jsx(i, {
        className: se(XT({
            variant: t,
            size: n,
            className: e
        })),
        ref: o,
        ...s
    })
}
);
ve.displayName = "Button";
const Oo = () => {
    const [e,t] = p.useState(!1)
      , {user: n, signOut: r} = as()
      , s = To()
      , o = () => {
        t(!e)
    }
      , i = async () => {
        await r(),
        s("/")
    }
      , a = "px-3 py-2 text-gray-600 hover:text-brand-blue transition-colors"
      , l = "px-3 py-2 text-brand-blue font-medium";
    return u.jsxs("header", {
        className: "bg-white border-b border-gray-200",
        children: [u.jsx("div", {
            className: "container mx-auto px-4 sm:px-6",
            children: u.jsxs("div", {
                className: "flex justify-between items-center h-16",
                children: [u.jsxs(Be, {
                    to: "/",
                    className: "flex items-center",
                    children: [u.jsx(lh, {
                        className: "h-7 w-7 text-brand-blue mr-2"
                    }), u.jsx("span", {
                        className: "font-bold text-xl text-gray-800",
                        children: "PrecificaJá"
                    })]
                }), u.jsxs("nav", {
                    className: "hidden md:flex items-center space-x-1",
                    children: [u.jsx(Sa, {
                        to: "/",
                        className: ({isActive: c}) => c ? l : a,
                        end: !0,
                        children: "Calculadora"
                    }), n && u.jsx(Sa, {
                        to: "/dashboard",
                        className: ({isActive: c}) => c ? l : a,
                        children: "Meus Cálculos"
                    }), u.jsx(Sa, {
                        to: "/how-to-use",
                        className: ({isActive: c}) => c ? l : a,
                        children: "Como Usar"
                    }), u.jsx(Sa, {
                        to: "/about",
                        className: ({isActive: c}) => c ? l : a,
                        children: "Sobre"
                    })]
                }), u.jsx("div", {
                    className: "hidden md:flex items-center space-x-4",
                    children: n ? u.jsx(ve, {
                        variant: "outline",
                        onClick: i,
                        children: "Sair"
                    }) : u.jsxs(u.Fragment, {
                        children: [u.jsx(Be, {
                            to: "/login",
                            children: u.jsx(ve, {
                                variant: "outline",
                                children: "Entrar"
                            })
                        }), u.jsx(Be, {
                            to: "/signup",
                            children: u.jsx(ve, {
                                children: "Cadastrar"
                            })
                        })]
                    })
                }), u.jsx("button", {
                    type: "button",
                    className: "md:hidden p-2 rounded-md text-gray-400",
                    onClick: o,
                    children: e ? u.jsx(oc, {
                        className: "h-6 w-6"
                    }) : u.jsx(uC, {
                        className: "h-6 w-6"
                    })
                })]
            })
        }), e && u.jsx("div", {
            className: "md:hidden",
            children: u.jsxs("div", {
                className: "px-2 pt-2 pb-3 space-y-1 sm:px-3",
                children: [u.jsx(Be, {
                    to: "/",
                    className: "block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100",
                    onClick: () => t(!1),
                    children: "Calculadora"
                }), n && u.jsx(Be, {
                    to: "/dashboard",
                    className: "block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100",
                    onClick: () => t(!1),
                    children: "Meus Cálculos"
                }), u.jsx(Be, {
                    to: "/how-to-use",
                    className: "block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100",
                    onClick: () => t(!1),
                    children: "Como Usar"
                }), u.jsx(Be, {
                    to: "/about",
                    className: "block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100",
                    onClick: () => t(!1),
                    children: "Sobre"
                }), n ? u.jsx(ve, {
                    variant: "outline",
                    onClick: () => {
                        i(),
                        t(!1)
                    }
                    ,
                    className: "w-full mt-4",
                    children: "Sair"
                }) : u.jsxs("div", {
                    className: "space-y-2 mt-4",
                    children: [u.jsx(Be, {
                        to: "/login",
                        className: "block",
                        onClick: () => t(!1),
                        children: u.jsx(ve, {
                            variant: "outline",
                            className: "w-full",
                            children: "Entrar"
                        })
                    }), u.jsx(Be, {
                        to: "/signup",
                        className: "block",
                        onClick: () => t(!1),
                        children: u.jsx(ve, {
                            className: "w-full",
                            children: "Cadastrar"
                        })
                    })]
                })]
            })
        })]
    })
}
  , Io = () => u.jsx("footer", {
    className: "bg-brand-gray-dark text-white py-8 px-6 mt-12",
    children: u.jsxs("div", {
        className: "container mx-auto",
        children: [u.jsxs("div", {
            className: "flex flex-col md:flex-row justify-between gap-6",
            children: [u.jsxs("div", {
                children: [u.jsx("h3", {
                    className: "text-xl font-bold mb-2",
                    children: "Precifica & Vende Fácil"
                }), u.jsx("p", {
                    className: "text-brand-gray-medium",
                    children: "Sua ferramenta para calcular margens e preços ideais."
                })]
            }), u.jsxs("div", {
                children: [u.jsx("h4", {
                    className: "text-lg font-bold mb-2",
                    children: "Links Rápidos"
                }), u.jsxs("ul", {
                    className: "space-y-1",
                    children: [u.jsx("li", {
                        children: u.jsx("a", {
                            href: "#",
                            className: "text-brand-gray-medium hover:text-white transition-colors",
                            children: "Calculadora"
                        })
                    }), u.jsx("li", {
                        children: u.jsx("a", {
                            href: "#",
                            className: "text-brand-gray-medium hover:text-white transition-colors",
                            children: "Dicas de Precificação"
                        })
                    }), u.jsx("li", {
                        children: u.jsx("a", {
                            href: "#",
                            className: "text-brand-gray-medium hover:text-white transition-colors",
                            children: "Contato"
                        })
                    })]
                })]
            }), u.jsxs("div", {
                children: [u.jsx("h4", {
                    className: "text-lg font-bold mb-2",
                    children: "Contato"
                }), u.jsx("p", {
                    className: "text-brand-gray-medium",
                    children: "contatoTESTE@TESTADOR.com.br"
                })]
            })]
        }), u.jsx("div", {
            className: "border-t border-brand-gray-medium mt-6 pt-6 text-center",
            children: u.jsxs("p", {
                className: "text-brand-gray-medium text-sm",
                children: ["© ", new Date().getFullYear(), " Precifica & Vende Fácil. Todos os direitos reservados."]
            })
        })]
    })
})
  , ZT = () => u.jsx("div", {
    className: "bg-gradient-to-r from-blue-50 to-cyan-50 py-16",
    children: u.jsx("div", {
        className: "container mx-auto px-6",
        children: u.jsxs("div", {
            className: "max-w-3xl",
            children: [u.jsxs("h1", {
                className: "text-3xl md:text-4xl font-bold text-brand-gray-dark mb-4",
                children: ["Precifique seus produtos ", u.jsx("span", {
                    className: "text-brand-blue",
                    children: "com precisão"
                }), " e venda com lucro real"]
            }), u.jsx("p", {
                className: "text-lg text-brand-gray-dark mb-8",
                children: "Calcule o preço ideal dos seus produtos considerando todos os custos, taxas e a margem de lucro que você deseja."
            }), u.jsxs("div", {
                className: "flex flex-col sm:flex-row gap-4",
                children: [u.jsxs(ve, {
                    className: "bg-brand-blue hover:bg-blue-600 text-white",
                    size: "lg",
                    children: ["Comece agora", u.jsx(sC, {
                        className: "ml-2 h-4 w-4"
                    })]
                }), u.jsx(ve, {
                    variant: "outline",
                    size: "lg",
                    children: "Saiba mais"
                })]
            })]
        })
    })
})
  , jt = p.forwardRef( ({className: e, ...t}, n) => u.jsx("div", {
    ref: n,
    className: se("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...t
}));
jt.displayName = "Card";
const hi = p.forwardRef( ({className: e, ...t}, n) => u.jsx("div", {
    ref: n,
    className: se("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
hi.displayName = "CardHeader";
const pi = p.forwardRef( ({className: e, ...t}, n) => u.jsx("h3", {
    ref: n,
    className: se("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
}));
pi.displayName = "CardTitle";
const Qa = p.forwardRef( ({className: e, ...t}, n) => u.jsx("p", {
    ref: n,
    className: se("text-sm text-muted-foreground", e),
    ...t
}));
Qa.displayName = "CardDescription";
const Pt = p.forwardRef( ({className: e, ...t}, n) => u.jsx("div", {
    ref: n,
    className: se("p-6 pt-0", e),
    ...t
}));
Pt.displayName = "CardContent";
const eR = p.forwardRef( ({className: e, ...t}, n) => u.jsx("div", {
    ref: n,
    className: se("flex items-center p-6 pt-0", e),
    ...t
}));
eR.displayName = "CardFooter";
const tR = [{
    icon: u.jsx(lh, {
        className: "h-8 w-8 text-brand-blue"
    }),
    title: "Cálculo de Margem Real",
    description: "Saiba exatamente quanto você está lucrando com cada produto vendido."
}, {
    icon: u.jsx(pC, {
        className: "h-8 w-8 text-brand-blue"
    }),
    title: "Frete Incluído",
    description: "Considere o custo do frete nos seus cálculos para uma precificação mais precisa."
}, {
    icon: u.jsx(x0, {
        className: "h-8 w-8 text-brand-blue"
    }),
    title: "Taxas de Marketplace",
    description: "Calcule o impacto das taxas de marketplace e gateways de pagamento no seu lucro."
}, {
    icon: u.jsx(fC, {
        className: "h-8 w-8 text-brand-blue"
    }),
    title: "Impacto de Descontos",
    description: "Veja como promoções e cupons afetam sua margem de lucro final."
}, {
    icon: u.jsx(dC, {
        className: "h-8 w-8 text-brand-blue"
    }),
    title: "Custos Operacionais",
    description: "Inclua custos de embalagem, armazenamento e outros custos operacionais."
}]
  , nR = () => u.jsx("div", {
    className: "py-16 bg-white",
    children: u.jsxs("div", {
        className: "container mx-auto px-6",
        children: [u.jsxs("div", {
            className: "text-center mb-12",
            children: [u.jsx("h2", {
                className: "text-3xl font-bold text-brand-gray-dark mb-4",
                children: "Tome decisões de precificação com confiança"
            }), u.jsx("p", {
                className: "text-lg text-brand-gray-medium max-w-2xl mx-auto",
                children: "Nossa calculadora te ajuda a considerar todos os fatores que impactam sua lucratividade"
            })]
        }), u.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
            children: tR.map( (e, t) => u.jsxs(jt, {
                className: "border-none shadow-md hover:shadow-lg transition-shadow",
                children: [u.jsxs(hi, {
                    className: "pb-2",
                    children: [u.jsx("div", {
                        className: "mb-4",
                        children: e.icon
                    }), u.jsx(pi, {
                        className: "text-xl",
                        children: e.title
                    })]
                }), u.jsx(Pt, {
                    children: u.jsx("p", {
                        className: "text-brand-gray-medium",
                        children: e.description
                    })
                })]
            }, t))
        })]
    })
})
  , rR = (e, t, n, r, s, o) => {
    const i = n / 100
      , a = r / 100
      , l = o * i
      , c = o * a
      , d = o - c
      , h = e + t + l + s
      , f = d - h
      , g = f / o * 100;
    return {
        profit: f,
        profitMarginPercentage: g,
        totalCost: h,
        priceAfterDiscount: d,
        feesAmount: l,
        discountAmount: c
    }
}
  , sR = (e, t, n, r, s, o) => {
    const i = n / 100
      , a = r / 100
      , l = o / 100;
    return (e + t + s) / (1 - i - l - a * (1 - l))
}
  , rt = e => new Intl.NumberFormat("pt-BR",{
    style: "currency",
    currency: "BRL"
}).format(e)
  , Ga = e => `${e.toFixed(2)}%`
  , Qe = p.forwardRef( ({className: e, type: t, ...n}, r) => u.jsx("input", {
    type: t,
    className: se("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: r,
    ...n
}));
Qe.displayName = "Input";
var oR = "Label"
  , Xx = p.forwardRef( (e, t) => u.jsx(ne.label, {
    ...e,
    ref: t,
    onMouseDown: n => {
        var s;
        n.target.closest("button, input, select, textarea") || ((s = e.onMouseDown) == null || s.call(e, n),
        !n.defaultPrevented && n.detail > 1 && n.preventDefault())
    }
}));
Xx.displayName = oR;
var Zx = Xx;
const iR = sc("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
  , Ge = p.forwardRef( ({className: e, ...t}, n) => u.jsx(Zx, {
    ref: n,
    className: se(iR(), e),
    ...t
}));
Ge.displayName = Zx.displayName;
const aR = ({productCost: e, setProductCost: t, shippingCost: n, setShippingCost: r, feesPercentage: s, setFeesPercentage: o, discountPercentage: i, setDiscountPercentage: a, operationalCost: l, setOperationalCost: c, sellingPrice: d, setSellingPrice: h, desiredMarginPercentage: f, setDesiredMarginPercentage: g}) => {
    const y = (m, w) => {
        const x = parseFloat(m);
        !isNaN(x) && x >= 0 ? w(x) : m === "" && w(0)
    }
    ;
    return u.jsxs("div", {
        className: "space-y-6",
        children: [u.jsx("h3", {
            className: "text-lg font-semibold text-brand-gray-dark",
            children: "Dados do Produto"
        }), u.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
            children: [u.jsxs("div", {
                className: "space-y-2",
                children: [u.jsx(Ge, {
                    htmlFor: "productCost",
                    children: "Custo do Produto (R$)"
                }), u.jsx(Qe, {
                    id: "productCost",
                    type: "number",
                    min: "0",
                    step: "0.01",
                    value: e || "",
                    onChange: m => y(m.target.value, t),
                    placeholder: "0.00",
                    className: "text-right"
                }), u.jsx("p", {
                    className: "text-xs text-brand-gray-medium",
                    children: "Valor de compra ou fabricação"
                })]
            }), u.jsxs("div", {
                className: "space-y-2",
                children: [u.jsx(Ge, {
                    htmlFor: "shippingCost",
                    children: "Frete Médio (R$)"
                }), u.jsx(Qe, {
                    id: "shippingCost",
                    type: "number",
                    min: "0",
                    step: "0.01",
                    value: n || "",
                    onChange: m => y(m.target.value, r),
                    placeholder: "0.00",
                    className: "text-right"
                }), u.jsx("p", {
                    className: "text-xs text-brand-gray-medium",
                    children: "Custo médio do frete por produto"
                })]
            })]
        }), u.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: [u.jsxs("div", {
                className: "space-y-2",
                children: [u.jsx(Ge, {
                    htmlFor: "feesPercentage",
                    children: "Taxas (%)"
                }), u.jsx(Qe, {
                    id: "feesPercentage",
                    type: "number",
                    min: "0",
                    step: "0.01",
                    value: s || "",
                    onChange: m => y(m.target.value, o),
                    placeholder: "0.00",
                    className: "text-right"
                }), u.jsx("p", {
                    className: "text-xs text-brand-gray-medium",
                    children: "Ex: marketplace, gateway de pagamento"
                })]
            }), u.jsxs("div", {
                className: "space-y-2",
                children: [u.jsx(Ge, {
                    htmlFor: "discountPercentage",
                    children: "Descontos (%)"
                }), u.jsx(Qe, {
                    id: "discountPercentage",
                    type: "number",
                    min: "0",
                    step: "0.01",
                    value: i || "",
                    onChange: m => y(m.target.value, a),
                    placeholder: "0.00",
                    className: "text-right"
                }), u.jsx("p", {
                    className: "text-xs text-brand-gray-medium",
                    children: "Ex: cupom, promoções"
                })]
            }), u.jsxs("div", {
                className: "space-y-2",
                children: [u.jsx(Ge, {
                    htmlFor: "operationalCost",
                    children: "Custo Operacional (R$)"
                }), u.jsx(Qe, {
                    id: "operationalCost",
                    type: "number",
                    min: "0",
                    step: "0.01",
                    value: l || "",
                    onChange: m => y(m.target.value, c),
                    placeholder: "0.00",
                    className: "text-right"
                }), u.jsx("p", {
                    className: "text-xs text-brand-gray-medium",
                    children: "Ex: embalagem, armazenamento"
                })]
            })]
        }), u.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-200 pt-6",
            children: [u.jsxs("div", {
                className: "space-y-2",
                children: [u.jsx(Ge, {
                    htmlFor: "sellingPrice",
                    children: "Preço de Venda (R$)"
                }), u.jsx(Qe, {
                    id: "sellingPrice",
                    type: "number",
                    min: "0",
                    step: "0.01",
                    value: d || "",
                    onChange: m => y(m.target.value, h),
                    placeholder: "0.00",
                    className: "text-right font-medium text-lg"
                }), u.jsx("p", {
                    className: "text-xs text-brand-gray-medium",
                    children: "Valor a ser cobrado do cliente"
                })]
            }), u.jsxs("div", {
                className: "space-y-2",
                children: [u.jsx(Ge, {
                    htmlFor: "desiredMarginPercentage",
                    children: "Margem Desejada (%)"
                }), u.jsx(Qe, {
                    id: "desiredMarginPercentage",
                    type: "number",
                    min: "0",
                    max: "100",
                    step: "0.1",
                    value: f || "",
                    onChange: m => y(m.target.value, g),
                    placeholder: "0.00",
                    className: "text-right"
                }), u.jsx("p", {
                    className: "text-xs text-brand-gray-medium",
                    children: "Para cálculo do preço recomendado"
                })]
            })]
        })]
    })
}
;
function lR(e, t=[]) {
    let n = [];
    function r(o, i) {
        const a = p.createContext(i)
          , l = n.length;
        n = [...n, i];
        function c(h) {
            const {scope: f, children: g, ...y} = h
              , m = (f == null ? void 0 : f[e][l]) || a
              , w = p.useMemo( () => y, Object.values(y));
            return u.jsx(m.Provider, {
                value: w,
                children: g
            })
        }
        function d(h, f) {
            const g = (f == null ? void 0 : f[e][l]) || a
              , y = p.useContext(g);
            if (y)
                return y;
            if (i !== void 0)
                return i;
            throw new Error(`\`${h}\` must be used within \`${o}\``)
        }
        return c.displayName = o + "Provider",
        [c, d]
    }
    const s = () => {
        const o = n.map(i => p.createContext(i));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || o;
            return p.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return s.scopeName = e,
    [r, cR(s, ...t)]
}
function cR(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(s => ({
            useScope: s(),
            scopeName: s.scopeName
        }));
        return function(o) {
            const i = r.reduce( (a, {useScope: l, scopeName: c}) => {
                const h = l(o)[`__scope${c}`];
                return {
                    ...a,
                    ...h
                }
            }
            , {});
            return p.useMemo( () => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var Th = "Progress"
  , Rh = 100
  , [uR,UA] = lR(Th)
  , [dR,fR] = uR(Th)
  , ew = p.forwardRef( (e, t) => {
    const {__scopeProgress: n, value: r=null, max: s, getValueLabel: o=hR, ...i} = e;
    (s || s === 0) && !ig(s) && console.error(pR(`${s}`, "Progress"));
    const a = ig(s) ? s : Rh;
    r !== null && !ag(r, a) && console.error(mR(`${r}`, "Progress"));
    const l = ag(r, a) ? r : null
      , c = Ll(l) ? o(l, a) : void 0;
    return u.jsx(dR, {
        scope: n,
        value: l,
        max: a,
        children: u.jsx(ne.div, {
            "aria-valuemax": a,
            "aria-valuemin": 0,
            "aria-valuenow": Ll(l) ? l : void 0,
            "aria-valuetext": c,
            role: "progressbar",
            "data-state": rw(l, a),
            "data-value": l ?? void 0,
            "data-max": a,
            ...i,
            ref: t
        })
    })
}
);
ew.displayName = Th;
var tw = "ProgressIndicator"
  , nw = p.forwardRef( (e, t) => {
    const {__scopeProgress: n, ...r} = e
      , s = fR(tw, n);
    return u.jsx(ne.div, {
        "data-state": rw(s.value, s.max),
        "data-value": s.value ?? void 0,
        "data-max": s.max,
        ...r,
        ref: t
    })
}
);
nw.displayName = tw;
function hR(e, t) {
    return `${Math.round(e / t * 100)}%`
}
function rw(e, t) {
    return e == null ? "indeterminate" : e === t ? "complete" : "loading"
}
function Ll(e) {
    return typeof e == "number"
}
function ig(e) {
    return Ll(e) && !isNaN(e) && e > 0
}
function ag(e, t) {
    return Ll(e) && !isNaN(e) && e <= t && e >= 0
}
function pR(e, t) {
    return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Rh}\`.`
}
function mR(e, t) {
    return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Rh} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`
}
var sw = ew
  , gR = nw;
const Ah = p.forwardRef( ({className: e, value: t, indicatorColor: n, ...r}, s) => u.jsx(sw, {
    ref: s,
    className: se("relative h-4 w-full overflow-hidden rounded-full bg-secondary", e),
    ...r,
    children: u.jsx(gR, {
        className: se("h-full w-full flex-1 transition-all", n || "bg-primary"),
        style: {
            transform: `translateX(-${100 - (t || 0)}%)`
        }
    })
}));
Ah.displayName = sw.displayName;
const vR = ({profit: e, profitMarginPercentage: t, totalCost: n, minimumSellingPrice: r, recommendedSellingPrice: s, feesAmount: o, discountAmount: i, sellingPrice: a}) => {
    const c = (h => h < 0 ? "bg-brand-red" : h < 10 ? "bg-yellow-500" : h < 20 ? "bg-yellow-400" : h < 30 ? "bg-green-400" : "bg-brand-green")(t)
      , d = t > 0;
    return u.jsxs("div", {
        className: "space-y-6",
        children: [u.jsx("h3", {
            className: "text-lg font-semibold text-brand-gray-dark",
            children: "Resultados"
        }), u.jsxs("div", {
            className: "bg-white rounded-lg shadow-md p-6",
            children: [u.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [u.jsxs("div", {
                    className: "space-y-4",
                    children: [u.jsxs("div", {
                        children: [u.jsx("h4", {
                            className: "text-sm font-medium text-brand-gray-medium",
                            children: "Lucro por Venda"
                        }), u.jsx("p", {
                            className: `text-2xl font-bold ${e < 0 ? "text-brand-red" : "text-brand-green"}`,
                            children: rt(e)
                        })]
                    }), u.jsxs("div", {
                        children: [u.jsxs("div", {
                            className: "flex justify-between mb-1",
                            children: [u.jsx("h4", {
                                className: "text-sm font-medium text-brand-gray-medium",
                                children: "Margem de Lucro"
                            }), u.jsx("span", {
                                className: `font-medium ${t < 0 ? "text-brand-red" : "text-brand-blue"}`,
                                children: Ga(t)
                            })]
                        }), u.jsx(Ah, {
                            value: Math.max(0, Math.min(t, 100)),
                            className: `h-2 ${c}`
                        })]
                    })]
                }), u.jsx("div", {
                    className: "space-y-4",
                    children: u.jsxs("div", {
                        children: [u.jsx("h4", {
                            className: "text-sm font-medium text-brand-gray-medium",
                            children: "Custo Total"
                        }), u.jsx("p", {
                            className: "text-xl font-medium",
                            children: rt(n)
                        }), u.jsxs("div", {
                            className: "mt-2 text-xs text-brand-gray-medium",
                            children: [u.jsxs("div", {
                                className: "flex justify-between",
                                children: [u.jsx("span", {
                                    children: "Taxas:"
                                }), u.jsx("span", {
                                    children: rt(o)
                                })]
                            }), u.jsxs("div", {
                                className: "flex justify-between",
                                children: [u.jsx("span", {
                                    children: "Descontos:"
                                }), u.jsx("span", {
                                    children: rt(i)
                                })]
                            })]
                        })]
                    })
                })]
            }), u.jsx("div", {
                className: "border-t border-gray-200 mt-6 pt-6",
                children: u.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: [u.jsxs("div", {
                        children: [u.jsx("h4", {
                            className: "text-sm font-medium text-brand-gray-medium",
                            children: "Preço Mínimo Recomendado"
                        }), u.jsx("p", {
                            className: "text-xl font-medium",
                            children: rt(r)
                        }), u.jsx("p", {
                            className: "text-xs text-brand-gray-medium mt-1",
                            children: "Para atingir a margem desejada"
                        })]
                    }), u.jsxs("div", {
                        children: [u.jsx("h4", {
                            className: "text-sm font-medium text-brand-gray-medium",
                            children: "Preço Recomendado"
                        }), u.jsx("p", {
                            className: "text-2xl font-bold text-brand-blue",
                            children: rt(s)
                        }), u.jsx("p", {
                            className: "text-xs text-brand-gray-medium mt-1",
                            children: "Com markup de segurança"
                        })]
                    })]
                })
            })]
        }), u.jsxs("div", {
            className: `p-4 rounded-md ${d ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`,
            children: [u.jsx("p", {
                className: `text-sm ${d ? "text-green-800" : "text-red-800"}`,
                children: d ? `Seu produto está gerando lucro de ${rt(e)} por unidade (${Ga(t)} de margem).` : `Atenção! Seu produto está gerando prejuízo de ${rt(Math.abs(e))} por unidade (${Ga(Math.abs(t))} negativo).`
            }), u.jsx("p", {
                className: "text-xs mt-1 text-brand-gray-medium",
                children: d ? t < 20 ? "A margem está positiva, mas poderia ser melhor. Considere aumentar o preço ou reduzir os custos." : "Sua margem está saudável. Continue monitorando seus custos para manter a lucratividade." : "Recomendamos aumentar o preço de venda ou reduzir os custos para tornar o produto rentável."
            })]
        })]
    })
}
  , ow = () => {
    const [e,t] = p.useState(!1)
      , {toast: n} = ss()
      , r = _h()
      , {user: s} = as()
      , {data: o, isLoading: i} = Hd({
        queryKey: ["calculations"],
        queryFn: async () => {
            const {data: d, error: h} = await Ye.from("calculations").select("*").order("created_at", {
                ascending: !1
            });
            if (h)
                throw n({
                    variant: "destructive",
                    title: "Erro ao buscar cálculos",
                    description: h.message
                }),
                h;
            return d
        }
    })
      , a = uu({
        mutationFn: async d => {
            t(!0);
            try {
                const h = {
                    ...d,
                    user_id: s == null ? void 0 : s.id
                }
                  , {data: f, error: g} = await Ye.from("calculations").insert(h).select().single();
                if (g)
                    throw n({
                        variant: "destructive",
                        title: "Erro ao salvar cálculo",
                        description: g.message
                    }),
                    g;
                return n({
                    title: "Cálculo salvo com sucesso!"
                }),
                f
            } finally {
                t(!1)
            }
        }
        ,
        onSuccess: () => {
            r.invalidateQueries({
                queryKey: ["calculations"]
            })
        }
    })
      , l = uu({
        mutationFn: async ({id: d, ...h}) => {
            t(!0);
            try {
                const f = {
                    ...h,
                    user_id: s == null ? void 0 : s.id
                }
                  , {data: g, error: y} = await Ye.from("calculations").update(f).eq("id", d).select().single();
                if (y)
                    throw n({
                        variant: "destructive",
                        title: "Erro ao atualizar cálculo",
                        description: y.message
                    }),
                    y;
                return n({
                    title: "Cálculo atualizado com sucesso!"
                }),
                g
            } finally {
                t(!1)
            }
        }
        ,
        onSuccess: () => {
            r.invalidateQueries({
                queryKey: ["calculations"]
            })
        }
    })
      , c = uu({
        mutationFn: async d => {
            t(!0);
            try {
                const {error: h} = await Ye.from("calculations").delete().eq("id", d);
                if (h)
                    throw n({
                        variant: "destructive",
                        title: "Erro ao excluir cálculo",
                        description: h.message
                    }),
                    h;
                return n({
                    title: "Cálculo excluído com sucesso!"
                }),
                d
            } finally {
                t(!1)
            }
        }
        ,
        onSuccess: () => {
            r.invalidateQueries({
                queryKey: ["calculations"]
            })
        }
    });
    return {
        calculations: o,
        fetchingCalculations: i,
        saveCalculation: a,
        updateCalculation: l,
        deleteCalculation: c,
        loading: e
    }
}
  , bc = () => {
    var f;
    const {user: e} = as()
      , {toast: t} = ss()
      , [n,r] = p.useState(null)
      , [s,o] = p.useState(!1)
      , {data: i} = Hd({
        queryKey: ["plans"],
        queryFn: async () => {
            const {data: g, error: y} = await Ye.from("plans").select("*").order("price");
            if (y)
                throw t({
                    variant: "destructive",
                    title: "Erro ao buscar planos",
                    description: y.message
                }),
                y;
            return g
        }
        ,
        enabled: !!e
    })
      , {data: a, refetch: l} = Hd({
        queryKey: ["user_subscription", e == null ? void 0 : e.id],
        queryFn: async () => {
            const {data: g, error: y} = await Ye.from("user_subscriptions").select("*, plans(*)").eq("user_id", e.id).eq("is_active", !0).maybeSingle();
            if (y)
                throw t({
                    variant: "destructive",
                    title: "Erro ao buscar assinatura",
                    description: y.message
                }),
                y;
            return g
        }
        ,
        enabled: !!e
    });
    p.useEffect( () => {
        (async () => {
            if (!e)
                return;
            const {data: y, error: m} = await Ye.from("profiles").select("*").eq("id", e.id).single();
            if (m) {
                console.error("Error fetching user profile:", m);
                return
            }
            r(y)
        }
        )()
    }
    , [e]);
    const c = async () => {
        if (!(!e || s)) {
            o(!0);
            try {
                const {data: g, error: y} = await Ye.functions.invoke("verify-subscription");
                if (y) {
                    console.error("Error verifying subscription:", y);
                    return
                }
                (g == null ? void 0 : g.hasActiveSubscription) !== !!a && await l()
            } catch (g) {
                console.error("Subscription verification error:", g)
            } finally {
                o(!1)
            }
        }
    }
    ;
    return p.useEffect( () => {
        if (e) {
            const g = new URLSearchParams(window.location.search)
              , y = g.get("success")
              , m = g.get("canceled");
            (y === "true" || m === "true") && (c(),
            y === "true" ? t({
                title: "Assinatura realizada com sucesso!",
                description: "Você agora tem acesso ilimitado aos recursos do plano PRO."
            }) : m === "true" && t({
                title: "Assinatura cancelada",
                description: "O processo de assinatura foi cancelado.",
                variant: "destructive"
            }),
            window.history.replaceState({}, document.title, window.location.pathname))
        }
    }
    , [e, t, l]),
    {
        plans: i,
        userSubscription: a,
        userProfile: n,
        refetchSubscription: l,
        verifySubscription: c,
        canMakeMoreCalculations: () => {
            if (!e)
                return !1;
            if (a != null && a.plan && a.plan.max_calculations === null || !n)
                return !0;
            const g = i == null ? void 0 : i.find(m => m.price === 0)
              , y = (g == null ? void 0 : g.max_calculations) || 0;
            return (n.calculation_count || 0) < y
        }
        ,
        incrementCalculationCount: async () => {
            if (!e || !n || a != null && a.plan && a.plan.max_calculations === null)
                return;
            const g = (n.calculation_count || 0) + 1
              , {error: y} = await Ye.from("profiles").update({
                calculation_count: g
            }).eq("id", e.id);
            if (y) {
                console.error("Error incrementing calculation count:", y);
                return
            }
            r(m => m ? {
                ...m,
                calculation_count: g
            } : null)
        }
        ,
        calculationsRemaining: n && i ? (((f = i.find(g => g.price === 0)) == null ? void 0 : f.max_calculations) || 0) - (n.calculation_count || 0) : 0
    }
}
;
var yu = "focusScope.autoFocusOnMount"
  , xu = "focusScope.autoFocusOnUnmount"
  , lg = {
    bubbles: !1,
    cancelable: !0
}
  , yR = "FocusScope"
  , iw = p.forwardRef( (e, t) => {
    const {loop: n=!1, trapped: r=!1, onMountAutoFocus: s, onUnmountAutoFocus: o, ...i} = e
      , [a,l] = p.useState(null)
      , c = wt(s)
      , d = wt(o)
      , h = p.useRef(null)
      , f = Ie(t, m => l(m))
      , g = p.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    p.useEffect( () => {
        if (r) {
            let m = function(b) {
                if (g.paused || !a)
                    return;
                const _ = b.target;
                a.contains(_) ? h.current = _ : Bn(h.current, {
                    select: !0
                })
            }
              , w = function(b) {
                if (g.paused || !a)
                    return;
                const _ = b.relatedTarget;
                _ !== null && (a.contains(_) || Bn(h.current, {
                    select: !0
                }))
            }
              , x = function(b) {
                if (document.activeElement === document.body)
                    for (const C of b)
                        C.removedNodes.length > 0 && Bn(a)
            };
            document.addEventListener("focusin", m),
            document.addEventListener("focusout", w);
            const v = new MutationObserver(x);
            return a && v.observe(a, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener("focusin", m),
                document.removeEventListener("focusout", w),
                v.disconnect()
            }
        }
    }
    , [r, a, g.paused]),
    p.useEffect( () => {
        if (a) {
            ug.add(g);
            const m = document.activeElement;
            if (!a.contains(m)) {
                const x = new CustomEvent(yu,lg);
                a.addEventListener(yu, c),
                a.dispatchEvent(x),
                x.defaultPrevented || (xR(CR(aw(a)), {
                    select: !0
                }),
                document.activeElement === m && Bn(a))
            }
            return () => {
                a.removeEventListener(yu, c),
                setTimeout( () => {
                    const x = new CustomEvent(xu,lg);
                    a.addEventListener(xu, d),
                    a.dispatchEvent(x),
                    x.defaultPrevented || Bn(m ?? document.body, {
                        select: !0
                    }),
                    a.removeEventListener(xu, d),
                    ug.remove(g)
                }
                , 0)
            }
        }
    }
    , [a, c, d, g]);
    const y = p.useCallback(m => {
        if (!n && !r || g.paused)
            return;
        const w = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey
          , x = document.activeElement;
        if (w && x) {
            const v = m.currentTarget
              , [b,_] = wR(v);
            b && _ ? !m.shiftKey && x === _ ? (m.preventDefault(),
            n && Bn(b, {
                select: !0
            })) : m.shiftKey && x === b && (m.preventDefault(),
            n && Bn(_, {
                select: !0
            })) : x === v && m.preventDefault()
        }
    }
    , [n, r, g.paused]);
    return u.jsx(ne.div, {
        tabIndex: -1,
        ...i,
        ref: f,
        onKeyDown: y
    })
}
);
iw.displayName = yR;
function xR(e, {select: t=!1}={}) {
    const n = document.activeElement;
    for (const r of e)
        if (Bn(r, {
            select: t
        }),
        document.activeElement !== n)
            return
}
function wR(e) {
    const t = aw(e)
      , n = cg(t, e)
      , r = cg(t.reverse(), e);
    return [n, r]
}
function aw(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const s = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || s ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function cg(e, t) {
    for (const n of e)
        if (!bR(n, {
            upTo: t
        }))
            return n
}
function bR(e, {upTo: t}) {
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e; ) {
        if (t !== void 0 && e === t)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
function _R(e) {
    return e instanceof HTMLInputElement && "select"in e
}
function Bn(e, {select: t=!1}={}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        e !== n && _R(e) && t && e.select()
    }
}
var ug = SR();
function SR() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()),
            e = dg(e, t),
            e.unshift(t)
        },
        remove(t) {
            var n;
            e = dg(e, t),
            (n = e[0]) == null || n.resume()
        }
    }
}
function dg(e, t) {
    const n = [...e]
      , r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1),
    n
}
function CR(e) {
    return e.filter(t => t.tagName !== "A")
}
var wu = 0;
function ER() {
    p.useEffect( () => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? fg()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? fg()),
        wu++,
        () => {
            wu === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()),
            wu--
        }
    }
    , [])
}
function fg() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""),
    e.tabIndex = 0,
    e.style.outline = "none",
    e.style.opacity = "0",
    e.style.position = "fixed",
    e.style.pointerEvents = "none",
    e
}
var an = function() {
    return an = Object.assign || function(t) {
        for (var n, r = 1, s = arguments.length; r < s; r++) {
            n = arguments[r];
            for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
        }
        return t
    }
    ,
    an.apply(this, arguments)
};
function lw(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
            t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
    return n
}
function kR(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, s = t.length, o; r < s; r++)
            (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)),
            o[r] = t[r]);
    return e.concat(o || Array.prototype.slice.call(t))
}
var Ya = "right-scroll-bar-position"
  , Ja = "width-before-scroll-bar"
  , jR = "with-scroll-bars-hidden"
  , PR = "--removed-body-scroll-bar-size";
function bu(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t),
    e
}
function NR(e, t) {
    var n = p.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var s = n.value;
                    s !== r && (n.value = r,
                    n.callback(r, s))
                }
            }
        }
    })[0];
    return n.callback = t,
    n.facade
}
var TR = typeof window < "u" ? p.useLayoutEffect : p.useEffect
  , hg = new WeakMap;
function RR(e, t) {
    var n = NR(null, function(r) {
        return e.forEach(function(s) {
            return bu(s, r)
        })
    });
    return TR(function() {
        var r = hg.get(n);
        if (r) {
            var s = new Set(r)
              , o = new Set(e)
              , i = n.current;
            s.forEach(function(a) {
                o.has(a) || bu(a, null)
            }),
            o.forEach(function(a) {
                s.has(a) || bu(a, i)
            })
        }
        hg.set(n, e)
    }, [e]),
    n
}
function AR(e) {
    return e
}
function OR(e, t) {
    t === void 0 && (t = AR);
    var n = []
      , r = !1
      , s = {
        read: function() {
            if (r)
                throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
        },
        useMedium: function(o) {
            var i = t(o, r);
            return n.push(i),
            function() {
                n = n.filter(function(a) {
                    return a !== i
                })
            }
        },
        assignSyncMedium: function(o) {
            for (r = !0; n.length; ) {
                var i = n;
                n = [],
                i.forEach(o)
            }
            n = {
                push: function(a) {
                    return o(a)
                },
                filter: function() {
                    return n
                }
            }
        },
        assignMedium: function(o) {
            r = !0;
            var i = [];
            if (n.length) {
                var a = n;
                n = [],
                a.forEach(o),
                i = n
            }
            var l = function() {
                var d = i;
                i = [],
                d.forEach(o)
            }
              , c = function() {
                return Promise.resolve().then(l)
            };
            c(),
            n = {
                push: function(d) {
                    i.push(d),
                    c()
                },
                filter: function(d) {
                    return i = i.filter(d),
                    n
                }
            }
        }
    };
    return s
}
function IR(e) {
    e === void 0 && (e = {});
    var t = OR(null);
    return t.options = an({
        async: !0,
        ssr: !1
    }, e),
    t
}
var cw = function(e) {
    var t = e.sideCar
      , n = lw(e, ["sideCar"]);
    if (!t)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r)
        throw new Error("Sidecar medium not found");
    return p.createElement(r, an({}, n))
};
cw.isSideCarExport = !0;
function LR(e, t) {
    return e.useMedium(t),
    cw
}
var uw = IR()
  , _u = function() {}
  , _c = p.forwardRef(function(e, t) {
    var n = p.useRef(null)
      , r = p.useState({
        onScrollCapture: _u,
        onWheelCapture: _u,
        onTouchMoveCapture: _u
    })
      , s = r[0]
      , o = r[1]
      , i = e.forwardProps
      , a = e.children
      , l = e.className
      , c = e.removeScrollBar
      , d = e.enabled
      , h = e.shards
      , f = e.sideCar
      , g = e.noIsolation
      , y = e.inert
      , m = e.allowPinchZoom
      , w = e.as
      , x = w === void 0 ? "div" : w
      , v = e.gapMode
      , b = lw(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , _ = f
      , C = RR([n, t])
      , k = an(an({}, b), s);
    return p.createElement(p.Fragment, null, d && p.createElement(_, {
        sideCar: uw,
        removeScrollBar: c,
        shards: h,
        noIsolation: g,
        inert: y,
        setCallbacks: o,
        allowPinchZoom: !!m,
        lockRef: n,
        gapMode: v
    }), i ? p.cloneElement(p.Children.only(a), an(an({}, k), {
        ref: C
    })) : p.createElement(x, an({}, k, {
        className: l,
        ref: C
    }), a))
});
_c.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
_c.classNames = {
    fullWidth: Ja,
    zeroRight: Ya
};
var MR = function() {
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function DR() {
    if (!document)
        return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = MR();
    return t && e.setAttribute("nonce", t),
    e
}
function $R(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function FR(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var UR = function() {
    var e = 0
      , t = null;
    return {
        add: function(n) {
            e == 0 && (t = DR()) && ($R(t, n),
            FR(t)),
            e++
        },
        remove: function() {
            e--,
            !e && t && (t.parentNode && t.parentNode.removeChild(t),
            t = null)
        }
    }
}
  , zR = function() {
    var e = UR();
    return function(t, n) {
        p.useEffect(function() {
            return e.add(t),
            function() {
                e.remove()
            }
        }, [t && n])
    }
}
  , dw = function() {
    var e = zR()
      , t = function(n) {
        var r = n.styles
          , s = n.dynamic;
        return e(r, s),
        null
    };
    return t
}
  , BR = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , Su = function(e) {
    return parseInt(e || "", 10) || 0
}
  , VR = function(e) {
    var t = window.getComputedStyle(document.body)
      , n = t[e === "padding" ? "paddingLeft" : "marginLeft"]
      , r = t[e === "padding" ? "paddingTop" : "marginTop"]
      , s = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Su(n), Su(r), Su(s)]
}
  , HR = function(e) {
    if (e === void 0 && (e = "margin"),
    typeof window > "u")
        return BR;
    var t = VR(e)
      , n = document.documentElement.clientWidth
      , r = window.innerWidth;
    return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, r - n + t[2] - t[0])
    }
}
  , WR = dw()
  , qs = "data-scroll-locked"
  , qR = function(e, t, n, r) {
    var s = e.left
      , o = e.top
      , i = e.right
      , a = e.gap;
    return n === void 0 && (n = "margin"),
    `
  .`.concat(jR, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(qs, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(o, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Ya, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Ja, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Ya, " .").concat(Ya, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ja, " .").concat(Ja, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(qs, `] {
    `).concat(PR, ": ").concat(a, `px;
  }
`)
}
  , pg = function() {
    var e = parseInt(document.body.getAttribute(qs) || "0", 10);
    return isFinite(e) ? e : 0
}
  , KR = function() {
    p.useEffect(function() {
        return document.body.setAttribute(qs, (pg() + 1).toString()),
        function() {
            var e = pg() - 1;
            e <= 0 ? document.body.removeAttribute(qs) : document.body.setAttribute(qs, e.toString())
        }
    }, [])
}
  , QR = function(e) {
    var t = e.noRelative
      , n = e.noImportant
      , r = e.gapMode
      , s = r === void 0 ? "margin" : r;
    KR();
    var o = p.useMemo(function() {
        return HR(s)
    }, [s]);
    return p.createElement(WR, {
        styles: qR(o, !t, s, n ? "" : "!important")
    })
}
  , nf = !1;
if (typeof window < "u")
    try {
        var Pa = Object.defineProperty({}, "passive", {
            get: function() {
                return nf = !0,
                !0
            }
        });
        window.addEventListener("test", Pa, Pa),
        window.removeEventListener("test", Pa, Pa)
    } catch {
        nf = !1
    }
var vs = nf ? {
    passive: !1
} : !1
  , GR = function(e) {
    return e.tagName === "TEXTAREA"
}
  , fw = function(e, t) {
    if (!(e instanceof Element))
        return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !GR(e) && n[t] === "visible")
}
  , YR = function(e) {
    return fw(e, "overflowY")
}
  , JR = function(e) {
    return fw(e, "overflowX")
}
  , mg = function(e, t) {
    var n = t.ownerDocument
      , r = t;
    do {
        typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
        var s = hw(e, r);
        if (s) {
            var o = pw(e, r)
              , i = o[1]
              , a = o[2];
            if (i > a)
                return !0
        }
        r = r.parentNode
    } while (r && r !== n.body);
    return !1
}
  , XR = function(e) {
    var t = e.scrollTop
      , n = e.scrollHeight
      , r = e.clientHeight;
    return [t, n, r]
}
  , ZR = function(e) {
    var t = e.scrollLeft
      , n = e.scrollWidth
      , r = e.clientWidth;
    return [t, n, r]
}
  , hw = function(e, t) {
    return e === "v" ? YR(t) : JR(t)
}
  , pw = function(e, t) {
    return e === "v" ? XR(t) : ZR(t)
}
  , e2 = function(e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
}
  , t2 = function(e, t, n, r, s) {
    var o = e2(e, window.getComputedStyle(t).direction)
      , i = o * r
      , a = n.target
      , l = t.contains(a)
      , c = !1
      , d = i > 0
      , h = 0
      , f = 0;
    do {
        var g = pw(e, a)
          , y = g[0]
          , m = g[1]
          , w = g[2]
          , x = m - w - o * y;
        (y || x) && hw(e, a) && (h += x,
        f += y),
        a instanceof ShadowRoot ? a = a.host : a = a.parentNode
    } while (!l && a !== document.body || l && (t.contains(a) || t === a));
    return (d && (Math.abs(h) < 1 || !s) || !d && (Math.abs(f) < 1 || !s)) && (c = !0),
    c
}
  , Na = function(e) {
    return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
  , gg = function(e) {
    return [e.deltaX, e.deltaY]
}
  , vg = function(e) {
    return e && "current"in e ? e.current : e
}
  , n2 = function(e, t) {
    return e[0] === t[0] && e[1] === t[1]
}
  , r2 = function(e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
}
  , s2 = 0
  , ys = [];
function o2(e) {
    var t = p.useRef([])
      , n = p.useRef([0, 0])
      , r = p.useRef()
      , s = p.useState(s2++)[0]
      , o = p.useState(dw)[0]
      , i = p.useRef(e);
    p.useEffect(function() {
        i.current = e
    }, [e]),
    p.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(s));
            var m = kR([e.lockRef.current], (e.shards || []).map(vg), !0).filter(Boolean);
            return m.forEach(function(w) {
                return w.classList.add("allow-interactivity-".concat(s))
            }),
            function() {
                document.body.classList.remove("block-interactivity-".concat(s)),
                m.forEach(function(w) {
                    return w.classList.remove("allow-interactivity-".concat(s))
                })
            }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var a = p.useCallback(function(m, w) {
        if ("touches"in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
            return !i.current.allowPinchZoom;
        var x = Na(m), v = n.current, b = "deltaX"in m ? m.deltaX : v[0] - x[0], _ = "deltaY"in m ? m.deltaY : v[1] - x[1], C, k = m.target, E = Math.abs(b) > Math.abs(_) ? "h" : "v";
        if ("touches"in m && E === "h" && k.type === "range")
            return !1;
        var j = mg(E, k);
        if (!j)
            return !0;
        if (j ? C = E : (C = E === "v" ? "h" : "v",
        j = mg(E, k)),
        !j)
            return !1;
        if (!r.current && "changedTouches"in m && (b || _) && (r.current = C),
        !C)
            return !0;
        var R = r.current || C;
        return t2(R, w, m, R === "h" ? b : _, !0)
    }, [])
      , l = p.useCallback(function(m) {
        var w = m;
        if (!(!ys.length || ys[ys.length - 1] !== o)) {
            var x = "deltaY"in w ? gg(w) : Na(w)
              , v = t.current.filter(function(C) {
                return C.name === w.type && (C.target === w.target || w.target === C.shadowParent) && n2(C.delta, x)
            })[0];
            if (v && v.should) {
                w.cancelable && w.preventDefault();
                return
            }
            if (!v) {
                var b = (i.current.shards || []).map(vg).filter(Boolean).filter(function(C) {
                    return C.contains(w.target)
                })
                  , _ = b.length > 0 ? a(w, b[0]) : !i.current.noIsolation;
                _ && w.cancelable && w.preventDefault()
            }
        }
    }, [])
      , c = p.useCallback(function(m, w, x, v) {
        var b = {
            name: m,
            delta: w,
            target: x,
            should: v,
            shadowParent: i2(x)
        };
        t.current.push(b),
        setTimeout(function() {
            t.current = t.current.filter(function(_) {
                return _ !== b
            })
        }, 1)
    }, [])
      , d = p.useCallback(function(m) {
        n.current = Na(m),
        r.current = void 0
    }, [])
      , h = p.useCallback(function(m) {
        c(m.type, gg(m), m.target, a(m, e.lockRef.current))
    }, [])
      , f = p.useCallback(function(m) {
        c(m.type, Na(m), m.target, a(m, e.lockRef.current))
    }, []);
    p.useEffect(function() {
        return ys.push(o),
        e.setCallbacks({
            onScrollCapture: h,
            onWheelCapture: h,
            onTouchMoveCapture: f
        }),
        document.addEventListener("wheel", l, vs),
        document.addEventListener("touchmove", l, vs),
        document.addEventListener("touchstart", d, vs),
        function() {
            ys = ys.filter(function(m) {
                return m !== o
            }),
            document.removeEventListener("wheel", l, vs),
            document.removeEventListener("touchmove", l, vs),
            document.removeEventListener("touchstart", d, vs)
        }
    }, []);
    var g = e.removeScrollBar
      , y = e.inert;
    return p.createElement(p.Fragment, null, y ? p.createElement(o, {
        styles: r2(s)
    }) : null, g ? p.createElement(QR, {
        gapMode: e.gapMode
    }) : null)
}
function i2(e) {
    for (var t = null; e !== null; )
        e instanceof ShadowRoot && (t = e.host,
        e = e.host),
        e = e.parentNode;
    return t
}
const a2 = LR(uw, o2);
var mw = p.forwardRef(function(e, t) {
    return p.createElement(_c, an({}, e, {
        ref: t,
        sideCar: a2
    }))
});
mw.classNames = _c.classNames;
var l2 = function(e) {
    if (typeof document > "u")
        return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
}
  , xs = new WeakMap
  , Ta = new WeakMap
  , Ra = {}
  , Cu = 0
  , gw = function(e) {
    return e && (e.host || gw(e.parentNode))
}
  , c2 = function(e, t) {
    return t.map(function(n) {
        if (e.contains(n))
            return n;
        var r = gw(n);
        return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
        null)
    }).filter(function(n) {
        return !!n
    })
}
  , u2 = function(e, t, n, r) {
    var s = c2(t, Array.isArray(e) ? e : [e]);
    Ra[n] || (Ra[n] = new WeakMap);
    var o = Ra[n]
      , i = []
      , a = new Set
      , l = new Set(s)
      , c = function(h) {
        !h || a.has(h) || (a.add(h),
        c(h.parentNode))
    };
    s.forEach(c);
    var d = function(h) {
        !h || l.has(h) || Array.prototype.forEach.call(h.children, function(f) {
            if (a.has(f))
                d(f);
            else
                try {
                    var g = f.getAttribute(r)
                      , y = g !== null && g !== "false"
                      , m = (xs.get(f) || 0) + 1
                      , w = (o.get(f) || 0) + 1;
                    xs.set(f, m),
                    o.set(f, w),
                    i.push(f),
                    m === 1 && y && Ta.set(f, !0),
                    w === 1 && f.setAttribute(n, "true"),
                    y || f.setAttribute(r, "true")
                } catch (x) {
                    console.error("aria-hidden: cannot operate on ", f, x)
                }
        })
    };
    return d(t),
    a.clear(),
    Cu++,
    function() {
        i.forEach(function(h) {
            var f = xs.get(h) - 1
              , g = o.get(h) - 1;
            xs.set(h, f),
            o.set(h, g),
            f || (Ta.has(h) || h.removeAttribute(r),
            Ta.delete(h)),
            g || h.removeAttribute(n)
        }),
        Cu--,
        Cu || (xs = new WeakMap,
        xs = new WeakMap,
        Ta = new WeakMap,
        Ra = {})
    }
}
  , d2 = function(e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e])
      , s = l2(e);
    return s ? (r.push.apply(r, Array.from(s.querySelectorAll("[aria-live]"))),
    u2(r, s, n, "aria-hidden")) : function() {
        return null
    }
}
  , Oh = "Dialog"
  , [vw,zA] = So(Oh)
  , [f2,Kt] = vw(Oh)
  , yw = e => {
    const {__scopeDialog: t, children: n, open: r, defaultOpen: s, onOpenChange: o, modal: i=!0} = e
      , a = p.useRef(null)
      , l = p.useRef(null)
      , [c=!1,d] = os({
        prop: r,
        defaultProp: s,
        onChange: o
    });
    return u.jsx(f2, {
        scope: t,
        triggerRef: a,
        contentRef: l,
        contentId: qr(),
        titleId: qr(),
        descriptionId: qr(),
        open: c,
        onOpenChange: d,
        onOpenToggle: p.useCallback( () => d(h => !h), [d]),
        modal: i,
        children: n
    })
}
;
yw.displayName = Oh;
var xw = "DialogTrigger"
  , h2 = p.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , s = Kt(xw, n)
      , o = Ie(t, s.triggerRef);
    return u.jsx(ne.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.contentId,
        "data-state": Mh(s.open),
        ...r,
        ref: o,
        onClick: te(e.onClick, s.onOpenToggle)
    })
}
);
h2.displayName = xw;
var Ih = "DialogPortal"
  , [p2,ww] = vw(Ih, {
    forceMount: void 0
})
  , bw = e => {
    const {__scopeDialog: t, forceMount: n, children: r, container: s} = e
      , o = Kt(Ih, t);
    return u.jsx(p2, {
        scope: t,
        forceMount: n,
        children: p.Children.map(r, i => u.jsx(Er, {
            present: n || o.open,
            children: u.jsx(sh, {
                asChild: !0,
                container: s,
                children: i
            })
        }))
    })
}
;
bw.displayName = Ih;
var Ml = "DialogOverlay"
  , _w = p.forwardRef( (e, t) => {
    const n = ww(Ml, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...s} = e
      , o = Kt(Ml, e.__scopeDialog);
    return o.modal ? u.jsx(Er, {
        present: r || o.open,
        children: u.jsx(m2, {
            ...s,
            ref: t
        })
    }) : null
}
);
_w.displayName = Ml;
var m2 = p.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , s = Kt(Ml, n);
    return u.jsx(mw, {
        as: po,
        allowPinchZoom: !0,
        shards: [s.contentRef],
        children: u.jsx(ne.div, {
            "data-state": Mh(s.open),
            ...r,
            ref: t,
            style: {
                pointerEvents: "auto",
                ...r.style
            }
        })
    })
}
)
  , ts = "DialogContent"
  , Sw = p.forwardRef( (e, t) => {
    const n = ww(ts, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...s} = e
      , o = Kt(ts, e.__scopeDialog);
    return u.jsx(Er, {
        present: r || o.open,
        children: o.modal ? u.jsx(g2, {
            ...s,
            ref: t
        }) : u.jsx(v2, {
            ...s,
            ref: t
        })
    })
}
);
Sw.displayName = ts;
var g2 = p.forwardRef( (e, t) => {
    const n = Kt(ts, e.__scopeDialog)
      , r = p.useRef(null)
      , s = Ie(t, n.contentRef, r);
    return p.useEffect( () => {
        const o = r.current;
        if (o)
            return d2(o)
    }
    , []),
    u.jsx(Cw, {
        ...e,
        ref: s,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: te(e.onCloseAutoFocus, o => {
            var i;
            o.preventDefault(),
            (i = n.triggerRef.current) == null || i.focus()
        }
        ),
        onPointerDownOutside: te(e.onPointerDownOutside, o => {
            const i = o.detail.originalEvent
              , a = i.button === 0 && i.ctrlKey === !0;
            (i.button === 2 || a) && o.preventDefault()
        }
        ),
        onFocusOutside: te(e.onFocusOutside, o => o.preventDefault())
    })
}
)
  , v2 = p.forwardRef( (e, t) => {
    const n = Kt(ts, e.__scopeDialog)
      , r = p.useRef(!1)
      , s = p.useRef(!1);
    return u.jsx(Cw, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: o => {
            var i, a;
            (i = e.onCloseAutoFocus) == null || i.call(e, o),
            o.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(),
            o.preventDefault()),
            r.current = !1,
            s.current = !1
        }
        ,
        onInteractOutside: o => {
            var l, c;
            (l = e.onInteractOutside) == null || l.call(e, o),
            o.defaultPrevented || (r.current = !0,
            o.detail.originalEvent.type === "pointerdown" && (s.current = !0));
            const i = o.target;
            ((c = n.triggerRef.current) == null ? void 0 : c.contains(i)) && o.preventDefault(),
            o.detail.originalEvent.type === "focusin" && s.current && o.preventDefault()
        }
    })
}
)
  , Cw = p.forwardRef( (e, t) => {
    const {__scopeDialog: n, trapFocus: r, onOpenAutoFocus: s, onCloseAutoFocus: o, ...i} = e
      , a = Kt(ts, n)
      , l = p.useRef(null)
      , c = Ie(t, l);
    return ER(),
    u.jsxs(u.Fragment, {
        children: [u.jsx(iw, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: s,
            onUnmountAutoFocus: o,
            children: u.jsx(ec, {
                role: "dialog",
                id: a.contentId,
                "aria-describedby": a.descriptionId,
                "aria-labelledby": a.titleId,
                "data-state": Mh(a.open),
                ...i,
                ref: c,
                onDismiss: () => a.onOpenChange(!1)
            })
        }), u.jsxs(u.Fragment, {
            children: [u.jsx(y2, {
                titleId: a.titleId
            }), u.jsx(w2, {
                contentRef: l,
                descriptionId: a.descriptionId
            })]
        })]
    })
}
)
  , Lh = "DialogTitle"
  , Ew = p.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , s = Kt(Lh, n);
    return u.jsx(ne.h2, {
        id: s.titleId,
        ...r,
        ref: t
    })
}
);
Ew.displayName = Lh;
var kw = "DialogDescription"
  , jw = p.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , s = Kt(kw, n);
    return u.jsx(ne.p, {
        id: s.descriptionId,
        ...r,
        ref: t
    })
}
);
jw.displayName = kw;
var Pw = "DialogClose"
  , Nw = p.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , s = Kt(Pw, n);
    return u.jsx(ne.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: te(e.onClick, () => s.onOpenChange(!1))
    })
}
);
Nw.displayName = Pw;
function Mh(e) {
    return e ? "open" : "closed"
}
var Tw = "DialogTitleWarning"
  , [BA,Rw] = yS(Tw, {
    contentName: ts,
    titleName: Lh,
    docsSlug: "dialog"
})
  , y2 = ({titleId: e}) => {
    const t = Rw(Tw)
      , n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return p.useEffect( () => {
        e && (document.getElementById(e) || console.error(n))
    }
    , [n, e]),
    null
}
  , x2 = "DialogDescriptionWarning"
  , w2 = ({contentRef: e, descriptionId: t}) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Rw(x2).contentName}}.`;
    return p.useEffect( () => {
        var o;
        const s = (o = e.current) == null ? void 0 : o.getAttribute("aria-describedby");
        t && s && (document.getElementById(t) || console.warn(r))
    }
    , [r, e, t]),
    null
}
  , b2 = yw
  , _2 = bw
  , Aw = _w
  , Ow = Sw
  , Iw = Ew
  , Lw = jw
  , S2 = Nw;
const C2 = b2
  , E2 = _2
  , Mw = p.forwardRef( ({className: e, ...t}, n) => u.jsx(Aw, {
    ref: n,
    className: se("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
    ...t
}));
Mw.displayName = Aw.displayName;
const Dw = p.forwardRef( ({className: e, children: t, ...n}, r) => u.jsxs(E2, {
    children: [u.jsx(Mw, {}), u.jsxs(Ow, {
        ref: r,
        className: se("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e),
        ...n,
        children: [t, u.jsxs(S2, {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [u.jsx(oc, {
                className: "h-4 w-4"
            }), u.jsx("span", {
                className: "sr-only",
                children: "Close"
            })]
        })]
    })]
}));
Dw.displayName = Ow.displayName;
const $w = ({className: e, ...t}) => u.jsx("div", {
    className: se("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t
});
$w.displayName = "DialogHeader";
const Fw = ({className: e, ...t}) => u.jsx("div", {
    className: se("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
    ...t
});
Fw.displayName = "DialogFooter";
const Uw = p.forwardRef( ({className: e, ...t}, n) => u.jsx(Iw, {
    ref: n,
    className: se("text-lg font-semibold leading-none tracking-tight", e),
    ...t
}));
Uw.displayName = Iw.displayName;
const zw = p.forwardRef( ({className: e, ...t}, n) => u.jsx(Lw, {
    ref: n,
    className: se("text-sm text-muted-foreground", e),
    ...t
}));
zw.displayName = Lw.displayName;
const Bw = ({isOpen: e, onClose: t, onUpgrade: n}) => {
    const {plans: r, refetchSubscription: s} = bc()
      , [o,i] = p.useState(!1)
      , {toast: a} = ss();
    if (!r)
        return null;
    const l = r.find(h => h.price === 0)
      , c = r.find(h => h.price > 0);
    if (!l || !c)
        return null;
    const d = async () => {
        i(!0);
        try {
            const {data: h, error: f} = await Ye.functions.invoke("create-checkout");
            if (f)
                throw new Error(f.message);
            if (h != null && h.url)
                window.location.href = h.url;
            else
                throw new Error("Não foi possível criar a sessão de checkout")
        } catch (h) {
            console.error("Checkout error:", h),
            a({
                variant: "destructive",
                title: "Erro ao processar pagamento",
                description: h instanceof Error ? h.message : "Ocorreu um erro ao processar o pagamento"
            })
        } finally {
            i(!1)
        }
    }
    ;
    return u.jsx(C2, {
        open: e,
        onOpenChange: h => !h && t(),
        children: u.jsxs(Dw, {
            className: "sm:max-w-[600px]",
            children: [u.jsxs($w, {
                children: [u.jsx(Uw, {
                    className: "text-2xl text-center",
                    children: "Atualize para o Plano PRO"
                }), u.jsx(zw, {
                    className: "text-center text-lg",
                    children: "Você atingiu o limite do plano gratuito. Atualize para continuar fazendo cálculos ilimitados."
                })]
            }), u.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6 py-4",
                children: [u.jsxs("div", {
                    className: "border rounded-lg p-4 relative",
                    children: [u.jsx("div", {
                        className: "absolute top-0 right-0 bg-gray-200 text-gray-700 py-1 px-3 text-xs rounded-bl-lg rounded-tr-lg",
                        children: "Atual"
                    }), u.jsx("h3", {
                        className: "text-xl font-bold mb-2",
                        children: l.name
                    }), u.jsxs("div", {
                        className: "text-2xl font-semibold mb-4",
                        children: [rt(l.price), u.jsx("span", {
                            className: "text-sm text-gray-500",
                            children: "/mês"
                        })]
                    }), u.jsx("p", {
                        className: "text-gray-500 mb-4",
                        children: l.description
                    }), u.jsxs("ul", {
                        className: "space-y-2 mb-6",
                        children: [u.jsxs("li", {
                            className: "flex items-center",
                            children: [u.jsx(Ho, {
                                className: "h-5 w-5 text-green-500 mr-2"
                            }), u.jsx("span", {
                                children: "Acesso à calculadora básica"
                            })]
                        }), u.jsxs("li", {
                            className: "flex items-center",
                            children: [u.jsx(Ho, {
                                className: "h-5 w-5 text-green-500 mr-2"
                            }), u.jsxs("span", {
                                children: ["Até ", l.max_calculations, " cálculos salvos"]
                            })]
                        }), u.jsxs("li", {
                            className: "flex items-center",
                            children: [u.jsx(oc, {
                                className: "h-5 w-5 text-red-500 mr-2"
                            }), u.jsx("span", {
                                className: "text-gray-400",
                                children: "Exportação de dados"
                            })]
                        })]
                    }), u.jsx(ve, {
                        variant: "outline",
                        className: "w-full",
                        disabled: !0,
                        children: "Plano Atual"
                    })]
                }), u.jsxs("div", {
                    className: "border border-brand-blue rounded-lg p-4 relative bg-blue-50",
                    children: [u.jsx("div", {
                        className: "absolute top-0 right-0 bg-brand-blue text-white py-1 px-3 text-xs rounded-bl-lg rounded-tr-lg",
                        children: "Recomendado"
                    }), u.jsx("h3", {
                        className: "text-xl font-bold mb-2",
                        children: c.name
                    }), u.jsxs("div", {
                        className: "text-2xl font-semibold mb-4",
                        children: [rt(c.price), u.jsx("span", {
                            className: "text-sm text-gray-500",
                            children: "/mês"
                        })]
                    }), u.jsx("p", {
                        className: "text-gray-500 mb-4",
                        children: c.description
                    }), u.jsxs("ul", {
                        className: "space-y-2 mb-6",
                        children: [u.jsxs("li", {
                            className: "flex items-center",
                            children: [u.jsx(Ho, {
                                className: "h-5 w-5 text-green-500 mr-2"
                            }), u.jsx("span", {
                                children: "Acesso à calculadora avançada"
                            })]
                        }), u.jsxs("li", {
                            className: "flex items-center",
                            children: [u.jsx(Ho, {
                                className: "h-5 w-5 text-green-500 mr-2"
                            }), u.jsx("span", {
                                children: "Cálculos ilimitados"
                            })]
                        }), u.jsxs("li", {
                            className: "flex items-center",
                            children: [u.jsx(Ho, {
                                className: "h-5 w-5 text-green-500 mr-2"
                            }), u.jsx("span", {
                                children: "Exportação de dados"
                            })]
                        })]
                    }), u.jsx(ve, {
                        className: "w-full",
                        onClick: d,
                        disabled: o,
                        children: o ? u.jsxs(u.Fragment, {
                            children: [u.jsx(cC, {
                                className: "mr-2 h-4 w-4 animate-spin"
                            }), "Processando..."]
                        }) : "Assinar Agora"
                    })]
                })]
            }), u.jsx(Fw, {
                className: "flex justify-center",
                children: u.jsx(ve, {
                    variant: "ghost",
                    onClick: t,
                    disabled: o,
                    children: "Voltar"
                })
            })]
        })
    })
}
  , k2 = () => {
    const [e,t] = p.useState("")
      , [n,r] = p.useState(100)
      , [s,o] = p.useState(15)
      , [i,a] = p.useState(10)
      , [l,c] = p.useState(0)
      , [d,h] = p.useState(5)
      , [f,g] = p.useState(200)
      , [y,m] = p.useState(30)
      , [w,x] = p.useState(0)
      , [v,b] = p.useState(0)
      , [_,C] = p.useState(0)
      , [k,E] = p.useState(0)
      , [j,R] = p.useState(0)
      , [A,U] = p.useState(0)
      , [D,H] = p.useState(0)
      , [I,W] = p.useState(!1)
      , {user: z} = as()
      , {saveCalculation: Y} = ow()
      , {canMakeMoreCalculations: P, incrementCalculationCount: O} = bc()
      , {toast: F} = ss()
      , L = To();
    p.useEffect( () => {
        B()
    }
    , [n, s, i, l, d, f, y]);
    const B = () => {
        const {profit: ke, profitMarginPercentage: oe, totalCost: ut, feesAmount: Qt, discountAmount: Gt} = rR(n, s, i, l, d, f)
          , It = sR(n, s, i, l, d, y)
          , ls = It * 1.1;
        x(ke),
        b(oe),
        C(ut),
        E(It),
        R(ls),
        U(Qt),
        H(Gt)
    }
      , J = async () => {
        if (!z) {
            F({
                variant: "destructive",
                title: "Erro ao salvar",
                description: "Você precisa estar logado para salvar cálculos."
            }),
            L("/login");
            return
        }
        if (!e) {
            F({
                variant: "destructive",
                title: "Nome do produto obrigatório",
                description: "Por favor, insira o nome do produto antes de salvar."
            });
            return
        }
        if (!P()) {
            W(!0);
            return
        }
        try {
            await Y.mutateAsync({
                product_name: e,
                cost_price: n,
                freight_cost: s,
                tax_percentage: i,
                discount_percentage: l,
                extra_operational_costs: d,
                selling_price: f,
                desired_margin_percentage: y,
                net_profit: w,
                profit_margin_percentage: v,
                user_id: z.id
            }),
            await O(),
            F({
                title: "Cálculo salvo com sucesso!",
                description: "Seu cálculo foi salvo e está disponível no dashboard."
            })
        } catch (ke) {
            console.error("Failed to save calculation:", ke)
        }
    }
      , de = () => {
        F({
            title: "Funcionalidade em desenvolvimento",
            description: "O processo de pagamento será implementado em breve."
        }),
        W(!1)
    }
    ;
    return u.jsxs(jt, {
        className: "shadow-lg border-none",
        children: [u.jsxs(Pt, {
            className: "p-6",
            children: [u.jsxs("div", {
                className: "flex items-center justify-between mb-6",
                children: [u.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [u.jsx(lh, {
                        className: "h-6 w-6 text-brand-blue"
                    }), u.jsx("h2", {
                        className: "text-xl font-bold text-brand-gray-dark",
                        children: "Calculadora de Precificação"
                    })]
                }), u.jsxs("div", {
                    className: "flex gap-2",
                    children: [u.jsxs(ve, {
                        variant: "outline",
                        size: "sm",
                        className: "hidden md:flex",
                        onClick: J,
                        children: [u.jsx(mm, {
                            className: "h-4 w-4 mr-2"
                        }), "Salvar"]
                    }), u.jsxs(ve, {
                        variant: "outline",
                        size: "sm",
                        className: "hidden md:flex",
                        onClick: () => L("/dashboard"),
                        children: [u.jsx(Sd, {
                            className: "h-4 w-4 mr-2"
                        }), "Dashboard"]
                    })]
                })]
            }), u.jsxs("div", {
                className: "mb-6",
                children: [u.jsx(Ge, {
                    htmlFor: "productName",
                    children: "Nome do Produto"
                }), u.jsx(Qe, {
                    id: "productName",
                    value: e,
                    onChange: ke => t(ke.target.value),
                    placeholder: "Nome do produto...",
                    className: "max-w-md"
                })]
            }), u.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                children: [u.jsx(aR, {
                    productCost: n,
                    setProductCost: r,
                    shippingCost: s,
                    setShippingCost: o,
                    feesPercentage: i,
                    setFeesPercentage: a,
                    discountPercentage: l,
                    setDiscountPercentage: c,
                    operationalCost: d,
                    setOperationalCost: h,
                    sellingPrice: f,
                    setSellingPrice: g,
                    desiredMarginPercentage: y,
                    setDesiredMarginPercentage: m
                }), u.jsx(vR, {
                    profit: w,
                    profitMarginPercentage: v,
                    totalCost: _,
                    minimumSellingPrice: k,
                    recommendedSellingPrice: j,
                    feesAmount: A,
                    discountAmount: D,
                    sellingPrice: f
                })]
            }), u.jsxs("div", {
                className: "mt-6 flex gap-3 md:hidden",
                children: [u.jsxs(ve, {
                    variant: "outline",
                    className: "flex-1",
                    onClick: J,
                    children: [u.jsx(mm, {
                        className: "h-4 w-4 mr-2"
                    }), "Salvar"]
                }), u.jsxs(ve, {
                    variant: "outline",
                    className: "flex-1",
                    onClick: () => L("/dashboard"),
                    children: [u.jsx(Sd, {
                        className: "h-4 w-4 mr-2"
                    }), "Dashboard"]
                })]
            })]
        }), u.jsx(Bw, {
            isOpen: I,
            onClose: () => W(!1),
            onUpgrade: de
        })]
    })
}
  , j2 = () => u.jsxs("div", {
    className: "min-h-screen flex flex-col bg-gray-50",
    children: [u.jsx(Oo, {}), u.jsxs("main", {
        className: "flex-1",
        children: [u.jsx(ZT, {}), u.jsx("div", {
            className: "container mx-auto px-6 py-12",
            children: u.jsx(k2, {})
        }), u.jsx(nR, {})]
    }), u.jsx(Io, {})]
});
function P2(e, t=[]) {
    let n = [];
    function r(o, i) {
        const a = p.createContext(i)
          , l = n.length;
        n = [...n, i];
        function c(h) {
            const {scope: f, children: g, ...y} = h
              , m = (f == null ? void 0 : f[e][l]) || a
              , w = p.useMemo( () => y, Object.values(y));
            return u.jsx(m.Provider, {
                value: w,
                children: g
            })
        }
        function d(h, f) {
            const g = (f == null ? void 0 : f[e][l]) || a
              , y = p.useContext(g);
            if (y)
                return y;
            if (i !== void 0)
                return i;
            throw new Error(`\`${h}\` must be used within \`${o}\``)
        }
        return c.displayName = o + "Provider",
        [c, d]
    }
    const s = () => {
        const o = n.map(i => p.createContext(i));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || o;
            return p.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return s.scopeName = e,
    [r, N2(s, ...t)]
}
function N2(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(s => ({
            useScope: s(),
            scopeName: s.scopeName
        }));
        return function(o) {
            const i = r.reduce( (a, {useScope: l, scopeName: c}) => {
                const h = l(o)[`__scope${c}`];
                return {
                    ...a,
                    ...h
                }
            }
            , {});
            return p.useMemo( () => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var T2 = p.createContext(void 0);
function Dh(e) {
    const t = p.useContext(T2);
    return e || t || "ltr"
}
var Eu = "rovingFocusGroup.onEntryFocus"
  , R2 = {
    bubbles: !1,
    cancelable: !0
}
  , Sc = "RovingFocusGroup"
  , [rf,Vw,A2] = rh(Sc)
  , [O2,Hw] = P2(Sc, [A2])
  , [I2,L2] = O2(Sc)
  , Ww = p.forwardRef( (e, t) => u.jsx(rf.Provider, {
    scope: e.__scopeRovingFocusGroup,
    children: u.jsx(rf.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: u.jsx(M2, {
            ...e,
            ref: t
        })
    })
}));
Ww.displayName = Sc;
var M2 = p.forwardRef( (e, t) => {
    const {__scopeRovingFocusGroup: n, orientation: r, loop: s=!1, dir: o, currentTabStopId: i, defaultCurrentTabStopId: a, onCurrentTabStopIdChange: l, onEntryFocus: c, preventScrollOnEntryFocus: d=!1, ...h} = e
      , f = p.useRef(null)
      , g = Ie(t, f)
      , y = Dh(o)
      , [m=null,w] = os({
        prop: i,
        defaultProp: a,
        onChange: l
    })
      , [x,v] = p.useState(!1)
      , b = wt(c)
      , _ = Vw(n)
      , C = p.useRef(!1)
      , [k,E] = p.useState(0);
    return p.useEffect( () => {
        const j = f.current;
        if (j)
            return j.addEventListener(Eu, b),
            () => j.removeEventListener(Eu, b)
    }
    , [b]),
    u.jsx(I2, {
        scope: n,
        orientation: r,
        dir: y,
        loop: s,
        currentTabStopId: m,
        onItemFocus: p.useCallback(j => w(j), [w]),
        onItemShiftTab: p.useCallback( () => v(!0), []),
        onFocusableItemAdd: p.useCallback( () => E(j => j + 1), []),
        onFocusableItemRemove: p.useCallback( () => E(j => j - 1), []),
        children: u.jsx(ne.div, {
            tabIndex: x || k === 0 ? -1 : 0,
            "data-orientation": r,
            ...h,
            ref: g,
            style: {
                outline: "none",
                ...e.style
            },
            onMouseDown: te(e.onMouseDown, () => {
                C.current = !0
            }
            ),
            onFocus: te(e.onFocus, j => {
                const R = !C.current;
                if (j.target === j.currentTarget && R && !x) {
                    const A = new CustomEvent(Eu,R2);
                    if (j.currentTarget.dispatchEvent(A),
                    !A.defaultPrevented) {
                        const U = _().filter(z => z.focusable)
                          , D = U.find(z => z.active)
                          , H = U.find(z => z.id === m)
                          , W = [D, H, ...U].filter(Boolean).map(z => z.ref.current);
                        Qw(W, d)
                    }
                }
                C.current = !1
            }
            ),
            onBlur: te(e.onBlur, () => v(!1))
        })
    })
}
)
  , qw = "RovingFocusGroupItem"
  , Kw = p.forwardRef( (e, t) => {
    const {__scopeRovingFocusGroup: n, focusable: r=!0, active: s=!1, tabStopId: o, ...i} = e
      , a = qr()
      , l = o || a
      , c = L2(qw, n)
      , d = c.currentTabStopId === l
      , h = Vw(n)
      , {onFocusableItemAdd: f, onFocusableItemRemove: g} = c;
    return p.useEffect( () => {
        if (r)
            return f(),
            () => g()
    }
    , [r, f, g]),
    u.jsx(rf.ItemSlot, {
        scope: n,
        id: l,
        focusable: r,
        active: s,
        children: u.jsx(ne.span, {
            tabIndex: d ? 0 : -1,
            "data-orientation": c.orientation,
            ...i,
            ref: t,
            onMouseDown: te(e.onMouseDown, y => {
                r ? c.onItemFocus(l) : y.preventDefault()
            }
            ),
            onFocus: te(e.onFocus, () => c.onItemFocus(l)),
            onKeyDown: te(e.onKeyDown, y => {
                if (y.key === "Tab" && y.shiftKey) {
                    c.onItemShiftTab();
                    return
                }
                if (y.target !== y.currentTarget)
                    return;
                const m = F2(y, c.orientation, c.dir);
                if (m !== void 0) {
                    if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey)
                        return;
                    y.preventDefault();
                    let x = h().filter(v => v.focusable).map(v => v.ref.current);
                    if (m === "last")
                        x.reverse();
                    else if (m === "prev" || m === "next") {
                        m === "prev" && x.reverse();
                        const v = x.indexOf(y.currentTarget);
                        x = c.loop ? U2(x, v + 1) : x.slice(v + 1)
                    }
                    setTimeout( () => Qw(x))
                }
            }
            )
        })
    })
}
);
Kw.displayName = qw;
var D2 = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};
function $2(e, t) {
    return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e
}
function F2(e, t, n) {
    const r = $2(e.key, n);
    if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
        return D2[r]
}
function Qw(e, t=!1) {
    const n = document.activeElement;
    for (const r of e)
        if (r === n || (r.focus({
            preventScroll: t
        }),
        document.activeElement !== n))
            return
}
function U2(e, t) {
    return e.map( (n, r) => e[(t + r) % e.length])
}
var z2 = Ww
  , B2 = Kw
  , $h = "Tabs"
  , [V2,VA] = So($h, [Hw])
  , Gw = Hw()
  , [H2,Fh] = V2($h)
  , Yw = p.forwardRef( (e, t) => {
    const {__scopeTabs: n, value: r, onValueChange: s, defaultValue: o, orientation: i="horizontal", dir: a, activationMode: l="automatic", ...c} = e
      , d = Dh(a)
      , [h,f] = os({
        prop: r,
        onChange: s,
        defaultProp: o
    });
    return u.jsx(H2, {
        scope: n,
        baseId: qr(),
        value: h,
        onValueChange: f,
        orientation: i,
        dir: d,
        activationMode: l,
        children: u.jsx(ne.div, {
            dir: d,
            "data-orientation": i,
            ...c,
            ref: t
        })
    })
}
);
Yw.displayName = $h;
var Jw = "TabsList"
  , Xw = p.forwardRef( (e, t) => {
    const {__scopeTabs: n, loop: r=!0, ...s} = e
      , o = Fh(Jw, n)
      , i = Gw(n);
    return u.jsx(z2, {
        asChild: !0,
        ...i,
        orientation: o.orientation,
        dir: o.dir,
        loop: r,
        children: u.jsx(ne.div, {
            role: "tablist",
            "aria-orientation": o.orientation,
            ...s,
            ref: t
        })
    })
}
);
Xw.displayName = Jw;
var Zw = "TabsTrigger"
  , eb = p.forwardRef( (e, t) => {
    const {__scopeTabs: n, value: r, disabled: s=!1, ...o} = e
      , i = Fh(Zw, n)
      , a = Gw(n)
      , l = rb(i.baseId, r)
      , c = sb(i.baseId, r)
      , d = r === i.value;
    return u.jsx(B2, {
        asChild: !0,
        ...a,
        focusable: !s,
        active: d,
        children: u.jsx(ne.button, {
            type: "button",
            role: "tab",
            "aria-selected": d,
            "aria-controls": c,
            "data-state": d ? "active" : "inactive",
            "data-disabled": s ? "" : void 0,
            disabled: s,
            id: l,
            ...o,
            ref: t,
            onMouseDown: te(e.onMouseDown, h => {
                !s && h.button === 0 && h.ctrlKey === !1 ? i.onValueChange(r) : h.preventDefault()
            }
            ),
            onKeyDown: te(e.onKeyDown, h => {
                [" ", "Enter"].includes(h.key) && i.onValueChange(r)
            }
            ),
            onFocus: te(e.onFocus, () => {
                const h = i.activationMode !== "manual";
                !d && !s && h && i.onValueChange(r)
            }
            )
        })
    })
}
);
eb.displayName = Zw;
var tb = "TabsContent"
  , nb = p.forwardRef( (e, t) => {
    const {__scopeTabs: n, value: r, forceMount: s, children: o, ...i} = e
      , a = Fh(tb, n)
      , l = rb(a.baseId, r)
      , c = sb(a.baseId, r)
      , d = r === a.value
      , h = p.useRef(d);
    return p.useEffect( () => {
        const f = requestAnimationFrame( () => h.current = !1);
        return () => cancelAnimationFrame(f)
    }
    , []),
    u.jsx(Er, {
        present: s || d,
        children: ({present: f}) => u.jsx(ne.div, {
            "data-state": d ? "active" : "inactive",
            "data-orientation": a.orientation,
            role: "tabpanel",
            "aria-labelledby": l,
            hidden: !f,
            id: c,
            tabIndex: 0,
            ...i,
            ref: t,
            style: {
                ...e.style,
                animationDuration: h.current ? "0s" : void 0
            },
            children: f && o
        })
    })
}
);
nb.displayName = tb;
function rb(e, t) {
    return `${e}-trigger-${t}`
}
function sb(e, t) {
    return `${e}-content-${t}`
}
var W2 = Yw
  , ob = Xw
  , ib = eb
  , ab = nb;
const q2 = W2
  , lb = p.forwardRef( ({className: e, ...t}, n) => u.jsx(ob, {
    ref: n,
    className: se("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", e),
    ...t
}));
lb.displayName = ob.displayName;
const Xa = p.forwardRef( ({className: e, ...t}, n) => u.jsx(ib, {
    ref: n,
    className: se("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", e),
    ...t
}));
Xa.displayName = ib.displayName;
const Za = p.forwardRef( ({className: e, ...t}, n) => u.jsx(ab, {
    ref: n,
    className: se("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", e),
    ...t
}));
Za.displayName = ab.displayName;
const K2 = () => u.jsxs("div", {
    className: "min-h-screen flex flex-col bg-gray-50",
    children: [u.jsx(Oo, {}), u.jsxs("main", {
        className: "flex-1",
        children: [u.jsx("div", {
            className: "bg-gradient-to-r from-blue-50 to-cyan-50 py-12",
            children: u.jsx("div", {
                className: "container mx-auto px-6",
                children: u.jsxs("h1", {
                    className: "text-3xl md:text-4xl font-bold text-brand-gray-dark mb-4 flex items-center",
                    children: [u.jsx(lC, {
                        className: "mr-2 h-8 w-8 text-brand-blue"
                    }), "Sobre o Precifica & Vende Fácil"]
                })
            })
        }), u.jsx("div", {
            className: "container mx-auto px-6 py-12",
            children: u.jsxs(q2, {
                defaultValue: "mission",
                className: "w-full",
                children: [u.jsxs(lb, {
                    className: "grid w-full grid-cols-3",
                    children: [u.jsx(Xa, {
                        value: "mission",
                        children: "Nossa Missão"
                    }), u.jsx(Xa, {
                        value: "story",
                        children: "Nossa História"
                    }), u.jsx(Xa, {
                        value: "team",
                        children: "Nosso Time"
                    })]
                }), u.jsx(Za, {
                    value: "mission",
                    children: u.jsxs(jt, {
                        children: [u.jsxs(hi, {
                            children: [u.jsx(pi, {
                                children: "Nossa Missão"
                            }), u.jsx(Qa, {
                                children: "Ajudando e-commerces a precificar de forma inteligente"
                            })]
                        }), u.jsxs(Pt, {
                            className: "space-y-4",
                            children: [u.jsx("p", {
                                children: "O Precifica & Vende Fácil foi criado com uma missão clara: simplificar o processo de precificação para pequenos e médios e-commerces no Brasil."
                            }), u.jsx("p", {
                                children: "Sabemos que calcular corretamente o preço de venda considerando todas as variáveis (custos, frete, taxas, margem de lucro) pode ser complexo e demorado. Muitos lojistas acabam precificando por instinto, o que frequentemente leva a margens de lucro menores do que o esperado."
                            }), u.jsx("p", {
                                children: "Nossa calculadora oferece uma solução simples e direta para este problema, ajudando você a:"
                            }), u.jsxs("ul", {
                                className: "list-disc pl-6 space-y-2",
                                children: [u.jsx("li", {
                                    children: "Calcular o preço ideal baseado nos seus custos reais"
                                }), u.jsx("li", {
                                    children: "Entender claramente sua margem de lucro"
                                }), u.jsx("li", {
                                    children: "Tomar decisões estratégicas de precificação"
                                }), u.jsx("li", {
                                    children: "Economizar tempo que seria gasto com planilhas complexas"
                                })]
                            })]
                        })]
                    })
                }), u.jsx(Za, {
                    value: "story",
                    children: u.jsxs(jt, {
                        children: [u.jsxs(hi, {
                            children: [u.jsx(pi, {
                                children: "Nossa História"
                            }), u.jsx(Qa, {
                                children: "Como tudo começou"
                            })]
                        }), u.jsxs(Pt, {
                            className: "space-y-4",
                            children: [u.jsx("p", {
                                children: "O Precifica & Vende Fácil nasceu da experiência real de um pequeno lojista que, ao expandir seu negócio para marketplaces, percebeu o quanto era difícil manter o controle sobre margens de lucro considerando todas as taxas envolvidas."
                            }), u.jsx("p", {
                                children: "Após meses usando planilhas complexas e cometendo erros de precificação que resultaram em vendas sem lucro (ou com prejuízo), decidimos criar uma ferramenta simples que resolvesse este problema de uma vez por todas."
                            }), u.jsx("p", {
                                children: "Lançamos a primeira versão em 2023, e desde então estamos constantemente aprimorando nossas funcionalidades com base no feedback de usuários reais - pequenos e médios empreendedores como você."
                            })]
                        })]
                    })
                }), u.jsx(Za, {
                    value: "team",
                    children: u.jsxs(jt, {
                        children: [u.jsxs(hi, {
                            children: [u.jsx(pi, {
                                children: "Nosso Time"
                            }), u.jsx(Qa, {
                                children: "As pessoas por trás da ferramenta"
                            })]
                        }), u.jsxs(Pt, {
                            children: [u.jsx("p", {
                                className: "mb-6",
                                children: "Somos uma pequena equipe de empreendedores, desenvolvedores e ex-lojistas que entende na prática os desafios de gerenciar um e-commerce rentável."
                            }), u.jsxs("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: [u.jsxs("div", {
                                    className: "border rounded-lg p-4 text-center",
                                    children: [u.jsx("div", {
                                        className: "w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center",
                                        children: u.jsx("span", {
                                            className: "text-2xl font-bold text-brand-blue",
                                            children: "MC"
                                        })
                                    }), u.jsx("h3", {
                                        className: "font-medium text-lg",
                                        children: "Marina Costa"
                                    }), u.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children: "Fundadora & CEO"
                                    }), u.jsx("p", {
                                        className: "mt-2 text-sm",
                                        children: "Ex-proprietária de e-commerce com 5 anos de experiência em marketplaces."
                                    })]
                                }), u.jsxs("div", {
                                    className: "border rounded-lg p-4 text-center",
                                    children: [u.jsx("div", {
                                        className: "w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center",
                                        children: u.jsx("span", {
                                            className: "text-2xl font-bold text-green-600",
                                            children: "RL"
                                        })
                                    }), u.jsx("h3", {
                                        className: "font-medium text-lg",
                                        children: "Rafael Lima"
                                    }), u.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children: "Desenvolvedor Chefe"
                                    }), u.jsx("p", {
                                        className: "mt-2 text-sm",
                                        children: "Especialista em desenvolvimento web com foco em ferramentas para e-commerce."
                                    })]
                                }), u.jsxs("div", {
                                    className: "border rounded-lg p-4 text-center",
                                    children: [u.jsx("div", {
                                        className: "w-20 h-20 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center",
                                        children: u.jsx("span", {
                                            className: "text-2xl font-bold text-purple-600",
                                            children: "JS"
                                        })
                                    }), u.jsx("h3", {
                                        className: "font-medium text-lg",
                                        children: "Juliana Santos"
                                    }), u.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children: "Especialista em Precificação"
                                    }), u.jsx("p", {
                                        className: "mt-2 text-sm",
                                        children: "Consultora com mais de 8 anos ajudando empresas a otimizar margens de lucro."
                                    })]
                                })]
                            })]
                        })]
                    })
                })]
            })
        })]
    }), u.jsx(Io, {})]
});
var Uh = "Collapsible"
  , [Q2,cb] = So(Uh)
  , [G2,zh] = Q2(Uh)
  , ub = p.forwardRef( (e, t) => {
    const {__scopeCollapsible: n, open: r, defaultOpen: s, disabled: o, onOpenChange: i, ...a} = e
      , [l=!1,c] = os({
        prop: r,
        defaultProp: s,
        onChange: i
    });
    return u.jsx(G2, {
        scope: n,
        disabled: o,
        contentId: qr(),
        open: l,
        onOpenToggle: p.useCallback( () => c(d => !d), [c]),
        children: u.jsx(ne.div, {
            "data-state": Vh(l),
            "data-disabled": o ? "" : void 0,
            ...a,
            ref: t
        })
    })
}
);
ub.displayName = Uh;
var db = "CollapsibleTrigger"
  , fb = p.forwardRef( (e, t) => {
    const {__scopeCollapsible: n, ...r} = e
      , s = zh(db, n);
    return u.jsx(ne.button, {
        type: "button",
        "aria-controls": s.contentId,
        "aria-expanded": s.open || !1,
        "data-state": Vh(s.open),
        "data-disabled": s.disabled ? "" : void 0,
        disabled: s.disabled,
        ...r,
        ref: t,
        onClick: te(e.onClick, s.onOpenToggle)
    })
}
);
fb.displayName = db;
var Bh = "CollapsibleContent"
  , hb = p.forwardRef( (e, t) => {
    const {forceMount: n, ...r} = e
      , s = zh(Bh, e.__scopeCollapsible);
    return u.jsx(Er, {
        present: n || s.open,
        children: ({present: o}) => u.jsx(Y2, {
            ...r,
            ref: t,
            present: o
        })
    })
}
);
hb.displayName = Bh;
var Y2 = p.forwardRef( (e, t) => {
    const {__scopeCollapsible: n, present: r, children: s, ...o} = e
      , i = zh(Bh, n)
      , [a,l] = p.useState(r)
      , c = p.useRef(null)
      , d = Ie(t, c)
      , h = p.useRef(0)
      , f = h.current
      , g = p.useRef(0)
      , y = g.current
      , m = i.open || a
      , w = p.useRef(m)
      , x = p.useRef();
    return p.useEffect( () => {
        const v = requestAnimationFrame( () => w.current = !1);
        return () => cancelAnimationFrame(v)
    }
    , []),
    jn( () => {
        const v = c.current;
        if (v) {
            x.current = x.current || {
                transitionDuration: v.style.transitionDuration,
                animationName: v.style.animationName
            },
            v.style.transitionDuration = "0s",
            v.style.animationName = "none";
            const b = v.getBoundingClientRect();
            h.current = b.height,
            g.current = b.width,
            w.current || (v.style.transitionDuration = x.current.transitionDuration,
            v.style.animationName = x.current.animationName),
            l(r)
        }
    }
    , [i.open, r]),
    u.jsx(ne.div, {
        "data-state": Vh(i.open),
        "data-disabled": i.disabled ? "" : void 0,
        id: i.contentId,
        hidden: !m,
        ...o,
        ref: d,
        style: {
            "--radix-collapsible-content-height": f ? `${f}px` : void 0,
            "--radix-collapsible-content-width": y ? `${y}px` : void 0,
            ...e.style
        },
        children: m && s
    })
}
);
function Vh(e) {
    return e ? "open" : "closed"
}
var J2 = ub
  , X2 = fb
  , Z2 = hb
  , An = "Accordion"
  , eA = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"]
  , [Hh,tA,nA] = rh(An)
  , [Cc,HA] = So(An, [nA, cb])
  , Wh = cb()
  , pb = N.forwardRef( (e, t) => {
    const {type: n, ...r} = e
      , s = r
      , o = r;
    return u.jsx(Hh.Provider, {
        scope: e.__scopeAccordion,
        children: n === "multiple" ? u.jsx(iA, {
            ...o,
            ref: t
        }) : u.jsx(oA, {
            ...s,
            ref: t
        })
    })
}
);
pb.displayName = An;
var [mb,rA] = Cc(An)
  , [gb,sA] = Cc(An, {
    collapsible: !1
})
  , oA = N.forwardRef( (e, t) => {
    const {value: n, defaultValue: r, onValueChange: s= () => {}
    , collapsible: o=!1, ...i} = e
      , [a,l] = os({
        prop: n,
        defaultProp: r,
        onChange: s
    });
    return u.jsx(mb, {
        scope: e.__scopeAccordion,
        value: a ? [a] : [],
        onItemOpen: l,
        onItemClose: N.useCallback( () => o && l(""), [o, l]),
        children: u.jsx(gb, {
            scope: e.__scopeAccordion,
            collapsible: o,
            children: u.jsx(vb, {
                ...i,
                ref: t
            })
        })
    })
}
)
  , iA = N.forwardRef( (e, t) => {
    const {value: n, defaultValue: r, onValueChange: s= () => {}
    , ...o} = e
      , [i=[],a] = os({
        prop: n,
        defaultProp: r,
        onChange: s
    })
      , l = N.useCallback(d => a( (h=[]) => [...h, d]), [a])
      , c = N.useCallback(d => a( (h=[]) => h.filter(f => f !== d)), [a]);
    return u.jsx(mb, {
        scope: e.__scopeAccordion,
        value: i,
        onItemOpen: l,
        onItemClose: c,
        children: u.jsx(gb, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: u.jsx(vb, {
                ...o,
                ref: t
            })
        })
    })
}
)
  , [aA,Ec] = Cc(An)
  , vb = N.forwardRef( (e, t) => {
    const {__scopeAccordion: n, disabled: r, dir: s, orientation: o="vertical", ...i} = e
      , a = N.useRef(null)
      , l = Ie(a, t)
      , c = tA(n)
      , h = Dh(s) === "ltr"
      , f = te(e.onKeyDown, g => {
        var j;
        if (!eA.includes(g.key))
            return;
        const y = g.target
          , m = c().filter(R => {
            var A;
            return !((A = R.ref.current) != null && A.disabled)
        }
        )
          , w = m.findIndex(R => R.ref.current === y)
          , x = m.length;
        if (w === -1)
            return;
        g.preventDefault();
        let v = w;
        const b = 0
          , _ = x - 1
          , C = () => {
            v = w + 1,
            v > _ && (v = b)
        }
          , k = () => {
            v = w - 1,
            v < b && (v = _)
        }
        ;
        switch (g.key) {
        case "Home":
            v = b;
            break;
        case "End":
            v = _;
            break;
        case "ArrowRight":
            o === "horizontal" && (h ? C() : k());
            break;
        case "ArrowDown":
            o === "vertical" && C();
            break;
        case "ArrowLeft":
            o === "horizontal" && (h ? k() : C());
            break;
        case "ArrowUp":
            o === "vertical" && k();
            break
        }
        const E = v % x;
        (j = m[E].ref.current) == null || j.focus()
    }
    );
    return u.jsx(aA, {
        scope: n,
        disabled: r,
        direction: s,
        orientation: o,
        children: u.jsx(Hh.Slot, {
            scope: n,
            children: u.jsx(ne.div, {
                ...i,
                "data-orientation": o,
                ref: l,
                onKeyDown: r ? void 0 : f
            })
        })
    })
}
)
  , Dl = "AccordionItem"
  , [lA,qh] = Cc(Dl)
  , yb = N.forwardRef( (e, t) => {
    const {__scopeAccordion: n, value: r, ...s} = e
      , o = Ec(Dl, n)
      , i = rA(Dl, n)
      , a = Wh(n)
      , l = qr()
      , c = r && i.value.includes(r) || !1
      , d = o.disabled || e.disabled;
    return u.jsx(lA, {
        scope: n,
        open: c,
        disabled: d,
        triggerId: l,
        children: u.jsx(J2, {
            "data-orientation": o.orientation,
            "data-state": Cb(c),
            ...a,
            ...s,
            ref: t,
            disabled: d,
            open: c,
            onOpenChange: h => {
                h ? i.onItemOpen(r) : i.onItemClose(r)
            }
        })
    })
}
);
yb.displayName = Dl;
var xb = "AccordionHeader"
  , wb = N.forwardRef( (e, t) => {
    const {__scopeAccordion: n, ...r} = e
      , s = Ec(An, n)
      , o = qh(xb, n);
    return u.jsx(ne.h3, {
        "data-orientation": s.orientation,
        "data-state": Cb(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
    })
}
);
wb.displayName = xb;
var sf = "AccordionTrigger"
  , bb = N.forwardRef( (e, t) => {
    const {__scopeAccordion: n, ...r} = e
      , s = Ec(An, n)
      , o = qh(sf, n)
      , i = sA(sf, n)
      , a = Wh(n);
    return u.jsx(Hh.ItemSlot, {
        scope: n,
        children: u.jsx(X2, {
            "aria-disabled": o.open && !i.collapsible || void 0,
            "data-orientation": s.orientation,
            id: o.triggerId,
            ...a,
            ...r,
            ref: t
        })
    })
}
);
bb.displayName = sf;
var _b = "AccordionContent"
  , Sb = N.forwardRef( (e, t) => {
    const {__scopeAccordion: n, ...r} = e
      , s = Ec(An, n)
      , o = qh(_b, n)
      , i = Wh(n);
    return u.jsx(Z2, {
        role: "region",
        "aria-labelledby": o.triggerId,
        "data-orientation": s.orientation,
        ...i,
        ...r,
        ref: t,
        style: {
            "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
            "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
            ...e.style
        }
    })
}
);
Sb.displayName = _b;
function Cb(e) {
    return e ? "open" : "closed"
}
var cA = pb
  , uA = yb
  , dA = wb
  , Eb = bb
  , kb = Sb;
const fA = cA
  , bs = p.forwardRef( ({className: e, ...t}, n) => u.jsx(uA, {
    ref: n,
    className: se("border-b", e),
    ...t
}));
bs.displayName = "AccordionItem";
const _s = p.forwardRef( ({className: e, children: t, ...n}, r) => u.jsx(dA, {
    className: "flex",
    children: u.jsxs(Eb, {
        ref: r,
        className: se("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", e),
        ...n,
        children: [t, u.jsx(oC, {
            className: "h-4 w-4 shrink-0 transition-transform duration-200"
        })]
    })
}));
_s.displayName = Eb.displayName;
const Ss = p.forwardRef( ({className: e, children: t, ...n}, r) => u.jsx(kb, {
    ref: r,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: u.jsx("div", {
        className: se("pb-4 pt-0", e),
        children: t
    })
}));
Ss.displayName = kb.displayName;
const hA = () => u.jsxs("div", {
    className: "min-h-screen flex flex-col bg-gray-50",
    children: [u.jsx(Oo, {}), u.jsxs("main", {
        className: "flex-1",
        children: [u.jsx("div", {
            className: "bg-gradient-to-r from-blue-50 to-cyan-50 py-12",
            children: u.jsxs("div", {
                className: "container mx-auto px-6",
                children: [u.jsxs("h1", {
                    className: "text-3xl md:text-4xl font-bold text-brand-gray-dark mb-4 flex items-center",
                    children: [u.jsx(iC, {
                        className: "mr-2 h-8 w-8 text-brand-blue"
                    }), "Como Usar Nossa Calculadora"]
                }), u.jsx("p", {
                    className: "text-lg text-brand-gray-dark",
                    children: "Um guia passo a passo para calcular o preço ideal para seus produtos"
                })]
            })
        }), u.jsx("div", {
            className: "container mx-auto px-6 py-12",
            children: u.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                children: [u.jsxs("div", {
                    className: "lg:col-span-2",
                    children: [u.jsx("h2", {
                        className: "text-2xl font-bold mb-6",
                        children: "Guia Passo a Passo"
                    }), u.jsxs("div", {
                        className: "space-y-8",
                        children: [u.jsx(jt, {
                            className: "overflow-hidden",
                            children: u.jsxs(Pt, {
                                className: "p-0",
                                children: [u.jsxs("div", {
                                    className: "bg-blue-50 p-4 border-b flex items-center",
                                    children: [u.jsx("div", {
                                        className: "w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold mr-4",
                                        children: "1"
                                    }), u.jsx("h3", {
                                        className: "font-medium text-lg",
                                        children: "Insira o custo do produto"
                                    })]
                                }), u.jsxs("div", {
                                    className: "p-6 space-y-4",
                                    children: [u.jsx("p", {
                                        children: "Comece inserindo o valor que você paga pelo produto (custo de aquisição ou fabricação)."
                                    }), u.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children: "Dica: Se você fabrica o produto, lembre-se de considerar o custo de matéria-prima, mão de obra e outros custos diretos."
                                    }), u.jsx("img", {
                                        src: "https://placehold.co/600x200",
                                        alt: "Exemplo de inserção de custo",
                                        className: "rounded-md border"
                                    })]
                                })]
                            })
                        }), u.jsx(jt, {
                            className: "overflow-hidden",
                            children: u.jsxs(Pt, {
                                className: "p-0",
                                children: [u.jsxs("div", {
                                    className: "bg-blue-50 p-4 border-b flex items-center",
                                    children: [u.jsx("div", {
                                        className: "w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold mr-4",
                                        children: "2"
                                    }), u.jsx("h3", {
                                        className: "font-medium text-lg",
                                        children: "Adicione o valor do frete"
                                    })]
                                }), u.jsxs("div", {
                                    className: "p-6 space-y-4",
                                    children: [u.jsx("p", {
                                        children: "Adicione o valor médio do frete para enviar este produto ao seu cliente."
                                    }), u.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children: "Dica: Se você oferece frete grátis, não ignore este custo! Adicione o valor que você paga em média para enviar o produto."
                                    })]
                                })]
                            })
                        }), u.jsx(jt, {
                            className: "overflow-hidden",
                            children: u.jsxs(Pt, {
                                className: "p-0",
                                children: [u.jsxs("div", {
                                    className: "bg-blue-50 p-4 border-b flex items-center",
                                    children: [u.jsx("div", {
                                        className: "w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold mr-4",
                                        children: "3"
                                    }), u.jsx("h3", {
                                        className: "font-medium text-lg",
                                        children: "Informe as taxas"
                                    })]
                                }), u.jsxs("div", {
                                    className: "p-6 space-y-4",
                                    children: [u.jsx("p", {
                                        children: "Insira as taxas que incidem sobre a venda, como:"
                                    }), u.jsxs("ul", {
                                        className: "list-disc pl-6 space-y-1",
                                        children: [u.jsx("li", {
                                            children: "Taxa do marketplace (Mercado Livre, Shopee, etc.)"
                                        }), u.jsx("li", {
                                            children: "Taxa do gateway de pagamento"
                                        }), u.jsx("li", {
                                            children: "Impostos"
                                        })]
                                    }), u.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children: "Dica: As taxas devem ser inseridas em porcentagem (ex: 12% para Mercado Livre, 2.99% para PayPal)"
                                    })]
                                })]
                            })
                        }), u.jsx(jt, {
                            className: "overflow-hidden",
                            children: u.jsxs(Pt, {
                                className: "p-0",
                                children: [u.jsxs("div", {
                                    className: "bg-blue-50 p-4 border-b flex items-center",
                                    children: [u.jsx("div", {
                                        className: "w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold mr-4",
                                        children: "4"
                                    }), u.jsx("h3", {
                                        className: "font-medium text-lg",
                                        children: "Adicione custos operacionais extras"
                                    })]
                                }), u.jsx("div", {
                                    className: "p-6 space-y-4",
                                    children: u.jsx("p", {
                                        children: "Considere custos adicionais como embalagem, etiquetas, ou qualquer outro custo operacional relacionado ao produto."
                                    })
                                })]
                            })
                        }), u.jsx(jt, {
                            className: "overflow-hidden",
                            children: u.jsxs(Pt, {
                                className: "p-0",
                                children: [u.jsxs("div", {
                                    className: "bg-blue-50 p-4 border-b flex items-center",
                                    children: [u.jsx("div", {
                                        className: "w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold mr-4",
                                        children: "5"
                                    }), u.jsx("h3", {
                                        className: "font-medium text-lg",
                                        children: "Defina sua margem de lucro desejada"
                                    })]
                                }), u.jsxs("div", {
                                    className: "p-6 space-y-4",
                                    children: [u.jsx("p", {
                                        children: "Especifique qual margem de lucro você deseja ter com este produto."
                                    }), u.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children: "Dica: Uma margem saudável geralmente fica entre 30% e 50%, dependendo do seu segmento."
                                    })]
                                })]
                            })
                        }), u.jsx(jt, {
                            className: "overflow-hidden",
                            children: u.jsxs(Pt, {
                                className: "p-0",
                                children: [u.jsxs("div", {
                                    className: "bg-blue-50 p-4 border-b flex items-center",
                                    children: [u.jsx("div", {
                                        className: "w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold mr-4",
                                        children: "6"
                                    }), u.jsx("h3", {
                                        className: "font-medium text-lg",
                                        children: "Avalie e ajuste o preço final"
                                    })]
                                }), u.jsx("div", {
                                    className: "p-6 space-y-4",
                                    children: u.jsx("p", {
                                        children: "Revise o preço sugerido e faça ajustes se necessário, considerando o valor de mercado e a concorrência."
                                    })
                                })]
                            })
                        })]
                    })]
                }), u.jsxs("div", {
                    className: "lg:col-span-1",
                    children: [u.jsx("h2", {
                        className: "text-2xl font-bold mb-6",
                        children: "Perguntas Frequentes"
                    }), u.jsxs(fA, {
                        type: "single",
                        collapsible: !0,
                        className: "w-full",
                        children: [u.jsxs(bs, {
                            value: "item-1",
                            children: [u.jsx(_s, {
                                children: "Como calcular o frete médio?"
                            }), u.jsx(Ss, {
                                children: "Para calcular o frete médio, você pode analisar seus últimos 20-30 pedidos e fazer uma média dos valores. Outra opção é usar simuladores dos Correios ou transportadoras para as regiões mais comuns de entrega."
                            })]
                        }), u.jsxs(bs, {
                            value: "item-2",
                            children: [u.jsx(_s, {
                                children: "Como sei qual margem de lucro devo aplicar?"
                            }), u.jsx(Ss, {
                                children: "A margem ideal varia por segmento. Para produtos de alto giro, margens entre 20-30% podem ser adequadas. Para produtos exclusivos ou de nicho, margens de 40-60% são mais comuns. Pesquise qual é a média do seu segmento."
                            })]
                        }), u.jsxs(bs, {
                            value: "item-3",
                            children: [u.jsx(_s, {
                                children: "Por que o preço final é maior do que eu esperava?"
                            }), u.jsx(Ss, {
                                children: "Muitos lojistas subestimam o impacto das taxas combinadas. Por exemplo, 13% de marketplace + 5% de gateway de pagamento + frete grátis podem reduzir significativamente a margem de lucro se não forem corretamente calculados no preço de venda."
                            })]
                        }), u.jsxs(bs, {
                            value: "item-4",
                            children: [u.jsx(_s, {
                                children: "Devo incluir todos os custos operacionais?"
                            }), u.jsx(Ss, {
                                children: "Sim, é importante incluir todos os custos relacionados ao produto, mesmo os pequenos, como embalagem, etiquetas e tempo operacional. Custos fixos como aluguel podem ser diluídos entre o volume total de produtos."
                            })]
                        }), u.jsxs(bs, {
                            value: "item-5",
                            children: [u.jsx(_s, {
                                children: "Como competir se o preço calculado ficar acima do mercado?"
                            }), u.jsx(Ss, {
                                children: "Se o preço calculado for muito acima da concorrência, considere: 1) Renegociar custos com fornecedores; 2) Simplificar embalagens; 3) Buscar alternativas de frete mais acessíveis; 4) Aceitar uma margem menor, mas compensar no volume de vendas."
                            })]
                        })]
                    })]
                })]
            })
        })]
    }), u.jsx(Io, {})]
})
  , pA = () => {
    const e = fn();
    return p.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    u.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-100",
        children: u.jsxs("div", {
            className: "text-center",
            children: [u.jsx("h1", {
                className: "text-4xl font-bold mb-4",
                children: "404"
            }), u.jsx("p", {
                className: "text-xl text-gray-600 mb-4",
                children: "Oops! Page not found"
            }), u.jsx("a", {
                href: "/",
                className: "text-blue-500 hover:text-blue-700 underline",
                children: "Return to Home"
            })]
        })
    })
}
  , mA = () => {
    var g, y;
    const [e,t] = p.useState("")
      , [n,r] = p.useState("")
      , [s,o] = p.useState("")
      , [i,a] = p.useState(!1)
      , {signIn: l} = as()
      , c = To()
      , h = ((y = (g = fn().state) == null ? void 0 : g.from) == null ? void 0 : y.pathname) || "/"
      , f = async m => {
        m.preventDefault(),
        o(""),
        a(!0);
        try {
            await l(e, n),
            c(h, {
                replace: !0
            })
        } catch (w) {
            o(w.message || "Falha no login. Verifique suas credenciais.")
        } finally {
            a(!1)
        }
    }
    ;
    return u.jsxs("div", {
        className: "min-h-screen flex flex-col bg-gray-50",
        children: [u.jsx(Oo, {}), u.jsx("main", {
            className: "flex-1 flex items-center justify-center px-4 py-12",
            children: u.jsx("div", {
                className: "w-full max-w-md",
                children: u.jsxs("div", {
                    className: "bg-white rounded-lg shadow-md p-8",
                    children: [u.jsx("h1", {
                        className: "text-2xl font-bold text-center mb-6",
                        children: "Entrar na sua conta"
                    }), s && u.jsx("div", {
                        className: "bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded mb-4",
                        children: s
                    }), u.jsxs("form", {
                        onSubmit: f,
                        className: "space-y-4",
                        children: [u.jsxs("div", {
                            className: "space-y-2",
                            children: [u.jsx(Ge, {
                                htmlFor: "email",
                                children: "E-mail"
                            }), u.jsx(Qe, {
                                id: "email",
                                type: "email",
                                value: e,
                                onChange: m => t(m.target.value),
                                placeholder: "seu@email.com",
                                required: !0
                            })]
                        }), u.jsxs("div", {
                            className: "space-y-2",
                            children: [u.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [u.jsx(Ge, {
                                    htmlFor: "password",
                                    children: "Senha"
                                }), u.jsx(Be, {
                                    to: "/forgot-password",
                                    className: "text-sm text-brand-blue hover:underline",
                                    children: "Esqueceu a senha?"
                                })]
                            }), u.jsx(Qe, {
                                id: "password",
                                type: "password",
                                value: n,
                                onChange: m => r(m.target.value),
                                placeholder: "********",
                                required: !0
                            })]
                        }), u.jsx(ve, {
                            type: "submit",
                            className: "w-full bg-brand-blue hover:bg-blue-600",
                            disabled: i,
                            children: i ? "Entrando..." : "Entrar"
                        })]
                    }), u.jsx("div", {
                        className: "mt-6 text-center",
                        children: u.jsxs("p", {
                            className: "text-sm text-gray-600",
                            children: ["Não tem uma conta?", " ", u.jsx(Be, {
                                to: "/signup",
                                className: "text-brand-blue hover:underline font-medium",
                                children: "Cadastre-se"
                            })]
                        })
                    })]
                })
            })
        }), u.jsx(Io, {})]
    })
}
  , gA = () => {
    const [e,t] = p.useState("")
      , [n,r] = p.useState("")
      , [s,o] = p.useState("")
      , [i,a] = p.useState("")
      , [l,c] = p.useState("")
      , [d,h] = p.useState(!1)
      , {signUp: f} = as()
      , g = To()
      , y = () => s.length < 6 ? (c("A senha deve ter pelo menos 6 caracteres"),
    !1) : s !== i ? (c("As senhas não coincidem"),
    !1) : !0
      , m = async w => {
        if (w.preventDefault(),
        c(""),
        !!y()) {
            h(!0);
            try {
                await f(n, s, e),
                g("/login", {
                    replace: !0
                })
            } catch (x) {
                c(x.message || "Falha no cadastro. Tente novamente.")
            } finally {
                h(!1)
            }
        }
    }
    ;
    return u.jsxs("div", {
        className: "min-h-screen flex flex-col bg-gray-50",
        children: [u.jsx(Oo, {}), u.jsx("main", {
            className: "flex-1 flex items-center justify-center px-4 py-12",
            children: u.jsx("div", {
                className: "w-full max-w-md",
                children: u.jsxs("div", {
                    className: "bg-white rounded-lg shadow-md p-8",
                    children: [u.jsx("h1", {
                        className: "text-2xl font-bold text-center mb-6",
                        children: "Criar uma conta"
                    }), l && u.jsx("div", {
                        className: "bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded mb-4",
                        children: l
                    }), u.jsxs("form", {
                        onSubmit: m,
                        className: "space-y-4",
                        children: [u.jsxs("div", {
                            className: "space-y-2",
                            children: [u.jsx(Ge, {
                                htmlFor: "name",
                                children: "Nome"
                            }), u.jsx(Qe, {
                                id: "name",
                                type: "text",
                                value: e,
                                onChange: w => t(w.target.value),
                                placeholder: "Seu nome completo",
                                required: !0
                            })]
                        }), u.jsxs("div", {
                            className: "space-y-2",
                            children: [u.jsx(Ge, {
                                htmlFor: "email",
                                children: "E-mail"
                            }), u.jsx(Qe, {
                                id: "email",
                                type: "email",
                                value: n,
                                onChange: w => r(w.target.value),
                                placeholder: "seu@email.com",
                                required: !0
                            })]
                        }), u.jsxs("div", {
                            className: "space-y-2",
                            children: [u.jsx(Ge, {
                                htmlFor: "password",
                                children: "Senha"
                            }), u.jsx(Qe, {
                                id: "password",
                                type: "password",
                                value: s,
                                onChange: w => o(w.target.value),
                                placeholder: "********",
                                required: !0
                            }), u.jsx("p", {
                                className: "text-xs text-gray-500",
                                children: "Mínimo de 6 caracteres"
                            })]
                        }), u.jsxs("div", {
                            className: "space-y-2",
                            children: [u.jsx(Ge, {
                                htmlFor: "confirmPassword",
                                children: "Confirmar Senha"
                            }), u.jsx(Qe, {
                                id: "confirmPassword",
                                type: "password",
                                value: i,
                                onChange: w => a(w.target.value),
                                placeholder: "********",
                                required: !0
                            })]
                        }), u.jsx(ve, {
                            type: "submit",
                            className: "w-full bg-brand-blue hover:bg-blue-600",
                            disabled: d,
                            children: d ? "Cadastrando..." : "Criar Conta"
                        })]
                    }), u.jsx("div", {
                        className: "mt-6 text-center",
                        children: u.jsxs("p", {
                            className: "text-sm text-gray-600",
                            children: ["Já tem uma conta?", " ", u.jsx(Be, {
                                to: "/login",
                                className: "text-brand-blue hover:underline font-medium",
                                children: "Faça login"
                            })]
                        })
                    })]
                })
            })
        }), u.jsx(Io, {})]
    })
}
  , vA = sc("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", {
    variants: {
        variant: {
            default: "bg-background text-foreground",
            destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , of = p.forwardRef( ({className: e, variant: t, ...n}, r) => u.jsx("div", {
    ref: r,
    role: "alert",
    className: se(vA({
        variant: t
    }), e),
    ...n
}));
of.displayName = "Alert";
const af = p.forwardRef( ({className: e, ...t}, n) => u.jsx("h5", {
    ref: n,
    className: se("mb-1 font-medium leading-none tracking-tight", e),
    ...t
}));
af.displayName = "AlertTitle";
const lf = p.forwardRef( ({className: e, ...t}, n) => u.jsx("div", {
    ref: n,
    className: se("text-sm [&_p]:leading-relaxed", e),
    ...t
}));
lf.displayName = "AlertDescription";
const yA = ({onUpgradeClick: e}) => {
    var g, y;
    const {plans: t, userSubscription: n, userProfile: r, calculationsRemaining: s, verifySubscription: o} = bc();
    if (p.useEffect( () => {
        o();
        const m = setInterval( () => {
            o()
        }
        , 5 * 60 * 1e3);
        return () => clearInterval(m)
    }
    , [o]),
    !t || !r)
        return u.jsx("div", {
            className: "h-32 flex items-center justify-center",
            children: u.jsx("div", {
                className: "animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"
            })
        });
    const i = t.find(m => m.price === 0);
    if ((n == null ? void 0 : n.plan) && n.plan.max_calculations === null && n)
        return u.jsxs("div", {
            className: "bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200",
            children: [u.jsxs("div", {
                className: "flex items-center justify-between mb-4",
                children: [u.jsxs("div", {
                    children: [u.jsxs("h3", {
                        className: "text-xl font-bold text-brand-gray-dark flex items-center gap-2",
                        children: [u.jsx(x0, {
                            className: "h-5 w-5 text-brand-blue"
                        }), "Plano ", (g = n.plan) == null ? void 0 : g.name]
                    }), u.jsxs("p", {
                        className: "text-gray-500",
                        children: [rt(((y = n.plan) == null ? void 0 : y.price) || 0), "/mês"]
                    })]
                }), u.jsx("div", {
                    className: "bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium",
                    children: "Ativo"
                })]
            }), u.jsx("p", {
                className: "mb-4",
                children: "Você tem acesso a recursos ilimitados!"
            }), n.end_date && u.jsxs("p", {
                className: "text-sm text-gray-500",
                children: ["Próxima renovação: ", new Date(n.end_date).toLocaleDateString("pt-BR")]
            })]
        });
    const l = (i == null ? void 0 : i.max_calculations) || 0
      , c = r.calculation_count || 0
      , d = Math.min(Math.floor(c / l * 100), 100)
      , h = c >= l;
    let f = "bg-blue-500";
    return d > 75 && (f = "bg-amber-500"),
    d >= 100 && (f = "bg-red-500"),
    u.jsxs("div", {
        className: "bg-white rounded-lg p-6 border",
        children: [u.jsx("div", {
            className: "flex items-center justify-between mb-4",
            children: u.jsxs("div", {
                children: [u.jsx("h3", {
                    className: "text-xl font-bold text-brand-gray-dark",
                    children: "Plano Gratuito"
                }), u.jsxs("p", {
                    className: "text-gray-500",
                    children: ["Limitado a ", l, " cálculos"]
                })]
            })
        }), u.jsxs("div", {
            className: "mb-2 flex justify-between text-sm",
            children: [u.jsx("span", {
                children: "Cálculos utilizados"
            }), u.jsxs("span", {
                className: "font-medium",
                children: [c, "/", l]
            })]
        }), u.jsx(Ah, {
            value: d,
            className: "h-2 mb-4",
            indicatorColor: f
        }), h ? u.jsxs(of, {
            variant: "destructive",
            className: "mt-4 mb-4",
            children: [u.jsx(gm, {
                className: "h-4 w-4"
            }), u.jsx(af, {
                children: "Limite atingido"
            }), u.jsx(lf, {
                children: "Você atingiu o limite de cálculos do plano gratuito."
            })]
        }) : s <= 1 ? u.jsxs(of, {
            className: "mt-4 mb-4 bg-amber-50 text-amber-900 border-amber-200",
            children: [u.jsx(gm, {
                className: "h-4 w-4 text-amber-500"
            }), u.jsx(af, {
                children: "Quase lá!"
            }), u.jsx(lf, {
                children: s === 1 ? u.jsx(u.Fragment, {
                    children: "Você tem apenas 1 cálculo restante."
                }) : u.jsx(u.Fragment, {
                    children: "Você está sem cálculos disponíveis."
                })
            })]
        }) : null, u.jsx(ve, {
            onClick: e,
            className: "w-full",
            children: "Upgrade para PRO"
        })]
    })
}
  , xA = () => {
    const {calculations: e, fetchingCalculations: t, deleteCalculation: n} = ow()
      , [r,s] = p.useState(null)
      , [o,i] = p.useState(!1);
    ss(),
    fn();
    const {verifySubscription: a} = bc();
    p.useEffect( () => {
        a()
    }
    , [a]);
    const l = async f => {
        s(f),
        await n.mutateAsync(f),
        s(null)
    }
      , c = () => {
        i(!0)
    }
      , d = () => {
        i(!1)
    }
      , h = () => {
        if (!e || e.length === 0)
            return;
        const y = [["Nome do Produto", "Custo do Produto", "Frete", "Taxa %", "Desconto %", "Custos Operacionais", "Preço de Venda", "Margem Desejada %", "Lucro Líquido", "Margem de Lucro %", "Data de Criação"].join(","), ...e.map(v => [`"${v.product_name}"`, v.cost_price, v.freight_cost, v.tax_percentage, v.discount_percentage, v.extra_operational_costs, v.selling_price, v.desired_margin_percentage, v.net_profit, v.profit_margin_percentage, new Date(v.created_at).toLocaleDateString("pt-BR")].join(","))].join(`\r
`)
          , m = new Blob([y],{
            type: "text/csv;charset=utf-8;"
        })
          , w = document.createElement("a")
          , x = URL.createObjectURL(m);
        w.setAttribute("href", x),
        w.setAttribute("download", `calculos_${new Date().toISOString().split("T")[0]}.csv`),
        w.style.visibility = "hidden",
        document.body.appendChild(w),
        w.click(),
        document.body.removeChild(w)
    }
    ;
    return u.jsxs("div", {
        className: "min-h-screen flex flex-col bg-gray-50",
        children: [u.jsx(Oo, {}), u.jsx("main", {
            className: "flex-1 container mx-auto px-4 py-8",
            children: u.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8",
                children: [u.jsxs("div", {
                    className: "lg:col-span-2",
                    children: [u.jsxs("div", {
                        className: "flex justify-between items-center mb-6",
                        children: [u.jsx("h1", {
                            className: "text-2xl font-bold",
                            children: "Meus Cálculos"
                        }), u.jsxs("div", {
                            className: "flex gap-2",
                            children: [u.jsxs(ve, {
                                onClick: h,
                                variant: "outline",
                                disabled: !e || e.length === 0,
                                children: [u.jsx(Sd, {
                                    className: "h-4 w-4 mr-2"
                                }), "Exportar"]
                            }), u.jsx(Be, {
                                to: "/",
                                children: u.jsxs(ve, {
                                    children: [u.jsx(pm, {
                                        className: "h-4 w-4 mr-2"
                                    }), "Novo Cálculo"]
                                })
                            })]
                        })]
                    }), t ? u.jsx("div", {
                        className: "flex justify-center py-8",
                        children: u.jsx("div", {
                            className: "animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"
                        })
                    }) : e && e.length > 0 ? u.jsx("div", {
                        className: "bg-white rounded-lg shadow overflow-hidden",
                        children: u.jsx("div", {
                            className: "overflow-x-auto",
                            children: u.jsxs("table", {
                                className: "w-full",
                                children: [u.jsx("thead", {
                                    className: "bg-gray-50",
                                    children: u.jsxs("tr", {
                                        children: [u.jsx("th", {
                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                            children: "Produto"
                                        }), u.jsx("th", {
                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                            children: "Custo"
                                        }), u.jsx("th", {
                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                            children: "Preço de Venda"
                                        }), u.jsx("th", {
                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                            children: "Lucro"
                                        }), u.jsx("th", {
                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                            children: "Margem"
                                        }), u.jsx("th", {
                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                            children: "Data"
                                        }), u.jsx("th", {
                                            className: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
                                            children: "Ações"
                                        })]
                                    })
                                }), u.jsx("tbody", {
                                    className: "bg-white divide-y divide-gray-200",
                                    children: e.map(f => u.jsxs("tr", {
                                        className: "hover:bg-gray-50",
                                        children: [u.jsx("td", {
                                            className: "px-6 py-4 whitespace-nowrap",
                                            children: u.jsx("div", {
                                                className: "font-medium text-gray-900",
                                                children: f.product_name
                                            })
                                        }), u.jsx("td", {
                                            className: "px-6 py-4 whitespace-nowrap",
                                            children: rt(f.cost_price)
                                        }), u.jsx("td", {
                                            className: "px-6 py-4 whitespace-nowrap",
                                            children: rt(f.selling_price)
                                        }), u.jsx("td", {
                                            className: "px-6 py-4 whitespace-nowrap",
                                            children: u.jsx("span", {
                                                className: f.net_profit >= 0 ? "text-green-600" : "text-red-600",
                                                children: rt(f.net_profit)
                                            })
                                        }), u.jsx("td", {
                                            className: "px-6 py-4 whitespace-nowrap",
                                            children: u.jsx("span", {
                                                className: f.profit_margin_percentage >= 0 ? "text-green-600" : "text-red-600",
                                                children: Ga(f.profit_margin_percentage)
                                            })
                                        }), u.jsx("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                            children: new Date(f.created_at).toLocaleDateString("pt-BR")
                                        }), u.jsx("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium",
                                            children: u.jsxs("div", {
                                                className: "flex justify-end gap-2",
                                                children: [u.jsx(Be, {
                                                    to: `/edit/${f.id}`,
                                                    children: u.jsx(ve, {
                                                        variant: "ghost",
                                                        size: "sm",
                                                        children: u.jsx(aC, {
                                                            className: "h-4 w-4"
                                                        })
                                                    })
                                                }), u.jsx(ve, {
                                                    variant: "ghost",
                                                    size: "sm",
                                                    onClick: () => l(f.id),
                                                    disabled: r === f.id,
                                                    children: u.jsx(hC, {
                                                        className: "h-4 w-4 text-red-500"
                                                    })
                                                })]
                                            })
                                        })]
                                    }, f.id))
                                })]
                            })
                        })
                    }) : u.jsxs("div", {
                        className: "text-center py-12 bg-white rounded-lg shadow",
                        children: [u.jsx("p", {
                            className: "text-gray-500 mb-4",
                            children: "Você ainda não tem cálculos salvos."
                        }), u.jsx(Be, {
                            to: "/",
                            children: u.jsxs(ve, {
                                children: [u.jsx(pm, {
                                    className: "h-4 w-4 mr-2"
                                }), "Criar primeiro cálculo"]
                            })
                        })]
                    })]
                }), u.jsxs("div", {
                    children: [u.jsx("h2", {
                        className: "text-xl font-bold mb-4",
                        children: "Seu Plano"
                    }), u.jsx(yA, {
                        onUpgradeClick: c
                    })]
                })]
            })
        }), u.jsx(Bw, {
            isOpen: o,
            onClose: () => i(!1),
            onUpgrade: d
        }), u.jsx(Io, {})]
    })
}
  , wA = ({children: e}) => {
    const {user: t, loading: n} = as()
      , r = fn();
    return n ? u.jsx("div", {
        className: "flex items-center justify-center h-screen",
        children: u.jsx("div", {
            className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"
        })
    }) : t ? u.jsx(u.Fragment, {
        children: e
    }) : u.jsx(yP, {
        to: "/login",
        state: {
            from: r
        },
        replace: !0
    })
}
  , bA = new gj;
function _A() {
    return u.jsx(PP, {
        children: u.jsx(bj, {
            client: bA,
            children: u.jsx(JT, {
                children: u.jsxs(ej, {
                    children: [u.jsx(YC, {}), u.jsx(EE, {}), u.jsxs(wP, {
                        children: [u.jsx(Fn, {
                            path: "/",
                            element: u.jsx(j2, {})
                        }), u.jsx(Fn, {
                            path: "/about",
                            element: u.jsx(K2, {})
                        }), u.jsx(Fn, {
                            path: "/how-to-use",
                            element: u.jsx(hA, {})
                        }), u.jsx(Fn, {
                            path: "/login",
                            element: u.jsx(mA, {})
                        }), u.jsx(Fn, {
                            path: "/signup",
                            element: u.jsx(gA, {})
                        }), u.jsx(Fn, {
                            path: "/dashboard",
                            element: u.jsx(wA, {
                                children: u.jsx(xA, {})
                            })
                        }), u.jsx(Fn, {
                            path: "*",
                            element: u.jsx(pA, {})
                        })]
                    })]
                })
            })
        })
    })
}
const yg = document.getElementById("root");
yg ? Hy(yg).render(u.jsx(N.StrictMode, {
    children: u.jsx(_A, {})
})) : console.error("Root element not found");
export {Ng as g};

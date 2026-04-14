// node_modules/jquery/dist-module/jquery.module.js
/*!
 * jQuery JavaScript Library v4.0.0
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.com/license/
 *
 * Date: 2026-01-18T00:20Z
 */
function jQueryFactory(window2, noGlobal) {
  if (typeof window2 === "undefined" || !window2.document) {
    throw new Error("jQuery requires a window with a document");
  }
  var arr = [];
  var getProto = Object.getPrototypeOf;
  var slice = arr.slice;
  var flat = arr.flat ? function(array) {
    return arr.flat.call(array);
  } : function(array) {
    return arr.concat.apply([], array);
  };
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var fnToString = hasOwn.toString;
  var ObjectFunctionString = fnToString.call(Object);
  var support = {};
  function toType(obj) {
    if (obj == null) {
      return obj + "";
    }
    return typeof obj === "object" ? class2type[toString.call(obj)] || "object" : typeof obj;
  }
  function isWindow(obj) {
    return obj != null && obj === obj.window;
  }
  function isArrayLike(obj) {
    var length = !!obj && obj.length, type = toType(obj);
    if (typeof obj === "function" || isWindow(obj)) {
      return false;
    }
    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
  }
  var document$1 = window2.document;
  var preservedScriptAttributes = {
    type: true,
    src: true,
    nonce: true,
    noModule: true
  };
  function DOMEval(code, node, doc) {
    doc = doc || document$1;
    var i2, script = doc.createElement("script");
    script.text = code;
    for (i2 in preservedScriptAttributes) {
      if (node && node[i2]) {
        script[i2] = node[i2];
      }
    }
    if (doc.head.appendChild(script).parentNode) {
      script.parentNode.removeChild(script);
    }
  }
  var version = "4.0.0", rhtmlSuffix = /HTML$/i, jQuery = function(selector, context) {
    return new jQuery.fn.init(selector, context);
  };
  jQuery.fn = jQuery.prototype = {
    jquery: version,
    constructor: jQuery,
    length: 0,
    toArray: function() {
      return slice.call(this);
    },
    get: function(num) {
      if (num == null) {
        return slice.call(this);
      }
      return num < 0 ? this[num + this.length] : this[num];
    },
    pushStack: function(elems) {
      var ret = jQuery.merge(this.constructor(), elems);
      ret.prevObject = this;
      return ret;
    },
    each: function(callback) {
      return jQuery.each(this, callback);
    },
    map: function(callback) {
      return this.pushStack(jQuery.map(this, function(elem, i2) {
        return callback.call(elem, i2, elem);
      }));
    },
    slice: function() {
      return this.pushStack(slice.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    even: function() {
      return this.pushStack(jQuery.grep(this, function(_elem, i2) {
        return (i2 + 1) % 2;
      }));
    },
    odd: function() {
      return this.pushStack(jQuery.grep(this, function(_elem, i2) {
        return i2 % 2;
      }));
    },
    eq: function(i2) {
      var len = this.length, j = +i2 + (i2 < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    }
  };
  jQuery.extend = jQuery.fn.extend = function() {
    var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i2 = 1, length = arguments.length, deep = false;
    if (typeof target === "boolean") {
      deep = target;
      target = arguments[i2] || {};
      i2++;
    }
    if (typeof target !== "object" && typeof target !== "function") {
      target = {};
    }
    if (i2 === length) {
      target = this;
      i2--;
    }
    for (;i2 < length; i2++) {
      if ((options = arguments[i2]) != null) {
        for (name in options) {
          copy = options[name];
          if (name === "__proto__" || target === copy) {
            continue;
          }
          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
            src = target[name];
            if (copyIsArray && !Array.isArray(src)) {
              clone = [];
            } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
              clone = {};
            } else {
              clone = src;
            }
            copyIsArray = false;
            target[name] = jQuery.extend(deep, clone, copy);
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  };
  jQuery.extend({
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    isReady: true,
    error: function(msg) {
      throw new Error(msg);
    },
    noop: function() {},
    isPlainObject: function(obj) {
      var proto, Ctor;
      if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
      }
      proto = getProto(obj);
      if (!proto) {
        return true;
      }
      Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
      return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    },
    isEmptyObject: function(obj) {
      var name;
      for (name in obj) {
        return false;
      }
      return true;
    },
    globalEval: function(code, options, doc) {
      DOMEval(code, { nonce: options && options.nonce }, doc);
    },
    each: function(obj, callback) {
      var length, i2 = 0;
      if (isArrayLike(obj)) {
        length = obj.length;
        for (;i2 < length; i2++) {
          if (callback.call(obj[i2], i2, obj[i2]) === false) {
            break;
          }
        }
      } else {
        for (i2 in obj) {
          if (callback.call(obj[i2], i2, obj[i2]) === false) {
            break;
          }
        }
      }
      return obj;
    },
    text: function(elem) {
      var node, ret = "", i2 = 0, nodeType = elem.nodeType;
      if (!nodeType) {
        while (node = elem[i2++]) {
          ret += jQuery.text(node);
        }
      }
      if (nodeType === 1 || nodeType === 11) {
        return elem.textContent;
      }
      if (nodeType === 9) {
        return elem.documentElement.textContent;
      }
      if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      }
      return ret;
    },
    makeArray: function(arr2, results) {
      var ret = results || [];
      if (arr2 != null) {
        if (isArrayLike(Object(arr2))) {
          jQuery.merge(ret, typeof arr2 === "string" ? [arr2] : arr2);
        } else {
          push.call(ret, arr2);
        }
      }
      return ret;
    },
    inArray: function(elem, arr2, i2) {
      return arr2 == null ? -1 : indexOf.call(arr2, elem, i2);
    },
    isXMLDoc: function(elem) {
      var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
      return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
    },
    contains: function(a, b) {
      var bup = b && b.parentNode;
      return a === bup || !!(bup && bup.nodeType === 1 && (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
    },
    merge: function(first, second) {
      var len = +second.length, j = 0, i2 = first.length;
      for (;j < len; j++) {
        first[i2++] = second[j];
      }
      first.length = i2;
      return first;
    },
    grep: function(elems, callback, invert) {
      var callbackInverse, matches2 = [], i2 = 0, length = elems.length, callbackExpect = !invert;
      for (;i2 < length; i2++) {
        callbackInverse = !callback(elems[i2], i2);
        if (callbackInverse !== callbackExpect) {
          matches2.push(elems[i2]);
        }
      }
      return matches2;
    },
    map: function(elems, callback, arg) {
      var length, value, i2 = 0, ret = [];
      if (isArrayLike(elems)) {
        length = elems.length;
        for (;i2 < length; i2++) {
          value = callback(elems[i2], i2, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      } else {
        for (i2 in elems) {
          value = callback(elems[i2], i2, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      }
      return flat(ret);
    },
    guid: 1,
    support
  });
  if (typeof Symbol === "function") {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  }
  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(_i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });
  function nodeName(elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  }
  var pop = arr.pop;
  var whitespace = "[\\x20\\t\\r\\n\\f]";
  var isIE = document$1.documentMode;
  var rbuggyQSA = isIE && new RegExp(":enabled|:disabled|" + "\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
  var rtrimCSS = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g");
  var identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+";
  var rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*");
  var rdescend = new RegExp(whitespace + "|>");
  var rsibling = /[+~]/;
  var documentElement$1 = document$1.documentElement;
  var matches = documentElement$1.matches || documentElement$1.msMatchesSelector;
  function createCache() {
    var keys = [];
    function cache(key, value) {
      if (keys.push(key + " ") > jQuery.expr.cacheLength) {
        delete cache[keys.shift()];
      }
      return cache[key + " "] = value;
    }
    return cache;
  }
  function testContext(context) {
    return context && typeof context.getElementsByTagName !== "undefined" && context;
  }
  var attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]";
  var pseudos = ":(" + identifier + ")(?:\\((" + `('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|` + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)";
  var filterMatchExpr = {
    ID: new RegExp("^#(" + identifier + ")"),
    CLASS: new RegExp("^\\.(" + identifier + ")"),
    TAG: new RegExp("^(" + identifier + "|[*])"),
    ATTR: new RegExp("^" + attributes),
    PSEUDO: new RegExp("^" + pseudos),
    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i")
  };
  var rpseudo = new RegExp(pseudos);
  var runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
    var high = "0x" + escape.slice(1) - 65536;
    if (nonHex) {
      return nonHex;
    }
    return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
  };
  function unescapeSelector(sel) {
    return sel.replace(runescape, funescape);
  }
  function selectorError(msg) {
    jQuery.error("Syntax error, unrecognized expression: " + msg);
  }
  var rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*");
  var tokenCache = createCache();
  function tokenize(selector, parseOnly) {
    var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
    if (cached) {
      return parseOnly ? 0 : cached.slice(0);
    }
    soFar = selector;
    groups = [];
    preFilters = jQuery.expr.preFilter;
    while (soFar) {
      if (!matched || (match = rcomma.exec(soFar))) {
        if (match) {
          soFar = soFar.slice(match[0].length) || soFar;
        }
        groups.push(tokens = []);
      }
      matched = false;
      if (match = rleadingCombinator.exec(soFar)) {
        matched = match.shift();
        tokens.push({
          value: matched,
          type: match[0].replace(rtrimCSS, " ")
        });
        soFar = soFar.slice(matched.length);
      }
      for (type in filterMatchExpr) {
        if ((match = jQuery.expr.match[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
          matched = match.shift();
          tokens.push({
            value: matched,
            type,
            matches: match
          });
          soFar = soFar.slice(matched.length);
        }
      }
      if (!matched) {
        break;
      }
    }
    if (parseOnly) {
      return soFar.length;
    }
    return soFar ? selectorError(selector) : tokenCache(selector, groups).slice(0);
  }
  var preFilter = {
    ATTR: function(match) {
      match[1] = unescapeSelector(match[1]);
      match[3] = unescapeSelector(match[3] || match[4] || match[5] || "");
      if (match[2] === "~=") {
        match[3] = " " + match[3] + " ";
      }
      return match.slice(0, 4);
    },
    CHILD: function(match) {
      match[1] = match[1].toLowerCase();
      if (match[1].slice(0, 3) === "nth") {
        if (!match[3]) {
          selectorError(match[0]);
        }
        match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
        match[5] = +(match[7] + match[8] || match[3] === "odd");
      } else if (match[3]) {
        selectorError(match[0]);
      }
      return match;
    },
    PSEUDO: function(match) {
      var excess, unquoted = !match[6] && match[2];
      if (filterMatchExpr.CHILD.test(match[0])) {
        return null;
      }
      if (match[3]) {
        match[2] = match[4] || match[5] || "";
      } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
        match[0] = match[0].slice(0, excess);
        match[2] = unquoted.slice(0, excess);
      }
      return match.slice(0, 3);
    }
  };
  function toSelector(tokens) {
    var i2 = 0, len = tokens.length, selector = "";
    for (;i2 < len; i2++) {
      selector += tokens[i2].value;
    }
    return selector;
  }
  function access(elems, fn, key, value, chainable, emptyGet, raw) {
    var i2 = 0, len = elems.length, bulk = key == null;
    if (toType(key) === "object") {
      chainable = true;
      for (i2 in key) {
        access(elems, fn, i2, key[i2], true, emptyGet, raw);
      }
    } else if (value !== undefined) {
      chainable = true;
      if (typeof value !== "function") {
        raw = true;
      }
      if (bulk) {
        if (raw) {
          fn.call(elems, value);
          fn = null;
        } else {
          bulk = fn;
          fn = function(elem, _key, value2) {
            return bulk.call(jQuery(elem), value2);
          };
        }
      }
      if (fn) {
        for (;i2 < len; i2++) {
          fn(elems[i2], key, raw ? value : value.call(elems[i2], i2, fn(elems[i2], key)));
        }
      }
    }
    if (chainable) {
      return elems;
    }
    if (bulk) {
      return fn.call(elems);
    }
    return len ? fn(elems[0], key) : emptyGet;
  }
  var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
  jQuery.fn.extend({
    attr: function(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function(name) {
      return this.each(function() {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr: function(elem, name, value) {
      var ret, hooks, nType = elem.nodeType;
      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (typeof elem.getAttribute === "undefined") {
        return jQuery.prop(elem, name, value);
      }
      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        hooks = jQuery.attrHooks[name.toLowerCase()];
      }
      if (value !== undefined) {
        if (value === null || value === false && name.toLowerCase().indexOf("aria-") !== 0) {
          jQuery.removeAttr(elem, name);
          return;
        }
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }
        elem.setAttribute(name, value);
        return value;
      }
      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }
      ret = elem.getAttribute(name);
      return ret == null ? undefined : ret;
    },
    attrHooks: {},
    removeAttr: function(elem, value) {
      var name, i2 = 0, attrNames = value && value.match(rnothtmlwhite);
      if (attrNames && elem.nodeType === 1) {
        while (name = attrNames[i2++]) {
          elem.removeAttribute(name);
        }
      }
    }
  });
  if (isIE) {
    jQuery.attrHooks.type = {
      set: function(elem, value) {
        if (value === "radio" && nodeName(elem, "input")) {
          var val = elem.value;
          elem.setAttribute("type", value);
          if (val) {
            elem.value = val;
          }
          return value;
        }
      }
    };
  }
  var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function fcssescape(ch, asCodePoint) {
    if (asCodePoint) {
      if (ch === "\x00") {
        return "�";
      }
      return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
    }
    return "\\" + ch;
  }
  jQuery.escapeSelector = function(sel) {
    return (sel + "").replace(rcssescape, fcssescape);
  };
  var sort = arr.sort;
  var splice = arr.splice;
  var hasDuplicate;
  function sortOrder(a, b) {
    if (a === b) {
      hasDuplicate = true;
      return 0;
    }
    var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
    if (compare) {
      return compare;
    }
    compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
    if (compare & 1) {
      if (a == document$1 || a.ownerDocument == document$1 && jQuery.contains(document$1, a)) {
        return -1;
      }
      if (b == document$1 || b.ownerDocument == document$1 && jQuery.contains(document$1, b)) {
        return 1;
      }
      return 0;
    }
    return compare & 4 ? -1 : 1;
  }
  jQuery.uniqueSort = function(results) {
    var elem, duplicates = [], j = 0, i2 = 0;
    hasDuplicate = false;
    sort.call(results, sortOrder);
    if (hasDuplicate) {
      while (elem = results[i2++]) {
        if (elem === results[i2]) {
          j = duplicates.push(i2);
        }
      }
      while (j--) {
        splice.call(results, duplicates[j], 1);
      }
    }
    return results;
  };
  jQuery.fn.uniqueSort = function() {
    return this.pushStack(jQuery.uniqueSort(slice.apply(this)));
  };
  var i, outermostContext, document2, documentElement, documentIsHTML, dirruns = 0, done = 0, classCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), rwhitespace = new RegExp(whitespace + "+", "g"), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = jQuery.extend({
    needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
  }, filterMatchExpr), rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr$1 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, unloadHandler = function() {
    setDocument();
  }, inDisabledFieldset = addCombinator(function(elem) {
    return elem.disabled === true && nodeName(elem, "fieldset");
  }, { dir: "parentNode", next: "legend" });
  function find(selector, context, results, seed) {
    var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
    results = results || [];
    if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
      return results;
    }
    if (!seed) {
      setDocument(context);
      context = context || document2;
      if (documentIsHTML) {
        if (nodeType !== 11 && (match = rquickExpr$1.exec(selector))) {
          if (m = match[1]) {
            if (nodeType === 9) {
              if (elem = context.getElementById(m)) {
                push.call(results, elem);
              }
              return results;
            } else {
              if (newContext && (elem = newContext.getElementById(m)) && jQuery.contains(context, elem)) {
                push.call(results, elem);
                return results;
              }
            }
          } else if (match[2]) {
            push.apply(results, context.getElementsByTagName(selector));
            return results;
          } else if ((m = match[3]) && context.getElementsByClassName) {
            push.apply(results, context.getElementsByClassName(m));
            return results;
          }
        }
        if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
          newSelector = selector;
          newContext = context;
          if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
            newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
            if (newContext != context || isIE) {
              if (nid = context.getAttribute("id")) {
                nid = jQuery.escapeSelector(nid);
              } else {
                context.setAttribute("id", nid = jQuery.expando);
              }
            }
            groups = tokenize(selector);
            i2 = groups.length;
            while (i2--) {
              groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
            }
            newSelector = groups.join(",");
          }
          try {
            push.apply(results, newContext.querySelectorAll(newSelector));
            return results;
          } catch (qsaError) {
            nonnativeSelectorCache(selector, true);
          } finally {
            if (nid === jQuery.expando) {
              context.removeAttribute("id");
            }
          }
        }
      }
    }
    return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
  }
  function markFunction(fn) {
    fn[jQuery.expando] = true;
    return fn;
  }
  function createInputPseudo(type) {
    return function(elem) {
      return nodeName(elem, "input") && elem.type === type;
    };
  }
  function createButtonPseudo(type) {
    return function(elem) {
      return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
    };
  }
  function createDisabledPseudo(disabled) {
    return function(elem) {
      if ("form" in elem) {
        if (elem.parentNode && elem.disabled === false) {
          if ("label" in elem) {
            if ("label" in elem.parentNode) {
              return elem.parentNode.disabled === disabled;
            } else {
              return elem.disabled === disabled;
            }
          }
          return elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
        }
        return elem.disabled === disabled;
      } else if ("label" in elem) {
        return elem.disabled === disabled;
      }
      return false;
    };
  }
  function createPositionalPseudo(fn) {
    return markFunction(function(argument) {
      argument = +argument;
      return markFunction(function(seed, matches2) {
        var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
        while (i2--) {
          if (seed[j = matchIndexes[i2]]) {
            seed[j] = !(matches2[j] = seed[j]);
          }
        }
      });
    });
  }
  function setDocument(node) {
    var subWindow, doc = node ? node.ownerDocument || node : document$1;
    if (doc == document2 || doc.nodeType !== 9) {
      return;
    }
    document2 = doc;
    documentElement = document2.documentElement;
    documentIsHTML = !jQuery.isXMLDoc(document2);
    if (isIE && document$1 != document2 && (subWindow = document2.defaultView) && subWindow.top !== subWindow) {
      subWindow.addEventListener("unload", unloadHandler);
    }
  }
  find.matches = function(expr, elements) {
    return find(expr, null, null, elements);
  };
  find.matchesSelector = function(elem, expr) {
    setDocument(elem);
    if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
      try {
        return matches.call(elem, expr);
      } catch (e) {
        nonnativeSelectorCache(expr, true);
      }
    }
    return find(expr, document2, null, [elem]).length > 0;
  };
  jQuery.expr = {
    cacheLength: 50,
    createPseudo: markFunction,
    match: matchExpr,
    find: {
      ID: function(id, context) {
        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
          var elem = context.getElementById(id);
          return elem ? [elem] : [];
        }
      },
      TAG: function(tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag);
        } else {
          return context.querySelectorAll(tag);
        }
      },
      CLASS: function(className, context) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      }
    },
    relative: {
      ">": { dir: "parentNode", first: true },
      " ": { dir: "parentNode" },
      "+": { dir: "previousSibling", first: true },
      "~": { dir: "previousSibling" }
    },
    preFilter,
    filter: {
      ID: function(id) {
        var attrId = unescapeSelector(id);
        return function(elem) {
          return elem.getAttribute("id") === attrId;
        };
      },
      TAG: function(nodeNameSelector) {
        var expectedNodeName = unescapeSelector(nodeNameSelector).toLowerCase();
        return nodeNameSelector === "*" ? function() {
          return true;
        } : function(elem) {
          return nodeName(elem, expectedNodeName);
        };
      },
      CLASS: function(className) {
        var pattern = classCache[className + " "];
        return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
          return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
        });
      },
      ATTR: function(name, operator, check) {
        return function(elem) {
          var result = jQuery.attr(elem, name);
          if (result == null) {
            return operator === "!=";
          }
          if (!operator) {
            return true;
          }
          result += "";
          if (operator === "=") {
            return result === check;
          }
          if (operator === "!=") {
            return result !== check;
          }
          if (operator === "^=") {
            return check && result.indexOf(check) === 0;
          }
          if (operator === "*=") {
            return check && result.indexOf(check) > -1;
          }
          if (operator === "$=") {
            return check && result.slice(-check.length) === check;
          }
          if (operator === "~=") {
            return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
          }
          if (operator === "|=") {
            return result === check || result.slice(0, check.length + 1) === check + "-";
          }
          return false;
        };
      },
      CHILD: function(type, what, _argument, first, last) {
        var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
        return first === 1 && last === 0 ? function(elem) {
          return !!elem.parentNode;
        } : function(elem, _context, xml) {
          var cache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
          if (parent) {
            if (simple) {
              while (dir2) {
                node = elem;
                while (node = node[dir2]) {
                  if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                    return false;
                  }
                }
                start = dir2 = type === "only" && !start && "nextSibling";
              }
              return true;
            }
            start = [forward ? parent.firstChild : parent.lastChild];
            if (forward && useCache) {
              outerCache = parent[jQuery.expando] || (parent[jQuery.expando] = {});
              cache = outerCache[type] || [];
              nodeIndex = cache[0] === dirruns && cache[1];
              diff = nodeIndex && cache[2];
              node = nodeIndex && parent.childNodes[nodeIndex];
              while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                if (node.nodeType === 1 && ++diff && node === elem) {
                  outerCache[type] = [dirruns, nodeIndex, diff];
                  break;
                }
              }
            } else {
              if (useCache) {
                outerCache = elem[jQuery.expando] || (elem[jQuery.expando] = {});
                cache = outerCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex;
              }
              if (diff === false) {
                while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                  if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                    if (useCache) {
                      outerCache = node[jQuery.expando] || (node[jQuery.expando] = {});
                      outerCache[type] = [dirruns, diff];
                    }
                    if (node === elem) {
                      break;
                    }
                  }
                }
              }
            }
            diff -= last;
            return diff === first || diff % first === 0 && diff / first >= 0;
          }
        };
      },
      PSEUDO: function(pseudo, argument) {
        var fn = jQuery.expr.pseudos[pseudo] || jQuery.expr.setFilters[pseudo.toLowerCase()] || selectorError("unsupported pseudo: " + pseudo);
        if (fn[jQuery.expando]) {
          return fn(argument);
        }
        return fn;
      }
    },
    pseudos: {
      not: markFunction(function(selector) {
        var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
        return matcher[jQuery.expando] ? markFunction(function(seed, matches2, _context, xml) {
          var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
          while (i2--) {
            if (elem = unmatched[i2]) {
              seed[i2] = !(matches2[i2] = elem);
            }
          }
        }) : function(elem, _context, xml) {
          input[0] = elem;
          matcher(input, null, xml, results);
          input[0] = null;
          return !results.pop();
        };
      }),
      has: markFunction(function(selector) {
        return function(elem) {
          return find(selector, elem).length > 0;
        };
      }),
      contains: markFunction(function(text) {
        text = unescapeSelector(text);
        return function(elem) {
          return (elem.textContent || jQuery.text(elem)).indexOf(text) > -1;
        };
      }),
      lang: markFunction(function(lang) {
        if (!ridentifier.test(lang || "")) {
          selectorError("unsupported lang: " + lang);
        }
        lang = unescapeSelector(lang).toLowerCase();
        return function(elem) {
          var elemLang;
          do {
            if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
              elemLang = elemLang.toLowerCase();
              return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
            }
          } while ((elem = elem.parentNode) && elem.nodeType === 1);
          return false;
        };
      }),
      target: function(elem) {
        var hash = window2.location && window2.location.hash;
        return hash && hash.slice(1) === elem.id;
      },
      root: function(elem) {
        return elem === documentElement;
      },
      focus: function(elem) {
        return elem === document2.activeElement && document2.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
      },
      enabled: createDisabledPseudo(false),
      disabled: createDisabledPseudo(true),
      checked: function(elem) {
        return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
      },
      selected: function(elem) {
        if (isIE && elem.parentNode) {
          elem.parentNode.selectedIndex;
        }
        return elem.selected === true;
      },
      empty: function(elem) {
        for (elem = elem.firstChild;elem; elem = elem.nextSibling) {
          if (elem.nodeType < 6) {
            return false;
          }
        }
        return true;
      },
      parent: function(elem) {
        return !jQuery.expr.pseudos.empty(elem);
      },
      header: function(elem) {
        return rheader.test(elem.nodeName);
      },
      input: function(elem) {
        return rinputs.test(elem.nodeName);
      },
      button: function(elem) {
        return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
      },
      text: function(elem) {
        return nodeName(elem, "input") && elem.type === "text";
      },
      first: createPositionalPseudo(function() {
        return [0];
      }),
      last: createPositionalPseudo(function(_matchIndexes, length) {
        return [length - 1];
      }),
      eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
        return [argument < 0 ? argument + length : argument];
      }),
      even: createPositionalPseudo(function(matchIndexes, length) {
        var i2 = 0;
        for (;i2 < length; i2 += 2) {
          matchIndexes.push(i2);
        }
        return matchIndexes;
      }),
      odd: createPositionalPseudo(function(matchIndexes, length) {
        var i2 = 1;
        for (;i2 < length; i2 += 2) {
          matchIndexes.push(i2);
        }
        return matchIndexes;
      }),
      lt: createPositionalPseudo(function(matchIndexes, length, argument) {
        var i2;
        if (argument < 0) {
          i2 = argument + length;
        } else if (argument > length) {
          i2 = length;
        } else {
          i2 = argument;
        }
        for (;--i2 >= 0; ) {
          matchIndexes.push(i2);
        }
        return matchIndexes;
      }),
      gt: createPositionalPseudo(function(matchIndexes, length, argument) {
        var i2 = argument < 0 ? argument + length : argument;
        for (;++i2 < length; ) {
          matchIndexes.push(i2);
        }
        return matchIndexes;
      })
    }
  };
  jQuery.expr.pseudos.nth = jQuery.expr.pseudos.eq;
  for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
    jQuery.expr.pseudos[i] = createInputPseudo(i);
  }
  for (i in { submit: true, reset: true }) {
    jQuery.expr.pseudos[i] = createButtonPseudo(i);
  }
  function setFilters() {}
  setFilters.prototype = jQuery.expr.pseudos;
  jQuery.expr.setFilters = new setFilters;
  function addCombinator(matcher, combinator, base) {
    var { dir: dir2, next: skip } = combinator, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
    return combinator.first ? function(elem, context, xml) {
      while (elem = elem[dir2]) {
        if (elem.nodeType === 1 || checkNonElements) {
          return matcher(elem, context, xml);
        }
      }
      return false;
    } : function(elem, context, xml) {
      var oldCache, outerCache, newCache = [dirruns, doneName];
      if (xml) {
        while (elem = elem[dir2]) {
          if (elem.nodeType === 1 || checkNonElements) {
            if (matcher(elem, context, xml)) {
              return true;
            }
          }
        }
      } else {
        while (elem = elem[dir2]) {
          if (elem.nodeType === 1 || checkNonElements) {
            outerCache = elem[jQuery.expando] || (elem[jQuery.expando] = {});
            if (skip && nodeName(elem, skip)) {
              elem = elem[dir2] || elem;
            } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
              return newCache[2] = oldCache[2];
            } else {
              outerCache[key] = newCache;
              if (newCache[2] = matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        }
      }
      return false;
    };
  }
  function elementMatcher(matchers) {
    return matchers.length > 1 ? function(elem, context, xml) {
      var i2 = matchers.length;
      while (i2--) {
        if (!matchers[i2](elem, context, xml)) {
          return false;
        }
      }
      return true;
    } : matchers[0];
  }
  function multipleContexts(selector, contexts, results) {
    var i2 = 0, len = contexts.length;
    for (;i2 < len; i2++) {
      find(selector, contexts[i2], results);
    }
    return results;
  }
  function condense(unmatched, map, filter, context, xml) {
    var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
    for (;i2 < len; i2++) {
      if (elem = unmatched[i2]) {
        if (!filter || filter(elem, context, xml)) {
          newUnmatched.push(elem);
          if (mapped) {
            map.push(i2);
          }
        }
      }
    }
    return newUnmatched;
  }
  function setMatcher(preFilter2, selector, matcher, postFilter, postFinder, postSelector) {
    if (postFilter && !postFilter[jQuery.expando]) {
      postFilter = setMatcher(postFilter);
    }
    if (postFinder && !postFinder[jQuery.expando]) {
      postFinder = setMatcher(postFinder, postSelector);
    }
    return markFunction(function(seed, results, context, xml) {
      var temp, i2, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), matcherIn = preFilter2 && (seed || !selector) ? condense(elems, preMap, preFilter2, context, xml) : elems;
      if (matcher) {
        matcherOut = postFinder || (seed ? preFilter2 : preexisting || postFilter) ? [] : results;
        matcher(matcherIn, matcherOut, context, xml);
      } else {
        matcherOut = matcherIn;
      }
      if (postFilter) {
        temp = condense(matcherOut, postMap);
        postFilter(temp, [], context, xml);
        i2 = temp.length;
        while (i2--) {
          if (elem = temp[i2]) {
            matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
          }
        }
      }
      if (seed) {
        if (postFinder || preFilter2) {
          if (postFinder) {
            temp = [];
            i2 = matcherOut.length;
            while (i2--) {
              if (elem = matcherOut[i2]) {
                temp.push(matcherIn[i2] = elem);
              }
            }
            postFinder(null, matcherOut = [], temp, xml);
          }
          i2 = matcherOut.length;
          while (i2--) {
            if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i2]) > -1) {
              seed[temp] = !(results[temp] = elem);
            }
          }
        }
      } else {
        matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
        if (postFinder) {
          postFinder(null, results, matcherOut, xml);
        } else {
          push.apply(results, matcherOut);
        }
      }
    });
  }
  function matcherFromTokens(tokens) {
    var checkContext, matcher, j, len = tokens.length, leadingRelative = jQuery.expr.relative[tokens[0].type], implicitRelative = leadingRelative || jQuery.expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
      return elem === checkContext;
    }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
      return indexOf.call(checkContext, elem) > -1;
    }, implicitRelative, true), matchers = [function(elem, context, xml) {
      var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
      checkContext = null;
      return ret;
    }];
    for (;i2 < len; i2++) {
      if (matcher = jQuery.expr.relative[tokens[i2].type]) {
        matchers = [addCombinator(elementMatcher(matchers), matcher)];
      } else {
        matcher = jQuery.expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
        if (matcher[jQuery.expando]) {
          j = ++i2;
          for (;j < len; j++) {
            if (jQuery.expr.relative[tokens[j].type]) {
              break;
            }
          }
          return setMatcher(i2 > 1 && elementMatcher(matchers), i2 > 1 && toSelector(tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })).replace(rtrimCSS, "$1"), matcher, i2 < j && matcherFromTokens(tokens.slice(i2, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
        }
        matchers.push(matcher);
      }
    }
    return elementMatcher(matchers);
  }
  function matcherFromGroupMatchers(elementMatchers, setMatchers) {
    var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
      var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && jQuery.expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1;
      if (outermost) {
        outermostContext = context == document2 || context || outermost;
      }
      for (;(elem = elems[i2]) != null; i2++) {
        if (byElement && elem) {
          j = 0;
          if (!context && elem.ownerDocument != document2) {
            setDocument(elem);
            xml = !documentIsHTML;
          }
          while (matcher = elementMatchers[j++]) {
            if (matcher(elem, context || document2, xml)) {
              push.call(results, elem);
              break;
            }
          }
          if (outermost) {
            dirruns = dirrunsUnique;
          }
        }
        if (bySet) {
          if (elem = !matcher && elem) {
            matchedCount--;
          }
          if (seed) {
            unmatched.push(elem);
          }
        }
      }
      matchedCount += i2;
      if (bySet && i2 !== matchedCount) {
        j = 0;
        while (matcher = setMatchers[j++]) {
          matcher(unmatched, setMatched, context, xml);
        }
        if (seed) {
          if (matchedCount > 0) {
            while (i2--) {
              if (!(unmatched[i2] || setMatched[i2])) {
                setMatched[i2] = pop.call(results);
              }
            }
          }
          setMatched = condense(setMatched);
        }
        push.apply(results, setMatched);
        if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
          jQuery.uniqueSort(results);
        }
      }
      if (outermost) {
        dirruns = dirrunsUnique;
        outermostContext = contextBackup;
      }
      return unmatched;
    };
    return bySet ? markFunction(superMatcher) : superMatcher;
  }
  function compile(selector, match) {
    var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
    if (!cached) {
      if (!match) {
        match = tokenize(selector);
      }
      i2 = match.length;
      while (i2--) {
        cached = matcherFromTokens(match[i2]);
        if (cached[jQuery.expando]) {
          setMatchers.push(cached);
        } else {
          elementMatchers.push(cached);
        }
      }
      cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
      cached.selector = selector;
    }
    return cached;
  }
  function select(selector, context, results, seed) {
    var i2, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
    results = results || [];
    if (match.length === 1) {
      tokens = match[0] = match[0].slice(0);
      if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && jQuery.expr.relative[tokens[1].type]) {
        context = (jQuery.expr.find.ID(unescapeSelector(token.matches[0]), context) || [])[0];
        if (!context) {
          return results;
        } else if (compiled) {
          context = context.parentNode;
        }
        selector = selector.slice(tokens.shift().value.length);
      }
      i2 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
      while (i2--) {
        token = tokens[i2];
        if (jQuery.expr.relative[type = token.type]) {
          break;
        }
        if (find2 = jQuery.expr.find[type]) {
          if (seed = find2(unescapeSelector(token.matches[0]), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
            tokens.splice(i2, 1);
            selector = seed.length && toSelector(tokens);
            if (!selector) {
              push.apply(results, seed);
              return results;
            }
            break;
          }
        }
      }
    }
    (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
    return results;
  }
  setDocument();
  jQuery.find = find;
  find.compile = compile;
  find.select = select;
  find.setDocument = setDocument;
  find.tokenize = tokenize;
  function dir(elem, dir2, until) {
    var matched = [], truncate = until !== undefined;
    while ((elem = elem[dir2]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }
        matched.push(elem);
      }
    }
    return matched;
  }
  function siblings(n, elem) {
    var matched = [];
    for (;n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }
    return matched;
  }
  var rneedsContext = jQuery.expr.match.needsContext;
  var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function isObviousHtml(input) {
    return input[0] === "<" && input[input.length - 1] === ">" && input.length >= 3;
  }
  function winnow(elements, qualifier, not) {
    if (typeof qualifier === "function") {
      return jQuery.grep(elements, function(elem, i2) {
        return !!qualifier.call(elem, i2, elem) !== not;
      });
    }
    if (qualifier.nodeType) {
      return jQuery.grep(elements, function(elem) {
        return elem === qualifier !== not;
      });
    }
    if (typeof qualifier !== "string") {
      return jQuery.grep(elements, function(elem) {
        return indexOf.call(qualifier, elem) > -1 !== not;
      });
    }
    return jQuery.filter(qualifier, elements, not);
  }
  jQuery.filter = function(expr, elems, not) {
    var elem = elems[0];
    if (not) {
      expr = ":not(" + expr + ")";
    }
    if (elems.length === 1 && elem.nodeType === 1) {
      return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
    }
    return jQuery.find.matches(expr, jQuery.grep(elems, function(elem2) {
      return elem2.nodeType === 1;
    }));
  };
  jQuery.fn.extend({
    find: function(selector) {
      var i2, ret, len = this.length, self = this;
      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function() {
          for (i2 = 0;i2 < len; i2++) {
            if (jQuery.contains(self[i2], this)) {
              return true;
            }
          }
        }));
      }
      ret = this.pushStack([]);
      for (i2 = 0;i2 < len; i2++) {
        jQuery.find(selector, self[i2], ret);
      }
      return len > 1 ? jQuery.uniqueSort(ret) : ret;
    },
    filter: function(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function(selector) {
      return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  });
  var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context) {
    var match, elem;
    if (!selector) {
      return this;
    }
    if (selector.nodeType) {
      this[0] = selector;
      this.length = 1;
      return this;
    } else if (typeof selector === "function") {
      return rootjQuery.ready !== undefined ? rootjQuery.ready(selector) : selector(jQuery);
    } else {
      match = selector + "";
      if (isObviousHtml(match)) {
        match = [null, selector, null];
      } else if (typeof selector === "string") {
        match = rquickExpr.exec(selector);
      } else {
        return jQuery.makeArray(selector, this);
      }
      if (match && (match[1] || !context)) {
        if (match[1]) {
          context = context instanceof jQuery ? context[0] : context;
          jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document$1, true));
          if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {
              if (typeof this[match] === "function") {
                this[match](context[match]);
              } else {
                this.attr(match, context[match]);
              }
            }
          }
          return this;
        } else {
          elem = document$1.getElementById(match[2]);
          if (elem) {
            this[0] = elem;
            this.length = 1;
          }
          return this;
        }
      } else if (!context || context.jquery) {
        return (context || rootjQuery).find(selector);
      } else {
        return this.constructor(context).find(selector);
      }
    }
  };
  init.prototype = jQuery.fn;
  rootjQuery = jQuery(document$1);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
  jQuery.fn.extend({
    has: function(target) {
      var targets = jQuery(target, this), l = targets.length;
      return this.filter(function() {
        var i2 = 0;
        for (;i2 < l; i2++) {
          if (jQuery.contains(this, targets[i2])) {
            return true;
          }
        }
      });
    },
    closest: function(selectors, context) {
      var cur, i2 = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
      if (!rneedsContext.test(selectors)) {
        for (;i2 < l; i2++) {
          for (cur = this[i2];cur && cur !== context; cur = cur.parentNode) {
            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
              matched.push(cur);
              break;
            }
          }
        }
      }
      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
    },
    index: function(elem) {
      if (!elem) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      }
      if (typeof elem === "string") {
        return indexOf.call(jQuery(elem), this[0]);
      }
      return indexOf.call(this, elem.jquery ? elem[0] : elem);
    },
    add: function(selector, context) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
    },
    addBack: function(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });
  function sibling(cur, dir2) {
    while ((cur = cur[dir2]) && cur.nodeType !== 1) {}
    return cur;
  }
  jQuery.each({
    parent: function(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function(elem, _i, until) {
      return dir(elem, "parentNode", until);
    },
    next: function(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function(elem, _i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function(elem, _i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function(elem) {
      return siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function(elem) {
      return siblings(elem.firstChild);
    },
    contents: function(elem) {
      if (elem.contentDocument != null && getProto(elem.contentDocument)) {
        return elem.contentDocument;
      }
      if (nodeName(elem, "template")) {
        elem = elem.content || elem;
      }
      return jQuery.merge([], elem.childNodes);
    }
  }, function(name, fn) {
    jQuery.fn[name] = function(until, selector) {
      var matched = jQuery.map(this, fn, until);
      if (name.slice(-5) !== "Until") {
        selector = until;
      }
      if (selector && typeof selector === "string") {
        matched = jQuery.filter(selector, matched);
      }
      if (this.length > 1) {
        if (!guaranteedUnique[name]) {
          jQuery.uniqueSort(matched);
        }
        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }
      return this.pushStack(matched);
    };
  });
  function createOptions(options) {
    var object = {};
    jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
      object[flag] = true;
    });
    return object;
  }
  jQuery.Callbacks = function(options) {
    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
    var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
      locked = locked || options.once;
      fired = firing = true;
      for (;queue.length; firingIndex = -1) {
        memory = queue.shift();
        while (++firingIndex < list.length) {
          if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
            firingIndex = list.length;
            memory = false;
          }
        }
      }
      if (!options.memory) {
        memory = false;
      }
      firing = false;
      if (locked) {
        if (memory) {
          list = [];
        } else {
          list = "";
        }
      }
    }, self = {
      add: function() {
        if (list) {
          if (memory && !firing) {
            firingIndex = list.length - 1;
            queue.push(memory);
          }
          (function add(args) {
            jQuery.each(args, function(_, arg) {
              if (typeof arg === "function") {
                if (!options.unique || !self.has(arg)) {
                  list.push(arg);
                }
              } else if (arg && arg.length && toType(arg) !== "string") {
                add(arg);
              }
            });
          })(arguments);
          if (memory && !firing) {
            fire();
          }
        }
        return this;
      },
      remove: function() {
        jQuery.each(arguments, function(_, arg) {
          var index;
          while ((index = jQuery.inArray(arg, list, index)) > -1) {
            list.splice(index, 1);
            if (index <= firingIndex) {
              firingIndex--;
            }
          }
        });
        return this;
      },
      has: function(fn) {
        return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
      },
      empty: function() {
        if (list) {
          list = [];
        }
        return this;
      },
      disable: function() {
        locked = queue = [];
        list = memory = "";
        return this;
      },
      disabled: function() {
        return !list;
      },
      lock: function() {
        locked = queue = [];
        if (!memory && !firing) {
          list = memory = "";
        }
        return this;
      },
      locked: function() {
        return !!locked;
      },
      fireWith: function(context, args) {
        if (!locked) {
          args = args || [];
          args = [context, args.slice ? args.slice() : args];
          queue.push(args);
          if (!firing) {
            fire();
          }
        }
        return this;
      },
      fire: function() {
        self.fireWith(this, arguments);
        return this;
      },
      fired: function() {
        return !!fired;
      }
    };
    return self;
  };
  function Identity(v) {
    return v;
  }
  function Thrower(ex) {
    throw ex;
  }
  function adoptValue(value, resolve, reject, noValue) {
    var method;
    try {
      if (value && typeof (method = value.promise) === "function") {
        method.call(value).done(resolve).fail(reject);
      } else if (value && typeof (method = value.then) === "function") {
        method.call(value, resolve, reject);
      } else {
        resolve.apply(undefined, [value].slice(noValue));
      }
    } catch (value2) {
      reject(value2);
    }
  }
  jQuery.extend({
    Deferred: function(func) {
      var tuples = [
        [
          "notify",
          "progress",
          jQuery.Callbacks("memory"),
          jQuery.Callbacks("memory"),
          2
        ],
        [
          "resolve",
          "done",
          jQuery.Callbacks("once memory"),
          jQuery.Callbacks("once memory"),
          0,
          "resolved"
        ],
        [
          "reject",
          "fail",
          jQuery.Callbacks("once memory"),
          jQuery.Callbacks("once memory"),
          1,
          "rejected"
        ]
      ], state = "pending", promise = {
        state: function() {
          return state;
        },
        always: function() {
          deferred.done(arguments).fail(arguments);
          return this;
        },
        catch: function(fn) {
          return promise.then(null, fn);
        },
        pipe: function() {
          var fns = arguments;
          return jQuery.Deferred(function(newDefer) {
            jQuery.each(tuples, function(_i, tuple) {
              var fn = typeof fns[tuple[4]] === "function" && fns[tuple[4]];
              deferred[tuple[1]](function() {
                var returned = fn && fn.apply(this, arguments);
                if (returned && typeof returned.promise === "function") {
                  returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                } else {
                  newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                }
              });
            });
            fns = null;
          }).promise();
        },
        then: function(onFulfilled, onRejected, onProgress) {
          var maxDepth = 0;
          function resolve(depth, deferred2, handler, special) {
            return function() {
              var that = this, args = arguments, mightThrow = function() {
                var returned, then;
                if (depth < maxDepth) {
                  return;
                }
                returned = handler.apply(that, args);
                if (returned === deferred2.promise()) {
                  throw new TypeError("Thenable self-resolution");
                }
                then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                if (typeof then === "function") {
                  if (special) {
                    then.call(returned, resolve(maxDepth, deferred2, Identity, special), resolve(maxDepth, deferred2, Thrower, special));
                  } else {
                    maxDepth++;
                    then.call(returned, resolve(maxDepth, deferred2, Identity, special), resolve(maxDepth, deferred2, Thrower, special), resolve(maxDepth, deferred2, Identity, deferred2.notifyWith));
                  }
                } else {
                  if (handler !== Identity) {
                    that = undefined;
                    args = [returned];
                  }
                  (special || deferred2.resolveWith)(that, args);
                }
              }, process = special ? mightThrow : function() {
                try {
                  mightThrow();
                } catch (e) {
                  if (jQuery.Deferred.exceptionHook) {
                    jQuery.Deferred.exceptionHook(e, process.error);
                  }
                  if (depth + 1 >= maxDepth) {
                    if (handler !== Thrower) {
                      that = undefined;
                      args = [e];
                    }
                    deferred2.rejectWith(that, args);
                  }
                }
              };
              if (depth) {
                process();
              } else {
                if (jQuery.Deferred.getErrorHook) {
                  process.error = jQuery.Deferred.getErrorHook();
                }
                window2.setTimeout(process);
              }
            };
          }
          return jQuery.Deferred(function(newDefer) {
            tuples[0][3].add(resolve(0, newDefer, typeof onProgress === "function" ? onProgress : Identity, newDefer.notifyWith));
            tuples[1][3].add(resolve(0, newDefer, typeof onFulfilled === "function" ? onFulfilled : Identity));
            tuples[2][3].add(resolve(0, newDefer, typeof onRejected === "function" ? onRejected : Thrower));
          }).promise();
        },
        promise: function(obj) {
          return obj != null ? jQuery.extend(obj, promise) : promise;
        }
      }, deferred = {};
      jQuery.each(tuples, function(i2, tuple) {
        var list = tuple[2], stateString = tuple[5];
        promise[tuple[1]] = list.add;
        if (stateString) {
          list.add(function() {
            state = stateString;
          }, tuples[3 - i2][2].disable, tuples[3 - i2][3].disable, tuples[0][2].lock, tuples[0][3].lock);
        }
        list.add(tuple[3].fire);
        deferred[tuple[0]] = function() {
          deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
          return this;
        };
        deferred[tuple[0] + "With"] = list.fireWith;
      });
      promise.promise(deferred);
      if (func) {
        func.call(deferred, deferred);
      }
      return deferred;
    },
    when: function(singleValue) {
      var remaining = arguments.length, i2 = remaining, resolveContexts = Array(i2), resolveValues = slice.call(arguments), primary = jQuery.Deferred(), updateFunc = function(i3) {
        return function(value) {
          resolveContexts[i3] = this;
          resolveValues[i3] = arguments.length > 1 ? slice.call(arguments) : value;
          if (!--remaining) {
            primary.resolveWith(resolveContexts, resolveValues);
          }
        };
      };
      if (remaining <= 1) {
        adoptValue(singleValue, primary.done(updateFunc(i2)).resolve, primary.reject, !remaining);
        if (primary.state() === "pending" || typeof (resolveValues[i2] && resolveValues[i2].then) === "function") {
          return primary.then();
        }
      }
      while (i2--) {
        adoptValue(resolveValues[i2], updateFunc(i2), primary.reject);
      }
      return primary.promise();
    }
  });
  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  jQuery.Deferred.exceptionHook = function(error, asyncError) {
    if (error && rerrorNames.test(error.name)) {
      window2.console.warn("jQuery.Deferred exception", error, asyncError);
    }
  };
  jQuery.readyException = function(error) {
    window2.setTimeout(function() {
      throw error;
    });
  };
  var readyList = jQuery.Deferred();
  jQuery.fn.ready = function(fn) {
    readyList.then(fn).catch(function(error) {
      jQuery.readyException(error);
    });
    return this;
  };
  jQuery.extend({
    isReady: false,
    readyWait: 1,
    ready: function(wait) {
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      }
      jQuery.isReady = true;
      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      }
      readyList.resolveWith(document$1, [jQuery]);
    }
  });
  jQuery.ready.then = readyList.then;
  function completed() {
    document$1.removeEventListener("DOMContentLoaded", completed);
    window2.removeEventListener("load", completed);
    jQuery.ready();
  }
  if (document$1.readyState !== "loading") {
    window2.setTimeout(jQuery.ready);
  } else {
    document$1.addEventListener("DOMContentLoaded", completed);
    window2.addEventListener("load", completed);
  }
  var rdashAlpha = /-([a-z])/g;
  function fcamelCase(_all, letter) {
    return letter.toUpperCase();
  }
  function camelCase(string) {
    return string.replace(rdashAlpha, fcamelCase);
  }
  function acceptData(owner) {
    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
  }
  function Data() {
    this.expando = jQuery.expando + Data.uid++;
  }
  Data.uid = 1;
  Data.prototype = {
    cache: function(owner) {
      var value = owner[this.expando];
      if (!value) {
        value = Object.create(null);
        if (acceptData(owner)) {
          if (owner.nodeType) {
            owner[this.expando] = value;
          } else {
            Object.defineProperty(owner, this.expando, {
              value,
              configurable: true
            });
          }
        }
      }
      return value;
    },
    set: function(owner, data, value) {
      var prop, cache = this.cache(owner);
      if (typeof data === "string") {
        cache[camelCase(data)] = value;
      } else {
        for (prop in data) {
          cache[camelCase(prop)] = data[prop];
        }
      }
      return value;
    },
    get: function(owner, key) {
      return key === undefined ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
    },
    access: function(owner, key, value) {
      if (key === undefined || key && typeof key === "string" && value === undefined) {
        return this.get(owner, key);
      }
      this.set(owner, key, value);
      return value !== undefined ? value : key;
    },
    remove: function(owner, key) {
      var i2, cache = owner[this.expando];
      if (cache === undefined) {
        return;
      }
      if (key !== undefined) {
        if (Array.isArray(key)) {
          key = key.map(camelCase);
        } else {
          key = camelCase(key);
          key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
        }
        i2 = key.length;
        while (i2--) {
          delete cache[key[i2]];
        }
      }
      if (key === undefined || jQuery.isEmptyObject(cache)) {
        if (owner.nodeType) {
          owner[this.expando] = undefined;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function(owner) {
      var cache = owner[this.expando];
      return cache !== undefined && !jQuery.isEmptyObject(cache);
    }
  };
  var dataPriv = new Data;
  var dataUser = new Data;
  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
  function getData(data) {
    if (data === "true") {
      return true;
    }
    if (data === "false") {
      return false;
    }
    if (data === "null") {
      return null;
    }
    if (data === +data + "") {
      return +data;
    }
    if (rbrace.test(data)) {
      return JSON.parse(data);
    }
    return data;
  }
  function dataAttr(elem, key, data) {
    var name;
    if (data === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
      data = elem.getAttribute(name);
      if (typeof data === "string") {
        try {
          data = getData(data);
        } catch (e) {}
        dataUser.set(elem, key, data);
      } else {
        data = undefined;
      }
    }
    return data;
  }
  jQuery.extend({
    hasData: function(elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function(elem, name, data) {
      return dataUser.access(elem, name, data);
    },
    removeData: function(elem, name) {
      dataUser.remove(elem, name);
    },
    _data: function(elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData: function(elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data: function(key, value) {
      var i2, name, data, elem = this[0], attrs = elem && elem.attributes;
      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem);
          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            i2 = attrs.length;
            while (i2--) {
              if (attrs[i2]) {
                name = attrs[i2].name;
                if (name.indexOf("data-") === 0) {
                  name = camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }
            dataPriv.set(elem, "hasDataAttrs", true);
          }
        }
        return data;
      }
      if (typeof key === "object") {
        return this.each(function() {
          dataUser.set(this, key);
        });
      }
      return access(this, function(value2) {
        var data2;
        if (elem && value2 === undefined) {
          data2 = dataUser.get(elem, key);
          if (data2 !== undefined) {
            return data2;
          }
          data2 = dataAttr(elem, key);
          if (data2 !== undefined) {
            return data2;
          }
          return;
        }
        this.each(function() {
          dataUser.set(this, key, value2);
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function(key) {
      return this.each(function() {
        dataUser.remove(this, key);
      });
    }
  });
  jQuery.extend({
    queue: function(elem, type, data) {
      var queue;
      if (elem) {
        type = (type || "fx") + "queue";
        queue = dataPriv.get(elem, type);
        if (data) {
          if (!queue || Array.isArray(data)) {
            queue = dataPriv.set(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }
        return queue || [];
      }
    },
    dequeue: function(elem, type) {
      type = type || "fx";
      var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
        jQuery.dequeue(elem, type);
      };
      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }
      if (fn) {
        if (type === "fx") {
          queue.unshift("inprogress");
        }
        delete hooks.stop;
        fn.call(elem, next, hooks);
      }
      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    _queueHooks: function(elem, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.set(elem, key, {
        empty: jQuery.Callbacks("once memory").add(function() {
          dataPriv.remove(elem, [type + "queue", key]);
        })
      });
    }
  });
  jQuery.fn.extend({
    queue: function(type, data) {
      var setter = 2;
      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }
      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }
      return data === undefined ? this : this.each(function() {
        var queue = jQuery.queue(this, type, data);
        jQuery._queueHooks(this, type);
        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function(type) {
      return this.each(function() {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function(type) {
      return this.queue(type || "fx", []);
    },
    promise: function(type, obj) {
      var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i2 = this.length, resolve = function() {
        if (!--count) {
          defer.resolveWith(elements, [elements]);
        }
      };
      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }
      type = type || "fx";
      while (i2--) {
        tmp = dataPriv.get(elements[i2], type + "queueHooks");
        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }
      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  function isHiddenWithinTree(elem, el) {
    elem = el || elem;
    return elem.style.display === "none" || elem.style.display === "" && jQuery.css(elem, "display") === "none";
  }
  var ralphaStart = /^[a-z]/, rautoPx = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
  function isAutoPx(prop) {
    return ralphaStart.test(prop) && rautoPx.test(prop[0].toUpperCase() + prop.slice(1));
  }
  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
      return tween.cur();
    } : function() {
      return jQuery.css(elem, prop, "");
    }, initial = currentValue(), unit = valueParts && valueParts[3] || (isAutoPx(prop) ? "px" : ""), initialInUnit = elem.nodeType && (!isAutoPx(prop) || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
    if (initialInUnit && initialInUnit[3] !== unit) {
      initial = initial / 2;
      unit = unit || initialInUnit[3];
      initialInUnit = +initial || 1;
      while (maxIterations--) {
        jQuery.style(elem, prop, initialInUnit + unit);
        if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
          maxIterations = 0;
        }
        initialInUnit = initialInUnit / scale;
      }
      initialInUnit = initialInUnit * 2;
      jQuery.style(elem, prop, initialInUnit + unit);
      valueParts = valueParts || [];
    }
    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0;
      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }
    return adjusted;
  }
  var rmsPrefix = /^-ms-/;
  function cssCamelCase(string) {
    return camelCase(string.replace(rmsPrefix, "ms-"));
  }
  var defaultDisplayMap = {};
  function getDefaultDisplay(elem) {
    var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
    if (display) {
      return display;
    }
    temp = doc.body.appendChild(doc.createElement(nodeName2));
    display = jQuery.css(temp, "display");
    temp.parentNode.removeChild(temp);
    if (display === "none") {
      display = "block";
    }
    defaultDisplayMap[nodeName2] = display;
    return display;
  }
  function showHide(elements, show) {
    var display, elem, values = [], index = 0, length = elements.length;
    for (;index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }
      display = elem.style.display;
      if (show) {
        if (display === "none") {
          values[index] = dataPriv.get(elem, "display") || null;
          if (!values[index]) {
            elem.style.display = "";
          }
        }
        if (elem.style.display === "" && isHiddenWithinTree(elem)) {
          values[index] = getDefaultDisplay(elem);
        }
      } else {
        if (display !== "none") {
          values[index] = "none";
          dataPriv.set(elem, "display", display);
        }
      }
    }
    for (index = 0;index < length; index++) {
      if (values[index] != null) {
        elements[index].style.display = values[index];
      }
    }
    return elements;
  }
  jQuery.fn.extend({
    show: function() {
      return showHide(this, true);
    },
    hide: function() {
      return showHide(this);
    },
    toggle: function(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }
      return this.each(function() {
        if (isHiddenWithinTree(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  var isAttached = function(elem) {
    return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
  }, composed = { composed: true };
  if (!documentElement$1.getRootNode) {
    isAttached = function(elem) {
      return jQuery.contains(elem.ownerDocument, elem);
    };
  }
  var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
  var wrapMap = {
    thead: ["table"],
    col: ["colgroup", "table"],
    tr: ["tbody", "table"],
    td: ["tr", "tbody", "table"]
  };
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;
  function getAll(context, tag) {
    var ret;
    if (typeof context.getElementsByTagName !== "undefined") {
      ret = arr.slice.call(context.getElementsByTagName(tag || "*"));
    } else if (typeof context.querySelectorAll !== "undefined") {
      ret = context.querySelectorAll(tag || "*");
    } else {
      ret = [];
    }
    if (tag === undefined || tag && nodeName(context, tag)) {
      return jQuery.merge([context], ret);
    }
    return ret;
  }
  var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
  function setGlobalEval(elems, refElements) {
    var i2 = 0, l = elems.length;
    for (;i2 < l; i2++) {
      dataPriv.set(elems[i2], "globalEval", !refElements || dataPriv.get(refElements[i2], "globalEval"));
    }
  }
  var rhtml = /<|&#?\w+;/;
  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i2 = 0, l = elems.length;
    for (;i2 < l; i2++) {
      elem = elems[i2];
      if (elem || elem === 0) {
        if (toType(elem) === "object" && (elem.nodeType || isArrayLike(elem))) {
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem));
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div"));
          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || arr;
          j = wrap.length;
          while (--j > -1) {
            tmp = tmp.appendChild(context.createElement(wrap[j]));
          }
          tmp.innerHTML = jQuery.htmlPrefilter(elem);
          jQuery.merge(nodes, tmp.childNodes);
          tmp = fragment.firstChild;
          tmp.textContent = "";
        }
      }
    }
    fragment.textContent = "";
    i2 = 0;
    while (elem = nodes[i2++]) {
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }
        continue;
      }
      attached = isAttached(elem);
      tmp = getAll(fragment.appendChild(elem), "script");
      if (attached) {
        setGlobalEval(tmp);
      }
      if (scripts) {
        j = 0;
        while (elem = tmp[j++]) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }
    return fragment;
  }
  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }
  function restoreScript(elem) {
    if ((elem.type || "").slice(0, 5) === "true/") {
      elem.type = elem.type.slice(5);
    } else {
      elem.removeAttribute("type");
    }
    return elem;
  }
  function domManip(collection, args, callback, ignored) {
    args = flat(args);
    var fragment, first, scripts, hasScripts, node, doc, i2 = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = typeof value === "function";
    if (valueIsFunction) {
      return collection.each(function(index) {
        var self = collection.eq(index);
        args[0] = value.call(this, index, self.html());
        domManip(self, args, callback, ignored);
      });
    }
    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;
      if (fragment.childNodes.length === 1) {
        fragment = first;
      }
      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length;
        for (;i2 < l; i2++) {
          node = fragment;
          if (i2 !== iNoClone) {
            node = jQuery.clone(node, true, true);
            if (hasScripts) {
              jQuery.merge(scripts, getAll(node, "script"));
            }
          }
          callback.call(collection[i2], node, i2);
        }
        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument;
          jQuery.map(scripts, restoreScript);
          for (i2 = 0;i2 < hasScripts; i2++) {
            node = scripts[i2];
            if (rscriptType.test(node.type || "") && !dataPriv.get(node, "globalEval") && jQuery.contains(doc, node)) {
              if (node.src && (node.type || "").toLowerCase() !== "module") {
                if (jQuery._evalUrl && !node.noModule) {
                  jQuery._evalUrl(node.src, {
                    nonce: node.nonce,
                    crossOrigin: node.crossOrigin
                  }, doc);
                }
              } else {
                DOMEval(node.textContent, node, doc);
              }
            }
          }
        }
      }
    }
    return collection;
  }
  var rcheckableType = /^(?:checkbox|radio)$/i;
  var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
  function returnTrue() {
    return true;
  }
  function returnFalse() {
    return false;
  }
  function on(elem, types, selector, data, fn, one) {
    var origFn, type;
    if (typeof types === "object") {
      if (typeof selector !== "string") {
        data = data || selector;
        selector = undefined;
      }
      for (type in types) {
        on(elem, type, selector, data, types[type], one);
      }
      return elem;
    }
    if (data == null && fn == null) {
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        fn = data;
        data = undefined;
      } else {
        fn = data;
        data = selector;
        selector = undefined;
      }
    }
    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }
    if (one === 1) {
      origFn = fn;
      fn = function(event) {
        jQuery().off(event);
        return origFn.apply(this, arguments);
      };
      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }
    return elem.each(function() {
      jQuery.event.add(this, types, fn, data, selector);
    });
  }
  jQuery.event = {
    add: function(elem, types, handler, data, selector) {
      var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
      if (!acceptData(elem)) {
        return;
      }
      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      }
      if (selector) {
        jQuery.find.matchesSelector(documentElement$1, selector);
      }
      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      }
      if (!(events = elemData.events)) {
        events = elemData.events = Object.create(null);
      }
      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function(e) {
          return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
        };
      }
      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        if (!type) {
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        special = jQuery.event.special[type] || {};
        handleObj = jQuery.extend({
          type,
          origType,
          data,
          handler,
          guid: handler.guid,
          selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn);
        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0;
          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle);
            }
          }
        }
        if (special.add) {
          special.add.call(elem, handleObj);
          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        }
        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        }
      }
    },
    remove: function(elem, types, handler, selector, mappedTypes) {
      var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
      if (!elemData || !(events = elemData.events)) {
        return;
      }
      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
        origCount = j = handlers.length;
        while (j--) {
          handleObj = handlers[j];
          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);
            if (handleObj.selector) {
              handlers.delegateCount--;
            }
            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        }
        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }
          delete events[type];
        }
      }
      if (jQuery.isEmptyObject(events)) {
        dataPriv.remove(elem, "handle events");
      }
    },
    dispatch: function(nativeEvent) {
      var i2, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
      args[0] = event;
      for (i2 = 1;i2 < arguments.length; i2++) {
        args[i2] = arguments[i2];
      }
      event.delegateTarget = this;
      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      }
      handlerQueue = jQuery.event.handlers.call(this, event, handlers);
      i2 = 0;
      while ((matched = handlerQueue[i2++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;
        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      }
      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }
      return event.result;
    },
    handlers: function(event, handlers) {
      var i2, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
      if (delegateCount && !(event.type === "click" && event.button >= 1)) {
        for (;cur !== this; cur = cur.parentNode || this) {
          if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
            matchedHandlers = [];
            matchedSelectors = {};
            for (i2 = 0;i2 < delegateCount; i2++) {
              handleObj = handlers[i2];
              sel = handleObj.selector + " ";
              if (matchedSelectors[sel] === undefined) {
                matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
              }
              if (matchedSelectors[sel]) {
                matchedHandlers.push(handleObj);
              }
            }
            if (matchedHandlers.length) {
              handlerQueue.push({ elem: cur, handlers: matchedHandlers });
            }
          }
        }
      }
      cur = this;
      if (delegateCount < handlers.length) {
        handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
      }
      return handlerQueue;
    },
    addProp: function(name, hook) {
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable: true,
        configurable: true,
        get: typeof hook === "function" ? function() {
          if (this.originalEvent) {
            return hook(this.originalEvent);
          }
        } : function() {
          if (this.originalEvent) {
            return this.originalEvent[name];
          }
        },
        set: function(value) {
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value
          });
        }
      });
    },
    fix: function(originalEvent) {
      return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
    },
    special: jQuery.extend(Object.create(null), {
      load: {
        noBubble: true
      },
      click: {
        setup: function(data) {
          var el = this || data;
          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            leverageNative(el, "click", true);
          }
          return false;
        },
        trigger: function(data) {
          var el = this || data;
          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            leverageNative(el, "click");
          }
          return true;
        },
        _default: function(event) {
          var target = event.target;
          return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
        }
      },
      beforeunload: {
        postDispatch: function(event) {
          if (event.result !== undefined) {
            event.preventDefault();
          }
        }
      }
    })
  };
  function leverageNative(el, type, isSetup) {
    if (!isSetup) {
      if (dataPriv.get(el, type) === undefined) {
        jQuery.event.add(el, type, returnTrue);
      }
      return;
    }
    dataPriv.set(el, type, false);
    jQuery.event.add(el, type, {
      namespace: false,
      handler: function(event) {
        var result, saved = dataPriv.get(this, type);
        if (event.isTrigger & 1 && this[type]) {
          if (!saved.length) {
            saved = slice.call(arguments);
            dataPriv.set(this, type, saved);
            this[type]();
            result = dataPriv.get(this, type);
            dataPriv.set(this, type, false);
            if (saved !== result) {
              event.stopImmediatePropagation();
              event.preventDefault();
              return result && result.value;
            }
          } else if ((jQuery.event.special[type] || {}).delegateType) {
            event.stopPropagation();
          }
        } else if (saved.length) {
          dataPriv.set(this, type, {
            value: jQuery.event.trigger(saved[0], saved.slice(1), this)
          });
          event.stopPropagation();
          event.isImmediatePropagationStopped = returnTrue;
        }
      }
    });
  }
  jQuery.removeEvent = function(elem, type, handle) {
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  };
  jQuery.Event = function(src, props) {
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    }
    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type;
      this.isDefaultPrevented = src.defaultPrevented ? returnTrue : returnFalse;
      this.target = src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget;
    } else {
      this.type = src;
    }
    if (props) {
      jQuery.extend(this, props);
    }
    this.timeStamp = src && src.timeStamp || Date.now();
    this[jQuery.expando] = true;
  };
  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;
      if (e && !this.isSimulated) {
        e.preventDefault();
      }
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;
      if (e && !this.isSimulated) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;
      if (e && !this.isSimulated) {
        e.stopImmediatePropagation();
      }
      this.stopPropagation();
    }
  };
  jQuery.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    char: true,
    code: true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: true
  }, jQuery.event.addProp);
  jQuery.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
    function focusMappedHandler(nativeEvent) {
      var event = jQuery.event.fix(nativeEvent);
      event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
      event.isSimulated = true;
      if (event.target === event.currentTarget) {
        dataPriv.get(this, "handle")(event);
      }
    }
    jQuery.event.special[type] = {
      setup: function() {
        leverageNative(this, type, true);
        if (isIE) {
          this.addEventListener(delegateType, focusMappedHandler);
        } else {
          return false;
        }
      },
      trigger: function() {
        leverageNative(this, type);
        return true;
      },
      teardown: function() {
        if (isIE) {
          this.removeEventListener(delegateType, focusMappedHandler);
        } else {
          return false;
        }
      },
      _default: function(event) {
        return dataPriv.get(event.target, type);
      },
      delegateType
    };
  });
  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function(event) {
        var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
        if (!related || related !== target && !jQuery.contains(target, related)) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }
        return ret;
      }
    };
  });
  jQuery.fn.extend({
    on: function(types, selector, data, fn) {
      return on(this, types, selector, data, fn);
    },
    one: function(types, selector, data, fn) {
      return on(this, types, selector, data, fn, 1);
    },
    off: function(types, selector, fn) {
      var handleObj, type;
      if (types && types.preventDefault && types.handleObj) {
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }
      if (typeof types === "object") {
        for (type in types) {
          this.off(type, selector, types[type]);
        }
        return this;
      }
      if (selector === false || typeof selector === "function") {
        fn = selector;
        selector = undefined;
      }
      if (fn === false) {
        fn = returnFalse;
      }
      return this.each(function() {
        jQuery.event.remove(this, types, fn, selector);
      });
    }
  });
  var rnoInnerhtml = /<script|<style|<link/i;
  function manipulationTarget(elem, content) {
    if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
      return jQuery(elem).children("tbody")[0] || elem;
    }
    return elem;
  }
  function cloneCopyEvent(src, dest) {
    var type, i2, l, events = dataPriv.get(src, "events");
    if (dest.nodeType !== 1) {
      return;
    }
    if (events) {
      dataPriv.remove(dest, "handle events");
      for (type in events) {
        for (i2 = 0, l = events[type].length;i2 < l; i2++) {
          jQuery.event.add(dest, type, events[type][i2]);
        }
      }
    }
    if (dataUser.hasData(src)) {
      dataUser.set(dest, jQuery.extend({}, dataUser.get(src)));
    }
  }
  function remove(elem, selector, keepData) {
    var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i2 = 0;
    for (;(node = nodes[i2]) != null; i2++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node));
      }
      if (node.parentNode) {
        if (keepData && isAttached(node)) {
          setGlobalEval(getAll(node, "script"));
        }
        node.parentNode.removeChild(node);
      }
    }
    return elem;
  }
  jQuery.extend({
    htmlPrefilter: function(html) {
      return html;
    },
    clone: function(elem, dataAndEvents, deepDataAndEvents) {
      var i2, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
      if (isIE && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        destElements = getAll(clone);
        srcElements = getAll(elem);
        for (i2 = 0, l = srcElements.length;i2 < l; i2++) {
          if (nodeName(destElements[i2], "textarea")) {
            destElements[i2].defaultValue = srcElements[i2].defaultValue;
          }
        }
      }
      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);
          for (i2 = 0, l = srcElements.length;i2 < l; i2++) {
            cloneCopyEvent(srcElements[i2], destElements[i2]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      }
      destElements = getAll(clone, "script");
      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      }
      return clone;
    },
    cleanData: function(elems) {
      var data, elem, type, special = jQuery.event.special, i2 = 0;
      for (;(elem = elems[i2]) !== undefined; i2++) {
        if (acceptData(elem)) {
          if (data = elem[dataPriv.expando]) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type);
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            }
            elem[dataPriv.expando] = undefined;
          }
          if (elem[dataUser.expando]) {
            elem[dataUser.expando] = undefined;
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    detach: function(selector) {
      return remove(this, selector, true);
    },
    remove: function(selector) {
      return remove(this, selector);
    },
    text: function(value) {
      return access(this, function(value2) {
        return value2 === undefined ? jQuery.text(this) : this.empty().each(function() {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value2;
          }
        });
      }, null, value, arguments.length);
    },
    append: function() {
      return domManip(this, arguments, function(elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function() {
      return domManip(this, arguments, function(elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function() {
      return domManip(this, arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function() {
      return domManip(this, arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function() {
      var elem, i2 = 0;
      for (;(elem = this[i2]) != null; i2++) {
        if (elem.nodeType === 1) {
          jQuery.cleanData(getAll(elem, false));
          elem.textContent = "";
        }
      }
      return this;
    },
    clone: function(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function() {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function(value) {
      return access(this, function(value2) {
        var elem = this[0] || {}, i2 = 0, l = this.length;
        if (value2 === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        }
        if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
          value2 = jQuery.htmlPrefilter(value2);
          try {
            for (;i2 < l; i2++) {
              elem = this[i2] || {};
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value2;
              }
            }
            elem = 0;
          } catch (e) {}
        }
        if (elem) {
          this.empty().append(value2);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function() {
      var ignored = [];
      return domManip(this, arguments, function(elem) {
        var parent = this.parentNode;
        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));
          if (parent) {
            parent.replaceChild(elem, this);
          }
        }
      }, ignored);
    }
  });
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(name, original) {
    jQuery.fn[name] = function(selector) {
      var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i2 = 0;
      for (;i2 <= last; i2++) {
        elems = i2 === last ? this : this.clone(true);
        jQuery(insert[i2])[original](elems);
        push.apply(ret, elems);
      }
      return this.pushStack(ret);
    };
  });
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
  var rcustomProp = /^--/;
  function getStyles(elem) {
    var view = elem.ownerDocument.defaultView;
    if (!view) {
      view = window2;
    }
    return view.getComputedStyle(elem);
  }
  function swap(elem, options, callback) {
    var ret, name, old = {};
    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }
    ret = callback.call(elem);
    for (name in options) {
      elem.style[name] = old[name];
    }
    return ret;
  }
  function curCSS(elem, name, computed) {
    var ret, isCustomProp = rcustomProp.test(name);
    computed = computed || getStyles(elem);
    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];
      if (isCustomProp && ret) {
        ret = ret.replace(rtrimCSS, "$1") || undefined;
      }
      if (ret === "" && !isAttached(elem)) {
        ret = jQuery.style(elem, name);
      }
    }
    return ret !== undefined ? ret + "" : ret;
  }
  var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document$1.createElement("div").style;
  function vendorPropName(name) {
    var capName = name[0].toUpperCase() + name.slice(1), i2 = cssPrefixes.length;
    while (i2--) {
      name = cssPrefixes[i2] + capName;
      if (name in emptyStyle) {
        return name;
      }
    }
  }
  function finalPropName(name) {
    if (name in emptyStyle) {
      return name;
    }
    return vendorPropName(name) || name;
  }
  var reliableTrDimensionsVal, reliableColDimensionsVal, table = document$1.createElement("table");
  function computeTableStyleTests() {
    if (!table || !table.style) {
      return;
    }
    var trStyle, col = document$1.createElement("col"), tr = document$1.createElement("tr"), td = document$1.createElement("td");
    table.style.cssText = "position:absolute;left:-11111px;" + "border-collapse:separate;border-spacing:0";
    tr.style.cssText = "box-sizing:content-box;border:1px solid;height:1px";
    td.style.cssText = "height:9px;width:9px;padding:0";
    col.span = 2;
    documentElement$1.appendChild(table).appendChild(col).parentNode.appendChild(tr).appendChild(td).parentNode.appendChild(td.cloneNode(true));
    if (table.offsetWidth === 0) {
      documentElement$1.removeChild(table);
      return;
    }
    trStyle = window2.getComputedStyle(tr);
    reliableColDimensionsVal = isIE || Math.round(parseFloat(window2.getComputedStyle(col).width)) === 18;
    reliableTrDimensionsVal = Math.round(parseFloat(trStyle.height) + parseFloat(trStyle.borderTopWidth) + parseFloat(trStyle.borderBottomWidth)) === tr.offsetHeight;
    documentElement$1.removeChild(table);
    table = null;
  }
  jQuery.extend(support, {
    reliableTrDimensions: function() {
      computeTableStyleTests();
      return reliableTrDimensionsVal;
    },
    reliableColDimensions: function() {
      computeTableStyleTests();
      return reliableColDimensionsVal;
    }
  });
  var cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
    letterSpacing: "0",
    fontWeight: "400"
  };
  function setPositiveNumber(_elem, value, subtract) {
    var matches2 = rcssNum.exec(value);
    return matches2 ? Math.max(0, matches2[2] - (subtract || 0)) + (matches2[3] || "px") : value;
  }
  function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
    var i2 = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
    if (box === (isBorderBox ? "border" : "content")) {
      return 0;
    }
    for (;i2 < 4; i2 += 2) {
      if (box === "margin") {
        marginDelta += jQuery.css(elem, box + cssExpand[i2], true, styles);
      }
      if (!isBorderBox) {
        delta += jQuery.css(elem, "padding" + cssExpand[i2], true, styles);
        if (box !== "padding") {
          delta += jQuery.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
        } else {
          extra += jQuery.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
        }
      } else {
        if (box === "content") {
          delta -= jQuery.css(elem, "padding" + cssExpand[i2], true, styles);
        }
        if (box !== "margin") {
          delta -= jQuery.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
        }
      }
    }
    if (!isBorderBox && computedVal >= 0) {
      delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5)) || 0;
    }
    return delta + marginDelta;
  }
  function getWidthOrHeight(elem, dimension, extra) {
    var styles = getStyles(elem), boxSizingNeeded = isIE || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
    if (rnumnonpx.test(val)) {
      if (!extra) {
        return val;
      }
      val = "auto";
    }
    if ((val === "auto" || isIE && isBorderBox || !support.reliableColDimensions() && nodeName(elem, "col") || !support.reliableTrDimensions() && nodeName(elem, "tr")) && elem.getClientRects().length) {
      isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
      valueIsBorderBox = offsetProp in elem;
      if (valueIsBorderBox) {
        val = elem[offsetProp];
      }
    }
    val = parseFloat(val) || 0;
    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, val) + "px";
  }
  jQuery.extend({
    cssHooks: {},
    style: function(elem, name, value, extra) {
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      }
      var ret, type, hooks, origName = cssCamelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
      if (!isCustomProp) {
        name = finalPropName(origName);
      }
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
      if (value !== undefined) {
        type = typeof value;
        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret);
          type = "number";
        }
        if (value == null || value !== value) {
          return;
        }
        if (type === "number") {
          value += ret && ret[3] || (isAutoPx(origName) ? "px" : "");
        }
        if (isIE && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        }
        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          if (isCustomProp) {
            style.setProperty(name, value);
          } else {
            style[name] = value;
          }
        }
      } else {
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        }
        return style[name];
      }
    },
    css: function(elem, name, extra, styles) {
      var val, num, hooks, origName = cssCamelCase(name), isCustomProp = rcustomProp.test(name);
      if (!isCustomProp) {
        name = finalPropName(origName);
      }
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      }
      if (val === undefined) {
        val = curCSS(elem, name, styles);
      }
      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      }
      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }
      return val;
    }
  });
  jQuery.each(["height", "width"], function(_i, dimension) {
    jQuery.cssHooks[dimension] = {
      get: function(elem, computed, extra) {
        if (computed) {
          return jQuery.css(elem, "display") === "none" ? swap(elem, cssShow, function() {
            return getWidthOrHeight(elem, dimension, extra);
          }) : getWidthOrHeight(elem, dimension, extra);
        }
      },
      set: function(elem, value, extra) {
        var matches2, styles = getStyles(elem), isBorderBox = extra && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
        if (subtract && (matches2 = rcssNum.exec(value)) && (matches2[3] || "px") !== "px") {
          elem.style[dimension] = value;
          value = jQuery.css(elem, dimension);
        }
        return setPositiveNumber(elem, value, subtract);
      }
    };
  });
  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand: function(value) {
        var i2 = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
        for (;i2 < 4; i2++) {
          expanded[prefix + cssExpand[i2] + suffix] = parts[i2] || parts[i2 - 2] || parts[0];
        }
        return expanded;
      }
    };
    if (prefix !== "margin") {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({
    css: function(name, value) {
      return access(this, function(elem, name2, value2) {
        var styles, len, map = {}, i2 = 0;
        if (Array.isArray(name2)) {
          styles = getStyles(elem);
          len = name2.length;
          for (;i2 < len; i2++) {
            map[name2[i2]] = jQuery.css(elem, name2[i2], false, styles);
          }
          return map;
        }
        return value2 !== undefined ? jQuery.style(elem, name2, value2) : jQuery.css(elem, name2);
      }, name, value, arguments.length > 1);
    }
  });
  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }
  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (isAutoPx(prop) ? "px" : "");
    },
    cur: function() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function(percent) {
      var eased, hooks = Tween.propHooks[this.prop];
      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }
      this.now = (this.end - this.start) * eased + this.start;
      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }
      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }
      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default: {
      get: function(tween) {
        var result;
        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop];
        }
        result = jQuery.css(tween.elem, tween.prop, "");
        return !result || result === "auto" ? 0 : result;
      },
      set: function(tween) {
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }
  };
  jQuery.easing = {
    linear: function(p) {
      return p;
    },
    swing: function(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
  };
  jQuery.fx = Tween.prototype.init;
  jQuery.fx.step = {};
  var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
  function schedule() {
    if (inProgress) {
      if (document$1.hidden === false && window2.requestAnimationFrame) {
        window2.requestAnimationFrame(schedule);
      } else {
        window2.setTimeout(schedule, 13);
      }
      jQuery.fx.tick();
    }
  }
  function createFxNow() {
    window2.setTimeout(function() {
      fxNow = undefined;
    });
    return fxNow = Date.now();
  }
  function genFx(type, includeWidth) {
    var which, i2 = 0, attrs = { height: type };
    includeWidth = includeWidth ? 1 : 0;
    for (;i2 < 4; i2 += 2 - includeWidth) {
      which = cssExpand[i2];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }
    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }
    return attrs;
  }
  function createTween(value, prop, animation) {
    var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
    for (;index < length; index++) {
      if (tween = collection[index].call(animation, prop, value)) {
        return tween;
      }
    }
  }
  function defaultPrefilter(elem, props, opts) {
    var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");
      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;
        hooks.empty.fire = function() {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }
      hooks.unqueued++;
      anim.always(function() {
        anim.always(function() {
          hooks.unqueued--;
          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    }
    for (prop in props) {
      value = props[prop];
      if (rfxtypes.test(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";
        if (value === (hidden ? "hide" : "show")) {
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true;
          } else {
            continue;
          }
        }
        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      }
    }
    propTween = !jQuery.isEmptyObject(props);
    if (!propTween && jQuery.isEmptyObject(orig)) {
      return;
    }
    if (isBox && elem.nodeType === 1) {
      opts.overflow = [style.overflow, style.overflowX, style.overflowY];
      restoreDisplay = dataShow && dataShow.display;
      if (restoreDisplay == null) {
        restoreDisplay = dataPriv.get(elem, "display");
      }
      display = jQuery.css(elem, "display");
      if (display === "none") {
        if (restoreDisplay) {
          display = restoreDisplay;
        } else {
          showHide([elem], true);
          restoreDisplay = elem.style.display || restoreDisplay;
          display = jQuery.css(elem, "display");
          showHide([elem]);
        }
      }
      if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
        if (jQuery.css(elem, "float") === "none") {
          if (!propTween) {
            anim.done(function() {
              style.display = restoreDisplay;
            });
            if (restoreDisplay == null) {
              display = style.display;
              restoreDisplay = display === "none" ? "" : display;
            }
          }
          style.display = "inline-block";
        }
      }
    }
    if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function() {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    }
    propTween = false;
    for (prop in orig) {
      if (!propTween) {
        if (dataShow) {
          if ("hidden" in dataShow) {
            hidden = dataShow.hidden;
          }
        } else {
          dataShow = dataPriv.set(elem, "fxshow", { display: restoreDisplay });
        }
        if (toggle) {
          dataShow.hidden = !hidden;
        }
        if (hidden) {
          showHide([elem], true);
        }
        anim.done(function() {
          if (!hidden) {
            showHide([elem]);
          }
          dataPriv.remove(elem, "fxshow");
          for (prop in orig) {
            jQuery.style(elem, prop, orig[prop]);
          }
        });
      }
      propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
      if (!(prop in dataShow)) {
        dataShow[prop] = propTween.start;
        if (hidden) {
          propTween.end = propTween.start;
          propTween.start = 0;
        }
      }
    }
  }
  function propFilter(props, specialEasing) {
    var index, name, easing, value, hooks;
    for (index in props) {
      name = cssCamelCase(index);
      easing = specialEasing[name];
      value = props[index];
      if (Array.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }
      if (index !== name) {
        props[name] = value;
        delete props[index];
      }
      hooks = jQuery.cssHooks[name];
      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name];
        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }
  function Animation(elem, properties, options) {
    var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
      delete tick.elem;
    }), tick = function() {
      if (stopped) {
        return false;
      }
      var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), percent = 1 - (remaining / animation.duration || 0), index2 = 0, length2 = animation.tweens.length;
      for (;index2 < length2; index2++) {
        animation.tweens[index2].run(percent);
      }
      deferred.notifyWith(elem, [animation, percent, remaining]);
      if (percent < 1 && length2) {
        return remaining;
      }
      if (!length2) {
        deferred.notifyWith(elem, [animation, 1, 0]);
      }
      deferred.resolveWith(elem, [animation]);
      return false;
    }, animation = deferred.promise({
      elem,
      props: jQuery.extend({}, properties),
      opts: jQuery.extend(true, {
        specialEasing: {},
        easing: jQuery.easing._default
      }, options),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function(prop, end) {
        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
        animation.tweens.push(tween);
        return tween;
      },
      stop: function(gotoEnd) {
        var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
        if (stopped) {
          return this;
        }
        stopped = true;
        for (;index2 < length2; index2++) {
          animation.tweens[index2].run(1);
        }
        if (gotoEnd) {
          deferred.notifyWith(elem, [animation, 1, 0]);
          deferred.resolveWith(elem, [animation, gotoEnd]);
        } else {
          deferred.rejectWith(elem, [animation, gotoEnd]);
        }
        return this;
      }
    }), props = animation.props;
    propFilter(props, animation.opts.specialEasing);
    for (;index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
      if (result) {
        if (typeof result.stop === "function") {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
        }
        return result;
      }
    }
    jQuery.map(props, createTween, animation);
    if (typeof animation.opts.start === "function") {
      animation.opts.start.call(elem, animation);
    }
    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    jQuery.fx.timer(jQuery.extend(tick, {
      elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation;
  }
  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {
      "*": [function(prop, value) {
        var tween = this.createTween(prop, value);
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
        return tween;
      }]
    },
    tweener: function(props, callback) {
      if (typeof props === "function") {
        callback = props;
        props = ["*"];
      } else {
        props = props.match(rnothtmlwhite);
      }
      var prop, index = 0, length = props.length;
      for (;index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function(callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });
  jQuery.speed = function(speed, easing, fn) {
    var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
      complete: fn || easing || typeof speed === "function" && speed,
      duration: speed,
      easing: fn && easing || easing && typeof easing !== "function" && easing
    };
    if (jQuery.fx.off) {
      opt.duration = 0;
    } else {
      if (typeof opt.duration !== "number") {
        if (opt.duration in jQuery.fx.speeds) {
          opt.duration = jQuery.fx.speeds[opt.duration];
        } else {
          opt.duration = jQuery.fx.speeds._default;
        }
      }
    }
    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    }
    opt.old = opt.complete;
    opt.complete = function() {
      if (typeof opt.old === "function") {
        opt.old.call(this);
      }
      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };
    return opt;
  };
  jQuery.fn.extend({
    fadeTo: function(speed, to, easing, callback) {
      return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
    },
    animate: function(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
        var anim = Animation(this, jQuery.extend({}, prop), optall);
        if (empty || dataPriv.get(this, "finish")) {
          anim.stop(true);
        }
      };
      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function(type, clearQueue, gotoEnd) {
      var stopQueue = function(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };
      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }
      if (clearQueue) {
        this.queue(type || "fx", []);
      }
      return this.each(function() {
        var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }
        for (index = timers.length;index--; ) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        }
        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function(type) {
      if (type !== false) {
        type = type || "fx";
      }
      return this.each(function() {
        var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
        data.finish = true;
        jQuery.queue(this, type, []);
        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        }
        for (index = timers.length;index--; ) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        }
        for (index = 0;index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        }
        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function(_i, name) {
    var cssFn = jQuery.fn[name];
    jQuery.fn[name] = function(speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  });
  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: { opacity: "show" },
    fadeOut: { opacity: "hide" },
    fadeToggle: { opacity: "toggle" }
  }, function(name, props) {
    jQuery.fn[name] = function(speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.timers = [];
  jQuery.fx.tick = function() {
    var timer, i2 = 0, timers = jQuery.timers;
    fxNow = Date.now();
    for (;i2 < timers.length; i2++) {
      timer = timers[i2];
      if (!timer() && timers[i2] === timer) {
        timers.splice(i2--, 1);
      }
    }
    if (!timers.length) {
      jQuery.fx.stop();
    }
    fxNow = undefined;
  };
  jQuery.fx.timer = function(timer) {
    jQuery.timers.push(timer);
    jQuery.fx.start();
  };
  jQuery.fx.start = function() {
    if (inProgress) {
      return;
    }
    inProgress = true;
    schedule();
  };
  jQuery.fx.stop = function() {
    inProgress = null;
  };
  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  };
  jQuery.fn.delay = function(time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function(next, hooks) {
      var timeout = window2.setTimeout(next, time);
      hooks.stop = function() {
        window2.clearTimeout(timeout);
      };
    });
  };
  var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop: function(name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function(name) {
      return this.each(function() {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    prop: function(elem, name, value) {
      var ret, hooks, nType = elem.nodeType;
      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }
      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }
        return elem[name] = value;
      }
      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }
      return elem[name];
    },
    propHooks: {
      tabIndex: {
        get: function(elem) {
          var tabindex = elem.getAttribute("tabindex");
          if (tabindex) {
            return parseInt(tabindex, 10);
          }
          if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
            return 0;
          }
          return -1;
        }
      }
    },
    propFix: {
      for: "htmlFor",
      class: "className"
    }
  });
  if (isIE) {
    jQuery.propHooks.selected = {
      get: function(elem) {
        var parent = elem.parentNode;
        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }
        return null;
      },
      set: function(elem) {
        var parent = elem.parentNode;
        if (parent) {
          parent.selectedIndex;
          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
      }
    };
  }
  jQuery.each([
    "tabIndex",
    "readOnly",
    "maxLength",
    "cellSpacing",
    "cellPadding",
    "rowSpan",
    "colSpan",
    "useMap",
    "frameBorder",
    "contentEditable"
  ], function() {
    jQuery.propFix[this.toLowerCase()] = this;
  });
  function stripAndCollapse(value) {
    var tokens = value.match(rnothtmlwhite) || [];
    return tokens.join(" ");
  }
  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }
  function classesToArray(value) {
    if (Array.isArray(value)) {
      return value;
    }
    if (typeof value === "string") {
      return value.match(rnothtmlwhite) || [];
    }
    return [];
  }
  jQuery.fn.extend({
    addClass: function(value) {
      var classNames, cur, curValue, className, i2, finalValue;
      if (typeof value === "function") {
        return this.each(function(j) {
          jQuery(this).addClass(value.call(this, j, getClass(this)));
        });
      }
      classNames = classesToArray(value);
      if (classNames.length) {
        return this.each(function() {
          curValue = getClass(this);
          cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
          if (cur) {
            for (i2 = 0;i2 < classNames.length; i2++) {
              className = classNames[i2];
              if (cur.indexOf(" " + className + " ") < 0) {
                cur += className + " ";
              }
            }
            finalValue = stripAndCollapse(cur);
            if (curValue !== finalValue) {
              this.setAttribute("class", finalValue);
            }
          }
        });
      }
      return this;
    },
    removeClass: function(value) {
      var classNames, cur, curValue, className, i2, finalValue;
      if (typeof value === "function") {
        return this.each(function(j) {
          jQuery(this).removeClass(value.call(this, j, getClass(this)));
        });
      }
      if (!arguments.length) {
        return this.attr("class", "");
      }
      classNames = classesToArray(value);
      if (classNames.length) {
        return this.each(function() {
          curValue = getClass(this);
          cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
          if (cur) {
            for (i2 = 0;i2 < classNames.length; i2++) {
              className = classNames[i2];
              while (cur.indexOf(" " + className + " ") > -1) {
                cur = cur.replace(" " + className + " ", " ");
              }
            }
            finalValue = stripAndCollapse(cur);
            if (curValue !== finalValue) {
              this.setAttribute("class", finalValue);
            }
          }
        });
      }
      return this;
    },
    toggleClass: function(value, stateVal) {
      var classNames, className, i2, self;
      if (typeof value === "function") {
        return this.each(function(i3) {
          jQuery(this).toggleClass(value.call(this, i3, getClass(this), stateVal), stateVal);
        });
      }
      if (typeof stateVal === "boolean") {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }
      classNames = classesToArray(value);
      if (classNames.length) {
        return this.each(function() {
          self = jQuery(this);
          for (i2 = 0;i2 < classNames.length; i2++) {
            className = classNames[i2];
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          }
        });
      }
      return this;
    },
    hasClass: function(selector) {
      var className, elem, i2 = 0;
      className = " " + selector + " ";
      while (elem = this[i2++]) {
        if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
          return true;
        }
      }
      return false;
    }
  });
  jQuery.fn.extend({
    val: function(value) {
      var hooks, ret, valueIsFunction, elem = this[0];
      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }
          ret = elem.value;
          return ret == null ? "" : ret;
        }
        return;
      }
      valueIsFunction = typeof value === "function";
      return this.each(function(i2) {
        var val;
        if (this.nodeType !== 1) {
          return;
        }
        if (valueIsFunction) {
          val = value.call(this, i2, jQuery(this).val());
        } else {
          val = value;
        }
        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (Array.isArray(val)) {
          val = jQuery.map(val, function(value2) {
            return value2 == null ? "" : value2 + "";
          });
        }
        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }
  });
  jQuery.extend({
    valHooks: {
      select: {
        get: function(elem) {
          var value, option, i2, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
          if (index < 0) {
            i2 = max;
          } else {
            i2 = one ? index : 0;
          }
          for (;i2 < max; i2++) {
            option = options[i2];
            if (option.selected && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
              value = jQuery(option).val();
              if (one) {
                return value;
              }
              values.push(value);
            }
          }
          return values;
        },
        set: function(elem, value) {
          var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i2 = options.length;
          while (i2--) {
            option = options[i2];
            if (option.selected = jQuery.inArray(jQuery(option).val(), values) > -1) {
              optionSet = true;
            }
          }
          if (!optionSet) {
            elem.selectedIndex = -1;
          }
          return values;
        }
      }
    }
  });
  if (isIE) {
    jQuery.valHooks.option = {
      get: function(elem) {
        var val = elem.getAttribute("value");
        return val != null ? val : stripAndCollapse(jQuery.text(elem));
      }
    };
  }
  jQuery.each(["radio", "checkbox"], function() {
    jQuery.valHooks[this] = {
      set: function(elem, value) {
        if (Array.isArray(value)) {
          return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
        }
      }
    };
  });
  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
    e.stopPropagation();
  };
  jQuery.extend(jQuery.event, {
    trigger: function(event, data, elem, onlyHandlers) {
      var i2, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document$1], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = lastElement = tmp = elem = elem || document$1;
      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      }
      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }
      if (type.indexOf(".") > -1) {
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }
      ontype = type.indexOf(":") < 0 && "on" + type;
      event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
      event.result = undefined;
      if (!event.target) {
        event.target = elem;
      }
      data = data == null ? [event] : jQuery.makeArray(data, [event]);
      special = jQuery.event.special[type] || {};
      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      }
      if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
        bubbleType = special.delegateType || type;
        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }
        for (;cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        }
        if (tmp === (elem.ownerDocument || document$1)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
        }
      }
      i2 = 0;
      while ((cur = eventPath[i2++]) && !event.isPropagationStopped()) {
        lastElement = cur;
        event.type = i2 > 1 ? bubbleType : special.bindType || type;
        handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");
        if (handle) {
          handle.apply(cur, data);
        }
        handle = ontype && cur[ontype];
        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data);
          if (event.result === false) {
            event.preventDefault();
          }
        }
      }
      event.type = type;
      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
          if (ontype && typeof elem[type] === "function" && !isWindow(elem)) {
            tmp = elem[ontype];
            if (tmp) {
              elem[ontype] = null;
            }
            jQuery.event.triggered = type;
            if (event.isPropagationStopped()) {
              lastElement.addEventListener(type, stopPropagationCallback);
            }
            elem[type]();
            if (event.isPropagationStopped()) {
              lastElement.removeEventListener(type, stopPropagationCallback);
            }
            jQuery.event.triggered = undefined;
            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }
      return event.result;
    },
    simulate: function(type, elem, event) {
      var e = jQuery.extend(new jQuery.Event, event, {
        type,
        isSimulated: true
      });
      jQuery.event.trigger(e, null, elem);
    }
  });
  jQuery.fn.extend({
    trigger: function(type, data) {
      return this.each(function() {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function(type, data) {
      var elem = this[0];
      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  });
  var location2 = window2.location;
  var nonce = { guid: Date.now() };
  var rquery = /\?/;
  jQuery.parseXML = function(data) {
    var xml, parserErrorElem;
    if (!data || typeof data !== "string") {
      return null;
    }
    try {
      xml = new window2.DOMParser().parseFromString(data, "text/xml");
    } catch (e) {}
    parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
    if (!xml || parserErrorElem) {
      jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
        return el.textContent;
      }).join(`
`) : data));
    }
    return xml;
  };
  var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
  function buildParams(prefix, obj, traditional, add) {
    var name;
    if (Array.isArray(obj)) {
      jQuery.each(obj, function(i2, v) {
        if (traditional || rbracket.test(prefix)) {
          add(prefix, v);
        } else {
          buildParams(prefix + "[" + (typeof v === "object" && v != null ? i2 : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && toType(obj) === "object") {
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      add(prefix, obj);
    }
  }
  jQuery.param = function(a, traditional) {
    var prefix, s = [], add = function(key, valueOrFunction) {
      var value = typeof valueOrFunction === "function" ? valueOrFunction() : valueOrFunction;
      s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
    };
    if (a == null) {
      return "";
    }
    if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
      jQuery.each(a, function() {
        add(this.name, this.value);
      });
    } else {
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    }
    return s.join("&");
  };
  jQuery.fn.extend({
    serialize: function() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function() {
      return this.map(function() {
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function() {
        var type = this.type;
        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function(_i, elem) {
        var val = jQuery(this).val();
        if (val == null) {
          return null;
        }
        if (Array.isArray(val)) {
          return jQuery.map(val, function(val2) {
            return { name: elem.name, value: val2.replace(rCRLF, `\r
`) };
          });
        }
        return { name: elem.name, value: val.replace(rCRLF, `\r
`) };
      }).get();
    }
  });
  var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document$1.createElement("a");
  originAnchor.href = location2.href;
  function addToPrefiltersOrTransports(structure) {
    return function(dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }
      var dataType, i2 = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
      if (typeof func === "function") {
        while (dataType = dataTypes[i2++]) {
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func);
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  }
  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {}, seekingTransport = structure === transports;
    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }
    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  }
  function ajaxExtend(target, src) {
    var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
      }
    }
    if (deep) {
      jQuery.extend(true, target, deep);
    }
    return target;
  }
  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
    while (dataTypes[0] === "*") {
      dataTypes.shift();
      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    }
    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    }
    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }
        if (!firstDataType) {
          firstDataType = type;
        }
      }
      finalDataType = finalDataType || firstDataType;
    }
    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }
      return responses[finalDataType];
    }
  }
  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }
    current = dataTypes.shift();
    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      }
      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }
      prev = current;
      current = dataTypes.shift();
      if (current) {
        if (current === "*") {
          current = prev;
        } else if (prev !== "*" && prev !== current) {
          conv = converters[prev + " " + current] || converters["* " + current];
          if (!conv) {
            for (conv2 in converters) {
              tmp = conv2.split(" ");
              if (tmp[1] === current) {
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                if (conv) {
                  if (conv === true) {
                    conv = converters[conv2];
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }
                  break;
                }
              }
            }
          }
          if (conv !== true) {
            if (conv && s.throws) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }
    return { state: "success", data: response };
  }
  jQuery.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location2.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location2.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": true,
        "text json": JSON.parse,
        "text xml": jQuery.parseXML
      },
      flatOptions: {
        url: true,
        context: true
      }
    },
    ajaxSetup: function(target, settings) {
      return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    ajax: function(url, options) {
      if (typeof url === "object") {
        options = url;
        url = undefined;
      }
      options = options || {};
      var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i2, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
        readyState: 0,
        getResponseHeader: function(key) {
          var match;
          if (completed2) {
            if (!responseHeaders) {
              responseHeaders = {};
              while (match = rheaders.exec(responseHeadersString)) {
                responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
              }
            }
            match = responseHeaders[key.toLowerCase() + " "];
          }
          return match == null ? null : match.join(", ");
        },
        getAllResponseHeaders: function() {
          return completed2 ? responseHeadersString : null;
        },
        setRequestHeader: function(name, value) {
          if (completed2 == null) {
            name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
            requestHeaders[name] = value;
          }
          return this;
        },
        overrideMimeType: function(type) {
          if (completed2 == null) {
            s.mimeType = type;
          }
          return this;
        },
        statusCode: function(map) {
          var code;
          if (map) {
            if (completed2) {
              jqXHR.always(map[jqXHR.status]);
            } else {
              for (code in map) {
                statusCode[code] = [statusCode[code], map[code]];
              }
            }
          }
          return this;
        },
        abort: function(statusText) {
          var finalText = statusText || strAbort;
          if (transport) {
            transport.abort(finalText);
          }
          done2(0, finalText);
          return this;
        }
      };
      deferred.promise(jqXHR);
      s.url = ((url || s.url || location2.href) + "").replace(rprotocol, location2.protocol + "//");
      s.type = options.method || options.type || s.method || s.type;
      s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
      if (s.crossDomain == null) {
        urlAnchor = document$1.createElement("a");
        try {
          urlAnchor.href = s.url;
          urlAnchor.href = urlAnchor.href;
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          s.crossDomain = true;
        }
      }
      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      }
      if (completed2) {
        return jqXHR;
      }
      fireGlobals = jQuery.event && s.global;
      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      }
      s.type = s.type.toUpperCase();
      s.hasContent = !rnoContent.test(s.type);
      cacheURL = s.url.replace(rhash, "");
      if (!s.hasContent) {
        uncached = s.url.slice(cacheURL.length);
        if (s.data && (s.processData || typeof s.data === "string")) {
          cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
          delete s.data;
        }
        if (s.cache === false) {
          cacheURL = cacheURL.replace(rantiCache, "$1");
          uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
        }
        s.url = cacheURL + uncached;
      } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
        s.data = s.data.replace(r20, "+");
      }
      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }
        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      }
      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      }
      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
      for (i2 in s.headers) {
        jqXHR.setRequestHeader(i2, s.headers[i2]);
      }
      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
        return jqXHR.abort();
      }
      strAbort = "abort";
      completeDeferred.add(s.complete);
      jqXHR.done(s.success);
      jqXHR.fail(s.error);
      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
      if (!transport) {
        done2(-1, "No Transport");
      } else {
        jqXHR.readyState = 1;
        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        }
        if (completed2) {
          return jqXHR;
        }
        if (s.async && s.timeout > 0) {
          timeoutTimer = window2.setTimeout(function() {
            jqXHR.abort("timeout");
          }, s.timeout);
        }
        try {
          completed2 = false;
          transport.send(requestHeaders, done2);
        } catch (e) {
          if (completed2) {
            throw e;
          }
          done2(-1, e);
        }
      }
      function done2(status, nativeStatusText, responses, headers) {
        var isSuccess, success, error, response, modified, statusText = nativeStatusText;
        if (completed2) {
          return;
        }
        completed2 = true;
        if (timeoutTimer) {
          window2.clearTimeout(timeoutTimer);
        }
        transport = undefined;
        responseHeadersString = headers || "";
        jqXHR.readyState = status > 0 ? 4 : 0;
        isSuccess = status >= 200 && status < 300 || status === 304;
        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        }
        if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) {
          s.converters["text script"] = function() {};
        }
        response = ajaxConvert(s, response, jqXHR, isSuccess);
        if (isSuccess) {
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");
            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }
            modified = jqXHR.getResponseHeader("etag");
            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          }
          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent";
          } else if (status === 304) {
            statusText = "notmodified";
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          error = statusText;
          if (status || !statusText) {
            statusText = "error";
            if (status < 0) {
              status = 0;
            }
          }
        }
        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + "";
        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        }
        jqXHR.statusCode(statusCode);
        statusCode = undefined;
        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        }
        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
          if (!--jQuery.active) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }
      return jqXHR;
    },
    getJSON: function(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },
    getScript: function(url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function(_i, method) {
    jQuery[method] = function(url, data, callback, type) {
      if (typeof data === "function" || data === null) {
        type = type || callback;
        callback = data;
        data = undefined;
      }
      return jQuery.ajax(jQuery.extend({
        url,
        type: method,
        dataType: type,
        data,
        success: callback
      }, jQuery.isPlainObject(url) && url));
    };
  });
  jQuery.ajaxPrefilter(function(s) {
    var i2;
    for (i2 in s.headers) {
      if (i2.toLowerCase() === "content-type") {
        s.contentType = s.headers[i2] || "";
      }
    }
  });
  jQuery._evalUrl = function(url, options, doc) {
    return jQuery.ajax({
      url,
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      scriptAttrs: options.crossOrigin ? { crossOrigin: options.crossOrigin } : undefined,
      converters: {
        "text script": function() {}
      },
      dataFilter: function(response) {
        jQuery.globalEval(response, options, doc);
      }
    });
  };
  jQuery.fn.extend({
    wrapAll: function(html) {
      var wrap;
      if (this[0]) {
        if (typeof html === "function") {
          html = html.call(this[0]);
        }
        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }
        wrap.map(function() {
          var elem = this;
          while (elem.firstElementChild) {
            elem = elem.firstElementChild;
          }
          return elem;
        }).append(this);
      }
      return this;
    },
    wrapInner: function(html) {
      if (typeof html === "function") {
        return this.each(function(i2) {
          jQuery(this).wrapInner(html.call(this, i2));
        });
      }
      return this.each(function() {
        var self = jQuery(this), contents = self.contents();
        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function(html) {
      var htmlIsFunction = typeof html === "function";
      return this.each(function(i2) {
        jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i2) : html);
      });
    },
    unwrap: function(selector) {
      this.parent(selector).not("body").each(function() {
        jQuery(this).replaceWith(this.childNodes);
      });
      return this;
    }
  });
  jQuery.expr.pseudos.hidden = function(elem) {
    return !jQuery.expr.pseudos.visible(elem);
  };
  jQuery.expr.pseudos.visible = function(elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  };
  jQuery.ajaxSettings.xhr = function() {
    return new window2.XMLHttpRequest;
  };
  var xhrSuccessStatus = {
    0: 200
  };
  jQuery.ajaxTransport(function(options) {
    var callback;
    return {
      send: function(headers, complete) {
        var i2, xhr = options.xhr();
        xhr.open(options.type, options.url, options.async, options.username, options.password);
        if (options.xhrFields) {
          for (i2 in options.xhrFields) {
            xhr[i2] = options.xhrFields[i2];
          }
        }
        if (options.mimeType && xhr.overrideMimeType) {
          xhr.overrideMimeType(options.mimeType);
        }
        if (!options.crossDomain && !headers["X-Requested-With"]) {
          headers["X-Requested-With"] = "XMLHttpRequest";
        }
        for (i2 in headers) {
          xhr.setRequestHeader(i2, headers[i2]);
        }
        callback = function(type) {
          return function() {
            if (callback) {
              callback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = null;
              if (type === "abort") {
                xhr.abort();
              } else if (type === "error") {
                complete(xhr.status, xhr.statusText);
              } else {
                complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") === "text" ? { text: xhr.responseText } : { binary: xhr.response }, xhr.getAllResponseHeaders());
              }
            }
          };
        };
        xhr.onload = callback();
        xhr.onabort = xhr.onerror = xhr.ontimeout = callback("error");
        callback = callback("abort");
        try {
          xhr.send(options.hasContent && options.data || null);
        } catch (e) {
          if (callback) {
            throw e;
          }
        }
      },
      abort: function() {
        if (callback) {
          callback();
        }
      }
    };
  });
  function canUseScriptTag(s) {
    return s.scriptAttrs || !s.headers && (s.crossDomain || s.async && jQuery.inArray("json", s.dataTypes) < 0);
  }
  jQuery.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
    },
    converters: {
      "text script": function(text) {
        jQuery.globalEval(text);
        return text;
      }
    }
  });
  jQuery.ajaxPrefilter("script", function(s) {
    if (s.cache === undefined) {
      s.cache = false;
    }
    if (canUseScriptTag(s)) {
      s.type = "GET";
    }
  });
  jQuery.ajaxTransport("script", function(s) {
    if (canUseScriptTag(s)) {
      var script, callback;
      return {
        send: function(_, complete) {
          script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
            script.remove();
            callback = null;
            if (evt) {
              complete(evt.type === "error" ? 404 : 200, evt.type);
            }
          });
          document$1.head.appendChild(script[0]);
        },
        abort: function() {
          if (callback) {
            callback();
          }
        }
      };
    }
  });
  var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
      this[callback] = true;
      return callback;
    }
  });
  jQuery.ajaxPrefilter("jsonp", function(s, originalSettings, jqXHR) {
    var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
    callbackName = s.jsonpCallback = typeof s.jsonpCallback === "function" ? s.jsonpCallback() : s.jsonpCallback;
    if (jsonProp) {
      s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
    } else if (s.jsonp !== false) {
      s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
    }
    s.converters["script json"] = function() {
      if (!responseContainer) {
        jQuery.error(callbackName + " was not called");
      }
      return responseContainer[0];
    };
    s.dataTypes[0] = "json";
    overwritten = window2[callbackName];
    window2[callbackName] = function() {
      responseContainer = arguments;
    };
    jqXHR.always(function() {
      if (overwritten === undefined) {
        jQuery(window2).removeProp(callbackName);
      } else {
        window2[callbackName] = overwritten;
      }
      if (s[callbackName]) {
        s.jsonpCallback = originalSettings.jsonpCallback;
        oldCallbacks.push(callbackName);
      }
      if (responseContainer && typeof overwritten === "function") {
        overwritten(responseContainer[0]);
      }
      responseContainer = overwritten = undefined;
    });
    return "script";
  });
  jQuery.ajaxPrefilter(function(s, origOptions) {
    if (typeof s.data !== "string" && !jQuery.isPlainObject(s.data) && !Array.isArray(s.data) && !("processData" in origOptions)) {
      s.processData = false;
    }
    if (s.data instanceof window2.FormData) {
      s.contentType = false;
    }
  });
  jQuery.parseHTML = function(data, context, keepScripts) {
    if (typeof data !== "string" && !isObviousHtml(data + "")) {
      return [];
    }
    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }
    var parsed, scripts;
    if (!context) {
      context = new window2.DOMParser().parseFromString("", "text/html");
    }
    parsed = rsingleTag.exec(data);
    scripts = !keepScripts && [];
    if (parsed) {
      return [context.createElement(parsed[1])];
    }
    parsed = buildFragment([data], context, scripts);
    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }
    return jQuery.merge([], parsed.childNodes);
  };
  jQuery.fn.load = function(url, params, callback) {
    var selector, type, response, self = this, off = url.indexOf(" ");
    if (off > -1) {
      selector = stripAndCollapse(url.slice(off));
      url = url.slice(0, off);
    }
    if (typeof params === "function") {
      callback = params;
      params = undefined;
    } else if (params && typeof params === "object") {
      type = "POST";
    }
    if (self.length > 0) {
      jQuery.ajax({
        url,
        type: type || "GET",
        dataType: "html",
        data: params
      }).done(function(responseText) {
        response = arguments;
        self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
      }).always(callback && function(jqXHR, status) {
        self.each(function() {
          callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
        });
      });
    }
    return this;
  };
  jQuery.expr.pseudos.animated = function(elem) {
    return jQuery.grep(jQuery.timers, function(fn) {
      return elem === fn.elem;
    }).length;
  };
  jQuery.offset = {
    setOffset: function(elem, options, i2) {
      var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
      if (position === "static") {
        elem.style.position = "relative";
      }
      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }
      if (typeof options === "function") {
        options = options.call(elem, i2, jQuery.extend({}, curOffset));
      }
      if (options.top != null) {
        props.top = options.top - curOffset.top + curTop;
      }
      if (options.left != null) {
        props.left = options.left - curOffset.left + curLeft;
      }
      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }
  };
  jQuery.fn.extend({
    offset: function(options) {
      if (arguments.length) {
        return options === undefined ? this : this.each(function(i2) {
          jQuery.offset.setOffset(this, options, i2);
        });
      }
      var rect, win, elem = this[0];
      if (!elem) {
        return;
      }
      if (!elem.getClientRects().length) {
        return { top: 0, left: 0 };
      }
      rect = elem.getBoundingClientRect();
      win = elem.ownerDocument.defaultView;
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      };
    },
    position: function() {
      if (!this[0]) {
        return;
      }
      var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
      if (jQuery.css(elem, "position") === "fixed") {
        offset = elem.getBoundingClientRect();
      } else {
        offset = this.offset();
        doc = elem.ownerDocument;
        offsetParent = elem.offsetParent || doc.documentElement;
        while (offsetParent && offsetParent !== doc.documentElement && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent || doc.documentElement;
        }
        if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 && jQuery.css(offsetParent, "position") !== "static") {
          parentOffset = jQuery(offsetParent).offset();
          parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
          parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
        }
      }
      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },
    offsetParent: function() {
      return this.map(function() {
        var offsetParent = this.offsetParent;
        while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || documentElement$1;
      });
    }
  });
  jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
    var top = prop === "pageYOffset";
    jQuery.fn[method] = function(val) {
      return access(this, function(elem, method2, val2) {
        var win;
        if (isWindow(elem)) {
          win = elem;
        } else if (elem.nodeType === 9) {
          win = elem.defaultView;
        }
        if (val2 === undefined) {
          return win ? win[prop] : elem[method2];
        }
        if (win) {
          win.scrollTo(!top ? val2 : win.pageXOffset, top ? val2 : win.pageYOffset);
        } else {
          elem[method2] = val2;
        }
      }, method, val, arguments.length);
    };
  });
  jQuery.each({ Height: "height", Width: "width" }, function(name, type) {
    jQuery.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function(defaultExtra, funcName) {
      jQuery.fn[funcName] = function(margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function(elem, type2, value2) {
          var doc;
          if (isWindow(elem)) {
            return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
          }
          if (elem.nodeType === 9) {
            doc = elem.documentElement;
            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }
          return value2 === undefined ? jQuery.css(elem, type2, extra) : jQuery.style(elem, type2, value2, extra);
        }, type, chainable ? margin : undefined, chainable);
      };
    });
  });
  jQuery.each([
    "ajaxStart",
    "ajaxStop",
    "ajaxComplete",
    "ajaxError",
    "ajaxSuccess",
    "ajaxSend"
  ], function(_i, type) {
    jQuery.fn[type] = function(fn) {
      return this.on(type, fn);
    };
  });
  jQuery.fn.extend({
    bind: function(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function(selector, types, fn) {
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    },
    hover: function(fnOver, fnOut) {
      return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
    }
  });
  jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function(_i, name) {
    jQuery.fn[name] = function(data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  });
  jQuery.proxy = function(fn, context) {
    var tmp, args, proxy;
    if (typeof context === "string") {
      tmp = fn[context];
      context = fn;
      fn = tmp;
    }
    if (typeof fn !== "function") {
      return;
    }
    args = slice.call(arguments, 2);
    proxy = function() {
      return fn.apply(context || this, args.concat(slice.call(arguments)));
    };
    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
    return proxy;
  };
  jQuery.holdReady = function(hold) {
    if (hold) {
      jQuery.readyWait++;
    } else {
      jQuery.ready(true);
    }
  };
  jQuery.expr[":"] = jQuery.expr.filters = jQuery.expr.pseudos;
  if (typeof define === "function" && define.amd) {
    define("jquery", [], function() {
      return jQuery;
    });
  }
  var { jQuery: _jQuery, $: _$ } = window2;
  jQuery.noConflict = function(deep) {
    if (window2.$ === jQuery) {
      window2.$ = _$;
    }
    if (deep && window2.jQuery === jQuery) {
      window2.jQuery = _jQuery;
    }
    return jQuery;
  };
  if (typeof noGlobal === "undefined") {
    window2.jQuery = window2.$ = jQuery;
  }
  return jQuery;
}
var jQuery = jQueryFactory(window, true);
var jquery_module_default = jQuery;

// node_modules/datatables.net/js/dataTables.mjs
/*! DataTables 2.3.7
 * © SpryMedia Ltd - datatables.net/license
 */
var $ = jquery_module_default;
var DataTable = function(selector, options) {
  if (DataTable.factory(selector, options)) {
    return DataTable;
  }
  if (this instanceof DataTable) {
    return $(selector).DataTable(options);
  } else {
    options = selector;
  }
  var _that = this;
  var emptyInit = options === undefined;
  var len = this.length;
  if (emptyInit) {
    options = {};
  }
  this.api = function() {
    return new _Api(this);
  };
  this.each(function() {
    var o = {};
    var oInit = len > 1 ? _fnExtend(o, options, true) : options;
    var i = 0, iLen;
    var sId = this.getAttribute("id");
    var defaults = DataTable.defaults;
    var $this = $(this);
    if (this.nodeName.toLowerCase() != "table") {
      _fnLog(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
      return;
    }
    if (oInit.on && oInit.on.options) {
      _fnListener($this, "options", oInit.on.options);
    }
    $this.trigger("options.dt", oInit);
    _fnCompatOpts(defaults);
    _fnCompatCols(defaults.column);
    _fnCamelToHungarian(defaults, defaults, true);
    _fnCamelToHungarian(defaults.column, defaults.column, true);
    _fnCamelToHungarian(defaults, $.extend(oInit, _fnEscapeObject($this.data())), true);
    var allSettings = DataTable.settings;
    for (i = 0, iLen = allSettings.length;i < iLen; i++) {
      var s = allSettings[i];
      if (s.nTable == this || s.nTHead && s.nTHead.parentNode == this || s.nTFoot && s.nTFoot.parentNode == this) {
        var bRetrieve = oInit.bRetrieve !== undefined ? oInit.bRetrieve : defaults.bRetrieve;
        var bDestroy = oInit.bDestroy !== undefined ? oInit.bDestroy : defaults.bDestroy;
        if (emptyInit || bRetrieve) {
          return s.oInstance;
        } else if (bDestroy) {
          new DataTable.Api(s).destroy();
          break;
        } else {
          _fnLog(s, 0, "Cannot reinitialise DataTable", 3);
          return;
        }
      }
      if (s.sTableId == this.id) {
        allSettings.splice(i, 1);
        break;
      }
    }
    if (sId === null || sId === "") {
      sId = "DataTables_Table_" + DataTable.ext._unique++;
      this.id = sId;
    }
    $this.children("colgroup").remove();
    var oSettings = $.extend(true, {}, DataTable.models.oSettings, {
      sDestroyWidth: $this[0].style.width,
      sInstance: sId,
      sTableId: sId,
      colgroup: $("<colgroup>"),
      fastData: function(row, column, type) {
        return _fnGetCellData(oSettings, row, column, type);
      }
    });
    oSettings.nTable = this;
    oSettings.oInit = oInit;
    allSettings.push(oSettings);
    oSettings.api = new _Api(oSettings);
    oSettings.oInstance = _that.length === 1 ? _that : $this.dataTable();
    _fnCompatOpts(oInit);
    if (oInit.aLengthMenu && !oInit.iDisplayLength) {
      oInit.iDisplayLength = Array.isArray(oInit.aLengthMenu[0]) ? oInit.aLengthMenu[0][0] : $.isPlainObject(oInit.aLengthMenu[0]) ? oInit.aLengthMenu[0].value : oInit.aLengthMenu[0];
    }
    oInit = _fnExtend($.extend(true, {}, defaults), oInit);
    _fnMap(oSettings.oFeatures, oInit, [
      "bPaginate",
      "bLengthChange",
      "bFilter",
      "bSort",
      "bSortMulti",
      "bInfo",
      "bProcessing",
      "bAutoWidth",
      "bSortClasses",
      "bServerSide",
      "bDeferRender"
    ]);
    _fnMap(oSettings, oInit, [
      "ajax",
      "fnFormatNumber",
      "sServerMethod",
      "aaSorting",
      "aaSortingFixed",
      "aLengthMenu",
      "sPaginationType",
      "iStateDuration",
      "bSortCellsTop",
      "iTabIndex",
      "sDom",
      "fnStateLoadCallback",
      "fnStateSaveCallback",
      "renderer",
      "searchDelay",
      "rowId",
      "caption",
      "layout",
      "orderDescReverse",
      "orderIndicators",
      "orderHandler",
      "titleRow",
      "typeDetect",
      "columnTitleTag",
      ["iCookieDuration", "iStateDuration"],
      ["oSearch", "oPreviousSearch"],
      ["aoSearchCols", "aoPreSearchCols"],
      ["iDisplayLength", "_iDisplayLength"]
    ]);
    _fnMap(oSettings.oScroll, oInit, [
      ["sScrollX", "sX"],
      ["sScrollXInner", "sXInner"],
      ["sScrollY", "sY"],
      ["bScrollCollapse", "bCollapse"]
    ]);
    _fnMap(oSettings.oLanguage, oInit, "fnInfoCallback");
    _fnCallbackReg(oSettings, "aoDrawCallback", oInit.fnDrawCallback);
    _fnCallbackReg(oSettings, "aoStateSaveParams", oInit.fnStateSaveParams);
    _fnCallbackReg(oSettings, "aoStateLoadParams", oInit.fnStateLoadParams);
    _fnCallbackReg(oSettings, "aoStateLoaded", oInit.fnStateLoaded);
    _fnCallbackReg(oSettings, "aoRowCallback", oInit.fnRowCallback);
    _fnCallbackReg(oSettings, "aoRowCreatedCallback", oInit.fnCreatedRow);
    _fnCallbackReg(oSettings, "aoHeaderCallback", oInit.fnHeaderCallback);
    _fnCallbackReg(oSettings, "aoFooterCallback", oInit.fnFooterCallback);
    _fnCallbackReg(oSettings, "aoInitComplete", oInit.fnInitComplete);
    _fnCallbackReg(oSettings, "aoPreDrawCallback", oInit.fnPreDrawCallback);
    oSettings.rowIdFn = _fnGetObjectDataFn(oInit.rowId);
    if (oInit.on) {
      Object.keys(oInit.on).forEach(function(key) {
        _fnListener($this, key, oInit.on[key]);
      });
    }
    _fnBrowserDetect(oSettings);
    var oClasses = oSettings.oClasses;
    $.extend(oClasses, DataTable.ext.classes, oInit.oClasses);
    $this.addClass(oClasses.table);
    if (!oSettings.oFeatures.bPaginate) {
      oInit.iDisplayStart = 0;
    }
    if (oSettings.iInitDisplayStart === undefined) {
      oSettings.iInitDisplayStart = oInit.iDisplayStart;
      oSettings._iDisplayStart = oInit.iDisplayStart;
    }
    var defer = oInit.iDeferLoading;
    if (defer !== null) {
      oSettings.deferLoading = true;
      var tmp = Array.isArray(defer);
      oSettings._iRecordsDisplay = tmp ? defer[0] : defer;
      oSettings._iRecordsTotal = tmp ? defer[1] : defer;
    }
    var columnsInit = [];
    var thead = this.getElementsByTagName("thead");
    var initHeaderLayout = _fnDetectHeader(oSettings, thead[0]);
    if (oInit.aoColumns) {
      columnsInit = oInit.aoColumns;
    } else if (initHeaderLayout.length) {
      for (i = 0, iLen = initHeaderLayout[0].length;i < iLen; i++) {
        columnsInit.push(null);
      }
    }
    for (i = 0, iLen = columnsInit.length;i < iLen; i++) {
      _fnAddColumn(oSettings);
    }
    _fnApplyColumnDefs(oSettings, oInit.aoColumnDefs, columnsInit, initHeaderLayout, function(iCol, oDef) {
      _fnColumnOptions(oSettings, iCol, oDef);
    });
    var rowOne = $this.children("tbody").find("tr:first-child").eq(0);
    if (rowOne.length) {
      var a = function(cell, name) {
        return cell.getAttribute("data-" + name) !== null ? name : null;
      };
      $(rowOne[0]).children("th, td").each(function(i2, cell) {
        var col = oSettings.aoColumns[i2];
        if (!col) {
          _fnLog(oSettings, 0, "Incorrect column count", 18);
        }
        if (col.mData === i2) {
          var sort = a(cell, "sort") || a(cell, "order");
          var filter = a(cell, "filter") || a(cell, "search");
          if (sort !== null || filter !== null) {
            col.mData = {
              _: i2 + ".display",
              sort: sort !== null ? i2 + ".@data-" + sort : undefined,
              type: sort !== null ? i2 + ".@data-" + sort : undefined,
              filter: filter !== null ? i2 + ".@data-" + filter : undefined
            };
            col._isArrayHost = true;
            _fnColumnOptions(oSettings, i2);
          }
        }
      });
    }
    _fnCallbackReg(oSettings, "aoDrawCallback", _fnSaveState);
    var features = oSettings.oFeatures;
    if (oInit.bStateSave) {
      features.bStateSave = true;
    }
    if (oInit.aaSorting === undefined) {
      var sorting = oSettings.aaSorting;
      for (i = 0, iLen = sorting.length;i < iLen; i++) {
        sorting[i][1] = oSettings.aoColumns[i].asSorting[0];
      }
    }
    _fnSortingClasses(oSettings);
    _fnCallbackReg(oSettings, "aoDrawCallback", function() {
      if (oSettings.bSorted || _fnDataSource(oSettings) === "ssp" || features.bDeferRender) {
        _fnSortingClasses(oSettings);
      }
    });
    var caption = $this.children("caption");
    if (oSettings.caption) {
      if (caption.length === 0) {
        caption = $("<caption/>").prependTo($this);
      }
      caption.html(oSettings.caption);
    }
    if (caption.length) {
      caption[0]._captionSide = caption.css("caption-side");
      oSettings.captionNode = caption[0];
    }
    if (caption.length) {
      oSettings.colgroup.insertAfter(caption);
    } else {
      oSettings.colgroup.prependTo(oSettings.nTable);
    }
    if (thead.length === 0) {
      thead = $("<thead/>").appendTo($this);
    }
    oSettings.nTHead = thead[0];
    var tbody = $this.children("tbody");
    if (tbody.length === 0) {
      tbody = $("<tbody/>").insertAfter(thead);
    }
    oSettings.nTBody = tbody[0];
    var tfoot = $this.children("tfoot");
    if (tfoot.length === 0) {
      tfoot = $("<tfoot/>").appendTo($this);
    }
    oSettings.nTFoot = tfoot[0];
    oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
    oSettings.bInitialised = true;
    var oLanguage = oSettings.oLanguage;
    $.extend(true, oLanguage, oInit.oLanguage);
    if (oLanguage.sUrl) {
      $.ajax({
        dataType: "json",
        url: oLanguage.sUrl,
        success: function(json) {
          _fnCamelToHungarian(defaults.oLanguage, json);
          $.extend(true, oLanguage, json, oSettings.oInit.oLanguage);
          _fnCallbackFire(oSettings, null, "i18n", [oSettings], true);
          _fnInitialise(oSettings);
        },
        error: function() {
          _fnLog(oSettings, 0, "i18n file loading error", 21);
          _fnInitialise(oSettings);
        }
      });
    } else {
      _fnCallbackFire(oSettings, null, "i18n", [oSettings], true);
      _fnInitialise(oSettings);
    }
  });
  _that = null;
  return this;
};
DataTable.ext = _ext = {
  builder: "-source-",
  buttons: {},
  ccContent: {},
  classes: {},
  errMode: "alert",
  escape: {
    attributes: false
  },
  feature: [],
  features: {},
  search: [],
  selector: {
    cell: [],
    column: [],
    row: []
  },
  legacy: {
    ajax: null
  },
  pager: {},
  renderer: {
    pageButton: {},
    header: {}
  },
  order: {},
  type: {
    className: {},
    detect: [],
    render: {},
    search: {},
    order: {}
  },
  _unique: 0,
  fnVersionCheck: DataTable.fnVersionCheck,
  iApiIndex: 0,
  sVersion: DataTable.version
};
$.extend(_ext, {
  afnFiltering: _ext.search,
  aTypes: _ext.type.detect,
  ofnSearch: _ext.type.search,
  oSort: _ext.type.order,
  afnSortData: _ext.order,
  aoFeatures: _ext.feature,
  oStdClasses: _ext.classes,
  oPagination: _ext.pager
});
$.extend(DataTable.ext.classes, {
  container: "dt-container",
  empty: {
    row: "dt-empty"
  },
  info: {
    container: "dt-info"
  },
  layout: {
    row: "dt-layout-row",
    cell: "dt-layout-cell",
    tableRow: "dt-layout-table",
    tableCell: "",
    start: "dt-layout-start",
    end: "dt-layout-end",
    full: "dt-layout-full"
  },
  length: {
    container: "dt-length",
    select: "dt-input"
  },
  order: {
    canAsc: "dt-orderable-asc",
    canDesc: "dt-orderable-desc",
    isAsc: "dt-ordering-asc",
    isDesc: "dt-ordering-desc",
    none: "dt-orderable-none",
    position: "sorting_"
  },
  processing: {
    container: "dt-processing"
  },
  scrolling: {
    body: "dt-scroll-body",
    container: "dt-scroll",
    footer: {
      self: "dt-scroll-foot",
      inner: "dt-scroll-footInner"
    },
    header: {
      self: "dt-scroll-head",
      inner: "dt-scroll-headInner"
    }
  },
  search: {
    container: "dt-search",
    input: "dt-input"
  },
  table: "dataTable",
  tbody: {
    cell: "",
    row: ""
  },
  thead: {
    cell: "",
    row: ""
  },
  tfoot: {
    cell: "",
    row: ""
  },
  paging: {
    active: "current",
    button: "dt-paging-button",
    container: "dt-paging",
    disabled: "disabled",
    nav: ""
  }
});
var _ext;
var _Api;
var _api_register;
var _api_registerPlural;
var _re_dic = {};
var _re_new_lines = /[\r\n\u2028]/g;
var _re_html = /<([^>]*>)/g;
var _max_str_len = Math.pow(2, 28);
var _re_date = /^\d{2,4}[./-]\d{1,2}[./-]\d{1,2}([T ]{1}\d{1,2}[:.]\d{2}([.:]\d{2})?)?$/;
var _re_escape_regex = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g");
var _re_formatted_numeric = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi;
var _empty = function(d) {
  return !d || d === true || d === "-" ? true : false;
};
var _intVal = function(s) {
  var integer = parseInt(s, 10);
  return !isNaN(integer) && isFinite(s) ? integer : null;
};
var _numToDecimal = function(num, decimalPoint) {
  if (!_re_dic[decimalPoint]) {
    _re_dic[decimalPoint] = new RegExp(_fnEscapeRegex(decimalPoint), "g");
  }
  return typeof num === "string" && decimalPoint !== "." ? num.replace(/\./g, "").replace(_re_dic[decimalPoint], ".") : num;
};
var _isNumber = function(d, decimalPoint, formatted, allowEmpty) {
  var type = typeof d;
  var strType = type === "string";
  if (type === "number" || type === "bigint") {
    return true;
  }
  if (allowEmpty && _empty(d)) {
    return true;
  }
  if (decimalPoint && strType) {
    d = _numToDecimal(d, decimalPoint);
  }
  if (formatted && strType) {
    d = d.replace(_re_formatted_numeric, "");
  }
  return !isNaN(parseFloat(d)) && isFinite(d);
};
var _isHtml = function(d) {
  return _empty(d) || typeof d === "string";
};
var _htmlNumeric = function(d, decimalPoint, formatted, allowEmpty) {
  if (allowEmpty && _empty(d)) {
    return true;
  }
  if (typeof d === "string" && d.match(/<(input|select)/i)) {
    return null;
  }
  var html = _isHtml(d);
  return !html ? null : _isNumber(_stripHtml(d), decimalPoint, formatted, allowEmpty) ? true : null;
};
var _pluck = function(a, prop, prop2) {
  var out = [];
  var i = 0, iLen = a.length;
  if (prop2 !== undefined) {
    for (;i < iLen; i++) {
      if (a[i] && a[i][prop]) {
        out.push(a[i][prop][prop2]);
      }
    }
  } else {
    for (;i < iLen; i++) {
      if (a[i]) {
        out.push(a[i][prop]);
      }
    }
  }
  return out;
};
var _pluck_order = function(a, order, prop, prop2) {
  var out = [];
  var i = 0, iLen = order.length;
  if (prop2 !== undefined) {
    for (;i < iLen; i++) {
      if (a[order[i]] && a[order[i]][prop]) {
        out.push(a[order[i]][prop][prop2]);
      }
    }
  } else {
    for (;i < iLen; i++) {
      if (a[order[i]]) {
        out.push(a[order[i]][prop]);
      }
    }
  }
  return out;
};
var _range = function(len, start) {
  var out = [];
  var end;
  if (start === undefined) {
    start = 0;
    end = len;
  } else {
    end = start;
    start = len;
  }
  for (var i = start;i < end; i++) {
    out.push(i);
  }
  return out;
};
var _removeEmpty = function(a) {
  var out = [];
  for (var i = 0, iLen = a.length;i < iLen; i++) {
    if (a[i]) {
      out.push(a[i]);
    }
  }
  return out;
};
var _stripHtml = function(input, replacement) {
  if (!input || typeof input !== "string") {
    return input;
  }
  if (input.length > _max_str_len) {
    throw new Error("Exceeded max str len");
  }
  var previous;
  input = input.replace(_re_html, replacement || "");
  do {
    previous = input;
    input = input.replace(/<script/i, "");
  } while (input !== previous);
  return previous;
};
var _escapeHtml = function(d) {
  if (Array.isArray(d)) {
    d = d.join(",");
  }
  return typeof d === "string" ? d.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : d;
};
var _normalize = function(str, both) {
  if (typeof str !== "string") {
    return str;
  }
  var res = str.normalize ? str.normalize("NFD") : str;
  return res.length !== str.length ? (both === true ? str + " " : "") + res.replace(/[\u0300-\u036f]/g, "") : res;
};
var _areAllUnique = function(src) {
  if (src.length < 2) {
    return true;
  }
  var sorted = src.slice().sort();
  var last = sorted[0];
  for (var i = 1, iLen = sorted.length;i < iLen; i++) {
    if (sorted[i] === last) {
      return false;
    }
    last = sorted[i];
  }
  return true;
};
var _unique = function(src) {
  if (Array.from && Set) {
    return Array.from(new Set(src));
  }
  if (_areAllUnique(src)) {
    return src.slice();
  }
  var out = [], val, i, iLen = src.length, j, k = 0;
  again:
    for (i = 0;i < iLen; i++) {
      val = src[i];
      for (j = 0;j < k; j++) {
        if (out[j] === val) {
          continue again;
        }
      }
      out.push(val);
      k++;
    }
  return out;
};
var _flatten = function(out, val) {
  if (Array.isArray(val)) {
    for (var i = 0;i < val.length; i++) {
      _flatten(out, val[i]);
    }
  } else {
    out.push(val);
  }
  return out;
};
function _addClass(el, name) {
  if (name) {
    name.split(" ").forEach(function(n) {
      if (n) {
        el.classList.add(n);
      }
    });
  }
}
DataTable.util = {
  diacritics: function(mixed, both) {
    var type = typeof mixed;
    if (type !== "function") {
      return _normalize(mixed, both);
    }
    _normalize = mixed;
  },
  debounce: function(fn, timeout) {
    var timer;
    return function() {
      var that = this;
      var args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function() {
        fn.apply(that, args);
      }, timeout || 250);
    };
  },
  throttle: function(fn, freq) {
    var frequency = freq !== undefined ? freq : 200, last, timer;
    return function() {
      var that = this, now = +new Date, args = arguments;
      if (last && now < last + frequency) {
        clearTimeout(timer);
        timer = setTimeout(function() {
          last = undefined;
          fn.apply(that, args);
        }, frequency);
      } else {
        last = now;
        fn.apply(that, args);
      }
    };
  },
  escapeRegex: function(val) {
    return val.replace(_re_escape_regex, "\\$1");
  },
  set: function(source) {
    if ($.isPlainObject(source)) {
      return DataTable.util.set(source._);
    } else if (source === null) {
      return function() {};
    } else if (typeof source === "function") {
      return function(data, val, meta) {
        source(data, "set", val, meta);
      };
    } else if (typeof source === "string" && (source.indexOf(".") !== -1 || source.indexOf("[") !== -1 || source.indexOf("(") !== -1)) {
      var setData = function(data, val, src) {
        var a = _fnSplitObjNotation(src), b;
        var aLast = a[a.length - 1];
        var arrayNotation, funcNotation, o, innerSrc;
        for (var i = 0, iLen = a.length - 1;i < iLen; i++) {
          if (a[i] === "__proto__" || a[i] === "constructor") {
            throw new Error("Cannot set prototype values");
          }
          arrayNotation = a[i].match(__reArray);
          funcNotation = a[i].match(__reFn);
          if (arrayNotation) {
            a[i] = a[i].replace(__reArray, "");
            data[a[i]] = [];
            b = a.slice();
            b.splice(0, i + 1);
            innerSrc = b.join(".");
            if (Array.isArray(val)) {
              for (var j = 0, jLen = val.length;j < jLen; j++) {
                o = {};
                setData(o, val[j], innerSrc);
                data[a[i]].push(o);
              }
            } else {
              data[a[i]] = val;
            }
            return;
          } else if (funcNotation) {
            a[i] = a[i].replace(__reFn, "");
            data = data[a[i]](val);
          }
          if (data[a[i]] === null || data[a[i]] === undefined) {
            data[a[i]] = {};
          }
          data = data[a[i]];
        }
        if (aLast.match(__reFn)) {
          data = data[aLast.replace(__reFn, "")](val);
        } else {
          data[aLast.replace(__reArray, "")] = val;
        }
      };
      return function(data, val) {
        return setData(data, val, source);
      };
    } else {
      return function(data, val) {
        data[source] = val;
      };
    }
  },
  get: function(source) {
    if ($.isPlainObject(source)) {
      var o = {};
      $.each(source, function(key, val) {
        if (val) {
          o[key] = DataTable.util.get(val);
        }
      });
      return function(data, type, row, meta) {
        var t = o[type] || o._;
        return t !== undefined ? t(data, type, row, meta) : data;
      };
    } else if (source === null) {
      return function(data) {
        return data;
      };
    } else if (typeof source === "function") {
      return function(data, type, row, meta) {
        return source(data, type, row, meta);
      };
    } else if (typeof source === "string" && (source.indexOf(".") !== -1 || source.indexOf("[") !== -1 || source.indexOf("(") !== -1)) {
      var fetchData = function(data, type, src) {
        var arrayNotation, funcNotation, out, innerSrc;
        if (src !== "") {
          var a = _fnSplitObjNotation(src);
          for (var i = 0, iLen = a.length;i < iLen; i++) {
            arrayNotation = a[i].match(__reArray);
            funcNotation = a[i].match(__reFn);
            if (arrayNotation) {
              a[i] = a[i].replace(__reArray, "");
              if (a[i] !== "") {
                data = data[a[i]];
              }
              out = [];
              a.splice(0, i + 1);
              innerSrc = a.join(".");
              if (Array.isArray(data)) {
                for (var j = 0, jLen = data.length;j < jLen; j++) {
                  out.push(fetchData(data[j], type, innerSrc));
                }
              }
              var join = arrayNotation[0].substring(1, arrayNotation[0].length - 1);
              data = join === "" ? out : out.join(join);
              break;
            } else if (funcNotation) {
              a[i] = a[i].replace(__reFn, "");
              data = data[a[i]]();
              continue;
            }
            if (data === null || data[a[i]] === null) {
              return null;
            } else if (data === undefined || data[a[i]] === undefined) {
              return;
            }
            data = data[a[i]];
          }
        }
        return data;
      };
      return function(data, type) {
        return fetchData(data, type, source);
      };
    } else {
      return function(data) {
        return data[source];
      };
    }
  },
  stripHtml: function(mixed, replacement) {
    var type = typeof mixed;
    if (type === "function") {
      _stripHtml = mixed;
      return;
    } else if (type === "string") {
      return _stripHtml(mixed, replacement);
    }
    return mixed;
  },
  escapeHtml: function(mixed) {
    var type = typeof mixed;
    if (type === "function") {
      _escapeHtml = mixed;
      return;
    } else if (type === "string" || Array.isArray(mixed)) {
      return _escapeHtml(mixed);
    }
    return mixed;
  },
  unique: _unique
};
function _fnHungarianMap(o) {
  var hungarian = "a aa ai ao as b fn i m o s ", match, newKey, map = {};
  $.each(o, function(key) {
    match = key.match(/^([^A-Z]+?)([A-Z])/);
    if (match && hungarian.indexOf(match[1] + " ") !== -1) {
      newKey = key.replace(match[0], match[2].toLowerCase());
      map[newKey] = key;
      if (match[1] === "o") {
        _fnHungarianMap(o[key]);
      }
    }
  });
  o._hungarianMap = map;
}
function _fnCamelToHungarian(src, user, force) {
  if (!src._hungarianMap) {
    _fnHungarianMap(src);
  }
  var hungarianKey;
  $.each(user, function(key) {
    hungarianKey = src._hungarianMap[key];
    if (hungarianKey !== undefined && (force || user[hungarianKey] === undefined)) {
      if (hungarianKey.charAt(0) === "o") {
        if (!user[hungarianKey]) {
          user[hungarianKey] = {};
        }
        $.extend(true, user[hungarianKey], user[key]);
        _fnCamelToHungarian(src[hungarianKey], user[hungarianKey], force);
      } else {
        user[hungarianKey] = user[key];
      }
    }
  });
}
var _fnCompatMap = function(o, knew, old) {
  if (o[knew] !== undefined) {
    o[old] = o[knew];
  }
};
function _fnCompatOpts(init) {
  _fnCompatMap(init, "ordering", "bSort");
  _fnCompatMap(init, "orderMulti", "bSortMulti");
  _fnCompatMap(init, "orderClasses", "bSortClasses");
  _fnCompatMap(init, "orderCellsTop", "bSortCellsTop");
  _fnCompatMap(init, "order", "aaSorting");
  _fnCompatMap(init, "orderFixed", "aaSortingFixed");
  _fnCompatMap(init, "paging", "bPaginate");
  _fnCompatMap(init, "pagingType", "sPaginationType");
  _fnCompatMap(init, "pageLength", "iDisplayLength");
  _fnCompatMap(init, "searching", "bFilter");
  if (typeof init.sScrollX === "boolean") {
    init.sScrollX = init.sScrollX ? "100%" : "";
  }
  if (typeof init.scrollX === "boolean") {
    init.scrollX = init.scrollX ? "100%" : "";
  }
  if (typeof init.bSort === "object") {
    init.orderIndicators = init.bSort.indicators !== undefined ? init.bSort.indicators : true;
    init.orderHandler = init.bSort.handler !== undefined ? init.bSort.handler : true;
    init.bSort = true;
  } else if (init.bSort === false) {
    init.orderIndicators = false;
    init.orderHandler = false;
  } else if (init.bSort === true) {
    init.orderIndicators = true;
    init.orderHandler = true;
  }
  if (typeof init.bSortCellsTop === "boolean") {
    init.titleRow = init.bSortCellsTop;
  }
  var searchCols = init.aoSearchCols;
  if (searchCols) {
    for (var i = 0, iLen = searchCols.length;i < iLen; i++) {
      if (searchCols[i]) {
        _fnCamelToHungarian(DataTable.models.oSearch, searchCols[i]);
      }
    }
  }
  if (init.serverSide && !init.searchDelay) {
    init.searchDelay = 400;
  }
}
function _fnCompatCols(init) {
  _fnCompatMap(init, "orderable", "bSortable");
  _fnCompatMap(init, "orderData", "aDataSort");
  _fnCompatMap(init, "orderSequence", "asSorting");
  _fnCompatMap(init, "orderDataType", "sortDataType");
  var dataSort = init.aDataSort;
  if (typeof dataSort === "number" && !Array.isArray(dataSort)) {
    init.aDataSort = [dataSort];
  }
}
function _fnBrowserDetect(settings) {
  if (!DataTable.__browser) {
    var browser = {};
    DataTable.__browser = browser;
    var n = $("<div/>").css({
      position: "fixed",
      top: 0,
      left: -1 * window.pageXOffset,
      height: 1,
      width: 1,
      overflow: "hidden"
    }).append($("<div/>").css({
      position: "absolute",
      top: 1,
      left: 1,
      width: 100,
      overflow: "scroll"
    }).append($("<div/>").css({
      width: "100%",
      height: 10
    }))).appendTo("body");
    var outer = n.children();
    var inner = outer.children();
    browser.barWidth = outer[0].offsetWidth - outer[0].clientWidth;
    browser.bScrollbarLeft = Math.round(inner.offset().left) !== 1;
    n.remove();
  }
  $.extend(settings.oBrowser, DataTable.__browser);
  settings.oScroll.iBarWidth = DataTable.__browser.barWidth;
}
function _fnAddColumn(oSettings) {
  var oDefaults = DataTable.defaults.column;
  var iCol = oSettings.aoColumns.length;
  var oCol = $.extend({}, DataTable.models.oColumn, oDefaults, {
    aDataSort: oDefaults.aDataSort ? oDefaults.aDataSort : [iCol],
    mData: oDefaults.mData ? oDefaults.mData : iCol,
    idx: iCol,
    searchFixed: {},
    colEl: $("<col>").attr("data-dt-column", iCol)
  });
  oSettings.aoColumns.push(oCol);
  var searchCols = oSettings.aoPreSearchCols;
  searchCols[iCol] = $.extend({}, DataTable.models.oSearch, searchCols[iCol]);
}
function _fnColumnOptions(oSettings, iCol, oOptions) {
  var oCol = oSettings.aoColumns[iCol];
  if (oOptions !== undefined && oOptions !== null) {
    _fnCompatCols(oOptions);
    _fnCamelToHungarian(DataTable.defaults.column, oOptions, true);
    if (oOptions.mDataProp !== undefined && !oOptions.mData) {
      oOptions.mData = oOptions.mDataProp;
    }
    if (oOptions.sType) {
      oCol._sManualType = oOptions.sType;
    }
    if (oOptions.className && !oOptions.sClass) {
      oOptions.sClass = oOptions.className;
    }
    var origClass = oCol.sClass;
    $.extend(oCol, oOptions);
    _fnMap(oCol, oOptions, "sWidth", "sWidthOrig");
    if (origClass !== oCol.sClass) {
      oCol.sClass = origClass + " " + oCol.sClass;
    }
    if (oOptions.iDataSort !== undefined) {
      oCol.aDataSort = [oOptions.iDataSort];
    }
    _fnMap(oCol, oOptions, "aDataSort");
  }
  var mDataSrc = oCol.mData;
  var mData = _fnGetObjectDataFn(mDataSrc);
  if (oCol.mRender && Array.isArray(oCol.mRender)) {
    var copy = oCol.mRender.slice();
    var name = copy.shift();
    oCol.mRender = DataTable.render[name].apply(window, copy);
  }
  oCol._render = oCol.mRender ? _fnGetObjectDataFn(oCol.mRender) : null;
  var attrTest = function(src) {
    return typeof src === "string" && src.indexOf("@") !== -1;
  };
  oCol._bAttrSrc = $.isPlainObject(mDataSrc) && (attrTest(mDataSrc.sort) || attrTest(mDataSrc.type) || attrTest(mDataSrc.filter));
  oCol._setter = null;
  oCol.fnGetData = function(rowData, type, meta) {
    var innerData = mData(rowData, type, undefined, meta);
    return oCol._render && type ? oCol._render(innerData, type, rowData, meta) : innerData;
  };
  oCol.fnSetData = function(rowData, val, meta) {
    return _fnSetObjectDataFn(mDataSrc)(rowData, val, meta);
  };
  if (typeof mDataSrc !== "number" && !oCol._isArrayHost) {
    oSettings._rowReadObject = true;
  }
  if (!oSettings.oFeatures.bSort) {
    oCol.bSortable = false;
  }
}
function _fnAdjustColumnSizing(settings) {
  _fnCalculateColumnWidths(settings);
  _fnColumnSizes(settings);
  var scroll = settings.oScroll;
  if (scroll.sY !== "" || scroll.sX !== "") {
    _fnScrollDraw(settings);
  }
  _fnCallbackFire(settings, null, "column-sizing", [settings]);
}
function _fnColumnSizes(settings) {
  var cols = settings.aoColumns;
  for (var i = 0;i < cols.length; i++) {
    var width = _fnColumnsSumWidth(settings, [i], false, false);
    cols[i].colEl.css("width", width);
    if (settings.oScroll.sX) {
      cols[i].colEl.css("min-width", width);
    }
  }
}
function _fnVisibleToColumnIndex(oSettings, iMatch) {
  var aiVis = _fnGetColumns(oSettings, "bVisible");
  return typeof aiVis[iMatch] === "number" ? aiVis[iMatch] : null;
}
function _fnColumnIndexToVisible(oSettings, iMatch) {
  var aiVis = _fnGetColumns(oSettings, "bVisible");
  var iPos = aiVis.indexOf(iMatch);
  return iPos !== -1 ? iPos : null;
}
function _fnVisibleColumns(settings) {
  var layout = settings.aoHeader;
  var columns = settings.aoColumns;
  var vis = 0;
  if (layout.length) {
    for (var i = 0, iLen = layout[0].length;i < iLen; i++) {
      if (columns[i].bVisible && $(layout[0][i].cell).css("display") !== "none") {
        vis++;
      }
    }
  }
  return vis;
}
function _fnGetColumns(oSettings, sParam) {
  var a = [];
  oSettings.aoColumns.map(function(val, i) {
    if (val[sParam]) {
      a.push(i);
    }
  });
  return a;
}
function _typeResult(typeDetect, res) {
  return res === true ? typeDetect._name : res;
}
function _fnColumnTypes(settings) {
  var columns = settings.aoColumns;
  var data = settings.aoData;
  var types = DataTable.ext.type.detect;
  var i, iLen, j, jen, k, ken;
  var col, detectedType, cache;
  for (i = 0, iLen = columns.length;i < iLen; i++) {
    col = columns[i];
    cache = [];
    if (!col.sType && col._sManualType) {
      col.sType = col._sManualType;
    } else if (!col.sType) {
      if (!settings.typeDetect) {
        return;
      }
      for (j = 0, jen = types.length;j < jen; j++) {
        var typeDetect = types[j];
        var oneOf = typeDetect.oneOf;
        var allOf = typeDetect.allOf || typeDetect;
        var init = typeDetect.init;
        var one = false;
        detectedType = null;
        if (init) {
          detectedType = _typeResult(typeDetect, init(settings, col, i));
          if (detectedType) {
            col.sType = detectedType;
            break;
          }
        }
        for (k = 0, ken = data.length;k < ken; k++) {
          if (!data[k]) {
            continue;
          }
          if (cache[k] === undefined) {
            cache[k] = _fnGetCellData(settings, k, i, "type");
          }
          if (oneOf && !one) {
            one = _typeResult(typeDetect, oneOf(cache[k], settings));
          }
          detectedType = _typeResult(typeDetect, allOf(cache[k], settings));
          if (!detectedType && j !== types.length - 3) {
            break;
          }
          if (detectedType === "html" && !_empty(cache[k])) {
            break;
          }
        }
        if (oneOf && one && detectedType || !oneOf && detectedType) {
          col.sType = detectedType;
          break;
        }
      }
      if (!col.sType) {
        col.sType = "string";
      }
    }
    var autoClass = _ext.type.className[col.sType];
    if (autoClass) {
      _columnAutoClass(settings.aoHeader, i, autoClass);
      _columnAutoClass(settings.aoFooter, i, autoClass);
    }
    var renderer = _ext.type.render[col.sType];
    if (renderer && !col._render) {
      col._render = DataTable.util.get(renderer);
      _columnAutoRender(settings, i);
    }
  }
}
function _columnAutoRender(settings, colIdx) {
  var data = settings.aoData;
  for (var i = 0;i < data.length; i++) {
    if (data[i].nTr) {
      var display = _fnGetCellData(settings, i, colIdx, "display");
      data[i].displayData[colIdx] = display;
      _fnWriteCell(data[i].anCells[colIdx], display);
    }
  }
}
function _columnAutoClass(container, colIdx, className) {
  container.forEach(function(row) {
    if (row[colIdx] && row[colIdx].unique) {
      _addClass(row[colIdx].cell, className);
    }
  });
}
function _fnApplyColumnDefs(oSettings, aoColDefs, aoCols, headerLayout, fn) {
  var i, iLen, j, jLen, k, kLen, def;
  var columns = oSettings.aoColumns;
  if (aoCols) {
    for (i = 0, iLen = aoCols.length;i < iLen; i++) {
      if (aoCols[i] && aoCols[i].name) {
        columns[i].sName = aoCols[i].name;
      }
    }
  }
  if (aoColDefs) {
    for (i = aoColDefs.length - 1;i >= 0; i--) {
      def = aoColDefs[i];
      var aTargets = def.target !== undefined ? def.target : def.targets !== undefined ? def.targets : def.aTargets;
      if (!Array.isArray(aTargets)) {
        aTargets = [aTargets];
      }
      for (j = 0, jLen = aTargets.length;j < jLen; j++) {
        var target = aTargets[j];
        if (typeof target === "number" && target >= 0) {
          while (columns.length <= target) {
            _fnAddColumn(oSettings);
          }
          fn(target, def);
        } else if (typeof target === "number" && target < 0) {
          fn(columns.length + target, def);
        } else if (typeof target === "string") {
          for (k = 0, kLen = columns.length;k < kLen; k++) {
            if (target === "_all") {
              fn(k, def);
            } else if (target.indexOf(":name") !== -1) {
              if (columns[k].sName === target.replace(":name", "")) {
                fn(k, def);
              }
            } else {
              headerLayout.forEach(function(row) {
                if (row[k]) {
                  var cell = $(row[k].cell);
                  if (target.match(/^[a-z][\w-]*$/i)) {
                    target = "." + target;
                  }
                  if (cell.is(target)) {
                    fn(k, def);
                  }
                }
              });
            }
          }
        }
      }
    }
  }
  if (aoCols) {
    for (i = 0, iLen = aoCols.length;i < iLen; i++) {
      fn(i, aoCols[i]);
    }
  }
}
function _fnColumnsSumWidth(settings, targets, original, incVisible) {
  if (!Array.isArray(targets)) {
    targets = _fnColumnsFromHeader(targets);
  }
  var sum = 0;
  var unit;
  var columns = settings.aoColumns;
  for (var i = 0, iLen = targets.length;i < iLen; i++) {
    var column = columns[targets[i]];
    var definedWidth = original ? column.sWidthOrig : column.sWidth;
    if (!incVisible && column.bVisible === false) {
      continue;
    }
    if (definedWidth === null || definedWidth === undefined) {
      return null;
    } else if (typeof definedWidth === "number") {
      unit = "px";
      sum += definedWidth;
    } else {
      var matched = definedWidth.match(/([\d\.]+)([^\d]*)/);
      if (matched) {
        sum += matched[1] * 1;
        unit = matched.length === 3 ? matched[2] : "px";
      }
    }
  }
  return sum + unit;
}
function _fnColumnsFromHeader(cell) {
  var attr = $(cell).closest("[data-dt-column]").attr("data-dt-column");
  if (!attr) {
    return [];
  }
  return attr.split(",").map(function(val) {
    return val * 1;
  });
}
function _fnAddData(settings, dataIn, tr, tds) {
  var rowIdx = settings.aoData.length;
  var rowModel = $.extend(true, {}, DataTable.models.oRow, {
    src: tr ? "dom" : "data",
    idx: rowIdx
  });
  rowModel._aData = dataIn;
  settings.aoData.push(rowModel);
  var columns = settings.aoColumns;
  for (var i = 0, iLen = columns.length;i < iLen; i++) {
    columns[i].sType = null;
  }
  settings.aiDisplayMaster.push(rowIdx);
  var id = settings.rowIdFn(dataIn);
  if (id !== undefined) {
    settings.aIds[id] = rowModel;
  }
  if (tr || !settings.oFeatures.bDeferRender) {
    _fnCreateTr(settings, rowIdx, tr, tds);
  }
  return rowIdx;
}
function _fnAddTr(settings, trs) {
  var row;
  if (!(trs instanceof $)) {
    trs = $(trs);
  }
  return trs.map(function(i, el) {
    row = _fnGetRowElements(settings, el);
    return _fnAddData(settings, row.data, el, row.cells);
  });
}
function _fnGetCellData(settings, rowIdx, colIdx, type) {
  if (type === "search") {
    type = "filter";
  } else if (type === "order") {
    type = "sort";
  }
  var row = settings.aoData[rowIdx];
  if (!row) {
    return;
  }
  var draw = settings.iDraw;
  var col = settings.aoColumns[colIdx];
  var rowData = row._aData;
  var defaultContent = col.sDefaultContent;
  var cellData = col.fnGetData(rowData, type, {
    settings,
    row: rowIdx,
    col: colIdx
  });
  if (type !== "display" && cellData && typeof cellData === "object" && cellData.nodeName) {
    cellData = cellData.innerHTML;
  }
  if (cellData === undefined) {
    if (settings.iDrawError != draw && defaultContent === null) {
      _fnLog(settings, 0, "Requested unknown parameter " + (typeof col.mData == "function" ? "{function}" : "'" + col.mData + "'") + " for row " + rowIdx + ", column " + colIdx, 4);
      settings.iDrawError = draw;
    }
    return defaultContent;
  }
  if ((cellData === rowData || cellData === null) && defaultContent !== null && type !== undefined) {
    cellData = defaultContent;
  } else if (typeof cellData === "function") {
    return cellData.call(rowData);
  }
  if (cellData === null && type === "display") {
    return "";
  }
  if (type === "filter") {
    var formatters = DataTable.ext.type.search;
    if (formatters[col.sType]) {
      cellData = formatters[col.sType](cellData);
    }
  }
  return cellData;
}
function _fnSetCellData(settings, rowIdx, colIdx, val) {
  var col = settings.aoColumns[colIdx];
  var rowData = settings.aoData[rowIdx]._aData;
  col.fnSetData(rowData, val, {
    settings,
    row: rowIdx,
    col: colIdx
  });
}
function _fnWriteCell(td, val) {
  if (val && typeof val === "object" && val.nodeName) {
    $(td).empty().append(val);
  } else {
    td.innerHTML = val;
  }
}
var __reArray = /\[.*?\]$/;
var __reFn = /\(\)$/;
function _fnSplitObjNotation(str) {
  var parts = str.match(/(\\.|[^.])+/g) || [""];
  return parts.map(function(s) {
    return s.replace(/\\\./g, ".");
  });
}
var _fnGetObjectDataFn = DataTable.util.get;
var _fnSetObjectDataFn = DataTable.util.set;
function _fnGetDataMaster(settings) {
  return _pluck(settings.aoData, "_aData");
}
function _fnClearTable(settings) {
  settings.aoData.length = 0;
  settings.aiDisplayMaster.length = 0;
  settings.aiDisplay.length = 0;
  settings.aIds = {};
}
function _fnInvalidate(settings, rowIdx, src, colIdx) {
  var row = settings.aoData[rowIdx];
  var i, iLen;
  row._aSortData = null;
  row._aFilterData = null;
  row.displayData = null;
  if (src === "dom" || (!src || src === "auto") && row.src === "dom") {
    row._aData = _fnGetRowElements(settings, row, colIdx, colIdx === undefined ? undefined : row._aData).data;
  } else {
    var cells = row.anCells;
    var display = _fnGetRowDisplay(settings, rowIdx);
    if (cells) {
      if (colIdx !== undefined) {
        _fnWriteCell(cells[colIdx], display[colIdx]);
      } else {
        for (i = 0, iLen = cells.length;i < iLen; i++) {
          _fnWriteCell(cells[i], display[i]);
        }
      }
    }
  }
  var cols = settings.aoColumns;
  if (colIdx !== undefined) {
    cols[colIdx].sType = null;
    cols[colIdx].wideStrings = null;
  } else {
    for (i = 0, iLen = cols.length;i < iLen; i++) {
      cols[i].sType = null;
      cols[i].wideStrings = null;
    }
    _fnRowAttributes(settings, row);
  }
}
function _fnGetRowElements(settings, row, colIdx, d) {
  var tds = [], td = row.firstChild, name, col, i = 0, contents, columns = settings.aoColumns, objectRead = settings._rowReadObject;
  d = d !== undefined ? d : objectRead ? {} : [];
  var attr = function(str, td2) {
    if (typeof str === "string") {
      var idx = str.indexOf("@");
      if (idx !== -1) {
        var attr2 = str.substring(idx + 1);
        var setter = _fnSetObjectDataFn(str);
        setter(d, td2.getAttribute(attr2));
      }
    }
  };
  var cellProcess = function(cell) {
    if (colIdx === undefined || colIdx === i) {
      col = columns[i];
      contents = cell.innerHTML.trim();
      if (col && col._bAttrSrc) {
        var setter = _fnSetObjectDataFn(col.mData._);
        setter(d, contents);
        attr(col.mData.sort, cell);
        attr(col.mData.type, cell);
        attr(col.mData.filter, cell);
      } else {
        if (objectRead) {
          if (!col._setter) {
            col._setter = _fnSetObjectDataFn(col.mData);
          }
          col._setter(d, contents);
        } else {
          d[i] = contents;
        }
      }
    }
    i++;
  };
  if (td) {
    while (td) {
      name = td.nodeName.toUpperCase();
      if (name == "TD" || name == "TH") {
        cellProcess(td);
        tds.push(td);
      }
      td = td.nextSibling;
    }
  } else {
    tds = row.anCells;
    for (var j = 0, jen = tds.length;j < jen; j++) {
      cellProcess(tds[j]);
    }
  }
  var rowNode = row.firstChild ? row : row.nTr;
  if (rowNode) {
    var id = rowNode.getAttribute("id");
    if (id) {
      _fnSetObjectDataFn(settings.rowId)(d, id);
    }
  }
  return {
    data: d,
    cells: tds
  };
}
function _fnGetRowDisplay(settings, rowIdx) {
  var rowModal = settings.aoData[rowIdx];
  var columns = settings.aoColumns;
  if (!rowModal.displayData) {
    rowModal.displayData = [];
    for (var colIdx = 0, len = columns.length;colIdx < len; colIdx++) {
      rowModal.displayData.push(_fnGetCellData(settings, rowIdx, colIdx, "display"));
    }
  }
  return rowModal.displayData;
}
function _fnCreateTr(oSettings, iRow, nTrIn, anTds) {
  var row = oSettings.aoData[iRow], rowData = row._aData, cells = [], nTr, nTd, oCol, i, iLen, create, trClass = oSettings.oClasses.tbody.row;
  if (row.nTr === null) {
    nTr = nTrIn || document.createElement("tr");
    row.nTr = nTr;
    row.anCells = cells;
    _addClass(nTr, trClass);
    nTr._DT_RowIndex = iRow;
    _fnRowAttributes(oSettings, row);
    for (i = 0, iLen = oSettings.aoColumns.length;i < iLen; i++) {
      oCol = oSettings.aoColumns[i];
      create = nTrIn && anTds[i] ? false : true;
      nTd = create ? document.createElement(oCol.sCellType) : anTds[i];
      if (!nTd) {
        _fnLog(oSettings, 0, "Incorrect column count", 18);
      }
      nTd._DT_CellIndex = {
        row: iRow,
        column: i
      };
      cells.push(nTd);
      var display = _fnGetRowDisplay(oSettings, iRow);
      if (create || (oCol.mRender || oCol.mData !== i) && (!$.isPlainObject(oCol.mData) || oCol.mData._ !== i + ".display")) {
        _fnWriteCell(nTd, display[i]);
      }
      _addClass(nTd, oCol.sClass);
      if (oCol.bVisible && create) {
        nTr.appendChild(nTd);
      } else if (!oCol.bVisible && !create) {
        nTd.parentNode.removeChild(nTd);
      }
      if (oCol.fnCreatedCell) {
        oCol.fnCreatedCell.call(oSettings.oInstance, nTd, _fnGetCellData(oSettings, iRow, i), rowData, iRow, i);
      }
    }
    _fnCallbackFire(oSettings, "aoRowCreatedCallback", "row-created", [nTr, rowData, iRow, cells]);
  } else {
    _addClass(row.nTr, trClass);
  }
}
function _fnRowAttributes(settings, row) {
  var tr = row.nTr;
  var data = row._aData;
  if (tr) {
    var id = settings.rowIdFn(data);
    if (id) {
      tr.id = id;
    }
    if (data.DT_RowClass) {
      var a = data.DT_RowClass.split(" ");
      row.__rowc = row.__rowc ? _unique(row.__rowc.concat(a)) : a;
      $(tr).removeClass(row.__rowc.join(" ")).addClass(data.DT_RowClass);
    }
    if (data.DT_RowAttr) {
      $(tr).attr(data.DT_RowAttr);
    }
    if (data.DT_RowData) {
      $(tr).data(data.DT_RowData);
    }
  }
}
function _fnBuildHead(settings, side) {
  var classes = settings.oClasses;
  var columns = settings.aoColumns;
  var i, iLen, row;
  var target = side === "header" ? settings.nTHead : settings.nTFoot;
  var titleProp = side === "header" ? "sTitle" : side;
  if (!target) {
    return;
  }
  if (side === "header" || _pluck(settings.aoColumns, titleProp).join("")) {
    row = $("tr", target);
    if (!row.length) {
      row = $("<tr/>").appendTo(target);
    }
    if (row.length === 1) {
      var cellCount = 0;
      $("td, th", row).each(function() {
        cellCount += this.colSpan;
      });
      for (i = cellCount, iLen = columns.length;i < iLen; i++) {
        $("<th/>").html(columns[i][titleProp] || "").appendTo(row);
      }
    }
  }
  var detected = _fnDetectHeader(settings, target, true);
  if (side === "header") {
    settings.aoHeader = detected;
    $("tr", target).addClass(classes.thead.row);
  } else {
    settings.aoFooter = detected;
    $("tr", target).addClass(classes.tfoot.row);
  }
  $(target).children("tr").children("th, td").each(function() {
    _fnRenderer(settings, side)(settings, $(this), classes);
  });
}
function _fnHeaderLayout(settings, source, incColumns) {
  var row, column, cell;
  var local = [];
  var structure = [];
  var columns = settings.aoColumns;
  var columnCount = columns.length;
  var rowspan, colspan;
  if (!source) {
    return;
  }
  if (!incColumns) {
    incColumns = _range(columnCount).filter(function(idx) {
      return columns[idx].bVisible;
    });
  }
  for (row = 0;row < source.length; row++) {
    local[row] = source[row].slice().filter(function(cell2, i) {
      return incColumns.includes(i);
    });
    structure.push([]);
  }
  for (row = 0;row < local.length; row++) {
    for (column = 0;column < local[row].length; column++) {
      rowspan = 1;
      colspan = 1;
      if (structure[row][column] === undefined) {
        cell = local[row][column].cell;
        while (local[row + rowspan] !== undefined && local[row][column].cell == local[row + rowspan][column].cell) {
          structure[row + rowspan][column] = null;
          rowspan++;
        }
        while (local[row][column + colspan] !== undefined && local[row][column].cell == local[row][column + colspan].cell) {
          for (var k = 0;k < rowspan; k++) {
            structure[row + k][column + colspan] = null;
          }
          colspan++;
        }
        var titleSpan = $(".dt-column-title", cell);
        structure[row][column] = {
          cell,
          colspan,
          rowspan,
          title: titleSpan.length ? titleSpan.html() : $(cell).html()
        };
      }
    }
  }
  return structure;
}
function _fnDrawHead(settings, source) {
  var layout = _fnHeaderLayout(settings, source);
  var tr, n;
  for (var row = 0;row < source.length; row++) {
    tr = source[row].row;
    if (tr) {
      while (n = tr.firstChild) {
        tr.removeChild(n);
      }
    }
    for (var column = 0;column < layout[row].length; column++) {
      var point = layout[row][column];
      if (point) {
        $(point.cell).appendTo(tr).attr("rowspan", point.rowspan).attr("colspan", point.colspan);
      }
    }
  }
}
function _fnDraw(oSettings, ajaxComplete) {
  _fnStart(oSettings);
  var aPreDraw = _fnCallbackFire(oSettings, "aoPreDrawCallback", "preDraw", [oSettings]);
  if (aPreDraw.indexOf(false) !== -1) {
    _fnProcessingDisplay(oSettings, false);
    return;
  }
  var anRows = [];
  var iRowCount = 0;
  var bServerSide = _fnDataSource(oSettings) == "ssp";
  var aiDisplay = oSettings.aiDisplay;
  var iDisplayStart = oSettings._iDisplayStart;
  var iDisplayEnd = oSettings.fnDisplayEnd();
  var columns = oSettings.aoColumns;
  var body = $(oSettings.nTBody);
  oSettings.bDrawing = true;
  if (oSettings.deferLoading) {
    oSettings.deferLoading = false;
    oSettings.iDraw++;
    _fnProcessingDisplay(oSettings, false);
  } else if (!bServerSide) {
    oSettings.iDraw++;
  } else if (!oSettings.bDestroying && !ajaxComplete) {
    if (oSettings.iDraw === 0) {
      body.empty().append(_emptyRow(oSettings));
    }
    _fnAjaxUpdate(oSettings);
    return;
  }
  if (aiDisplay.length !== 0) {
    var iStart = bServerSide ? 0 : iDisplayStart;
    var iEnd = bServerSide ? oSettings.aoData.length : iDisplayEnd;
    for (var j = iStart;j < iEnd; j++) {
      var iDataIndex = aiDisplay[j];
      var aoData = oSettings.aoData[iDataIndex];
      if (aoData === null) {
        continue;
      }
      if (aoData.nTr === null) {
        _fnCreateTr(oSettings, iDataIndex);
      }
      var nRow = aoData.nTr;
      for (var i = 0;i < columns.length; i++) {
        var col = columns[i];
        var td = aoData.anCells[i];
        _addClass(td, _ext.type.className[col.sType]);
        _addClass(td, oSettings.oClasses.tbody.cell);
      }
      _fnCallbackFire(oSettings, "aoRowCallback", null, [nRow, aoData._aData, iRowCount, j, iDataIndex]);
      anRows.push(nRow);
      iRowCount++;
    }
  } else {
    anRows[0] = _emptyRow(oSettings);
  }
  _fnCallbackFire(oSettings, "aoHeaderCallback", "header", [
    $(oSettings.nTHead).children("tr")[0],
    _fnGetDataMaster(oSettings),
    iDisplayStart,
    iDisplayEnd,
    aiDisplay
  ]);
  _fnCallbackFire(oSettings, "aoFooterCallback", "footer", [
    $(oSettings.nTFoot).children("tr")[0],
    _fnGetDataMaster(oSettings),
    iDisplayStart,
    iDisplayEnd,
    aiDisplay
  ]);
  if (body[0].replaceChildren) {
    body[0].replaceChildren.apply(body[0], anRows);
  } else {
    body.children().detach();
    body.append($(anRows));
  }
  $(oSettings.nTableWrapper).toggleClass("dt-empty-footer", $("tr", oSettings.nTFoot).length === 0);
  _fnCallbackFire(oSettings, "aoDrawCallback", "draw", [oSettings], true);
  oSettings.bSorted = false;
  oSettings.bFiltered = false;
  oSettings.bDrawing = false;
}
function _fnReDraw(settings, holdPosition, recompute) {
  var features = settings.oFeatures, sort = features.bSort, filter = features.bFilter;
  if (recompute === undefined || recompute === true) {
    _fnColumnTypes(settings);
    if (sort) {
      _fnSort(settings);
    }
    if (filter) {
      _fnFilterComplete(settings, settings.oPreviousSearch);
    } else {
      settings.aiDisplay = settings.aiDisplayMaster.slice();
    }
  }
  if (holdPosition !== true) {
    settings._iDisplayStart = 0;
  }
  settings._drawHold = holdPosition;
  _fnDraw(settings);
  settings.api.one("draw", function() {
    settings._drawHold = false;
  });
}
function _emptyRow(settings) {
  var oLang = settings.oLanguage;
  var zero = oLang.sZeroRecords;
  var dataSrc = _fnDataSource(settings);
  if ((dataSrc === "ssp" || dataSrc === "ajax") && !settings.json) {
    zero = oLang.sLoadingRecords;
  } else if (oLang.sEmptyTable && settings.fnRecordsTotal() === 0) {
    zero = oLang.sEmptyTable;
  }
  return $("<tr/>").append($("<td />", {
    colSpan: _fnVisibleColumns(settings),
    class: settings.oClasses.empty.row
  }).html(zero))[0];
}
function _layoutItems(row, align, items) {
  if (Array.isArray(items)) {
    for (var i = 0;i < items.length; i++) {
      _layoutItems(row, align, items[i]);
    }
    return;
  }
  var rowCell = row[align];
  if ($.isPlainObject(items)) {
    if (items.features) {
      if (items.rowId) {
        row.id = items.rowId;
      }
      if (items.rowClass) {
        row.className = items.rowClass;
      }
      rowCell.id = items.id;
      rowCell.className = items.className;
      _layoutItems(row, align, items.features);
    } else {
      Object.keys(items).map(function(key) {
        rowCell.contents.push({
          feature: key,
          opts: items[key]
        });
      });
    }
  } else {
    rowCell.contents.push(items);
  }
}
function _layoutGetRow(rows, rowNum, align) {
  var row;
  for (var i = 0;i < rows.length; i++) {
    row = rows[i];
    if (row.rowNum === rowNum) {
      if (align === "full" && row.full || (align === "start" || align === "end") && (row.start || row.end)) {
        if (!row[align]) {
          row[align] = {
            contents: []
          };
        }
        return row;
      }
    }
  }
  row = {
    rowNum
  };
  row[align] = {
    contents: []
  };
  rows.push(row);
  return row;
}
function _layoutArray(settings, layout, side) {
  var rows = [];
  $.each(layout, function(pos, items) {
    if (items === null) {
      return;
    }
    var parts = pos.match(/^([a-z]+)([0-9]*)([A-Za-z]*)$/);
    var rowNum = parts[2] ? parts[2] * 1 : 0;
    var align = parts[3] ? parts[3].toLowerCase() : "full";
    if (parts[1] !== side) {
      return;
    }
    var row2 = _layoutGetRow(rows, rowNum, align);
    _layoutItems(row2, align, items);
  });
  rows.sort(function(a, b) {
    var order1 = a.rowNum;
    var order2 = b.rowNum;
    if (order1 === order2) {
      var ret = a.full && !b.full ? -1 : 1;
      return side === "bottom" ? ret * -1 : ret;
    }
    return order2 - order1;
  });
  if (side === "bottom") {
    rows.reverse();
  }
  for (var row = 0;row < rows.length; row++) {
    delete rows[row].rowNum;
    _layoutResolve(settings, rows[row]);
  }
  return rows;
}
function _layoutResolve(settings, row) {
  var getFeature = function(feature, opts) {
    if (!_ext.features[feature]) {
      _fnLog(settings, 0, "Unknown feature: " + feature);
    }
    return _ext.features[feature].apply(this, [settings, opts]);
  };
  var resolve = function(item) {
    if (!row[item]) {
      return;
    }
    var line = row[item].contents;
    for (var i = 0, iLen = line.length;i < iLen; i++) {
      if (!line[i]) {
        continue;
      } else if (typeof line[i] === "string") {
        line[i] = getFeature(line[i], null);
      } else if ($.isPlainObject(line[i])) {
        line[i] = getFeature(line[i].feature, line[i].opts);
      } else if (typeof line[i].node === "function") {
        line[i] = line[i].node(settings);
      } else if (typeof line[i] === "function") {
        var inst = line[i](settings);
        line[i] = typeof inst.node === "function" ? inst.node() : inst;
      }
    }
  };
  resolve("start");
  resolve("end");
  resolve("full");
}
function _fnAddOptionsHtml(settings) {
  var classes = settings.oClasses;
  var table = $(settings.nTable);
  var insert = $("<div/>").attr({
    id: settings.sTableId + "_wrapper",
    class: classes.container
  }).insertBefore(table);
  settings.nTableWrapper = insert[0];
  if (settings.sDom) {
    _fnLayoutDom(settings, settings.sDom, insert);
  } else {
    var top = _layoutArray(settings, settings.layout, "top");
    var bottom = _layoutArray(settings, settings.layout, "bottom");
    var renderer = _fnRenderer(settings, "layout");
    top.forEach(function(item) {
      renderer(settings, insert, item);
    });
    renderer(settings, insert, {
      full: {
        table: true,
        contents: [_fnFeatureHtmlTable(settings)]
      }
    });
    bottom.forEach(function(item) {
      renderer(settings, insert, item);
    });
  }
  _processingHtml(settings);
}
function _fnLayoutDom(settings, dom, insert) {
  var parts = dom.match(/(".*?")|('.*?')|./g);
  var featureNode, option, newNode, next, attr;
  for (var i = 0;i < parts.length; i++) {
    featureNode = null;
    option = parts[i];
    if (option == "<") {
      newNode = $("<div/>");
      next = parts[i + 1];
      if (next[0] == "'" || next[0] == '"') {
        attr = next.replace(/['"]/g, "");
        var id = "", className;
        if (attr.indexOf(".") != -1) {
          var split = attr.split(".");
          id = split[0];
          className = split[1];
        } else if (attr[0] == "#") {
          id = attr;
        } else {
          className = attr;
        }
        newNode.attr("id", id.substring(1)).addClass(className);
        i++;
      }
      insert.append(newNode);
      insert = newNode;
    } else if (option == ">") {
      insert = insert.parent();
    } else if (option == "t") {
      featureNode = _fnFeatureHtmlTable(settings);
    } else {
      DataTable.ext.feature.forEach(function(feature) {
        if (option == feature.cFeature) {
          featureNode = feature.fnInit(settings);
        }
      });
    }
    if (featureNode) {
      insert.append(featureNode);
    }
  }
}
function _fnDetectHeader(settings, thead, write) {
  var columns = settings.aoColumns;
  var rows = $(thead).children("tr");
  var row, cell;
  var i, k, l, iLen, shifted, column, colspan, rowspan;
  var titleRow = settings.titleRow;
  var isHeader = thead && thead.nodeName.toLowerCase() === "thead";
  var layout = [];
  var unique;
  var shift = function(a, i2, j) {
    var k2 = a[i2];
    while (k2[j]) {
      j++;
    }
    return j;
  };
  for (i = 0, iLen = rows.length;i < iLen; i++) {
    layout.push([]);
  }
  for (i = 0, iLen = rows.length;i < iLen; i++) {
    row = rows[i];
    column = 0;
    cell = row.firstChild;
    while (cell) {
      if (cell.nodeName.toUpperCase() == "TD" || cell.nodeName.toUpperCase() == "TH") {
        var cols = [];
        var jqCell = $(cell);
        colspan = cell.getAttribute("colspan") * 1;
        rowspan = cell.getAttribute("rowspan") * 1;
        colspan = !colspan || colspan === 0 || colspan === 1 ? 1 : colspan;
        rowspan = !rowspan || rowspan === 0 || rowspan === 1 ? 1 : rowspan;
        shifted = shift(layout, i, column);
        unique = colspan === 1 ? true : false;
        if (write) {
          if (unique) {
            _fnColumnOptions(settings, shifted, _fnEscapeObject(jqCell.data()));
            var columnDef = columns[shifted];
            var width = cell.getAttribute("width") || null;
            var t = cell.style.width.match(/width:\s*(\d+[pxem%]+)/);
            if (t) {
              width = t[1];
            }
            columnDef.sWidthOrig = columnDef.sWidth || width;
            if (isHeader) {
              if (columnDef.sTitle !== null && !columnDef.autoTitle) {
                if (titleRow === true && i === 0 || titleRow === false && i === rows.length - 1 || titleRow === i || titleRow === null) {
                  cell.innerHTML = columnDef.sTitle;
                }
              }
              if (!columnDef.sTitle && unique) {
                columnDef.sTitle = _stripHtml(cell.innerHTML);
                columnDef.autoTitle = true;
              }
            } else {
              if (columnDef.footer) {
                cell.innerHTML = columnDef.footer;
              }
            }
            if (!columnDef.ariaTitle) {
              columnDef.ariaTitle = jqCell.attr("aria-label") || columnDef.sTitle;
            }
            if (columnDef.className) {
              jqCell.addClass(columnDef.className);
            }
          }
          if ($(".dt-column-title", cell).length === 0) {
            $(document.createElement(settings.columnTitleTag)).addClass("dt-column-title").append(cell.childNodes).appendTo(cell);
          }
          if (settings.orderIndicators && isHeader && jqCell.filter(":not([data-dt-order=disable])").length !== 0 && jqCell.parent(":not([data-dt-order=disable])").length !== 0 && $(".dt-column-order", cell).length === 0) {
            $(document.createElement(settings.columnTitleTag)).addClass("dt-column-order").appendTo(cell);
          }
          var headerFooter = isHeader ? "header" : "footer";
          if ($("div.dt-column-" + headerFooter, cell).length === 0) {
            $("<div>").addClass("dt-column-" + headerFooter).append(cell.childNodes).appendTo(cell);
          }
        }
        for (l = 0;l < colspan; l++) {
          for (k = 0;k < rowspan; k++) {
            layout[i + k][shifted + l] = {
              cell,
              unique
            };
            layout[i + k].row = row;
          }
          cols.push(shifted + l);
        }
        cell.setAttribute("data-dt-column", _unique(cols).join(","));
      }
      cell = cell.nextSibling;
    }
  }
  return layout;
}
function _fnStart(oSettings) {
  var bServerSide = _fnDataSource(oSettings) == "ssp";
  var iInitDisplayStart = oSettings.iInitDisplayStart;
  if (iInitDisplayStart !== undefined && iInitDisplayStart !== -1) {
    oSettings._iDisplayStart = bServerSide ? iInitDisplayStart : iInitDisplayStart >= oSettings.fnRecordsDisplay() ? 0 : iInitDisplayStart;
    oSettings.iInitDisplayStart = -1;
  }
}
function _fnBuildAjax(oSettings, data, fn) {
  var ajaxData;
  var ajax = oSettings.ajax;
  var instance = oSettings.oInstance;
  var callback = function(json) {
    var status = oSettings.jqXHR ? oSettings.jqXHR.status : null;
    if (json === null || typeof status === "number" && status == 204) {
      json = {};
      _fnAjaxDataSrc(oSettings, json, []);
    }
    var error = json.error || json.sError;
    if (error) {
      _fnLog(oSettings, 0, error);
    }
    if (json.d && typeof json.d === "string") {
      try {
        json = JSON.parse(json.d);
      } catch (e) {}
    }
    oSettings.json = json;
    _fnCallbackFire(oSettings, null, "xhr", [oSettings, json, oSettings.jqXHR], true);
    fn(json);
  };
  if ($.isPlainObject(ajax) && ajax.data) {
    ajaxData = ajax.data;
    var newData = typeof ajaxData === "function" ? ajaxData(data, oSettings) : ajaxData;
    data = typeof ajaxData === "function" && newData ? newData : $.extend(true, data, newData);
    delete ajax.data;
  }
  var baseAjax = {
    url: typeof ajax === "string" ? ajax : "",
    data,
    success: callback,
    dataType: "json",
    cache: false,
    type: oSettings.sServerMethod,
    error: function(xhr, error) {
      var ret = _fnCallbackFire(oSettings, null, "xhr", [oSettings, null, oSettings.jqXHR], true);
      if (ret.indexOf(true) === -1) {
        if (error == "parsererror") {
          _fnLog(oSettings, 0, "Invalid JSON response", 1);
        } else if (xhr.readyState === 4) {
          _fnLog(oSettings, 0, "Ajax error", 7);
        }
      }
      _fnProcessingDisplay(oSettings, false);
    }
  };
  if ($.isPlainObject(ajax)) {
    $.extend(baseAjax, ajax);
  }
  oSettings.oAjaxData = data;
  _fnCallbackFire(oSettings, null, "preXhr", [oSettings, data, baseAjax], true);
  if (baseAjax.submitAs === "json" && typeof data === "object") {
    baseAjax.data = JSON.stringify(data);
    if (!baseAjax.contentType) {
      baseAjax.contentType = "application/json; charset=utf-8";
    }
  }
  if (typeof ajax === "function") {
    oSettings.jqXHR = ajax.call(instance, data, callback, oSettings);
  } else if (ajax.url === "") {
    var empty = {};
    _fnAjaxDataSrc(oSettings, empty, []);
    callback(empty);
  } else {
    oSettings.jqXHR = $.ajax(baseAjax);
  }
  if (ajaxData) {
    ajax.data = ajaxData;
  }
}
function _fnAjaxUpdate(settings) {
  settings.iDraw++;
  _fnProcessingDisplay(settings, true);
  _fnBuildAjax(settings, _fnAjaxParameters(settings), function(json) {
    _fnAjaxUpdateDraw(settings, json);
  });
}
function _fnAjaxParameters(settings) {
  var { aoColumns: columns, oFeatures: features, oPreviousSearch: preSearch, aoPreSearchCols: preColSearch } = settings, colData = function(idx, prop) {
    return typeof columns[idx][prop] === "function" ? "function" : columns[idx][prop];
  };
  return {
    draw: settings.iDraw,
    columns: columns.map(function(column, i) {
      return {
        data: colData(i, "mData"),
        name: column.sName,
        searchable: column.bSearchable,
        orderable: column.bSortable,
        search: {
          value: preColSearch[i].search,
          regex: preColSearch[i].regex,
          fixed: Object.keys(column.searchFixed).map(function(name) {
            return {
              name,
              term: typeof column.searchFixed[name] !== "function" ? column.searchFixed[name].toString() : "function"
            };
          })
        }
      };
    }),
    order: _fnSortFlatten(settings).map(function(val) {
      return {
        column: val.col,
        dir: val.dir,
        name: colData(val.col, "sName")
      };
    }),
    start: settings._iDisplayStart,
    length: features.bPaginate ? settings._iDisplayLength : -1,
    search: {
      value: preSearch.search,
      regex: preSearch.regex,
      fixed: Object.keys(settings.searchFixed).map(function(name) {
        return {
          name,
          term: typeof settings.searchFixed[name] !== "function" ? settings.searchFixed[name].toString() : "function"
        };
      })
    }
  };
}
function _fnAjaxUpdateDraw(settings, json) {
  var data = _fnAjaxDataSrc(settings, json);
  var draw = _fnAjaxDataSrcParam(settings, "draw", json);
  var recordsTotal = _fnAjaxDataSrcParam(settings, "recordsTotal", json);
  var recordsFiltered = _fnAjaxDataSrcParam(settings, "recordsFiltered", json);
  if (draw !== undefined) {
    if (draw * 1 < settings.iDraw) {
      return;
    }
    settings.iDraw = draw * 1;
  }
  if (!data) {
    data = [];
  }
  _fnClearTable(settings);
  settings._iRecordsTotal = parseInt(recordsTotal, 10);
  settings._iRecordsDisplay = parseInt(recordsFiltered, 10);
  for (var i = 0, iLen = data.length;i < iLen; i++) {
    _fnAddData(settings, data[i]);
  }
  settings.aiDisplay = settings.aiDisplayMaster.slice();
  _fnColumnTypes(settings);
  _fnDraw(settings, true);
  _fnInitComplete(settings);
  _fnProcessingDisplay(settings, false);
}
function _fnAjaxDataSrc(settings, json, write) {
  var dataProp = "data";
  if ($.isPlainObject(settings.ajax) && settings.ajax.dataSrc !== undefined) {
    var dataSrc = settings.ajax.dataSrc;
    if (typeof dataSrc === "string" || typeof dataSrc === "function") {
      dataProp = dataSrc;
    } else if (dataSrc.data !== undefined) {
      dataProp = dataSrc.data;
    }
  }
  if (!write) {
    if (dataProp === "data") {
      return json.aaData || json[dataProp];
    }
    return dataProp !== "" ? _fnGetObjectDataFn(dataProp)(json) : json;
  }
  _fnSetObjectDataFn(dataProp)(json, write);
}
function _fnAjaxDataSrcParam(settings, param, json) {
  var dataSrc = $.isPlainObject(settings.ajax) ? settings.ajax.dataSrc : null;
  if (dataSrc && dataSrc[param]) {
    return _fnGetObjectDataFn(dataSrc[param])(json);
  }
  var old = "";
  if (param === "draw") {
    old = "sEcho";
  } else if (param === "recordsTotal") {
    old = "iTotalRecords";
  } else if (param === "recordsFiltered") {
    old = "iTotalDisplayRecords";
  }
  return json[old] !== undefined ? json[old] : json[param];
}
function _fnFilterComplete(settings, input) {
  var columnsSearch = settings.aoPreSearchCols;
  if (_fnDataSource(settings) != "ssp") {
    _fnFilterData(settings);
    settings.aiDisplay = settings.aiDisplayMaster.slice();
    _fnFilter(settings.aiDisplay, settings, input.search, input);
    $.each(settings.searchFixed, function(name, term) {
      _fnFilter(settings.aiDisplay, settings, term, {});
    });
    for (var i = 0;i < columnsSearch.length; i++) {
      var col = columnsSearch[i];
      _fnFilter(settings.aiDisplay, settings, col.search, col, i);
      $.each(settings.aoColumns[i].searchFixed, function(name, term) {
        _fnFilter(settings.aiDisplay, settings, term, {}, i);
      });
    }
    _fnFilterCustom(settings);
  }
  settings.bFiltered = true;
  _fnCallbackFire(settings, null, "search", [settings]);
}
function _fnFilterCustom(settings) {
  var filters = DataTable.ext.search;
  var displayRows = settings.aiDisplay;
  var row, rowIdx;
  for (var i = 0, iLen = filters.length;i < iLen; i++) {
    var rows = [];
    for (var j = 0, jen = displayRows.length;j < jen; j++) {
      rowIdx = displayRows[j];
      row = settings.aoData[rowIdx];
      if (filters[i](settings, row._aFilterData, rowIdx, row._aData, j)) {
        rows.push(rowIdx);
      }
    }
    displayRows.length = 0;
    _fnArrayApply(displayRows, rows);
  }
}
function _fnFilter(searchRows, settings, input, options, column) {
  if (input === "") {
    return;
  }
  var i = 0;
  var matched = [];
  var searchFunc = typeof input === "function" ? input : null;
  var rpSearch = input instanceof RegExp ? input : searchFunc ? null : _fnFilterCreateSearch(input, options);
  for (i = 0;i < searchRows.length; i++) {
    var row = settings.aoData[searchRows[i]];
    var data = column === undefined ? row._sFilterRow : row._aFilterData[column];
    if (searchFunc && searchFunc(data, row._aData, searchRows[i], column) || rpSearch && rpSearch.test(data)) {
      matched.push(searchRows[i]);
    }
  }
  searchRows.length = matched.length;
  for (i = 0;i < matched.length; i++) {
    searchRows[i] = matched[i];
  }
}
function _fnFilterCreateSearch(search, inOpts) {
  var not = [];
  var options = $.extend({}, {
    boundary: false,
    caseInsensitive: true,
    exact: false,
    regex: false,
    smart: true
  }, inOpts);
  if (typeof search !== "string") {
    search = search.toString();
  }
  search = _normalize(search);
  if (options.exact) {
    return new RegExp("^" + _fnEscapeRegex(search) + "$", options.caseInsensitive ? "i" : "");
  }
  search = options.regex ? search : _fnEscapeRegex(search);
  if (options.smart) {
    var parts = search.match(/!?["\u201C][^"\u201D]+["\u201D]|[^ ]+/g) || [""];
    var a = parts.map(function(word) {
      var negative = false;
      var m;
      if (word.charAt(0) === "!") {
        negative = true;
        word = word.substring(1);
      }
      if (word.charAt(0) === '"') {
        m = word.match(/^"(.*)"$/);
        word = m ? m[1] : word;
      } else if (word.charAt(0) === "“") {
        m = word.match(/^\u201C(.*)\u201D$/);
        word = m ? m[1] : word;
      }
      if (negative) {
        if (word.length > 1) {
          not.push("(?!" + word + ")");
        }
        word = "";
      }
      return word.replace(/"/g, "");
    });
    var match = not.length ? not.join("") : "";
    var boundary = options.boundary ? "\\b" : "";
    search = "^(?=.*?" + boundary + a.join(")(?=.*?" + boundary) + ")(" + match + ".)*$";
  }
  return new RegExp(search, options.caseInsensitive ? "i" : "");
}
var _fnEscapeRegex = DataTable.util.escapeRegex;
var __filter_div = $("<div>")[0];
var __filter_div_textContent = __filter_div.textContent !== undefined;
function _fnFilterData(settings) {
  var columns = settings.aoColumns;
  var data = settings.aoData;
  var column;
  var j, jen, filterData, cellData, row;
  var wasInvalidated = false;
  for (var rowIdx = 0;rowIdx < data.length; rowIdx++) {
    if (!data[rowIdx]) {
      continue;
    }
    row = data[rowIdx];
    if (!row._aFilterData) {
      filterData = [];
      for (j = 0, jen = columns.length;j < jen; j++) {
        column = columns[j];
        if (column.bSearchable) {
          cellData = _fnGetCellData(settings, rowIdx, j, "filter");
          if (cellData === null) {
            cellData = "";
          }
          if (typeof cellData !== "string" && cellData.toString) {
            cellData = cellData.toString();
          }
        } else {
          cellData = "";
        }
        if (cellData.indexOf && cellData.indexOf("&") !== -1) {
          __filter_div.innerHTML = cellData;
          cellData = __filter_div_textContent ? __filter_div.textContent : __filter_div.innerText;
        }
        if (cellData.replace) {
          cellData = cellData.replace(/[\r\n\u2028]/g, "");
        }
        filterData.push(cellData);
      }
      row._aFilterData = filterData;
      row._sFilterRow = filterData.join("  ");
      wasInvalidated = true;
    }
  }
  return wasInvalidated;
}
function _fnInitialise(settings) {
  var i;
  var init = settings.oInit;
  var deferLoading = settings.deferLoading;
  var dataSrc = _fnDataSource(settings);
  if (!settings.bInitialised) {
    setTimeout(function() {
      _fnInitialise(settings);
    }, 200);
    return;
  }
  _fnBuildHead(settings, "header");
  _fnBuildHead(settings, "footer");
  _fnLoadState(settings, init, function() {
    _fnDrawHead(settings, settings.aoHeader);
    _fnDrawHead(settings, settings.aoFooter);
    var iAjaxStart = settings.iInitDisplayStart;
    if (init.aaData) {
      for (i = 0;i < init.aaData.length; i++) {
        _fnAddData(settings, init.aaData[i]);
      }
    } else if (deferLoading || dataSrc == "dom") {
      _fnAddTr(settings, $(settings.nTBody).children("tr"));
    }
    settings.aiDisplay = settings.aiDisplayMaster.slice();
    _fnAddOptionsHtml(settings);
    _fnSortInit(settings);
    _colGroup(settings);
    _fnProcessingDisplay(settings, true);
    _fnCallbackFire(settings, null, "preInit", [settings], true);
    _fnReDraw(settings);
    if (dataSrc != "ssp" || deferLoading) {
      if (dataSrc == "ajax") {
        _fnBuildAjax(settings, {}, function(json) {
          var aData = _fnAjaxDataSrc(settings, json);
          for (i = 0;i < aData.length; i++) {
            _fnAddData(settings, aData[i]);
          }
          settings.iInitDisplayStart = iAjaxStart;
          _fnReDraw(settings);
          _fnProcessingDisplay(settings, false);
          _fnInitComplete(settings);
        }, settings);
      } else {
        _fnInitComplete(settings);
        _fnProcessingDisplay(settings, false);
      }
    }
  });
}
function _fnInitComplete(settings) {
  if (settings._bInitComplete) {
    return;
  }
  var args = [settings, settings.json];
  settings._bInitComplete = true;
  _fnAdjustColumnSizing(settings);
  _fnCallbackFire(settings, null, "plugin-init", args, true);
  _fnCallbackFire(settings, "aoInitComplete", "init", args, true);
}
function _fnLengthChange(settings, val) {
  var len = parseInt(val, 10);
  settings._iDisplayLength = len;
  _fnLengthOverflow(settings);
  _fnCallbackFire(settings, null, "length", [settings, len]);
}
function _fnPageChange(settings, action, redraw) {
  var { _iDisplayStart: start, _iDisplayLength: len } = settings, records = settings.fnRecordsDisplay();
  if (records === 0 || len === -1) {
    start = 0;
  } else if (typeof action === "number") {
    start = action * len;
    if (start > records) {
      start = 0;
    }
  } else if (action == "first") {
    start = 0;
  } else if (action == "previous") {
    start = len >= 0 ? start - len : 0;
    if (start < 0) {
      start = 0;
    }
  } else if (action == "next") {
    if (start + len < records) {
      start += len;
    }
  } else if (action == "last") {
    start = Math.floor((records - 1) / len) * len;
  } else if (action === "ellipsis") {
    return;
  } else {
    _fnLog(settings, 0, "Unknown paging action: " + action, 5);
  }
  var changed = settings._iDisplayStart !== start;
  settings._iDisplayStart = start;
  _fnCallbackFire(settings, null, changed ? "page" : "page-nc", [settings]);
  if (changed && redraw) {
    _fnDraw(settings);
  }
  return changed;
}
function _processingHtml(settings) {
  var table = settings.nTable;
  var scrolling = settings.oScroll.sX !== "" || settings.oScroll.sY !== "";
  if (settings.oFeatures.bProcessing) {
    var n = $("<div/>", {
      id: settings.sTableId + "_processing",
      class: settings.oClasses.processing.container,
      role: "status"
    }).html(settings.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>");
    if (scrolling) {
      n.prependTo($("div.dt-scroll", settings.nTableWrapper));
    } else {
      n.insertBefore(table);
    }
    $(table).on("processing.dt.DT", function(e, s, show) {
      n.css("display", show ? "block" : "none");
    });
  }
}
function _fnProcessingDisplay(settings, show) {
  if (settings.bDrawing && show === false) {
    return;
  }
  _fnCallbackFire(settings, null, "processing", [settings, show]);
}
function _fnProcessingRun(settings, enable, run) {
  if (!enable) {
    run();
  } else {
    _fnProcessingDisplay(settings, true);
    setTimeout(function() {
      run();
      _fnProcessingDisplay(settings, false);
    }, 0);
  }
}
function _fnFeatureHtmlTable(settings) {
  var table = $(settings.nTable);
  var scroll = settings.oScroll;
  if (scroll.sX === "" && scroll.sY === "") {
    return settings.nTable;
  }
  var scrollX = scroll.sX;
  var scrollY = scroll.sY;
  var classes = settings.oClasses.scrolling;
  var caption = settings.captionNode;
  var captionSide = caption ? caption._captionSide : null;
  var headerClone = $(table[0].cloneNode(false));
  var footerClone = $(table[0].cloneNode(false));
  var footer = table.children("tfoot");
  var _div = "<div/>";
  var size = function(s) {
    return !s ? null : _fnStringToCss(s);
  };
  if (!footer.length) {
    footer = null;
  }
  var scroller = $(_div, { class: classes.container }).append($(_div, { class: classes.header.self }).css({
    overflow: "hidden",
    position: "relative",
    border: 0,
    width: scrollX ? size(scrollX) : "100%"
  }).append($(_div, { class: classes.header.inner }).css({
    "box-sizing": "content-box",
    width: scroll.sXInner || "100%"
  }).append(headerClone.removeAttr("id").css("margin-left", 0).append(captionSide === "top" ? caption : null).append(table.children("thead"))))).append($(_div, { class: classes.body }).css({
    position: "relative",
    overflow: "auto",
    width: size(scrollX)
  }).append(table));
  if (footer) {
    scroller.append($(_div, { class: classes.footer.self }).css({
      overflow: "hidden",
      border: 0,
      width: scrollX ? size(scrollX) : "100%"
    }).append($(_div, { class: classes.footer.inner }).append(footerClone.removeAttr("id").css("margin-left", 0).append(captionSide === "bottom" ? caption : null).append(table.children("tfoot")))));
  }
  var children = scroller.children();
  var scrollHead = children[0];
  var scrollBody = children[1];
  var scrollFoot = footer ? children[2] : null;
  $(scrollBody).on("scroll.DT", function() {
    var scrollLeft = this.scrollLeft;
    scrollHead.scrollLeft = scrollLeft;
    if (footer) {
      scrollFoot.scrollLeft = scrollLeft;
    }
  });
  $("th, td", scrollHead).on("focus", function() {
    var scrollLeft = scrollHead.scrollLeft;
    scrollBody.scrollLeft = scrollLeft;
    if (footer) {
      scrollBody.scrollLeft = scrollLeft;
    }
  });
  $(scrollBody).css("max-height", scrollY);
  if (!scroll.bCollapse) {
    $(scrollBody).css("height", scrollY);
  }
  settings.nScrollHead = scrollHead;
  settings.nScrollBody = scrollBody;
  settings.nScrollFoot = scrollFoot;
  settings.aoDrawCallback.push(_fnScrollDraw);
  return scroller[0];
}
function _fnScrollDraw(settings) {
  var scroll = settings.oScroll, barWidth = scroll.iBarWidth, divHeader = $(settings.nScrollHead), divHeaderInner = divHeader.children("div"), divHeaderTable = divHeaderInner.children("table"), divBodyEl = settings.nScrollBody, divBody = $(divBodyEl), divFooter = $(settings.nScrollFoot), divFooterInner = divFooter.children("div"), divFooterTable = divFooterInner.children("table"), header = $(settings.nTHead), table = $(settings.nTable), footer = settings.nTFoot && $("th, td", settings.nTFoot).length ? $(settings.nTFoot) : null, browser = settings.oBrowser, headerCopy, footerCopy;
  var scrollBarVis = divBodyEl.scrollHeight > divBodyEl.clientHeight;
  if (settings.scrollBarVis !== scrollBarVis && settings.scrollBarVis !== undefined) {
    settings.scrollBarVis = scrollBarVis;
    _fnAdjustColumnSizing(settings);
    return;
  } else {
    settings.scrollBarVis = scrollBarVis;
  }
  table.children("thead, tfoot").remove();
  headerCopy = header.clone().prependTo(table);
  headerCopy.find("th, td").removeAttr("tabindex");
  headerCopy.find("[id]").removeAttr("id");
  if (footer) {
    footerCopy = footer.clone().prependTo(table);
    footerCopy.find("[id]").removeAttr("id");
  }
  if (settings.aiDisplay.length) {
    var firstTr = null;
    var start = _fnDataSource(settings) !== "ssp" ? settings._iDisplayStart : 0;
    for (i = start;i < start + settings.aiDisplay.length; i++) {
      var idx = settings.aiDisplay[i];
      var tr = settings.aoData[idx].nTr;
      if (tr) {
        firstTr = tr;
        break;
      }
    }
    if (firstTr) {
      var colSizes = $(firstTr).children("th, td").map(function(vis) {
        return {
          idx: _fnVisibleToColumnIndex(settings, vis),
          width: $(this).outerWidth()
        };
      });
      for (var i = 0;i < colSizes.length; i++) {
        var colEl = settings.aoColumns[colSizes[i].idx].colEl[0];
        var colWidth = colEl.style.width.replace("px", "");
        if (colWidth !== colSizes[i].width) {
          colEl.style.width = colSizes[i].width + "px";
          if (scroll.sX) {
            colEl.style.minWidth = colSizes[i].width + "px";
          }
        }
      }
    }
  }
  divHeaderTable.find("colgroup").remove();
  divHeaderTable.append(settings.colgroup.clone());
  if (footer) {
    divFooterTable.find("colgroup").remove();
    divFooterTable.append(settings.colgroup.clone());
  }
  $("th, td", headerCopy).each(function() {
    $(this.childNodes).wrapAll('<div class="dt-scroll-sizing">');
  });
  if (footer) {
    $("th, td", footerCopy).each(function() {
      $(this.childNodes).wrapAll('<div class="dt-scroll-sizing">');
    });
  }
  var isScrolling = Math.floor(table.height()) > divBodyEl.clientHeight || divBody.css("overflow-y") == "scroll";
  var paddingSide = "padding" + (browser.bScrollbarLeft ? "Left" : "Right");
  var outerWidth = table.outerWidth();
  divHeaderTable.css("width", _fnStringToCss(outerWidth));
  divHeaderInner.css("width", _fnStringToCss(outerWidth)).css(paddingSide, isScrolling ? barWidth + "px" : "0px");
  if (footer) {
    divFooterTable.css("width", _fnStringToCss(outerWidth));
    divFooterInner.css("width", _fnStringToCss(outerWidth)).css(paddingSide, isScrolling ? barWidth + "px" : "0px");
  }
  table.children("colgroup").prependTo(table);
  divBody.trigger("scroll");
  if ((settings.bSorted || settings.bFiltered) && !settings._drawHold) {
    divBodyEl.scrollTop = 0;
  }
}
function _fnCalculateColumnWidths(settings) {
  if (!settings.oFeatures.bAutoWidth) {
    return;
  }
  var { nTable: table, aoColumns: columns, oScroll: scroll } = settings, scrollY = scroll.sY, scrollX = scroll.sX, scrollXInner = scroll.sXInner, visibleColumns = _fnGetColumns(settings, "bVisible"), tableWidthAttr = table.getAttribute("width"), tableContainer = table.parentNode, i, j, column, columnIdx;
  var styleWidth = table.style.width;
  var containerWidth = _fnWrapperWidth(settings);
  if (containerWidth === settings.containerWidth) {
    return false;
  }
  settings.containerWidth = containerWidth;
  if (!styleWidth && !tableWidthAttr) {
    table.style.width = "100%";
    styleWidth = "100%";
  }
  if (styleWidth && styleWidth.indexOf("%") !== -1) {
    tableWidthAttr = styleWidth;
  }
  _fnCallbackFire(settings, null, "column-calc", { visible: visibleColumns }, false);
  var tmpTable = $(table.cloneNode()).css("visibility", "hidden").css("margin", 0).removeAttr("id");
  tmpTable.append("<tbody/>");
  tmpTable.append($(settings.nTHead).clone()).append($(settings.nTFoot).clone());
  tmpTable.find("tfoot th, tfoot td").css("width", "");
  tmpTable.find("thead th, thead td").each(function() {
    var width = _fnColumnsSumWidth(settings, this, true, false);
    if (width) {
      this.style.width = width;
      if (scrollX) {
        this.style.minWidth = width;
        $(this).append($("<div/>").css({
          width,
          margin: 0,
          padding: 0,
          border: 0,
          height: 1
        }));
      }
    } else {
      this.style.width = "";
    }
  });
  var longestData = [];
  for (i = 0;i < visibleColumns.length; i++) {
    longestData.push(_fnGetWideStrings(settings, visibleColumns[i]));
  }
  if (longestData.length) {
    for (i = 0;i < longestData[0].length; i++) {
      var tr = $("<tr/>").appendTo(tmpTable.find("tbody"));
      for (j = 0;j < visibleColumns.length; j++) {
        columnIdx = visibleColumns[j];
        column = columns[columnIdx];
        var longest = longestData[j][i] || "";
        var autoClass = _ext.type.className[column.sType];
        var padding = column.sContentPadding || (scrollX ? "-" : "");
        var text = longest + padding;
        var insert = longest.indexOf("<") === -1 && longest.indexOf("&") === -1 ? document.createTextNode(text) : text;
        $("<td/>").addClass(autoClass).addClass(column.sClass).append(insert).appendTo(tr);
      }
    }
  }
  $("[name]", tmpTable).removeAttr("name");
  var holder = $("<div/>").css(scrollX || scrollY ? {
    position: "absolute",
    top: 0,
    left: 0,
    height: 1,
    right: 0,
    overflow: "hidden"
  } : {}).append(tmpTable).appendTo(tableContainer);
  if (scrollX && scrollXInner) {
    tmpTable.width(scrollXInner);
  } else if (scrollX) {
    tmpTable.css("width", "auto");
    tmpTable.removeAttr("width");
    if (tmpTable.outerWidth() < tableContainer.clientWidth && tableWidthAttr) {
      tmpTable.outerWidth(tableContainer.clientWidth);
    }
  } else if (scrollY) {
    tmpTable.outerWidth(tableContainer.clientWidth);
  } else if (tableWidthAttr) {
    tmpTable.outerWidth(tableWidthAttr);
  }
  var total = 0;
  var bodyCells = tmpTable.find("tbody tr").eq(0).children();
  for (i = 0;i < visibleColumns.length; i++) {
    var bounding = bodyCells[i].getBoundingClientRect().width;
    total += bounding;
    columns[visibleColumns[i]].sWidth = _fnStringToCss(bounding);
  }
  table.style.width = _fnStringToCss(total);
  holder.remove();
  if (tableWidthAttr) {
    table.style.width = _fnStringToCss(tableWidthAttr);
  }
  if ((tableWidthAttr || scrollX) && !settings._reszEvt) {
    var resize = DataTable.util.throttle(function() {
      var newWidth = _fnWrapperWidth(settings);
      if (!settings.bDestroying && newWidth !== 0) {
        _fnAdjustColumnSizing(settings);
      }
    });
    if (window.ResizeObserver) {
      var first = $(settings.nTableWrapper).is(":visible");
      var resizer = $("<div>").css({
        width: "100%",
        height: 0
      }).addClass("dt-autosize").appendTo(settings.nTableWrapper);
      settings.resizeObserver = new ResizeObserver(function(e) {
        if (first) {
          first = false;
        } else {
          resize();
        }
      });
      settings.resizeObserver.observe(resizer[0]);
    } else {
      $(window).on("resize.DT-" + settings.sInstance, resize);
    }
    settings._reszEvt = true;
  }
}
function _fnWrapperWidth(settings) {
  return $(settings.nTableWrapper).is(":visible") ? $(settings.nTableWrapper).width() : 0;
}
function _fnGetWideStrings(settings, colIdx) {
  var column = settings.aoColumns[colIdx];
  if (!column.wideStrings) {
    var allStrings = [];
    var collection = [];
    for (var i = 0, iLen = settings.aiDisplayMaster.length;i < iLen; i++) {
      var rowIdx = settings.aiDisplayMaster[i];
      var data = _fnGetRowDisplay(settings, rowIdx)[colIdx];
      var cellString = data && typeof data === "object" && data.nodeType ? data.innerHTML : data + "";
      cellString = cellString.replace(/id=".*?"/g, "").replace(/name=".*?"/g, "");
      cellString = cellString.replace(/<script.*?<\/script>/gi, " ");
      var noHtml = _stripHtml(cellString, " ").replace(/&nbsp;/g, " ");
      collection.push({
        str: cellString,
        len: noHtml.length
      });
      allStrings.push(noHtml);
    }
    collection.sort(function(a, b) {
      return b.len - a.len;
    }).splice(3);
    column.wideStrings = collection.map(function(item) {
      return item.str;
    });
    let parts = allStrings.join(" ").split(" ");
    parts.sort(function(a, b) {
      return b.length - a.length;
    });
    if (parts.length) {
      column.wideStrings.push(parts[0]);
    }
    if (parts.length > 1) {
      column.wideStrings.push(parts[1]);
    }
    if (parts.length > 2) {
      column.wideStrings.push(parts[3]);
    }
  }
  return column.wideStrings;
}
function _fnStringToCss(s) {
  if (s === null) {
    return "0px";
  }
  if (typeof s == "number") {
    return s < 0 ? "0px" : s + "px";
  }
  return s.match(/\d$/) ? s + "px" : s;
}
function _colGroup(settings) {
  var cols = settings.aoColumns;
  settings.colgroup.empty();
  for (i = 0;i < cols.length; i++) {
    if (cols[i].bVisible) {
      settings.colgroup.append(cols[i].colEl);
    }
  }
}
function _fnSortInit(settings) {
  var target = settings.nTHead;
  var headerRows = target.querySelectorAll("tr");
  var titleRow = settings.titleRow;
  var notSelector = ':not([data-dt-order="disable"]):not([data-dt-order="icon-only"])';
  if (titleRow === true) {
    target = headerRows[0];
  } else if (titleRow === false) {
    target = headerRows[headerRows.length - 1];
  } else if (titleRow !== null) {
    target = headerRows[titleRow];
  }
  if (settings.orderHandler) {
    _fnSortAttachListener(settings, target, target === settings.nTHead ? "tr" + notSelector + " th" + notSelector + ", tr" + notSelector + " td" + notSelector : "th" + notSelector + ", td" + notSelector);
  }
  var order = [];
  _fnSortResolve(settings, order, settings.aaSorting);
  settings.aaSorting = order;
}
function _fnSortAttachListener(settings, node, selector, column, callback) {
  _fnBindAction(node, selector, function(e) {
    var run = false;
    var columns = column === undefined ? _fnColumnsFromHeader(e.target) : typeof column === "function" ? column() : Array.isArray(column) ? column : [column];
    if (columns.length) {
      for (var i = 0, iLen = columns.length;i < iLen; i++) {
        var ret = _fnSortAdd(settings, columns[i], i, e.shiftKey);
        if (ret !== false) {
          run = true;
        }
        if (settings.aaSorting.length === 1 && settings.aaSorting[0][1] === "") {
          break;
        }
      }
      if (run) {
        _fnProcessingRun(settings, true, function() {
          _fnSort(settings);
          _fnSortDisplay(settings, settings.aiDisplay);
          _fnReDraw(settings, false, false);
          if (callback) {
            callback();
          }
        });
      }
    }
  });
}
function _fnSortDisplay(settings, display) {
  if (display.length < 2) {
    return;
  }
  var master = settings.aiDisplayMaster;
  var masterMap = {};
  var map = {};
  var i;
  for (i = 0;i < master.length; i++) {
    masterMap[master[i]] = i;
  }
  for (i = 0;i < display.length; i++) {
    map[display[i]] = masterMap[display[i]];
  }
  display.sort(function(a, b) {
    return map[a] - map[b];
  });
}
function _fnSortResolve(settings, nestedSort, sort) {
  var push = function(a) {
    if ($.isPlainObject(a)) {
      if (a.idx !== undefined) {
        nestedSort.push([a.idx, a.dir]);
      } else if (a.name) {
        var cols = _pluck(settings.aoColumns, "sName");
        var idx = cols.indexOf(a.name);
        if (idx !== -1) {
          nestedSort.push([idx, a.dir]);
        }
      }
    } else {
      nestedSort.push(a);
    }
  };
  if ($.isPlainObject(sort)) {
    push(sort);
  } else if (sort.length && typeof sort[0] === "number") {
    push(sort);
  } else if (sort.length) {
    for (var z = 0;z < sort.length; z++) {
      push(sort[z]);
    }
  }
}
function _fnSortFlatten(settings) {
  var i, k, kLen, aSort = [], extSort = DataTable.ext.type.order, aoColumns = settings.aoColumns, aDataSort, iCol, sType, srcCol, fixed = settings.aaSortingFixed, fixedObj = $.isPlainObject(fixed), nestedSort = [];
  if (!settings.oFeatures.bSort) {
    return aSort;
  }
  if (Array.isArray(fixed)) {
    _fnSortResolve(settings, nestedSort, fixed);
  }
  if (fixedObj && fixed.pre) {
    _fnSortResolve(settings, nestedSort, fixed.pre);
  }
  _fnSortResolve(settings, nestedSort, settings.aaSorting);
  if (fixedObj && fixed.post) {
    _fnSortResolve(settings, nestedSort, fixed.post);
  }
  for (i = 0;i < nestedSort.length; i++) {
    srcCol = nestedSort[i][0];
    if (aoColumns[srcCol]) {
      aDataSort = aoColumns[srcCol].aDataSort;
      for (k = 0, kLen = aDataSort.length;k < kLen; k++) {
        iCol = aDataSort[k];
        sType = aoColumns[iCol].sType || "string";
        if (nestedSort[i]._idx === undefined) {
          nestedSort[i]._idx = aoColumns[iCol].asSorting.indexOf(nestedSort[i][1]);
        }
        if (nestedSort[i][1]) {
          aSort.push({
            src: srcCol,
            col: iCol,
            dir: nestedSort[i][1],
            index: nestedSort[i]._idx,
            type: sType,
            formatter: extSort[sType + "-pre"],
            sorter: extSort[sType + "-" + nestedSort[i][1]]
          });
        }
      }
    }
  }
  return aSort;
}
function _fnSort(oSettings, col, dir) {
  var i, iLen, aiOrig = [], extSort = DataTable.ext.type.order, aoData = oSettings.aoData, sortCol, displayMaster = oSettings.aiDisplayMaster, aSort;
  _fnColumnTypes(oSettings);
  if (col !== undefined) {
    var srcCol = oSettings.aoColumns[col];
    aSort = [{
      src: col,
      col,
      dir,
      index: 0,
      type: srcCol.sType,
      formatter: extSort[srcCol.sType + "-pre"],
      sorter: extSort[srcCol.sType + "-" + dir]
    }];
    displayMaster = displayMaster.slice();
  } else {
    aSort = _fnSortFlatten(oSettings);
  }
  for (i = 0, iLen = aSort.length;i < iLen; i++) {
    sortCol = aSort[i];
    _fnSortData(oSettings, sortCol.col);
  }
  if (_fnDataSource(oSettings) != "ssp" && aSort.length !== 0) {
    for (i = 0, iLen = displayMaster.length;i < iLen; i++) {
      aiOrig[i] = i;
    }
    if (aSort.length && aSort[0].dir === "desc" && oSettings.orderDescReverse) {
      aiOrig.reverse();
    }
    displayMaster.sort(function(a, b) {
      var x, y, k, test, sort, len = aSort.length, dataA = aoData[a]._aSortData, dataB = aoData[b]._aSortData;
      for (k = 0;k < len; k++) {
        sort = aSort[k];
        x = dataA[sort.col];
        y = dataB[sort.col];
        if (sort.sorter) {
          test = sort.sorter(x, y);
          if (test !== 0) {
            return test;
          }
        } else {
          test = x < y ? -1 : x > y ? 1 : 0;
          if (test !== 0) {
            return sort.dir === "asc" ? test : -test;
          }
        }
      }
      x = aiOrig[a];
      y = aiOrig[b];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  } else if (aSort.length === 0) {
    displayMaster.sort(function(x, y) {
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }
  if (col === undefined) {
    oSettings.bSorted = true;
    oSettings.sortDetails = aSort;
    _fnCallbackFire(oSettings, null, "order", [oSettings, aSort]);
  }
  return displayMaster;
}
function _fnSortAdd(settings, colIdx, addIndex, shift) {
  var col = settings.aoColumns[colIdx];
  var sorting = settings.aaSorting;
  var asSorting = col.asSorting;
  var nextSortIdx;
  var next = function(a, overflow) {
    var idx = a._idx;
    if (idx === undefined) {
      idx = asSorting.indexOf(a[1]);
    }
    return idx + 1 < asSorting.length ? idx + 1 : overflow ? null : 0;
  };
  if (!col.bSortable) {
    return false;
  }
  if (typeof sorting[0] === "number") {
    sorting = settings.aaSorting = [sorting];
  }
  if ((shift || addIndex) && settings.oFeatures.bSortMulti) {
    var sortIdx = _pluck(sorting, "0").indexOf(colIdx);
    if (sortIdx !== -1) {
      nextSortIdx = next(sorting[sortIdx], true);
      if (nextSortIdx === null && sorting.length === 1) {
        nextSortIdx = 0;
      }
      if (nextSortIdx === null || asSorting[nextSortIdx] === "") {
        sorting.splice(sortIdx, 1);
      } else {
        sorting[sortIdx][1] = asSorting[nextSortIdx];
        sorting[sortIdx]._idx = nextSortIdx;
      }
    } else if (shift) {
      sorting.push([colIdx, asSorting[0], 0]);
      sorting[sorting.length - 1]._idx = 0;
    } else {
      sorting.push([colIdx, sorting[0][1], 0]);
      sorting[sorting.length - 1]._idx = 0;
    }
  } else if (sorting.length && sorting[0][0] == colIdx) {
    nextSortIdx = next(sorting[0]);
    sorting.length = 1;
    sorting[0][1] = asSorting[nextSortIdx];
    sorting[0]._idx = nextSortIdx;
  } else {
    sorting.length = 0;
    sorting.push([colIdx, asSorting[0]]);
    sorting[0]._idx = 0;
  }
}
function _fnSortingClasses(settings) {
  var oldSort = settings.aLastSort;
  var sortClass = settings.oClasses.order.position;
  var sort = _fnSortFlatten(settings);
  var features = settings.oFeatures;
  var i, iLen, colIdx;
  if (features.bSort && features.bSortClasses) {
    for (i = 0, iLen = oldSort.length;i < iLen; i++) {
      colIdx = oldSort[i].src;
      $(_pluck(settings.aoData, "anCells", colIdx)).removeClass(sortClass + (i < 2 ? i + 1 : 3));
    }
    for (i = 0, iLen = sort.length;i < iLen; i++) {
      colIdx = sort[i].src;
      $(_pluck(settings.aoData, "anCells", colIdx)).addClass(sortClass + (i < 2 ? i + 1 : 3));
    }
  }
  settings.aLastSort = sort;
}
function _fnSortData(settings, colIdx) {
  var column = settings.aoColumns[colIdx];
  var customSort = DataTable.ext.order[column.sSortDataType];
  var customData;
  if (customSort) {
    customData = customSort.call(settings.oInstance, settings, colIdx, _fnColumnIndexToVisible(settings, colIdx));
  }
  var row, cellData;
  var formatter = DataTable.ext.type.order[column.sType + "-pre"];
  var data = settings.aoData;
  for (var rowIdx = 0;rowIdx < data.length; rowIdx++) {
    if (!data[rowIdx]) {
      continue;
    }
    row = data[rowIdx];
    if (!row._aSortData) {
      row._aSortData = [];
    }
    if (!row._aSortData[colIdx] || customSort) {
      cellData = customSort ? customData[rowIdx] : _fnGetCellData(settings, rowIdx, colIdx, "sort");
      row._aSortData[colIdx] = formatter ? formatter(cellData, settings) : cellData;
    }
  }
}
function _fnSaveState(settings) {
  if (settings._bLoadingState) {
    return;
  }
  var sorting = [];
  _fnSortResolve(settings, sorting, settings.aaSorting);
  var columns = settings.aoColumns;
  var state = {
    time: +new Date,
    start: settings._iDisplayStart,
    length: settings._iDisplayLength,
    order: sorting.map(function(sort) {
      return columns[sort[0]] && columns[sort[0]].sName ? [columns[sort[0]].sName, sort[1]] : sort.slice();
    }),
    search: $.extend({}, settings.oPreviousSearch),
    columns: settings.aoColumns.map(function(col, i) {
      return {
        name: col.sName,
        visible: col.bVisible,
        search: $.extend({}, settings.aoPreSearchCols[i])
      };
    })
  };
  settings.oSavedState = state;
  _fnCallbackFire(settings, "aoStateSaveParams", "stateSaveParams", [settings, state]);
  if (settings.oFeatures.bStateSave && !settings.bDestroying) {
    settings.fnStateSaveCallback.call(settings.oInstance, settings, state);
  }
}
function _fnLoadState(settings, init, callback) {
  if (!settings.oFeatures.bStateSave) {
    callback();
    return;
  }
  var loaded = function(state2) {
    _fnImplementState(settings, state2, callback);
  };
  var state = settings.fnStateLoadCallback.call(settings.oInstance, settings, loaded);
  if (state !== undefined) {
    _fnImplementState(settings, state, callback);
  }
  return true;
}
function _fnImplementState(settings, s, callback) {
  var i, iLen;
  var columns = settings.aoColumns;
  var currentNames = _pluck(settings.aoColumns, "sName");
  settings._bLoadingState = true;
  var api = settings._bInitComplete ? new DataTable.Api(settings) : null;
  if (!s || !s.time) {
    settings._bLoadingState = false;
    callback();
    return;
  }
  var duration = settings.iStateDuration;
  if (duration > 0 && s.time < +new Date - duration * 1000) {
    settings._bLoadingState = false;
    callback();
    return;
  }
  var abStateLoad = _fnCallbackFire(settings, "aoStateLoadParams", "stateLoadParams", [settings, s]);
  if (abStateLoad.indexOf(false) !== -1) {
    settings._bLoadingState = false;
    callback();
    return;
  }
  settings.oLoadedState = $.extend(true, {}, s);
  _fnCallbackFire(settings, null, "stateLoadInit", [settings, s], true);
  if (s.length !== undefined) {
    if (api) {
      api.page.len(s.length);
    } else {
      settings._iDisplayLength = s.length;
    }
  }
  if (s.start !== undefined) {
    if (api === null) {
      settings._iDisplayStart = s.start;
      settings.iInitDisplayStart = s.start;
    } else {
      _fnPageChange(settings, s.start / settings._iDisplayLength);
    }
  }
  if (s.order !== undefined) {
    settings.aaSorting = [];
    $.each(s.order, function(i2, col2) {
      var set2 = [col2[0], col2[1]];
      if (typeof col2[0] === "string") {
        var idx2 = currentNames.indexOf(col2[0]);
        if (idx2 < 0) {
          return;
        }
        set2[0] = idx2;
      } else if (set2[0] >= columns.length) {
        return;
      }
      settings.aaSorting.push(set2);
    });
  }
  if (s.search !== undefined) {
    $.extend(settings.oPreviousSearch, s.search);
  }
  if (s.columns) {
    var set = s.columns;
    var incoming = _pluck(s.columns, "name");
    if (incoming.join("").length && incoming.join("") !== currentNames.join("")) {
      set = [];
      for (i = 0;i < currentNames.length; i++) {
        if (currentNames[i] != "") {
          var idx = incoming.indexOf(currentNames[i]);
          if (idx >= 0) {
            set.push(s.columns[idx]);
          } else {
            set.push({});
          }
        } else {
          set.push({});
        }
      }
    }
    if (set.length === columns.length) {
      for (i = 0, iLen = set.length;i < iLen; i++) {
        var col = set[i];
        if (col.visible !== undefined) {
          if (api) {
            api.column(i).visible(col.visible, false);
          } else {
            columns[i].bVisible = col.visible;
          }
        }
        if (col.search !== undefined) {
          $.extend(settings.aoPreSearchCols[i], col.search);
        }
      }
      if (api) {
        api.one("draw", function() {
          api.columns.adjust();
        });
      }
    }
  }
  settings._bLoadingState = false;
  _fnCallbackFire(settings, "aoStateLoaded", "stateLoaded", [settings, s]);
  callback();
}
function _fnLog(settings, level, msg, tn) {
  msg = "DataTables warning: " + (settings ? "table id=" + settings.sTableId + " - " : "") + msg;
  if (tn) {
    msg += ". For more information about this error, please see " + "https://datatables.net/tn/" + tn;
  }
  if (!level) {
    var ext = DataTable.ext;
    var type = ext.sErrMode || ext.errMode;
    if (settings) {
      _fnCallbackFire(settings, null, "dt-error", [settings, tn, msg], true);
    }
    if (type == "alert") {
      alert(msg);
    } else if (type == "throw") {
      throw new Error(msg);
    } else if (typeof type == "function") {
      type(settings, tn, msg);
    }
  } else if (window.console && console.log) {
    console.log(msg);
  }
}
function _fnMap(ret, src, name, mappedName) {
  if (Array.isArray(name)) {
    $.each(name, function(i, val) {
      if (Array.isArray(val)) {
        _fnMap(ret, src, val[0], val[1]);
      } else {
        _fnMap(ret, src, val);
      }
    });
    return;
  }
  if (mappedName === undefined) {
    mappedName = name;
  }
  if (src[name] !== undefined) {
    ret[mappedName] = src[name];
  }
}
function _fnExtend(out, extender, breakRefs) {
  var val;
  for (var prop in extender) {
    if (Object.prototype.hasOwnProperty.call(extender, prop)) {
      val = extender[prop];
      if ($.isPlainObject(val)) {
        if (!$.isPlainObject(out[prop])) {
          out[prop] = {};
        }
        $.extend(true, out[prop], val);
      } else if (breakRefs && prop !== "data" && prop !== "aaData" && Array.isArray(val)) {
        out[prop] = val.slice();
      } else {
        out[prop] = val;
      }
    }
  }
  return out;
}
function _fnBindAction(n, selector, fn) {
  $(n).on("click.DT", selector, function(e) {
    fn(e);
  }).on("keypress.DT", selector, function(e) {
    if (e.which === 13) {
      e.preventDefault();
      fn(e);
    }
  }).on("selectstart.DT", selector, function() {
    return false;
  });
}
function _fnCallbackReg(settings, store, fn) {
  if (fn) {
    settings[store].push(fn);
  }
}
function _fnCallbackFire(settings, callbackArr, eventName, args, bubbles) {
  var ret = [];
  if (callbackArr) {
    ret = settings[callbackArr].slice().reverse().map(function(val) {
      return val.apply(settings.oInstance, args);
    });
  }
  if (eventName !== null) {
    var e = $.Event(eventName + ".dt");
    var table = $(settings.nTable);
    e.dt = settings.api;
    table[bubbles ? "trigger" : "triggerHandler"](e, args);
    if (bubbles && table.parents("body").length === 0) {
      $("body").trigger(e, args);
    }
    ret.push(e.result);
  }
  return ret;
}
function _fnLengthOverflow(settings) {
  var start = settings._iDisplayStart, end = settings.fnDisplayEnd(), len = settings._iDisplayLength;
  if (start >= end) {
    start = end - len;
  }
  start -= start % len;
  if (len === -1 || start < 0) {
    start = 0;
  }
  settings._iDisplayStart = start;
}
function _fnRenderer(settings, type) {
  var renderer = settings.renderer;
  var host = DataTable.ext.renderer[type];
  if ($.isPlainObject(renderer) && renderer[type]) {
    return host[renderer[type]] || host._;
  } else if (typeof renderer === "string") {
    return host[renderer] || host._;
  }
  return host._;
}
function _fnDataSource(settings) {
  if (settings.oFeatures.bServerSide) {
    return "ssp";
  } else if (settings.ajax) {
    return "ajax";
  }
  return "dom";
}
function _fnMacros(settings, str, entries) {
  var formatter = settings.fnFormatNumber, start = settings._iDisplayStart + 1, len = settings._iDisplayLength, vis = settings.fnRecordsDisplay(), max = settings.fnRecordsTotal(), all = len === -1;
  return str.replace(/_START_/g, formatter.call(settings, start)).replace(/_END_/g, formatter.call(settings, settings.fnDisplayEnd())).replace(/_MAX_/g, formatter.call(settings, max)).replace(/_TOTAL_/g, formatter.call(settings, vis)).replace(/_PAGE_/g, formatter.call(settings, all ? 1 : Math.ceil(start / len))).replace(/_PAGES_/g, formatter.call(settings, all ? 1 : Math.ceil(vis / len))).replace(/_ENTRIES_/g, settings.api.i18n("entries", "", entries)).replace(/_ENTRIES-MAX_/g, settings.api.i18n("entries", "", max)).replace(/_ENTRIES-TOTAL_/g, settings.api.i18n("entries", "", vis));
}
function _fnArrayApply(arr, data) {
  if (!data) {
    return;
  }
  if (data.length < 1e4) {
    arr.push.apply(arr, data);
  } else {
    for (i = 0;i < data.length; i++) {
      arr.push(data[i]);
    }
  }
}
function _fnListener(that, name, src) {
  if (!Array.isArray(src)) {
    src = [src];
  }
  for (i = 0;i < src.length; i++) {
    that.on(name + ".dt", src[i]);
  }
}
function _fnEscapeObject(obj) {
  if (DataTable.ext.escape.attributes) {
    $.each(obj, function(key, val) {
      obj[key] = _escapeHtml(val);
    });
  }
  return obj;
}
var __apiStruct = [];
var __arrayProto = Array.prototype;
var _toSettings = function(mixed) {
  var idx, jq;
  var settings = DataTable.settings;
  var tables = _pluck(settings, "nTable");
  if (!mixed) {
    return [];
  } else if (mixed.nTable && mixed.oFeatures) {
    return [mixed];
  } else if (mixed.nodeName && mixed.nodeName.toLowerCase() === "table") {
    idx = tables.indexOf(mixed);
    return idx !== -1 ? [settings[idx]] : null;
  } else if (mixed && typeof mixed.settings === "function") {
    return mixed.settings().toArray();
  } else if (typeof mixed === "string") {
    jq = $(mixed).get();
  } else if (mixed instanceof $) {
    jq = mixed.get();
  }
  if (jq) {
    return settings.filter(function(v, idx2) {
      return jq.includes(tables[idx2]);
    });
  }
};
_Api = function(context, data) {
  if (!(this instanceof _Api)) {
    return new _Api(context, data);
  }
  var i;
  var settings = [];
  var ctxSettings = function(o) {
    var a = _toSettings(o);
    if (a) {
      settings.push.apply(settings, a);
    }
  };
  if (Array.isArray(context)) {
    for (i = 0;i < context.length; i++) {
      ctxSettings(context[i]);
    }
  } else {
    ctxSettings(context);
  }
  this.context = settings.length > 1 ? _unique(settings) : settings;
  _fnArrayApply(this, data);
  this.selector = {
    rows: null,
    cols: null,
    opts: null
  };
  _Api.extend(this, this, __apiStruct);
};
DataTable.Api = _Api;
$.extend(_Api.prototype, {
  any: function() {
    return this.count() !== 0;
  },
  context: [],
  count: function() {
    return this.flatten().length;
  },
  each: function(fn) {
    for (var i = 0, iLen = this.length;i < iLen; i++) {
      fn.call(this, this[i], i, this);
    }
    return this;
  },
  eq: function(idx) {
    var ctx = this.context;
    return ctx.length > idx ? new _Api(ctx[idx], this[idx]) : null;
  },
  filter: function(fn) {
    var a = __arrayProto.filter.call(this, fn, this);
    return new _Api(this.context, a);
  },
  flatten: function() {
    var a = [];
    return new _Api(this.context, a.concat.apply(a, this.toArray()));
  },
  get: function(idx) {
    return this[idx];
  },
  join: __arrayProto.join,
  includes: function(find) {
    return this.indexOf(find) === -1 ? false : true;
  },
  indexOf: __arrayProto.indexOf,
  iterator: function(flatten, type, fn, alwaysNew) {
    var a = [], ret, i, iLen, j, jen, context = this.context, rows, items, item, selector = this.selector;
    if (typeof flatten === "string") {
      alwaysNew = fn;
      fn = type;
      type = flatten;
      flatten = false;
    }
    for (i = 0, iLen = context.length;i < iLen; i++) {
      var apiInst = new _Api(context[i]);
      if (type === "table") {
        ret = fn.call(apiInst, context[i], i);
        if (ret !== undefined) {
          a.push(ret);
        }
      } else if (type === "columns" || type === "rows") {
        ret = fn.call(apiInst, context[i], this[i], i);
        if (ret !== undefined) {
          a.push(ret);
        }
      } else if (type === "every" || type === "column" || type === "column-rows" || type === "row" || type === "cell") {
        items = this[i];
        if (type === "column-rows") {
          rows = _selector_row_indexes(context[i], selector.opts);
        }
        for (j = 0, jen = items.length;j < jen; j++) {
          item = items[j];
          if (type === "cell") {
            ret = fn.call(apiInst, context[i], item.row, item.column, i, j);
          } else {
            ret = fn.call(apiInst, context[i], item, i, j, rows);
          }
          if (ret !== undefined) {
            a.push(ret);
          }
        }
      }
    }
    if (a.length || alwaysNew) {
      var api = new _Api(context, flatten ? a.concat.apply([], a) : a);
      var apiSelector = api.selector;
      apiSelector.rows = selector.rows;
      apiSelector.cols = selector.cols;
      apiSelector.opts = selector.opts;
      return api;
    }
    return this;
  },
  lastIndexOf: __arrayProto.lastIndexOf,
  length: 0,
  map: function(fn) {
    var a = __arrayProto.map.call(this, fn, this);
    return new _Api(this.context, a);
  },
  pluck: function(prop) {
    var fn = DataTable.util.get(prop);
    return this.map(function(el) {
      return fn(el);
    });
  },
  pop: __arrayProto.pop,
  push: __arrayProto.push,
  reduce: __arrayProto.reduce,
  reduceRight: __arrayProto.reduceRight,
  reverse: __arrayProto.reverse,
  selector: null,
  shift: __arrayProto.shift,
  slice: function() {
    return new _Api(this.context, this);
  },
  sort: __arrayProto.sort,
  splice: __arrayProto.splice,
  toArray: function() {
    return __arrayProto.slice.call(this);
  },
  to$: function() {
    return $(this);
  },
  toJQuery: function() {
    return $(this);
  },
  unique: function() {
    return new _Api(this.context, _unique(this.toArray()));
  },
  unshift: __arrayProto.unshift
});
function _api_scope(scope, fn, struct) {
  return function() {
    var ret = fn.apply(scope || this, arguments);
    _Api.extend(ret, ret, struct.methodExt);
    return ret;
  };
}
function _api_find(src, name) {
  for (var i = 0, iLen = src.length;i < iLen; i++) {
    if (src[i].name === name) {
      return src[i];
    }
  }
  return null;
}
window.__apiStruct = __apiStruct;
_Api.extend = function(scope, obj, ext) {
  if (!ext.length || !obj || !(obj instanceof _Api) && !obj.__dt_wrapper) {
    return;
  }
  var i, iLen, struct;
  for (i = 0, iLen = ext.length;i < iLen; i++) {
    struct = ext[i];
    if (struct.name === "__proto__") {
      continue;
    }
    obj[struct.name] = struct.type === "function" ? _api_scope(scope, struct.val, struct) : struct.type === "object" ? {} : struct.val;
    obj[struct.name].__dt_wrapper = true;
    _Api.extend(scope, obj[struct.name], struct.propExt);
  }
};
_Api.register = _api_register = function(name, val) {
  if (Array.isArray(name)) {
    for (var j = 0, jen = name.length;j < jen; j++) {
      _Api.register(name[j], val);
    }
    return;
  }
  var i, iLen, heir = name.split("."), struct = __apiStruct, key, method;
  for (i = 0, iLen = heir.length;i < iLen; i++) {
    method = heir[i].indexOf("()") !== -1;
    key = method ? heir[i].replace("()", "") : heir[i];
    var src = _api_find(struct, key);
    if (!src) {
      src = {
        name: key,
        val: {},
        methodExt: [],
        propExt: [],
        type: "object"
      };
      struct.push(src);
    }
    if (i === iLen - 1) {
      src.val = val;
      src.type = typeof val === "function" ? "function" : $.isPlainObject(val) ? "object" : "other";
    } else {
      struct = method ? src.methodExt : src.propExt;
    }
  }
};
_Api.registerPlural = _api_registerPlural = function(pluralName, singularName, val) {
  _Api.register(pluralName, val);
  _Api.register(singularName, function() {
    var ret = val.apply(this, arguments);
    if (ret === this) {
      return this;
    } else if (ret instanceof _Api) {
      return ret.length ? Array.isArray(ret[0]) ? new _Api(ret.context, ret[0]) : ret[0] : undefined;
    }
    return ret;
  });
};
var __table_selector = function(selector, a) {
  if (Array.isArray(selector)) {
    var result = [];
    selector.forEach(function(sel) {
      var inner = __table_selector(sel, a);
      _fnArrayApply(result, inner);
    });
    return result.filter(function(item) {
      return item;
    });
  }
  if (typeof selector === "number") {
    return [a[selector]];
  }
  var nodes = a.map(function(el) {
    return el.nTable;
  });
  return $(nodes).filter(selector).map(function() {
    var idx = nodes.indexOf(this);
    return a[idx];
  }).toArray();
};
_api_register("tables()", function(selector) {
  return selector !== undefined && selector !== null ? new _Api(__table_selector(selector, this.context)) : this;
});
_api_register("table()", function(selector) {
  var tables = this.tables(selector);
  var ctx = tables.context;
  return ctx.length ? new _Api(ctx[0]) : tables;
});
[
  ["nodes", "node", "nTable"],
  ["body", "body", "nTBody"],
  ["header", "header", "nTHead"],
  ["footer", "footer", "nTFoot"]
].forEach(function(item) {
  _api_registerPlural("tables()." + item[0] + "()", "table()." + item[1] + "()", function() {
    return this.iterator("table", function(ctx) {
      return ctx[item[2]];
    }, 1);
  });
});
[
  ["header", "aoHeader"],
  ["footer", "aoFooter"]
].forEach(function(item) {
  _api_register("table()." + item[0] + ".structure()", function(selector) {
    var indexes = this.columns(selector).indexes().flatten().toArray();
    var ctx = this.context[0];
    var structure = _fnHeaderLayout(ctx, ctx[item[1]], indexes);
    var orderedIndexes = indexes.slice().sort(function(a, b) {
      return a - b;
    });
    return structure.map(function(row) {
      return indexes.map(function(colIdx) {
        return row[orderedIndexes.indexOf(colIdx)];
      });
    });
  });
});
_api_registerPlural("tables().containers()", "table().container()", function() {
  return this.iterator("table", function(ctx) {
    return ctx.nTableWrapper;
  }, 1);
});
_api_register("tables().every()", function(fn) {
  var that = this;
  return this.iterator("table", function(s, i) {
    fn.call(that.table(i), i);
  });
});
_api_register("caption()", function(value, side) {
  var context = this.context;
  if (value === undefined) {
    var caption = context[0].captionNode;
    return caption && context.length ? caption.innerHTML : null;
  }
  return this.iterator("table", function(ctx) {
    var table = $(ctx.nTable);
    var caption2 = $(ctx.captionNode);
    var container = $(ctx.nTableWrapper);
    if (!caption2.length) {
      caption2 = $("<caption/>").html(value);
      ctx.captionNode = caption2[0];
      if (!side) {
        table.prepend(caption2);
        side = caption2.css("caption-side");
      }
    }
    caption2.html(value);
    if (side) {
      caption2.css("caption-side", side);
      caption2[0]._captionSide = side;
    }
    if (container.find("div.dataTables_scroll").length) {
      var selector = side === "top" ? "Head" : "Foot";
      container.find("div.dataTables_scroll" + selector + " table").prepend(caption2);
    } else {
      table.prepend(caption2);
    }
  }, 1);
});
_api_register("caption.node()", function() {
  var ctx = this.context;
  return ctx.length ? ctx[0].captionNode : null;
});
_api_register("draw()", function(paging) {
  return this.iterator("table", function(settings) {
    if (paging === "page") {
      _fnDraw(settings);
    } else {
      if (typeof paging === "string") {
        paging = paging === "full-hold" ? false : true;
      }
      _fnReDraw(settings, paging === false);
    }
  });
});
_api_register("page()", function(action) {
  if (action === undefined) {
    return this.page.info().page;
  }
  return this.iterator("table", function(settings) {
    _fnPageChange(settings, action);
  });
});
_api_register("page.info()", function() {
  if (this.context.length === 0) {
    return;
  }
  var settings = this.context[0], start = settings._iDisplayStart, len = settings.oFeatures.bPaginate ? settings._iDisplayLength : -1, visRecords = settings.fnRecordsDisplay(), all = len === -1;
  return {
    page: all ? 0 : Math.floor(start / len),
    pages: all ? 1 : Math.ceil(visRecords / len),
    start,
    end: settings.fnDisplayEnd(),
    length: len,
    recordsTotal: settings.fnRecordsTotal(),
    recordsDisplay: visRecords,
    serverSide: _fnDataSource(settings) === "ssp"
  };
});
_api_register("page.len()", function(len) {
  if (len === undefined) {
    return this.context.length !== 0 ? this.context[0]._iDisplayLength : undefined;
  }
  return this.iterator("table", function(settings) {
    _fnLengthChange(settings, len);
  });
});
var __reload = function(settings, holdPosition, callback) {
  if (callback) {
    var api = new _Api(settings);
    api.one("draw", function() {
      callback(api.ajax.json());
    });
  }
  if (_fnDataSource(settings) == "ssp") {
    _fnReDraw(settings, holdPosition);
  } else {
    _fnProcessingDisplay(settings, true);
    var xhr = settings.jqXHR;
    if (xhr && xhr.readyState !== 4) {
      xhr.abort();
    }
    _fnBuildAjax(settings, {}, function(json) {
      _fnClearTable(settings);
      var data = _fnAjaxDataSrc(settings, json);
      for (var i = 0, iLen = data.length;i < iLen; i++) {
        _fnAddData(settings, data[i]);
      }
      _fnReDraw(settings, holdPosition);
      _fnInitComplete(settings);
      _fnProcessingDisplay(settings, false);
    });
  }
};
_api_register("ajax.json()", function() {
  var ctx = this.context;
  if (ctx.length > 0) {
    return ctx[0].json;
  }
});
_api_register("ajax.params()", function() {
  var ctx = this.context;
  if (ctx.length > 0) {
    return ctx[0].oAjaxData;
  }
});
_api_register("ajax.reload()", function(callback, resetPaging) {
  return this.iterator("table", function(settings) {
    __reload(settings, resetPaging === false, callback);
  });
});
_api_register("ajax.url()", function(url) {
  var ctx = this.context;
  if (url === undefined) {
    if (ctx.length === 0) {
      return;
    }
    ctx = ctx[0];
    return $.isPlainObject(ctx.ajax) ? ctx.ajax.url : ctx.ajax;
  }
  return this.iterator("table", function(settings) {
    if ($.isPlainObject(settings.ajax)) {
      settings.ajax.url = url;
    } else {
      settings.ajax = url;
    }
  });
});
_api_register("ajax.url().load()", function(callback, resetPaging) {
  return this.iterator("table", function(ctx) {
    __reload(ctx, resetPaging === false, callback);
  });
});
var _selector_run = function(type, selector, selectFn, settings, opts) {
  var out = [], res, i, iLen, selectorType = typeof selector;
  if (!selector || selectorType === "string" || selectorType === "function" || selector.length === undefined) {
    selector = [selector];
  }
  for (i = 0, iLen = selector.length;i < iLen; i++) {
    res = selectFn(typeof selector[i] === "string" ? selector[i].trim() : selector[i]);
    res = res.filter(function(item) {
      return item !== null && item !== undefined;
    });
    if (res && res.length) {
      out = out.concat(res);
    }
  }
  var ext = _ext.selector[type];
  if (ext.length) {
    for (i = 0, iLen = ext.length;i < iLen; i++) {
      out = ext[i](settings, opts, out);
    }
  }
  return _unique(out);
};
var _selector_opts = function(opts) {
  if (!opts) {
    opts = {};
  }
  if (opts.filter && opts.search === undefined) {
    opts.search = opts.filter;
  }
  return $.extend({
    columnOrder: "implied",
    search: "none",
    order: "current",
    page: "all"
  }, opts);
};
var _selector_first = function(old) {
  var inst = new _Api(old.context[0]);
  if (old.length) {
    inst.push(old[0]);
  }
  inst.selector = old.selector;
  if (inst.length && inst[0].length > 1) {
    inst[0].splice(1);
  }
  return inst;
};
var _selector_row_indexes = function(settings, opts) {
  var i, iLen, tmp, a = [], displayFiltered = settings.aiDisplay, displayMaster = settings.aiDisplayMaster;
  var { search, order, page } = opts;
  if (_fnDataSource(settings) == "ssp") {
    return search === "removed" ? [] : _range(0, displayMaster.length);
  }
  if (page == "current") {
    for (i = settings._iDisplayStart, iLen = settings.fnDisplayEnd();i < iLen; i++) {
      a.push(displayFiltered[i]);
    }
  } else if (order == "current" || order == "applied") {
    if (search == "none") {
      a = displayMaster.slice();
    } else if (search == "applied") {
      a = displayFiltered.slice();
    } else if (search == "removed") {
      var displayFilteredMap = {};
      for (i = 0, iLen = displayFiltered.length;i < iLen; i++) {
        displayFilteredMap[displayFiltered[i]] = null;
      }
      displayMaster.forEach(function(item) {
        if (!Object.prototype.hasOwnProperty.call(displayFilteredMap, item)) {
          a.push(item);
        }
      });
    }
  } else if (order == "index" || order == "original") {
    for (i = 0, iLen = settings.aoData.length;i < iLen; i++) {
      if (!settings.aoData[i]) {
        continue;
      }
      if (search == "none") {
        a.push(i);
      } else {
        tmp = displayFiltered.indexOf(i);
        if (tmp === -1 && search == "removed" || tmp >= 0 && search == "applied") {
          a.push(i);
        }
      }
    }
  } else if (typeof order === "number") {
    var ordered = _fnSort(settings, order, "asc");
    if (search === "none") {
      a = ordered;
    } else {
      for (i = 0;i < ordered.length; i++) {
        tmp = displayFiltered.indexOf(ordered[i]);
        if (tmp === -1 && search == "removed" || tmp >= 0 && search == "applied") {
          a.push(ordered[i]);
        }
      }
    }
  }
  return a;
};
var __row_selector = function(settings, selector, opts) {
  var rows;
  var run = function(sel) {
    var selInt = _intVal(sel);
    var aoData = settings.aoData;
    if (selInt !== null && !opts) {
      return [selInt];
    }
    if (!rows) {
      rows = _selector_row_indexes(settings, opts);
    }
    if (selInt !== null && rows.indexOf(selInt) !== -1) {
      return [selInt];
    } else if (sel === null || sel === undefined || sel === "") {
      return rows;
    }
    if (typeof sel === "function") {
      return rows.map(function(idx) {
        var row = aoData[idx];
        return sel(idx, row._aData, row.nTr) ? idx : null;
      });
    }
    if (sel.nodeName) {
      var rowIdx = sel._DT_RowIndex;
      var cellIdx = sel._DT_CellIndex;
      if (rowIdx !== undefined) {
        return aoData[rowIdx] && aoData[rowIdx].nTr === sel ? [rowIdx] : [];
      } else if (cellIdx) {
        return aoData[cellIdx.row] && aoData[cellIdx.row].nTr === sel.parentNode ? [cellIdx.row] : [];
      } else {
        var host = $(sel).closest("*[data-dt-row]");
        return host.length ? [host.data("dt-row")] : [];
      }
    }
    if (typeof sel === "string" && sel.charAt(0) === "#") {
      var rowObj = settings.aIds[sel.replace(/^#/, "")];
      if (rowObj !== undefined) {
        return [rowObj.idx];
      }
    }
    var nodes = _removeEmpty(_pluck_order(settings.aoData, rows, "nTr"));
    return $(nodes).filter(sel).map(function() {
      return this._DT_RowIndex;
    }).toArray();
  };
  var matched = _selector_run("row", selector, run, settings, opts);
  if (opts.order === "current" || opts.order === "applied") {
    _fnSortDisplay(settings, matched);
  }
  return matched;
};
_api_register("rows()", function(selector, opts) {
  if (selector === undefined) {
    selector = "";
  } else if ($.isPlainObject(selector)) {
    opts = selector;
    selector = "";
  }
  opts = _selector_opts(opts);
  var inst = this.iterator("table", function(settings) {
    return __row_selector(settings, selector, opts);
  }, 1);
  inst.selector.rows = selector;
  inst.selector.opts = opts;
  return inst;
});
_api_register("rows().nodes()", function() {
  return this.iterator("row", function(settings, row) {
    return settings.aoData[row].nTr || undefined;
  }, 1);
});
_api_register("rows().data()", function() {
  return this.iterator(true, "rows", function(settings, rows) {
    return _pluck_order(settings.aoData, rows, "_aData");
  }, 1);
});
_api_registerPlural("rows().cache()", "row().cache()", function(type) {
  return this.iterator("row", function(settings, row) {
    var r = settings.aoData[row];
    return type === "search" ? r._aFilterData : r._aSortData;
  }, 1);
});
_api_registerPlural("rows().invalidate()", "row().invalidate()", function(src) {
  return this.iterator("row", function(settings, row) {
    _fnInvalidate(settings, row, src);
  });
});
_api_registerPlural("rows().indexes()", "row().index()", function() {
  return this.iterator("row", function(settings, row) {
    return row;
  }, 1);
});
_api_registerPlural("rows().ids()", "row().id()", function(hash) {
  var a = [];
  var context = this.context;
  for (var i = 0, iLen = context.length;i < iLen; i++) {
    for (var j = 0, jen = this[i].length;j < jen; j++) {
      var id = context[i].rowIdFn(context[i].aoData[this[i][j]]._aData);
      a.push((hash === true ? "#" : "") + id);
    }
  }
  return new _Api(context, a);
});
_api_registerPlural("rows().remove()", "row().remove()", function() {
  this.iterator("row", function(settings, row) {
    var data = settings.aoData;
    var rowData = data[row];
    var idx = settings.aiDisplayMaster.indexOf(row);
    if (idx !== -1) {
      settings.aiDisplayMaster.splice(idx, 1);
    }
    if (settings._iRecordsDisplay > 0) {
      settings._iRecordsDisplay--;
    }
    _fnLengthOverflow(settings);
    var id = settings.rowIdFn(rowData._aData);
    if (id !== undefined) {
      delete settings.aIds[id];
    }
    data[row] = null;
  });
  return this;
});
_api_register("rows.add()", function(rows) {
  var newRows = this.iterator("table", function(settings) {
    var row, i, iLen;
    var out = [];
    for (i = 0, iLen = rows.length;i < iLen; i++) {
      row = rows[i];
      if (row.nodeName && row.nodeName.toUpperCase() === "TR") {
        out.push(_fnAddTr(settings, row)[0]);
      } else {
        out.push(_fnAddData(settings, row));
      }
    }
    return out;
  }, 1);
  var modRows = this.rows(-1);
  modRows.pop();
  _fnArrayApply(modRows, newRows);
  return modRows;
});
_api_register("row()", function(selector, opts) {
  return _selector_first(this.rows(selector, opts));
});
_api_register("row().data()", function(data) {
  var ctx = this.context;
  if (data === undefined) {
    return ctx.length && this.length && this[0].length ? ctx[0].aoData[this[0]]._aData : undefined;
  }
  var row = ctx[0].aoData[this[0]];
  row._aData = data;
  if (Array.isArray(data) && row.nTr && row.nTr.id) {
    _fnSetObjectDataFn(ctx[0].rowId)(data, row.nTr.id);
  }
  _fnInvalidate(ctx[0], this[0], "data");
  return this;
});
_api_register("row().node()", function() {
  var ctx = this.context;
  if (ctx.length && this.length && this[0].length) {
    var row = ctx[0].aoData[this[0]];
    if (row && row.nTr) {
      return row.nTr;
    }
  }
  return null;
});
_api_register("row.add()", function(row) {
  if (row instanceof $ && row.length) {
    row = row[0];
  }
  var rows = this.iterator("table", function(settings) {
    if (row.nodeName && row.nodeName.toUpperCase() === "TR") {
      return _fnAddTr(settings, row)[0];
    }
    return _fnAddData(settings, row);
  });
  return this.row(rows[0]);
});
$(document).on("plugin-init.dt", function(e, context) {
  var api = new _Api(context);
  api.on("stateSaveParams.DT", function(e2, settings, d) {
    var idFn = settings.rowIdFn;
    var rows = settings.aiDisplayMaster;
    var ids = [];
    for (var i = 0;i < rows.length; i++) {
      var rowIdx = rows[i];
      var data = settings.aoData[rowIdx];
      if (data._detailsShow) {
        ids.push("#" + idFn(data._aData));
      }
    }
    d.childRows = ids;
  });
  api.on("stateLoaded.DT", function(e2, settings, state) {
    __details_state_load(api, state);
  });
  __details_state_load(api, api.state.loaded());
});
var __details_state_load = function(api, state) {
  if (state && state.childRows) {
    api.rows(state.childRows.map(function(id) {
      return id.replace(/([^:\\]*(?:\\.[^:\\]*)*):/g, "$1\\:");
    })).every(function() {
      _fnCallbackFire(api.settings()[0], null, "requestChild", [this]);
    });
  }
};
var __details_add = function(ctx, row, data, klass) {
  var rows = [];
  var addRow = function(r, k) {
    if (Array.isArray(r) || r instanceof $) {
      for (var i = 0, iLen = r.length;i < iLen; i++) {
        addRow(r[i], k);
      }
      return;
    }
    if (r.nodeName && r.nodeName.toLowerCase() === "tr") {
      r.setAttribute("data-dt-row", row.idx);
      rows.push(r);
    } else {
      var created = $("<tr><td></td></tr>").attr("data-dt-row", row.idx).addClass(k);
      $("td", created).addClass(k).html(r)[0].colSpan = _fnVisibleColumns(ctx);
      rows.push(created[0]);
    }
  };
  addRow(data, klass);
  if (row._details) {
    row._details.detach();
  }
  row._details = $(rows);
  if (row._detailsShow) {
    row._details.insertAfter(row.nTr);
  }
};
var __details_state = DataTable.util.throttle(function(ctx) {
  _fnSaveState(ctx[0]);
}, 500);
var __details_remove = function(api, idx) {
  var ctx = api.context;
  if (ctx.length) {
    var row = ctx[0].aoData[idx !== undefined ? idx : api[0]];
    if (row && row._details) {
      row._details.detach();
      row._detailsShow = undefined;
      row._details = undefined;
      $(row.nTr).removeClass("dt-hasChild");
      __details_state(ctx);
    }
  }
};
var __details_display = function(api, show) {
  var ctx = api.context;
  if (ctx.length && api.length) {
    var row = ctx[0].aoData[api[0]];
    if (row._details) {
      row._detailsShow = show;
      if (show) {
        row._details.insertAfter(row.nTr);
        $(row.nTr).addClass("dt-hasChild");
      } else {
        row._details.detach();
        $(row.nTr).removeClass("dt-hasChild");
      }
      _fnCallbackFire(ctx[0], null, "childRow", [show, api.row(api[0])]);
      __details_events(ctx[0]);
      __details_state(ctx);
    }
  }
};
var __details_events = function(settings) {
  var api = new _Api(settings);
  var namespace = ".dt.DT_details";
  var drawEvent = "draw" + namespace;
  var colvisEvent = "column-sizing" + namespace;
  var destroyEvent = "destroy" + namespace;
  var data = settings.aoData;
  api.off(drawEvent + " " + colvisEvent + " " + destroyEvent);
  if (_pluck(data, "_details").length > 0) {
    api.on(drawEvent, function(e, ctx) {
      if (settings !== ctx) {
        return;
      }
      api.rows({ page: "current" }).eq(0).each(function(idx) {
        var row = data[idx];
        if (row._detailsShow) {
          row._details.insertAfter(row.nTr);
        }
      });
    });
    api.on(colvisEvent, function(e, ctx) {
      if (settings !== ctx) {
        return;
      }
      var row, visible = _fnVisibleColumns(ctx);
      for (var i = 0, iLen = data.length;i < iLen; i++) {
        row = data[i];
        if (row && row._details) {
          row._details.each(function() {
            var el = $(this).children("td");
            if (el.length == 1) {
              el.attr("colspan", visible);
            }
          });
        }
      }
    });
    api.on(destroyEvent, function(e, ctx) {
      if (settings !== ctx) {
        return;
      }
      for (var i = 0, iLen = data.length;i < iLen; i++) {
        if (data[i] && data[i]._details) {
          __details_remove(api, i);
        }
      }
    });
  }
};
var _emp = "";
var _child_obj = _emp + "row().child";
var _child_mth = _child_obj + "()";
_api_register(_child_mth, function(data, klass) {
  var ctx = this.context;
  if (data === undefined) {
    return ctx.length && this.length && ctx[0].aoData[this[0]] ? ctx[0].aoData[this[0]]._details : undefined;
  } else if (data === true) {
    this.child.show();
  } else if (data === false) {
    __details_remove(this);
  } else if (ctx.length && this.length) {
    __details_add(ctx[0], ctx[0].aoData[this[0]], data, klass);
  }
  return this;
});
_api_register([
  _child_obj + ".show()",
  _child_mth + ".show()"
], function() {
  __details_display(this, true);
  return this;
});
_api_register([
  _child_obj + ".hide()",
  _child_mth + ".hide()"
], function() {
  __details_display(this, false);
  return this;
});
_api_register([
  _child_obj + ".remove()",
  _child_mth + ".remove()"
], function() {
  __details_remove(this);
  return this;
});
_api_register(_child_obj + ".isShown()", function() {
  var ctx = this.context;
  if (ctx.length && this.length && ctx[0].aoData[this[0]]) {
    return ctx[0].aoData[this[0]]._detailsShow || false;
  }
  return false;
});
var __re_column_selector = /^([^:]+)?:(name|title|visIdx|visible)$/;
var __columnData = function(settings, column, r1, r2, rows, type) {
  var a = [];
  for (var row = 0, iLen = rows.length;row < iLen; row++) {
    a.push(_fnGetCellData(settings, rows[row], column, type));
  }
  return a;
};
var __column_header = function(settings, column, row) {
  var header = settings.aoHeader;
  var titleRow = settings.titleRow;
  var target = null;
  if (row !== undefined) {
    target = row;
  } else if (titleRow === true) {
    target = 0;
  } else if (titleRow === false) {
    target = header.length - 1;
  } else if (titleRow !== null) {
    target = titleRow;
  } else {
    for (var i = 0;i < header.length; i++) {
      if (header[i][column].unique && $(".dt-column-title", header[i][column].cell).text()) {
        target = i;
      }
    }
    if (target === null) {
      target = 0;
    }
  }
  return header[target][column].cell;
};
var __column_header_cells = function(header) {
  var out = [];
  for (var i = 0;i < header.length; i++) {
    for (var j = 0;j < header[i].length; j++) {
      var cell = header[i][j].cell;
      if (!out.includes(cell)) {
        out.push(cell);
      }
    }
  }
  return out;
};
var __column_selector = function(settings, selector, opts) {
  var columns = settings.aoColumns, names, titles, nodes = __column_header_cells(settings.aoHeader);
  var run = function(s) {
    var selInt = _intVal(s);
    if (s === "") {
      return _range(columns.length);
    }
    if (selInt !== null) {
      return [
        selInt >= 0 ? selInt : columns.length + selInt
      ];
    }
    if (typeof s === "function") {
      var rows = _selector_row_indexes(settings, opts);
      return columns.map(function(col, idx2) {
        return s(idx2, __columnData(settings, idx2, 0, 0, rows), __column_header(settings, idx2)) ? idx2 : null;
      });
    }
    var match = typeof s === "string" ? s.match(__re_column_selector) : "";
    if (match) {
      switch (match[2]) {
        case "visIdx":
        case "visible":
          if (match[1] && match[1].match(/^\d+$/)) {
            var idx = parseInt(match[1], 10);
            if (idx < 0) {
              var visColumns = columns.map(function(col, i) {
                return col.bVisible ? i : null;
              });
              return [visColumns[visColumns.length + idx]];
            }
            return [_fnVisibleToColumnIndex(settings, idx)];
          }
          return columns.map(function(col, idx2) {
            if (!col.bVisible) {
              return null;
            }
            if (col.responsiveVisible === false) {
              return null;
            }
            if (match[1]) {
              return $(nodes[idx2]).filter(match[1]).length > 0 ? idx2 : null;
            }
            return idx2;
          });
        case "name":
          if (!names) {
            names = _pluck(columns, "sName");
          }
          return names.map(function(name, i) {
            return name === match[1] ? i : null;
          });
        case "title":
          if (!titles) {
            titles = _pluck(columns, "sTitle");
          }
          return titles.map(function(title, i) {
            return title === match[1] ? i : null;
          });
        default:
          return [];
      }
    }
    if (s.nodeName && s._DT_CellIndex) {
      return [s._DT_CellIndex.column];
    }
    var jqResult = $(nodes).filter(s).map(function() {
      return _fnColumnsFromHeader(this);
    }).toArray().sort(function(a, b) {
      return a - b;
    });
    if (jqResult.length || !s.nodeName) {
      return jqResult;
    }
    var host = $(s).closest("*[data-dt-column]");
    return host.length ? [host.data("dt-column")] : [];
  };
  var selected = _selector_run("column", selector, run, settings, opts);
  return opts.columnOrder && opts.columnOrder === "index" ? selected.sort(function(a, b) {
    return a - b;
  }) : selected;
};
var __setColumnVis = function(settings, column, vis) {
  var cols = settings.aoColumns, col = cols[column], data = settings.aoData, cells, i, iLen, tr;
  if (vis === undefined) {
    return col.bVisible;
  }
  if (col.bVisible === vis) {
    return false;
  }
  if (vis) {
    var insertBefore = _pluck(cols, "bVisible").indexOf(true, column + 1);
    for (i = 0, iLen = data.length;i < iLen; i++) {
      if (data[i]) {
        tr = data[i].nTr;
        cells = data[i].anCells;
        if (tr) {
          tr.insertBefore(cells[column], cells[insertBefore] || null);
        }
      }
    }
  } else {
    $(_pluck(settings.aoData, "anCells", column)).detach();
  }
  col.bVisible = vis;
  _colGroup(settings);
  return true;
};
_api_register("columns()", function(selector, opts) {
  if (selector === undefined) {
    selector = "";
  } else if ($.isPlainObject(selector)) {
    opts = selector;
    selector = "";
  }
  opts = _selector_opts(opts);
  var inst = this.iterator("table", function(settings) {
    return __column_selector(settings, selector, opts);
  }, 1);
  inst.selector.cols = selector;
  inst.selector.opts = opts;
  return inst;
});
_api_registerPlural("columns().header()", "column().header()", function(row) {
  return this.iterator("column", function(settings, column) {
    return __column_header(settings, column, row);
  }, 1);
});
_api_registerPlural("columns().footer()", "column().footer()", function(row) {
  return this.iterator("column", function(settings, column) {
    var footer = settings.aoFooter;
    if (!footer.length) {
      return null;
    }
    return settings.aoFooter[row !== undefined ? row : 0][column].cell;
  }, 1);
});
_api_registerPlural("columns().data()", "column().data()", function() {
  return this.iterator("column-rows", __columnData, 1);
});
_api_registerPlural("columns().render()", "column().render()", function(type) {
  return this.iterator("column-rows", function(settings, column, i, j, rows) {
    return __columnData(settings, column, i, j, rows, type);
  }, 1);
});
_api_registerPlural("columns().dataSrc()", "column().dataSrc()", function() {
  return this.iterator("column", function(settings, column) {
    return settings.aoColumns[column].mData;
  }, 1);
});
_api_registerPlural("columns().cache()", "column().cache()", function(type) {
  return this.iterator("column-rows", function(settings, column, i, j, rows) {
    return _pluck_order(settings.aoData, rows, type === "search" ? "_aFilterData" : "_aSortData", column);
  }, 1);
});
_api_registerPlural("columns().init()", "column().init()", function() {
  return this.iterator("column", function(settings, column) {
    return settings.aoColumns[column];
  }, 1);
});
_api_registerPlural("columns().names()", "column().name()", function() {
  return this.iterator("column", function(settings, column) {
    return settings.aoColumns[column].sName;
  }, 1);
});
_api_registerPlural("columns().nodes()", "column().nodes()", function() {
  return this.iterator("column-rows", function(settings, column, i, j, rows) {
    return _pluck_order(settings.aoData, rows, "anCells", column);
  }, 1);
});
_api_registerPlural("columns().titles()", "column().title()", function(title, row) {
  return this.iterator("column", function(settings, column) {
    if (typeof title === "number") {
      row = title;
      title = undefined;
    }
    var span = $(".dt-column-title", this.column(column).header(row));
    if (title !== undefined) {
      span.html(title);
      return this;
    }
    return span.html();
  }, 1);
});
_api_registerPlural("columns().types()", "column().type()", function() {
  return this.iterator("column", function(settings, column) {
    var colObj = settings.aoColumns[column];
    var type = colObj.sType;
    if (!type) {
      _fnColumnTypes(settings);
      type = colObj.sType;
    }
    return type;
  }, 1);
});
_api_registerPlural("columns().visible()", "column().visible()", function(vis, calc) {
  var that = this;
  var changed = [];
  var ret = this.iterator("column", function(settings, column) {
    if (vis === undefined) {
      return settings.aoColumns[column].bVisible;
    }
    if (__setColumnVis(settings, column, vis)) {
      changed.push(column);
    }
  });
  if (vis !== undefined) {
    this.iterator("table", function(settings) {
      _fnDrawHead(settings, settings.aoHeader);
      _fnDrawHead(settings, settings.aoFooter);
      if (!settings.aiDisplay.length) {
        $(settings.nTBody).find("td[colspan]").attr("colspan", _fnVisibleColumns(settings));
      }
      _fnSaveState(settings);
      that.iterator("column", function(settings2, column) {
        if (changed.includes(column)) {
          _fnCallbackFire(settings2, null, "column-visibility", [settings2, column, vis, calc]);
        }
      });
      if (changed.length && (calc === undefined || calc)) {
        that.columns.adjust();
      }
    });
  }
  return ret;
});
_api_registerPlural("columns().widths()", "column().width()", function() {
  var columns = this.columns(":visible").count();
  var row = $("<tr>").html("<td>" + Array(columns).join("</td><td>") + "</td>");
  $(this.table().body()).append(row);
  var widths = row.children().map(function() {
    return $(this).outerWidth();
  });
  row.remove();
  return this.iterator("column", function(settings, column) {
    var visIdx = _fnColumnIndexToVisible(settings, column);
    return visIdx !== null ? widths[visIdx] : 0;
  }, 1);
});
_api_registerPlural("columns().indexes()", "column().index()", function(type) {
  return this.iterator("column", function(settings, column) {
    return type === "visible" ? _fnColumnIndexToVisible(settings, column) : column;
  }, 1);
});
_api_register("columns.adjust()", function() {
  return this.iterator("table", function(settings) {
    settings.containerWidth = -1;
    _fnAdjustColumnSizing(settings);
  }, 1);
});
_api_register("column.index()", function(type, idx) {
  if (this.context.length !== 0) {
    var ctx = this.context[0];
    if (type === "fromVisible" || type === "toData") {
      return _fnVisibleToColumnIndex(ctx, idx);
    } else if (type === "fromData" || type === "toVisible") {
      return _fnColumnIndexToVisible(ctx, idx);
    }
  }
});
_api_register("column()", function(selector, opts) {
  return _selector_first(this.columns(selector, opts));
});
var __cell_selector = function(settings, selector, opts) {
  var data = settings.aoData;
  var rows = _selector_row_indexes(settings, opts);
  var cells = _removeEmpty(_pluck_order(data, rows, "anCells"));
  var allCells = $(_flatten([], cells));
  var row;
  var columns = settings.aoColumns.length;
  var a, i, iLen, j, o, host;
  var run = function(s) {
    var fnSelector = typeof s === "function";
    if (s === null || s === undefined || fnSelector) {
      a = [];
      for (i = 0, iLen = rows.length;i < iLen; i++) {
        row = rows[i];
        for (j = 0;j < columns; j++) {
          o = {
            row,
            column: j
          };
          if (fnSelector) {
            host = data[row];
            if (s(o, _fnGetCellData(settings, row, j), host.anCells ? host.anCells[j] : null)) {
              a.push(o);
            }
          } else {
            a.push(o);
          }
        }
      }
      return a;
    }
    if ($.isPlainObject(s)) {
      return s.column !== undefined && s.row !== undefined && rows.indexOf(s.row) !== -1 ? [s] : [];
    }
    var jqResult = allCells.filter(s).map(function(i2, el) {
      return {
        row: el._DT_CellIndex.row,
        column: el._DT_CellIndex.column
      };
    }).toArray();
    if (jqResult.length || !s.nodeName) {
      return jqResult;
    }
    host = $(s).closest("*[data-dt-row]");
    return host.length ? [{
      row: host.data("dt-row"),
      column: host.data("dt-column")
    }] : [];
  };
  return _selector_run("cell", selector, run, settings, opts);
};
_api_register("cells()", function(rowSelector, columnSelector, opts) {
  if ($.isPlainObject(rowSelector)) {
    if (rowSelector.row === undefined) {
      opts = rowSelector;
      rowSelector = null;
    } else {
      opts = columnSelector;
      columnSelector = null;
    }
  }
  if ($.isPlainObject(columnSelector)) {
    opts = columnSelector;
    columnSelector = null;
  }
  if (columnSelector === null || columnSelector === undefined) {
    return this.iterator("table", function(settings) {
      return __cell_selector(settings, rowSelector, _selector_opts(opts));
    });
  }
  var internalOpts = opts ? {
    page: opts.page,
    order: opts.order,
    search: opts.search
  } : {};
  var columns = this.columns(columnSelector, internalOpts);
  var rows = this.rows(rowSelector, internalOpts);
  var i, iLen, j, jen;
  var cellsNoOpts = this.iterator("table", function(settings, idx) {
    var a = [];
    for (i = 0, iLen = rows[idx].length;i < iLen; i++) {
      for (j = 0, jen = columns[idx].length;j < jen; j++) {
        a.push({
          row: rows[idx][i],
          column: columns[idx][j]
        });
      }
    }
    return a;
  }, 1);
  var cells = opts && opts.selected ? this.cells(cellsNoOpts, opts) : cellsNoOpts;
  $.extend(cells.selector, {
    cols: columnSelector,
    rows: rowSelector,
    opts
  });
  return cells;
});
_api_registerPlural("cells().nodes()", "cell().node()", function() {
  return this.iterator("cell", function(settings, row, column) {
    var data = settings.aoData[row];
    return data && data.anCells ? data.anCells[column] : undefined;
  }, 1);
});
_api_register("cells().data()", function() {
  return this.iterator("cell", function(settings, row, column) {
    return _fnGetCellData(settings, row, column);
  }, 1);
});
_api_registerPlural("cells().cache()", "cell().cache()", function(type) {
  type = type === "search" ? "_aFilterData" : "_aSortData";
  return this.iterator("cell", function(settings, row, column) {
    return settings.aoData[row][type][column];
  }, 1);
});
_api_registerPlural("cells().render()", "cell().render()", function(type) {
  return this.iterator("cell", function(settings, row, column) {
    return _fnGetCellData(settings, row, column, type);
  }, 1);
});
_api_registerPlural("cells().indexes()", "cell().index()", function() {
  return this.iterator("cell", function(settings, row, column) {
    return {
      row,
      column,
      columnVisible: _fnColumnIndexToVisible(settings, column)
    };
  }, 1);
});
_api_registerPlural("cells().invalidate()", "cell().invalidate()", function(src) {
  return this.iterator("cell", function(settings, row, column) {
    _fnInvalidate(settings, row, src, column);
  });
});
_api_register("cell()", function(rowSelector, columnSelector, opts) {
  return _selector_first(this.cells(rowSelector, columnSelector, opts));
});
_api_register("cell().data()", function(data) {
  var ctx = this.context;
  var cell = this[0];
  if (data === undefined) {
    return ctx.length && cell.length ? _fnGetCellData(ctx[0], cell[0].row, cell[0].column) : undefined;
  }
  _fnSetCellData(ctx[0], cell[0].row, cell[0].column, data);
  _fnInvalidate(ctx[0], cell[0].row, "data", cell[0].column);
  return this;
});
_api_register("order()", function(order, dir) {
  var ctx = this.context;
  var args = Array.prototype.slice.call(arguments);
  if (order === undefined) {
    return ctx.length !== 0 ? ctx[0].aaSorting : undefined;
  }
  if (typeof order === "number") {
    order = [[order, dir]];
  } else if (args.length > 1) {
    order = args;
  }
  return this.iterator("table", function(settings) {
    var resolved = [];
    _fnSortResolve(settings, resolved, order);
    settings.aaSorting = resolved;
  });
});
_api_register("order.listener()", function(node, column, callback) {
  return this.iterator("table", function(settings) {
    _fnSortAttachListener(settings, node, {}, column, callback);
  });
});
_api_register("order.fixed()", function(set) {
  if (!set) {
    var ctx = this.context;
    var fixed = ctx.length ? ctx[0].aaSortingFixed : undefined;
    return Array.isArray(fixed) ? { pre: fixed } : fixed;
  }
  return this.iterator("table", function(settings) {
    settings.aaSortingFixed = $.extend(true, {}, set);
  });
});
_api_register([
  "columns().order()",
  "column().order()"
], function(dir) {
  var that = this;
  if (!dir) {
    return this.iterator("column", function(settings, idx) {
      var sort = _fnSortFlatten(settings);
      for (var i = 0, iLen = sort.length;i < iLen; i++) {
        if (sort[i].col === idx) {
          return sort[i].dir;
        }
      }
      return null;
    }, 1);
  } else {
    return this.iterator("table", function(settings, i) {
      settings.aaSorting = that[i].map(function(col) {
        return [col, dir];
      });
    });
  }
});
_api_registerPlural("columns().orderable()", "column().orderable()", function(directions) {
  return this.iterator("column", function(settings, idx) {
    var col = settings.aoColumns[idx];
    return directions ? col.asSorting : col.bSortable;
  }, 1);
});
_api_register("processing()", function(show) {
  return this.iterator("table", function(ctx) {
    _fnProcessingDisplay(ctx, show);
  });
});
_api_register("search()", function(input, regex, smart, caseInsen) {
  var ctx = this.context;
  if (input === undefined) {
    return ctx.length !== 0 ? ctx[0].oPreviousSearch.search : undefined;
  }
  return this.iterator("table", function(settings) {
    if (!settings.oFeatures.bFilter) {
      return;
    }
    if (typeof regex === "object") {
      _fnFilterComplete(settings, $.extend(settings.oPreviousSearch, regex, {
        search: input
      }));
    } else {
      _fnFilterComplete(settings, $.extend(settings.oPreviousSearch, {
        search: input,
        regex: regex === null ? false : regex,
        smart: smart === null ? true : smart,
        caseInsensitive: caseInsen === null ? true : caseInsen
      }));
    }
  });
});
_api_register("search.fixed()", function(name, search) {
  var ret = this.iterator(true, "table", function(settings) {
    var fixed = settings.searchFixed;
    if (!name) {
      return Object.keys(fixed);
    } else if (search === undefined) {
      return fixed[name];
    } else if (search === null) {
      delete fixed[name];
    } else {
      fixed[name] = search;
    }
    return this;
  });
  return name !== undefined && search === undefined ? ret[0] : ret;
});
_api_registerPlural("columns().search()", "column().search()", function(input, regex, smart, caseInsen) {
  return this.iterator("column", function(settings, column) {
    var preSearch = settings.aoPreSearchCols;
    if (input === undefined) {
      return preSearch[column].search;
    }
    if (!settings.oFeatures.bFilter) {
      return;
    }
    if (typeof regex === "object") {
      $.extend(preSearch[column], regex, {
        search: input
      });
    } else {
      $.extend(preSearch[column], {
        search: input,
        regex: regex === null ? false : regex,
        smart: smart === null ? true : smart,
        caseInsensitive: caseInsen === null ? true : caseInsen
      });
    }
    _fnFilterComplete(settings, settings.oPreviousSearch);
  });
});
_api_register([
  "columns().search.fixed()",
  "column().search.fixed()"
], function(name, search) {
  var ret = this.iterator(true, "column", function(settings, colIdx) {
    var fixed = settings.aoColumns[colIdx].searchFixed;
    if (!name) {
      return Object.keys(fixed);
    } else if (search === undefined) {
      return fixed[name] || null;
    } else if (search === null) {
      delete fixed[name];
    } else {
      fixed[name] = search;
    }
    return this;
  });
  return name !== undefined && search === undefined ? ret[0] : ret;
});
_api_register("state()", function(set, ignoreTime) {
  if (!set) {
    return this.context.length ? this.context[0].oSavedState : null;
  }
  var setMutate = $.extend(true, {}, set);
  return this.iterator("table", function(settings) {
    if (ignoreTime !== false) {
      setMutate.time = +new Date + 100;
    }
    _fnImplementState(settings, setMutate, function() {});
  });
});
_api_register("state.clear()", function() {
  return this.iterator("table", function(settings) {
    settings.fnStateSaveCallback.call(settings.oInstance, settings, {});
  });
});
_api_register("state.loaded()", function() {
  return this.context.length ? this.context[0].oLoadedState : null;
});
_api_register("state.save()", function() {
  return this.iterator("table", function(settings) {
    _fnSaveState(settings);
  });
});
var __bootstrap;
var __foundation;
DataTable.use = function(arg1, arg2) {
  var module = typeof arg1 === "string" ? arg2 : arg1;
  var type = typeof arg2 === "string" ? arg2 : arg1;
  if (module === undefined && typeof type === "string") {
    switch (type) {
      case "lib":
      case "jq":
        return $;
      case "win":
        return window;
      case "datetime":
        return DataTable.DateTime;
      case "luxon":
        return __luxon;
      case "moment":
        return __moment;
      case "bootstrap":
        return __bootstrap || window.bootstrap;
      case "foundation":
        return __foundation || window.Foundation;
      default:
        return null;
    }
  }
  if (type === "lib" || type === "jq" || module && module.fn && module.fn.jquery) {
    $ = module;
  } else if (type === "win" || module && module.document) {
    window = module;
    document = module.document;
  } else if (type === "datetime" || module && module.type === "DateTime") {
    DataTable.DateTime = module;
  } else if (type === "luxon" || module && module.FixedOffsetZone) {
    __luxon = module;
  } else if (type === "moment" || module && module.isMoment) {
    __moment = module;
  } else if (type === "bootstrap" || module && module.Modal && module.Modal.NAME === "modal") {
    __bootstrap = module;
  } else if (type === "foundation" || module && module.Reveal) {
    __foundation = module;
  }
};
DataTable.factory = function(root, jq) {
  var is = false;
  if (root && root.document) {
    window = root;
    document = root.document;
  }
  if (jq && jq.fn && jq.fn.jquery) {
    $ = jq;
    is = true;
  }
  return is;
};
DataTable.versionCheck = function(version, version2) {
  var aThis = version2 ? version2.split(".") : DataTable.version.split(".");
  var aThat = version.split(".");
  var iThis, iThat;
  for (var i = 0, iLen = aThat.length;i < iLen; i++) {
    iThis = parseInt(aThis[i], 10) || 0;
    iThat = parseInt(aThat[i], 10) || 0;
    if (iThis === iThat) {
      continue;
    }
    return iThis > iThat;
  }
  return true;
};
DataTable.isDataTable = function(table) {
  var t = $(table).get(0);
  var is = false;
  if (table instanceof DataTable.Api) {
    return true;
  }
  $.each(DataTable.settings, function(i, o) {
    var head = o.nScrollHead ? $("table", o.nScrollHead)[0] : null;
    var foot = o.nScrollFoot ? $("table", o.nScrollFoot)[0] : null;
    if (o.nTable === t || head === t || foot === t) {
      is = true;
    }
  });
  return is;
};
DataTable.tables = function(visible) {
  var api = false;
  if ($.isPlainObject(visible)) {
    api = visible.api;
    visible = visible.visible;
  }
  var a = DataTable.settings.filter(function(o) {
    return !visible || visible && $(o.nTable).is(":visible") ? true : false;
  }).map(function(o) {
    return o.nTable;
  });
  return api ? new _Api(a) : a;
};
DataTable.camelToHungarian = _fnCamelToHungarian;
_api_register("$()", function(selector, opts) {
  var rows = this.rows(opts).nodes(), jqRows = $(rows);
  return $([].concat(jqRows.filter(selector).toArray(), jqRows.find(selector).toArray()));
});
$.each(["on", "one", "off"], function(i, key) {
  _api_register(key + "()", function() {
    var args = Array.prototype.slice.call(arguments);
    args[0] = args[0].split(/\s/).map(function(e) {
      return !e.match(/\.dt\b/) ? e + ".dt" : e;
    }).join(" ");
    var inst = $(this.tables().nodes());
    inst[key].apply(inst, args);
    return this;
  });
});
_api_register("clear()", function() {
  return this.iterator("table", function(settings) {
    _fnClearTable(settings);
  });
});
_api_register("error()", function(msg) {
  return this.iterator("table", function(settings) {
    _fnLog(settings, 0, msg);
  });
});
_api_register("settings()", function() {
  return new _Api(this.context, this.context);
});
_api_register("init()", function() {
  var ctx = this.context;
  return ctx.length ? ctx[0].oInit : null;
});
_api_register("data()", function() {
  return this.iterator("table", function(settings) {
    return _pluck(settings.aoData, "_aData");
  }).flatten();
});
_api_register("trigger()", function(name, args, bubbles) {
  return this.iterator("table", function(settings) {
    return _fnCallbackFire(settings, null, name, args, bubbles);
  }).flatten();
});
_api_register("ready()", function(fn) {
  var ctx = this.context;
  if (!fn) {
    return ctx.length ? ctx[0]._bInitComplete || false : null;
  }
  return this.tables().every(function() {
    var api = this;
    if (this.context[0]._bInitComplete) {
      fn.call(api);
    } else {
      this.on("init.dt.DT", function() {
        fn.call(api);
      });
    }
  });
});
_api_register("destroy()", function(remove) {
  remove = remove || false;
  return this.iterator("table", function(settings) {
    var classes = settings.oClasses;
    var table = settings.nTable;
    var tbody = settings.nTBody;
    var thead = settings.nTHead;
    var tfoot = settings.nTFoot;
    var jqTable = $(table);
    var jqTbody = $(tbody);
    var jqWrapper = $(settings.nTableWrapper);
    var rows = settings.aoData.map(function(r) {
      return r ? r.nTr : null;
    });
    var orderClasses = classes.order;
    settings.bDestroying = true;
    _fnCallbackFire(settings, "aoDestroyCallback", "destroy", [settings], true);
    if (!remove) {
      new _Api(settings).columns().visible(true);
    }
    if (settings.resizeObserver) {
      settings.resizeObserver.disconnect();
    }
    jqWrapper.off(".DT").find(":not(tbody *)").off(".DT");
    $(window).off(".DT-" + settings.sInstance);
    if (table != thead.parentNode) {
      jqTable.children("thead").detach();
      jqTable.append(thead);
    }
    if (tfoot && table != tfoot.parentNode) {
      jqTable.children("tfoot").detach();
      jqTable.append(tfoot);
    }
    cleanHeader(thead, "header");
    cleanHeader(tfoot, "footer");
    settings.colgroup.remove();
    settings.aaSorting = [];
    settings.aaSortingFixed = [];
    _fnSortingClasses(settings);
    $(jqTable).find("th, td").removeClass($.map(DataTable.ext.type.className, function(v) {
      return v;
    }).join(" "));
    $("th, td", thead).removeClass(orderClasses.none + " " + orderClasses.canAsc + " " + orderClasses.canDesc + " " + orderClasses.isAsc + " " + orderClasses.isDesc).css("width", "").removeAttr("aria-sort");
    jqTbody.children().detach();
    jqTbody.append(rows);
    var orig = settings.nTableWrapper.parentNode;
    var insertBefore = settings.nTableWrapper.nextSibling;
    var removedMethod = remove ? "remove" : "detach";
    jqTable[removedMethod]();
    jqWrapper[removedMethod]();
    if (!remove && orig) {
      orig.insertBefore(table, insertBefore);
      jqTable.css("width", settings.sDestroyWidth).removeClass(classes.table);
    }
    var idx = DataTable.settings.indexOf(settings);
    if (idx !== -1) {
      DataTable.settings.splice(idx, 1);
    }
  });
});
$.each(["column", "row", "cell"], function(i, type) {
  _api_register(type + "s().every()", function(fn) {
    var opts = this.selector.opts;
    var api = this;
    var inst;
    var counter = 0;
    return this.iterator("every", function(settings, selectedIdx, tableIdx) {
      inst = api[type](selectedIdx, opts);
      if (type === "cell") {
        fn.call(inst, inst[0][0].row, inst[0][0].column, tableIdx, counter);
      } else {
        fn.call(inst, selectedIdx, tableIdx, counter);
      }
      counter++;
    });
  });
});
_api_register("i18n()", function(token, def, plural) {
  var ctx = this.context[0];
  var resolved = _fnGetObjectDataFn(token)(ctx.oLanguage);
  if (resolved === undefined) {
    resolved = def;
  }
  if ($.isPlainObject(resolved)) {
    resolved = plural !== undefined && resolved[plural] !== undefined ? resolved[plural] : plural === false ? resolved : resolved._;
  }
  return typeof resolved === "string" ? resolved.replace("%d", plural) : resolved;
});
function cleanHeader(node, className) {
  $(node).find(".dt-column-order").remove();
  $(node).find(".dt-column-title").each(function() {
    var title = $(this).html();
    $(this).parent().parent().append(title);
    $(this).remove();
  });
  $(node).find("div.dt-column-" + className).remove();
  $("th, td", node).removeAttr("data-dt-column");
}
DataTable.version = "2.3.7";
DataTable.settings = [];
DataTable.models = {};
DataTable.models.oSearch = {
  caseInsensitive: true,
  search: "",
  regex: false,
  smart: true,
  return: false
};
DataTable.models.oRow = {
  nTr: null,
  anCells: null,
  _aData: [],
  _aSortData: null,
  _aFilterData: null,
  _sFilterRow: null,
  src: null,
  idx: -1,
  displayData: null
};
DataTable.models.oColumn = {
  idx: null,
  aDataSort: null,
  asSorting: null,
  bSearchable: null,
  bSortable: null,
  bVisible: null,
  _sManualType: null,
  _bAttrSrc: false,
  fnCreatedCell: null,
  fnGetData: null,
  fnSetData: null,
  mData: null,
  mRender: null,
  sClass: null,
  sContentPadding: null,
  sDefaultContent: null,
  sName: null,
  sSortDataType: "std",
  sSortingClass: null,
  sTitle: null,
  sType: null,
  sWidth: null,
  sWidthOrig: null,
  wideStrings: null,
  searchFixed: null
};
DataTable.defaults = {
  aaData: null,
  aaSorting: [[0, "asc"]],
  aaSortingFixed: [],
  ajax: null,
  aLengthMenu: [10, 25, 50, 100],
  aoColumns: null,
  aoColumnDefs: null,
  aoSearchCols: [],
  bAutoWidth: true,
  bDeferRender: true,
  bDestroy: false,
  bFilter: true,
  bInfo: true,
  bLengthChange: true,
  bPaginate: true,
  bProcessing: false,
  bRetrieve: false,
  bScrollCollapse: false,
  bServerSide: false,
  bSort: true,
  bSortMulti: true,
  bSortCellsTop: null,
  titleRow: null,
  bSortClasses: true,
  bStateSave: false,
  fnCreatedRow: null,
  fnDrawCallback: null,
  fnFooterCallback: null,
  fnFormatNumber: function(toFormat) {
    return toFormat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
  },
  fnHeaderCallback: null,
  fnInfoCallback: null,
  fnInitComplete: null,
  fnPreDrawCallback: null,
  fnRowCallback: null,
  fnStateLoadCallback: function(settings) {
    try {
      return JSON.parse((settings.iStateDuration === -1 ? sessionStorage : localStorage).getItem("DataTables_" + settings.sInstance + "_" + location.pathname));
    } catch (e) {
      return {};
    }
  },
  fnStateLoadParams: null,
  fnStateLoaded: null,
  fnStateSaveCallback: function(settings, data) {
    try {
      (settings.iStateDuration === -1 ? sessionStorage : localStorage).setItem("DataTables_" + settings.sInstance + "_" + location.pathname, JSON.stringify(data));
    } catch (e) {}
  },
  fnStateSaveParams: null,
  iStateDuration: 7200,
  iDisplayLength: 10,
  iDisplayStart: 0,
  iTabIndex: 0,
  oClasses: {},
  oLanguage: {
    oAria: {
      orderable: ": Activate to sort",
      orderableReverse: ": Activate to invert sorting",
      orderableRemove: ": Activate to remove sorting",
      paginate: {
        first: "First",
        last: "Last",
        next: "Next",
        previous: "Previous",
        number: ""
      }
    },
    oPaginate: {
      sFirst: "«",
      sLast: "»",
      sNext: "›",
      sPrevious: "‹"
    },
    entries: {
      _: "entries",
      1: "entry"
    },
    lengthLabels: {
      "-1": "All"
    },
    sEmptyTable: "No data available in table",
    sInfo: "Showing _START_ to _END_ of _TOTAL_ _ENTRIES-TOTAL_",
    sInfoEmpty: "Showing 0 to 0 of 0 _ENTRIES-TOTAL_",
    sInfoFiltered: "(filtered from _MAX_ total _ENTRIES-MAX_)",
    sInfoPostFix: "",
    sDecimal: "",
    sThousands: ",",
    sLengthMenu: "_MENU_ _ENTRIES_ per page",
    sLoadingRecords: "Loading...",
    sProcessing: "",
    sSearch: "Search:",
    sSearchPlaceholder: "",
    sUrl: "",
    sZeroRecords: "No matching records found"
  },
  orderDescReverse: true,
  oSearch: $.extend({}, DataTable.models.oSearch),
  layout: {
    topStart: "pageLength",
    topEnd: "search",
    bottomStart: "info",
    bottomEnd: "paging"
  },
  sDom: null,
  searchDelay: null,
  sPaginationType: "",
  sScrollX: "",
  sScrollXInner: "",
  sScrollY: "",
  sServerMethod: "GET",
  renderer: null,
  rowId: "DT_RowId",
  caption: null,
  iDeferLoading: null,
  on: null,
  columnTitleTag: "span"
};
_fnHungarianMap(DataTable.defaults);
DataTable.defaults.column = {
  aDataSort: null,
  iDataSort: -1,
  ariaTitle: "",
  asSorting: ["asc", "desc", ""],
  bSearchable: true,
  bSortable: true,
  bVisible: true,
  fnCreatedCell: null,
  mData: null,
  mRender: null,
  sCellType: "td",
  sClass: "",
  sContentPadding: "",
  sDefaultContent: null,
  sName: "",
  sSortDataType: "std",
  sTitle: null,
  sType: null,
  sWidth: null
};
_fnHungarianMap(DataTable.defaults.column);
DataTable.models.oSettings = {
  oFeatures: {
    bAutoWidth: null,
    bDeferRender: null,
    bFilter: null,
    bInfo: true,
    bLengthChange: true,
    bPaginate: null,
    bProcessing: null,
    bServerSide: null,
    bSort: null,
    bSortMulti: null,
    bSortClasses: null,
    bStateSave: null
  },
  oScroll: {
    bCollapse: null,
    iBarWidth: 0,
    sX: null,
    sXInner: null,
    sY: null
  },
  oLanguage: {
    fnInfoCallback: null
  },
  oBrowser: {
    bScrollbarLeft: false,
    barWidth: 0
  },
  ajax: null,
  aanFeatures: [],
  aoData: [],
  aiDisplay: [],
  aiDisplayMaster: [],
  aIds: {},
  aoColumns: [],
  aoHeader: [],
  aoFooter: [],
  oPreviousSearch: {},
  searchFixed: {},
  aoPreSearchCols: [],
  aaSorting: null,
  aaSortingFixed: [],
  sDestroyWidth: 0,
  aoRowCallback: [],
  aoHeaderCallback: [],
  aoFooterCallback: [],
  aoDrawCallback: [],
  aoRowCreatedCallback: [],
  aoPreDrawCallback: [],
  aoInitComplete: [],
  aoStateSaveParams: [],
  aoStateLoadParams: [],
  aoStateLoaded: [],
  sTableId: "",
  nTable: null,
  nTHead: null,
  nTFoot: null,
  nTBody: null,
  nTableWrapper: null,
  bInitialised: false,
  aoOpenRows: [],
  sDom: null,
  searchDelay: null,
  sPaginationType: "two_button",
  pagingControls: 0,
  iStateDuration: 0,
  aoStateSave: [],
  aoStateLoad: [],
  oSavedState: null,
  oLoadedState: null,
  bAjaxDataGet: true,
  jqXHR: null,
  json: undefined,
  oAjaxData: undefined,
  sServerMethod: null,
  fnFormatNumber: null,
  aLengthMenu: null,
  iDraw: 0,
  bDrawing: false,
  iDrawError: -1,
  _iDisplayLength: 10,
  _iDisplayStart: 0,
  _iRecordsTotal: 0,
  _iRecordsDisplay: 0,
  oClasses: {},
  bFiltered: false,
  bSorted: false,
  bSortCellsTop: null,
  oInit: null,
  aoDestroyCallback: [],
  fnRecordsTotal: function() {
    return _fnDataSource(this) == "ssp" ? this._iRecordsTotal * 1 : this.aiDisplayMaster.length;
  },
  fnRecordsDisplay: function() {
    return _fnDataSource(this) == "ssp" ? this._iRecordsDisplay * 1 : this.aiDisplay.length;
  },
  fnDisplayEnd: function() {
    var len = this._iDisplayLength, start = this._iDisplayStart, calc = start + len, records = this.aiDisplay.length, features = this.oFeatures, paginate = features.bPaginate;
    if (features.bServerSide) {
      return paginate === false || len === -1 ? start + records : Math.min(start + len, this._iRecordsDisplay);
    } else {
      return !paginate || calc > records || len === -1 ? records : calc;
    }
  },
  oInstance: null,
  sInstance: null,
  iTabIndex: 0,
  nScrollHead: null,
  nScrollFoot: null,
  aLastSort: [],
  oPlugins: {},
  rowIdFn: null,
  rowId: null,
  caption: "",
  captionNode: null,
  colgroup: null,
  deferLoading: null,
  typeDetect: true,
  resizeObserver: null,
  containerWidth: -1,
  orderDescReverse: null,
  orderIndicators: true,
  orderHandler: true,
  titleRow: null,
  columnTitleTag: "span"
};
var extPagination = DataTable.ext.pager;
$.extend(extPagination, {
  simple: function() {
    return ["previous", "next"];
  },
  full: function() {
    return ["first", "previous", "next", "last"];
  },
  numbers: function() {
    return ["numbers"];
  },
  simple_numbers: function() {
    return ["previous", "numbers", "next"];
  },
  full_numbers: function() {
    return ["first", "previous", "numbers", "next", "last"];
  },
  first_last: function() {
    return ["first", "last"];
  },
  first_last_numbers: function() {
    return ["first", "numbers", "last"];
  },
  _numbers: _pagingNumbers,
  numbers_length: 7
});
$.extend(true, DataTable.ext.renderer, {
  pagingButton: {
    _: function(settings, buttonType, content, active, disabled) {
      var classes = settings.oClasses.paging;
      var btnClasses = [classes.button];
      var btn;
      if (active) {
        btnClasses.push(classes.active);
      }
      if (disabled) {
        btnClasses.push(classes.disabled);
      }
      if (buttonType === "ellipsis") {
        btn = $('<span class="ellipsis"></span>').html(content)[0];
      } else {
        btn = $("<button>", {
          class: btnClasses.join(" "),
          role: "link",
          type: "button"
        }).html(content);
      }
      return {
        display: btn,
        clicker: btn
      };
    }
  },
  pagingContainer: {
    _: function(settings, buttons) {
      return buttons;
    }
  }
});
var _filterString = function(stripHtml, normalize) {
  return function(str) {
    if (_empty(str) || typeof str !== "string") {
      return str;
    }
    str = str.replace(_re_new_lines, " ");
    if (stripHtml) {
      str = _stripHtml(str);
    }
    if (normalize) {
      str = _normalize(str, false);
    }
    return str;
  };
};
function __mld(dtLib, momentFn, luxonFn, dateFn, arg1) {
  if (__moment) {
    return dtLib[momentFn](arg1);
  } else if (__luxon) {
    return dtLib[luxonFn](arg1);
  }
  return dateFn ? dtLib[dateFn](arg1) : dtLib;
}
var __mlWarning = false;
var __luxon;
var __moment;
function resolveWindowLibs() {
  if (window.luxon && !__luxon) {
    __luxon = window.luxon;
  }
  if (window.moment && !__moment) {
    __moment = window.moment;
  }
}
function __mldObj(d, format, locale) {
  var dt;
  resolveWindowLibs();
  if (__moment) {
    dt = __moment.utc(d, format, locale, true);
    if (!dt.isValid()) {
      return null;
    }
  } else if (__luxon) {
    dt = format && typeof d === "string" ? __luxon.DateTime.fromFormat(d, format) : __luxon.DateTime.fromISO(d);
    if (!dt.isValid) {
      return null;
    }
    dt = dt.setLocale(locale);
  } else if (!format) {
    dt = new Date(d);
  } else {
    if (!__mlWarning) {
      alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17");
    }
    __mlWarning = true;
  }
  return dt;
}
function __mlHelper(localeString) {
  return function(from, to, locale, def) {
    if (arguments.length === 0) {
      locale = "en";
      to = null;
      from = null;
    } else if (arguments.length === 1) {
      locale = "en";
      to = from;
      from = null;
    } else if (arguments.length === 2) {
      locale = to;
      to = from;
      from = null;
    }
    var typeName = "datetime" + (to ? "-" + to : "");
    if (!DataTable.ext.type.order[typeName + "-pre"]) {
      DataTable.type(typeName, {
        detect: function(d) {
          return d === typeName ? typeName : false;
        },
        order: {
          pre: function(d) {
            return d.valueOf();
          }
        },
        className: "dt-right"
      });
    }
    return function(d, type) {
      if (d === null || d === undefined) {
        if (def === "--now") {
          var local = new Date;
          d = new Date(Date.UTC(local.getFullYear(), local.getMonth(), local.getDate(), local.getHours(), local.getMinutes(), local.getSeconds()));
        } else {
          d = "";
        }
      }
      if (type === "type") {
        return typeName;
      }
      if (d === "") {
        return type !== "sort" ? "" : __mldObj("0000-01-01 00:00:00", null, locale);
      }
      if (to !== null && from === to && type !== "sort" && type !== "type" && !(d instanceof Date)) {
        return d;
      }
      var dt = __mldObj(d, from, locale);
      if (dt === null) {
        return d;
      }
      if (type === "sort") {
        return dt;
      }
      var formatted = to === null ? __mld(dt, "toDate", "toJSDate", "")[localeString](navigator.language, { timeZone: "UTC" }) : __mld(dt, "format", "toFormat", "toISOString", to);
      return type === "display" ? _escapeHtml(formatted) : formatted;
    };
  };
}
var __thousands = ",";
var __decimal = ".";
if (window.Intl !== undefined) {
  try {
    num = new Intl.NumberFormat().formatToParts(100000.1);
    for (i = 0;i < num.length; i++) {
      if (num[i].type === "group") {
        __thousands = num[i].value;
      } else if (num[i].type === "decimal") {
        __decimal = num[i].value;
      }
    }
  } catch (e) {}
}
var num;
var i;
DataTable.datetime = function(format, locale) {
  var typeName = "datetime-" + format;
  if (!locale) {
    locale = "en";
  }
  if (!DataTable.ext.type.order[typeName]) {
    DataTable.type(typeName, {
      detect: function(d) {
        var dt = __mldObj(d, format, locale);
        return d === "" || dt ? typeName : false;
      },
      order: {
        pre: function(d) {
          return __mldObj(d, format, locale) || 0;
        }
      },
      className: "dt-right"
    });
  }
};
DataTable.render = {
  date: __mlHelper("toLocaleDateString"),
  datetime: __mlHelper("toLocaleString"),
  time: __mlHelper("toLocaleTimeString"),
  number: function(thousands, decimal, precision, prefix, postfix) {
    if (thousands === null || thousands === undefined) {
      thousands = __thousands;
    }
    if (decimal === null || decimal === undefined) {
      decimal = __decimal;
    }
    return {
      display: function(d) {
        if (typeof d !== "number" && typeof d !== "string") {
          return d;
        }
        if (d === "" || d === null) {
          return d;
        }
        var negative = d < 0 ? "-" : "";
        var flo = parseFloat(d);
        var abs = Math.abs(flo);
        if (abs >= 100000000000 || abs < 0.0001 && abs !== 0) {
          var exp = flo.toExponential(precision).split(/e\+?/);
          return exp[0] + " x 10<sup>" + exp[1] + "</sup>";
        }
        if (isNaN(flo)) {
          return _escapeHtml(d);
        }
        flo = flo.toFixed(precision);
        d = Math.abs(flo);
        var intPart = parseInt(d, 10);
        var floatPart = precision ? decimal + (d - intPart).toFixed(precision).substring(2) : "";
        if (intPart === 0 && parseFloat(floatPart) === 0) {
          negative = "";
        }
        return negative + (prefix || "") + intPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousands) + floatPart + (postfix || "");
      }
    };
  },
  text: function() {
    return {
      display: _escapeHtml,
      filter: _escapeHtml
    };
  }
};
var _extTypes = DataTable.ext.type;
DataTable.type = function(name, prop, val) {
  if (!prop) {
    return {
      className: _extTypes.className[name],
      detect: _extTypes.detect.find(function(fn) {
        return fn._name === name;
      }),
      order: {
        pre: _extTypes.order[name + "-pre"],
        asc: _extTypes.order[name + "-asc"],
        desc: _extTypes.order[name + "-desc"]
      },
      render: _extTypes.render[name],
      search: _extTypes.search[name]
    };
  }
  var setProp = function(prop2, propVal) {
    _extTypes[prop2][name] = propVal;
  };
  var setDetect = function(detect) {
    Object.defineProperty(detect, "_name", { value: name });
    var idx = _extTypes.detect.findIndex(function(item) {
      return item._name === name;
    });
    if (idx === -1) {
      _extTypes.detect.unshift(detect);
    } else {
      _extTypes.detect.splice(idx, 1, detect);
    }
  };
  var setOrder = function(obj) {
    _extTypes.order[name + "-pre"] = obj.pre;
    _extTypes.order[name + "-asc"] = obj.asc;
    _extTypes.order[name + "-desc"] = obj.desc;
  };
  if (val === undefined) {
    val = prop;
    prop = null;
  }
  if (prop === "className") {
    setProp("className", val);
  } else if (prop === "detect") {
    setDetect(val);
  } else if (prop === "order") {
    setOrder(val);
  } else if (prop === "render") {
    setProp("render", val);
  } else if (prop === "search") {
    setProp("search", val);
  } else if (!prop) {
    if (val.className) {
      setProp("className", val.className);
    }
    if (val.detect !== undefined) {
      setDetect(val.detect);
    }
    if (val.order) {
      setOrder(val.order);
    }
    if (val.render !== undefined) {
      setProp("render", val.render);
    }
    if (val.search !== undefined) {
      setProp("search", val.search);
    }
  }
};
DataTable.types = function() {
  return _extTypes.detect.map(function(fn) {
    return fn._name;
  });
};
var __diacriticSort = function(a, b) {
  a = a !== null && a !== undefined ? a.toString().toLowerCase() : "";
  b = b !== null && b !== undefined ? b.toString().toLowerCase() : "";
  return a.localeCompare(b, navigator.languages[0] || navigator.language, {
    numeric: true,
    ignorePunctuation: true
  });
};
var __diacriticHtmlSort = function(a, b) {
  a = _stripHtml(a);
  b = _stripHtml(b);
  return __diacriticSort(a, b);
};
DataTable.type("string", {
  detect: function() {
    return "string";
  },
  order: {
    pre: function(a) {
      return _empty(a) && typeof a !== "boolean" ? "" : typeof a === "string" ? a.toLowerCase() : !a.toString ? "" : a.toString();
    }
  },
  search: _filterString(false, true)
});
DataTable.type("string-utf8", {
  detect: {
    allOf: function(d) {
      return true;
    },
    oneOf: function(d) {
      return !_empty(d) && navigator.languages && typeof d === "string" && d.match(/[^\x00-\x7F]/);
    }
  },
  order: {
    asc: __diacriticSort,
    desc: function(a, b) {
      return __diacriticSort(a, b) * -1;
    }
  },
  search: _filterString(false, true)
});
DataTable.type("html", {
  detect: {
    allOf: function(d) {
      return _empty(d) || typeof d === "string" && d.indexOf("<") !== -1;
    },
    oneOf: function(d) {
      return !_empty(d) && typeof d === "string" && d.indexOf("<") !== -1;
    }
  },
  order: {
    pre: function(a) {
      return _empty(a) ? "" : a.replace ? _stripHtml(a).trim().toLowerCase() : a + "";
    }
  },
  search: _filterString(true, true)
});
DataTable.type("html-utf8", {
  detect: {
    allOf: function(d) {
      return _empty(d) || typeof d === "string" && d.indexOf("<") !== -1;
    },
    oneOf: function(d) {
      return navigator.languages && !_empty(d) && typeof d === "string" && d.indexOf("<") !== -1 && typeof d === "string" && d.match(/[^\x00-\x7F]/);
    }
  },
  order: {
    asc: __diacriticHtmlSort,
    desc: function(a, b) {
      return __diacriticHtmlSort(a, b) * -1;
    }
  },
  search: _filterString(true, true)
});
DataTable.type("date", {
  className: "dt-type-date",
  detect: {
    allOf: function(d) {
      if (d && !(d instanceof Date) && !_re_date.test(d)) {
        return null;
      }
      var parsed = Date.parse(d);
      return parsed !== null && !isNaN(parsed) || _empty(d);
    },
    oneOf: function(d) {
      return d instanceof Date || typeof d === "string" && _re_date.test(d);
    }
  },
  order: {
    pre: function(d) {
      var ts = Date.parse(d);
      return isNaN(ts) ? -Infinity : ts;
    }
  }
});
DataTable.type("html-num-fmt", {
  className: "dt-type-numeric",
  detect: {
    allOf: function(d, settings) {
      var decimal = settings.oLanguage.sDecimal;
      return _htmlNumeric(d, decimal, true, false);
    },
    oneOf: function(d, settings) {
      var decimal = settings.oLanguage.sDecimal;
      return _htmlNumeric(d, decimal, true, false);
    }
  },
  order: {
    pre: function(d, s) {
      var dp = s.oLanguage.sDecimal;
      return __numericReplace(d, dp, _re_html, _re_formatted_numeric);
    }
  },
  search: _filterString(true, true)
});
DataTable.type("html-num", {
  className: "dt-type-numeric",
  detect: {
    allOf: function(d, settings) {
      var decimal = settings.oLanguage.sDecimal;
      return _htmlNumeric(d, decimal, false, true);
    },
    oneOf: function(d, settings) {
      var decimal = settings.oLanguage.sDecimal;
      return _htmlNumeric(d, decimal, false, false);
    }
  },
  order: {
    pre: function(d, s) {
      var dp = s.oLanguage.sDecimal;
      return __numericReplace(d, dp, _re_html);
    }
  },
  search: _filterString(true, true)
});
DataTable.type("num-fmt", {
  className: "dt-type-numeric",
  detect: {
    allOf: function(d, settings) {
      var decimal = settings.oLanguage.sDecimal;
      return _isNumber(d, decimal, true, true);
    },
    oneOf: function(d, settings) {
      var decimal = settings.oLanguage.sDecimal;
      return _isNumber(d, decimal, true, false);
    }
  },
  order: {
    pre: function(d, s) {
      var dp = s.oLanguage.sDecimal;
      return __numericReplace(d, dp, _re_formatted_numeric);
    }
  }
});
DataTable.type("num", {
  className: "dt-type-numeric",
  detect: {
    allOf: function(d, settings) {
      var decimal = settings.oLanguage.sDecimal;
      return _isNumber(d, decimal, false, true);
    },
    oneOf: function(d, settings) {
      var decimal = settings.oLanguage.sDecimal;
      return _isNumber(d, decimal, false, false);
    }
  },
  order: {
    pre: function(d, s) {
      var dp = s.oLanguage.sDecimal;
      return __numericReplace(d, dp);
    }
  }
});
var __numericReplace = function(d, decimalPlace, re1, re2) {
  if (d !== 0 && (!d || d === "-")) {
    return -Infinity;
  }
  var type = typeof d;
  if (type === "number" || type === "bigint") {
    return d;
  }
  if (decimalPlace) {
    d = _numToDecimal(d, decimalPlace);
  }
  if (d.replace) {
    if (re1) {
      d = d.replace(re1, "");
    }
    if (re2) {
      d = d.replace(re2, "");
    }
  }
  return d * 1;
};
$.extend(true, DataTable.ext.renderer, {
  footer: {
    _: function(settings, cell, classes) {
      cell.addClass(classes.tfoot.cell);
    }
  },
  header: {
    _: function(settings, cell, classes) {
      cell.addClass(classes.thead.cell);
      if (!settings.oFeatures.bSort) {
        cell.addClass(classes.order.none);
      }
      var titleRow = settings.titleRow;
      var headerRows = cell.closest("thead").find("tr");
      var rowIdx = cell.parent().index();
      if (cell.attr("data-dt-order") === "disable" || cell.parent().attr("data-dt-order") === "disable" || titleRow === true && rowIdx !== 0 || titleRow === false && rowIdx !== headerRows.length - 1 || typeof titleRow === "number" && rowIdx !== titleRow) {
        return;
      }
      $(settings.nTable).on("order.dt.DT column-visibility.dt.DT", function(e, ctx, column) {
        if (settings !== ctx) {
          return;
        }
        var sorting = ctx.sortDetails;
        if (!sorting) {
          return;
        }
        var orderedColumns = _pluck(sorting, "col");
        if (e.type === "column-visibility" && !orderedColumns.includes(column)) {
          return;
        }
        var i2;
        var orderClasses = classes.order;
        var columns = ctx.api.columns(cell);
        var col = settings.aoColumns[columns.flatten()[0]];
        var orderable = columns.orderable().includes(true);
        var ariaType = "";
        var indexes = columns.indexes();
        var sortDirs = columns.orderable(true).flatten();
        var tabIndex = settings.iTabIndex;
        var canOrder = ctx.orderHandler && orderable;
        cell.removeClass(orderClasses.isAsc + " " + orderClasses.isDesc).toggleClass(orderClasses.none, !orderable).toggleClass(orderClasses.canAsc, canOrder && sortDirs.includes("asc")).toggleClass(orderClasses.canDesc, canOrder && sortDirs.includes("desc"));
        var isOrdering = true;
        for (i2 = 0;i2 < indexes.length; i2++) {
          if (!orderedColumns.includes(indexes[i2])) {
            isOrdering = false;
          }
        }
        if (isOrdering) {
          var orderDirs = columns.order();
          cell.addClass(orderDirs.includes("asc") ? orderClasses.isAsc : "" + orderDirs.includes("desc") ? orderClasses.isDesc : "");
        }
        var firstVis = -1;
        for (i2 = 0;i2 < orderedColumns.length; i2++) {
          if (settings.aoColumns[orderedColumns[i2]].bVisible) {
            firstVis = orderedColumns[i2];
            break;
          }
        }
        if (indexes[0] == firstVis) {
          var firstSort = sorting[0];
          var sortOrder = col.asSorting;
          cell.attr("aria-sort", firstSort.dir === "asc" ? "ascending" : "descending");
          ariaType = !sortOrder[firstSort.index + 1] ? "Remove" : "Reverse";
        } else {
          cell.removeAttr("aria-sort");
        }
        if (orderable) {
          var orderSpan = cell.find(".dt-column-order");
          orderSpan.attr("role", "button").attr("aria-label", orderable ? col.ariaTitle + ctx.api.i18n("oAria.orderable" + ariaType) : col.ariaTitle);
          if (tabIndex !== -1) {
            orderSpan.attr("tabindex", tabIndex);
          }
        }
      });
    }
  },
  layout: {
    _: function(settings, container, items) {
      var classes = settings.oClasses.layout;
      var row = $("<div/>").attr("id", items.id || null).addClass(items.className || classes.row).appendTo(container);
      DataTable.ext.renderer.layout._forLayoutRow(items, function(key, val) {
        if (key === "id" || key === "className") {
          return;
        }
        var klass = "";
        if (val.table) {
          row.addClass(classes.tableRow);
          klass += classes.tableCell + " ";
        }
        if (key === "start") {
          klass += classes.start;
        } else if (key === "end") {
          klass += classes.end;
        } else {
          klass += classes.full;
        }
        $("<div/>").attr({
          id: val.id || null,
          class: val.className ? val.className : classes.cell + " " + klass
        }).append(val.contents).appendTo(row);
      });
    },
    _forLayoutRow: function(items, fn) {
      var layoutEnum = function(x) {
        switch (x) {
          case "":
            return 0;
          case "start":
            return 1;
          case "end":
            return 2;
          default:
            return 3;
        }
      };
      Object.keys(items).sort(function(a, b) {
        return layoutEnum(a) - layoutEnum(b);
      }).forEach(function(key) {
        fn(key, items[key]);
      });
    }
  }
});
DataTable.feature = {};
DataTable.feature.register = function(name, cb, legacy) {
  DataTable.ext.features[name] = cb;
  if (legacy) {
    _ext.feature.push({
      cFeature: legacy,
      fnInit: cb
    });
  }
};
function _divProp(el, prop, val) {
  if (val) {
    el[prop] = val;
  }
}
DataTable.feature.register("div", function(settings, opts) {
  var n = $("<div>")[0];
  if (opts) {
    _divProp(n, "className", opts.className);
    _divProp(n, "id", opts.id);
    _divProp(n, "innerHTML", opts.html);
    _divProp(n, "textContent", opts.text);
  }
  return n;
});
DataTable.feature.register("info", function(settings, opts) {
  if (!settings.oFeatures.bInfo) {
    return null;
  }
  var { oLanguage: lang, sTableId: tid } = settings, n = $("<div/>", {
    class: settings.oClasses.info.container
  });
  opts = $.extend({
    callback: lang.fnInfoCallback,
    empty: lang.sInfoEmpty,
    postfix: lang.sInfoPostFix,
    search: lang.sInfoFiltered,
    text: lang.sInfo
  }, opts);
  settings.aoDrawCallback.push(function(s) {
    _fnUpdateInfo(s, opts, n);
  });
  if (!settings._infoEl) {
    n.attr({
      "aria-live": "polite",
      id: tid + "_info",
      role: "status"
    });
    $(settings.nTable).attr("aria-describedby", tid + "_info");
    settings._infoEl = n;
  }
  return n;
}, "i");
function _fnUpdateInfo(settings, opts, node) {
  var start = settings._iDisplayStart + 1, end = settings.fnDisplayEnd(), max = settings.fnRecordsTotal(), total = settings.fnRecordsDisplay(), out = total ? opts.text : opts.empty;
  if (total !== max) {
    out += " " + opts.search;
  }
  out += opts.postfix;
  out = _fnMacros(settings, out);
  if (opts.callback) {
    out = opts.callback.call(settings.oInstance, settings, start, end, max, total, out);
  }
  node.html(out);
  _fnCallbackFire(settings, null, "info", [settings, node[0], out]);
}
var __searchCounter = 0;
DataTable.feature.register("search", function(settings, opts) {
  if (!settings.oFeatures.bFilter) {
    return null;
  }
  var classes = settings.oClasses.search;
  var tableId = settings.sTableId;
  var language = settings.oLanguage;
  var previousSearch = settings.oPreviousSearch;
  var input = '<input type="search" class="' + classes.input + '"/>';
  opts = $.extend({
    placeholder: language.sSearchPlaceholder,
    processing: false,
    text: language.sSearch
  }, opts);
  if (opts.text.indexOf("_INPUT_") === -1) {
    opts.text += "_INPUT_";
  }
  opts.text = _fnMacros(settings, opts.text);
  var end = opts.text.match(/_INPUT_$/);
  var start = opts.text.match(/^_INPUT_/);
  var removed = opts.text.replace(/_INPUT_/, "");
  var str = "<label>" + opts.text + "</label>";
  if (start) {
    str = "_INPUT_<label>" + removed + "</label>";
  } else if (end) {
    str = "<label>" + removed + "</label>_INPUT_";
  }
  var filter = $("<div>").addClass(classes.container).append(str.replace(/_INPUT_/, input));
  filter.find("label").attr("for", "dt-search-" + __searchCounter);
  filter.find("input").attr("id", "dt-search-" + __searchCounter);
  __searchCounter++;
  var searchFn = function(event) {
    var val = this.value;
    if (previousSearch.return && event.key !== "Enter") {
      return;
    }
    if (val != previousSearch.search) {
      _fnProcessingRun(settings, opts.processing, function() {
        previousSearch.search = val;
        _fnFilterComplete(settings, previousSearch);
        settings._iDisplayStart = 0;
        _fnDraw(settings);
      });
    }
  };
  var searchDelay = settings.searchDelay !== null ? settings.searchDelay : 0;
  var jqFilter = $("input", filter).val(previousSearch.search).attr("placeholder", opts.placeholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", searchDelay ? DataTable.util.debounce(searchFn, searchDelay) : searchFn).on("mouseup.DT", function(e) {
    setTimeout(function() {
      searchFn.call(jqFilter[0], e);
    }, 10);
  }).on("keypress.DT", function(e) {
    if (e.keyCode == 13) {
      return false;
    }
  }).attr("aria-controls", tableId);
  $(settings.nTable).on("search.dt.DT", function(ev, s) {
    if (settings === s && jqFilter[0] !== document.activeElement) {
      jqFilter.val(typeof previousSearch.search !== "function" ? previousSearch.search : "");
    }
  });
  return filter;
}, "f");
DataTable.feature.register("paging", function(settings, opts) {
  if (!settings.oFeatures.bPaginate) {
    return null;
  }
  opts = $.extend({
    buttons: DataTable.ext.pager.numbers_length,
    type: settings.sPaginationType,
    boundaryNumbers: true,
    firstLast: true,
    previousNext: true,
    numbers: true
  }, opts);
  var host = $("<div/>").addClass(settings.oClasses.paging.container + (opts.type ? " paging_" + opts.type : "")).append($("<nav>").attr("aria-label", "pagination").addClass(settings.oClasses.paging.nav));
  var draw = function() {
    _pagingDraw(settings, host.children(), opts);
  };
  settings.aoDrawCallback.push(draw);
  $(settings.nTable).on("column-sizing.dt.DT", draw);
  return host;
}, "p");
function _pagingDynamic(opts) {
  var out = [];
  if (opts.numbers) {
    out.push("numbers");
  }
  if (opts.previousNext) {
    out.unshift("previous");
    out.push("next");
  }
  if (opts.firstLast) {
    out.unshift("first");
    out.push("last");
  }
  return out;
}
function _pagingDraw(settings, host, opts) {
  if (!settings._bInitComplete) {
    return;
  }
  var plugin = opts.type ? DataTable.ext.pager[opts.type] : _pagingDynamic, aria = settings.oLanguage.oAria.paginate || {}, start = settings._iDisplayStart, len = settings._iDisplayLength, visRecords = settings.fnRecordsDisplay(), all = len === -1, page = all ? 0 : Math.ceil(start / len), pages = all ? 1 : Math.ceil(visRecords / len), buttons = [], buttonEls = [], buttonsNested = plugin(opts).map(function(val) {
    return val === "numbers" ? _pagingNumbers(page, pages, opts.buttons, opts.boundaryNumbers) : val;
  });
  buttons = buttons.concat.apply(buttons, buttonsNested);
  for (var i2 = 0;i2 < buttons.length; i2++) {
    var button = buttons[i2];
    var btnInfo = _pagingButtonInfo(settings, button, page, pages);
    var btn = _fnRenderer(settings, "pagingButton")(settings, button, btnInfo.display, btnInfo.active, btnInfo.disabled);
    var ariaLabel = typeof button === "string" ? aria[button] : aria.number ? aria.number + (button + 1) : null;
    $(btn.clicker).attr({
      "aria-controls": settings.sTableId,
      "aria-disabled": btnInfo.disabled ? "true" : null,
      "aria-current": btnInfo.active ? "page" : null,
      "aria-label": ariaLabel,
      "data-dt-idx": button,
      tabIndex: btnInfo.disabled ? -1 : settings.iTabIndex && btn.clicker[0].nodeName.toLowerCase() !== "span" ? settings.iTabIndex : null
    });
    if (typeof button !== "number") {
      $(btn.clicker).addClass(button);
    }
    _fnBindAction(btn.clicker, { action: button }, function(e) {
      e.preventDefault();
      _fnPageChange(settings, e.data.action, true);
    });
    buttonEls.push(btn.display);
  }
  var wrapped = _fnRenderer(settings, "pagingContainer")(settings, buttonEls);
  var activeEl = host.find(document.activeElement).data("dt-idx");
  host.empty().append(wrapped);
  if (activeEl !== undefined) {
    host.find("[data-dt-idx=" + activeEl + "]").trigger("focus");
  }
  if (buttonEls.length) {
    var outerHeight = $(buttonEls[0]).outerHeight();
    if (opts.buttons > 1 && outerHeight > 0 && $(host).height() >= outerHeight * 2 - 10) {
      _pagingDraw(settings, host, $.extend({}, opts, { buttons: opts.buttons - 2 }));
    }
  }
}
function _pagingButtonInfo(settings, button, page, pages) {
  var lang = settings.oLanguage.oPaginate;
  var o = {
    display: "",
    active: false,
    disabled: false
  };
  switch (button) {
    case "ellipsis":
      o.display = "&#x2026;";
      break;
    case "first":
      o.display = lang.sFirst;
      if (page === 0) {
        o.disabled = true;
      }
      break;
    case "previous":
      o.display = lang.sPrevious;
      if (page === 0) {
        o.disabled = true;
      }
      break;
    case "next":
      o.display = lang.sNext;
      if (pages === 0 || page === pages - 1) {
        o.disabled = true;
      }
      break;
    case "last":
      o.display = lang.sLast;
      if (pages === 0 || page === pages - 1) {
        o.disabled = true;
      }
      break;
    default:
      if (typeof button === "number") {
        o.display = settings.fnFormatNumber(button + 1);
        if (page === button) {
          o.active = true;
        }
      }
      break;
  }
  return o;
}
function _pagingNumbers(page, pages, buttons, addFirstLast) {
  var numbers = [], half = Math.floor(buttons / 2), before = addFirstLast ? 2 : 1, after = addFirstLast ? 1 : 0;
  if (pages <= buttons) {
    numbers = _range(0, pages);
  } else if (buttons === 1) {
    numbers = [page];
  } else if (buttons === 3) {
    if (page <= 1) {
      numbers = [0, 1, "ellipsis"];
    } else if (page >= pages - 2) {
      numbers = _range(pages - 2, pages);
      numbers.unshift("ellipsis");
    } else {
      numbers = ["ellipsis", page, "ellipsis"];
    }
  } else if (page <= half) {
    numbers = _range(0, buttons - before);
    numbers.push("ellipsis");
    if (addFirstLast) {
      numbers.push(pages - 1);
    }
  } else if (page >= pages - 1 - half) {
    numbers = _range(pages - (buttons - before), pages);
    numbers.unshift("ellipsis");
    if (addFirstLast) {
      numbers.unshift(0);
    }
  } else {
    numbers = _range(page - half + before, page + half - after);
    numbers.push("ellipsis");
    numbers.unshift("ellipsis");
    if (addFirstLast) {
      numbers.push(pages - 1);
      numbers.unshift(0);
    }
  }
  return numbers;
}
var __lengthCounter = 0;
DataTable.feature.register("pageLength", function(settings, opts) {
  var features = settings.oFeatures;
  if (!features.bPaginate || !features.bLengthChange) {
    return null;
  }
  opts = $.extend({
    menu: settings.aLengthMenu,
    text: settings.oLanguage.sLengthMenu
  }, opts);
  var classes = settings.oClasses.length, tableId = settings.sTableId, menu = opts.menu, lengths = [], language = [], i2;
  if (Array.isArray(menu[0])) {
    lengths = menu[0];
    language = menu[1];
  } else {
    for (i2 = 0;i2 < menu.length; i2++) {
      if ($.isPlainObject(menu[i2])) {
        lengths.push(menu[i2].value);
        language.push(menu[i2].label);
      } else {
        lengths.push(menu[i2]);
        language.push(menu[i2]);
      }
    }
  }
  var end = opts.text.match(/_MENU_$/);
  var start = opts.text.match(/^_MENU_/);
  var removed = opts.text.replace(/_MENU_/, "");
  var str = "<label>" + opts.text + "</label>";
  if (start) {
    str = "_MENU_<label>" + removed + "</label>";
  } else if (end) {
    str = "<label>" + removed + "</label>_MENU_";
  }
  var tmpId = "tmp-" + +new Date;
  var div = $("<div/>").addClass(classes.container).append(str.replace("_MENU_", '<span id="' + tmpId + '"></span>'));
  var textNodes = [];
  Array.prototype.slice.call(div.find("label")[0].childNodes).forEach(function(el) {
    if (el.nodeType === Node.TEXT_NODE) {
      textNodes.push({
        el,
        text: el.textContent
      });
    }
  });
  var updateEntries = function(len) {
    textNodes.forEach(function(node) {
      node.el.textContent = _fnMacros(settings, node.text, len);
    });
  };
  var select = $("<select/>", {
    "aria-controls": tableId,
    class: classes.select
  });
  for (i2 = 0;i2 < lengths.length; i2++) {
    var label = settings.api.i18n("lengthLabels." + lengths[i2], null);
    if (label === null) {
      label = typeof language[i2] === "number" ? settings.fnFormatNumber(language[i2]) : language[i2];
    }
    select[0][i2] = new Option(label, lengths[i2]);
  }
  div.find("label").attr("for", "dt-length-" + __lengthCounter);
  select.attr("id", "dt-length-" + __lengthCounter);
  __lengthCounter++;
  div.find("#" + tmpId).replaceWith(select);
  $("select", div).val(settings._iDisplayLength).on("change.DT", function() {
    _fnLengthChange(settings, $(this).val());
    _fnDraw(settings);
  });
  $(settings.nTable).on("length.dt.DT", function(e, s, len) {
    if (settings === s) {
      $("select", div).val(len);
      updateEntries(len);
    }
  });
  updateEntries(settings._iDisplayLength);
  return div;
}, "l");
$.fn.dataTable = DataTable;
DataTable.$ = $;
$.fn.dataTableSettings = DataTable.settings;
$.fn.dataTableExt = DataTable.ext;
$.fn.DataTable = function(opts) {
  return $(this).dataTable(opts).api();
};
$.each(DataTable, function(prop, val) {
  $.fn.DataTable[prop] = val;
});
var dataTables_default = DataTable;

// node_modules/datatables.net-dt/js/dataTables.dataTables.mjs
/*! DataTables styling integration
 * © SpryMedia Ltd - datatables.net/license
 */
var dataTables_dataTables_default = dataTables_default;

// static/interact.js
dataTables_dataTables_default(window, jquery_module_default);
jquery_module_default(document).ready(function() {
  jquery_module_default(".dataframe").DataTable({
    responsive: true,
    filter: true,
    paging: true,
    info: false,
    pageLength: 10,
    autoFill: true,
    language: {
      search: " ",
      searchPlaceholder: "search...",
      lengthMenu: "Data preview",
      paginate: {
        first: "First",
        last: "Last",
        next: "Next",
        previous: "Previous"
      }
    }
  });
});
jquery_module_default(document).ready(function() {
  if (!jquery_module_default.fn.DataTable.isDataTable("#rankingTable")) {
    jquery_module_default("#rankingTable").DataTable({
      pageLength: 5,
      lengthChange: false,
      info: false,
      dom: "frtp",
      language: {
        search: "",
        searchPlaceholder: "Search for a student..."
      }
    });
  }
});

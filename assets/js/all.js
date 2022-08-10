"use strict";

$(document).ready(function () {
  $(".list-item").click(function (e) {
    e.preventDefault();
    $('.list-item').toggleClass("active");
  });
});
"use strict";

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v5.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.bootstrap = factory());
})(void 0, function () {
  'use strict';
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  var _KEY_TO_DIRECTION;

  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000;
  var TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  var toType = function toType(obj) {
    if (obj === null || obj === undefined) {
      return "".concat(obj);
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var getUID = function getUID(prefix) {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));

    return prefix;
  };

  var getSelector = function getSelector(element) {
    var selector = element.getAttribute('data-bs-target');

    if (!selector || selector === '#') {
      var hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273

      if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
        return null;
      } // Just in case some CMS puts out a full URL with the anchor appended


      if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
        hrefAttr = "#".concat(hrefAttr.split('#')[1]);
      }

      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
    }

    return selector;
  };

  var getSelectorFromElement = function getSelectorFromElement(element) {
    var selector = getSelector(element);

    if (selector) {
      return document.querySelector(selector) ? selector : null;
    }

    return null;
  };

  var getElementFromSelector = function getElementFromSelector(element) {
    var selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
  };

  var getTransitionDurationFromElement = function getTransitionDurationFromElement(element) {
    if (!element) {
      return 0;
    } // Get transition-duration of the element


    var _window$getComputedSt = window.getComputedStyle(element),
        transitionDuration = _window$getComputedSt.transitionDuration,
        transitionDelay = _window$getComputedSt.transitionDelay;

    var floatTransitionDuration = Number.parseFloat(transitionDuration);
    var floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    } // If multiple durations are defined, take the first


    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };

  var triggerTransitionEnd = function triggerTransitionEnd(element) {
    element.dispatchEvent(new Event(TRANSITION_END));
  };

  var isElement$1 = function isElement$1(obj) {
    if (!obj || _typeof(obj) !== 'object') {
      return false;
    }

    if (typeof obj.jquery !== 'undefined') {
      obj = obj[0];
    }

    return typeof obj.nodeType !== 'undefined';
  };

  var getElement = function getElement(obj) {
    if (isElement$1(obj)) {
      // it's a jQuery object or a node element
      return obj.jquery ? obj[0] : obj;
    }

    if (typeof obj === 'string' && obj.length > 0) {
      return document.querySelector(obj);
    }

    return null;
  };

  var typeCheckConfig = function typeCheckConfig(componentName, config, configTypes) {
    Object.keys(configTypes).forEach(function (property) {
      var expectedTypes = configTypes[property];
      var value = config[property];
      var valueType = value && isElement$1(value) ? 'element' : toType(value);

      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError("".concat(componentName.toUpperCase(), ": Option \"").concat(property, "\" provided type \"").concat(valueType, "\" but expected type \"").concat(expectedTypes, "\"."));
      }
    });
  };

  var isVisible = function isVisible(element) {
    if (!isElement$1(element) || element.getClientRects().length === 0) {
      return false;
    }

    return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
  };

  var isDisabled = function isDisabled(element) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }

    if (element.classList.contains('disabled')) {
      return true;
    }

    if (typeof element.disabled !== 'undefined') {
      return element.disabled;
    }

    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
  };

  var findShadowRoot = function findShadowRoot(element) {
    if (!document.documentElement.attachShadow) {
      return null;
    } // Can find the shadow root otherwise it'll return the document


    if (typeof element.getRootNode === 'function') {
      var root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }

    if (element instanceof ShadowRoot) {
      return element;
    } // when we don't find a shadow root


    if (!element.parentNode) {
      return null;
    }

    return findShadowRoot(element.parentNode);
  };

  var noop = function noop() {};
  /**
   * Trick to restart an element's animation
   *
   * @param {HTMLElement} element
   * @return void
   *
   * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
   */


  var reflow = function reflow(element) {
    // eslint-disable-next-line no-unused-expressions
    element.offsetHeight;
  };

  var getjQuery = function getjQuery() {
    var _window = window,
        jQuery = _window.jQuery;

    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }

    return null;
  };

  var DOMContentLoadedCallbacks = [];

  var onDOMContentLoaded = function onDOMContentLoaded(callback) {
    if (document.readyState === 'loading') {
      // add listener on the first call when the document is in loading state
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener('DOMContentLoaded', function () {
          DOMContentLoadedCallbacks.forEach(function (callback) {
            return callback();
          });
        });
      }

      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };

  var isRTL = function isRTL() {
    return document.documentElement.dir === 'rtl';
  };

  var defineJQueryPlugin = function defineJQueryPlugin(plugin) {
    onDOMContentLoaded(function () {
      var $ = getjQuery();
      /* istanbul ignore if */

      if ($) {
        var name = plugin.NAME;
        var JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;

        $.fn[name].noConflict = function () {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };

  var execute = function execute(callback) {
    if (typeof callback === 'function') {
      callback();
    }
  };

  var executeAfterTransition = function executeAfterTransition(callback, transitionElement) {
    var waitForTransition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    if (!waitForTransition) {
      execute(callback);
      return;
    }

    var durationPadding = 5;
    var emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    var called = false;

    var handler = function handler(_ref5) {
      var target = _ref5.target;

      if (target !== transitionElement) {
        return;
      }

      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };

    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(function () {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };
  /**
   * Return the previous/next element of a list.
   *
   * @param {array} list    The list of elements
   * @param activeElement   The active element
   * @param shouldGetNext   Choose to get next or previous element
   * @param isCycleAllowed
   * @return {Element|elem} The proper element
   */


  var getNextActiveElement = function getNextActiveElement(list, activeElement, shouldGetNext, isCycleAllowed) {
    var index = list.indexOf(activeElement); // if the element does not exist in the list return an element depending on the direction and if cycle is allowed

    if (index === -1) {
      return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
    }

    var listLength = list.length;
    index += shouldGetNext ? 1 : -1;

    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }

    return list[Math.max(0, Math.min(index, listLength - 1))];
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  var stripNameRegex = /\..*/;
  var stripUidRegex = /::\d+$/;
  var eventRegistry = {}; // Events storage

  var uidEvent = 1;
  var customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  var customEventsRegex = /^(mouseenter|mouseleave)/i;
  var nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
  /**
   * ------------------------------------------------------------------------
   * Private methods
   * ------------------------------------------------------------------------
   */

  function getUidEvent(element, uid) {
    return uid && "".concat(uid, "::").concat(uidEvent++) || element.uidEvent || uidEvent++;
  }

  function getEvent(element) {
    var uid = getUidEvent(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }

  function bootstrapHandler(element, fn) {
    return function handler(event) {
      event.delegateTarget = element;

      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }

      return fn.apply(element, [event]);
    };
  }

  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      var domElements = element.querySelectorAll(selector);

      for (var target = event.target; target && target !== this; target = target.parentNode) {
        for (var i = domElements.length; i--;) {
          if (domElements[i] === target) {
            event.delegateTarget = target;

            if (handler.oneOff) {
              EventHandler.off(element, event.type, selector, fn);
            }

            return fn.apply(target, [event]);
          }
        }
      } // To please ESLint


      return null;
    };
  }

  function findHandler(events, handler) {
    var delegationSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var uidEventList = Object.keys(events);

    for (var i = 0, len = uidEventList.length; i < len; i++) {
      var event = events[uidEventList[i]];

      if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
        return event;
      }
    }

    return null;
  }

  function normalizeParams(originalTypeEvent, handler, delegationFn) {
    var delegation = typeof handler === 'string';
    var originalHandler = delegation ? delegationFn : handler;
    var typeEvent = getTypeEvent(originalTypeEvent);
    var isNative = nativeEvents.has(typeEvent);

    if (!isNative) {
      typeEvent = originalTypeEvent;
    }

    return [delegation, originalHandler, typeEvent];
  }

  function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    if (!handler) {
      handler = delegationFn;
      delegationFn = null;
    } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does


    if (customEventsRegex.test(originalTypeEvent)) {
      var wrapFn = function wrapFn(fn) {
        return function (event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn.call(this, event);
          }
        };
      };

      if (delegationFn) {
        delegationFn = wrapFn(delegationFn);
      } else {
        handler = wrapFn(handler);
      }
    }

    var _normalizeParams = normalizeParams(originalTypeEvent, handler, delegationFn),
        _normalizeParams2 = _slicedToArray(_normalizeParams, 3),
        delegation = _normalizeParams2[0],
        originalHandler = _normalizeParams2[1],
        typeEvent = _normalizeParams2[2];

    var events = getEvent(element);
    var handlers = events[typeEvent] || (events[typeEvent] = {});
    var previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

    if (previousFn) {
      previousFn.oneOff = previousFn.oneOff && oneOff;
      return;
    }

    var uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
    var fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
    fn.delegationSelector = delegation ? handler : null;
    fn.originalHandler = originalHandler;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, delegation);
  }

  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    var fn = findHandler(events[typeEvent], handler, delegationSelector);

    if (!fn) {
      return;
    }

    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }

  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    var storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(function (handlerKey) {
      if (handlerKey.includes(namespace)) {
        var event = storeElementEvent[handlerKey];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  }

  function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event;
  }

  var EventHandler = {
    on: function on(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, false);
    },
    one: function one(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, true);
    },
    off: function off(element, originalTypeEvent, handler, delegationFn) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }

      var _normalizeParams3 = normalizeParams(originalTypeEvent, handler, delegationFn),
          _normalizeParams4 = _slicedToArray(_normalizeParams3, 3),
          delegation = _normalizeParams4[0],
          originalHandler = _normalizeParams4[1],
          typeEvent = _normalizeParams4[2];

      var inNamespace = typeEvent !== originalTypeEvent;
      var events = getEvent(element);
      var isNamespace = originalTypeEvent.startsWith('.');

      if (typeof originalHandler !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!events || !events[typeEvent]) {
          return;
        }

        removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
        return;
      }

      if (isNamespace) {
        Object.keys(events).forEach(function (elementEvent) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        });
      }

      var storeElementEvent = events[typeEvent] || {};
      Object.keys(storeElementEvent).forEach(function (keyHandlers) {
        var handlerKey = keyHandlers.replace(stripUidRegex, '');

        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          var event = storeElementEvent[keyHandlers];
          removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
        }
      });
    },
    trigger: function trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }

      var $ = getjQuery();
      var typeEvent = getTypeEvent(event);
      var inNamespace = event !== typeEvent;
      var isNative = nativeEvents.has(typeEvent);
      var jQueryEvent;
      var bubbles = true;
      var nativeDispatch = true;
      var defaultPrevented = false;
      var evt = null;

      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }

      if (isNative) {
        evt = document.createEvent('HTMLEvents');
        evt.initEvent(typeEvent, bubbles, true);
      } else {
        evt = new CustomEvent(event, {
          bubbles: bubbles,
          cancelable: true
        });
      } // merge custom information in our event


      if (typeof args !== 'undefined') {
        Object.keys(args).forEach(function (key) {
          Object.defineProperty(evt, key, {
            get: function get() {
              return args[key];
            }
          });
        });
      }

      if (defaultPrevented) {
        evt.preventDefault();
      }

      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }

      if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
        jQueryEvent.preventDefault();
      }

      return evt;
    }
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var elementMap = new Map();
  var Data = {
    set: function set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
      }

      var instanceMap = elementMap.get(element); // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used

      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(instanceMap.keys())[0], "."));
        return;
      }

      instanceMap.set(key, instance);
    },
    get: function get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }

      return null;
    },
    remove: function remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }

      var instanceMap = elementMap.get(element);
      instanceMap["delete"](key); // free up element references if there are no instances left for an element

      if (instanceMap.size === 0) {
        elementMap["delete"](element);
      }
    }
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var VERSION = '5.1.1';

  var BaseComponent = /*#__PURE__*/function () {
    function BaseComponent(element) {
      _classCallCheck(this, BaseComponent);

      element = getElement(element);

      if (!element) {
        return;
      }

      this._element = element;
      Data.set(this._element, this.constructor.DATA_KEY, this);
    }

    _createClass(BaseComponent, [{
      key: "dispose",
      value: function dispose() {
        var _this = this;

        Data.remove(this._element, this.constructor.DATA_KEY);
        EventHandler.off(this._element, this.constructor.EVENT_KEY);
        Object.getOwnPropertyNames(this).forEach(function (propertyName) {
          _this[propertyName] = null;
        });
      }
    }, {
      key: "_queueCallback",
      value: function _queueCallback(callback, element) {
        var isAnimated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        executeAfterTransition(callback, element, isAnimated);
      }
      /** Static */

    }], [{
      key: "getInstance",
      value: function getInstance(element) {
        return Data.get(getElement(element), this.DATA_KEY);
      }
    }, {
      key: "getOrCreateInstance",
      value: function getOrCreateInstance(element) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.getInstance(element) || new this(element, _typeof(config) === 'object' ? config : null);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "NAME",
      get: function get() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.".concat(this.NAME);
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".".concat(this.DATA_KEY);
      }
    }]);

    return BaseComponent;
  }();
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): util/component-functions.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  var enableDismissTrigger = function enableDismissTrigger(component) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'hide';
    var clickEvent = "click.dismiss".concat(component.EVENT_KEY);
    var name = component.NAME;
    EventHandler.on(document, clickEvent, "[data-bs-dismiss=\"".concat(name, "\"]"), function (event) {
      if (['A', 'AREA'].includes(this.tagName)) {
        event.preventDefault();
      }

      if (isDisabled(this)) {
        return;
      }

      var target = getElementFromSelector(this) || this.closest(".".concat(name));
      var instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method

      instance[method]();
    });
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$d = 'alert';
  var DATA_KEY$c = 'bs.alert';
  var EVENT_KEY$c = ".".concat(DATA_KEY$c);
  var EVENT_CLOSE = "close".concat(EVENT_KEY$c);
  var EVENT_CLOSED = "closed".concat(EVENT_KEY$c);
  var CLASS_NAME_FADE$5 = 'fade';
  var CLASS_NAME_SHOW$8 = 'show';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = /*#__PURE__*/function (_BaseComponent) {
    _inherits(Alert, _BaseComponent);

    var _super = _createSuper(Alert);

    function Alert() {
      _classCallCheck(this, Alert);

      return _super.apply(this, arguments);
    }

    _createClass(Alert, [{
      key: "close",
      value: // Public
      function close() {
        var _this2 = this;

        var closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);

        if (closeEvent.defaultPrevented) {
          return;
        }

        this._element.classList.remove(CLASS_NAME_SHOW$8);

        var isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);

        this._queueCallback(function () {
          return _this2._destroyElement();
        }, this._element, isAnimated);
      } // Private

    }, {
      key: "_destroyElement",
      value: function _destroyElement() {
        this._element.remove();

        EventHandler.trigger(this._element, EVENT_CLOSED);
        this.dispose();
      } // Static

    }], [{
      key: "NAME",
      get: // Getters
      function get() {
        return NAME$d;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Alert.getOrCreateInstance(this);

          if (typeof config !== 'string') {
            return;
          }

          if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config](this);
        });
      }
    }]);

    return Alert;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  enableDismissTrigger(Alert, 'close');
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Alert to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Alert);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$c = 'button';
  var DATA_KEY$b = 'bs.button';
  var EVENT_KEY$b = ".".concat(DATA_KEY$b);
  var DATA_API_KEY$7 = '.data-api';
  var CLASS_NAME_ACTIVE$3 = 'active';
  var SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
  var EVENT_CLICK_DATA_API$6 = "click".concat(EVENT_KEY$b).concat(DATA_API_KEY$7);
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = /*#__PURE__*/function (_BaseComponent2) {
    _inherits(Button, _BaseComponent2);

    var _super2 = _createSuper(Button);

    function Button() {
      _classCallCheck(this, Button);

      return _super2.apply(this, arguments);
    }

    _createClass(Button, [{
      key: "toggle",
      value: // Public
      function toggle() {
        // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
        this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
      } // Static

    }], [{
      key: "NAME",
      get: // Getters
      function get() {
        return NAME$c;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Button.getOrCreateInstance(this);

          if (config === 'toggle') {
            data[config]();
          }
        });
      }
    }]);

    return Button;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, function (event) {
    event.preventDefault();
    var button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    var data = Button.getOrCreateInstance(button);
    data.toggle();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Button to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Button);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  function normalizeData(val) {
    if (val === 'true') {
      return true;
    }

    if (val === 'false') {
      return false;
    }

    if (val === Number(val).toString()) {
      return Number(val);
    }

    if (val === '' || val === 'null') {
      return null;
    }

    return val;
  }

  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, function (chr) {
      return "-".concat(chr.toLowerCase());
    });
  }

  var Manipulator = {
    setDataAttribute: function setDataAttribute(element, key, value) {
      element.setAttribute("data-bs-".concat(normalizeDataKey(key)), value);
    },
    removeDataAttribute: function removeDataAttribute(element, key) {
      element.removeAttribute("data-bs-".concat(normalizeDataKey(key)));
    },
    getDataAttributes: function getDataAttributes(element) {
      if (!element) {
        return {};
      }

      var attributes = {};
      Object.keys(element.dataset).filter(function (key) {
        return key.startsWith('bs');
      }).forEach(function (key) {
        var pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      });
      return attributes;
    },
    getDataAttribute: function getDataAttribute(element, key) {
      return normalizeData(element.getAttribute("data-bs-".concat(normalizeDataKey(key))));
    },
    offset: function offset(element) {
      var rect = element.getBoundingClientRect();
      return {
        top: rect.top + window.pageYOffset,
        left: rect.left + window.pageXOffset
      };
    },
    position: function position(element) {
      return {
        top: element.offsetTop,
        left: element.offsetLeft
      };
    }
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  var NODE_TEXT = 3;
  var SelectorEngine = {
    find: function find(selector) {
      var _ref6;

      var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return (_ref6 = []).concat.apply(_ref6, _toConsumableArray(Element.prototype.querySelectorAll.call(element, selector)));
    },
    findOne: function findOne(selector) {
      var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return Element.prototype.querySelector.call(element, selector);
    },
    children: function children(element, selector) {
      var _ref7;

      return (_ref7 = []).concat.apply(_ref7, _toConsumableArray(element.children)).filter(function (child) {
        return child.matches(selector);
      });
    },
    parents: function parents(element, selector) {
      var parents = [];
      var ancestor = element.parentNode;

      while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
        if (ancestor.matches(selector)) {
          parents.push(ancestor);
        }

        ancestor = ancestor.parentNode;
      }

      return parents;
    },
    prev: function prev(element, selector) {
      var previous = element.previousElementSibling;

      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }

        previous = previous.previousElementSibling;
      }

      return [];
    },
    next: function next(element, selector) {
      var next = element.nextElementSibling;

      while (next) {
        if (next.matches(selector)) {
          return [next];
        }

        next = next.nextElementSibling;
      }

      return [];
    },
    focusableChildren: function focusableChildren(element) {
      var focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(function (selector) {
        return "".concat(selector, ":not([tabindex^=\"-\"])");
      }).join(', ');
      return this.find(focusables, element).filter(function (el) {
        return !isDisabled(el) && isVisible(el);
      });
    }
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$b = 'carousel';
  var DATA_KEY$a = 'bs.carousel';
  var EVENT_KEY$a = ".".concat(DATA_KEY$a);
  var DATA_API_KEY$6 = '.data-api';
  var ARROW_LEFT_KEY = 'ArrowLeft';
  var ARROW_RIGHT_KEY = 'ArrowRight';
  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default$a = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType$a = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var ORDER_NEXT = 'next';
  var ORDER_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var KEY_TO_DIRECTION = (_KEY_TO_DIRECTION = {}, _defineProperty(_KEY_TO_DIRECTION, ARROW_LEFT_KEY, DIRECTION_RIGHT), _defineProperty(_KEY_TO_DIRECTION, ARROW_RIGHT_KEY, DIRECTION_LEFT), _KEY_TO_DIRECTION);
  var EVENT_SLIDE = "slide".concat(EVENT_KEY$a);
  var EVENT_SLID = "slid".concat(EVENT_KEY$a);
  var EVENT_KEYDOWN = "keydown".concat(EVENT_KEY$a);
  var EVENT_MOUSEENTER = "mouseenter".concat(EVENT_KEY$a);
  var EVENT_MOUSELEAVE = "mouseleave".concat(EVENT_KEY$a);
  var EVENT_TOUCHSTART = "touchstart".concat(EVENT_KEY$a);
  var EVENT_TOUCHMOVE = "touchmove".concat(EVENT_KEY$a);
  var EVENT_TOUCHEND = "touchend".concat(EVENT_KEY$a);
  var EVENT_POINTERDOWN = "pointerdown".concat(EVENT_KEY$a);
  var EVENT_POINTERUP = "pointerup".concat(EVENT_KEY$a);
  var EVENT_DRAG_START = "dragstart".concat(EVENT_KEY$a);
  var EVENT_LOAD_DATA_API$2 = "load".concat(EVENT_KEY$a).concat(DATA_API_KEY$6);
  var EVENT_CLICK_DATA_API$5 = "click".concat(EVENT_KEY$a).concat(DATA_API_KEY$6);
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE$2 = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_END = 'carousel-item-end';
  var CLASS_NAME_START = 'carousel-item-start';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var SELECTOR_ACTIVE$1 = '.active';
  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_INDICATOR = '[data-bs-target]';
  var SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  var POINTER_TYPE_TOUCH = 'touch';
  var POINTER_TYPE_PEN = 'pen';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = /*#__PURE__*/function (_BaseComponent3) {
    _inherits(Carousel, _BaseComponent3);

    var _super3 = _createSuper(Carousel);

    function Carousel(element, config) {
      var _this3;

      _classCallCheck(this, Carousel);

      _this3 = _super3.call(this, element);
      _this3._items = null;
      _this3._interval = null;
      _this3._activeElement = null;
      _this3._isPaused = false;
      _this3._isSliding = false;
      _this3.touchTimeout = null;
      _this3.touchStartX = 0;
      _this3.touchDeltaX = 0;
      _this3._config = _this3._getConfig(config);
      _this3._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, _this3._element);
      _this3._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      _this3._pointerEvent = Boolean(window.PointerEvent);

      _this3._addEventListeners();

      return _this3;
    } // Getters


    _createClass(Carousel, [{
      key: "next",
      value: // Public
      function next() {
        this._slide(ORDER_NEXT);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible
        if (!document.hidden && isVisible(this._element)) {
          this.next();
        }
      }
    }, {
      key: "prev",
      value: function prev() {
        this._slide(ORDER_PREV);
      }
    }, {
      key: "pause",
      value: function pause(event) {
        if (!event) {
          this._isPaused = true;
        }

        if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
          triggerTransitionEnd(this._element);
          this.cycle(true);
        }

        clearInterval(this._interval);
        this._interval = null;
      }
    }, {
      key: "cycle",
      value: function cycle(event) {
        if (!event) {
          this._isPaused = false;
        }

        if (this._interval) {
          clearInterval(this._interval);
          this._interval = null;
        }

        if (this._config && this._config.interval && !this._isPaused) {
          this._updateInterval();

          this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
        }
      }
    }, {
      key: "to",
      value: function to(index) {
        var _this4 = this;

        this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

        var activeIndex = this._getItemIndex(this._activeElement);

        if (index > this._items.length - 1 || index < 0) {
          return;
        }

        if (this._isSliding) {
          EventHandler.one(this._element, EVENT_SLID, function () {
            return _this4.to(index);
          });
          return;
        }

        if (activeIndex === index) {
          this.pause();
          this.cycle();
          return;
        }

        var order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

        this._slide(order, this._items[index]);
      } // Private

    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread(_objectSpread({}, Default$a), Manipulator.getDataAttributes(this._element)), _typeof(config) === 'object' ? config : {});
        typeCheckConfig(NAME$b, config, DefaultType$a);
        return config;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var absDeltax = Math.abs(this.touchDeltaX);

        if (absDeltax <= SWIPE_THRESHOLD) {
          return;
        }

        var direction = absDeltax / this.touchDeltaX;
        this.touchDeltaX = 0;

        if (!direction) {
          return;
        }

        this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this5 = this;

        if (this._config.keyboard) {
          EventHandler.on(this._element, EVENT_KEYDOWN, function (event) {
            return _this5._keydown(event);
          });
        }

        if (this._config.pause === 'hover') {
          EventHandler.on(this._element, EVENT_MOUSEENTER, function (event) {
            return _this5.pause(event);
          });
          EventHandler.on(this._element, EVENT_MOUSELEAVE, function (event) {
            return _this5.cycle(event);
          });
        }

        if (this._config.touch && this._touchSupported) {
          this._addTouchEventListeners();
        }
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this6 = this;

        var hasPointerPenTouch = function hasPointerPenTouch(event) {
          return _this6._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
        };

        var start = function start(event) {
          if (hasPointerPenTouch(event)) {
            _this6.touchStartX = event.clientX;
          } else if (!_this6._pointerEvent) {
            _this6.touchStartX = event.touches[0].clientX;
          }
        };

        var move = function move(event) {
          // ensure swiping with one touch and not pinching
          _this6.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - _this6.touchStartX;
        };

        var end = function end(event) {
          if (hasPointerPenTouch(event)) {
            _this6.touchDeltaX = event.clientX - _this6.touchStartX;
          }

          _this6._handleSwipe();

          if (_this6._config.pause === 'hover') {
            // If it's a touch-enabled device, mouseenter/leave are fired as
            // part of the mouse compatibility events on first tap - the carousel
            // would stop cycling until user tapped out of it;
            // here, we listen for touchend, explicitly pause the carousel
            // (as if it's the second time we tap on it, mouseenter compat event
            // is NOT fired) and after a timeout (to allow for mouse compatibility
            // events to fire) we explicitly restart cycling
            _this6.pause();

            if (_this6.touchTimeout) {
              clearTimeout(_this6.touchTimeout);
            }

            _this6.touchTimeout = setTimeout(function (event) {
              return _this6.cycle(event);
            }, TOUCHEVENT_COMPAT_WAIT + _this6._config.interval);
          }
        };

        SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(function (itemImg) {
          EventHandler.on(itemImg, EVENT_DRAG_START, function (e) {
            return e.preventDefault();
          });
        });

        if (this._pointerEvent) {
          EventHandler.on(this._element, EVENT_POINTERDOWN, function (event) {
            return start(event);
          });
          EventHandler.on(this._element, EVENT_POINTERUP, function (event) {
            return end(event);
          });

          this._element.classList.add(CLASS_NAME_POINTER_EVENT);
        } else {
          EventHandler.on(this._element, EVENT_TOUCHSTART, function (event) {
            return start(event);
          });
          EventHandler.on(this._element, EVENT_TOUCHMOVE, function (event) {
            return move(event);
          });
          EventHandler.on(this._element, EVENT_TOUCHEND, function (event) {
            return end(event);
          });
        }
      }
    }, {
      key: "_keydown",
      value: function _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) {
          return;
        }

        var direction = KEY_TO_DIRECTION[event.key];

        if (direction) {
          event.preventDefault();

          this._slide(direction);
        }
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(element) {
        this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
        return this._items.indexOf(element);
      }
    }, {
      key: "_getItemByOrder",
      value: function _getItemByOrder(order, activeElement) {
        var isNext = order === ORDER_NEXT;
        return getNextActiveElement(this._items, activeElement, isNext, this._config.wrap);
      }
    }, {
      key: "_triggerSlideEvent",
      value: function _triggerSlideEvent(relatedTarget, eventDirectionName) {
        var targetIndex = this._getItemIndex(relatedTarget);

        var fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

        return EventHandler.trigger(this._element, EVENT_SLIDE, {
          relatedTarget: relatedTarget,
          direction: eventDirectionName,
          from: fromIndex,
          to: targetIndex
        });
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(element) {
        if (this._indicatorsElement) {
          var activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE$1, this._indicatorsElement);
          activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
          activeIndicator.removeAttribute('aria-current');
          var indicators = SelectorEngine.find(SELECTOR_INDICATOR, this._indicatorsElement);

          for (var i = 0; i < indicators.length; i++) {
            if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
              indicators[i].classList.add(CLASS_NAME_ACTIVE$2);
              indicators[i].setAttribute('aria-current', 'true');
              break;
            }
          }
        }
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

        if (!element) {
          return;
        }

        var elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);

        if (elementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = elementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }
      }
    }, {
      key: "_slide",
      value: function _slide(directionOrOrder, element) {
        var _this7 = this;

        var order = this._directionToOrder(directionOrOrder);

        var activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

        var activeElementIndex = this._getItemIndex(activeElement);

        var nextElement = element || this._getItemByOrder(order, activeElement);

        var nextElementIndex = this._getItemIndex(nextElement);

        var isCycling = Boolean(this._interval);
        var isNext = order === ORDER_NEXT;
        var directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
        var orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;

        var eventDirectionName = this._orderToDirection(order);

        if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$2)) {
          this._isSliding = false;
          return;
        }

        if (this._isSliding) {
          return;
        }

        var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

        if (slideEvent.defaultPrevented) {
          return;
        }

        if (!activeElement || !nextElement) {
          // Some weirdness is happening, so we bail
          return;
        }

        this._isSliding = true;

        if (isCycling) {
          this.pause();
        }

        this._setActiveIndicatorElement(nextElement);

        this._activeElement = nextElement;

        var triggerSlidEvent = function triggerSlidEvent() {
          EventHandler.trigger(_this7._element, EVENT_SLID, {
            relatedTarget: nextElement,
            direction: eventDirectionName,
            from: activeElementIndex,
            to: nextElementIndex
          });
        };

        if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
          nextElement.classList.add(orderClassName);
          reflow(nextElement);
          activeElement.classList.add(directionalClassName);
          nextElement.classList.add(directionalClassName);

          var completeCallBack = function completeCallBack() {
            nextElement.classList.remove(directionalClassName, orderClassName);
            nextElement.classList.add(CLASS_NAME_ACTIVE$2);
            activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
            _this7._isSliding = false;
            setTimeout(triggerSlidEvent, 0);
          };

          this._queueCallback(completeCallBack, activeElement, true);
        } else {
          activeElement.classList.remove(CLASS_NAME_ACTIVE$2);
          nextElement.classList.add(CLASS_NAME_ACTIVE$2);
          this._isSliding = false;
          triggerSlidEvent();
        }

        if (isCycling) {
          this.cycle();
        }
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(direction) {
        if (![DIRECTION_RIGHT, DIRECTION_LEFT].includes(direction)) {
          return direction;
        }

        if (isRTL()) {
          return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
        }

        return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(order) {
        if (![ORDER_NEXT, ORDER_PREV].includes(order)) {
          return order;
        }

        if (isRTL()) {
          return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
        }

        return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
      } // Static

    }], [{
      key: "Default",
      get: function get() {
        return Default$a;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$b;
      }
    }, {
      key: "carouselInterface",
      value: function carouselInterface(element, config) {
        var data = Carousel.getOrCreateInstance(element, config);
        var _config = data._config;

        if (_typeof(config) === 'object') {
          _config = _objectSpread(_objectSpread({}, _config), config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"".concat(action, "\""));
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          Carousel.carouselInterface(this, config);
        });
      }
    }, {
      key: "dataApiClickHandler",
      value: function dataApiClickHandler(event) {
        var target = getElementFromSelector(this);

        if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
          return;
        }

        var config = _objectSpread(_objectSpread({}, Manipulator.getDataAttributes(target)), Manipulator.getDataAttributes(this));

        var slideIndex = this.getAttribute('data-bs-slide-to');

        if (slideIndex) {
          config.interval = false;
        }

        Carousel.carouselInterface(target, config);

        if (slideIndex) {
          Carousel.getInstance(target).to(slideIndex);
        }

        event.preventDefault();
      }
    }]);

    return Carousel;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
  EventHandler.on(window, EVENT_LOAD_DATA_API$2, function () {
    var carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

    for (var i = 0, len = carousels.length; i < len; i++) {
      Carousel.carouselInterface(carousels[i], Carousel.getInstance(carousels[i]));
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Carousel to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Carousel);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$a = 'collapse';
  var DATA_KEY$9 = 'bs.collapse';
  var EVENT_KEY$9 = ".".concat(DATA_KEY$9);
  var DATA_API_KEY$5 = '.data-api';
  var Default$9 = {
    toggle: true,
    parent: null
  };
  var DefaultType$9 = {
    toggle: 'boolean',
    parent: '(null|element)'
  };
  var EVENT_SHOW$5 = "show".concat(EVENT_KEY$9);
  var EVENT_SHOWN$5 = "shown".concat(EVENT_KEY$9);
  var EVENT_HIDE$5 = "hide".concat(EVENT_KEY$9);
  var EVENT_HIDDEN$5 = "hidden".concat(EVENT_KEY$9);
  var EVENT_CLICK_DATA_API$4 = "click".concat(EVENT_KEY$9).concat(DATA_API_KEY$5);
  var CLASS_NAME_SHOW$7 = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
  var WIDTH = 'width';
  var HEIGHT = 'height';
  var SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
  var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = /*#__PURE__*/function (_BaseComponent4) {
    _inherits(Collapse, _BaseComponent4);

    var _super4 = _createSuper(Collapse);

    function Collapse(element, config) {
      var _this8;

      _classCallCheck(this, Collapse);

      _this8 = _super4.call(this, element);
      _this8._isTransitioning = false;
      _this8._config = _this8._getConfig(config);
      _this8._triggerArray = [];
      var toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = getSelectorFromElement(elem);
        var filterElement = SelectorEngine.find(selector).filter(function (foundElem) {
          return foundElem === _this8._element;
        });

        if (selector !== null && filterElement.length) {
          _this8._selector = selector;

          _this8._triggerArray.push(elem);
        }
      }

      _this8._initializeChildren();

      if (!_this8._config.parent) {
        _this8._addAriaAndCollapsedClass(_this8._triggerArray, _this8._isShown());
      }

      if (_this8._config.toggle) {
        _this8.toggle();
      }

      return _this8;
    } // Getters


    _createClass(Collapse, [{
      key: "toggle",
      value: // Public
      function toggle() {
        if (this._isShown()) {
          this.hide();
        } else {
          this.show();
        }
      }
    }, {
      key: "show",
      value: function show() {
        var _this9 = this;

        if (this._isTransitioning || this._isShown()) {
          return;
        }

        var actives = [];
        var activesData;

        if (this._config.parent) {
          var children = SelectorEngine.find(".".concat(CLASS_NAME_COLLAPSE, " .").concat(CLASS_NAME_COLLAPSE), this._config.parent);
          actives = SelectorEngine.find(SELECTOR_ACTIVES, this._config.parent).filter(function (elem) {
            return !children.includes(elem);
          }); // remove children if greater depth
        }

        var container = SelectorEngine.findOne(this._selector);

        if (actives.length) {
          var tempActiveData = actives.find(function (elem) {
            return container !== elem;
          });
          activesData = tempActiveData ? Collapse.getInstance(tempActiveData) : null;

          if (activesData && activesData._isTransitioning) {
            return;
          }
        }

        var startEvent = EventHandler.trigger(this._element, EVENT_SHOW$5);

        if (startEvent.defaultPrevented) {
          return;
        }

        actives.forEach(function (elemActive) {
          if (container !== elemActive) {
            Collapse.getOrCreateInstance(elemActive, {
              toggle: false
            }).hide();
          }

          if (!activesData) {
            Data.set(elemActive, DATA_KEY$9, null);
          }
        });

        var dimension = this._getDimension();

        this._element.classList.remove(CLASS_NAME_COLLAPSE);

        this._element.classList.add(CLASS_NAME_COLLAPSING);

        this._element.style[dimension] = 0;

        this._addAriaAndCollapsedClass(this._triggerArray, true);

        this._isTransitioning = true;

        var complete = function complete() {
          _this9._isTransitioning = false;

          _this9._element.classList.remove(CLASS_NAME_COLLAPSING);

          _this9._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

          _this9._element.style[dimension] = '';
          EventHandler.trigger(_this9._element, EVENT_SHOWN$5);
        };

        var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        var scrollSize = "scroll".concat(capitalizedDimension);

        this._queueCallback(complete, this._element, true);

        this._element.style[dimension] = "".concat(this._element[scrollSize], "px");
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this10 = this;

        if (this._isTransitioning || !this._isShown()) {
          return;
        }

        var startEvent = EventHandler.trigger(this._element, EVENT_HIDE$5);

        if (startEvent.defaultPrevented) {
          return;
        }

        var dimension = this._getDimension();

        this._element.style[dimension] = "".concat(this._element.getBoundingClientRect()[dimension], "px");
        reflow(this._element);

        this._element.classList.add(CLASS_NAME_COLLAPSING);

        this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

        var triggerArrayLength = this._triggerArray.length;

        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var elem = getElementFromSelector(trigger);

          if (elem && !this._isShown(elem)) {
            this._addAriaAndCollapsedClass([trigger], false);
          }
        }

        this._isTransitioning = true;

        var complete = function complete() {
          _this10._isTransitioning = false;

          _this10._element.classList.remove(CLASS_NAME_COLLAPSING);

          _this10._element.classList.add(CLASS_NAME_COLLAPSE);

          EventHandler.trigger(_this10._element, EVENT_HIDDEN$5);
        };

        this._element.style[dimension] = '';

        this._queueCallback(complete, this._element, true);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return element.classList.contains(CLASS_NAME_SHOW$7);
      } // Private

    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread(_objectSpread({}, Default$9), Manipulator.getDataAttributes(this._element)), config);
        config.toggle = Boolean(config.toggle); // Coerce string values

        config.parent = getElement(config.parent);
        typeCheckConfig(NAME$a, config, DefaultType$9);
        return config;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
      }
    }, {
      key: "_initializeChildren",
      value: function _initializeChildren() {
        var _this11 = this;

        if (!this._config.parent) {
          return;
        }

        var children = SelectorEngine.find(".".concat(CLASS_NAME_COLLAPSE, " .").concat(CLASS_NAME_COLLAPSE), this._config.parent);
        SelectorEngine.find(SELECTOR_DATA_TOGGLE$4, this._config.parent).filter(function (elem) {
          return !children.includes(elem);
        }).forEach(function (element) {
          var selected = getElementFromSelector(element);

          if (selected) {
            _this11._addAriaAndCollapsedClass([element], _this11._isShown(selected));
          }
        });
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(triggerArray, isOpen) {
        if (!triggerArray.length) {
          return;
        }

        triggerArray.forEach(function (elem) {
          if (isOpen) {
            elem.classList.remove(CLASS_NAME_COLLAPSED);
          } else {
            elem.classList.add(CLASS_NAME_COLLAPSED);
          }

          elem.setAttribute('aria-expanded', isOpen);
        });
      } // Static

    }], [{
      key: "Default",
      get: function get() {
        return Default$9;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$a;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var _config = {};

          if (typeof config === 'string' && /show|hide/.test(config)) {
            _config.toggle = false;
          }

          var data = Collapse.getOrCreateInstance(this, _config);

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config]();
          }
        });
      }
    }]);

    return Collapse;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
      event.preventDefault();
    }

    var selector = getSelectorFromElement(this);
    var selectorElements = SelectorEngine.find(selector);
    selectorElements.forEach(function (element) {
      Collapse.getOrCreateInstance(element, {
        toggle: false
      }).toggle();
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Collapse to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Collapse);
  var top = 'top';
  var bottom = 'bottom';
  var right = 'right';
  var left = 'left';
  var auto = 'auto';
  var basePlacements = [top, bottom, right, left];
  var start = 'start';
  var end = 'end';
  var clippingParents = 'clippingParents';
  var viewport = 'viewport';
  var popper = 'popper';
  var reference = 'reference';
  var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []); // modifiers that need to read the DOM

  var beforeRead = 'beforeRead';
  var read = 'read';
  var afterRead = 'afterRead'; // pure-logic modifiers

  var beforeMain = 'beforeMain';
  var main = 'main';
  var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

  var beforeWrite = 'beforeWrite';
  var write = 'write';
  var afterWrite = 'afterWrite';
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
  }

  function getWindow(node) {
    if (node == null) {
      return window;
    }

    if (node.toString() !== '[object Window]') {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }

    return node;
  }

  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }

  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }

  function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') {
      return false;
    }

    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  } // and applies them to the HTMLElements such as popper and arrow


  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function (name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name]; // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe[cannot-write]


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (name) {
        var value = attributes[name];

        if (value === false) {
          element.removeAttribute(name);
        } else {
          element.setAttribute(name, value === true ? '' : value);
        }
      });
    });
  }

  function effect$2(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;

    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }

    return function () {
      Object.keys(state.elements).forEach(function (name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

        var style = styleProperties.reduce(function (style, property) {
          style[property] = '';
          return style;
        }, {}); // arrow is optional + virtual elements

        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }

        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function (attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  } // eslint-disable-next-line import/no-unused-modules


  var applyStyles$1 = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect$2,
    requires: ['computeStyles']
  };

  function getBasePlacement(placement) {
    return placement.split('-')[0];
  }

  var round$1 = Math.round;

  function getBoundingClientRect(element, includeScale) {
    if (includeScale === void 0) {
      includeScale = false;
    }

    var rect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;

    if (isHTMLElement(element) && includeScale) {
      var offsetHeight = element.offsetHeight;
      var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
      // Fallback to 1 in case both values are `0`

      if (offsetWidth > 0) {
        scaleX = rect.width / offsetWidth || 1;
      }

      if (offsetHeight > 0) {
        scaleY = rect.height / offsetHeight || 1;
      }
    }

    return {
      width: round$1(rect.width / scaleX),
      height: round$1(rect.height / scaleY),
      top: round$1(rect.top / scaleY),
      right: round$1(rect.right / scaleX),
      bottom: round$1(rect.bottom / scaleY),
      left: round$1(rect.left / scaleX),
      x: round$1(rect.left / scaleX),
      y: round$1(rect.top / scaleY)
    };
  } // means it doesn't take into account transforms.


  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223

    var width = element.offsetWidth;
    var height = element.offsetHeight;

    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }

    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }

    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width: width,
      height: height
    };
  }

  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

    if (parent.contains(child)) {
      return true;
    } // then fallback to custom implementation with Shadow DOM support
    else if (rootNode && isShadowRoot(rootNode)) {
        var next = child;

        do {
          if (next && parent.isSameNode(next)) {
            return true;
          } // $FlowFixMe[prop-missing]: need a better way to handle this...


          next = next.parentNode || next.host;
        } while (next);
      } // Give up, the result is false


    return false;
  }

  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
  }

  function isTableElement(element) {
    return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
  }

  function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
    element.document) || window.document).documentElement;
  }

  function getParentNode(element) {
    if (getNodeName(element) === 'html') {
      return element;
    }

    return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || ( // DOM Element detected
      isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element) // fallback

    );
  }

  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle$1(element).position === 'fixed') {
      return null;
    }

    return element.offsetParent;
  } // `.offsetParent` reports `null` for fixed elements, while absolute elements
  // return the containing block


  function getContainingBlock(element) {
    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
    var isIE = navigator.userAgent.indexOf('Trident') !== -1;

    if (isIE && isHTMLElement(element)) {
      // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
      var elementCss = getComputedStyle$1(element);

      if (elementCss.position === 'fixed') {
        return null;
      }
    }

    var currentNode = getParentNode(element);

    while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
      // create a containing block.
      // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

      if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }

    return null;
  } // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.


  function getOffsetParent(element) {
    var window = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);

    while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
      offsetParent = getTrueOffsetParent(offsetParent);
    }

    if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
      return window;
    }

    return offsetParent || getContainingBlock(element) || window;
  }

  function getMainAxisFromPlacement(placement) {
    return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
  }

  var max = Math.max;
  var min = Math.min;
  var round = Math.round;

  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
  }

  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  function expandToHashMap(value, keys) {
    return keys.reduce(function (hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  };

  function arrow(_ref) {
    var _state$modifiersData$;

    var state = _ref.state,
        name = _ref.name,
        options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';

    if (!arrowElement || !popperOffsets) {
      return;
    }

    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === 'y' ? top : left;
    var maxProp = axis === 'y' ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds

    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = within(min, center, max); // Prevents breaking syntax highlighting...

    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
  }

  function effect$1(_ref2) {
    var state = _ref2.state,
        options = _ref2.options;
    var _options$element = options.element,
        arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

    if (arrowElement == null) {
      return;
    } // CSS selector


    if (typeof arrowElement === 'string') {
      arrowElement = state.elements.popper.querySelector(arrowElement);

      if (!arrowElement) {
        return;
      }
    }

    if (!contains(state.elements.popper, arrowElement)) {
      return;
    }

    state.elements.arrow = arrowElement;
  } // eslint-disable-next-line import/no-unused-modules


  var arrow$1 = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect$1,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
  };

  function getVariation(placement) {
    return placement.split('-')[1];
  }

  var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
  }; // Round the offsets to the nearest suitable subpixel based on the DPR.
  // Zooming can change the DPR, but it seems to report a value that will
  // cleanly divide the values into the appropriate subpixels.

  function roundOffsetsByDPR(_ref) {
    var x = _ref.x,
        y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(round(x * dpr) / dpr) || 0,
      y: round(round(y * dpr) / dpr) || 0
    };
  }

  function mapToStyles(_ref2) {
    var _Object$assign2;

    var popper = _ref2.popper,
        popperRect = _ref2.popperRect,
        placement = _ref2.placement,
        variation = _ref2.variation,
        offsets = _ref2.offsets,
        position = _ref2.position,
        gpuAcceleration = _ref2.gpuAcceleration,
        adaptive = _ref2.adaptive,
        roundOffsets = _ref2.roundOffsets;

    var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
        _ref3$x = _ref3.x,
        x = _ref3$x === void 0 ? 0 : _ref3$x,
        _ref3$y = _ref3.y,
        y = _ref3$y === void 0 ? 0 : _ref3$y;

    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = left;
    var sideY = top;
    var win = window;

    if (adaptive) {
      var offsetParent = getOffsetParent(popper);
      var heightProp = 'clientHeight';
      var widthProp = 'clientWidth';

      if (offsetParent === getWindow(popper)) {
        offsetParent = getDocumentElement(popper);

        if (getComputedStyle$1(offsetParent).position !== 'static' && position === 'absolute') {
          heightProp = 'scrollHeight';
          widthProp = 'scrollWidth';
        }
      } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


      offsetParent = offsetParent;

      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom; // $FlowFixMe[prop-missing]

        y -= offsetParent[heightProp] - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }

      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right; // $FlowFixMe[prop-missing]

        x -= offsetParent[widthProp] - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }

    var commonStyles = Object.assign({
      position: position
    }, adaptive && unsetSides);

    if (gpuAcceleration) {
      var _Object$assign;

      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }

    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
  }

  function computeStyles(_ref4) {
    var state = _ref4.state,
        options = _ref4.options;
    var _options$gpuAccelerat = options.gpuAcceleration,
        gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
        _options$adaptive = options.adaptive,
        adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
        _options$roundOffsets = options.roundOffsets,
        roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration: gpuAcceleration
    };

    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
      })));
    }

    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
      })));
    }

    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-placement': state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var computeStyles$1 = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {}
  };
  var passive = {
    passive: true
  };

  function effect(_ref) {
    var state = _ref.state,
        instance = _ref.instance,
        options = _ref.options;
    var _options$scroll = options.scroll,
        scroll = _options$scroll === void 0 ? true : _options$scroll,
        _options$resize = options.resize,
        resize = _options$resize === void 0 ? true : _options$resize;
    var window = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.addEventListener('resize', instance.update, passive);
    }

    return function () {
      if (scroll) {
        scrollParents.forEach(function (scrollParent) {
          scrollParent.removeEventListener('scroll', instance.update, passive);
        });
      }

      if (resize) {
        window.removeEventListener('resize', instance.update, passive);
      }
    };
  } // eslint-disable-next-line import/no-unused-modules


  var eventListeners = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: effect,
    data: {}
  };
  var hash$1 = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };

  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash$1[matched];
    });
  }

  var hash = {
    start: 'end',
    end: 'start'
  };

  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function (matched) {
      return hash[matched];
    });
  }

  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft: scrollLeft,
      scrollTop: scrollTop
    };
  }

  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  function getViewportRect(element) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
    // can be obscured underneath it.
    // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
    // if it isn't open, so if this isn't available, the popper will be detected
    // to overflow the bottom of the screen too early.

    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
      // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
      // errors due to floating point numbers, so we need to check precision.
      // Safari returns a number <= 0, usually < -1 when pinch-zoomed
      // Feature detection fails in mobile emulation mode in Chrome.
      // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
      // 0.001
      // Fallback here: "Not Safari" userAgent

      if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }

    return {
      width: width,
      height: height,
      x: x + getWindowScrollBarX(element),
      y: y
    };
  } // of the `<html>` and `<body>` rect bounds if horizontally scrollable


  function getDocumentRect(element) {
    var _element$ownerDocumen;

    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;

    if (getComputedStyle$1(body || html).direction === 'rtl') {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }

    return {
      width: width,
      height: height,
      x: x,
      y: y
    };
  }

  function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = getComputedStyle$1(element),
        overflow = _getComputedStyle.overflow,
        overflowX = _getComputedStyle.overflowX,
        overflowY = _getComputedStyle.overflowY;

    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  function getScrollParent(node) {
    if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
      // $FlowFixMe[incompatible-return]: assume body is always available
      return node.ownerDocument.body;
    }

    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }

    return getScrollParent(getParentNode(node));
  }
  /*
  given a DOM element, return the list of all scroll parents, up the list of ancesors
  until we get to the top window object. This list is what we attach scroll listeners
  to, because if any of these parent elements scroll, we'll need to re-calculate the
  reference element's position.
  */


  function listScrollParents(element, list) {
    var _element$ownerDocumen;

    if (list === void 0) {
      list = [];
    }

    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)));
  }

  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  function getInnerBoundingClientRect(element) {
    var rect = getBoundingClientRect(element);
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }

  function getClientRectFromMixedType(element, clippingParent) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  } // A "clipping parent" is an overflowable container with the characteristic of
  // clipping (or hiding) overflowing elements with a position different from
  // `initial`


  function getClippingParents(element) {
    var clippingParents = listScrollParents(getParentNode(element));
    var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

    if (!isElement(clipperElement)) {
      return [];
    } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


    return clippingParents.filter(function (clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
    });
  } // Gets the maximum area that the element is visible in due to any number of
  // clipping parents


  function getClippingRect(element, boundary, rootBoundary) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  function computeOffsets(_ref) {
    var reference = _ref.reference,
        element = _ref.element,
        placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;

    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference.y - element.height
        };
        break;

      case bottom:
        offsets = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;

      case right:
        offsets = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;

      case left:
        offsets = {
          x: reference.x - element.width,
          y: commonY
        };
        break;

      default:
        offsets = {
          x: reference.x,
          y: reference.y
        };
    }

    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

    if (mainAxis != null) {
      var len = mainAxis === 'y' ? 'height' : 'width';

      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
          break;

        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
          break;
      }
    }

    return offsets;
  }

  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$placement = _options.placement,
        placement = _options$placement === void 0 ? state.placement : _options$placement,
        _options$boundary = _options.boundary,
        boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
        _options$rootBoundary = _options.rootBoundary,
        rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
        _options$elementConte = _options.elementContext,
        elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
        _options$altBoundary = _options.altBoundary,
        altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
        _options$padding = _options.padding,
        padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: 'absolute',
      placement: placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect

    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

    if (elementContext === popper && offsetData) {
      var offset = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function (key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
        overflowOffsets[key] += offset[axis] * multiply;
      });
    }

    return overflowOffsets;
  }

  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        placement = _options.placement,
        boundary = _options.boundary,
        rootBoundary = _options.rootBoundary,
        padding = _options.padding,
        flipVariations = _options.flipVariations,
        _options$allowedAutoP = _options.allowedAutoPlacements,
        allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
      return getVariation(placement) === variation;
    }) : basePlacements;
    var allowedPlacements = placements$1.filter(function (placement) {
      return allowedAutoPlacements.indexOf(placement) >= 0;
    });

    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1;
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


    var overflows = allowedPlacements.reduce(function (acc, placement) {
      acc[placement] = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding
      })[getBasePlacement(placement)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function (a, b) {
      return overflows[a] - overflows[b];
    });
  }

  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }

    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }

  function flip(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;

    if (state.modifiersData[name]._skip) {
      return;
    }

    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
        specifiedFallbackPlacements = options.fallbackPlacements,
        padding = options.padding,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        _options$flipVariatio = options.flipVariations,
        flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
        allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
      return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        flipVariations: flipVariations,
        allowedAutoPlacements: allowedAutoPlacements
      }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];

    for (var i = 0; i < placements.length; i++) {
      var placement = placements[i];

      var _basePlacement = getBasePlacement(placement);

      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? 'width' : 'height';
      var overflow = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        altBoundary: altBoundary,
        padding: padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }

      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];

      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }

      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }

      if (checks.every(function (check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }

      checksMap.set(placement, checks);
    }

    if (makeFallbackChecks) {
      // `2` may be desired in some cases – research later
      var numberOfChecks = flipVariations ? 3 : 1;

      var _loop = function _loop(_i) {
        var fittingPlacement = placements.find(function (placement) {
          var checks = checksMap.get(placement);

          if (checks) {
            return checks.slice(0, _i).every(function (check) {
              return check;
            });
          }
        });

        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };

      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);

        if (_ret === "break") break;
      }
    }

    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  } // eslint-disable-next-line import/no-unused-modules


  var flip$1 = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: ['offset'],
    data: {
      _skip: false
    }
  };

  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }

    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }

  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function (side) {
      return overflow[side] >= 0;
    });
  }

  function hide(_ref) {
    var state = _ref.state,
        name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: 'reference'
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets: referenceClippingOffsets,
      popperEscapeOffsets: popperEscapeOffsets,
      isReferenceHidden: isReferenceHidden,
      hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-reference-hidden': isReferenceHidden,
      'data-popper-escaped': hasPopperEscaped
    });
  } // eslint-disable-next-line import/no-unused-modules


  var hide$1 = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: hide
  };

  function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

    var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
      placement: placement
    })) : offset,
        skidding = _ref[0],
        distance = _ref[1];

    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }

  function offset(_ref2) {
    var state = _ref2.state,
        options = _ref2.options,
        name = _ref2.name;
    var _options$offset = options.offset,
        offset = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function (acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement],
        x = _data$state$placement.x,
        y = _data$state$placement.y;

    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var offset$1 = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: offset
  };

  function popperOffsets(_ref) {
    var state = _ref.state,
        name = _ref.name; // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step

    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: 'absolute',
      placement: state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var popperOffsets$1 = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {}
  };

  function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }

  function preventOverflow(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;
    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        padding = options.padding,
        _options$tether = options.tether,
        tether = _options$tether === void 0 ? true : _options$tether,
        _options$tetherOffset = options.tetherOffset,
        tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      altBoundary: altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var data = {
      x: 0,
      y: 0
    };

    if (!popperOffsets) {
      return;
    }

    if (checkMainAxis || checkAltAxis) {
      var mainSide = mainAxis === 'y' ? top : left;
      var altSide = mainAxis === 'y' ? bottom : right;
      var len = mainAxis === 'y' ? 'height' : 'width';
      var offset = popperOffsets[mainAxis];
      var min$1 = popperOffsets[mainAxis] + overflow[mainSide];
      var max$1 = popperOffsets[mainAxis] - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
      // outside the reference bounds

      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
      // to include its full size in the calculation. If the reference is small
      // and near the edge of a boundary, the popper can overflow even if the
      // reference is not overflowing as well (e.g. virtual elements with no
      // width or height)

      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
      var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

      if (checkMainAxis) {
        var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
      }

      if (checkAltAxis) {
        var _mainSide = mainAxis === 'x' ? top : left;

        var _altSide = mainAxis === 'x' ? bottom : right;

        var _offset = popperOffsets[altAxis];

        var _min = _offset + overflow[_mainSide];

        var _max = _offset - overflow[_altSide];

        var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);

        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
      }
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var preventOverflow$1 = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: ['offset']
  };

  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = rect.width / element.offsetWidth || 1;
    var scaleY = rect.height / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  } // Returns the composite rect of an element relative to its offsetParent.
  // Composite means it takes into account transforms as well as layout.


  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }

    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };

    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }

      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }

    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function (modifier) {
      map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively

    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function (dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);

          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }

    modifiers.forEach(function (modifier) {
      if (!visited.has(modifier.name)) {
        // check for visited object
        sort(modifier);
      }
    });
    return result;
  }

  function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase

    return modifierPhases.reduce(function (acc, phase) {
      return acc.concat(orderedModifiers.filter(function (modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  function debounce(fn) {
    var pending;
    return function () {
      if (!pending) {
        pending = new Promise(function (resolve) {
          Promise.resolve().then(function () {
            pending = undefined;
            resolve(fn());
          });
        });
      }

      return pending;
    };
  }

  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function (merged, current) {
      var existing = merged[current.name];
      merged[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged;
    }, {}); // IE11 does not support Object.values

    return Object.keys(merged).map(function (key) {
      return merged[key];
    });
  }

  var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
  };

  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return !args.some(function (element) {
      return !(element && typeof element.getBoundingClientRect === 'function');
    });
  }

  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }

    var _generatorOptions = generatorOptions,
        _generatorOptions$def = _generatorOptions.defaultModifiers,
        defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
        _generatorOptions$def2 = _generatorOptions.defaultOptions,
        defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
      if (options === void 0) {
        options = defaultOptions;
      }

      var state = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference,
          popper: popper
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state: state,
        setOptions: function setOptions(setOptionsAction) {
          var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options);
          state.scrollParents = {
            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
            popper: listScrollParents(popper)
          }; // Orders the modifiers based on their dependencies and `phase`
          // properties

          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

          state.orderedModifiers = orderedModifiers.filter(function (m) {
            return m.enabled;
          }); // Validate the provided modifiers so that the consumer will get warned

          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }

          var _state$elements = state.elements,
              reference = _state$elements.reference,
              popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
          // anymore

          if (!areValidElements(reference, popper)) {
            return;
          } // Store the reference and popper rects to be read by modifiers


          state.rects = {
            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
            popper: getLayoutRect(popper)
          }; // Modifiers have the ability to reset the current update cycle. The
          // most common use case for this is the `flip` modifier changing the
          // placement, which then needs to re-run all the modifiers, because the
          // logic was previously ran for the previous placement and is therefore
          // stale/incorrect

          state.reset = false;
          state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
          // is filled with the initial data specified by the modifier. This means
          // it doesn't persist and is fresh on each update.
          // To ensure persistent data, use `${name}#persistent`

          state.orderedModifiers.forEach(function (modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });

          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }

            var _state$orderedModifie = state.orderedModifiers[index],
                fn = _state$orderedModifie.fn,
                _state$orderedModifie2 = _state$orderedModifie.options,
                _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                name = _state$orderedModifie.name;

            if (typeof fn === 'function') {
              state = fn({
                state: state,
                options: _options,
                name: name,
                instance: instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function () {
          return new Promise(function (resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };

      if (!areValidElements(reference, popper)) {
        return instance;
      }

      instance.setOptions(options).then(function (state) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state);
        }
      }); // Modifiers have the ability to execute arbitrary code before the first
      // update cycle runs. They will be executed in the same order as the update
      // cycle. This is useful when a modifier adds some persistent data that
      // other modifiers need to use, but the modifier is run after the dependent
      // one.

      function runModifierEffects() {
        state.orderedModifiers.forEach(function (_ref3) {
          var name = _ref3.name,
              _ref3$options = _ref3.options,
              options = _ref3$options === void 0 ? {} : _ref3$options,
              effect = _ref3.effect;

          if (typeof effect === 'function') {
            var cleanupFn = effect({
              state: state,
              name: name,
              instance: instance,
              options: options
            });

            var noopFn = function noopFn() {};

            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }

      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function (fn) {
          return fn();
        });
        effectCleanupFns = [];
      }

      return instance;
    };
  }

  var createPopper$2 = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules

  var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
  var createPopper$1 = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers$1
  }); // eslint-disable-next-line import/no-unused-modules

  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
  var createPopper = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers
  }); // eslint-disable-next-line import/no-unused-modules

  var Popper = /*#__PURE__*/Object.freeze({
    __proto__: null,
    popperGenerator: popperGenerator,
    detectOverflow: detectOverflow,
    createPopperBase: createPopper$2,
    createPopper: createPopper,
    createPopperLite: createPopper$1,
    top: top,
    bottom: bottom,
    right: right,
    left: left,
    auto: auto,
    basePlacements: basePlacements,
    start: start,
    end: end,
    clippingParents: clippingParents,
    viewport: viewport,
    popper: popper,
    reference: reference,
    variationPlacements: variationPlacements,
    placements: placements,
    beforeRead: beforeRead,
    read: read,
    afterRead: afterRead,
    beforeMain: beforeMain,
    main: main,
    afterMain: afterMain,
    beforeWrite: beforeWrite,
    write: write,
    afterWrite: afterWrite,
    modifierPhases: modifierPhases,
    applyStyles: applyStyles$1,
    arrow: arrow$1,
    computeStyles: computeStyles$1,
    eventListeners: eventListeners,
    flip: flip$1,
    hide: hide$1,
    offset: offset$1,
    popperOffsets: popperOffsets$1,
    preventOverflow: preventOverflow$1
  });
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$9 = 'dropdown';
  var DATA_KEY$8 = 'bs.dropdown';
  var EVENT_KEY$8 = ".".concat(DATA_KEY$8);
  var DATA_API_KEY$4 = '.data-api';
  var ESCAPE_KEY$2 = 'Escape';
  var SPACE_KEY = 'Space';
  var TAB_KEY$1 = 'Tab';
  var ARROW_UP_KEY = 'ArrowUp';
  var ARROW_DOWN_KEY = 'ArrowDown';
  var RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

  var REGEXP_KEYDOWN = new RegExp("".concat(ARROW_UP_KEY, "|").concat(ARROW_DOWN_KEY, "|").concat(ESCAPE_KEY$2));
  var EVENT_HIDE$4 = "hide".concat(EVENT_KEY$8);
  var EVENT_HIDDEN$4 = "hidden".concat(EVENT_KEY$8);
  var EVENT_SHOW$4 = "show".concat(EVENT_KEY$8);
  var EVENT_SHOWN$4 = "shown".concat(EVENT_KEY$8);
  var EVENT_CLICK_DATA_API$3 = "click".concat(EVENT_KEY$8).concat(DATA_API_KEY$4);
  var EVENT_KEYDOWN_DATA_API = "keydown".concat(EVENT_KEY$8).concat(DATA_API_KEY$4);
  var EVENT_KEYUP_DATA_API = "keyup".concat(EVENT_KEY$8).concat(DATA_API_KEY$4);
  var CLASS_NAME_SHOW$6 = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPEND = 'dropend';
  var CLASS_NAME_DROPSTART = 'dropstart';
  var CLASS_NAME_NAVBAR = 'navbar';
  var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
  var PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
  var PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
  var PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
  var PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
  var PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
  var Default$8 = {
    offset: [0, 2],
    boundary: 'clippingParents',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null,
    autoClose: true
  };
  var DefaultType$8 = {
    offset: '(array|string|function)',
    boundary: '(string|element)',
    reference: '(string|element|object)',
    display: 'string',
    popperConfig: '(null|object|function)',
    autoClose: '(boolean|string)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = /*#__PURE__*/function (_BaseComponent5) {
    _inherits(Dropdown, _BaseComponent5);

    var _super5 = _createSuper(Dropdown);

    function Dropdown(element, config) {
      var _this12;

      _classCallCheck(this, Dropdown);

      _this12 = _super5.call(this, element);
      _this12._popper = null;
      _this12._config = _this12._getConfig(config);
      _this12._menu = _this12._getMenuElement();
      _this12._inNavbar = _this12._detectNavbar();
      return _this12;
    } // Getters


    _createClass(Dropdown, [{
      key: "toggle",
      value: // Public
      function toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        if (isDisabled(this._element) || this._isShown(this._menu)) {
          return;
        }

        var relatedTarget = {
          relatedTarget: this._element
        };
        var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, relatedTarget);

        if (showEvent.defaultPrevented) {
          return;
        }

        var parent = Dropdown.getParentFromElement(this._element); // Totally disable Popper for Dropdowns in Navbar

        if (this._inNavbar) {
          Manipulator.setDataAttribute(this._menu, 'popper', 'none');
        } else {
          this._createPopper(parent);
        } // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


        if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
          var _ref8;

          (_ref8 = []).concat.apply(_ref8, _toConsumableArray(document.body.children)).forEach(function (elem) {
            return EventHandler.on(elem, 'mouseover', noop);
          });
        }

        this._element.focus();

        this._element.setAttribute('aria-expanded', true);

        this._menu.classList.add(CLASS_NAME_SHOW$6);

        this._element.classList.add(CLASS_NAME_SHOW$6);

        EventHandler.trigger(this._element, EVENT_SHOWN$4, relatedTarget);
      }
    }, {
      key: "hide",
      value: function hide() {
        if (isDisabled(this._element) || !this._isShown(this._menu)) {
          return;
        }

        var relatedTarget = {
          relatedTarget: this._element
        };

        this._completeHide(relatedTarget);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        if (this._popper) {
          this._popper.destroy();
        }

        _get(_getPrototypeOf(Dropdown.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar();

        if (this._popper) {
          this._popper.update();
        }
      } // Private

    }, {
      key: "_completeHide",
      value: function _completeHide(relatedTarget) {
        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4, relatedTarget);

        if (hideEvent.defaultPrevented) {
          return;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          var _ref9;

          (_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children)).forEach(function (elem) {
            return EventHandler.off(elem, 'mouseover', noop);
          });
        }

        if (this._popper) {
          this._popper.destroy();
        }

        this._menu.classList.remove(CLASS_NAME_SHOW$6);

        this._element.classList.remove(CLASS_NAME_SHOW$6);

        this._element.setAttribute('aria-expanded', 'false');

        Manipulator.removeDataAttribute(this._menu, 'popper');
        EventHandler.trigger(this._element, EVENT_HIDDEN$4, relatedTarget);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), Manipulator.getDataAttributes(this._element)), config);
        typeCheckConfig(NAME$9, config, this.constructor.DefaultType);

        if (_typeof(config.reference) === 'object' && !isElement$1(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
          // Popper virtual elements require a getBoundingClientRect method
          throw new TypeError("".concat(NAME$9.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
        }

        return config;
      }
    }, {
      key: "_createPopper",
      value: function _createPopper(parent) {
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (isElement$1(this._config.reference)) {
          referenceElement = getElement(this._config.reference);
        } else if (_typeof(this._config.reference) === 'object') {
          referenceElement = this._config.reference;
        }

        var popperConfig = this._getPopperConfig();

        var isDisplayStatic = popperConfig.modifiers.find(function (modifier) {
          return modifier.name === 'applyStyles' && modifier.enabled === false;
        });
        this._popper = createPopper(referenceElement, this._menu, popperConfig);

        if (isDisplayStatic) {
          Manipulator.setDataAttribute(this._menu, 'popper', 'static');
        }
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return element.classList.contains(CLASS_NAME_SHOW$6);
      }
    }, {
      key: "_getMenuElement",
      value: function _getMenuElement() {
        return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var parentDropdown = this._element.parentNode;

        if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
          return PLACEMENT_RIGHT;
        }

        if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
          return PLACEMENT_LEFT;
        } // We need to trim the value because custom properties can also include spaces


        var isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

        if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
          return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
        }

        return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return this._element.closest(".".concat(CLASS_NAME_NAVBAR)) !== null;
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this13 = this;

        var offset = this._config.offset;

        if (typeof offset === 'string') {
          return offset.split(',').map(function (val) {
            return Number.parseInt(val, 10);
          });
        }

        if (typeof offset === 'function') {
          return function (popperData) {
            return offset(popperData, _this13._element);
          };
        }

        return offset;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var defaultBsPopperConfig = {
          placement: this._getPlacement(),
          modifiers: [{
            name: 'preventOverflow',
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: 'offset',
            options: {
              offset: this._getOffset()
            }
          }]
        }; // Disable Popper if we have a static display

        if (this._config.display === 'static') {
          defaultBsPopperConfig.modifiers = [{
            name: 'applyStyles',
            enabled: false
          }];
        }

        return _objectSpread(_objectSpread({}, defaultBsPopperConfig), typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig);
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(_ref10) {
        var key = _ref10.key,
            target = _ref10.target;
        var items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(isVisible);

        if (!items.length) {
          return;
        } // if target isn't included in items (e.g. when expanding the dropdown)
        // allow cycling to get the last item in case key equals ARROW_UP_KEY


        getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
      } // Static

    }], [{
      key: "Default",
      get: function get() {
        return Default$8;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$8;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$9;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Dropdown.getOrCreateInstance(this, config);

          if (typeof config !== 'string') {
            return;
          }

          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config]();
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(event) {
        if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1)) {
          return;
        }

        var toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);

        for (var i = 0, len = toggles.length; i < len; i++) {
          var context = Dropdown.getInstance(toggles[i]);

          if (!context || context._config.autoClose === false) {
            continue;
          }

          if (!context._isShown()) {
            continue;
          }

          var relatedTarget = {
            relatedTarget: context._element
          };

          if (event) {
            var composedPath = event.composedPath();
            var isMenuTarget = composedPath.includes(context._menu);

            if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
              continue;
            } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


            if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
              continue;
            }

            if (event.type === 'click') {
              relatedTarget.clickEvent = event;
            }
          }

          context._completeHide(relatedTarget);
        }
      }
    }, {
      key: "getParentFromElement",
      value: function getParentFromElement(element) {
        return getElementFromSelector(element) || element.parentNode;
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(event) {
        // If not input/textarea:
        //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
        // If input/textarea:
        //  - If space key => not a dropdown command
        //  - If key is other than escape
        //    - If key is not up or down => not a dropdown command
        //    - If trigger inside the menu => not a dropdown command
        if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY$2 && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) {
          return;
        }

        var isActive = this.classList.contains(CLASS_NAME_SHOW$6);

        if (!isActive && event.key === ESCAPE_KEY$2) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();

        if (isDisabled(this)) {
          return;
        }

        var getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0];
        var instance = Dropdown.getOrCreateInstance(getToggleButton);

        if (event.key === ESCAPE_KEY$2) {
          instance.hide();
          return;
        }

        if (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY) {
          if (!isActive) {
            instance.show();
          }

          instance._selectMenuItem(event);

          return;
        }

        if (!isActive || event.key === SPACE_KEY) {
          Dropdown.clearMenus();
        }
      }
    }]);

    return Dropdown;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Dropdown to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Dropdown);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';

  var ScrollBarHelper = /*#__PURE__*/function () {
    function ScrollBarHelper() {
      _classCallCheck(this, ScrollBarHelper);

      this._element = document.body;
    }

    _createClass(ScrollBarHelper, [{
      key: "getWidth",
      value: function getWidth() {
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
        var documentWidth = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - documentWidth);
      }
    }, {
      key: "hide",
      value: function hide() {
        var width = this.getWidth();

        this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width


        this._setElementAttributes(this._element, 'paddingRight', function (calculatedValue) {
          return calculatedValue + width;
        }); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth


        this._setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', function (calculatedValue) {
          return calculatedValue + width;
        });

        this._setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', function (calculatedValue) {
          return calculatedValue - width;
        });
      }
    }, {
      key: "_disableOverFlow",
      value: function _disableOverFlow() {
        this._saveInitialAttribute(this._element, 'overflow');

        this._element.style.overflow = 'hidden';
      }
    }, {
      key: "_setElementAttributes",
      value: function _setElementAttributes(selector, styleProp, callback) {
        var _this14 = this;

        var scrollbarWidth = this.getWidth();

        var manipulationCallBack = function manipulationCallBack(element) {
          if (element !== _this14._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
            return;
          }

          _this14._saveInitialAttribute(element, styleProp);

          var calculatedValue = window.getComputedStyle(element)[styleProp];
          element.style[styleProp] = "".concat(callback(Number.parseFloat(calculatedValue)), "px");
        };

        this._applyManipulationCallback(selector, manipulationCallBack);
      }
    }, {
      key: "reset",
      value: function reset() {
        this._resetElementAttributes(this._element, 'overflow');

        this._resetElementAttributes(this._element, 'paddingRight');

        this._resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');

        this._resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');
      }
    }, {
      key: "_saveInitialAttribute",
      value: function _saveInitialAttribute(element, styleProp) {
        var actualValue = element.style[styleProp];

        if (actualValue) {
          Manipulator.setDataAttribute(element, styleProp, actualValue);
        }
      }
    }, {
      key: "_resetElementAttributes",
      value: function _resetElementAttributes(selector, styleProp) {
        var manipulationCallBack = function manipulationCallBack(element) {
          var value = Manipulator.getDataAttribute(element, styleProp);

          if (typeof value === 'undefined') {
            element.style.removeProperty(styleProp);
          } else {
            Manipulator.removeDataAttribute(element, styleProp);
            element.style[styleProp] = value;
          }
        };

        this._applyManipulationCallback(selector, manipulationCallBack);
      }
    }, {
      key: "_applyManipulationCallback",
      value: function _applyManipulationCallback(selector, callBack) {
        if (isElement$1(selector)) {
          callBack(selector);
        } else {
          SelectorEngine.find(selector, this._element).forEach(callBack);
        }
      }
    }, {
      key: "isOverflowing",
      value: function isOverflowing() {
        return this.getWidth() > 0;
      }
    }]);

    return ScrollBarHelper;
  }();
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */


  var Default$7 = {
    className: 'modal-backdrop',
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    isAnimated: false,
    rootElement: 'body',
    // give the choice to place backdrop under different elements
    clickCallback: null
  };
  var DefaultType$7 = {
    className: 'string',
    isVisible: 'boolean',
    isAnimated: 'boolean',
    rootElement: '(element|string)',
    clickCallback: '(function|null)'
  };
  var NAME$8 = 'backdrop';
  var CLASS_NAME_FADE$4 = 'fade';
  var CLASS_NAME_SHOW$5 = 'show';
  var EVENT_MOUSEDOWN = "mousedown.bs.".concat(NAME$8);

  var Backdrop = /*#__PURE__*/function () {
    function Backdrop(config) {
      _classCallCheck(this, Backdrop);

      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }

    _createClass(Backdrop, [{
      key: "show",
      value: function show(callback) {
        if (!this._config.isVisible) {
          execute(callback);
          return;
        }

        this._append();

        if (this._config.isAnimated) {
          reflow(this._getElement());
        }

        this._getElement().classList.add(CLASS_NAME_SHOW$5);

        this._emulateAnimation(function () {
          execute(callback);
        });
      }
    }, {
      key: "hide",
      value: function hide(callback) {
        var _this15 = this;

        if (!this._config.isVisible) {
          execute(callback);
          return;
        }

        this._getElement().classList.remove(CLASS_NAME_SHOW$5);

        this._emulateAnimation(function () {
          _this15.dispose();

          execute(callback);
        });
      } // Private

    }, {
      key: "_getElement",
      value: function _getElement() {
        if (!this._element) {
          var backdrop = document.createElement('div');
          backdrop.className = this._config.className;

          if (this._config.isAnimated) {
            backdrop.classList.add(CLASS_NAME_FADE$4);
          }

          this._element = backdrop;
        }

        return this._element;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread({}, Default$7), _typeof(config) === 'object' ? config : {}); // use getElement() with the default "body" to get a fresh Element on each instantiation

        config.rootElement = getElement(config.rootElement);
        typeCheckConfig(NAME$8, config, DefaultType$7);
        return config;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this16 = this;

        if (this._isAppended) {
          return;
        }

        this._config.rootElement.append(this._getElement());

        EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, function () {
          execute(_this16._config.clickCallback);
        });
        this._isAppended = true;
      }
    }, {
      key: "dispose",
      value: function dispose() {
        if (!this._isAppended) {
          return;
        }

        EventHandler.off(this._element, EVENT_MOUSEDOWN);

        this._element.remove();

        this._isAppended = false;
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(callback) {
        executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
      }
    }]);

    return Backdrop;
  }();
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): util/focustrap.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */


  var Default$6 = {
    trapElement: null,
    // The element to trap focus inside of
    autofocus: true
  };
  var DefaultType$6 = {
    trapElement: 'element',
    autofocus: 'boolean'
  };
  var NAME$7 = 'focustrap';
  var DATA_KEY$7 = 'bs.focustrap';
  var EVENT_KEY$7 = ".".concat(DATA_KEY$7);
  var EVENT_FOCUSIN$1 = "focusin".concat(EVENT_KEY$7);
  var EVENT_KEYDOWN_TAB = "keydown.tab".concat(EVENT_KEY$7);
  var TAB_KEY = 'Tab';
  var TAB_NAV_FORWARD = 'forward';
  var TAB_NAV_BACKWARD = 'backward';

  var FocusTrap = /*#__PURE__*/function () {
    function FocusTrap(config) {
      _classCallCheck(this, FocusTrap);

      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }

    _createClass(FocusTrap, [{
      key: "activate",
      value: function activate() {
        var _this17 = this;

        var _this$_config = this._config,
            trapElement = _this$_config.trapElement,
            autofocus = _this$_config.autofocus;

        if (this._isActive) {
          return;
        }

        if (autofocus) {
          trapElement.focus();
        }

        EventHandler.off(document, EVENT_KEY$7); // guard against infinite focus loop

        EventHandler.on(document, EVENT_FOCUSIN$1, function (event) {
          return _this17._handleFocusin(event);
        });
        EventHandler.on(document, EVENT_KEYDOWN_TAB, function (event) {
          return _this17._handleKeydown(event);
        });
        this._isActive = true;
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        if (!this._isActive) {
          return;
        }

        this._isActive = false;
        EventHandler.off(document, EVENT_KEY$7);
      } // Private

    }, {
      key: "_handleFocusin",
      value: function _handleFocusin(event) {
        var target = event.target;
        var trapElement = this._config.trapElement;

        if (target === document || target === trapElement || trapElement.contains(target)) {
          return;
        }

        var elements = SelectorEngine.focusableChildren(trapElement);

        if (elements.length === 0) {
          trapElement.focus();
        } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
          elements[elements.length - 1].focus();
        } else {
          elements[0].focus();
        }
      }
    }, {
      key: "_handleKeydown",
      value: function _handleKeydown(event) {
        if (event.key !== TAB_KEY) {
          return;
        }

        this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread({}, Default$6), _typeof(config) === 'object' ? config : {});
        typeCheckConfig(NAME$7, config, DefaultType$6);
        return config;
      }
    }]);

    return FocusTrap;
  }();
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$6 = 'modal';
  var DATA_KEY$6 = 'bs.modal';
  var EVENT_KEY$6 = ".".concat(DATA_KEY$6);
  var DATA_API_KEY$3 = '.data-api';
  var ESCAPE_KEY$1 = 'Escape';
  var Default$5 = {
    backdrop: true,
    keyboard: true,
    focus: true
  };
  var DefaultType$5 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean'
  };
  var EVENT_HIDE$3 = "hide".concat(EVENT_KEY$6);
  var EVENT_HIDE_PREVENTED = "hidePrevented".concat(EVENT_KEY$6);
  var EVENT_HIDDEN$3 = "hidden".concat(EVENT_KEY$6);
  var EVENT_SHOW$3 = "show".concat(EVENT_KEY$6);
  var EVENT_SHOWN$3 = "shown".concat(EVENT_KEY$6);
  var EVENT_RESIZE = "resize".concat(EVENT_KEY$6);
  var EVENT_CLICK_DISMISS = "click.dismiss".concat(EVENT_KEY$6);
  var EVENT_KEYDOWN_DISMISS$1 = "keydown.dismiss".concat(EVENT_KEY$6);
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss".concat(EVENT_KEY$6);
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss".concat(EVENT_KEY$6);
  var EVENT_CLICK_DATA_API$2 = "click".concat(EVENT_KEY$6).concat(DATA_API_KEY$3);
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE$3 = 'fade';
  var CLASS_NAME_SHOW$4 = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var OPEN_SELECTOR$1 = '.modal.show';
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = /*#__PURE__*/function (_BaseComponent6) {
    _inherits(Modal, _BaseComponent6);

    var _super6 = _createSuper(Modal);

    function Modal(element, config) {
      var _this18;

      _classCallCheck(this, Modal);

      _this18 = _super6.call(this, element);
      _this18._config = _this18._getConfig(config);
      _this18._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, _this18._element);
      _this18._backdrop = _this18._initializeBackDrop();
      _this18._focustrap = _this18._initializeFocusTrap();
      _this18._isShown = false;
      _this18._ignoreBackdropClick = false;
      _this18._isTransitioning = false;
      _this18._scrollBar = new ScrollBarHelper();
      return _this18;
    } // Getters


    _createClass(Modal, [{
      key: "toggle",
      value: // Public
      function toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      }
    }, {
      key: "show",
      value: function show(relatedTarget) {
        var _this19 = this;

        if (this._isShown || this._isTransitioning) {
          return;
        }

        var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
          relatedTarget: relatedTarget
        });

        if (showEvent.defaultPrevented) {
          return;
        }

        this._isShown = true;

        if (this._isAnimated()) {
          this._isTransitioning = true;
        }

        this._scrollBar.hide();

        document.body.classList.add(CLASS_NAME_OPEN);

        this._adjustDialog();

        this._setEscapeEvent();

        this._setResizeEvent();

        EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, function () {
          EventHandler.one(_this19._element, EVENT_MOUSEUP_DISMISS, function (event) {
            if (event.target === _this19._element) {
              _this19._ignoreBackdropClick = true;
            }
          });
        });

        this._showBackdrop(function () {
          return _this19._showElement(relatedTarget);
        });
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this20 = this;

        if (!this._isShown || this._isTransitioning) {
          return;
        }

        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);

        if (hideEvent.defaultPrevented) {
          return;
        }

        this._isShown = false;

        var isAnimated = this._isAnimated();

        if (isAnimated) {
          this._isTransitioning = true;
        }

        this._setEscapeEvent();

        this._setResizeEvent();

        this._focustrap.deactivate();

        this._element.classList.remove(CLASS_NAME_SHOW$4);

        EventHandler.off(this._element, EVENT_CLICK_DISMISS);
        EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);

        this._queueCallback(function () {
          return _this20._hideModal();
        }, this._element, isAnimated);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        [window, this._dialog].forEach(function (htmlElement) {
          return EventHandler.off(htmlElement, EVENT_KEY$6);
        });

        this._backdrop.dispose();

        this._focustrap.deactivate();

        _get(_getPrototypeOf(Modal.prototype), "dispose", this).call(this);
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      } // Private

    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new Backdrop({
          isVisible: Boolean(this._config.backdrop),
          // 'static' option will be translated to true, and booleans will keep their value
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new FocusTrap({
          trapElement: this._element
        });
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread(_objectSpread({}, Default$5), Manipulator.getDataAttributes(this._element)), _typeof(config) === 'object' ? config : {});
        typeCheckConfig(NAME$6, config, DefaultType$5);
        return config;
      }
    }, {
      key: "_showElement",
      value: function _showElement(relatedTarget) {
        var _this21 = this;

        var isAnimated = this._isAnimated();

        var modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
          // Don't move modal's DOM position
          document.body.append(this._element);
        }

        this._element.style.display = 'block';

        this._element.removeAttribute('aria-hidden');

        this._element.setAttribute('aria-modal', true);

        this._element.setAttribute('role', 'dialog');

        this._element.scrollTop = 0;

        if (modalBody) {
          modalBody.scrollTop = 0;
        }

        if (isAnimated) {
          reflow(this._element);
        }

        this._element.classList.add(CLASS_NAME_SHOW$4);

        var transitionComplete = function transitionComplete() {
          if (_this21._config.focus) {
            _this21._focustrap.activate();
          }

          _this21._isTransitioning = false;
          EventHandler.trigger(_this21._element, EVENT_SHOWN$3, {
            relatedTarget: relatedTarget
          });
        };

        this._queueCallback(transitionComplete, this._dialog, isAnimated);
      }
    }, {
      key: "_setEscapeEvent",
      value: function _setEscapeEvent() {
        var _this22 = this;

        if (this._isShown) {
          EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, function (event) {
            if (_this22._config.keyboard && event.key === ESCAPE_KEY$1) {
              event.preventDefault();

              _this22.hide();
            } else if (!_this22._config.keyboard && event.key === ESCAPE_KEY$1) {
              _this22._triggerBackdropTransition();
            }
          });
        } else {
          EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS$1);
        }
      }
    }, {
      key: "_setResizeEvent",
      value: function _setResizeEvent() {
        var _this23 = this;

        if (this._isShown) {
          EventHandler.on(window, EVENT_RESIZE, function () {
            return _this23._adjustDialog();
          });
        } else {
          EventHandler.off(window, EVENT_RESIZE);
        }
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this24 = this;

        this._element.style.display = 'none';

        this._element.setAttribute('aria-hidden', true);

        this._element.removeAttribute('aria-modal');

        this._element.removeAttribute('role');

        this._isTransitioning = false;

        this._backdrop.hide(function () {
          document.body.classList.remove(CLASS_NAME_OPEN);

          _this24._resetAdjustments();

          _this24._scrollBar.reset();

          EventHandler.trigger(_this24._element, EVENT_HIDDEN$3);
        });
      }
    }, {
      key: "_showBackdrop",
      value: function _showBackdrop(callback) {
        var _this25 = this;

        EventHandler.on(this._element, EVENT_CLICK_DISMISS, function (event) {
          if (_this25._ignoreBackdropClick) {
            _this25._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (_this25._config.backdrop === true) {
            _this25.hide();
          } else if (_this25._config.backdrop === 'static') {
            _this25._triggerBackdropTransition();
          }
        });

        this._backdrop.show(callback);
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains(CLASS_NAME_FADE$3);
      }
    }, {
      key: "_triggerBackdropTransition",
      value: function _triggerBackdropTransition() {
        var _this26 = this;

        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);

        if (hideEvent.defaultPrevented) {
          return;
        }

        var _this$_element = this._element,
            classList = _this$_element.classList,
            scrollHeight = _this$_element.scrollHeight,
            style = _this$_element.style;
        var isModalOverflowing = scrollHeight > document.documentElement.clientHeight; // return if the following background transition hasn't yet completed

        if (!isModalOverflowing && style.overflowY === 'hidden' || classList.contains(CLASS_NAME_STATIC)) {
          return;
        }

        if (!isModalOverflowing) {
          style.overflowY = 'hidden';
        }

        classList.add(CLASS_NAME_STATIC);

        this._queueCallback(function () {
          classList.remove(CLASS_NAME_STATIC);

          if (!isModalOverflowing) {
            _this26._queueCallback(function () {
              style.overflowY = '';
            }, _this26._dialog);
          }
        }, this._dialog);

        this._element.focus();
      } // ----------------------------------------------------------------------
      // the following methods are used to handle overflowing modals
      // ----------------------------------------------------------------------

    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

        var scrollbarWidth = this._scrollBar.getWidth();

        var isBodyOverflowing = scrollbarWidth > 0;

        if (!isBodyOverflowing && isModalOverflowing && !isRTL() || isBodyOverflowing && !isModalOverflowing && isRTL()) {
          this._element.style.paddingLeft = "".concat(scrollbarWidth, "px");
        }

        if (isBodyOverflowing && !isModalOverflowing && !isRTL() || !isBodyOverflowing && isModalOverflowing && isRTL()) {
          this._element.style.paddingRight = "".concat(scrollbarWidth, "px");
        }
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = '';
        this._element.style.paddingRight = '';
      } // Static

    }], [{
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config, relatedTarget) {
        return this.each(function () {
          var data = Modal.getOrCreateInstance(this, config);

          if (typeof config !== 'string') {
            return;
          }

          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config](relatedTarget);
        });
      }
    }]);

    return Modal;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
    var _this27 = this;

    var target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    EventHandler.one(target, EVENT_SHOW$3, function (showEvent) {
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return;
      }

      EventHandler.one(target, EVENT_HIDDEN$3, function () {
        if (isVisible(_this27)) {
          _this27.focus();
        }
      });
    }); // avoid conflict when clicking moddal toggler while another one is open

    var allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);

    if (allReadyOpen) {
      Modal.getInstance(allReadyOpen).hide();
    }

    var data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  enableDismissTrigger(Modal);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Modal to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Modal);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): offcanvas.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$5 = 'offcanvas';
  var DATA_KEY$5 = 'bs.offcanvas';
  var EVENT_KEY$5 = ".".concat(DATA_KEY$5);
  var DATA_API_KEY$2 = '.data-api';
  var EVENT_LOAD_DATA_API$1 = "load".concat(EVENT_KEY$5).concat(DATA_API_KEY$2);
  var ESCAPE_KEY = 'Escape';
  var Default$4 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  var DefaultType$4 = {
    backdrop: 'boolean',
    keyboard: 'boolean',
    scroll: 'boolean'
  };
  var CLASS_NAME_SHOW$3 = 'show';
  var CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
  var OPEN_SELECTOR = '.offcanvas.show';
  var EVENT_SHOW$2 = "show".concat(EVENT_KEY$5);
  var EVENT_SHOWN$2 = "shown".concat(EVENT_KEY$5);
  var EVENT_HIDE$2 = "hide".concat(EVENT_KEY$5);
  var EVENT_HIDDEN$2 = "hidden".concat(EVENT_KEY$5);
  var EVENT_CLICK_DATA_API$1 = "click".concat(EVENT_KEY$5).concat(DATA_API_KEY$2);
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss".concat(EVENT_KEY$5);
  var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Offcanvas = /*#__PURE__*/function (_BaseComponent7) {
    _inherits(Offcanvas, _BaseComponent7);

    var _super7 = _createSuper(Offcanvas);

    function Offcanvas(element, config) {
      var _this28;

      _classCallCheck(this, Offcanvas);

      _this28 = _super7.call(this, element);
      _this28._config = _this28._getConfig(config);
      _this28._isShown = false;
      _this28._backdrop = _this28._initializeBackDrop();
      _this28._focustrap = _this28._initializeFocusTrap();

      _this28._addEventListeners();

      return _this28;
    } // Getters


    _createClass(Offcanvas, [{
      key: "toggle",
      value: // Public
      function toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      }
    }, {
      key: "show",
      value: function show(relatedTarget) {
        var _this29 = this;

        if (this._isShown) {
          return;
        }

        var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
          relatedTarget: relatedTarget
        });

        if (showEvent.defaultPrevented) {
          return;
        }

        this._isShown = true;
        this._element.style.visibility = 'visible';

        this._backdrop.show();

        if (!this._config.scroll) {
          new ScrollBarHelper().hide();
        }

        this._element.removeAttribute('aria-hidden');

        this._element.setAttribute('aria-modal', true);

        this._element.setAttribute('role', 'dialog');

        this._element.classList.add(CLASS_NAME_SHOW$3);

        var completeCallBack = function completeCallBack() {
          if (!_this29._config.scroll) {
            _this29._focustrap.activate();
          }

          EventHandler.trigger(_this29._element, EVENT_SHOWN$2, {
            relatedTarget: relatedTarget
          });
        };

        this._queueCallback(completeCallBack, this._element, true);
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this30 = this;

        if (!this._isShown) {
          return;
        }

        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);

        if (hideEvent.defaultPrevented) {
          return;
        }

        this._focustrap.deactivate();

        this._element.blur();

        this._isShown = false;

        this._element.classList.remove(CLASS_NAME_SHOW$3);

        this._backdrop.hide();

        var completeCallback = function completeCallback() {
          _this30._element.setAttribute('aria-hidden', true);

          _this30._element.removeAttribute('aria-modal');

          _this30._element.removeAttribute('role');

          _this30._element.style.visibility = 'hidden';

          if (!_this30._config.scroll) {
            new ScrollBarHelper().reset();
          }

          EventHandler.trigger(_this30._element, EVENT_HIDDEN$2);
        };

        this._queueCallback(completeCallback, this._element, true);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose();

        this._focustrap.deactivate();

        _get(_getPrototypeOf(Offcanvas.prototype), "dispose", this).call(this);
      } // Private

    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread(_objectSpread({}, Default$4), Manipulator.getDataAttributes(this._element)), _typeof(config) === 'object' ? config : {});
        typeCheckConfig(NAME$5, config, DefaultType$4);
        return config;
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this31 = this;

        return new Backdrop({
          className: CLASS_NAME_BACKDROP,
          isVisible: this._config.backdrop,
          isAnimated: true,
          rootElement: this._element.parentNode,
          clickCallback: function clickCallback() {
            return _this31.hide();
          }
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new FocusTrap({
          trapElement: this._element
        });
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this32 = this;

        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, function (event) {
          if (_this32._config.keyboard && event.key === ESCAPE_KEY) {
            _this32.hide();
          }
        });
      } // Static

    }], [{
      key: "NAME",
      get: function get() {
        return NAME$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Offcanvas.getOrCreateInstance(this, config);

          if (typeof config !== 'string') {
            return;
          }

          if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config](this);
        });
      }
    }]);

    return Offcanvas;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
    var _this33 = this;

    var target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (isDisabled(this)) {
      return;
    }

    EventHandler.one(target, EVENT_HIDDEN$2, function () {
      // focus on trigger when it is closed
      if (isVisible(_this33)) {
        _this33.focus();
      }
    }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

    var allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);

    if (allReadyOpen && allReadyOpen !== target) {
      Offcanvas.getInstance(allReadyOpen).hide();
    }

    var data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$1, function () {
    return SelectorEngine.find(OPEN_SELECTOR).forEach(function (el) {
      return Offcanvas.getOrCreateInstance(el).show();
    });
  });
  enableDismissTrigger(Offcanvas);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  defineJQueryPlugin(Offcanvas);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  var uriAttrs = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  var allowedAttribute = function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.includes(attrName)) {
      if (uriAttrs.has(attrName)) {
        return Boolean(SAFE_URL_PATTERN.test(attr.nodeValue) || DATA_URL_PATTERN.test(attr.nodeValue));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, len = regExp.length; i < len; i++) {
      if (regExp[i].test(attrName)) {
        return true;
      }
    }

    return false;
  };

  var DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };

  function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
    var _ref11;

    if (!unsafeHtml.length) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var allowlistKeys = Object.keys(allowList);

    var elements = (_ref11 = []).concat.apply(_ref11, _toConsumableArray(createdDocument.body.querySelectorAll('*')));

    var _loop2 = function _loop2(i, len) {
      var _ref12;

      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (!allowlistKeys.includes(elName)) {
        el.remove();
        return "continue";
      }

      var attributeList = (_ref12 = []).concat.apply(_ref12, _toConsumableArray(el.attributes));

      var allowedAttributes = [].concat(allowList['*'] || [], allowList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, allowedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret2 = _loop2(i, len);

      if (_ret2 === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$4 = 'tooltip';
  var DATA_KEY$4 = 'bs.tooltip';
  var EVENT_KEY$4 = ".".concat(DATA_KEY$4);
  var CLASS_PREFIX$1 = 'bs-tooltip';
  var DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
  var DefaultType$3 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(array|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacements: 'array',
    boundary: '(string|element)',
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    allowList: 'object',
    popperConfig: '(null|object|function)'
  };
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: isRTL() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: isRTL() ? 'right' : 'left'
  };
  var Default$3 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: [0, 0],
    container: false,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    boundary: 'clippingParents',
    customClass: '',
    sanitize: true,
    sanitizeFn: null,
    allowList: DefaultAllowlist,
    popperConfig: null
  };
  var Event$2 = {
    HIDE: "hide".concat(EVENT_KEY$4),
    HIDDEN: "hidden".concat(EVENT_KEY$4),
    SHOW: "show".concat(EVENT_KEY$4),
    SHOWN: "shown".concat(EVENT_KEY$4),
    INSERTED: "inserted".concat(EVENT_KEY$4),
    CLICK: "click".concat(EVENT_KEY$4),
    FOCUSIN: "focusin".concat(EVENT_KEY$4),
    FOCUSOUT: "focusout".concat(EVENT_KEY$4),
    MOUSEENTER: "mouseenter".concat(EVENT_KEY$4),
    MOUSELEAVE: "mouseleave".concat(EVENT_KEY$4)
  };
  var CLASS_NAME_FADE$2 = 'fade';
  var CLASS_NAME_MODAL = 'modal';
  var CLASS_NAME_SHOW$2 = 'show';
  var HOVER_STATE_SHOW = 'show';
  var HOVER_STATE_OUT = 'out';
  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  var SELECTOR_MODAL = ".".concat(CLASS_NAME_MODAL);
  var EVENT_MODAL_HIDE = 'hide.bs.modal';
  var TRIGGER_HOVER = 'hover';
  var TRIGGER_FOCUS = 'focus';
  var TRIGGER_CLICK = 'click';
  var TRIGGER_MANUAL = 'manual';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = /*#__PURE__*/function (_BaseComponent8) {
    _inherits(Tooltip, _BaseComponent8);

    var _super8 = _createSuper(Tooltip);

    function Tooltip(element, config) {
      var _this34;

      _classCallCheck(this, Tooltip);

      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      }

      _this34 = _super8.call(this, element); // private

      _this34._isEnabled = true;
      _this34._timeout = 0;
      _this34._hoverState = '';
      _this34._activeTrigger = {};
      _this34._popper = null; // Protected

      _this34._config = _this34._getConfig(config);
      _this34.tip = null;

      _this34._setListeners();

      return _this34;
    } // Getters


    _createClass(Tooltip, [{
      key: "enable",
      value: // Public
      function enable() {
        this._isEnabled = true;
      }
    }, {
      key: "disable",
      value: function disable() {
        this._isEnabled = false;
      }
    }, {
      key: "toggleEnabled",
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: "toggle",
      value: function toggle(event) {
        if (!this._isEnabled) {
          return;
        }

        if (event) {
          var context = this._initializeOnDelegatedTarget(event);

          context._activeTrigger.click = !context._activeTrigger.click;

          if (context._isWithActiveTrigger()) {
            context._enter(null, context);
          } else {
            context._leave(null, context);
          }
        } else {
          if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$2)) {
            this._leave(null, this);

            return;
          }

          this._enter(null, this);
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout);
        EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

        if (this.tip) {
          this.tip.remove();
        }

        this._disposePopper();

        _get(_getPrototypeOf(Tooltip.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _this35 = this;

        if (this._element.style.display === 'none') {
          throw new Error('Please use show on visible elements');
        }

        if (!(this.isWithContent() && this._isEnabled)) {
          return;
        }

        var showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
        var shadowRoot = findShadowRoot(this._element);
        var isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);

        if (showEvent.defaultPrevented || !isInTheDom) {
          return;
        } // A trick to recreate a tooltip in case a new title is given by using the NOT documented `data-bs-original-title`
        // This will be removed later in favor of a `setContent` method


        if (this.constructor.NAME === 'tooltip' && this.tip && this.getTitle() !== this.tip.querySelector(SELECTOR_TOOLTIP_INNER).innerHTML) {
          this._disposePopper();

          this.tip.remove();
          this.tip = null;
        }

        var tip = this.getTipElement();
        var tipId = getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);

        this._element.setAttribute('aria-describedby', tipId);

        if (this._config.animation) {
          tip.classList.add(CLASS_NAME_FADE$2);
        }

        var placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;

        var attachment = this._getAttachment(placement);

        this._addAttachmentClass(attachment);

        var container = this._config.container;
        Data.set(tip, this.constructor.DATA_KEY, this);

        if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
          container.append(tip);
          EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
        }

        if (this._popper) {
          this._popper.update();
        } else {
          this._popper = createPopper(this._element, tip, this._getPopperConfig(attachment));
        }

        tip.classList.add(CLASS_NAME_SHOW$2);

        var customClass = this._resolvePossibleFunction(this._config.customClass);

        if (customClass) {
          var _tip$classList;

          (_tip$classList = tip.classList).add.apply(_tip$classList, _toConsumableArray(customClass.split(' ')));
        } // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


        if ('ontouchstart' in document.documentElement) {
          var _ref13;

          (_ref13 = []).concat.apply(_ref13, _toConsumableArray(document.body.children)).forEach(function (element) {
            EventHandler.on(element, 'mouseover', noop);
          });
        }

        var complete = function complete() {
          var prevHoverState = _this35._hoverState;
          _this35._hoverState = null;
          EventHandler.trigger(_this35._element, _this35.constructor.Event.SHOWN);

          if (prevHoverState === HOVER_STATE_OUT) {
            _this35._leave(null, _this35);
          }
        };

        var isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);

        this._queueCallback(complete, this.tip, isAnimated);
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this36 = this;

        if (!this._popper) {
          return;
        }

        var tip = this.getTipElement();

        var complete = function complete() {
          if (_this36._isWithActiveTrigger()) {
            return;
          }

          if (_this36._hoverState !== HOVER_STATE_SHOW) {
            tip.remove();
          }

          _this36._cleanTipClass();

          _this36._element.removeAttribute('aria-describedby');

          EventHandler.trigger(_this36._element, _this36.constructor.Event.HIDDEN);

          _this36._disposePopper();
        };

        var hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);

        if (hideEvent.defaultPrevented) {
          return;
        }

        tip.classList.remove(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support

        if ('ontouchstart' in document.documentElement) {
          var _ref14;

          (_ref14 = []).concat.apply(_ref14, _toConsumableArray(document.body.children)).forEach(function (element) {
            return EventHandler.off(element, 'mouseover', noop);
          });
        }

        this._activeTrigger[TRIGGER_CLICK] = false;
        this._activeTrigger[TRIGGER_FOCUS] = false;
        this._activeTrigger[TRIGGER_HOVER] = false;
        var isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);

        this._queueCallback(complete, this.tip, isAnimated);

        this._hoverState = '';
      }
    }, {
      key: "update",
      value: function update() {
        if (this._popper !== null) {
          this._popper.update();
        }
      } // Protected

    }, {
      key: "isWithContent",
      value: function isWithContent() {
        return Boolean(this.getTitle());
      }
    }, {
      key: "getTipElement",
      value: function getTipElement() {
        if (this.tip) {
          return this.tip;
        }

        var element = document.createElement('div');
        element.innerHTML = this._config.template;
        var tip = element.children[0];
        this.setContent(tip);
        tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
        this.tip = tip;
        return this.tip;
      }
    }, {
      key: "setContent",
      value: function setContent(tip) {
        this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TOOLTIP_INNER);
      }
    }, {
      key: "_sanitizeAndSetContent",
      value: function _sanitizeAndSetContent(template, content, selector) {
        var templateElement = SelectorEngine.findOne(selector, template);

        if (!content && templateElement) {
          templateElement.remove();
          return;
        } // we use append for html objects to maintain js events


        this.setElementContent(templateElement, content);
      }
    }, {
      key: "setElementContent",
      value: function setElementContent(element, content) {
        if (element === null) {
          return;
        }

        if (isElement$1(content)) {
          content = getElement(content); // content is a DOM node or a jQuery

          if (this._config.html) {
            if (content.parentNode !== element) {
              element.innerHTML = '';
              element.append(content);
            }
          } else {
            element.textContent = content.textContent;
          }

          return;
        }

        if (this._config.html) {
          if (this._config.sanitize) {
            content = sanitizeHtml(content, this._config.allowList, this._config.sanitizeFn);
          }

          element.innerHTML = content;
        } else {
          element.textContent = content;
        }
      }
    }, {
      key: "getTitle",
      value: function getTitle() {
        var title = this._element.getAttribute('data-bs-original-title') || this._config.title;

        return this._resolvePossibleFunction(title);
      }
    }, {
      key: "updateAttachment",
      value: function updateAttachment(attachment) {
        if (attachment === 'right') {
          return 'end';
        }

        if (attachment === 'left') {
          return 'start';
        }

        return attachment;
      } // Private

    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(event, context) {
        return context || this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this37 = this;

        var offset = this._config.offset;

        if (typeof offset === 'string') {
          return offset.split(',').map(function (val) {
            return Number.parseInt(val, 10);
          });
        }

        if (typeof offset === 'function') {
          return function (popperData) {
            return offset(popperData, _this37._element);
          };
        }

        return offset;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(content) {
        return typeof content === 'function' ? content.call(this._element) : content;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(attachment) {
        var _this38 = this;

        var defaultBsPopperConfig = {
          placement: attachment,
          modifiers: [{
            name: 'flip',
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: 'offset',
            options: {
              offset: this._getOffset()
            }
          }, {
            name: 'preventOverflow',
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: 'arrow',
            options: {
              element: ".".concat(this.constructor.NAME, "-arrow")
            }
          }, {
            name: 'onChange',
            enabled: true,
            phase: 'afterWrite',
            fn: function fn(data) {
              return _this38._handlePopperPlacementChange(data);
            }
          }],
          onFirstUpdate: function onFirstUpdate(data) {
            if (data.options.placement !== data.placement) {
              _this38._handlePopperPlacementChange(data);
            }
          }
        };
        return _objectSpread(_objectSpread({}, defaultBsPopperConfig), typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig);
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(attachment) {
        this.getTipElement().classList.add("".concat(this._getBasicClassPrefix(), "-").concat(this.updateAttachment(attachment)));
      }
    }, {
      key: "_getAttachment",
      value: function _getAttachment(placement) {
        return AttachmentMap[placement.toUpperCase()];
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this39 = this;

        var triggers = this._config.trigger.split(' ');

        triggers.forEach(function (trigger) {
          if (trigger === 'click') {
            EventHandler.on(_this39._element, _this39.constructor.Event.CLICK, _this39._config.selector, function (event) {
              return _this39.toggle(event);
            });
          } else if (trigger !== TRIGGER_MANUAL) {
            var eventIn = trigger === TRIGGER_HOVER ? _this39.constructor.Event.MOUSEENTER : _this39.constructor.Event.FOCUSIN;
            var eventOut = trigger === TRIGGER_HOVER ? _this39.constructor.Event.MOUSELEAVE : _this39.constructor.Event.FOCUSOUT;
            EventHandler.on(_this39._element, eventIn, _this39._config.selector, function (event) {
              return _this39._enter(event);
            });
            EventHandler.on(_this39._element, eventOut, _this39._config.selector, function (event) {
              return _this39._leave(event);
            });
          }
        });

        this._hideModalHandler = function () {
          if (_this39._element) {
            _this39.hide();
          }
        };

        EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

        if (this._config.selector) {
          this._config = _objectSpread(_objectSpread({}, this._config), {}, {
            trigger: 'manual',
            selector: ''
          });
        } else {
          this._fixTitle();
        }
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var title = this._element.getAttribute('title');

        var originalTitleType = _typeof(this._element.getAttribute('data-bs-original-title'));

        if (title || originalTitleType !== 'string') {
          this._element.setAttribute('data-bs-original-title', title || '');

          if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
            this._element.setAttribute('aria-label', title);
          }

          this._element.setAttribute('title', '');
        }
      }
    }, {
      key: "_enter",
      value: function _enter(event, context) {
        context = this._initializeOnDelegatedTarget(event, context);

        if (event) {
          context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
        }

        if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$2) || context._hoverState === HOVER_STATE_SHOW) {
          context._hoverState = HOVER_STATE_SHOW;
          return;
        }

        clearTimeout(context._timeout);
        context._hoverState = HOVER_STATE_SHOW;

        if (!context._config.delay || !context._config.delay.show) {
          context.show();
          return;
        }

        context._timeout = setTimeout(function () {
          if (context._hoverState === HOVER_STATE_SHOW) {
            context.show();
          }
        }, context._config.delay.show);
      }
    }, {
      key: "_leave",
      value: function _leave(event, context) {
        context = this._initializeOnDelegatedTarget(event, context);

        if (event) {
          context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
        }

        if (context._isWithActiveTrigger()) {
          return;
        }

        clearTimeout(context._timeout);
        context._hoverState = HOVER_STATE_OUT;

        if (!context._config.delay || !context._config.delay.hide) {
          context.hide();
          return;
        }

        context._timeout = setTimeout(function () {
          if (context._hoverState === HOVER_STATE_OUT) {
            context.hide();
          }
        }, context._config.delay.hide);
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        for (var trigger in this._activeTrigger) {
          if (this._activeTrigger[trigger]) {
            return true;
          }
        }

        return false;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        var dataAttributes = Manipulator.getDataAttributes(this._element);
        Object.keys(dataAttributes).forEach(function (dataAttr) {
          if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
            delete dataAttributes[dataAttr];
          }
        });
        config = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), dataAttributes), _typeof(config) === 'object' && config ? config : {});
        config.container = config.container === false ? document.body : getElement(config.container);

        if (typeof config.delay === 'number') {
          config.delay = {
            show: config.delay,
            hide: config.delay
          };
        }

        if (typeof config.title === 'number') {
          config.title = config.title.toString();
        }

        if (typeof config.content === 'number') {
          config.content = config.content.toString();
        }

        typeCheckConfig(NAME$4, config, this.constructor.DefaultType);

        if (config.sanitize) {
          config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
        }

        return config;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var config = {};

        for (var key in this._config) {
          if (this.constructor.Default[key] !== this._config[key]) {
            config[key] = this._config[key];
          }
        } // In the future can be replaced with:
        // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
        // `Object.fromEntries(keysWithDifferentValues)`


        return config;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var tip = this.getTipElement();
        var basicClassPrefixRegex = new RegExp("(^|\\s)".concat(this._getBasicClassPrefix(), "\\S+"), 'g');
        var tabClass = tip.getAttribute('class').match(basicClassPrefixRegex);

        if (tabClass !== null && tabClass.length > 0) {
          tabClass.map(function (token) {
            return token.trim();
          }).forEach(function (tClass) {
            return tip.classList.remove(tClass);
          });
        }
      }
    }, {
      key: "_getBasicClassPrefix",
      value: function _getBasicClassPrefix() {
        return CLASS_PREFIX$1;
      }
    }, {
      key: "_handlePopperPlacementChange",
      value: function _handlePopperPlacementChange(popperData) {
        var state = popperData.state;

        if (!state) {
          return;
        }

        this.tip = state.elements.popper;

        this._cleanTipClass();

        this._addAttachmentClass(this._getAttachment(state.placement));
      }
    }, {
      key: "_disposePopper",
      value: function _disposePopper() {
        if (this._popper) {
          this._popper.destroy();

          this._popper = null;
        }
      } // Static

    }], [{
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$4;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$3;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Tooltip.getOrCreateInstance(this, config);

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config]();
          }
        });
      }
    }]);

    return Tooltip;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Tooltip to jQuery only if jQuery is present
   */


  defineJQueryPlugin(Tooltip);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): popover.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'popover';
  var DATA_KEY$3 = 'bs.popover';
  var EVENT_KEY$3 = ".".concat(DATA_KEY$3);
  var CLASS_PREFIX = 'bs-popover';

  var Default$2 = _objectSpread(_objectSpread({}, Tooltip.Default), {}, {
    placement: 'right',
    offset: [0, 8],
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'
  });

  var DefaultType$2 = _objectSpread(_objectSpread({}, Tooltip.DefaultType), {}, {
    content: '(string|element|function)'
  });

  var Event$1 = {
    HIDE: "hide".concat(EVENT_KEY$3),
    HIDDEN: "hidden".concat(EVENT_KEY$3),
    SHOW: "show".concat(EVENT_KEY$3),
    SHOWN: "shown".concat(EVENT_KEY$3),
    INSERTED: "inserted".concat(EVENT_KEY$3),
    CLICK: "click".concat(EVENT_KEY$3),
    FOCUSIN: "focusin".concat(EVENT_KEY$3),
    FOCUSOUT: "focusout".concat(EVENT_KEY$3),
    MOUSEENTER: "mouseenter".concat(EVENT_KEY$3),
    MOUSELEAVE: "mouseleave".concat(EVENT_KEY$3)
  };
  var SELECTOR_TITLE = '.popover-header';
  var SELECTOR_CONTENT = '.popover-body';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover = /*#__PURE__*/function (_Tooltip) {
    _inherits(Popover, _Tooltip);

    var _super9 = _createSuper(Popover);

    function Popover() {
      _classCallCheck(this, Popover);

      return _super9.apply(this, arguments);
    }

    _createClass(Popover, [{
      key: "isWithContent",
      value: // Overrides
      function isWithContent() {
        return this.getTitle() || this._getContent();
      }
    }, {
      key: "setContent",
      value: function setContent(tip) {
        this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TITLE);

        this._sanitizeAndSetContent(tip, this._getContent(), SELECTOR_CONTENT);
      } // Private

    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
    }, {
      key: "_getBasicClassPrefix",
      value: function _getBasicClassPrefix() {
        return CLASS_PREFIX;
      } // Static

    }], [{
      key: "Default",
      get: // Getters
      function get() {
        return Default$2;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$3;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$1;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Popover.getOrCreateInstance(this, config);

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config]();
          }
        });
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Popover to jQuery only if jQuery is present
   */


  defineJQueryPlugin(Popover);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'scrollspy';
  var DATA_KEY$2 = 'bs.scrollspy';
  var EVENT_KEY$2 = ".".concat(DATA_KEY$2);
  var DATA_API_KEY$1 = '.data-api';
  var Default$1 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$1 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var EVENT_ACTIVATE = "activate".concat(EVENT_KEY$2);
  var EVENT_SCROLL = "scroll".concat(EVENT_KEY$2);
  var EVENT_LOAD_DATA_API = "load".concat(EVENT_KEY$2).concat(DATA_API_KEY$1);
  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  var CLASS_NAME_ACTIVE$1 = 'active';
  var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  var SELECTOR_NAV_LINKS = '.nav-link';
  var SELECTOR_NAV_ITEMS = '.nav-item';
  var SELECTOR_LIST_ITEMS = '.list-group-item';
  var SELECTOR_LINK_ITEMS = "".concat(SELECTOR_NAV_LINKS, ", ").concat(SELECTOR_LIST_ITEMS, ", .").concat(CLASS_NAME_DROPDOWN_ITEM);
  var SELECTOR_DROPDOWN$1 = '.dropdown';
  var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  var METHOD_OFFSET = 'offset';
  var METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = /*#__PURE__*/function (_BaseComponent9) {
    _inherits(ScrollSpy, _BaseComponent9);

    var _super10 = _createSuper(ScrollSpy);

    function ScrollSpy(element, config) {
      var _this40;

      _classCallCheck(this, ScrollSpy);

      _this40 = _super10.call(this, element);
      _this40._scrollElement = _this40._element.tagName === 'BODY' ? window : _this40._element;
      _this40._config = _this40._getConfig(config);
      _this40._offsets = [];
      _this40._targets = [];
      _this40._activeTarget = null;
      _this40._scrollHeight = 0;
      EventHandler.on(_this40._scrollElement, EVENT_SCROLL, function () {
        return _this40._process();
      });

      _this40.refresh();

      _this40._process();

      return _this40;
    } // Getters


    _createClass(ScrollSpy, [{
      key: "refresh",
      value: // Public
      function refresh() {
        var _this41 = this;

        var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
        var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
        var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
        this._offsets = [];
        this._targets = [];
        this._scrollHeight = this._getScrollHeight();
        var targets = SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target);
        targets.map(function (element) {
          var targetSelector = getSelectorFromElement(element);
          var target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;

          if (target) {
            var targetBCR = target.getBoundingClientRect();

            if (targetBCR.width || targetBCR.height) {
              return [Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
            }
          }

          return null;
        }).filter(function (item) {
          return item;
        }).sort(function (a, b) {
          return a[0] - b[0];
        }).forEach(function (item) {
          _this41._offsets.push(item[0]);

          _this41._targets.push(item[1]);
        });
      }
    }, {
      key: "dispose",
      value: function dispose() {
        EventHandler.off(this._scrollElement, EVENT_KEY$2);

        _get(_getPrototypeOf(ScrollSpy.prototype), "dispose", this).call(this);
      } // Private

    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread(_objectSpread({}, Default$1), Manipulator.getDataAttributes(this._element)), _typeof(config) === 'object' && config ? config : {});
        config.target = getElement(config.target) || document.documentElement;
        typeCheckConfig(NAME$2, config, DefaultType$1);
        return config;
      }
    }, {
      key: "_getScrollTop",
      value: function _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }
    }, {
      key: "_getScrollHeight",
      value: function _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }
    }, {
      key: "_getOffsetHeight",
      value: function _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }
    }, {
      key: "_process",
      value: function _process() {
        var scrollTop = this._getScrollTop() + this._config.offset;

        var scrollHeight = this._getScrollHeight();

        var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

        if (this._scrollHeight !== scrollHeight) {
          this.refresh();
        }

        if (scrollTop >= maxScroll) {
          var target = this._targets[this._targets.length - 1];

          if (this._activeTarget !== target) {
            this._activate(target);
          }

          return;
        }

        if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
          this._activeTarget = null;

          this._clear();

          return;
        }

        for (var i = this._offsets.length; i--;) {
          var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

          if (isActiveTarget) {
            this._activate(this._targets[i]);
          }
        }
      }
    }, {
      key: "_activate",
      value: function _activate(target) {
        this._activeTarget = target;

        this._clear();

        var queries = SELECTOR_LINK_ITEMS.split(',').map(function (selector) {
          return "".concat(selector, "[data-bs-target=\"").concat(target, "\"],").concat(selector, "[href=\"").concat(target, "\"]");
        });
        var link = SelectorEngine.findOne(queries.join(','), this._config.target);
        link.classList.add(CLASS_NAME_ACTIVE$1);

        if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
          SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1)).classList.add(CLASS_NAME_ACTIVE$1);
        } else {
          SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP$1).forEach(function (listGroup) {
            // Set triggered links parents as active
            // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
            SelectorEngine.prev(listGroup, "".concat(SELECTOR_NAV_LINKS, ", ").concat(SELECTOR_LIST_ITEMS)).forEach(function (item) {
              return item.classList.add(CLASS_NAME_ACTIVE$1);
            }); // Handle special case when .nav-link is inside .nav-item

            SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach(function (navItem) {
              SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach(function (item) {
                return item.classList.add(CLASS_NAME_ACTIVE$1);
              });
            });
          });
        }

        EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
          relatedTarget: target
        });
      }
    }, {
      key: "_clear",
      value: function _clear() {
        SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target).filter(function (node) {
          return node.classList.contains(CLASS_NAME_ACTIVE$1);
        }).forEach(function (node) {
          return node.classList.remove(CLASS_NAME_ACTIVE$1);
        });
      } // Static

    }], [{
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$2;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = ScrollSpy.getOrCreateInstance(this, config);

          if (typeof config !== 'string') {
            return;
          }

          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config]();
        });
      }
    }]);

    return ScrollSpy;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(window, EVENT_LOAD_DATA_API, function () {
    SelectorEngine.find(SELECTOR_DATA_SPY).forEach(function (spy) {
      return new ScrollSpy(spy);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .ScrollSpy to jQuery only if jQuery is present
   */

  defineJQueryPlugin(ScrollSpy);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'tab';
  var DATA_KEY$1 = 'bs.tab';
  var EVENT_KEY$1 = ".".concat(DATA_KEY$1);
  var DATA_API_KEY = '.data-api';
  var EVENT_HIDE$1 = "hide".concat(EVENT_KEY$1);
  var EVENT_HIDDEN$1 = "hidden".concat(EVENT_KEY$1);
  var EVENT_SHOW$1 = "show".concat(EVENT_KEY$1);
  var EVENT_SHOWN$1 = "shown".concat(EVENT_KEY$1);
  var EVENT_CLICK_DATA_API = "click".concat(EVENT_KEY$1).concat(DATA_API_KEY);
  var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_FADE$1 = 'fade';
  var CLASS_NAME_SHOW$1 = 'show';
  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_ACTIVE_UL = ':scope > li > .active';
  var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = /*#__PURE__*/function (_BaseComponent10) {
    _inherits(Tab, _BaseComponent10);

    var _super11 = _createSuper(Tab);

    function Tab() {
      _classCallCheck(this, Tab);

      return _super11.apply(this, arguments);
    }

    _createClass(Tab, [{
      key: "show",
      value: // Public
      function show() {
        var _this42 = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
          return;
        }

        var previous;
        var target = getElementFromSelector(this._element);

        var listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP);

        if (listElement) {
          var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
          previous = SelectorEngine.find(itemSelector, listElement);
          previous = previous[previous.length - 1];
        }

        var hideEvent = previous ? EventHandler.trigger(previous, EVENT_HIDE$1, {
          relatedTarget: this._element
        }) : null;
        var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, {
          relatedTarget: previous
        });

        if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
          return;
        }

        this._activate(this._element, listElement);

        var complete = function complete() {
          EventHandler.trigger(previous, EVENT_HIDDEN$1, {
            relatedTarget: _this42._element
          });
          EventHandler.trigger(_this42._element, EVENT_SHOWN$1, {
            relatedTarget: previous
          });
        };

        if (target) {
          this._activate(target, target.parentNode, complete);
        } else {
          complete();
        }
      } // Private

    }, {
      key: "_activate",
      value: function _activate(element, container, callback) {
        var _this43 = this;

        var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE);
        var active = activeElements[0];
        var isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$1);

        var complete = function complete() {
          return _this43._transitionComplete(element, active, callback);
        };

        if (active && isTransitioning) {
          active.classList.remove(CLASS_NAME_SHOW$1);

          this._queueCallback(complete, element, true);
        } else {
          complete();
        }
      }
    }, {
      key: "_transitionComplete",
      value: function _transitionComplete(element, active, callback) {
        if (active) {
          active.classList.remove(CLASS_NAME_ACTIVE);
          var dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

          if (dropdownChild) {
            dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
          }

          if (active.getAttribute('role') === 'tab') {
            active.setAttribute('aria-selected', false);
          }
        }

        element.classList.add(CLASS_NAME_ACTIVE);

        if (element.getAttribute('role') === 'tab') {
          element.setAttribute('aria-selected', true);
        }

        reflow(element);

        if (element.classList.contains(CLASS_NAME_FADE$1)) {
          element.classList.add(CLASS_NAME_SHOW$1);
        }

        var parent = element.parentNode;

        if (parent && parent.nodeName === 'LI') {
          parent = parent.parentNode;
        }

        if (parent && parent.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
          var dropdownElement = element.closest(SELECTOR_DROPDOWN);

          if (dropdownElement) {
            SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach(function (dropdown) {
              return dropdown.classList.add(CLASS_NAME_ACTIVE);
            });
          }

          element.setAttribute('aria-expanded', true);
        }

        if (callback) {
          callback();
        }
      } // Static

    }], [{
      key: "NAME",
      get: // Getters
      function get() {
        return NAME$1;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Tab.getOrCreateInstance(this);

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config]();
          }
        });
      }
    }]);

    return Tab;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (isDisabled(this)) {
      return;
    }

    var data = Tab.getOrCreateInstance(this);
    data.show();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Tab to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Tab);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): toast.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'toast';
  var DATA_KEY = 'bs.toast';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var EVENT_MOUSEOVER = "mouseover".concat(EVENT_KEY);
  var EVENT_MOUSEOUT = "mouseout".concat(EVENT_KEY);
  var EVENT_FOCUSIN = "focusin".concat(EVENT_KEY);
  var EVENT_FOCUSOUT = "focusout".concat(EVENT_KEY);
  var EVENT_HIDE = "hide".concat(EVENT_KEY);
  var EVENT_HIDDEN = "hidden".concat(EVENT_KEY);
  var EVENT_SHOW = "show".concat(EVENT_KEY);
  var EVENT_SHOWN = "shown".concat(EVENT_KEY);
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility

  var CLASS_NAME_SHOW = 'show';
  var CLASS_NAME_SHOWING = 'showing';
  var DefaultType = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default = {
    animation: true,
    autohide: true,
    delay: 5000
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast = /*#__PURE__*/function (_BaseComponent11) {
    _inherits(Toast, _BaseComponent11);

    var _super12 = _createSuper(Toast);

    function Toast(element, config) {
      var _this44;

      _classCallCheck(this, Toast);

      _this44 = _super12.call(this, element);
      _this44._config = _this44._getConfig(config);
      _this44._timeout = null;
      _this44._hasMouseInteraction = false;
      _this44._hasKeyboardInteraction = false;

      _this44._setListeners();

      return _this44;
    } // Getters


    _createClass(Toast, [{
      key: "show",
      value: // Public
      function show() {
        var _this45 = this;

        var showEvent = EventHandler.trigger(this._element, EVENT_SHOW);

        if (showEvent.defaultPrevented) {
          return;
        }

        this._clearTimeout();

        if (this._config.animation) {
          this._element.classList.add(CLASS_NAME_FADE);
        }

        var complete = function complete() {
          _this45._element.classList.remove(CLASS_NAME_SHOWING);

          EventHandler.trigger(_this45._element, EVENT_SHOWN);

          _this45._maybeScheduleHide();
        };

        this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated


        reflow(this._element);

        this._element.classList.add(CLASS_NAME_SHOW);

        this._element.classList.add(CLASS_NAME_SHOWING);

        this._queueCallback(complete, this._element, this._config.animation);
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this46 = this;

        if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
          return;
        }

        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

        if (hideEvent.defaultPrevented) {
          return;
        }

        var complete = function complete() {
          _this46._element.classList.add(CLASS_NAME_HIDE); // @deprecated


          _this46._element.classList.remove(CLASS_NAME_SHOWING);

          _this46._element.classList.remove(CLASS_NAME_SHOW);

          EventHandler.trigger(_this46._element, EVENT_HIDDEN);
        };

        this._element.classList.add(CLASS_NAME_SHOWING);

        this._queueCallback(complete, this._element, this._config.animation);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout();

        if (this._element.classList.contains(CLASS_NAME_SHOW)) {
          this._element.classList.remove(CLASS_NAME_SHOW);
        }

        _get(_getPrototypeOf(Toast.prototype), "dispose", this).call(this);
      } // Private

    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread(_objectSpread({}, Default), Manipulator.getDataAttributes(this._element)), _typeof(config) === 'object' && config ? config : {});
        typeCheckConfig(NAME, config, this.constructor.DefaultType);
        return config;
      }
    }, {
      key: "_maybeScheduleHide",
      value: function _maybeScheduleHide() {
        var _this47 = this;

        if (!this._config.autohide) {
          return;
        }

        if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
          return;
        }

        this._timeout = setTimeout(function () {
          _this47.hide();
        }, this._config.delay);
      }
    }, {
      key: "_onInteraction",
      value: function _onInteraction(event, isInteracting) {
        switch (event.type) {
          case 'mouseover':
          case 'mouseout':
            this._hasMouseInteraction = isInteracting;
            break;

          case 'focusin':
          case 'focusout':
            this._hasKeyboardInteraction = isInteracting;
            break;
        }

        if (isInteracting) {
          this._clearTimeout();

          return;
        }

        var nextElement = event.relatedTarget;

        if (this._element === nextElement || this._element.contains(nextElement)) {
          return;
        }

        this._maybeScheduleHide();
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this48 = this;

        EventHandler.on(this._element, EVENT_MOUSEOVER, function (event) {
          return _this48._onInteraction(event, true);
        });
        EventHandler.on(this._element, EVENT_MOUSEOUT, function (event) {
          return _this48._onInteraction(event, false);
        });
        EventHandler.on(this._element, EVENT_FOCUSIN, function (event) {
          return _this48._onInteraction(event, true);
        });
        EventHandler.on(this._element, EVENT_FOCUSOUT, function (event) {
          return _this48._onInteraction(event, false);
        });
      }
    }, {
      key: "_clearTimeout",
      value: function _clearTimeout() {
        clearTimeout(this._timeout);
        this._timeout = null;
      } // Static

    }], [{
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Toast.getOrCreateInstance(this, config);

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config](this);
          }
        });
      }
    }]);

    return Toast;
  }(BaseComponent);

  enableDismissTrigger(Toast);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Toast to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Toast);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): index.umd.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  var index_umd = {
    Alert: Alert,
    Button: Button,
    Carousel: Carousel,
    Collapse: Collapse,
    Dropdown: Dropdown,
    Modal: Modal,
    Offcanvas: Offcanvas,
    Popover: Popover,
    ScrollSpy: ScrollSpy,
    Tab: Tab,
    Toast: Toast,
    Tooltip: Tooltip
  };
  return index_umd;
});
"use strict";

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v5.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e();
}(void 0, function () {
  "use strict";

  var t = function t(_t2) {
    var e = _t2.getAttribute("data-bs-target");

    if (!e || "#" === e) {
      var _i = _t2.getAttribute("href");

      if (!_i || !_i.includes("#") && !_i.startsWith(".")) return null;
      _i.includes("#") && !_i.startsWith("#") && (_i = "#" + _i.split("#")[1]), e = _i && "#" !== _i ? _i.trim() : null;
    }

    return e;
  },
      e = function e(_e2) {
    var i = t(_e2);
    return i && document.querySelector(i) ? i : null;
  },
      i = function i(e) {
    var i = t(e);
    return i ? document.querySelector(i) : null;
  },
      n = function n(t) {
    t.dispatchEvent(new Event("transitionend"));
  },
      s = function s(t) {
    return !(!t || "object" != _typeof(t)) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType);
  },
      o = function o(t) {
    return s(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null;
  },
      r = function r(t, e, i) {
    Object.keys(i).forEach(function (n) {
      var o = i[n],
          r = e[n],
          a = r && s(r) ? "element" : null == (l = r) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
      var l;
      if (!new RegExp(o).test(a)) throw new TypeError("".concat(t.toUpperCase(), ": Option \"").concat(n, "\" provided type \"").concat(a, "\" but expected type \"").concat(o, "\"."));
    });
  },
      a = function a(t) {
    return !(!s(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility");
  },
      l = function l(t) {
    return !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
  },
      c = function c(t) {
    if (!document.documentElement.attachShadow) return null;

    if ("function" == typeof t.getRootNode) {
      var _e3 = t.getRootNode();

      return _e3 instanceof ShadowRoot ? _e3 : null;
    }

    return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null;
  },
      h = function h() {},
      d = function d(t) {
    t.offsetHeight;
  },
      u = function u() {
    var _window = window,
        t = _window.jQuery;
    return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
  },
      f = [],
      p = function p() {
    return "rtl" === document.documentElement.dir;
  },
      m = function m(t) {
    var e;
    e = function e() {
      var e = u();

      if (e) {
        var _i2 = t.NAME,
            _n = e.fn[_i2];
        e.fn[_i2] = t.jQueryInterface, e.fn[_i2].Constructor = t, e.fn[_i2].noConflict = function () {
          return e.fn[_i2] = _n, t.jQueryInterface;
        };
      }
    }, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", function () {
      f.forEach(function (t) {
        return t();
      });
    }), f.push(e)) : e();
  },
      g = function g(t) {
    "function" == typeof t && t();
  },
      _ = function _(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    if (!i) return void g(t);

    var s = function (t) {
      if (!t) return 0;

      var _window$getComputedSt = window.getComputedStyle(t),
          e = _window$getComputedSt.transitionDuration,
          i = _window$getComputedSt.transitionDelay;

      var n = Number.parseFloat(e),
          s = Number.parseFloat(i);
      return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
    }(e) + 5;

    var o = !1;

    var r = function r(_ref) {
      var i = _ref.target;
      i === e && (o = !0, e.removeEventListener("transitionend", r), g(t));
    };

    e.addEventListener("transitionend", r), setTimeout(function () {
      o || n(e);
    }, s);
  },
      b = function b(t, e, i, n) {
    var s = t.indexOf(e);
    if (-1 === s) return t[!i && n ? t.length - 1 : 0];
    var o = t.length;
    return s += i ? 1 : -1, n && (s = (s + o) % o), t[Math.max(0, Math.min(s, o - 1))];
  },
      v = /[^.]*(?=\..*)\.|.*/,
      y = /\..*/,
      w = /::\d+$/,
      E = {};

  var A = 1;
  var T = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
      O = /^(mouseenter|mouseleave)/i,
      C = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function k(t, e) {
    return e && "".concat(e, "::").concat(A++) || t.uidEvent || A++;
  }

  function L(t) {
    var e = k(t);
    return t.uidEvent = e, E[e] = E[e] || {}, E[e];
  }

  function x(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var n = Object.keys(t);

    for (var _s = 0, _o = n.length; _s < _o; _s++) {
      var _o2 = t[n[_s]];
      if (_o2.originalHandler === e && _o2.delegationSelector === i) return _o2;
    }

    return null;
  }

  function D(t, e, i) {
    var n = "string" == typeof e,
        s = n ? i : e;
    var o = I(t);
    return C.has(o) || (o = t), [n, s, o];
  }

  function S(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;

    if (i || (i = n, n = null), O.test(e)) {
      var _t3 = function _t3(t) {
        return function (e) {
          if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
        };
      };

      n ? n = _t3(n) : i = _t3(i);
    }

    var _D = D(e, i, n),
        _D2 = _slicedToArray(_D, 3),
        o = _D2[0],
        r = _D2[1],
        a = _D2[2],
        l = L(t),
        c = l[a] || (l[a] = {}),
        h = x(c, r, o ? i : null);

    if (h) return void (h.oneOff = h.oneOff && s);
    var d = k(r, e.replace(v, "")),
        u = o ? function (t, e, i) {
      return function n(s) {
        var o = t.querySelectorAll(e);

        for (var _r = s.target; _r && _r !== this; _r = _r.parentNode) {
          for (var _a = o.length; _a--;) {
            if (o[_a] === _r) return s.delegateTarget = _r, n.oneOff && P.off(t, s.type, e, i), i.apply(_r, [s]);
          }
        }

        return null;
      };
    }(t, i, n) : function (t, e) {
      return function i(n) {
        return n.delegateTarget = t, i.oneOff && P.off(t, n.type, e), e.apply(t, [n]);
      };
    }(t, i);
    u.delegationSelector = o ? i : null, u.originalHandler = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
  }

  function N(t, e, i, n, s) {
    var o = x(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }

  function I(t) {
    return t = t.replace(y, ""), T[t] || t;
  }

  var P = {
    on: function on(t, e, i, n) {
      S(t, e, i, n, !1);
    },
    one: function one(t, e, i, n) {
      S(t, e, i, n, !0);
    },
    off: function off(t, e, i, n) {
      if ("string" != typeof e || !t) return;

      var _D3 = D(e, i, n),
          _D4 = _slicedToArray(_D3, 3),
          s = _D4[0],
          o = _D4[1],
          r = _D4[2],
          a = r !== e,
          l = L(t),
          c = e.startsWith(".");

      if (void 0 !== o) {
        if (!l || !l[r]) return;
        return void N(t, l, r, o, s ? i : null);
      }

      c && Object.keys(l).forEach(function (i) {
        !function (t, e, i, n) {
          var s = e[i] || {};
          Object.keys(s).forEach(function (o) {
            if (o.includes(n)) {
              var _n2 = s[o];
              N(t, e, i, _n2.originalHandler, _n2.delegationSelector);
            }
          });
        }(t, l, i, e.slice(1));
      });
      var h = l[r] || {};
      Object.keys(h).forEach(function (i) {
        var n = i.replace(w, "");

        if (!a || e.includes(n)) {
          var _e4 = h[i];
          N(t, l, r, _e4.originalHandler, _e4.delegationSelector);
        }
      });
    },
    trigger: function trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      var n = u(),
          s = I(e),
          o = e !== s,
          r = C.has(s);
      var a,
          l = !0,
          c = !0,
          h = !1,
          d = null;
      return o && n && (a = n.Event(e, i), n(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(s, l, !0)) : d = new CustomEvent(e, {
        bubbles: l,
        cancelable: !0
      }), void 0 !== i && Object.keys(i).forEach(function (t) {
        Object.defineProperty(d, t, {
          get: function get() {
            return i[t];
          }
        });
      }), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d;
    }
  },
      j = new Map();
  var M = {
    set: function set(t, e, i) {
      j.has(t) || j.set(t, new Map());
      var n = j.get(t);
      n.has(e) || 0 === n.size ? n.set(e, i) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(n.keys())[0], "."));
    },
    get: function get(t, e) {
      return j.has(t) && j.get(t).get(e) || null;
    },
    remove: function remove(t, e) {
      if (!j.has(t)) return;
      var i = j.get(t);
      i["delete"](e), 0 === i.size && j["delete"](t);
    }
  };

  var H = /*#__PURE__*/function () {
    function H(t) {
      _classCallCheck(this, H);

      (t = o(t)) && (this._element = t, M.set(this._element, this.constructor.DATA_KEY, this));
    }

    _createClass(H, [{
      key: "dispose",
      value: function dispose() {
        var _this = this;

        M.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(function (t) {
          _this[t] = null;
        });
      }
    }, {
      key: "_queueCallback",
      value: function _queueCallback(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;

        _(t, e, i);
      }
    }], [{
      key: "getInstance",
      value: function getInstance(t) {
        return M.get(o(t), this.DATA_KEY);
      }
    }, {
      key: "getOrCreateInstance",
      value: function getOrCreateInstance(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.getInstance(t) || new this(t, "object" == _typeof(e) ? e : null);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return "5.1.1";
      }
    }, {
      key: "NAME",
      get: function get() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs." + this.NAME;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return "." + this.DATA_KEY;
      }
    }]);

    return H;
  }();

  var B = function B(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "hide";
    var n = "click.dismiss" + t.EVENT_KEY,
        s = t.NAME;
    P.on(document, n, "[data-bs-dismiss=\"".concat(s, "\"]"), function (n) {
      if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), l(this)) return;
      var o = i(this) || this.closest("." + s);
      t.getOrCreateInstance(o)[e]();
    });
  };

  var R = /*#__PURE__*/function (_H) {
    _inherits(R, _H);

    var _super = _createSuper(R);

    function R() {
      _classCallCheck(this, R);

      return _super.apply(this, arguments);
    }

    _createClass(R, [{
      key: "close",
      value: function close() {
        var _this2 = this;

        if (P.trigger(this._element, "close.bs.alert").defaultPrevented) return;

        this._element.classList.remove("show");

        var t = this._element.classList.contains("fade");

        this._queueCallback(function () {
          return _this2._destroyElement();
        }, this._element, t);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement() {
        this._element.remove(), P.trigger(this._element, "closed.bs.alert"), this.dispose();
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "alert";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = R.getOrCreateInstance(this);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return R;
  }(H);

  B(R, "close"), m(R);

  var W = /*#__PURE__*/function (_H2) {
    _inherits(W, _H2);

    var _super2 = _createSuper(W);

    function W() {
      _classCallCheck(this, W);

      return _super2.apply(this, arguments);
    }

    _createClass(W, [{
      key: "toggle",
      value: function toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "button";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = W.getOrCreateInstance(this);
          "toggle" === t && e[t]();
        });
      }
    }]);

    return W;
  }(H);

  function z(t) {
    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
  }

  function q(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-" + t.toLowerCase();
    });
  }

  P.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', function (t) {
    t.preventDefault();
    var e = t.target.closest('[data-bs-toggle="button"]');
    W.getOrCreateInstance(e).toggle();
  }), m(W);
  var F = {
    setDataAttribute: function setDataAttribute(t, e, i) {
      t.setAttribute("data-bs-" + q(e), i);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-" + q(e));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = {};
      return Object.keys(t.dataset).filter(function (t) {
        return t.startsWith("bs");
      }).forEach(function (i) {
        var n = i.replace(/^bs/, "");
        n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = z(t.dataset[i]);
      }), e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return z(t.getAttribute("data-bs-" + q(e)));
    },
    offset: function offset(t) {
      var e = t.getBoundingClientRect();
      return {
        top: e.top + window.pageYOffset,
        left: e.left + window.pageXOffset
      };
    },
    position: function position(t) {
      return {
        top: t.offsetTop,
        left: t.offsetLeft
      };
    }
  },
      U = {
    find: function find(t) {
      var _ref2;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(Element.prototype.querySelectorAll.call(e, t)));
    },
    findOne: function findOne(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return Element.prototype.querySelector.call(e, t);
    },
    children: function children(t, e) {
      var _ref3;

      return (_ref3 = []).concat.apply(_ref3, _toConsumableArray(t.children)).filter(function (t) {
        return t.matches(e);
      });
    },
    parents: function parents(t, e) {
      var i = [];
      var n = t.parentNode;

      for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;) {
        n.matches(e) && i.push(n), n = n.parentNode;
      }

      return i;
    },
    prev: function prev(t, e) {
      var i = t.previousElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.previousElementSibling;
      }

      return [];
    },
    next: function next(t, e) {
      var i = t.nextElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.nextElementSibling;
      }

      return [];
    },
    focusableChildren: function focusableChildren(t) {
      var e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(function (t) {
        return t + ':not([tabindex^="-"])';
      }).join(", ");
      return this.find(e, t).filter(function (t) {
        return !l(t) && a(t);
      });
    }
  },
      $ = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      V = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      K = "next",
      X = "prev",
      Y = "left",
      Q = "right",
      G = {
    ArrowLeft: Q,
    ArrowRight: Y
  };

  var Z = /*#__PURE__*/function (_H3) {
    _inherits(Z, _H3);

    var _super3 = _createSuper(Z);

    function Z(t, e) {
      var _this3;

      _classCallCheck(this, Z);

      _this3 = _super3.call(this, t), _this3._items = null, _this3._interval = null, _this3._activeElement = null, _this3._isPaused = !1, _this3._isSliding = !1, _this3.touchTimeout = null, _this3.touchStartX = 0, _this3.touchDeltaX = 0, _this3._config = _this3._getConfig(e), _this3._indicatorsElement = U.findOne(".carousel-indicators", _this3._element), _this3._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, _this3._pointerEvent = Boolean(window.PointerEvent), _this3._addEventListeners();
      return _this3;
    }

    _createClass(Z, [{
      key: "next",
      value: function next() {
        this._slide(K);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        !document.hidden && a(this._element) && this.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        this._slide(X);
      }
    }, {
      key: "pause",
      value: function pause(t) {
        t || (this._isPaused = !0), U.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (n(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }
    }, {
      key: "cycle",
      value: function cycle(t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }
    }, {
      key: "to",
      value: function to(t) {
        var _this4 = this;

        this._activeElement = U.findOne(".active.carousel-item", this._element);

        var e = this._getItemIndex(this._activeElement);

        if (t > this._items.length - 1 || t < 0) return;
        if (this._isSliding) return void P.one(this._element, "slid.bs.carousel", function () {
          return _this4.to(t);
        });
        if (e === t) return this.pause(), void this.cycle();
        var i = t > e ? K : X;

        this._slide(i, this._items[t]);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, $), F.getDataAttributes(this._element)), "object" == _typeof(t) ? t : {}), r("carousel", t, V), t;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var t = Math.abs(this.touchDeltaX);
        if (t <= 40) return;
        var e = t / this.touchDeltaX;
        this.touchDeltaX = 0, e && this._slide(e > 0 ? Q : Y);
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this5 = this;

        this._config.keyboard && P.on(this._element, "keydown.bs.carousel", function (t) {
          return _this5._keydown(t);
        }), "hover" === this._config.pause && (P.on(this._element, "mouseenter.bs.carousel", function (t) {
          return _this5.pause(t);
        }), P.on(this._element, "mouseleave.bs.carousel", function (t) {
          return _this5.cycle(t);
        })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this6 = this;

        var t = function t(_t4) {
          return _this6._pointerEvent && ("pen" === _t4.pointerType || "touch" === _t4.pointerType);
        },
            e = function e(_e5) {
          t(_e5) ? _this6.touchStartX = _e5.clientX : _this6._pointerEvent || (_this6.touchStartX = _e5.touches[0].clientX);
        },
            i = function i(t) {
          _this6.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - _this6.touchStartX;
        },
            n = function n(e) {
          t(e) && (_this6.touchDeltaX = e.clientX - _this6.touchStartX), _this6._handleSwipe(), "hover" === _this6._config.pause && (_this6.pause(), _this6.touchTimeout && clearTimeout(_this6.touchTimeout), _this6.touchTimeout = setTimeout(function (t) {
            return _this6.cycle(t);
          }, 500 + _this6._config.interval));
        };

        U.find(".carousel-item img", this._element).forEach(function (t) {
          P.on(t, "dragstart.bs.carousel", function (t) {
            return t.preventDefault();
          });
        }), this._pointerEvent ? (P.on(this._element, "pointerdown.bs.carousel", function (t) {
          return e(t);
        }), P.on(this._element, "pointerup.bs.carousel", function (t) {
          return n(t);
        }), this._element.classList.add("pointer-event")) : (P.on(this._element, "touchstart.bs.carousel", function (t) {
          return e(t);
        }), P.on(this._element, "touchmove.bs.carousel", function (t) {
          return i(t);
        }), P.on(this._element, "touchend.bs.carousel", function (t) {
          return n(t);
        }));
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (/input|textarea/i.test(t.target.tagName)) return;
        var e = G[t.key];
        e && (t.preventDefault(), this._slide(e));
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(t) {
        return this._items = t && t.parentNode ? U.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t);
      }
    }, {
      key: "_getItemByOrder",
      value: function _getItemByOrder(t, e) {
        var i = t === K;
        return b(this._items, e, i, this._config.wrap);
      }
    }, {
      key: "_triggerSlideEvent",
      value: function _triggerSlideEvent(t, e) {
        var i = this._getItemIndex(t),
            n = this._getItemIndex(U.findOne(".active.carousel-item", this._element));

        return P.trigger(this._element, "slide.bs.carousel", {
          relatedTarget: t,
          direction: e,
          from: n,
          to: i
        });
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(t) {
        if (this._indicatorsElement) {
          var _e6 = U.findOne(".active", this._indicatorsElement);

          _e6.classList.remove("active"), _e6.removeAttribute("aria-current");

          var _i3 = U.find("[data-bs-target]", this._indicatorsElement);

          for (var _e7 = 0; _e7 < _i3.length; _e7++) {
            if (Number.parseInt(_i3[_e7].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
              _i3[_e7].classList.add("active"), _i3[_e7].setAttribute("aria-current", "true");
              break;
            }
          }
        }
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var t = this._activeElement || U.findOne(".active.carousel-item", this._element);
        if (!t) return;
        var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
        e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }, {
      key: "_slide",
      value: function _slide(t, e) {
        var _this7 = this;

        var i = this._directionToOrder(t),
            n = U.findOne(".active.carousel-item", this._element),
            s = this._getItemIndex(n),
            o = e || this._getItemByOrder(i, n),
            r = this._getItemIndex(o),
            a = Boolean(this._interval),
            l = i === K,
            c = l ? "carousel-item-start" : "carousel-item-end",
            h = l ? "carousel-item-next" : "carousel-item-prev",
            u = this._orderToDirection(i);

        if (o && o.classList.contains("active")) return void (this._isSliding = !1);
        if (this._isSliding) return;
        if (this._triggerSlideEvent(o, u).defaultPrevented) return;
        if (!n || !o) return;
        this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o;

        var f = function f() {
          P.trigger(_this7._element, "slid.bs.carousel", {
            relatedTarget: o,
            direction: u,
            from: s,
            to: r
          });
        };

        if (this._element.classList.contains("slide")) {
          o.classList.add(h), d(o), n.classList.add(c), o.classList.add(c);

          var _t5 = function _t5() {
            o.classList.remove(c, h), o.classList.add("active"), n.classList.remove("active", h, c), _this7._isSliding = !1, setTimeout(f, 0);
          };

          this._queueCallback(_t5, n, !0);
        } else n.classList.remove("active"), o.classList.add("active"), this._isSliding = !1, f();

        a && this.cycle();
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(t) {
        return [Q, Y].includes(t) ? p() ? t === Y ? X : K : t === Y ? K : X : t;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(t) {
        return [K, X].includes(t) ? p() ? t === X ? Y : Q : t === X ? Q : Y : t;
      }
    }], [{
      key: "Default",
      get: function get() {
        return $;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "carousel";
      }
    }, {
      key: "carouselInterface",
      value: function carouselInterface(t, e) {
        var i = Z.getOrCreateInstance(t, e);
        var n = i._config;
        "object" == _typeof(e) && (n = _objectSpread(_objectSpread({}, n), e));
        var s = "string" == typeof e ? e : n.slide;
        if ("number" == typeof e) i.to(e);else if ("string" == typeof s) {
          if (void 0 === i[s]) throw new TypeError("No method named \"".concat(s, "\""));
          i[s]();
        } else n.interval && n.ride && (i.pause(), i.cycle());
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          Z.carouselInterface(this, t);
        });
      }
    }, {
      key: "dataApiClickHandler",
      value: function dataApiClickHandler(t) {
        var e = i(this);
        if (!e || !e.classList.contains("carousel")) return;

        var n = _objectSpread(_objectSpread({}, F.getDataAttributes(e)), F.getDataAttributes(this)),
            s = this.getAttribute("data-bs-slide-to");

        s && (n.interval = !1), Z.carouselInterface(e, n), s && Z.getInstance(e).to(s), t.preventDefault();
      }
    }]);

    return Z;
  }(H);

  P.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Z.dataApiClickHandler), P.on(window, "load.bs.carousel.data-api", function () {
    var t = U.find('[data-bs-ride="carousel"]');

    for (var _e8 = 0, _i4 = t.length; _e8 < _i4; _e8++) {
      Z.carouselInterface(t[_e8], Z.getInstance(t[_e8]));
    }
  }), m(Z);
  var J = {
    toggle: !0,
    parent: null
  },
      tt = {
    toggle: "boolean",
    parent: "(null|element)"
  };

  var et = /*#__PURE__*/function (_H4) {
    _inherits(et, _H4);

    var _super4 = _createSuper(et);

    function et(t, i) {
      var _this8;

      _classCallCheck(this, et);

      _this8 = _super4.call(this, t), _this8._isTransitioning = !1, _this8._config = _this8._getConfig(i), _this8._triggerArray = [];
      var n = U.find('[data-bs-toggle="collapse"]');

      for (var _t6 = 0, _i5 = n.length; _t6 < _i5; _t6++) {
        var _i6 = n[_t6],
            _s2 = e(_i6),
            _o3 = U.find(_s2).filter(function (t) {
          return t === _this8._element;
        });

        null !== _s2 && _o3.length && (_this8._selector = _s2, _this8._triggerArray.push(_i6));
      }

      _this8._initializeChildren(), _this8._config.parent || _this8._addAriaAndCollapsedClass(_this8._triggerArray, _this8._isShown()), _this8._config.toggle && _this8.toggle();
      return _this8;
    }

    _createClass(et, [{
      key: "toggle",
      value: function toggle() {
        this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _this9 = this;

        if (this._isTransitioning || this._isShown()) return;
        var t,
            e = [];

        if (this._config.parent) {
          var _t7 = U.find(".collapse .collapse", this._config.parent);

          e = U.find(".collapse.show, .collapse.collapsing", this._config.parent).filter(function (e) {
            return !_t7.includes(e);
          });
        }

        var i = U.findOne(this._selector);

        if (e.length) {
          var _n3 = e.find(function (t) {
            return i !== t;
          });

          if (t = _n3 ? et.getInstance(_n3) : null, t && t._isTransitioning) return;
        }

        if (P.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
        e.forEach(function (e) {
          i !== e && et.getOrCreateInstance(e, {
            toggle: !1
          }).hide(), t || M.set(e, "bs.collapse", null);
        });

        var n = this._getDimension();

        this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[n] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
        var s = "scroll" + (n[0].toUpperCase() + n.slice(1));
        this._queueCallback(function () {
          _this9._isTransitioning = !1, _this9._element.classList.remove("collapsing"), _this9._element.classList.add("collapse", "show"), _this9._element.style[n] = "", P.trigger(_this9._element, "shown.bs.collapse");
        }, this._element, !0), this._element.style[n] = this._element[s] + "px";
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this10 = this;

        if (this._isTransitioning || !this._isShown()) return;
        if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;

        var t = this._getDimension();

        this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", d(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
        var e = this._triggerArray.length;

        for (var _t8 = 0; _t8 < e; _t8++) {
          var _e9 = this._triggerArray[_t8],
              _n4 = i(_e9);

          _n4 && !this._isShown(_n4) && this._addAriaAndCollapsedClass([_e9], !1);
        }

        this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(function () {
          _this10._isTransitioning = !1, _this10._element.classList.remove("collapsing"), _this10._element.classList.add("collapse"), P.trigger(_this10._element, "hidden.bs.collapse");
        }, this._element, !0);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return t.classList.contains("show");
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread(_objectSpread(_objectSpread({}, J), F.getDataAttributes(this._element)), t)).toggle = Boolean(t.toggle), t.parent = o(t.parent), r("collapse", t, tt), t;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
      }
    }, {
      key: "_initializeChildren",
      value: function _initializeChildren() {
        var _this11 = this;

        if (!this._config.parent) return;
        var t = U.find(".collapse .collapse", this._config.parent);
        U.find('[data-bs-toggle="collapse"]', this._config.parent).filter(function (e) {
          return !t.includes(e);
        }).forEach(function (t) {
          var e = i(t);
          e && _this11._addAriaAndCollapsedClass([t], _this11._isShown(e));
        });
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(t, e) {
        t.length && t.forEach(function (t) {
          e ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", e);
        });
      }
    }], [{
      key: "Default",
      get: function get() {
        return J;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "collapse";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = {};
          "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
          var i = et.getOrCreateInstance(this, e);

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t]();
          }
        });
      }
    }]);

    return et;
  }(H);

  P.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    var i = e(this);
    U.find(i).forEach(function (t) {
      et.getOrCreateInstance(t, {
        toggle: !1
      }).toggle();
    });
  }), m(et);
  var it = "top",
      nt = "bottom",
      st = "right",
      ot = "left",
      rt = [it, nt, st, ot],
      at = "end",
      lt = rt.reduce(function (t, e) {
    return t.concat([e + "-start", e + "-" + at]);
  }, []),
      ct = [].concat(rt, ["auto"]).reduce(function (t, e) {
    return t.concat([e, e + "-start", e + "-" + at]);
  }, []),
      ht = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

  function dt(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }

  function ut(t) {
    if (null == t) return window;

    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return e && e.defaultView || window;
    }

    return t;
  }

  function ft(t) {
    return t instanceof ut(t).Element || t instanceof Element;
  }

  function pt(t) {
    return t instanceof ut(t).HTMLElement || t instanceof HTMLElement;
  }

  function mt(t) {
    return "undefined" != typeof ShadowRoot && (t instanceof ut(t).ShadowRoot || t instanceof ShadowRoot);
  }

  var gt = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function fn(t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
            n = e.attributes[t] || {},
            s = e.elements[t];
        pt(s) && dt(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function (t) {
          var e = n[t];
          !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
        }));
      });
    },
    effect: function effect(t) {
      var e = t.state,
          i = {
        popper: {
          position: e.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function () {
        Object.keys(e.elements).forEach(function (t) {
          var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function (t, e) {
            return t[e] = "", t;
          }, {});
          pt(n) && dt(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function (t) {
            n.removeAttribute(t);
          }));
        });
      };
    },
    requires: ["computeStyles"]
  };

  function _t(t) {
    return t.split("-")[0];
  }

  var bt = Math.round;

  function vt(t, e) {
    void 0 === e && (e = !1);
    var i = t.getBoundingClientRect(),
        n = 1,
        s = 1;

    if (pt(t) && e) {
      var o = t.offsetHeight,
          r = t.offsetWidth;
      r > 0 && (n = i.width / r || 1), o > 0 && (s = i.height / o || 1);
    }

    return {
      width: bt(i.width / n),
      height: bt(i.height / s),
      top: bt(i.top / s),
      right: bt(i.right / n),
      bottom: bt(i.bottom / s),
      left: bt(i.left / n),
      x: bt(i.left / n),
      y: bt(i.top / s)
    };
  }

  function yt(t) {
    var e = vt(t),
        i = t.offsetWidth,
        n = t.offsetHeight;
    return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: i,
      height: n
    };
  }

  function wt(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;

    if (i && mt(i)) {
      var n = e;

      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }

    return !1;
  }

  function Et(t) {
    return ut(t).getComputedStyle(t);
  }

  function At(t) {
    return ["table", "td", "th"].indexOf(dt(t)) >= 0;
  }

  function Tt(t) {
    return ((ft(t) ? t.ownerDocument : t.document) || window.document).documentElement;
  }

  function Ot(t) {
    return "html" === dt(t) ? t : t.assignedSlot || t.parentNode || (mt(t) ? t.host : null) || Tt(t);
  }

  function Ct(t) {
    return pt(t) && "fixed" !== Et(t).position ? t.offsetParent : null;
  }

  function kt(t) {
    for (var e = ut(t), i = Ct(t); i && At(i) && "static" === Et(i).position;) {
      i = Ct(i);
    }

    return i && ("html" === dt(i) || "body" === dt(i) && "static" === Et(i).position) ? e : i || function (t) {
      var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
      if (-1 !== navigator.userAgent.indexOf("Trident") && pt(t) && "fixed" === Et(t).position) return null;

      for (var i = Ot(t); pt(i) && ["html", "body"].indexOf(dt(i)) < 0;) {
        var n = Et(i);
        if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
        i = i.parentNode;
      }

      return null;
    }(t) || e;
  }

  function Lt(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }

  var xt = Math.max,
      Dt = Math.min,
      St = Math.round;

  function Nt(t, e, i) {
    return xt(t, Dt(e, i));
  }

  function It(t) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, t);
  }

  function Pt(t, e) {
    return e.reduce(function (e, i) {
      return e[i] = t, e;
    }, {});
  }

  var jt = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e,
          i = t.state,
          n = t.name,
          s = t.options,
          o = i.elements.arrow,
          r = i.modifiersData.popperOffsets,
          a = _t(i.placement),
          l = Lt(a),
          c = [ot, st].indexOf(a) >= 0 ? "height" : "width";

      if (o && r) {
        var h = function (t, e) {
          return It("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
            placement: e.placement
          })) : t) ? t : Pt(t, rt));
        }(s.padding, i),
            d = yt(o),
            u = "y" === l ? it : ot,
            f = "y" === l ? nt : st,
            p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
            m = r[l] - i.rects.reference[l],
            g = kt(o),
            _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
            b = p / 2 - m / 2,
            v = h[u],
            y = _ - d[c] - h[f],
            w = _ / 2 - d[c] / 2 + b,
            E = Nt(v, w, y),
            A = l;

        i.modifiersData[n] = ((e = {})[A] = E, e.centerOffset = E - w, e);
      }
    },
    effect: function effect(t) {
      var e = t.state,
          i = t.options.element,
          n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && wt(e.elements.popper, n) && (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };

  function Mt(t) {
    return t.split("-")[1];
  }

  var Ht = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };

  function Bt(t) {
    var e,
        i = t.popper,
        n = t.popperRect,
        s = t.placement,
        o = t.variation,
        r = t.offsets,
        a = t.position,
        l = t.gpuAcceleration,
        c = t.adaptive,
        h = t.roundOffsets,
        d = !0 === h ? function (t) {
      var e = t.x,
          i = t.y,
          n = window.devicePixelRatio || 1;
      return {
        x: St(St(e * n) / n) || 0,
        y: St(St(i * n) / n) || 0
      };
    }(r) : "function" == typeof h ? h(r) : r,
        u = d.x,
        f = void 0 === u ? 0 : u,
        p = d.y,
        m = void 0 === p ? 0 : p,
        g = r.hasOwnProperty("x"),
        _ = r.hasOwnProperty("y"),
        b = ot,
        v = it,
        y = window;

    if (c) {
      var w = kt(i),
          E = "clientHeight",
          A = "clientWidth";
      w === ut(i) && "static" !== Et(w = Tt(i)).position && "absolute" === a && (E = "scrollHeight", A = "scrollWidth"), w = w, s !== it && (s !== ot && s !== st || o !== at) || (v = nt, m -= w[E] - n.height, m *= l ? 1 : -1), s !== ot && (s !== it && s !== nt || o !== at) || (b = st, f -= w[A] - n.width, f *= l ? 1 : -1);
    }

    var T,
        O = Object.assign({
      position: a
    }, c && Ht);
    return l ? Object.assign({}, O, ((T = {})[v] = _ ? "0" : "", T[b] = g ? "0" : "", T.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", T)) : Object.assign({}, O, ((e = {})[v] = _ ? m + "px" : "", e[b] = g ? f + "px" : "", e.transform = "", e));
  }

  var Rt = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = i.gpuAcceleration,
          s = void 0 === n || n,
          o = i.adaptive,
          r = void 0 === o || o,
          a = i.roundOffsets,
          l = void 0 === a || a,
          c = {
        placement: _t(e.placement),
        variation: Mt(e.placement),
        popper: e.elements.popper,
        popperRect: e.rects.popper,
        gpuAcceleration: s
      };
      null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, Bt(Object.assign({}, c, {
        offsets: e.modifiersData.popperOffsets,
        position: e.options.strategy,
        adaptive: r,
        roundOffsets: l
      })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, Bt(Object.assign({}, c, {
        offsets: e.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
      })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-placement": e.placement
      });
    },
    data: {}
  },
      Wt = {
    passive: !0
  },
      zt = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function fn() {},
    effect: function effect(t) {
      var e = t.state,
          i = t.instance,
          n = t.options,
          s = n.scroll,
          o = void 0 === s || s,
          r = n.resize,
          a = void 0 === r || r,
          l = ut(e.elements.popper),
          c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return o && c.forEach(function (t) {
        t.addEventListener("scroll", i.update, Wt);
      }), a && l.addEventListener("resize", i.update, Wt), function () {
        o && c.forEach(function (t) {
          t.removeEventListener("scroll", i.update, Wt);
        }), a && l.removeEventListener("resize", i.update, Wt);
      };
    },
    data: {}
  },
      qt = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };

  function Ft(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return qt[t];
    });
  }

  var Ut = {
    start: "end",
    end: "start"
  };

  function $t(t) {
    return t.replace(/start|end/g, function (t) {
      return Ut[t];
    });
  }

  function Vt(t) {
    var e = ut(t);
    return {
      scrollLeft: e.pageXOffset,
      scrollTop: e.pageYOffset
    };
  }

  function Kt(t) {
    return vt(Tt(t)).left + Vt(t).scrollLeft;
  }

  function Xt(t) {
    var e = Et(t),
        i = e.overflow,
        n = e.overflowX,
        s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }

  function Yt(t, e) {
    var i;
    void 0 === e && (e = []);

    var n = function t(e) {
      return ["html", "body", "#document"].indexOf(dt(e)) >= 0 ? e.ownerDocument.body : pt(e) && Xt(e) ? e : t(Ot(e));
    }(t),
        s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
        o = ut(n),
        r = s ? [o].concat(o.visualViewport || [], Xt(n) ? n : []) : n,
        a = e.concat(r);

    return s ? a : a.concat(Yt(Ot(r)));
  }

  function Qt(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height
    });
  }

  function Gt(t, e) {
    return "viewport" === e ? Qt(function (t) {
      var e = ut(t),
          i = Tt(t),
          n = e.visualViewport,
          s = i.clientWidth,
          o = i.clientHeight,
          r = 0,
          a = 0;
      return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
        width: s,
        height: o,
        x: r + Kt(t),
        y: a
      };
    }(t)) : pt(e) ? function (t) {
      var e = vt(t);
      return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
    }(e) : Qt(function (t) {
      var e,
          i = Tt(t),
          n = Vt(t),
          s = null == (e = t.ownerDocument) ? void 0 : e.body,
          o = xt(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
          r = xt(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
          a = -n.scrollLeft + Kt(t),
          l = -n.scrollTop;
      return "rtl" === Et(s || i).direction && (a += xt(i.clientWidth, s ? s.clientWidth : 0) - o), {
        width: o,
        height: r,
        x: a,
        y: l
      };
    }(Tt(t)));
  }

  function Zt(t) {
    var e,
        i = t.reference,
        n = t.element,
        s = t.placement,
        o = s ? _t(s) : null,
        r = s ? Mt(s) : null,
        a = i.x + i.width / 2 - n.width / 2,
        l = i.y + i.height / 2 - n.height / 2;

    switch (o) {
      case it:
        e = {
          x: a,
          y: i.y - n.height
        };
        break;

      case nt:
        e = {
          x: a,
          y: i.y + i.height
        };
        break;

      case st:
        e = {
          x: i.x + i.width,
          y: l
        };
        break;

      case ot:
        e = {
          x: i.x - n.width,
          y: l
        };
        break;

      default:
        e = {
          x: i.x,
          y: i.y
        };
    }

    var c = o ? Lt(o) : null;

    if (null != c) {
      var h = "y" === c ? "height" : "width";

      switch (r) {
        case "start":
          e[c] = e[c] - (i[h] / 2 - n[h] / 2);
          break;

        case at:
          e[c] = e[c] + (i[h] / 2 - n[h] / 2);
      }
    }

    return e;
  }

  function Jt(t, e) {
    void 0 === e && (e = {});

    var i = e,
        n = i.placement,
        s = void 0 === n ? t.placement : n,
        o = i.boundary,
        r = void 0 === o ? "clippingParents" : o,
        a = i.rootBoundary,
        l = void 0 === a ? "viewport" : a,
        c = i.elementContext,
        h = void 0 === c ? "popper" : c,
        d = i.altBoundary,
        u = void 0 !== d && d,
        f = i.padding,
        p = void 0 === f ? 0 : f,
        m = It("number" != typeof p ? p : Pt(p, rt)),
        g = "popper" === h ? "reference" : "popper",
        _ = t.rects.popper,
        b = t.elements[u ? g : h],
        v = function (t, e, i) {
      var n = "clippingParents" === e ? function (t) {
        var e = Yt(Ot(t)),
            i = ["absolute", "fixed"].indexOf(Et(t).position) >= 0 && pt(t) ? kt(t) : t;
        return ft(i) ? e.filter(function (t) {
          return ft(t) && wt(t, i) && "body" !== dt(t);
        }) : [];
      }(t) : [].concat(e),
          s = [].concat(n, [i]),
          o = s[0],
          r = s.reduce(function (e, i) {
        var n = Gt(t, i);
        return e.top = xt(n.top, e.top), e.right = Dt(n.right, e.right), e.bottom = Dt(n.bottom, e.bottom), e.left = xt(n.left, e.left), e;
      }, Gt(t, o));
      return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
    }(ft(b) ? b : b.contextElement || Tt(t.elements.popper), r, l),
        y = vt(t.elements.reference),
        w = Zt({
      reference: y,
      element: _,
      strategy: "absolute",
      placement: s
    }),
        E = Qt(Object.assign({}, _, w)),
        A = "popper" === h ? E : y,
        T = {
      top: v.top - A.top + m.top,
      bottom: A.bottom - v.bottom + m.bottom,
      left: v.left - A.left + m.left,
      right: A.right - v.right + m.right
    },
        O = t.modifiersData.offset;

    if ("popper" === h && O) {
      var C = O[s];
      Object.keys(T).forEach(function (t) {
        var e = [st, nt].indexOf(t) >= 0 ? 1 : -1,
            i = [it, nt].indexOf(t) >= 0 ? "y" : "x";
        T[t] += C[i] * e;
      });
    }

    return T;
  }

  function te(t, e) {
    void 0 === e && (e = {});
    var i = e,
        n = i.placement,
        s = i.boundary,
        o = i.rootBoundary,
        r = i.padding,
        a = i.flipVariations,
        l = i.allowedAutoPlacements,
        c = void 0 === l ? ct : l,
        h = Mt(n),
        d = h ? a ? lt : lt.filter(function (t) {
      return Mt(t) === h;
    }) : rt,
        u = d.filter(function (t) {
      return c.indexOf(t) >= 0;
    });
    0 === u.length && (u = d);
    var f = u.reduce(function (e, i) {
      return e[i] = Jt(t, {
        placement: i,
        boundary: s,
        rootBoundary: o,
        padding: r
      })[_t(i)], e;
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }

  var ee = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name;

      if (!e.modifiersData[n]._skip) {
        for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = _t(g), b = l || (_ !== g && p ? function (t) {
          if ("auto" === _t(t)) return [];
          var e = Ft(t);
          return [$t(t), e, $t(e)];
        }(g) : [Ft(g)]), v = [g].concat(b).reduce(function (t, i) {
          return t.concat("auto" === _t(i) ? te(e, {
            placement: i,
            boundary: h,
            rootBoundary: d,
            padding: c,
            flipVariations: p,
            allowedAutoPlacements: m
          }) : i);
        }, []), y = e.rects.reference, w = e.rects.popper, E = new Map(), A = !0, T = v[0], O = 0; O < v.length; O++) {
          var C = v[O],
              k = _t(C),
              L = "start" === Mt(C),
              x = [it, nt].indexOf(k) >= 0,
              D = x ? "width" : "height",
              S = Jt(e, {
            placement: C,
            boundary: h,
            rootBoundary: d,
            altBoundary: u,
            padding: c
          }),
              N = x ? L ? st : ot : L ? nt : it;

          y[D] > w[D] && (N = Ft(N));
          var I = Ft(N),
              P = [];

          if (o && P.push(S[k] <= 0), a && P.push(S[N] <= 0, S[I] <= 0), P.every(function (t) {
            return t;
          })) {
            T = C, A = !1;
            break;
          }

          E.set(C, P);
        }

        if (A) for (var j = function j(t) {
          var e = v.find(function (e) {
            var i = E.get(e);
            if (i) return i.slice(0, t).every(function (t) {
              return t;
            });
          });
          if (e) return T = e, "break";
        }, M = p ? 3 : 1; M > 0 && "break" !== j(M); M--) {
          ;
        }
        e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0);
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };

  function ie(t, e, i) {
    return void 0 === i && (i = {
      x: 0,
      y: 0
    }), {
      top: t.top - e.height - i.y,
      right: t.right - e.width + i.x,
      bottom: t.bottom - e.height + i.y,
      left: t.left - e.width - i.x
    };
  }

  function ne(t) {
    return [it, st, nt, ot].some(function (e) {
      return t[e] >= 0;
    });
  }

  var se = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function fn(t) {
      var e = t.state,
          i = t.name,
          n = e.rects.reference,
          s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = Jt(e, {
        elementContext: "reference"
      }),
          a = Jt(e, {
        altBoundary: !0
      }),
          l = ie(r, n),
          c = ie(a, s, o),
          h = ne(l),
          d = ne(c);
      e.modifiersData[i] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: c,
        isReferenceHidden: h,
        hasPopperEscaped: d
      }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-reference-hidden": h,
        "data-popper-escaped": d
      });
    }
  },
      oe = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name,
          s = i.offset,
          o = void 0 === s ? [0, 0] : s,
          r = ct.reduce(function (t, i) {
        return t[i] = function (t, e, i) {
          var n = _t(t),
              s = [ot, it].indexOf(n) >= 0 ? -1 : 1,
              o = "function" == typeof i ? i(Object.assign({}, e, {
            placement: t
          })) : i,
              r = o[0],
              a = o[1];

          return r = r || 0, a = (a || 0) * s, [ot, st].indexOf(n) >= 0 ? {
            x: a,
            y: r
          } : {
            x: r,
            y: a
          };
        }(i, e.rects, o), t;
      }, {}),
          a = r[e.placement],
          l = a.x,
          c = a.y;
      null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r;
    }
  },
      re = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function fn(t) {
      var e = t.state,
          i = t.name;
      e.modifiersData[i] = Zt({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement
      });
    },
    data: {}
  },
      ae = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name,
          s = i.mainAxis,
          o = void 0 === s || s,
          r = i.altAxis,
          a = void 0 !== r && r,
          l = i.boundary,
          c = i.rootBoundary,
          h = i.altBoundary,
          d = i.padding,
          u = i.tether,
          f = void 0 === u || u,
          p = i.tetherOffset,
          m = void 0 === p ? 0 : p,
          g = Jt(e, {
        boundary: l,
        rootBoundary: c,
        padding: d,
        altBoundary: h
      }),
          _ = _t(e.placement),
          b = Mt(e.placement),
          v = !b,
          y = Lt(_),
          w = "x" === y ? "y" : "x",
          E = e.modifiersData.popperOffsets,
          A = e.rects.reference,
          T = e.rects.popper,
          O = "function" == typeof m ? m(Object.assign({}, e.rects, {
        placement: e.placement
      })) : m,
          C = {
        x: 0,
        y: 0
      };

      if (E) {
        if (o || a) {
          var k = "y" === y ? it : ot,
              L = "y" === y ? nt : st,
              x = "y" === y ? "height" : "width",
              D = E[y],
              S = E[y] + g[k],
              N = E[y] - g[L],
              I = f ? -T[x] / 2 : 0,
              P = "start" === b ? A[x] : T[x],
              j = "start" === b ? -T[x] : -A[x],
              M = e.elements.arrow,
              H = f && M ? yt(M) : {
            width: 0,
            height: 0
          },
              B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
              R = B[k],
              W = B[L],
              z = Nt(0, A[x], H[x]),
              q = v ? A[x] / 2 - I - z - R - O : P - z - R - O,
              F = v ? -A[x] / 2 + I + z + W + O : j + z + W + O,
              U = e.elements.arrow && kt(e.elements.arrow),
              $ = U ? "y" === y ? U.clientTop || 0 : U.clientLeft || 0 : 0,
              V = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0,
              K = E[y] + q - V - $,
              X = E[y] + F - V;

          if (o) {
            var Y = Nt(f ? Dt(S, K) : S, D, f ? xt(N, X) : N);
            E[y] = Y, C[y] = Y - D;
          }

          if (a) {
            var Q = "x" === y ? it : ot,
                G = "x" === y ? nt : st,
                Z = E[w],
                J = Z + g[Q],
                tt = Z - g[G],
                et = Nt(f ? Dt(J, K) : J, Z, f ? xt(tt, X) : tt);
            E[w] = et, C[w] = et - Z;
          }
        }

        e.modifiersData[n] = C;
      }
    },
    requiresIfExists: ["offset"]
  };

  function le(t, e, i) {
    void 0 === i && (i = !1);

    var n,
        s,
        o = pt(e),
        r = pt(e) && function (t) {
      var e = t.getBoundingClientRect(),
          i = e.width / t.offsetWidth || 1,
          n = e.height / t.offsetHeight || 1;
      return 1 !== i || 1 !== n;
    }(e),
        a = Tt(e),
        l = vt(t, r),
        c = {
      scrollLeft: 0,
      scrollTop: 0
    },
        h = {
      x: 0,
      y: 0
    };

    return (o || !o && !i) && (("body" !== dt(e) || Xt(a)) && (c = (n = e) !== ut(n) && pt(n) ? {
      scrollLeft: (s = n).scrollLeft,
      scrollTop: s.scrollTop
    } : Vt(n)), pt(e) ? ((h = vt(e, !0)).x += e.clientLeft, h.y += e.clientTop) : a && (h.x = Kt(a))), {
      x: l.left + c.scrollLeft - h.x,
      y: l.top + c.scrollTop - h.y,
      width: l.width,
      height: l.height
    };
  }

  var ce = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };

  function he() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) {
      e[i] = arguments[i];
    }

    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }

  function de(t) {
    void 0 === t && (t = {});
    var e = t,
        i = e.defaultModifiers,
        n = void 0 === i ? [] : i,
        s = e.defaultOptions,
        o = void 0 === s ? ce : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
          r,
          a = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, ce, o),
        modifiersData: {},
        elements: {
          reference: t,
          popper: e
        },
        attributes: {},
        styles: {}
      },
          l = [],
          c = !1,
          h = {
        state: a,
        setOptions: function setOptions(i) {
          var s = "function" == typeof i ? i(a.options) : i;
          d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
            reference: ft(t) ? Yt(t) : t.contextElement ? Yt(t.contextElement) : [],
            popper: Yt(e)
          };

          var r,
              c,
              u = function (t) {
            var e = function (t) {
              var e = new Map(),
                  i = new Set(),
                  n = [];
              return t.forEach(function (t) {
                e.set(t.name, t);
              }), t.forEach(function (t) {
                i.has(t.name) || function t(s) {
                  i.add(s.name), [].concat(s.requires || [], s.requiresIfExists || []).forEach(function (n) {
                    if (!i.has(n)) {
                      var s = e.get(n);
                      s && t(s);
                    }
                  }), n.push(s);
                }(t);
              }), n;
            }(t);

            return ht.reduce(function (t, i) {
              return t.concat(e.filter(function (t) {
                return t.phase === i;
              }));
            }, []);
          }((r = [].concat(n, a.options.modifiers), c = r.reduce(function (t, e) {
            var i = t[e.name];
            return t[e.name] = i ? Object.assign({}, i, e, {
              options: Object.assign({}, i.options, e.options),
              data: Object.assign({}, i.data, e.data)
            }) : e, t;
          }, {}), Object.keys(c).map(function (t) {
            return c[t];
          })));

          return a.orderedModifiers = u.filter(function (t) {
            return t.enabled;
          }), a.orderedModifiers.forEach(function (t) {
            var e = t.name,
                i = t.options,
                n = void 0 === i ? {} : i,
                s = t.effect;

            if ("function" == typeof s) {
              var o = s({
                state: a,
                name: e,
                instance: h,
                options: n
              });
              l.push(o || function () {});
            }
          }), h.update();
        },
        forceUpdate: function forceUpdate() {
          if (!c) {
            var t = a.elements,
                e = t.reference,
                i = t.popper;

            if (he(e, i)) {
              a.rects = {
                reference: le(e, kt(i), "fixed" === a.options.strategy),
                popper: yt(i)
              }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function (t) {
                return a.modifiersData[t.name] = Object.assign({}, t.data);
              });

              for (var n = 0; n < a.orderedModifiers.length; n++) {
                if (!0 !== a.reset) {
                  var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      d = s.name;
                  "function" == typeof o && (a = o({
                    state: a,
                    options: l,
                    name: d,
                    instance: h
                  }) || a);
                } else a.reset = !1, n = -1;
              }
            }
          }
        },
        update: (s = function s() {
          return new Promise(function (t) {
            h.forceUpdate(), t(a);
          });
        }, function () {
          return r || (r = new Promise(function (t) {
            Promise.resolve().then(function () {
              r = void 0, t(s());
            });
          })), r;
        }),
        destroy: function destroy() {
          d(), c = !0;
        }
      };
      if (!he(t, e)) return h;

      function d() {
        l.forEach(function (t) {
          return t();
        }), l = [];
      }

      return h.setOptions(i).then(function (t) {
        !c && i.onFirstUpdate && i.onFirstUpdate(t);
      }), h;
    };
  }

  var ue = de(),
      fe = de({
    defaultModifiers: [zt, re, Rt, gt]
  }),
      pe = de({
    defaultModifiers: [zt, re, Rt, gt, oe, ee, ae, jt, se]
  }),
      me = Object.freeze({
    __proto__: null,
    popperGenerator: de,
    detectOverflow: Jt,
    createPopperBase: ue,
    createPopper: pe,
    createPopperLite: fe,
    top: it,
    bottom: nt,
    right: st,
    left: ot,
    auto: "auto",
    basePlacements: rt,
    start: "start",
    end: at,
    clippingParents: "clippingParents",
    viewport: "viewport",
    popper: "popper",
    reference: "reference",
    variationPlacements: lt,
    placements: ct,
    beforeRead: "beforeRead",
    read: "read",
    afterRead: "afterRead",
    beforeMain: "beforeMain",
    main: "main",
    afterMain: "afterMain",
    beforeWrite: "beforeWrite",
    write: "write",
    afterWrite: "afterWrite",
    modifierPhases: ht,
    applyStyles: gt,
    arrow: jt,
    computeStyles: Rt,
    eventListeners: zt,
    flip: ee,
    hide: se,
    offset: oe,
    popperOffsets: re,
    preventOverflow: ae
  });

  var ge = new RegExp("ArrowUp|ArrowDown|Escape"),
      _e = p() ? "top-end" : "top-start",
      be = p() ? "top-start" : "top-end",
      ve = p() ? "bottom-end" : "bottom-start",
      ye = p() ? "bottom-start" : "bottom-end",
      we = p() ? "left-start" : "right-start",
      Ee = p() ? "right-start" : "left-start",
      Ae = {
    offset: [0, 2],
    boundary: "clippingParents",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null,
    autoClose: !0
  },
      Te = {
    offset: "(array|string|function)",
    boundary: "(string|element)",
    reference: "(string|element|object)",
    display: "string",
    popperConfig: "(null|object|function)",
    autoClose: "(boolean|string)"
  };

  var Oe = /*#__PURE__*/function (_H5) {
    _inherits(Oe, _H5);

    var _super5 = _createSuper(Oe);

    function Oe(t, e) {
      var _this12;

      _classCallCheck(this, Oe);

      _this12 = _super5.call(this, t), _this12._popper = null, _this12._config = _this12._getConfig(e), _this12._menu = _this12._getMenuElement(), _this12._inNavbar = _this12._detectNavbar();
      return _this12;
    }

    _createClass(Oe, [{
      key: "toggle",
      value: function toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _ref4;

        if (l(this._element) || this._isShown(this._menu)) return;
        var t = {
          relatedTarget: this._element
        };
        if (P.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) return;
        var e = Oe.getParentFromElement(this._element);
        this._inNavbar ? F.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e), "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && (_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children)).forEach(function (t) {
          return P.on(t, "mouseover", h);
        }), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add("show"), this._element.classList.add("show"), P.trigger(this._element, "shown.bs.dropdown", t);
      }
    }, {
      key: "hide",
      value: function hide() {
        if (l(this._element) || !this._isShown(this._menu)) return;
        var t = {
          relatedTarget: this._element
        };

        this._completeHide(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._popper && this._popper.destroy(), _get(_getPrototypeOf(Oe.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
    }, {
      key: "_completeHide",
      value: function _completeHide(t) {
        var _ref5;

        P.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && (_ref5 = []).concat.apply(_ref5, _toConsumableArray(document.body.children)).forEach(function (t) {
          return P.off(t, "mouseover", h);
        }), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), F.removeDataAttribute(this._menu, "popper"), P.trigger(this._element, "hidden.bs.dropdown", t));
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if (t = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), F.getDataAttributes(this._element)), t), r("dropdown", t, this.constructor.DefaultType), "object" == _typeof(t.reference) && !s(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
        return t;
      }
    }, {
      key: "_createPopper",
      value: function _createPopper(t) {
        if (void 0 === me) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        var e = this._element;
        "parent" === this._config.reference ? e = t : s(this._config.reference) ? e = o(this._config.reference) : "object" == _typeof(this._config.reference) && (e = this._config.reference);

        var i = this._getPopperConfig(),
            n = i.modifiers.find(function (t) {
          return "applyStyles" === t.name && !1 === t.enabled;
        });

        this._popper = pe(e, this._menu, i), n && F.setDataAttribute(this._menu, "popper", "static");
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return t.classList.contains("show");
      }
    }, {
      key: "_getMenuElement",
      value: function _getMenuElement() {
        return U.next(this._element, ".dropdown-menu")[0];
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var t = this._element.parentNode;
        if (t.classList.contains("dropend")) return we;
        if (t.classList.contains("dropstart")) return Ee;
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? be : _e : e ? ye : ve;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this13 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this13._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var t = {
          placement: this._getPlacement(),
          modifiers: [{
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }]
        };
        return "static" === this._config.display && (t.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), _objectSpread(_objectSpread({}, t), "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig);
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(_ref6) {
        var t = _ref6.key,
            e = _ref6.target;
        var i = U.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(a);
        i.length && b(i, e, "ArrowDown" === t, !i.includes(e)).focus();
      }
    }], [{
      key: "Default",
      get: function get() {
        return Ae;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Te;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "dropdown";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Oe.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(t) {
        if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key)) return;
        var e = U.find('[data-bs-toggle="dropdown"]');

        for (var _i7 = 0, _n5 = e.length; _i7 < _n5; _i7++) {
          var _n6 = Oe.getInstance(e[_i7]);

          if (!_n6 || !1 === _n6._config.autoClose) continue;
          if (!_n6._isShown()) continue;
          var _s3 = {
            relatedTarget: _n6._element
          };

          if (t) {
            var _e10 = t.composedPath(),
                _i8 = _e10.includes(_n6._menu);

            if (_e10.includes(_n6._element) || "inside" === _n6._config.autoClose && !_i8 || "outside" === _n6._config.autoClose && _i8) continue;
            if (_n6._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
            "click" === t.type && (_s3.clickEvent = t);
          }

          _n6._completeHide(_s3);
        }
      }
    }, {
      key: "getParentFromElement",
      value: function getParentFromElement(t) {
        return i(t) || t.parentNode;
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(t) {
        if (/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !ge.test(t.key)) return;
        var e = this.classList.contains("show");
        if (!e && "Escape" === t.key) return;
        if (t.preventDefault(), t.stopPropagation(), l(this)) return;
        var i = this.matches('[data-bs-toggle="dropdown"]') ? this : U.prev(this, '[data-bs-toggle="dropdown"]')[0],
            n = Oe.getOrCreateInstance(i);
        if ("Escape" !== t.key) return "ArrowUp" === t.key || "ArrowDown" === t.key ? (e || n.show(), void n._selectMenuItem(t)) : void (e && "Space" !== t.key || Oe.clearMenus());
        n.hide();
      }
    }]);

    return Oe;
  }(H);

  P.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', Oe.dataApiKeydownHandler), P.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", Oe.dataApiKeydownHandler), P.on(document, "click.bs.dropdown.data-api", Oe.clearMenus), P.on(document, "keyup.bs.dropdown.data-api", Oe.clearMenus), P.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', function (t) {
    t.preventDefault(), Oe.getOrCreateInstance(this).toggle();
  }), m(Oe);

  var Ce = /*#__PURE__*/function () {
    function Ce() {
      _classCallCheck(this, Ce);

      this._element = document.body;
    }

    _createClass(Ce, [{
      key: "getWidth",
      value: function getWidth() {
        var t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t);
      }
    }, {
      key: "hide",
      value: function hide() {
        var t = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", function (e) {
          return e + t;
        }), this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", function (e) {
          return e + t;
        }), this._setElementAttributes(".sticky-top", "marginRight", function (e) {
          return e - t;
        });
      }
    }, {
      key: "_disableOverFlow",
      value: function _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
      }
    }, {
      key: "_setElementAttributes",
      value: function _setElementAttributes(t, e, i) {
        var _this14 = this;

        var n = this.getWidth();

        this._applyManipulationCallback(t, function (t) {
          if (t !== _this14._element && window.innerWidth > t.clientWidth + n) return;

          _this14._saveInitialAttribute(t, e);

          var s = window.getComputedStyle(t)[e];
          t.style[e] = i(Number.parseFloat(s)) + "px";
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight");
      }
    }, {
      key: "_saveInitialAttribute",
      value: function _saveInitialAttribute(t, e) {
        var i = t.style[e];
        i && F.setDataAttribute(t, e, i);
      }
    }, {
      key: "_resetElementAttributes",
      value: function _resetElementAttributes(t, e) {
        this._applyManipulationCallback(t, function (t) {
          var i = F.getDataAttribute(t, e);
          void 0 === i ? t.style.removeProperty(e) : (F.removeDataAttribute(t, e), t.style[e] = i);
        });
      }
    }, {
      key: "_applyManipulationCallback",
      value: function _applyManipulationCallback(t, e) {
        s(t) ? e(t) : U.find(t, this._element).forEach(e);
      }
    }, {
      key: "isOverflowing",
      value: function isOverflowing() {
        return this.getWidth() > 0;
      }
    }]);

    return Ce;
  }();

  var ke = {
    className: "modal-backdrop",
    isVisible: !0,
    isAnimated: !1,
    rootElement: "body",
    clickCallback: null
  },
      Le = {
    className: "string",
    isVisible: "boolean",
    isAnimated: "boolean",
    rootElement: "(element|string)",
    clickCallback: "(function|null)"
  };

  var xe = /*#__PURE__*/function () {
    function xe(t) {
      _classCallCheck(this, xe);

      this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
    }

    _createClass(xe, [{
      key: "show",
      value: function show(t) {
        this._config.isVisible ? (this._append(), this._config.isAnimated && d(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(function () {
          g(t);
        })) : g(t);
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this15 = this;

        this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(function () {
          _this15.dispose(), g(t);
        })) : g(t);
      }
    }, {
      key: "_getElement",
      value: function _getElement() {
        if (!this._element) {
          var _t9 = document.createElement("div");

          _t9.className = this._config.className, this._config.isAnimated && _t9.classList.add("fade"), this._element = _t9;
        }

        return this._element;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread(_objectSpread({}, ke), "object" == _typeof(t) ? t : {})).rootElement = o(t.rootElement), r("backdrop", t, Le), t;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this16 = this;

        this._isAppended || (this._config.rootElement.append(this._getElement()), P.on(this._getElement(), "mousedown.bs.backdrop", function () {
          g(_this16._config.clickCallback);
        }), this._isAppended = !0);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._isAppended && (P.off(this._element, "mousedown.bs.backdrop"), this._element.remove(), this._isAppended = !1);
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(t) {
        _(t, this._getElement(), this._config.isAnimated);
      }
    }]);

    return xe;
  }();

  var De = {
    trapElement: null,
    autofocus: !0
  },
      Se = {
    trapElement: "element",
    autofocus: "boolean"
  };

  var Ne = /*#__PURE__*/function () {
    function Ne(t) {
      _classCallCheck(this, Ne);

      this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
    }

    _createClass(Ne, [{
      key: "activate",
      value: function activate() {
        var _this17 = this;

        var _this$_config = this._config,
            t = _this$_config.trapElement,
            e = _this$_config.autofocus;
        this._isActive || (e && t.focus(), P.off(document, ".bs.focustrap"), P.on(document, "focusin.bs.focustrap", function (t) {
          return _this17._handleFocusin(t);
        }), P.on(document, "keydown.tab.bs.focustrap", function (t) {
          return _this17._handleKeydown(t);
        }), this._isActive = !0);
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        this._isActive && (this._isActive = !1, P.off(document, ".bs.focustrap"));
      }
    }, {
      key: "_handleFocusin",
      value: function _handleFocusin(t) {
        var e = t.target,
            i = this._config.trapElement;
        if (e === document || e === i || i.contains(e)) return;
        var n = U.focusableChildren(i);
        0 === n.length ? i.focus() : "backward" === this._lastTabNavDirection ? n[n.length - 1].focus() : n[0].focus();
      }
    }, {
      key: "_handleKeydown",
      value: function _handleKeydown(t) {
        "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? "backward" : "forward");
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread({}, De), "object" == _typeof(t) ? t : {}), r("focustrap", t, Se), t;
      }
    }]);

    return Ne;
  }();

  var Ie = {
    backdrop: !0,
    keyboard: !0,
    focus: !0
  },
      Pe = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean"
  };

  var je = /*#__PURE__*/function (_H6) {
    _inherits(je, _H6);

    var _super6 = _createSuper(je);

    function je(t, e) {
      var _this18;

      _classCallCheck(this, je);

      _this18 = _super6.call(this, t), _this18._config = _this18._getConfig(e), _this18._dialog = U.findOne(".modal-dialog", _this18._element), _this18._backdrop = _this18._initializeBackDrop(), _this18._focustrap = _this18._initializeFocusTrap(), _this18._isShown = !1, _this18._ignoreBackdropClick = !1, _this18._isTransitioning = !1, _this18._scrollBar = new Ce();
      return _this18;
    }

    _createClass(je, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this19 = this;

        this._isShown || this._isTransitioning || P.trigger(this._element, "show.bs.modal", {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), P.on(this._dialog, "mousedown.dismiss.bs.modal", function () {
          P.one(_this19._element, "mouseup.dismiss.bs.modal", function (t) {
            t.target === _this19._element && (_this19._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return _this19._showElement(t);
        }));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this20 = this;

        if (!this._isShown || this._isTransitioning) return;
        if (P.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
        this._isShown = !1;

        var t = this._isAnimated();

        t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove("show"), P.off(this._element, "click.dismiss.bs.modal"), P.off(this._dialog, "mousedown.dismiss.bs.modal"), this._queueCallback(function () {
          return _this20._hideModal();
        }, this._element, t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        [window, this._dialog].forEach(function (t) {
          return P.off(t, ".bs.modal");
        }), this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(je.prototype), "dispose", this).call(this);
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new xe({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new Ne({
          trapElement: this._element
        });
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, Ie), F.getDataAttributes(this._element)), "object" == _typeof(t) ? t : {}), r("modal", t, Pe), t;
      }
    }, {
      key: "_showElement",
      value: function _showElement(t) {
        var _this21 = this;

        var e = this._isAnimated(),
            i = U.findOne(".modal-body", this._dialog);

        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && d(this._element), this._element.classList.add("show"), this._queueCallback(function () {
          _this21._config.focus && _this21._focustrap.activate(), _this21._isTransitioning = !1, P.trigger(_this21._element, "shown.bs.modal", {
            relatedTarget: t
          });
        }, this._dialog, e);
      }
    }, {
      key: "_setEscapeEvent",
      value: function _setEscapeEvent() {
        var _this22 = this;

        this._isShown ? P.on(this._element, "keydown.dismiss.bs.modal", function (t) {
          _this22._config.keyboard && "Escape" === t.key ? (t.preventDefault(), _this22.hide()) : _this22._config.keyboard || "Escape" !== t.key || _this22._triggerBackdropTransition();
        }) : P.off(this._element, "keydown.dismiss.bs.modal");
      }
    }, {
      key: "_setResizeEvent",
      value: function _setResizeEvent() {
        var _this23 = this;

        this._isShown ? P.on(window, "resize.bs.modal", function () {
          return _this23._adjustDialog();
        }) : P.off(window, "resize.bs.modal");
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this24 = this;

        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
          document.body.classList.remove("modal-open"), _this24._resetAdjustments(), _this24._scrollBar.reset(), P.trigger(_this24._element, "hidden.bs.modal");
        });
      }
    }, {
      key: "_showBackdrop",
      value: function _showBackdrop(t) {
        var _this25 = this;

        P.on(this._element, "click.dismiss.bs.modal", function (t) {
          _this25._ignoreBackdropClick ? _this25._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === _this25._config.backdrop ? _this25.hide() : "static" === _this25._config.backdrop && _this25._triggerBackdropTransition());
        }), this._backdrop.show(t);
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("fade");
      }
    }, {
      key: "_triggerBackdropTransition",
      value: function _triggerBackdropTransition() {
        var _this26 = this;

        if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
        var _this$_element = this._element,
            t = _this$_element.classList,
            e = _this$_element.scrollHeight,
            i = _this$_element.style,
            n = e > document.documentElement.clientHeight;
        !n && "hidden" === i.overflowY || t.contains("modal-static") || (n || (i.overflowY = "hidden"), t.add("modal-static"), this._queueCallback(function () {
          t.remove("modal-static"), n || _this26._queueCallback(function () {
            i.overflowY = "";
          }, _this26._dialog);
        }, this._dialog), this._element.focus());
      }
    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = this._scrollBar.getWidth(),
            i = e > 0;

        (!i && t && !p() || i && !t && p()) && (this._element.style.paddingLeft = e + "px"), (i && !t && !p() || !i && t && p()) && (this._element.style.paddingRight = e + "px");
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
    }], [{
      key: "Default",
      get: function get() {
        return Ie;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "modal";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t, e) {
        return this.each(function () {
          var i = je.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t](e);
          }
        });
      }
    }]);

    return je;
  }(H);

  P.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
    var _this27 = this;

    var e = i(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), P.one(e, "show.bs.modal", function (t) {
      t.defaultPrevented || P.one(e, "hidden.bs.modal", function () {
        a(_this27) && _this27.focus();
      });
    });
    var n = U.findOne(".modal.show");
    n && je.getInstance(n).hide(), je.getOrCreateInstance(e).toggle(this);
  }), B(je), m(je);
  var Me = {
    backdrop: !0,
    keyboard: !0,
    scroll: !1
  },
      He = {
    backdrop: "boolean",
    keyboard: "boolean",
    scroll: "boolean"
  };

  var Be = /*#__PURE__*/function (_H7) {
    _inherits(Be, _H7);

    var _super7 = _createSuper(Be);

    function Be(t, e) {
      var _this28;

      _classCallCheck(this, Be);

      _this28 = _super7.call(this, t), _this28._config = _this28._getConfig(e), _this28._isShown = !1, _this28._backdrop = _this28._initializeBackDrop(), _this28._focustrap = _this28._initializeFocusTrap(), _this28._addEventListeners();
      return _this28;
    }

    _createClass(Be, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this29 = this;

        this._isShown || P.trigger(this._element, "show.bs.offcanvas", {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || new Ce().hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(function () {
          _this29._config.scroll || _this29._focustrap.activate(), P.trigger(_this29._element, "shown.bs.offcanvas", {
            relatedTarget: t
          });
        }, this._element, !0));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this30 = this;

        this._isShown && (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(function () {
          _this30._element.setAttribute("aria-hidden", !0), _this30._element.removeAttribute("aria-modal"), _this30._element.removeAttribute("role"), _this30._element.style.visibility = "hidden", _this30._config.scroll || new Ce().reset(), P.trigger(_this30._element, "hidden.bs.offcanvas");
        }, this._element, !0)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(Be.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, Me), F.getDataAttributes(this._element)), "object" == _typeof(t) ? t : {}), r("offcanvas", t, He), t;
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this31 = this;

        return new xe({
          className: "offcanvas-backdrop",
          isVisible: this._config.backdrop,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: function clickCallback() {
            return _this31.hide();
          }
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new Ne({
          trapElement: this._element
        });
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this32 = this;

        P.on(this._element, "keydown.dismiss.bs.offcanvas", function (t) {
          _this32._config.keyboard && "Escape" === t.key && _this32.hide();
        });
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "offcanvas";
      }
    }, {
      key: "Default",
      get: function get() {
        return Me;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Be.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return Be;
  }(H);

  P.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
    var _this33 = this;

    var e = i(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this)) return;
    P.one(e, "hidden.bs.offcanvas", function () {
      a(_this33) && _this33.focus();
    });
    var n = U.findOne(".offcanvas.show");
    n && n !== e && Be.getInstance(n).hide(), Be.getOrCreateInstance(e).toggle(this);
  }), P.on(window, "load.bs.offcanvas.data-api", function () {
    return U.find(".offcanvas.show").forEach(function (t) {
      return Be.getOrCreateInstance(t).show();
    });
  }), B(Be), m(Be);

  var Re = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      We = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
      ze = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      qe = function qe(t, e) {
    var i = t.nodeName.toLowerCase();
    if (e.includes(i)) return !Re.has(i) || Boolean(We.test(t.nodeValue) || ze.test(t.nodeValue));
    var n = e.filter(function (t) {
      return t instanceof RegExp;
    });

    for (var _t10 = 0, _e11 = n.length; _t10 < _e11; _t10++) {
      if (n[_t10].test(i)) return !0;
    }

    return !1;
  };

  function Fe(t, e, i) {
    var _ref7;

    if (!t.length) return t;
    if (i && "function" == typeof i) return i(t);

    var n = new window.DOMParser().parseFromString(t, "text/html"),
        s = Object.keys(e),
        o = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(n.body.querySelectorAll("*")));

    var _loop = function _loop(_t11, _i9) {
      var _ref8;

      var i = o[_t11],
          n = i.nodeName.toLowerCase();

      if (!s.includes(n)) {
        i.remove();
        return "continue";
      }

      var r = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(i.attributes)),
          a = [].concat(e["*"] || [], e[n] || []);

      r.forEach(function (t) {
        qe(t, a) || i.removeAttribute(t.nodeName);
      });
    };

    for (var _t11 = 0, _i9 = o.length; _t11 < _i9; _t11++) {
      var _ret = _loop(_t11, _i9);

      if (_ret === "continue") continue;
    }

    return n.body.innerHTML;
  }

  var Ue = new Set(["sanitize", "allowList", "sanitizeFn"]),
      $e = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(array|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacements: "array",
    boundary: "(string|element)",
    customClass: "(string|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    allowList: "object",
    popperConfig: "(null|object|function)"
  },
      Ve = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: p() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: p() ? "right" : "left"
  },
      Ke = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: [0, 0],
    container: !1,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    boundary: "clippingParents",
    customClass: "",
    sanitize: !0,
    sanitizeFn: null,
    allowList: {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    },
    popperConfig: null
  },
      Xe = {
    HIDE: "hide.bs.tooltip",
    HIDDEN: "hidden.bs.tooltip",
    SHOW: "show.bs.tooltip",
    SHOWN: "shown.bs.tooltip",
    INSERTED: "inserted.bs.tooltip",
    CLICK: "click.bs.tooltip",
    FOCUSIN: "focusin.bs.tooltip",
    FOCUSOUT: "focusout.bs.tooltip",
    MOUSEENTER: "mouseenter.bs.tooltip",
    MOUSELEAVE: "mouseleave.bs.tooltip"
  };

  var Ye = /*#__PURE__*/function (_H8) {
    _inherits(Ye, _H8);

    var _super8 = _createSuper(Ye);

    function Ye(t, e) {
      var _this34;

      _classCallCheck(this, Ye);

      if (void 0 === me) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      _this34 = _super8.call(this, t), _this34._isEnabled = !0, _this34._timeout = 0, _this34._hoverState = "", _this34._activeTrigger = {}, _this34._popper = null, _this34._config = _this34._getConfig(e), _this34.tip = null, _this34._setListeners();
      return _this34;
    }

    _createClass(Ye, [{
      key: "enable",
      value: function enable() {
        this._isEnabled = !0;
      }
    }, {
      key: "disable",
      value: function disable() {
        this._isEnabled = !1;
      }
    }, {
      key: "toggleEnabled",
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: "toggle",
      value: function toggle(t) {
        if (this._isEnabled) if (t) {
          var _e12 = this._initializeOnDelegatedTarget(t);

          _e12._activeTrigger.click = !_e12._activeTrigger.click, _e12._isWithActiveTrigger() ? _e12._enter(null, _e12) : _e12._leave(null, _e12);
        } else {
          if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);

          this._enter(null, this);
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout), P.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), _get(_getPrototypeOf(Ye.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _n$classList,
            _ref9,
            _this35 = this;

        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this.isWithContent() || !this._isEnabled) return;
        var t = P.trigger(this._element, this.constructor.Event.SHOW),
            e = c(this._element),
            i = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
        if (t.defaultPrevented || !i) return;
        "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(".tooltip-inner").innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);

        var n = this.getTipElement(),
            s = function (t) {
          do {
            t += Math.floor(1e6 * Math.random());
          } while (document.getElementById(t));

          return t;
        }(this.constructor.NAME);

        n.setAttribute("id", s), this._element.setAttribute("aria-describedby", s), this._config.animation && n.classList.add("fade");

        var o = "function" == typeof this._config.placement ? this._config.placement.call(this, n, this._element) : this._config.placement,
            r = this._getAttachment(o);

        this._addAttachmentClass(r);

        var a = this._config.container;
        M.set(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(n), P.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = pe(this._element, n, this._getPopperConfig(r)), n.classList.add("show");

        var l = this._resolvePossibleFunction(this._config.customClass);

        l && (_n$classList = n.classList).add.apply(_n$classList, _toConsumableArray(l.split(" "))), "ontouchstart" in document.documentElement && (_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children)).forEach(function (t) {
          P.on(t, "mouseover", h);
        });
        var d = this.tip.classList.contains("fade");

        this._queueCallback(function () {
          var t = _this35._hoverState;
          _this35._hoverState = null, P.trigger(_this35._element, _this35.constructor.Event.SHOWN), "out" === t && _this35._leave(null, _this35);
        }, this.tip, d);
      }
    }, {
      key: "hide",
      value: function hide() {
        var _ref10,
            _this36 = this;

        if (!this._popper) return;
        var t = this.getTipElement();
        if (P.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
        t.classList.remove("show"), "ontouchstart" in document.documentElement && (_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children)).forEach(function (t) {
          return P.off(t, "mouseover", h);
        }), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
        var e = this.tip.classList.contains("fade");
        this._queueCallback(function () {
          _this36._isWithActiveTrigger() || ("show" !== _this36._hoverState && t.remove(), _this36._cleanTipClass(), _this36._element.removeAttribute("aria-describedby"), P.trigger(_this36._element, _this36.constructor.Event.HIDDEN), _this36._disposePopper());
        }, this.tip, e), this._hoverState = "";
      }
    }, {
      key: "update",
      value: function update() {
        null !== this._popper && this._popper.update();
      }
    }, {
      key: "isWithContent",
      value: function isWithContent() {
        return Boolean(this.getTitle());
      }
    }, {
      key: "getTipElement",
      value: function getTipElement() {
        if (this.tip) return this.tip;
        var t = document.createElement("div");
        t.innerHTML = this._config.template;
        var e = t.children[0];
        return this.setContent(e), e.classList.remove("fade", "show"), this.tip = e, this.tip;
      }
    }, {
      key: "setContent",
      value: function setContent(t) {
        this._sanitizeAndSetContent(t, this.getTitle(), ".tooltip-inner");
      }
    }, {
      key: "_sanitizeAndSetContent",
      value: function _sanitizeAndSetContent(t, e, i) {
        var n = U.findOne(i, t);
        e || !n ? this.setElementContent(n, e) : n.remove();
      }
    }, {
      key: "setElementContent",
      value: function setElementContent(t, e) {
        if (null !== t) return s(e) ? (e = o(e), void (this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = Fe(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
      }
    }, {
      key: "getTitle",
      value: function getTitle() {
        var t = this._element.getAttribute("data-bs-original-title") || this._config.title;

        return this._resolvePossibleFunction(t);
      }
    }, {
      key: "updateAttachment",
      value: function updateAttachment(t) {
        return "right" === t ? "end" : "left" === t ? "start" : t;
      }
    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(t, e) {
        return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this37 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this37._element);
        } : t;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(t) {
        return "function" == typeof t ? t.call(this._element) : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(t) {
        var _this38 = this;

        var e = {
          placement: t,
          modifiers: [{
            name: "flip",
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }, {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "arrow",
            options: {
              element: ".".concat(this.constructor.NAME, "-arrow")
            }
          }, {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: function fn(t) {
              return _this38._handlePopperPlacementChange(t);
            }
          }],
          onFirstUpdate: function onFirstUpdate(t) {
            t.options.placement !== t.placement && _this38._handlePopperPlacementChange(t);
          }
        };
        return _objectSpread(_objectSpread({}, e), "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig);
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(t) {
        this.getTipElement().classList.add("".concat(this._getBasicClassPrefix(), "-").concat(this.updateAttachment(t)));
      }
    }, {
      key: "_getAttachment",
      value: function _getAttachment(t) {
        return Ve[t.toUpperCase()];
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this39 = this;

        this._config.trigger.split(" ").forEach(function (t) {
          if ("click" === t) P.on(_this39._element, _this39.constructor.Event.CLICK, _this39._config.selector, function (t) {
            return _this39.toggle(t);
          });else if ("manual" !== t) {
            var _e13 = "hover" === t ? _this39.constructor.Event.MOUSEENTER : _this39.constructor.Event.FOCUSIN,
                _i10 = "hover" === t ? _this39.constructor.Event.MOUSELEAVE : _this39.constructor.Event.FOCUSOUT;

            P.on(_this39._element, _e13, _this39._config.selector, function (t) {
              return _this39._enter(t);
            }), P.on(_this39._element, _i10, _this39._config.selector, function (t) {
              return _this39._leave(t);
            });
          }
        }), this._hideModalHandler = function () {
          _this39._element && _this39.hide();
        }, P.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = _objectSpread(_objectSpread({}, this._config), {}, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle();
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var t = this._element.getAttribute("title"),
            e = _typeof(this._element.getAttribute("data-bs-original-title"));

        (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
      }
    }, {
      key: "_enter",
      value: function _enter(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e._config.delay && e._config.delay.show ? e._timeout = setTimeout(function () {
          "show" === e._hoverState && e.show();
        }, e._config.delay.show) : e.show());
      }
    }, {
      key: "_leave",
      value: function _leave(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(function () {
          "out" === e._hoverState && e.hide();
        }, e._config.delay.hide) : e.hide());
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        for (var _t12 in this._activeTrigger) {
          if (this._activeTrigger[_t12]) return !0;
        }

        return !1;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        var e = F.getDataAttributes(this._element);
        return Object.keys(e).forEach(function (t) {
          Ue.has(t) && delete e[t];
        }), (t = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), e), "object" == _typeof(t) && t ? t : {})).container = !1 === t.container ? document.body : o(t.container), "number" == typeof t.delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), r("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = Fe(t.template, t.allowList, t.sanitizeFn)), t;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var t = {};

        for (var _e14 in this._config) {
          this.constructor.Default[_e14] !== this._config[_e14] && (t[_e14] = this._config[_e14]);
        }

        return t;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var t = this.getTipElement(),
            e = new RegExp("(^|\\s)".concat(this._getBasicClassPrefix(), "\\S+"), "g"),
            i = t.getAttribute("class").match(e);
        null !== i && i.length > 0 && i.map(function (t) {
          return t.trim();
        }).forEach(function (e) {
          return t.classList.remove(e);
        });
      }
    }, {
      key: "_getBasicClassPrefix",
      value: function _getBasicClassPrefix() {
        return "bs-tooltip";
      }
    }, {
      key: "_handlePopperPlacementChange",
      value: function _handlePopperPlacementChange(t) {
        var e = t.state;
        e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
      }
    }, {
      key: "_disposePopper",
      value: function _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null);
      }
    }], [{
      key: "Default",
      get: function get() {
        return Ke;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tooltip";
      }
    }, {
      key: "Event",
      get: function get() {
        return Xe;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return $e;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Ye.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return Ye;
  }(H);

  m(Ye);

  var Qe = _objectSpread(_objectSpread({}, Ye.Default), {}, {
    placement: "right",
    offset: [0, 8],
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      Ge = _objectSpread(_objectSpread({}, Ye.DefaultType), {}, {
    content: "(string|element|function)"
  }),
      Ze = {
    HIDE: "hide.bs.popover",
    HIDDEN: "hidden.bs.popover",
    SHOW: "show.bs.popover",
    SHOWN: "shown.bs.popover",
    INSERTED: "inserted.bs.popover",
    CLICK: "click.bs.popover",
    FOCUSIN: "focusin.bs.popover",
    FOCUSOUT: "focusout.bs.popover",
    MOUSEENTER: "mouseenter.bs.popover",
    MOUSELEAVE: "mouseleave.bs.popover"
  };

  var Je = /*#__PURE__*/function (_Ye) {
    _inherits(Je, _Ye);

    var _super9 = _createSuper(Je);

    function Je() {
      _classCallCheck(this, Je);

      return _super9.apply(this, arguments);
    }

    _createClass(Je, [{
      key: "isWithContent",
      value: function isWithContent() {
        return this.getTitle() || this._getContent();
      }
    }, {
      key: "setContent",
      value: function setContent(t) {
        this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t, this._getContent(), ".popover-body");
      }
    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
    }, {
      key: "_getBasicClassPrefix",
      value: function _getBasicClassPrefix() {
        return "bs-popover";
      }
    }], [{
      key: "Default",
      get: function get() {
        return Qe;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "popover";
      }
    }, {
      key: "Event",
      get: function get() {
        return Ze;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ge;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Je.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return Je;
  }(Ye);

  m(Je);
  var ti = {
    offset: 10,
    method: "auto",
    target: ""
  },
      ei = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  },
      ii = ".nav-link, .list-group-item, .dropdown-item";

  var ni = /*#__PURE__*/function (_H9) {
    _inherits(ni, _H9);

    var _super10 = _createSuper(ni);

    function ni(t, e) {
      var _this40;

      _classCallCheck(this, ni);

      _this40 = _super10.call(this, t), _this40._scrollElement = "BODY" === _this40._element.tagName ? window : _this40._element, _this40._config = _this40._getConfig(e), _this40._offsets = [], _this40._targets = [], _this40._activeTarget = null, _this40._scrollHeight = 0, P.on(_this40._scrollElement, "scroll.bs.scrollspy", function () {
        return _this40._process();
      }), _this40.refresh(), _this40._process();
      return _this40;
    }

    _createClass(ni, [{
      key: "refresh",
      value: function refresh() {
        var _this41 = this;

        var t = this._scrollElement === this._scrollElement.window ? "offset" : "position",
            i = "auto" === this._config.method ? t : this._config.method,
            n = "position" === i ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), U.find(ii, this._config.target).map(function (t) {
          var s = e(t),
              o = s ? U.findOne(s) : null;

          if (o) {
            var _t13 = o.getBoundingClientRect();

            if (_t13.width || _t13.height) return [F[i](o).top + n, s];
          }

          return null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (t) {
          _this41._offsets.push(t[0]), _this41._targets.push(t[1]);
        });
      }
    }, {
      key: "dispose",
      value: function dispose() {
        P.off(this._scrollElement, ".bs.scrollspy"), _get(_getPrototypeOf(ni.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread(_objectSpread(_objectSpread({}, ti), F.getDataAttributes(this._element)), "object" == _typeof(t) && t ? t : {})).target = o(t.target) || document.documentElement, r("scrollspy", t, ei), t;
      }
    }, {
      key: "_getScrollTop",
      value: function _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }
    }, {
      key: "_getScrollHeight",
      value: function _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }
    }, {
      key: "_getOffsetHeight",
      value: function _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }
    }, {
      key: "_process",
      value: function _process() {
        var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            i = this._config.offset + e - this._getOffsetHeight();

        if (this._scrollHeight !== e && this.refresh(), t >= i) {
          var _t14 = this._targets[this._targets.length - 1];
          this._activeTarget !== _t14 && this._activate(_t14);
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

          for (var _e15 = this._offsets.length; _e15--;) {
            this._activeTarget !== this._targets[_e15] && t >= this._offsets[_e15] && (void 0 === this._offsets[_e15 + 1] || t < this._offsets[_e15 + 1]) && this._activate(this._targets[_e15]);
          }
        }
      }
    }, {
      key: "_activate",
      value: function _activate(t) {
        this._activeTarget = t, this._clear();
        var e = ii.split(",").map(function (e) {
          return "".concat(e, "[data-bs-target=\"").concat(t, "\"],").concat(e, "[href=\"").concat(t, "\"]");
        }),
            i = U.findOne(e.join(","), this._config.target);
        i.classList.add("active"), i.classList.contains("dropdown-item") ? U.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add("active") : U.parents(i, ".nav, .list-group").forEach(function (t) {
          U.prev(t, ".nav-link, .list-group-item").forEach(function (t) {
            return t.classList.add("active");
          }), U.prev(t, ".nav-item").forEach(function (t) {
            U.children(t, ".nav-link").forEach(function (t) {
              return t.classList.add("active");
            });
          });
        }), P.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: t
        });
      }
    }, {
      key: "_clear",
      value: function _clear() {
        U.find(ii, this._config.target).filter(function (t) {
          return t.classList.contains("active");
        }).forEach(function (t) {
          return t.classList.remove("active");
        });
      }
    }], [{
      key: "Default",
      get: function get() {
        return ti;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "scrollspy";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = ni.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return ni;
  }(H);

  P.on(window, "load.bs.scrollspy.data-api", function () {
    U.find('[data-bs-spy="scroll"]').forEach(function (t) {
      return new ni(t);
    });
  }), m(ni);

  var si = /*#__PURE__*/function (_H10) {
    _inherits(si, _H10);

    var _super11 = _createSuper(si);

    function si() {
      _classCallCheck(this, si);

      return _super11.apply(this, arguments);
    }

    _createClass(si, [{
      key: "show",
      value: function show() {
        var _this42 = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
        var t;

        var e = i(this._element),
            n = this._element.closest(".nav, .list-group");

        if (n) {
          var _e16 = "UL" === n.nodeName || "OL" === n.nodeName ? ":scope > li > .active" : ".active";

          t = U.find(_e16, n), t = t[t.length - 1];
        }

        var s = t ? P.trigger(t, "hide.bs.tab", {
          relatedTarget: this._element
        }) : null;
        if (P.trigger(this._element, "show.bs.tab", {
          relatedTarget: t
        }).defaultPrevented || null !== s && s.defaultPrevented) return;

        this._activate(this._element, n);

        var o = function o() {
          P.trigger(t, "hidden.bs.tab", {
            relatedTarget: _this42._element
          }), P.trigger(_this42._element, "shown.bs.tab", {
            relatedTarget: t
          });
        };

        e ? this._activate(e, e.parentNode, o) : o();
      }
    }, {
      key: "_activate",
      value: function _activate(t, e, i) {
        var _this43 = this;

        var n = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? U.children(e, ".active") : U.find(":scope > li > .active", e))[0],
            s = i && n && n.classList.contains("fade"),
            o = function o() {
          return _this43._transitionComplete(t, n, i);
        };

        n && s ? (n.classList.remove("show"), this._queueCallback(o, t, !0)) : o();
      }
    }, {
      key: "_transitionComplete",
      value: function _transitionComplete(t, e, i) {
        if (e) {
          e.classList.remove("active");

          var _t15 = U.findOne(":scope > .dropdown-menu .active", e.parentNode);

          _t15 && _t15.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
        }

        t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), d(t), t.classList.contains("fade") && t.classList.add("show");
        var n = t.parentNode;

        if (n && "LI" === n.nodeName && (n = n.parentNode), n && n.classList.contains("dropdown-menu")) {
          var _e17 = t.closest(".dropdown");

          _e17 && U.find(".dropdown-toggle", _e17).forEach(function (t) {
            return t.classList.add("active");
          }), t.setAttribute("aria-expanded", !0);
        }

        i && i();
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "tab";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = si.getOrCreateInstance(this);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return si;
  }(H);

  P.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this) || si.getOrCreateInstance(this).show();
  }), m(si);
  var oi = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      ri = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  };

  var ai = /*#__PURE__*/function (_H11) {
    _inherits(ai, _H11);

    var _super12 = _createSuper(ai);

    function ai(t, e) {
      var _this44;

      _classCallCheck(this, ai);

      _this44 = _super12.call(this, t), _this44._config = _this44._getConfig(e), _this44._timeout = null, _this44._hasMouseInteraction = !1, _this44._hasKeyboardInteraction = !1, _this44._setListeners();
      return _this44;
    }

    _createClass(ai, [{
      key: "show",
      value: function show() {
        var _this45 = this;

        P.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), d(this._element), this._element.classList.add("show"), this._element.classList.add("showing"), this._queueCallback(function () {
          _this45._element.classList.remove("showing"), P.trigger(_this45._element, "shown.bs.toast"), _this45._maybeScheduleHide();
        }, this._element, this._config.animation));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this46 = this;

        this._element.classList.contains("show") && (P.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add("showing"), this._queueCallback(function () {
          _this46._element.classList.add("hide"), _this46._element.classList.remove("showing"), _this46._element.classList.remove("show"), P.trigger(_this46._element, "hidden.bs.toast");
        }, this._element, this._config.animation)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), _get(_getPrototypeOf(ai.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, ri), F.getDataAttributes(this._element)), "object" == _typeof(t) && t ? t : {}), r("toast", t, this.constructor.DefaultType), t;
      }
    }, {
      key: "_maybeScheduleHide",
      value: function _maybeScheduleHide() {
        var _this47 = this;

        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function () {
          _this47.hide();
        }, this._config.delay)));
      }
    }, {
      key: "_onInteraction",
      value: function _onInteraction(t, e) {
        switch (t.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = e;
            break;

          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = e;
        }

        if (e) return void this._clearTimeout();
        var i = t.relatedTarget;
        this._element === i || this._element.contains(i) || this._maybeScheduleHide();
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this48 = this;

        P.on(this._element, "mouseover.bs.toast", function (t) {
          return _this48._onInteraction(t, !0);
        }), P.on(this._element, "mouseout.bs.toast", function (t) {
          return _this48._onInteraction(t, !1);
        }), P.on(this._element, "focusin.bs.toast", function (t) {
          return _this48._onInteraction(t, !0);
        }), P.on(this._element, "focusout.bs.toast", function (t) {
          return _this48._onInteraction(t, !1);
        });
      }
    }, {
      key: "_clearTimeout",
      value: function _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
    }], [{
      key: "DefaultType",
      get: function get() {
        return oi;
      }
    }, {
      key: "Default",
      get: function get() {
        return ri;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "toast";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = ai.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return ai;
  }(H);

  return B(ai), m(ai), {
    Alert: R,
    Button: W,
    Carousel: Z,
    Collapse: et,
    Dropdown: Oe,
    Modal: je,
    Offcanvas: Be,
    Popover: Je,
    ScrollSpy: ni,
    Tab: si,
    Toast: ai,
    Tooltip: Ye
  };
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = exports.Toast = exports.Tab = exports.ScrollSpy = exports.Popover = exports.Offcanvas = exports.Modal = exports.Dropdown = exports.Collapse = exports.Carousel = exports.Button = exports.Alert = void 0;

var Popper = _interopRequireWildcard(require("@popperjs/core"));

var _KEY_TO_DIRECTION;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.1): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
var MAX_UID = 1000000;
var MILLISECONDS_MULTIPLIER = 1000;
var TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

var toType = function toType(obj) {
  if (obj === null || obj === undefined) {
    return "".concat(obj);
  }

  return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */


var getUID = function getUID(prefix) {
  do {
    prefix += Math.floor(Math.random() * MAX_UID);
  } while (document.getElementById(prefix));

  return prefix;
};

var getSelector = function getSelector(element) {
  var selector = element.getAttribute('data-bs-target');

  if (!selector || selector === '#') {
    var hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
    // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
    // `document.querySelector` will rightfully complain it is invalid.
    // See https://github.com/twbs/bootstrap/issues/32273

    if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
      return null;
    } // Just in case some CMS puts out a full URL with the anchor appended


    if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
      hrefAttr = "#".concat(hrefAttr.split('#')[1]);
    }

    selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
  }

  return selector;
};

var getSelectorFromElement = function getSelectorFromElement(element) {
  var selector = getSelector(element);

  if (selector) {
    return document.querySelector(selector) ? selector : null;
  }

  return null;
};

var getElementFromSelector = function getElementFromSelector(element) {
  var selector = getSelector(element);
  return selector ? document.querySelector(selector) : null;
};

var getTransitionDurationFromElement = function getTransitionDurationFromElement(element) {
  if (!element) {
    return 0;
  } // Get transition-duration of the element


  var _window$getComputedSt = window.getComputedStyle(element),
      transitionDuration = _window$getComputedSt.transitionDuration,
      transitionDelay = _window$getComputedSt.transitionDelay;

  var floatTransitionDuration = Number.parseFloat(transitionDuration);
  var floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  } // If multiple durations are defined, take the first


  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};

var triggerTransitionEnd = function triggerTransitionEnd(element) {
  element.dispatchEvent(new Event(TRANSITION_END));
};

var isElement = function isElement(obj) {
  if (!obj || _typeof(obj) !== 'object') {
    return false;
  }

  if (typeof obj.jquery !== 'undefined') {
    obj = obj[0];
  }

  return typeof obj.nodeType !== 'undefined';
};

var getElement = function getElement(obj) {
  if (isElement(obj)) {
    // it's a jQuery object or a node element
    return obj.jquery ? obj[0] : obj;
  }

  if (typeof obj === 'string' && obj.length > 0) {
    return document.querySelector(obj);
  }

  return null;
};

var typeCheckConfig = function typeCheckConfig(componentName, config, configTypes) {
  Object.keys(configTypes).forEach(function (property) {
    var expectedTypes = configTypes[property];
    var value = config[property];
    var valueType = value && isElement(value) ? 'element' : toType(value);

    if (!new RegExp(expectedTypes).test(valueType)) {
      throw new TypeError("".concat(componentName.toUpperCase(), ": Option \"").concat(property, "\" provided type \"").concat(valueType, "\" but expected type \"").concat(expectedTypes, "\"."));
    }
  });
};

var isVisible = function isVisible(element) {
  if (!isElement(element) || element.getClientRects().length === 0) {
    return false;
  }

  return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
};

var isDisabled = function isDisabled(element) {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true;
  }

  if (element.classList.contains('disabled')) {
    return true;
  }

  if (typeof element.disabled !== 'undefined') {
    return element.disabled;
  }

  return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
};

var findShadowRoot = function findShadowRoot(element) {
  if (!document.documentElement.attachShadow) {
    return null;
  } // Can find the shadow root otherwise it'll return the document


  if (typeof element.getRootNode === 'function') {
    var root = element.getRootNode();
    return root instanceof ShadowRoot ? root : null;
  }

  if (element instanceof ShadowRoot) {
    return element;
  } // when we don't find a shadow root


  if (!element.parentNode) {
    return null;
  }

  return findShadowRoot(element.parentNode);
};

var noop = function noop() {};
/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */


var reflow = function reflow(element) {
  // eslint-disable-next-line no-unused-expressions
  element.offsetHeight;
};

var getjQuery = function getjQuery() {
  var _window = window,
      jQuery = _window.jQuery;

  if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
    return jQuery;
  }

  return null;
};

var DOMContentLoadedCallbacks = [];

var onDOMContentLoaded = function onDOMContentLoaded(callback) {
  if (document.readyState === 'loading') {
    // add listener on the first call when the document is in loading state
    if (!DOMContentLoadedCallbacks.length) {
      document.addEventListener('DOMContentLoaded', function () {
        DOMContentLoadedCallbacks.forEach(function (callback) {
          return callback();
        });
      });
    }

    DOMContentLoadedCallbacks.push(callback);
  } else {
    callback();
  }
};

var isRTL = function isRTL() {
  return document.documentElement.dir === 'rtl';
};

var defineJQueryPlugin = function defineJQueryPlugin(plugin) {
  onDOMContentLoaded(function () {
    var $ = getjQuery();
    /* istanbul ignore if */

    if ($) {
      var name = plugin.NAME;
      var JQUERY_NO_CONFLICT = $.fn[name];
      $.fn[name] = plugin.jQueryInterface;
      $.fn[name].Constructor = plugin;

      $.fn[name].noConflict = function () {
        $.fn[name] = JQUERY_NO_CONFLICT;
        return plugin.jQueryInterface;
      };
    }
  });
};

var execute = function execute(callback) {
  if (typeof callback === 'function') {
    callback();
  }
};

var executeAfterTransition = function executeAfterTransition(callback, transitionElement) {
  var waitForTransition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!waitForTransition) {
    execute(callback);
    return;
  }

  var durationPadding = 5;
  var emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
  var called = false;

  var handler = function handler(_ref) {
    var target = _ref.target;

    if (target !== transitionElement) {
      return;
    }

    called = true;
    transitionElement.removeEventListener(TRANSITION_END, handler);
    execute(callback);
  };

  transitionElement.addEventListener(TRANSITION_END, handler);
  setTimeout(function () {
    if (!called) {
      triggerTransitionEnd(transitionElement);
    }
  }, emulatedDuration);
};
/**
 * Return the previous/next element of a list.
 *
 * @param {array} list    The list of elements
 * @param activeElement   The active element
 * @param shouldGetNext   Choose to get next or previous element
 * @param isCycleAllowed
 * @return {Element|elem} The proper element
 */


var getNextActiveElement = function getNextActiveElement(list, activeElement, shouldGetNext, isCycleAllowed) {
  var index = list.indexOf(activeElement); // if the element does not exist in the list return an element depending on the direction and if cycle is allowed

  if (index === -1) {
    return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
  }

  var listLength = list.length;
  index += shouldGetNext ? 1 : -1;

  if (isCycleAllowed) {
    index = (index + listLength) % listLength;
  }

  return list[Math.max(0, Math.min(index, listLength - 1))];
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.1): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
var stripNameRegex = /\..*/;
var stripUidRegex = /::\d+$/;
var eventRegistry = {}; // Events storage

var uidEvent = 1;
var customEvents = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
};
var customEventsRegex = /^(mouseenter|mouseleave)/i;
var nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
/**
 * ------------------------------------------------------------------------
 * Private methods
 * ------------------------------------------------------------------------
 */

function getUidEvent(element, uid) {
  return uid && "".concat(uid, "::").concat(uidEvent++) || element.uidEvent || uidEvent++;
}

function getEvent(element) {
  var uid = getUidEvent(element);
  element.uidEvent = uid;
  eventRegistry[uid] = eventRegistry[uid] || {};
  return eventRegistry[uid];
}

function bootstrapHandler(element, fn) {
  return function handler(event) {
    event.delegateTarget = element;

    if (handler.oneOff) {
      EventHandler.off(element, event.type, fn);
    }

    return fn.apply(element, [event]);
  };
}

function bootstrapDelegationHandler(element, selector, fn) {
  return function handler(event) {
    var domElements = element.querySelectorAll(selector);

    for (var target = event.target; target && target !== this; target = target.parentNode) {
      for (var i = domElements.length; i--;) {
        if (domElements[i] === target) {
          event.delegateTarget = target;

          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
          }

          return fn.apply(target, [event]);
        }
      }
    } // To please ESLint


    return null;
  };
}

function findHandler(events, handler) {
  var delegationSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var uidEventList = Object.keys(events);

  for (var i = 0, len = uidEventList.length; i < len; i++) {
    var event = events[uidEventList[i]];

    if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
      return event;
    }
  }

  return null;
}

function normalizeParams(originalTypeEvent, handler, delegationFn) {
  var delegation = typeof handler === 'string';
  var originalHandler = delegation ? delegationFn : handler;
  var typeEvent = getTypeEvent(originalTypeEvent);
  var isNative = nativeEvents.has(typeEvent);

  if (!isNative) {
    typeEvent = originalTypeEvent;
  }

  return [delegation, originalHandler, typeEvent];
}

function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
  if (typeof originalTypeEvent !== 'string' || !element) {
    return;
  }

  if (!handler) {
    handler = delegationFn;
    delegationFn = null;
  } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
  // this prevents the handler from being dispatched the same way as mouseover or mouseout does


  if (customEventsRegex.test(originalTypeEvent)) {
    var wrapFn = function wrapFn(fn) {
      return function (event) {
        if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
          return fn.call(this, event);
        }
      };
    };

    if (delegationFn) {
      delegationFn = wrapFn(delegationFn);
    } else {
      handler = wrapFn(handler);
    }
  }

  var _normalizeParams = normalizeParams(originalTypeEvent, handler, delegationFn),
      _normalizeParams2 = _slicedToArray(_normalizeParams, 3),
      delegation = _normalizeParams2[0],
      originalHandler = _normalizeParams2[1],
      typeEvent = _normalizeParams2[2];

  var events = getEvent(element);
  var handlers = events[typeEvent] || (events[typeEvent] = {});
  var previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

  if (previousFn) {
    previousFn.oneOff = previousFn.oneOff && oneOff;
    return;
  }

  var uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
  var fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
  fn.delegationSelector = delegation ? handler : null;
  fn.originalHandler = originalHandler;
  fn.oneOff = oneOff;
  fn.uidEvent = uid;
  handlers[uid] = fn;
  element.addEventListener(typeEvent, fn, delegation);
}

function removeHandler(element, events, typeEvent, handler, delegationSelector) {
  var fn = findHandler(events[typeEvent], handler, delegationSelector);

  if (!fn) {
    return;
  }

  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
  delete events[typeEvent][fn.uidEvent];
}

function removeNamespacedHandlers(element, events, typeEvent, namespace) {
  var storeElementEvent = events[typeEvent] || {};
  Object.keys(storeElementEvent).forEach(function (handlerKey) {
    if (handlerKey.includes(namespace)) {
      var event = storeElementEvent[handlerKey];
      removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
    }
  });
}

function getTypeEvent(event) {
  // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
  event = event.replace(stripNameRegex, '');
  return customEvents[event] || event;
}

var EventHandler = {
  on: function on(element, event, handler, delegationFn) {
    addHandler(element, event, handler, delegationFn, false);
  },
  one: function one(element, event, handler, delegationFn) {
    addHandler(element, event, handler, delegationFn, true);
  },
  off: function off(element, originalTypeEvent, handler, delegationFn) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    var _normalizeParams3 = normalizeParams(originalTypeEvent, handler, delegationFn),
        _normalizeParams4 = _slicedToArray(_normalizeParams3, 3),
        delegation = _normalizeParams4[0],
        originalHandler = _normalizeParams4[1],
        typeEvent = _normalizeParams4[2];

    var inNamespace = typeEvent !== originalTypeEvent;
    var events = getEvent(element);
    var isNamespace = originalTypeEvent.startsWith('.');

    if (typeof originalHandler !== 'undefined') {
      // Simplest case: handler is passed, remove that listener ONLY.
      if (!events || !events[typeEvent]) {
        return;
      }

      removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
      return;
    }

    if (isNamespace) {
      Object.keys(events).forEach(function (elementEvent) {
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
      });
    }

    var storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(function (keyHandlers) {
      var handlerKey = keyHandlers.replace(stripUidRegex, '');

      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
        var event = storeElementEvent[keyHandlers];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  },
  trigger: function trigger(element, event, args) {
    if (typeof event !== 'string' || !element) {
      return null;
    }

    var $ = getjQuery();
    var typeEvent = getTypeEvent(event);
    var inNamespace = event !== typeEvent;
    var isNative = nativeEvents.has(typeEvent);
    var jQueryEvent;
    var bubbles = true;
    var nativeDispatch = true;
    var defaultPrevented = false;
    var evt = null;

    if (inNamespace && $) {
      jQueryEvent = $.Event(event, args);
      $(element).trigger(jQueryEvent);
      bubbles = !jQueryEvent.isPropagationStopped();
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
      defaultPrevented = jQueryEvent.isDefaultPrevented();
    }

    if (isNative) {
      evt = document.createEvent('HTMLEvents');
      evt.initEvent(typeEvent, bubbles, true);
    } else {
      evt = new CustomEvent(event, {
        bubbles: bubbles,
        cancelable: true
      });
    } // merge custom information in our event


    if (typeof args !== 'undefined') {
      Object.keys(args).forEach(function (key) {
        Object.defineProperty(evt, key, {
          get: function get() {
            return args[key];
          }
        });
      });
    }

    if (defaultPrevented) {
      evt.preventDefault();
    }

    if (nativeDispatch) {
      element.dispatchEvent(evt);
    }

    if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
      jQueryEvent.preventDefault();
    }

    return evt;
  }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.1): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var elementMap = new Map();
var Data = {
  set: function set(element, key, instance) {
    if (!elementMap.has(element)) {
      elementMap.set(element, new Map());
    }

    var instanceMap = elementMap.get(element); // make it clear we only want one instance per element
    // can be removed later when multiple key/instances are fine to be used

    if (!instanceMap.has(key) && instanceMap.size !== 0) {
      // eslint-disable-next-line no-console
      console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(instanceMap.keys())[0], "."));
      return;
    }

    instanceMap.set(key, instance);
  },
  get: function get(element, key) {
    if (elementMap.has(element)) {
      return elementMap.get(element).get(key) || null;
    }

    return null;
  },
  remove: function remove(element, key) {
    if (!elementMap.has(element)) {
      return;
    }

    var instanceMap = elementMap.get(element);
    instanceMap["delete"](key); // free up element references if there are no instances left for an element

    if (instanceMap.size === 0) {
      elementMap["delete"](element);
    }
  }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.1): base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var VERSION = '5.1.1';

var BaseComponent = /*#__PURE__*/function () {
  function BaseComponent(element) {
    _classCallCheck(this, BaseComponent);

    element = getElement(element);

    if (!element) {
      return;
    }

    this._element = element;
    Data.set(this._element, this.constructor.DATA_KEY, this);
  }

  _createClass(BaseComponent, [{
    key: "dispose",
    value: function dispose() {
      var _this = this;

      Data.remove(this._element, this.constructor.DATA_KEY);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);
      Object.getOwnPropertyNames(this).forEach(function (propertyName) {
        _this[propertyName] = null;
      });
    }
  }, {
    key: "_queueCallback",
    value: function _queueCallback(callback, element) {
      var isAnimated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      executeAfterTransition(callback, element, isAnimated);
    }
    /** Static */

  }], [{
    key: "getInstance",
    value: function getInstance(element) {
      return Data.get(getElement(element), this.DATA_KEY);
    }
  }, {
    key: "getOrCreateInstance",
    value: function getOrCreateInstance(element) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.getInstance(element) || new this(element, _typeof(config) === 'object' ? config : null);
    }
  }, {
    key: "VERSION",
    get: function get() {
      return VERSION;
    }
  }, {
    key: "NAME",
    get: function get() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return "bs.".concat(this.NAME);
    }
  }, {
    key: "EVENT_KEY",
    get: function get() {
      return ".".concat(this.DATA_KEY);
    }
  }]);

  return BaseComponent;
}();
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.1): util/component-functions.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


var enableDismissTrigger = function enableDismissTrigger(component) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'hide';
  var clickEvent = "click.dismiss".concat(component.EVENT_KEY);
  var name = component.NAME;
  EventHandler.on(document, clickEvent, "[data-bs-dismiss=\"".concat(name, "\"]"), function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (isDisabled(this)) {
      return;
    }

    var target = getElementFromSelector(this) || this.closest(".".concat(name));
    var instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method

    instance[method]();
  });
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.1): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


var NAME$d = 'alert';
var DATA_KEY$c = 'bs.alert';
var EVENT_KEY$c = ".".concat(DATA_KEY$c);
var EVENT_CLOSE = "close".concat(EVENT_KEY$c);
var EVENT_CLOSED = "closed".concat(EVENT_KEY$c);
var CLASS_NAME_FADE$5 = 'fade';
var CLASS_NAME_SHOW$8 = 'show';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Alert = /*#__PURE__*/function (_BaseComponent) {
  _inherits(Alert, _BaseComponent);

  var _super = _createSuper(Alert);

  function Alert() {
    _classCallCheck(this, Alert);

    return _super.apply(this, arguments);
  }

  _createClass(Alert, [{
    key: "close",
    value: // Public
    function close() {
      var _this2 = this;

      var closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);

      if (closeEvent.defaultPrevented) {
        return;
      }

      this._element.classList.remove(CLASS_NAME_SHOW$8);

      var isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);

      this._queueCallback(function () {
        return _this2._destroyElement();
      }, this._element, isAnimated);
    } // Private

  }, {
    key: "_destroyElement",
    value: function _destroyElement() {
      this._element.remove();

      EventHandler.trigger(this._element, EVENT_CLOSED);
      this.dispose();
    } // Static

  }], [{
    key: "NAME",
    get: // Getters
    function get() {
      return NAME$d;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Alert.getOrCreateInstance(this);

        if (typeof config !== 'string') {
          return;
        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError("No method named \"".concat(config, "\""));
        }

        data[config](this);
      });
    }
  }]);

  return Alert;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


exports.Alert = Alert;
enableDismissTrigger(Alert, 'close');
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Alert to jQuery only if jQuery is present
 */

defineJQueryPlugin(Alert);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.1): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$c = 'button';
var DATA_KEY$b = 'bs.button';
var EVENT_KEY$b = ".".concat(DATA_KEY$b);
var DATA_API_KEY$7 = '.data-api';
var CLASS_NAME_ACTIVE$3 = 'active';
var SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
var EVENT_CLICK_DATA_API$6 = "click".concat(EVENT_KEY$b).concat(DATA_API_KEY$7);
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Button = /*#__PURE__*/function (_BaseComponent2) {
  _inherits(Button, _BaseComponent2);

  var _super2 = _createSuper(Button);

  function Button() {
    _classCallCheck(this, Button);

    return _super2.apply(this, arguments);
  }

  _createClass(Button, [{
    key: "toggle",
    value: // Public
    function toggle() {
      // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
      this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    } // Static

  }], [{
    key: "NAME",
    get: // Getters
    function get() {
      return NAME$c;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Button.getOrCreateInstance(this);

        if (config === 'toggle') {
          data[config]();
        }
      });
    }
  }]);

  return Button;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


exports.Button = Button;
EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, function (event) {
  event.preventDefault();
  var button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
  var data = Button.getOrCreateInstance(button);
  data.toggle();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Button to jQuery only if jQuery is present
 */

defineJQueryPlugin(Button);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.1): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

function normalizeData(val) {
  if (val === 'true') {
    return true;
  }

  if (val === 'false') {
    return false;
  }

  if (val === Number(val).toString()) {
    return Number(val);
  }

  if (val === '' || val === 'null') {
    return null;
  }

  return val;
}

function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, function (chr) {
    return "-".concat(chr.toLowerCase());
  });
}

var Manipulator = {
  setDataAttribute: function setDataAttribute(element, key, value) {
    element.setAttribute("data-bs-".concat(normalizeDataKey(key)), value);
  },
  removeDataAttribute: function removeDataAttribute(element, key) {
    element.removeAttribute("data-bs-".concat(normalizeDataKey(key)));
  },
  getDataAttributes: function getDataAttributes(element) {
    if (!element) {
      return {};
    }

    var attributes = {};
    Object.keys(element.dataset).filter(function (key) {
      return key.startsWith('bs');
    }).forEach(function (key) {
      var pureKey = key.replace(/^bs/, '');
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
      attributes[pureKey] = normalizeData(element.dataset[key]);
    });
    return attributes;
  },
  getDataAttribute: function getDataAttribute(element, key) {
    return normalizeData(element.getAttribute("data-bs-".concat(normalizeDataKey(key))));
  },
  offset: function offset(element) {
    var rect = element.getBoundingClientRect();
    return {
      top: rect.top + window.pageYOffset,
      left: rect.left + window.pageXOffset
    };
  },
  position: function position(element) {
    return {
      top: element.offsetTop,
      left: element.offsetLeft
    };
  }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.1): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

var NODE_TEXT = 3;
var SelectorEngine = {
  find: function find(selector) {
    var _ref2;

    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
    return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(Element.prototype.querySelectorAll.call(element, selector)));
  },
  findOne: function findOne(selector) {
    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
    return Element.prototype.querySelector.call(element, selector);
  },
  children: function children(element, selector) {
    var _ref3;

    return (_ref3 = []).concat.apply(_ref3, _toConsumableArray(element.children)).filter(function (child) {
      return child.matches(selector);
    });
  },
  parents: function parents(element, selector) {
    var parents = [];
    var ancestor = element.parentNode;

    while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
      if (ancestor.matches(selector)) {
        parents.push(ancestor);
      }

      ancestor = ancestor.parentNode;
    }

    return parents;
  },
  prev: function prev(element, selector) {
    var previous = element.previousElementSibling;

    while (previous) {
      if (previous.matches(selector)) {
        return [previous];
      }

      previous = previous.previousElementSibling;
    }

    return [];
  },
  next: function next(element, selector) {
    var next = element.nextElementSibling;

    while (next) {
      if (next.matches(selector)) {
        return [next];
      }

      next = next.nextElementSibling;
    }

    return [];
  },
  focusableChildren: function focusableChildren(element) {
    var focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(function (selector) {
      return "".concat(selector, ":not([tabindex^=\"-\"])");
    }).join(', ');
    return this.find(focusables, element).filter(function (el) {
      return !isDisabled(el) && isVisible(el);
    });
  }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.1): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$b = 'carousel';
var DATA_KEY$a = 'bs.carousel';
var EVENT_KEY$a = ".".concat(DATA_KEY$a);
var DATA_API_KEY$6 = '.data-api';
var ARROW_LEFT_KEY = 'ArrowLeft';
var ARROW_RIGHT_KEY = 'ArrowRight';
var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

var SWIPE_THRESHOLD = 40;
var Default$a = {
  interval: 5000,
  keyboard: true,
  slide: false,
  pause: 'hover',
  wrap: true,
  touch: true
};
var DefaultType$a = {
  interval: '(number|boolean)',
  keyboard: 'boolean',
  slide: '(boolean|string)',
  pause: '(string|boolean)',
  wrap: 'boolean',
  touch: 'boolean'
};
var ORDER_NEXT = 'next';
var ORDER_PREV = 'prev';
var DIRECTION_LEFT = 'left';
var DIRECTION_RIGHT = 'right';
var KEY_TO_DIRECTION = (_KEY_TO_DIRECTION = {}, _defineProperty(_KEY_TO_DIRECTION, ARROW_LEFT_KEY, DIRECTION_RIGHT), _defineProperty(_KEY_TO_DIRECTION, ARROW_RIGHT_KEY, DIRECTION_LEFT), _KEY_TO_DIRECTION);
var EVENT_SLIDE = "slide".concat(EVENT_KEY$a);
var EVENT_SLID = "slid".concat(EVENT_KEY$a);
var EVENT_KEYDOWN = "keydown".concat(EVENT_KEY$a);
var EVENT_MOUSEENTER = "mouseenter".concat(EVENT_KEY$a);
var EVENT_MOUSELEAVE = "mouseleave".concat(EVENT_KEY$a);
var EVENT_TOUCHSTART = "touchstart".concat(EVENT_KEY$a);
var EVENT_TOUCHMOVE = "touchmove".concat(EVENT_KEY$a);
var EVENT_TOUCHEND = "touchend".concat(EVENT_KEY$a);
var EVENT_POINTERDOWN = "pointerdown".concat(EVENT_KEY$a);
var EVENT_POINTERUP = "pointerup".concat(EVENT_KEY$a);
var EVENT_DRAG_START = "dragstart".concat(EVENT_KEY$a);
var EVENT_LOAD_DATA_API$2 = "load".concat(EVENT_KEY$a).concat(DATA_API_KEY$6);
var EVENT_CLICK_DATA_API$5 = "click".concat(EVENT_KEY$a).concat(DATA_API_KEY$6);
var CLASS_NAME_CAROUSEL = 'carousel';
var CLASS_NAME_ACTIVE$2 = 'active';
var CLASS_NAME_SLIDE = 'slide';
var CLASS_NAME_END = 'carousel-item-end';
var CLASS_NAME_START = 'carousel-item-start';
var CLASS_NAME_NEXT = 'carousel-item-next';
var CLASS_NAME_PREV = 'carousel-item-prev';
var CLASS_NAME_POINTER_EVENT = 'pointer-event';
var SELECTOR_ACTIVE$1 = '.active';
var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
var SELECTOR_ITEM = '.carousel-item';
var SELECTOR_ITEM_IMG = '.carousel-item img';
var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
var SELECTOR_INDICATORS = '.carousel-indicators';
var SELECTOR_INDICATOR = '[data-bs-target]';
var SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
var POINTER_TYPE_TOUCH = 'touch';
var POINTER_TYPE_PEN = 'pen';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Carousel = /*#__PURE__*/function (_BaseComponent3) {
  _inherits(Carousel, _BaseComponent3);

  var _super3 = _createSuper(Carousel);

  function Carousel(element, config) {
    var _this3;

    _classCallCheck(this, Carousel);

    _this3 = _super3.call(this, element);
    _this3._items = null;
    _this3._interval = null;
    _this3._activeElement = null;
    _this3._isPaused = false;
    _this3._isSliding = false;
    _this3.touchTimeout = null;
    _this3.touchStartX = 0;
    _this3.touchDeltaX = 0;
    _this3._config = _this3._getConfig(config);
    _this3._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, _this3._element);
    _this3._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
    _this3._pointerEvent = Boolean(window.PointerEvent);

    _this3._addEventListeners();

    return _this3;
  } // Getters


  _createClass(Carousel, [{
    key: "next",
    value: // Public
    function next() {
      this._slide(ORDER_NEXT);
    }
  }, {
    key: "nextWhenVisible",
    value: function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    }
  }, {
    key: "prev",
    value: function prev() {
      this._slide(ORDER_PREV);
    }
  }, {
    key: "pause",
    value: function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
        triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    }
  }, {
    key: "cycle",
    value: function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config && this._config.interval && !this._isPaused) {
        this._updateInterval();

        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    }
  }, {
    key: "to",
    value: function to(index) {
      var _this4 = this;

      this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, function () {
          return _this4.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

      this._slide(order, this._items[index]);
    } // Private

  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread(_objectSpread(_objectSpread({}, Default$a), Manipulator.getDataAttributes(this._element)), _typeof(config) === 'object' ? config : {});
      typeCheckConfig(NAME$b, config, DefaultType$a);
      return config;
    }
  }, {
    key: "_handleSwipe",
    value: function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0;

      if (!direction) {
        return;
      }

      this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this5 = this;

      if (this._config.keyboard) {
        EventHandler.on(this._element, EVENT_KEYDOWN, function (event) {
          return _this5._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        EventHandler.on(this._element, EVENT_MOUSEENTER, function (event) {
          return _this5.pause(event);
        });
        EventHandler.on(this._element, EVENT_MOUSELEAVE, function (event) {
          return _this5.cycle(event);
        });
      }

      if (this._config.touch && this._touchSupported) {
        this._addTouchEventListeners();
      }
    }
  }, {
    key: "_addTouchEventListeners",
    value: function _addTouchEventListeners() {
      var _this6 = this;

      var hasPointerPenTouch = function hasPointerPenTouch(event) {
        return _this6._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
      };

      var start = function start(event) {
        if (hasPointerPenTouch(event)) {
          _this6.touchStartX = event.clientX;
        } else if (!_this6._pointerEvent) {
          _this6.touchStartX = event.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        _this6.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - _this6.touchStartX;
      };

      var end = function end(event) {
        if (hasPointerPenTouch(event)) {
          _this6.touchDeltaX = event.clientX - _this6.touchStartX;
        }

        _this6._handleSwipe();

        if (_this6._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this6.pause();

          if (_this6.touchTimeout) {
            clearTimeout(_this6.touchTimeout);
          }

          _this6.touchTimeout = setTimeout(function (event) {
            return _this6.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this6._config.interval);
        }
      };

      SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(function (itemImg) {
        EventHandler.on(itemImg, EVENT_DRAG_START, function (e) {
          return e.preventDefault();
        });
      });

      if (this._pointerEvent) {
        EventHandler.on(this._element, EVENT_POINTERDOWN, function (event) {
          return start(event);
        });
        EventHandler.on(this._element, EVENT_POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler.on(this._element, EVENT_TOUCHSTART, function (event) {
          return start(event);
        });
        EventHandler.on(this._element, EVENT_TOUCHMOVE, function (event) {
          return move(event);
        });
        EventHandler.on(this._element, EVENT_TOUCHEND, function (event) {
          return end(event);
        });
      }
    }
  }, {
    key: "_keydown",
    value: function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      var direction = KEY_TO_DIRECTION[event.key];

      if (direction) {
        event.preventDefault();

        this._slide(direction);
      }
    }
  }, {
    key: "_getItemIndex",
    value: function _getItemIndex(element) {
      this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
      return this._items.indexOf(element);
    }
  }, {
    key: "_getItemByOrder",
    value: function _getItemByOrder(order, activeElement) {
      var isNext = order === ORDER_NEXT;
      return getNextActiveElement(this._items, activeElement, isNext, this._config.wrap);
    }
  }, {
    key: "_triggerSlideEvent",
    value: function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

      return EventHandler.trigger(this._element, EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
    }
  }, {
    key: "_setActiveIndicatorElement",
    value: function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE$1, this._indicatorsElement);
        activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
        activeIndicator.removeAttribute('aria-current');
        var indicators = SelectorEngine.find(SELECTOR_INDICATOR, this._indicatorsElement);

        for (var i = 0; i < indicators.length; i++) {
          if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
            indicators[i].classList.add(CLASS_NAME_ACTIVE$2);
            indicators[i].setAttribute('aria-current', 'true');
            break;
          }
        }
      }
    }
  }, {
    key: "_updateInterval",
    value: function _updateInterval() {
      var element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      if (!element) {
        return;
      }

      var elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);

      if (elementInterval) {
        this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
        this._config.interval = elementInterval;
      } else {
        this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }
  }, {
    key: "_slide",
    value: function _slide(directionOrOrder, element) {
      var _this7 = this;

      var order = this._directionToOrder(directionOrOrder);

      var activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || this._getItemByOrder(order, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var isNext = order === ORDER_NEXT;
      var directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      var orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;

      var eventDirectionName = this._orderToDirection(order);

      if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$2)) {
        this._isSliding = false;
        return;
      }

      if (this._isSliding) {
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.defaultPrevented) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      this._activeElement = nextElement;

      var triggerSlidEvent = function triggerSlidEvent() {
        EventHandler.trigger(_this7._element, EVENT_SLID, {
          relatedTarget: nextElement,
          direction: eventDirectionName,
          from: activeElementIndex,
          to: nextElementIndex
        });
      };

      if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
        nextElement.classList.add(orderClassName);
        reflow(nextElement);
        activeElement.classList.add(directionalClassName);
        nextElement.classList.add(directionalClassName);

        var completeCallBack = function completeCallBack() {
          nextElement.classList.remove(directionalClassName, orderClassName);
          nextElement.classList.add(CLASS_NAME_ACTIVE$2);
          activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
          _this7._isSliding = false;
          setTimeout(triggerSlidEvent, 0);
        };

        this._queueCallback(completeCallBack, activeElement, true);
      } else {
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        this._isSliding = false;
        triggerSlidEvent();
      }

      if (isCycling) {
        this.cycle();
      }
    }
  }, {
    key: "_directionToOrder",
    value: function _directionToOrder(direction) {
      if (![DIRECTION_RIGHT, DIRECTION_LEFT].includes(direction)) {
        return direction;
      }

      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }

      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
  }, {
    key: "_orderToDirection",
    value: function _orderToDirection(order) {
      if (![ORDER_NEXT, ORDER_PREV].includes(order)) {
        return order;
      }

      if (isRTL()) {
        return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }

      return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    } // Static

  }], [{
    key: "Default",
    get: function get() {
      return Default$a;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$b;
    }
  }, {
    key: "carouselInterface",
    value: function carouselInterface(element, config) {
      var data = Carousel.getOrCreateInstance(element, config);
      var _config = data._config;

      if (_typeof(config) === 'object') {
        _config = _objectSpread(_objectSpread({}, _config), config);
      }

      var action = typeof config === 'string' ? config : _config.slide;

      if (typeof config === 'number') {
        data.to(config);
      } else if (typeof action === 'string') {
        if (typeof data[action] === 'undefined') {
          throw new TypeError("No method named \"".concat(action, "\""));
        }

        data[action]();
      } else if (_config.interval && _config.ride) {
        data.pause();
        data.cycle();
      }
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        Carousel.carouselInterface(this, config);
      });
    }
  }, {
    key: "dataApiClickHandler",
    value: function dataApiClickHandler(event) {
      var target = getElementFromSelector(this);

      if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
        return;
      }

      var config = _objectSpread(_objectSpread({}, Manipulator.getDataAttributes(target)), Manipulator.getDataAttributes(this));

      var slideIndex = this.getAttribute('data-bs-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel.carouselInterface(target, config);

      if (slideIndex) {
        Carousel.getInstance(target).to(slideIndex);
      }

      event.preventDefault();
    }
  }]);

  return Carousel;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


exports.Carousel = Carousel;
EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
EventHandler.on(window, EVENT_LOAD_DATA_API$2, function () {
  var carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

  for (var i = 0, len = carousels.length; i < len; i++) {
    Carousel.carouselInterface(carousels[i], Carousel.getInstance(carousels[i]));
  }
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Carousel to jQuery only if jQuery is present
 */

defineJQueryPlugin(Carousel);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.1): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$a = 'collapse';
var DATA_KEY$9 = 'bs.collapse';
var EVENT_KEY$9 = ".".concat(DATA_KEY$9);
var DATA_API_KEY$5 = '.data-api';
var Default$9 = {
  toggle: true,
  parent: null
};
var DefaultType$9 = {
  toggle: 'boolean',
  parent: '(null|element)'
};
var EVENT_SHOW$5 = "show".concat(EVENT_KEY$9);
var EVENT_SHOWN$5 = "shown".concat(EVENT_KEY$9);
var EVENT_HIDE$5 = "hide".concat(EVENT_KEY$9);
var EVENT_HIDDEN$5 = "hidden".concat(EVENT_KEY$9);
var EVENT_CLICK_DATA_API$4 = "click".concat(EVENT_KEY$9).concat(DATA_API_KEY$5);
var CLASS_NAME_SHOW$7 = 'show';
var CLASS_NAME_COLLAPSE = 'collapse';
var CLASS_NAME_COLLAPSING = 'collapsing';
var CLASS_NAME_COLLAPSED = 'collapsed';
var CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
var WIDTH = 'width';
var HEIGHT = 'height';
var SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Collapse = /*#__PURE__*/function (_BaseComponent4) {
  _inherits(Collapse, _BaseComponent4);

  var _super4 = _createSuper(Collapse);

  function Collapse(element, config) {
    var _this8;

    _classCallCheck(this, Collapse);

    _this8 = _super4.call(this, element);
    _this8._isTransitioning = false;
    _this8._config = _this8._getConfig(config);
    _this8._triggerArray = [];
    var toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

    for (var i = 0, len = toggleList.length; i < len; i++) {
      var elem = toggleList[i];
      var selector = getSelectorFromElement(elem);
      var filterElement = SelectorEngine.find(selector).filter(function (foundElem) {
        return foundElem === _this8._element;
      });

      if (selector !== null && filterElement.length) {
        _this8._selector = selector;

        _this8._triggerArray.push(elem);
      }
    }

    _this8._initializeChildren();

    if (!_this8._config.parent) {
      _this8._addAriaAndCollapsedClass(_this8._triggerArray, _this8._isShown());
    }

    if (_this8._config.toggle) {
      _this8.toggle();
    }

    return _this8;
  } // Getters


  _createClass(Collapse, [{
    key: "toggle",
    value: // Public
    function toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }
  }, {
    key: "show",
    value: function show() {
      var _this9 = this;

      if (this._isTransitioning || this._isShown()) {
        return;
      }

      var actives = [];
      var activesData;

      if (this._config.parent) {
        var children = SelectorEngine.find(".".concat(CLASS_NAME_COLLAPSE, " .").concat(CLASS_NAME_COLLAPSE), this._config.parent);
        actives = SelectorEngine.find(SELECTOR_ACTIVES, this._config.parent).filter(function (elem) {
          return !children.includes(elem);
        }); // remove children if greater depth
      }

      var container = SelectorEngine.findOne(this._selector);

      if (actives.length) {
        var tempActiveData = actives.find(function (elem) {
          return container !== elem;
        });
        activesData = tempActiveData ? Collapse.getInstance(tempActiveData) : null;

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = EventHandler.trigger(this._element, EVENT_SHOW$5);

      if (startEvent.defaultPrevented) {
        return;
      }

      actives.forEach(function (elemActive) {
        if (container !== elemActive) {
          Collapse.getOrCreateInstance(elemActive, {
            toggle: false
          }).hide();
        }

        if (!activesData) {
          Data.set(elemActive, DATA_KEY$9, null);
        }
      });

      var dimension = this._getDimension();

      this._element.classList.remove(CLASS_NAME_COLLAPSE);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.style[dimension] = 0;

      this._addAriaAndCollapsedClass(this._triggerArray, true);

      this._isTransitioning = true;

      var complete = function complete() {
        _this9._isTransitioning = false;

        _this9._element.classList.remove(CLASS_NAME_COLLAPSING);

        _this9._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

        _this9._element.style[dimension] = '';
        EventHandler.trigger(_this9._element, EVENT_SHOWN$5);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll".concat(capitalizedDimension);

      this._queueCallback(complete, this._element, true);

      this._element.style[dimension] = "".concat(this._element[scrollSize], "px");
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this10 = this;

      if (this._isTransitioning || !this._isShown()) {
        return;
      }

      var startEvent = EventHandler.trigger(this._element, EVENT_HIDE$5);

      if (startEvent.defaultPrevented) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = "".concat(this._element.getBoundingClientRect()[dimension], "px");
      reflow(this._element);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

      var triggerArrayLength = this._triggerArray.length;

      for (var i = 0; i < triggerArrayLength; i++) {
        var trigger = this._triggerArray[i];
        var elem = getElementFromSelector(trigger);

        if (elem && !this._isShown(elem)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }

      this._isTransitioning = true;

      var complete = function complete() {
        _this10._isTransitioning = false;

        _this10._element.classList.remove(CLASS_NAME_COLLAPSING);

        _this10._element.classList.add(CLASS_NAME_COLLAPSE);

        EventHandler.trigger(_this10._element, EVENT_HIDDEN$5);
      };

      this._element.style[dimension] = '';

      this._queueCallback(complete, this._element, true);
    }
  }, {
    key: "_isShown",
    value: function _isShown() {
      var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
      return element.classList.contains(CLASS_NAME_SHOW$7);
    } // Private

  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread(_objectSpread(_objectSpread({}, Default$9), Manipulator.getDataAttributes(this._element)), config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      config.parent = getElement(config.parent);
      typeCheckConfig(NAME$a, config, DefaultType$9);
      return config;
    }
  }, {
    key: "_getDimension",
    value: function _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
  }, {
    key: "_initializeChildren",
    value: function _initializeChildren() {
      var _this11 = this;

      if (!this._config.parent) {
        return;
      }

      var children = SelectorEngine.find(".".concat(CLASS_NAME_COLLAPSE, " .").concat(CLASS_NAME_COLLAPSE), this._config.parent);
      SelectorEngine.find(SELECTOR_DATA_TOGGLE$4, this._config.parent).filter(function (elem) {
        return !children.includes(elem);
      }).forEach(function (element) {
        var selected = getElementFromSelector(element);

        if (selected) {
          _this11._addAriaAndCollapsedClass([element], _this11._isShown(selected));
        }
      });
    }
  }, {
    key: "_addAriaAndCollapsedClass",
    value: function _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }

      triggerArray.forEach(function (elem) {
        if (isOpen) {
          elem.classList.remove(CLASS_NAME_COLLAPSED);
        } else {
          elem.classList.add(CLASS_NAME_COLLAPSED);
        }

        elem.setAttribute('aria-expanded', isOpen);
      });
    } // Static

  }], [{
    key: "Default",
    get: function get() {
      return Default$9;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$a;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var _config = {};

        if (typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        var data = Collapse.getOrCreateInstance(this, _config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config]();
        }
      });
    }
  }]);

  return Collapse;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


exports.Collapse = Collapse;
EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
  if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
    event.preventDefault();
  }

  var selector = getSelectorFromElement(this);
  var selectorElements = SelectorEngine.find(selector);
  selectorElements.forEach(function (element) {
    Collapse.getOrCreateInstance(element, {
      toggle: false
    }).toggle();
  });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Collapse to jQuery only if jQuery is present
 */

defineJQueryPlugin(Collapse);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.1): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$9 = 'dropdown';
var DATA_KEY$8 = 'bs.dropdown';
var EVENT_KEY$8 = ".".concat(DATA_KEY$8);
var DATA_API_KEY$4 = '.data-api';
var ESCAPE_KEY$2 = 'Escape';
var SPACE_KEY = 'Space';
var TAB_KEY$1 = 'Tab';
var ARROW_UP_KEY = 'ArrowUp';
var ARROW_DOWN_KEY = 'ArrowDown';
var RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

var REGEXP_KEYDOWN = new RegExp("".concat(ARROW_UP_KEY, "|").concat(ARROW_DOWN_KEY, "|").concat(ESCAPE_KEY$2));
var EVENT_HIDE$4 = "hide".concat(EVENT_KEY$8);
var EVENT_HIDDEN$4 = "hidden".concat(EVENT_KEY$8);
var EVENT_SHOW$4 = "show".concat(EVENT_KEY$8);
var EVENT_SHOWN$4 = "shown".concat(EVENT_KEY$8);
var EVENT_CLICK_DATA_API$3 = "click".concat(EVENT_KEY$8).concat(DATA_API_KEY$4);
var EVENT_KEYDOWN_DATA_API = "keydown".concat(EVENT_KEY$8).concat(DATA_API_KEY$4);
var EVENT_KEYUP_DATA_API = "keyup".concat(EVENT_KEY$8).concat(DATA_API_KEY$4);
var CLASS_NAME_SHOW$6 = 'show';
var CLASS_NAME_DROPUP = 'dropup';
var CLASS_NAME_DROPEND = 'dropend';
var CLASS_NAME_DROPSTART = 'dropstart';
var CLASS_NAME_NAVBAR = 'navbar';
var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
var SELECTOR_MENU = '.dropdown-menu';
var SELECTOR_NAVBAR_NAV = '.navbar-nav';
var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
var PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
var PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
var PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
var PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
var PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
var PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
var Default$8 = {
  offset: [0, 2],
  boundary: 'clippingParents',
  reference: 'toggle',
  display: 'dynamic',
  popperConfig: null,
  autoClose: true
};
var DefaultType$8 = {
  offset: '(array|string|function)',
  boundary: '(string|element)',
  reference: '(string|element|object)',
  display: 'string',
  popperConfig: '(null|object|function)',
  autoClose: '(boolean|string)'
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Dropdown = /*#__PURE__*/function (_BaseComponent5) {
  _inherits(Dropdown, _BaseComponent5);

  var _super5 = _createSuper(Dropdown);

  function Dropdown(element, config) {
    var _this12;

    _classCallCheck(this, Dropdown);

    _this12 = _super5.call(this, element);
    _this12._popper = null;
    _this12._config = _this12._getConfig(config);
    _this12._menu = _this12._getMenuElement();
    _this12._inNavbar = _this12._detectNavbar();
    return _this12;
  } // Getters


  _createClass(Dropdown, [{
    key: "toggle",
    value: // Public
    function toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
  }, {
    key: "show",
    value: function show() {
      if (isDisabled(this._element) || this._isShown(this._menu)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, relatedTarget);

      if (showEvent.defaultPrevented) {
        return;
      }

      var parent = Dropdown.getParentFromElement(this._element); // Totally disable Popper for Dropdowns in Navbar

      if (this._inNavbar) {
        Manipulator.setDataAttribute(this._menu, 'popper', 'none');
      } else {
        this._createPopper(parent);
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
        var _ref4;

        (_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children)).forEach(function (elem) {
          return EventHandler.on(elem, 'mouseover', noop);
        });
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      this._menu.classList.add(CLASS_NAME_SHOW$6);

      this._element.classList.add(CLASS_NAME_SHOW$6);

      EventHandler.trigger(this._element, EVENT_SHOWN$4, relatedTarget);
    }
  }, {
    key: "hide",
    value: function hide() {
      if (isDisabled(this._element) || !this._isShown(this._menu)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };

      this._completeHide(relatedTarget);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (this._popper) {
        this._popper.destroy();
      }

      _get(_getPrototypeOf(Dropdown.prototype), "dispose", this).call(this);
    }
  }, {
    key: "update",
    value: function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper) {
        this._popper.update();
      }
    } // Private

  }, {
    key: "_completeHide",
    value: function _completeHide(relatedTarget) {
      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4, relatedTarget);

      if (hideEvent.defaultPrevented) {
        return;
      } // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support


      if ('ontouchstart' in document.documentElement) {
        var _ref5;

        (_ref5 = []).concat.apply(_ref5, _toConsumableArray(document.body.children)).forEach(function (elem) {
          return EventHandler.off(elem, 'mouseover', noop);
        });
      }

      if (this._popper) {
        this._popper.destroy();
      }

      this._menu.classList.remove(CLASS_NAME_SHOW$6);

      this._element.classList.remove(CLASS_NAME_SHOW$6);

      this._element.setAttribute('aria-expanded', 'false');

      Manipulator.removeDataAttribute(this._menu, 'popper');
      EventHandler.trigger(this._element, EVENT_HIDDEN$4, relatedTarget);
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), Manipulator.getDataAttributes(this._element)), config);
      typeCheckConfig(NAME$9, config, this.constructor.DefaultType);

      if (_typeof(config.reference) === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
        // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError("".concat(NAME$9.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
      }

      return config;
    }
  }, {
    key: "_createPopper",
    value: function _createPopper(parent) {
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
      }

      var referenceElement = this._element;

      if (this._config.reference === 'parent') {
        referenceElement = parent;
      } else if (isElement(this._config.reference)) {
        referenceElement = getElement(this._config.reference);
      } else if (_typeof(this._config.reference) === 'object') {
        referenceElement = this._config.reference;
      }

      var popperConfig = this._getPopperConfig();

      var isDisplayStatic = popperConfig.modifiers.find(function (modifier) {
        return modifier.name === 'applyStyles' && modifier.enabled === false;
      });
      this._popper = Popper.createPopper(referenceElement, this._menu, popperConfig);

      if (isDisplayStatic) {
        Manipulator.setDataAttribute(this._menu, 'popper', 'static');
      }
    }
  }, {
    key: "_isShown",
    value: function _isShown() {
      var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
      return element.classList.contains(CLASS_NAME_SHOW$6);
    }
  }, {
    key: "_getMenuElement",
    value: function _getMenuElement() {
      return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
    }
  }, {
    key: "_getPlacement",
    value: function _getPlacement() {
      var parentDropdown = this._element.parentNode;

      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }

      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      } // We need to trim the value because custom properties can also include spaces


      var isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }

      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
  }, {
    key: "_detectNavbar",
    value: function _detectNavbar() {
      return this._element.closest(".".concat(CLASS_NAME_NAVBAR)) !== null;
    }
  }, {
    key: "_getOffset",
    value: function _getOffset() {
      var _this13 = this;

      var offset = this._config.offset;

      if (typeof offset === 'string') {
        return offset.split(',').map(function (val) {
          return Number.parseInt(val, 10);
        });
      }

      if (typeof offset === 'function') {
        return function (popperData) {
          return offset(popperData, _this13._element);
        };
      }

      return offset;
    }
  }, {
    key: "_getPopperConfig",
    value: function _getPopperConfig() {
      var defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }]
      }; // Disable Popper if we have a static display

      if (this._config.display === 'static') {
        defaultBsPopperConfig.modifiers = [{
          name: 'applyStyles',
          enabled: false
        }];
      }

      return _objectSpread(_objectSpread({}, defaultBsPopperConfig), typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig);
    }
  }, {
    key: "_selectMenuItem",
    value: function _selectMenuItem(_ref6) {
      var key = _ref6.key,
          target = _ref6.target;
      var items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(isVisible);

      if (!items.length) {
        return;
      } // if target isn't included in items (e.g. when expanding the dropdown)
      // allow cycling to get the last item in case key equals ARROW_UP_KEY


      getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
    } // Static

  }], [{
    key: "Default",
    get: function get() {
      return Default$8;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$8;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$9;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Dropdown.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"".concat(config, "\""));
        }

        data[config]();
      });
    }
  }, {
    key: "clearMenus",
    value: function clearMenus(event) {
      if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1)) {
        return;
      }

      var toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);

      for (var i = 0, len = toggles.length; i < len; i++) {
        var context = Dropdown.getInstance(toggles[i]);

        if (!context || context._config.autoClose === false) {
          continue;
        }

        if (!context._isShown()) {
          continue;
        }

        var relatedTarget = {
          relatedTarget: context._element
        };

        if (event) {
          var composedPath = event.composedPath();
          var isMenuTarget = composedPath.includes(context._menu);

          if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
            continue;
          } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


          if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
            continue;
          }

          if (event.type === 'click') {
            relatedTarget.clickEvent = event;
          }
        }

        context._completeHide(relatedTarget);
      }
    }
  }, {
    key: "getParentFromElement",
    value: function getParentFromElement(element) {
      return getElementFromSelector(element) || element.parentNode;
    }
  }, {
    key: "dataApiKeydownHandler",
    value: function dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY$2 && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) {
        return;
      }

      var isActive = this.classList.contains(CLASS_NAME_SHOW$6);

      if (!isActive && event.key === ESCAPE_KEY$2) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (isDisabled(this)) {
        return;
      }

      var getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0];
      var instance = Dropdown.getOrCreateInstance(getToggleButton);

      if (event.key === ESCAPE_KEY$2) {
        instance.hide();
        return;
      }

      if (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY) {
        if (!isActive) {
          instance.show();
        }

        instance._selectMenuItem(event);

        return;
      }

      if (!isActive || event.key === SPACE_KEY) {
        Dropdown.clearMenus();
      }
    }
  }]);

  return Dropdown;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


exports.Dropdown = Dropdown;
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
  event.preventDefault();
  Dropdown.getOrCreateInstance(this).toggle();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Dropdown to jQuery only if jQuery is present
 */

defineJQueryPlugin(Dropdown);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.1): util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
var SELECTOR_STICKY_CONTENT = '.sticky-top';

var ScrollBarHelper = /*#__PURE__*/function () {
  function ScrollBarHelper() {
    _classCallCheck(this, ScrollBarHelper);

    this._element = document.body;
  }

  _createClass(ScrollBarHelper, [{
    key: "getWidth",
    value: function getWidth() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
      var documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }
  }, {
    key: "hide",
    value: function hide() {
      var width = this.getWidth();

      this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width


      this._setElementAttributes(this._element, 'paddingRight', function (calculatedValue) {
        return calculatedValue + width;
      }); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth


      this._setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', function (calculatedValue) {
        return calculatedValue + width;
      });

      this._setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', function (calculatedValue) {
        return calculatedValue - width;
      });
    }
  }, {
    key: "_disableOverFlow",
    value: function _disableOverFlow() {
      this._saveInitialAttribute(this._element, 'overflow');

      this._element.style.overflow = 'hidden';
    }
  }, {
    key: "_setElementAttributes",
    value: function _setElementAttributes(selector, styleProp, callback) {
      var _this14 = this;

      var scrollbarWidth = this.getWidth();

      var manipulationCallBack = function manipulationCallBack(element) {
        if (element !== _this14._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }

        _this14._saveInitialAttribute(element, styleProp);

        var calculatedValue = window.getComputedStyle(element)[styleProp];
        element.style[styleProp] = "".concat(callback(Number.parseFloat(calculatedValue)), "px");
      };

      this._applyManipulationCallback(selector, manipulationCallBack);
    }
  }, {
    key: "reset",
    value: function reset() {
      this._resetElementAttributes(this._element, 'overflow');

      this._resetElementAttributes(this._element, 'paddingRight');

      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');

      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');
    }
  }, {
    key: "_saveInitialAttribute",
    value: function _saveInitialAttribute(element, styleProp) {
      var actualValue = element.style[styleProp];

      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProp, actualValue);
      }
    }
  }, {
    key: "_resetElementAttributes",
    value: function _resetElementAttributes(selector, styleProp) {
      var manipulationCallBack = function manipulationCallBack(element) {
        var value = Manipulator.getDataAttribute(element, styleProp);

        if (typeof value === 'undefined') {
          element.style.removeProperty(styleProp);
        } else {
          Manipulator.removeDataAttribute(element, styleProp);
          element.style[styleProp] = value;
        }
      };

      this._applyManipulationCallback(selector, manipulationCallBack);
    }
  }, {
    key: "_applyManipulationCallback",
    value: function _applyManipulationCallback(selector, callBack) {
      if (isElement(selector)) {
        callBack(selector);
      } else {
        SelectorEngine.find(selector, this._element).forEach(callBack);
      }
    }
  }, {
    key: "isOverflowing",
    value: function isOverflowing() {
      return this.getWidth() > 0;
    }
  }]);

  return ScrollBarHelper;
}();
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.1): util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */


var Default$7 = {
  className: 'modal-backdrop',
  isVisible: true,
  // if false, we use the backdrop helper without adding any element to the dom
  isAnimated: false,
  rootElement: 'body',
  // give the choice to place backdrop under different elements
  clickCallback: null
};
var DefaultType$7 = {
  className: 'string',
  isVisible: 'boolean',
  isAnimated: 'boolean',
  rootElement: '(element|string)',
  clickCallback: '(function|null)'
};
var NAME$8 = 'backdrop';
var CLASS_NAME_FADE$4 = 'fade';
var CLASS_NAME_SHOW$5 = 'show';
var EVENT_MOUSEDOWN = "mousedown.bs.".concat(NAME$8);

var Backdrop = /*#__PURE__*/function () {
  function Backdrop(config) {
    _classCallCheck(this, Backdrop);

    this._config = this._getConfig(config);
    this._isAppended = false;
    this._element = null;
  }

  _createClass(Backdrop, [{
    key: "show",
    value: function show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }

      this._append();

      if (this._config.isAnimated) {
        reflow(this._getElement());
      }

      this._getElement().classList.add(CLASS_NAME_SHOW$5);

      this._emulateAnimation(function () {
        execute(callback);
      });
    }
  }, {
    key: "hide",
    value: function hide(callback) {
      var _this15 = this;

      if (!this._config.isVisible) {
        execute(callback);
        return;
      }

      this._getElement().classList.remove(CLASS_NAME_SHOW$5);

      this._emulateAnimation(function () {
        _this15.dispose();

        execute(callback);
      });
    } // Private

  }, {
    key: "_getElement",
    value: function _getElement() {
      if (!this._element) {
        var backdrop = document.createElement('div');
        backdrop.className = this._config.className;

        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE$4);
        }

        this._element = backdrop;
      }

      return this._element;
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread(_objectSpread({}, Default$7), _typeof(config) === 'object' ? config : {}); // use getElement() with the default "body" to get a fresh Element on each instantiation

      config.rootElement = getElement(config.rootElement);
      typeCheckConfig(NAME$8, config, DefaultType$7);
      return config;
    }
  }, {
    key: "_append",
    value: function _append() {
      var _this16 = this;

      if (this._isAppended) {
        return;
      }

      this._config.rootElement.append(this._getElement());

      EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, function () {
        execute(_this16._config.clickCallback);
      });
      this._isAppended = true;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (!this._isAppended) {
        return;
      }

      EventHandler.off(this._element, EVENT_MOUSEDOWN);

      this._element.remove();

      this._isAppended = false;
    }
  }, {
    key: "_emulateAnimation",
    value: function _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
  }]);

  return Backdrop;
}();
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.1): util/focustrap.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */


var Default$6 = {
  trapElement: null,
  // The element to trap focus inside of
  autofocus: true
};
var DefaultType$6 = {
  trapElement: 'element',
  autofocus: 'boolean'
};
var NAME$7 = 'focustrap';
var DATA_KEY$7 = 'bs.focustrap';
var EVENT_KEY$7 = ".".concat(DATA_KEY$7);
var EVENT_FOCUSIN$1 = "focusin".concat(EVENT_KEY$7);
var EVENT_KEYDOWN_TAB = "keydown.tab".concat(EVENT_KEY$7);
var TAB_KEY = 'Tab';
var TAB_NAV_FORWARD = 'forward';
var TAB_NAV_BACKWARD = 'backward';

var FocusTrap = /*#__PURE__*/function () {
  function FocusTrap(config) {
    _classCallCheck(this, FocusTrap);

    this._config = this._getConfig(config);
    this._isActive = false;
    this._lastTabNavDirection = null;
  }

  _createClass(FocusTrap, [{
    key: "activate",
    value: function activate() {
      var _this17 = this;

      var _this$_config = this._config,
          trapElement = _this$_config.trapElement,
          autofocus = _this$_config.autofocus;

      if (this._isActive) {
        return;
      }

      if (autofocus) {
        trapElement.focus();
      }

      EventHandler.off(document, EVENT_KEY$7); // guard against infinite focus loop

      EventHandler.on(document, EVENT_FOCUSIN$1, function (event) {
        return _this17._handleFocusin(event);
      });
      EventHandler.on(document, EVENT_KEYDOWN_TAB, function (event) {
        return _this17._handleKeydown(event);
      });
      this._isActive = true;
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      if (!this._isActive) {
        return;
      }

      this._isActive = false;
      EventHandler.off(document, EVENT_KEY$7);
    } // Private

  }, {
    key: "_handleFocusin",
    value: function _handleFocusin(event) {
      var target = event.target;
      var trapElement = this._config.trapElement;

      if (target === document || target === trapElement || trapElement.contains(target)) {
        return;
      }

      var elements = SelectorEngine.focusableChildren(trapElement);

      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }
  }, {
    key: "_handleKeydown",
    value: function _handleKeydown(event) {
      if (event.key !== TAB_KEY) {
        return;
      }

      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread(_objectSpread({}, Default$6), _typeof(config) === 'object' ? config : {});
      typeCheckConfig(NAME$7, config, DefaultType$6);
      return config;
    }
  }]);

  return FocusTrap;
}();
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.1): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


var NAME$6 = 'modal';
var DATA_KEY$6 = 'bs.modal';
var EVENT_KEY$6 = ".".concat(DATA_KEY$6);
var DATA_API_KEY$3 = '.data-api';
var ESCAPE_KEY$1 = 'Escape';
var Default$5 = {
  backdrop: true,
  keyboard: true,
  focus: true
};
var DefaultType$5 = {
  backdrop: '(boolean|string)',
  keyboard: 'boolean',
  focus: 'boolean'
};
var EVENT_HIDE$3 = "hide".concat(EVENT_KEY$6);
var EVENT_HIDE_PREVENTED = "hidePrevented".concat(EVENT_KEY$6);
var EVENT_HIDDEN$3 = "hidden".concat(EVENT_KEY$6);
var EVENT_SHOW$3 = "show".concat(EVENT_KEY$6);
var EVENT_SHOWN$3 = "shown".concat(EVENT_KEY$6);
var EVENT_RESIZE = "resize".concat(EVENT_KEY$6);
var EVENT_CLICK_DISMISS = "click.dismiss".concat(EVENT_KEY$6);
var EVENT_KEYDOWN_DISMISS$1 = "keydown.dismiss".concat(EVENT_KEY$6);
var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss".concat(EVENT_KEY$6);
var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss".concat(EVENT_KEY$6);
var EVENT_CLICK_DATA_API$2 = "click".concat(EVENT_KEY$6).concat(DATA_API_KEY$3);
var CLASS_NAME_OPEN = 'modal-open';
var CLASS_NAME_FADE$3 = 'fade';
var CLASS_NAME_SHOW$4 = 'show';
var CLASS_NAME_STATIC = 'modal-static';
var OPEN_SELECTOR$1 = '.modal.show';
var SELECTOR_DIALOG = '.modal-dialog';
var SELECTOR_MODAL_BODY = '.modal-body';
var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Modal = /*#__PURE__*/function (_BaseComponent6) {
  _inherits(Modal, _BaseComponent6);

  var _super6 = _createSuper(Modal);

  function Modal(element, config) {
    var _this18;

    _classCallCheck(this, Modal);

    _this18 = _super6.call(this, element);
    _this18._config = _this18._getConfig(config);
    _this18._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, _this18._element);
    _this18._backdrop = _this18._initializeBackDrop();
    _this18._focustrap = _this18._initializeFocusTrap();
    _this18._isShown = false;
    _this18._ignoreBackdropClick = false;
    _this18._isTransitioning = false;
    _this18._scrollBar = new ScrollBarHelper();
    return _this18;
  } // Getters


  _createClass(Modal, [{
    key: "toggle",
    value: // Public
    function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
  }, {
    key: "show",
    value: function show(relatedTarget) {
      var _this19 = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget: relatedTarget
      });

      if (showEvent.defaultPrevented) {
        return;
      }

      this._isShown = true;

      if (this._isAnimated()) {
        this._isTransitioning = true;
      }

      this._scrollBar.hide();

      document.body.classList.add(CLASS_NAME_OPEN);

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, function () {
        EventHandler.one(_this19._element, EVENT_MOUSEUP_DISMISS, function (event) {
          if (event.target === _this19._element) {
            _this19._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this19._showElement(relatedTarget);
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this20 = this;

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);

      if (hideEvent.defaultPrevented) {
        return;
      }

      this._isShown = false;

      var isAnimated = this._isAnimated();

      if (isAnimated) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      this._focustrap.deactivate();

      this._element.classList.remove(CLASS_NAME_SHOW$4);

      EventHandler.off(this._element, EVENT_CLICK_DISMISS);
      EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);

      this._queueCallback(function () {
        return _this20._hideModal();
      }, this._element, isAnimated);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      [window, this._dialog].forEach(function (htmlElement) {
        return EventHandler.off(htmlElement, EVENT_KEY$6);
      });

      this._backdrop.dispose();

      this._focustrap.deactivate();

      _get(_getPrototypeOf(Modal.prototype), "dispose", this).call(this);
    }
  }, {
    key: "handleUpdate",
    value: function handleUpdate() {
      this._adjustDialog();
    } // Private

  }, {
    key: "_initializeBackDrop",
    value: function _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        // 'static' option will be translated to true, and booleans will keep their value
        isAnimated: this._isAnimated()
      });
    }
  }, {
    key: "_initializeFocusTrap",
    value: function _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread(_objectSpread(_objectSpread({}, Default$5), Manipulator.getDataAttributes(this._element)), _typeof(config) === 'object' ? config : {});
      typeCheckConfig(NAME$6, config, DefaultType$5);
      return config;
    }
  }, {
    key: "_showElement",
    value: function _showElement(relatedTarget) {
      var _this21 = this;

      var isAnimated = this._isAnimated();

      var modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.append(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      this._element.scrollTop = 0;

      if (modalBody) {
        modalBody.scrollTop = 0;
      }

      if (isAnimated) {
        reflow(this._element);
      }

      this._element.classList.add(CLASS_NAME_SHOW$4);

      var transitionComplete = function transitionComplete() {
        if (_this21._config.focus) {
          _this21._focustrap.activate();
        }

        _this21._isTransitioning = false;
        EventHandler.trigger(_this21._element, EVENT_SHOWN$3, {
          relatedTarget: relatedTarget
        });
      };

      this._queueCallback(transitionComplete, this._dialog, isAnimated);
    }
  }, {
    key: "_setEscapeEvent",
    value: function _setEscapeEvent() {
      var _this22 = this;

      if (this._isShown) {
        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, function (event) {
          if (_this22._config.keyboard && event.key === ESCAPE_KEY$1) {
            event.preventDefault();

            _this22.hide();
          } else if (!_this22._config.keyboard && event.key === ESCAPE_KEY$1) {
            _this22._triggerBackdropTransition();
          }
        });
      } else {
        EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS$1);
      }
    }
  }, {
    key: "_setResizeEvent",
    value: function _setResizeEvent() {
      var _this23 = this;

      if (this._isShown) {
        EventHandler.on(window, EVENT_RESIZE, function () {
          return _this23._adjustDialog();
        });
      } else {
        EventHandler.off(window, EVENT_RESIZE);
      }
    }
  }, {
    key: "_hideModal",
    value: function _hideModal() {
      var _this24 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._backdrop.hide(function () {
        document.body.classList.remove(CLASS_NAME_OPEN);

        _this24._resetAdjustments();

        _this24._scrollBar.reset();

        EventHandler.trigger(_this24._element, EVENT_HIDDEN$3);
      });
    }
  }, {
    key: "_showBackdrop",
    value: function _showBackdrop(callback) {
      var _this25 = this;

      EventHandler.on(this._element, EVENT_CLICK_DISMISS, function (event) {
        if (_this25._ignoreBackdropClick) {
          _this25._ignoreBackdropClick = false;
          return;
        }

        if (event.target !== event.currentTarget) {
          return;
        }

        if (_this25._config.backdrop === true) {
          _this25.hide();
        } else if (_this25._config.backdrop === 'static') {
          _this25._triggerBackdropTransition();
        }
      });

      this._backdrop.show(callback);
    }
  }, {
    key: "_isAnimated",
    value: function _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE$3);
    }
  }, {
    key: "_triggerBackdropTransition",
    value: function _triggerBackdropTransition() {
      var _this26 = this;

      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);

      if (hideEvent.defaultPrevented) {
        return;
      }

      var _this$_element = this._element,
          classList = _this$_element.classList,
          scrollHeight = _this$_element.scrollHeight,
          style = _this$_element.style;
      var isModalOverflowing = scrollHeight > document.documentElement.clientHeight; // return if the following background transition hasn't yet completed

      if (!isModalOverflowing && style.overflowY === 'hidden' || classList.contains(CLASS_NAME_STATIC)) {
        return;
      }

      if (!isModalOverflowing) {
        style.overflowY = 'hidden';
      }

      classList.add(CLASS_NAME_STATIC);

      this._queueCallback(function () {
        classList.remove(CLASS_NAME_STATIC);

        if (!isModalOverflowing) {
          _this26._queueCallback(function () {
            style.overflowY = '';
          }, _this26._dialog);
        }
      }, this._dialog);

      this._element.focus();
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // ----------------------------------------------------------------------

  }, {
    key: "_adjustDialog",
    value: function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      var scrollbarWidth = this._scrollBar.getWidth();

      var isBodyOverflowing = scrollbarWidth > 0;

      if (!isBodyOverflowing && isModalOverflowing && !isRTL() || isBodyOverflowing && !isModalOverflowing && isRTL()) {
        this._element.style.paddingLeft = "".concat(scrollbarWidth, "px");
      }

      if (isBodyOverflowing && !isModalOverflowing && !isRTL() || !isBodyOverflowing && isModalOverflowing && isRTL()) {
        this._element.style.paddingRight = "".concat(scrollbarWidth, "px");
      }
    }
  }, {
    key: "_resetAdjustments",
    value: function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    } // Static

  }], [{
    key: "Default",
    get: function get() {
      return Default$5;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$6;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = Modal.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"".concat(config, "\""));
        }

        data[config](relatedTarget);
      });
    }
  }]);

  return Modal;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


exports.Modal = Modal;
EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
  var _this27 = this;

  var target = getElementFromSelector(this);

  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  EventHandler.one(target, EVENT_SHOW$3, function (showEvent) {
    if (showEvent.defaultPrevented) {
      // only register focus restorer if modal will actually get shown
      return;
    }

    EventHandler.one(target, EVENT_HIDDEN$3, function () {
      if (isVisible(_this27)) {
        _this27.focus();
      }
    });
  }); // avoid conflict when clicking moddal toggler while another one is open

  var allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);

  if (allReadyOpen) {
    Modal.getInstance(allReadyOpen).hide();
  }

  var data = Modal.getOrCreateInstance(target);
  data.toggle(this);
});
enableDismissTrigger(Modal);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Modal to jQuery only if jQuery is present
 */

defineJQueryPlugin(Modal);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.1): offcanvas.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$5 = 'offcanvas';
var DATA_KEY$5 = 'bs.offcanvas';
var EVENT_KEY$5 = ".".concat(DATA_KEY$5);
var DATA_API_KEY$2 = '.data-api';
var EVENT_LOAD_DATA_API$1 = "load".concat(EVENT_KEY$5).concat(DATA_API_KEY$2);
var ESCAPE_KEY = 'Escape';
var Default$4 = {
  backdrop: true,
  keyboard: true,
  scroll: false
};
var DefaultType$4 = {
  backdrop: 'boolean',
  keyboard: 'boolean',
  scroll: 'boolean'
};
var CLASS_NAME_SHOW$3 = 'show';
var CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
var OPEN_SELECTOR = '.offcanvas.show';
var EVENT_SHOW$2 = "show".concat(EVENT_KEY$5);
var EVENT_SHOWN$2 = "shown".concat(EVENT_KEY$5);
var EVENT_HIDE$2 = "hide".concat(EVENT_KEY$5);
var EVENT_HIDDEN$2 = "hidden".concat(EVENT_KEY$5);
var EVENT_CLICK_DATA_API$1 = "click".concat(EVENT_KEY$5).concat(DATA_API_KEY$2);
var EVENT_KEYDOWN_DISMISS = "keydown.dismiss".concat(EVENT_KEY$5);
var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Offcanvas = /*#__PURE__*/function (_BaseComponent7) {
  _inherits(Offcanvas, _BaseComponent7);

  var _super7 = _createSuper(Offcanvas);

  function Offcanvas(element, config) {
    var _this28;

    _classCallCheck(this, Offcanvas);

    _this28 = _super7.call(this, element);
    _this28._config = _this28._getConfig(config);
    _this28._isShown = false;
    _this28._backdrop = _this28._initializeBackDrop();
    _this28._focustrap = _this28._initializeFocusTrap();

    _this28._addEventListeners();

    return _this28;
  } // Getters


  _createClass(Offcanvas, [{
    key: "toggle",
    value: // Public
    function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
  }, {
    key: "show",
    value: function show(relatedTarget) {
      var _this29 = this;

      if (this._isShown) {
        return;
      }

      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
        relatedTarget: relatedTarget
      });

      if (showEvent.defaultPrevented) {
        return;
      }

      this._isShown = true;
      this._element.style.visibility = 'visible';

      this._backdrop.show();

      if (!this._config.scroll) {
        new ScrollBarHelper().hide();
      }

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      this._element.classList.add(CLASS_NAME_SHOW$3);

      var completeCallBack = function completeCallBack() {
        if (!_this29._config.scroll) {
          _this29._focustrap.activate();
        }

        EventHandler.trigger(_this29._element, EVENT_SHOWN$2, {
          relatedTarget: relatedTarget
        });
      };

      this._queueCallback(completeCallBack, this._element, true);
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this30 = this;

      if (!this._isShown) {
        return;
      }

      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);

      if (hideEvent.defaultPrevented) {
        return;
      }

      this._focustrap.deactivate();

      this._element.blur();

      this._isShown = false;

      this._element.classList.remove(CLASS_NAME_SHOW$3);

      this._backdrop.hide();

      var completeCallback = function completeCallback() {
        _this30._element.setAttribute('aria-hidden', true);

        _this30._element.removeAttribute('aria-modal');

        _this30._element.removeAttribute('role');

        _this30._element.style.visibility = 'hidden';

        if (!_this30._config.scroll) {
          new ScrollBarHelper().reset();
        }

        EventHandler.trigger(_this30._element, EVENT_HIDDEN$2);
      };

      this._queueCallback(completeCallback, this._element, true);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._backdrop.dispose();

      this._focustrap.deactivate();

      _get(_getPrototypeOf(Offcanvas.prototype), "dispose", this).call(this);
    } // Private

  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread(_objectSpread(_objectSpread({}, Default$4), Manipulator.getDataAttributes(this._element)), _typeof(config) === 'object' ? config : {});
      typeCheckConfig(NAME$5, config, DefaultType$4);
      return config;
    }
  }, {
    key: "_initializeBackDrop",
    value: function _initializeBackDrop() {
      var _this31 = this;

      return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible: this._config.backdrop,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: function clickCallback() {
          return _this31.hide();
        }
      });
    }
  }, {
    key: "_initializeFocusTrap",
    value: function _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this32 = this;

      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, function (event) {
        if (_this32._config.keyboard && event.key === ESCAPE_KEY) {
          _this32.hide();
        }
      });
    } // Static

  }], [{
    key: "NAME",
    get: function get() {
      return NAME$5;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$4;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Offcanvas.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError("No method named \"".concat(config, "\""));
        }

        data[config](this);
      });
    }
  }]);

  return Offcanvas;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


exports.Offcanvas = Offcanvas;
EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
  var _this33 = this;

  var target = getElementFromSelector(this);

  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  if (isDisabled(this)) {
    return;
  }

  EventHandler.one(target, EVENT_HIDDEN$2, function () {
    // focus on trigger when it is closed
    if (isVisible(_this33)) {
      _this33.focus();
    }
  }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

  var allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);

  if (allReadyOpen && allReadyOpen !== target) {
    Offcanvas.getInstance(allReadyOpen).hide();
  }

  var data = Offcanvas.getOrCreateInstance(target);
  data.toggle(this);
});
EventHandler.on(window, EVENT_LOAD_DATA_API$1, function () {
  return SelectorEngine.find(OPEN_SELECTOR).forEach(function (el) {
    return Offcanvas.getOrCreateInstance(el).show();
  });
});
enableDismissTrigger(Offcanvas);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

defineJQueryPlugin(Offcanvas);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.1): util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

var uriAttrs = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
 */

var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
 */

var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

var allowedAttribute = function allowedAttribute(attr, allowedAttributeList) {
  var attrName = attr.nodeName.toLowerCase();

  if (allowedAttributeList.includes(attrName)) {
    if (uriAttrs.has(attrName)) {
      return Boolean(SAFE_URL_PATTERN.test(attr.nodeValue) || DATA_URL_PATTERN.test(attr.nodeValue));
    }

    return true;
  }

  var regExp = allowedAttributeList.filter(function (attrRegex) {
    return attrRegex instanceof RegExp;
  }); // Check if a regular expression validates the attribute.

  for (var i = 0, len = regExp.length; i < len; i++) {
    if (regExp[i].test(attrName)) {
      return true;
    }
  }

  return false;
};

var DefaultAllowlist = {
  // Global attributes allowed on any supplied element below.
  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
  a: ['target', 'href', 'title', 'rel'],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};

function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
  var _ref7;

  if (!unsafeHtml.length) {
    return unsafeHtml;
  }

  if (sanitizeFn && typeof sanitizeFn === 'function') {
    return sanitizeFn(unsafeHtml);
  }

  var domParser = new window.DOMParser();
  var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
  var allowlistKeys = Object.keys(allowList);

  var elements = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(createdDocument.body.querySelectorAll('*')));

  var _loop = function _loop(i, len) {
    var _ref8;

    var el = elements[i];
    var elName = el.nodeName.toLowerCase();

    if (!allowlistKeys.includes(elName)) {
      el.remove();
      return "continue";
    }

    var attributeList = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(el.attributes));

    var allowedAttributes = [].concat(allowList['*'] || [], allowList[elName] || []);
    attributeList.forEach(function (attr) {
      if (!allowedAttribute(attr, allowedAttributes)) {
        el.removeAttribute(attr.nodeName);
      }
    });
  };

  for (var i = 0, len = elements.length; i < len; i++) {
    var _ret = _loop(i, len);

    if (_ret === "continue") continue;
  }

  return createdDocument.body.innerHTML;
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.1): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


var NAME$4 = 'tooltip';
var DATA_KEY$4 = 'bs.tooltip';
var EVENT_KEY$4 = ".".concat(DATA_KEY$4);
var CLASS_PREFIX$1 = 'bs-tooltip';
var DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
var DefaultType$3 = {
  animation: 'boolean',
  template: 'string',
  title: '(string|element|function)',
  trigger: 'string',
  delay: '(number|object)',
  html: 'boolean',
  selector: '(string|boolean)',
  placement: '(string|function)',
  offset: '(array|string|function)',
  container: '(string|element|boolean)',
  fallbackPlacements: 'array',
  boundary: '(string|element)',
  customClass: '(string|function)',
  sanitize: 'boolean',
  sanitizeFn: '(null|function)',
  allowList: 'object',
  popperConfig: '(null|object|function)'
};
var AttachmentMap = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: isRTL() ? 'left' : 'right',
  BOTTOM: 'bottom',
  LEFT: isRTL() ? 'right' : 'left'
};
var Default$3 = {
  animation: true,
  template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
  trigger: 'hover focus',
  title: '',
  delay: 0,
  html: false,
  selector: false,
  placement: 'top',
  offset: [0, 0],
  container: false,
  fallbackPlacements: ['top', 'right', 'bottom', 'left'],
  boundary: 'clippingParents',
  customClass: '',
  sanitize: true,
  sanitizeFn: null,
  allowList: DefaultAllowlist,
  popperConfig: null
};
var Event$2 = {
  HIDE: "hide".concat(EVENT_KEY$4),
  HIDDEN: "hidden".concat(EVENT_KEY$4),
  SHOW: "show".concat(EVENT_KEY$4),
  SHOWN: "shown".concat(EVENT_KEY$4),
  INSERTED: "inserted".concat(EVENT_KEY$4),
  CLICK: "click".concat(EVENT_KEY$4),
  FOCUSIN: "focusin".concat(EVENT_KEY$4),
  FOCUSOUT: "focusout".concat(EVENT_KEY$4),
  MOUSEENTER: "mouseenter".concat(EVENT_KEY$4),
  MOUSELEAVE: "mouseleave".concat(EVENT_KEY$4)
};
var CLASS_NAME_FADE$2 = 'fade';
var CLASS_NAME_MODAL = 'modal';
var CLASS_NAME_SHOW$2 = 'show';
var HOVER_STATE_SHOW = 'show';
var HOVER_STATE_OUT = 'out';
var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
var SELECTOR_MODAL = ".".concat(CLASS_NAME_MODAL);
var EVENT_MODAL_HIDE = 'hide.bs.modal';
var TRIGGER_HOVER = 'hover';
var TRIGGER_FOCUS = 'focus';
var TRIGGER_CLICK = 'click';
var TRIGGER_MANUAL = 'manual';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Tooltip = /*#__PURE__*/function (_BaseComponent8) {
  _inherits(Tooltip, _BaseComponent8);

  var _super8 = _createSuper(Tooltip);

  function Tooltip(element, config) {
    var _this34;

    _classCallCheck(this, Tooltip);

    if (typeof Popper === 'undefined') {
      throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
    }

    _this34 = _super8.call(this, element); // private

    _this34._isEnabled = true;
    _this34._timeout = 0;
    _this34._hoverState = '';
    _this34._activeTrigger = {};
    _this34._popper = null; // Protected

    _this34._config = _this34._getConfig(config);
    _this34.tip = null;

    _this34._setListeners();

    return _this34;
  } // Getters


  _createClass(Tooltip, [{
    key: "enable",
    value: // Public
    function enable() {
      this._isEnabled = true;
    }
  }, {
    key: "disable",
    value: function disable() {
      this._isEnabled = false;
    }
  }, {
    key: "toggleEnabled",
    value: function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
  }, {
    key: "toggle",
    value: function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var context = this._initializeOnDelegatedTarget(event);

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$2)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      clearTimeout(this._timeout);
      EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

      if (this.tip) {
        this.tip.remove();
      }

      this._disposePopper();

      _get(_getPrototypeOf(Tooltip.prototype), "dispose", this).call(this);
    }
  }, {
    key: "show",
    value: function show() {
      var _this35 = this;

      if (this._element.style.display === 'none') {
        throw new Error('Please use show on visible elements');
      }

      if (!(this.isWithContent() && this._isEnabled)) {
        return;
      }

      var showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
      var shadowRoot = findShadowRoot(this._element);
      var isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);

      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      } // A trick to recreate a tooltip in case a new title is given by using the NOT documented `data-bs-original-title`
      // This will be removed later in favor of a `setContent` method


      if (this.constructor.NAME === 'tooltip' && this.tip && this.getTitle() !== this.tip.querySelector(SELECTOR_TOOLTIP_INNER).innerHTML) {
        this._disposePopper();

        this.tip.remove();
        this.tip = null;
      }

      var tip = this.getTipElement();
      var tipId = getUID(this.constructor.NAME);
      tip.setAttribute('id', tipId);

      this._element.setAttribute('aria-describedby', tipId);

      if (this._config.animation) {
        tip.classList.add(CLASS_NAME_FADE$2);
      }

      var placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;

      var attachment = this._getAttachment(placement);

      this._addAttachmentClass(attachment);

      var container = this._config.container;
      Data.set(tip, this.constructor.DATA_KEY, this);

      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.append(tip);
        EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
      }

      if (this._popper) {
        this._popper.update();
      } else {
        this._popper = Popper.createPopper(this._element, tip, this._getPopperConfig(attachment));
      }

      tip.classList.add(CLASS_NAME_SHOW$2);

      var customClass = this._resolvePossibleFunction(this._config.customClass);

      if (customClass) {
        var _tip$classList;

        (_tip$classList = tip.classList).add.apply(_tip$classList, _toConsumableArray(customClass.split(' ')));
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement) {
        var _ref9;

        (_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children)).forEach(function (element) {
          EventHandler.on(element, 'mouseover', noop);
        });
      }

      var complete = function complete() {
        var prevHoverState = _this35._hoverState;
        _this35._hoverState = null;
        EventHandler.trigger(_this35._element, _this35.constructor.Event.SHOWN);

        if (prevHoverState === HOVER_STATE_OUT) {
          _this35._leave(null, _this35);
        }
      };

      var isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);

      this._queueCallback(complete, this.tip, isAnimated);
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this36 = this;

      if (!this._popper) {
        return;
      }

      var tip = this.getTipElement();

      var complete = function complete() {
        if (_this36._isWithActiveTrigger()) {
          return;
        }

        if (_this36._hoverState !== HOVER_STATE_SHOW) {
          tip.remove();
        }

        _this36._cleanTipClass();

        _this36._element.removeAttribute('aria-describedby');

        EventHandler.trigger(_this36._element, _this36.constructor.Event.HIDDEN);

        _this36._disposePopper();
      };

      var hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);

      if (hideEvent.defaultPrevented) {
        return;
      }

      tip.classList.remove(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        var _ref10;

        (_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children)).forEach(function (element) {
          return EventHandler.off(element, 'mouseover', noop);
        });
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      var isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);

      this._queueCallback(complete, this.tip, isAnimated);

      this._hoverState = '';
    }
  }, {
    key: "update",
    value: function update() {
      if (this._popper !== null) {
        this._popper.update();
      }
    } // Protected

  }, {
    key: "isWithContent",
    value: function isWithContent() {
      return Boolean(this.getTitle());
    }
  }, {
    key: "getTipElement",
    value: function getTipElement() {
      if (this.tip) {
        return this.tip;
      }

      var element = document.createElement('div');
      element.innerHTML = this._config.template;
      var tip = element.children[0];
      this.setContent(tip);
      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
      this.tip = tip;
      return this.tip;
    }
  }, {
    key: "setContent",
    value: function setContent(tip) {
      this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TOOLTIP_INNER);
    }
  }, {
    key: "_sanitizeAndSetContent",
    value: function _sanitizeAndSetContent(template, content, selector) {
      var templateElement = SelectorEngine.findOne(selector, template);

      if (!content && templateElement) {
        templateElement.remove();
        return;
      } // we use append for html objects to maintain js events


      this.setElementContent(templateElement, content);
    }
  }, {
    key: "setElementContent",
    value: function setElementContent(element, content) {
      if (element === null) {
        return;
      }

      if (isElement(content)) {
        content = getElement(content); // content is a DOM node or a jQuery

        if (this._config.html) {
          if (content.parentNode !== element) {
            element.innerHTML = '';
            element.append(content);
          }
        } else {
          element.textContent = content.textContent;
        }

        return;
      }

      if (this._config.html) {
        if (this._config.sanitize) {
          content = sanitizeHtml(content, this._config.allowList, this._config.sanitizeFn);
        }

        element.innerHTML = content;
      } else {
        element.textContent = content;
      }
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      var title = this._element.getAttribute('data-bs-original-title') || this._config.title;

      return this._resolvePossibleFunction(title);
    }
  }, {
    key: "updateAttachment",
    value: function updateAttachment(attachment) {
      if (attachment === 'right') {
        return 'end';
      }

      if (attachment === 'left') {
        return 'start';
      }

      return attachment;
    } // Private

  }, {
    key: "_initializeOnDelegatedTarget",
    value: function _initializeOnDelegatedTarget(event, context) {
      return context || this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }
  }, {
    key: "_getOffset",
    value: function _getOffset() {
      var _this37 = this;

      var offset = this._config.offset;

      if (typeof offset === 'string') {
        return offset.split(',').map(function (val) {
          return Number.parseInt(val, 10);
        });
      }

      if (typeof offset === 'function') {
        return function (popperData) {
          return offset(popperData, _this37._element);
        };
      }

      return offset;
    }
  }, {
    key: "_resolvePossibleFunction",
    value: function _resolvePossibleFunction(content) {
      return typeof content === 'function' ? content.call(this._element) : content;
    }
  }, {
    key: "_getPopperConfig",
    value: function _getPopperConfig(attachment) {
      var _this38 = this;

      var defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
          name: 'flip',
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }, {
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'arrow',
          options: {
            element: ".".concat(this.constructor.NAME, "-arrow")
          }
        }, {
          name: 'onChange',
          enabled: true,
          phase: 'afterWrite',
          fn: function fn(data) {
            return _this38._handlePopperPlacementChange(data);
          }
        }],
        onFirstUpdate: function onFirstUpdate(data) {
          if (data.options.placement !== data.placement) {
            _this38._handlePopperPlacementChange(data);
          }
        }
      };
      return _objectSpread(_objectSpread({}, defaultBsPopperConfig), typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig);
    }
  }, {
    key: "_addAttachmentClass",
    value: function _addAttachmentClass(attachment) {
      this.getTipElement().classList.add("".concat(this._getBasicClassPrefix(), "-").concat(this.updateAttachment(attachment)));
    }
  }, {
    key: "_getAttachment",
    value: function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    }
  }, {
    key: "_setListeners",
    value: function _setListeners() {
      var _this39 = this;

      var triggers = this._config.trigger.split(' ');

      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          EventHandler.on(_this39._element, _this39.constructor.Event.CLICK, _this39._config.selector, function (event) {
            return _this39.toggle(event);
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          var eventIn = trigger === TRIGGER_HOVER ? _this39.constructor.Event.MOUSEENTER : _this39.constructor.Event.FOCUSIN;
          var eventOut = trigger === TRIGGER_HOVER ? _this39.constructor.Event.MOUSELEAVE : _this39.constructor.Event.FOCUSOUT;
          EventHandler.on(_this39._element, eventIn, _this39._config.selector, function (event) {
            return _this39._enter(event);
          });
          EventHandler.on(_this39._element, eventOut, _this39._config.selector, function (event) {
            return _this39._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this39._element) {
          _this39.hide();
        }
      };

      EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

      if (this._config.selector) {
        this._config = _objectSpread(_objectSpread({}, this._config), {}, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    }
  }, {
    key: "_fixTitle",
    value: function _fixTitle() {
      var title = this._element.getAttribute('title');

      var originalTitleType = _typeof(this._element.getAttribute('data-bs-original-title'));

      if (title || originalTitleType !== 'string') {
        this._element.setAttribute('data-bs-original-title', title || '');

        if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
          this._element.setAttribute('aria-label', title);
        }

        this._element.setAttribute('title', '');
      }
    }
  }, {
    key: "_enter",
    value: function _enter(event, context) {
      context = this._initializeOnDelegatedTarget(event, context);

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$2) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context._config.delay || !context._config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context._config.delay.show);
    }
  }, {
    key: "_leave",
    value: function _leave(event, context) {
      context = this._initializeOnDelegatedTarget(event, context);

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context._config.delay || !context._config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context._config.delay.hide);
    }
  }, {
    key: "_isWithActiveTrigger",
    value: function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      var dataAttributes = Manipulator.getDataAttributes(this._element);
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), dataAttributes), _typeof(config) === 'object' && config ? config : {});
      config.container = config.container === false ? document.body : getElement(config.container);

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      typeCheckConfig(NAME$4, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
      }

      return config;
    }
  }, {
    key: "_getDelegateConfig",
    value: function _getDelegateConfig() {
      var config = {};

      for (var key in this._config) {
        if (this.constructor.Default[key] !== this._config[key]) {
          config[key] = this._config[key];
        }
      } // In the future can be replaced with:
      // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
      // `Object.fromEntries(keysWithDifferentValues)`


      return config;
    }
  }, {
    key: "_cleanTipClass",
    value: function _cleanTipClass() {
      var tip = this.getTipElement();
      var basicClassPrefixRegex = new RegExp("(^|\\s)".concat(this._getBasicClassPrefix(), "\\S+"), 'g');
      var tabClass = tip.getAttribute('class').match(basicClassPrefixRegex);

      if (tabClass !== null && tabClass.length > 0) {
        tabClass.map(function (token) {
          return token.trim();
        }).forEach(function (tClass) {
          return tip.classList.remove(tClass);
        });
      }
    }
  }, {
    key: "_getBasicClassPrefix",
    value: function _getBasicClassPrefix() {
      return CLASS_PREFIX$1;
    }
  }, {
    key: "_handlePopperPlacementChange",
    value: function _handlePopperPlacementChange(popperData) {
      var state = popperData.state;

      if (!state) {
        return;
      }

      this.tip = state.elements.popper;

      this._cleanTipClass();

      this._addAttachmentClass(this._getAttachment(state.placement));
    }
  }, {
    key: "_disposePopper",
    value: function _disposePopper() {
      if (this._popper) {
        this._popper.destroy();

        this._popper = null;
      }
    } // Static

  }], [{
    key: "Default",
    get: function get() {
      return Default$3;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$4;
    }
  }, {
    key: "Event",
    get: function get() {
      return Event$2;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$3;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Tooltip.getOrCreateInstance(this, config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config]();
        }
      });
    }
  }]);

  return Tooltip;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tooltip to jQuery only if jQuery is present
 */


exports.Tooltip = Tooltip;
defineJQueryPlugin(Tooltip);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.1): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$3 = 'popover';
var DATA_KEY$3 = 'bs.popover';
var EVENT_KEY$3 = ".".concat(DATA_KEY$3);
var CLASS_PREFIX = 'bs-popover';

var Default$2 = _objectSpread(_objectSpread({}, Tooltip.Default), {}, {
  placement: 'right',
  offset: [0, 8],
  trigger: 'click',
  content: '',
  template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'
});

var DefaultType$2 = _objectSpread(_objectSpread({}, Tooltip.DefaultType), {}, {
  content: '(string|element|function)'
});

var Event$1 = {
  HIDE: "hide".concat(EVENT_KEY$3),
  HIDDEN: "hidden".concat(EVENT_KEY$3),
  SHOW: "show".concat(EVENT_KEY$3),
  SHOWN: "shown".concat(EVENT_KEY$3),
  INSERTED: "inserted".concat(EVENT_KEY$3),
  CLICK: "click".concat(EVENT_KEY$3),
  FOCUSIN: "focusin".concat(EVENT_KEY$3),
  FOCUSOUT: "focusout".concat(EVENT_KEY$3),
  MOUSEENTER: "mouseenter".concat(EVENT_KEY$3),
  MOUSELEAVE: "mouseleave".concat(EVENT_KEY$3)
};
var SELECTOR_TITLE = '.popover-header';
var SELECTOR_CONTENT = '.popover-body';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Popover = /*#__PURE__*/function (_Tooltip) {
  _inherits(Popover, _Tooltip);

  var _super9 = _createSuper(Popover);

  function Popover() {
    _classCallCheck(this, Popover);

    return _super9.apply(this, arguments);
  }

  _createClass(Popover, [{
    key: "isWithContent",
    value: // Overrides
    function isWithContent() {
      return this.getTitle() || this._getContent();
    }
  }, {
    key: "setContent",
    value: function setContent(tip) {
      this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TITLE);

      this._sanitizeAndSetContent(tip, this._getContent(), SELECTOR_CONTENT);
    } // Private

  }, {
    key: "_getContent",
    value: function _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
  }, {
    key: "_getBasicClassPrefix",
    value: function _getBasicClassPrefix() {
      return CLASS_PREFIX;
    } // Static

  }], [{
    key: "Default",
    get: // Getters
    function get() {
      return Default$2;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$3;
    }
  }, {
    key: "Event",
    get: function get() {
      return Event$1;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$2;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Popover.getOrCreateInstance(this, config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config]();
        }
      });
    }
  }]);

  return Popover;
}(Tooltip);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Popover to jQuery only if jQuery is present
 */


exports.Popover = Popover;
defineJQueryPlugin(Popover);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.1): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$2 = 'scrollspy';
var DATA_KEY$2 = 'bs.scrollspy';
var EVENT_KEY$2 = ".".concat(DATA_KEY$2);
var DATA_API_KEY$1 = '.data-api';
var Default$1 = {
  offset: 10,
  method: 'auto',
  target: ''
};
var DefaultType$1 = {
  offset: 'number',
  method: 'string',
  target: '(string|element)'
};
var EVENT_ACTIVATE = "activate".concat(EVENT_KEY$2);
var EVENT_SCROLL = "scroll".concat(EVENT_KEY$2);
var EVENT_LOAD_DATA_API = "load".concat(EVENT_KEY$2).concat(DATA_API_KEY$1);
var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
var CLASS_NAME_ACTIVE$1 = 'active';
var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
var SELECTOR_NAV_LINKS = '.nav-link';
var SELECTOR_NAV_ITEMS = '.nav-item';
var SELECTOR_LIST_ITEMS = '.list-group-item';
var SELECTOR_LINK_ITEMS = "".concat(SELECTOR_NAV_LINKS, ", ").concat(SELECTOR_LIST_ITEMS, ", .").concat(CLASS_NAME_DROPDOWN_ITEM);
var SELECTOR_DROPDOWN$1 = '.dropdown';
var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
var METHOD_OFFSET = 'offset';
var METHOD_POSITION = 'position';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var ScrollSpy = /*#__PURE__*/function (_BaseComponent9) {
  _inherits(ScrollSpy, _BaseComponent9);

  var _super10 = _createSuper(ScrollSpy);

  function ScrollSpy(element, config) {
    var _this40;

    _classCallCheck(this, ScrollSpy);

    _this40 = _super10.call(this, element);
    _this40._scrollElement = _this40._element.tagName === 'BODY' ? window : _this40._element;
    _this40._config = _this40._getConfig(config);
    _this40._offsets = [];
    _this40._targets = [];
    _this40._activeTarget = null;
    _this40._scrollHeight = 0;
    EventHandler.on(_this40._scrollElement, EVENT_SCROLL, function () {
      return _this40._process();
    });

    _this40.refresh();

    _this40._process();

    return _this40;
  } // Getters


  _createClass(ScrollSpy, [{
    key: "refresh",
    value: // Public
    function refresh() {
      var _this41 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target);
      targets.map(function (element) {
        var targetSelector = getSelectorFromElement(element);
        var target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            return [Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this41._offsets.push(item[0]);

        _this41._targets.push(item[1]);
      });
    }
  }, {
    key: "dispose",
    value: function dispose() {
      EventHandler.off(this._scrollElement, EVENT_KEY$2);

      _get(_getPrototypeOf(ScrollSpy.prototype), "dispose", this).call(this);
    } // Private

  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread(_objectSpread(_objectSpread({}, Default$1), Manipulator.getDataAttributes(this._element)), _typeof(config) === 'object' && config ? config : {});
      config.target = getElement(config.target) || document.documentElement;
      typeCheckConfig(NAME$2, config, DefaultType$1);
      return config;
    }
  }, {
    key: "_getScrollTop",
    value: function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }
  }, {
    key: "_getScrollHeight",
    value: function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }
  }, {
    key: "_getOffsetHeight",
    value: function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }
  }, {
    key: "_process",
    value: function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    }
  }, {
    key: "_activate",
    value: function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = SELECTOR_LINK_ITEMS.split(',').map(function (selector) {
        return "".concat(selector, "[data-bs-target=\"").concat(target, "\"],").concat(selector, "[href=\"").concat(target, "\"]");
      });
      var link = SelectorEngine.findOne(queries.join(','), this._config.target);
      link.classList.add(CLASS_NAME_ACTIVE$1);

      if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1)).classList.add(CLASS_NAME_ACTIVE$1);
      } else {
        SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP$1).forEach(function (listGroup) {
          // Set triggered links parents as active
          // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
          SelectorEngine.prev(listGroup, "".concat(SELECTOR_NAV_LINKS, ", ").concat(SELECTOR_LIST_ITEMS)).forEach(function (item) {
            return item.classList.add(CLASS_NAME_ACTIVE$1);
          }); // Handle special case when .nav-link is inside .nav-item

          SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach(function (navItem) {
            SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach(function (item) {
              return item.classList.add(CLASS_NAME_ACTIVE$1);
            });
          });
        });
      }

      EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
        relatedTarget: target
      });
    }
  }, {
    key: "_clear",
    value: function _clear() {
      SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target).filter(function (node) {
        return node.classList.contains(CLASS_NAME_ACTIVE$1);
      }).forEach(function (node) {
        return node.classList.remove(CLASS_NAME_ACTIVE$1);
      });
    } // Static

  }], [{
    key: "Default",
    get: function get() {
      return Default$1;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$2;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = ScrollSpy.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"".concat(config, "\""));
        }

        data[config]();
      });
    }
  }]);

  return ScrollSpy;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


exports.ScrollSpy = ScrollSpy;
EventHandler.on(window, EVENT_LOAD_DATA_API, function () {
  SelectorEngine.find(SELECTOR_DATA_SPY).forEach(function (spy) {
    return new ScrollSpy(spy);
  });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .ScrollSpy to jQuery only if jQuery is present
 */

defineJQueryPlugin(ScrollSpy);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.1): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$1 = 'tab';
var DATA_KEY$1 = 'bs.tab';
var EVENT_KEY$1 = ".".concat(DATA_KEY$1);
var DATA_API_KEY = '.data-api';
var EVENT_HIDE$1 = "hide".concat(EVENT_KEY$1);
var EVENT_HIDDEN$1 = "hidden".concat(EVENT_KEY$1);
var EVENT_SHOW$1 = "show".concat(EVENT_KEY$1);
var EVENT_SHOWN$1 = "shown".concat(EVENT_KEY$1);
var EVENT_CLICK_DATA_API = "click".concat(EVENT_KEY$1).concat(DATA_API_KEY);
var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
var CLASS_NAME_ACTIVE = 'active';
var CLASS_NAME_FADE$1 = 'fade';
var CLASS_NAME_SHOW$1 = 'show';
var SELECTOR_DROPDOWN = '.dropdown';
var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
var SELECTOR_ACTIVE = '.active';
var SELECTOR_ACTIVE_UL = ':scope > li > .active';
var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
var SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Tab = /*#__PURE__*/function (_BaseComponent10) {
  _inherits(Tab, _BaseComponent10);

  var _super11 = _createSuper(Tab);

  function Tab() {
    _classCallCheck(this, Tab);

    return _super11.apply(this, arguments);
  }

  _createClass(Tab, [{
    key: "show",
    value: // Public
    function show() {
      var _this42 = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
        return;
      }

      var previous;
      var target = getElementFromSelector(this._element);

      var listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
        previous = SelectorEngine.find(itemSelector, listElement);
        previous = previous[previous.length - 1];
      }

      var hideEvent = previous ? EventHandler.trigger(previous, EVENT_HIDE$1, {
        relatedTarget: this._element
      }) : null;
      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, {
        relatedTarget: previous
      });

      if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
        return;
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        EventHandler.trigger(previous, EVENT_HIDDEN$1, {
          relatedTarget: _this42._element
        });
        EventHandler.trigger(_this42._element, EVENT_SHOWN$1, {
          relatedTarget: previous
        });
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    } // Private

  }, {
    key: "_activate",
    value: function _activate(element, container, callback) {
      var _this43 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE);
      var active = activeElements[0];
      var isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$1);

      var complete = function complete() {
        return _this43._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        active.classList.remove(CLASS_NAME_SHOW$1);

        this._queueCallback(complete, element, true);
      } else {
        complete();
      }
    }
  }, {
    key: "_transitionComplete",
    value: function _transitionComplete(element, active, callback) {
      if (active) {
        active.classList.remove(CLASS_NAME_ACTIVE);
        var dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

        if (dropdownChild) {
          dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      element.classList.add(CLASS_NAME_ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$1)) {
        element.classList.add(CLASS_NAME_SHOW$1);
      }

      var parent = element.parentNode;

      if (parent && parent.nodeName === 'LI') {
        parent = parent.parentNode;
      }

      if (parent && parent.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
        var dropdownElement = element.closest(SELECTOR_DROPDOWN);

        if (dropdownElement) {
          SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach(function (dropdown) {
            return dropdown.classList.add(CLASS_NAME_ACTIVE);
          });
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static

  }], [{
    key: "NAME",
    get: // Getters
    function get() {
      return NAME$1;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Tab.getOrCreateInstance(this);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config]();
        }
      });
    }
  }]);

  return Tab;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


exports.Tab = Tab;
EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  if (isDisabled(this)) {
    return;
  }

  var data = Tab.getOrCreateInstance(this);
  data.show();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tab to jQuery only if jQuery is present
 */

defineJQueryPlugin(Tab);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.1): toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'toast';
var DATA_KEY = 'bs.toast';
var EVENT_KEY = ".".concat(DATA_KEY);
var EVENT_MOUSEOVER = "mouseover".concat(EVENT_KEY);
var EVENT_MOUSEOUT = "mouseout".concat(EVENT_KEY);
var EVENT_FOCUSIN = "focusin".concat(EVENT_KEY);
var EVENT_FOCUSOUT = "focusout".concat(EVENT_KEY);
var EVENT_HIDE = "hide".concat(EVENT_KEY);
var EVENT_HIDDEN = "hidden".concat(EVENT_KEY);
var EVENT_SHOW = "show".concat(EVENT_KEY);
var EVENT_SHOWN = "shown".concat(EVENT_KEY);
var CLASS_NAME_FADE = 'fade';
var CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility

var CLASS_NAME_SHOW = 'show';
var CLASS_NAME_SHOWING = 'showing';
var DefaultType = {
  animation: 'boolean',
  autohide: 'boolean',
  delay: 'number'
};
var Default = {
  animation: true,
  autohide: true,
  delay: 5000
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Toast = /*#__PURE__*/function (_BaseComponent11) {
  _inherits(Toast, _BaseComponent11);

  var _super12 = _createSuper(Toast);

  function Toast(element, config) {
    var _this44;

    _classCallCheck(this, Toast);

    _this44 = _super12.call(this, element);
    _this44._config = _this44._getConfig(config);
    _this44._timeout = null;
    _this44._hasMouseInteraction = false;
    _this44._hasKeyboardInteraction = false;

    _this44._setListeners();

    return _this44;
  } // Getters


  _createClass(Toast, [{
    key: "show",
    value: // Public
    function show() {
      var _this45 = this;

      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW);

      if (showEvent.defaultPrevented) {
        return;
      }

      this._clearTimeout();

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }

      var complete = function complete() {
        _this45._element.classList.remove(CLASS_NAME_SHOWING);

        EventHandler.trigger(_this45._element, EVENT_SHOWN);

        _this45._maybeScheduleHide();
      };

      this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated


      reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOW);

      this._element.classList.add(CLASS_NAME_SHOWING);

      this._queueCallback(complete, this._element, this._config.animation);
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this46 = this;

      if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
        return;
      }

      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

      if (hideEvent.defaultPrevented) {
        return;
      }

      var complete = function complete() {
        _this46._element.classList.add(CLASS_NAME_HIDE); // @deprecated


        _this46._element.classList.remove(CLASS_NAME_SHOWING);

        _this46._element.classList.remove(CLASS_NAME_SHOW);

        EventHandler.trigger(_this46._element, EVENT_HIDDEN);
      };

      this._element.classList.add(CLASS_NAME_SHOWING);

      this._queueCallback(complete, this._element, this._config.animation);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._clearTimeout();

      if (this._element.classList.contains(CLASS_NAME_SHOW)) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }

      _get(_getPrototypeOf(Toast.prototype), "dispose", this).call(this);
    } // Private

  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread(_objectSpread(_objectSpread({}, Default), Manipulator.getDataAttributes(this._element)), _typeof(config) === 'object' && config ? config : {});
      typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    }
  }, {
    key: "_maybeScheduleHide",
    value: function _maybeScheduleHide() {
      var _this47 = this;

      if (!this._config.autohide) {
        return;
      }

      if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
        return;
      }

      this._timeout = setTimeout(function () {
        _this47.hide();
      }, this._config.delay);
    }
  }, {
    key: "_onInteraction",
    value: function _onInteraction(event, isInteracting) {
      switch (event.type) {
        case 'mouseover':
        case 'mouseout':
          this._hasMouseInteraction = isInteracting;
          break;

        case 'focusin':
        case 'focusout':
          this._hasKeyboardInteraction = isInteracting;
          break;
      }

      if (isInteracting) {
        this._clearTimeout();

        return;
      }

      var nextElement = event.relatedTarget;

      if (this._element === nextElement || this._element.contains(nextElement)) {
        return;
      }

      this._maybeScheduleHide();
    }
  }, {
    key: "_setListeners",
    value: function _setListeners() {
      var _this48 = this;

      EventHandler.on(this._element, EVENT_MOUSEOVER, function (event) {
        return _this48._onInteraction(event, true);
      });
      EventHandler.on(this._element, EVENT_MOUSEOUT, function (event) {
        return _this48._onInteraction(event, false);
      });
      EventHandler.on(this._element, EVENT_FOCUSIN, function (event) {
        return _this48._onInteraction(event, true);
      });
      EventHandler.on(this._element, EVENT_FOCUSOUT, function (event) {
        return _this48._onInteraction(event, false);
      });
    }
  }, {
    key: "_clearTimeout",
    value: function _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    } // Static

  }], [{
    key: "DefaultType",
    get: function get() {
      return DefaultType;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Toast.getOrCreateInstance(this, config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config](this);
        }
      });
    }
  }]);

  return Toast;
}(BaseComponent);

exports.Toast = Toast;
enableDismissTrigger(Toast);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Toast to jQuery only if jQuery is present
 */

defineJQueryPlugin(Toast);
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = exports.Toast = exports.Tab = exports.ScrollSpy = exports.Popover = exports.Offcanvas = exports.Modal = exports.Dropdown = exports.Collapse = exports.Carousel = exports.Button = exports.Alert = void 0;

var Popper = _interopRequireWildcard(require("@popperjs/core"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var MAX_UID = 1e6,
    MILLISECONDS_MULTIPLIER = 1e3,
    TRANSITION_END = "transitionend",
    toType = function toType(e) {
  return null == e ? "" + e : {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase();
},
    getUID = function getUID(e) {
  do {
    e += Math.floor(1e6 * Math.random());
  } while (document.getElementById(e));

  return e;
},
    getSelector = function getSelector(e) {
  var t = e.getAttribute("data-bs-target");

  if (!t || "#" === t) {
    var i = e.getAttribute("href");
    if (!i || !i.includes("#") && !i.startsWith(".")) return null;
    i.includes("#") && !i.startsWith("#") && (i = "#" + i.split("#")[1]), t = i && "#" !== i ? i.trim() : null;
  }

  return t;
},
    getSelectorFromElement = function getSelectorFromElement(e) {
  var t = getSelector(e);
  return t && document.querySelector(t) ? t : null;
},
    getElementFromSelector = function getElementFromSelector(e) {
  var t = getSelector(e);
  return t ? document.querySelector(t) : null;
},
    getTransitionDurationFromElement = function getTransitionDurationFromElement(e) {
  if (!e) return 0;

  var _window$getComputedSt = window.getComputedStyle(e),
      t = _window$getComputedSt.transitionDuration,
      i = _window$getComputedSt.transitionDelay;

  var n = Number.parseFloat(t),
      s = Number.parseFloat(i);
  return n || s ? (t = t.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(t) + Number.parseFloat(i))) : 0;
},
    triggerTransitionEnd = function triggerTransitionEnd(e) {
  e.dispatchEvent(new Event(TRANSITION_END));
},
    isElement = function isElement(e) {
  return !(!e || "object" != _typeof(e)) && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType);
},
    getElement = function getElement(e) {
  return isElement(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? document.querySelector(e) : null;
},
    typeCheckConfig = function typeCheckConfig(e, t, i) {
  Object.keys(i).forEach(function (n) {
    var s = i[n],
        o = t[n],
        r = o && isElement(o) ? "element" : null == (a = o) ? "" + a : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
    var a;
    if (!new RegExp(s).test(r)) throw new TypeError("".concat(e.toUpperCase(), ": Option \"").concat(n, "\" provided type \"").concat(r, "\" but expected type \"").concat(s, "\"."));
  });
},
    isVisible = function isVisible(e) {
  return !(!isElement(e) || 0 === e.getClientRects().length) && "visible" === getComputedStyle(e).getPropertyValue("visibility");
},
    isDisabled = function isDisabled(e) {
  return !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled"));
},
    findShadowRoot = function findShadowRoot(e) {
  if (!document.documentElement.attachShadow) return null;

  if ("function" == typeof e.getRootNode) {
    var t = e.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }

  return e instanceof ShadowRoot ? e : e.parentNode ? findShadowRoot(e.parentNode) : null;
},
    noop = function noop() {},
    reflow = function reflow(e) {
  e.offsetHeight;
},
    getjQuery = function getjQuery() {
  var _window = window,
      e = _window.jQuery;
  return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null;
},
    DOMContentLoadedCallbacks = [],
    onDOMContentLoaded = function onDOMContentLoaded(e) {
  "loading" === document.readyState ? (DOMContentLoadedCallbacks.length || document.addEventListener("DOMContentLoaded", function () {
    DOMContentLoadedCallbacks.forEach(function (e) {
      return e();
    });
  }), DOMContentLoadedCallbacks.push(e)) : e();
},
    isRTL = function isRTL() {
  return "rtl" === document.documentElement.dir;
},
    defineJQueryPlugin = function defineJQueryPlugin(e) {
  var t;
  t = function t() {
    var t = getjQuery();

    if (t) {
      var i = e.NAME,
          n = t.fn[i];
      t.fn[i] = e.jQueryInterface, t.fn[i].Constructor = e, t.fn[i].noConflict = function () {
        return t.fn[i] = n, e.jQueryInterface;
      };
    }
  }, "loading" === document.readyState ? (DOMContentLoadedCallbacks.length || document.addEventListener("DOMContentLoaded", function () {
    DOMContentLoadedCallbacks.forEach(function (e) {
      return e();
    });
  }), DOMContentLoadedCallbacks.push(t)) : t();
},
    execute = function execute(e) {
  "function" == typeof e && e();
},
    executeAfterTransition = function executeAfterTransition(e, t) {
  var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
  if (!i) return void execute(e);
  var n = getTransitionDurationFromElement(t) + 5;
  var s = !1;

  var o = function o(_ref) {
    var i = _ref.target;
    i === t && (s = !0, t.removeEventListener(TRANSITION_END, o), execute(e));
  };

  t.addEventListener(TRANSITION_END, o), setTimeout(function () {
    s || triggerTransitionEnd(t);
  }, n);
},
    getNextActiveElement = function getNextActiveElement(e, t, i, n) {
  var s = e.indexOf(t);
  if (-1 === s) return e[!i && n ? e.length - 1 : 0];
  var o = e.length;
  return s += i ? 1 : -1, n && (s = (s + o) % o), e[Math.max(0, Math.min(s, o - 1))];
},
    namespaceRegex = /[^.]*(?=\..*)\.|.*/,
    stripNameRegex = /\..*/,
    stripUidRegex = /::\d+$/,
    eventRegistry = {};

var uidEvent = 1;
var customEvents = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
},
    customEventsRegex = /^(mouseenter|mouseleave)/i,
    nativeEvents = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

function getUidEvent(e, t) {
  return t && "".concat(t, "::").concat(uidEvent++) || e.uidEvent || uidEvent++;
}

function getEvent(e) {
  var t = getUidEvent(e);
  return e.uidEvent = t, eventRegistry[t] = eventRegistry[t] || {}, eventRegistry[t];
}

function bootstrapHandler(e, t) {
  return function i(n) {
    return n.delegateTarget = e, i.oneOff && EventHandler.off(e, n.type, t), t.apply(e, [n]);
  };
}

function bootstrapDelegationHandler(e, t, i) {
  return function n(s) {
    var o = e.querySelectorAll(t);

    for (var r = s.target; r && r !== this; r = r.parentNode) {
      for (var a = o.length; a--;) {
        if (o[a] === r) return s.delegateTarget = r, n.oneOff && EventHandler.off(e, s.type, t, i), i.apply(r, [s]);
      }
    }

    return null;
  };
}

function findHandler(e, t) {
  var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var n = Object.keys(e);

  for (var s = 0, o = n.length; s < o; s++) {
    var _o = e[n[s]];
    if (_o.originalHandler === t && _o.delegationSelector === i) return _o;
  }

  return null;
}

function normalizeParams(e, t, i) {
  var n = "string" == typeof t,
      s = n ? i : t;
  var o = getTypeEvent(e);
  return nativeEvents.has(o) || (o = e), [n, s, o];
}

function addHandler(e, t, i, n, s) {
  if ("string" != typeof t || !e) return;

  if (i || (i = n, n = null), customEventsRegex.test(t)) {
    var _e = function _e(e) {
      return function (t) {
        if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget)) return e.call(this, t);
      };
    };

    n ? n = _e(n) : i = _e(i);
  }

  var _normalizeParams = normalizeParams(t, i, n),
      _normalizeParams2 = _slicedToArray(_normalizeParams, 3),
      o = _normalizeParams2[0],
      r = _normalizeParams2[1],
      a = _normalizeParams2[2],
      l = getEvent(e),
      c = l[a] || (l[a] = {}),
      h = findHandler(c, r, o ? i : null);

  if (h) return void (h.oneOff = h.oneOff && s);

  var _ = getUidEvent(r, t.replace(namespaceRegex, "")),
      E = o ? bootstrapDelegationHandler(e, i, n) : bootstrapHandler(e, i);

  E.delegationSelector = o ? i : null, E.originalHandler = r, E.oneOff = s, E.uidEvent = _, c[_] = E, e.addEventListener(a, E, o);
}

function removeHandler(e, t, i, n, s) {
  var o = findHandler(t[i], n, s);
  o && (e.removeEventListener(i, o, Boolean(s)), delete t[i][o.uidEvent]);
}

function removeNamespacedHandlers(e, t, i, n) {
  var s = t[i] || {};
  Object.keys(s).forEach(function (o) {
    if (o.includes(n)) {
      var _n2 = s[o];
      removeHandler(e, t, i, _n2.originalHandler, _n2.delegationSelector);
    }
  });
}

function getTypeEvent(e) {
  return e = e.replace(stripNameRegex, ""), customEvents[e] || e;
}

var EventHandler = {
  on: function on(e, t, i, n) {
    addHandler(e, t, i, n, !1);
  },
  one: function one(e, t, i, n) {
    addHandler(e, t, i, n, !0);
  },
  off: function off(e, t, i, n) {
    if ("string" != typeof t || !e) return;

    var _normalizeParams3 = normalizeParams(t, i, n),
        _normalizeParams4 = _slicedToArray(_normalizeParams3, 3),
        s = _normalizeParams4[0],
        o = _normalizeParams4[1],
        r = _normalizeParams4[2],
        a = r !== t,
        l = getEvent(e),
        c = t.startsWith(".");

    if (void 0 !== o) {
      if (!l || !l[r]) return;
      return void removeHandler(e, l, r, o, s ? i : null);
    }

    c && Object.keys(l).forEach(function (i) {
      removeNamespacedHandlers(e, l, i, t.slice(1));
    });
    var h = l[r] || {};
    Object.keys(h).forEach(function (i) {
      var n = i.replace(stripUidRegex, "");

      if (!a || t.includes(n)) {
        var _t = h[i];
        removeHandler(e, l, r, _t.originalHandler, _t.delegationSelector);
      }
    });
  },
  trigger: function trigger(e, t, i) {
    if ("string" != typeof t || !e) return null;
    var n = getjQuery(),
        s = getTypeEvent(t),
        o = t !== s,
        r = nativeEvents.has(s);
    var a,
        l = !0,
        c = !0,
        h = !1,
        _ = null;
    return o && n && (a = n.Event(t, i), n(e).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (_ = document.createEvent("HTMLEvents"), _.initEvent(s, l, !0)) : _ = new CustomEvent(t, {
      bubbles: l,
      cancelable: !0
    }), void 0 !== i && Object.keys(i).forEach(function (e) {
      Object.defineProperty(_, e, {
        get: function get() {
          return i[e];
        }
      });
    }), h && _.preventDefault(), c && e.dispatchEvent(_), _.defaultPrevented && void 0 !== a && a.preventDefault(), _;
  }
},
    elementMap = new Map();
var Data = {
  set: function set(e, t, i) {
    elementMap.has(e) || elementMap.set(e, new Map());
    var n = elementMap.get(e);
    n.has(t) || 0 === n.size ? n.set(t, i) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(n.keys())[0], "."));
  },
  get: function get(e, t) {
    return elementMap.has(e) && elementMap.get(e).get(t) || null;
  },
  remove: function remove(e, t) {
    if (!elementMap.has(e)) return;
    var i = elementMap.get(e);
    i["delete"](t), 0 === i.size && elementMap["delete"](e);
  }
};
var VERSION = "5.1.1";

var BaseComponent = /*#__PURE__*/function () {
  function BaseComponent(e) {
    _classCallCheck(this, BaseComponent);

    (e = getElement(e)) && (this._element = e, Data.set(this._element, this.constructor.DATA_KEY, this));
  }

  _createClass(BaseComponent, [{
    key: "dispose",
    value: function dispose() {
      var _this = this;

      Data.remove(this._element, this.constructor.DATA_KEY), EventHandler.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(function (e) {
        _this[e] = null;
      });
    }
  }, {
    key: "_queueCallback",
    value: function _queueCallback(e, t) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      executeAfterTransition(e, t, i);
    }
  }], [{
    key: "getInstance",
    value: function getInstance(e) {
      return Data.get(getElement(e), this.DATA_KEY);
    }
  }, {
    key: "getOrCreateInstance",
    value: function getOrCreateInstance(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.getInstance(e) || new this(e, "object" == _typeof(t) ? t : null);
    }
  }, {
    key: "VERSION",
    get: function get() {
      return "5.1.1";
    }
  }, {
    key: "NAME",
    get: function get() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return "bs." + this.NAME;
    }
  }, {
    key: "EVENT_KEY",
    get: function get() {
      return "." + this.DATA_KEY;
    }
  }]);

  return BaseComponent;
}();

var enableDismissTrigger = function enableDismissTrigger(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "hide";
  var i = "click.dismiss" + e.EVENT_KEY,
      n = e.NAME;
  EventHandler.on(document, i, "[data-bs-dismiss=\"".concat(n, "\"]"), function (i) {
    if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), isDisabled(this)) return;
    var s = getElementFromSelector(this) || this.closest("." + n);
    e.getOrCreateInstance(s)[t]();
  });
},
    NAME$d = "alert",
    DATA_KEY$c = "bs.alert",
    EVENT_KEY$c = ".bs.alert",
    EVENT_CLOSE = "close.bs.alert",
    EVENT_CLOSED = "closed.bs.alert",
    CLASS_NAME_FADE$5 = "fade",
    CLASS_NAME_SHOW$8 = "show";

var Alert = /*#__PURE__*/function (_BaseComponent) {
  _inherits(Alert, _BaseComponent);

  var _super = _createSuper(Alert);

  function Alert() {
    _classCallCheck(this, Alert);

    return _super.apply(this, arguments);
  }

  _createClass(Alert, [{
    key: "close",
    value: function close() {
      var _this2 = this;

      if (EventHandler.trigger(this._element, EVENT_CLOSE).defaultPrevented) return;

      this._element.classList.remove("show");

      var e = this._element.classList.contains("fade");

      this._queueCallback(function () {
        return _this2._destroyElement();
      }, this._element, e);
    }
  }, {
    key: "_destroyElement",
    value: function _destroyElement() {
      this._element.remove(), EventHandler.trigger(this._element, EVENT_CLOSED), this.dispose();
    }
  }], [{
    key: "NAME",
    get: function get() {
      return NAME$d;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Alert.getOrCreateInstance(this);

        if ("string" == typeof e) {
          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError("No method named \"".concat(e, "\""));
          t[e](this);
        }
      });
    }
  }]);

  return Alert;
}(BaseComponent);

exports.Alert = Alert;
enableDismissTrigger(Alert, "close"), defineJQueryPlugin(Alert);
var NAME$c = "button",
    DATA_KEY$b = "bs.button",
    EVENT_KEY$b = ".bs.button",
    DATA_API_KEY$7 = ".data-api",
    CLASS_NAME_ACTIVE$3 = "active",
    SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]',
    EVENT_CLICK_DATA_API$6 = "click.bs.button.data-api";

var Button = /*#__PURE__*/function (_BaseComponent2) {
  _inherits(Button, _BaseComponent2);

  var _super2 = _createSuper(Button);

  function Button() {
    _classCallCheck(this, Button);

    return _super2.apply(this, arguments);
  }

  _createClass(Button, [{
    key: "toggle",
    value: function toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
    }
  }], [{
    key: "NAME",
    get: function get() {
      return NAME$c;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Button.getOrCreateInstance(this);
        "toggle" === e && t[e]();
      });
    }
  }]);

  return Button;
}(BaseComponent);

exports.Button = Button;

function normalizeData(e) {
  return "true" === e || "false" !== e && (e === Number(e).toString() ? Number(e) : "" === e || "null" === e ? null : e);
}

function normalizeDataKey(e) {
  return e.replace(/[A-Z]/g, function (e) {
    return "-" + e.toLowerCase();
  });
}

EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, function (e) {
  e.preventDefault();
  var t = e.target.closest(SELECTOR_DATA_TOGGLE$5);
  Button.getOrCreateInstance(t).toggle();
}), defineJQueryPlugin(Button);
var Manipulator = {
  setDataAttribute: function setDataAttribute(e, t, i) {
    e.setAttribute("data-bs-" + normalizeDataKey(t), i);
  },
  removeDataAttribute: function removeDataAttribute(e, t) {
    e.removeAttribute("data-bs-" + normalizeDataKey(t));
  },
  getDataAttributes: function getDataAttributes(e) {
    if (!e) return {};
    var t = {};
    return Object.keys(e.dataset).filter(function (e) {
      return e.startsWith("bs");
    }).forEach(function (i) {
      var n = i.replace(/^bs/, "");
      n = n.charAt(0).toLowerCase() + n.slice(1, n.length), t[n] = normalizeData(e.dataset[i]);
    }), t;
  },
  getDataAttribute: function getDataAttribute(e, t) {
    return normalizeData(e.getAttribute("data-bs-" + normalizeDataKey(t)));
  },
  offset: function offset(e) {
    var t = e.getBoundingClientRect();
    return {
      top: t.top + window.pageYOffset,
      left: t.left + window.pageXOffset
    };
  },
  position: function position(e) {
    return {
      top: e.offsetTop,
      left: e.offsetLeft
    };
  }
},
    NODE_TEXT = 3,
    SelectorEngine = {
  find: function find(e) {
    var _ref2;

    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
    return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(Element.prototype.querySelectorAll.call(t, e)));
  },
  findOne: function findOne(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
    return Element.prototype.querySelector.call(t, e);
  },
  children: function children(e, t) {
    var _ref3;

    return (_ref3 = []).concat.apply(_ref3, _toConsumableArray(e.children)).filter(function (e) {
      return e.matches(t);
    });
  },
  parents: function parents(e, t) {
    var i = [];
    var n = e.parentNode;

    for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;) {
      n.matches(t) && i.push(n), n = n.parentNode;
    }

    return i;
  },
  prev: function prev(e, t) {
    var i = e.previousElementSibling;

    for (; i;) {
      if (i.matches(t)) return [i];
      i = i.previousElementSibling;
    }

    return [];
  },
  next: function next(e, t) {
    var i = e.nextElementSibling;

    for (; i;) {
      if (i.matches(t)) return [i];
      i = i.nextElementSibling;
    }

    return [];
  },
  focusableChildren: function focusableChildren(e) {
    var t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(function (e) {
      return e + ':not([tabindex^="-"])';
    }).join(", ");
    return this.find(t, e).filter(function (e) {
      return !isDisabled(e) && isVisible(e);
    });
  }
},
    NAME$b = "carousel",
    DATA_KEY$a = "bs.carousel",
    EVENT_KEY$a = ".bs.carousel",
    DATA_API_KEY$6 = ".data-api",
    ARROW_LEFT_KEY = "ArrowLeft",
    ARROW_RIGHT_KEY = "ArrowRight",
    TOUCHEVENT_COMPAT_WAIT = 500,
    SWIPE_THRESHOLD = 40,
    Default$a = {
  interval: 5e3,
  keyboard: !0,
  slide: !1,
  pause: "hover",
  wrap: !0,
  touch: !0
},
    DefaultType$a = {
  interval: "(number|boolean)",
  keyboard: "boolean",
  slide: "(boolean|string)",
  pause: "(string|boolean)",
  wrap: "boolean",
  touch: "boolean"
},
    ORDER_NEXT = "next",
    ORDER_PREV = "prev",
    DIRECTION_LEFT = "left",
    DIRECTION_RIGHT = "right",
    KEY_TO_DIRECTION = {
  ArrowLeft: DIRECTION_RIGHT,
  ArrowRight: DIRECTION_LEFT
},
    EVENT_SLIDE = "slide.bs.carousel",
    EVENT_SLID = "slid.bs.carousel",
    EVENT_KEYDOWN = "keydown.bs.carousel",
    EVENT_MOUSEENTER = "mouseenter.bs.carousel",
    EVENT_MOUSELEAVE = "mouseleave.bs.carousel",
    EVENT_TOUCHSTART = "touchstart.bs.carousel",
    EVENT_TOUCHMOVE = "touchmove.bs.carousel",
    EVENT_TOUCHEND = "touchend.bs.carousel",
    EVENT_POINTERDOWN = "pointerdown.bs.carousel",
    EVENT_POINTERUP = "pointerup.bs.carousel",
    EVENT_DRAG_START = "dragstart.bs.carousel",
    EVENT_LOAD_DATA_API$2 = "load.bs.carousel.data-api",
    EVENT_CLICK_DATA_API$5 = "click.bs.carousel.data-api",
    CLASS_NAME_CAROUSEL = "carousel",
    CLASS_NAME_ACTIVE$2 = "active",
    CLASS_NAME_SLIDE = "slide",
    CLASS_NAME_END = "carousel-item-end",
    CLASS_NAME_START = "carousel-item-start",
    CLASS_NAME_NEXT = "carousel-item-next",
    CLASS_NAME_PREV = "carousel-item-prev",
    CLASS_NAME_POINTER_EVENT = "pointer-event",
    SELECTOR_ACTIVE$1 = ".active",
    SELECTOR_ACTIVE_ITEM = ".active.carousel-item",
    SELECTOR_ITEM = ".carousel-item",
    SELECTOR_ITEM_IMG = ".carousel-item img",
    SELECTOR_NEXT_PREV = ".carousel-item-next, .carousel-item-prev",
    SELECTOR_INDICATORS = ".carousel-indicators",
    SELECTOR_INDICATOR = "[data-bs-target]",
    SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]",
    SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]',
    POINTER_TYPE_TOUCH = "touch",
    POINTER_TYPE_PEN = "pen";

var Carousel = /*#__PURE__*/function (_BaseComponent3) {
  _inherits(Carousel, _BaseComponent3);

  var _super3 = _createSuper(Carousel);

  function Carousel(e, t) {
    var _this3;

    _classCallCheck(this, Carousel);

    _this3 = _super3.call(this, e), _this3._items = null, _this3._interval = null, _this3._activeElement = null, _this3._isPaused = !1, _this3._isSliding = !1, _this3.touchTimeout = null, _this3.touchStartX = 0, _this3.touchDeltaX = 0, _this3._config = _this3._getConfig(t), _this3._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, _this3._element), _this3._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, _this3._pointerEvent = Boolean(window.PointerEvent), _this3._addEventListeners();
    return _this3;
  }

  _createClass(Carousel, [{
    key: "next",
    value: function next() {
      this._slide(ORDER_NEXT);
    }
  }, {
    key: "nextWhenVisible",
    value: function nextWhenVisible() {
      !document.hidden && isVisible(this._element) && this.next();
    }
  }, {
    key: "prev",
    value: function prev() {
      this._slide(ORDER_PREV);
    }
  }, {
    key: "pause",
    value: function pause(e) {
      e || (this._isPaused = !0), SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element) && (triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }
  }, {
    key: "cycle",
    value: function cycle(e) {
      e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }
  }, {
    key: "to",
    value: function to(e) {
      var _this4 = this;

      this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      var t = this._getItemIndex(this._activeElement);

      if (e > this._items.length - 1 || e < 0) return;
      if (this._isSliding) return void EventHandler.one(this._element, EVENT_SLID, function () {
        return _this4.to(e);
      });
      if (t === e) return this.pause(), void this.cycle();
      var i = e > t ? ORDER_NEXT : ORDER_PREV;

      this._slide(i, this._items[e]);
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return e = _objectSpread(_objectSpread(_objectSpread({}, Default$a), Manipulator.getDataAttributes(this._element)), "object" == _typeof(e) ? e : {}), typeCheckConfig(NAME$b, e, DefaultType$a), e;
    }
  }, {
    key: "_handleSwipe",
    value: function _handleSwipe() {
      var e = Math.abs(this.touchDeltaX);
      if (e <= 40) return;
      var t = e / this.touchDeltaX;
      this.touchDeltaX = 0, t && this._slide(t > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this5 = this;

      this._config.keyboard && EventHandler.on(this._element, EVENT_KEYDOWN, function (e) {
        return _this5._keydown(e);
      }), "hover" === this._config.pause && (EventHandler.on(this._element, EVENT_MOUSEENTER, function (e) {
        return _this5.pause(e);
      }), EventHandler.on(this._element, EVENT_MOUSELEAVE, function (e) {
        return _this5.cycle(e);
      })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
    }
  }, {
    key: "_addTouchEventListeners",
    value: function _addTouchEventListeners() {
      var _this6 = this;

      var e = function e(_e2) {
        return _this6._pointerEvent && ("pen" === _e2.pointerType || "touch" === _e2.pointerType);
      },
          t = function t(_t2) {
        e(_t2) ? _this6.touchStartX = _t2.clientX : _this6._pointerEvent || (_this6.touchStartX = _t2.touches[0].clientX);
      },
          i = function i(e) {
        _this6.touchDeltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - _this6.touchStartX;
      },
          n = function n(t) {
        e(t) && (_this6.touchDeltaX = t.clientX - _this6.touchStartX), _this6._handleSwipe(), "hover" === _this6._config.pause && (_this6.pause(), _this6.touchTimeout && clearTimeout(_this6.touchTimeout), _this6.touchTimeout = setTimeout(function (e) {
          return _this6.cycle(e);
        }, 500 + _this6._config.interval));
      };

      SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(function (e) {
        EventHandler.on(e, EVENT_DRAG_START, function (e) {
          return e.preventDefault();
        });
      }), this._pointerEvent ? (EventHandler.on(this._element, EVENT_POINTERDOWN, function (e) {
        return t(e);
      }), EventHandler.on(this._element, EVENT_POINTERUP, function (e) {
        return n(e);
      }), this._element.classList.add("pointer-event")) : (EventHandler.on(this._element, EVENT_TOUCHSTART, function (e) {
        return t(e);
      }), EventHandler.on(this._element, EVENT_TOUCHMOVE, function (e) {
        return i(e);
      }), EventHandler.on(this._element, EVENT_TOUCHEND, function (e) {
        return n(e);
      }));
    }
  }, {
    key: "_keydown",
    value: function _keydown(e) {
      if (/input|textarea/i.test(e.target.tagName)) return;
      var t = KEY_TO_DIRECTION[e.key];
      t && (e.preventDefault(), this._slide(t));
    }
  }, {
    key: "_getItemIndex",
    value: function _getItemIndex(e) {
      return this._items = e && e.parentNode ? SelectorEngine.find(SELECTOR_ITEM, e.parentNode) : [], this._items.indexOf(e);
    }
  }, {
    key: "_getItemByOrder",
    value: function _getItemByOrder(e, t) {
      var i = e === ORDER_NEXT;
      return getNextActiveElement(this._items, t, i, this._config.wrap);
    }
  }, {
    key: "_triggerSlideEvent",
    value: function _triggerSlideEvent(e, t) {
      var i = this._getItemIndex(e),
          n = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

      return EventHandler.trigger(this._element, EVENT_SLIDE, {
        relatedTarget: e,
        direction: t,
        from: n,
        to: i
      });
    }
  }, {
    key: "_setActiveIndicatorElement",
    value: function _setActiveIndicatorElement(e) {
      if (this._indicatorsElement) {
        var t = SelectorEngine.findOne(".active", this._indicatorsElement);
        t.classList.remove("active"), t.removeAttribute("aria-current");
        var i = SelectorEngine.find("[data-bs-target]", this._indicatorsElement);

        for (var _t3 = 0; _t3 < i.length; _t3++) {
          if (Number.parseInt(i[_t3].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
            i[_t3].classList.add("active"), i[_t3].setAttribute("aria-current", "true");
            break;
          }
        }
      }
    }
  }, {
    key: "_updateInterval",
    value: function _updateInterval() {
      var e = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
      if (!e) return;
      var t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
      t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval;
    }
  }, {
    key: "_slide",
    value: function _slide(e, t) {
      var _this7 = this;

      var i = this._directionToOrder(e),
          n = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element),
          s = this._getItemIndex(n),
          o = t || this._getItemByOrder(i, n),
          r = this._getItemIndex(o),
          a = Boolean(this._interval),
          l = i === ORDER_NEXT,
          c = l ? CLASS_NAME_START : CLASS_NAME_END,
          h = l ? CLASS_NAME_NEXT : CLASS_NAME_PREV,
          _ = this._orderToDirection(i);

      if (o && o.classList.contains("active")) return void (this._isSliding = !1);
      if (this._isSliding) return;
      if (this._triggerSlideEvent(o, _).defaultPrevented) return;
      if (!n || !o) return;
      this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o;

      var E = function E() {
        EventHandler.trigger(_this7._element, EVENT_SLID, {
          relatedTarget: o,
          direction: _,
          from: s,
          to: r
        });
      };

      if (this._element.classList.contains("slide")) {
        o.classList.add(h), reflow(o), n.classList.add(c), o.classList.add(c);

        var _e3 = function _e3() {
          o.classList.remove(c, h), o.classList.add("active"), n.classList.remove("active", h, c), _this7._isSliding = !1, setTimeout(E, 0);
        };

        this._queueCallback(_e3, n, !0);
      } else n.classList.remove("active"), o.classList.add("active"), this._isSliding = !1, E();

      a && this.cycle();
    }
  }, {
    key: "_directionToOrder",
    value: function _directionToOrder(e) {
      return [DIRECTION_RIGHT, DIRECTION_LEFT].includes(e) ? isRTL() ? e === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT : e === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV : e;
    }
  }, {
    key: "_orderToDirection",
    value: function _orderToDirection(e) {
      return [ORDER_NEXT, ORDER_PREV].includes(e) ? isRTL() ? e === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT : e === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT : e;
    }
  }], [{
    key: "Default",
    get: function get() {
      return Default$a;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$b;
    }
  }, {
    key: "carouselInterface",
    value: function carouselInterface(e, t) {
      var i = Carousel.getOrCreateInstance(e, t);
      var n = i._config;
      "object" == _typeof(t) && (n = _objectSpread(_objectSpread({}, n), t));
      var s = "string" == typeof t ? t : n.slide;
      if ("number" == typeof t) i.to(t);else if ("string" == typeof s) {
        if (void 0 === i[s]) throw new TypeError("No method named \"".concat(s, "\""));
        i[s]();
      } else n.interval && n.ride && (i.pause(), i.cycle());
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        Carousel.carouselInterface(this, e);
      });
    }
  }, {
    key: "dataApiClickHandler",
    value: function dataApiClickHandler(e) {
      var t = getElementFromSelector(this);
      if (!t || !t.classList.contains("carousel")) return;

      var i = _objectSpread(_objectSpread({}, Manipulator.getDataAttributes(t)), Manipulator.getDataAttributes(this)),
          n = this.getAttribute("data-bs-slide-to");

      n && (i.interval = !1), Carousel.carouselInterface(t, i), n && Carousel.getInstance(t).to(n), e.preventDefault();
    }
  }]);

  return Carousel;
}(BaseComponent);

exports.Carousel = Carousel;
EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler), EventHandler.on(window, EVENT_LOAD_DATA_API$2, function () {
  var e = SelectorEngine.find(SELECTOR_DATA_RIDE);

  for (var t = 0, i = e.length; t < i; t++) {
    Carousel.carouselInterface(e[t], Carousel.getInstance(e[t]));
  }
}), defineJQueryPlugin(Carousel);
var NAME$a = "collapse",
    DATA_KEY$9 = "bs.collapse",
    EVENT_KEY$9 = ".bs.collapse",
    DATA_API_KEY$5 = ".data-api",
    Default$9 = {
  toggle: !0,
  parent: null
},
    DefaultType$9 = {
  toggle: "boolean",
  parent: "(null|element)"
},
    EVENT_SHOW$5 = "show.bs.collapse",
    EVENT_SHOWN$5 = "shown.bs.collapse",
    EVENT_HIDE$5 = "hide.bs.collapse",
    EVENT_HIDDEN$5 = "hidden.bs.collapse",
    EVENT_CLICK_DATA_API$4 = "click.bs.collapse.data-api",
    CLASS_NAME_SHOW$7 = "show",
    CLASS_NAME_COLLAPSE = "collapse",
    CLASS_NAME_COLLAPSING = "collapsing",
    CLASS_NAME_COLLAPSED = "collapsed",
    CLASS_NAME_HORIZONTAL = "collapse-horizontal",
    WIDTH = "width",
    HEIGHT = "height",
    SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing",
    SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';

var Collapse = /*#__PURE__*/function (_BaseComponent4) {
  _inherits(Collapse, _BaseComponent4);

  var _super4 = _createSuper(Collapse);

  function Collapse(e, t) {
    var _this8;

    _classCallCheck(this, Collapse);

    _this8 = _super4.call(this, e), _this8._isTransitioning = !1, _this8._config = _this8._getConfig(t), _this8._triggerArray = [];
    var i = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

    for (var _e4 = 0, _t4 = i.length; _e4 < _t4; _e4++) {
      var _t5 = i[_e4],
          n = getSelectorFromElement(_t5),
          s = SelectorEngine.find(n).filter(function (e) {
        return e === _this8._element;
      });
      null !== n && s.length && (_this8._selector = n, _this8._triggerArray.push(_t5));
    }

    _this8._initializeChildren(), _this8._config.parent || _this8._addAriaAndCollapsedClass(_this8._triggerArray, _this8._isShown()), _this8._config.toggle && _this8.toggle();
    return _this8;
  }

  _createClass(Collapse, [{
    key: "toggle",
    value: function toggle() {
      this._isShown() ? this.hide() : this.show();
    }
  }, {
    key: "show",
    value: function show() {
      var _this9 = this;

      if (this._isTransitioning || this._isShown()) return;
      var e,
          t = [];

      if (this._config.parent) {
        var _e5 = SelectorEngine.find(".collapse .collapse", this._config.parent);

        t = SelectorEngine.find(SELECTOR_ACTIVES, this._config.parent).filter(function (t) {
          return !_e5.includes(t);
        });
      }

      var i = SelectorEngine.findOne(this._selector);

      if (t.length) {
        var _n3 = t.find(function (e) {
          return i !== e;
        });

        if (e = _n3 ? Collapse.getInstance(_n3) : null, e && e._isTransitioning) return;
      }

      if (EventHandler.trigger(this._element, EVENT_SHOW$5).defaultPrevented) return;
      t.forEach(function (t) {
        i !== t && Collapse.getOrCreateInstance(t, {
          toggle: !1
        }).hide(), e || Data.set(t, DATA_KEY$9, null);
      });

      var n = this._getDimension();

      this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[n] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
      var s = "scroll" + (n[0].toUpperCase() + n.slice(1));
      this._queueCallback(function () {
        _this9._isTransitioning = !1, _this9._element.classList.remove("collapsing"), _this9._element.classList.add("collapse", "show"), _this9._element.style[n] = "", EventHandler.trigger(_this9._element, EVENT_SHOWN$5);
      }, this._element, !0), this._element.style[n] = this._element[s] + "px";
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this10 = this;

      if (this._isTransitioning || !this._isShown()) return;
      if (EventHandler.trigger(this._element, EVENT_HIDE$5).defaultPrevented) return;

      var e = this._getDimension();

      this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", reflow(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
      var t = this._triggerArray.length;

      for (var _e6 = 0; _e6 < t; _e6++) {
        var _t6 = this._triggerArray[_e6],
            i = getElementFromSelector(_t6);
        i && !this._isShown(i) && this._addAriaAndCollapsedClass([_t6], !1);
      }

      this._isTransitioning = !0, this._element.style[e] = "", this._queueCallback(function () {
        _this10._isTransitioning = !1, _this10._element.classList.remove("collapsing"), _this10._element.classList.add("collapse"), EventHandler.trigger(_this10._element, EVENT_HIDDEN$5);
      }, this._element, !0);
    }
  }, {
    key: "_isShown",
    value: function _isShown() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
      return e.classList.contains("show");
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return (e = _objectSpread(_objectSpread(_objectSpread({}, Default$9), Manipulator.getDataAttributes(this._element)), e)).toggle = Boolean(e.toggle), e.parent = getElement(e.parent), typeCheckConfig(NAME$a, e, DefaultType$9), e;
    }
  }, {
    key: "_getDimension",
    value: function _getDimension() {
      return this._element.classList.contains("collapse-horizontal") ? WIDTH : HEIGHT;
    }
  }, {
    key: "_initializeChildren",
    value: function _initializeChildren() {
      var _this11 = this;

      if (!this._config.parent) return;
      var e = SelectorEngine.find(".collapse .collapse", this._config.parent);
      SelectorEngine.find(SELECTOR_DATA_TOGGLE$4, this._config.parent).filter(function (t) {
        return !e.includes(t);
      }).forEach(function (e) {
        var t = getElementFromSelector(e);
        t && _this11._addAriaAndCollapsedClass([e], _this11._isShown(t));
      });
    }
  }, {
    key: "_addAriaAndCollapsedClass",
    value: function _addAriaAndCollapsedClass(e, t) {
      e.length && e.forEach(function (e) {
        t ? e.classList.remove("collapsed") : e.classList.add("collapsed"), e.setAttribute("aria-expanded", t);
      });
    }
  }], [{
    key: "Default",
    get: function get() {
      return Default$9;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$a;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = {};
        "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1);
        var i = Collapse.getOrCreateInstance(this, t);

        if ("string" == typeof e) {
          if (void 0 === i[e]) throw new TypeError("No method named \"".concat(e, "\""));
          i[e]();
        }
      });
    }
  }]);

  return Collapse;
}(BaseComponent);

exports.Collapse = Collapse;
EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (e) {
  ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
  var t = getSelectorFromElement(this);
  SelectorEngine.find(t).forEach(function (e) {
    Collapse.getOrCreateInstance(e, {
      toggle: !1
    }).toggle();
  });
}), defineJQueryPlugin(Collapse);
var NAME$9 = "dropdown",
    DATA_KEY$8 = "bs.dropdown",
    EVENT_KEY$8 = ".bs.dropdown",
    DATA_API_KEY$4 = ".data-api",
    ESCAPE_KEY$2 = "Escape",
    SPACE_KEY = "Space",
    TAB_KEY$1 = "Tab",
    ARROW_UP_KEY = "ArrowUp",
    ARROW_DOWN_KEY = "ArrowDown",
    RIGHT_MOUSE_BUTTON = 2,
    REGEXP_KEYDOWN = new RegExp("ArrowUp|ArrowDown|Escape"),
    EVENT_HIDE$4 = "hide.bs.dropdown",
    EVENT_HIDDEN$4 = "hidden.bs.dropdown",
    EVENT_SHOW$4 = "show.bs.dropdown",
    EVENT_SHOWN$4 = "shown.bs.dropdown",
    EVENT_CLICK_DATA_API$3 = "click.bs.dropdown.data-api",
    EVENT_KEYDOWN_DATA_API = "keydown.bs.dropdown.data-api",
    EVENT_KEYUP_DATA_API = "keyup.bs.dropdown.data-api",
    CLASS_NAME_SHOW$6 = "show",
    CLASS_NAME_DROPUP = "dropup",
    CLASS_NAME_DROPEND = "dropend",
    CLASS_NAME_DROPSTART = "dropstart",
    CLASS_NAME_NAVBAR = "navbar",
    SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]',
    SELECTOR_MENU = ".dropdown-menu",
    SELECTOR_NAVBAR_NAV = ".navbar-nav",
    SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
    PLACEMENT_TOP = isRTL() ? "top-end" : "top-start",
    PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end",
    PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start",
    PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end",
    PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start",
    PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start",
    Default$8 = {
  offset: [0, 2],
  boundary: "clippingParents",
  reference: "toggle",
  display: "dynamic",
  popperConfig: null,
  autoClose: !0
},
    DefaultType$8 = {
  offset: "(array|string|function)",
  boundary: "(string|element)",
  reference: "(string|element|object)",
  display: "string",
  popperConfig: "(null|object|function)",
  autoClose: "(boolean|string)"
};

var Dropdown = /*#__PURE__*/function (_BaseComponent5) {
  _inherits(Dropdown, _BaseComponent5);

  var _super5 = _createSuper(Dropdown);

  function Dropdown(e, t) {
    var _this12;

    _classCallCheck(this, Dropdown);

    _this12 = _super5.call(this, e), _this12._popper = null, _this12._config = _this12._getConfig(t), _this12._menu = _this12._getMenuElement(), _this12._inNavbar = _this12._detectNavbar();
    return _this12;
  }

  _createClass(Dropdown, [{
    key: "toggle",
    value: function toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
  }, {
    key: "show",
    value: function show() {
      var _ref4;

      if (isDisabled(this._element) || this._isShown(this._menu)) return;
      var e = {
        relatedTarget: this._element
      };
      if (EventHandler.trigger(this._element, EVENT_SHOW$4, e).defaultPrevented) return;
      var t = Dropdown.getParentFromElement(this._element);
      this._inNavbar ? Manipulator.setDataAttribute(this._menu, "popper", "none") : this._createPopper(t), "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && (_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children)).forEach(function (e) {
        return EventHandler.on(e, "mouseover", noop);
      }), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add("show"), this._element.classList.add("show"), EventHandler.trigger(this._element, EVENT_SHOWN$4, e);
    }
  }, {
    key: "hide",
    value: function hide() {
      if (isDisabled(this._element) || !this._isShown(this._menu)) return;
      var e = {
        relatedTarget: this._element
      };

      this._completeHide(e);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._popper && this._popper.destroy(), _get(_getPrototypeOf(Dropdown.prototype), "dispose", this).call(this);
    }
  }, {
    key: "update",
    value: function update() {
      this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
    }
  }, {
    key: "_completeHide",
    value: function _completeHide(e) {
      var _ref5;

      EventHandler.trigger(this._element, EVENT_HIDE$4, e).defaultPrevented || ("ontouchstart" in document.documentElement && (_ref5 = []).concat.apply(_ref5, _toConsumableArray(document.body.children)).forEach(function (e) {
        return EventHandler.off(e, "mouseover", noop);
      }), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), Manipulator.removeDataAttribute(this._menu, "popper"), EventHandler.trigger(this._element, EVENT_HIDDEN$4, e));
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      if (e = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), Manipulator.getDataAttributes(this._element)), e), typeCheckConfig(NAME$9, e, this.constructor.DefaultType), "object" == _typeof(e.reference) && !isElement(e.reference) && "function" != typeof e.reference.getBoundingClientRect) throw new TypeError(NAME$9.toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
      return e;
    }
  }, {
    key: "_createPopper",
    value: function _createPopper(e) {
      if (void 0 === Popper) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      var t = this._element;
      "parent" === this._config.reference ? t = e : isElement(this._config.reference) ? t = getElement(this._config.reference) : "object" == _typeof(this._config.reference) && (t = this._config.reference);

      var i = this._getPopperConfig(),
          n = i.modifiers.find(function (e) {
        return "applyStyles" === e.name && !1 === e.enabled;
      });

      this._popper = Popper.createPopper(t, this._menu, i), n && Manipulator.setDataAttribute(this._menu, "popper", "static");
    }
  }, {
    key: "_isShown",
    value: function _isShown() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
      return e.classList.contains("show");
    }
  }, {
    key: "_getMenuElement",
    value: function _getMenuElement() {
      return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
    }
  }, {
    key: "_getPlacement",
    value: function _getPlacement() {
      var e = this._element.parentNode;
      if (e.classList.contains("dropend")) return PLACEMENT_RIGHT;
      if (e.classList.contains("dropstart")) return PLACEMENT_LEFT;
      var t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return e.classList.contains("dropup") ? t ? PLACEMENT_TOPEND : PLACEMENT_TOP : t ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
  }, {
    key: "_detectNavbar",
    value: function _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
  }, {
    key: "_getOffset",
    value: function _getOffset() {
      var _this13 = this;

      var e = this._config.offset;
      return "string" == typeof e ? e.split(",").map(function (e) {
        return Number.parseInt(e, 10);
      }) : "function" == typeof e ? function (t) {
        return e(t, _this13._element);
      } : e;
    }
  }, {
    key: "_getPopperConfig",
    value: function _getPopperConfig() {
      var e = {
        placement: this._getPlacement(),
        modifiers: [{
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }]
      };
      return "static" === this._config.display && (e.modifiers = [{
        name: "applyStyles",
        enabled: !1
      }]), _objectSpread(_objectSpread({}, e), "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig);
    }
  }, {
    key: "_selectMenuItem",
    value: function _selectMenuItem(_ref6) {
      var e = _ref6.key,
          t = _ref6.target;
      var i = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(isVisible);
      i.length && getNextActiveElement(i, t, "ArrowDown" === e, !i.includes(t)).focus();
    }
  }], [{
    key: "Default",
    get: function get() {
      return Default$8;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$8;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$9;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Dropdown.getOrCreateInstance(this, e);

        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError("No method named \"".concat(e, "\""));
          t[e]();
        }
      });
    }
  }, {
    key: "clearMenus",
    value: function clearMenus(e) {
      if (e && (2 === e.button || "keyup" === e.type && "Tab" !== e.key)) return;
      var t = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);

      for (var i = 0, n = t.length; i < n; i++) {
        var _n4 = Dropdown.getInstance(t[i]);

        if (!_n4 || !1 === _n4._config.autoClose) continue;
        if (!_n4._isShown()) continue;
        var s = {
          relatedTarget: _n4._element
        };

        if (e) {
          var _t7 = e.composedPath(),
              _i2 = _t7.includes(_n4._menu);

          if (_t7.includes(_n4._element) || "inside" === _n4._config.autoClose && !_i2 || "outside" === _n4._config.autoClose && _i2) continue;
          if (_n4._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
          "click" === e.type && (s.clickEvent = e);
        }

        _n4._completeHide(s);
      }
    }
  }, {
    key: "getParentFromElement",
    value: function getParentFromElement(e) {
      return getElementFromSelector(e) || e.parentNode;
    }
  }, {
    key: "dataApiKeydownHandler",
    value: function dataApiKeydownHandler(e) {
      if (/input|textarea/i.test(e.target.tagName) ? "Space" === e.key || "Escape" !== e.key && ("ArrowDown" !== e.key && "ArrowUp" !== e.key || e.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(e.key)) return;
      var t = this.classList.contains("show");
      if (!t && "Escape" === e.key) return;
      if (e.preventDefault(), e.stopPropagation(), isDisabled(this)) return;
      var i = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0],
          n = Dropdown.getOrCreateInstance(i);
      if ("Escape" !== e.key) return "ArrowUp" === e.key || "ArrowDown" === e.key ? (t || n.show(), void n._selectMenuItem(e)) : void (t && "Space" !== e.key || Dropdown.clearMenus());
      n.hide();
    }
  }]);

  return Dropdown;
}(BaseComponent);

exports.Dropdown = Dropdown;
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler), EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler), EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus), EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus), EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (e) {
  e.preventDefault(), Dropdown.getOrCreateInstance(this).toggle();
}), defineJQueryPlugin(Dropdown);
var SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    SELECTOR_STICKY_CONTENT = ".sticky-top";

var ScrollBarHelper = /*#__PURE__*/function () {
  function ScrollBarHelper() {
    _classCallCheck(this, ScrollBarHelper);

    this._element = document.body;
  }

  _createClass(ScrollBarHelper, [{
    key: "getWidth",
    value: function getWidth() {
      var e = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - e);
    }
  }, {
    key: "hide",
    value: function hide() {
      var e = this.getWidth();
      this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", function (t) {
        return t + e;
      }), this._setElementAttributes(SELECTOR_FIXED_CONTENT, "paddingRight", function (t) {
        return t + e;
      }), this._setElementAttributes(".sticky-top", "marginRight", function (t) {
        return t - e;
      });
    }
  }, {
    key: "_disableOverFlow",
    value: function _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
    }
  }, {
    key: "_setElementAttributes",
    value: function _setElementAttributes(e, t, i) {
      var _this14 = this;

      var n = this.getWidth();

      this._applyManipulationCallback(e, function (e) {
        if (e !== _this14._element && window.innerWidth > e.clientWidth + n) return;

        _this14._saveInitialAttribute(e, t);

        var s = window.getComputedStyle(e)[t];
        e.style[t] = i(Number.parseFloat(s)) + "px";
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(SELECTOR_FIXED_CONTENT, "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight");
    }
  }, {
    key: "_saveInitialAttribute",
    value: function _saveInitialAttribute(e, t) {
      var i = e.style[t];
      i && Manipulator.setDataAttribute(e, t, i);
    }
  }, {
    key: "_resetElementAttributes",
    value: function _resetElementAttributes(e, t) {
      this._applyManipulationCallback(e, function (e) {
        var i = Manipulator.getDataAttribute(e, t);
        void 0 === i ? e.style.removeProperty(t) : (Manipulator.removeDataAttribute(e, t), e.style[t] = i);
      });
    }
  }, {
    key: "_applyManipulationCallback",
    value: function _applyManipulationCallback(e, t) {
      isElement(e) ? t(e) : SelectorEngine.find(e, this._element).forEach(t);
    }
  }, {
    key: "isOverflowing",
    value: function isOverflowing() {
      return this.getWidth() > 0;
    }
  }]);

  return ScrollBarHelper;
}();

var Default$7 = {
  className: "modal-backdrop",
  isVisible: !0,
  isAnimated: !1,
  rootElement: "body",
  clickCallback: null
},
    DefaultType$7 = {
  className: "string",
  isVisible: "boolean",
  isAnimated: "boolean",
  rootElement: "(element|string)",
  clickCallback: "(function|null)"
},
    NAME$8 = "backdrop",
    CLASS_NAME_FADE$4 = "fade",
    CLASS_NAME_SHOW$5 = "show",
    EVENT_MOUSEDOWN = "mousedown.bs.backdrop";

var Backdrop = /*#__PURE__*/function () {
  function Backdrop(e) {
    _classCallCheck(this, Backdrop);

    this._config = this._getConfig(e), this._isAppended = !1, this._element = null;
  }

  _createClass(Backdrop, [{
    key: "show",
    value: function show(e) {
      this._config.isVisible ? (this._append(), this._config.isAnimated && reflow(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(function () {
        execute(e);
      })) : execute(e);
    }
  }, {
    key: "hide",
    value: function hide(e) {
      var _this15 = this;

      this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(function () {
        _this15.dispose(), execute(e);
      })) : execute(e);
    }
  }, {
    key: "_getElement",
    value: function _getElement() {
      if (!this._element) {
        var e = document.createElement("div");
        e.className = this._config.className, this._config.isAnimated && e.classList.add("fade"), this._element = e;
      }

      return this._element;
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return (e = _objectSpread(_objectSpread({}, Default$7), "object" == _typeof(e) ? e : {})).rootElement = getElement(e.rootElement), typeCheckConfig(NAME$8, e, DefaultType$7), e;
    }
  }, {
    key: "_append",
    value: function _append() {
      var _this16 = this;

      this._isAppended || (this._config.rootElement.append(this._getElement()), EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, function () {
        execute(_this16._config.clickCallback);
      }), this._isAppended = !0);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._isAppended && (EventHandler.off(this._element, EVENT_MOUSEDOWN), this._element.remove(), this._isAppended = !1);
    }
  }, {
    key: "_emulateAnimation",
    value: function _emulateAnimation(e) {
      executeAfterTransition(e, this._getElement(), this._config.isAnimated);
    }
  }]);

  return Backdrop;
}();

var Default$6 = {
  trapElement: null,
  autofocus: !0
},
    DefaultType$6 = {
  trapElement: "element",
  autofocus: "boolean"
},
    NAME$7 = "focustrap",
    DATA_KEY$7 = "bs.focustrap",
    EVENT_KEY$7 = ".bs.focustrap",
    EVENT_FOCUSIN$1 = "focusin.bs.focustrap",
    EVENT_KEYDOWN_TAB = "keydown.tab.bs.focustrap",
    TAB_KEY = "Tab",
    TAB_NAV_FORWARD = "forward",
    TAB_NAV_BACKWARD = "backward";

var FocusTrap = /*#__PURE__*/function () {
  function FocusTrap(e) {
    _classCallCheck(this, FocusTrap);

    this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null;
  }

  _createClass(FocusTrap, [{
    key: "activate",
    value: function activate() {
      var _this17 = this;

      var _this$_config = this._config,
          e = _this$_config.trapElement,
          t = _this$_config.autofocus;
      this._isActive || (t && e.focus(), EventHandler.off(document, EVENT_KEY$7), EventHandler.on(document, EVENT_FOCUSIN$1, function (e) {
        return _this17._handleFocusin(e);
      }), EventHandler.on(document, EVENT_KEYDOWN_TAB, function (e) {
        return _this17._handleKeydown(e);
      }), this._isActive = !0);
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      this._isActive && (this._isActive = !1, EventHandler.off(document, EVENT_KEY$7));
    }
  }, {
    key: "_handleFocusin",
    value: function _handleFocusin(e) {
      var t = e.target,
          i = this._config.trapElement;
      if (t === document || t === i || i.contains(t)) return;
      var n = SelectorEngine.focusableChildren(i);
      0 === n.length ? i.focus() : "backward" === this._lastTabNavDirection ? n[n.length - 1].focus() : n[0].focus();
    }
  }, {
    key: "_handleKeydown",
    value: function _handleKeydown(e) {
      "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? "backward" : "forward");
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return e = _objectSpread(_objectSpread({}, Default$6), "object" == _typeof(e) ? e : {}), typeCheckConfig(NAME$7, e, DefaultType$6), e;
    }
  }]);

  return FocusTrap;
}();

var NAME$6 = "modal",
    DATA_KEY$6 = "bs.modal",
    EVENT_KEY$6 = ".bs.modal",
    DATA_API_KEY$3 = ".data-api",
    ESCAPE_KEY$1 = "Escape",
    Default$5 = {
  backdrop: !0,
  keyboard: !0,
  focus: !0
},
    DefaultType$5 = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  focus: "boolean"
},
    EVENT_HIDE$3 = "hide.bs.modal",
    EVENT_HIDE_PREVENTED = "hidePrevented.bs.modal",
    EVENT_HIDDEN$3 = "hidden.bs.modal",
    EVENT_SHOW$3 = "show.bs.modal",
    EVENT_SHOWN$3 = "shown.bs.modal",
    EVENT_RESIZE = "resize.bs.modal",
    EVENT_CLICK_DISMISS = "click.dismiss.bs.modal",
    EVENT_KEYDOWN_DISMISS$1 = "keydown.dismiss.bs.modal",
    EVENT_MOUSEUP_DISMISS = "mouseup.dismiss.bs.modal",
    EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss.bs.modal",
    EVENT_CLICK_DATA_API$2 = "click.bs.modal.data-api",
    CLASS_NAME_OPEN = "modal-open",
    CLASS_NAME_FADE$3 = "fade",
    CLASS_NAME_SHOW$4 = "show",
    CLASS_NAME_STATIC = "modal-static",
    OPEN_SELECTOR$1 = ".modal.show",
    SELECTOR_DIALOG = ".modal-dialog",
    SELECTOR_MODAL_BODY = ".modal-body",
    SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';

var Modal = /*#__PURE__*/function (_BaseComponent6) {
  _inherits(Modal, _BaseComponent6);

  var _super6 = _createSuper(Modal);

  function Modal(e, t) {
    var _this18;

    _classCallCheck(this, Modal);

    _this18 = _super6.call(this, e), _this18._config = _this18._getConfig(t), _this18._dialog = SelectorEngine.findOne(".modal-dialog", _this18._element), _this18._backdrop = _this18._initializeBackDrop(), _this18._focustrap = _this18._initializeFocusTrap(), _this18._isShown = !1, _this18._ignoreBackdropClick = !1, _this18._isTransitioning = !1, _this18._scrollBar = new ScrollBarHelper();
    return _this18;
  }

  _createClass(Modal, [{
    key: "toggle",
    value: function toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
  }, {
    key: "show",
    value: function show(e) {
      var _this19 = this;

      this._isShown || this._isTransitioning || EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget: e
      }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, function () {
        EventHandler.one(_this19._element, EVENT_MOUSEUP_DISMISS, function (e) {
          e.target === _this19._element && (_this19._ignoreBackdropClick = !0);
        });
      }), this._showBackdrop(function () {
        return _this19._showElement(e);
      }));
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this20 = this;

      if (!this._isShown || this._isTransitioning) return;
      if (EventHandler.trigger(this._element, EVENT_HIDE$3).defaultPrevented) return;
      this._isShown = !1;

      var e = this._isAnimated();

      e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove("show"), EventHandler.off(this._element, EVENT_CLICK_DISMISS), EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS), this._queueCallback(function () {
        return _this20._hideModal();
      }, this._element, e);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      [window, this._dialog].forEach(function (e) {
        return EventHandler.off(e, ".bs.modal");
      }), this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(Modal.prototype), "dispose", this).call(this);
    }
  }, {
    key: "handleUpdate",
    value: function handleUpdate() {
      this._adjustDialog();
    }
  }, {
    key: "_initializeBackDrop",
    value: function _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated()
      });
    }
  }, {
    key: "_initializeFocusTrap",
    value: function _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return e = _objectSpread(_objectSpread(_objectSpread({}, Default$5), Manipulator.getDataAttributes(this._element)), "object" == _typeof(e) ? e : {}), typeCheckConfig(NAME$6, e, DefaultType$5), e;
    }
  }, {
    key: "_showElement",
    value: function _showElement(e) {
      var _this21 = this;

      var t = this._isAnimated(),
          i = SelectorEngine.findOne(".modal-body", this._dialog);

      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), t && reflow(this._element), this._element.classList.add("show"), this._queueCallback(function () {
        _this21._config.focus && _this21._focustrap.activate(), _this21._isTransitioning = !1, EventHandler.trigger(_this21._element, EVENT_SHOWN$3, {
          relatedTarget: e
        });
      }, this._dialog, t);
    }
  }, {
    key: "_setEscapeEvent",
    value: function _setEscapeEvent() {
      var _this22 = this;

      this._isShown ? EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, function (e) {
        _this22._config.keyboard && "Escape" === e.key ? (e.preventDefault(), _this22.hide()) : _this22._config.keyboard || "Escape" !== e.key || _this22._triggerBackdropTransition();
      }) : EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS$1);
    }
  }, {
    key: "_setResizeEvent",
    value: function _setResizeEvent() {
      var _this23 = this;

      this._isShown ? EventHandler.on(window, EVENT_RESIZE, function () {
        return _this23._adjustDialog();
      }) : EventHandler.off(window, EVENT_RESIZE);
    }
  }, {
    key: "_hideModal",
    value: function _hideModal() {
      var _this24 = this;

      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
        document.body.classList.remove("modal-open"), _this24._resetAdjustments(), _this24._scrollBar.reset(), EventHandler.trigger(_this24._element, EVENT_HIDDEN$3);
      });
    }
  }, {
    key: "_showBackdrop",
    value: function _showBackdrop(e) {
      var _this25 = this;

      EventHandler.on(this._element, EVENT_CLICK_DISMISS, function (e) {
        _this25._ignoreBackdropClick ? _this25._ignoreBackdropClick = !1 : e.target === e.currentTarget && (!0 === _this25._config.backdrop ? _this25.hide() : "static" === _this25._config.backdrop && _this25._triggerBackdropTransition());
      }), this._backdrop.show(e);
    }
  }, {
    key: "_isAnimated",
    value: function _isAnimated() {
      return this._element.classList.contains("fade");
    }
  }, {
    key: "_triggerBackdropTransition",
    value: function _triggerBackdropTransition() {
      var _this26 = this;

      if (EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED).defaultPrevented) return;
      var _this$_element = this._element,
          e = _this$_element.classList,
          t = _this$_element.scrollHeight,
          i = _this$_element.style,
          n = t > document.documentElement.clientHeight;
      !n && "hidden" === i.overflowY || e.contains("modal-static") || (n || (i.overflowY = "hidden"), e.add("modal-static"), this._queueCallback(function () {
        e.remove("modal-static"), n || _this26._queueCallback(function () {
          i.overflowY = "";
        }, _this26._dialog);
      }, this._dialog), this._element.focus());
    }
  }, {
    key: "_adjustDialog",
    value: function _adjustDialog() {
      var e = this._element.scrollHeight > document.documentElement.clientHeight,
          t = this._scrollBar.getWidth(),
          i = t > 0;

      (!i && e && !isRTL() || i && !e && isRTL()) && (this._element.style.paddingLeft = t + "px"), (i && !e && !isRTL() || !i && e && isRTL()) && (this._element.style.paddingRight = t + "px");
    }
  }, {
    key: "_resetAdjustments",
    value: function _resetAdjustments() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }
  }], [{
    key: "Default",
    get: function get() {
      return Default$5;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$6;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(e, t) {
      return this.each(function () {
        var i = Modal.getOrCreateInstance(this, e);

        if ("string" == typeof e) {
          if (void 0 === i[e]) throw new TypeError("No method named \"".concat(e, "\""));
          i[e](t);
        }
      });
    }
  }]);

  return Modal;
}(BaseComponent);

exports.Modal = Modal;
EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (e) {
  var _this27 = this;

  var t = getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), EventHandler.one(t, EVENT_SHOW$3, function (e) {
    e.defaultPrevented || EventHandler.one(t, EVENT_HIDDEN$3, function () {
      isVisible(_this27) && _this27.focus();
    });
  });
  var i = SelectorEngine.findOne(".modal.show");
  i && Modal.getInstance(i).hide(), Modal.getOrCreateInstance(t).toggle(this);
}), enableDismissTrigger(Modal), defineJQueryPlugin(Modal);
var NAME$5 = "offcanvas",
    DATA_KEY$5 = "bs.offcanvas",
    EVENT_KEY$5 = ".bs.offcanvas",
    DATA_API_KEY$2 = ".data-api",
    EVENT_LOAD_DATA_API$1 = "load.bs.offcanvas.data-api",
    ESCAPE_KEY = "Escape",
    Default$4 = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
},
    DefaultType$4 = {
  backdrop: "boolean",
  keyboard: "boolean",
  scroll: "boolean"
},
    CLASS_NAME_SHOW$3 = "show",
    CLASS_NAME_BACKDROP = "offcanvas-backdrop",
    OPEN_SELECTOR = ".offcanvas.show",
    EVENT_SHOW$2 = "show.bs.offcanvas",
    EVENT_SHOWN$2 = "shown.bs.offcanvas",
    EVENT_HIDE$2 = "hide.bs.offcanvas",
    EVENT_HIDDEN$2 = "hidden.bs.offcanvas",
    EVENT_CLICK_DATA_API$1 = "click.bs.offcanvas.data-api",
    EVENT_KEYDOWN_DISMISS = "keydown.dismiss.bs.offcanvas",
    SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';

var Offcanvas = /*#__PURE__*/function (_BaseComponent7) {
  _inherits(Offcanvas, _BaseComponent7);

  var _super7 = _createSuper(Offcanvas);

  function Offcanvas(e, t) {
    var _this28;

    _classCallCheck(this, Offcanvas);

    _this28 = _super7.call(this, e), _this28._config = _this28._getConfig(t), _this28._isShown = !1, _this28._backdrop = _this28._initializeBackDrop(), _this28._focustrap = _this28._initializeFocusTrap(), _this28._addEventListeners();
    return _this28;
  }

  _createClass(Offcanvas, [{
    key: "toggle",
    value: function toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
  }, {
    key: "show",
    value: function show(e) {
      var _this29 = this;

      this._isShown || EventHandler.trigger(this._element, EVENT_SHOW$2, {
        relatedTarget: e
      }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || new ScrollBarHelper().hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(function () {
        _this29._config.scroll || _this29._focustrap.activate(), EventHandler.trigger(_this29._element, EVENT_SHOWN$2, {
          relatedTarget: e
        });
      }, this._element, !0));
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this30 = this;

      this._isShown && (EventHandler.trigger(this._element, EVENT_HIDE$2).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(function () {
        _this30._element.setAttribute("aria-hidden", !0), _this30._element.removeAttribute("aria-modal"), _this30._element.removeAttribute("role"), _this30._element.style.visibility = "hidden", _this30._config.scroll || new ScrollBarHelper().reset(), EventHandler.trigger(_this30._element, EVENT_HIDDEN$2);
      }, this._element, !0)));
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(Offcanvas.prototype), "dispose", this).call(this);
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return e = _objectSpread(_objectSpread(_objectSpread({}, Default$4), Manipulator.getDataAttributes(this._element)), "object" == _typeof(e) ? e : {}), typeCheckConfig(NAME$5, e, DefaultType$4), e;
    }
  }, {
    key: "_initializeBackDrop",
    value: function _initializeBackDrop() {
      var _this31 = this;

      return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: function clickCallback() {
          return _this31.hide();
        }
      });
    }
  }, {
    key: "_initializeFocusTrap",
    value: function _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this32 = this;

      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, function (e) {
        _this32._config.keyboard && "Escape" === e.key && _this32.hide();
      });
    }
  }], [{
    key: "NAME",
    get: function get() {
      return NAME$5;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$4;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Offcanvas.getOrCreateInstance(this, e);

        if ("string" == typeof e) {
          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError("No method named \"".concat(e, "\""));
          t[e](this);
        }
      });
    }
  }]);

  return Offcanvas;
}(BaseComponent);

exports.Offcanvas = Offcanvas;
EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (e) {
  var _this33 = this;

  var t = getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), isDisabled(this)) return;
  EventHandler.one(t, EVENT_HIDDEN$2, function () {
    isVisible(_this33) && _this33.focus();
  });
  var i = SelectorEngine.findOne(OPEN_SELECTOR);
  i && i !== t && Offcanvas.getInstance(i).hide(), Offcanvas.getOrCreateInstance(t).toggle(this);
}), EventHandler.on(window, EVENT_LOAD_DATA_API$1, function () {
  return SelectorEngine.find(OPEN_SELECTOR).forEach(function (e) {
    return Offcanvas.getOrCreateInstance(e).show();
  });
}), enableDismissTrigger(Offcanvas), defineJQueryPlugin(Offcanvas);

var uriAttrs = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
    ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i,
    SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
    DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    allowedAttribute = function allowedAttribute(e, t) {
  var i = e.nodeName.toLowerCase();
  if (t.includes(i)) return !uriAttrs.has(i) || Boolean(SAFE_URL_PATTERN.test(e.nodeValue) || DATA_URL_PATTERN.test(e.nodeValue));
  var n = t.filter(function (e) {
    return e instanceof RegExp;
  });

  for (var _e7 = 0, _t8 = n.length; _e7 < _t8; _e7++) {
    if (n[_e7].test(i)) return !0;
  }

  return !1;
},
    DefaultAllowlist = {
  "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
  a: ["target", "href", "title", "rel"],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ["src", "srcset", "alt", "title", "width", "height"],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};

function sanitizeHtml(e, t, i) {
  var _ref7;

  if (!e.length) return e;
  if (i && "function" == typeof i) return i(e);

  var n = new window.DOMParser().parseFromString(e, "text/html"),
      s = Object.keys(t),
      o = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(n.body.querySelectorAll("*")));

  var _loop = function _loop(_e8, _i3) {
    var _ref8;

    var i = o[_e8],
        n = i.nodeName.toLowerCase();

    if (!s.includes(n)) {
      i.remove();
      return "continue";
    }

    var r = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(i.attributes)),
        a = [].concat(t["*"] || [], t[n] || []);

    r.forEach(function (e) {
      allowedAttribute(e, a) || i.removeAttribute(e.nodeName);
    });
  };

  for (var _e8 = 0, _i3 = o.length; _e8 < _i3; _e8++) {
    var _ret = _loop(_e8, _i3);

    if (_ret === "continue") continue;
  }

  return n.body.innerHTML;
}

var NAME$4 = "tooltip",
    DATA_KEY$4 = "bs.tooltip",
    EVENT_KEY$4 = ".bs.tooltip",
    CLASS_PREFIX$1 = "bs-tooltip",
    DISALLOWED_ATTRIBUTES = new Set(["sanitize", "allowList", "sanitizeFn"]),
    DefaultType$3 = {
  animation: "boolean",
  template: "string",
  title: "(string|element|function)",
  trigger: "string",
  delay: "(number|object)",
  html: "boolean",
  selector: "(string|boolean)",
  placement: "(string|function)",
  offset: "(array|string|function)",
  container: "(string|element|boolean)",
  fallbackPlacements: "array",
  boundary: "(string|element)",
  customClass: "(string|function)",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  allowList: "object",
  popperConfig: "(null|object|function)"
},
    AttachmentMap = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: isRTL() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: isRTL() ? "right" : "left"
},
    Default$3 = {
  animation: !0,
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  trigger: "hover focus",
  title: "",
  delay: 0,
  html: !1,
  selector: !1,
  placement: "top",
  offset: [0, 0],
  container: !1,
  fallbackPlacements: ["top", "right", "bottom", "left"],
  boundary: "clippingParents",
  customClass: "",
  sanitize: !0,
  sanitizeFn: null,
  allowList: DefaultAllowlist,
  popperConfig: null
},
    Event$2 = {
  HIDE: "hide.bs.tooltip",
  HIDDEN: "hidden.bs.tooltip",
  SHOW: "show.bs.tooltip",
  SHOWN: "shown.bs.tooltip",
  INSERTED: "inserted.bs.tooltip",
  CLICK: "click.bs.tooltip",
  FOCUSIN: "focusin.bs.tooltip",
  FOCUSOUT: "focusout.bs.tooltip",
  MOUSEENTER: "mouseenter.bs.tooltip",
  MOUSELEAVE: "mouseleave.bs.tooltip"
},
    CLASS_NAME_FADE$2 = "fade",
    CLASS_NAME_MODAL = "modal",
    CLASS_NAME_SHOW$2 = "show",
    HOVER_STATE_SHOW = "show",
    HOVER_STATE_OUT = "out",
    SELECTOR_TOOLTIP_INNER = ".tooltip-inner",
    SELECTOR_MODAL = ".modal",
    EVENT_MODAL_HIDE = "hide.bs.modal",
    TRIGGER_HOVER = "hover",
    TRIGGER_FOCUS = "focus",
    TRIGGER_CLICK = "click",
    TRIGGER_MANUAL = "manual";

var Tooltip = /*#__PURE__*/function (_BaseComponent8) {
  _inherits(Tooltip, _BaseComponent8);

  var _super8 = _createSuper(Tooltip);

  function Tooltip(e, t) {
    var _this34;

    _classCallCheck(this, Tooltip);

    if (void 0 === Popper) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
    _this34 = _super8.call(this, e), _this34._isEnabled = !0, _this34._timeout = 0, _this34._hoverState = "", _this34._activeTrigger = {}, _this34._popper = null, _this34._config = _this34._getConfig(t), _this34.tip = null, _this34._setListeners();
    return _this34;
  }

  _createClass(Tooltip, [{
    key: "enable",
    value: function enable() {
      this._isEnabled = !0;
    }
  }, {
    key: "disable",
    value: function disable() {
      this._isEnabled = !1;
    }
  }, {
    key: "toggleEnabled",
    value: function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
  }, {
    key: "toggle",
    value: function toggle(e) {
      if (this._isEnabled) if (e) {
        var t = this._initializeOnDelegatedTarget(e);

        t._activeTrigger.click = !t._activeTrigger.click, t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t);
      } else {
        if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);

        this._enter(null, this);
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      clearTimeout(this._timeout), EventHandler.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), _get(_getPrototypeOf(Tooltip.prototype), "dispose", this).call(this);
    }
  }, {
    key: "show",
    value: function show() {
      var _n$classList,
          _ref9,
          _this35 = this;

      if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled) return;
      var e = EventHandler.trigger(this._element, this.constructor.Event.SHOW),
          t = findShadowRoot(this._element),
          i = null === t ? this._element.ownerDocument.documentElement.contains(this._element) : t.contains(this._element);
      if (e.defaultPrevented || !i) return;
      "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(".tooltip-inner").innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
      var n = this.getTipElement(),
          s = getUID(this.constructor.NAME);
      n.setAttribute("id", s), this._element.setAttribute("aria-describedby", s), this._config.animation && n.classList.add("fade");

      var o = "function" == typeof this._config.placement ? this._config.placement.call(this, n, this._element) : this._config.placement,
          r = this._getAttachment(o);

      this._addAttachmentClass(r);

      var a = this._config.container;
      Data.set(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(n), EventHandler.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = Popper.createPopper(this._element, n, this._getPopperConfig(r)), n.classList.add("show");

      var l = this._resolvePossibleFunction(this._config.customClass);

      l && (_n$classList = n.classList).add.apply(_n$classList, _toConsumableArray(l.split(" "))), "ontouchstart" in document.documentElement && (_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children)).forEach(function (e) {
        EventHandler.on(e, "mouseover", noop);
      });
      var c = this.tip.classList.contains("fade");

      this._queueCallback(function () {
        var e = _this35._hoverState;
        _this35._hoverState = null, EventHandler.trigger(_this35._element, _this35.constructor.Event.SHOWN), "out" === e && _this35._leave(null, _this35);
      }, this.tip, c);
    }
  }, {
    key: "hide",
    value: function hide() {
      var _ref10,
          _this36 = this;

      if (!this._popper) return;
      var e = this.getTipElement();
      if (EventHandler.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
      e.classList.remove("show"), "ontouchstart" in document.documentElement && (_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children)).forEach(function (e) {
        return EventHandler.off(e, "mouseover", noop);
      }), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
      var t = this.tip.classList.contains("fade");
      this._queueCallback(function () {
        _this36._isWithActiveTrigger() || ("show" !== _this36._hoverState && e.remove(), _this36._cleanTipClass(), _this36._element.removeAttribute("aria-describedby"), EventHandler.trigger(_this36._element, _this36.constructor.Event.HIDDEN), _this36._disposePopper());
      }, this.tip, t), this._hoverState = "";
    }
  }, {
    key: "update",
    value: function update() {
      null !== this._popper && this._popper.update();
    }
  }, {
    key: "isWithContent",
    value: function isWithContent() {
      return Boolean(this.getTitle());
    }
  }, {
    key: "getTipElement",
    value: function getTipElement() {
      if (this.tip) return this.tip;
      var e = document.createElement("div");
      e.innerHTML = this._config.template;
      var t = e.children[0];
      return this.setContent(t), t.classList.remove("fade", "show"), this.tip = t, this.tip;
    }
  }, {
    key: "setContent",
    value: function setContent(e) {
      this._sanitizeAndSetContent(e, this.getTitle(), ".tooltip-inner");
    }
  }, {
    key: "_sanitizeAndSetContent",
    value: function _sanitizeAndSetContent(e, t, i) {
      var n = SelectorEngine.findOne(i, e);
      t || !n ? this.setElementContent(n, t) : n.remove();
    }
  }, {
    key: "setElementContent",
    value: function setElementContent(e, t) {
      if (null !== e) return isElement(t) ? (t = getElement(t), void (this._config.html ? t.parentNode !== e && (e.innerHTML = "", e.append(t)) : e.textContent = t.textContent)) : void (this._config.html ? (this._config.sanitize && (t = sanitizeHtml(t, this._config.allowList, this._config.sanitizeFn)), e.innerHTML = t) : e.textContent = t);
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      var e = this._element.getAttribute("data-bs-original-title") || this._config.title;

      return this._resolvePossibleFunction(e);
    }
  }, {
    key: "updateAttachment",
    value: function updateAttachment(e) {
      return "right" === e ? "end" : "left" === e ? "start" : e;
    }
  }, {
    key: "_initializeOnDelegatedTarget",
    value: function _initializeOnDelegatedTarget(e, t) {
      return t || this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig());
    }
  }, {
    key: "_getOffset",
    value: function _getOffset() {
      var _this37 = this;

      var e = this._config.offset;
      return "string" == typeof e ? e.split(",").map(function (e) {
        return Number.parseInt(e, 10);
      }) : "function" == typeof e ? function (t) {
        return e(t, _this37._element);
      } : e;
    }
  }, {
    key: "_resolvePossibleFunction",
    value: function _resolvePossibleFunction(e) {
      return "function" == typeof e ? e.call(this._element) : e;
    }
  }, {
    key: "_getPopperConfig",
    value: function _getPopperConfig(e) {
      var _this38 = this;

      var t = {
        placement: e,
        modifiers: [{
          name: "flip",
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }, {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "arrow",
          options: {
            element: ".".concat(this.constructor.NAME, "-arrow")
          }
        }, {
          name: "onChange",
          enabled: !0,
          phase: "afterWrite",
          fn: function fn(e) {
            return _this38._handlePopperPlacementChange(e);
          }
        }],
        onFirstUpdate: function onFirstUpdate(e) {
          e.options.placement !== e.placement && _this38._handlePopperPlacementChange(e);
        }
      };
      return _objectSpread(_objectSpread({}, t), "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig);
    }
  }, {
    key: "_addAttachmentClass",
    value: function _addAttachmentClass(e) {
      this.getTipElement().classList.add("".concat(this._getBasicClassPrefix(), "-").concat(this.updateAttachment(e)));
    }
  }, {
    key: "_getAttachment",
    value: function _getAttachment(e) {
      return AttachmentMap[e.toUpperCase()];
    }
  }, {
    key: "_setListeners",
    value: function _setListeners() {
      var _this39 = this;

      this._config.trigger.split(" ").forEach(function (e) {
        if ("click" === e) EventHandler.on(_this39._element, _this39.constructor.Event.CLICK, _this39._config.selector, function (e) {
          return _this39.toggle(e);
        });else if ("manual" !== e) {
          var t = "hover" === e ? _this39.constructor.Event.MOUSEENTER : _this39.constructor.Event.FOCUSIN,
              i = "hover" === e ? _this39.constructor.Event.MOUSELEAVE : _this39.constructor.Event.FOCUSOUT;
          EventHandler.on(_this39._element, t, _this39._config.selector, function (e) {
            return _this39._enter(e);
          }), EventHandler.on(_this39._element, i, _this39._config.selector, function (e) {
            return _this39._leave(e);
          });
        }
      }), this._hideModalHandler = function () {
        _this39._element && _this39.hide();
      }, EventHandler.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = _objectSpread(_objectSpread({}, this._config), {}, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }
  }, {
    key: "_fixTitle",
    value: function _fixTitle() {
      var e = this._element.getAttribute("title"),
          t = _typeof(this._element.getAttribute("data-bs-original-title"));

      (e || "string" !== t) && (this._element.setAttribute("data-bs-original-title", e || ""), !e || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", e), this._element.setAttribute("title", ""));
    }
  }, {
    key: "_enter",
    value: function _enter(e, t) {
      t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), t.getTipElement().classList.contains("show") || "show" === t._hoverState ? t._hoverState = "show" : (clearTimeout(t._timeout), t._hoverState = "show", t._config.delay && t._config.delay.show ? t._timeout = setTimeout(function () {
        "show" === t._hoverState && t.show();
      }, t._config.delay.show) : t.show());
    }
  }, {
    key: "_leave",
    value: function _leave(e, t) {
      t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusout" === e.type ? "focus" : "hover"] = t._element.contains(e.relatedTarget)), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t._config.delay && t._config.delay.hide ? t._timeout = setTimeout(function () {
        "out" === t._hoverState && t.hide();
      }, t._config.delay.hide) : t.hide());
    }
  }, {
    key: "_isWithActiveTrigger",
    value: function _isWithActiveTrigger() {
      for (var e in this._activeTrigger) {
        if (this._activeTrigger[e]) return !0;
      }

      return !1;
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      var t = Manipulator.getDataAttributes(this._element);
      return Object.keys(t).forEach(function (e) {
        DISALLOWED_ATTRIBUTES.has(e) && delete t[e];
      }), (e = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), t), "object" == _typeof(e) && e ? e : {})).container = !1 === e.container ? document.body : getElement(e.container), "number" == typeof e.delay && (e.delay = {
        show: e.delay,
        hide: e.delay
      }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), typeCheckConfig(NAME$4, e, this.constructor.DefaultType), e.sanitize && (e.template = sanitizeHtml(e.template, e.allowList, e.sanitizeFn)), e;
    }
  }, {
    key: "_getDelegateConfig",
    value: function _getDelegateConfig() {
      var e = {};

      for (var t in this._config) {
        this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
      }

      return e;
    }
  }, {
    key: "_cleanTipClass",
    value: function _cleanTipClass() {
      var e = this.getTipElement(),
          t = new RegExp("(^|\\s)".concat(this._getBasicClassPrefix(), "\\S+"), "g"),
          i = e.getAttribute("class").match(t);
      null !== i && i.length > 0 && i.map(function (e) {
        return e.trim();
      }).forEach(function (t) {
        return e.classList.remove(t);
      });
    }
  }, {
    key: "_getBasicClassPrefix",
    value: function _getBasicClassPrefix() {
      return "bs-tooltip";
    }
  }, {
    key: "_handlePopperPlacementChange",
    value: function _handlePopperPlacementChange(e) {
      var t = e.state;
      t && (this.tip = t.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t.placement)));
    }
  }, {
    key: "_disposePopper",
    value: function _disposePopper() {
      this._popper && (this._popper.destroy(), this._popper = null);
    }
  }], [{
    key: "Default",
    get: function get() {
      return Default$3;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$4;
    }
  }, {
    key: "Event",
    get: function get() {
      return Event$2;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$3;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Tooltip.getOrCreateInstance(this, e);

        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError("No method named \"".concat(e, "\""));
          t[e]();
        }
      });
    }
  }]);

  return Tooltip;
}(BaseComponent);

exports.Tooltip = Tooltip;
defineJQueryPlugin(Tooltip);

var NAME$3 = "popover",
    DATA_KEY$3 = "bs.popover",
    EVENT_KEY$3 = ".bs.popover",
    CLASS_PREFIX = "bs-popover",
    Default$2 = _objectSpread(_objectSpread({}, Tooltip.Default), {}, {
  placement: "right",
  offset: [0, 8],
  trigger: "click",
  content: "",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
}),
    DefaultType$2 = _objectSpread(_objectSpread({}, Tooltip.DefaultType), {}, {
  content: "(string|element|function)"
}),
    Event$1 = {
  HIDE: "hide.bs.popover",
  HIDDEN: "hidden.bs.popover",
  SHOW: "show.bs.popover",
  SHOWN: "shown.bs.popover",
  INSERTED: "inserted.bs.popover",
  CLICK: "click.bs.popover",
  FOCUSIN: "focusin.bs.popover",
  FOCUSOUT: "focusout.bs.popover",
  MOUSEENTER: "mouseenter.bs.popover",
  MOUSELEAVE: "mouseleave.bs.popover"
},
    SELECTOR_TITLE = ".popover-header",
    SELECTOR_CONTENT = ".popover-body";

var Popover = /*#__PURE__*/function (_Tooltip) {
  _inherits(Popover, _Tooltip);

  var _super9 = _createSuper(Popover);

  function Popover() {
    _classCallCheck(this, Popover);

    return _super9.apply(this, arguments);
  }

  _createClass(Popover, [{
    key: "isWithContent",
    value: function isWithContent() {
      return this.getTitle() || this._getContent();
    }
  }, {
    key: "setContent",
    value: function setContent(e) {
      this._sanitizeAndSetContent(e, this.getTitle(), SELECTOR_TITLE), this._sanitizeAndSetContent(e, this._getContent(), ".popover-body");
    }
  }, {
    key: "_getContent",
    value: function _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
  }, {
    key: "_getBasicClassPrefix",
    value: function _getBasicClassPrefix() {
      return "bs-popover";
    }
  }], [{
    key: "Default",
    get: function get() {
      return Default$2;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$3;
    }
  }, {
    key: "Event",
    get: function get() {
      return Event$1;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$2;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Popover.getOrCreateInstance(this, e);

        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError("No method named \"".concat(e, "\""));
          t[e]();
        }
      });
    }
  }]);

  return Popover;
}(Tooltip);

exports.Popover = Popover;
defineJQueryPlugin(Popover);
var NAME$2 = "scrollspy",
    DATA_KEY$2 = "bs.scrollspy",
    EVENT_KEY$2 = ".bs.scrollspy",
    DATA_API_KEY$1 = ".data-api",
    Default$1 = {
  offset: 10,
  method: "auto",
  target: ""
},
    DefaultType$1 = {
  offset: "number",
  method: "string",
  target: "(string|element)"
},
    EVENT_ACTIVATE = "activate.bs.scrollspy",
    EVENT_SCROLL = "scroll.bs.scrollspy",
    EVENT_LOAD_DATA_API = "load.bs.scrollspy.data-api",
    CLASS_NAME_DROPDOWN_ITEM = "dropdown-item",
    CLASS_NAME_ACTIVE$1 = "active",
    SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]',
    SELECTOR_NAV_LIST_GROUP$1 = ".nav, .list-group",
    SELECTOR_NAV_LINKS = ".nav-link",
    SELECTOR_NAV_ITEMS = ".nav-item",
    SELECTOR_LIST_ITEMS = ".list-group-item",
    SELECTOR_LINK_ITEMS = ".nav-link, .list-group-item, .dropdown-item",
    SELECTOR_DROPDOWN$1 = ".dropdown",
    SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle",
    METHOD_OFFSET = "offset",
    METHOD_POSITION = "position";

var ScrollSpy = /*#__PURE__*/function (_BaseComponent9) {
  _inherits(ScrollSpy, _BaseComponent9);

  var _super10 = _createSuper(ScrollSpy);

  function ScrollSpy(e, t) {
    var _this40;

    _classCallCheck(this, ScrollSpy);

    _this40 = _super10.call(this, e), _this40._scrollElement = "BODY" === _this40._element.tagName ? window : _this40._element, _this40._config = _this40._getConfig(t), _this40._offsets = [], _this40._targets = [], _this40._activeTarget = null, _this40._scrollHeight = 0, EventHandler.on(_this40._scrollElement, EVENT_SCROLL, function () {
      return _this40._process();
    }), _this40.refresh(), _this40._process();
    return _this40;
  }

  _createClass(ScrollSpy, [{
    key: "refresh",
    value: function refresh() {
      var _this41 = this;

      var e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
          t = "auto" === this._config.method ? e : this._config.method,
          i = "position" === t ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target).map(function (e) {
        var n = getSelectorFromElement(e),
            s = n ? SelectorEngine.findOne(n) : null;

        if (s) {
          var _e9 = s.getBoundingClientRect();

          if (_e9.width || _e9.height) return [Manipulator[t](s).top + i, n];
        }

        return null;
      }).filter(function (e) {
        return e;
      }).sort(function (e, t) {
        return e[0] - t[0];
      }).forEach(function (e) {
        _this41._offsets.push(e[0]), _this41._targets.push(e[1]);
      });
    }
  }, {
    key: "dispose",
    value: function dispose() {
      EventHandler.off(this._scrollElement, EVENT_KEY$2), _get(_getPrototypeOf(ScrollSpy.prototype), "dispose", this).call(this);
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return (e = _objectSpread(_objectSpread(_objectSpread({}, Default$1), Manipulator.getDataAttributes(this._element)), "object" == _typeof(e) && e ? e : {})).target = getElement(e.target) || document.documentElement, typeCheckConfig(NAME$2, e, DefaultType$1), e;
    }
  }, {
    key: "_getScrollTop",
    value: function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }
  }, {
    key: "_getScrollHeight",
    value: function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }
  }, {
    key: "_getOffsetHeight",
    value: function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }
  }, {
    key: "_process",
    value: function _process() {
      var e = this._getScrollTop() + this._config.offset,
          t = this._getScrollHeight(),
          i = this._config.offset + t - this._getOffsetHeight();

      if (this._scrollHeight !== t && this.refresh(), e >= i) {
        var _e10 = this._targets[this._targets.length - 1];
        this._activeTarget !== _e10 && this._activate(_e10);
      } else {
        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

        for (var _t9 = this._offsets.length; _t9--;) {
          this._activeTarget !== this._targets[_t9] && e >= this._offsets[_t9] && (void 0 === this._offsets[_t9 + 1] || e < this._offsets[_t9 + 1]) && this._activate(this._targets[_t9]);
        }
      }
    }
  }, {
    key: "_activate",
    value: function _activate(e) {
      this._activeTarget = e, this._clear();
      var t = SELECTOR_LINK_ITEMS.split(",").map(function (t) {
        return "".concat(t, "[data-bs-target=\"").concat(e, "\"],").concat(t, "[href=\"").concat(e, "\"]");
      }),
          i = SelectorEngine.findOne(t.join(","), this._config.target);
      i.classList.add("active"), i.classList.contains("dropdown-item") ? SelectorEngine.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add("active") : SelectorEngine.parents(i, ".nav, .list-group").forEach(function (e) {
        SelectorEngine.prev(e, ".nav-link, .list-group-item").forEach(function (e) {
          return e.classList.add("active");
        }), SelectorEngine.prev(e, ".nav-item").forEach(function (e) {
          SelectorEngine.children(e, ".nav-link").forEach(function (e) {
            return e.classList.add("active");
          });
        });
      }), EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
        relatedTarget: e
      });
    }
  }, {
    key: "_clear",
    value: function _clear() {
      SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target).filter(function (e) {
        return e.classList.contains("active");
      }).forEach(function (e) {
        return e.classList.remove("active");
      });
    }
  }], [{
    key: "Default",
    get: function get() {
      return Default$1;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$2;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = ScrollSpy.getOrCreateInstance(this, e);

        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError("No method named \"".concat(e, "\""));
          t[e]();
        }
      });
    }
  }]);

  return ScrollSpy;
}(BaseComponent);

exports.ScrollSpy = ScrollSpy;
EventHandler.on(window, EVENT_LOAD_DATA_API, function () {
  SelectorEngine.find(SELECTOR_DATA_SPY).forEach(function (e) {
    return new ScrollSpy(e);
  });
}), defineJQueryPlugin(ScrollSpy);
var NAME$1 = "tab",
    DATA_KEY$1 = "bs.tab",
    EVENT_KEY$1 = ".bs.tab",
    DATA_API_KEY = ".data-api",
    EVENT_HIDE$1 = "hide.bs.tab",
    EVENT_HIDDEN$1 = "hidden.bs.tab",
    EVENT_SHOW$1 = "show.bs.tab",
    EVENT_SHOWN$1 = "shown.bs.tab",
    EVENT_CLICK_DATA_API = "click.bs.tab.data-api",
    CLASS_NAME_DROPDOWN_MENU = "dropdown-menu",
    CLASS_NAME_ACTIVE = "active",
    CLASS_NAME_FADE$1 = "fade",
    CLASS_NAME_SHOW$1 = "show",
    SELECTOR_DROPDOWN = ".dropdown",
    SELECTOR_NAV_LIST_GROUP = ".nav, .list-group",
    SELECTOR_ACTIVE = ".active",
    SELECTOR_ACTIVE_UL = ":scope > li > .active",
    SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle",
    SELECTOR_DROPDOWN_ACTIVE_CHILD = ":scope > .dropdown-menu .active";

var Tab = /*#__PURE__*/function (_BaseComponent10) {
  _inherits(Tab, _BaseComponent10);

  var _super11 = _createSuper(Tab);

  function Tab() {
    _classCallCheck(this, Tab);

    return _super11.apply(this, arguments);
  }

  _createClass(Tab, [{
    key: "show",
    value: function show() {
      var _this42 = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
      var e;

      var t = getElementFromSelector(this._element),
          i = this._element.closest(".nav, .list-group");

      if (i) {
        var _t10 = "UL" === i.nodeName || "OL" === i.nodeName ? SELECTOR_ACTIVE_UL : ".active";

        e = SelectorEngine.find(_t10, i), e = e[e.length - 1];
      }

      var n = e ? EventHandler.trigger(e, EVENT_HIDE$1, {
        relatedTarget: this._element
      }) : null;
      if (EventHandler.trigger(this._element, EVENT_SHOW$1, {
        relatedTarget: e
      }).defaultPrevented || null !== n && n.defaultPrevented) return;

      this._activate(this._element, i);

      var s = function s() {
        EventHandler.trigger(e, EVENT_HIDDEN$1, {
          relatedTarget: _this42._element
        }), EventHandler.trigger(_this42._element, EVENT_SHOWN$1, {
          relatedTarget: e
        });
      };

      t ? this._activate(t, t.parentNode, s) : s();
    }
  }, {
    key: "_activate",
    value: function _activate(e, t, i) {
      var _this43 = this;

      var n = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? SelectorEngine.children(t, ".active") : SelectorEngine.find(SELECTOR_ACTIVE_UL, t))[0],
          s = i && n && n.classList.contains("fade"),
          o = function o() {
        return _this43._transitionComplete(e, n, i);
      };

      n && s ? (n.classList.remove("show"), this._queueCallback(o, e, !0)) : o();
    }
  }, {
    key: "_transitionComplete",
    value: function _transitionComplete(e, t, i) {
      if (t) {
        t.classList.remove("active");

        var _e11 = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, t.parentNode);

        _e11 && _e11.classList.remove("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1);
      }

      e.classList.add("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), reflow(e), e.classList.contains("fade") && e.classList.add("show");
      var n = e.parentNode;

      if (n && "LI" === n.nodeName && (n = n.parentNode), n && n.classList.contains("dropdown-menu")) {
        var _t11 = e.closest(".dropdown");

        _t11 && SelectorEngine.find(".dropdown-toggle", _t11).forEach(function (e) {
          return e.classList.add("active");
        }), e.setAttribute("aria-expanded", !0);
      }

      i && i();
    }
  }], [{
    key: "NAME",
    get: function get() {
      return "tab";
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Tab.getOrCreateInstance(this);

        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError("No method named \"".concat(e, "\""));
          t[e]();
        }
      });
    }
  }]);

  return Tab;
}(BaseComponent);

exports.Tab = Tab;
EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (e) {
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), isDisabled(this) || Tab.getOrCreateInstance(this).show();
}), defineJQueryPlugin(Tab);
var NAME = "toast",
    DATA_KEY = "bs.toast",
    EVENT_KEY = ".bs.toast",
    EVENT_MOUSEOVER = "mouseover.bs.toast",
    EVENT_MOUSEOUT = "mouseout.bs.toast",
    EVENT_FOCUSIN = "focusin.bs.toast",
    EVENT_FOCUSOUT = "focusout.bs.toast",
    EVENT_HIDE = "hide.bs.toast",
    EVENT_HIDDEN = "hidden.bs.toast",
    EVENT_SHOW = "show.bs.toast",
    EVENT_SHOWN = "shown.bs.toast",
    CLASS_NAME_FADE = "fade",
    CLASS_NAME_HIDE = "hide",
    CLASS_NAME_SHOW = "show",
    CLASS_NAME_SHOWING = "showing",
    DefaultType = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
},
    Default = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};

var Toast = /*#__PURE__*/function (_BaseComponent11) {
  _inherits(Toast, _BaseComponent11);

  var _super12 = _createSuper(Toast);

  function Toast(e, t) {
    var _this44;

    _classCallCheck(this, Toast);

    _this44 = _super12.call(this, e), _this44._config = _this44._getConfig(t), _this44._timeout = null, _this44._hasMouseInteraction = !1, _this44._hasKeyboardInteraction = !1, _this44._setListeners();
    return _this44;
  }

  _createClass(Toast, [{
    key: "show",
    value: function show() {
      var _this45 = this;

      EventHandler.trigger(this._element, EVENT_SHOW).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), reflow(this._element), this._element.classList.add("show"), this._element.classList.add("showing"), this._queueCallback(function () {
        _this45._element.classList.remove("showing"), EventHandler.trigger(_this45._element, EVENT_SHOWN), _this45._maybeScheduleHide();
      }, this._element, this._config.animation));
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this46 = this;

      this._element.classList.contains("show") && (EventHandler.trigger(this._element, EVENT_HIDE).defaultPrevented || (this._element.classList.add("showing"), this._queueCallback(function () {
        _this46._element.classList.add("hide"), _this46._element.classList.remove("showing"), _this46._element.classList.remove("show"), EventHandler.trigger(_this46._element, EVENT_HIDDEN);
      }, this._element, this._config.animation)));
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), _get(_getPrototypeOf(Toast.prototype), "dispose", this).call(this);
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return e = _objectSpread(_objectSpread(_objectSpread({}, Default), Manipulator.getDataAttributes(this._element)), "object" == _typeof(e) && e ? e : {}), typeCheckConfig(NAME, e, this.constructor.DefaultType), e;
    }
  }, {
    key: "_maybeScheduleHide",
    value: function _maybeScheduleHide() {
      var _this47 = this;

      this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function () {
        _this47.hide();
      }, this._config.delay)));
    }
  }, {
    key: "_onInteraction",
    value: function _onInteraction(e, t) {
      switch (e.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = t;
          break;

        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = t;
      }

      if (t) return void this._clearTimeout();
      var i = e.relatedTarget;
      this._element === i || this._element.contains(i) || this._maybeScheduleHide();
    }
  }, {
    key: "_setListeners",
    value: function _setListeners() {
      var _this48 = this;

      EventHandler.on(this._element, EVENT_MOUSEOVER, function (e) {
        return _this48._onInteraction(e, !0);
      }), EventHandler.on(this._element, EVENT_MOUSEOUT, function (e) {
        return _this48._onInteraction(e, !1);
      }), EventHandler.on(this._element, EVENT_FOCUSIN, function (e) {
        return _this48._onInteraction(e, !0);
      }), EventHandler.on(this._element, EVENT_FOCUSOUT, function (e) {
        return _this48._onInteraction(e, !1);
      });
    }
  }, {
    key: "_clearTimeout",
    value: function _clearTimeout() {
      clearTimeout(this._timeout), this._timeout = null;
    }
  }], [{
    key: "DefaultType",
    get: function get() {
      return DefaultType;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Toast.getOrCreateInstance(this, e);

        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError("No method named \"".concat(e, "\""));
          t[e](this);
        }
      });
    }
  }]);

  return Toast;
}(BaseComponent);

exports.Toast = Toast;
enableDismissTrigger(Toast), defineJQueryPlugin(Toast);
"use strict";

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v5.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@popperjs/core')) : typeof define === 'function' && define.amd ? define(['@popperjs/core'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.bootstrap = factory(global.Popper));
})(void 0, function (Popper) {
  'use strict';

  var _KEY_TO_DIRECTION;

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);

    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function get() {
              return e[k];
            }
          });
        }
      });
    }

    n['default'] = e;
    return Object.freeze(n);
  }

  var Popper__namespace = /*#__PURE__*/_interopNamespace(Popper);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000;
  var TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  var toType = function toType(obj) {
    if (obj === null || obj === undefined) {
      return "".concat(obj);
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var getUID = function getUID(prefix) {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));

    return prefix;
  };

  var getSelector = function getSelector(element) {
    var selector = element.getAttribute('data-bs-target');

    if (!selector || selector === '#') {
      var hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273

      if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
        return null;
      } // Just in case some CMS puts out a full URL with the anchor appended


      if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
        hrefAttr = "#".concat(hrefAttr.split('#')[1]);
      }

      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
    }

    return selector;
  };

  var getSelectorFromElement = function getSelectorFromElement(element) {
    var selector = getSelector(element);

    if (selector) {
      return document.querySelector(selector) ? selector : null;
    }

    return null;
  };

  var getElementFromSelector = function getElementFromSelector(element) {
    var selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
  };

  var getTransitionDurationFromElement = function getTransitionDurationFromElement(element) {
    if (!element) {
      return 0;
    } // Get transition-duration of the element


    var _window$getComputedSt = window.getComputedStyle(element),
        transitionDuration = _window$getComputedSt.transitionDuration,
        transitionDelay = _window$getComputedSt.transitionDelay;

    var floatTransitionDuration = Number.parseFloat(transitionDuration);
    var floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    } // If multiple durations are defined, take the first


    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };

  var triggerTransitionEnd = function triggerTransitionEnd(element) {
    element.dispatchEvent(new Event(TRANSITION_END));
  };

  var isElement = function isElement(obj) {
    if (!obj || _typeof(obj) !== 'object') {
      return false;
    }

    if (typeof obj.jquery !== 'undefined') {
      obj = obj[0];
    }

    return typeof obj.nodeType !== 'undefined';
  };

  var getElement = function getElement(obj) {
    if (isElement(obj)) {
      // it's a jQuery object or a node element
      return obj.jquery ? obj[0] : obj;
    }

    if (typeof obj === 'string' && obj.length > 0) {
      return document.querySelector(obj);
    }

    return null;
  };

  var typeCheckConfig = function typeCheckConfig(componentName, config, configTypes) {
    Object.keys(configTypes).forEach(function (property) {
      var expectedTypes = configTypes[property];
      var value = config[property];
      var valueType = value && isElement(value) ? 'element' : toType(value);

      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError("".concat(componentName.toUpperCase(), ": Option \"").concat(property, "\" provided type \"").concat(valueType, "\" but expected type \"").concat(expectedTypes, "\"."));
      }
    });
  };

  var isVisible = function isVisible(element) {
    if (!isElement(element) || element.getClientRects().length === 0) {
      return false;
    }

    return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
  };

  var isDisabled = function isDisabled(element) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }

    if (element.classList.contains('disabled')) {
      return true;
    }

    if (typeof element.disabled !== 'undefined') {
      return element.disabled;
    }

    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
  };

  var findShadowRoot = function findShadowRoot(element) {
    if (!document.documentElement.attachShadow) {
      return null;
    } // Can find the shadow root otherwise it'll return the document


    if (typeof element.getRootNode === 'function') {
      var root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }

    if (element instanceof ShadowRoot) {
      return element;
    } // when we don't find a shadow root


    if (!element.parentNode) {
      return null;
    }

    return findShadowRoot(element.parentNode);
  };

  var noop = function noop() {};
  /**
   * Trick to restart an element's animation
   *
   * @param {HTMLElement} element
   * @return void
   *
   * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
   */


  var reflow = function reflow(element) {
    // eslint-disable-next-line no-unused-expressions
    element.offsetHeight;
  };

  var getjQuery = function getjQuery() {
    var _window = window,
        jQuery = _window.jQuery;

    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }

    return null;
  };

  var DOMContentLoadedCallbacks = [];

  var onDOMContentLoaded = function onDOMContentLoaded(callback) {
    if (document.readyState === 'loading') {
      // add listener on the first call when the document is in loading state
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener('DOMContentLoaded', function () {
          DOMContentLoadedCallbacks.forEach(function (callback) {
            return callback();
          });
        });
      }

      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };

  var isRTL = function isRTL() {
    return document.documentElement.dir === 'rtl';
  };

  var defineJQueryPlugin = function defineJQueryPlugin(plugin) {
    onDOMContentLoaded(function () {
      var $ = getjQuery();
      /* istanbul ignore if */

      if ($) {
        var name = plugin.NAME;
        var JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;

        $.fn[name].noConflict = function () {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };

  var execute = function execute(callback) {
    if (typeof callback === 'function') {
      callback();
    }
  };

  var executeAfterTransition = function executeAfterTransition(callback, transitionElement) {
    var waitForTransition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    if (!waitForTransition) {
      execute(callback);
      return;
    }

    var durationPadding = 5;
    var emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    var called = false;

    var handler = function handler(_ref) {
      var target = _ref.target;

      if (target !== transitionElement) {
        return;
      }

      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };

    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(function () {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };
  /**
   * Return the previous/next element of a list.
   *
   * @param {array} list    The list of elements
   * @param activeElement   The active element
   * @param shouldGetNext   Choose to get next or previous element
   * @param isCycleAllowed
   * @return {Element|elem} The proper element
   */


  var getNextActiveElement = function getNextActiveElement(list, activeElement, shouldGetNext, isCycleAllowed) {
    var index = list.indexOf(activeElement); // if the element does not exist in the list return an element depending on the direction and if cycle is allowed

    if (index === -1) {
      return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
    }

    var listLength = list.length;
    index += shouldGetNext ? 1 : -1;

    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }

    return list[Math.max(0, Math.min(index, listLength - 1))];
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  var stripNameRegex = /\..*/;
  var stripUidRegex = /::\d+$/;
  var eventRegistry = {}; // Events storage

  var uidEvent = 1;
  var customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  var customEventsRegex = /^(mouseenter|mouseleave)/i;
  var nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
  /**
   * ------------------------------------------------------------------------
   * Private methods
   * ------------------------------------------------------------------------
   */

  function getUidEvent(element, uid) {
    return uid && "".concat(uid, "::").concat(uidEvent++) || element.uidEvent || uidEvent++;
  }

  function getEvent(element) {
    var uid = getUidEvent(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }

  function bootstrapHandler(element, fn) {
    return function handler(event) {
      event.delegateTarget = element;

      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }

      return fn.apply(element, [event]);
    };
  }

  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      var domElements = element.querySelectorAll(selector);

      for (var target = event.target; target && target !== this; target = target.parentNode) {
        for (var i = domElements.length; i--;) {
          if (domElements[i] === target) {
            event.delegateTarget = target;

            if (handler.oneOff) {
              EventHandler.off(element, event.type, selector, fn);
            }

            return fn.apply(target, [event]);
          }
        }
      } // To please ESLint


      return null;
    };
  }

  function findHandler(events, handler) {
    var delegationSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var uidEventList = Object.keys(events);

    for (var i = 0, len = uidEventList.length; i < len; i++) {
      var event = events[uidEventList[i]];

      if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
        return event;
      }
    }

    return null;
  }

  function normalizeParams(originalTypeEvent, handler, delegationFn) {
    var delegation = typeof handler === 'string';
    var originalHandler = delegation ? delegationFn : handler;
    var typeEvent = getTypeEvent(originalTypeEvent);
    var isNative = nativeEvents.has(typeEvent);

    if (!isNative) {
      typeEvent = originalTypeEvent;
    }

    return [delegation, originalHandler, typeEvent];
  }

  function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    if (!handler) {
      handler = delegationFn;
      delegationFn = null;
    } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does


    if (customEventsRegex.test(originalTypeEvent)) {
      var wrapFn = function wrapFn(fn) {
        return function (event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn.call(this, event);
          }
        };
      };

      if (delegationFn) {
        delegationFn = wrapFn(delegationFn);
      } else {
        handler = wrapFn(handler);
      }
    }

    var _normalizeParams = normalizeParams(originalTypeEvent, handler, delegationFn),
        _normalizeParams2 = _slicedToArray(_normalizeParams, 3),
        delegation = _normalizeParams2[0],
        originalHandler = _normalizeParams2[1],
        typeEvent = _normalizeParams2[2];

    var events = getEvent(element);
    var handlers = events[typeEvent] || (events[typeEvent] = {});
    var previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

    if (previousFn) {
      previousFn.oneOff = previousFn.oneOff && oneOff;
      return;
    }

    var uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
    var fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
    fn.delegationSelector = delegation ? handler : null;
    fn.originalHandler = originalHandler;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, delegation);
  }

  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    var fn = findHandler(events[typeEvent], handler, delegationSelector);

    if (!fn) {
      return;
    }

    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }

  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    var storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(function (handlerKey) {
      if (handlerKey.includes(namespace)) {
        var event = storeElementEvent[handlerKey];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  }

  function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event;
  }

  var EventHandler = {
    on: function on(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, false);
    },
    one: function one(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, true);
    },
    off: function off(element, originalTypeEvent, handler, delegationFn) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }

      var _normalizeParams3 = normalizeParams(originalTypeEvent, handler, delegationFn),
          _normalizeParams4 = _slicedToArray(_normalizeParams3, 3),
          delegation = _normalizeParams4[0],
          originalHandler = _normalizeParams4[1],
          typeEvent = _normalizeParams4[2];

      var inNamespace = typeEvent !== originalTypeEvent;
      var events = getEvent(element);
      var isNamespace = originalTypeEvent.startsWith('.');

      if (typeof originalHandler !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!events || !events[typeEvent]) {
          return;
        }

        removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
        return;
      }

      if (isNamespace) {
        Object.keys(events).forEach(function (elementEvent) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        });
      }

      var storeElementEvent = events[typeEvent] || {};
      Object.keys(storeElementEvent).forEach(function (keyHandlers) {
        var handlerKey = keyHandlers.replace(stripUidRegex, '');

        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          var event = storeElementEvent[keyHandlers];
          removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
        }
      });
    },
    trigger: function trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }

      var $ = getjQuery();
      var typeEvent = getTypeEvent(event);
      var inNamespace = event !== typeEvent;
      var isNative = nativeEvents.has(typeEvent);
      var jQueryEvent;
      var bubbles = true;
      var nativeDispatch = true;
      var defaultPrevented = false;
      var evt = null;

      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }

      if (isNative) {
        evt = document.createEvent('HTMLEvents');
        evt.initEvent(typeEvent, bubbles, true);
      } else {
        evt = new CustomEvent(event, {
          bubbles: bubbles,
          cancelable: true
        });
      } // merge custom information in our event


      if (typeof args !== 'undefined') {
        Object.keys(args).forEach(function (key) {
          Object.defineProperty(evt, key, {
            get: function get() {
              return args[key];
            }
          });
        });
      }

      if (defaultPrevented) {
        evt.preventDefault();
      }

      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }

      if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
        jQueryEvent.preventDefault();
      }

      return evt;
    }
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var elementMap = new Map();
  var Data = {
    set: function set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
      }

      var instanceMap = elementMap.get(element); // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used

      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(instanceMap.keys())[0], "."));
        return;
      }

      instanceMap.set(key, instance);
    },
    get: function get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }

      return null;
    },
    remove: function remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }

      var instanceMap = elementMap.get(element);
      instanceMap["delete"](key); // free up element references if there are no instances left for an element

      if (instanceMap.size === 0) {
        elementMap["delete"](element);
      }
    }
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var VERSION = '5.1.1';

  var BaseComponent = /*#__PURE__*/function () {
    function BaseComponent(element) {
      _classCallCheck(this, BaseComponent);

      element = getElement(element);

      if (!element) {
        return;
      }

      this._element = element;
      Data.set(this._element, this.constructor.DATA_KEY, this);
    }

    _createClass(BaseComponent, [{
      key: "dispose",
      value: function dispose() {
        var _this = this;

        Data.remove(this._element, this.constructor.DATA_KEY);
        EventHandler.off(this._element, this.constructor.EVENT_KEY);
        Object.getOwnPropertyNames(this).forEach(function (propertyName) {
          _this[propertyName] = null;
        });
      }
    }, {
      key: "_queueCallback",
      value: function _queueCallback(callback, element) {
        var isAnimated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        executeAfterTransition(callback, element, isAnimated);
      }
      /** Static */

    }], [{
      key: "getInstance",
      value: function getInstance(element) {
        return Data.get(getElement(element), this.DATA_KEY);
      }
    }, {
      key: "getOrCreateInstance",
      value: function getOrCreateInstance(element) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.getInstance(element) || new this(element, _typeof(config) === 'object' ? config : null);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "NAME",
      get: function get() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.".concat(this.NAME);
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".".concat(this.DATA_KEY);
      }
    }]);

    return BaseComponent;
  }();
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): util/component-functions.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  var enableDismissTrigger = function enableDismissTrigger(component) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'hide';
    var clickEvent = "click.dismiss".concat(component.EVENT_KEY);
    var name = component.NAME;
    EventHandler.on(document, clickEvent, "[data-bs-dismiss=\"".concat(name, "\"]"), function (event) {
      if (['A', 'AREA'].includes(this.tagName)) {
        event.preventDefault();
      }

      if (isDisabled(this)) {
        return;
      }

      var target = getElementFromSelector(this) || this.closest(".".concat(name));
      var instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method

      instance[method]();
    });
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$d = 'alert';
  var DATA_KEY$c = 'bs.alert';
  var EVENT_KEY$c = ".".concat(DATA_KEY$c);
  var EVENT_CLOSE = "close".concat(EVENT_KEY$c);
  var EVENT_CLOSED = "closed".concat(EVENT_KEY$c);
  var CLASS_NAME_FADE$5 = 'fade';
  var CLASS_NAME_SHOW$8 = 'show';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = /*#__PURE__*/function (_BaseComponent) {
    _inherits(Alert, _BaseComponent);

    var _super = _createSuper(Alert);

    function Alert() {
      _classCallCheck(this, Alert);

      return _super.apply(this, arguments);
    }

    _createClass(Alert, [{
      key: "close",
      value: // Public
      function close() {
        var _this2 = this;

        var closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);

        if (closeEvent.defaultPrevented) {
          return;
        }

        this._element.classList.remove(CLASS_NAME_SHOW$8);

        var isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);

        this._queueCallback(function () {
          return _this2._destroyElement();
        }, this._element, isAnimated);
      } // Private

    }, {
      key: "_destroyElement",
      value: function _destroyElement() {
        this._element.remove();

        EventHandler.trigger(this._element, EVENT_CLOSED);
        this.dispose();
      } // Static

    }], [{
      key: "NAME",
      get: // Getters
      function get() {
        return NAME$d;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Alert.getOrCreateInstance(this);

          if (typeof config !== 'string') {
            return;
          }

          if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config](this);
        });
      }
    }]);

    return Alert;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  enableDismissTrigger(Alert, 'close');
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Alert to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Alert);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$c = 'button';
  var DATA_KEY$b = 'bs.button';
  var EVENT_KEY$b = ".".concat(DATA_KEY$b);
  var DATA_API_KEY$7 = '.data-api';
  var CLASS_NAME_ACTIVE$3 = 'active';
  var SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
  var EVENT_CLICK_DATA_API$6 = "click".concat(EVENT_KEY$b).concat(DATA_API_KEY$7);
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = /*#__PURE__*/function (_BaseComponent2) {
    _inherits(Button, _BaseComponent2);

    var _super2 = _createSuper(Button);

    function Button() {
      _classCallCheck(this, Button);

      return _super2.apply(this, arguments);
    }

    _createClass(Button, [{
      key: "toggle",
      value: // Public
      function toggle() {
        // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
        this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
      } // Static

    }], [{
      key: "NAME",
      get: // Getters
      function get() {
        return NAME$c;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Button.getOrCreateInstance(this);

          if (config === 'toggle') {
            data[config]();
          }
        });
      }
    }]);

    return Button;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, function (event) {
    event.preventDefault();
    var button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    var data = Button.getOrCreateInstance(button);
    data.toggle();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Button to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Button);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  function normalizeData(val) {
    if (val === 'true') {
      return true;
    }

    if (val === 'false') {
      return false;
    }

    if (val === Number(val).toString()) {
      return Number(val);
    }

    if (val === '' || val === 'null') {
      return null;
    }

    return val;
  }

  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, function (chr) {
      return "-".concat(chr.toLowerCase());
    });
  }

  var Manipulator = {
    setDataAttribute: function setDataAttribute(element, key, value) {
      element.setAttribute("data-bs-".concat(normalizeDataKey(key)), value);
    },
    removeDataAttribute: function removeDataAttribute(element, key) {
      element.removeAttribute("data-bs-".concat(normalizeDataKey(key)));
    },
    getDataAttributes: function getDataAttributes(element) {
      if (!element) {
        return {};
      }

      var attributes = {};
      Object.keys(element.dataset).filter(function (key) {
        return key.startsWith('bs');
      }).forEach(function (key) {
        var pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      });
      return attributes;
    },
    getDataAttribute: function getDataAttribute(element, key) {
      return normalizeData(element.getAttribute("data-bs-".concat(normalizeDataKey(key))));
    },
    offset: function offset(element) {
      var rect = element.getBoundingClientRect();
      return {
        top: rect.top + window.pageYOffset,
        left: rect.left + window.pageXOffset
      };
    },
    position: function position(element) {
      return {
        top: element.offsetTop,
        left: element.offsetLeft
      };
    }
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  var NODE_TEXT = 3;
  var SelectorEngine = {
    find: function find(selector) {
      var _ref2;

      var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(Element.prototype.querySelectorAll.call(element, selector)));
    },
    findOne: function findOne(selector) {
      var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return Element.prototype.querySelector.call(element, selector);
    },
    children: function children(element, selector) {
      var _ref3;

      return (_ref3 = []).concat.apply(_ref3, _toConsumableArray(element.children)).filter(function (child) {
        return child.matches(selector);
      });
    },
    parents: function parents(element, selector) {
      var parents = [];
      var ancestor = element.parentNode;

      while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
        if (ancestor.matches(selector)) {
          parents.push(ancestor);
        }

        ancestor = ancestor.parentNode;
      }

      return parents;
    },
    prev: function prev(element, selector) {
      var previous = element.previousElementSibling;

      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }

        previous = previous.previousElementSibling;
      }

      return [];
    },
    next: function next(element, selector) {
      var next = element.nextElementSibling;

      while (next) {
        if (next.matches(selector)) {
          return [next];
        }

        next = next.nextElementSibling;
      }

      return [];
    },
    focusableChildren: function focusableChildren(element) {
      var focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(function (selector) {
        return "".concat(selector, ":not([tabindex^=\"-\"])");
      }).join(', ');
      return this.find(focusables, element).filter(function (el) {
        return !isDisabled(el) && isVisible(el);
      });
    }
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$b = 'carousel';
  var DATA_KEY$a = 'bs.carousel';
  var EVENT_KEY$a = ".".concat(DATA_KEY$a);
  var DATA_API_KEY$6 = '.data-api';
  var ARROW_LEFT_KEY = 'ArrowLeft';
  var ARROW_RIGHT_KEY = 'ArrowRight';
  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default$a = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType$a = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var ORDER_NEXT = 'next';
  var ORDER_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var KEY_TO_DIRECTION = (_KEY_TO_DIRECTION = {}, _defineProperty(_KEY_TO_DIRECTION, ARROW_LEFT_KEY, DIRECTION_RIGHT), _defineProperty(_KEY_TO_DIRECTION, ARROW_RIGHT_KEY, DIRECTION_LEFT), _KEY_TO_DIRECTION);
  var EVENT_SLIDE = "slide".concat(EVENT_KEY$a);
  var EVENT_SLID = "slid".concat(EVENT_KEY$a);
  var EVENT_KEYDOWN = "keydown".concat(EVENT_KEY$a);
  var EVENT_MOUSEENTER = "mouseenter".concat(EVENT_KEY$a);
  var EVENT_MOUSELEAVE = "mouseleave".concat(EVENT_KEY$a);
  var EVENT_TOUCHSTART = "touchstart".concat(EVENT_KEY$a);
  var EVENT_TOUCHMOVE = "touchmove".concat(EVENT_KEY$a);
  var EVENT_TOUCHEND = "touchend".concat(EVENT_KEY$a);
  var EVENT_POINTERDOWN = "pointerdown".concat(EVENT_KEY$a);
  var EVENT_POINTERUP = "pointerup".concat(EVENT_KEY$a);
  var EVENT_DRAG_START = "dragstart".concat(EVENT_KEY$a);
  var EVENT_LOAD_DATA_API$2 = "load".concat(EVENT_KEY$a).concat(DATA_API_KEY$6);
  var EVENT_CLICK_DATA_API$5 = "click".concat(EVENT_KEY$a).concat(DATA_API_KEY$6);
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE$2 = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_END = 'carousel-item-end';
  var CLASS_NAME_START = 'carousel-item-start';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var SELECTOR_ACTIVE$1 = '.active';
  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_INDICATOR = '[data-bs-target]';
  var SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  var POINTER_TYPE_TOUCH = 'touch';
  var POINTER_TYPE_PEN = 'pen';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = /*#__PURE__*/function (_BaseComponent3) {
    _inherits(Carousel, _BaseComponent3);

    var _super3 = _createSuper(Carousel);

    function Carousel(element, config) {
      var _this3;

      _classCallCheck(this, Carousel);

      _this3 = _super3.call(this, element);
      _this3._items = null;
      _this3._interval = null;
      _this3._activeElement = null;
      _this3._isPaused = false;
      _this3._isSliding = false;
      _this3.touchTimeout = null;
      _this3.touchStartX = 0;
      _this3.touchDeltaX = 0;
      _this3._config = _this3._getConfig(config);
      _this3._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, _this3._element);
      _this3._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      _this3._pointerEvent = Boolean(window.PointerEvent);

      _this3._addEventListeners();

      return _this3;
    } // Getters


    _createClass(Carousel, [{
      key: "next",
      value: // Public
      function next() {
        this._slide(ORDER_NEXT);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible
        if (!document.hidden && isVisible(this._element)) {
          this.next();
        }
      }
    }, {
      key: "prev",
      value: function prev() {
        this._slide(ORDER_PREV);
      }
    }, {
      key: "pause",
      value: function pause(event) {
        if (!event) {
          this._isPaused = true;
        }

        if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
          triggerTransitionEnd(this._element);
          this.cycle(true);
        }

        clearInterval(this._interval);
        this._interval = null;
      }
    }, {
      key: "cycle",
      value: function cycle(event) {
        if (!event) {
          this._isPaused = false;
        }

        if (this._interval) {
          clearInterval(this._interval);
          this._interval = null;
        }

        if (this._config && this._config.interval && !this._isPaused) {
          this._updateInterval();

          this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
        }
      }
    }, {
      key: "to",
      value: function to(index) {
        var _this4 = this;

        this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

        var activeIndex = this._getItemIndex(this._activeElement);

        if (index > this._items.length - 1 || index < 0) {
          return;
        }

        if (this._isSliding) {
          EventHandler.one(this._element, EVENT_SLID, function () {
            return _this4.to(index);
          });
          return;
        }

        if (activeIndex === index) {
          this.pause();
          this.cycle();
          return;
        }

        var order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

        this._slide(order, this._items[index]);
      } // Private

    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread(_objectSpread({}, Default$a), Manipulator.getDataAttributes(this._element)), _typeof(config) === 'object' ? config : {});
        typeCheckConfig(NAME$b, config, DefaultType$a);
        return config;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var absDeltax = Math.abs(this.touchDeltaX);

        if (absDeltax <= SWIPE_THRESHOLD) {
          return;
        }

        var direction = absDeltax / this.touchDeltaX;
        this.touchDeltaX = 0;

        if (!direction) {
          return;
        }

        this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this5 = this;

        if (this._config.keyboard) {
          EventHandler.on(this._element, EVENT_KEYDOWN, function (event) {
            return _this5._keydown(event);
          });
        }

        if (this._config.pause === 'hover') {
          EventHandler.on(this._element, EVENT_MOUSEENTER, function (event) {
            return _this5.pause(event);
          });
          EventHandler.on(this._element, EVENT_MOUSELEAVE, function (event) {
            return _this5.cycle(event);
          });
        }

        if (this._config.touch && this._touchSupported) {
          this._addTouchEventListeners();
        }
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this6 = this;

        var hasPointerPenTouch = function hasPointerPenTouch(event) {
          return _this6._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
        };

        var start = function start(event) {
          if (hasPointerPenTouch(event)) {
            _this6.touchStartX = event.clientX;
          } else if (!_this6._pointerEvent) {
            _this6.touchStartX = event.touches[0].clientX;
          }
        };

        var move = function move(event) {
          // ensure swiping with one touch and not pinching
          _this6.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - _this6.touchStartX;
        };

        var end = function end(event) {
          if (hasPointerPenTouch(event)) {
            _this6.touchDeltaX = event.clientX - _this6.touchStartX;
          }

          _this6._handleSwipe();

          if (_this6._config.pause === 'hover') {
            // If it's a touch-enabled device, mouseenter/leave are fired as
            // part of the mouse compatibility events on first tap - the carousel
            // would stop cycling until user tapped out of it;
            // here, we listen for touchend, explicitly pause the carousel
            // (as if it's the second time we tap on it, mouseenter compat event
            // is NOT fired) and after a timeout (to allow for mouse compatibility
            // events to fire) we explicitly restart cycling
            _this6.pause();

            if (_this6.touchTimeout) {
              clearTimeout(_this6.touchTimeout);
            }

            _this6.touchTimeout = setTimeout(function (event) {
              return _this6.cycle(event);
            }, TOUCHEVENT_COMPAT_WAIT + _this6._config.interval);
          }
        };

        SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(function (itemImg) {
          EventHandler.on(itemImg, EVENT_DRAG_START, function (e) {
            return e.preventDefault();
          });
        });

        if (this._pointerEvent) {
          EventHandler.on(this._element, EVENT_POINTERDOWN, function (event) {
            return start(event);
          });
          EventHandler.on(this._element, EVENT_POINTERUP, function (event) {
            return end(event);
          });

          this._element.classList.add(CLASS_NAME_POINTER_EVENT);
        } else {
          EventHandler.on(this._element, EVENT_TOUCHSTART, function (event) {
            return start(event);
          });
          EventHandler.on(this._element, EVENT_TOUCHMOVE, function (event) {
            return move(event);
          });
          EventHandler.on(this._element, EVENT_TOUCHEND, function (event) {
            return end(event);
          });
        }
      }
    }, {
      key: "_keydown",
      value: function _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) {
          return;
        }

        var direction = KEY_TO_DIRECTION[event.key];

        if (direction) {
          event.preventDefault();

          this._slide(direction);
        }
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(element) {
        this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
        return this._items.indexOf(element);
      }
    }, {
      key: "_getItemByOrder",
      value: function _getItemByOrder(order, activeElement) {
        var isNext = order === ORDER_NEXT;
        return getNextActiveElement(this._items, activeElement, isNext, this._config.wrap);
      }
    }, {
      key: "_triggerSlideEvent",
      value: function _triggerSlideEvent(relatedTarget, eventDirectionName) {
        var targetIndex = this._getItemIndex(relatedTarget);

        var fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

        return EventHandler.trigger(this._element, EVENT_SLIDE, {
          relatedTarget: relatedTarget,
          direction: eventDirectionName,
          from: fromIndex,
          to: targetIndex
        });
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(element) {
        if (this._indicatorsElement) {
          var activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE$1, this._indicatorsElement);
          activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
          activeIndicator.removeAttribute('aria-current');
          var indicators = SelectorEngine.find(SELECTOR_INDICATOR, this._indicatorsElement);

          for (var i = 0; i < indicators.length; i++) {
            if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
              indicators[i].classList.add(CLASS_NAME_ACTIVE$2);
              indicators[i].setAttribute('aria-current', 'true');
              break;
            }
          }
        }
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

        if (!element) {
          return;
        }

        var elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);

        if (elementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = elementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }
      }
    }, {
      key: "_slide",
      value: function _slide(directionOrOrder, element) {
        var _this7 = this;

        var order = this._directionToOrder(directionOrOrder);

        var activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

        var activeElementIndex = this._getItemIndex(activeElement);

        var nextElement = element || this._getItemByOrder(order, activeElement);

        var nextElementIndex = this._getItemIndex(nextElement);

        var isCycling = Boolean(this._interval);
        var isNext = order === ORDER_NEXT;
        var directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
        var orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;

        var eventDirectionName = this._orderToDirection(order);

        if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$2)) {
          this._isSliding = false;
          return;
        }

        if (this._isSliding) {
          return;
        }

        var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

        if (slideEvent.defaultPrevented) {
          return;
        }

        if (!activeElement || !nextElement) {
          // Some weirdness is happening, so we bail
          return;
        }

        this._isSliding = true;

        if (isCycling) {
          this.pause();
        }

        this._setActiveIndicatorElement(nextElement);

        this._activeElement = nextElement;

        var triggerSlidEvent = function triggerSlidEvent() {
          EventHandler.trigger(_this7._element, EVENT_SLID, {
            relatedTarget: nextElement,
            direction: eventDirectionName,
            from: activeElementIndex,
            to: nextElementIndex
          });
        };

        if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
          nextElement.classList.add(orderClassName);
          reflow(nextElement);
          activeElement.classList.add(directionalClassName);
          nextElement.classList.add(directionalClassName);

          var completeCallBack = function completeCallBack() {
            nextElement.classList.remove(directionalClassName, orderClassName);
            nextElement.classList.add(CLASS_NAME_ACTIVE$2);
            activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
            _this7._isSliding = false;
            setTimeout(triggerSlidEvent, 0);
          };

          this._queueCallback(completeCallBack, activeElement, true);
        } else {
          activeElement.classList.remove(CLASS_NAME_ACTIVE$2);
          nextElement.classList.add(CLASS_NAME_ACTIVE$2);
          this._isSliding = false;
          triggerSlidEvent();
        }

        if (isCycling) {
          this.cycle();
        }
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(direction) {
        if (![DIRECTION_RIGHT, DIRECTION_LEFT].includes(direction)) {
          return direction;
        }

        if (isRTL()) {
          return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
        }

        return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(order) {
        if (![ORDER_NEXT, ORDER_PREV].includes(order)) {
          return order;
        }

        if (isRTL()) {
          return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
        }

        return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
      } // Static

    }], [{
      key: "Default",
      get: function get() {
        return Default$a;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$b;
      }
    }, {
      key: "carouselInterface",
      value: function carouselInterface(element, config) {
        var data = Carousel.getOrCreateInstance(element, config);
        var _config = data._config;

        if (_typeof(config) === 'object') {
          _config = _objectSpread(_objectSpread({}, _config), config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"".concat(action, "\""));
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          Carousel.carouselInterface(this, config);
        });
      }
    }, {
      key: "dataApiClickHandler",
      value: function dataApiClickHandler(event) {
        var target = getElementFromSelector(this);

        if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
          return;
        }

        var config = _objectSpread(_objectSpread({}, Manipulator.getDataAttributes(target)), Manipulator.getDataAttributes(this));

        var slideIndex = this.getAttribute('data-bs-slide-to');

        if (slideIndex) {
          config.interval = false;
        }

        Carousel.carouselInterface(target, config);

        if (slideIndex) {
          Carousel.getInstance(target).to(slideIndex);
        }

        event.preventDefault();
      }
    }]);

    return Carousel;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
  EventHandler.on(window, EVENT_LOAD_DATA_API$2, function () {
    var carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

    for (var i = 0, len = carousels.length; i < len; i++) {
      Carousel.carouselInterface(carousels[i], Carousel.getInstance(carousels[i]));
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Carousel to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Carousel);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$a = 'collapse';
  var DATA_KEY$9 = 'bs.collapse';
  var EVENT_KEY$9 = ".".concat(DATA_KEY$9);
  var DATA_API_KEY$5 = '.data-api';
  var Default$9 = {
    toggle: true,
    parent: null
  };
  var DefaultType$9 = {
    toggle: 'boolean',
    parent: '(null|element)'
  };
  var EVENT_SHOW$5 = "show".concat(EVENT_KEY$9);
  var EVENT_SHOWN$5 = "shown".concat(EVENT_KEY$9);
  var EVENT_HIDE$5 = "hide".concat(EVENT_KEY$9);
  var EVENT_HIDDEN$5 = "hidden".concat(EVENT_KEY$9);
  var EVENT_CLICK_DATA_API$4 = "click".concat(EVENT_KEY$9).concat(DATA_API_KEY$5);
  var CLASS_NAME_SHOW$7 = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
  var WIDTH = 'width';
  var HEIGHT = 'height';
  var SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
  var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = /*#__PURE__*/function (_BaseComponent4) {
    _inherits(Collapse, _BaseComponent4);

    var _super4 = _createSuper(Collapse);

    function Collapse(element, config) {
      var _this8;

      _classCallCheck(this, Collapse);

      _this8 = _super4.call(this, element);
      _this8._isTransitioning = false;
      _this8._config = _this8._getConfig(config);
      _this8._triggerArray = [];
      var toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = getSelectorFromElement(elem);
        var filterElement = SelectorEngine.find(selector).filter(function (foundElem) {
          return foundElem === _this8._element;
        });

        if (selector !== null && filterElement.length) {
          _this8._selector = selector;

          _this8._triggerArray.push(elem);
        }
      }

      _this8._initializeChildren();

      if (!_this8._config.parent) {
        _this8._addAriaAndCollapsedClass(_this8._triggerArray, _this8._isShown());
      }

      if (_this8._config.toggle) {
        _this8.toggle();
      }

      return _this8;
    } // Getters


    _createClass(Collapse, [{
      key: "toggle",
      value: // Public
      function toggle() {
        if (this._isShown()) {
          this.hide();
        } else {
          this.show();
        }
      }
    }, {
      key: "show",
      value: function show() {
        var _this9 = this;

        if (this._isTransitioning || this._isShown()) {
          return;
        }

        var actives = [];
        var activesData;

        if (this._config.parent) {
          var children = SelectorEngine.find(".".concat(CLASS_NAME_COLLAPSE, " .").concat(CLASS_NAME_COLLAPSE), this._config.parent);
          actives = SelectorEngine.find(SELECTOR_ACTIVES, this._config.parent).filter(function (elem) {
            return !children.includes(elem);
          }); // remove children if greater depth
        }

        var container = SelectorEngine.findOne(this._selector);

        if (actives.length) {
          var tempActiveData = actives.find(function (elem) {
            return container !== elem;
          });
          activesData = tempActiveData ? Collapse.getInstance(tempActiveData) : null;

          if (activesData && activesData._isTransitioning) {
            return;
          }
        }

        var startEvent = EventHandler.trigger(this._element, EVENT_SHOW$5);

        if (startEvent.defaultPrevented) {
          return;
        }

        actives.forEach(function (elemActive) {
          if (container !== elemActive) {
            Collapse.getOrCreateInstance(elemActive, {
              toggle: false
            }).hide();
          }

          if (!activesData) {
            Data.set(elemActive, DATA_KEY$9, null);
          }
        });

        var dimension = this._getDimension();

        this._element.classList.remove(CLASS_NAME_COLLAPSE);

        this._element.classList.add(CLASS_NAME_COLLAPSING);

        this._element.style[dimension] = 0;

        this._addAriaAndCollapsedClass(this._triggerArray, true);

        this._isTransitioning = true;

        var complete = function complete() {
          _this9._isTransitioning = false;

          _this9._element.classList.remove(CLASS_NAME_COLLAPSING);

          _this9._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

          _this9._element.style[dimension] = '';
          EventHandler.trigger(_this9._element, EVENT_SHOWN$5);
        };

        var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        var scrollSize = "scroll".concat(capitalizedDimension);

        this._queueCallback(complete, this._element, true);

        this._element.style[dimension] = "".concat(this._element[scrollSize], "px");
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this10 = this;

        if (this._isTransitioning || !this._isShown()) {
          return;
        }

        var startEvent = EventHandler.trigger(this._element, EVENT_HIDE$5);

        if (startEvent.defaultPrevented) {
          return;
        }

        var dimension = this._getDimension();

        this._element.style[dimension] = "".concat(this._element.getBoundingClientRect()[dimension], "px");
        reflow(this._element);

        this._element.classList.add(CLASS_NAME_COLLAPSING);

        this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

        var triggerArrayLength = this._triggerArray.length;

        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var elem = getElementFromSelector(trigger);

          if (elem && !this._isShown(elem)) {
            this._addAriaAndCollapsedClass([trigger], false);
          }
        }

        this._isTransitioning = true;

        var complete = function complete() {
          _this10._isTransitioning = false;

          _this10._element.classList.remove(CLASS_NAME_COLLAPSING);

          _this10._element.classList.add(CLASS_NAME_COLLAPSE);

          EventHandler.trigger(_this10._element, EVENT_HIDDEN$5);
        };

        this._element.style[dimension] = '';

        this._queueCallback(complete, this._element, true);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return element.classList.contains(CLASS_NAME_SHOW$7);
      } // Private

    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread(_objectSpread({}, Default$9), Manipulator.getDataAttributes(this._element)), config);
        config.toggle = Boolean(config.toggle); // Coerce string values

        config.parent = getElement(config.parent);
        typeCheckConfig(NAME$a, config, DefaultType$9);
        return config;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
      }
    }, {
      key: "_initializeChildren",
      value: function _initializeChildren() {
        var _this11 = this;

        if (!this._config.parent) {
          return;
        }

        var children = SelectorEngine.find(".".concat(CLASS_NAME_COLLAPSE, " .").concat(CLASS_NAME_COLLAPSE), this._config.parent);
        SelectorEngine.find(SELECTOR_DATA_TOGGLE$4, this._config.parent).filter(function (elem) {
          return !children.includes(elem);
        }).forEach(function (element) {
          var selected = getElementFromSelector(element);

          if (selected) {
            _this11._addAriaAndCollapsedClass([element], _this11._isShown(selected));
          }
        });
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(triggerArray, isOpen) {
        if (!triggerArray.length) {
          return;
        }

        triggerArray.forEach(function (elem) {
          if (isOpen) {
            elem.classList.remove(CLASS_NAME_COLLAPSED);
          } else {
            elem.classList.add(CLASS_NAME_COLLAPSED);
          }

          elem.setAttribute('aria-expanded', isOpen);
        });
      } // Static

    }], [{
      key: "Default",
      get: function get() {
        return Default$9;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$a;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var _config = {};

          if (typeof config === 'string' && /show|hide/.test(config)) {
            _config.toggle = false;
          }

          var data = Collapse.getOrCreateInstance(this, _config);

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config]();
          }
        });
      }
    }]);

    return Collapse;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
      event.preventDefault();
    }

    var selector = getSelectorFromElement(this);
    var selectorElements = SelectorEngine.find(selector);
    selectorElements.forEach(function (element) {
      Collapse.getOrCreateInstance(element, {
        toggle: false
      }).toggle();
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Collapse to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Collapse);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$9 = 'dropdown';
  var DATA_KEY$8 = 'bs.dropdown';
  var EVENT_KEY$8 = ".".concat(DATA_KEY$8);
  var DATA_API_KEY$4 = '.data-api';
  var ESCAPE_KEY$2 = 'Escape';
  var SPACE_KEY = 'Space';
  var TAB_KEY$1 = 'Tab';
  var ARROW_UP_KEY = 'ArrowUp';
  var ARROW_DOWN_KEY = 'ArrowDown';
  var RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

  var REGEXP_KEYDOWN = new RegExp("".concat(ARROW_UP_KEY, "|").concat(ARROW_DOWN_KEY, "|").concat(ESCAPE_KEY$2));
  var EVENT_HIDE$4 = "hide".concat(EVENT_KEY$8);
  var EVENT_HIDDEN$4 = "hidden".concat(EVENT_KEY$8);
  var EVENT_SHOW$4 = "show".concat(EVENT_KEY$8);
  var EVENT_SHOWN$4 = "shown".concat(EVENT_KEY$8);
  var EVENT_CLICK_DATA_API$3 = "click".concat(EVENT_KEY$8).concat(DATA_API_KEY$4);
  var EVENT_KEYDOWN_DATA_API = "keydown".concat(EVENT_KEY$8).concat(DATA_API_KEY$4);
  var EVENT_KEYUP_DATA_API = "keyup".concat(EVENT_KEY$8).concat(DATA_API_KEY$4);
  var CLASS_NAME_SHOW$6 = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPEND = 'dropend';
  var CLASS_NAME_DROPSTART = 'dropstart';
  var CLASS_NAME_NAVBAR = 'navbar';
  var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
  var PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
  var PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
  var PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
  var PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
  var PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
  var Default$8 = {
    offset: [0, 2],
    boundary: 'clippingParents',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null,
    autoClose: true
  };
  var DefaultType$8 = {
    offset: '(array|string|function)',
    boundary: '(string|element)',
    reference: '(string|element|object)',
    display: 'string',
    popperConfig: '(null|object|function)',
    autoClose: '(boolean|string)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = /*#__PURE__*/function (_BaseComponent5) {
    _inherits(Dropdown, _BaseComponent5);

    var _super5 = _createSuper(Dropdown);

    function Dropdown(element, config) {
      var _this12;

      _classCallCheck(this, Dropdown);

      _this12 = _super5.call(this, element);
      _this12._popper = null;
      _this12._config = _this12._getConfig(config);
      _this12._menu = _this12._getMenuElement();
      _this12._inNavbar = _this12._detectNavbar();
      return _this12;
    } // Getters


    _createClass(Dropdown, [{
      key: "toggle",
      value: // Public
      function toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        if (isDisabled(this._element) || this._isShown(this._menu)) {
          return;
        }

        var relatedTarget = {
          relatedTarget: this._element
        };
        var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, relatedTarget);

        if (showEvent.defaultPrevented) {
          return;
        }

        var parent = Dropdown.getParentFromElement(this._element); // Totally disable Popper for Dropdowns in Navbar

        if (this._inNavbar) {
          Manipulator.setDataAttribute(this._menu, 'popper', 'none');
        } else {
          this._createPopper(parent);
        } // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


        if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
          var _ref4;

          (_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children)).forEach(function (elem) {
            return EventHandler.on(elem, 'mouseover', noop);
          });
        }

        this._element.focus();

        this._element.setAttribute('aria-expanded', true);

        this._menu.classList.add(CLASS_NAME_SHOW$6);

        this._element.classList.add(CLASS_NAME_SHOW$6);

        EventHandler.trigger(this._element, EVENT_SHOWN$4, relatedTarget);
      }
    }, {
      key: "hide",
      value: function hide() {
        if (isDisabled(this._element) || !this._isShown(this._menu)) {
          return;
        }

        var relatedTarget = {
          relatedTarget: this._element
        };

        this._completeHide(relatedTarget);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        if (this._popper) {
          this._popper.destroy();
        }

        _get(_getPrototypeOf(Dropdown.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar();

        if (this._popper) {
          this._popper.update();
        }
      } // Private

    }, {
      key: "_completeHide",
      value: function _completeHide(relatedTarget) {
        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4, relatedTarget);

        if (hideEvent.defaultPrevented) {
          return;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          var _ref5;

          (_ref5 = []).concat.apply(_ref5, _toConsumableArray(document.body.children)).forEach(function (elem) {
            return EventHandler.off(elem, 'mouseover', noop);
          });
        }

        if (this._popper) {
          this._popper.destroy();
        }

        this._menu.classList.remove(CLASS_NAME_SHOW$6);

        this._element.classList.remove(CLASS_NAME_SHOW$6);

        this._element.setAttribute('aria-expanded', 'false');

        Manipulator.removeDataAttribute(this._menu, 'popper');
        EventHandler.trigger(this._element, EVENT_HIDDEN$4, relatedTarget);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), Manipulator.getDataAttributes(this._element)), config);
        typeCheckConfig(NAME$9, config, this.constructor.DefaultType);

        if (_typeof(config.reference) === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
          // Popper virtual elements require a getBoundingClientRect method
          throw new TypeError("".concat(NAME$9.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
        }

        return config;
      }
    }, {
      key: "_createPopper",
      value: function _createPopper(parent) {
        if (typeof Popper__namespace === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (isElement(this._config.reference)) {
          referenceElement = getElement(this._config.reference);
        } else if (_typeof(this._config.reference) === 'object') {
          referenceElement = this._config.reference;
        }

        var popperConfig = this._getPopperConfig();

        var isDisplayStatic = popperConfig.modifiers.find(function (modifier) {
          return modifier.name === 'applyStyles' && modifier.enabled === false;
        });
        this._popper = Popper__namespace.createPopper(referenceElement, this._menu, popperConfig);

        if (isDisplayStatic) {
          Manipulator.setDataAttribute(this._menu, 'popper', 'static');
        }
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return element.classList.contains(CLASS_NAME_SHOW$6);
      }
    }, {
      key: "_getMenuElement",
      value: function _getMenuElement() {
        return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var parentDropdown = this._element.parentNode;

        if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
          return PLACEMENT_RIGHT;
        }

        if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
          return PLACEMENT_LEFT;
        } // We need to trim the value because custom properties can also include spaces


        var isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

        if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
          return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
        }

        return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return this._element.closest(".".concat(CLASS_NAME_NAVBAR)) !== null;
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this13 = this;

        var offset = this._config.offset;

        if (typeof offset === 'string') {
          return offset.split(',').map(function (val) {
            return Number.parseInt(val, 10);
          });
        }

        if (typeof offset === 'function') {
          return function (popperData) {
            return offset(popperData, _this13._element);
          };
        }

        return offset;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var defaultBsPopperConfig = {
          placement: this._getPlacement(),
          modifiers: [{
            name: 'preventOverflow',
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: 'offset',
            options: {
              offset: this._getOffset()
            }
          }]
        }; // Disable Popper if we have a static display

        if (this._config.display === 'static') {
          defaultBsPopperConfig.modifiers = [{
            name: 'applyStyles',
            enabled: false
          }];
        }

        return _objectSpread(_objectSpread({}, defaultBsPopperConfig), typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig);
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(_ref6) {
        var key = _ref6.key,
            target = _ref6.target;
        var items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(isVisible);

        if (!items.length) {
          return;
        } // if target isn't included in items (e.g. when expanding the dropdown)
        // allow cycling to get the last item in case key equals ARROW_UP_KEY


        getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
      } // Static

    }], [{
      key: "Default",
      get: function get() {
        return Default$8;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$8;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$9;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Dropdown.getOrCreateInstance(this, config);

          if (typeof config !== 'string') {
            return;
          }

          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config]();
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(event) {
        if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1)) {
          return;
        }

        var toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);

        for (var i = 0, len = toggles.length; i < len; i++) {
          var context = Dropdown.getInstance(toggles[i]);

          if (!context || context._config.autoClose === false) {
            continue;
          }

          if (!context._isShown()) {
            continue;
          }

          var relatedTarget = {
            relatedTarget: context._element
          };

          if (event) {
            var composedPath = event.composedPath();
            var isMenuTarget = composedPath.includes(context._menu);

            if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
              continue;
            } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


            if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
              continue;
            }

            if (event.type === 'click') {
              relatedTarget.clickEvent = event;
            }
          }

          context._completeHide(relatedTarget);
        }
      }
    }, {
      key: "getParentFromElement",
      value: function getParentFromElement(element) {
        return getElementFromSelector(element) || element.parentNode;
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(event) {
        // If not input/textarea:
        //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
        // If input/textarea:
        //  - If space key => not a dropdown command
        //  - If key is other than escape
        //    - If key is not up or down => not a dropdown command
        //    - If trigger inside the menu => not a dropdown command
        if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY$2 && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) {
          return;
        }

        var isActive = this.classList.contains(CLASS_NAME_SHOW$6);

        if (!isActive && event.key === ESCAPE_KEY$2) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();

        if (isDisabled(this)) {
          return;
        }

        var getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0];
        var instance = Dropdown.getOrCreateInstance(getToggleButton);

        if (event.key === ESCAPE_KEY$2) {
          instance.hide();
          return;
        }

        if (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY) {
          if (!isActive) {
            instance.show();
          }

          instance._selectMenuItem(event);

          return;
        }

        if (!isActive || event.key === SPACE_KEY) {
          Dropdown.clearMenus();
        }
      }
    }]);

    return Dropdown;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Dropdown to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Dropdown);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';

  var ScrollBarHelper = /*#__PURE__*/function () {
    function ScrollBarHelper() {
      _classCallCheck(this, ScrollBarHelper);

      this._element = document.body;
    }

    _createClass(ScrollBarHelper, [{
      key: "getWidth",
      value: function getWidth() {
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
        var documentWidth = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - documentWidth);
      }
    }, {
      key: "hide",
      value: function hide() {
        var width = this.getWidth();

        this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width


        this._setElementAttributes(this._element, 'paddingRight', function (calculatedValue) {
          return calculatedValue + width;
        }); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth


        this._setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', function (calculatedValue) {
          return calculatedValue + width;
        });

        this._setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', function (calculatedValue) {
          return calculatedValue - width;
        });
      }
    }, {
      key: "_disableOverFlow",
      value: function _disableOverFlow() {
        this._saveInitialAttribute(this._element, 'overflow');

        this._element.style.overflow = 'hidden';
      }
    }, {
      key: "_setElementAttributes",
      value: function _setElementAttributes(selector, styleProp, callback) {
        var _this14 = this;

        var scrollbarWidth = this.getWidth();

        var manipulationCallBack = function manipulationCallBack(element) {
          if (element !== _this14._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
            return;
          }

          _this14._saveInitialAttribute(element, styleProp);

          var calculatedValue = window.getComputedStyle(element)[styleProp];
          element.style[styleProp] = "".concat(callback(Number.parseFloat(calculatedValue)), "px");
        };

        this._applyManipulationCallback(selector, manipulationCallBack);
      }
    }, {
      key: "reset",
      value: function reset() {
        this._resetElementAttributes(this._element, 'overflow');

        this._resetElementAttributes(this._element, 'paddingRight');

        this._resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');

        this._resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');
      }
    }, {
      key: "_saveInitialAttribute",
      value: function _saveInitialAttribute(element, styleProp) {
        var actualValue = element.style[styleProp];

        if (actualValue) {
          Manipulator.setDataAttribute(element, styleProp, actualValue);
        }
      }
    }, {
      key: "_resetElementAttributes",
      value: function _resetElementAttributes(selector, styleProp) {
        var manipulationCallBack = function manipulationCallBack(element) {
          var value = Manipulator.getDataAttribute(element, styleProp);

          if (typeof value === 'undefined') {
            element.style.removeProperty(styleProp);
          } else {
            Manipulator.removeDataAttribute(element, styleProp);
            element.style[styleProp] = value;
          }
        };

        this._applyManipulationCallback(selector, manipulationCallBack);
      }
    }, {
      key: "_applyManipulationCallback",
      value: function _applyManipulationCallback(selector, callBack) {
        if (isElement(selector)) {
          callBack(selector);
        } else {
          SelectorEngine.find(selector, this._element).forEach(callBack);
        }
      }
    }, {
      key: "isOverflowing",
      value: function isOverflowing() {
        return this.getWidth() > 0;
      }
    }]);

    return ScrollBarHelper;
  }();
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */


  var Default$7 = {
    className: 'modal-backdrop',
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    isAnimated: false,
    rootElement: 'body',
    // give the choice to place backdrop under different elements
    clickCallback: null
  };
  var DefaultType$7 = {
    className: 'string',
    isVisible: 'boolean',
    isAnimated: 'boolean',
    rootElement: '(element|string)',
    clickCallback: '(function|null)'
  };
  var NAME$8 = 'backdrop';
  var CLASS_NAME_FADE$4 = 'fade';
  var CLASS_NAME_SHOW$5 = 'show';
  var EVENT_MOUSEDOWN = "mousedown.bs.".concat(NAME$8);

  var Backdrop = /*#__PURE__*/function () {
    function Backdrop(config) {
      _classCallCheck(this, Backdrop);

      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }

    _createClass(Backdrop, [{
      key: "show",
      value: function show(callback) {
        if (!this._config.isVisible) {
          execute(callback);
          return;
        }

        this._append();

        if (this._config.isAnimated) {
          reflow(this._getElement());
        }

        this._getElement().classList.add(CLASS_NAME_SHOW$5);

        this._emulateAnimation(function () {
          execute(callback);
        });
      }
    }, {
      key: "hide",
      value: function hide(callback) {
        var _this15 = this;

        if (!this._config.isVisible) {
          execute(callback);
          return;
        }

        this._getElement().classList.remove(CLASS_NAME_SHOW$5);

        this._emulateAnimation(function () {
          _this15.dispose();

          execute(callback);
        });
      } // Private

    }, {
      key: "_getElement",
      value: function _getElement() {
        if (!this._element) {
          var backdrop = document.createElement('div');
          backdrop.className = this._config.className;

          if (this._config.isAnimated) {
            backdrop.classList.add(CLASS_NAME_FADE$4);
          }

          this._element = backdrop;
        }

        return this._element;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread({}, Default$7), _typeof(config) === 'object' ? config : {}); // use getElement() with the default "body" to get a fresh Element on each instantiation

        config.rootElement = getElement(config.rootElement);
        typeCheckConfig(NAME$8, config, DefaultType$7);
        return config;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this16 = this;

        if (this._isAppended) {
          return;
        }

        this._config.rootElement.append(this._getElement());

        EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, function () {
          execute(_this16._config.clickCallback);
        });
        this._isAppended = true;
      }
    }, {
      key: "dispose",
      value: function dispose() {
        if (!this._isAppended) {
          return;
        }

        EventHandler.off(this._element, EVENT_MOUSEDOWN);

        this._element.remove();

        this._isAppended = false;
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(callback) {
        executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
      }
    }]);

    return Backdrop;
  }();
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): util/focustrap.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */


  var Default$6 = {
    trapElement: null,
    // The element to trap focus inside of
    autofocus: true
  };
  var DefaultType$6 = {
    trapElement: 'element',
    autofocus: 'boolean'
  };
  var NAME$7 = 'focustrap';
  var DATA_KEY$7 = 'bs.focustrap';
  var EVENT_KEY$7 = ".".concat(DATA_KEY$7);
  var EVENT_FOCUSIN$1 = "focusin".concat(EVENT_KEY$7);
  var EVENT_KEYDOWN_TAB = "keydown.tab".concat(EVENT_KEY$7);
  var TAB_KEY = 'Tab';
  var TAB_NAV_FORWARD = 'forward';
  var TAB_NAV_BACKWARD = 'backward';

  var FocusTrap = /*#__PURE__*/function () {
    function FocusTrap(config) {
      _classCallCheck(this, FocusTrap);

      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }

    _createClass(FocusTrap, [{
      key: "activate",
      value: function activate() {
        var _this17 = this;

        var _this$_config = this._config,
            trapElement = _this$_config.trapElement,
            autofocus = _this$_config.autofocus;

        if (this._isActive) {
          return;
        }

        if (autofocus) {
          trapElement.focus();
        }

        EventHandler.off(document, EVENT_KEY$7); // guard against infinite focus loop

        EventHandler.on(document, EVENT_FOCUSIN$1, function (event) {
          return _this17._handleFocusin(event);
        });
        EventHandler.on(document, EVENT_KEYDOWN_TAB, function (event) {
          return _this17._handleKeydown(event);
        });
        this._isActive = true;
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        if (!this._isActive) {
          return;
        }

        this._isActive = false;
        EventHandler.off(document, EVENT_KEY$7);
      } // Private

    }, {
      key: "_handleFocusin",
      value: function _handleFocusin(event) {
        var target = event.target;
        var trapElement = this._config.trapElement;

        if (target === document || target === trapElement || trapElement.contains(target)) {
          return;
        }

        var elements = SelectorEngine.focusableChildren(trapElement);

        if (elements.length === 0) {
          trapElement.focus();
        } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
          elements[elements.length - 1].focus();
        } else {
          elements[0].focus();
        }
      }
    }, {
      key: "_handleKeydown",
      value: function _handleKeydown(event) {
        if (event.key !== TAB_KEY) {
          return;
        }

        this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread({}, Default$6), _typeof(config) === 'object' ? config : {});
        typeCheckConfig(NAME$7, config, DefaultType$6);
        return config;
      }
    }]);

    return FocusTrap;
  }();
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$6 = 'modal';
  var DATA_KEY$6 = 'bs.modal';
  var EVENT_KEY$6 = ".".concat(DATA_KEY$6);
  var DATA_API_KEY$3 = '.data-api';
  var ESCAPE_KEY$1 = 'Escape';
  var Default$5 = {
    backdrop: true,
    keyboard: true,
    focus: true
  };
  var DefaultType$5 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean'
  };
  var EVENT_HIDE$3 = "hide".concat(EVENT_KEY$6);
  var EVENT_HIDE_PREVENTED = "hidePrevented".concat(EVENT_KEY$6);
  var EVENT_HIDDEN$3 = "hidden".concat(EVENT_KEY$6);
  var EVENT_SHOW$3 = "show".concat(EVENT_KEY$6);
  var EVENT_SHOWN$3 = "shown".concat(EVENT_KEY$6);
  var EVENT_RESIZE = "resize".concat(EVENT_KEY$6);
  var EVENT_CLICK_DISMISS = "click.dismiss".concat(EVENT_KEY$6);
  var EVENT_KEYDOWN_DISMISS$1 = "keydown.dismiss".concat(EVENT_KEY$6);
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss".concat(EVENT_KEY$6);
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss".concat(EVENT_KEY$6);
  var EVENT_CLICK_DATA_API$2 = "click".concat(EVENT_KEY$6).concat(DATA_API_KEY$3);
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE$3 = 'fade';
  var CLASS_NAME_SHOW$4 = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var OPEN_SELECTOR$1 = '.modal.show';
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = /*#__PURE__*/function (_BaseComponent6) {
    _inherits(Modal, _BaseComponent6);

    var _super6 = _createSuper(Modal);

    function Modal(element, config) {
      var _this18;

      _classCallCheck(this, Modal);

      _this18 = _super6.call(this, element);
      _this18._config = _this18._getConfig(config);
      _this18._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, _this18._element);
      _this18._backdrop = _this18._initializeBackDrop();
      _this18._focustrap = _this18._initializeFocusTrap();
      _this18._isShown = false;
      _this18._ignoreBackdropClick = false;
      _this18._isTransitioning = false;
      _this18._scrollBar = new ScrollBarHelper();
      return _this18;
    } // Getters


    _createClass(Modal, [{
      key: "toggle",
      value: // Public
      function toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      }
    }, {
      key: "show",
      value: function show(relatedTarget) {
        var _this19 = this;

        if (this._isShown || this._isTransitioning) {
          return;
        }

        var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
          relatedTarget: relatedTarget
        });

        if (showEvent.defaultPrevented) {
          return;
        }

        this._isShown = true;

        if (this._isAnimated()) {
          this._isTransitioning = true;
        }

        this._scrollBar.hide();

        document.body.classList.add(CLASS_NAME_OPEN);

        this._adjustDialog();

        this._setEscapeEvent();

        this._setResizeEvent();

        EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, function () {
          EventHandler.one(_this19._element, EVENT_MOUSEUP_DISMISS, function (event) {
            if (event.target === _this19._element) {
              _this19._ignoreBackdropClick = true;
            }
          });
        });

        this._showBackdrop(function () {
          return _this19._showElement(relatedTarget);
        });
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this20 = this;

        if (!this._isShown || this._isTransitioning) {
          return;
        }

        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);

        if (hideEvent.defaultPrevented) {
          return;
        }

        this._isShown = false;

        var isAnimated = this._isAnimated();

        if (isAnimated) {
          this._isTransitioning = true;
        }

        this._setEscapeEvent();

        this._setResizeEvent();

        this._focustrap.deactivate();

        this._element.classList.remove(CLASS_NAME_SHOW$4);

        EventHandler.off(this._element, EVENT_CLICK_DISMISS);
        EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);

        this._queueCallback(function () {
          return _this20._hideModal();
        }, this._element, isAnimated);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        [window, this._dialog].forEach(function (htmlElement) {
          return EventHandler.off(htmlElement, EVENT_KEY$6);
        });

        this._backdrop.dispose();

        this._focustrap.deactivate();

        _get(_getPrototypeOf(Modal.prototype), "dispose", this).call(this);
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      } // Private

    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new Backdrop({
          isVisible: Boolean(this._config.backdrop),
          // 'static' option will be translated to true, and booleans will keep their value
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new FocusTrap({
          trapElement: this._element
        });
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread(_objectSpread({}, Default$5), Manipulator.getDataAttributes(this._element)), _typeof(config) === 'object' ? config : {});
        typeCheckConfig(NAME$6, config, DefaultType$5);
        return config;
      }
    }, {
      key: "_showElement",
      value: function _showElement(relatedTarget) {
        var _this21 = this;

        var isAnimated = this._isAnimated();

        var modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
          // Don't move modal's DOM position
          document.body.append(this._element);
        }

        this._element.style.display = 'block';

        this._element.removeAttribute('aria-hidden');

        this._element.setAttribute('aria-modal', true);

        this._element.setAttribute('role', 'dialog');

        this._element.scrollTop = 0;

        if (modalBody) {
          modalBody.scrollTop = 0;
        }

        if (isAnimated) {
          reflow(this._element);
        }

        this._element.classList.add(CLASS_NAME_SHOW$4);

        var transitionComplete = function transitionComplete() {
          if (_this21._config.focus) {
            _this21._focustrap.activate();
          }

          _this21._isTransitioning = false;
          EventHandler.trigger(_this21._element, EVENT_SHOWN$3, {
            relatedTarget: relatedTarget
          });
        };

        this._queueCallback(transitionComplete, this._dialog, isAnimated);
      }
    }, {
      key: "_setEscapeEvent",
      value: function _setEscapeEvent() {
        var _this22 = this;

        if (this._isShown) {
          EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, function (event) {
            if (_this22._config.keyboard && event.key === ESCAPE_KEY$1) {
              event.preventDefault();

              _this22.hide();
            } else if (!_this22._config.keyboard && event.key === ESCAPE_KEY$1) {
              _this22._triggerBackdropTransition();
            }
          });
        } else {
          EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS$1);
        }
      }
    }, {
      key: "_setResizeEvent",
      value: function _setResizeEvent() {
        var _this23 = this;

        if (this._isShown) {
          EventHandler.on(window, EVENT_RESIZE, function () {
            return _this23._adjustDialog();
          });
        } else {
          EventHandler.off(window, EVENT_RESIZE);
        }
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this24 = this;

        this._element.style.display = 'none';

        this._element.setAttribute('aria-hidden', true);

        this._element.removeAttribute('aria-modal');

        this._element.removeAttribute('role');

        this._isTransitioning = false;

        this._backdrop.hide(function () {
          document.body.classList.remove(CLASS_NAME_OPEN);

          _this24._resetAdjustments();

          _this24._scrollBar.reset();

          EventHandler.trigger(_this24._element, EVENT_HIDDEN$3);
        });
      }
    }, {
      key: "_showBackdrop",
      value: function _showBackdrop(callback) {
        var _this25 = this;

        EventHandler.on(this._element, EVENT_CLICK_DISMISS, function (event) {
          if (_this25._ignoreBackdropClick) {
            _this25._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (_this25._config.backdrop === true) {
            _this25.hide();
          } else if (_this25._config.backdrop === 'static') {
            _this25._triggerBackdropTransition();
          }
        });

        this._backdrop.show(callback);
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains(CLASS_NAME_FADE$3);
      }
    }, {
      key: "_triggerBackdropTransition",
      value: function _triggerBackdropTransition() {
        var _this26 = this;

        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);

        if (hideEvent.defaultPrevented) {
          return;
        }

        var _this$_element = this._element,
            classList = _this$_element.classList,
            scrollHeight = _this$_element.scrollHeight,
            style = _this$_element.style;
        var isModalOverflowing = scrollHeight > document.documentElement.clientHeight; // return if the following background transition hasn't yet completed

        if (!isModalOverflowing && style.overflowY === 'hidden' || classList.contains(CLASS_NAME_STATIC)) {
          return;
        }

        if (!isModalOverflowing) {
          style.overflowY = 'hidden';
        }

        classList.add(CLASS_NAME_STATIC);

        this._queueCallback(function () {
          classList.remove(CLASS_NAME_STATIC);

          if (!isModalOverflowing) {
            _this26._queueCallback(function () {
              style.overflowY = '';
            }, _this26._dialog);
          }
        }, this._dialog);

        this._element.focus();
      } // ----------------------------------------------------------------------
      // the following methods are used to handle overflowing modals
      // ----------------------------------------------------------------------

    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

        var scrollbarWidth = this._scrollBar.getWidth();

        var isBodyOverflowing = scrollbarWidth > 0;

        if (!isBodyOverflowing && isModalOverflowing && !isRTL() || isBodyOverflowing && !isModalOverflowing && isRTL()) {
          this._element.style.paddingLeft = "".concat(scrollbarWidth, "px");
        }

        if (isBodyOverflowing && !isModalOverflowing && !isRTL() || !isBodyOverflowing && isModalOverflowing && isRTL()) {
          this._element.style.paddingRight = "".concat(scrollbarWidth, "px");
        }
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = '';
        this._element.style.paddingRight = '';
      } // Static

    }], [{
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config, relatedTarget) {
        return this.each(function () {
          var data = Modal.getOrCreateInstance(this, config);

          if (typeof config !== 'string') {
            return;
          }

          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config](relatedTarget);
        });
      }
    }]);

    return Modal;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
    var _this27 = this;

    var target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    EventHandler.one(target, EVENT_SHOW$3, function (showEvent) {
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return;
      }

      EventHandler.one(target, EVENT_HIDDEN$3, function () {
        if (isVisible(_this27)) {
          _this27.focus();
        }
      });
    }); // avoid conflict when clicking moddal toggler while another one is open

    var allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);

    if (allReadyOpen) {
      Modal.getInstance(allReadyOpen).hide();
    }

    var data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  enableDismissTrigger(Modal);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Modal to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Modal);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): offcanvas.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$5 = 'offcanvas';
  var DATA_KEY$5 = 'bs.offcanvas';
  var EVENT_KEY$5 = ".".concat(DATA_KEY$5);
  var DATA_API_KEY$2 = '.data-api';
  var EVENT_LOAD_DATA_API$1 = "load".concat(EVENT_KEY$5).concat(DATA_API_KEY$2);
  var ESCAPE_KEY = 'Escape';
  var Default$4 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  var DefaultType$4 = {
    backdrop: 'boolean',
    keyboard: 'boolean',
    scroll: 'boolean'
  };
  var CLASS_NAME_SHOW$3 = 'show';
  var CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
  var OPEN_SELECTOR = '.offcanvas.show';
  var EVENT_SHOW$2 = "show".concat(EVENT_KEY$5);
  var EVENT_SHOWN$2 = "shown".concat(EVENT_KEY$5);
  var EVENT_HIDE$2 = "hide".concat(EVENT_KEY$5);
  var EVENT_HIDDEN$2 = "hidden".concat(EVENT_KEY$5);
  var EVENT_CLICK_DATA_API$1 = "click".concat(EVENT_KEY$5).concat(DATA_API_KEY$2);
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss".concat(EVENT_KEY$5);
  var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Offcanvas = /*#__PURE__*/function (_BaseComponent7) {
    _inherits(Offcanvas, _BaseComponent7);

    var _super7 = _createSuper(Offcanvas);

    function Offcanvas(element, config) {
      var _this28;

      _classCallCheck(this, Offcanvas);

      _this28 = _super7.call(this, element);
      _this28._config = _this28._getConfig(config);
      _this28._isShown = false;
      _this28._backdrop = _this28._initializeBackDrop();
      _this28._focustrap = _this28._initializeFocusTrap();

      _this28._addEventListeners();

      return _this28;
    } // Getters


    _createClass(Offcanvas, [{
      key: "toggle",
      value: // Public
      function toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      }
    }, {
      key: "show",
      value: function show(relatedTarget) {
        var _this29 = this;

        if (this._isShown) {
          return;
        }

        var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
          relatedTarget: relatedTarget
        });

        if (showEvent.defaultPrevented) {
          return;
        }

        this._isShown = true;
        this._element.style.visibility = 'visible';

        this._backdrop.show();

        if (!this._config.scroll) {
          new ScrollBarHelper().hide();
        }

        this._element.removeAttribute('aria-hidden');

        this._element.setAttribute('aria-modal', true);

        this._element.setAttribute('role', 'dialog');

        this._element.classList.add(CLASS_NAME_SHOW$3);

        var completeCallBack = function completeCallBack() {
          if (!_this29._config.scroll) {
            _this29._focustrap.activate();
          }

          EventHandler.trigger(_this29._element, EVENT_SHOWN$2, {
            relatedTarget: relatedTarget
          });
        };

        this._queueCallback(completeCallBack, this._element, true);
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this30 = this;

        if (!this._isShown) {
          return;
        }

        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);

        if (hideEvent.defaultPrevented) {
          return;
        }

        this._focustrap.deactivate();

        this._element.blur();

        this._isShown = false;

        this._element.classList.remove(CLASS_NAME_SHOW$3);

        this._backdrop.hide();

        var completeCallback = function completeCallback() {
          _this30._element.setAttribute('aria-hidden', true);

          _this30._element.removeAttribute('aria-modal');

          _this30._element.removeAttribute('role');

          _this30._element.style.visibility = 'hidden';

          if (!_this30._config.scroll) {
            new ScrollBarHelper().reset();
          }

          EventHandler.trigger(_this30._element, EVENT_HIDDEN$2);
        };

        this._queueCallback(completeCallback, this._element, true);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose();

        this._focustrap.deactivate();

        _get(_getPrototypeOf(Offcanvas.prototype), "dispose", this).call(this);
      } // Private

    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread(_objectSpread({}, Default$4), Manipulator.getDataAttributes(this._element)), _typeof(config) === 'object' ? config : {});
        typeCheckConfig(NAME$5, config, DefaultType$4);
        return config;
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this31 = this;

        return new Backdrop({
          className: CLASS_NAME_BACKDROP,
          isVisible: this._config.backdrop,
          isAnimated: true,
          rootElement: this._element.parentNode,
          clickCallback: function clickCallback() {
            return _this31.hide();
          }
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new FocusTrap({
          trapElement: this._element
        });
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this32 = this;

        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, function (event) {
          if (_this32._config.keyboard && event.key === ESCAPE_KEY) {
            _this32.hide();
          }
        });
      } // Static

    }], [{
      key: "NAME",
      get: function get() {
        return NAME$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Offcanvas.getOrCreateInstance(this, config);

          if (typeof config !== 'string') {
            return;
          }

          if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config](this);
        });
      }
    }]);

    return Offcanvas;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
    var _this33 = this;

    var target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (isDisabled(this)) {
      return;
    }

    EventHandler.one(target, EVENT_HIDDEN$2, function () {
      // focus on trigger when it is closed
      if (isVisible(_this33)) {
        _this33.focus();
      }
    }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

    var allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);

    if (allReadyOpen && allReadyOpen !== target) {
      Offcanvas.getInstance(allReadyOpen).hide();
    }

    var data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$1, function () {
    return SelectorEngine.find(OPEN_SELECTOR).forEach(function (el) {
      return Offcanvas.getOrCreateInstance(el).show();
    });
  });
  enableDismissTrigger(Offcanvas);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  defineJQueryPlugin(Offcanvas);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  var uriAttrs = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  var allowedAttribute = function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.includes(attrName)) {
      if (uriAttrs.has(attrName)) {
        return Boolean(SAFE_URL_PATTERN.test(attr.nodeValue) || DATA_URL_PATTERN.test(attr.nodeValue));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, len = regExp.length; i < len; i++) {
      if (regExp[i].test(attrName)) {
        return true;
      }
    }

    return false;
  };

  var DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };

  function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
    var _ref7;

    if (!unsafeHtml.length) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var allowlistKeys = Object.keys(allowList);

    var elements = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(createdDocument.body.querySelectorAll('*')));

    var _loop = function _loop(i, len) {
      var _ref8;

      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (!allowlistKeys.includes(elName)) {
        el.remove();
        return "continue";
      }

      var attributeList = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(el.attributes));

      var allowedAttributes = [].concat(allowList['*'] || [], allowList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, allowedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i, len);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$4 = 'tooltip';
  var DATA_KEY$4 = 'bs.tooltip';
  var EVENT_KEY$4 = ".".concat(DATA_KEY$4);
  var CLASS_PREFIX$1 = 'bs-tooltip';
  var DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
  var DefaultType$3 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(array|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacements: 'array',
    boundary: '(string|element)',
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    allowList: 'object',
    popperConfig: '(null|object|function)'
  };
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: isRTL() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: isRTL() ? 'right' : 'left'
  };
  var Default$3 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: [0, 0],
    container: false,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    boundary: 'clippingParents',
    customClass: '',
    sanitize: true,
    sanitizeFn: null,
    allowList: DefaultAllowlist,
    popperConfig: null
  };
  var Event$2 = {
    HIDE: "hide".concat(EVENT_KEY$4),
    HIDDEN: "hidden".concat(EVENT_KEY$4),
    SHOW: "show".concat(EVENT_KEY$4),
    SHOWN: "shown".concat(EVENT_KEY$4),
    INSERTED: "inserted".concat(EVENT_KEY$4),
    CLICK: "click".concat(EVENT_KEY$4),
    FOCUSIN: "focusin".concat(EVENT_KEY$4),
    FOCUSOUT: "focusout".concat(EVENT_KEY$4),
    MOUSEENTER: "mouseenter".concat(EVENT_KEY$4),
    MOUSELEAVE: "mouseleave".concat(EVENT_KEY$4)
  };
  var CLASS_NAME_FADE$2 = 'fade';
  var CLASS_NAME_MODAL = 'modal';
  var CLASS_NAME_SHOW$2 = 'show';
  var HOVER_STATE_SHOW = 'show';
  var HOVER_STATE_OUT = 'out';
  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  var SELECTOR_MODAL = ".".concat(CLASS_NAME_MODAL);
  var EVENT_MODAL_HIDE = 'hide.bs.modal';
  var TRIGGER_HOVER = 'hover';
  var TRIGGER_FOCUS = 'focus';
  var TRIGGER_CLICK = 'click';
  var TRIGGER_MANUAL = 'manual';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = /*#__PURE__*/function (_BaseComponent8) {
    _inherits(Tooltip, _BaseComponent8);

    var _super8 = _createSuper(Tooltip);

    function Tooltip(element, config) {
      var _this34;

      _classCallCheck(this, Tooltip);

      if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      }

      _this34 = _super8.call(this, element); // private

      _this34._isEnabled = true;
      _this34._timeout = 0;
      _this34._hoverState = '';
      _this34._activeTrigger = {};
      _this34._popper = null; // Protected

      _this34._config = _this34._getConfig(config);
      _this34.tip = null;

      _this34._setListeners();

      return _this34;
    } // Getters


    _createClass(Tooltip, [{
      key: "enable",
      value: // Public
      function enable() {
        this._isEnabled = true;
      }
    }, {
      key: "disable",
      value: function disable() {
        this._isEnabled = false;
      }
    }, {
      key: "toggleEnabled",
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: "toggle",
      value: function toggle(event) {
        if (!this._isEnabled) {
          return;
        }

        if (event) {
          var context = this._initializeOnDelegatedTarget(event);

          context._activeTrigger.click = !context._activeTrigger.click;

          if (context._isWithActiveTrigger()) {
            context._enter(null, context);
          } else {
            context._leave(null, context);
          }
        } else {
          if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$2)) {
            this._leave(null, this);

            return;
          }

          this._enter(null, this);
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout);
        EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

        if (this.tip) {
          this.tip.remove();
        }

        this._disposePopper();

        _get(_getPrototypeOf(Tooltip.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _this35 = this;

        if (this._element.style.display === 'none') {
          throw new Error('Please use show on visible elements');
        }

        if (!(this.isWithContent() && this._isEnabled)) {
          return;
        }

        var showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
        var shadowRoot = findShadowRoot(this._element);
        var isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);

        if (showEvent.defaultPrevented || !isInTheDom) {
          return;
        } // A trick to recreate a tooltip in case a new title is given by using the NOT documented `data-bs-original-title`
        // This will be removed later in favor of a `setContent` method


        if (this.constructor.NAME === 'tooltip' && this.tip && this.getTitle() !== this.tip.querySelector(SELECTOR_TOOLTIP_INNER).innerHTML) {
          this._disposePopper();

          this.tip.remove();
          this.tip = null;
        }

        var tip = this.getTipElement();
        var tipId = getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);

        this._element.setAttribute('aria-describedby', tipId);

        if (this._config.animation) {
          tip.classList.add(CLASS_NAME_FADE$2);
        }

        var placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;

        var attachment = this._getAttachment(placement);

        this._addAttachmentClass(attachment);

        var container = this._config.container;
        Data.set(tip, this.constructor.DATA_KEY, this);

        if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
          container.append(tip);
          EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
        }

        if (this._popper) {
          this._popper.update();
        } else {
          this._popper = Popper__namespace.createPopper(this._element, tip, this._getPopperConfig(attachment));
        }

        tip.classList.add(CLASS_NAME_SHOW$2);

        var customClass = this._resolvePossibleFunction(this._config.customClass);

        if (customClass) {
          var _tip$classList;

          (_tip$classList = tip.classList).add.apply(_tip$classList, _toConsumableArray(customClass.split(' ')));
        } // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


        if ('ontouchstart' in document.documentElement) {
          var _ref9;

          (_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children)).forEach(function (element) {
            EventHandler.on(element, 'mouseover', noop);
          });
        }

        var complete = function complete() {
          var prevHoverState = _this35._hoverState;
          _this35._hoverState = null;
          EventHandler.trigger(_this35._element, _this35.constructor.Event.SHOWN);

          if (prevHoverState === HOVER_STATE_OUT) {
            _this35._leave(null, _this35);
          }
        };

        var isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);

        this._queueCallback(complete, this.tip, isAnimated);
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this36 = this;

        if (!this._popper) {
          return;
        }

        var tip = this.getTipElement();

        var complete = function complete() {
          if (_this36._isWithActiveTrigger()) {
            return;
          }

          if (_this36._hoverState !== HOVER_STATE_SHOW) {
            tip.remove();
          }

          _this36._cleanTipClass();

          _this36._element.removeAttribute('aria-describedby');

          EventHandler.trigger(_this36._element, _this36.constructor.Event.HIDDEN);

          _this36._disposePopper();
        };

        var hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);

        if (hideEvent.defaultPrevented) {
          return;
        }

        tip.classList.remove(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support

        if ('ontouchstart' in document.documentElement) {
          var _ref10;

          (_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children)).forEach(function (element) {
            return EventHandler.off(element, 'mouseover', noop);
          });
        }

        this._activeTrigger[TRIGGER_CLICK] = false;
        this._activeTrigger[TRIGGER_FOCUS] = false;
        this._activeTrigger[TRIGGER_HOVER] = false;
        var isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);

        this._queueCallback(complete, this.tip, isAnimated);

        this._hoverState = '';
      }
    }, {
      key: "update",
      value: function update() {
        if (this._popper !== null) {
          this._popper.update();
        }
      } // Protected

    }, {
      key: "isWithContent",
      value: function isWithContent() {
        return Boolean(this.getTitle());
      }
    }, {
      key: "getTipElement",
      value: function getTipElement() {
        if (this.tip) {
          return this.tip;
        }

        var element = document.createElement('div');
        element.innerHTML = this._config.template;
        var tip = element.children[0];
        this.setContent(tip);
        tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
        this.tip = tip;
        return this.tip;
      }
    }, {
      key: "setContent",
      value: function setContent(tip) {
        this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TOOLTIP_INNER);
      }
    }, {
      key: "_sanitizeAndSetContent",
      value: function _sanitizeAndSetContent(template, content, selector) {
        var templateElement = SelectorEngine.findOne(selector, template);

        if (!content && templateElement) {
          templateElement.remove();
          return;
        } // we use append for html objects to maintain js events


        this.setElementContent(templateElement, content);
      }
    }, {
      key: "setElementContent",
      value: function setElementContent(element, content) {
        if (element === null) {
          return;
        }

        if (isElement(content)) {
          content = getElement(content); // content is a DOM node or a jQuery

          if (this._config.html) {
            if (content.parentNode !== element) {
              element.innerHTML = '';
              element.append(content);
            }
          } else {
            element.textContent = content.textContent;
          }

          return;
        }

        if (this._config.html) {
          if (this._config.sanitize) {
            content = sanitizeHtml(content, this._config.allowList, this._config.sanitizeFn);
          }

          element.innerHTML = content;
        } else {
          element.textContent = content;
        }
      }
    }, {
      key: "getTitle",
      value: function getTitle() {
        var title = this._element.getAttribute('data-bs-original-title') || this._config.title;

        return this._resolvePossibleFunction(title);
      }
    }, {
      key: "updateAttachment",
      value: function updateAttachment(attachment) {
        if (attachment === 'right') {
          return 'end';
        }

        if (attachment === 'left') {
          return 'start';
        }

        return attachment;
      } // Private

    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(event, context) {
        return context || this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this37 = this;

        var offset = this._config.offset;

        if (typeof offset === 'string') {
          return offset.split(',').map(function (val) {
            return Number.parseInt(val, 10);
          });
        }

        if (typeof offset === 'function') {
          return function (popperData) {
            return offset(popperData, _this37._element);
          };
        }

        return offset;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(content) {
        return typeof content === 'function' ? content.call(this._element) : content;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(attachment) {
        var _this38 = this;

        var defaultBsPopperConfig = {
          placement: attachment,
          modifiers: [{
            name: 'flip',
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: 'offset',
            options: {
              offset: this._getOffset()
            }
          }, {
            name: 'preventOverflow',
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: 'arrow',
            options: {
              element: ".".concat(this.constructor.NAME, "-arrow")
            }
          }, {
            name: 'onChange',
            enabled: true,
            phase: 'afterWrite',
            fn: function fn(data) {
              return _this38._handlePopperPlacementChange(data);
            }
          }],
          onFirstUpdate: function onFirstUpdate(data) {
            if (data.options.placement !== data.placement) {
              _this38._handlePopperPlacementChange(data);
            }
          }
        };
        return _objectSpread(_objectSpread({}, defaultBsPopperConfig), typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig);
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(attachment) {
        this.getTipElement().classList.add("".concat(this._getBasicClassPrefix(), "-").concat(this.updateAttachment(attachment)));
      }
    }, {
      key: "_getAttachment",
      value: function _getAttachment(placement) {
        return AttachmentMap[placement.toUpperCase()];
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this39 = this;

        var triggers = this._config.trigger.split(' ');

        triggers.forEach(function (trigger) {
          if (trigger === 'click') {
            EventHandler.on(_this39._element, _this39.constructor.Event.CLICK, _this39._config.selector, function (event) {
              return _this39.toggle(event);
            });
          } else if (trigger !== TRIGGER_MANUAL) {
            var eventIn = trigger === TRIGGER_HOVER ? _this39.constructor.Event.MOUSEENTER : _this39.constructor.Event.FOCUSIN;
            var eventOut = trigger === TRIGGER_HOVER ? _this39.constructor.Event.MOUSELEAVE : _this39.constructor.Event.FOCUSOUT;
            EventHandler.on(_this39._element, eventIn, _this39._config.selector, function (event) {
              return _this39._enter(event);
            });
            EventHandler.on(_this39._element, eventOut, _this39._config.selector, function (event) {
              return _this39._leave(event);
            });
          }
        });

        this._hideModalHandler = function () {
          if (_this39._element) {
            _this39.hide();
          }
        };

        EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

        if (this._config.selector) {
          this._config = _objectSpread(_objectSpread({}, this._config), {}, {
            trigger: 'manual',
            selector: ''
          });
        } else {
          this._fixTitle();
        }
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var title = this._element.getAttribute('title');

        var originalTitleType = _typeof(this._element.getAttribute('data-bs-original-title'));

        if (title || originalTitleType !== 'string') {
          this._element.setAttribute('data-bs-original-title', title || '');

          if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
            this._element.setAttribute('aria-label', title);
          }

          this._element.setAttribute('title', '');
        }
      }
    }, {
      key: "_enter",
      value: function _enter(event, context) {
        context = this._initializeOnDelegatedTarget(event, context);

        if (event) {
          context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
        }

        if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$2) || context._hoverState === HOVER_STATE_SHOW) {
          context._hoverState = HOVER_STATE_SHOW;
          return;
        }

        clearTimeout(context._timeout);
        context._hoverState = HOVER_STATE_SHOW;

        if (!context._config.delay || !context._config.delay.show) {
          context.show();
          return;
        }

        context._timeout = setTimeout(function () {
          if (context._hoverState === HOVER_STATE_SHOW) {
            context.show();
          }
        }, context._config.delay.show);
      }
    }, {
      key: "_leave",
      value: function _leave(event, context) {
        context = this._initializeOnDelegatedTarget(event, context);

        if (event) {
          context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
        }

        if (context._isWithActiveTrigger()) {
          return;
        }

        clearTimeout(context._timeout);
        context._hoverState = HOVER_STATE_OUT;

        if (!context._config.delay || !context._config.delay.hide) {
          context.hide();
          return;
        }

        context._timeout = setTimeout(function () {
          if (context._hoverState === HOVER_STATE_OUT) {
            context.hide();
          }
        }, context._config.delay.hide);
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        for (var trigger in this._activeTrigger) {
          if (this._activeTrigger[trigger]) {
            return true;
          }
        }

        return false;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        var dataAttributes = Manipulator.getDataAttributes(this._element);
        Object.keys(dataAttributes).forEach(function (dataAttr) {
          if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
            delete dataAttributes[dataAttr];
          }
        });
        config = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), dataAttributes), _typeof(config) === 'object' && config ? config : {});
        config.container = config.container === false ? document.body : getElement(config.container);

        if (typeof config.delay === 'number') {
          config.delay = {
            show: config.delay,
            hide: config.delay
          };
        }

        if (typeof config.title === 'number') {
          config.title = config.title.toString();
        }

        if (typeof config.content === 'number') {
          config.content = config.content.toString();
        }

        typeCheckConfig(NAME$4, config, this.constructor.DefaultType);

        if (config.sanitize) {
          config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
        }

        return config;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var config = {};

        for (var key in this._config) {
          if (this.constructor.Default[key] !== this._config[key]) {
            config[key] = this._config[key];
          }
        } // In the future can be replaced with:
        // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
        // `Object.fromEntries(keysWithDifferentValues)`


        return config;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var tip = this.getTipElement();
        var basicClassPrefixRegex = new RegExp("(^|\\s)".concat(this._getBasicClassPrefix(), "\\S+"), 'g');
        var tabClass = tip.getAttribute('class').match(basicClassPrefixRegex);

        if (tabClass !== null && tabClass.length > 0) {
          tabClass.map(function (token) {
            return token.trim();
          }).forEach(function (tClass) {
            return tip.classList.remove(tClass);
          });
        }
      }
    }, {
      key: "_getBasicClassPrefix",
      value: function _getBasicClassPrefix() {
        return CLASS_PREFIX$1;
      }
    }, {
      key: "_handlePopperPlacementChange",
      value: function _handlePopperPlacementChange(popperData) {
        var state = popperData.state;

        if (!state) {
          return;
        }

        this.tip = state.elements.popper;

        this._cleanTipClass();

        this._addAttachmentClass(this._getAttachment(state.placement));
      }
    }, {
      key: "_disposePopper",
      value: function _disposePopper() {
        if (this._popper) {
          this._popper.destroy();

          this._popper = null;
        }
      } // Static

    }], [{
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$4;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$3;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Tooltip.getOrCreateInstance(this, config);

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config]();
          }
        });
      }
    }]);

    return Tooltip;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Tooltip to jQuery only if jQuery is present
   */


  defineJQueryPlugin(Tooltip);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): popover.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'popover';
  var DATA_KEY$3 = 'bs.popover';
  var EVENT_KEY$3 = ".".concat(DATA_KEY$3);
  var CLASS_PREFIX = 'bs-popover';

  var Default$2 = _objectSpread(_objectSpread({}, Tooltip.Default), {}, {
    placement: 'right',
    offset: [0, 8],
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'
  });

  var DefaultType$2 = _objectSpread(_objectSpread({}, Tooltip.DefaultType), {}, {
    content: '(string|element|function)'
  });

  var Event$1 = {
    HIDE: "hide".concat(EVENT_KEY$3),
    HIDDEN: "hidden".concat(EVENT_KEY$3),
    SHOW: "show".concat(EVENT_KEY$3),
    SHOWN: "shown".concat(EVENT_KEY$3),
    INSERTED: "inserted".concat(EVENT_KEY$3),
    CLICK: "click".concat(EVENT_KEY$3),
    FOCUSIN: "focusin".concat(EVENT_KEY$3),
    FOCUSOUT: "focusout".concat(EVENT_KEY$3),
    MOUSEENTER: "mouseenter".concat(EVENT_KEY$3),
    MOUSELEAVE: "mouseleave".concat(EVENT_KEY$3)
  };
  var SELECTOR_TITLE = '.popover-header';
  var SELECTOR_CONTENT = '.popover-body';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover = /*#__PURE__*/function (_Tooltip) {
    _inherits(Popover, _Tooltip);

    var _super9 = _createSuper(Popover);

    function Popover() {
      _classCallCheck(this, Popover);

      return _super9.apply(this, arguments);
    }

    _createClass(Popover, [{
      key: "isWithContent",
      value: // Overrides
      function isWithContent() {
        return this.getTitle() || this._getContent();
      }
    }, {
      key: "setContent",
      value: function setContent(tip) {
        this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TITLE);

        this._sanitizeAndSetContent(tip, this._getContent(), SELECTOR_CONTENT);
      } // Private

    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
    }, {
      key: "_getBasicClassPrefix",
      value: function _getBasicClassPrefix() {
        return CLASS_PREFIX;
      } // Static

    }], [{
      key: "Default",
      get: // Getters
      function get() {
        return Default$2;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$3;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$1;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Popover.getOrCreateInstance(this, config);

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config]();
          }
        });
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Popover to jQuery only if jQuery is present
   */


  defineJQueryPlugin(Popover);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'scrollspy';
  var DATA_KEY$2 = 'bs.scrollspy';
  var EVENT_KEY$2 = ".".concat(DATA_KEY$2);
  var DATA_API_KEY$1 = '.data-api';
  var Default$1 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$1 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var EVENT_ACTIVATE = "activate".concat(EVENT_KEY$2);
  var EVENT_SCROLL = "scroll".concat(EVENT_KEY$2);
  var EVENT_LOAD_DATA_API = "load".concat(EVENT_KEY$2).concat(DATA_API_KEY$1);
  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  var CLASS_NAME_ACTIVE$1 = 'active';
  var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  var SELECTOR_NAV_LINKS = '.nav-link';
  var SELECTOR_NAV_ITEMS = '.nav-item';
  var SELECTOR_LIST_ITEMS = '.list-group-item';
  var SELECTOR_LINK_ITEMS = "".concat(SELECTOR_NAV_LINKS, ", ").concat(SELECTOR_LIST_ITEMS, ", .").concat(CLASS_NAME_DROPDOWN_ITEM);
  var SELECTOR_DROPDOWN$1 = '.dropdown';
  var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  var METHOD_OFFSET = 'offset';
  var METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = /*#__PURE__*/function (_BaseComponent9) {
    _inherits(ScrollSpy, _BaseComponent9);

    var _super10 = _createSuper(ScrollSpy);

    function ScrollSpy(element, config) {
      var _this40;

      _classCallCheck(this, ScrollSpy);

      _this40 = _super10.call(this, element);
      _this40._scrollElement = _this40._element.tagName === 'BODY' ? window : _this40._element;
      _this40._config = _this40._getConfig(config);
      _this40._offsets = [];
      _this40._targets = [];
      _this40._activeTarget = null;
      _this40._scrollHeight = 0;
      EventHandler.on(_this40._scrollElement, EVENT_SCROLL, function () {
        return _this40._process();
      });

      _this40.refresh();

      _this40._process();

      return _this40;
    } // Getters


    _createClass(ScrollSpy, [{
      key: "refresh",
      value: // Public
      function refresh() {
        var _this41 = this;

        var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
        var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
        var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
        this._offsets = [];
        this._targets = [];
        this._scrollHeight = this._getScrollHeight();
        var targets = SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target);
        targets.map(function (element) {
          var targetSelector = getSelectorFromElement(element);
          var target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;

          if (target) {
            var targetBCR = target.getBoundingClientRect();

            if (targetBCR.width || targetBCR.height) {
              return [Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
            }
          }

          return null;
        }).filter(function (item) {
          return item;
        }).sort(function (a, b) {
          return a[0] - b[0];
        }).forEach(function (item) {
          _this41._offsets.push(item[0]);

          _this41._targets.push(item[1]);
        });
      }
    }, {
      key: "dispose",
      value: function dispose() {
        EventHandler.off(this._scrollElement, EVENT_KEY$2);

        _get(_getPrototypeOf(ScrollSpy.prototype), "dispose", this).call(this);
      } // Private

    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread(_objectSpread({}, Default$1), Manipulator.getDataAttributes(this._element)), _typeof(config) === 'object' && config ? config : {});
        config.target = getElement(config.target) || document.documentElement;
        typeCheckConfig(NAME$2, config, DefaultType$1);
        return config;
      }
    }, {
      key: "_getScrollTop",
      value: function _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }
    }, {
      key: "_getScrollHeight",
      value: function _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }
    }, {
      key: "_getOffsetHeight",
      value: function _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }
    }, {
      key: "_process",
      value: function _process() {
        var scrollTop = this._getScrollTop() + this._config.offset;

        var scrollHeight = this._getScrollHeight();

        var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

        if (this._scrollHeight !== scrollHeight) {
          this.refresh();
        }

        if (scrollTop >= maxScroll) {
          var target = this._targets[this._targets.length - 1];

          if (this._activeTarget !== target) {
            this._activate(target);
          }

          return;
        }

        if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
          this._activeTarget = null;

          this._clear();

          return;
        }

        for (var i = this._offsets.length; i--;) {
          var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

          if (isActiveTarget) {
            this._activate(this._targets[i]);
          }
        }
      }
    }, {
      key: "_activate",
      value: function _activate(target) {
        this._activeTarget = target;

        this._clear();

        var queries = SELECTOR_LINK_ITEMS.split(',').map(function (selector) {
          return "".concat(selector, "[data-bs-target=\"").concat(target, "\"],").concat(selector, "[href=\"").concat(target, "\"]");
        });
        var link = SelectorEngine.findOne(queries.join(','), this._config.target);
        link.classList.add(CLASS_NAME_ACTIVE$1);

        if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
          SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1)).classList.add(CLASS_NAME_ACTIVE$1);
        } else {
          SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP$1).forEach(function (listGroup) {
            // Set triggered links parents as active
            // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
            SelectorEngine.prev(listGroup, "".concat(SELECTOR_NAV_LINKS, ", ").concat(SELECTOR_LIST_ITEMS)).forEach(function (item) {
              return item.classList.add(CLASS_NAME_ACTIVE$1);
            }); // Handle special case when .nav-link is inside .nav-item

            SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach(function (navItem) {
              SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach(function (item) {
                return item.classList.add(CLASS_NAME_ACTIVE$1);
              });
            });
          });
        }

        EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
          relatedTarget: target
        });
      }
    }, {
      key: "_clear",
      value: function _clear() {
        SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target).filter(function (node) {
          return node.classList.contains(CLASS_NAME_ACTIVE$1);
        }).forEach(function (node) {
          return node.classList.remove(CLASS_NAME_ACTIVE$1);
        });
      } // Static

    }], [{
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$2;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = ScrollSpy.getOrCreateInstance(this, config);

          if (typeof config !== 'string') {
            return;
          }

          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config]();
        });
      }
    }]);

    return ScrollSpy;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(window, EVENT_LOAD_DATA_API, function () {
    SelectorEngine.find(SELECTOR_DATA_SPY).forEach(function (spy) {
      return new ScrollSpy(spy);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .ScrollSpy to jQuery only if jQuery is present
   */

  defineJQueryPlugin(ScrollSpy);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'tab';
  var DATA_KEY$1 = 'bs.tab';
  var EVENT_KEY$1 = ".".concat(DATA_KEY$1);
  var DATA_API_KEY = '.data-api';
  var EVENT_HIDE$1 = "hide".concat(EVENT_KEY$1);
  var EVENT_HIDDEN$1 = "hidden".concat(EVENT_KEY$1);
  var EVENT_SHOW$1 = "show".concat(EVENT_KEY$1);
  var EVENT_SHOWN$1 = "shown".concat(EVENT_KEY$1);
  var EVENT_CLICK_DATA_API = "click".concat(EVENT_KEY$1).concat(DATA_API_KEY);
  var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_FADE$1 = 'fade';
  var CLASS_NAME_SHOW$1 = 'show';
  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_ACTIVE_UL = ':scope > li > .active';
  var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = /*#__PURE__*/function (_BaseComponent10) {
    _inherits(Tab, _BaseComponent10);

    var _super11 = _createSuper(Tab);

    function Tab() {
      _classCallCheck(this, Tab);

      return _super11.apply(this, arguments);
    }

    _createClass(Tab, [{
      key: "show",
      value: // Public
      function show() {
        var _this42 = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
          return;
        }

        var previous;
        var target = getElementFromSelector(this._element);

        var listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP);

        if (listElement) {
          var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
          previous = SelectorEngine.find(itemSelector, listElement);
          previous = previous[previous.length - 1];
        }

        var hideEvent = previous ? EventHandler.trigger(previous, EVENT_HIDE$1, {
          relatedTarget: this._element
        }) : null;
        var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, {
          relatedTarget: previous
        });

        if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
          return;
        }

        this._activate(this._element, listElement);

        var complete = function complete() {
          EventHandler.trigger(previous, EVENT_HIDDEN$1, {
            relatedTarget: _this42._element
          });
          EventHandler.trigger(_this42._element, EVENT_SHOWN$1, {
            relatedTarget: previous
          });
        };

        if (target) {
          this._activate(target, target.parentNode, complete);
        } else {
          complete();
        }
      } // Private

    }, {
      key: "_activate",
      value: function _activate(element, container, callback) {
        var _this43 = this;

        var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE);
        var active = activeElements[0];
        var isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$1);

        var complete = function complete() {
          return _this43._transitionComplete(element, active, callback);
        };

        if (active && isTransitioning) {
          active.classList.remove(CLASS_NAME_SHOW$1);

          this._queueCallback(complete, element, true);
        } else {
          complete();
        }
      }
    }, {
      key: "_transitionComplete",
      value: function _transitionComplete(element, active, callback) {
        if (active) {
          active.classList.remove(CLASS_NAME_ACTIVE);
          var dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

          if (dropdownChild) {
            dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
          }

          if (active.getAttribute('role') === 'tab') {
            active.setAttribute('aria-selected', false);
          }
        }

        element.classList.add(CLASS_NAME_ACTIVE);

        if (element.getAttribute('role') === 'tab') {
          element.setAttribute('aria-selected', true);
        }

        reflow(element);

        if (element.classList.contains(CLASS_NAME_FADE$1)) {
          element.classList.add(CLASS_NAME_SHOW$1);
        }

        var parent = element.parentNode;

        if (parent && parent.nodeName === 'LI') {
          parent = parent.parentNode;
        }

        if (parent && parent.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
          var dropdownElement = element.closest(SELECTOR_DROPDOWN);

          if (dropdownElement) {
            SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach(function (dropdown) {
              return dropdown.classList.add(CLASS_NAME_ACTIVE);
            });
          }

          element.setAttribute('aria-expanded', true);
        }

        if (callback) {
          callback();
        }
      } // Static

    }], [{
      key: "NAME",
      get: // Getters
      function get() {
        return NAME$1;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Tab.getOrCreateInstance(this);

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config]();
          }
        });
      }
    }]);

    return Tab;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (isDisabled(this)) {
      return;
    }

    var data = Tab.getOrCreateInstance(this);
    data.show();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Tab to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Tab);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): toast.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'toast';
  var DATA_KEY = 'bs.toast';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var EVENT_MOUSEOVER = "mouseover".concat(EVENT_KEY);
  var EVENT_MOUSEOUT = "mouseout".concat(EVENT_KEY);
  var EVENT_FOCUSIN = "focusin".concat(EVENT_KEY);
  var EVENT_FOCUSOUT = "focusout".concat(EVENT_KEY);
  var EVENT_HIDE = "hide".concat(EVENT_KEY);
  var EVENT_HIDDEN = "hidden".concat(EVENT_KEY);
  var EVENT_SHOW = "show".concat(EVENT_KEY);
  var EVENT_SHOWN = "shown".concat(EVENT_KEY);
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility

  var CLASS_NAME_SHOW = 'show';
  var CLASS_NAME_SHOWING = 'showing';
  var DefaultType = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default = {
    animation: true,
    autohide: true,
    delay: 5000
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast = /*#__PURE__*/function (_BaseComponent11) {
    _inherits(Toast, _BaseComponent11);

    var _super12 = _createSuper(Toast);

    function Toast(element, config) {
      var _this44;

      _classCallCheck(this, Toast);

      _this44 = _super12.call(this, element);
      _this44._config = _this44._getConfig(config);
      _this44._timeout = null;
      _this44._hasMouseInteraction = false;
      _this44._hasKeyboardInteraction = false;

      _this44._setListeners();

      return _this44;
    } // Getters


    _createClass(Toast, [{
      key: "show",
      value: // Public
      function show() {
        var _this45 = this;

        var showEvent = EventHandler.trigger(this._element, EVENT_SHOW);

        if (showEvent.defaultPrevented) {
          return;
        }

        this._clearTimeout();

        if (this._config.animation) {
          this._element.classList.add(CLASS_NAME_FADE);
        }

        var complete = function complete() {
          _this45._element.classList.remove(CLASS_NAME_SHOWING);

          EventHandler.trigger(_this45._element, EVENT_SHOWN);

          _this45._maybeScheduleHide();
        };

        this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated


        reflow(this._element);

        this._element.classList.add(CLASS_NAME_SHOW);

        this._element.classList.add(CLASS_NAME_SHOWING);

        this._queueCallback(complete, this._element, this._config.animation);
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this46 = this;

        if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
          return;
        }

        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

        if (hideEvent.defaultPrevented) {
          return;
        }

        var complete = function complete() {
          _this46._element.classList.add(CLASS_NAME_HIDE); // @deprecated


          _this46._element.classList.remove(CLASS_NAME_SHOWING);

          _this46._element.classList.remove(CLASS_NAME_SHOW);

          EventHandler.trigger(_this46._element, EVENT_HIDDEN);
        };

        this._element.classList.add(CLASS_NAME_SHOWING);

        this._queueCallback(complete, this._element, this._config.animation);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout();

        if (this._element.classList.contains(CLASS_NAME_SHOW)) {
          this._element.classList.remove(CLASS_NAME_SHOW);
        }

        _get(_getPrototypeOf(Toast.prototype), "dispose", this).call(this);
      } // Private

    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread(_objectSpread({}, Default), Manipulator.getDataAttributes(this._element)), _typeof(config) === 'object' && config ? config : {});
        typeCheckConfig(NAME, config, this.constructor.DefaultType);
        return config;
      }
    }, {
      key: "_maybeScheduleHide",
      value: function _maybeScheduleHide() {
        var _this47 = this;

        if (!this._config.autohide) {
          return;
        }

        if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
          return;
        }

        this._timeout = setTimeout(function () {
          _this47.hide();
        }, this._config.delay);
      }
    }, {
      key: "_onInteraction",
      value: function _onInteraction(event, isInteracting) {
        switch (event.type) {
          case 'mouseover':
          case 'mouseout':
            this._hasMouseInteraction = isInteracting;
            break;

          case 'focusin':
          case 'focusout':
            this._hasKeyboardInteraction = isInteracting;
            break;
        }

        if (isInteracting) {
          this._clearTimeout();

          return;
        }

        var nextElement = event.relatedTarget;

        if (this._element === nextElement || this._element.contains(nextElement)) {
          return;
        }

        this._maybeScheduleHide();
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this48 = this;

        EventHandler.on(this._element, EVENT_MOUSEOVER, function (event) {
          return _this48._onInteraction(event, true);
        });
        EventHandler.on(this._element, EVENT_MOUSEOUT, function (event) {
          return _this48._onInteraction(event, false);
        });
        EventHandler.on(this._element, EVENT_FOCUSIN, function (event) {
          return _this48._onInteraction(event, true);
        });
        EventHandler.on(this._element, EVENT_FOCUSOUT, function (event) {
          return _this48._onInteraction(event, false);
        });
      }
    }, {
      key: "_clearTimeout",
      value: function _clearTimeout() {
        clearTimeout(this._timeout);
        this._timeout = null;
      } // Static

    }], [{
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Toast.getOrCreateInstance(this, config);

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config](this);
          }
        });
      }
    }]);

    return Toast;
  }(BaseComponent);

  enableDismissTrigger(Toast);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Toast to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Toast);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.1): index.umd.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  var index_umd = {
    Alert: Alert,
    Button: Button,
    Carousel: Carousel,
    Collapse: Collapse,
    Dropdown: Dropdown,
    Modal: Modal,
    Offcanvas: Offcanvas,
    Popover: Popover,
    ScrollSpy: ScrollSpy,
    Tab: Tab,
    Toast: Toast,
    Tooltip: Tooltip
  };
  return index_umd;
});
"use strict";

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v5.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper);
}(void 0, function (t) {
  "use strict";

  function e(t) {
    if (t && t.__esModule) return t;
    var e = Object.create(null);
    return t && Object.keys(t).forEach(function (i) {
      if ("default" !== i) {
        var s = Object.getOwnPropertyDescriptor(t, i);
        Object.defineProperty(e, i, s.get ? s : {
          enumerable: !0,
          get: function get() {
            return t[i];
          }
        });
      }
    }), e["default"] = t, Object.freeze(e);
  }

  var i = e(t);

  var s = function s(t) {
    var e = t.getAttribute("data-bs-target");

    if (!e || "#" === e) {
      var _i = t.getAttribute("href");

      if (!_i || !_i.includes("#") && !_i.startsWith(".")) return null;
      _i.includes("#") && !_i.startsWith("#") && (_i = "#" + _i.split("#")[1]), e = _i && "#" !== _i ? _i.trim() : null;
    }

    return e;
  },
      n = function n(t) {
    var e = s(t);
    return e && document.querySelector(e) ? e : null;
  },
      o = function o(t) {
    var e = s(t);
    return e ? document.querySelector(e) : null;
  },
      r = function r(t) {
    t.dispatchEvent(new Event("transitionend"));
  },
      a = function a(t) {
    return !(!t || "object" != _typeof(t)) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType);
  },
      l = function l(t) {
    return a(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null;
  },
      c = function c(t, e, i) {
    Object.keys(i).forEach(function (s) {
      var n = i[s],
          o = e[s],
          r = o && a(o) ? "element" : null == (l = o) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
      var l;
      if (!new RegExp(n).test(r)) throw new TypeError("".concat(t.toUpperCase(), ": Option \"").concat(s, "\" provided type \"").concat(r, "\" but expected type \"").concat(n, "\"."));
    });
  },
      h = function h(t) {
    return !(!a(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility");
  },
      d = function d(t) {
    return !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
  },
      u = function u(t) {
    if (!document.documentElement.attachShadow) return null;

    if ("function" == typeof t.getRootNode) {
      var _e = t.getRootNode();

      return _e instanceof ShadowRoot ? _e : null;
    }

    return t instanceof ShadowRoot ? t : t.parentNode ? u(t.parentNode) : null;
  },
      g = function g() {},
      p = function p(t) {
    t.offsetHeight;
  },
      f = function f() {
    var _window = window,
        t = _window.jQuery;
    return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
  },
      _ = [],
      m = function m() {
    return "rtl" === document.documentElement.dir;
  },
      b = function b(t) {
    var e;
    e = function e() {
      var e = f();

      if (e) {
        var _i2 = t.NAME,
            _s = e.fn[_i2];
        e.fn[_i2] = t.jQueryInterface, e.fn[_i2].Constructor = t, e.fn[_i2].noConflict = function () {
          return e.fn[_i2] = _s, t.jQueryInterface;
        };
      }
    }, "loading" === document.readyState ? (_.length || document.addEventListener("DOMContentLoaded", function () {
      _.forEach(function (t) {
        return t();
      });
    }), _.push(e)) : e();
  },
      v = function v(t) {
    "function" == typeof t && t();
  },
      w = function w(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    if (!i) return void v(t);

    var s = function (t) {
      if (!t) return 0;

      var _window$getComputedSt = window.getComputedStyle(t),
          e = _window$getComputedSt.transitionDuration,
          i = _window$getComputedSt.transitionDelay;

      var s = Number.parseFloat(e),
          n = Number.parseFloat(i);
      return s || n ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
    }(e) + 5;

    var n = !1;

    var o = function o(_ref) {
      var i = _ref.target;
      i === e && (n = !0, e.removeEventListener("transitionend", o), v(t));
    };

    e.addEventListener("transitionend", o), setTimeout(function () {
      n || r(e);
    }, s);
  },
      y = function y(t, e, i, s) {
    var n = t.indexOf(e);
    if (-1 === n) return t[!i && s ? t.length - 1 : 0];
    var o = t.length;
    return n += i ? 1 : -1, s && (n = (n + o) % o), t[Math.max(0, Math.min(n, o - 1))];
  },
      E = /[^.]*(?=\..*)\.|.*/,
      A = /\..*/,
      T = /::\d+$/,
      C = {};

  var k = 1;
  var L = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
      S = /^(mouseenter|mouseleave)/i,
      O = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function N(t, e) {
    return e && "".concat(e, "::").concat(k++) || t.uidEvent || k++;
  }

  function D(t) {
    var e = N(t);
    return t.uidEvent = e, C[e] = C[e] || {}, C[e];
  }

  function I(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var s = Object.keys(t);

    for (var _n = 0, _o = s.length; _n < _o; _n++) {
      var _o2 = t[s[_n]];
      if (_o2.originalHandler === e && _o2.delegationSelector === i) return _o2;
    }

    return null;
  }

  function P(t, e, i) {
    var s = "string" == typeof e,
        n = s ? i : e;
    var o = j(t);
    return O.has(o) || (o = t), [s, n, o];
  }

  function x(t, e, i, s, n) {
    if ("string" != typeof e || !t) return;

    if (i || (i = s, s = null), S.test(e)) {
      var _t2 = function _t2(t) {
        return function (e) {
          if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
        };
      };

      s ? s = _t2(s) : i = _t2(i);
    }

    var _P = P(e, i, s),
        _P2 = _slicedToArray(_P, 3),
        o = _P2[0],
        r = _P2[1],
        a = _P2[2],
        l = D(t),
        c = l[a] || (l[a] = {}),
        h = I(c, r, o ? i : null);

    if (h) return void (h.oneOff = h.oneOff && n);
    var d = N(r, e.replace(E, "")),
        u = o ? function (t, e, i) {
      return function s(n) {
        var o = t.querySelectorAll(e);

        for (var _r = n.target; _r && _r !== this; _r = _r.parentNode) {
          for (var _a = o.length; _a--;) {
            if (o[_a] === _r) return n.delegateTarget = _r, s.oneOff && H.off(t, n.type, e, i), i.apply(_r, [n]);
          }
        }

        return null;
      };
    }(t, i, s) : function (t, e) {
      return function i(s) {
        return s.delegateTarget = t, i.oneOff && H.off(t, s.type, e), e.apply(t, [s]);
      };
    }(t, i);
    u.delegationSelector = o ? i : null, u.originalHandler = r, u.oneOff = n, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
  }

  function M(t, e, i, s, n) {
    var o = I(e[i], s, n);
    o && (t.removeEventListener(i, o, Boolean(n)), delete e[i][o.uidEvent]);
  }

  function j(t) {
    return t = t.replace(A, ""), L[t] || t;
  }

  var H = {
    on: function on(t, e, i, s) {
      x(t, e, i, s, !1);
    },
    one: function one(t, e, i, s) {
      x(t, e, i, s, !0);
    },
    off: function off(t, e, i, s) {
      if ("string" != typeof e || !t) return;

      var _P3 = P(e, i, s),
          _P4 = _slicedToArray(_P3, 3),
          n = _P4[0],
          o = _P4[1],
          r = _P4[2],
          a = r !== e,
          l = D(t),
          c = e.startsWith(".");

      if (void 0 !== o) {
        if (!l || !l[r]) return;
        return void M(t, l, r, o, n ? i : null);
      }

      c && Object.keys(l).forEach(function (i) {
        !function (t, e, i, s) {
          var n = e[i] || {};
          Object.keys(n).forEach(function (o) {
            if (o.includes(s)) {
              var _s2 = n[o];
              M(t, e, i, _s2.originalHandler, _s2.delegationSelector);
            }
          });
        }(t, l, i, e.slice(1));
      });
      var h = l[r] || {};
      Object.keys(h).forEach(function (i) {
        var s = i.replace(T, "");

        if (!a || e.includes(s)) {
          var _e2 = h[i];
          M(t, l, r, _e2.originalHandler, _e2.delegationSelector);
        }
      });
    },
    trigger: function trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      var s = f(),
          n = j(e),
          o = e !== n,
          r = O.has(n);
      var a,
          l = !0,
          c = !0,
          h = !1,
          d = null;
      return o && s && (a = s.Event(e, i), s(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(n, l, !0)) : d = new CustomEvent(e, {
        bubbles: l,
        cancelable: !0
      }), void 0 !== i && Object.keys(i).forEach(function (t) {
        Object.defineProperty(d, t, {
          get: function get() {
            return i[t];
          }
        });
      }), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d;
    }
  },
      B = new Map();
  var z = {
    set: function set(t, e, i) {
      B.has(t) || B.set(t, new Map());
      var s = B.get(t);
      s.has(e) || 0 === s.size ? s.set(e, i) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(s.keys())[0], "."));
    },
    get: function get(t, e) {
      return B.has(t) && B.get(t).get(e) || null;
    },
    remove: function remove(t, e) {
      if (!B.has(t)) return;
      var i = B.get(t);
      i["delete"](e), 0 === i.size && B["delete"](t);
    }
  };

  var R = /*#__PURE__*/function () {
    function R(t) {
      _classCallCheck(this, R);

      (t = l(t)) && (this._element = t, z.set(this._element, this.constructor.DATA_KEY, this));
    }

    _createClass(R, [{
      key: "dispose",
      value: function dispose() {
        var _this = this;

        z.remove(this._element, this.constructor.DATA_KEY), H.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(function (t) {
          _this[t] = null;
        });
      }
    }, {
      key: "_queueCallback",
      value: function _queueCallback(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        w(t, e, i);
      }
    }], [{
      key: "getInstance",
      value: function getInstance(t) {
        return z.get(l(t), this.DATA_KEY);
      }
    }, {
      key: "getOrCreateInstance",
      value: function getOrCreateInstance(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.getInstance(t) || new this(t, "object" == _typeof(e) ? e : null);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return "5.1.1";
      }
    }, {
      key: "NAME",
      get: function get() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs." + this.NAME;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return "." + this.DATA_KEY;
      }
    }]);

    return R;
  }();

  var F = function F(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "hide";
    var i = "click.dismiss" + t.EVENT_KEY,
        s = t.NAME;
    H.on(document, i, "[data-bs-dismiss=\"".concat(s, "\"]"), function (i) {
      if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), d(this)) return;
      var n = o(this) || this.closest("." + s);
      t.getOrCreateInstance(n)[e]();
    });
  };

  var q = /*#__PURE__*/function (_R) {
    _inherits(q, _R);

    var _super = _createSuper(q);

    function q() {
      _classCallCheck(this, q);

      return _super.apply(this, arguments);
    }

    _createClass(q, [{
      key: "close",
      value: function close() {
        var _this2 = this;

        if (H.trigger(this._element, "close.bs.alert").defaultPrevented) return;

        this._element.classList.remove("show");

        var t = this._element.classList.contains("fade");

        this._queueCallback(function () {
          return _this2._destroyElement();
        }, this._element, t);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement() {
        this._element.remove(), H.trigger(this._element, "closed.bs.alert"), this.dispose();
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "alert";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = q.getOrCreateInstance(this);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return q;
  }(R);

  F(q, "close"), b(q);

  var W = /*#__PURE__*/function (_R2) {
    _inherits(W, _R2);

    var _super2 = _createSuper(W);

    function W() {
      _classCallCheck(this, W);

      return _super2.apply(this, arguments);
    }

    _createClass(W, [{
      key: "toggle",
      value: function toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "button";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = W.getOrCreateInstance(this);
          "toggle" === t && e[t]();
        });
      }
    }]);

    return W;
  }(R);

  function $(t) {
    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
  }

  function U(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-" + t.toLowerCase();
    });
  }

  H.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', function (t) {
    t.preventDefault();
    var e = t.target.closest('[data-bs-toggle="button"]');
    W.getOrCreateInstance(e).toggle();
  }), b(W);
  var K = {
    setDataAttribute: function setDataAttribute(t, e, i) {
      t.setAttribute("data-bs-" + U(e), i);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-" + U(e));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = {};
      return Object.keys(t.dataset).filter(function (t) {
        return t.startsWith("bs");
      }).forEach(function (i) {
        var s = i.replace(/^bs/, "");
        s = s.charAt(0).toLowerCase() + s.slice(1, s.length), e[s] = $(t.dataset[i]);
      }), e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return $(t.getAttribute("data-bs-" + U(e)));
    },
    offset: function offset(t) {
      var e = t.getBoundingClientRect();
      return {
        top: e.top + window.pageYOffset,
        left: e.left + window.pageXOffset
      };
    },
    position: function position(t) {
      return {
        top: t.offsetTop,
        left: t.offsetLeft
      };
    }
  },
      V = {
    find: function find(t) {
      var _ref2;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(Element.prototype.querySelectorAll.call(e, t)));
    },
    findOne: function findOne(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return Element.prototype.querySelector.call(e, t);
    },
    children: function children(t, e) {
      var _ref3;

      return (_ref3 = []).concat.apply(_ref3, _toConsumableArray(t.children)).filter(function (t) {
        return t.matches(e);
      });
    },
    parents: function parents(t, e) {
      var i = [];
      var s = t.parentNode;

      for (; s && s.nodeType === Node.ELEMENT_NODE && 3 !== s.nodeType;) {
        s.matches(e) && i.push(s), s = s.parentNode;
      }

      return i;
    },
    prev: function prev(t, e) {
      var i = t.previousElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.previousElementSibling;
      }

      return [];
    },
    next: function next(t, e) {
      var i = t.nextElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.nextElementSibling;
      }

      return [];
    },
    focusableChildren: function focusableChildren(t) {
      var e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(function (t) {
        return t + ':not([tabindex^="-"])';
      }).join(", ");
      return this.find(e, t).filter(function (t) {
        return !d(t) && h(t);
      });
    }
  },
      X = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      Y = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      Q = "next",
      G = "prev",
      Z = "left",
      J = "right",
      tt = {
    ArrowLeft: J,
    ArrowRight: Z
  };

  var et = /*#__PURE__*/function (_R3) {
    _inherits(et, _R3);

    var _super3 = _createSuper(et);

    function et(t, e) {
      var _this3;

      _classCallCheck(this, et);

      _this3 = _super3.call(this, t), _this3._items = null, _this3._interval = null, _this3._activeElement = null, _this3._isPaused = !1, _this3._isSliding = !1, _this3.touchTimeout = null, _this3.touchStartX = 0, _this3.touchDeltaX = 0, _this3._config = _this3._getConfig(e), _this3._indicatorsElement = V.findOne(".carousel-indicators", _this3._element), _this3._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, _this3._pointerEvent = Boolean(window.PointerEvent), _this3._addEventListeners();
      return _this3;
    }

    _createClass(et, [{
      key: "next",
      value: function next() {
        this._slide(Q);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        !document.hidden && h(this._element) && this.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        this._slide(G);
      }
    }, {
      key: "pause",
      value: function pause(t) {
        t || (this._isPaused = !0), V.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (r(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }
    }, {
      key: "cycle",
      value: function cycle(t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }
    }, {
      key: "to",
      value: function to(t) {
        var _this4 = this;

        this._activeElement = V.findOne(".active.carousel-item", this._element);

        var e = this._getItemIndex(this._activeElement);

        if (t > this._items.length - 1 || t < 0) return;
        if (this._isSliding) return void H.one(this._element, "slid.bs.carousel", function () {
          return _this4.to(t);
        });
        if (e === t) return this.pause(), void this.cycle();
        var i = t > e ? Q : G;

        this._slide(i, this._items[t]);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, X), K.getDataAttributes(this._element)), "object" == _typeof(t) ? t : {}), c("carousel", t, Y), t;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var t = Math.abs(this.touchDeltaX);
        if (t <= 40) return;
        var e = t / this.touchDeltaX;
        this.touchDeltaX = 0, e && this._slide(e > 0 ? J : Z);
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this5 = this;

        this._config.keyboard && H.on(this._element, "keydown.bs.carousel", function (t) {
          return _this5._keydown(t);
        }), "hover" === this._config.pause && (H.on(this._element, "mouseenter.bs.carousel", function (t) {
          return _this5.pause(t);
        }), H.on(this._element, "mouseleave.bs.carousel", function (t) {
          return _this5.cycle(t);
        })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this6 = this;

        var t = function t(_t3) {
          return _this6._pointerEvent && ("pen" === _t3.pointerType || "touch" === _t3.pointerType);
        },
            e = function e(_e3) {
          t(_e3) ? _this6.touchStartX = _e3.clientX : _this6._pointerEvent || (_this6.touchStartX = _e3.touches[0].clientX);
        },
            i = function i(t) {
          _this6.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - _this6.touchStartX;
        },
            s = function s(e) {
          t(e) && (_this6.touchDeltaX = e.clientX - _this6.touchStartX), _this6._handleSwipe(), "hover" === _this6._config.pause && (_this6.pause(), _this6.touchTimeout && clearTimeout(_this6.touchTimeout), _this6.touchTimeout = setTimeout(function (t) {
            return _this6.cycle(t);
          }, 500 + _this6._config.interval));
        };

        V.find(".carousel-item img", this._element).forEach(function (t) {
          H.on(t, "dragstart.bs.carousel", function (t) {
            return t.preventDefault();
          });
        }), this._pointerEvent ? (H.on(this._element, "pointerdown.bs.carousel", function (t) {
          return e(t);
        }), H.on(this._element, "pointerup.bs.carousel", function (t) {
          return s(t);
        }), this._element.classList.add("pointer-event")) : (H.on(this._element, "touchstart.bs.carousel", function (t) {
          return e(t);
        }), H.on(this._element, "touchmove.bs.carousel", function (t) {
          return i(t);
        }), H.on(this._element, "touchend.bs.carousel", function (t) {
          return s(t);
        }));
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (/input|textarea/i.test(t.target.tagName)) return;
        var e = tt[t.key];
        e && (t.preventDefault(), this._slide(e));
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(t) {
        return this._items = t && t.parentNode ? V.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t);
      }
    }, {
      key: "_getItemByOrder",
      value: function _getItemByOrder(t, e) {
        var i = t === Q;
        return y(this._items, e, i, this._config.wrap);
      }
    }, {
      key: "_triggerSlideEvent",
      value: function _triggerSlideEvent(t, e) {
        var i = this._getItemIndex(t),
            s = this._getItemIndex(V.findOne(".active.carousel-item", this._element));

        return H.trigger(this._element, "slide.bs.carousel", {
          relatedTarget: t,
          direction: e,
          from: s,
          to: i
        });
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(t) {
        if (this._indicatorsElement) {
          var _e4 = V.findOne(".active", this._indicatorsElement);

          _e4.classList.remove("active"), _e4.removeAttribute("aria-current");

          var _i3 = V.find("[data-bs-target]", this._indicatorsElement);

          for (var _e5 = 0; _e5 < _i3.length; _e5++) {
            if (Number.parseInt(_i3[_e5].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
              _i3[_e5].classList.add("active"), _i3[_e5].setAttribute("aria-current", "true");
              break;
            }
          }
        }
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var t = this._activeElement || V.findOne(".active.carousel-item", this._element);
        if (!t) return;
        var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
        e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }, {
      key: "_slide",
      value: function _slide(t, e) {
        var _this7 = this;

        var i = this._directionToOrder(t),
            s = V.findOne(".active.carousel-item", this._element),
            n = this._getItemIndex(s),
            o = e || this._getItemByOrder(i, s),
            r = this._getItemIndex(o),
            a = Boolean(this._interval),
            l = i === Q,
            c = l ? "carousel-item-start" : "carousel-item-end",
            h = l ? "carousel-item-next" : "carousel-item-prev",
            d = this._orderToDirection(i);

        if (o && o.classList.contains("active")) return void (this._isSliding = !1);
        if (this._isSliding) return;
        if (this._triggerSlideEvent(o, d).defaultPrevented) return;
        if (!s || !o) return;
        this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o;

        var u = function u() {
          H.trigger(_this7._element, "slid.bs.carousel", {
            relatedTarget: o,
            direction: d,
            from: n,
            to: r
          });
        };

        if (this._element.classList.contains("slide")) {
          o.classList.add(h), p(o), s.classList.add(c), o.classList.add(c);

          var _t4 = function _t4() {
            o.classList.remove(c, h), o.classList.add("active"), s.classList.remove("active", h, c), _this7._isSliding = !1, setTimeout(u, 0);
          };

          this._queueCallback(_t4, s, !0);
        } else s.classList.remove("active"), o.classList.add("active"), this._isSliding = !1, u();

        a && this.cycle();
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(t) {
        return [J, Z].includes(t) ? m() ? t === Z ? G : Q : t === Z ? Q : G : t;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(t) {
        return [Q, G].includes(t) ? m() ? t === G ? Z : J : t === G ? J : Z : t;
      }
    }], [{
      key: "Default",
      get: function get() {
        return X;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "carousel";
      }
    }, {
      key: "carouselInterface",
      value: function carouselInterface(t, e) {
        var i = et.getOrCreateInstance(t, e);
        var s = i._config;
        "object" == _typeof(e) && (s = _objectSpread(_objectSpread({}, s), e));
        var n = "string" == typeof e ? e : s.slide;
        if ("number" == typeof e) i.to(e);else if ("string" == typeof n) {
          if (void 0 === i[n]) throw new TypeError("No method named \"".concat(n, "\""));
          i[n]();
        } else s.interval && s.ride && (i.pause(), i.cycle());
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          et.carouselInterface(this, t);
        });
      }
    }, {
      key: "dataApiClickHandler",
      value: function dataApiClickHandler(t) {
        var e = o(this);
        if (!e || !e.classList.contains("carousel")) return;

        var i = _objectSpread(_objectSpread({}, K.getDataAttributes(e)), K.getDataAttributes(this)),
            s = this.getAttribute("data-bs-slide-to");

        s && (i.interval = !1), et.carouselInterface(e, i), s && et.getInstance(e).to(s), t.preventDefault();
      }
    }]);

    return et;
  }(R);

  H.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", et.dataApiClickHandler), H.on(window, "load.bs.carousel.data-api", function () {
    var t = V.find('[data-bs-ride="carousel"]');

    for (var _e6 = 0, _i4 = t.length; _e6 < _i4; _e6++) {
      et.carouselInterface(t[_e6], et.getInstance(t[_e6]));
    }
  }), b(et);
  var it = {
    toggle: !0,
    parent: null
  },
      st = {
    toggle: "boolean",
    parent: "(null|element)"
  };

  var nt = /*#__PURE__*/function (_R4) {
    _inherits(nt, _R4);

    var _super4 = _createSuper(nt);

    function nt(t, e) {
      var _this8;

      _classCallCheck(this, nt);

      _this8 = _super4.call(this, t), _this8._isTransitioning = !1, _this8._config = _this8._getConfig(e), _this8._triggerArray = [];
      var i = V.find('[data-bs-toggle="collapse"]');

      for (var _t5 = 0, _e7 = i.length; _t5 < _e7; _t5++) {
        var _e8 = i[_t5],
            _s3 = n(_e8),
            _o3 = V.find(_s3).filter(function (t) {
          return t === _this8._element;
        });

        null !== _s3 && _o3.length && (_this8._selector = _s3, _this8._triggerArray.push(_e8));
      }

      _this8._initializeChildren(), _this8._config.parent || _this8._addAriaAndCollapsedClass(_this8._triggerArray, _this8._isShown()), _this8._config.toggle && _this8.toggle();
      return _this8;
    }

    _createClass(nt, [{
      key: "toggle",
      value: function toggle() {
        this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _this9 = this;

        if (this._isTransitioning || this._isShown()) return;
        var t,
            e = [];

        if (this._config.parent) {
          var _t6 = V.find(".collapse .collapse", this._config.parent);

          e = V.find(".collapse.show, .collapse.collapsing", this._config.parent).filter(function (e) {
            return !_t6.includes(e);
          });
        }

        var i = V.findOne(this._selector);

        if (e.length) {
          var _s4 = e.find(function (t) {
            return i !== t;
          });

          if (t = _s4 ? nt.getInstance(_s4) : null, t && t._isTransitioning) return;
        }

        if (H.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
        e.forEach(function (e) {
          i !== e && nt.getOrCreateInstance(e, {
            toggle: !1
          }).hide(), t || z.set(e, "bs.collapse", null);
        });

        var s = this._getDimension();

        this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[s] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
        var n = "scroll" + (s[0].toUpperCase() + s.slice(1));
        this._queueCallback(function () {
          _this9._isTransitioning = !1, _this9._element.classList.remove("collapsing"), _this9._element.classList.add("collapse", "show"), _this9._element.style[s] = "", H.trigger(_this9._element, "shown.bs.collapse");
        }, this._element, !0), this._element.style[s] = this._element[n] + "px";
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this10 = this;

        if (this._isTransitioning || !this._isShown()) return;
        if (H.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;

        var t = this._getDimension();

        this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", p(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
        var e = this._triggerArray.length;

        for (var _t7 = 0; _t7 < e; _t7++) {
          var _e9 = this._triggerArray[_t7],
              _i5 = o(_e9);

          _i5 && !this._isShown(_i5) && this._addAriaAndCollapsedClass([_e9], !1);
        }

        this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(function () {
          _this10._isTransitioning = !1, _this10._element.classList.remove("collapsing"), _this10._element.classList.add("collapse"), H.trigger(_this10._element, "hidden.bs.collapse");
        }, this._element, !0);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return t.classList.contains("show");
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread(_objectSpread(_objectSpread({}, it), K.getDataAttributes(this._element)), t)).toggle = Boolean(t.toggle), t.parent = l(t.parent), c("collapse", t, st), t;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
      }
    }, {
      key: "_initializeChildren",
      value: function _initializeChildren() {
        var _this11 = this;

        if (!this._config.parent) return;
        var t = V.find(".collapse .collapse", this._config.parent);
        V.find('[data-bs-toggle="collapse"]', this._config.parent).filter(function (e) {
          return !t.includes(e);
        }).forEach(function (t) {
          var e = o(t);
          e && _this11._addAriaAndCollapsedClass([t], _this11._isShown(e));
        });
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(t, e) {
        t.length && t.forEach(function (t) {
          e ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", e);
        });
      }
    }], [{
      key: "Default",
      get: function get() {
        return it;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "collapse";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = {};
          "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
          var i = nt.getOrCreateInstance(this, e);

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t]();
          }
        });
      }
    }]);

    return nt;
  }(R);

  H.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    var e = n(this);
    V.find(e).forEach(function (t) {
      nt.getOrCreateInstance(t, {
        toggle: !1
      }).toggle();
    });
  }), b(nt);
  var ot = new RegExp("ArrowUp|ArrowDown|Escape"),
      rt = m() ? "top-end" : "top-start",
      at = m() ? "top-start" : "top-end",
      lt = m() ? "bottom-end" : "bottom-start",
      ct = m() ? "bottom-start" : "bottom-end",
      ht = m() ? "left-start" : "right-start",
      dt = m() ? "right-start" : "left-start",
      ut = {
    offset: [0, 2],
    boundary: "clippingParents",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null,
    autoClose: !0
  },
      gt = {
    offset: "(array|string|function)",
    boundary: "(string|element)",
    reference: "(string|element|object)",
    display: "string",
    popperConfig: "(null|object|function)",
    autoClose: "(boolean|string)"
  };

  var pt = /*#__PURE__*/function (_R5) {
    _inherits(pt, _R5);

    var _super5 = _createSuper(pt);

    function pt(t, e) {
      var _this12;

      _classCallCheck(this, pt);

      _this12 = _super5.call(this, t), _this12._popper = null, _this12._config = _this12._getConfig(e), _this12._menu = _this12._getMenuElement(), _this12._inNavbar = _this12._detectNavbar();
      return _this12;
    }

    _createClass(pt, [{
      key: "toggle",
      value: function toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _ref4;

        if (d(this._element) || this._isShown(this._menu)) return;
        var t = {
          relatedTarget: this._element
        };
        if (H.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) return;
        var e = pt.getParentFromElement(this._element);
        this._inNavbar ? K.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e), "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && (_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children)).forEach(function (t) {
          return H.on(t, "mouseover", g);
        }), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add("show"), this._element.classList.add("show"), H.trigger(this._element, "shown.bs.dropdown", t);
      }
    }, {
      key: "hide",
      value: function hide() {
        if (d(this._element) || !this._isShown(this._menu)) return;
        var t = {
          relatedTarget: this._element
        };

        this._completeHide(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._popper && this._popper.destroy(), _get(_getPrototypeOf(pt.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
    }, {
      key: "_completeHide",
      value: function _completeHide(t) {
        var _ref5;

        H.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && (_ref5 = []).concat.apply(_ref5, _toConsumableArray(document.body.children)).forEach(function (t) {
          return H.off(t, "mouseover", g);
        }), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), K.removeDataAttribute(this._menu, "popper"), H.trigger(this._element, "hidden.bs.dropdown", t));
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if (t = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), K.getDataAttributes(this._element)), t), c("dropdown", t, this.constructor.DefaultType), "object" == _typeof(t.reference) && !a(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
        return t;
      }
    }, {
      key: "_createPopper",
      value: function _createPopper(t) {
        if (void 0 === i) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        var e = this._element;
        "parent" === this._config.reference ? e = t : a(this._config.reference) ? e = l(this._config.reference) : "object" == _typeof(this._config.reference) && (e = this._config.reference);

        var s = this._getPopperConfig(),
            n = s.modifiers.find(function (t) {
          return "applyStyles" === t.name && !1 === t.enabled;
        });

        this._popper = i.createPopper(e, this._menu, s), n && K.setDataAttribute(this._menu, "popper", "static");
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return t.classList.contains("show");
      }
    }, {
      key: "_getMenuElement",
      value: function _getMenuElement() {
        return V.next(this._element, ".dropdown-menu")[0];
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var t = this._element.parentNode;
        if (t.classList.contains("dropend")) return ht;
        if (t.classList.contains("dropstart")) return dt;
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? at : rt : e ? ct : lt;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this13 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this13._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var t = {
          placement: this._getPlacement(),
          modifiers: [{
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }]
        };
        return "static" === this._config.display && (t.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), _objectSpread(_objectSpread({}, t), "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig);
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(_ref6) {
        var t = _ref6.key,
            e = _ref6.target;
        var i = V.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(h);
        i.length && y(i, e, "ArrowDown" === t, !i.includes(e)).focus();
      }
    }], [{
      key: "Default",
      get: function get() {
        return ut;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return gt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "dropdown";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = pt.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(t) {
        if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key)) return;
        var e = V.find('[data-bs-toggle="dropdown"]');

        for (var _i6 = 0, _s5 = e.length; _i6 < _s5; _i6++) {
          var _s6 = pt.getInstance(e[_i6]);

          if (!_s6 || !1 === _s6._config.autoClose) continue;
          if (!_s6._isShown()) continue;
          var _n2 = {
            relatedTarget: _s6._element
          };

          if (t) {
            var _e10 = t.composedPath(),
                _i7 = _e10.includes(_s6._menu);

            if (_e10.includes(_s6._element) || "inside" === _s6._config.autoClose && !_i7 || "outside" === _s6._config.autoClose && _i7) continue;
            if (_s6._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
            "click" === t.type && (_n2.clickEvent = t);
          }

          _s6._completeHide(_n2);
        }
      }
    }, {
      key: "getParentFromElement",
      value: function getParentFromElement(t) {
        return o(t) || t.parentNode;
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(t) {
        if (/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !ot.test(t.key)) return;
        var e = this.classList.contains("show");
        if (!e && "Escape" === t.key) return;
        if (t.preventDefault(), t.stopPropagation(), d(this)) return;
        var i = this.matches('[data-bs-toggle="dropdown"]') ? this : V.prev(this, '[data-bs-toggle="dropdown"]')[0],
            s = pt.getOrCreateInstance(i);
        if ("Escape" !== t.key) return "ArrowUp" === t.key || "ArrowDown" === t.key ? (e || s.show(), void s._selectMenuItem(t)) : void (e && "Space" !== t.key || pt.clearMenus());
        s.hide();
      }
    }]);

    return pt;
  }(R);

  H.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', pt.dataApiKeydownHandler), H.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", pt.dataApiKeydownHandler), H.on(document, "click.bs.dropdown.data-api", pt.clearMenus), H.on(document, "keyup.bs.dropdown.data-api", pt.clearMenus), H.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', function (t) {
    t.preventDefault(), pt.getOrCreateInstance(this).toggle();
  }), b(pt);

  var ft = /*#__PURE__*/function () {
    function ft() {
      _classCallCheck(this, ft);

      this._element = document.body;
    }

    _createClass(ft, [{
      key: "getWidth",
      value: function getWidth() {
        var t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t);
      }
    }, {
      key: "hide",
      value: function hide() {
        var t = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", function (e) {
          return e + t;
        }), this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", function (e) {
          return e + t;
        }), this._setElementAttributes(".sticky-top", "marginRight", function (e) {
          return e - t;
        });
      }
    }, {
      key: "_disableOverFlow",
      value: function _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
      }
    }, {
      key: "_setElementAttributes",
      value: function _setElementAttributes(t, e, i) {
        var _this14 = this;

        var s = this.getWidth();

        this._applyManipulationCallback(t, function (t) {
          if (t !== _this14._element && window.innerWidth > t.clientWidth + s) return;

          _this14._saveInitialAttribute(t, e);

          var n = window.getComputedStyle(t)[e];
          t.style[e] = i(Number.parseFloat(n)) + "px";
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight");
      }
    }, {
      key: "_saveInitialAttribute",
      value: function _saveInitialAttribute(t, e) {
        var i = t.style[e];
        i && K.setDataAttribute(t, e, i);
      }
    }, {
      key: "_resetElementAttributes",
      value: function _resetElementAttributes(t, e) {
        this._applyManipulationCallback(t, function (t) {
          var i = K.getDataAttribute(t, e);
          void 0 === i ? t.style.removeProperty(e) : (K.removeDataAttribute(t, e), t.style[e] = i);
        });
      }
    }, {
      key: "_applyManipulationCallback",
      value: function _applyManipulationCallback(t, e) {
        a(t) ? e(t) : V.find(t, this._element).forEach(e);
      }
    }, {
      key: "isOverflowing",
      value: function isOverflowing() {
        return this.getWidth() > 0;
      }
    }]);

    return ft;
  }();

  var _t = {
    className: "modal-backdrop",
    isVisible: !0,
    isAnimated: !1,
    rootElement: "body",
    clickCallback: null
  },
      mt = {
    className: "string",
    isVisible: "boolean",
    isAnimated: "boolean",
    rootElement: "(element|string)",
    clickCallback: "(function|null)"
  };

  var bt = /*#__PURE__*/function () {
    function bt(t) {
      _classCallCheck(this, bt);

      this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
    }

    _createClass(bt, [{
      key: "show",
      value: function show(t) {
        this._config.isVisible ? (this._append(), this._config.isAnimated && p(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(function () {
          v(t);
        })) : v(t);
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this15 = this;

        this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(function () {
          _this15.dispose(), v(t);
        })) : v(t);
      }
    }, {
      key: "_getElement",
      value: function _getElement() {
        if (!this._element) {
          var _t8 = document.createElement("div");

          _t8.className = this._config.className, this._config.isAnimated && _t8.classList.add("fade"), this._element = _t8;
        }

        return this._element;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread(_objectSpread({}, _t), "object" == _typeof(t) ? t : {})).rootElement = l(t.rootElement), c("backdrop", t, mt), t;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this16 = this;

        this._isAppended || (this._config.rootElement.append(this._getElement()), H.on(this._getElement(), "mousedown.bs.backdrop", function () {
          v(_this16._config.clickCallback);
        }), this._isAppended = !0);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._isAppended && (H.off(this._element, "mousedown.bs.backdrop"), this._element.remove(), this._isAppended = !1);
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(t) {
        w(t, this._getElement(), this._config.isAnimated);
      }
    }]);

    return bt;
  }();

  var vt = {
    trapElement: null,
    autofocus: !0
  },
      wt = {
    trapElement: "element",
    autofocus: "boolean"
  };

  var yt = /*#__PURE__*/function () {
    function yt(t) {
      _classCallCheck(this, yt);

      this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
    }

    _createClass(yt, [{
      key: "activate",
      value: function activate() {
        var _this17 = this;

        var _this$_config = this._config,
            t = _this$_config.trapElement,
            e = _this$_config.autofocus;
        this._isActive || (e && t.focus(), H.off(document, ".bs.focustrap"), H.on(document, "focusin.bs.focustrap", function (t) {
          return _this17._handleFocusin(t);
        }), H.on(document, "keydown.tab.bs.focustrap", function (t) {
          return _this17._handleKeydown(t);
        }), this._isActive = !0);
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        this._isActive && (this._isActive = !1, H.off(document, ".bs.focustrap"));
      }
    }, {
      key: "_handleFocusin",
      value: function _handleFocusin(t) {
        var e = t.target,
            i = this._config.trapElement;
        if (e === document || e === i || i.contains(e)) return;
        var s = V.focusableChildren(i);
        0 === s.length ? i.focus() : "backward" === this._lastTabNavDirection ? s[s.length - 1].focus() : s[0].focus();
      }
    }, {
      key: "_handleKeydown",
      value: function _handleKeydown(t) {
        "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? "backward" : "forward");
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread({}, vt), "object" == _typeof(t) ? t : {}), c("focustrap", t, wt), t;
      }
    }]);

    return yt;
  }();

  var Et = {
    backdrop: !0,
    keyboard: !0,
    focus: !0
  },
      At = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean"
  };

  var Tt = /*#__PURE__*/function (_R6) {
    _inherits(Tt, _R6);

    var _super6 = _createSuper(Tt);

    function Tt(t, e) {
      var _this18;

      _classCallCheck(this, Tt);

      _this18 = _super6.call(this, t), _this18._config = _this18._getConfig(e), _this18._dialog = V.findOne(".modal-dialog", _this18._element), _this18._backdrop = _this18._initializeBackDrop(), _this18._focustrap = _this18._initializeFocusTrap(), _this18._isShown = !1, _this18._ignoreBackdropClick = !1, _this18._isTransitioning = !1, _this18._scrollBar = new ft();
      return _this18;
    }

    _createClass(Tt, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this19 = this;

        this._isShown || this._isTransitioning || H.trigger(this._element, "show.bs.modal", {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), H.on(this._dialog, "mousedown.dismiss.bs.modal", function () {
          H.one(_this19._element, "mouseup.dismiss.bs.modal", function (t) {
            t.target === _this19._element && (_this19._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return _this19._showElement(t);
        }));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this20 = this;

        if (!this._isShown || this._isTransitioning) return;
        if (H.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
        this._isShown = !1;

        var t = this._isAnimated();

        t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove("show"), H.off(this._element, "click.dismiss.bs.modal"), H.off(this._dialog, "mousedown.dismiss.bs.modal"), this._queueCallback(function () {
          return _this20._hideModal();
        }, this._element, t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        [window, this._dialog].forEach(function (t) {
          return H.off(t, ".bs.modal");
        }), this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(Tt.prototype), "dispose", this).call(this);
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new bt({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new yt({
          trapElement: this._element
        });
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, Et), K.getDataAttributes(this._element)), "object" == _typeof(t) ? t : {}), c("modal", t, At), t;
      }
    }, {
      key: "_showElement",
      value: function _showElement(t) {
        var _this21 = this;

        var e = this._isAnimated(),
            i = V.findOne(".modal-body", this._dialog);

        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && p(this._element), this._element.classList.add("show"), this._queueCallback(function () {
          _this21._config.focus && _this21._focustrap.activate(), _this21._isTransitioning = !1, H.trigger(_this21._element, "shown.bs.modal", {
            relatedTarget: t
          });
        }, this._dialog, e);
      }
    }, {
      key: "_setEscapeEvent",
      value: function _setEscapeEvent() {
        var _this22 = this;

        this._isShown ? H.on(this._element, "keydown.dismiss.bs.modal", function (t) {
          _this22._config.keyboard && "Escape" === t.key ? (t.preventDefault(), _this22.hide()) : _this22._config.keyboard || "Escape" !== t.key || _this22._triggerBackdropTransition();
        }) : H.off(this._element, "keydown.dismiss.bs.modal");
      }
    }, {
      key: "_setResizeEvent",
      value: function _setResizeEvent() {
        var _this23 = this;

        this._isShown ? H.on(window, "resize.bs.modal", function () {
          return _this23._adjustDialog();
        }) : H.off(window, "resize.bs.modal");
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this24 = this;

        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
          document.body.classList.remove("modal-open"), _this24._resetAdjustments(), _this24._scrollBar.reset(), H.trigger(_this24._element, "hidden.bs.modal");
        });
      }
    }, {
      key: "_showBackdrop",
      value: function _showBackdrop(t) {
        var _this25 = this;

        H.on(this._element, "click.dismiss.bs.modal", function (t) {
          _this25._ignoreBackdropClick ? _this25._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === _this25._config.backdrop ? _this25.hide() : "static" === _this25._config.backdrop && _this25._triggerBackdropTransition());
        }), this._backdrop.show(t);
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("fade");
      }
    }, {
      key: "_triggerBackdropTransition",
      value: function _triggerBackdropTransition() {
        var _this26 = this;

        if (H.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
        var _this$_element = this._element,
            t = _this$_element.classList,
            e = _this$_element.scrollHeight,
            i = _this$_element.style,
            s = e > document.documentElement.clientHeight;
        !s && "hidden" === i.overflowY || t.contains("modal-static") || (s || (i.overflowY = "hidden"), t.add("modal-static"), this._queueCallback(function () {
          t.remove("modal-static"), s || _this26._queueCallback(function () {
            i.overflowY = "";
          }, _this26._dialog);
        }, this._dialog), this._element.focus());
      }
    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = this._scrollBar.getWidth(),
            i = e > 0;

        (!i && t && !m() || i && !t && m()) && (this._element.style.paddingLeft = e + "px"), (i && !t && !m() || !i && t && m()) && (this._element.style.paddingRight = e + "px");
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
    }], [{
      key: "Default",
      get: function get() {
        return Et;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "modal";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t, e) {
        return this.each(function () {
          var i = Tt.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t](e);
          }
        });
      }
    }]);

    return Tt;
  }(R);

  H.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
    var _this27 = this;

    var e = o(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), H.one(e, "show.bs.modal", function (t) {
      t.defaultPrevented || H.one(e, "hidden.bs.modal", function () {
        h(_this27) && _this27.focus();
      });
    });
    var i = V.findOne(".modal.show");
    i && Tt.getInstance(i).hide(), Tt.getOrCreateInstance(e).toggle(this);
  }), F(Tt), b(Tt);
  var Ct = {
    backdrop: !0,
    keyboard: !0,
    scroll: !1
  },
      kt = {
    backdrop: "boolean",
    keyboard: "boolean",
    scroll: "boolean"
  };

  var Lt = /*#__PURE__*/function (_R7) {
    _inherits(Lt, _R7);

    var _super7 = _createSuper(Lt);

    function Lt(t, e) {
      var _this28;

      _classCallCheck(this, Lt);

      _this28 = _super7.call(this, t), _this28._config = _this28._getConfig(e), _this28._isShown = !1, _this28._backdrop = _this28._initializeBackDrop(), _this28._focustrap = _this28._initializeFocusTrap(), _this28._addEventListeners();
      return _this28;
    }

    _createClass(Lt, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this29 = this;

        this._isShown || H.trigger(this._element, "show.bs.offcanvas", {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || new ft().hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(function () {
          _this29._config.scroll || _this29._focustrap.activate(), H.trigger(_this29._element, "shown.bs.offcanvas", {
            relatedTarget: t
          });
        }, this._element, !0));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this30 = this;

        this._isShown && (H.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(function () {
          _this30._element.setAttribute("aria-hidden", !0), _this30._element.removeAttribute("aria-modal"), _this30._element.removeAttribute("role"), _this30._element.style.visibility = "hidden", _this30._config.scroll || new ft().reset(), H.trigger(_this30._element, "hidden.bs.offcanvas");
        }, this._element, !0)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(Lt.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, Ct), K.getDataAttributes(this._element)), "object" == _typeof(t) ? t : {}), c("offcanvas", t, kt), t;
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this31 = this;

        return new bt({
          className: "offcanvas-backdrop",
          isVisible: this._config.backdrop,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: function clickCallback() {
            return _this31.hide();
          }
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new yt({
          trapElement: this._element
        });
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this32 = this;

        H.on(this._element, "keydown.dismiss.bs.offcanvas", function (t) {
          _this32._config.keyboard && "Escape" === t.key && _this32.hide();
        });
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "offcanvas";
      }
    }, {
      key: "Default",
      get: function get() {
        return Ct;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Lt.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return Lt;
  }(R);

  H.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
    var _this33 = this;

    var e = o(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this)) return;
    H.one(e, "hidden.bs.offcanvas", function () {
      h(_this33) && _this33.focus();
    });
    var i = V.findOne(".offcanvas.show");
    i && i !== e && Lt.getInstance(i).hide(), Lt.getOrCreateInstance(e).toggle(this);
  }), H.on(window, "load.bs.offcanvas.data-api", function () {
    return V.find(".offcanvas.show").forEach(function (t) {
      return Lt.getOrCreateInstance(t).show();
    });
  }), F(Lt), b(Lt);

  var St = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      Ot = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
      Nt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      Dt = function Dt(t, e) {
    var i = t.nodeName.toLowerCase();
    if (e.includes(i)) return !St.has(i) || Boolean(Ot.test(t.nodeValue) || Nt.test(t.nodeValue));
    var s = e.filter(function (t) {
      return t instanceof RegExp;
    });

    for (var _t9 = 0, _e11 = s.length; _t9 < _e11; _t9++) {
      if (s[_t9].test(i)) return !0;
    }

    return !1;
  };

  function It(t, e, i) {
    var _ref7;

    if (!t.length) return t;
    if (i && "function" == typeof i) return i(t);

    var s = new window.DOMParser().parseFromString(t, "text/html"),
        n = Object.keys(e),
        o = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(s.body.querySelectorAll("*")));

    var _loop = function _loop(_t10, _i8) {
      var _ref8;

      var i = o[_t10],
          s = i.nodeName.toLowerCase();

      if (!n.includes(s)) {
        i.remove();
        return "continue";
      }

      var r = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(i.attributes)),
          a = [].concat(e["*"] || [], e[s] || []);

      r.forEach(function (t) {
        Dt(t, a) || i.removeAttribute(t.nodeName);
      });
    };

    for (var _t10 = 0, _i8 = o.length; _t10 < _i8; _t10++) {
      var _ret = _loop(_t10, _i8);

      if (_ret === "continue") continue;
    }

    return s.body.innerHTML;
  }

  var Pt = new Set(["sanitize", "allowList", "sanitizeFn"]),
      xt = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(array|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacements: "array",
    boundary: "(string|element)",
    customClass: "(string|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    allowList: "object",
    popperConfig: "(null|object|function)"
  },
      Mt = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: m() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: m() ? "right" : "left"
  },
      jt = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: [0, 0],
    container: !1,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    boundary: "clippingParents",
    customClass: "",
    sanitize: !0,
    sanitizeFn: null,
    allowList: {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    },
    popperConfig: null
  },
      Ht = {
    HIDE: "hide.bs.tooltip",
    HIDDEN: "hidden.bs.tooltip",
    SHOW: "show.bs.tooltip",
    SHOWN: "shown.bs.tooltip",
    INSERTED: "inserted.bs.tooltip",
    CLICK: "click.bs.tooltip",
    FOCUSIN: "focusin.bs.tooltip",
    FOCUSOUT: "focusout.bs.tooltip",
    MOUSEENTER: "mouseenter.bs.tooltip",
    MOUSELEAVE: "mouseleave.bs.tooltip"
  };

  var Bt = /*#__PURE__*/function (_R8) {
    _inherits(Bt, _R8);

    var _super8 = _createSuper(Bt);

    function Bt(t, e) {
      var _this34;

      _classCallCheck(this, Bt);

      if (void 0 === i) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      _this34 = _super8.call(this, t), _this34._isEnabled = !0, _this34._timeout = 0, _this34._hoverState = "", _this34._activeTrigger = {}, _this34._popper = null, _this34._config = _this34._getConfig(e), _this34.tip = null, _this34._setListeners();
      return _this34;
    }

    _createClass(Bt, [{
      key: "enable",
      value: function enable() {
        this._isEnabled = !0;
      }
    }, {
      key: "disable",
      value: function disable() {
        this._isEnabled = !1;
      }
    }, {
      key: "toggleEnabled",
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: "toggle",
      value: function toggle(t) {
        if (this._isEnabled) if (t) {
          var _e12 = this._initializeOnDelegatedTarget(t);

          _e12._activeTrigger.click = !_e12._activeTrigger.click, _e12._isWithActiveTrigger() ? _e12._enter(null, _e12) : _e12._leave(null, _e12);
        } else {
          if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);

          this._enter(null, this);
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout), H.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), _get(_getPrototypeOf(Bt.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _n$classList,
            _ref9,
            _this35 = this;

        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this.isWithContent() || !this._isEnabled) return;
        var t = H.trigger(this._element, this.constructor.Event.SHOW),
            e = u(this._element),
            s = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
        if (t.defaultPrevented || !s) return;
        "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(".tooltip-inner").innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);

        var n = this.getTipElement(),
            o = function (t) {
          do {
            t += Math.floor(1e6 * Math.random());
          } while (document.getElementById(t));

          return t;
        }(this.constructor.NAME);

        n.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this._config.animation && n.classList.add("fade");

        var r = "function" == typeof this._config.placement ? this._config.placement.call(this, n, this._element) : this._config.placement,
            a = this._getAttachment(r);

        this._addAttachmentClass(a);

        var l = this._config.container;
        z.set(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (l.append(n), H.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = i.createPopper(this._element, n, this._getPopperConfig(a)), n.classList.add("show");

        var c = this._resolvePossibleFunction(this._config.customClass);

        c && (_n$classList = n.classList).add.apply(_n$classList, _toConsumableArray(c.split(" "))), "ontouchstart" in document.documentElement && (_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children)).forEach(function (t) {
          H.on(t, "mouseover", g);
        });
        var h = this.tip.classList.contains("fade");

        this._queueCallback(function () {
          var t = _this35._hoverState;
          _this35._hoverState = null, H.trigger(_this35._element, _this35.constructor.Event.SHOWN), "out" === t && _this35._leave(null, _this35);
        }, this.tip, h);
      }
    }, {
      key: "hide",
      value: function hide() {
        var _ref10,
            _this36 = this;

        if (!this._popper) return;
        var t = this.getTipElement();
        if (H.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
        t.classList.remove("show"), "ontouchstart" in document.documentElement && (_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children)).forEach(function (t) {
          return H.off(t, "mouseover", g);
        }), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
        var e = this.tip.classList.contains("fade");
        this._queueCallback(function () {
          _this36._isWithActiveTrigger() || ("show" !== _this36._hoverState && t.remove(), _this36._cleanTipClass(), _this36._element.removeAttribute("aria-describedby"), H.trigger(_this36._element, _this36.constructor.Event.HIDDEN), _this36._disposePopper());
        }, this.tip, e), this._hoverState = "";
      }
    }, {
      key: "update",
      value: function update() {
        null !== this._popper && this._popper.update();
      }
    }, {
      key: "isWithContent",
      value: function isWithContent() {
        return Boolean(this.getTitle());
      }
    }, {
      key: "getTipElement",
      value: function getTipElement() {
        if (this.tip) return this.tip;
        var t = document.createElement("div");
        t.innerHTML = this._config.template;
        var e = t.children[0];
        return this.setContent(e), e.classList.remove("fade", "show"), this.tip = e, this.tip;
      }
    }, {
      key: "setContent",
      value: function setContent(t) {
        this._sanitizeAndSetContent(t, this.getTitle(), ".tooltip-inner");
      }
    }, {
      key: "_sanitizeAndSetContent",
      value: function _sanitizeAndSetContent(t, e, i) {
        var s = V.findOne(i, t);
        e || !s ? this.setElementContent(s, e) : s.remove();
      }
    }, {
      key: "setElementContent",
      value: function setElementContent(t, e) {
        if (null !== t) return a(e) ? (e = l(e), void (this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = It(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
      }
    }, {
      key: "getTitle",
      value: function getTitle() {
        var t = this._element.getAttribute("data-bs-original-title") || this._config.title;

        return this._resolvePossibleFunction(t);
      }
    }, {
      key: "updateAttachment",
      value: function updateAttachment(t) {
        return "right" === t ? "end" : "left" === t ? "start" : t;
      }
    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(t, e) {
        return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this37 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this37._element);
        } : t;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(t) {
        return "function" == typeof t ? t.call(this._element) : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(t) {
        var _this38 = this;

        var e = {
          placement: t,
          modifiers: [{
            name: "flip",
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }, {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "arrow",
            options: {
              element: ".".concat(this.constructor.NAME, "-arrow")
            }
          }, {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: function fn(t) {
              return _this38._handlePopperPlacementChange(t);
            }
          }],
          onFirstUpdate: function onFirstUpdate(t) {
            t.options.placement !== t.placement && _this38._handlePopperPlacementChange(t);
          }
        };
        return _objectSpread(_objectSpread({}, e), "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig);
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(t) {
        this.getTipElement().classList.add("".concat(this._getBasicClassPrefix(), "-").concat(this.updateAttachment(t)));
      }
    }, {
      key: "_getAttachment",
      value: function _getAttachment(t) {
        return Mt[t.toUpperCase()];
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this39 = this;

        this._config.trigger.split(" ").forEach(function (t) {
          if ("click" === t) H.on(_this39._element, _this39.constructor.Event.CLICK, _this39._config.selector, function (t) {
            return _this39.toggle(t);
          });else if ("manual" !== t) {
            var _e13 = "hover" === t ? _this39.constructor.Event.MOUSEENTER : _this39.constructor.Event.FOCUSIN,
                _i9 = "hover" === t ? _this39.constructor.Event.MOUSELEAVE : _this39.constructor.Event.FOCUSOUT;

            H.on(_this39._element, _e13, _this39._config.selector, function (t) {
              return _this39._enter(t);
            }), H.on(_this39._element, _i9, _this39._config.selector, function (t) {
              return _this39._leave(t);
            });
          }
        }), this._hideModalHandler = function () {
          _this39._element && _this39.hide();
        }, H.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = _objectSpread(_objectSpread({}, this._config), {}, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle();
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var t = this._element.getAttribute("title"),
            e = _typeof(this._element.getAttribute("data-bs-original-title"));

        (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
      }
    }, {
      key: "_enter",
      value: function _enter(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e._config.delay && e._config.delay.show ? e._timeout = setTimeout(function () {
          "show" === e._hoverState && e.show();
        }, e._config.delay.show) : e.show());
      }
    }, {
      key: "_leave",
      value: function _leave(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(function () {
          "out" === e._hoverState && e.hide();
        }, e._config.delay.hide) : e.hide());
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        for (var _t11 in this._activeTrigger) {
          if (this._activeTrigger[_t11]) return !0;
        }

        return !1;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        var e = K.getDataAttributes(this._element);
        return Object.keys(e).forEach(function (t) {
          Pt.has(t) && delete e[t];
        }), (t = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), e), "object" == _typeof(t) && t ? t : {})).container = !1 === t.container ? document.body : l(t.container), "number" == typeof t.delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), c("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = It(t.template, t.allowList, t.sanitizeFn)), t;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var t = {};

        for (var _e14 in this._config) {
          this.constructor.Default[_e14] !== this._config[_e14] && (t[_e14] = this._config[_e14]);
        }

        return t;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var t = this.getTipElement(),
            e = new RegExp("(^|\\s)".concat(this._getBasicClassPrefix(), "\\S+"), "g"),
            i = t.getAttribute("class").match(e);
        null !== i && i.length > 0 && i.map(function (t) {
          return t.trim();
        }).forEach(function (e) {
          return t.classList.remove(e);
        });
      }
    }, {
      key: "_getBasicClassPrefix",
      value: function _getBasicClassPrefix() {
        return "bs-tooltip";
      }
    }, {
      key: "_handlePopperPlacementChange",
      value: function _handlePopperPlacementChange(t) {
        var e = t.state;
        e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
      }
    }, {
      key: "_disposePopper",
      value: function _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null);
      }
    }], [{
      key: "Default",
      get: function get() {
        return jt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tooltip";
      }
    }, {
      key: "Event",
      get: function get() {
        return Ht;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return xt;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Bt.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return Bt;
  }(R);

  b(Bt);

  var zt = _objectSpread(_objectSpread({}, Bt.Default), {}, {
    placement: "right",
    offset: [0, 8],
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      Rt = _objectSpread(_objectSpread({}, Bt.DefaultType), {}, {
    content: "(string|element|function)"
  }),
      Ft = {
    HIDE: "hide.bs.popover",
    HIDDEN: "hidden.bs.popover",
    SHOW: "show.bs.popover",
    SHOWN: "shown.bs.popover",
    INSERTED: "inserted.bs.popover",
    CLICK: "click.bs.popover",
    FOCUSIN: "focusin.bs.popover",
    FOCUSOUT: "focusout.bs.popover",
    MOUSEENTER: "mouseenter.bs.popover",
    MOUSELEAVE: "mouseleave.bs.popover"
  };

  var qt = /*#__PURE__*/function (_Bt) {
    _inherits(qt, _Bt);

    var _super9 = _createSuper(qt);

    function qt() {
      _classCallCheck(this, qt);

      return _super9.apply(this, arguments);
    }

    _createClass(qt, [{
      key: "isWithContent",
      value: function isWithContent() {
        return this.getTitle() || this._getContent();
      }
    }, {
      key: "setContent",
      value: function setContent(t) {
        this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t, this._getContent(), ".popover-body");
      }
    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
    }, {
      key: "_getBasicClassPrefix",
      value: function _getBasicClassPrefix() {
        return "bs-popover";
      }
    }], [{
      key: "Default",
      get: function get() {
        return zt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "popover";
      }
    }, {
      key: "Event",
      get: function get() {
        return Ft;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Rt;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = qt.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return qt;
  }(Bt);

  b(qt);
  var Wt = {
    offset: 10,
    method: "auto",
    target: ""
  },
      $t = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  },
      Ut = ".nav-link, .list-group-item, .dropdown-item";

  var Kt = /*#__PURE__*/function (_R9) {
    _inherits(Kt, _R9);

    var _super10 = _createSuper(Kt);

    function Kt(t, e) {
      var _this40;

      _classCallCheck(this, Kt);

      _this40 = _super10.call(this, t), _this40._scrollElement = "BODY" === _this40._element.tagName ? window : _this40._element, _this40._config = _this40._getConfig(e), _this40._offsets = [], _this40._targets = [], _this40._activeTarget = null, _this40._scrollHeight = 0, H.on(_this40._scrollElement, "scroll.bs.scrollspy", function () {
        return _this40._process();
      }), _this40.refresh(), _this40._process();
      return _this40;
    }

    _createClass(Kt, [{
      key: "refresh",
      value: function refresh() {
        var _this41 = this;

        var t = this._scrollElement === this._scrollElement.window ? "offset" : "position",
            e = "auto" === this._config.method ? t : this._config.method,
            i = "position" === e ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), V.find(Ut, this._config.target).map(function (t) {
          var s = n(t),
              o = s ? V.findOne(s) : null;

          if (o) {
            var _t12 = o.getBoundingClientRect();

            if (_t12.width || _t12.height) return [K[e](o).top + i, s];
          }

          return null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (t) {
          _this41._offsets.push(t[0]), _this41._targets.push(t[1]);
        });
      }
    }, {
      key: "dispose",
      value: function dispose() {
        H.off(this._scrollElement, ".bs.scrollspy"), _get(_getPrototypeOf(Kt.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread(_objectSpread(_objectSpread({}, Wt), K.getDataAttributes(this._element)), "object" == _typeof(t) && t ? t : {})).target = l(t.target) || document.documentElement, c("scrollspy", t, $t), t;
      }
    }, {
      key: "_getScrollTop",
      value: function _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }
    }, {
      key: "_getScrollHeight",
      value: function _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }
    }, {
      key: "_getOffsetHeight",
      value: function _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }
    }, {
      key: "_process",
      value: function _process() {
        var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            i = this._config.offset + e - this._getOffsetHeight();

        if (this._scrollHeight !== e && this.refresh(), t >= i) {
          var _t13 = this._targets[this._targets.length - 1];
          this._activeTarget !== _t13 && this._activate(_t13);
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

          for (var _e15 = this._offsets.length; _e15--;) {
            this._activeTarget !== this._targets[_e15] && t >= this._offsets[_e15] && (void 0 === this._offsets[_e15 + 1] || t < this._offsets[_e15 + 1]) && this._activate(this._targets[_e15]);
          }
        }
      }
    }, {
      key: "_activate",
      value: function _activate(t) {
        this._activeTarget = t, this._clear();
        var e = Ut.split(",").map(function (e) {
          return "".concat(e, "[data-bs-target=\"").concat(t, "\"],").concat(e, "[href=\"").concat(t, "\"]");
        }),
            i = V.findOne(e.join(","), this._config.target);
        i.classList.add("active"), i.classList.contains("dropdown-item") ? V.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add("active") : V.parents(i, ".nav, .list-group").forEach(function (t) {
          V.prev(t, ".nav-link, .list-group-item").forEach(function (t) {
            return t.classList.add("active");
          }), V.prev(t, ".nav-item").forEach(function (t) {
            V.children(t, ".nav-link").forEach(function (t) {
              return t.classList.add("active");
            });
          });
        }), H.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: t
        });
      }
    }, {
      key: "_clear",
      value: function _clear() {
        V.find(Ut, this._config.target).filter(function (t) {
          return t.classList.contains("active");
        }).forEach(function (t) {
          return t.classList.remove("active");
        });
      }
    }], [{
      key: "Default",
      get: function get() {
        return Wt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "scrollspy";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Kt.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return Kt;
  }(R);

  H.on(window, "load.bs.scrollspy.data-api", function () {
    V.find('[data-bs-spy="scroll"]').forEach(function (t) {
      return new Kt(t);
    });
  }), b(Kt);

  var Vt = /*#__PURE__*/function (_R10) {
    _inherits(Vt, _R10);

    var _super11 = _createSuper(Vt);

    function Vt() {
      _classCallCheck(this, Vt);

      return _super11.apply(this, arguments);
    }

    _createClass(Vt, [{
      key: "show",
      value: function show() {
        var _this42 = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
        var t;

        var e = o(this._element),
            i = this._element.closest(".nav, .list-group");

        if (i) {
          var _e16 = "UL" === i.nodeName || "OL" === i.nodeName ? ":scope > li > .active" : ".active";

          t = V.find(_e16, i), t = t[t.length - 1];
        }

        var s = t ? H.trigger(t, "hide.bs.tab", {
          relatedTarget: this._element
        }) : null;
        if (H.trigger(this._element, "show.bs.tab", {
          relatedTarget: t
        }).defaultPrevented || null !== s && s.defaultPrevented) return;

        this._activate(this._element, i);

        var n = function n() {
          H.trigger(t, "hidden.bs.tab", {
            relatedTarget: _this42._element
          }), H.trigger(_this42._element, "shown.bs.tab", {
            relatedTarget: t
          });
        };

        e ? this._activate(e, e.parentNode, n) : n();
      }
    }, {
      key: "_activate",
      value: function _activate(t, e, i) {
        var _this43 = this;

        var s = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? V.children(e, ".active") : V.find(":scope > li > .active", e))[0],
            n = i && s && s.classList.contains("fade"),
            o = function o() {
          return _this43._transitionComplete(t, s, i);
        };

        s && n ? (s.classList.remove("show"), this._queueCallback(o, t, !0)) : o();
      }
    }, {
      key: "_transitionComplete",
      value: function _transitionComplete(t, e, i) {
        if (e) {
          e.classList.remove("active");

          var _t14 = V.findOne(":scope > .dropdown-menu .active", e.parentNode);

          _t14 && _t14.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
        }

        t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), p(t), t.classList.contains("fade") && t.classList.add("show");
        var s = t.parentNode;

        if (s && "LI" === s.nodeName && (s = s.parentNode), s && s.classList.contains("dropdown-menu")) {
          var _e17 = t.closest(".dropdown");

          _e17 && V.find(".dropdown-toggle", _e17).forEach(function (t) {
            return t.classList.add("active");
          }), t.setAttribute("aria-expanded", !0);
        }

        i && i();
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "tab";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Vt.getOrCreateInstance(this);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return Vt;
  }(R);

  H.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this) || Vt.getOrCreateInstance(this).show();
  }), b(Vt);
  var Xt = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      Yt = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  };

  var Qt = /*#__PURE__*/function (_R11) {
    _inherits(Qt, _R11);

    var _super12 = _createSuper(Qt);

    function Qt(t, e) {
      var _this44;

      _classCallCheck(this, Qt);

      _this44 = _super12.call(this, t), _this44._config = _this44._getConfig(e), _this44._timeout = null, _this44._hasMouseInteraction = !1, _this44._hasKeyboardInteraction = !1, _this44._setListeners();
      return _this44;
    }

    _createClass(Qt, [{
      key: "show",
      value: function show() {
        var _this45 = this;

        H.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), p(this._element), this._element.classList.add("show"), this._element.classList.add("showing"), this._queueCallback(function () {
          _this45._element.classList.remove("showing"), H.trigger(_this45._element, "shown.bs.toast"), _this45._maybeScheduleHide();
        }, this._element, this._config.animation));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this46 = this;

        this._element.classList.contains("show") && (H.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add("showing"), this._queueCallback(function () {
          _this46._element.classList.add("hide"), _this46._element.classList.remove("showing"), _this46._element.classList.remove("show"), H.trigger(_this46._element, "hidden.bs.toast");
        }, this._element, this._config.animation)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), _get(_getPrototypeOf(Qt.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, Yt), K.getDataAttributes(this._element)), "object" == _typeof(t) && t ? t : {}), c("toast", t, this.constructor.DefaultType), t;
      }
    }, {
      key: "_maybeScheduleHide",
      value: function _maybeScheduleHide() {
        var _this47 = this;

        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function () {
          _this47.hide();
        }, this._config.delay)));
      }
    }, {
      key: "_onInteraction",
      value: function _onInteraction(t, e) {
        switch (t.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = e;
            break;

          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = e;
        }

        if (e) return void this._clearTimeout();
        var i = t.relatedTarget;
        this._element === i || this._element.contains(i) || this._maybeScheduleHide();
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this48 = this;

        H.on(this._element, "mouseover.bs.toast", function (t) {
          return _this48._onInteraction(t, !0);
        }), H.on(this._element, "mouseout.bs.toast", function (t) {
          return _this48._onInteraction(t, !1);
        }), H.on(this._element, "focusin.bs.toast", function (t) {
          return _this48._onInteraction(t, !0);
        }), H.on(this._element, "focusout.bs.toast", function (t) {
          return _this48._onInteraction(t, !1);
        });
      }
    }, {
      key: "_clearTimeout",
      value: function _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
    }], [{
      key: "DefaultType",
      get: function get() {
        return Xt;
      }
    }, {
      key: "Default",
      get: function get() {
        return Yt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "toast";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Qt.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return Qt;
  }(R);

  return F(Qt), b(Qt), {
    Alert: q,
    Button: W,
    Carousel: et,
    Collapse: nt,
    Dropdown: pt,
    Modal: Tt,
    Offcanvas: Lt,
    Popover: qt,
    ScrollSpy: Kt,
    Tab: Vt,
    Toast: Qt,
    Tooltip: Bt
  };
});
//# sourceMappingURL=all.js.map

//
//
//
//
//
//
const _tagTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'];
var script$o = {
  props: {
    tag: {
      type: String,
      required: true,
      default: 'p',
      validator: value => _tagTypes.includes(value)
    },
    span: Boolean,
    white: Boolean,
    dark: Boolean,
    gray: Boolean,
    primary: Boolean,
    primaryLight: Boolean,
    primaryDark: Boolean,
    danger: Boolean,
    meteoriteDark: Boolean
  },
  computed: {
    getTextClass() {
      return [this.white && 'text-h-white', this.dark && 'text-h-dark', this.gray && 'text-h-gray', this.primary && 'text-h-primary', this.primaryLight && 'text-h-primary-light', this.primaryDark && 'text-h-primary-dark', this.meteoriteDark && 'text-h-meteorite-dark', this.danger && 'text-h-danger'];
    }

  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__$o = script$o;
/* template */

var __vue_render__$F = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c(_vm.tag, {
    tag: "component",
    class: _vm.getTextClass
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$F = [];
/* style */

const __vue_inject_styles__$F = undefined;
/* scoped */

const __vue_scope_id__$F = undefined;
/* module identifier */

const __vue_module_identifier__$F = undefined;
/* functional template */

const __vue_is_functional_template__$F = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$18 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$F,
  staticRenderFns: __vue_staticRenderFns__$F
}, __vue_inject_styles__$F, __vue_script__$o, __vue_scope_id__$F, __vue_is_functional_template__$F, __vue_module_identifier__$F, false, undefined, undefined, undefined);

var HText = __vue_component__$18;

const isBoolean = val => "boolean" === typeof val;
const toTitleCase = word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
function kebabToCamel(string) {
  let pascal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let result = string?.replace(/(-\w)/g, () => matches[1]?.toUpperCase());

  if (pascal) {
    result = result?.charAt(0)?.toUpperCase() + result?.slice(1);
  }

  return result;
}
const camelToDash = str => str.replace(/(^[A-Z])/, _ref => {
  let [first] = _ref;
  return first.toLowerCase();
}).replace(/([A-Z])/g, _ref2 => {
  let [letter] = _ref2;
  return `-${letter.toLowerCase()}`;
});
const getClasses = function (element, props) {
  let delimiter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "--";
  let prepend = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  let camelToDashKey = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  return Object.entries(props).map(_ref3 => {
    let [key, value] = _ref3;
    if (camelToDashKey) key = camelToDash(key);
    if (!value || !isBoolean(value)) return;
    return `${element}${delimiter}${prepend ? prepend : ""}${camelToDash(key)}`;
  });
};

/* script */

/* template */
var __vue_render__$E = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('path', {
    attrs: {
      "d": "M0 0v2h20V0H0zm0 6v2h20V6H0zm0 6v2h20v-2H0z"
    }
  });
};

var __vue_staticRenderFns__$E = [];
/* style */

const __vue_inject_styles__$E = undefined;
/* scoped */

const __vue_scope_id__$E = undefined;
/* module identifier */

const __vue_module_identifier__$E = undefined;
/* functional template */

const __vue_is_functional_template__$E = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$16 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$E,
  staticRenderFns: __vue_staticRenderFns__$E
}, __vue_inject_styles__$E, {}, __vue_scope_id__$E, __vue_is_functional_template__$E, __vue_module_identifier__$E, false, undefined, undefined, undefined);

var __vue_component__$17 = __vue_component__$16;

/* script */

/* template */
var __vue_render__$D = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('path', {
    attrs: {
      "d": "M3.414.996l-3.41.018.01 2 2.07-.01 3.295 7.904-1.197 1.916A2.077 2.077 0 0 0 5.942 16H18v-2H5.941l-.064-.117L7.053 12h7.468a2 2 0 0 0 1.748-1.03l3.604-6.484A1 1 0 0 0 18.998 3H4.25L3.414.996zM5.082 5h12.217l-2.777 5H7.165L5.082 5zM6 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
    }
  });
};

var __vue_staticRenderFns__$D = [];
/* style */

const __vue_inject_styles__$D = undefined;
/* scoped */

const __vue_scope_id__$D = undefined;
/* module identifier */

const __vue_module_identifier__$D = undefined;
/* functional template */

const __vue_is_functional_template__$D = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$14 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$D,
  staticRenderFns: __vue_staticRenderFns__$D
}, __vue_inject_styles__$D, {}, __vue_scope_id__$D, __vue_is_functional_template__$D, __vue_module_identifier__$D, false, undefined, undefined, undefined);

var __vue_component__$15 = __vue_component__$14;

/* script */

/* template */
var __vue_render__$C = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('path', {
    attrs: {
      "d": "M1.41.59L6 5.17 10.59.59 12 2 6 8 0 2 1.41.59z"
    }
  });
};

var __vue_staticRenderFns__$C = [];
/* style */

const __vue_inject_styles__$C = undefined;
/* scoped */

const __vue_scope_id__$C = undefined;
/* module identifier */

const __vue_module_identifier__$C = undefined;
/* functional template */

const __vue_is_functional_template__$C = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$12 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$C,
  staticRenderFns: __vue_staticRenderFns__$C
}, __vue_inject_styles__$C, {}, __vue_scope_id__$C, __vue_is_functional_template__$C, __vue_module_identifier__$C, false, undefined, undefined, undefined);

var __vue_component__$13 = __vue_component__$12;

/* script */

/* template */
var __vue_render__$B = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('path', {
    attrs: {
      "d": "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
    }
  });
};

var __vue_staticRenderFns__$B = [];
/* style */

const __vue_inject_styles__$B = undefined;
/* scoped */

const __vue_scope_id__$B = undefined;
/* module identifier */

const __vue_module_identifier__$B = undefined;
/* functional template */

const __vue_is_functional_template__$B = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$10 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$B,
  staticRenderFns: __vue_staticRenderFns__$B
}, __vue_inject_styles__$B, {}, __vue_scope_id__$B, __vue_is_functional_template__$B, __vue_module_identifier__$B, false, undefined, undefined, undefined);

var __vue_component__$11 = __vue_component__$10;

/* script */

/* template */
var __vue_render__$A = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('path', {
    attrs: {
      "d": "M4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.2203 20.9219 14.7187 21.9723 12.1041 21.9995C12.5284 21.9937 12.9435 21.9535 13.3537 21.8981V14.6507H15.9416L16.3479 12.0217H13.3532V10.5849C13.3532 9.4928 13.71 8.52438 14.7316 8.52438H16.3732V6.23017L16.3577 6.22807C16.0632 6.18825 15.4545 6.10596 14.3221 6.10596C11.9153 6.10596 10.5042 7.37701 10.5042 10.2728V12.0217H8.03003V14.6507H10.5042V21.8765C10.9587 21.9448 11.4186 21.9928 11.8894 21.9994C9.27722 21.9705 6.77821 20.9204 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893Z"
    }
  });
};

var __vue_staticRenderFns__$A = [];
/* style */

const __vue_inject_styles__$A = undefined;
/* scoped */

const __vue_scope_id__$A = undefined;
/* module identifier */

const __vue_module_identifier__$A = undefined;
/* functional template */

const __vue_is_functional_template__$A = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$_ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$A,
  staticRenderFns: __vue_staticRenderFns__$A
}, __vue_inject_styles__$A, {}, __vue_scope_id__$A, __vue_is_functional_template__$A, __vue_module_identifier__$A, false, undefined, undefined, undefined);

var __vue_component__$$ = __vue_component__$_;

/* script */

/* template */
var __vue_render__$z = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('path', {
    attrs: {
      "d": "M10.9 2.1C6.3 2.6 2.6 6.3 2.1 10.8C1.5 15.8 4.6 20.1 9 21.5V19.2C9 19.2 8.6 19.3 8.1 19.3C6.7 19.3 6.1 18.1 6 17.4C5.9 17 5.7 16.7 5.4 16.4C5.1 16.3 5 16.3 5 16.2C5 16 5.3 16 5.4 16C6 16 6.5 16.7 6.7 17C7.2 17.8 7.8 18 8.1 18C8.5 18 8.8 17.9 9 17.8C9.1 17.1 9.4 16.4 10 16C7.7 15.5 6 14.2 6 12C6 10.9 6.5 9.8 7.2 9C7.1 8.8 7 8.3 7 7.6C7 7.2 7 6.6 7.3 6C7.3 6 8.7 6 10.1 7.3C10.6 7.1 11.3 7 12 7C12.7 7 13.4 7.1 14 7.3C15.3 6 16.8 6 16.8 6C17 6.6 17 7.2 17 7.6C17 8.4 16.9 8.8 16.8 9C17.5 9.8 18 10.8 18 12C18 14.2 16.3 15.5 14 16C14.6 16.5 15 17.4 15 18.3V21.6C19.1 20.3 22 16.5 22 12.1C22 6.1 16.9 1.4 10.9 2.1Z"
    }
  });
};

var __vue_staticRenderFns__$z = [];
/* style */

const __vue_inject_styles__$z = undefined;
/* scoped */

const __vue_scope_id__$z = undefined;
/* module identifier */

const __vue_module_identifier__$z = undefined;
/* functional template */

const __vue_is_functional_template__$z = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$Y = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$z,
  staticRenderFns: __vue_staticRenderFns__$z
}, __vue_inject_styles__$z, {}, __vue_scope_id__$z, __vue_is_functional_template__$z, __vue_module_identifier__$z, false, undefined, undefined, undefined);

var __vue_component__$Z = __vue_component__$Y;

/* script */

/* template */
var __vue_render__$y = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('path', {
    attrs: {
      "d": "M10 0C4.489 0 0 4.489 0 10s4.489 10 10 10 10-4.489 10-10S15.511 0 10 0zm0 2c.248 0 .52.102.867.432s.723.883 1.047 1.611c.246.554.448 1.23.621 1.957h-5.07c.173-.726.375-1.403.62-1.957.325-.728.701-1.281 1.048-1.611C9.48 2.102 9.752 2 10 2zm-3.549.834c-.065.13-.132.26-.193.396-.362.814-.643 1.756-.854 2.77H3.072a7.99 7.99 0 0 1 3.38-3.166zm7.098 0A7.99 7.99 0 0 1 16.928 6h-2.332c-.211-1.014-.492-1.956-.854-2.77-.06-.137-.128-.265-.193-.396zM2.262 8h2.836A21.14 21.14 0 0 0 5 10c0 .686.036 1.353.098 2H2.262A8.028 8.028 0 0 1 2 10c0-.693.098-1.36.262-2zm4.855 0h5.766c.07.643.117 1.307.117 2 0 .693-.048 1.357-.117 2H7.117A18.472 18.472 0 0 1 7 10c0-.693.048-1.357.117-2zm7.785 0h2.836c.164.64.262 1.307.262 2 0 .693-.098 1.36-.262 2h-2.836c.062-.647.098-1.314.098-2 0-.686-.036-1.353-.098-2zm-11.83 6h2.332c.211 1.014.492 1.956.854 2.77.06.137.128.265.193.396A7.99 7.99 0 0 1 3.072 14zm4.393 0h5.07c-.173.726-.375 1.403-.62 1.957-.324.728-.701 1.281-1.048 1.611-.347.33-.619.432-.867.432s-.52-.102-.867-.432-.723-.883-1.047-1.611c-.246-.554-.448-1.23-.621-1.957zm7.13 0h2.333a7.99 7.99 0 0 1-3.38 3.166c.066-.13.133-.26.194-.396.362-.814.643-1.756.854-2.77z"
    }
  });
};

var __vue_staticRenderFns__$y = [];
/* style */

const __vue_inject_styles__$y = undefined;
/* scoped */

const __vue_scope_id__$y = undefined;
/* module identifier */

const __vue_module_identifier__$y = undefined;
/* functional template */

const __vue_is_functional_template__$y = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$W = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$y,
  staticRenderFns: __vue_staticRenderFns__$y
}, __vue_inject_styles__$y, {}, __vue_scope_id__$y, __vue_is_functional_template__$y, __vue_module_identifier__$y, false, undefined, undefined, undefined);

var __vue_component__$X = __vue_component__$W;

/* script */

/* template */
var __vue_render__$x = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('path', {
    attrs: {
      "d": "M7 3C4.239 3 3 4.239 3 7V17C3 19.761 4.239 21 7 21H17C19.761 21 21 19.761 21 17V7C21 4.239 19.761 3 17 3H7ZM18 5C18.552 5 19 5.448 19 6C19 6.552 18.552 7 18 7C17.448 7 17 6.552 17 6C17 5.448 17.448 5 18 5ZM12 7C14.761 7 17 9.239 17 12C17 14.761 14.761 17 12 17C9.239 17 7 14.761 7 12C7 9.239 9.239 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
    }
  });
};

var __vue_staticRenderFns__$x = [];
/* style */

const __vue_inject_styles__$x = undefined;
/* scoped */

const __vue_scope_id__$x = undefined;
/* module identifier */

const __vue_module_identifier__$x = undefined;
/* functional template */

const __vue_is_functional_template__$x = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$U = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$x,
  staticRenderFns: __vue_staticRenderFns__$x
}, __vue_inject_styles__$x, {}, __vue_scope_id__$x, __vue_is_functional_template__$x, __vue_module_identifier__$x, false, undefined, undefined, undefined);

var __vue_component__$V = __vue_component__$U;

/* script */

/* template */
var __vue_render__$w = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('path', {
    attrs: {
      "d": "M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM9 17H6.477V10H9V17ZM7.694 8.717C6.923 8.717 6.408 8.203 6.408 7.517C6.408 6.831 6.922 6.317 7.779 6.317C8.55 6.317 9.065 6.831 9.065 7.517C9.065 8.203 8.551 8.717 7.694 8.717ZM18 17H15.558V13.174C15.558 12.116 14.907 11.872 14.663 11.872C14.419 11.872 13.605 12.035 13.605 13.174C13.605 13.337 13.605 17 13.605 17H11.082V10H13.605V10.977C13.93 10.407 14.581 10 15.802 10C17.023 10 18 10.977 18 13.174V17Z"
    }
  });
};

var __vue_staticRenderFns__$w = [];
/* style */

const __vue_inject_styles__$w = undefined;
/* scoped */

const __vue_scope_id__$w = undefined;
/* module identifier */

const __vue_module_identifier__$w = undefined;
/* functional template */

const __vue_is_functional_template__$w = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$S = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$w,
  staticRenderFns: __vue_staticRenderFns__$w
}, __vue_inject_styles__$w, {}, __vue_scope_id__$w, __vue_is_functional_template__$w, __vue_module_identifier__$w, false, undefined, undefined, undefined);

var __vue_component__$T = __vue_component__$S;

/* script */

/* template */
var __vue_render__$v = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('path', {
    attrs: {
      "d": "M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z"
    }
  });
};

var __vue_staticRenderFns__$v = [];
/* style */

const __vue_inject_styles__$v = undefined;
/* scoped */

const __vue_scope_id__$v = undefined;
/* module identifier */

const __vue_module_identifier__$v = undefined;
/* functional template */

const __vue_is_functional_template__$v = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$Q = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$v,
  staticRenderFns: __vue_staticRenderFns__$v
}, __vue_inject_styles__$v, {}, __vue_scope_id__$v, __vue_is_functional_template__$v, __vue_module_identifier__$v, false, undefined, undefined, undefined);

var __vue_component__$R = __vue_component__$Q;

/* script */

/* template */
var __vue_render__$u = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('path', {
    attrs: {
      "d": "M12 2C6.489 2 2 6.489 2 12C2 17.511 6.489 22 12 22C17.511 22 22 17.511 22 12C22 6.489 17.511 2 12 2ZM12 4C16.4301 4 20 7.56988 20 12C20 16.4301 16.4301 20 12 20C7.56988 20 4 16.4301 4 12C4 7.56988 7.56988 4 12 4ZM12 6C9.79 6 8 7.79 8 10H10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 12 11 12.367 11 15H13C13 13.349 16 12.5 16 10C16 7.79 14.21 6 12 6ZM11 16V18H13V16H11Z"
    }
  });
};

var __vue_staticRenderFns__$u = [];
/* style */

const __vue_inject_styles__$u = undefined;
/* scoped */

const __vue_scope_id__$u = undefined;
/* module identifier */

const __vue_module_identifier__$u = undefined;
/* functional template */

const __vue_is_functional_template__$u = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$O = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$u,
  staticRenderFns: __vue_staticRenderFns__$u
}, __vue_inject_styles__$u, {}, __vue_scope_id__$u, __vue_is_functional_template__$u, __vue_module_identifier__$u, false, undefined, undefined, undefined);

var __vue_component__$P = __vue_component__$O;

/* script */

/* template */
var __vue_render__$t = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('path', {
    attrs: {
      "d": "M8.2949 -7.25164e-07L13.6729 4.91503C11.546 7.35512 9.99642 9.69063 9.02413 11.9216C8.1126 14.0828 7.65684 16.4183 7.65684 18.9281L4.55764 15.0588L14.9491 15.0588L14.9491 32L2.79753e-06 32L1.85588e-06 21.2288C1.50847e-06 17.2549 0.607686 13.6296 1.82306 10.3529C3.0992 7.00653 5.25648 3.55556 8.2949 -7.25164e-07ZM27.3458 -2.39065e-06L32.7239 4.91503C30.597 7.35512 29.0474 9.69063 28.0751 11.9216C27.1635 14.0828 26.7078 16.4183 26.7078 18.9281L23.6086 15.0588L34 15.0588L34 32L19.0509 32L19.0509 21.2288C19.0509 17.2549 19.6586 13.6296 20.874 10.3529C22.1501 7.00653 24.3074 3.55555 27.3458 -2.39065e-06Z"
    }
  });
};

var __vue_staticRenderFns__$t = [];
/* style */

const __vue_inject_styles__$t = undefined;
/* scoped */

const __vue_scope_id__$t = undefined;
/* module identifier */

const __vue_module_identifier__$t = undefined;
/* functional template */

const __vue_is_functional_template__$t = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$M = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$t,
  staticRenderFns: __vue_staticRenderFns__$t
}, __vue_inject_styles__$t, {}, __vue_scope_id__$t, __vue_is_functional_template__$t, __vue_module_identifier__$t, false, undefined, undefined, undefined);

var __vue_component__$N = __vue_component__$M;

/* script */

/* template */
var __vue_render__$s = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('path', {
    attrs: {
      "d": "M13 3C8.03 3 4 7.03 4 12H1L4.89 15.89L4.96 16.03L9 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C8.27 19.99 10.51 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z"
    }
  });
};

var __vue_staticRenderFns__$s = [];
/* style */

const __vue_inject_styles__$s = undefined;
/* scoped */

const __vue_scope_id__$s = undefined;
/* module identifier */

const __vue_module_identifier__$s = undefined;
/* functional template */

const __vue_is_functional_template__$s = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$K = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$s,
  staticRenderFns: __vue_staticRenderFns__$s
}, __vue_inject_styles__$s, {}, __vue_scope_id__$s, __vue_is_functional_template__$s, __vue_module_identifier__$s, false, undefined, undefined, undefined);

var __vue_component__$L = __vue_component__$K;

/* script */

/* template */
var __vue_render__$r = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('path', {
    attrs: {
      "d": "M10 2L9 3H4V5H5V20C5 20.5222 5.19133 21.0546 5.56836 21.4316C5.94539 21.8087 6.47778 22 7 22H17C17.5222 22 18.0546 21.8087 18.4316 21.4316C18.8087 21.0546 19 20.5222 19 20V5H20V3H15L14 2H10ZM7 5H17V20H7V5ZM9 7V18H11V7H9ZM13 7V18H15V7H13Z"
    }
  });
};

var __vue_staticRenderFns__$r = [];
/* style */

const __vue_inject_styles__$r = undefined;
/* scoped */

const __vue_scope_id__$r = undefined;
/* module identifier */

const __vue_module_identifier__$r = undefined;
/* functional template */

const __vue_is_functional_template__$r = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$I = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$r,
  staticRenderFns: __vue_staticRenderFns__$r
}, __vue_inject_styles__$r, {}, __vue_scope_id__$r, __vue_is_functional_template__$r, __vue_module_identifier__$r, false, undefined, undefined, undefined);

var __vue_component__$J = __vue_component__$I;

/* script */

/* template */
var __vue_render__$q = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('path', {
    attrs: {
      "d": "M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM17.05 9.514C17.05 9.6 17.05 9.685 17.05 9.857C17.05 13.114 14.564 16.886 10.021 16.886C8.65 16.886 7.364 16.457 6.25 15.772C6.421 15.772 6.679 15.772 6.85 15.772C7.964 15.772 9.079 15.343 9.936 14.743C8.822 14.743 7.965 13.972 7.622 13.029C7.793 13.029 7.965 13.115 8.051 13.115C8.308 13.115 8.48 13.115 8.737 13.029C7.623 12.772 6.766 11.829 6.766 10.629C7.109 10.8 7.452 10.886 7.88 10.972C7.194 10.372 6.766 9.686 6.766 8.829C6.766 8.4 6.852 7.972 7.109 7.629C8.309 9.086 10.109 10.115 12.166 10.2C12.166 10.029 12.08 9.857 12.08 9.6C12.08 8.229 13.194 7.114 14.566 7.114C15.252 7.114 15.937 7.371 16.366 7.885C16.966 7.799 17.48 7.542 17.909 7.285C17.738 7.885 17.309 8.314 16.795 8.656C17.309 8.57 17.738 8.485 18.252 8.227C17.907 8.743 17.479 9.171 17.05 9.514Z"
    }
  });
};

var __vue_staticRenderFns__$q = [];
/* style */

const __vue_inject_styles__$q = undefined;
/* scoped */

const __vue_scope_id__$q = undefined;
/* module identifier */

const __vue_module_identifier__$q = undefined;
/* functional template */

const __vue_is_functional_template__$q = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$G = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$q,
  staticRenderFns: __vue_staticRenderFns__$q
}, __vue_inject_styles__$q, {}, __vue_scope_id__$q, __vue_is_functional_template__$q, __vue_module_identifier__$q, false, undefined, undefined, undefined);

var __vue_component__$H = __vue_component__$G;

/* script */

/* template */
var __vue_render__$p = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('path', {
    attrs: {
      "d": "M13.8068 16.4151L12.4122 17.8072C12.1577 18.0643 11.7422 18.0643 11.4851 17.8072L7.99984 14.3244L4.51719 17.8072C4.26008 18.0643 3.84196 18.0643 3.58745 17.8072L2.19283 16.4151C1.93572 16.158 1.93572 15.7425 2.19283 15.4853L5.67548 12L2.19283 8.51726C1.93832 8.25755 1.93832 7.83941 2.19283 7.58749L3.58745 6.19284C3.84196 5.93572 4.26008 5.93572 4.51719 6.19284L7.99984 9.67817L11.4851 6.19284C11.7422 5.93572 12.1603 5.93572 12.4122 6.19284L13.8068 7.58489C14.064 7.84201 14.064 8.26014 13.8094 8.51726L10.3242 12L13.8068 15.4853C14.064 15.7425 14.064 16.158 13.8068 16.4151Z"
    }
  });
};

var __vue_staticRenderFns__$p = [];
/* style */

const __vue_inject_styles__$p = undefined;
/* scoped */

const __vue_scope_id__$p = undefined;
/* module identifier */

const __vue_module_identifier__$p = undefined;
/* functional template */

const __vue_is_functional_template__$p = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$E = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$p,
  staticRenderFns: __vue_staticRenderFns__$p
}, __vue_inject_styles__$p, {}, __vue_scope_id__$p, __vue_is_functional_template__$p, __vue_module_identifier__$p, false, undefined, undefined, undefined);

var __vue_component__$F = __vue_component__$E;

var Icons = /*#__PURE__*/Object.freeze({
	__proto__: null,
	IcBurger: __vue_component__$17,
	IcCart: __vue_component__$15,
	IcChevron: __vue_component__$13,
	IcExclamation: __vue_component__$11,
	IcFacebook: __vue_component__$$,
	IcGithub: __vue_component__$Z,
	IcGlobe: __vue_component__$X,
	IcInstagram: __vue_component__$V,
	IcLinkedIn: __vue_component__$T,
	IcLock: __vue_component__$R,
	IcQuestion: __vue_component__$P,
	IcQuotes: __vue_component__$N,
	IcRevert: __vue_component__$L,
	IcTrash: __vue_component__$J,
	IcTwitter: __vue_component__$H,
	IcX: __vue_component__$F
});

//
var script$n = {
  props: {
    title: String,
    iconName: String,
    icon: {
      type: String,
      required: true
    },
    viewBox: {
      type: [Number, String],
      default: "0 0 24 24"
    },
    danger: Boolean,
    gray: Boolean,
    success: Boolean,
    info: Boolean,
    warning: Boolean,
    warningDark: Boolean,
    dark: Boolean,
    light: Boolean,
    primary: Boolean,
    headerBg: Boolean,
    customClass: String,
    disabled: Boolean
  },
  computed: {
    currentIcon() {
      return Icons[kebabToCamel(toTitleCase(this.icon))];
    },

    iconClass() {
      return getClasses("icon", this.$props, "-");
    }

  }
};

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__$n = script$n;
/* template */

var __vue_render__$o = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    staticClass: "h-icon",
    class: [_vm.iconClass, _vm.customClass],
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": _vm.viewBox,
      "aria-labelledby": _vm.iconName || _vm.icon,
      "role": "presentation"
    }
  }, [_vm.title ? _c('title', {
    attrs: {
      "id": _vm.iconName || _vm.icon
    }
  }, [_vm._v("\n    " + _vm._s(_vm.title) + "\n  ")]) : _vm._e(), _vm._v(" "), _c('g', [_c(_vm.currentIcon, {
    tag: "component"
  })], 1)]);
};

var __vue_staticRenderFns__$o = [];
/* style */

const __vue_inject_styles__$o = function (inject) {
  if (!inject) return;
  inject("data-v-22c13275_0", {
    source: ".h-icon[data-v-22c13275]{width:24px;height:24px}.icon-success[data-v-22c13275]{fill:#00b090!important}.icon-info[data-v-22c13275]{fill:#36a3f7!important}.icon-warning[data-v-22c13275]{fill:#ffcd35!important}.icon-danger[data-v-22c13275]{fill:#fc5185!important}.icon-light[data-v-22c13275]{fill:#fff!important}.icon-dark[data-v-22c13275]{fill:#1d1e20!important}.icon-gray[data-v-22c13275]{fill:#727586!important}.icon-gray-light[data-v-22c13275]{fill:#f2f3f6!important}.icon-header-bg[data-v-22c13275]{fill:#36344d!important}.icon-danger-light[data-v-22c13275]{fill:#ffe8ef!important}.icon-success-dark[data-v-22c13275]{fill:#008361!important}.icon-success-light[data-v-22c13275]{fill:#def4f0!important}.icon-warning-light[data-v-22c13275]{fill:#fff8e2!important}.icon-warning-dark[data-v-22c13275]{fill:#fea419!important}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$o = "data-v-22c13275";
/* module identifier */

const __vue_module_identifier__$o = undefined;
/* functional template */

const __vue_is_functional_template__$o = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$D = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$o,
  staticRenderFns: __vue_staticRenderFns__$o
}, __vue_inject_styles__$o, __vue_script__$n, __vue_scope_id__$o, __vue_is_functional_template__$o, __vue_module_identifier__$o, false, createInjector, undefined, undefined);

var HIcon = __vue_component__$D;

//
var script$m = {
  name: "ContentTitle",
  components: {
    HText,
    HIcon
  },
  computed: {
    getClass() {
      const contentSlot = this.$slots.content;
      const slotText = contentSlot[0].text;
      return slotText.length <= 300 ? "tile-1x2" : "tile-2x2";
    }

  }
};

/* script */
const __vue_script__$m = script$m;
/* template */

var __vue_render__$n = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "tile",
    class: _vm.getClass
  }, [_c('div', {
    staticClass: "icon pb-32"
  }, [_vm._t("icon", function () {
    return [_c('HIcon', {
      attrs: {
        "icon": "ic-quotes",
        "dark": ""
      }
    })];
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "content pb-24"
  }, [_c('HText', {
    staticClass: "pb-8",
    attrs: {
      "tag": "h4",
      "meteoriteDark": ""
    }
  }, [_vm._t("title")], 2), _vm._v(" "), _c('HText', {
    attrs: {
      "tag": "span",
      "meteoriteDark": ""
    }
  }, [_vm._t("content")], 2)], 1), _vm._v(" "), _c('div', {
    staticClass: "author"
  }, [_c('HText', {
    attrs: {
      "tag": "h4",
      "meteoriteDark": ""
    }
  }, [_vm._t("author")], 2)], 1)]);
};

var __vue_staticRenderFns__$n = [];
/* style */

const __vue_inject_styles__$n = function (inject) {
  if (!inject) return;
  inject("data-v-4fb429ba_0", {
    source: ".tile[data-v-4fb429ba]{text-align:center;padding:48px 16px;border:1px solid #dadce0;box-shadow:0 0 32px 0 #16213e17;border-radius:6px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$n = "data-v-4fb429ba";
/* module identifier */

const __vue_module_identifier__$n = undefined;
/* functional template */

const __vue_is_functional_template__$n = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$B = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$n,
  staticRenderFns: __vue_staticRenderFns__$n
}, __vue_inject_styles__$n, __vue_script__$m, __vue_scope_id__$n, __vue_is_functional_template__$n, __vue_module_identifier__$n, false, createInjector, undefined, undefined);

var __vue_component__$C = __vue_component__$B;

//
//
//
//
//
//
//
//
var script$l = {
  name: "language",
  props: {
    countryCode: {
      type: String,
      default: "com"
    },
    lang: {
      type: String,
      default: "English"
    },
    countryName: {
      type: String,
      default: "United States"
    }
  }
};

/* script */
const __vue_script__$l = script$l;
/* template */

var __vue_render__$m = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('HText', {
    staticClass: "d-flex mb-24",
    attrs: {
      "tag": "span",
      "meteorite-dark": ""
    }
  }, [_c('IconFlag', {
    staticClass: "mt-auto mb-auto",
    attrs: {
      "country-code": _vm.countryCode
    }
  }), _vm._v(" "), _c('HText', {
    staticClass: "pl-8 country-name",
    attrs: {
      "tag": "p"
    }
  }, [_vm._v(_vm._s(_vm.countryName))]), _vm._v(" "), _c('HText', {
    staticClass: "pl-8 language-name",
    attrs: {
      "tag": "p"
    }
  }, [_vm._v(_vm._s(_vm.lang))])], 1);
};

var __vue_staticRenderFns__$m = [];
/* style */

const __vue_inject_styles__$m = function (inject) {
  if (!inject) return;
  inject("data-v-7c2bbc7f_0", {
    source: ".country-name[data-v-7c2bbc7f]{font-weight:700;font-size:14px;line-height:24px;color:#2f1c6a}.language-name[data-v-7c2bbc7f]{font-weight:400;font-size:14px;line-height:24px;color:#8c93a9}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$m = "data-v-7c2bbc7f";
/* module identifier */

const __vue_module_identifier__$m = undefined;
/* functional template */

const __vue_is_functional_template__$m = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$z = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$m,
  staticRenderFns: __vue_staticRenderFns__$m
}, __vue_inject_styles__$m, __vue_script__$l, __vue_scope_id__$m, __vue_is_functional_template__$m, __vue_module_identifier__$m, false, createInjector, undefined, undefined);

var __vue_component__$A = __vue_component__$z;

//
//
//
//
//
//
//
//
//
//
var script$k = {
  props: {
    route: {
      type: String
    },
    title: {
      type: String
    },
    description: {
      type: String
    }
  }
};

/* script */
const __vue_script__$k = script$k;
/* template */

var __vue_render__$l = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('HText', {
    staticClass: "menu-item d-flex mb-24",
    attrs: {
      "tag": "span",
      "meteorite-dark": ""
    }
  }, [_c('IconMenuItem', {
    staticClass: "icon mt-auto mb-auto",
    attrs: {
      "route": _vm.route
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text d-flex flex-column"
  }, [_c('HText', {
    staticClass: "pl-8 title",
    attrs: {
      "tag": "p"
    }
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('HText', {
    staticClass: "pl-8 description",
    attrs: {
      "tag": "p"
    }
  }, [_vm._v(_vm._s(_vm.description))])], 1)], 1);
};

var __vue_staticRenderFns__$l = [];
/* style */

const __vue_inject_styles__$l = function (inject) {
  if (!inject) return;
  inject("data-v-67553bfa_0", {
    source: "@media (max-width:768px){.menu-item .icon[data-v-67553bfa]{display:none}}.menu-item .text[data-v-67553bfa]{align-items:flex-start}.menu-item .text .title[data-v-67553bfa]{font-size:18px;line-height:24px}.menu-item .text .description[data-v-67553bfa]{font-size:14px;line-height:24px}@media (max-width:768px){.menu-item .text .description[data-v-67553bfa]{color:#727586}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$l = "data-v-67553bfa";
/* module identifier */

const __vue_module_identifier__$l = undefined;
/* functional template */

const __vue_is_functional_template__$l = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$x = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$l,
  staticRenderFns: __vue_staticRenderFns__$l
}, __vue_inject_styles__$l, __vue_script__$k, __vue_scope_id__$l, __vue_is_functional_template__$l, __vue_module_identifier__$l, false, createInjector, undefined, undefined);

var __vue_component__$y = __vue_component__$x;

//
//
//
//
//
//
//
var script$j = {
  props: {
    dark: Boolean
  }
};

/* script */
const __vue_script__$j = script$j;
/* template */

var __vue_render__$k = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('HText', {
    attrs: {
      "tag": "p",
      "meteorite-dark": "",
      "white": _vm.dark
    }
  }, [_c('IconCheck', {
    staticClass: "mr-4",
    attrs: {
      "success": ""
    }
  }), _vm._v("\n\t30-day money-back guarantee\n")], 1);
};

var __vue_staticRenderFns__$k = [];
/* style */

const __vue_inject_styles__$k = undefined;
/* scoped */

const __vue_scope_id__$k = undefined;
/* module identifier */

const __vue_module_identifier__$k = undefined;
/* functional template */

const __vue_is_functional_template__$k = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$v = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$k,
  staticRenderFns: __vue_staticRenderFns__$k
}, __vue_inject_styles__$k, __vue_script__$j, __vue_scope_id__$k, __vue_is_functional_template__$k, __vue_module_identifier__$k, false, undefined, undefined, undefined);

var __vue_component__$w = __vue_component__$v;

//
//
//
//
//
//
var script$i = {};

/* script */
const __vue_script__$i = script$i;
/* template */

var __vue_render__$j = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('button', [_vm._v("1234\n\t"), _vm._t("default")], 2);
};

var __vue_staticRenderFns__$j = [];
/* style */

const __vue_inject_styles__$j = undefined;
/* scoped */

const __vue_scope_id__$j = undefined;
/* module identifier */

const __vue_module_identifier__$j = undefined;
/* functional template */

const __vue_is_functional_template__$j = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$u = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$j,
  staticRenderFns: __vue_staticRenderFns__$j
}, __vue_inject_styles__$j, __vue_script__$i, __vue_scope_id__$j, __vue_is_functional_template__$j, __vue_module_identifier__$j, false, undefined, undefined, undefined);

var ButtonSimple = __vue_component__$u;

//
//
//
//
//
//
var script$h = {
  props: {
    to: {
      type: [Object, String]
    }
  }
};

/* script */
const __vue_script__$h = script$h;
/* template */

var __vue_render__$i = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('nuxt-link', {
    attrs: {
      "to": _vm.to
    }
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$i = [];
/* style */

const __vue_inject_styles__$i = undefined;
/* scoped */

const __vue_scope_id__$i = undefined;
/* module identifier */

const __vue_module_identifier__$i = undefined;
/* functional template */

const __vue_is_functional_template__$i = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$t = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$i,
  staticRenderFns: __vue_staticRenderFns__$i
}, __vue_inject_styles__$i, __vue_script__$h, __vue_scope_id__$i, __vue_is_functional_template__$i, __vue_module_identifier__$i, false, undefined, undefined, undefined);

var ButtonRouterLink = __vue_component__$t;

//
//
//
//
//
//
var script$g = {
  props: {
    href: {
      type: String
    }
  }
};

/* script */
const __vue_script__$g = script$g;
/* template */

var __vue_render__$h = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('a', {
    attrs: {
      "href": _vm.href
    }
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$h = [];
/* style */

const __vue_inject_styles__$h = undefined;
/* scoped */

const __vue_scope_id__$h = undefined;
/* module identifier */

const __vue_module_identifier__$h = undefined;
/* functional template */

const __vue_is_functional_template__$h = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$s = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$h,
  staticRenderFns: __vue_staticRenderFns__$h
}, __vue_inject_styles__$h, __vue_script__$g, __vue_scope_id__$h, __vue_is_functional_template__$h, __vue_module_identifier__$h, false, undefined, undefined, undefined);

var ButtonLink = __vue_component__$s;

//
var script$f = {
  components: {
    ButtonSimple,
    ButtonRouterLink,
    ButtonLink
  },
  props: {
    to: [Object, String],
    href: String,
    target: String,
    id: String,
    primary: Boolean,
    success: Boolean,
    danger: Boolean,
    dark: Boolean,
    white: Boolean,
    bordered: Boolean,
    transparent: Boolean,
    lg: Boolean,
    md: Boolean,
    sm: Boolean,
    inline: Boolean,
    inlineDanger: Boolean,
    inlineDark: Boolean,
    inlineWhite: Boolean,
    dropdown: Boolean,
    isOpen: Boolean,
    link: Boolean
  },
  computed: {
    getButtonType() {
      return this.to ? "button-router-link" : this.href ? "button-link" : "button-simple";
    },

    getButtonClass() {
      return {
        "hb hb--primary": this.primary && !this.$slots.icon,
        "hb hb--success": this.success && !this.$slots.icon,
        "hb hb--danger": this.danger && !this.$slots.icon,
        "hb hb--dark": this.dark && !this.$slots.icon,
        "hb hb--bordered": this.bordered,
        "hb hb--transparent": this.transparent,
        "hb--lg": this.lg,
        "hb--md": this.md,
        "hb--sm": this.sm,
        "hb-inline": this.inline,
        "hb-inline hb-inline--white": this.inlineWhite,
        "hb-inline hb-inline--danger": this.inlineDanger,
        "hb-inline hb-inline--dark": this.inlineDark,
        "hb-link": this.link,
        "hb hb-bordered--dark": this.dark && this.bordered,
        "hb hb-bordered--white": this.white && this.bordered,
        "hb-icon": this.$slots.icon,
        "hb-icon--success": this.success && this.$slots.icon,
        "hb-icon--danger": this.danger && this.$slots.icon,
        "hb-icon--dark": this.dark && this.$slots.icon,
        "hb-icon--white": this.white && this.$slots.icon
      };
    }

  },
  methods: {
    buttonClick() {
      if (!this.disabled) this.$emit("click");
    },

    buttonMouseDown() {
      if (!this.disabled) this.$emit("mousedown");
    },

    buttonMouseOver() {
      if (!this.disabled) this.$emit("mouseover");
    }

  }
};

/* script */
const __vue_script__$f = script$f;
/* template */

var __vue_render__$g = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c(_vm.getButtonType, {
    tag: "component",
    class: _vm.getButtonClass,
    attrs: {
      "id": _vm.id,
      "to": _vm.to,
      "href": _vm.href,
      "target": _vm.target
    },
    nativeOn: {
      "click": function ($event) {
        return _vm.buttonClick.apply(null, arguments);
      },
      "mousedown": function ($event) {
        return _vm.buttonMouseDown.apply(null, arguments);
      },
      "mouseover": function ($event) {
        return _vm.buttonMouseOver.apply(null, arguments);
      }
    }
  }, [_vm.$slots.icon ? _c('div', {
    staticClass: "mr-4"
  }, [_vm._t("icon")], 2) : _vm._e(), _vm._v(" "), _vm._t("default"), _vm._v(" "), _vm.dropdown ? _c('IconChevron', {
    staticClass: "ml-4",
    attrs: {
      "up": _vm.isOpen
    }
  }) : _vm._e()], 2);
};

var __vue_staticRenderFns__$g = [];
/* style */

const __vue_inject_styles__$g = function (inject) {
  if (!inject) return;
  inject("data-v-315cb1dc_0", {
    source: ".button-default-props[data-v-315cb1dc],.hb[data-v-315cb1dc],.hb-icon[data-v-315cb1dc],.hb-inline[data-v-315cb1dc]{display:flex;align-items:center;justify-content:center;text-align:center;font-size:16px;font-weight:400;line-height:1;box-sizing:border-box;padding:12px 16px;cursor:pointer;border:none;border-radius:4px;transition:.3s ease-in-out}.hb[data-v-315cb1dc]{color:#fff;width:100%;min-height:48px;background-color:#673de6}.hb[data-v-315cb1dc]:active,.hb[data-v-315cb1dc]:focus,.hb[data-v-315cb1dc]:hover{background-color:#5025d1;color:#fff}.hb[data-v-315cb1dc]:disabled{cursor:not-allowed;color:#fff;background-color:#727586}.hb[data-v-315cb1dc]:not(.hb--bordered):not(.hb--transparent):not(.hb-inline):not(.hb-inline--danger){box-shadow:0 1px 8px rgba(0,0,0,.16)}.hb--bordered[data-v-315cb1dc]{color:#673de6;background:0 0;border:2px solid #673de6}.hb--bordered[data-v-315cb1dc]:active,.hb--bordered[data-v-315cb1dc]:focus,.hb--bordered[data-v-315cb1dc]:hover{color:#673de6;border-color:#673de6;background-color:rgba(103,61,230,.15)}.hb--bordered[data-v-315cb1dc]:disabled{cursor:not-allowed;color:#727586;border-color:#727586;background:#fff}.hb--transparent[data-v-315cb1dc]{color:#673de6;background:0 0;border:2px solid transparent}.hb--transparent[data-v-315cb1dc]:active,.hb--transparent[data-v-315cb1dc]:focus,.hb--transparent[data-v-315cb1dc]:hover{color:#673de6;background-color:rgba(103,61,230,.15)}.hb--transparent[data-v-315cb1dc]:disabled{cursor:not-allowed;color:#727586;border-color:#727586;background:#fff}.hb-inline[data-v-315cb1dc]{color:#673de6;font-weight:700;background:0 0;padding:0}.hb-inline[data-v-315cb1dc]:active,.hb-inline[data-v-315cb1dc]:focus,.hb-inline[data-v-315cb1dc]:hover{color:#5025d1;background:0 0;outline:0;box-shadow:none}.hb-inline--white[data-v-315cb1dc]{color:#fff}.hb-inline--white[data-v-315cb1dc]:active,.hb-inline--white[data-v-315cb1dc]:focus,.hb-inline--white[data-v-315cb1dc]:hover{color:#fc5185}.hb-inline--danger[data-v-315cb1dc]{color:#fc5185}.hb-inline--danger[data-v-315cb1dc]:active,.hb-inline--danger[data-v-315cb1dc]:focus,.hb-inline--danger[data-v-315cb1dc]:hover{color:#d63163}.hb-inline--dark[data-v-315cb1dc]{color:#1d1e20}.hb-inline--dark[data-v-315cb1dc]:active,.hb-inline--dark[data-v-315cb1dc]:focus,.hb-inline--dark[data-v-315cb1dc]:hover{color:#673de6}.hb-link[data-v-315cb1dc]{font-size:17px;line-height:140%;text-decoration:underline;text-underline-offset:1px;color:#2f1c6a;transition:all ease-in-out .3s}.hb-link[data-v-315cb1dc]:active,.hb-link[data-v-315cb1dc]:focus,.hb-link[data-v-315cb1dc]:hover{color:#673de6}.hb-icon[data-v-315cb1dc]{font-weight:700;background:0 0;padding:0}.hb--success[data-v-315cb1dc]:not(.hb--bordered):not(.hb--transparent){background-color:#00b090}.hb--success[data-v-315cb1dc]:not(.hb--bordered):not(.hb--transparent):active,.hb--success[data-v-315cb1dc]:not(.hb--bordered):not(.hb--transparent):focus,.hb--success[data-v-315cb1dc]:not(.hb--bordered):not(.hb--transparent):hover{background-color:#008361}.hb--danger[data-v-315cb1dc]:not(.hb--bordered):not(.hb--transparent){background-color:#fc5185}.hb--danger[data-v-315cb1dc]:not(.hb--bordered):not(.hb--transparent):active,.hb--danger[data-v-315cb1dc]:not(.hb--bordered):not(.hb--transparent):focus,.hb--danger[data-v-315cb1dc]:not(.hb--bordered):not(.hb--transparent):hover{background-color:#d63163}.hb--dark[data-v-315cb1dc]:not(.hb--bordered):not(.hb--transparent){background-color:#1d1e20}.hb--dark[data-v-315cb1dc]:not(.hb--bordered):not(.hb--transparent):active,.hb--dark[data-v-315cb1dc]:not(.hb--bordered):not(.hb--transparent):focus,.hb--dark[data-v-315cb1dc]:not(.hb--bordered):not(.hb--transparent):hover{background-color:#673de6}.hb--white[data-v-315cb1dc]:not(.hb--bordered):not(.hb--transparent){background-color:#fff}.hb--white[data-v-315cb1dc]:not(.hb--bordered):not(.hb--transparent):active,.hb--white[data-v-315cb1dc]:not(.hb--bordered):not(.hb--transparent):focus,.hb--white[data-v-315cb1dc]:not(.hb--bordered):not(.hb--transparent):hover{background-color:#fc5185}.hb--transparent[data-v-315cb1dc]:not(.hb--bordered):not(.hb--transparent){background-color:transparent}.hb-bordered--success[data-v-315cb1dc]{color:#00b090;border-color:#00b090}.hb-bordered--success[data-v-315cb1dc]:active,.hb-bordered--success[data-v-315cb1dc]:focus,.hb-bordered--success[data-v-315cb1dc]:hover{color:#008361;border-color:#008361}.hb-bordered--danger[data-v-315cb1dc]{color:#fc5185;border-color:#fc5185}.hb-bordered--danger[data-v-315cb1dc]:active,.hb-bordered--danger[data-v-315cb1dc]:focus,.hb-bordered--danger[data-v-315cb1dc]:hover{color:#d63163;border-color:#d63163}.hb-bordered--dark[data-v-315cb1dc]{color:#1d1e20;border-color:#1d1e20}.hb-bordered--dark[data-v-315cb1dc]:active,.hb-bordered--dark[data-v-315cb1dc]:focus,.hb-bordered--dark[data-v-315cb1dc]:hover{color:#673de6;border-color:#673de6}.hb-bordered--white[data-v-315cb1dc]{color:#fff;border-color:#fff}.hb-bordered--white[data-v-315cb1dc]:active,.hb-bordered--white[data-v-315cb1dc]:focus,.hb-bordered--white[data-v-315cb1dc]:hover{color:#fc5185;border-color:#fc5185}.hb-bordered--transparent[data-v-315cb1dc]{color:transparent;border-color:transparent}.hb-icon--success[data-v-315cb1dc]{color:#00b090}.hb-icon--success[data-v-315cb1dc]:active,.hb-icon--success[data-v-315cb1dc]:focus,.hb-icon--success[data-v-315cb1dc]:hover{color:#008361}.hb-icon--danger[data-v-315cb1dc]{color:#fc5185}.hb-icon--danger[data-v-315cb1dc]:active,.hb-icon--danger[data-v-315cb1dc]:focus,.hb-icon--danger[data-v-315cb1dc]:hover{color:#d63163}.hb-icon--dark[data-v-315cb1dc]{color:#1d1e20}.hb-icon--dark[data-v-315cb1dc]:active,.hb-icon--dark[data-v-315cb1dc]:focus,.hb-icon--dark[data-v-315cb1dc]:hover{color:#673de6}.hb-icon--white[data-v-315cb1dc]{color:#fff}.hb-icon--white[data-v-315cb1dc]:active,.hb-icon--white[data-v-315cb1dc]:focus,.hb-icon--white[data-v-315cb1dc]:hover{color:#fc5185}.hb-icon--transparent[data-v-315cb1dc]{color:transparent}@media (min-width:420px){.hb--sm[data-v-315cb1dc]{max-width:156px!important}}@media (min-width:768px){.hb--sm[data-v-315cb1dc]{max-width:160px!important}}@media (min-width:1200px){.hb--sm[data-v-315cb1dc]{max-width:168px!important}}@media (min-width:420px){.hb--md[data-v-315cb1dc]{max-width:242px!important}}@media (min-width:768px){.hb--md[data-v-315cb1dc]{max-width:248px!important}}@media (min-width:1200px){.hb--md[data-v-315cb1dc]{max-width:264px!important}}@media (min-width:420px){.hb--lg[data-v-315cb1dc]{max-width:328px!important}}@media (min-width:768px){.hb--lg[data-v-315cb1dc]{max-width:336px!important}}@media (min-width:1200px){.hb--lg[data-v-315cb1dc]{max-width:360px!important}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$g = "data-v-315cb1dc";
/* module identifier */

const __vue_module_identifier__$g = undefined;
/* functional template */

const __vue_is_functional_template__$g = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$q = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$g,
  staticRenderFns: __vue_staticRenderFns__$g
}, __vue_inject_styles__$g, __vue_script__$f, __vue_scope_id__$g, __vue_is_functional_template__$g, __vue_module_identifier__$g, false, createInjector, undefined, undefined);

var __vue_component__$r = __vue_component__$q;

//
//
//
//
//
//
//
//
//
//
//
//
//
var script$e = {
  props: {
    checked: Boolean,
    partlyChecked: Boolean,
    label: String
  },
  methods: {
    updateStatus() {
      if (this.checked) {
        this.$emit('update:checked', false);
      } else if (this.partlyChecked) {
        this.$emit('update:checked', true);
        this.$emit('update:partlyChecked', false);
      } else {
        this.$emit('update:checked', true);
      }
    }

  }
};

/* script */
const __vue_script__$e = script$e;
/* template */

var __vue_render__$f = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_c('input', {
    staticClass: "d-none",
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": _vm.checked
    }
  }), _vm._v(" "), _c('HLabel', {
    staticClass: "d-flex flex-row cursor-pointer align-items-center",
    nativeOn: {
      "click": function ($event) {
        return _vm.updateStatus();
      }
    }
  }, [_c('IconCheckbox', {
    attrs: {
      "checked": _vm.checked,
      "partly-checked": _vm.partlyChecked
    }
  }), _vm._v("\n\t\t" + _vm._s(_vm.label) + "\n\t")], 1)], 1);
};

var __vue_staticRenderFns__$f = [];
/* style */

const __vue_inject_styles__$f = undefined;
/* scoped */

const __vue_scope_id__$f = undefined;
/* module identifier */

const __vue_module_identifier__$f = undefined;
/* functional template */

const __vue_is_functional_template__$f = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$o = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$f,
  staticRenderFns: __vue_staticRenderFns__$f
}, __vue_inject_styles__$f, __vue_script__$e, __vue_scope_id__$f, __vue_is_functional_template__$f, __vue_module_identifier__$f, false, undefined, undefined, undefined);

var __vue_component__$p = __vue_component__$o;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$d = {
  props: {
    status: String,
    name: String,
    tooltip: String
  }
};

/* script */
const __vue_script__$d = script$d;
/* template */

var __vue_render__$e = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "d-flex justify-content-between"
  }, [_c('div', {
    staticClass: "d-flex"
  }, [_vm.status != 'danger' ? _c('IconCheck', {
    staticClass: "pr-8",
    attrs: {
      "success": _vm.status === 'success',
      "warning": _vm.status === 'warning'
    }
  }) : _c('IconX', {
    staticClass: "pr-8",
    attrs: {
      "danger": ""
    }
  }), _vm._v(" "), _c('HText', {
    staticClass: "feature-text",
    attrs: {
      "meteorite-dark": ""
    }
  }, [_vm._v(_vm._s(_vm.name))])], 1), _vm._v(" "), _c('IconQuestion', {
    staticClass: "cursor-pointer pl-4",
    attrs: {
      "width": "16"
    }
  })], 1);
};

var __vue_staticRenderFns__$e = [];
/* style */

const __vue_inject_styles__$e = undefined;
/* scoped */

const __vue_scope_id__$e = undefined;
/* module identifier */

const __vue_module_identifier__$e = undefined;
/* functional template */

const __vue_is_functional_template__$e = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$m = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$e,
  staticRenderFns: __vue_staticRenderFns__$e
}, __vue_inject_styles__$e, __vue_script__$d, __vue_scope_id__$e, __vue_is_functional_template__$e, __vue_module_identifier__$e, false, undefined, undefined, undefined);

var __vue_component__$n = __vue_component__$m;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$c = {
  props: {
    sectionSpaces: Boolean,
    twoColumn: Boolean,
    reversed: Boolean
  },
  methods: {
    setCellSpanName(span) {
      if (this.cellSpan.length === 2) {
        switch (span) {
          case 0:
            span = 'left';
            break;

          case 1:
            span = 'right';
            break;
        }
      }

      return span;
    },

    reverseOrder(i) {
      const index = i + 1;
      return index === 2 ? 1 : 2;
    }

  }
};

/* script */
const __vue_script__$c = script$c;
/* template */

var __vue_render__$d = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "grid",
    class: {
      'section-spaces': _vm.sectionSpaces
    }
  }, [_c('div', {
    staticClass: "grid__inner h-100 container"
  }, [_vm.twoColumn ? _vm._l(['left', 'right'], function (cell, i) {
    return _c('div', {
      key: cell,
      staticClass: "grid__cell grid__cell--span-4-lg grid__cell--span-6-xl grid__cell--align-middle text-center text-left-lg",
      class: _vm.reversed && "grid__cell--order-" + (i === 1 ? '1' : '2') + "-xs grid__cell--order-" + _vm.reverseOrder(i) + "-xl"
    }, [_vm._t(cell)], 2);
  }) : _c('div', {
    staticClass: "grid__cell grid__cell--center grid__cell--align-middle d-flex flex-column justify-content-center align-items-center"
  }, [_vm._t("default")], 2)], 2)]);
};

var __vue_staticRenderFns__$d = [];
/* style */

const __vue_inject_styles__$d = undefined;
/* scoped */

const __vue_scope_id__$d = undefined;
/* module identifier */

const __vue_module_identifier__$d = undefined;
/* functional template */

const __vue_is_functional_template__$d = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$k = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$d,
  staticRenderFns: __vue_staticRenderFns__$d
}, __vue_inject_styles__$d, __vue_script__$c, __vue_scope_id__$d, __vue_is_functional_template__$d, __vue_module_identifier__$d, false, undefined, undefined, undefined);

var __vue_component__$l = __vue_component__$k;

//
//
//
var script$b = {
  props: {
    placeholder: String,
    label: String,
    help: String,
    error: String,
    disabled: Boolean
  }
};

/* script */
const __vue_script__$b = script$b;
/* template */

var __vue_render__$c = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('textarea', {
    staticClass: "textarea",
    attrs: {
      "disabled": _vm.disabled,
      "placeholder": _vm.placeholder
    }
  });
};

var __vue_staticRenderFns__$c = [];
/* style */

const __vue_inject_styles__$c = undefined;
/* scoped */

const __vue_scope_id__$c = undefined;
/* module identifier */

const __vue_module_identifier__$c = undefined;
/* functional template */

const __vue_is_functional_template__$c = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$j = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$c,
  staticRenderFns: __vue_staticRenderFns__$c
}, __vue_inject_styles__$c, __vue_script__$b, __vue_scope_id__$c, __vue_is_functional_template__$c, __vue_module_identifier__$c, false, undefined, undefined, undefined);

var MultilineField = __vue_component__$j;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$a = {
  props: {
    id: {
      type: String
    },
    disabled: Boolean,
    options: {
      type: Array,
      required: true
    },
    default: {
      type: String,
      required: false
    }
  },

  data() {
    return {
      selected: this.default ? this.default : this.options[0],
      open: false
    };
  },

  methods: {
    close() {
      this.open = false;
    },

    showOptions() {
      if (!this.disabled) {
        this.open = !this.open;
      }
    },

    selectOption(option) {
      this.selected = option;
      this.open = false;
      this.$emit('input', option.value);
    }

  }
};

/* script */
const __vue_script__$a = script$a;
/* template */

var __vue_render__$b = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    directives: [{
      name: "click-outside",
      rawName: "v-click-outside",
      value: _vm.close,
      expression: "close"
    }],
    staticClass: "custom-select p-0",
    class: {
      'cursor-pointer': !_vm.disabled
    },
    attrs: {
      "id": _vm.id
    }
  }, [_c('div', {
    staticClass: "selected pl-16 d-flex",
    on: {
      "click": function ($event) {
        return _vm.showOptions();
      },
      "blur": function ($event) {
        _vm.open = false;
      }
    }
  }, [_vm._v("\n\t\t" + _vm._s(_vm.selected.text) + "\n\t")]), _vm._v(" "), _vm.open ? _c('div', {
    staticClass: "items position-absolute",
    on: {
      "blur": function ($event) {
        _vm.open = false;
      }
    }
  }, _vm._l(_vm.options, function (option) {
    return _c('div', {
      key: option.value,
      staticClass: "item cursor-pointer z-index-1",
      on: {
        "click": function ($event) {
          return _vm.selectOption(option);
        },
        "blur": function ($event) {
          _vm.open = false;
        }
      }
    }, [_vm._v("\n\t\t\t" + _vm._s(option.text) + "\n\t\t")]);
  }), 0) : _vm._e()]);
};

var __vue_staticRenderFns__$b = [];
/* style */

const __vue_inject_styles__$b = undefined;
/* scoped */

const __vue_scope_id__$b = undefined;
/* module identifier */

const __vue_module_identifier__$b = undefined;
/* functional template */

const __vue_is_functional_template__$b = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$i = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$b,
  staticRenderFns: __vue_staticRenderFns__$b
}, __vue_inject_styles__$b, __vue_script__$a, __vue_scope_id__$b, __vue_is_functional_template__$b, __vue_module_identifier__$b, false, undefined, undefined, undefined);

var Dropdown = __vue_component__$i;

//
//
//
//
//
//
//
//
var script$9 = {
  props: {
    placeholder: String,
    label: String,
    help: String,
    error: String,
    password: Boolean,
    show: Boolean,
    disabled: Boolean
  },
  methods: {
    hide() {
      debugger;
      this.$emit("update:show", false);
    }

  }
};

/* script */
const __vue_script__$9 = script$9;
/* template */

var __vue_render__$a = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('input', {
    attrs: {
      "type": _vm.password && !_vm.show ? 'password' : 'text',
      "disabled": _vm.disabled,
      "placeholder": _vm.placeholder
    },
    on: {
      "blur": _vm.hide
    }
  });
};

var __vue_staticRenderFns__$a = [];
/* style */

const __vue_inject_styles__$a = undefined;
/* scoped */

const __vue_scope_id__$a = undefined;
/* module identifier */

const __vue_module_identifier__$a = undefined;
/* functional template */

const __vue_is_functional_template__$a = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$h = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$a,
  staticRenderFns: __vue_staticRenderFns__$a
}, __vue_inject_styles__$a, __vue_script__$9, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, false, undefined, undefined, undefined);

var InputField = __vue_component__$h;

//
//
//
//
//
//
var script$8 = {
  props: {
    top: Boolean,
    gray: Boolean,
    success: Boolean,
    primary: Boolean,
    secondary: Boolean,
    warning: Boolean,
    danger: Boolean,
    light: Boolean,
    dark: Boolean
  },
  computed: {
    classes() {
      return {
        'label--top': this.top,
        'label--md': this.md,
        'label--lg': this.lg,
        'label-success': this.success,
        'label-primary': this.primary,
        'label-secondary': this.secondary,
        'label-info': this.info,
        'label-warning': this.warning,
        'label-danger': this.danger,
        'label-light': this.light,
        'label-dark': this.dark,
        'label-gray': this.gray
      };
    }

  }
};

/* script */
const __vue_script__$8 = script$8;
/* template */

var __vue_render__$9 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "label",
    class: _vm.classes
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$9 = [];
/* style */

const __vue_inject_styles__$9 = undefined;
/* scoped */

const __vue_scope_id__$9 = undefined;
/* module identifier */

const __vue_module_identifier__$9 = undefined;
/* functional template */

const __vue_is_functional_template__$9 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$g = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$9,
  staticRenderFns: __vue_staticRenderFns__$9
}, __vue_inject_styles__$9, __vue_script__$8, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, false, undefined, undefined, undefined);

var HLabel = __vue_component__$g;

//
var script$7 = {
  components: {
    MultilineField,
    Dropdown,
    InputField,
    HIcon,
    HLabel,
    HText
  },
  props: {
    id: String,
    placeholder: String,
    label: String,
    help: String,
    error: String,
    textarea: Boolean,
    dropdown: Boolean,
    disabled: Boolean,
    password: Boolean,
    items: Array
  },

  data() {
    return {
      show: false
    };
  },

  computed: {
    getInputType() {
      return this.textarea ? "MultilineField" : this.dropdown ? "dropdown" : "InputField";
    },

    getInputClass() {
      return {
        input__error: this.error,
        input__disabled: this.disabled
      };
    }

  },
  methods: {
    hideText() {
      this.show = false;
    }

  }
};

/* script */
const __vue_script__$7 = script$7;
/* template */

var __vue_render__$8 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "input-container position-relative",
    class: {
      disabled: this.disabled
    }
  }, [_c('HLabel', {
    staticClass: "label",
    attrs: {
      "for": _vm.id
    }
  }, [_vm._v(_vm._s(_vm.label) + " ")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "click-outside",
      rawName: "v-click-outside",
      value: _vm.hideText,
      expression: "hideText"
    }],
    staticClass: "icon-holder position-absolute d-flex"
  }, [_vm.help ? _c('IconQuestion', {
    staticClass: "cursor-pointer",
    attrs: {
      "disabled": _vm.disabled,
      "height": 20
    }
  }) : _vm.error ? _c('HIcon', {
    attrs: {
      "icon": "ic-exclamation",
      "danger": ""
    }
  }) : _vm.password ? _c('IconEye', {
    staticClass: "cursor-pointer",
    attrs: {
      "crossed": !_vm.show,
      "disabled": _vm.disabled
    },
    nativeOn: {
      "click": function ($event) {
        _vm.show = !_vm.show;
      }
    }
  }) : _vm.dropdown ? _c('HIcon', {
    attrs: {
      "icon": "ic-chevron",
      "primary": !_vm.disabled,
      "disabled": _vm.disabled
    }
  }) : _vm._e()], 1), _vm._v(" "), _c(_vm.getInputType, {
    tag: "component",
    staticClass: "input",
    class: _vm.getInputClass,
    attrs: {
      "disabled": _vm.disabled,
      "show": _vm.show,
      "password": _vm.password,
      "placeholder": _vm.placeholder,
      "options": _vm.items
    },
    on: {
      "update:show": function ($event) {
        _vm.show = $event;
      }
    }
  }), _vm._v(" "), _vm.error ? _c('HText', {
    staticClass: "pl-16 position-absolute",
    attrs: {
      "tag": "div",
      "danger": ""
    }
  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e()], 1);
};

var __vue_staticRenderFns__$8 = [];
/* style */

const __vue_inject_styles__$8 = function (inject) {
  if (!inject) return;
  inject("data-v-335262c2_0", {
    source: ".input-container{margin-top:12px;margin-bottom:60px}.input-container .label{background-color:#fff;z-index:10;padding-left:4px;padding-right:4px;position:absolute;top:-13px;left:13px;font-size:14px}.input-container .icon-holder{right:0;top:0;height:48px;align-items:center;padding-right:14px}.input-container .input{padding:12px 16px;height:48px;border-radius:4px;border:1px solid #dadce0;width:100%;box-sizing:border-box;font-size:16px}.input-container .input__error{box-shadow:0 0 4px 0 #d63163}.input-container .input__error{border:1px solid #d63163}.input-container .input__disabled{border:1px solid #dadce0;box-shadow:none;color:#dadce0;background-color:#fff!important}.input-container .input:focus:not([disabled]):not(.input__disabled){border:1px solid #673de6;box-shadow:0 0 4px 0 #673de6}.input-container .input.custom-select .selected{height:100%;align-items:center}.input-container .input.custom-select .items{top:0;left:0;right:0;background:#fff;color:#1d1e20;border-radius:4px;overflow:hidden;box-shadow:0 0 8px 0 #00000033}.input-container .input.custom-select .items .item{padding:12px 16px;color:#1d1e20}.input-container .input.custom-select .items .item:hover{background:#f4f5ff}.input-container .input.textarea{min-height:120px;resize:none}.input-container.disabled .input,.input-container.disabled .label{color:#dadce0}.input-container:hover:not(.disabled) .label{color:#673de6}.input-container:hover:not(.disabled) .input:not([disabled]){border:1px solid #673de6;box-shadow:0 0 4px 0 #673de6}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$8 = undefined;
/* module identifier */

const __vue_module_identifier__$8 = undefined;
/* functional template */

const __vue_is_functional_template__$8 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$e = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$8,
  staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$8, __vue_script__$7, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, createInjector, undefined, undefined);

var __vue_component__$f = __vue_component__$e;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$6 = {
  props: {
    primary: Boolean,
    danger: Boolean,
    success: Boolean,
    white: Boolean,
    dark: Boolean
  },
  computed: {
    getLogoColor() {
      const color = this.primary ? '#673DE6' : this.danger ? '#FC5185' : this.success ? '#00B090' : this.white ? '#ffffff' : this.dark ? '#1D1E20' : 'currentColor';
      return color;
    }

  }
};

/* script */
const __vue_script__$6 = script$6;
/* template */

var __vue_render__$7 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "147",
      "height": "30",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      "d": "M62.065 17.655c.31-.795.465-1.717.465-2.766s-.158-1.971-.474-2.766c-.316-.796-.75-1.465-1.3-2.007a5.348 5.348 0 0 0-1.93-1.22 6.758 6.758 0 0 0-2.353-.407 6.58 6.58 0 0 0-2.308.408 5.442 5.442 0 0 0-1.931 1.22c-.556.541-.999 1.21-1.326 2.006-.328.795-.492 1.717-.492 2.766s.159 1.971.475 2.766c.316.796.748 1.461 1.299 1.997.55.537 1.193.94 1.93 1.211a6.755 6.755 0 0 0 2.353.407c.854 0 1.653-.135 2.397-.407a5.214 5.214 0 0 0 1.922-1.21c.538-.537.962-1.202 1.273-1.998zm-8.603-1.14a5.604 5.604 0 0 1-.219-1.626c0-.59.073-1.128.22-1.618a3.71 3.71 0 0 1 .632-1.254 2.882 2.882 0 0 1 1.009-.814c.398-.194.854-.291 1.37-.291.502 0 .956.094 1.36.283.403.188.743.456 1.018.804.275.348.486.766.632 1.255.146.489.22 1.034.22 1.635 0 .6-.074 1.143-.22 1.626a3.722 3.722 0 0 1-.632 1.246 2.774 2.774 0 0 1-1.018.804 3.174 3.174 0 0 1-1.36.284c-.516 0-.972-.095-1.37-.284a2.788 2.788 0 0 1-1.01-.804 3.718 3.718 0 0 1-.632-1.246z",
      "fill": _vm.getLogoColor
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M69.417 18.92c.386 0 .705-.033.956-.098.252-.065.454-.153.606-.266a.885.885 0 0 0 .316-.397c.059-.153.088-.324.088-.512 0-.4-.188-.734-.562-1-.375-.264-1.018-.55-1.931-.857-.398-.14-.796-.303-1.194-.486a4.382 4.382 0 0 1-1.07-.69 3.291 3.291 0 0 1-.773-1.007c-.2-.394-.299-.874-.299-1.44s.106-1.076.316-1.53c.211-.453.51-.839.896-1.157a4.09 4.09 0 0 1 1.404-.734c.55-.17 1.17-.257 1.861-.257.82 0 1.527.09 2.124.266.597.177 1.089.371 1.475.584l-.79 2.174a7.498 7.498 0 0 0-1.132-.469c-.416-.135-.916-.203-1.501-.203-.656 0-1.127.092-1.414.274-.286.183-.43.463-.43.84 0 .224.053.412.158.565.105.153.255.292.448.416.193.123.415.235.667.335.251.1.53.204.834.31.632.236 1.182.468 1.65.698.468.23.858.498 1.168.804.31.307.54.666.693 1.079.152.413.228.913.228 1.502 0 1.143-.398 2.03-1.194 2.66-.796.63-1.995.946-3.598.946a9.46 9.46 0 0 1-2.607-.336 6.575 6.575 0 0 1-.86-.3 6.47 6.47 0 0 1-.606-.301l.772-2.192c.363.201.81.38 1.343.54.532.159 1.185.238 1.958.238zM86.275 8.772v2.351h-3.67v9.899h-2.738v-9.899h-3.67V8.773h10.078zm3.042 12.25h2.739V8.773h-2.739v12.25zm14.998 0a61.74 61.74 0 0 0-2.545-4.154 42.46 42.46 0 0 0-2.915-3.872v8.026h-2.703V8.773h2.23c.385.389.812.866 1.28 1.432.469.565.945 1.17 1.431 1.812.486.642.969 1.308 1.449 1.997.479.69.93 1.352 1.352 1.988V8.773h2.721v12.25h-2.3zm12.329-10.129c-1.275 0-2.197.357-2.765 1.07-.567.713-.851 1.688-.851 2.925 0 .6.07 1.146.21 1.635.141.489.352.91.632 1.264.282.353.632.628 1.054.822.421.194.912.291 1.474.291.304 0 .565-.006.782-.017.216-.012.406-.035.57-.07v-4.26h2.739v6.062c-.328.13-.854.268-1.58.415-.726.147-1.621.222-2.686.222-.913 0-1.741-.142-2.484-.425a5.19 5.19 0 0 1-1.905-1.237c-.526-.542-.933-1.208-1.22-1.998-.287-.789-.43-1.69-.43-2.704 0-1.025.158-1.933.474-2.722.316-.79.748-1.459 1.299-2.007a5.464 5.464 0 0 1 1.94-1.246 6.627 6.627 0 0 1 2.379-.425 9.572 9.572 0 0 1 2.747.381 5.419 5.419 0 0 1 1.291.557l-.79 2.21a7.14 7.14 0 0 0-1.291-.522 5.454 5.454 0 0 0-1.589-.22zm7.677 10.129V8.773h8.216v2.316h-5.477v2.403h4.863v2.263h-4.863v2.952h5.881v2.316h-8.62z",
      "fill": _vm.getLogoColor
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      "d": "M144.006 9.612c-.971-.654-2.37-.98-4.195-.98-.504 0-1.074.023-1.712.07-.638.047-1.255.13-1.852.247v12.074h2.738V16.55h1.352c.235.283.47.598.705.946a31.53 31.53 0 0 1 1.419 2.307c.228.413.455.819.678 1.22h3.061c-.21-.448-.438-.904-.684-1.37-.245-.466-.5-.913-.763-1.343-.264-.43-.53-.843-.799-1.238a16.857 16.857 0 0 0-.773-1.052c.738-.306 1.303-.728 1.694-1.263.393-.537.589-1.235.589-2.095 0-1.38-.487-2.396-1.458-3.05zM139.433 11c.158-.012.336-.018.535-.018.878 0 1.542.127 1.993.38.451.254.676.68.676 1.282 0 .625-.222 1.067-.667 1.326-.445.26-1.182.388-2.212.388h-.773v-3.323l.448-.035z",
      "fill": _vm.getLogoColor
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M44.002 8.872h2.756V21.08h-2.756V15.9h-4.627v5.179H36.62V8.872h2.755v4.668h4.627V8.872z",
      "fill": _vm.getLogoColor
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      "d": "M17.817.329v8.73l7.053 4.124v-9.26L17.817.33zM0 .329v13.699h22.937l-6.979-3.836-9.09-.004V4.016L0 .329zm17.817 25.472v-6.118l-9.16-.007c.008.04-7.095-3.897-7.095-3.897l23.308.11v13.698l-7.053-3.786zM0 16.85V25.8l6.867 3.595v-8.52L0 16.85z",
      "fill": _vm.getLogoColor
    }
  })]);
};

var __vue_staticRenderFns__$7 = [];
/* style */

const __vue_inject_styles__$7 = undefined;
/* scoped */

const __vue_scope_id__$7 = undefined;
/* module identifier */

const __vue_module_identifier__$7 = undefined;
/* functional template */

const __vue_is_functional_template__$7 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$c = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, __vue_script__$6, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, undefined, undefined, undefined);

var __vue_component__$d = __vue_component__$c;

/* script */

/* template */
var __vue_render__$6 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('v-lazy-image', {
    attrs: {
      "src": "",
      "alt": ""
    }
  });
};

var __vue_staticRenderFns__$6 = [];
/* style */

const __vue_inject_styles__$6 = undefined;
/* scoped */

const __vue_scope_id__$6 = undefined;
/* module identifier */

const __vue_module_identifier__$6 = undefined;
/* functional template */

const __vue_is_functional_template__$6 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$b = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, {}, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, undefined, undefined);

var imageComponent = __vue_component__$b;

//
//
//
//
//
//
//
//
//
//
//
//
var script$5 = {
  props: {
    video: String,
    poster: String
  }
};

/* script */
const __vue_script__$5 = script$5;
/* template */

var __vue_render__$5 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('video', {
    directives: [{
      name: "play-on-scroll",
      rawName: "v-play-on-scroll"
    }],
    staticClass: "w-100 play-video-on-scroll",
    attrs: {
      "poster": _vm.poster,
      "muted": "muted",
      "preload": "none"
    },
    domProps: {
      "muted": true
    }
  }, [_c('source', {
    attrs: {
      "type": "video/mp4",
      "src": _vm.video
    }
  })]);
};

var __vue_staticRenderFns__$5 = [];
/* style */

const __vue_inject_styles__$5 = undefined;
/* scoped */

const __vue_scope_id__$5 = undefined;
/* module identifier */

const __vue_module_identifier__$5 = undefined;
/* functional template */

const __vue_is_functional_template__$5 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$a = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);

var videoComponent = __vue_component__$a;

//
var script$4 = {
  components: {
    imageComponent,
    videoComponent
  },
  props: {
    src: String,
    src2x: String,
    lqip: String,
    poster: String,
    video: String,
    alt: String,
    image: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    getMediaType() {
      return this.video ? 'video-component' : 'image-component';
    }

  }
};

/* script */
const __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c(_vm.getMediaType, {
    tag: "component",
    staticClass: "w-100",
    attrs: {
      "src": _vm.src,
      "srcset": _vm.src2x && _vm.src2x + " 2x, " + _vm.src + " 1x",
      "src-placeholder": _vm.lqip,
      "poster": _vm.poster,
      "video": _vm.video,
      "alt": _vm.alt
    }
  });
};

var __vue_staticRenderFns__$4 = [];
/* style */

const __vue_inject_styles__$4 = undefined;
/* scoped */

const __vue_scope_id__$4 = undefined;
/* module identifier */

const __vue_module_identifier__$4 = undefined;
/* functional template */

const __vue_is_functional_template__$4 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$8 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

var __vue_component__$9 = __vue_component__$8;

//
//
//
//
//
//
//
//
//
//
//
//
//
var script$3 = {
  props: {
    checked: Boolean,
    label: String
  }
};

/* script */
const __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_c('input', {
    staticClass: "d-none",
    attrs: {
      "type": "radio"
    },
    domProps: {
      "checked": _vm.checked
    }
  }), _vm._v(" "), _c('HLabel', {
    staticClass: "d-flex flex-row cursor-pointer align-items-center",
    nativeOn: {
      "click": function ($event) {
        return _vm.$emit('update:checked', !_vm.checked);
      }
    }
  }, [_c('IconRadio', {
    attrs: {
      "checked": _vm.checked
    }
  }), _vm._v("\n\t\t" + _vm._s(_vm.label) + "\n\t")], 1)], 1);
};

var __vue_staticRenderFns__$3 = [];
/* style */

const __vue_inject_styles__$3 = undefined;
/* scoped */

const __vue_scope_id__$3 = undefined;
/* module identifier */

const __vue_module_identifier__$3 = undefined;
/* functional template */

const __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$6 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

var __vue_component__$7 = __vue_component__$6;

//
//
//
//
//
//
var script$2 = {
  props: {
    top: Boolean,
    bottom: Boolean
  },
  computed: {
    getSectionSpaceClass() {
      return this.top ? 'section-spaces--top' : this.bottom ? 'section-spaces--bottom' : 'section-spaces';
    }

  }
};

/* script */
const __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.getSectionSpaceClass
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$2 = [];
/* style */

const __vue_inject_styles__$2 = undefined;
/* scoped */

const __vue_scope_id__$2 = undefined;
/* module identifier */

const __vue_module_identifier__$2 = undefined;
/* functional template */

const __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

var __vue_component__$5 = __vue_component__$4;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$1 = {
  props: {
    id: {
      type: String,
      default: "hswitch"
    },
    big: Boolean,
    checked: Boolean,
    disabled: Boolean,
    label: String
  },
  computed: {
    getClass() {
      return {
        switch__checked: this.checked,
        switch__disabled: this.disabled,
        switch__big: this.big
      };
    }

  },
  methods: {
    updateStatus() {
      if (!this.disabled) {
        this.$emit("update:checked", !this.checked);
      }
    }

  }
};

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "d-flex align-items-center mt-8"
  }, [_c('div', {
    staticClass: "switch",
    class: _vm.getClass
  }, [_c('input', {
    staticClass: "checkbox",
    attrs: {
      "id": _vm.id,
      "type": "checkbox",
      "disabled": _vm.disabled
    },
    domProps: {
      "checked": _vm.checked
    },
    on: {
      "change": function ($event) {
        return _vm.updateStatus();
      }
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "label",
    attrs: {
      "for": _vm.id
    },
    on: {
      "change": function ($event) {
        return _vm.updateStatus();
      }
    }
  }, [_c('span', {
    staticClass: "switch-inner"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-outer"
  })])]), _vm._v(" "), _c('HLabel', {
    staticClass: "cursor-pointer",
    nativeOn: {
      "click": function ($event) {
        return _vm.updateStatus();
      }
    }
  }, [_vm._v(_vm._s(_vm.label))])], 1);
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = function (inject) {
  if (!inject) return;
  inject("data-v-0eebf4f6_0", {
    source: ".switch[data-v-0eebf4f6]{position:relative;height:fit-content;width:17px;margin-right:11px}.switch .checkbox[data-v-0eebf4f6]{position:absolute;opacity:0}.switch .label[data-v-0eebf4f6]{display:block;overflow:hidden;cursor:pointer;border-radius:20px}.switch .switch-inner[data-v-0eebf4f6]{display:block;width:200%;margin-left:-100%;transition:margin .3s ease-in 0s}.switch .switch-inner[data-v-0eebf4f6]:after,.switch .switch-inner[data-v-0eebf4f6]:before{display:block;float:left;width:50%;height:10px;box-sizing:border-box}.switch .switch-inner[data-v-0eebf4f6]:before{content:\"\";padding-left:10px;background-color:#00b090}.switch .switch-inner[data-v-0eebf4f6]:after{content:\"\";padding-right:10px;background-color:#727586}.switch .switch-outer[data-v-0eebf4f6]{display:block;width:14px;height:14px;margin-top:-2px;margin-right:-4px;background-color:#fff;position:absolute;top:0;bottom:0;right:11px;border-radius:20px;transition:all .3s ease-in 0s,box-shadow 0s;box-shadow:0 1px 4px 0 rgba(0,0,0,.26)}.switch .switch-outer[data-v-0eebf4f6]:hover{box-shadow:0 0 0 5px rgba(114,117,134,.1)}.switch__big[data-v-0eebf4f6]{width:21px}.switch__big .switch-inner[data-v-0eebf4f6]:after,.switch__big .switch-inner[data-v-0eebf4f6]:before{height:12px}.switch__big .switch-outer[data-v-0eebf4f6]{width:18px;height:18px;margin-top:-3px;margin-right:-5px;right:13px}.switch__disabled .switch-inner[data-v-0eebf4f6]:before{background:#def4f0}.switch__disabled .switch-inner[data-v-0eebf4f6]:after{background:#dadce0}.switch__checked .switch-inner[data-v-0eebf4f6]{margin-left:0}.switch__checked .switch-outer[data-v-0eebf4f6]{right:0}.switch__checked .switch-outer[data-v-0eebf4f6]:hover{box-shadow:0 0 0 5px rgba(0,176,144,.2)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$1 = "data-v-0eebf4f6";
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, createInjector, undefined, undefined);

var __vue_component__$3 = __vue_component__$2;

//
//
//
//
//
//
var script = {
  props: {
    top: Boolean,
    bottom: Boolean
  },
  computed: {
    getSectionSpaceClass() {
      return this.top ? 'section-spaces--top' : this.bottom ? 'section-spaces--bottom' : 'section-spaces';
    }

  }
};

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "masonry-layout container",
    class: _vm.getSectionSpaceClass
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-b7414732_0", {
    source: ".masonry-layout{column-count:2;grid-auto-flow:row dense;grid-gap:10px}@media (min-width:768px){.masonry-layout{display:grid;grid-template-columns:1fr 1fr 1fr 1fr}}.masonry-layout>*{height:-webkit-fill-available;display:inline-block;margin-bottom:10px}@media (min-width:768px){.masonry-layout>*{height:auto}.masonry-layout>.tile-2x2{grid-column:span 2;grid-row:span 2}.masonry-layout>.tile-1x2{grid-column:span 1;grid-row:span 2}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

var __vue_component__$1 = __vue_component__;

// export * from "@/components/icons/plain-icons";

var components = /*#__PURE__*/Object.freeze({
	__proto__: null,
	ContentTile: __vue_component__$C,
	Language: __vue_component__$A,
	MenuItem: __vue_component__$y,
	MoneyBackGuarantee: __vue_component__$w,
	HButton: __vue_component__$r,
	HCheckbox: __vue_component__$p,
	HFeature: __vue_component__$n,
	HGrid: __vue_component__$l,
	HInput: __vue_component__$f,
	HLabel: HLabel,
	HLogo: __vue_component__$d,
	HMedia: __vue_component__$9,
	HRadio: __vue_component__$7,
	HSection: __vue_component__$5,
	HSwitch: __vue_component__$3,
	HText: HText,
	HWallLayout: __vue_component__$1,
	HIcon: HIcon
});

// Import vue components

const install = function installHWebsitesComponentsLibrary(Vue) {
  Object.entries(components).forEach(_ref => {
    let [componentName, component] = _ref;
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export { __vue_component__$C as ContentTile, __vue_component__$r as HButton, __vue_component__$p as HCheckbox, __vue_component__$n as HFeature, __vue_component__$l as HGrid, HIcon, __vue_component__$f as HInput, HLabel, __vue_component__$d as HLogo, __vue_component__$9 as HMedia, __vue_component__$7 as HRadio, __vue_component__$5 as HSection, __vue_component__$3 as HSwitch, HText, __vue_component__$1 as HWallLayout, __vue_component__$A as Language, __vue_component__$y as MenuItem, __vue_component__$w as MoneyBackGuarantee, install as default };

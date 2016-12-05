webpackJsonp([1],{

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _domManipulation = __webpack_require__(303);

	var _applicationService = __webpack_require__(304);

	var _applicationService2 = _interopRequireDefault(_applicationService);

	var _sourcesActions = __webpack_require__(327);

	var _Spinner = __webpack_require__(329);

	var _Spinner2 = _interopRequireDefault(_Spinner);

	var _routeActions = __webpack_require__(328);

	var _Select = __webpack_require__(338);

	var _Select2 = _interopRequireDefault(_Select);

	var _Component2 = __webpack_require__(342);

	var _Component3 = _interopRequireDefault(_Component2);

	var _Sources = __webpack_require__(347);

	var _Sources2 = _interopRequireDefault(_Sources);

	__webpack_require__(348);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var baseClassName = 'sources';
	var baseSelector = '.' + baseClassName;
	var sourceClassName = 'source';
	var selectSelector = '.select';

	var Sources = function (_Component) {
		_inherits(Sources, _Component);

		function Sources() {
			_classCallCheck(this, Sources);

			var _this = _possibleConstructorReturn(this, (Sources.__proto__ || Object.getPrototypeOf(Sources)).call(this));

			_this._onUpdateView = _this._storeChanged.bind(_this);
			_this._select = new _Select2.default();
			_applicationService2.default.stores.SourceStore.addListener(_this._onUpdateView);
			return _this;
		}

		_createClass(Sources, [{
			key: 'destructor',
			value: function destructor() {
				_applicationService2.default.stores.SourceStore.removeListener(this._onUpdateView);
			}
		}, {
			key: 'render',
			value: function render(elementSelector) {
				this._selector = elementSelector;
				this._spinner = new _Spinner2.default(elementSelector);
				(0, _domManipulation.addHtml)(this._selector, '');
				this._select.render(selectSelector);
				(0, _sourcesActions.getSources)(_applicationService2.default.stores.SourceStore.sources.category);
			}
		}, {
			key: '_storeChanged',
			value: function _storeChanged(SourceStore) {
				var model = SourceStore.sources;
				if (model.isLoading) {
					this._spinner.show();
				} else {
					this.updateView({ sources: model.sources });
					this._select.updateView({ category: model.category, categories: model.categories, categoriesVisibility: model.categoriesVisibility });
					this._spinner.hide();
				}
			}
		}, {
			key: 'bindActions',
			value: function bindActions() {
				(0, _domManipulation.delegateClick)(baseSelector, sourceClassName, this._onSourceClick.bind(this));
			}
		}, {
			key: '_onSourceClick',
			value: function _onSourceClick(target) {
				var id = target.getAttribute('data-id');
				(0, _routeActions.navigateToArticles)(id);
			}

			// _showSources(model) {
			// 	const html = template.render(model);
			// 	addHtml(this._selecotor, html);
			// 	this._select.render(selectSelector);
			// 	this._bindActions();
			// }

		}, {
			key: 'template',
			get: function get() {
				return _Sources2.default;
			}
		}]);

		return Sources;
	}(_Component3.default);

	exports.default = Sources;

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Select = __webpack_require__(339);

	var _Select2 = _interopRequireDefault(_Select);

	var _applicationService = __webpack_require__(304);

	var _applicationService2 = _interopRequireDefault(_applicationService);

	var _sourcesActions = __webpack_require__(327);

	__webpack_require__(340);

	var _domManipulation = __webpack_require__(303);

	var _Component2 = __webpack_require__(342);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var baseClassName = 'drop-down';
	var baseSelector = '.' + baseClassName;
	var buttonSelector = baseSelector + '__button';
	var itemSelector = baseSelector + '__item';

	var Select = function (_Component) {
		_inherits(Select, _Component);

		function Select() {
			_classCallCheck(this, Select);

			return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
		}

		_createClass(Select, [{
			key: 'render',
			value: function render(elementSelector) {
				this._selector = elementSelector;
				this._buttonSelector = this._selector + ' ' + buttonSelector;
				this._itemSelector = this._selector + ' ' + itemSelector;
				this.bindActions();
				// this.updateView(app.stores.SourceStore);
			}
		}, {
			key: 'bindActions',
			value: function bindActions() {
				(0, _domManipulation.subscribeOnClick)(this._buttonSelector, _sourcesActions.toggleCategories);
				(0, _domManipulation.subscribeOnClick)(this._itemSelector, this._onItemClick.bind(this));
			}
		}, {
			key: '_onItemClick',
			value: function _onItemClick(_ref) {
				var target = _ref.target;

				var text = target.textContent.trim();
				(0, _sourcesActions.getSources)(text);
			}
		}, {
			key: 'template',
			get: function get() {
				return _Select2.default;
			}
		}]);

		return Select;
	}(_Component3.default);

	exports.default = Select;

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(320);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"drop-down\">\r");t.b("\n" + i);t.b("	<button class=\"drop-down__button\">\r");t.b("\n" + i);t.b("		");t.b(t.t(t.f("category",c,p,0)));t.b("\r");t.b("\n" + i);t.b("		<span class=\"drop-down__caret\" > </span>\r");t.b("\n" + i);t.b("	</button>\r");t.b("\n" + i);t.b("	<ul class=\"drop-down__list\" style=\"visibility:");t.b(t.v(t.f("categoriesVisibility",c,p,0)));t.b("\">\r");t.b("\n" + i);if(t.s(t.f("categories",c,p,1),c,p,0,228,288,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("			<li class=\"drop-down__item\">\r");t.b("\n" + i);t.b("				");t.b(t.t(t.d(".",c,p,0)));t.b("\r");t.b("\n" + i);t.b("			</li>\r");t.b("\n" + i);});c.pop();}t.b("	</ul>\r");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"drop-down\">\r\n\t<button class=\"drop-down__button\">\r\n\t\t{{{category}}}\r\n\t\t<span class=\"drop-down__caret\" > </span>\r\n\t</button>\r\n\t<ul class=\"drop-down__list\" style=\"visibility:{{categoriesVisibility}}\">\r\n\t\t{{#categories}}\r\n\t\t\t<li class=\"drop-down__item\">\r\n\t\t\t\t{{{.}}}\r\n\t\t\t</li>\r\n\t\t{{/categories}}\r\n\t</ul>\r\n</div>", H);return T; }();

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(341);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(334)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?{browsers:[\"last 2 version\", \"IE 10\"]}!./../../../node_modules/sass-loader/index.js!./Select.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?{browsers:[\"last 2 version\", \"IE 10\"]}!./../../../node_modules/sass-loader/index.js!./Select.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(333)();
	// imports


	// module
	exports.push([module.id, ".drop-down__button {\n  height: 36px;\n  padding: 10px 30px;\n  background-color: #2196F3;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  font-size: 14px;\n  letter-spacing: .03em;\n  color: #fff;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 18px;\n  text-transform: uppercase;\n  border-radius: 2px;\n  border: none;\n  cursor: pointer; }\n\n.drop-down__caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px solid;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent; }\n\n.drop-down__list {\n  position: absolute;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  background-color: #FFF;\n  border-radius: 2px;\n  z-index: 1;\n  background-clip: padding-box;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n\n.drop-down__item {\n  cursor: pointer;\n  font-size: 16px;\n  padding: 10px 20px; }\n  .drop-down__item:hover {\n    background-color: #F5F5F5; }\n", ""]);

	// exports


/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _deepEqual = __webpack_require__(343);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _AbstractClass = __webpack_require__(346);

	var _AbstractClass2 = _interopRequireDefault(_AbstractClass);

	var _domManipulation = __webpack_require__(303);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var abstractMethods = ['bindActions'];
	var abstractGetters = ['template'];

	var Component = function (_Abstract) {
	    _inherits(Component, _Abstract);

	    function Component() {
	        _classCallCheck(this, Component);

	        var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, abstractMethods, abstractGetters));

	        _this._data = '';
	        return _this;
	    }

	    _createClass(Component, [{
	        key: 'updateView',
	        value: function updateView(data) {
	            var json = JSON.stringify(data);
	            if (json === this._data) return;
	            this._data = json;
	            var html = this.template.render(data);
	            (0, _domManipulation.addHtml)(this._selector, html);
	            this.bindActions();
	        }
	    }]);

	    return Component;
	}(_AbstractClass2.default);

	exports.default = Component;

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(344);
	var isArguments = __webpack_require__(345);

	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;

	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();

	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;

	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}

	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}

	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}

	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ },

/***/ 344:
/***/ function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;

	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ },

/***/ 345:
/***/ function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';

	exports = module.exports = supportsArgumentsClass ? supported : unsupported;

	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};

	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ },

/***/ 346:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AbstractClass = function () {
		function AbstractClass() {
			var methods = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
			var getProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
			var setProperties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

			_classCallCheck(this, AbstractClass);

			this._checkMethods(methods);
			this._checkGetProperties(getProperties);
			this._checkSetProperties(setProperties);
		}

		_createClass(AbstractClass, [{
			key: '_checkMethods',
			value: function _checkMethods(methods) {
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = methods[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var method = _step.value;

						if (typeof this[method] !== 'function') {
							throw new TypeError('Method ' + method + ' doesn\'t implemented');
						}
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			}
		}, {
			key: '_checkGetProperties',
			value: function _checkGetProperties(properties) {
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = properties[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var property = _step2.value;

						if (typeof this.__lookupGetter__(property) !== 'function') {
							throw new TypeError('Getter property ' + property + ' doesn\'t exist');
						}
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}
			}
		}, {
			key: '_checkSetProperties',
			value: function _checkSetProperties(properties) {
				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = properties[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var property = _step3.value;

						if (typeof this.__defineSetter__(property) !== 'function') {
							throw new TypeError('Getter property ' + property + ' doesn\'t exist');
						}
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}
			}
		}]);

		return AbstractClass;
	}();

	exports.default = AbstractClass;

/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(320);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"select\">\r");t.b("\n" + i);t.b("</div>\r");t.b("\n" + i);t.b("<ul class=\"sources\">\r");t.b("\n" + i);if(t.s(t.f("sources",c,p,1),c,p,0,68,94,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        ");t.b(t.t(t.f("html",c,p,0)));t.b("\r");t.b("\n" + i);});c.pop();}t.b("</ul>");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"select\">\r\n</div>\r\n<ul class=\"sources\">\r\n    {{#sources}}\r\n        {{{html}}}\r\n    {{/sources}}\r\n</ul>", H);return T; }();

/***/ },

/***/ 348:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(349);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(334)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?{browsers:[\"last 2 version\", \"IE 10\"]}!./../../../node_modules/sass-loader/index.js!./Sources.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?{browsers:[\"last 2 version\", \"IE 10\"]}!./../../../node_modules/sass-loader/index.js!./Sources.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(333)();
	// imports


	// module
	exports.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n  blockquote:before, blockquote:after, q:before, q:after {\n    content: '';\n    content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nbody {\n  background: #F5F5F5; }\n\n.newsapi {\n  float: right;\n  margin: 40px;\n  font-size: 20px; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin: 20px 0; }\n\nh1 {\n  font-size: 28px; }\n\nh2 {\n  font-size: 26px; }\n\nh3 {\n  font-size: 24px; }\n\nh4 {\n  font-size: 22px; }\n\nh5 {\n  font-size: 20px; }\n\nh6 {\n  font-size: 12px; }\n\n.select {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  margin: 20px; }\n\n.sources {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap;\n  -ms-flex-pack: center;\n      justify-content: center; }\n\n.source {\n  -ms-flex-preferred-size: 350px;\n      flex-basis: 350px;\n  height: 200px;\n  list-style: none;\n  margin: 30px;\n  padding: 15px;\n  cursor: pointer;\n  background: #fff;\n  font-family: \"Open Sans\", Arial, sans-serif;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  .source:hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }\n  .source__content {\n    height: 100%;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-item-align: center;\n        align-self: center; }\n    .source__content-logo {\n      height: 100%;\n      max-height: 30px;\n      max-width: 70px;\n      -ms-flex-order: 2;\n          order: 2;\n      margin-left: 20px; }\n    .source__content-description {\n      -ms-flex-preferred-size: 70%;\n          flex-basis: 70%;\n      display: -webkit-box;\n      font-size: 20px;\n      line-height: 1.3;\n      -webkit-line-clamp: 6;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n  .source__header {\n    margin: 0; }\n", ""]);

	// exports


/***/ }

});
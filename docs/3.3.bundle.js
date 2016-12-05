webpackJsonp([3],{

/***/ 303:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.manipulateWithElements = manipulateWithElements;
	exports.addHtml = addHtml;
	exports.subscribeOnClick = subscribeOnClick;
	exports.remove = remove;
	exports.find = find;
	exports.setText = setText;
	exports.delegateClick = delegateClick;
	function manipulateWithElements(querySelector, callback) {
		var elements = document.querySelectorAll(querySelector);
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var element = _step.value;

				callback(element);
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

	function addHtml(querySelector, html) {
		manipulateWithElements(querySelector, function (element) {
			return element.innerHTML = html;
		});
	}

	function subscribeOnClick(querySelector, callback) {
		manipulateWithElements(querySelector, function (element) {
			return element.onclick = callback;
		});
	}

	function remove(querySelector) {
		manipulateWithElements(querySelector, function (element) {
			return element.parentNode.removeChild(element);
		});
	}

	function find(querySelector) {
		return document.querySelectorAll(querySelector);
	}

	function setText(querySelector, text) {
		manipulateWithElements(querySelector, function (element) {
			return element.textContent = text;
		});
	}

	function delegateClick(parentClassName, targetClassName, callback) {
		subscribeOnClick(parentClassName, function (event) {
			var target = event.target;
			while (target.className !== parentClassName) {
				if (target.className === targetClassName) {
					callback(target);
					return;
				}
				target = target.parentNode;
				if (!target) {
					return;
				}
			}
		});
	}

/***/ },

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.getArticles = getArticles;
	exports.gotArticles = gotArticles;

	var _articles = __webpack_require__(313);

	var _applicationService = __webpack_require__(304);

	var _applicationService2 = _interopRequireDefault(_applicationService);

	var _apiService = __webpack_require__(324);

	var _apiService2 = _interopRequireDefault(_apiService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getArticles(id) {
		_applicationService2.default.dispatcher.dispatch(_articles.GET_ARTICLES);
		_apiService2.default.getArticles(id);
	}

	function gotArticles(articles) {
		_applicationService2.default.dispatcher.dispatch(_articles.GOT_ARTICLES, articles);
	}

/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _configuration = __webpack_require__(325);

	var _configuration2 = _interopRequireDefault(_configuration);

	var _apiRequestBuilder = __webpack_require__(326);

	var _apiRequestBuilder2 = _interopRequireDefault(_apiRequestBuilder);

	var _sourcesActions = __webpack_require__(327);

	var _articlesActions = __webpack_require__(312);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ApiService = function () {
		function ApiService(apiPrefix, apiKey) {
			_classCallCheck(this, ApiService);

			this._apiPrefix = apiPrefix;
			this._apiKey = apiKey;
		}

		_createClass(ApiService, [{
			key: 'getSources',
			value: function getSources(category) {
				var request = new _apiRequestBuilder2.default().addUrl(this._apiPrefix + 'sources').addQuery('language=en');
				if (category !== 'all') {
					request.addQuery('category=' + category);
				}
				request.send().then(function (response) {
					return (0, _sourcesActions.gotSources)(response);
				});
			}
		}, {
			key: 'getArticles',
			value: function getArticles(id) {
				return new _apiRequestBuilder2.default().addUrl(this._apiPrefix + 'articles').addQuery('apiKey=' + this._apiKey).addQuery('source=' + id).send().then(function (response) {
					return (0, _articlesActions.gotArticles)(response);
				});
			}
		}]);

		return ApiService;
	}();

	exports.default = new ApiService(_configuration2.default.baseUrl, _configuration2.default.apiKey);

/***/ },

/***/ 325:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var configuration = {
		apiKey: 'a7390735cfca4cf4801217e1a3b26900',
		baseUrl: 'https://newsapi.org/v1/'
	};

	exports.default = configuration;

/***/ },

/***/ 326:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var apiRequesBuilder = function () {
		function apiRequesBuilder() {
			var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
			    _ref$method = _ref.method,
			    method = _ref$method === undefined ? 'GET' : _ref$method,
			    _ref$query = _ref.query,
			    query = _ref$query === undefined ? [] : _ref$query,
			    _ref$url = _ref.url,
			    url = _ref$url === undefined ? '' : _ref$url,
			    _ref$responseType = _ref.responseType,
			    responseType = _ref$responseType === undefined ? 'json' : _ref$responseType,
			    _ref$mode = _ref.mode,
			    mode = _ref$mode === undefined ? 'cors' : _ref$mode;

			_classCallCheck(this, apiRequesBuilder);

			this._method = method;
			this._query = query;
			this._url = url;
			this._responseType = responseType;
			this._mode = mode;
		}

		_createClass(apiRequesBuilder, [{
			key: 'addMethod',
			value: function addMethod(method) {
				this._method = method;
				return this;
			}
		}, {
			key: 'addQuery',
			value: function addQuery(query) {
				this._query.push(query);
				return this;
			}
		}, {
			key: 'addUrl',
			value: function addUrl(url) {
				this._url = url;
				return this;
			}
		}, {
			key: 'addResponseType',
			value: function addResponseType(responseType) {
				this._responseType = responseType;
				return this;
			}
		}, {
			key: 'send',
			value: function send() {
				var url = this._createUrl();
				var options = {
					method: this._method,
					mode: this._mode
				};
				return fetch(url, options).then(this._transformResponseToType.bind(this));
			}
		}, {
			key: '_createUrl',
			value: function _createUrl() {
				// TODO: add more methods suport
				if (this._method === 'GET') {
					var query = this._query.join('&');
					return this._url + '?' + query;
				}
				return '';
			}
		}, {
			key: '_transformResponseToType',
			value: function _transformResponseToType(response) {
				switch (this._responseType) {
					case 'arrayBudder':
						return response.arrayBuffer();
					case 'blob':
						return response.blob();
					case 'formData':
						return response.formData();
					case 'json':
						return response.json();
					case 'text':
						return response.text();
					default:
						return response.json();
				}
			}
		}]);

		return apiRequesBuilder;
	}();

	exports.default = apiRequesBuilder;

/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.getSources = getSources;
	exports.gotSources = gotSources;
	exports.toggleCategories = toggleCategories;

	var _sources = __webpack_require__(317);

	var _applicationService = __webpack_require__(304);

	var _applicationService2 = _interopRequireDefault(_applicationService);

	var _apiService = __webpack_require__(324);

	var _apiService2 = _interopRequireDefault(_apiService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getSources(category) {
		_applicationService2.default.dispatcher.dispatch(_sources.GET_SOURCES, category);
		_apiService2.default.getSources(category);
	}

	function gotSources(sources) {
		_applicationService2.default.dispatcher.dispatch(_sources.GOT_SOURCES, sources);
	}

	function toggleCategories() {
		_applicationService2.default.dispatcher.dispatch(_sources.TOGGLE_CATEGORIES_VISIBILITY);
	}

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _domManipulation = __webpack_require__(303);

	var _Spinner = __webpack_require__(330);

	var _Spinner2 = _interopRequireDefault(_Spinner);

	__webpack_require__(331);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var spinnerClassName = 'spinner';
	var spinnerSelecor = '.' + spinnerClassName;

	var Spinner = function () {
		function Spinner(elementSelector) {
			_classCallCheck(this, Spinner);

			this._rootSelector = elementSelector;
			this._selector = this._selector + ' ' + spinnerSelecor;
		}

		_createClass(Spinner, [{
			key: 'show',
			value: function show() {
				var elements = (0, _domManipulation.find)(this._selector);
				if (elements.length === 0) {
					var html = _Spinner2.default.render();
					(0, _domManipulation.addHtml)(this._rootSelector, html);
				} else {
					elements.forEach(function (element) {
						return element.style.visibility = 'visible';
					});
				}
			}
		}, {
			key: 'hide',
			value: function hide() {
				(0, _domManipulation.manipulateWithElements)(this._selector, function (element) {
					return element.style.visibility = 'hidden';
				});
			}
		}, {
			key: 'remove',
			value: function remove() {
				(0, _domManipulation.remove)(this._selector);
			}
		}]);

		return Spinner;
	}();

	exports.default = Spinner;

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(320);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class =\"spinner\">\r");t.b("\n" + i);t.b("	<div class=\"spinner__content\" />\r");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<div class =\"spinner\">\r\n\t<div class=\"spinner__content\" />\r\n</div>", H);return T; }();

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(332);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(334)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?{browsers:[\"last 2 version\", \"IE 10\"]}!./../../../node_modules/sass-loader/index.js!./Spinner.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?{browsers:[\"last 2 version\", \"IE 10\"]}!./../../../node_modules/sass-loader/index.js!./Spinner.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(333)();
	// imports


	// module
	exports.push([module.id, ".spinner {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center; }\n  .spinner__content {\n    width: 100px;\n    height: 100px;\n    border-radius: 80px;\n    background-color: #78909C;\n    animation: scaleout 1.0s infinite ease-in-out; }\n\n@keyframes scaleout {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1);\n    opacity: 0; } }\n", ""]);

	// exports


/***/ }

});
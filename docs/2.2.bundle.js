webpackJsonp([2],{

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _domManipulation = __webpack_require__(303);

	var _articlesActions = __webpack_require__(312);

	var _routeActions = __webpack_require__(328);

	var _Spinner = __webpack_require__(329);

	var _Spinner2 = _interopRequireDefault(_Spinner);

	var _applicationService = __webpack_require__(304);

	var _applicationService2 = _interopRequireDefault(_applicationService);

	var _Articles = __webpack_require__(335);

	var _Articles2 = _interopRequireDefault(_Articles);

	__webpack_require__(336);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var hrefAttr = 'data-href';
	var baseClassName = 'article';
	var baseSelector = '.' + baseClassName;
	var backButtonSelector = '.back-button';
	var imageClassName = baseClassName + '__image';
	var titleClassName = baseClassName + '__title';
	var navigationSelectors = [imageClassName, titleClassName];

	var ArticlesControoller = function () {
		function ArticlesControoller() {
			_classCallCheck(this, ArticlesControoller);

			this._id = location.hash.split('/')[1];
			this._onArticlesChangedHandler = this._updateView.bind(this);
			_applicationService2.default.stores.ArticlesStore.addListener(this._onArticlesChangedHandler);
		}

		_createClass(ArticlesControoller, [{
			key: 'destructor',
			value: function destructor() {
				_applicationService2.default.stores.ArticlesStore.removeListener(this._onArticlesChangedHandler);
			}
		}, {
			key: 'render',
			value: function render(elementSelector) {
				this._selecotor = elementSelector;
				this._spinner = new _Spinner2.default(elementSelector);
				(0, _articlesActions.getArticles)(this._id);
			}
		}, {
			key: '_updateView',
			value: function _updateView(articlesStore) {
				var model = articlesStore.articles;
				if (model.isLoading) {
					this._spinner.show();
				} else {
					this._spinner.hide();
					this._showArticles(model);
				}
			}
		}, {
			key: '_showArticles',
			value: function _showArticles(model) {
				var html = _Articles2.default.render(model);
				(0, _domManipulation.addHtml)(this._selecotor, html);
				this._bindActions();
			}
		}, {
			key: '_bindActions',
			value: function _bindActions() {
				(0, _domManipulation.subscribeOnClick)(baseSelector, this._onArticleClick.bind(this));
				(0, _domManipulation.subscribeOnClick)(backButtonSelector, _routeActions.navigateToSources);
			}
		}, {
			key: '_onArticleClick',
			value: function _onArticleClick(_ref) {
				var currentTarget = _ref.currentTarget,
				    target = _ref.target;

				var href = currentTarget.getAttribute(hrefAttr);
				if (navigationSelectors.indexOf(target.className) >= 0) {
					var win = window.open(href, '_blank');
					win.focus();
				}
			}
		}]);

		return ArticlesControoller;
	}();

	exports.default = ArticlesControoller;

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(320);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<button class=\"back-button\">&crarr;</button>\r");t.b("\n" + i);t.b("<ul class=\"articles\">\r");t.b("\n" + i);if(t.s(t.f("articles",c,p,1),c,p,0,86,461,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <li class=\"article\" data-href=");t.b(t.v(t.f("url",c,p,0)));t.b(">\r");t.b("\n" + i);t.b("        <h5 class=\"article__time\">");t.b(t.t(t.f("timeAgo",c,p,0)));t.b(" ago</h5>\r");t.b("\n" + i);t.b("        <img class=\"article__image\" src=\"");t.b(t.v(t.f("urlToImage",c,p,0)));t.b("\" alt=");t.b(t.v(t.f("title",c,p,0)));t.b(" />\r");t.b("\n" + i);t.b("        <h1 class=\"article__title\">");t.b(t.t(t.f("title",c,p,0)));t.b("</h1>\r");t.b("\n" + i);t.b("        <h3 class=\"article__description\">");t.b(t.t(t.f("description",c,p,0)));t.b("</h3>\r");t.b("\n" + i);t.b("        <a class=\"article__more\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\">Read more</a>\r");t.b("\n" + i);t.b("    </li>\r");t.b("\n" + i);});c.pop();}t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<button class=\"back-button\">&crarr;</button>\r\n<ul class=\"articles\">\r\n    {{#articles}}\r\n    <li class=\"article\" data-href={{url}}>\r\n        <h5 class=\"article__time\">{{{timeAgo}}} ago</h5>\r\n        <img class=\"article__image\" src=\"{{urlToImage}}\" alt={{title}} />\r\n        <h1 class=\"article__title\">{{{title}}}</h1>\r\n        <h3 class=\"article__description\">{{{description}}}</h3>\r\n        <a class=\"article__more\" href=\"{{url}}\">Read more</a>\r\n    </li>\r\n    {{/articles}}\r\n</div>", H);return T; }();

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(337);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(334)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?{browsers:[\"last 2 version\", \"IE 10\"]}!./../../../node_modules/sass-loader/index.js!./Articles.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?{browsers:[\"last 2 version\", \"IE 10\"]}!./../../../node_modules/sass-loader/index.js!./Articles.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(333)();
	// imports


	// module
	exports.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n  blockquote:before, blockquote:after, q:before, q:after {\n    content: '';\n    content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nbody {\n  background: #F5F5F5; }\n\n.newsapi {\n  float: right;\n  margin: 40px;\n  font-size: 20px; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin: 20px 0; }\n\nh1 {\n  font-size: 28px; }\n\nh2 {\n  font-size: 26px; }\n\nh3 {\n  font-size: 24px; }\n\nh4 {\n  font-size: 22px; }\n\nh5 {\n  font-size: 20px; }\n\nh6 {\n  font-size: 12px; }\n\n.back-button {\n  background: transparent;\n  position: fixed;\n  border: none;\n  top: 20px;\n  left: 20px;\n  font-size: 50px;\n  cursor: pointer; }\n\n.articles {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap;\n  -ms-flex-pack: center;\n      justify-content: center; }\n\n.article {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-preferred-size: 400px;\n      flex-basis: 400px;\n  -ms-flex-flow: column;\n      flex-flow: column;\n  padding: 15px;\n  margin: 30px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  .article:hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }\n  .article__image {\n    cursor: pointer;\n    width: 100%; }\n  .article__title {\n    cursor: pointer; }\n  .article__time {\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n    margin-top: 0; }\n  .article__more {\n    -ms-flex-item-align: start;\n        align-self: flex-start; }\n", ""]);

	// exports


/***/ }

});
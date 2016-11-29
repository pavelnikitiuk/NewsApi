webpackJsonp([2],{307:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),s=function e(t,r,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,r);if(void 0===n){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,o)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(o)},c=r(303),u=r(304),f=o(u),b=r(308),p=r(300),d=o(p),h=r(309),m=o(h),g=r(320),_=o(g);r(321);var x="data-href",v="article",y="."+v,k=".back-button",w=y+"__image",O=y+"__title",j=[w,O],z="#sources",A=function(e){function t(){n(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e._id=location.hash.split("/")[1],e}return a(t,e),l(t,[{key:"render",value:function(e){s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"render",this).call(this,e)}},{key:"loadData",value:function(){return f.default.getArticles(this._id)}},{key:"processWithResponse",value:function(e){e.articles.forEach(function(e){return e.timeAgo=(0,b.timeAgo)(new Date(e.publishedAt))})}},{key:"bindActions",value:function(){(0,c.subscribeOnClick)(y,this._onArticleClick.bind(this)),(0,c.subscribeOnClick)(k,function(){return d.default.navigateTo(z)})}},{key:"_onArticleClick",value:function(e){var t=e.currentTarget,r=e.target,o=t.getAttribute(x);if(j.indexOf(r.className)>=0){var n=window.open(o,"_blank");n.focus()}}},{key:"template",get:function(){return _.default}}]),t}(m.default);t.default=A},308:function(e,t){"use strict";function r(e){var t=Math.floor((new Date-e)/1e3),r=Math.floor(t/31536e3);return r>1?r+" years":(r=Math.floor(t/2592e3),r>1?r+" months":(r=Math.floor(t/86400),r>1?r+" days":(r=Math.floor(t/3600),r>1?r+" hours":(r=Math.floor(t/60),r>1?r+" minutes":Math.floor(t)+" seconds"))))}Object.defineProperty(t,"__esModule",{value:!0}),t.timeAgo=r},320:function(e,t,r){var o=r(313);e.exports=function(){var e=new o.Template({code:function(e,t,r){var o=this;return o.b(r=r||""),o.b('<button class="back-button">&crarr;</button>\r'),o.b("\n"+r),o.b('<ul class="articles">\r'),o.b("\n"+r),o.s(o.f("articles",e,t,1),e,t,0,86,461,"{{ }}")&&(o.rs(e,t,function(e,t,o){o.b('    <li class="article" data-href='),o.b(o.v(o.f("url",e,t,0))),o.b(">\r"),o.b("\n"+r),o.b('        <h5 class="article__time">'),o.b(o.t(o.f("timeAgo",e,t,0))),o.b(" ago</h5>\r"),o.b("\n"+r),o.b('        <img class="article__image" src="'),o.b(o.v(o.f("urlToImage",e,t,0))),o.b('" alt='),o.b(o.v(o.f("title",e,t,0))),o.b(" />\r"),o.b("\n"+r),o.b('        <h1 class="article__title">'),o.b(o.t(o.f("title",e,t,0))),o.b("</h1>\r"),o.b("\n"+r),o.b('        <h3 class="article__description">'),o.b(o.t(o.f("description",e,t,0))),o.b("</h3>\r"),o.b("\n"+r),o.b('        <a class="article__more" href="'),o.b(o.v(o.f("url",e,t,0))),o.b('">Read more</a>\r'),o.b("\n"+r),o.b("    </li>\r"),o.b("\n"+r)}),e.pop()),o.b("</div>"),o.fl()},partials:{},subs:{}},'<button class="back-button">&crarr;</button>\r\n<ul class="articles">\r\n    {{#articles}}\r\n    <li class="article" data-href={{url}}>\r\n        <h5 class="article__time">{{{timeAgo}}} ago</h5>\r\n        <img class="article__image" src="{{urlToImage}}" alt={{title}} />\r\n        <h1 class="article__title">{{{title}}}</h1>\r\n        <h3 class="article__description">{{{description}}}</h3>\r\n        <a class="article__more" href="{{url}}">Read more</a>\r\n    </li>\r\n    {{/articles}}\r\n</div>',o);return e}()},321:function(e,t,r){var o=r(322);"string"==typeof o&&(o=[[e.id,o,""]]);r(319)(o,{});o.locals&&(e.exports=o.locals)},322:function(e,t,r){t=e.exports=r(318)(),t.push([e.id,"a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,main,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}body{background:#f5f5f5}.news-content{height:100vh}.newsapi{float:right;margin:40px;font-size:20px}h1,h2,h3,h4,h5,h6{margin:20px 0}h1{font-size:28px}h2{font-size:26px}h3{font-size:24px}h4{font-size:22px}h5{font-size:20px}h6{font-size:12px}.back-button{background:transparent;position:fixed;border:none;top:20px;left:20px;font-size:50px;cursor:pointer}.articles{-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-pack:center;justify-content:center}.article,.articles{display:-ms-flexbox;display:flex}.article{-ms-flex-preferred-size:400px;flex-basis:400px;-ms-flex-flow:column;flex-flow:column;padding:15px;margin:30px;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);transition:all .3s cubic-bezier(.25,.8,.25,1)}.article:hover{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}.article__image{cursor:pointer;width:100%}.article__title{cursor:pointer}.article__time{-ms-flex-item-align:end;align-self:flex-end;margin-top:0}.article__more{-ms-flex-item-align:start;align-self:flex-start}",""])}});
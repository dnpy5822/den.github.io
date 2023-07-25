var __awaiter=this&&this.__awaiter||function(n,e,t,i){function r(n){return n instanceof t?n:new t((function(e){e(n)}))}return new(t||(t=Promise))((function(t,o){function a(n){try{l(i.next(n))}catch(n){o(n)}}function s(n){try{l(i["throw"](n))}catch(n){o(n)}}function l(n){n.done?t(n.value):r(n.value).then(a,s)}l((i=i.apply(n,e||[])).next())}))};var __generator=this&&this.__generator||function(n,e){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(n){return function(e){return l([n,e])}}function l(s){if(i)throw new TypeError("Generator is already executing.");while(a&&(a=0,s[0]&&(t=0)),t)try{if(i=1,r&&(o=s[0]&2?r["return"]:s[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;if(r=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;r=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(o=t.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){t.label=s[1];break}if(s[0]===6&&t.label<o[1]){t.label=o[1];o=s;break}if(o&&t.label<o[2]){t.label=o[2];t.ops.push(s);break}if(o[2])t.ops.pop();t.trys.pop();continue}s=e.call(n,t)}catch(n){s=[6,n];r=0}finally{i=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./index-e8fd4f95.system.js","./index-9f09a466.system.js"],(function(n){"use strict";var e,t,i,r,o,a,s;return{setters:[function(n){e=n.h;t=n.r},function(n){i=n.f;r=n.s;o=n.p;a=n.W;s=n.F}],execute:function(){var l=function(n){var t=n.collection;return e("div",{class:"inner"},e("div",{class:"nft-image"},e("img",{class:"nft-image",src:t.imageUrl,alt:"nft icon"})),e("div",{class:"info-box"},e("span",{class:"text-box"},t.name),e("div",{class:"price-box"},e("p",null,"底價"),e("img",{src:t.paymentToken.imageUrl,alt:t.paymentToken.name,"aria-label":t.paymentToken.name,width:8,style:{margin:"0 4px",maxWidth:"56px",borderRadius:"100%"}}),e("span",null,i(t.floorPrice,{nullPlaceholder:"--"})))))};var c='/* css reset start */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n  font-size: 16px;\n  font-family: "PingFang HK", PingFang-HK, PingFangHK, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: "";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n* {\n  font-family: "PingFang HK", PingFang-HK, PingFangHK, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif !important;\n}\n\n/* css reset end */\n.loading {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  font-size: 24px;\n}\n\n:host {\n  display: block;\n  width: 100%;\n  container: container/inline-size;\n}\n\n.container {\n  min-width: 310px;\n  max-width: 1256px;\n  font-size: 16px;\n  background-color: white;\n  padding: 24px 0;\n  width: 100%;\n}\n\n.nft-wrapper {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  width: 100%;\n  -ms-flex-pack: start;\n  justify-content: start;\n  margin-bottom: 17px;\n}\n\n.inner {\n  display: block;\n  margin: 0 8px;\n  max-width: 233.6px;\n  border-radius: 10px 10px 10px 10px;\n  -webkit-box-shadow: 0 0 10px rgb(200, 200, 200);\n  box-shadow: 0 0 10px rgb(200, 200, 200);\n  border-collapse: collapse;\n  text-decoration: none;\n  font-family: "PingFang HK";\n}\n.inner:first-child {\n  margin-left: 12px;\n}\n.inner:last-child {\n  margin-right: 12px;\n}\n\n.nft-image {\n  width: 160px;\n  height: 134px;\n  border-radius: 5% 5% 0 0;\n  margin-bottom: 0;\n}\n\n.info-box {\n  padding: 16px 0 16px 8px;\n  margin-top: 0;\n  border-radius: 0 0 10px 10px;\n  color: black;\n}\n\n.price-box {\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 14px;\n  margin-top: 3px;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.text-box {\n  display: -webkit-box;\n  overflow: hidden;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow-wrap: break-word;\n}\n\n.scroll-wrapper {\n  overflow-x: scroll;\n  padding-right: 4px;\n  -ms-overflow-style: none; /* IE 11 */\n  scrollbar-width: none; /* Firefox 64 */\n}\n\n.scroll-wrapper::-webkit-scrollbar {\n  display: none;\n}\n\n@container container (min-width:768px) {\n  .nft-image {\n    width: 200px;\n    height: 185px;\n  }\n}\n@container container (min-width:1024px) {\n  .nft-image {\n    width: 230px;\n    height: 224px;\n  }\n}';var d=n("icon_featured_nft_list_widget",function(){function n(n){t(this,n);this.limit=5;this.isLoading=false;this.error=undefined;this.featuredNFTList=null}n.prototype.connectedCallback=function(){this.isLoading=true};n.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){var n,e;return __generator(this,(function(t){switch(t.label){case 0:t.trys.push([0,2,,3]);return[4,r.fetchFeaturedNfts({limit:this.limit})];case 1:n=t.sent();this.featuredNFTList=n;return[3,3];case 2:e=t.sent();console.error("error:",e);this.error=e;return[3,3];case 3:this.isLoading=false;return[2]}}))}))};n.prototype.render=function(){var n=o("collections",this.featuredNFTList);var t=o("lastFetchedTime",this.featuredNFTList);return e("div",{class:"container"},e(a,{title:"精選NFT"}),this.isLoading&&e("div",{class:"loading"},"Loading..."),!this.isLoading&&this.error&&e("div",{class:"error"},"Error"),!this.isLoading&&n.length===0&&e("div",{class:"empty"},"No data"),!this.isLoading&&n.length>0&&e("div",{class:"scroll-wrapper"},e("div",{class:"nft-wrapper"},n&&n.map((function(n){return e(l,{collection:n})})))),e(s,{source:"OpenSea",updateTime:t}))};return n}());d.style=c}}}));
//# sourceMappingURL=icon-featured-nft-list-widget.system.entry.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[277],{11279:function(e,t,a){"use strict";var r=a(4);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=r(a(74));var d=r(a(1435));var o=r(a(14209));var l=r(a(2475));var f=r(a(2027));var c=r(a(794));var v=r(a(410));var h=r(a(11852));var u=r(a(441));var i=(0,n.default)({getStores:function e(){return[l.default,f.default,c.default,v.default]},getPropsFromStores:function e(){var t=c.default.getState(),a=t.commentsEnabled,r=t.disqusShortname,n=t.menuShortcuts,o=t.tutorialsCompleted;var l=v.default.getState(),u=l.unmoderatedCommentCount;var i=f.default.hasAchievement(d.default.ADDED_DONATION_BLOCK);var s=n.includes(h.default.SCHEDULING);return{menuShortcuts:n,shouldShowSchedulingMenu:s,shouldShowCommentsMenu:!r&&a,shouldShowDonationMenu:i,tutorialsCompleted:o,unmoderatedCommentCount:u?""+u:void 0}}},o.default);var s=(0,u.default)(i,o.default);t.default=s;e.exports=t.default},11852:function(e,t){var a={ORDERS:1,INVENTORY:2,CUSTOMERS:3,DISCOUNTS:4,SALES_OVERVIEW:5,TRAFFIC_OVERVIEW:6,TRAFFIC_SOURCES:7,POPULAR_CONTENT:8,SCHEDULING:9};e.exports=a},12218:function(e,t,a){"use strict";var r=a(4);Object.defineProperty(t,"__esModule",{value:true});t.default=o;var n=r(a(12219));function o(){return n.default.getState().paymentProviderConnected}e.exports=t.default},12219:function(e,t,a){"use strict";var r=a(4);var n=r(a(8));var o=r(a(9));var l=a(240);var u=function(){function e(){(0,n.default)(this,e);this.state={paymentProviderConnected:false}}(0,o.default)(e,[{key:"getStateFromContext",value:function e(t){var a=t.commerceSettings;return{paymentProviderConnected:!!a&&a.paymentProviderConnected}}}]);return e}();e.exports=l(u,"CommerceSettingsStore")},14209:function(e,t,a){"use strict";var r=a(4);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=r(a(40));var o=r(a(8));var l=r(a(9));var u=r(a(6));var i=r(a(10));var s=r(a(11));var d=r(a(7));var f=r(a(2));var c=r(a(0));var v=r(a(1));var h=r(a(399));var p=r(a(452));var m=r(a(7443));var g=a(24);var y=r(a(8179));var S=r(a(14210));var b=a(756);var C=r(a(11852));var k=r(a(12218));var R=a(8180);var T=r(a(1574));var E=r(a(794));var w;function O(r){function n(){if("undefined"===typeof Reflect||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if("function"===typeof Proxy)return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true}catch(e){return false}}return function(){var e=(0,d.default)(r),t;if(n()){var a=(0,d.default)(this).constructor;t=Reflect.construct(e,arguments,a)}else t=e.apply(this,arguments);return(0,s.default)(this,t)}}var x="/";var N="scheduling-feb-2020";var _="/scheduling";var D=(w={},(0,f.default)(w,C.default.ORDERS,{to:"/commerce/orders",backTo:x,title:(0,g.t)("Orders")}),(0,f.default)(w,C.default.INVENTORY,{to:"/commerce/inventory",backTo:x,title:(0,g.t)("Inventory")}),(0,f.default)(w,C.default.CUSTOMERS,{to:"/commerce/customers",backTo:x,title:(0,g.t)("Customers")}),(0,f.default)(w,C.default.DISCOUNTS,{to:"/commerce/discounts",backTo:x,title:(0,g.t)("Discounts")}),(0,f.default)(w,C.default.SALES_OVERVIEW,{to:"/analytics#sales-overview",backTo:x,title:(0,g.t)("Sales Overview")}),(0,f.default)(w,C.default.TRAFFIC_OVERVIEW,{to:"/analytics#traffic-overview",backTo:x,title:(0,g.t)("Traffic Overview")}),(0,f.default)(w,C.default.TRAFFIC_SOURCES,{to:"/analytics#traffic-sources",backTo:x,title:(0,g.t)("Traffic Sources")}),(0,f.default)(w,C.default.POPULAR_CONTENT,{to:"/analytics#popular-content",backTo:x,title:(0,g.t)("Popular Content")}),w);var I=new Set([C.default.ORDERS,C.default.INVENTORY,C.default.CUSTOMERS,C.default.DISCOUNTS]);var M=new Set([C.default.SALES_OVERVIEW,C.default.TRAFFIC_OVERVIEW,C.default.TRAFFIC_SOURCES,C.default.POPULAR_CONTENT]);var P=function(e){(0,i.default)(a,e);var t=O(a);function a(e){var n;(0,o.default)(this,a);n=t.call(this,e);(0,f.default)((0,u.default)(n),"updateMobile",function(){var e=(0,b.isMobile)();e!==n.state.mobile&&n.setState({mobile:e})});(0,f.default)((0,u.default)(n),"getClassicConfig",function(){var e=n.props,t=e.shouldShowCommentsMenu,a=e.shouldShowDonationMenu,r=e.unmoderatedCommentCount;return[{key:"all-items",items:[{to:"/pages",className:S.default.pages,title:(0,g.t)("Pages")},{to:"/design",title:(0,g.t)("Design")},{to:"/commerce",title:(0,g.t)("Commerce")},{to:"/marketing",title:(0,g.t)("Marketing")},n.getSchedulingConfig(),{to:"/donations",title:(0,g.t)("Donations"),shouldShow:a},{to:"/analytics",title:(0,g.t)("Analytics")},{to:"/profiles",title:(0,g.t)("Profiles")},{to:"/comment-settings",title:(0,g.t)("Comments"),detail:r?""+r:void 0,shouldShow:t},{to:"/settings",title:(0,g.t)("Settings")},{title:(0,g.t)("Help"),to:"/help",key:"help",className:"link-knowledge-base",dataTest:"menuItem-knowledge-base"}]}]});(0,f.default)((0,u.default)(n),"handleClickForTracking",function(e){var t=n.props.tutorialsCompleted;e===_&&T.default.save(E.default.getMergedWebsiteSettings({tutorialsCompleted:t.concat(N)}),true)});n.state={mobile:(0,b.isMobile)()};return n}(0,l.default)(a,[{key:"componentDidMount",value:function e(){window.addEventListener("resize",this.updateMobile)}},{key:"componentWillUnmount",value:function e(){window.removeEventListener("resize",this.updateMobile)}},{key:"getSchedulingConfig",value:function e(){var t=this.props,a=t.shouldShowSchedulingMenu,r=t.tutorialsCompleted;var n={to:_,backTo:x,title:(0,g.t)("Scheduling"),shouldShow:a};r.includes(N)||(n.detail=(0,g.t)("New"));return n}},{key:"getShortcutsConfig",value:function e(){var t=this.props.menuShortcuts;var a=[];var r=[];t.forEach(function(e){if(I.has(e))a.push(D[e]);else if(M.has(e)){if(e===C.default.SALES_OVERVIEW&&!(0,k.default)())return;r.push(D[e])}});var n=[];a.length>0&&n.push({key:"commerceShortcuts",items:a});r.length>0&&n.push({key:"analyticsShortcuts",items:r});return n}},{key:"render",value:function e(){var t=this.getShortcutsConfig();var a=[].concat((0,n.default)(t),(0,n.default)(this.getClassicConfig()));return c.default.createElement("div",{className:S.default.container},c.default.createElement("a",{href:R.accountDashboardUrl,className:S.default.logo__container},c.default.createElement("div",{className:S.default.logo})),c.default.createElement("div",null,c.default.createElement("div",{className:S.default.spacer}),c.default.createElement(m.default,{groups:a,useTitleVariant:true,onClickForTracking:this.handleClickForTracking})),c.default.createElement(y.default,null))}}]);return a}(c.default.Component);(0,f.default)(P,"propTypes",{menuShortcuts:v.default.arrayOf(v.default.oneOf(Object.values(C.default))),router:p.default.isRequired,shouldShowCommentsMenu:v.default.bool,shouldShowDonationMenu:v.default.bool,unmoderatedCommentCount:v.default.number,shouldShowSchedulingMenu:v.default.bool,tutorialsCompleted:v.default.array});var F=(0,h.default)(P);t.default=F;e.exports=t.default},14210:function(e,t,a){var r=a(14211);"string"===typeof r&&(r=[[e.i,r,""]]);var n;var o;var l={hmr:true};l.transform=n;l.insertInto=void 0;var u=a(17)(r,l);r.locals&&(e.exports=r.locals);false},14211:function(e,t,a){t=e.exports=a(16)(false);var r=a(152);var n=r(a(14212));t.push([e.i,"/*\nNote: These mediaQueries should be kept in sync with the mediaQueries in src/shared/utils/mediaQueries.js as well as\nthe mediaQueries in styles-v6/_variables-media-queries.less\n\nIn short, if you change one, change them all\n*/\n/*\n  Currently we are only targeting mobile devices up to 432px. This should include all the most typical iOS, Android\n  and Windows phones. Tablet devices are currently not being targeted for the mobile experience.\n */\n@media screen and (max-width: 432px) {\n  .mobile-hidden {\n    display: none;\n  }\n}\n@media screen and (max-width: 432px) {\n  .subDesktop-hidden {\n    display: none;\n  }\n}\n@media screen and (min-width: 433px) {\n  .desktop-hidden {\n    display: none;\n  }\n}\n.Root-container-36KhR {\n  box-sizing: border-box;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.Root-spacer-zVAXF {\n  height: 44px;\n}\n@media screen and (max-width: 432px) {\n  .Root-spacer-zVAXF {\n    height: 0;\n  }\n}\n.Root-logo__container-3np6G {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 22px;\n  width: 28px;\n  margin: 33px;\n  border: none;\n  z-index: 111;\n}\n@media screen and (max-width: 432px) {\n  .Root-logo__container-3np6G {\n    margin: 16px 22px;\n  }\n}\n.Root-logo-SnDQZ {\n  height: 22px;\n  width: 28px;\n  background-image: url("+n+");\n  background-repeat: no-repeat;\n}\n.Root-logo-SnDQZ:empty {\n  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.5);\n}\n.Root-logo-SnDQZ:empty:active {\n  transform: scale(0.5);\n  transition: all 0.05s cubic-bezier(0.175, 0.885, 0.32, 1.5);\n}\n",""]);t.locals={container:"Root-container-36KhR",spacer:"Root-spacer-zVAXF",logo__container:"Root-logo__container-3np6G",logo:"Root-logo-SnDQZ"}},14212:function(e,t){e.exports="data:image/svg+xml,%3Csvg width='28' height='22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16.26 4.557l1.293 1.33-8.633 8.659a5 5 0 01-7.079 0 5.02 5.02 0 010-7.091L9.283 0l1.304 1.34-7.396 7.455a3.138 3.138 0 00.023 4.432 3.125 3.125 0 004.424-.022l8.621-8.648zm-1.589-1.5L6.05 11.693l-1.362-1.34 8.645-8.648a5.008 5.008 0 017.078 0l.67.67-1.339 1.352-.67-.67a3.094 3.094 0 00-4.4 0zm11.47 4.398a5.008 5.008 0 00-7.08 0l-8.633 8.659 1.35 1.352L20.4 8.818a3.116 3.116 0 014.39 0 3.129 3.129 0 010 4.41l-7.396 7.431L18.744 22l7.442-7.454a5.029 5.029 0 00-.046-7.091zM13.31 18.943l8.621-8.636 1.362 1.34-8.633 8.649a5.008 5.008 0 01-7.079 0l-.67-.671 1.328-1.364.67.682a3.127 3.127 0 004.4 0z' fill='%23000'/%3E%3C/svg%3E"},7443:function(e,t,a){"use strict";var r=a(4);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var o=r(a(8));var n=r(a(9));var l=r(a(6));var u=r(a(10));var i=r(a(11));var s=r(a(7));var d=r(a(2));var f=r(a(1));var c=r(a(7444));var v=r(a(0));var h=r(a(399));var p=a(3492);var m=r(a(7445));var g=r(a(452));function y(r){function n(){if("undefined"===typeof Reflect||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if("function"===typeof Proxy)return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true}catch(e){return false}}return function(){var e=(0,s.default)(r),t;if(n()){var a=(0,s.default)(this).constructor;t=Reflect.construct(e,arguments,a)}else t=e.apply(this,arguments);return(0,i.default)(this,t)}}var S=function(e){(0,u.default)(r,e);var a=y(r);function r(e){var n;(0,o.default)(this,r);n=a.call(this,e);(0,d.default)((0,l.default)(n),"isSelected",function(e,t){var a=n.props.selectedKey;var r=n.state.path;if(e)return e===a;return r===t});var t=n.polyfillGroups(e);n.state={groups:n.filterItems(t),path:n.props.location.pathname};return n}(0,n.default)(r,[{key:"UNSAFE_componentWillReceiveProps",value:function e(t){var a=this.polyfillGroups(t);this.setState({groups:this.filterItems(a)})}},{key:"polyfillGroups",value:function e(t){return t.groups||[{key:"solo-group",items:t.items,className:t.className}]}},{key:"filterItems",value:function e(t){var a=this.props.router;return t.reduce(function(e,t){e.push({key:t.key,label:t.label,items:t.items.filter(function(e){return false!==e.shouldShow&&(e.href||a.isValidPath(e.to))})});return e},[])}},{key:"render",value:function e(){var a=this;var t=this.props,r=t.onClickForTracking,n=t.useTitleVariant;var o=this.state.groups;return v.default.createElement(v.default.Fragment,null,o.length>0&&o.map(function(e,t){return e.items.length>0&&v.default.createElement(p.NavGroup,{key:e.label||"unlabeled"+t},e.label&&v.default.createElement(p.NavText,{variant:"label"},e.label),e.items.map(function(e){return v.default.createElement(m.default,{key:e.key||e.to,path:e.to,hash:e.hash,href:e.href,backTo:e.backTo,detail:e.detail,isSelected:a.isSelected(e.key,e.to),onClickForTracking:r,useTitleVariant:n},e.title)}))}))}}]);return r}(v.default.Component);(0,d.default)(S,"propTypes",{groups:f.default.arrayOf(f.default.shape({key:f.default.string.isRequired,className:f.default.string,label:f.default.string,items:f.default.arrayOf(c.default)})),selectedKey:f.default.string,router:g.default,location:f.default.object,onClickForTracking:f.default.func,useTitleVariant:f.default.bool});(0,d.default)(S,"defaultProps",{items:[]});var b=(0,h.default)(S);t.default=b;e.exports=t.default},7444:function(e,t,a){"use strict";var r=a(4);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=r(a(1));var o=n.default.shape({key:n.default.string,title:n.default.string.isRequired,to:n.default.string,href:n.default.string,hash:n.default.string,detail:n.default.string,isNew:n.default.bool,shouldShow:n.default.bool});t.default=o;e.exports=t.default},7445:function(e,t,a){"use strict";var r=a(35);var n=a(4);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var l=n(a(8));var o=n(a(9));var u=n(a(6));var i=n(a(10));var s=n(a(11));var d=n(a(7));var f=n(a(2));var c=r(a(0));var v=n(a(1));var h=a(3492);var p=n(a(399));var m=n(a(452));var g=n(a(7446));function y(r){function n(){if("undefined"===typeof Reflect||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if("function"===typeof Proxy)return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true}catch(e){return false}}return function(){var e=(0,d.default)(r),t;if(n()){var a=(0,d.default)(this).constructor;t=Reflect.construct(e,arguments,a)}else t=e.apply(this,arguments);return(0,s.default)(this,t)}}var S=/\/([^/]+)\/?$/;var b=function(e){(0,i.default)(n,e);var r=y(n);function n(){var o;(0,l.default)(this,n);for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];o=r.call.apply(r,[this].concat(t));(0,f.default)((0,u.default)(o),"handleClick",function(e){e.preventDefault();var t=o.props,a=t.href,r=t.onClickForTracking;var n=o.getLocation();r&&r(n.pathname,a,n.hash);return n?setTimeout(function(){return o.props.router.push(n)},0):window.open(a)});return o}(0,o.default)(n,[{key:"getLocation",value:function e(){var t=this.props,a=t.hash,r=t.path,n=t.backTo;return r?{pathname:r,hash:a,state:{backTo:n}}:null}},{key:"getDataTest",value:function e(t,a){if(t)return t;var r=S.exec(a);return r?"menuItem-"+r[1]:"menuItem-unknown"}},{key:"render",value:function e(){var t=this.props,a=t.children,r=t.dataTest,n=t.detail,o=t.path,l=t.router,u=t.isSelected,i=t.useTitleVariant;if(o&&!l.isValidPath(o))return null;var s=i?"title":"subtitle";return c.default.createElement(h.NavItem,{onClick:this.handleClick,"data-test":this.getDataTest(r,o),className:g.default.noBorder,isSelected:u},c.default.createElement(h.NavText,{variant:s},a),n&&c.default.createElement(h.NavItemAccessory,{variant:s},n))}}]);return n}(c.PureComponent);(0,f.default)(b,"propTypes",{children:v.default.node.isRequired,dataTest:v.default.string,detail:v.default.string,href:v.default.string,path:v.default.string,hash:v.default.string,backTo:v.default.string,router:m.default.isRequired,onClickForTracking:v.default.func,isSelected:v.default.bool});var C=(0,p.default)(b);t.default=C;e.exports=t.default},7446:function(e,t,a){var r=a(7447);"string"===typeof r&&(r=[[e.i,r,""]]);var n;var o;var l={hmr:true};l.transform=n;l.insertInto=void 0;var u=a(17)(r,l);r.locals&&(e.exports=r.locals);false},7447:function(e,t,a){t=e.exports=a(16)(false);t.push([e.i,".NavMenu-noBorder-3e3Oe {\n  border-bottom: none;\n}\n",""]);t.locals={noBorder:"NavMenu-noBorder-3e3Oe"}}}]);
//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/async-root-c38ed5260314012670215-min.en-US.js.map
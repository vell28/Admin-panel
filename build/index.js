!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,i){!function(e,n){if(!k[e]||!w[e])return;for(var i in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,i)&&(f[i]=n[i]);0==--m&&0===v&&D()}(e,i),n&&n(e,i)};var i,l=!0,r="e6a06c0f1ec1e14c192f",a=1e4,t={},s=[],c=[];function d(e){var n=j[e];if(!n)return x;var l=function(l){return n.hot.active?(j[l]?-1===j[l].parents.indexOf(e)&&j[l].parents.push(e):(s=[e],i=l),-1===n.children.indexOf(l)&&n.children.push(l)):(console.warn("[HMR] unexpected require("+l+") from disposed module "+e),s=[]),x(l)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return x[e]},set:function(n){x[e]=n}}};for(var a in x)Object.prototype.hasOwnProperty.call(x,a)&&"e"!==a&&Object.defineProperty(l,a,r(a));return l.e=function(e){return"ready"===u&&p("prepare"),v++,x.e(e).then(n,function(e){throw n(),e});function n(){v--,"prepare"===u&&(y[e]||_(e),0===v&&0===m&&D())}},l}var o=[],u="idle";function p(e){u=e;for(var n=0;n<o.length;n++)o[n].call(null,e)}var h,f,b,m=0,v=0,y={},w={},k={};function g(e){return+e+""===e?+e:e}function O(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return l=e,p("check"),(n=a,n=n||1e4,new Promise(function(e,i){if("undefined"==typeof XMLHttpRequest)return i(new Error("No browser support"));try{var l=new XMLHttpRequest,a=x.p+""+r+".hot-update.json";l.open("GET",a,!0),l.timeout=n,l.send(null)}catch(e){return i(e)}l.onreadystatechange=function(){if(4===l.readyState)if(0===l.status)i(new Error("Manifest request to "+a+" timed out."));else if(404===l.status)e();else if(200!==l.status&&304!==l.status)i(new Error("Manifest request to "+a+" failed."));else{try{var n=JSON.parse(l.responseText)}catch(e){return void i(e)}e(n)}}})).then(function(e){if(!e)return p("idle"),null;w={},y={},k=e.c,b=e.h,p("prepare");var n=new Promise(function(e,n){h={resolve:e,reject:n}});f={};return _(1),"prepare"===u&&0===v&&0===m&&D(),n});var n}function _(e){k[e]?(w[e]=!0,m++,function(e){var n=document.getElementsByTagName("head")[0],i=document.createElement("script");i.charset="utf-8",i.src=x.p+""+e+"."+r+".hot-update.js",n.appendChild(i)}(e)):y[e]=!0}function D(){p("ready");var e=h;if(h=null,e)if(l)Promise.resolve().then(function(){return E(l)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var i in f)Object.prototype.hasOwnProperty.call(f,i)&&n.push(g(i));e.resolve(n)}}function E(n){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var i,l,a,c,d;function o(e){for(var n=[e],i={},l=n.slice().map(function(e){return{chain:[e],id:e}});l.length>0;){var r=l.pop(),a=r.id,t=r.chain;if((c=j[a])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:t,moduleId:a};if(c.hot._main)return{type:"unaccepted",chain:t,moduleId:a};for(var s=0;s<c.parents.length;s++){var d=c.parents[s],o=j[d];if(o){if(o.hot._declinedDependencies[a])return{type:"declined",chain:t.concat([d]),moduleId:a,parentId:d};-1===n.indexOf(d)&&(o.hot._acceptedDependencies[a]?(i[d]||(i[d]=[]),h(i[d],[a])):(delete i[d],n.push(d),l.push({chain:t.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:i}}function h(e,n){for(var i=0;i<n.length;i++){var l=n[i];-1===e.indexOf(l)&&e.push(l)}}n=n||{};var m={},v=[],y={},w=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var O in f)if(Object.prototype.hasOwnProperty.call(f,O)){var _;d=g(O);var D=!1,E=!1,P=!1,H="";switch((_=f[O]?o(d):{type:"disposed",moduleId:O}).chain&&(H="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(D=new Error("Aborted because of self decline: "+_.moduleId+H));break;case"declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+H));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(_),n.ignoreUnaccepted||(D=new Error("Aborted because "+d+" is not accepted"+H));break;case"accepted":n.onAccepted&&n.onAccepted(_),E=!0;break;case"disposed":n.onDisposed&&n.onDisposed(_),P=!0;break;default:throw new Error("Unexception type "+_.type)}if(D)return p("abort"),Promise.reject(D);if(E)for(d in y[d]=f[d],h(v,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,d)&&(m[d]||(m[d]=[]),h(m[d],_.outdatedDependencies[d]));P&&(h(v,[_.moduleId]),y[d]=w)}var I,A=[];for(l=0;l<v.length;l++)d=v[l],j[d]&&j[d].hot._selfAccepted&&A.push({module:d,errorHandler:j[d].hot._selfAccepted});p("dispose"),Object.keys(k).forEach(function(e){!1===k[e]&&function(e){delete installedChunks[e]}(e)});for(var M,U,q=v.slice();q.length>0;)if(d=q.pop(),c=j[d]){var R={},T=c.hot._disposeHandlers;for(a=0;a<T.length;a++)(i=T[a])(R);for(t[d]=R,c.hot.active=!1,delete j[d],delete m[d],a=0;a<c.children.length;a++){var S=j[c.children[a]];S&&((I=S.parents.indexOf(d))>=0&&S.parents.splice(I,1))}}for(d in m)if(Object.prototype.hasOwnProperty.call(m,d)&&(c=j[d]))for(U=m[d],a=0;a<U.length;a++)M=U[a],(I=c.children.indexOf(M))>=0&&c.children.splice(I,1);for(d in p("apply"),r=b,y)Object.prototype.hasOwnProperty.call(y,d)&&(e[d]=y[d]);var C=null;for(d in m)if(Object.prototype.hasOwnProperty.call(m,d)&&(c=j[d])){U=m[d];var L=[];for(l=0;l<U.length;l++)if(M=U[l],i=c.hot._acceptedDependencies[M]){if(-1!==L.indexOf(i))continue;L.push(i)}for(l=0;l<L.length;l++){i=L[l];try{i(U)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:U[l],error:e}),n.ignoreErrored||C||(C=e)}}}for(l=0;l<A.length;l++){var N=A[l];d=N.module,s=[d];try{x(d)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(i){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:i,originalError:e}),n.ignoreErrored||C||(C=i),C||(C=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:e}),n.ignoreErrored||C||(C=e)}}return C?(p("fail"),Promise.reject(C)):(p("idle"),new Promise(function(e){e(v)}))}var j={};function x(n){if(j[n])return j[n].exports;var l=j[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:i!==e,active:!0,accept:function(e,i){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var l=0;l<e.length;l++)n._acceptedDependencies[e[l]]=i||function(){};else n._acceptedDependencies[e]=i||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var i=0;i<e.length;i++)n._declinedDependencies[e[i]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var i=n._disposeHandlers.indexOf(e);i>=0&&n._disposeHandlers.splice(i,1)},check:O,apply:E,status:function(e){if(!e)return u;o.push(e)},addStatusHandler:function(e){o.push(e)},removeStatusHandler:function(e){var n=o.indexOf(e);n>=0&&o.splice(n,1)},data:t[e]};return i=void 0,n}(n),parents:(c=s,s=[],c),children:[]};return e[n].call(l.exports,l,l.exports,d(n)),l.l=!0,l.exports}x.m=e,x.c=j,x.d=function(e,n,i){x.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},x.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},x.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return x.d(n,"a",n),n},x.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},x.p="",x.h=function(){return r},d(3)(x.s=3)}([,,function(e,n,i){e.exports=i.p+"images/logo96f88e6a317583e2746eb34c48d2434e.png"},function(e,n,i){e.exports='<!DOCTYPE html>\n<html lang="ru-RU">\n  <head>\n    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700">\n    <title></title>\n  </head>\n  <body>\n    <div class="main-wrap">\n      <div class="side-bar-block">\n        <ul class="side-bar-item-wrap">\n          <li class="side-bar-logo"><img src="'+i(2)+'" alt="logo">\n            <h2 class="side-bar-logo-title">LOGOTYPE</h2>\n          </li>\n          <li class="side-bar-parent-item">\n            <h4 class="side-bar-item-title">Корреспонденция  <span class="side-bar-email-icon side-bar-icon"> </span></h4>\n            <ul>\n                    <li class="side-bar-child-item"><a class="side-bar-child-link" href="#">Входящие</a></li>\n                    <li class="side-bar-child-item"><a class="side-bar-child-link" href="#">Исходящие</a></li>\n                    <li class="side-bar-child-item"><a class="side-bar-child-link" href="#">Черновики</a></li>\n            </ul>\n          </li>\n          <li class="side-bar-parent-item">\n            <h4 class="side-bar-item-title project">Проекты  <span class="side-bar-bag-icon side-bar-icon"> </span></h4>\n            <ul>\n                    <li class="side-bar-child-item"><a class="side-bar-child-link" href="#">Список</a></li>\n                    <li class="side-bar-child-item"><a class="side-bar-child-link" href="#">Шаблоны отчетов</a></li>\n                    <li class="side-bar-child-item"><a class="side-bar-child-link" href="#">Конструктор отчетов </a></li>\n            </ul>\n          </li>\n          <li class="side-bar-parent-item">\n            <h4 class="side-bar-item-title">Иерархия<span class="side-bar-tree-icon side-bar-icon"></span></h4>\n          </li>\n          <li class="side-bar-parent-item">\n            <h4 class="side-bar-item-title">База данных <span class="side-bar-data-base-icon side-bar-icon"> </span></h4>\n            <ul>\n                    <li class="side-bar-child-item active"><a class="side-bar-child-link" href="#">Записи</a></li>\n                    <li class="side-bar-child-item"><a class="side-bar-child-link" href="#">Атрибуты</a></li>\n                    <li class="side-bar-child-item"><a class="side-bar-child-link" href="#">Словари </a></li>\n                    <li class="side-bar-child-item"><a class="side-bar-child-link" href="#">Выборки </a></li>\n            </ul>\n          </li>\n          <li class="side-bar-parent-item">\n            <h4 class="side-bar-item-title">Пользователи <span class="side-bar-user-icon side-bar-icon"> </span></h4>\n            <ul>\n                    <li class="side-bar-child-item"><a class="side-bar-child-link" href="#">Активные</a></li>\n                    <li class="side-bar-child-item"><a class="side-bar-child-link" href="#">Архив</a></li>\n                    <li class="side-bar-child-item"><a class="side-bar-child-link" href="#">Отчеты </a></li>\n                    <li class="side-bar-child-item"><a class="side-bar-child-link" href="#">Логи </a></li>\n            </ul>\n          </li>\n          <li class="side-bar-parent-item">\n            <h4 class="side-bar-item-title">Аналитика<span class="side-bar-analitic-icon side-bar-icon">  </span></h4>\n            <ul>\n                    <li class="side-bar-child-item"><a class="side-bar-child-link" href="#">Статистика</a></li>\n                    <li class="side-bar-child-item"><a class="side-bar-child-link" href="#">Шаблоны отчетов</a></li>\n                    <li class="side-bar-child-item"><a class="side-bar-child-link" href="#">Конструктор отчетов </a></li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n      <div class="left-side-content-wrap">\n        <header class="header">\n          <div class="header-block"> \n            <ul class="header-mnu-block"> \n              <li class="header-mnu-item"> \n                <h3 class="header-title">БАЗА ДАННЫХ:</h3>\n              </li>\n                      <li class="header-mnu-item mnu-header-link-wrap"> <a class="header-link" href="#">Записи</a></li>\n                      <li class="header-mnu-item mnu-header-link-wrap"> <a class="header-link active" href="#">Атрибуты</a></li>\n                      <li class="header-mnu-item mnu-header-link-wrap"> <a class="header-link" href="#">Словари</a></li>\n                      <li class="header-mnu-item mnu-header-link-wrap"> <a class="header-link" href="#">Выборки</a></li>\n            </ul>\n            <div class="header-user-wrap">\n              <div class="header-user-items">\n                <p>Иннокентий Виссарионович    </p><a class="header-exit-link" href="#">   </a>\n              </div>\n            </div>\n          </div>\n        </header>\n        <div class="left-side-body-wrap">\n          <div class="search-block-wrap">\n            <form class="search-form">\n              <input class="search-input" type="text">\n            </form>\n            <div class="btn-group-wrap">\n              <button class="btn">Создать группу атрибутов</button>\n              <button class="btn">Создать атрибут  </button>\n            </div>\n          </div>\n          <div class="data-tree-block-wrap">\n            <ul class="ul-tree-wrap">\n              <li class="ul-tree-title">Черниговская\n                <ul>\n                  <li class="ul-tree-title">Чернигов</li>\n                  <li>Николаев</li>\n                  <ul>\n                    <li>Чернигов</li>\n                    <ul>\n                      <li>Чернигов</li>\n                      <ul>\n                        <li>Чернигов</li>\n                        <ul>\n                          <li>Чернигов</li>\n                          <ul>\n                            <li>Чернигов</li>\n                            <ul>\n                              <li>Чернигов</li>\n                            </ul>\n                          </ul>\n                          <li>Чернигов</li>\n                          <li>Чернигов        </li>\n                        </ul>\n                      </ul>\n                    </ul>\n                  </ul>\n                  <li>Чернигов  </li>\n                  <li>Чернигов  </li>\n                </ul>\n              </li>\n              <li class="ul-tree-title">Черниговская\n                <ul>\n                  <li>Чернигов</li>\n                  <li>Николаев</li>\n                  <ul>\n                    <li>Чернигов</li>\n                    <ul>\n                      <li>Чернигов       </li>\n                      <ul>\n                        <li>Чернигов</li>\n                        <ul>\n                          <li>Чернигов</li>\n                          <li>Чернигов</li>\n                          <li>Чернигов</li>\n                        </ul>\n                      </ul>\n                    </ul>\n                    <li>Чернигов</li>\n                    <li>Чернигов</li>\n                    <li>Чернигов   </li>\n                  </ul>\n                </ul>\n              </li>\n              <li class="ul-tree-title">Черниговская\n                <ul>\n                  <li class="ul-tree-title">Чернигов</li>\n                  <li>Николаев</li>\n                  <ul>\n                    <li>Чернигов</li>\n                    <ul>\n                      <li>Чернигов</li>\n                      <ul>\n                        <li>Чернигов</li>\n                      </ul>\n                    </ul>\n                  </ul>\n                  <li>Чернигов  </li>\n                </ul>\n              </li>\n              <li class="ul-tree-title">Черниговская\n                <ul>\n                  <li>Чернигов</li>\n                  <li>Николаев</li>\n                  <ul>\n                    <li>Чернигов</li>\n                    <ul>\n                      <li>Чернигов       </li>\n                      <ul>\n                        <li>Чернигов</li>\n                        <ul>\n                          <li>Чернигов</li>\n                          <li>Чернигов</li>\n                          <li>Чернигов</li>\n                        </ul>\n                      </ul>\n                    </ul>\n                    <li>Чернигов</li>\n                    <li>Чернигов</li>\n                    <li>Чернигов   </li>\n                  </ul>\n                </ul>\n              </li>\n              <li class="ul-tree-title">Черниговская\n                <ul>\n                  <li class="ul-tree-title">Чернигов</li>\n                  <li>Николаев</li>\n                  <ul>\n                    <li>Чернигов</li>\n                    <ul>\n                      <li>Чернигов</li>\n                      <ul>\n                        <li>Чернигов</li>\n                      </ul>\n                    </ul>\n                  </ul>\n                  <li>Чернигов  </li>\n                </ul>\n              </li>\n              <li class="ul-tree-title">Черниговская\n                <ul>\n                  <li>Чернигов</li>\n                  <li>Николаев</li>\n                  <ul>\n                    <li>Чернигов</li>\n                    <ul>\n                      <li>Чернигов       </li>\n                      <ul>\n                        <li>Чернигов</li>\n                        <ul>\n                          <li>Чернигов</li>\n                          <li>Чернигов</li>\n                          <li>Чернигов</li>\n                        </ul>\n                      </ul>\n                    </ul>\n                    <li>Чернигов</li>\n                    <li>Чернигов</li>\n                    <li>Чернигов                                    </li>\n                  </ul>\n                </ul>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </body>\n</html>'}]);
//# sourceMappingURL=index.js.map
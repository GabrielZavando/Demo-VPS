
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var Masonry=function galeria(){var masonryLayout=function masonryLayout(containerElem,itemsElemens,columns){containerElem.classList.add('Masonry-layout',"columns-".concat(columns));var columnsElements=[];for(var i=1;i<=columns;i++){var column=document.createElement('div');column.classList.add('Masonry-column',"column-".concat(i));containerElem.appendChild(column);columnsElements.push(column);}
for(var m=0;m<Math.ceil(itemsElemens.length/columns);m++){for(var n=0;n<columns;n++){var item=itemsElemens[m*columns+n];console.log(itemsElemens);columnsElements[n].appendChild(item);}}};masonryLayout(document.getElementById('Gallery'),document.querySelectorAll('.Masonry-layout-item'),4);};var _default=Masonry;exports.default=_default;},{}],2:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.scrollNav=exports.toggleNav=void 0;var toggleNav=function toggleNav(){var d=document,panel=d.querySelector('.Panel'),panelBtn=d.querySelector('.Panel-btn');panelBtn.addEventListener('click',function(e){e.preventDefault();panelBtn.classList.toggle('is-active');panel.classList.toggle('is-active');});};exports.toggleNav=toggleNav;var scrollNav=function scrollNav(){var itemLinks=document.querySelectorAll(".Menu-link");itemLinks.forEach(function(elem){return elem.addEventListener('click',navBarClick);});function navBarClick(e){smoothScroll(e);}
function smoothScroll(e){e.preventDefault();var targetId=e.currentTarget.getAttribute("href");var targetPosition=document.querySelector(targetId).offsetTop;var startPosition=window.pageYOffset;var distance=targetPosition-startPosition-80;var duration=1000;var start=null;window.requestAnimationFrame(step);function step(timestamp){if(!start)start=timestamp;var progress=timestamp-start;window.scrollTo(0,easeInOut(progress,startPosition,distance,duration));if(progress<duration)window.requestAnimationFrame(step);}}
function easeInOut(t,b,c,d){t/=d/2;if(t<1)return c/2*t*t+b;t--;return-c/2*(t*(t-2)-1)+b;}};exports.scrollNav=scrollNav;},{}],3:[function(require,module,exports){"use strict";var _nav=require("../dev/nav");var _masonry=_interopRequireDefault(require("../dev/masonry"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
(0,_nav.toggleNav)();(0,_masonry.default)();},{"../dev/masonry":1,"../dev/nav":2}]},{},[3]);
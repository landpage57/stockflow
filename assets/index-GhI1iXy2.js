var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).bootstrap=r()})(e,function(){let e=new Map,t={set(t,n,r){e.has(t)||e.set(t,new Map);let i=e.get(t);i.has(n)||i.size===0?i.set(n,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get:(t,n)=>e.has(t)&&e.get(t).get(n)||null,remove(t,n){if(!e.has(t))return;let r=e.get(t);r.delete(n),r.size===0&&e.delete(t)}},n=`transitionend`,r=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(e,t)=>`#${CSS.escape(t)}`)),e),i=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),a=e=>{e.dispatchEvent(new Event(n))},o=e=>!(!e||typeof e!=`object`)&&(e.jquery!==void 0&&(e=e[0]),e.nodeType!==void 0),s=e=>o(e)?e.jquery?e[0]:e:typeof e==`string`&&e.length>0?document.querySelector(r(e)):null,c=e=>{if(!o(e)||e.getClientRects().length===0)return!1;let t=getComputedStyle(e).getPropertyValue(`visibility`)===`visible`,n=e.closest(`details:not([open])`);if(!n)return t;if(n!==e){let t=e.closest(`summary`);if(t&&t.parentNode!==n||t===null)return!1}return t},l=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains(`disabled`)||(e.disabled===void 0?e.hasAttribute(`disabled`)&&e.getAttribute(`disabled`)!==`false`:e.disabled),u=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode==`function`){let t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?u(e.parentNode):null},d=()=>{},f=e=>{e.offsetHeight},p=()=>window.jQuery&&!document.body.hasAttribute(`data-bs-no-jquery`)?window.jQuery:null,m=[],h=()=>document.documentElement.dir===`rtl`,g=e=>{var t=()=>{let t=p();if(t){let n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}};document.readyState===`loading`?(m.length||document.addEventListener(`DOMContentLoaded`,()=>{for(let e of m)e()}),m.push(t)):t()},_=(e,t=[],n=e)=>typeof e==`function`?e.call(...t):n,v=(e,t,r=!0)=>{if(!r)return void _(e);let i=(e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);return Number.parseFloat(t)||Number.parseFloat(n)?(t=t.split(`,`)[0],n=n.split(`,`)[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0})(t)+5,o=!1,s=({target:r})=>{r===t&&(o=!0,t.removeEventListener(n,s),_(e))};t.addEventListener(n,s),setTimeout(()=>{o||a(t)},i)},y=(e,t,n,r)=>{let i=e.length,a=e.indexOf(t);return a===-1?!n&&r?e[i-1]:e[0]:(a+=n?1:-1,r&&(a=(a+i)%i),e[Math.max(0,Math.min(a,i-1))])},b=/[^.]*(?=\..*)\.|.*/,x=/\..*/,S=/::\d+$/,C={},w=1,T={mouseenter:`mouseover`,mouseleave:`mouseout`},E=new Set(`click.dblclick.mouseup.mousedown.contextmenu.mousewheel.DOMMouseScroll.mouseover.mouseout.mousemove.selectstart.selectend.keydown.keypress.keyup.orientationchange.touchstart.touchmove.touchend.touchcancel.pointerdown.pointermove.pointerup.pointerleave.pointercancel.gesturestart.gesturechange.gestureend.focus.blur.change.reset.select.submit.focusin.focusout.load.unload.beforeunload.resize.move.DOMContentLoaded.readystatechange.error.abort.scroll`.split(`.`));function D(e,t){return t&&`${t}::${w++}`||e.uidEvent||w++}function ee(e){let t=D(e);return e.uidEvent=t,C[t]=C[t]||{},C[t]}function te(e,t,n=null){return Object.values(e).find(e=>e.callable===t&&e.delegationSelector===n)}function ne(e,t,n){let r=typeof t==`string`,i=r?n:t||n,a=oe(e);return E.has(a)||(a=e),[r,i,a]}function re(e,t,n,r,i){if(typeof t!=`string`||!e)return;let[a,o,s]=ne(t,n,r);t in T&&(o=(e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)})(o));let c=ee(e),l=c[s]||(c[s]={}),u=te(l,o,a?n:null);if(u)return void(u.oneOff=u.oneOff&&i);let d=D(o,t.replace(b,``)),f=a?function(e,t,n){return function r(i){let a=e.querySelectorAll(t);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(let s of a)if(s===o)return se(i,{delegateTarget:o}),r.oneOff&&O.off(e,i.type,t,n),n.apply(o,[i])}}(e,n,o):function(e,t){return function n(r){return se(r,{delegateTarget:e}),n.oneOff&&O.off(e,r.type,t),t.apply(e,[r])}}(e,o);f.delegationSelector=a?n:null,f.callable=o,f.oneOff=i,f.uidEvent=d,l[d]=f,e.addEventListener(s,f,a)}function ie(e,t,n,r,i){let a=te(t[n],r,i);a&&(e.removeEventListener(n,a,!!i),delete t[n][a.uidEvent])}function ae(e,t,n,r){let i=t[n]||{};for(let[a,o]of Object.entries(i))a.includes(r)&&ie(e,t,n,o.callable,o.delegationSelector)}function oe(e){return e=e.replace(x,``),T[e]||e}let O={on(e,t,n,r){re(e,t,n,r,!1)},one(e,t,n,r){re(e,t,n,r,!0)},off(e,t,n,r){if(typeof t!=`string`||!e)return;let[i,a,o]=ne(t,n,r),s=o!==t,c=ee(e),l=c[o]||{},u=t.startsWith(`.`);if(a===void 0){if(u)for(let n of Object.keys(c))ae(e,c,n,t.slice(1));for(let[n,r]of Object.entries(l)){let i=n.replace(S,``);s&&!t.includes(i)||ie(e,c,o,r.callable,r.delegationSelector)}}else{if(!Object.keys(l).length)return;ie(e,c,o,a,i?n:null)}},trigger(e,t,n){if(typeof t!=`string`||!e)return null;let r=p(),i=null,a=!0,o=!0,s=!1;t!==oe(t)&&r&&(i=r.Event(t,n),r(e).trigger(i),a=!i.isPropagationStopped(),o=!i.isImmediatePropagationStopped(),s=i.isDefaultPrevented());let c=se(new Event(t,{bubbles:a,cancelable:!0}),n);return s&&c.preventDefault(),o&&e.dispatchEvent(c),c.defaultPrevented&&i&&i.preventDefault(),c}};function se(e,t={}){for(let[n,r]of Object.entries(t))try{e[n]=r}catch{Object.defineProperty(e,n,{configurable:!0,get:()=>r})}return e}function ce(e){if(e===`true`)return!0;if(e===`false`)return!1;if(e===Number(e).toString())return Number(e);if(e===``||e===`null`)return null;if(typeof e!=`string`)return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function le(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}let ue={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${le(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${le(t)}`)},getDataAttributes(e){if(!e)return{};let t={},n=Object.keys(e.dataset).filter(e=>e.startsWith(`bs`)&&!e.startsWith(`bsConfig`));for(let r of n){let n=r.replace(/^bs/,``);n=n.charAt(0).toLowerCase()+n.slice(1),t[n]=ce(e.dataset[r])}return t},getDataAttribute:(e,t)=>ce(e.getAttribute(`data-bs-${le(t)}`))};class de{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw Error(`You have to implement the static method "NAME", for each component!`)}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){let n=o(t)?ue.getDataAttribute(t,`config`):{};return{...this.constructor.Default,...typeof n==`object`?n:{},...o(t)?ue.getDataAttributes(t):{},...typeof e==`object`?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(let[n,r]of Object.entries(t)){let t=e[n],a=o(t)?`element`:i(t);if(!new RegExp(r).test(a))throw TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${r}".`)}}}class fe extends de{constructor(e,n){super(),(e=s(e))&&(this._element=e,this._config=this._getConfig(n),t.set(this._element,this.constructor.DATA_KEY,this))}dispose(){t.remove(this._element,this.constructor.DATA_KEY),O.off(this._element,this.constructor.EVENT_KEY);for(let e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){v(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return t.get(s(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,typeof t==`object`?t:null)}static get VERSION(){return`5.3.8`}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}let pe=e=>{let t=e.getAttribute(`data-bs-target`);if(!t||t===`#`){let n=e.getAttribute(`href`);if(!n||!n.includes(`#`)&&!n.startsWith(`.`))return null;n.includes(`#`)&&!n.startsWith(`#`)&&(n=`#${n.split(`#`)[1]}`),t=n&&n!==`#`?n.trim():null}return t?t.split(`,`).map(e=>r(e)).join(`,`):null},k={find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter(e=>e.matches(t)),parents(e,t){let n=[],r=e.parentNode.closest(t);for(;r;)n.push(r),r=r.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){let t=[`a`,`button`,`input`,`textarea`,`select`,`details`,`[tabindex]`,`[contenteditable="true"]`].map(e=>`${e}:not([tabindex^="-"])`).join(`,`);return this.find(t,e).filter(e=>!l(e)&&c(e))},getSelectorFromElement(e){let t=pe(e);return t&&k.findOne(t)?t:null},getElementFromSelector(e){let t=pe(e);return t?k.findOne(t):null},getMultipleElementsFromSelector(e){let t=pe(e);return t?k.find(t):[]}},me=(e,t=`hide`)=>{let n=`click.dismiss${e.EVENT_KEY}`,r=e.NAME;O.on(document,n,`[data-bs-dismiss="${r}"]`,function(n){if([`A`,`AREA`].includes(this.tagName)&&n.preventDefault(),l(this))return;let i=k.getElementFromSelector(this)||this.closest(`.${r}`);e.getOrCreateInstance(i)[t]()})},he=`.bs.alert`,ge=`close${he}`,_e=`closed${he}`;class ve extends fe{static get NAME(){return`alert`}close(){if(O.trigger(this._element,ge).defaultPrevented)return;this._element.classList.remove(`show`);let e=this._element.classList.contains(`fade`);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),O.trigger(this._element,_e),this.dispose()}static jQueryInterface(e){return this.each(function(){let t=ve.getOrCreateInstance(this);if(typeof e==`string`){if(t[e]===void 0||e.startsWith(`_`)||e===`constructor`)throw TypeError(`No method named "${e}"`);t[e](this)}})}}me(ve,`close`),g(ve);let ye=`[data-bs-toggle="button"]`;class be extends fe{static get NAME(){return`button`}toggle(){this._element.setAttribute(`aria-pressed`,this._element.classList.toggle(`active`))}static jQueryInterface(e){return this.each(function(){let t=be.getOrCreateInstance(this);e===`toggle`&&t[e]()})}}O.on(document,`click.bs.button.data-api`,ye,e=>{e.preventDefault();let t=e.target.closest(ye);be.getOrCreateInstance(t).toggle()}),g(be);let xe=`.bs.swipe`,Se=`touchstart${xe}`,Ce=`touchmove${xe}`,we=`touchend${xe}`,Te=`pointerdown${xe}`,Ee=`pointerup${xe}`,De={endCallback:null,leftCallback:null,rightCallback:null},Oe={endCallback:`(function|null)`,leftCallback:`(function|null)`,rightCallback:`(function|null)`};class ke extends de{constructor(e,t){super(),this._element=e,e&&ke.isSupported()&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return De}static get DefaultType(){return Oe}static get NAME(){return`swipe`}dispose(){O.off(this._element,xe)}_start(e){this._supportPointerEvents?this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX):this._deltaX=e.touches[0].clientX}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),_(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){let e=Math.abs(this._deltaX);if(e<=40)return;let t=e/this._deltaX;this._deltaX=0,t&&_(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(O.on(this._element,Te,e=>this._start(e)),O.on(this._element,Ee,e=>this._end(e)),this._element.classList.add(`pointer-event`)):(O.on(this._element,Se,e=>this._start(e)),O.on(this._element,Ce,e=>this._move(e)),O.on(this._element,we,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===`pen`||e.pointerType===`touch`)}static isSupported(){return`ontouchstart`in document.documentElement||navigator.maxTouchPoints>0}}let Ae=`.bs.carousel`,A=`.data-api`,j=`next`,M=`prev`,N=`left`,je=`right`,P=`slide${Ae}`,Me=`slid${Ae}`,Ne=`keydown${Ae}`,F=`mouseenter${Ae}`,I=`mouseleave${Ae}`,Pe=`dragstart${Ae}`,Fe=`load${Ae}${A}`,Ie=`click${Ae}${A}`,Le=`carousel`,Re=`active`,ze={ArrowLeft:je,ArrowRight:N},Be={interval:5e3,keyboard:!0,pause:`hover`,ride:!1,touch:!0,wrap:!0},Ve={interval:`(number|boolean)`,keyboard:`boolean`,pause:`(string|boolean)`,ride:`(boolean|string)`,touch:`boolean`,wrap:`boolean`};class He extends fe{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=k.findOne(`.carousel-indicators`,this._element),this._addEventListeners(),this._config.ride===Le&&this.cycle()}static get Default(){return Be}static get DefaultType(){return Ve}static get NAME(){return`carousel`}next(){this._slide(j)}nextWhenVisible(){!document.hidden&&c(this._element)&&this.next()}prev(){this._slide(M)}pause(){this._isSliding&&a(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?O.one(this._element,Me,()=>this.cycle()):this.cycle())}to(e){let t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding)return void O.one(this._element,Me,()=>this.to(e));let n=this._getItemIndex(this._getActive());if(n===e)return;let r=e>n?j:M;this._slide(r,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&O.on(this._element,Ne,e=>this._keydown(e)),this._config.pause===`hover`&&(O.on(this._element,F,()=>this.pause()),O.on(this._element,I,()=>this._maybeEnableCycle())),this._config.touch&&ke.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(let e of k.find(`.carousel-item img`,this._element))O.on(e,Pe,e=>e.preventDefault());let e={leftCallback:()=>this._slide(this._directionToOrder(N)),rightCallback:()=>this._slide(this._directionToOrder(je)),endCallback:()=>{this._config.pause===`hover`&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new ke(this._element,e)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;let t=ze[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;let t=k.findOne(`.active`,this._indicatorsElement);t.classList.remove(Re),t.removeAttribute(`aria-current`);let n=k.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add(Re),n.setAttribute(`aria-current`,`true`))}_updateInterval(){let e=this._activeElement||this._getActive();if(!e)return;let t=Number.parseInt(e.getAttribute(`data-bs-interval`),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;let n=this._getActive(),r=e===j,i=t||y(this._getItems(),n,r,this._config.wrap);if(i===n)return;let a=this._getItemIndex(i),o=t=>O.trigger(this._element,t,{relatedTarget:i,direction:this._orderToDirection(e),from:this._getItemIndex(n),to:a});if(o(P).defaultPrevented||!n||!i)return;let s=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(a),this._activeElement=i;let c=r?`carousel-item-start`:`carousel-item-end`,l=r?`carousel-item-next`:`carousel-item-prev`;i.classList.add(l),f(i),n.classList.add(c),i.classList.add(c),this._queueCallback(()=>{i.classList.remove(c,l),i.classList.add(Re),n.classList.remove(Re,l,c),this._isSliding=!1,o(Me)},n,this._isAnimated()),s&&this.cycle()}_isAnimated(){return this._element.classList.contains(`slide`)}_getActive(){return k.findOne(`.active.carousel-item`,this._element)}_getItems(){return k.find(`.carousel-item`,this._element)}_clearInterval(){this._interval&&=(clearInterval(this._interval),null)}_directionToOrder(e){return h()?e===N?M:j:e===N?j:M}_orderToDirection(e){return h()?e===M?N:je:e===M?je:N}static jQueryInterface(e){return this.each(function(){let t=He.getOrCreateInstance(this,e);if(typeof e!=`number`){if(typeof e==`string`){if(t[e]===void 0||e.startsWith(`_`)||e===`constructor`)throw TypeError(`No method named "${e}"`);t[e]()}}else t.to(e)})}}O.on(document,Ie,`[data-bs-slide], [data-bs-slide-to]`,function(e){let t=k.getElementFromSelector(this);if(!t||!t.classList.contains(Le))return;e.preventDefault();let n=He.getOrCreateInstance(t),r=this.getAttribute(`data-bs-slide-to`);r?(n.to(r),n._maybeEnableCycle()):ue.getDataAttribute(this,`slide`)===`next`?(n.next(),n._maybeEnableCycle()):(n.prev(),n._maybeEnableCycle())}),O.on(window,Fe,()=>{let e=k.find(`[data-bs-ride="carousel"]`);for(let t of e)He.getOrCreateInstance(t)}),g(He);let Ue=`.bs.collapse`,We=`show${Ue}`,Ge=`shown${Ue}`,Ke=`hide${Ue}`,qe=`hidden${Ue}`,Je=`click${Ue}.data-api`,Ye=`show`,L=`collapse`,R=`collapsing`,Xe=`:scope .${L} .${L}`,Ze=`[data-bs-toggle="collapse"]`,Qe={parent:null,toggle:!0},z={parent:`(null|element)`,toggle:`boolean`};class $e extends fe{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];let n=k.find(Ze);for(let e of n){let t=k.getSelectorFromElement(e),n=k.find(t).filter(e=>e===this._element);t!==null&&n.length&&this._triggerArray.push(e)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Qe}static get DefaultType(){return z}static get NAME(){return`collapse`}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(`.collapse.show, .collapse.collapsing`).filter(e=>e!==this._element).map(e=>$e.getOrCreateInstance(e,{toggle:!1}))),e.length&&e[0]._isTransitioning||O.trigger(this._element,We).defaultPrevented)return;for(let t of e)t.hide();let t=this._getDimension();this._element.classList.remove(L),this._element.classList.add(R),this._element.style[t]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;let n=`scroll${t[0].toUpperCase()+t.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(R),this._element.classList.add(L,Ye),this._element.style[t]=``,O.trigger(this._element,Ge)},this._element,!0),this._element.style[t]=`${this._element[n]}px`}hide(){if(this._isTransitioning||!this._isShown()||O.trigger(this._element,Ke).defaultPrevented)return;let e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,f(this._element),this._element.classList.add(R),this._element.classList.remove(L,Ye);for(let e of this._triggerArray){let t=k.getElementFromSelector(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0,this._element.style[e]=``,this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(R),this._element.classList.add(L),O.trigger(this._element,qe)},this._element,!0)}_isShown(e=this._element){return e.classList.contains(Ye)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=s(e.parent),e}_getDimension(){return this._element.classList.contains(`collapse-horizontal`)?`width`:`height`}_initializeChildren(){if(!this._config.parent)return;let e=this._getFirstLevelChildren(Ze);for(let t of e){let e=k.getElementFromSelector(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){let t=k.find(Xe,this._config.parent);return k.find(e,this._config.parent).filter(e=>!t.includes(e))}_addAriaAndCollapsedClass(e,t){if(e.length)for(let n of e)n.classList.toggle(`collapsed`,!t),n.setAttribute(`aria-expanded`,t)}static jQueryInterface(e){let t={};return typeof e==`string`&&/show|hide/.test(e)&&(t.toggle=!1),this.each(function(){let n=$e.getOrCreateInstance(this,t);if(typeof e==`string`){if(n[e]===void 0)throw TypeError(`No method named "${e}"`);n[e]()}})}}O.on(document,Je,Ze,function(e){(e.target.tagName===`A`||e.delegateTarget&&e.delegateTarget.tagName===`A`)&&e.preventDefault();for(let e of k.getMultipleElementsFromSelector(this))$e.getOrCreateInstance(e,{toggle:!1}).toggle()}),g($e);var et=`top`,B=`bottom`,V=`right`,H=`left`,tt=`auto`,nt=[et,B,V,H],rt=`start`,it=`end`,at=`clippingParents`,ot=`viewport`,st=`popper`,ct=`reference`,lt=nt.reduce(function(e,t){return e.concat([t+`-`+rt,t+`-`+it])},[]),ut=[].concat(nt,[tt]).reduce(function(e,t){return e.concat([t,t+`-`+rt,t+`-`+it])},[]),dt=`beforeRead`,ft=`read`,U=`afterRead`,pt=`beforeMain`,W=`main`,mt=`afterMain`,ht=`beforeWrite`,gt=`write`,_t=`afterWrite`,vt=[dt,ft,U,pt,W,mt,ht,gt,_t];function yt(e){return e?(e.nodeName||``).toLowerCase():null}function bt(e){if(e==null)return window;if(e.toString()!==`[object Window]`){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function xt(e){return e instanceof bt(e).Element||e instanceof Element}function St(e){return e instanceof bt(e).HTMLElement||e instanceof HTMLElement}function Ct(e){return typeof ShadowRoot<`u`&&(e instanceof bt(e).ShadowRoot||e instanceof ShadowRoot)}let wt={name:`applyStyles`,enabled:!0,phase:`write`,fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];St(i)&&yt(i)&&(Object.assign(i.style,n),Object.keys(r).forEach(function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?``:t)}))})},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:`0`,top:`0`,margin:`0`},arrow:{position:`absolute`},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var r=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]=``,e},{});St(r)&&yt(r)&&(Object.assign(r.style,a),Object.keys(i).forEach(function(e){r.removeAttribute(e)}))})}},requires:[`computeStyles`]};function Tt(e){return e.split(`-`)[0]}var Et=Math.max,Dt=Math.min,G=Math.round;function Ot(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+`/`+e.version}).join(` `):navigator.userAgent}function kt(){return!/^((?!chrome|android).)*safari/i.test(Ot())}function At(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),i=1,a=1;t&&St(e)&&(i=e.offsetWidth>0&&G(r.width)/e.offsetWidth||1,a=e.offsetHeight>0&&G(r.height)/e.offsetHeight||1);var o=(xt(e)?bt(e):window).visualViewport,s=!kt()&&n,c=(r.left+(s&&o?o.offsetLeft:0))/i,l=(r.top+(s&&o?o.offsetTop:0))/a,u=r.width/i,d=r.height/a;return{width:u,height:d,top:l,right:c+u,bottom:l+d,left:c,x:c,y:l}}function jt(e){var t=At(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function Mt(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Ct(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Nt(e){return bt(e).getComputedStyle(e)}function Pt(e){return[`table`,`td`,`th`].indexOf(yt(e))>=0}function Ft(e){return((xt(e)?e.ownerDocument:e.document)||window.document).documentElement}function It(e){return yt(e)===`html`?e:e.assignedSlot||e.parentNode||(Ct(e)?e.host:null)||Ft(e)}function Lt(e){return St(e)&&Nt(e).position!==`fixed`?e.offsetParent:null}function Rt(e){for(var t=bt(e),n=Lt(e);n&&Pt(n)&&Nt(n).position===`static`;)n=Lt(n);return n&&(yt(n)===`html`||yt(n)===`body`&&Nt(n).position===`static`)?t:n||function(e){var t=/firefox/i.test(Ot());if(/Trident/i.test(Ot())&&St(e)&&Nt(e).position===`fixed`)return null;var n=It(e);for(Ct(n)&&(n=n.host);St(n)&&[`html`,`body`].indexOf(yt(n))<0;){var r=Nt(n);if(r.transform!==`none`||r.perspective!==`none`||r.contain===`paint`||[`transform`,`perspective`].indexOf(r.willChange)!==-1||t&&r.willChange===`filter`||t&&r.filter&&r.filter!==`none`)return n;n=n.parentNode}return null}(e)||t}function zt(e){return[`top`,`bottom`].indexOf(e)>=0?`x`:`y`}function Bt(e,t,n){return Et(e,Dt(t,n))}function Vt(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Ht(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}let Ut={name:`arrow`,enabled:!0,phase:`main`,fn:function(e){var t,n=e.state,r=e.name,i=e.options,a=n.elements.arrow,o=n.modifiersData.popperOffsets,s=Tt(n.placement),c=zt(s),l=[H,V].indexOf(s)>=0?`height`:`width`;if(a&&o){var u=function(e,t){return Vt(typeof(e=typeof e==`function`?e(Object.assign({},t.rects,{placement:t.placement})):e)==`number`?Ht(e,nt):e)}(i.padding,n),d=jt(a),f=c===`y`?et:H,p=c===`y`?B:V,m=n.rects.reference[l]+n.rects.reference[c]-o[c]-n.rects.popper[l],h=o[c]-n.rects.reference[c],g=Rt(a),_=g?c===`y`?g.clientHeight||0:g.clientWidth||0:0,v=m/2-h/2,y=u[f],b=_-d[l]-u[p],x=_/2-d[l]/2+v,S=Bt(y,x,b),C=c;n.modifiersData[r]=((t={})[C]=S,t.centerOffset=S-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=n===void 0?`[data-popper-arrow]`:n;r!=null&&(typeof r!=`string`||(r=t.elements.popper.querySelector(r)))&&Mt(t.elements.popper,r)&&(t.elements.arrow=r)},requires:[`popperOffsets`],requiresIfExists:[`preventOverflow`]};function Wt(e){return e.split(`-`)[1]}var Gt={top:`auto`,right:`auto`,bottom:`auto`,left:`auto`};function Kt(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.variation,o=e.offsets,s=e.position,c=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,d=e.isFixed,f=o.x,p=f===void 0?0:f,m=o.y,h=m===void 0?0:m,g=typeof u==`function`?u({x:p,y:h}):{x:p,y:h};p=g.x,h=g.y;var _=o.hasOwnProperty(`x`),v=o.hasOwnProperty(`y`),y=H,b=et,x=window;if(l){var S=Rt(n),C=`clientHeight`,w=`clientWidth`;S===bt(n)&&Nt(S=Ft(n)).position!==`static`&&s===`absolute`&&(C=`scrollHeight`,w=`scrollWidth`),(i===et||(i===H||i===V)&&a===it)&&(b=B,h-=(d&&S===x&&x.visualViewport?x.visualViewport.height:S[C])-r.height,h*=c?1:-1),i!==H&&(i!==et&&i!==B||a!==it)||(y=V,p-=(d&&S===x&&x.visualViewport?x.visualViewport.width:S[w])-r.width,p*=c?1:-1)}var T,E=Object.assign({position:s},l&&Gt),D=!0===u?function(e,t){var n=e.x,r=e.y,i=t.devicePixelRatio||1;return{x:G(n*i)/i||0,y:G(r*i)/i||0}}({x:p,y:h},bt(n)):{x:p,y:h};return p=D.x,h=D.y,c?Object.assign({},E,((T={})[b]=v?`0`:``,T[y]=_?`0`:``,T.transform=(x.devicePixelRatio||1)<=1?`translate(`+p+`px, `+h+`px)`:`translate3d(`+p+`px, `+h+`px, 0)`,T)):Object.assign({},E,((t={})[b]=v?h+`px`:``,t[y]=_?p+`px`:``,t.transform=``,t))}let qt={name:`computeStyles`,enabled:!0,phase:`beforeWrite`,fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=r===void 0||r,a=n.adaptive,o=a===void 0||a,s=n.roundOffsets,c=s===void 0||s,l={placement:Tt(t.placement),variation:Wt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy===`fixed`};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Kt(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Kt(Object.assign({},l,{offsets:t.modifiersData.arrow,position:`absolute`,adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};var Jt={passive:!0};let Yt={name:`eventListeners`,enabled:!0,phase:`write`,fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=i===void 0||i,o=r.resize,s=o===void 0||o,c=bt(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(e){e.addEventListener(`scroll`,n.update,Jt)}),s&&c.addEventListener(`resize`,n.update,Jt),function(){a&&l.forEach(function(e){e.removeEventListener(`scroll`,n.update,Jt)}),s&&c.removeEventListener(`resize`,n.update,Jt)}},data:{}};var Xt={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function Zt(e){return e.replace(/left|right|bottom|top/g,function(e){return Xt[e]})}var Qt={start:`end`,end:`start`};function K(e){return e.replace(/start|end/g,function(e){return Qt[e]})}function $t(e){var t=bt(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function en(e){return At(Ft(e)).left+$t(e).scrollLeft}function tn(e){var t=Nt(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function nn(e){return[`html`,`body`,`#document`].indexOf(yt(e))>=0?e.ownerDocument.body:St(e)&&tn(e)?e:nn(It(e))}function rn(e,t){t===void 0&&(t=[]);var n=nn(e),r=n===e.ownerDocument?.body,i=bt(n),a=r?[i].concat(i.visualViewport||[],tn(n)?n:[]):n,o=t.concat(a);return r?o:o.concat(rn(It(a)))}function an(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function on(e,t,n){return t===ot?an(function(e,t){var n=bt(e),r=Ft(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;var l=kt();(l||!l&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}return{width:a,height:o,x:s+en(e),y:c}}(e,n)):xt(t)?function(e,t){var n=At(e,!1,t===`fixed`);return n.top+=e.clientTop,n.left+=e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):an(function(e){var t=Ft(e),n=$t(e),r=e.ownerDocument?.body,i=Et(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=Et(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),o=-n.scrollLeft+en(e),s=-n.scrollTop;return Nt(r||t).direction===`rtl`&&(o+=Et(t.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:o,y:s}}(Ft(e)))}function sn(e){var t,n=e.reference,r=e.element,i=e.placement,a=i?Tt(i):null,o=i?Wt(i):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(a){case et:t={x:s,y:n.y-r.height};break;case B:t={x:s,y:n.y+n.height};break;case V:t={x:n.x+n.width,y:c};break;case H:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var l=a?zt(a):null;if(l!=null){var u=l===`y`?`height`:`width`;switch(o){case rt:t[l]=t[l]-(n[u]/2-r[u]/2);break;case it:t[l]=t[l]+(n[u]/2-r[u]/2)}}return t}function cn(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=r===void 0?e.placement:r,a=n.strategy,o=a===void 0?e.strategy:a,s=n.boundary,c=s===void 0?at:s,l=n.rootBoundary,u=l===void 0?ot:l,d=n.elementContext,f=d===void 0?st:d,p=n.altBoundary,m=p!==void 0&&p,h=n.padding,g=h===void 0?0:h,_=Vt(typeof g==`number`?Ht(g,nt):g),v=f===st?ct:st,y=e.rects.popper,b=e.elements[m?v:f],x=function(e,t,n,r){var i=t===`clippingParents`?function(e){var t=rn(It(e)),n=[`absolute`,`fixed`].indexOf(Nt(e).position)>=0&&St(e)?Rt(e):e;return xt(n)?t.filter(function(e){return xt(e)&&Mt(e,n)&&yt(e)!==`body`}):[]}(e):[].concat(t),a=[].concat(i,[n]),o=a[0],s=a.reduce(function(t,n){var i=on(e,n,r);return t.top=Et(i.top,t.top),t.right=Dt(i.right,t.right),t.bottom=Dt(i.bottom,t.bottom),t.left=Et(i.left,t.left),t},on(e,o,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}(xt(b)?b:b.contextElement||Ft(e.elements.popper),c,u,o),S=At(e.elements.reference),C=sn({reference:S,element:y,placement:i}),w=an(Object.assign({},y,C)),T=f===st?w:S,E={top:x.top-T.top+_.top,bottom:T.bottom-x.bottom+_.bottom,left:x.left-T.left+_.left,right:T.right-x.right+_.right},D=e.modifiersData.offset;if(f===st&&D){var ee=D[i];Object.keys(E).forEach(function(e){var t=[V,B].indexOf(e)>=0?1:-1,n=[et,B].indexOf(e)>=0?`y`:`x`;E[e]+=ee[n]*t})}return E}function ln(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=n.boundary,a=n.rootBoundary,o=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,l=c===void 0?ut:c,u=Wt(r),d=u?s?lt:lt.filter(function(e){return Wt(e)===u}):nt,f=d.filter(function(e){return l.indexOf(e)>=0});f.length===0&&(f=d);var p=f.reduce(function(t,n){return t[n]=cn(e,{placement:n,boundary:i,rootBoundary:a,padding:o})[Tt(n)],t},{});return Object.keys(p).sort(function(e,t){return p[e]-p[t]})}let un={name:`flip`,enabled:!0,phase:`main`,fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,a=i===void 0||i,o=n.altAxis,s=o===void 0||o,c=n.fallbackPlacements,l=n.padding,u=n.boundary,d=n.rootBoundary,f=n.altBoundary,p=n.flipVariations,m=p===void 0||p,h=n.allowedAutoPlacements,g=t.options.placement,_=Tt(g),v=c||(_!==g&&m?function(e){if(Tt(e)===tt)return[];var t=Zt(e);return[K(e),t,K(t)]}(g):[Zt(g)]),y=[g].concat(v).reduce(function(e,n){return e.concat(Tt(n)===tt?ln(t,{placement:n,boundary:u,rootBoundary:d,padding:l,flipVariations:m,allowedAutoPlacements:h}):n)},[]),b=t.rects.reference,x=t.rects.popper,S=new Map,C=!0,w=y[0],T=0;T<y.length;T++){var E=y[T],D=Tt(E),ee=Wt(E)===rt,te=[et,B].indexOf(D)>=0,ne=te?`width`:`height`,re=cn(t,{placement:E,boundary:u,rootBoundary:d,altBoundary:f,padding:l}),ie=te?ee?V:H:ee?B:et;b[ne]>x[ne]&&(ie=Zt(ie));var ae=Zt(ie),oe=[];if(a&&oe.push(re[D]<=0),s&&oe.push(re[ie]<=0,re[ae]<=0),oe.every(function(e){return e})){w=E,C=!1;break}S.set(E,oe)}if(C)for(var O=function(e){var t=y.find(function(t){var n=S.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return w=t,`break`},se=m?3:1;se>0&&O(se)!==`break`;se--);t.placement!==w&&(t.modifiersData[r]._skip=!0,t.placement=w,t.reset=!0)}},requiresIfExists:[`offset`],data:{_skip:!1}};function dn(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function fn(e){return[et,V,B,H].some(function(t){return e[t]>=0})}let pn={name:`hide`,enabled:!0,phase:`main`,requiresIfExists:[`preventOverflow`],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,a=t.modifiersData.preventOverflow,o=cn(t,{elementContext:`reference`}),s=cn(t,{altBoundary:!0}),c=dn(o,r),l=dn(s,i,a),u=fn(c),d=fn(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}},mn={name:`offset`,enabled:!0,phase:`main`,requires:[`popperOffsets`],fn:function(e){var t=e.state,n=e.options,r=e.name,i=n.offset,a=i===void 0?[0,0]:i,o=ut.reduce(function(e,n){return e[n]=function(e,t,n){var r=Tt(e),i=[H,et].indexOf(r)>=0?-1:1,a=typeof n==`function`?n(Object.assign({},t,{placement:e})):n,o=a[0],s=a[1];return o||=0,s=(s||0)*i,[H,V].indexOf(r)>=0?{x:s,y:o}:{x:o,y:s}}(n,t.rects,a),e},{}),s=o[t.placement],c=s.x,l=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=o}},hn={name:`popperOffsets`,enabled:!0,phase:`read`,fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=sn({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})},data:{}},gn={name:`preventOverflow`,enabled:!0,phase:`main`,fn:function(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,a=i===void 0||i,o=n.altAxis,s=o!==void 0&&o,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,d=n.padding,f=n.tether,p=f===void 0||f,m=n.tetherOffset,h=m===void 0?0:m,g=cn(t,{boundary:c,rootBoundary:l,padding:d,altBoundary:u}),_=Tt(t.placement),v=Wt(t.placement),y=!v,b=zt(_),x=b===`x`?`y`:`x`,S=t.modifiersData.popperOffsets,C=t.rects.reference,w=t.rects.popper,T=typeof h==`function`?h(Object.assign({},t.rects,{placement:t.placement})):h,E=typeof T==`number`?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,ee={x:0,y:0};if(S){if(a){var te=b===`y`?et:H,ne=b===`y`?B:V,re=b===`y`?`height`:`width`,ie=S[b],ae=ie+g[te],oe=ie-g[ne],O=p?-w[re]/2:0,se=v===rt?C[re]:w[re],ce=v===rt?-w[re]:-C[re],le=t.elements.arrow,ue=p&&le?jt(le):{width:0,height:0},de=t.modifiersData[`arrow#persistent`]?t.modifiersData[`arrow#persistent`].padding:{top:0,right:0,bottom:0,left:0},fe=de[te],pe=de[ne],k=Bt(0,C[re],ue[re]),me=y?C[re]/2-O-k-fe-E.mainAxis:se-k-fe-E.mainAxis,he=y?-C[re]/2+O+k+pe+E.mainAxis:ce+k+pe+E.mainAxis,ge=t.elements.arrow&&Rt(t.elements.arrow),_e=ge?b===`y`?ge.clientTop||0:ge.clientLeft||0:0,ve=D?.[b]??0,ye=ie+he-ve,be=Bt(p?Dt(ae,ie+me-ve-_e):ae,ie,p?Et(oe,ye):oe);S[b]=be,ee[b]=be-ie}if(s){var xe=b===`x`?et:H,Se=b===`x`?B:V,Ce=S[x],we=x===`y`?`height`:`width`,Te=Ce+g[xe],Ee=Ce-g[Se],De=[et,H].indexOf(_)!==-1,Oe=D?.[x]??0,ke=De?Te:Ce-C[we]-w[we]-Oe+E.altAxis,Ae=De?Ce+C[we]+w[we]-Oe-E.altAxis:Ee,A=p&&De?function(e,t,n){var r=Bt(e,t,n);return r>n?n:r}(ke,Ce,Ae):Bt(p?ke:Te,Ce,p?Ae:Ee);S[x]=A,ee[x]=A-Ce}t.modifiersData[r]=ee}},requiresIfExists:[`offset`]};function _n(e,t,n){n===void 0&&(n=!1);var r,i,a=St(t),o=St(t)&&function(e){var t=e.getBoundingClientRect(),n=G(t.width)/e.offsetWidth||1,r=G(t.height)/e.offsetHeight||1;return n!==1||r!==1}(t),s=Ft(t),c=At(e,o,n),l={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(a||!a&&!n)&&((yt(t)!==`body`||tn(s))&&(l=(r=t)!==bt(r)&&St(r)?{scrollLeft:(i=r).scrollLeft,scrollTop:i.scrollTop}:$t(r)),St(t)?((u=At(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):s&&(u.x=en(s))),{x:c.left+l.scrollLeft-u.x,y:c.top+l.scrollTop-u.y,width:c.width,height:c.height}}function vn(e){var t=new Map,n=new Set,r=[];function i(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach(function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}}),r.push(e)}return e.forEach(function(e){t.set(e.name,e)}),e.forEach(function(e){n.has(e.name)||i(e)}),r}var yn={placement:`bottom`,modifiers:[],strategy:`absolute`};function bn(){return![...arguments].some(function(e){return!(e&&typeof e.getBoundingClientRect==`function`)})}function xn(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,i=t.defaultOptions,a=i===void 0?yn:i;return function(e,t,n){n===void 0&&(n=a);var i,o,s={placement:`bottom`,orderedModifiers:[],options:Object.assign({},yn,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],l=!1,u={state:s,setOptions:function(n){var i=typeof n==`function`?n(s.options):n;d(),s.options=Object.assign({},a,s.options,i),s.scrollParents={reference:xt(e)?rn(e):e.contextElement?rn(e.contextElement):[],popper:rn(t)};var o,l,f=function(e){var t=vn(e);return vt.reduce(function(e,n){return e.concat(t.filter(function(e){return e.phase===n}))},[])}((o=[].concat(r,s.options.modifiers),l=o.reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{}),Object.keys(l).map(function(e){return l[e]})));return s.orderedModifiers=f.filter(function(e){return e.enabled}),s.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=n===void 0?{}:n,i=e.effect;if(typeof i==`function`){var a=i({state:s,name:t,instance:u,options:r});c.push(a||function(){})}}),u.update()},forceUpdate:function(){if(!l){var e=s.elements,t=e.reference,n=e.popper;if(bn(t,n)){s.rects={reference:_n(t,Rt(n),s.options.strategy===`fixed`),popper:jt(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach(function(e){return s.modifiersData[e.name]=Object.assign({},e.data)});for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var i=s.orderedModifiers[r],a=i.fn,o=i.options,c=o===void 0?{}:o,d=i.name;typeof a==`function`&&(s=a({state:s,options:c,name:d,instance:u})||s)}else s.reset=!1,r=-1}}},update:(i=function(){return new Promise(function(e){u.forceUpdate(),e(s)})},function(){return o||=new Promise(function(e){Promise.resolve().then(function(){o=void 0,e(i())})}),o}),destroy:function(){d(),l=!0}};if(!bn(e,t))return u;function d(){c.forEach(function(e){return e()}),c=[]}return u.setOptions(n).then(function(e){!l&&n.onFirstUpdate&&n.onFirstUpdate(e)}),u}}var Sn=xn(),Cn=xn({defaultModifiers:[Yt,hn,qt,wt]}),q=xn({defaultModifiers:[Yt,hn,qt,wt,mn,un,gn,Ut,pn]});let J=Object.freeze(Object.defineProperty({__proto__:null,afterMain:mt,afterRead:U,afterWrite:_t,applyStyles:wt,arrow:Ut,auto:tt,basePlacements:nt,beforeMain:pt,beforeRead:dt,beforeWrite:ht,bottom:B,clippingParents:at,computeStyles:qt,createPopper:q,createPopperBase:Sn,createPopperLite:Cn,detectOverflow:cn,end:it,eventListeners:Yt,flip:un,hide:pn,left:H,main:W,modifierPhases:vt,offset:mn,placements:ut,popper:st,popperGenerator:xn,popperOffsets:hn,preventOverflow:gn,read:ft,reference:ct,right:V,start:rt,top:et,variationPlacements:lt,viewport:ot,write:gt},Symbol.toStringTag,{value:`Module`})),wn=`.bs.dropdown`,Tn=`.data-api`,En=`ArrowDown`,Dn=`hide${wn}`,On=`hidden${wn}`,kn=`show${wn}`,An=`shown${wn}`,jn=`click${wn}${Tn}`,Mn=`keydown${wn}${Tn}`,Nn=`keyup${wn}${Tn}`,Pn=`show`,Fn=`[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)`,In=`${Fn}.${Pn}`,Ln=`.dropdown-menu`,Rn=h()?`top-end`:`top-start`,zn=h()?`top-start`:`top-end`,Bn=h()?`bottom-end`:`bottom-start`,Vn=h()?`bottom-start`:`bottom-end`,Hn=h()?`left-start`:`right-start`,Un=h()?`right-start`:`left-start`,Wn={autoClose:!0,boundary:`clippingParents`,display:`dynamic`,offset:[0,2],popperConfig:null,reference:`toggle`},Gn={autoClose:`(boolean|string)`,boundary:`(string|element)`,display:`string`,offset:`(array|string|function)`,popperConfig:`(null|object|function)`,reference:`(string|element|object)`};class Kn extends fe{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=k.next(this._element,Ln)[0]||k.prev(this._element,Ln)[0]||k.findOne(Ln,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Wn}static get DefaultType(){return Gn}static get NAME(){return`dropdown`}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown())return;let e={relatedTarget:this._element};if(!O.trigger(this._element,kn,e).defaultPrevented){if(this._createPopper(),`ontouchstart`in document.documentElement&&!this._parent.closest(`.navbar-nav`))for(let e of[].concat(...document.body.children))O.on(e,`mouseover`,d);this._element.focus(),this._element.setAttribute(`aria-expanded`,!0),this._menu.classList.add(Pn),this._element.classList.add(Pn),O.trigger(this._element,An,e)}}hide(){if(l(this._element)||!this._isShown())return;let e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!O.trigger(this._element,Dn,e).defaultPrevented){if(`ontouchstart`in document.documentElement)for(let e of[].concat(...document.body.children))O.off(e,`mouseover`,d);this._popper&&this._popper.destroy(),this._menu.classList.remove(Pn),this._element.classList.remove(Pn),this._element.setAttribute(`aria-expanded`,`false`),ue.removeDataAttribute(this._menu,`popper`),O.trigger(this._element,On,e)}}_getConfig(e){if(typeof(e=super._getConfig(e)).reference==`object`&&!o(e.reference)&&typeof e.reference.getBoundingClientRect!=`function`)throw TypeError(`DROPDOWN: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(J===void 0)throw TypeError(`Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)`);let e=this._element;this._config.reference===`parent`?e=this._parent:o(this._config.reference)?e=s(this._config.reference):typeof this._config.reference==`object`&&(e=this._config.reference);let t=this._getPopperConfig();this._popper=q(e,this._menu,t)}_isShown(){return this._menu.classList.contains(Pn)}_getPlacement(){let e=this._parent;if(e.classList.contains(`dropend`))return Hn;if(e.classList.contains(`dropstart`))return Un;if(e.classList.contains(`dropup-center`))return`top`;if(e.classList.contains(`dropdown-center`))return`bottom`;let t=getComputedStyle(this._menu).getPropertyValue(`--bs-position`).trim()===`end`;return e.classList.contains(`dropup`)?t?zn:Rn:t?Vn:Bn}_detectNavbar(){return this._element.closest(`.navbar`)!==null}_getOffset(){let{offset:e}=this._config;return typeof e==`string`?e.split(`,`).map(e=>Number.parseInt(e,10)):typeof e==`function`?t=>e(t,this._element):e}_getPopperConfig(){let e={placement:this._getPlacement(),modifiers:[{name:`preventOverflow`,options:{boundary:this._config.boundary}},{name:`offset`,options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display===`static`)&&(ue.setDataAttribute(this._menu,`popper`,`static`),e.modifiers=[{name:`applyStyles`,enabled:!1}]),{...e,..._(this._config.popperConfig,[void 0,e])}}_selectMenuItem({key:e,target:t}){let n=k.find(`.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)`,this._menu).filter(e=>c(e));n.length&&y(n,t,e===En,!n.includes(t)).focus()}static jQueryInterface(e){return this.each(function(){let t=Kn.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0)throw TypeError(`No method named "${e}"`);t[e]()}})}static clearMenus(e){if(e.button===2||e.type===`keyup`&&e.key!==`Tab`)return;let t=k.find(In);for(let n of t){let t=Kn.getInstance(n);if(!t||!1===t._config.autoClose)continue;let r=e.composedPath(),i=r.includes(t._menu);if(r.includes(t._element)||t._config.autoClose===`inside`&&!i||t._config.autoClose===`outside`&&i||t._menu.contains(e.target)&&(e.type===`keyup`&&e.key===`Tab`||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;let a={relatedTarget:t._element};e.type===`click`&&(a.clickEvent=e),t._completeHide(a)}}static dataApiKeydownHandler(e){let t=/input|textarea/i.test(e.target.tagName),n=e.key===`Escape`,r=[`ArrowUp`,En].includes(e.key);if(!r&&!n||t&&!n)return;e.preventDefault();let i=this.matches(Fn)?this:k.prev(this,Fn)[0]||k.next(this,Fn)[0]||k.findOne(Fn,e.delegateTarget.parentNode),a=Kn.getOrCreateInstance(i);if(r)return e.stopPropagation(),a.show(),void a._selectMenuItem(e);a._isShown()&&(e.stopPropagation(),a.hide(),i.focus())}}O.on(document,Mn,Fn,Kn.dataApiKeydownHandler),O.on(document,Mn,Ln,Kn.dataApiKeydownHandler),O.on(document,jn,Kn.clearMenus),O.on(document,Nn,Kn.clearMenus),O.on(document,jn,Fn,function(e){e.preventDefault(),Kn.getOrCreateInstance(this).toggle()}),g(Kn);let qn=`backdrop`,Jn=`show`,Yn=`mousedown.bs.${qn}`,Xn={className:`modal-backdrop`,clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:`body`},Zn={className:`string`,clickCallback:`(function|null)`,isAnimated:`boolean`,isVisible:`boolean`,rootElement:`(element|string)`};class Qn extends de{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return Xn}static get DefaultType(){return Zn}static get NAME(){return qn}show(e){if(!this._config.isVisible)return void _(e);this._append();let t=this._getElement();this._config.isAnimated&&f(t),t.classList.add(Jn),this._emulateAnimation(()=>{_(e)})}hide(e){this._config.isVisible?(this._getElement().classList.remove(Jn),this._emulateAnimation(()=>{this.dispose(),_(e)})):_(e)}dispose(){this._isAppended&&=(O.off(this._element,Yn),this._element.remove(),!1)}_getElement(){if(!this._element){let e=document.createElement(`div`);e.className=this._config.className,this._config.isAnimated&&e.classList.add(`fade`),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=s(e.rootElement),e}_append(){if(this._isAppended)return;let e=this._getElement();this._config.rootElement.append(e),O.on(e,Yn,()=>{_(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){v(e,this._getElement(),this._config.isAnimated)}}let $n=`.bs.focustrap`,er=`focusin${$n}`,tr=`keydown.tab${$n}`,nr=`backward`,rr={autofocus:!0,trapElement:null},ir={autofocus:`boolean`,trapElement:`element`};class ar extends de{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return rr}static get DefaultType(){return ir}static get NAME(){return`focustrap`}activate(){this._isActive||=(this._config.autofocus&&this._config.trapElement.focus(),O.off(document,$n),O.on(document,er,e=>this._handleFocusin(e)),O.on(document,tr,e=>this._handleKeydown(e)),!0)}deactivate(){this._isActive&&(this._isActive=!1,O.off(document,$n))}_handleFocusin(e){let{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;let n=k.focusableChildren(t);n.length===0?t.focus():this._lastTabNavDirection===nr?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){e.key===`Tab`&&(this._lastTabNavDirection=e.shiftKey?nr:`forward`)}}let or=`.fixed-top, .fixed-bottom, .is-fixed, .sticky-top`,sr=`.sticky-top`,cr=`padding-right`,lr=`margin-right`;class ur{constructor(){this._element=document.body}getWidth(){let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){let e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,cr,t=>t+e),this._setElementAttributes(or,cr,t=>t+e),this._setElementAttributes(sr,lr,t=>t-e)}reset(){this._resetElementAttributes(this._element,`overflow`),this._resetElementAttributes(this._element,cr),this._resetElementAttributes(or,cr),this._resetElementAttributes(sr,lr)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,`overflow`),this._element.style.overflow=`hidden`}_setElementAttributes(e,t,n){let r=this.getWidth();this._applyManipulationCallback(e,e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+r)return;this._saveInitialAttribute(e,t);let i=window.getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,`${n(Number.parseFloat(i))}px`)})}_saveInitialAttribute(e,t){let n=e.style.getPropertyValue(t);n&&ue.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){this._applyManipulationCallback(e,e=>{let n=ue.getDataAttribute(e,t);n===null?e.style.removeProperty(t):(ue.removeDataAttribute(e,t),e.style.setProperty(t,n))})}_applyManipulationCallback(e,t){if(o(e))t(e);else for(let n of k.find(e,this._element))t(n)}}let dr=`.bs.modal`,fr=`hide${dr}`,pr=`hidePrevented${dr}`,mr=`hidden${dr}`,hr=`show${dr}`,gr=`shown${dr}`,_r=`resize${dr}`,vr=`click.dismiss${dr}`,yr=`mousedown.dismiss${dr}`,br=`keydown.dismiss${dr}`,xr=`click${dr}.data-api`,Sr=`modal-open`,Cr=`show`,wr=`modal-static`,Tr={backdrop:!0,focus:!0,keyboard:!0},Er={backdrop:`(boolean|string)`,focus:`boolean`,keyboard:`boolean`};class Dr extends fe{constructor(e,t){super(e,t),this._dialog=k.findOne(`.modal-dialog`,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new ur,this._addEventListeners()}static get Default(){return Tr}static get DefaultType(){return Er}static get NAME(){return`modal`}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||O.trigger(this._element,hr,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Sr),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){this._isShown&&!this._isTransitioning&&(O.trigger(this._element,fr).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Cr),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){O.off(window,dr),O.off(this._dialog,dr),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Qn({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new ar({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display=`block`,this._element.removeAttribute(`aria-hidden`),this._element.setAttribute(`aria-modal`,!0),this._element.setAttribute(`role`,`dialog`),this._element.scrollTop=0;let t=k.findOne(`.modal-body`,this._dialog);t&&(t.scrollTop=0),f(this._element),this._element.classList.add(Cr),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,O.trigger(this._element,gr,{relatedTarget:e})},this._dialog,this._isAnimated())}_addEventListeners(){O.on(this._element,br,e=>{e.key===`Escape`&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),O.on(window,_r,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),O.on(this._element,yr,e=>{O.one(this._element,vr,t=>{this._element===e.target&&this._element===t.target&&(this._config.backdrop===`static`?this._triggerBackdropTransition():this._config.backdrop&&this.hide())})})}_hideModal(){this._element.style.display=`none`,this._element.setAttribute(`aria-hidden`,!0),this._element.removeAttribute(`aria-modal`),this._element.removeAttribute(`role`),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Sr),this._resetAdjustments(),this._scrollBar.reset(),O.trigger(this._element,mr)})}_isAnimated(){return this._element.classList.contains(`fade`)}_triggerBackdropTransition(){if(O.trigger(this._element,pr).defaultPrevented)return;let e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._element.style.overflowY;t===`hidden`||this._element.classList.contains(wr)||(e||(this._element.style.overflowY=`hidden`),this._element.classList.add(wr),this._queueCallback(()=>{this._element.classList.remove(wr),this._queueCallback(()=>{this._element.style.overflowY=t},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){let e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;if(n&&!e){let e=h()?`paddingLeft`:`paddingRight`;this._element.style[e]=`${t}px`}if(!n&&e){let e=h()?`paddingRight`:`paddingLeft`;this._element.style[e]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft=``,this._element.style.paddingRight=``}static jQueryInterface(e,t){return this.each(function(){let n=Dr.getOrCreateInstance(this,e);if(typeof e==`string`){if(n[e]===void 0)throw TypeError(`No method named "${e}"`);n[e](t)}})}}O.on(document,xr,`[data-bs-toggle="modal"]`,function(e){let t=k.getElementFromSelector(this);[`A`,`AREA`].includes(this.tagName)&&e.preventDefault(),O.one(t,hr,e=>{e.defaultPrevented||O.one(t,mr,()=>{c(this)&&this.focus()})});let n=k.findOne(`.modal.show`);n&&Dr.getInstance(n).hide(),Dr.getOrCreateInstance(t).toggle(this)}),me(Dr),g(Dr);let Or=`.bs.offcanvas`,kr=`.data-api`,Ar=`load${Or}${kr}`,jr=`show`,Mr=`showing`,Nr=`hiding`,Pr=`.offcanvas.show`,Fr=`show${Or}`,Ir=`shown${Or}`,Lr=`hide${Or}`,Rr=`hidePrevented${Or}`,zr=`hidden${Or}`,Br=`resize${Or}`,Vr=`click${Or}${kr}`,Hr=`keydown.dismiss${Or}`,Ur={backdrop:!0,keyboard:!0,scroll:!1},Wr={backdrop:`(boolean|string)`,keyboard:`boolean`,scroll:`boolean`};class Gr extends fe{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Ur}static get DefaultType(){return Wr}static get NAME(){return`offcanvas`}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||O.trigger(this._element,Fr,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new ur().hide(),this._element.setAttribute(`aria-modal`,!0),this._element.setAttribute(`role`,`dialog`),this._element.classList.add(Mr),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(jr),this._element.classList.remove(Mr),O.trigger(this._element,Ir,{relatedTarget:e})},this._element,!0))}hide(){this._isShown&&(O.trigger(this._element,Lr).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Nr),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(jr,Nr),this._element.removeAttribute(`aria-modal`),this._element.removeAttribute(`role`),this._config.scroll||new ur().reset(),O.trigger(this._element,zr)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){let e=!!this._config.backdrop;return new Qn({className:`offcanvas-backdrop`,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?()=>{this._config.backdrop===`static`?O.trigger(this._element,Rr):this.hide()}:null})}_initializeFocusTrap(){return new ar({trapElement:this._element})}_addEventListeners(){O.on(this._element,Hr,e=>{e.key===`Escape`&&(this._config.keyboard?this.hide():O.trigger(this._element,Rr))})}static jQueryInterface(e){return this.each(function(){let t=Gr.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0||e.startsWith(`_`)||e===`constructor`)throw TypeError(`No method named "${e}"`);t[e](this)}})}}O.on(document,Vr,`[data-bs-toggle="offcanvas"]`,function(e){let t=k.getElementFromSelector(this);if([`A`,`AREA`].includes(this.tagName)&&e.preventDefault(),l(this))return;O.one(t,zr,()=>{c(this)&&this.focus()});let n=k.findOne(Pr);n&&n!==t&&Gr.getInstance(n).hide(),Gr.getOrCreateInstance(t).toggle(this)}),O.on(window,Ar,()=>{for(let e of k.find(Pr))Gr.getOrCreateInstance(e).show()}),O.on(window,Br,()=>{for(let e of k.find(`[aria-modal][class*=show][class*=offcanvas-]`))getComputedStyle(e).position!==`fixed`&&Gr.getOrCreateInstance(e).hide()}),me(Gr),g(Gr);let Kr={"*":[`class`,`dir`,`id`,`lang`,`role`,/^aria-[\w-]*$/i],a:[`target`,`href`,`title`,`rel`],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:[`src`,`srcset`,`alt`,`title`,`width`,`height`],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},qr=new Set([`background`,`cite`,`href`,`itemtype`,`longdesc`,`poster`,`src`,`xlink:href`]),Jr=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Yr=(e,t)=>{let n=e.nodeName.toLowerCase();return t.includes(n)?!qr.has(n)||!!Jr.test(e.nodeValue):t.filter(e=>e instanceof RegExp).some(e=>e.test(n))},Xr={allowList:Kr,content:{},extraClass:``,html:!1,sanitize:!0,sanitizeFn:null,template:`<div></div>`},Zr={allowList:`object`,content:`object`,extraClass:`(string|function)`,html:`boolean`,sanitize:`boolean`,sanitizeFn:`(null|function)`,template:`string`},Qr={entry:`(string|element|function|null)`,selector:`(string|element)`};class $r extends de{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return Xr}static get DefaultType(){return Zr}static get NAME(){return`TemplateFactory`}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){let e=document.createElement(`div`);e.innerHTML=this._maybeSanitize(this._config.template);for(let[t,n]of Object.entries(this._config.content))this._setContent(e,n,t);let t=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&t.classList.add(...n.split(` `)),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(let[t,n]of Object.entries(e))super._typeCheckConfig({selector:t,entry:n},Qr)}_setContent(e,t,n){let r=k.findOne(n,e);r&&((t=this._resolvePossibleFunction(t))?o(t)?this._putElementInTemplate(s(t),r):this._config.html?r.innerHTML=this._maybeSanitize(t):r.textContent=t:r.remove())}_maybeSanitize(e){return this._config.sanitize?function(e,t,n){if(!e.length)return e;if(n&&typeof n==`function`)return n(e);let r=new window.DOMParser().parseFromString(e,`text/html`),i=[].concat(...r.body.querySelectorAll(`*`));for(let e of i){let n=e.nodeName.toLowerCase();if(!Object.keys(t).includes(n)){e.remove();continue}let r=[].concat(...e.attributes),i=[].concat(t[`*`]||[],t[n]||[]);for(let t of r)Yr(t,i)||e.removeAttribute(t.nodeName)}return r.body.innerHTML}(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return _(e,[void 0,this])}_putElementInTemplate(e,t){if(this._config.html)return t.innerHTML=``,void t.append(e);t.textContent=e.textContent}}let ei=new Set([`sanitize`,`allowList`,`sanitizeFn`]),ti=`fade`,ni=`show`,ri=`.modal`,ii=`hide.bs.modal`,ai=`hover`,oi=`focus`,si=`click`,ci={AUTO:`auto`,TOP:`top`,RIGHT:h()?`left`:`right`,BOTTOM:`bottom`,LEFT:h()?`right`:`left`},li={allowList:Kr,animation:!0,boundary:`clippingParents`,container:!1,customClass:``,delay:0,fallbackPlacements:[`top`,`right`,`bottom`,`left`],html:!1,offset:[0,6],placement:`top`,popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:`<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>`,title:``,trigger:`hover focus`},ui={allowList:`object`,animation:`boolean`,boundary:`(string|element)`,container:`(string|element|boolean)`,customClass:`(string|function)`,delay:`(number|object)`,fallbackPlacements:`array`,html:`boolean`,offset:`(array|string|function)`,placement:`(string|function)`,popperConfig:`(null|object|function)`,sanitize:`boolean`,sanitizeFn:`(null|function)`,selector:`(string|boolean)`,template:`string`,title:`(string|element|function)`,trigger:`string`};class di extends fe{constructor(e,t){if(J===void 0)throw TypeError(`Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)`);super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return li}static get DefaultType(){return ui}static get NAME(){return`tooltip`}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),O.off(this._element.closest(ri),ii,this._hideModalHandler),this._element.getAttribute(`data-bs-original-title`)&&this._element.setAttribute(`title`,this._element.getAttribute(`data-bs-original-title`)),this._disposePopper(),super.dispose()}show(){if(this._element.style.display===`none`)throw Error(`Please use show on visible elements`);if(!this._isWithContent()||!this._isEnabled)return;let e=O.trigger(this._element,this.constructor.eventName(`show`)),t=(u(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!t)return;this._disposePopper();let n=this._getTipElement();this._element.setAttribute(`aria-describedby`,n.getAttribute(`id`));let{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(n),O.trigger(this._element,this.constructor.eventName(`inserted`))),this._popper=this._createPopper(n),n.classList.add(ni),`ontouchstart`in document.documentElement)for(let e of[].concat(...document.body.children))O.on(e,`mouseover`,d);this._queueCallback(()=>{O.trigger(this._element,this.constructor.eventName(`shown`)),!1===this._isHovered&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!O.trigger(this._element,this.constructor.eventName(`hide`)).defaultPrevented){if(this._getTipElement().classList.remove(ni),`ontouchstart`in document.documentElement)for(let e of[].concat(...document.body.children))O.off(e,`mouseover`,d);this._activeTrigger[si]=!1,this._activeTrigger[oi]=!1,this._activeTrigger[ai]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute(`aria-describedby`),O.trigger(this._element,this.constructor.eventName(`hidden`)))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||=this._createTipElement(this._newContent||this._getContentForTemplate()),this.tip}_createTipElement(e){let t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(ti,ni),t.classList.add(`bs-${this.constructor.NAME}-auto`);let n=(e=>{do e+=Math.floor(1e6*Math.random());while(document.getElementById(e));return e})(this.constructor.NAME).toString();return t.setAttribute(`id`,n),this._isAnimated()&&t.classList.add(ti),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new $r({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute(`data-bs-original-title`)}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(ti)}_isShown(){return this.tip&&this.tip.classList.contains(ni)}_createPopper(e){let t=_(this._config.placement,[this,e,this._element]),n=ci[t.toUpperCase()];return q(this._element,e,this._getPopperConfig(n))}_getOffset(){let{offset:e}=this._config;return typeof e==`string`?e.split(`,`).map(e=>Number.parseInt(e,10)):typeof e==`function`?t=>e(t,this._element):e}_resolvePossibleFunction(e){return _(e,[this._element,this._element])}_getPopperConfig(e){let t={placement:e,modifiers:[{name:`flip`,options:{fallbackPlacements:this._config.fallbackPlacements}},{name:`offset`,options:{offset:this._getOffset()}},{name:`preventOverflow`,options:{boundary:this._config.boundary}},{name:`arrow`,options:{element:`.${this.constructor.NAME}-arrow`}},{name:`preSetPlacement`,enabled:!0,phase:`beforeMain`,fn:e=>{this._getTipElement().setAttribute(`data-popper-placement`,e.state.placement)}}]};return{...t,..._(this._config.popperConfig,[void 0,t])}}_setListeners(){let e=this._config.trigger.split(` `);for(let t of e)if(t===`click`)O.on(this._element,this.constructor.eventName(`click`),this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t._activeTrigger[si]=!(t._isShown()&&t._activeTrigger[si]),t.toggle()});else if(t!==`manual`){let e=t===ai?this.constructor.eventName(`mouseenter`):this.constructor.eventName(`focusin`),n=t===ai?this.constructor.eventName(`mouseleave`):this.constructor.eventName(`focusout`);O.on(this._element,e,this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t._activeTrigger[e.type===`focusin`?oi:ai]=!0,t._enter()}),O.on(this._element,n,this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t._activeTrigger[e.type===`focusout`?oi:ai]=t._element.contains(e.relatedTarget),t._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},O.on(this._element.closest(ri),ii,this._hideModalHandler)}_fixTitle(){let e=this._element.getAttribute(`title`);e&&(this._element.getAttribute(`aria-label`)||this._element.textContent.trim()||this._element.setAttribute(`aria-label`,e),this._element.setAttribute(`data-bs-original-title`,e),this._element.removeAttribute(`title`))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){let t=ue.getDataAttributes(this._element);for(let e of Object.keys(t))ei.has(e)&&delete t[e];return e={...t,...typeof e==`object`&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=!1===e.container?document.body:s(e.container),typeof e.delay==`number`&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title==`number`&&(e.title=e.title.toString()),typeof e.content==`number`&&(e.content=e.content.toString()),e}_getDelegateConfig(){let e={};for(let[t,n]of Object.entries(this._config))this.constructor.Default[t]!==n&&(e[t]=n);return e.selector=!1,e.trigger=`manual`,e}_disposePopper(){this._popper&&=(this._popper.destroy(),null),this.tip&&=(this.tip.remove(),null)}static jQueryInterface(e){return this.each(function(){let t=di.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0)throw TypeError(`No method named "${e}"`);t[e]()}})}}g(di);let fi={...di.Default,content:``,offset:[0,8],placement:`right`,template:`<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>`,trigger:`click`},pi={...di.DefaultType,content:`(null|string|element|function)`};class mi extends di{static get Default(){return fi}static get DefaultType(){return pi}static get NAME(){return`popover`}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){let t=mi.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0)throw TypeError(`No method named "${e}"`);t[e]()}})}}g(mi);let hi=`.bs.scrollspy`,gi=`activate${hi}`,_i=`click${hi}`,vi=`load${hi}.data-api`,yi=`active`,bi=`[href]`,xi=`.nav-link`,Si=`${xi}, .nav-item > ${xi}, .list-group-item`,Ci={offset:null,rootMargin:`0px 0px -25%`,smoothScroll:!1,target:null,threshold:[.1,.5,1]},wi={offset:`(number|null)`,rootMargin:`string`,smoothScroll:`boolean`,target:`element`,threshold:`array`};class Ti extends fe{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY===`visible`?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Ci}static get DefaultType(){return wi}static get NAME(){return`scrollspy`}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(let e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=s(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold==`string`&&(e.threshold=e.threshold.split(`,`).map(e=>Number.parseFloat(e))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(O.off(this._config.target,_i),O.on(this._config.target,_i,bi,e=>{let t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();let n=this._rootElement||window,r=t.offsetTop-this._element.offsetTop;if(n.scrollTo)return void n.scrollTo({top:r,behavior:`smooth`});n.scrollTop=r}}))}_getNewObserver(){let e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),e)}_observerCallback(e){let t=e=>this._targetLinks.get(`#${e.target.id}`),n=e=>{this._previousScrollData.visibleEntryTop=e.target.offsetTop,this._process(t(e))},r=(this._rootElement||document.documentElement).scrollTop,i=r>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=r;for(let a of e){if(!a.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(a));continue}let e=a.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&e){if(n(a),!r)return}else i||e||n(a)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;let e=k.find(bi,this._config.target);for(let t of e){if(!t.hash||l(t))continue;let e=k.findOne(decodeURI(t.hash),this._element);c(e)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,e))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(yi),this._activateParents(e),O.trigger(this._element,gi,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(`dropdown-item`))k.findOne(`.dropdown-toggle`,e.closest(`.dropdown`)).classList.add(yi);else for(let t of k.parents(e,`.nav, .list-group`))for(let e of k.prev(t,Si))e.classList.add(yi)}_clearActiveClass(e){e.classList.remove(yi);let t=k.find(`${bi}.${yi}`,e);for(let e of t)e.classList.remove(yi)}static jQueryInterface(e){return this.each(function(){let t=Ti.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0||e.startsWith(`_`)||e===`constructor`)throw TypeError(`No method named "${e}"`);t[e]()}})}}O.on(window,vi,()=>{for(let e of k.find(`[data-bs-spy="scroll"]`))Ti.getOrCreateInstance(e)}),g(Ti);let Ei=`.bs.tab`,Di=`hide${Ei}`,Oi=`hidden${Ei}`,ki=`show${Ei}`,Ai=`shown${Ei}`,ji=`click${Ei}`,Mi=`keydown${Ei}`,Ni=`load${Ei}`,Pi=`ArrowRight`,Fi=`ArrowDown`,Ii=`Home`,Li=`active`,Ri=`fade`,zi=`show`,Bi=`.dropdown-toggle`,Vi=`:not(${Bi})`,Hi=`[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]`,Ui=`.nav-link${Vi}, .list-group-item${Vi}, [role="tab"]${Vi}, ${Hi}`,Wi=`.${Li}[data-bs-toggle="tab"], .${Li}[data-bs-toggle="pill"], .${Li}[data-bs-toggle="list"]`;class Gi extends fe{constructor(e){super(e),this._parent=this._element.closest(`.list-group, .nav, [role="tablist"]`),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),O.on(this._element,Mi,e=>this._keydown(e)))}static get NAME(){return`tab`}show(){let e=this._element;if(this._elemIsActive(e))return;let t=this._getActiveElem(),n=t?O.trigger(t,Di,{relatedTarget:e}):null;O.trigger(e,ki,{relatedTarget:t}).defaultPrevented||n&&n.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){e&&(e.classList.add(Li),this._activate(k.getElementFromSelector(e)),this._queueCallback(()=>{e.getAttribute(`role`)===`tab`?(e.removeAttribute(`tabindex`),e.setAttribute(`aria-selected`,!0),this._toggleDropDown(e,!0),O.trigger(e,Ai,{relatedTarget:t})):e.classList.add(zi)},e,e.classList.contains(Ri)))}_deactivate(e,t){e&&(e.classList.remove(Li),e.blur(),this._deactivate(k.getElementFromSelector(e)),this._queueCallback(()=>{e.getAttribute(`role`)===`tab`?(e.setAttribute(`aria-selected`,!1),e.setAttribute(`tabindex`,`-1`),this._toggleDropDown(e,!1),O.trigger(e,Oi,{relatedTarget:t})):e.classList.remove(zi)},e,e.classList.contains(Ri)))}_keydown(e){if(![`ArrowLeft`,Pi,`ArrowUp`,Fi,Ii,`End`].includes(e.key))return;e.stopPropagation(),e.preventDefault();let t=this._getChildren().filter(e=>!l(e)),n;if([Ii,`End`].includes(e.key))n=t[e.key===Ii?0:t.length-1];else{let r=[Pi,Fi].includes(e.key);n=y(t,e.target,r,!0)}n&&(n.focus({preventScroll:!0}),Gi.getOrCreateInstance(n).show())}_getChildren(){return k.find(Ui,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,`role`,`tablist`);for(let e of t)this._setInitialAttributesOnChild(e)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);let t=this._elemIsActive(e),n=this._getOuterElement(e);e.setAttribute(`aria-selected`,t),n!==e&&this._setAttributeIfNotExists(n,`role`,`presentation`),t||e.setAttribute(`tabindex`,`-1`),this._setAttributeIfNotExists(e,`role`,`tab`),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){let t=k.getElementFromSelector(e);t&&(this._setAttributeIfNotExists(t,`role`,`tabpanel`),e.id&&this._setAttributeIfNotExists(t,`aria-labelledby`,`${e.id}`))}_toggleDropDown(e,t){let n=this._getOuterElement(e);if(!n.classList.contains(`dropdown`))return;let r=(e,r)=>{let i=k.findOne(e,n);i&&i.classList.toggle(r,t)};r(Bi,Li),r(`.dropdown-menu`,zi),n.setAttribute(`aria-expanded`,t)}_setAttributeIfNotExists(e,t,n){e.hasAttribute(t)||e.setAttribute(t,n)}_elemIsActive(e){return e.classList.contains(Li)}_getInnerElement(e){return e.matches(Ui)?e:k.findOne(Ui,e)}_getOuterElement(e){return e.closest(`.nav-item, .list-group-item`)||e}static jQueryInterface(e){return this.each(function(){let t=Gi.getOrCreateInstance(this);if(typeof e==`string`){if(t[e]===void 0||e.startsWith(`_`)||e===`constructor`)throw TypeError(`No method named "${e}"`);t[e]()}})}}O.on(document,ji,Hi,function(e){[`A`,`AREA`].includes(this.tagName)&&e.preventDefault(),l(this)||Gi.getOrCreateInstance(this).show()}),O.on(window,Ni,()=>{for(let e of k.find(Wi))Gi.getOrCreateInstance(e)}),g(Gi);let Ki=`.bs.toast`,qi=`mouseover${Ki}`,Ji=`mouseout${Ki}`,Yi=`focusin${Ki}`,Xi=`focusout${Ki}`,Zi=`hide${Ki}`,Qi=`hidden${Ki}`,$i=`show${Ki}`,ea=`shown${Ki}`,ta=`hide`,na=`show`,ra=`showing`,ia={animation:`boolean`,autohide:`boolean`,delay:`number`},aa={animation:!0,autohide:!0,delay:5e3};class oa extends fe{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return aa}static get DefaultType(){return ia}static get NAME(){return`toast`}show(){O.trigger(this._element,$i).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add(`fade`),this._element.classList.remove(ta),f(this._element),this._element.classList.add(na,ra),this._queueCallback(()=>{this._element.classList.remove(ra),O.trigger(this._element,ea),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(O.trigger(this._element,Zi).defaultPrevented||(this._element.classList.add(ra),this._queueCallback(()=>{this._element.classList.add(ta),this._element.classList.remove(ra,na),O.trigger(this._element,Qi)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(na),super.dispose()}isShown(){return this._element.classList.contains(na)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case`mouseover`:case`mouseout`:this._hasMouseInteraction=t;break;case`focusin`:case`focusout`:this._hasKeyboardInteraction=t}if(t)return void this._clearTimeout();let n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){O.on(this._element,qi,e=>this._onInteraction(e,!0)),O.on(this._element,Ji,e=>this._onInteraction(e,!1)),O.on(this._element,Yi,e=>this._onInteraction(e,!0)),O.on(this._element,Xi,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){let t=oa.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0)throw TypeError(`No method named "${e}"`);t[e](this)}})}}return me(oa),g(oa),{Alert:ve,Button:be,Carousel:He,Collapse:$e,Dropdown:Kn,Modal:Dr,Offcanvas:Gr,Popover:mi,ScrollSpy:Ti,Tab:Gi,Toast:oa,Tooltip:di}})}))();function l(){return`
        <div class="sidebar-inner">
            <div class="sidebar-brand">
                <a href="/" class="sidebar-brand-link">
                    <span class="sidebar-brand-mark">S</span>
                    <span class="sidebar-brand-name">StockFlow</span>
                </a>
            </div>

            <nav class="sidebar-nav" aria-label="Main navigation">

                <div class="sidebar-section">
                    <div class="sidebar-section-title">
                        Overview
                    </div>

                    <a href="#dashboard" class="sidebar-link active">
                        <span class="sidebar-icon" aria-hidden="true">
                            <svg
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                                <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                                <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                                <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                            </svg>
                        </span>
                        <span class="sidebar-label">Dashboard</span>
                    </a>
                </div>

                <div class="sidebar-section">
                    <div class="sidebar-section-title">
                        Inventory
                    </div>

                    <a href="#products" class="sidebar-link">
                        <span class="sidebar-icon" aria-hidden="true">
                            <svg
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M4 7.5 12 3l8 4.5"></path>
                                <path d="M4 7.5v9L12 21l8-4.5v-9"></path>
                                <path d="M12 21v-9"></path>
                                <path d="m4 7.5 8 4.5 8-4.5"></path>
                            </svg>
                        </span>
                        <span class="sidebar-label">Products</span>
                    </a>

                    <a href="#categories" class="sidebar-link">
                        <span class="sidebar-icon" aria-hidden="true">
                            <svg
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M3.5 6.5h6l2 2h9v9.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-9.5a2 2 0 0 1 2-2Z"></path>
                            </svg>
                        </span>
                        <span class="sidebar-label">Categories</span>
                    </a>

                    <a href="#stock-overview" class="sidebar-link">
                        <span class="sidebar-icon" aria-hidden="true">
                            <svg
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="m12 3 8 4-8 4-8-4 8-4Z"></path>
                                <path d="m4 12 8 4 8-4"></path>
                                <path d="m4 17 8 4 8-4"></path>
                            </svg>
                        </span>
                        <span class="sidebar-label">Stock Overview</span>
                    </a>

                    <a href="#stock-in" class="sidebar-link">
                        <span class="sidebar-icon" aria-hidden="true">
                            <svg
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M12 3v10"></path>
                                <path d="m8 9 4 4 4-4"></path>
                                <path d="M5 17h14"></path>
                                <path d="M7 20h10"></path>
                            </svg>
                        </span>
                        <span class="sidebar-label">Stock In</span>
                    </a>

                    <a href="#stock-out" class="sidebar-link">
                        <span class="sidebar-icon" aria-hidden="true">
                            <svg
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M12 13V3"></path>
                                <path d="m8 7 4-4 4 4"></path>
                                <path d="M5 17h14"></path>
                                <path d="M7 20h10"></path>
                            </svg>
                        </span>
                        <span class="sidebar-label">Stock Out</span>
                    </a>

                    <a href="#stock-adjustments" class="sidebar-link">
                        <span class="sidebar-icon" aria-hidden="true">
                            <svg
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M5 6h14"></path>
                                <path d="M5 12h14"></path>
                                <path d="M5 18h14"></path>
                                <circle cx="9" cy="6" r="1.5"></circle>
                                <circle cx="15" cy="12" r="1.5"></circle>
                                <circle cx="11" cy="18" r="1.5"></circle>
                            </svg>
                        </span>
                        <span class="sidebar-label">Stock Adjustments</span>
                    </a>

                    <a href="#transfers" class="sidebar-link">
                        <span class="sidebar-icon" aria-hidden="true">
                            <svg
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M4 8h13"></path>
                                <path d="m13 5 4 3-4 3"></path>
                                <path d="M20 16H7"></path>
                                <path d="m11 13-4 3 4 3"></path>
                            </svg>
                        </span>
                        <span class="sidebar-label">Transfers</span>
                    </a>

                    <a href="#stock-movement" class="sidebar-link">
                        <span class="sidebar-icon" aria-hidden="true">
                            <svg
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M4 12h3l2-5 4 10 2-5h5"></path>
                            </svg>
                        </span>
                        <span class="sidebar-label">Stock Movement</span>
                    </a>
                </div>

                <div class="sidebar-section">
                    <div class="sidebar-section-title">
                        Purchasing
                    </div>

                    <a href="#suppliers" class="sidebar-link">
                        <span class="sidebar-icon" aria-hidden="true">
                            <svg
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M4 10h16"></path>
                                <path d="M5 10v10"></path>
                                <path d="M19 10v10"></path>
                                <path d="M3 20h18"></path>
                                <path d="M5 10 7 4h10l2 6"></path>
                                <path d="M8 14h3"></path>
                                <path d="M13 14h3"></path>
                                <path d="M8 17h3"></path>
                                <path d="M13 17h3"></path>
                            </svg>
                        </span>
                        <span class="sidebar-label">Suppliers</span>
                    </a>

                    <a href="#purchase-orders" class="sidebar-link">
                        <span class="sidebar-icon" aria-hidden="true">
                            <svg
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M8 4h8"></path>
                                <path d="M9 3h6"></path>
                                <rect x="5" y="5" width="14" height="16" rx="2"></rect>
                                <path d="M8 10h8"></path>
                                <path d="M8 14h5"></path>
                                <path d="M8 18h4"></path>
                            </svg>
                        </span>
                        <span class="sidebar-label">Purchase Orders</span>
                    </a>
                </div>

                <div class="sidebar-section">
                    <div class="sidebar-section-title">
                        Sales
                    </div>

                    <a href="#customers" class="sidebar-link">
                        <span class="sidebar-icon" aria-hidden="true">
                            <svg
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <circle cx="12" cy="8" r="3"></circle>
                                <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6"></path>
                            </svg>
                        </span>
                        <span class="sidebar-label">Customers</span>
                    </a>

                    <a href="#orders" class="sidebar-link">
                        <span class="sidebar-icon" aria-hidden="true">
                            <svg
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M6 8h12l1 12H5L6 8Z"></path>
                                <path d="M9 8V6a3 3 0 0 1 6 0v2"></path>
                            </svg>
                        </span>
                        <span class="sidebar-label">Orders</span>
                    </a>
                </div>

            </nav>
        </div>
    `}function u(){let e=window.location.hash.replace(`#`,``)||`dashboard`;document.querySelectorAll(`.sidebar-link`).forEach(t=>{let n=t.getAttribute(`href`);n&&((n.startsWith(`#`)?n.replace(`#`,``):``)===e?t.classList.add(`active`):t.classList.remove(`active`))})}function d(){return`
        <div class="header-inner">

            <div class="header-left">

                <button
                    type="button"
                    class="header-menu-toggle"
                    data-sidebar-toggle
                    aria-label="Open navigation"
                    aria-expanded="false"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div class="header-page">
                    <span class="header-page-title">
                        Dashboard
                    </span>
                </div>

            </div>

            <div class="header-center">

                <div class="header-search">
                    <span
                        class="header-search-icon"
                        aria-hidden="true"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <circle cx="11" cy="11" r="6.5"></circle>
                            <path d="m16 16 4 4"></path>
                        </svg>
                    </span>

                    <input
                        type="search"
                        class="header-search-input"
                        placeholder="Search anything..."
                        aria-label="Search"
                    >
                </div>

                <button
                    type="button"
                    class="header-icon-button header-search-button"
                    aria-label="Search"
                >
                    <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <circle cx="11" cy="11" r="6.5"></circle>
                        <path d="m16 16 4 4"></path>
                    </svg>
                </button>

            </div>

            <div class="header-right">

                <button
                    type="button"
                    class="header-icon-button"
                    aria-label="Notifications"
                >
                    <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path>
                        <path d="M10 21h4"></path>
                    </svg>

                    <span
                        class="header-notification-dot"
                        aria-hidden="true"
                    ></span>
                </button>

                <div class="dropdown">

                    <button
                        type="button"
                        class="header-user dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        aria-label="Open user menu"
                    >

                        <span class="header-user-avatar">
                            A
                        </span>

                        <span class="header-user-info">
                            <span class="header-user-name">
                                Admin
                            </span>

                            <span class="header-user-role">
                                Administrator
                            </span>
                        </span>

                    </button>

                    <ul class="dropdown-menu dropdown-menu-end header-user-menu">

                        <li>
                            <div class="header-user-menu-profile">

                                <span class="header-user-menu-avatar">
                                    A
                                </span>

                                <div>
                                    <strong>Admin</strong>
                                    <span>Administrator</span>
                                </div>

                            </div>
                        </li>

                        <li>
                            <hr class="dropdown-divider">
                        </li>

                        <li>
                            <a
                                class="dropdown-item"
                                href="#"
                            >
                                Profile
                            </a>
                        </li>

                        <li>
                            <a
                                class="dropdown-item"
                                href="#"
                            >
                                Settings
                            </a>
                        </li>

                        <li>
                            <hr class="dropdown-divider">
                        </li>

                        <li>
                            <a
                                class="dropdown-item"
                                href="#"
                            >
                                Logout
                            </a>
                        </li>

                    </ul>

                </div>

            </div>

        </div>
    `}function f(e=``){return`
        <div class="app-shell">

            <aside class="app-sidebar">
                ${l()}
            </aside>

            <div
                class="sidebar-overlay"
                data-sidebar-overlay
            ></div>

            <div class="app-main">

                <header class="app-header">
                    ${d()}
                </header>

                <main class="app-content">
                    ${e}
                </main>

                <footer class="app-footer">
                    <div class="footer-inner">
                        <span>© 2026 StockFlow</span>
                        <span>Simple Inventory</span>
                    </div>
                </footer>

            </div>

        </div>
    `}function p(){let e=document.querySelector(`.app-sidebar`),t=document.querySelector(`[data-sidebar-toggle]`),n=document.querySelector(`[data-sidebar-overlay]`);if(!e||!t||!n)return;let r=()=>{e.classList.add(`is-open`),n.classList.add(`is-visible`),t.setAttribute(`aria-expanded`,`true`),document.body.classList.add(`sidebar-open`)},i=()=>{e.classList.remove(`is-open`),n.classList.remove(`is-visible`),t.setAttribute(`aria-expanded`,`false`),document.body.classList.remove(`sidebar-open`)};t.addEventListener(`click`,r),n.addEventListener(`click`,i),e.querySelectorAll(`.sidebar-link`).forEach(e=>{e.addEventListener(`click`,i)}),window.addEventListener(`resize`,()=>{window.innerWidth>767.98&&i()})}function m(e){return e+.5|0}var h=(e,t,n)=>Math.max(Math.min(e,n),t);function g(e){return h(m(e*2.55),0,255)}function _(e){return h(m(e*255),0,255)}function v(e){return h(m(e/2.55)/100,0,1)}function y(e){return h(m(e*100),0,100)}var b={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},x=[...`0123456789ABCDEF`],S=e=>x[e&15],C=e=>x[(e&240)>>4]+x[e&15],w=e=>(e&240)>>4==(e&15),T=e=>w(e.r)&&w(e.g)&&w(e.b)&&w(e.a);function E(e){var t=e.length,n;return e[0]===`#`&&(t===4||t===5?n={r:255&b[e[1]]*17,g:255&b[e[2]]*17,b:255&b[e[3]]*17,a:t===5?b[e[4]]*17:255}:(t===7||t===9)&&(n={r:b[e[1]]<<4|b[e[2]],g:b[e[3]]<<4|b[e[4]],b:b[e[5]]<<4|b[e[6]],a:t===9?b[e[7]]<<4|b[e[8]]:255})),n}var D=(e,t)=>e<255?t(e):``;function ee(e){var t=T(e)?S:C;return e?`#`+t(e.r)+t(e.g)+t(e.b)+D(e.a,t):void 0}var te=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function ne(e,t,n){let r=t*Math.min(n,1-n),i=(t,i=(t+e/30)%12)=>n-r*Math.max(Math.min(i-3,9-i,1),-1);return[i(0),i(8),i(4)]}function re(e,t,n){let r=(r,i=(r+e/60)%6)=>n-n*t*Math.max(Math.min(i,4-i,1),0);return[r(5),r(3),r(1)]}function ie(e,t,n){let r=ne(e,1,.5),i;for(t+n>1&&(i=1/(t+n),t*=i,n*=i),i=0;i<3;i++)r[i]*=1-t-n,r[i]+=t;return r}function ae(e,t,n,r,i){return e===i?(t-n)/r+(t<n?6:0):t===i?(n-e)/r+2:(e-t)/r+4}function oe(e){let t=e.r/255,n=e.g/255,r=e.b/255,i=Math.max(t,n,r),a=Math.min(t,n,r),o=(i+a)/2,s,c,l;return i!==a&&(l=i-a,c=o>.5?l/(2-i-a):l/(i+a),s=ae(t,n,r,l,i),s=s*60+.5),[s|0,c||0,o]}function O(e,t,n,r){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,r)).map(_)}function se(e,t,n){return O(ne,e,t,n)}function ce(e,t,n){return O(ie,e,t,n)}function le(e,t,n){return O(re,e,t,n)}function ue(e){return(e%360+360)%360}function de(e){let t=te.exec(e),n=255,r;if(!t)return;t[5]!==r&&(n=t[6]?g(+t[5]):_(+t[5]));let i=ue(+t[2]),a=t[3]/100,o=t[4]/100;return r=t[1]===`hwb`?ce(i,a,o):t[1]===`hsv`?le(i,a,o):se(i,a,o),{r:r[0],g:r[1],b:r[2],a:n}}function fe(e,t){var n=oe(e);n[0]=ue(n[0]+t),n=se(n),e.r=n[0],e.g=n[1],e.b=n[2]}function pe(e){if(!e)return;let t=oe(e),n=t[0],r=y(t[1]),i=y(t[2]);return e.a<255?`hsla(${n}, ${r}%, ${i}%, ${v(e.a)})`:`hsl(${n}, ${r}%, ${i}%)`}var k={x:`dark`,Z:`light`,Y:`re`,X:`blu`,W:`gr`,V:`medium`,U:`slate`,A:`ee`,T:`ol`,S:`or`,B:`ra`,C:`lateg`,D:`ights`,R:`in`,Q:`turquois`,E:`hi`,P:`ro`,O:`al`,N:`le`,M:`de`,L:`yello`,F:`en`,K:`ch`,G:`arks`,H:`ea`,I:`ightg`,J:`wh`},me={OiceXe:`f0f8ff`,antiquewEte:`faebd7`,aqua:`ffff`,aquamarRe:`7fffd4`,azuY:`f0ffff`,beige:`f5f5dc`,bisque:`ffe4c4`,black:`0`,blanKedOmond:`ffebcd`,Xe:`ff`,XeviTet:`8a2be2`,bPwn:`a52a2a`,burlywood:`deb887`,caMtXe:`5f9ea0`,KartYuse:`7fff00`,KocTate:`d2691e`,cSO:`ff7f50`,cSnflowerXe:`6495ed`,cSnsilk:`fff8dc`,crimson:`dc143c`,cyan:`ffff`,xXe:`8b`,xcyan:`8b8b`,xgTMnPd:`b8860b`,xWay:`a9a9a9`,xgYF:`6400`,xgYy:`a9a9a9`,xkhaki:`bdb76b`,xmagFta:`8b008b`,xTivegYF:`556b2f`,xSange:`ff8c00`,xScEd:`9932cc`,xYd:`8b0000`,xsOmon:`e9967a`,xsHgYF:`8fbc8f`,xUXe:`483d8b`,xUWay:`2f4f4f`,xUgYy:`2f4f4f`,xQe:`ced1`,xviTet:`9400d3`,dAppRk:`ff1493`,dApskyXe:`bfff`,dimWay:`696969`,dimgYy:`696969`,dodgerXe:`1e90ff`,fiYbrick:`b22222`,flSOwEte:`fffaf0`,foYstWAn:`228b22`,fuKsia:`ff00ff`,gaRsbSo:`dcdcdc`,ghostwEte:`f8f8ff`,gTd:`ffd700`,gTMnPd:`daa520`,Way:`808080`,gYF:`8000`,gYFLw:`adff2f`,gYy:`808080`,honeyMw:`f0fff0`,hotpRk:`ff69b4`,RdianYd:`cd5c5c`,Rdigo:`4b0082`,ivSy:`fffff0`,khaki:`f0e68c`,lavFMr:`e6e6fa`,lavFMrXsh:`fff0f5`,lawngYF:`7cfc00`,NmoncEffon:`fffacd`,ZXe:`add8e6`,ZcSO:`f08080`,Zcyan:`e0ffff`,ZgTMnPdLw:`fafad2`,ZWay:`d3d3d3`,ZgYF:`90ee90`,ZgYy:`d3d3d3`,ZpRk:`ffb6c1`,ZsOmon:`ffa07a`,ZsHgYF:`20b2aa`,ZskyXe:`87cefa`,ZUWay:`778899`,ZUgYy:`778899`,ZstAlXe:`b0c4de`,ZLw:`ffffe0`,lime:`ff00`,limegYF:`32cd32`,lRF:`faf0e6`,magFta:`ff00ff`,maPon:`800000`,VaquamarRe:`66cdaa`,VXe:`cd`,VScEd:`ba55d3`,VpurpN:`9370db`,VsHgYF:`3cb371`,VUXe:`7b68ee`,VsprRggYF:`fa9a`,VQe:`48d1cc`,VviTetYd:`c71585`,midnightXe:`191970`,mRtcYam:`f5fffa`,mistyPse:`ffe4e1`,moccasR:`ffe4b5`,navajowEte:`ffdead`,navy:`80`,Tdlace:`fdf5e6`,Tive:`808000`,TivedBb:`6b8e23`,Sange:`ffa500`,SangeYd:`ff4500`,ScEd:`da70d6`,pOegTMnPd:`eee8aa`,pOegYF:`98fb98`,pOeQe:`afeeee`,pOeviTetYd:`db7093`,papayawEp:`ffefd5`,pHKpuff:`ffdab9`,peru:`cd853f`,pRk:`ffc0cb`,plum:`dda0dd`,powMrXe:`b0e0e6`,purpN:`800080`,YbeccapurpN:`663399`,Yd:`ff0000`,Psybrown:`bc8f8f`,PyOXe:`4169e1`,saddNbPwn:`8b4513`,sOmon:`fa8072`,sandybPwn:`f4a460`,sHgYF:`2e8b57`,sHshell:`fff5ee`,siFna:`a0522d`,silver:`c0c0c0`,skyXe:`87ceeb`,UXe:`6a5acd`,UWay:`708090`,UgYy:`708090`,snow:`fffafa`,sprRggYF:`ff7f`,stAlXe:`4682b4`,tan:`d2b48c`,teO:`8080`,tEstN:`d8bfd8`,tomato:`ff6347`,Qe:`40e0d0`,viTet:`ee82ee`,JHt:`f5deb3`,wEte:`ffffff`,wEtesmoke:`f5f5f5`,Lw:`ffff00`,LwgYF:`9acd32`};function he(){let e={},t=Object.keys(me),n=Object.keys(k),r,i,a,o,s;for(r=0;r<t.length;r++){for(o=s=t[r],i=0;i<n.length;i++)a=n[i],s=s.replace(a,k[a]);a=parseInt(me[o],16),e[s]=[a>>16&255,a>>8&255,a&255]}return e}var ge;function _e(e){ge||(ge=he(),ge.transparent=[0,0,0,0]);let t=ge[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}var ve=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function ye(e){let t=ve.exec(e),n=255,r,i,a;if(t){if(t[7]!==r){let e=+t[7];n=t[8]?g(e):h(e*255,0,255)}return r=+t[1],i=+t[3],a=+t[5],r=255&(t[2]?g(r):h(r,0,255)),i=255&(t[4]?g(i):h(i,0,255)),a=255&(t[6]?g(a):h(a,0,255)),{r,g:i,b:a,a:n}}}function be(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${v(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}var xe=e=>e<=.0031308?e*12.92:e**(1/2.4)*1.055-.055,Se=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function Ce(e,t,n){let r=Se(v(e.r)),i=Se(v(e.g)),a=Se(v(e.b));return{r:_(xe(r+n*(Se(v(t.r))-r))),g:_(xe(i+n*(Se(v(t.g))-i))),b:_(xe(a+n*(Se(v(t.b))-a))),a:e.a+n*(t.a-e.a)}}function we(e,t,n){if(e){let r=oe(e);r[t]=Math.max(0,Math.min(r[t]+r[t]*n,t===0?360:1)),r=se(r),e.r=r[0],e.g=r[1],e.b=r[2]}}function Te(e,t){return e&&Object.assign(t||{},e)}function Ee(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=_(e[3]))):(t=Te(e,{r:0,g:0,b:0,a:1}),t.a=_(t.a)),t}function De(e){return e.charAt(0)===`r`?ye(e):de(e)}var Oe=class e{constructor(t){if(t instanceof e)return t;let n=typeof t,r;n===`object`?r=Ee(t):n===`string`&&(r=E(t)||_e(t)||De(t)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var e=Te(this._rgb);return e&&(e.a=v(e.a)),e}set rgb(e){this._rgb=Ee(e)}rgbString(){return this._valid?be(this._rgb):void 0}hexString(){return this._valid?ee(this._rgb):void 0}hslString(){return this._valid?pe(this._rgb):void 0}mix(e,t){if(e){let n=this.rgb,r=e.rgb,i,a=t===i?.5:t,o=2*a-1,s=n.a-r.a,c=((o*s===-1?o:(o+s)/(1+o*s))+1)/2;i=1-c,n.r=255&c*n.r+i*r.r+.5,n.g=255&c*n.g+i*r.g+.5,n.b=255&c*n.b+i*r.b+.5,n.a=a*n.a+(1-a)*r.a,this.rgb=n}return this}interpolate(e,t){return e&&(this._rgb=Ce(this._rgb,e._rgb,t)),this}clone(){return new e(this.rgb)}alpha(e){return this._rgb.a=_(e),this}clearer(e){let t=this._rgb;return t.a*=1-e,this}greyscale(){let e=this._rgb;return e.r=e.g=e.b=m(e.r*.3+e.g*.59+e.b*.11),this}opaquer(e){let t=this._rgb;return t.a*=1+e,this}negate(){let e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return we(this._rgb,2,e),this}darken(e){return we(this._rgb,2,-e),this}saturate(e){return we(this._rgb,1,e),this}desaturate(e){return we(this._rgb,1,-e),this}rotate(e){return fe(this._rgb,e),this}};function ke(){}var Ae=(()=>{let e=0;return()=>e++})();function A(e){return e==null}function j(e){if(Array.isArray&&Array.isArray(e))return!0;let t=Object.prototype.toString.call(e);return t.slice(0,7)===`[object`&&t.slice(-6)===`Array]`}function M(e){return e!==null&&Object.prototype.toString.call(e)===`[object Object]`}function N(e){return(typeof e==`number`||e instanceof Number)&&isFinite(+e)}function je(e,t){return N(e)?e:t}function P(e,t){return e===void 0?t:e}var Me=(e,t)=>typeof e==`string`&&e.endsWith(`%`)?parseFloat(e)/100:+e/t,Ne=(e,t)=>typeof e==`string`&&e.endsWith(`%`)?parseFloat(e)/100*t:+e;function F(e,t,n){if(e&&typeof e.call==`function`)return e.apply(n,t)}function I(e,t,n,r){let i,a,o;if(j(e)){if(a=e.length,r)for(i=a-1;i>=0;i--)t.call(n,e[i],i);else for(i=0;i<a;i++)t.call(n,e[i],i)}else if(M(e))for(o=Object.keys(e),a=o.length,i=0;i<a;i++)t.call(n,e[o[i]],o[i])}function Pe(e,t){let n,r,i,a;if(!e||!t||e.length!==t.length)return!1;for(n=0,r=e.length;n<r;++n)if(i=e[n],a=t[n],i.datasetIndex!==a.datasetIndex||i.index!==a.index)return!1;return!0}function Fe(e){if(j(e))return e.map(Fe);if(M(e)){let t=Object.create(null),n=Object.keys(e),r=n.length,i=0;for(;i<r;++i)t[n[i]]=Fe(e[n[i]]);return t}return e}function Ie(e){return[`__proto__`,`prototype`,`constructor`].indexOf(e)===-1}function Le(e,t,n,r){if(!Ie(e))return;let i=t[e],a=n[e];M(i)&&M(a)?Re(i,a,r):t[e]=Fe(a)}function Re(e,t,n){let r=j(t)?t:[t],i=r.length;if(!M(e))return e;n||={};let a=n.merger||Le,o;for(let t=0;t<i;++t){if(o=r[t],!M(o))continue;let i=Object.keys(o);for(let t=0,r=i.length;t<r;++t)a(i[t],e,o,n)}return e}function ze(e,t){return Re(e,t,{merger:Be})}function Be(e,t,n){if(!Ie(e))return;let r=t[e],i=n[e];M(r)&&M(i)?ze(r,i):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=Fe(i))}var Ve={"":e=>e,x:e=>e.x,y:e=>e.y};function He(e){let t=e.split(`.`),n=[],r=``;for(let e of t)r+=e,r.endsWith(`\\`)?r=r.slice(0,-1)+`.`:(n.push(r),r=``);return n}function Ue(e){let t=He(e);return e=>{for(let n of t){if(n===``)break;e&&=e[n]}return e}}function We(e,t){return(Ve[t]||(Ve[t]=Ue(t)))(e)}function Ge(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Ke=e=>e!==void 0,qe=e=>typeof e==`function`,Je=(e,t)=>{if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0};function Ye(e){return e.type===`mouseup`||e.type===`click`||e.type===`contextmenu`}var L=Math.PI,R=2*L,Xe=R+L,Ze=1/0,Qe=L/180,z=L/2,$e=L/4,et=L*2/3,B=Math.log10,V=Math.sign;function H(e,t,n){return Math.abs(e-t)<n}function tt(e){let t=Math.round(e);e=H(e,t,e/1e3)?t:e;let n=10**Math.floor(B(e)),r=e/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function nt(e){let t=[],n=Math.sqrt(e),r=1;for(;r<n;r++)e%r===0&&(t.push(r),t.push(e/r));return n===(n|0)&&t.push(n),t.sort((e,t)=>e-t).pop(),t}function rt(e){return typeof e==`symbol`||typeof e==`object`&&!!e&&!(Symbol.toPrimitive in e||`toString`in e||`valueOf`in e)}function it(e){return!rt(e)&&!isNaN(parseFloat(e))&&isFinite(e)}function at(e,t){let n=Math.round(e);return n-t<=e&&n+t>=e}function ot(e,t,n){let r,i,a;for(r=0,i=e.length;r<i;r++)a=e[r][n],isNaN(a)||(t.min=Math.min(t.min,a),t.max=Math.max(t.max,a))}function st(e){return L/180*e}function ct(e){return 180/L*e}function lt(e){if(!N(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function ut(e,t){let n=t.x-e.x,r=t.y-e.y,i=Math.sqrt(n*n+r*r),a=Math.atan2(r,n);return a<-.5*L&&(a+=R),{angle:a,distance:i}}function dt(e,t){return Math.sqrt((t.x-e.x)**2+(t.y-e.y)**2)}function ft(e,t){return(e-t+Xe)%R-L}function U(e){return(e%R+R)%R}function pt(e,t,n,r){let i=U(e),a=U(t),o=U(n),s=U(a-i),c=U(o-i),l=U(i-a),u=U(i-o);return i===a||i===o||r&&a===o||s>c&&l<u}function W(e,t,n){return Math.max(t,Math.min(n,e))}function mt(e){return W(e,-32768,32767)}function ht(e,t,n,r=1e-6){return e>=Math.min(t,n)-r&&e<=Math.max(t,n)+r}function gt(e,t,n){n||=(n=>e[n]<t);let r=e.length-1,i=0,a;for(;r-i>1;)a=i+r>>1,n(a)?i=a:r=a;return{lo:i,hi:r}}var _t=(e,t,n,r)=>gt(e,n,r?r=>{let i=e[r][t];return i<n||i===n&&e[r+1][t]===n}:r=>e[r][t]<n),vt=(e,t,n)=>gt(e,n,r=>e[r][t]>=n);function yt(e,t,n){let r=0,i=e.length;for(;r<i&&e[r]<t;)r++;for(;i>r&&e[i-1]>n;)i--;return r>0||i<e.length?e.slice(r,i):e}var bt=[`push`,`pop`,`shift`,`splice`,`unshift`];function xt(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),bt.forEach(t=>{let n=`_onData`+Ge(t),r=e[t];Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value(...t){let i=r.apply(this,t);return e._chartjs.listeners.forEach(e=>{typeof e[n]==`function`&&e[n](...t)}),i}})})}function St(e,t){let n=e._chartjs;if(!n)return;let r=n.listeners,i=r.indexOf(t);i!==-1&&r.splice(i,1),!(r.length>0)&&(bt.forEach(t=>{delete e[t]}),delete e._chartjs)}function Ct(e){let t=new Set(e);return t.size===e.length?e:Array.from(t)}var wt=function(){return typeof window>`u`?function(e){return e()}:window.requestAnimationFrame}();function Tt(e,t){let n=[],r=!1;return function(...i){n=i,r||(r=!0,wt.call(window,()=>{r=!1,e.apply(t,n)}))}}function Et(e,t){let n;return function(...r){return t?(clearTimeout(n),n=setTimeout(e,t,r)):e.apply(this,r),t}}var Dt=e=>e===`start`?`left`:e===`end`?`right`:`center`,G=(e,t,n)=>e===`start`?t:e===`end`?n:(t+n)/2,Ot=(e,t,n,r)=>e===(r?`left`:`right`)?n:e===`center`?(t+n)/2:t;function kt(e,t,n){let r=t.length,i=0,a=r;if(e._sorted){let{iScale:o,vScale:s,_parsed:c}=e,l=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null,u=o.axis,{min:d,max:f,minDefined:p,maxDefined:m}=o.getUserBounds();if(p){if(i=Math.min(_t(c,u,d).lo,n?r:_t(t,u,o.getPixelForValue(d)).lo),l){let e=c.slice(0,i+1).reverse().findIndex(e=>!A(e[s.axis]));i-=Math.max(0,e)}i=W(i,0,r-1)}if(m){let e=Math.max(_t(c,o.axis,f,!0).hi+1,n?0:_t(t,u,o.getPixelForValue(f),!0).hi+1);if(l){let t=c.slice(e-1).findIndex(e=>!A(e[s.axis]));e+=Math.max(0,t)}a=W(e,i,r)-i}else a=r-i}return{start:i,count:a}}function At(e){let{xScale:t,yScale:n,_scaleRanges:r}=e,i={xmin:t.min,xmax:t.max,ymin:n.min,ymax:n.max};if(!r)return e._scaleRanges=i,!0;let a=r.xmin!==t.min||r.xmax!==t.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,i),a}var jt=e=>e===0||e===1,Mt=(e,t,n)=>-(2**(10*--e)*Math.sin((e-t)*R/n)),Nt=(e,t,n)=>2**(-10*e)*Math.sin((e-t)*R/n)+1,Pt={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-(--e*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>--e*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*z)+1,easeOutSine:e=>Math.sin(e*z),easeInOutSine:e=>-.5*(Math.cos(L*e)-1),easeInExpo:e=>e===0?0:2**(10*(e-1)),easeOutExpo:e=>e===1?1:-(2**(-10*e))+1,easeInOutExpo:e=>jt(e)?e:e<.5?.5*2**(10*(e*2-1)):.5*(-(2**(-10*(e*2-1)))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1- --e*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>jt(e)?e:Mt(e,.075,.3),easeOutElastic:e=>jt(e)?e:Nt(e,.075,.3),easeInOutElastic(e){let t=.1125,n=.45;return jt(e)?e:e<.5?.5*Mt(e*2,t,n):.5+.5*Nt(e*2-1,t,n)},easeInBack(e){return e*e*(2.70158*e-1.70158)},easeOutBack(e){return--e*e*(2.70158*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-Pt.easeOutBounce(1-e),easeOutBounce(e){let t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},easeInOutBounce:e=>e<.5?Pt.easeInBounce(e*2)*.5:Pt.easeOutBounce(e*2-1)*.5+.5};function Ft(e){if(e&&typeof e==`object`){let t=e.toString();return t===`[object CanvasPattern]`||t===`[object CanvasGradient]`}return!1}function It(e){return Ft(e)?e:new Oe(e)}function Lt(e){return Ft(e)?e:new Oe(e).saturate(.5).darken(.1).hexString()}var Rt=[`x`,`y`,`borderWidth`,`radius`,`tension`],zt=[`color`,`borderColor`,`backgroundColor`];function Bt(e){e.set(`animation`,{delay:void 0,duration:1e3,easing:`easeOutQuart`,fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe(`animation`,{_fallback:!1,_indexable:!1,_scriptable:e=>e!==`onProgress`&&e!==`onComplete`&&e!==`fn`}),e.set(`animations`,{colors:{type:`color`,properties:zt},numbers:{type:`number`,properties:Rt}}),e.describe(`animations`,{_fallback:`animation`}),e.set(`transitions`,{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:`transparent`},visible:{type:`boolean`,duration:0}}},hide:{animations:{colors:{to:`transparent`},visible:{type:`boolean`,easing:`linear`,fn:e=>e|0}}}})}function Vt(e){e.set(`layout`,{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}var Ht=new Map;function Ut(e,t){t||={};let n=e+JSON.stringify(t),r=Ht.get(n);return r||(r=new Intl.NumberFormat(e,t),Ht.set(n,r)),r}function Wt(e,t,n){return Ut(t,n).format(e)}var Gt={values(e){return j(e)?e:``+e},numeric(e,t,n){if(e===0)return`0`;let r=this.chart.options.locale,i,a=e;if(n.length>1){let t=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(t<1e-4||t>0x38d7ea4c68000)&&(i=`scientific`),a=Kt(e,n)}let o=B(Math.abs(a)),s=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:i,minimumFractionDigits:s,maximumFractionDigits:s};return Object.assign(c,this.options.ticks.format),Wt(e,r,c)},logarithmic(e,t,n){if(e===0)return`0`;let r=n[t].significand||e/10**Math.floor(B(e));return[1,2,3,5,10,15].includes(r)||t>.8*n.length?Gt.numeric.call(this,e,t,n):``}};function Kt(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var qt={formatters:Gt};function Jt(e){e.set(`scale`,{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:`ticks`,clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,t)=>t.lineWidth,tickColor:(e,t)=>t.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:``,padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:``,padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:qt.formatters.values,minor:{},major:{},align:`center`,crossAlign:`near`,showLabelBackdrop:!1,backdropColor:`rgba(255, 255, 255, 0.75)`,backdropPadding:2}}),e.route(`scale.ticks`,`color`,``,`color`),e.route(`scale.grid`,`color`,``,`borderColor`),e.route(`scale.border`,`color`,``,`borderColor`),e.route(`scale.title`,`color`,``,`color`),e.describe(`scale`,{_fallback:!1,_scriptable:e=>!e.startsWith(`before`)&&!e.startsWith(`after`)&&e!==`callback`&&e!==`parser`,_indexable:e=>e!==`borderDash`&&e!==`tickBorderDash`&&e!==`dash`}),e.describe(`scales`,{_fallback:`scale`}),e.describe(`scale.ticks`,{_scriptable:e=>e!==`backdropPadding`&&e!==`callback`,_indexable:e=>e!==`backdropPadding`})}var Yt=Object.create(null),Xt=Object.create(null);function Zt(e,t){if(!t)return e;let n=t.split(`.`);for(let t=0,r=n.length;t<r;++t){let r=n[t];e=e[r]||(e[r]=Object.create(null))}return e}function Qt(e,t,n){return typeof t==`string`?Re(Zt(e,t),n):Re(Zt(e,``),t)}var K=new class{constructor(e,t){this.animation=void 0,this.backgroundColor=`rgba(0,0,0,0.1)`,this.borderColor=`rgba(0,0,0,0.1)`,this.color=`#666`,this.datasets={},this.devicePixelRatio=e=>e.chart.platform.getDevicePixelRatio(),this.elements={},this.events=[`mousemove`,`mouseout`,`click`,`touchstart`,`touchmove`],this.font={family:`'Helvetica Neue', 'Helvetica', 'Arial', sans-serif`,size:12,style:`normal`,lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(e,t)=>Lt(t.backgroundColor),this.hoverBorderColor=(e,t)=>Lt(t.borderColor),this.hoverColor=(e,t)=>Lt(t.color),this.indexAxis=`x`,this.interaction={mode:`nearest`,intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(t)}set(e,t){return Qt(this,e,t)}get(e){return Zt(this,e)}describe(e,t){return Qt(Xt,e,t)}override(e,t){return Qt(Yt,e,t)}route(e,t,n,r){let i=Zt(this,e),a=Zt(this,n),o=`_`+t;Object.defineProperties(i,{[o]:{value:i[t],writable:!0},[t]:{enumerable:!0,get(){let e=this[o],t=a[r];return M(e)?Object.assign({},t,e):P(e,t)},set(e){this[o]=e}}})}apply(e){e.forEach(e=>e(this))}}({_scriptable:e=>!e.startsWith(`on`),_indexable:e=>e!==`events`,hover:{_fallback:`interaction`},interaction:{_scriptable:!1,_indexable:!1}},[Bt,Vt,Jt]);function $t(e){return!e||A(e.size)||A(e.family)?null:(e.style?e.style+` `:``)+(e.weight?e.weight+` `:``)+e.size+`px `+e.family}function en(e,t,n,r,i){let a=t[i];return a||(a=t[i]=e.measureText(i).width,n.push(i)),a>r&&(r=a),r}function tn(e,t,n,r){r||={};let i=r.data=r.data||{},a=r.garbageCollect=r.garbageCollect||[];r.font!==t&&(i=r.data={},a=r.garbageCollect=[],r.font=t),e.save(),e.font=t;let o=0,s=n.length,c,l,u,d,f;for(c=0;c<s;c++)if(d=n[c],d!=null&&!j(d))o=en(e,i,a,o,d);else if(j(d))for(l=0,u=d.length;l<u;l++)f=d[l],f!=null&&!j(f)&&(o=en(e,i,a,o,f));e.restore();let p=a.length/2;if(p>n.length){for(c=0;c<p;c++)delete i[a[c]];a.splice(0,p)}return o}function nn(e,t,n){let r=e.currentDevicePixelRatio,i=n===0?0:Math.max(n/2,.5);return Math.round((t-i)*r)/r+i}function rn(e,t){(t||e)&&(t||=e.getContext(`2d`),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function an(e,t,n,r){on(e,t,n,r,null)}function on(e,t,n,r,i){let a,o,s,c,l,u,d,f,p=t.pointStyle,m=t.rotation,h=t.radius,g=(m||0)*Qe;if(p&&typeof p==`object`&&(a=p.toString(),a===`[object HTMLImageElement]`||a===`[object HTMLCanvasElement]`)){e.save(),e.translate(n,r),e.rotate(g),e.drawImage(p,-p.width/2,-p.height/2,p.width,p.height),e.restore();return}if(!(isNaN(h)||h<=0)){switch(e.beginPath(),p){default:i?e.ellipse(n,r,i/2,h,0,0,R):e.arc(n,r,h,0,R),e.closePath();break;case`triangle`:u=i?i/2:h,e.moveTo(n+Math.sin(g)*u,r-Math.cos(g)*h),g+=et,e.lineTo(n+Math.sin(g)*u,r-Math.cos(g)*h),g+=et,e.lineTo(n+Math.sin(g)*u,r-Math.cos(g)*h),e.closePath();break;case`rectRounded`:l=h*.516,c=h-l,o=Math.cos(g+$e)*c,d=Math.cos(g+$e)*(i?i/2-l:c),s=Math.sin(g+$e)*c,f=Math.sin(g+$e)*(i?i/2-l:c),e.arc(n-d,r-s,l,g-L,g-z),e.arc(n+f,r-o,l,g-z,g),e.arc(n+d,r+s,l,g,g+z),e.arc(n-f,r+o,l,g+z,g+L),e.closePath();break;case`rect`:if(!m){c=Math.SQRT1_2*h,u=i?i/2:c,e.rect(n-u,r-c,2*u,2*c);break}g+=$e;case`rectRot`:d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+f,r-o),e.lineTo(n+d,r+s),e.lineTo(n-f,r+o),e.closePath();break;case`crossRot`:g+=$e;case`cross`:d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+f,r-o),e.lineTo(n-f,r+o);break;case`star`:d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+f,r-o),e.lineTo(n-f,r+o),g+=$e,d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+f,r-o),e.lineTo(n-f,r+o);break;case`line`:o=i?i/2:Math.cos(g)*h,s=Math.sin(g)*h,e.moveTo(n-o,r-s),e.lineTo(n+o,r+s);break;case`dash`:e.moveTo(n,r),e.lineTo(n+Math.cos(g)*(i?i/2:h),r+Math.sin(g)*h);break;case!1:e.closePath()}e.fill(),t.borderWidth>0&&e.stroke()}}function sn(e,t,n){return n||=.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function cn(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function ln(e){e.restore()}function un(e,t,n,r,i){if(!t)return e.lineTo(n.x,n.y);if(i===`middle`){let r=(t.x+n.x)/2;e.lineTo(r,t.y),e.lineTo(r,n.y)}else i===`after`==!!r?e.lineTo(n.x,t.y):e.lineTo(t.x,n.y);e.lineTo(n.x,n.y)}function dn(e,t,n,r){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(r?t.cp1x:t.cp2x,r?t.cp1y:t.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function fn(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),A(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function pn(e,t,n,r,i){if(i.strikethrough||i.underline){let a=e.measureText(r),o=t-a.actualBoundingBoxLeft,s=t+a.actualBoundingBoxRight,c=n-a.actualBoundingBoxAscent,l=n+a.actualBoundingBoxDescent,u=i.strikethrough?(c+l)/2:l;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=i.decorationWidth||2,e.moveTo(o,u),e.lineTo(s,u),e.stroke()}}function mn(e,t){let n=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=n}function hn(e,t,n,r,i,a={}){let o=j(t)?t:[t],s=a.strokeWidth>0&&a.strokeColor!==``,c,l;for(e.save(),e.font=i.string,fn(e,a),c=0;c<o.length;++c)l=o[c],a.backdrop&&mn(e,a.backdrop),s&&(a.strokeColor&&(e.strokeStyle=a.strokeColor),A(a.strokeWidth)||(e.lineWidth=a.strokeWidth),e.strokeText(l,n,r,a.maxWidth)),e.fillText(l,n,r,a.maxWidth),pn(e,n,r,l,a),r+=Number(i.lineHeight);e.restore()}function gn(e,t){let{x:n,y:r,w:i,h:a,radius:o}=t;e.arc(n+o.topLeft,r+o.topLeft,o.topLeft,1.5*L,L,!0),e.lineTo(n,r+a-o.bottomLeft),e.arc(n+o.bottomLeft,r+a-o.bottomLeft,o.bottomLeft,L,z,!0),e.lineTo(n+i-o.bottomRight,r+a),e.arc(n+i-o.bottomRight,r+a-o.bottomRight,o.bottomRight,z,0,!0),e.lineTo(n+i,r+o.topRight),e.arc(n+i-o.topRight,r+o.topRight,o.topRight,0,-z,!0),e.lineTo(n+o.topLeft,r)}var _n=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,vn=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function yn(e,t){let n=(``+e).match(_n);if(!n||n[1]===`normal`)return t*1.2;switch(e=+n[2],n[3]){case`px`:return e;case`%`:e/=100}return t*e}var bn=e=>+e||0;function xn(e,t){let n={},r=M(t),i=r?Object.keys(t):t,a=M(e)?r?n=>P(e[n],e[t[n]]):t=>e[t]:()=>e;for(let e of i)n[e]=bn(a(e));return n}function Sn(e){return xn(e,{top:`y`,right:`x`,bottom:`y`,left:`x`})}function Cn(e){return xn(e,[`topLeft`,`topRight`,`bottomLeft`,`bottomRight`])}function q(e){let t=Sn(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function J(e,t){e||={},t||=K.font;let n=P(e.size,t.size);typeof n==`string`&&(n=parseInt(n,10));let r=P(e.style,t.style);r&&!(``+r).match(vn)&&(console.warn(`Invalid font style specified: "`+r+`"`),r=void 0);let i={family:P(e.family,t.family),lineHeight:yn(P(e.lineHeight,t.lineHeight),n),size:n,style:r,weight:P(e.weight,t.weight),string:``};return i.string=$t(i),i}function wn(e,t,n,r){let i=!0,a,o,s;for(a=0,o=e.length;a<o;++a)if(s=e[a],s!==void 0&&(t!==void 0&&typeof s==`function`&&(s=s(t),i=!1),n!==void 0&&j(s)&&(s=s[n%s.length],i=!1),s!==void 0))return r&&!i&&(r.cacheable=!1),s}function Tn(e,t,n){let{min:r,max:i}=e,a=Ne(t,(i-r)/2),o=(e,t)=>n&&e===0?0:e+t;return{min:o(r,-Math.abs(a)),max:o(i,a)}}function En(e,t){return Object.assign(Object.create(e),t)}function Dn(e,t=[``],n,r,i=()=>e[0]){let a=n||e;return r===void 0&&(r=Un(`_fallback`,e)),new Proxy({[Symbol.toStringTag]:`Object`,_cacheable:!0,_scopes:e,_rootScopes:a,_fallback:r,_getTarget:i,override:n=>Dn([n,...e],t,a,r)},{deleteProperty(t,n){return delete t[n],delete t._keys,delete e[0][n],!0},get(n,r){return Mn(n,r,()=>Hn(r,t,e,n))},getOwnPropertyDescriptor(e,t){return Reflect.getOwnPropertyDescriptor(e._scopes[0],t)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(e,t){return Wn(e).includes(t)},ownKeys(e){return Wn(e)},set(e,t,n){let r=e._storage||=i();return e[t]=r[t]=n,delete e._keys,!0}})}function On(e,t,n,r){let i={_cacheable:!1,_proxy:e,_context:t,_subProxy:n,_stack:new Set,_descriptors:kn(e,r),setContext:t=>On(e,t,n,r),override:i=>On(e.override(i),t,n,r)};return new Proxy(i,{deleteProperty(t,n){return delete t[n],delete e[n],!0},get(e,t,n){return Mn(e,t,()=>Nn(e,t,n))},getOwnPropertyDescriptor(t,n){return t._descriptors.allKeys?Reflect.has(e,n)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,n)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(t,n){return Reflect.has(e,n)},ownKeys(){return Reflect.ownKeys(e)},set(t,n,r){return e[n]=r,delete t[n],!0}})}function kn(e,t={scriptable:!0,indexable:!0}){let{_scriptable:n=t.scriptable,_indexable:r=t.indexable,_allKeys:i=t.allKeys}=e;return{allKeys:i,scriptable:n,indexable:r,isScriptable:qe(n)?n:()=>n,isIndexable:qe(r)?r:()=>r}}var An=(e,t)=>e?e+Ge(t):t,jn=(e,t)=>M(t)&&e!==`adapters`&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Mn(e,t,n){if(Object.prototype.hasOwnProperty.call(e,t)||t===`constructor`)return e[t];let r=n();return e[t]=r,r}function Nn(e,t,n){let{_proxy:r,_context:i,_subProxy:a,_descriptors:o}=e,s=r[t];return qe(s)&&o.isScriptable(t)&&(s=Pn(t,s,e,n)),j(s)&&s.length&&(s=Fn(t,s,e,o.isIndexable)),jn(t,s)&&(s=On(s,i,a&&a[t],o)),s}function Pn(e,t,n,r){let{_proxy:i,_context:a,_subProxy:o,_stack:s}=n;if(s.has(e))throw Error(`Recursion detected: `+Array.from(s).join(`->`)+`->`+e);s.add(e);let c=t(a,o||r);return s.delete(e),jn(e,c)&&(c=zn(i._scopes,i,e,c)),c}function Fn(e,t,n,r){let{_proxy:i,_context:a,_subProxy:o,_descriptors:s}=n;if(a.index!==void 0&&r(e))return t[a.index%t.length];if(M(t[0])){let n=t,r=i._scopes.filter(e=>e!==n);t=[];for(let c of n){let n=zn(r,i,e,c);t.push(On(n,a,o&&o[e],s))}}return t}function In(e,t,n){return qe(e)?e(t,n):e}var Ln=(e,t)=>e===!0?t:typeof e==`string`?We(t,e):void 0;function Rn(e,t,n,r,i){for(let a of t){let t=Ln(n,a);if(t){e.add(t);let a=In(t._fallback,n,i);if(a!==void 0&&a!==n&&a!==r)return a}else if(t===!1&&r!==void 0&&n!==r)return null}return!1}function zn(e,t,n,r){let i=t._rootScopes,a=In(t._fallback,n,r),o=[...e,...i],s=new Set;s.add(r);let c=Bn(s,o,n,a||n,r);return c===null||a!==void 0&&a!==n&&(c=Bn(s,o,a,c,r),c===null)?!1:Dn(Array.from(s),[``],i,a,()=>Vn(t,n,r))}function Bn(e,t,n,r,i){for(;n;)n=Rn(e,t,n,r,i);return n}function Vn(e,t,n){let r=e._getTarget();t in r||(r[t]={});let i=r[t];return j(i)&&M(n)?n:i||{}}function Hn(e,t,n,r){let i;for(let a of t)if(i=Un(An(a,e),n),i!==void 0)return jn(e,i)?zn(n,r,e,i):i}function Un(e,t){for(let n of t){if(!n)continue;let t=n[e];if(t!==void 0)return t}}function Wn(e){let t=e._keys;return t||=e._keys=Gn(e._scopes),t}function Gn(e){let t=new Set;for(let n of e)for(let e of Object.keys(n).filter(e=>!e.startsWith(`_`)))t.add(e);return Array.from(t)}function Kn(e,t,n,r){let{iScale:i}=e,{key:a=`r`}=this._parsing,o=Array(r),s,c,l,u;for(s=0,c=r;s<c;++s)l=s+n,u=t[l],o[s]={r:i.parse(We(u,a),l)};return o}var qn=2**-52||1e-14,Jn=(e,t)=>t<e.length&&!e[t].skip&&e[t],Yn=e=>e===`x`?`y`:`x`;function Xn(e,t,n,r){let i=e.skip?t:e,a=t,o=n.skip?t:n,s=dt(a,i),c=dt(o,a),l=s/(s+c),u=c/(s+c);l=isNaN(l)?0:l,u=isNaN(u)?0:u;let d=r*l,f=r*u;return{previous:{x:a.x-d*(o.x-i.x),y:a.y-d*(o.y-i.y)},next:{x:a.x+f*(o.x-i.x),y:a.y+f*(o.y-i.y)}}}function Zn(e,t,n){let r=e.length,i,a,o,s,c,l=Jn(e,0);for(let u=0;u<r-1;++u)if(c=l,l=Jn(e,u+1),c&&l){if(H(t[u],0,qn)){n[u]=n[u+1]=0;continue}i=n[u]/t[u],a=n[u+1]/t[u],s=i**2+a**2,!(s<=9)&&(o=3/Math.sqrt(s),n[u]=i*o*t[u],n[u+1]=a*o*t[u])}}function Qn(e,t,n=`x`){let r=Yn(n),i=e.length,a,o,s,c=Jn(e,0);for(let l=0;l<i;++l){if(o=s,s=c,c=Jn(e,l+1),!s)continue;let i=s[n],u=s[r];o&&(a=(i-o[n])/3,s[`cp1${n}`]=i-a,s[`cp1${r}`]=u-a*t[l]),c&&(a=(c[n]-i)/3,s[`cp2${n}`]=i+a,s[`cp2${r}`]=u+a*t[l])}}function $n(e,t=`x`){let n=Yn(t),r=e.length,i=Array(r).fill(0),a=Array(r),o,s,c,l=Jn(e,0);for(o=0;o<r;++o)if(s=c,c=l,l=Jn(e,o+1),c){if(l){let e=l[t]-c[t];i[o]=e===0?0:(l[n]-c[n])/e}a[o]=s?l?V(i[o-1])===V(i[o])?(i[o-1]+i[o])/2:0:i[o-1]:i[o]}Zn(e,i,a),Qn(e,a,t)}function er(e,t,n){return Math.max(Math.min(e,n),t)}function tr(e,t){let n,r,i,a,o,s=sn(e[0],t);for(n=0,r=e.length;n<r;++n)o=a,a=s,s=n<r-1&&sn(e[n+1],t),a&&(i=e[n],o&&(i.cp1x=er(i.cp1x,t.left,t.right),i.cp1y=er(i.cp1y,t.top,t.bottom)),s&&(i.cp2x=er(i.cp2x,t.left,t.right),i.cp2y=er(i.cp2y,t.top,t.bottom)))}function nr(e,t,n,r,i){let a,o,s,c;if(t.spanGaps&&(e=e.filter(e=>!e.skip)),t.cubicInterpolationMode===`monotone`)$n(e,i);else{let n=r?e[e.length-1]:e[0];for(a=0,o=e.length;a<o;++a)s=e[a],c=Xn(n,s,e[Math.min(a+1,o-+!r)%o],t.tension),s.cp1x=c.previous.x,s.cp1y=c.previous.y,s.cp2x=c.next.x,s.cp2y=c.next.y,n=s}t.capBezierPoints&&tr(e,n)}function rr(){return typeof window<`u`&&typeof document<`u`}function ir(e){let t=e.parentNode;return t&&t.toString()===`[object ShadowRoot]`&&(t=t.host),t}function ar(e,t,n){let r;return typeof e==`string`?(r=parseInt(e,10),e.indexOf(`%`)!==-1&&(r=r/100*t.parentNode[n])):r=e,r}var or=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function sr(e,t){return or(e).getPropertyValue(t)}var cr=[`top`,`right`,`bottom`,`left`];function lr(e,t,n){let r={};n=n?`-`+n:``;for(let i=0;i<4;i++){let a=cr[i];r[a]=parseFloat(e[t+`-`+a+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}var ur=(e,t,n)=>(e>0||t>0)&&(!n||!n.shadowRoot);function dr(e,t){let n=e.touches,r=n&&n.length?n[0]:e,{offsetX:i,offsetY:a}=r,o=!1,s,c;if(ur(i,a,e.target))s=i,c=a;else{let e=t.getBoundingClientRect();s=r.clientX-e.left,c=r.clientY-e.top,o=!0}return{x:s,y:c,box:o}}function fr(e,t){if(`native`in e)return e;let{canvas:n,currentDevicePixelRatio:r}=t,i=or(n),a=i.boxSizing===`border-box`,o=lr(i,`padding`),s=lr(i,`border`,`width`),{x:c,y:l,box:u}=dr(e,n),d=o.left+(u&&s.left),f=o.top+(u&&s.top),{width:p,height:m}=t;return a&&(p-=o.width+s.width,m-=o.height+s.height),{x:Math.round((c-d)/p*n.width/r),y:Math.round((l-f)/m*n.height/r)}}function pr(e,t,n){let r,i;if(t===void 0||n===void 0){let a=e&&ir(e);if(!a)t=e.clientWidth,n=e.clientHeight;else{let e=a.getBoundingClientRect(),o=or(a),s=lr(o,`border`,`width`),c=lr(o,`padding`);t=e.width-c.width-s.width,n=e.height-c.height-s.height,r=ar(o.maxWidth,a,`clientWidth`),i=ar(o.maxHeight,a,`clientHeight`)}}return{width:t,height:n,maxWidth:r||Ze,maxHeight:i||Ze}}var mr=e=>Math.round(e*10)/10;function hr(e,t,n,r){let i=or(e),a=lr(i,`margin`),o=ar(i.maxWidth,e,`clientWidth`)||Ze,s=ar(i.maxHeight,e,`clientHeight`)||Ze,c=pr(e,t,n),{width:l,height:u}=c;if(i.boxSizing===`content-box`){let e=lr(i,`border`,`width`),t=lr(i,`padding`);l-=t.width+e.width,u-=t.height+e.height}return l=Math.max(0,l-a.width),u=Math.max(0,r?l/r:u-a.height),l=mr(Math.min(l,o,c.maxWidth)),u=mr(Math.min(u,s,c.maxHeight)),l&&!u&&(u=mr(l/2)),(t!==void 0||n!==void 0)&&r&&c.height&&u>c.height&&(u=c.height,l=mr(Math.floor(u*r))),{width:l,height:u}}function gr(e,t,n){let r=t||1,i=mr(e.height*r),a=mr(e.width*r);e.height=mr(e.height),e.width=mr(e.width);let o=e.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${e.height}px`,o.style.width=`${e.width}px`),e.currentDevicePixelRatio!==r||o.height!==i||o.width!==a?(e.currentDevicePixelRatio=r,o.height=i,o.width=a,e.ctx.setTransform(r,0,0,r,0,0),!0):!1}var _r=function(){let e=!1;try{let t={get passive(){return e=!0,!1}};rr()&&(window.addEventListener(`test`,null,t),window.removeEventListener(`test`,null,t))}catch{}return e}();function vr(e,t){let n=sr(e,t),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function yr(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function br(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:r===`middle`?n<.5?e.y:t.y:r===`after`?n<1?e.y:t.y:n>0?t.y:e.y}}function xr(e,t,n,r){let i={x:e.cp2x,y:e.cp2y},a={x:t.cp1x,y:t.cp1y},o=yr(e,i,n),s=yr(i,a,n),c=yr(a,t,n);return yr(yr(o,s,n),yr(s,c,n),n)}var Sr=function(e,t){return{x(n){return e+e+t-n},setWidth(e){t=e},textAlign(e){return e===`center`?e:e===`right`?`left`:`right`},xPlus(e,t){return e-t},leftForLtr(e,t){return e-t}}},Cr=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function wr(e,t,n){return e?Sr(t,n):Cr()}function Tr(e,t){let n,r;(t===`ltr`||t===`rtl`)&&(n=e.canvas.style,r=[n.getPropertyValue(`direction`),n.getPropertyPriority(`direction`)],n.setProperty(`direction`,t,`important`),e.prevTextDirection=r)}function Er(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty(`direction`,t[0],t[1]))}function Dr(e){return e===`angle`?{between:pt,compare:ft,normalize:U}:{between:ht,compare:(e,t)=>e-t,normalize:e=>e}}function Or({start:e,end:t,count:n,loop:r,style:i}){return{start:e%n,end:t%n,loop:r&&(t-e+1)%n===0,style:i}}function kr(e,t,n){let{property:r,start:i,end:a}=n,{between:o,normalize:s}=Dr(r),c=t.length,{start:l,end:u,loop:d}=e,f,p;if(d){for(l+=c,u+=c,f=0,p=c;f<p&&o(s(t[l%c][r]),i,a);++f)l--,u--;l%=c,u%=c}return u<l&&(u+=c),{start:l,end:u,loop:d,style:e.style}}function Ar(e,t,n){if(!n)return[e];let{property:r,start:i,end:a}=n,o=t.length,{compare:s,between:c,normalize:l}=Dr(r),{start:u,end:d,loop:f,style:p}=kr(e,t,n),m=[],h=!1,g=null,_,v,y,b=()=>c(i,y,_)&&s(i,y)!==0,x=()=>s(a,_)===0||c(a,y,_),S=()=>h||b(),C=()=>!h||x();for(let e=u,n=u;e<=d;++e)v=t[e%o],!v.skip&&(_=l(v[r]),_!==y&&(h=c(_,i,a),g===null&&S()&&(g=s(_,i)===0?e:n),g!==null&&C()&&(m.push(Or({start:g,end:e,loop:f,count:o,style:p})),g=null),n=e,y=_));return g!==null&&m.push(Or({start:g,end:d,loop:f,count:o,style:p})),m}function jr(e,t){let n=[],r=e.segments;for(let i=0;i<r.length;i++){let a=Ar(r[i],e.points,t);a.length&&n.push(...a)}return n}function Mr(e,t,n,r){let i=0,a=t-1;if(n&&!r)for(;i<t&&!e[i].skip;)i++;for(;i<t&&e[i].skip;)i++;for(i%=t,n&&(a+=i);a>i&&e[a%t].skip;)a--;return a%=t,{start:i,end:a}}function Nr(e,t,n,r){let i=e.length,a=[],o=t,s=e[t],c;for(c=t+1;c<=n;++c){let n=e[c%i];n.skip||n.stop?s.skip||(r=!1,a.push({start:t%i,end:(c-1)%i,loop:r}),t=o=n.stop?c:null):(o=c,s.skip&&(t=c)),s=n}return o!==null&&a.push({start:t%i,end:o%i,loop:r}),a}function Pr(e,t){let n=e.points,r=e.options.spanGaps,i=n.length;if(!i)return[];let a=!!e._loop,{start:o,end:s}=Mr(n,i,a,r);return r===!0?Fr(e,[{start:o,end:s,loop:a}],n,t):Fr(e,Nr(n,o,s<o?s+i:s,!!e._fullLoop&&o===0&&s===i-1),n,t)}function Fr(e,t,n,r){return!r||!r.setContext||!n?t:Ir(e,t,n,r)}function Ir(e,t,n,r){let i=e._chart.getContext(),a=Lr(e.options),{_datasetIndex:o,options:{spanGaps:s}}=e,c=n.length,l=[],u=a,d=t[0].start,f=d;function p(e,t,r,i){let a=s?-1:1;if(e!==t){for(e+=c;n[e%c].skip;)e-=a;for(;n[t%c].skip;)t+=a;e%c!==t%c&&(l.push({start:e%c,end:t%c,loop:r,style:i}),u=i,d=t%c)}}for(let e of t){d=s?d:e.start;let t=n[d%c],a;for(f=d+1;f<=e.end;f++){let s=n[f%c];a=Lr(r.setContext(En(i,{type:`segment`,p0:t,p1:s,p0DataIndex:(f-1)%c,p1DataIndex:f%c,datasetIndex:o}))),Rr(a,u)&&p(d,f-1,e.loop,u),t=s,u=a}d<f-1&&p(d,f-1,e.loop,u)}return l}function Lr(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function Rr(e,t){if(!t)return!1;let n=[],r=function(e,t){return Ft(t)?(n.includes(t)||n.push(t),n.indexOf(t)):t};return JSON.stringify(e,r)!==JSON.stringify(t,r)}function zr(e,t,n){return e.options.clip?e[n]:t[n]}function Br(e,t){let{xScale:n,yScale:r}=e;return n&&r?{left:zr(n,t,`left`),right:zr(n,t,`right`),top:zr(r,t,`top`),bottom:zr(r,t,`bottom`)}:t}function Vr(e,t){let n=t._clip;if(n.disabled)return!1;let r=Br(t,e.chartArea);return{left:n.left===!1?0:r.left-(n.left===!0?0:n.left),right:n.right===!1?e.width:r.right+(n.right===!0?0:n.right),top:n.top===!1?0:r.top-(n.top===!0?0:n.top),bottom:n.bottom===!1?e.height:r.bottom+(n.bottom===!0?0:n.bottom)}}var Hr=new class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,t,n,r){let i=t.listeners[r],a=t.duration;i.forEach(r=>r({chart:e,initial:t.initial,numSteps:a,currentStep:Math.min(n-t.start,a)}))}_refresh(){this._request||=(this._running=!0,wt.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let t=0;this._charts.forEach((n,r)=>{if(!n.running||!n.items.length)return;let i=n.items,a=i.length-1,o=!1,s;for(;a>=0;--a)s=i[a],s._active?(s._total>n.duration&&(n.duration=s._total),s.tick(e),o=!0):(i[a]=i[i.length-1],i.pop());o&&(r.draw(),this._notify(r,n,e,`progress`)),i.length||(n.running=!1,this._notify(r,n,e,`complete`),n.initial=!1),t+=i.length}),this._lastDate=e,t===0&&(this._running=!1)}_getAnims(e){let t=this._charts,n=t.get(e);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},t.set(e,n)),n}listen(e,t,n){this._getAnims(e).listeners[t].push(n)}add(e,t){t&&t.length&&this._getAnims(e).items.push(...t)}has(e){return this._getAnims(e).items.length>0}start(e){let t=this._charts.get(e);t&&(t.running=!0,t.start=Date.now(),t.duration=t.items.reduce((e,t)=>Math.max(e,t._duration),0),this._refresh())}running(e){if(!this._running)return!1;let t=this._charts.get(e);return!(!t||!t.running||!t.items.length)}stop(e){let t=this._charts.get(e);if(!t||!t.items.length)return;let n=t.items,r=n.length-1;for(;r>=0;--r)n[r].cancel();t.items=[],this._notify(e,t,Date.now(),`complete`)}remove(e){return this._charts.delete(e)}},Ur=`transparent`,Wr={boolean(e,t,n){return n>.5?t:e},color(e,t,n){let r=It(e||Ur),i=r.valid&&It(t||Ur);return i&&i.valid?i.mix(r,n).hexString():t},number(e,t,n){return e+(t-e)*n}},Gr=class{constructor(e,t,n,r){let i=t[n];r=wn([e.to,r,i,e.from]);let a=wn([e.from,i,r]);this._active=!0,this._fn=e.fn||Wr[e.type||typeof a],this._easing=Pt[e.easing]||Pt.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=t,this._prop=n,this._from=a,this._to=r,this._promises=void 0}active(){return this._active}update(e,t,n){if(this._active){this._notify(!1);let r=this._target[this._prop],i=n-this._start,a=this._duration-i;this._start=n,this._duration=Math.floor(Math.max(a,e.duration)),this._total+=i,this._loop=!!e.loop,this._to=wn([e.to,t,r,e.from]),this._from=wn([e.from,r,t])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){let t=e-this._start,n=this._duration,r=this._prop,i=this._from,a=this._loop,o=this._to,s;if(this._active=i!==o&&(a||t<n),!this._active){this._target[r]=o,this._notify(!0);return}if(t<0){this._target[r]=i;return}s=t/n%2,s=a&&s>1?2-s:s,s=this._easing(Math.min(1,Math.max(0,s))),this._target[r]=this._fn(i,o,s)}wait(){let e=this._promises||=[];return new Promise((t,n)=>{e.push({res:t,rej:n})})}_notify(e){let t=e?`res`:`rej`,n=this._promises||[];for(let e=0;e<n.length;e++)n[e][t]()}},Kr=class{constructor(e,t){this._chart=e,this._properties=new Map,this.configure(t)}configure(e){if(!M(e))return;let t=Object.keys(K.animation),n=this._properties;Object.getOwnPropertyNames(e).forEach(r=>{let i=e[r];if(!M(i))return;let a={};for(let e of t)a[e]=i[e];(j(i.properties)&&i.properties||[r]).forEach(e=>{(e===r||!n.has(e))&&n.set(e,a)})})}_animateOptions(e,t){let n=t.options,r=Jr(e,n);if(!r)return[];let i=this._createAnimations(r,n);return n.$shared&&qr(e.options.$animations,n).then(()=>{e.options=n},()=>{}),i}_createAnimations(e,t){let n=this._properties,r=[],i=e.$animations||={},a=Object.keys(t),o=Date.now(),s;for(s=a.length-1;s>=0;--s){let c=a[s];if(c.charAt(0)===`$`)continue;if(c===`options`){r.push(...this._animateOptions(e,t));continue}let l=t[c],u=i[c],d=n.get(c);if(u){if(d&&u.active()){u.update(d,l,o);continue}u.cancel()}if(!d||!d.duration){e[c]=l;continue}i[c]=u=new Gr(d,e,c,l),r.push(u)}return r}update(e,t){if(this._properties.size===0){Object.assign(e,t);return}let n=this._createAnimations(e,t);if(n.length)return Hr.add(this._chart,n),!0}};function qr(e,t){let n=[],r=Object.keys(t);for(let t=0;t<r.length;t++){let i=e[r[t]];i&&i.active()&&n.push(i.wait())}return Promise.all(n)}function Jr(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function Yr(e,t){let n=e&&e.options||{},r=n.reverse,i=n.min===void 0?t:0,a=n.max===void 0?t:0;return{start:r?a:i,end:r?i:a}}function Xr(e,t,n){if(n===!1)return!1;let r=Yr(e,n),i=Yr(t,n);return{top:i.end,right:r.end,bottom:i.start,left:r.start}}function Zr(e){let t,n,r,i;return M(e)?(t=e.top,n=e.right,r=e.bottom,i=e.left):t=n=r=i=e,{top:t,right:n,bottom:r,left:i,disabled:e===!1}}function Qr(e,t){let n=[],r=e._getSortedDatasetMetas(t),i,a;for(i=0,a=r.length;i<a;++i)n.push(r[i].index);return n}function $r(e,t,n,r={}){let i=e.keys,a=r.mode===`single`,o,s,c,l;if(t===null)return;let u=!1;for(o=0,s=i.length;o<s;++o){if(c=+i[o],c===n){if(u=!0,r.all)continue;break}l=e.values[c],N(l)&&(a||t===0||V(t)===V(l))&&(t+=l)}return!u&&!r.all?0:t}function ei(e,t){let{iScale:n,vScale:r}=t,i=n.axis===`x`?`x`:`y`,a=r.axis===`x`?`x`:`y`,o=Object.keys(e),s=Array(o.length),c,l,u;for(c=0,l=o.length;c<l;++c)u=o[c],s[c]={[i]:u,[a]:e[u]};return s}function ti(e,t){let n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function ni(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function ri(e){let{min:t,max:n,minDefined:r,maxDefined:i}=e.getUserBounds();return{min:r?t:-1/0,max:i?n:1/0}}function ii(e,t,n){let r=e[t]||(e[t]={});return r[n]||(r[n]={})}function ai(e,t,n,r){for(let i of t.getMatchingVisibleMetas(r).reverse()){let t=e[i.index];if(n&&t>0||!n&&t<0)return i.index}return null}function oi(e,t){let{chart:n,_cachedMeta:r}=e,i=n._stacks||={},{iScale:a,vScale:o,index:s}=r,c=a.axis,l=o.axis,u=ni(a,o,r),d=t.length,f;for(let e=0;e<d;++e){let n=t[e],{[c]:a,[l]:d}=n,p=n._stacks||={};f=p[l]=ii(i,u,a),f[s]=d,f._top=ai(f,o,!0,r.type),f._bottom=ai(f,o,!1,r.type);let m=f._visualValues||(f._visualValues={});m[s]=d}}function si(e,t){let n=e.scales;return Object.keys(n).filter(e=>n[e].axis===t).shift()}function ci(e,t){return En(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:`default`,type:`dataset`})}function li(e,t,n){return En(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:`default`,type:`data`})}function ui(e,t){let n=e.controller.index,r=e.vScale&&e.vScale.axis;if(r){t||=e._parsed;for(let e of t){let t=e._stacks;if(!t||t[r]===void 0||t[r][n]===void 0)return;delete t[r][n],t[r]._visualValues!==void 0&&t[r]._visualValues[n]!==void 0&&delete t[r]._visualValues[n]}}}var di=e=>e===`reset`||e===`none`,fi=(e,t)=>t?e:Object.assign({},e),pi=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:Qr(n,!0),values:null},mi=class{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(e,t){this.chart=e,this._ctx=e.ctx,this.index=t,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){let e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=ti(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled(`filler`)&&console.warn(`Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options`)}updateIndex(e){this.index!==e&&ui(this._cachedMeta),this.index=e}linkScales(){let e=this.chart,t=this._cachedMeta,n=this.getDataset(),r=(e,t,n,r)=>e===`x`?t:e===`r`?r:n,i=t.xAxisID=P(n.xAxisID,si(e,`x`)),a=t.yAxisID=P(n.yAxisID,si(e,`y`)),o=t.rAxisID=P(n.rAxisID,si(e,`r`)),s=t.indexAxis,c=t.iAxisID=r(s,i,a,o),l=t.vAxisID=r(s,a,i,o);t.xScale=this.getScaleForId(i),t.yScale=this.getScaleForId(a),t.rScale=this.getScaleForId(o),t.iScale=this.getScaleForId(c),t.vScale=this.getScaleForId(l)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){let t=this._cachedMeta;return e===t.iScale?t.vScale:t.iScale}reset(){this._update(`reset`)}_destroy(){let e=this._cachedMeta;this._data&&St(this._data,this),e._stacked&&ui(e)}_dataCheck(){let e=this.getDataset(),t=e.data||=[],n=this._data;if(M(t)){let e=this._cachedMeta;this._data=ei(t,e)}else if(n!==t){if(n){St(n,this);let e=this._cachedMeta;ui(e),e._parsed=[]}t&&Object.isExtensible(t)&&xt(t,this),this._syncList=[],this._data=t}}addElements(){let e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){let t=this._cachedMeta,n=this.getDataset(),r=!1;this._dataCheck();let i=t._stacked;t._stacked=ti(t.vScale,t),t.stack!==n.stack&&(r=!0,ui(t),t.stack=n.stack),this._resyncElements(e),(r||i!==t._stacked)&&(oi(this,t._parsed),t._stacked=ti(t.vScale,t))}configure(){let e=this.chart.config,t=e.datasetScopeKeys(this._type),n=e.getOptionScopes(this.getDataset(),t,!0);this.options=e.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,t){let{_cachedMeta:n,_data:r}=this,{iScale:i,_stacked:a}=n,o=i.axis,s=e===0&&t===r.length||n._sorted,c=e>0&&n._parsed[e-1],l,u,d;if(this._parsing===!1)n._parsed=r,n._sorted=!0,d=r;else{d=j(r[e])?this.parseArrayData(n,r,e,t):M(r[e])?this.parseObjectData(n,r,e,t):this.parsePrimitiveData(n,r,e,t);let i=()=>u[o]===null||c&&u[o]<c[o];for(l=0;l<t;++l)n._parsed[l+e]=u=d[l],s&&(i()&&(s=!1),c=u);n._sorted=s}a&&oi(this,d)}parsePrimitiveData(e,t,n,r){let{iScale:i,vScale:a}=e,o=i.axis,s=a.axis,c=i.getLabels(),l=i===a,u=Array(r),d,f,p;for(d=0,f=r;d<f;++d)p=d+n,u[d]={[o]:l||i.parse(c[p],p),[s]:a.parse(t[p],p)};return u}parseArrayData(e,t,n,r){let{xScale:i,yScale:a}=e,o=Array(r),s,c,l,u;for(s=0,c=r;s<c;++s)l=s+n,u=t[l],o[s]={x:i.parse(u[0],l),y:a.parse(u[1],l)};return o}parseObjectData(e,t,n,r){let{xScale:i,yScale:a}=e,{xAxisKey:o=`x`,yAxisKey:s=`y`}=this._parsing,c=Array(r),l,u,d,f;for(l=0,u=r;l<u;++l)d=l+n,f=t[d],c[l]={x:i.parse(We(f,o),d),y:a.parse(We(f,s),d)};return c}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,t,n){let r=this.chart,i=this._cachedMeta,a=t[e.axis];return $r({keys:Qr(r,!0),values:t._stacks[e.axis]._visualValues},a,i.index,{mode:n})}updateRangeFromParsed(e,t,n,r){let i=n[t.axis],a=i===null?NaN:i,o=r&&n._stacks[t.axis];r&&o&&(r.values=o,a=$r(r,i,this._cachedMeta.index)),e.min=Math.min(e.min,a),e.max=Math.max(e.max,a)}getMinMax(e,t){let n=this._cachedMeta,r=n._parsed,i=n._sorted&&e===n.iScale,a=r.length,o=this._getOtherScale(e),s=pi(t,n,this.chart),c={min:1/0,max:-1/0},{min:l,max:u}=ri(o),d,f;function p(){f=r[d];let t=f[o.axis];return!N(f[e.axis])||l>t||u<t}for(d=0;d<a&&!(!p()&&(this.updateRangeFromParsed(c,e,f,s),i));++d);if(i){for(d=a-1;d>=0;--d)if(!p()){this.updateRangeFromParsed(c,e,f,s);break}}return c}getAllParsedValues(e){let t=this._cachedMeta._parsed,n=[],r,i,a;for(r=0,i=t.length;r<i;++r)a=t[r][e.axis],N(a)&&n.push(a);return n}getMaxOverflow(){return!1}getLabelAndValue(e){let t=this._cachedMeta,n=t.iScale,r=t.vScale,i=this.getParsed(e);return{label:n?``+n.getLabelForValue(i[n.axis]):``,value:r?``+r.getLabelForValue(i[r.axis]):``}}_update(e){let t=this._cachedMeta;this.update(e||`default`),t._clip=Zr(P(this.options.clip,Xr(t.xScale,t.yScale,this.getMaxOverflow())))}update(e){}draw(){let e=this._ctx,t=this.chart,n=this._cachedMeta,r=n.data||[],i=t.chartArea,a=[],o=this._drawStart||0,s=this._drawCount||r.length-o,c=this.options.drawActiveElementsOnTop,l;for(n.dataset&&n.dataset.draw(e,i,o,s),l=o;l<o+s;++l){let t=r[l];t.hidden||(t.active&&c?a.push(t):t.draw(e,i))}for(l=0;l<a.length;++l)a[l].draw(e,i)}getStyle(e,t){let n=t?`active`:`default`;return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(e||0,n)}getContext(e,t,n){let r=this.getDataset(),i;if(e>=0&&e<this._cachedMeta.data.length){let t=this._cachedMeta.data[e];i=t.$context||=li(this.getContext(),e,t),i.parsed=this.getParsed(e),i.raw=r.data[e],i.index=i.dataIndex=e}else i=this.$context||=ci(this.chart.getContext(),this.index),i.dataset=r,i.index=i.datasetIndex=this.index;return i.active=!!t,i.mode=n,i}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,t){return this._resolveElementOptions(this.dataElementType.id,t,e)}_resolveElementOptions(e,t=`default`,n){let r=t===`active`,i=this._cachedDataOpts,a=e+`-`+t,o=i[a],s=this.enableOptionSharing&&Ke(n);if(o)return fi(o,s);let c=this.chart.config,l=c.datasetElementScopeKeys(this._type,e),u=r?[`${e}Hover`,`hover`,e,``]:[e,``],d=c.getOptionScopes(this.getDataset(),l),f=Object.keys(K.elements[e]),p=c.resolveNamedOptions(d,f,()=>this.getContext(n,r,t),u);return p.$shared&&(p.$shared=s,i[a]=Object.freeze(fi(p,s))),p}_resolveAnimations(e,t,n){let r=this.chart,i=this._cachedDataOpts,a=`animation-${t}`,o=i[a];if(o)return o;let s;if(r.options.animation!==!1){let r=this.chart.config,i=r.datasetAnimationScopeKeys(this._type,t),a=r.getOptionScopes(this.getDataset(),i);s=r.createResolver(a,this.getContext(e,n,t))}let c=new Kr(r,s&&s.animations);return s&&s._cacheable&&(i[a]=Object.freeze(c)),c}getSharedOptions(e){if(e.$shared)return this._sharedOptions||=Object.assign({},e)}includeOptions(e,t){return!t||di(e)||this.chart._animationsDisabled}_getSharedOptions(e,t){let n=this.resolveDataElementOptions(e,t),r=this._sharedOptions,i=this.getSharedOptions(n),a=this.includeOptions(t,i)||i!==r;return this.updateSharedOptions(i,t,n),{sharedOptions:i,includeOptions:a}}updateElement(e,t,n,r){di(r)?Object.assign(e,n):this._resolveAnimations(t,r).update(e,n)}updateSharedOptions(e,t,n){e&&!di(t)&&this._resolveAnimations(void 0,t).update(e,n)}_setStyle(e,t,n,r){e.active=r;let i=this.getStyle(t,r);this._resolveAnimations(t,n,r).update(e,{options:!r&&this.getSharedOptions(i)||i})}removeHoverStyle(e,t,n){this._setStyle(e,n,`active`,!1)}setHoverStyle(e,t,n){this._setStyle(e,n,`active`,!0)}_removeDatasetHoverStyle(){let e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,`active`,!1)}_setDatasetHoverStyle(){let e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,`active`,!0)}_resyncElements(e){let t=this._data,n=this._cachedMeta.data;for(let[e,t,n]of this._syncList)this[e](t,n);this._syncList=[];let r=n.length,i=t.length,a=Math.min(i,r);a&&this.parse(0,a),i>r?this._insertElements(r,i-r,e):i<r&&this._removeElements(i,r-i)}_insertElements(e,t,n=!0){let r=this._cachedMeta,i=r.data,a=e+t,o,s=e=>{for(e.length+=t,o=e.length-1;o>=a;o--)e[o]=e[o-t]};for(s(i),o=e;o<a;++o)i[o]=new this.dataElementType;this._parsing&&s(r._parsed),this.parse(e,t),n&&this.updateElements(i,e,t,`reset`)}updateElements(e,t,n,r){}_removeElements(e,t){let n=this._cachedMeta;if(this._parsing){let r=n._parsed.splice(e,t);n._stacked&&ui(n,r)}n.data.splice(e,t)}_sync(e){if(this._parsing)this._syncList.push(e);else{let[t,n,r]=e;this[t](n,r)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){let e=arguments.length;this._sync([`_insertElements`,this.getDataset().data.length-e,e])}_onDataPop(){this._sync([`_removeElements`,this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync([`_removeElements`,0,1])}_onDataSplice(e,t){t&&this._sync([`_removeElements`,e,t]);let n=arguments.length-2;n&&this._sync([`_insertElements`,e,n])}_onDataUnshift(){this._sync([`_insertElements`,0,arguments.length])}};function hi(e,t){if(!e._cache.$bar){let n=e.getMatchingVisibleMetas(t),r=[];for(let t=0,i=n.length;t<i;t++)r=r.concat(n[t].controller.getAllParsedValues(e));e._cache.$bar=Ct(r.sort((e,t)=>e-t))}return e._cache.$bar}function gi(e){let t=e.iScale,n=hi(t,e.type),r=t._length,i,a,o,s,c=()=>{o!==32767&&o!==-32768&&(Ke(s)&&(r=Math.min(r,Math.abs(o-s)||r)),s=o)};for(i=0,a=n.length;i<a;++i)o=t.getPixelForValue(n[i]),c();for(s=void 0,i=0,a=t.ticks.length;i<a;++i)o=t.getPixelForTick(i),c();return r}function _i(e,t,n,r){let i=n.barThickness,a,o;return A(i)?(a=t.min*n.categoryPercentage,o=n.barPercentage):(a=i*r,o=1),{chunk:a/r,ratio:o,start:t.pixels[e]-a/2}}function vi(e,t,n,r){let i=t.pixels,a=i[e],o=e>0?i[e-1]:null,s=e<i.length-1?i[e+1]:null,c=n.categoryPercentage;o===null&&(o=a-(s===null?t.end-t.start:s-a)),s===null&&(s=a+a-o);let l=a-(a-Math.min(o,s))/2*c;return{chunk:Math.abs(s-o)/2*c/r,ratio:n.barPercentage,start:l}}function yi(e,t,n,r){let i=n.parse(e[0],r),a=n.parse(e[1],r),o=Math.min(i,a),s=Math.max(i,a),c=o,l=s;Math.abs(o)>Math.abs(s)&&(c=s,l=o),t[n.axis]=l,t._custom={barStart:c,barEnd:l,start:i,end:a,min:o,max:s}}function bi(e,t,n,r){return j(e)?yi(e,t,n,r):t[n.axis]=n.parse(e,r),t}function xi(e,t,n,r){let i=e.iScale,a=e.vScale,o=i.getLabels(),s=i===a,c=[],l,u,d,f;for(l=n,u=n+r;l<u;++l)f=t[l],d={},d[i.axis]=s||i.parse(o[l],l),c.push(bi(f,d,a,l));return c}function Si(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function Ci(e,t,n){return e===0?(t.isHorizontal()?1:-1)*(t.min>=n?1:-1):V(e)}function wi(e){let t,n,r,i,a;return e.horizontal?(t=e.base>e.x,n=`left`,r=`right`):(t=e.base<e.y,n=`bottom`,r=`top`),t?(i=`end`,a=`start`):(i=`start`,a=`end`),{start:n,end:r,reverse:t,top:i,bottom:a}}function Ti(e,t,n,r){let i=t.borderSkipped,a={};if(!i){e.borderSkipped=a;return}if(i===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}let{start:o,end:s,reverse:c,top:l,bottom:u}=wi(e);i===`middle`&&n&&(e.enableBorderRadius=!0,(n._top||0)===r?i=l:(n._bottom||0)===r?i=u:(a[Ei(u,o,s,c)]=!0,i=l)),a[Ei(i,o,s,c)]=!0,e.borderSkipped=a}function Ei(e,t,n,r){return r?(e=Di(e,t,n),e=Oi(e,n,t)):e=Oi(e,t,n),e}function Di(e,t,n){return e===t?n:e===n?t:e}function Oi(e,t,n){return e===`start`?t:e===`end`?n:e}function ki(e,{inflateAmount:t},n){e.inflateAmount=t===`auto`?n===1?.33:0:t}var Ai=class extends mi{static id=`bar`;static defaults={datasetElementType:!1,dataElementType:`bar`,categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:`number`,properties:[`x`,`y`,`base`,`width`,`height`]}}};static overrides={scales:{_index_:{type:`category`,offset:!0,grid:{offset:!0}},_value_:{type:`linear`,beginAtZero:!0}}};parsePrimitiveData(e,t,n,r){return xi(e,t,n,r)}parseArrayData(e,t,n,r){return xi(e,t,n,r)}parseObjectData(e,t,n,r){let{iScale:i,vScale:a}=e,{xAxisKey:o=`x`,yAxisKey:s=`y`}=this._parsing,c=i.axis===`x`?o:s,l=a.axis===`x`?o:s,u=[],d,f,p,m;for(d=n,f=n+r;d<f;++d)m=t[d],p={},p[i.axis]=i.parse(We(m,c),d),u.push(bi(We(m,l),p,a,d));return u}updateRangeFromParsed(e,t,n,r){super.updateRangeFromParsed(e,t,n,r);let i=n._custom;i&&t===this._cachedMeta.vScale&&(e.min=Math.min(e.min,i.min),e.max=Math.max(e.max,i.max))}getMaxOverflow(){return 0}getLabelAndValue(e){let{iScale:t,vScale:n}=this._cachedMeta,r=this.getParsed(e),i=r._custom,a=Si(i)?`[`+i.start+`, `+i.end+`]`:``+n.getLabelForValue(r[n.axis]);return{label:``+t.getLabelForValue(r[t.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();let e=this._cachedMeta;e.stack=this.getDataset().stack}update(e){let t=this._cachedMeta;this.updateElements(t.data,0,t.data.length,e)}updateElements(e,t,n,r){let i=r===`reset`,{index:a,_cachedMeta:{vScale:o}}=this,s=o.getBasePixel(),c=o.isHorizontal(),l=this._getRuler(),{sharedOptions:u,includeOptions:d}=this._getSharedOptions(t,r);for(let f=t;f<t+n;f++){let t=this.getParsed(f),n=i||A(t[o.axis])?{base:s,head:s}:this._calculateBarValuePixels(f),p=this._calculateBarIndexPixels(f,l),m=(t._stacks||{})[o.axis],h={horizontal:c,base:n.base,enableBorderRadius:!m||Si(t._custom)||a===m._top||a===m._bottom,x:c?n.head:p.center,y:c?p.center:n.head,height:c?p.size:Math.abs(n.size),width:c?Math.abs(n.size):p.size};d&&(h.options=u||this.resolveDataElementOptions(f,e[f].active?`active`:r));let g=h.options||e[f].options;Ti(h,g,m,a),ki(h,g,l.ratio),this.updateElement(e[f],f,h,r)}}_getStacks(e,t){let{iScale:n}=this._cachedMeta,r=n.getMatchingVisibleMetas(this._type).filter(e=>e.controller.options.grouped),i=n.options.stacked,a=[],o=this._cachedMeta.controller.getParsed(t),s=o&&o[n.axis],c=e=>{let t=e._parsed.find(e=>e[n.axis]===s),r=t&&t[e.vScale.axis];if(A(r)||isNaN(r))return!0};for(let n of r)if(!(t!==void 0&&c(n))&&((i===!1||a.indexOf(n.stack)===-1||i===void 0&&n.stack===void 0)&&a.push(n.stack),n.index===e))break;return a.length||a.push(void 0),a}_getStackCount(e){return this._getStacks(void 0,e).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){let e=this.chart.scales,t=this.chart.options.indexAxis;return Object.keys(e).filter(n=>e[n].axis===t).shift()}_getAxis(){let e={},t=this.getFirstScaleIdForIndexAxis();for(let n of this.chart.data.datasets)e[P(this.chart.options.indexAxis===`x`?n.xAxisID:n.yAxisID,t)]=!0;return Object.keys(e)}_getStackIndex(e,t,n){let r=this._getStacks(e,n),i=t===void 0?-1:r.indexOf(t);return i===-1?r.length-1:i}_getRuler(){let e=this.options,t=this._cachedMeta,n=t.iScale,r=[],i,a;for(i=0,a=t.data.length;i<a;++i)r.push(n.getPixelForValue(this.getParsed(i)[n.axis],i));let o=e.barThickness;return{min:o||gi(t),pixels:r,start:n._startPixel,end:n._endPixel,stackCount:this._getStackCount(),scale:n,grouped:e.grouped,ratio:o?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(e){let{_cachedMeta:{vScale:t,_stacked:n,index:r},options:{base:i,minBarLength:a}}=this,o=i||0,s=this.getParsed(e),c=s._custom,l=Si(c),u=s[t.axis],d=0,f=n?this.applyStack(t,s,n):u,p,m;f!==u&&(d=f-u,f=u),l&&(u=c.barStart,f=c.barEnd-c.barStart,u!==0&&V(u)!==V(c.barEnd)&&(d=0),d+=u);let h=!A(i)&&!l?i:d,g=t.getPixelForValue(h);if(p=this.chart.getDataVisibility(e)?t.getPixelForValue(d+f):g,m=p-g,Math.abs(m)<a){m=Ci(m,t,o)*a,u===o&&(g-=m/2);let e=t.getPixelForDecimal(0),i=t.getPixelForDecimal(1);g=Math.max(Math.min(g,Math.max(e,i)),Math.min(e,i)),p=g+m,n&&!l&&(s._stacks[t.axis]._visualValues[r]=t.getValueForPixel(p)-t.getValueForPixel(g))}if(g===t.getPixelForValue(o)){let e=V(m)*t.getLineWidthForValue(o)/2;g+=e,m-=e}return{size:m,base:g,head:p,center:p+m/2}}_calculateBarIndexPixels(e,t){let n=t.scale,r=this.options,i=r.skipNull,a=P(r.maxBarThickness,1/0),o,s,c=this._getAxisCount();if(t.grouped){let n=i?this._getStackCount(e):t.stackCount,l=r.barThickness===`flex`?vi(e,t,r,n*c):_i(e,t,r,n*c),u=this.chart.options.indexAxis===`x`?this.getDataset().xAxisID:this.getDataset().yAxisID,d=this._getAxis().indexOf(P(u,this.getFirstScaleIdForIndexAxis())),f=this._getStackIndex(this.index,this._cachedMeta.stack,i?e:void 0)+d;o=l.start+l.chunk*f+l.chunk/2,s=Math.min(a,l.chunk*l.ratio)}else o=n.getPixelForValue(this.getParsed(e)[n.axis],e),s=Math.min(a,t.min*t.ratio);return{base:o-s/2,head:o+s/2,center:o,size:s}}draw(){let e=this._cachedMeta,t=e.vScale,n=e.data,r=n.length,i=0;for(;i<r;++i)this.getParsed(i)[t.axis]!==null&&!n[i].hidden&&n[i].draw(this._ctx)}},ji=class extends mi{static id=`bubble`;static defaults={datasetElementType:!1,dataElementType:`point`,animations:{numbers:{type:`number`,properties:[`x`,`y`,`borderWidth`,`radius`]}}};static overrides={scales:{x:{type:`linear`},y:{type:`linear`}}};initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(e,t,n,r){let i=super.parsePrimitiveData(e,t,n,r);for(let e=0;e<i.length;e++)i[e]._custom=this.resolveDataElementOptions(e+n).radius;return i}parseArrayData(e,t,n,r){let i=super.parseArrayData(e,t,n,r);for(let e=0;e<i.length;e++){let r=t[n+e];i[e]._custom=P(r[2],this.resolveDataElementOptions(e+n).radius)}return i}parseObjectData(e,t,n,r){let i=super.parseObjectData(e,t,n,r);for(let e=0;e<i.length;e++){let r=t[n+e];i[e]._custom=P(r&&r.r&&+r.r,this.resolveDataElementOptions(e+n).radius)}return i}getMaxOverflow(){let e=this._cachedMeta.data,t=0;for(let n=e.length-1;n>=0;--n)t=Math.max(t,e[n].size(this.resolveDataElementOptions(n))/2);return t>0&&t}getLabelAndValue(e){let t=this._cachedMeta,n=this.chart.data.labels||[],{xScale:r,yScale:i}=t,a=this.getParsed(e),o=r.getLabelForValue(a.x),s=i.getLabelForValue(a.y),c=a._custom;return{label:n[e]||``,value:`(`+o+`, `+s+(c?`, `+c:``)+`)`}}update(e){let t=this._cachedMeta.data;this.updateElements(t,0,t.length,e)}updateElements(e,t,n,r){let i=r===`reset`,{iScale:a,vScale:o}=this._cachedMeta,{sharedOptions:s,includeOptions:c}=this._getSharedOptions(t,r),l=a.axis,u=o.axis;for(let d=t;d<t+n;d++){let t=e[d],n=!i&&this.getParsed(d),f={},p=f[l]=i?a.getPixelForDecimal(.5):a.getPixelForValue(n[l]),m=f[u]=i?o.getBasePixel():o.getPixelForValue(n[u]);f.skip=isNaN(p)||isNaN(m),c&&(f.options=s||this.resolveDataElementOptions(d,t.active?`active`:r),i&&(f.options.radius=0)),this.updateElement(t,d,f,r)}}resolveDataElementOptions(e,t){let n=this.getParsed(e),r=super.resolveDataElementOptions(e,t);r.$shared&&(r=Object.assign({},r,{$shared:!1}));let i=r.radius;return t!==`active`&&(r.radius=0),r.radius+=P(n&&n._custom,i),r}};function Mi(e,t,n){let r=1,i=1,a=0,o=0;if(t<R){let s=e,c=s+t,l=Math.cos(s),u=Math.sin(s),d=Math.cos(c),f=Math.sin(c),p=(e,t,r)=>pt(e,s,c,!0)?1:Math.max(t,t*n,r,r*n),m=(e,t,r)=>pt(e,s,c,!0)?-1:Math.min(t,t*n,r,r*n),h=p(0,l,d),g=p(z,u,f),_=m(L,l,d),v=m(L+z,u,f);r=(h-_)/2,i=(g-v)/2,a=-(h+_)/2,o=-(g+v)/2}return{ratioX:r,ratioY:i,offsetX:a,offsetY:o}}var Ni=class extends mi{static id=`doughnut`;static defaults={datasetElementType:!1,dataElementType:`arc`,animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:`number`,properties:[`circumference`,`endAngle`,`innerRadius`,`outerRadius`,`startAngle`,`x`,`y`,`offset`,`borderWidth`,`spacing`]}},cutout:`50%`,rotation:0,circumference:360,radius:`100%`,spacing:0,indexAxis:`r`};static descriptors={_scriptable:e=>e!==`spacing`,_indexable:e=>e!==`spacing`&&!e.startsWith(`borderDash`)&&!e.startsWith(`hoverBorderDash`)};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){let t=e.data,{labels:{pointStyle:n,textAlign:r,color:i,useBorderRadius:a,borderRadius:o}}=e.legend.options;return t.labels.length&&t.datasets.length?t.labels.map((t,s)=>{let c=e.getDatasetMeta(0).controller.getStyle(s);return{text:t,fillStyle:c.backgroundColor,fontColor:i,hidden:!e.getDataVisibility(s),lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:c.borderWidth,strokeStyle:c.borderColor,textAlign:r,pointStyle:n,borderRadius:a&&(o||c.borderRadius),index:s}}):[]}},onClick(e,t,n){n.chart.toggleDataVisibility(t.index),n.chart.update()}}}};constructor(e,t){super(e,t),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(e,t){let n=this.getDataset().data,r=this._cachedMeta;if(this._parsing===!1)r._parsed=n;else{let i=e=>+n[e];if(M(n[e])){let{key:e=`value`}=this._parsing;i=t=>+We(n[t],e)}let a,o;for(a=e,o=e+t;a<o;++a)r._parsed[a]=i(a)}}_getRotation(){return st(this.options.rotation-90)}_getCircumference(){return st(this.options.circumference)}_getRotationExtents(){let e=R,t=-R;for(let n=0;n<this.chart.data.datasets.length;++n)if(this.chart.isDatasetVisible(n)&&this.chart.getDatasetMeta(n).type===this._type){let r=this.chart.getDatasetMeta(n).controller,i=r._getRotation(),a=r._getCircumference();e=Math.min(e,i),t=Math.max(t,i+a)}return{rotation:e,circumference:t-e}}update(e){let{chartArea:t}=this.chart,n=this._cachedMeta,r=n.data,i=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(t.width,t.height)-i)/2,0),o=Math.min(Me(this.options.cutout,a),1),s=this._getRingWeight(this.index),{circumference:c,rotation:l}=this._getRotationExtents(),{ratioX:u,ratioY:d,offsetX:f,offsetY:p}=Mi(l,c,o),m=(t.width-i)/u,h=(t.height-i)/d,g=Math.max(Math.min(m,h)/2,0),_=Ne(this.options.radius,g),v=(_-Math.max(_*o,0))/this._getVisibleDatasetWeightTotal();this.offsetX=f*_,this.offsetY=p*_,n.total=this.calculateTotal(),this.outerRadius=_-v*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-v*s,0),this.updateElements(r,0,r.length,e)}_circumference(e,t){let n=this.options,r=this._cachedMeta,i=this._getCircumference();return t&&n.animation.animateRotate||!this.chart.getDataVisibility(e)||r._parsed[e]===null||r.data[e].hidden?0:this.calculateCircumference(r._parsed[e]*i/R)}updateElements(e,t,n,r){let i=r===`reset`,a=this.chart,o=a.chartArea,s=a.options.animation,c=(o.left+o.right)/2,l=(o.top+o.bottom)/2,u=i&&s.animateScale,d=u?0:this.innerRadius,f=u?0:this.outerRadius,{sharedOptions:p,includeOptions:m}=this._getSharedOptions(t,r),h=this._getRotation(),g=0;for(;g<t;++g)h+=this._circumference(g,i);for(g=t;g<t+n;++g){let t=this._circumference(g,i),n=e[g],a={x:c+this.offsetX,y:l+this.offsetY,startAngle:h,endAngle:h+t,circumference:t,outerRadius:f,innerRadius:d};m&&(a.options=p||this.resolveDataElementOptions(g,n.active?`active`:r)),h+=t,this.updateElement(n,g,a,r)}}calculateTotal(){let e=this._cachedMeta,t=e.data,n=0,r=0;for(;r<t.length;r++){let i=e._parsed[r];i!==null&&!isNaN(i)&&this.chart.getDataVisibility(r)&&!t[r].hidden&&(n+=Math.abs(i))}return n}calculateCircumference(e){let t=this._cachedMeta.total;return t>0&&!isNaN(e)?Math.abs(e)/t*R:0}getLabelAndValue(e){let t=this._cachedMeta,n=this.chart,r=n.data.labels||[],i=Wt(t._parsed[e],n.options.locale);return{label:r[e]||``,value:i}}getMaxBorderWidth(e){let t=0,n=this.chart,r,i,a,o,s;if(!e){for(r=0,i=n.data.datasets.length;r<i;++r)if(n.isDatasetVisible(r)){a=n.getDatasetMeta(r),e=a.data,o=a.controller;break}}if(!e)return 0;for(r=0,i=e.length;r<i;++r)s=o.resolveDataElementOptions(r),s.borderAlign!==`inner`&&(t=Math.max(t,s.borderWidth||0,s.hoverBorderWidth||0));return t}getMaxOffset(e){let t=0;for(let n=0,r=e.length;n<r;++n){let e=this.resolveDataElementOptions(n);t=Math.max(t,e.offset||0,e.hoverOffset||0)}return t}_getRingWeightOffset(e){let t=0;for(let n=0;n<e;++n)this.chart.isDatasetVisible(n)&&(t+=this._getRingWeight(n));return t}_getRingWeight(e){return Math.max(P(this.chart.data.datasets[e].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}},Pi=class extends mi{static id=`line`;static defaults={datasetElementType:`line`,dataElementType:`point`,showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:`category`},_value_:{type:`linear`}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){let t=this._cachedMeta,{dataset:n,data:r=[],_dataset:i}=t,a=this.chart._animationsDisabled,{start:o,count:s}=kt(t,r,a);this._drawStart=o,this._drawCount=s,At(t)&&(o=0,s=r.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!i._decimated,n.points=r;let c=this.resolveDatasetElementOptions(e);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(n,void 0,{animated:!a,options:c},e),this.updateElements(r,o,s,e)}updateElements(e,t,n,r){let i=r===`reset`,{iScale:a,vScale:o,_stacked:s,_dataset:c}=this._cachedMeta,{sharedOptions:l,includeOptions:u}=this._getSharedOptions(t,r),d=a.axis,f=o.axis,{spanGaps:p,segment:m}=this.options,h=it(p)?p:1/0,g=this.chart._animationsDisabled||i||r===`none`,_=t+n,v=e.length,y=t>0&&this.getParsed(t-1);for(let n=0;n<v;++n){let p=e[n],v=g?p:{};if(n<t||n>=_){v.skip=!0;continue}let b=this.getParsed(n),x=A(b[f]),S=v[d]=a.getPixelForValue(b[d],n),C=v[f]=i||x?o.getBasePixel():o.getPixelForValue(s?this.applyStack(o,b,s):b[f],n);v.skip=isNaN(S)||isNaN(C)||x,v.stop=n>0&&Math.abs(b[d]-y[d])>h,m&&(v.parsed=b,v.raw=c.data[n]),u&&(v.options=l||this.resolveDataElementOptions(n,p.active?`active`:r)),g||this.updateElement(p,n,v,r),y=b}}getMaxOverflow(){let e=this._cachedMeta,t=e.dataset,n=t.options&&t.options.borderWidth||0,r=e.data||[];if(!r.length)return n;let i=r[0].size(this.resolveDataElementOptions(0)),a=r[r.length-1].size(this.resolveDataElementOptions(r.length-1));return Math.max(n,i,a)/2}draw(){let e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}},Fi=class extends mi{static id=`polarArea`;static defaults={dataElementType:`arc`,animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:`number`,properties:[`x`,`y`,`startAngle`,`endAngle`,`innerRadius`,`outerRadius`]}},indexAxis:`r`,startAngle:0};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){let t=e.data;if(t.labels.length&&t.datasets.length){let{labels:{pointStyle:n,color:r}}=e.legend.options;return t.labels.map((t,i)=>{let a=e.getDatasetMeta(0).controller.getStyle(i);return{text:t,fillStyle:a.backgroundColor,strokeStyle:a.borderColor,fontColor:r,lineWidth:a.borderWidth,pointStyle:n,hidden:!e.getDataVisibility(i),index:i}})}return[]}},onClick(e,t,n){n.chart.toggleDataVisibility(t.index),n.chart.update()}}},scales:{r:{type:`radialLinear`,angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};constructor(e,t){super(e,t),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(e){let t=this._cachedMeta,n=this.chart,r=n.data.labels||[],i=Wt(t._parsed[e].r,n.options.locale);return{label:r[e]||``,value:i}}parseObjectData(e,t,n,r){return Kn.bind(this)(e,t,n,r)}update(e){let t=this._cachedMeta.data;this._updateRadius(),this.updateElements(t,0,t.length,e)}getMinMax(){let e=this._cachedMeta,t={min:1/0,max:-1/0};return e.data.forEach((e,n)=>{let r=this.getParsed(n).r;!isNaN(r)&&this.chart.getDataVisibility(n)&&(r<t.min&&(t.min=r),r>t.max&&(t.max=r))}),t}_updateRadius(){let e=this.chart,t=e.chartArea,n=e.options,r=Math.min(t.right-t.left,t.bottom-t.top),i=Math.max(r/2,0),a=(i-Math.max(n.cutoutPercentage?i/100*n.cutoutPercentage:1,0))/e.getVisibleDatasetCount();this.outerRadius=i-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(e,t,n,r){let i=r===`reset`,a=this.chart,o=a.options.animation,s=this._cachedMeta.rScale,c=s.xCenter,l=s.yCenter,u=s.getIndexAngle(0)-.5*L,d=u,f,p=360/this.countVisibleElements();for(f=0;f<t;++f)d+=this._computeAngle(f,r,p);for(f=t;f<t+n;f++){let t=e[f],n=d,m=d+this._computeAngle(f,r,p),h=a.getDataVisibility(f)?s.getDistanceFromCenterForValue(this.getParsed(f).r):0;d=m,i&&(o.animateScale&&(h=0),o.animateRotate&&(n=m=u));let g={x:c,y:l,innerRadius:0,outerRadius:h,startAngle:n,endAngle:m,options:this.resolveDataElementOptions(f,t.active?`active`:r)};this.updateElement(t,f,g,r)}}countVisibleElements(){let e=this._cachedMeta,t=0;return e.data.forEach((e,n)=>{!isNaN(this.getParsed(n).r)&&this.chart.getDataVisibility(n)&&t++}),t}_computeAngle(e,t,n){return this.chart.getDataVisibility(e)?st(this.resolveDataElementOptions(e,t).angle||n):0}},Ii=Object.freeze({__proto__:null,BarController:Ai,BubbleController:ji,DoughnutController:Ni,LineController:Pi,PieController:class extends Ni{static id=`pie`;static defaults={cutout:0,rotation:0,circumference:360,radius:`100%`}},PolarAreaController:Fi,RadarController:class extends mi{static id=`radar`;static defaults={datasetElementType:`line`,dataElementType:`point`,indexAxis:`r`,showLine:!0,elements:{line:{fill:`start`}}};static overrides={aspectRatio:1,scales:{r:{type:`radialLinear`}}};getLabelAndValue(e){let t=this._cachedMeta.vScale,n=this.getParsed(e);return{label:t.getLabels()[e],value:``+t.getLabelForValue(n[t.axis])}}parseObjectData(e,t,n,r){return Kn.bind(this)(e,t,n,r)}update(e){let t=this._cachedMeta,n=t.dataset,r=t.data||[],i=t.iScale.getLabels();if(n.points=r,e!==`resize`){let t=this.resolveDatasetElementOptions(e);this.options.showLine||(t.borderWidth=0);let a={_loop:!0,_fullLoop:i.length===r.length,options:t};this.updateElement(n,void 0,a,e)}this.updateElements(r,0,r.length,e)}updateElements(e,t,n,r){let i=this._cachedMeta.rScale,a=r===`reset`;for(let o=t;o<t+n;o++){let t=e[o],n=this.resolveDataElementOptions(o,t.active?`active`:r),s=i.getPointPositionForValue(o,this.getParsed(o).r),c=a?i.xCenter:s.x,l=a?i.yCenter:s.y,u={x:c,y:l,angle:s.angle,skip:isNaN(c)||isNaN(l),options:n};this.updateElement(t,o,u,r)}}},ScatterController:class extends mi{static id=`scatter`;static defaults={datasetElementType:!1,dataElementType:`point`,showLine:!1,fill:!1};static overrides={interaction:{mode:`point`},scales:{x:{type:`linear`},y:{type:`linear`}}};getLabelAndValue(e){let t=this._cachedMeta,n=this.chart.data.labels||[],{xScale:r,yScale:i}=t,a=this.getParsed(e),o=r.getLabelForValue(a.x),s=i.getLabelForValue(a.y);return{label:n[e]||``,value:`(`+o+`, `+s+`)`}}update(e){let t=this._cachedMeta,{data:n=[]}=t,r=this.chart._animationsDisabled,{start:i,count:a}=kt(t,n,r);if(this._drawStart=i,this._drawCount=a,At(t)&&(i=0,a=n.length),this.options.showLine){this.datasetElementType||this.addElements();let{dataset:i,_dataset:a}=t;i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!a._decimated,i.points=n;let o=this.resolveDatasetElementOptions(e);o.segment=this.options.segment,this.updateElement(i,void 0,{animated:!r,options:o},e)}else this.datasetElementType&&=(delete t.dataset,!1);this.updateElements(n,i,a,e)}addElements(){let{showLine:e}=this.options;!this.datasetElementType&&e&&(this.datasetElementType=this.chart.registry.getElement(`line`)),super.addElements()}updateElements(e,t,n,r){let i=r===`reset`,{iScale:a,vScale:o,_stacked:s,_dataset:c}=this._cachedMeta,l=this.resolveDataElementOptions(t,r),u=this.getSharedOptions(l),d=this.includeOptions(r,u),f=a.axis,p=o.axis,{spanGaps:m,segment:h}=this.options,g=it(m)?m:1/0,_=this.chart._animationsDisabled||i||r===`none`,v=t>0&&this.getParsed(t-1);for(let l=t;l<t+n;++l){let t=e[l],n=this.getParsed(l),m=_?t:{},y=A(n[p]),b=m[f]=a.getPixelForValue(n[f],l),x=m[p]=i||y?o.getBasePixel():o.getPixelForValue(s?this.applyStack(o,n,s):n[p],l);m.skip=isNaN(b)||isNaN(x)||y,m.stop=l>0&&Math.abs(n[f]-v[f])>g,h&&(m.parsed=n,m.raw=c.data[l]),d&&(m.options=u||this.resolveDataElementOptions(l,t.active?`active`:r)),_||this.updateElement(t,l,m,r),v=n}this.updateSharedOptions(u,r,l)}getMaxOverflow(){let e=this._cachedMeta,t=e.data||[];if(!this.options.showLine){let e=0;for(let n=t.length-1;n>=0;--n)e=Math.max(e,t[n].size(this.resolveDataElementOptions(n))/2);return e>0&&e}let n=e.dataset,r=n.options&&n.options.borderWidth||0;if(!t.length)return r;let i=t[0].size(this.resolveDataElementOptions(0)),a=t[t.length-1].size(this.resolveDataElementOptions(t.length-1));return Math.max(r,i,a)/2}}});function Li(){throw Error(`This method is not implemented: Check that a complete date adapter is provided.`)}var Ri={_date:class e{static override(t){Object.assign(e.prototype,t)}options;constructor(e){this.options=e||{}}init(){}formats(){return Li()}parse(){return Li()}format(){return Li()}add(){return Li()}diff(){return Li()}startOf(){return Li()}endOf(){return Li()}}};function zi(e,t,n,r){let{controller:i,data:a,_sorted:o}=e,s=i._cachedMeta.iScale,c=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null;if(s&&t===s.axis&&t!==`r`&&o&&a.length){let o=s._reversePixels?vt:_t;if(!r){let r=o(a,t,n);if(c){let{vScale:t}=i._cachedMeta,{_parsed:n}=e,a=n.slice(0,r.lo+1).reverse().findIndex(e=>!A(e[t.axis]));r.lo-=Math.max(0,a);let o=n.slice(r.hi).findIndex(e=>!A(e[t.axis]));r.hi+=Math.max(0,o)}return r}if(i._sharedOptions){let e=a[0],r=typeof e.getRange==`function`&&e.getRange(t);if(r){let e=o(a,t,n-r),i=o(a,t,n+r);return{lo:e.lo,hi:i.hi}}}}return{lo:0,hi:a.length-1}}function Bi(e,t,n,r,i){let a=e.getSortedVisibleDatasetMetas(),o=n[t];for(let e=0,n=a.length;e<n;++e){let{index:n,data:s}=a[e],{lo:c,hi:l}=zi(a[e],t,o,i);for(let e=c;e<=l;++e){let t=s[e];t.skip||r(t,n,e)}}}function Vi(e){let t=e.indexOf(`x`)!==-1,n=e.indexOf(`y`)!==-1;return function(e,r){let i=t?Math.abs(e.x-r.x):0,a=n?Math.abs(e.y-r.y):0;return Math.sqrt(i**2+a**2)}}function Hi(e,t,n,r,i){let a=[];return!i&&!e.isPointInArea(t)||Bi(e,n,t,function(n,o,s){(i||sn(n,e.chartArea,0))&&n.inRange(t.x,t.y,r)&&a.push({element:n,datasetIndex:o,index:s})},!0),a}function Ui(e,t,n,r){let i=[];function a(e,n,a){let{startAngle:o,endAngle:s}=e.getProps([`startAngle`,`endAngle`],r),{angle:c}=ut(e,{x:t.x,y:t.y});pt(c,o,s)&&i.push({element:e,datasetIndex:n,index:a})}return Bi(e,n,t,a),i}function Wi(e,t,n,r,i,a){let o=[],s=Vi(n),c=1/0;function l(n,l,u){let d=n.inRange(t.x,t.y,i);if(r&&!d)return;let f=n.getCenterPoint(i);if(!(a||e.isPointInArea(f))&&!d)return;let p=s(t,f);p<c?(o=[{element:n,datasetIndex:l,index:u}],c=p):p===c&&o.push({element:n,datasetIndex:l,index:u})}return Bi(e,n,t,l),o}function Gi(e,t,n,r,i,a){return!a&&!e.isPointInArea(t)?[]:n===`r`&&!r?Ui(e,t,n,i):Wi(e,t,n,r,i,a)}function Ki(e,t,n,r,i){let a=[],o=n===`x`?`inXRange`:`inYRange`,s=!1;return Bi(e,n,t,(e,r,c)=>{e[o]&&e[o](t[n],i)&&(a.push({element:e,datasetIndex:r,index:c}),s||=e.inRange(t.x,t.y,i))}),r&&!s?[]:a}var qi={evaluateInteractionItems:Bi,modes:{index(e,t,n,r){let i=fr(t,e),a=n.axis||`x`,o=n.includeInvisible||!1,s=n.intersect?Hi(e,i,a,r,o):Gi(e,i,a,!1,r,o),c=[];return s.length?(e.getSortedVisibleDatasetMetas().forEach(e=>{let t=s[0].index,n=e.data[t];n&&!n.skip&&c.push({element:n,datasetIndex:e.index,index:t})}),c):[]},dataset(e,t,n,r){let i=fr(t,e),a=n.axis||`xy`,o=n.includeInvisible||!1,s=n.intersect?Hi(e,i,a,r,o):Gi(e,i,a,!1,r,o);if(s.length>0){let t=s[0].datasetIndex,n=e.getDatasetMeta(t).data;s=[];for(let e=0;e<n.length;++e)s.push({element:n[e],datasetIndex:t,index:e})}return s},point(e,t,n,r){return Hi(e,fr(t,e),n.axis||`xy`,r,n.includeInvisible||!1)},nearest(e,t,n,r){let i=fr(t,e),a=n.axis||`xy`,o=n.includeInvisible||!1;return Gi(e,i,a,n.intersect,r,o)},x(e,t,n,r){return Ki(e,fr(t,e),`x`,n.intersect,r)},y(e,t,n,r){return Ki(e,fr(t,e),`y`,n.intersect,r)}}},Ji=[`left`,`top`,`right`,`bottom`];function Yi(e,t){return e.filter(e=>e.pos===t)}function Xi(e,t){return e.filter(e=>Ji.indexOf(e.pos)===-1&&e.box.axis===t)}function Zi(e,t){return e.sort((e,n)=>{let r=t?n:e,i=t?e:n;return r.weight===i.weight?r.index-i.index:r.weight-i.weight})}function Qi(e){let t=[],n,r,i,a,o,s;for(n=0,r=(e||[]).length;n<r;++n)i=e[n],{position:a,options:{stack:o,stackWeight:s=1}}=i,t.push({index:n,box:i,pos:a,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&a+o,stackWeight:s});return t}function $i(e){let t={};for(let n of e){let{stack:e,pos:r,stackWeight:i}=n;if(!e||!Ji.includes(r))continue;let a=t[e]||(t[e]={count:0,placed:0,weight:0,size:0});a.count++,a.weight+=i}return t}function ea(e,t){let n=$i(e),{vBoxMaxWidth:r,hBoxMaxHeight:i}=t,a,o,s;for(a=0,o=e.length;a<o;++a){s=e[a];let{fullSize:o}=s.box,c=n[s.stack],l=c&&s.stackWeight/c.weight;s.horizontal?(s.width=l?l*r:o&&t.availableWidth,s.height=i):(s.width=r,s.height=l?l*i:o&&t.availableHeight)}return n}function ta(e){let t=Qi(e),n=Zi(t.filter(e=>e.box.fullSize),!0),r=Zi(Yi(t,`left`),!0),i=Zi(Yi(t,`right`)),a=Zi(Yi(t,`top`),!0),o=Zi(Yi(t,`bottom`)),s=Xi(t,`x`),c=Xi(t,`y`);return{fullSize:n,leftAndTop:r.concat(a),rightAndBottom:i.concat(c).concat(o).concat(s),chartArea:Yi(t,`chartArea`),vertical:r.concat(i).concat(c),horizontal:a.concat(o).concat(s)}}function na(e,t,n,r){return Math.max(e[n],t[n])+Math.max(e[r],t[r])}function ra(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function ia(e,t,n,r){let{pos:i,box:a}=n,o=e.maxPadding;if(!M(i)){n.size&&(e[i]-=n.size);let t=r[n.stack]||{size:0,count:1};t.size=Math.max(t.size,n.horizontal?a.height:a.width),n.size=t.size/t.count,e[i]+=n.size}a.getPadding&&ra(o,a.getPadding());let s=Math.max(0,t.outerWidth-na(o,e,`left`,`right`)),c=Math.max(0,t.outerHeight-na(o,e,`top`,`bottom`)),l=s!==e.w,u=c!==e.h;return e.w=s,e.h=c,n.horizontal?{same:l,other:u}:{same:u,other:l}}function aa(e){let t=e.maxPadding;function n(n){let r=Math.max(t[n]-e[n],0);return e[n]+=r,r}e.y+=n(`top`),e.x+=n(`left`),n(`right`),n(`bottom`)}function oa(e,t){let n=t.maxPadding;function r(e){let r={left:0,top:0,right:0,bottom:0};return e.forEach(e=>{r[e]=Math.max(t[e],n[e])}),r}return r(e?[`left`,`right`]:[`top`,`bottom`])}function sa(e,t,n,r){let i=[],a,o,s,c,l,u;for(a=0,o=e.length,l=0;a<o;++a){s=e[a],c=s.box,c.update(s.width||t.w,s.height||t.h,oa(s.horizontal,t));let{same:o,other:d}=ia(t,n,s,r);l|=o&&i.length,u||=d,c.fullSize||i.push(s)}return l&&sa(i,t,n,r)||u}function ca(e,t,n,r,i){e.top=n,e.left=t,e.right=t+r,e.bottom=n+i,e.width=r,e.height=i}function la(e,t,n,r){let i=n.padding,{x:a,y:o}=t;for(let s of e){let e=s.box,c=r[s.stack]||{count:1,placed:0,weight:1},l=s.stackWeight/c.weight||1;if(s.horizontal){let r=t.w*l,a=c.size||e.height;Ke(c.start)&&(o=c.start),e.fullSize?ca(e,i.left,o,n.outerWidth-i.right-i.left,a):ca(e,t.left+c.placed,o,r,a),c.start=o,c.placed+=r,o=e.bottom}else{let r=t.h*l,o=c.size||e.width;Ke(c.start)&&(a=c.start),e.fullSize?ca(e,a,i.top,o,n.outerHeight-i.bottom-i.top):ca(e,a,t.top+c.placed,o,r),c.start=a,c.placed+=r,a=e.right}}t.x=a,t.y=o}var ua={addBox(e,t){e.boxes||=[],t.fullSize=t.fullSize||!1,t.position=t.position||`top`,t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},e.boxes.push(t)},removeBox(e,t){let n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure(e,t,n){t.fullSize=n.fullSize,t.position=n.position,t.weight=n.weight},update(e,t,n,r){if(!e)return;let i=q(e.options.layout.padding),a=Math.max(t-i.width,0),o=Math.max(n-i.height,0),s=ta(e.boxes),c=s.vertical,l=s.horizontal;I(e.boxes,e=>{typeof e.beforeLayout==`function`&&e.beforeLayout()});let u=c.reduce((e,t)=>t.box.options&&t.box.options.display===!1?e:e+1,0)||1,d=Object.freeze({outerWidth:t,outerHeight:n,padding:i,availableWidth:a,availableHeight:o,vBoxMaxWidth:a/2/u,hBoxMaxHeight:o/2}),f=Object.assign({},i);ra(f,q(r));let p=Object.assign({maxPadding:f,w:a,h:o,x:i.left,y:i.top},i),m=ea(c.concat(l),d);sa(s.fullSize,p,d,m),sa(c,p,d,m),sa(l,p,d,m)&&sa(c,p,d,m),aa(p),la(s.leftAndTop,p,d,m),p.x+=p.w,p.y+=p.h,la(s.rightAndBottom,p,d,m),e.chartArea={left:p.left,top:p.top,right:p.left+p.w,bottom:p.top+p.h,height:p.h,width:p.w},I(s.chartArea,t=>{let n=t.box;Object.assign(n,e.chartArea),n.update(p.w,p.h,{left:0,top:0,right:0,bottom:0})})}},da=class{acquireContext(e,t){}releaseContext(e){return!1}addEventListener(e,t,n){}removeEventListener(e,t,n){}getDevicePixelRatio(){return 1}getMaximumSize(e,t,n,r){return t=Math.max(0,t||e.width),n||=e.height,{width:t,height:Math.max(0,r?Math.floor(t/r):n)}}isAttached(e){return!0}updateConfig(e){}},fa=class extends da{acquireContext(e){return e&&e.getContext&&e.getContext(`2d`)||null}updateConfig(e){e.options.animation=!1}},pa=`$chartjs`,ma={touchstart:`mousedown`,touchmove:`mousemove`,touchend:`mouseup`,pointerenter:`mouseenter`,pointerdown:`mousedown`,pointermove:`mousemove`,pointerup:`mouseup`,pointerleave:`mouseout`,pointerout:`mouseout`},ha=e=>e===null||e===``;function ga(e,t){let n=e.style,r=e.getAttribute(`height`),i=e.getAttribute(`width`);if(e[pa]={initial:{height:r,width:i,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||`block`,n.boxSizing=n.boxSizing||`border-box`,ha(i)){let t=vr(e,`width`);t!==void 0&&(e.width=t)}if(ha(r)){if(e.style.height===``)e.height=e.width/(t||2);else{let t=vr(e,`height`);t!==void 0&&(e.height=t)}}return e}var _a=_r?{passive:!0}:!1;function va(e,t,n){e&&e.addEventListener(t,n,_a)}function ya(e,t,n){e&&e.canvas&&e.canvas.removeEventListener(t,n,_a)}function ba(e,t){let n=ma[e.type]||e.type,{x:r,y:i}=fr(e,t);return{type:n,chart:t,native:e,x:r===void 0?null:r,y:i===void 0?null:i}}function xa(e,t){for(let n of e)if(n===t||n.contains(t))return!0}function Sa(e,t,n){let r=e.canvas,i=new MutationObserver(e=>{let t=!1;for(let n of e)t||=xa(n.addedNodes,r),t&&=!xa(n.removedNodes,r);t&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}function Ca(e,t,n){let r=e.canvas,i=new MutationObserver(e=>{let t=!1;for(let n of e)t||=xa(n.removedNodes,r),t&&=!xa(n.addedNodes,r);t&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}var wa=new Map,Ta=0;function Ea(){let e=window.devicePixelRatio;e!==Ta&&(Ta=e,wa.forEach((t,n)=>{n.currentDevicePixelRatio!==e&&t()}))}function Da(e,t){wa.size||window.addEventListener(`resize`,Ea),wa.set(e,t)}function Oa(e){wa.delete(e),wa.size||window.removeEventListener(`resize`,Ea)}function ka(e,t,n){let r=e.canvas,i=r&&ir(r);if(!i)return;let a=Tt((e,t)=>{let r=i.clientWidth;n(e,t),r<i.clientWidth&&n()},window),o=new ResizeObserver(e=>{let t=e[0],n=t.contentRect.width,r=t.contentRect.height;(n!==0||r!==0)&&a(n,r)});return o.observe(i),Da(e,a),o}function Aa(e,t,n){n&&n.disconnect(),t===`resize`&&Oa(e)}function ja(e,t,n){let r=e.canvas,i=Tt(t=>{e.ctx!==null&&n(ba(t,e))},e);return va(r,t,i),i}var Ma=class extends da{acquireContext(e,t){let n=e&&e.getContext&&e.getContext(`2d`);return n&&n.canvas===e?(ga(e,t),n):null}releaseContext(e){let t=e.canvas;if(!t[pa])return!1;let n=t[pa].initial;[`height`,`width`].forEach(e=>{let r=n[e];A(r)?t.removeAttribute(e):t.setAttribute(e,r)});let r=n.style||{};return Object.keys(r).forEach(e=>{t.style[e]=r[e]}),t.width=t.width,delete t[pa],!0}addEventListener(e,t,n){this.removeEventListener(e,t);let r=e.$proxies||={};r[t]=({attach:Sa,detach:Ca,resize:ka}[t]||ja)(e,t,n)}removeEventListener(e,t){let n=e.$proxies||={},r=n[t];r&&(({attach:Aa,detach:Aa,resize:Aa}[t]||ya)(e,t,r),n[t]=void 0)}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,t,n,r){return hr(e,t,n,r)}isAttached(e){let t=e&&ir(e);return!!(t&&t.isConnected)}};function Na(e){return!rr()||typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas?fa:Ma}var Pa=class{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(e){let{x:t,y:n}=this.getProps([`x`,`y`],e);return{x:t,y:n}}hasValue(){return it(this.x)&&it(this.y)}getProps(e,t){let n=this.$animations;if(!t||!n)return this;let r={};return e.forEach(e=>{r[e]=n[e]&&n[e].active()?n[e]._to:this[e]}),r}};function Fa(e,t){let n=e.options.ticks,r=Ia(e),i=Math.min(n.maxTicksLimit||r,r),a=n.major.enabled?Ra(t):[],o=a.length,s=a[0],c=a[o-1],l=[];if(o>i)return za(t,l,a,o/i),l;let u=La(a,t,i);if(o>0){let e,n,r=o>1?Math.round((c-s)/(o-1)):null;for(Ba(t,l,u,A(r)?0:s-r,s),e=0,n=o-1;e<n;e++)Ba(t,l,u,a[e],a[e+1]);return Ba(t,l,u,c,A(r)?t.length:c+r),l}return Ba(t,l,u),l}function Ia(e){let t=e.options.offset,n=e._tickSize(),r=e._length/n+ +!t,i=e._maxLength/n;return Math.floor(Math.min(r,i))}function La(e,t,n){let r=Va(e),i=t.length/n;if(!r)return Math.max(i,1);let a=nt(r);for(let e=0,t=a.length-1;e<t;e++){let t=a[e];if(t>i)return t}return Math.max(i,1)}function Ra(e){let t=[],n,r;for(n=0,r=e.length;n<r;n++)e[n].major&&t.push(n);return t}function za(e,t,n,r){let i=0,a=n[0],o;for(r=Math.ceil(r),o=0;o<e.length;o++)o===a&&(t.push(e[o]),i++,a=n[i*r])}function Ba(e,t,n,r,i){let a=P(r,0),o=Math.min(P(i,e.length),e.length),s=0,c,l,u;for(n=Math.ceil(n),i&&(c=i-r,n=c/Math.floor(c/n)),u=a;u<0;)s++,u=Math.round(a+s*n);for(l=Math.max(a,0);l<o;l++)l===u&&(t.push(e[l]),s++,u=Math.round(a+s*n))}function Va(e){let t=e.length,n,r;if(t<2)return!1;for(r=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==r)return!1;return r}var Ha=e=>e===`left`?`right`:e===`right`?`left`:e,Ua=(e,t,n)=>t===`top`||t===`left`?e[t]+n:e[t]-n,Wa=(e,t)=>Math.min(t||e,e);function Ga(e,t){let n=[],r=e.length/t,i=e.length,a=0;for(;a<i;a+=r)n.push(e[Math.floor(a)]);return n}function Ka(e,t,n){let r=e.ticks.length,i=Math.min(t,r-1),a=e._startPixel,o=e._endPixel,s=1e-6,c=e.getPixelForTick(i),l;if(!(n&&(l=r===1?Math.max(c-a,o-c):t===0?(e.getPixelForTick(1)-c)/2:(c-e.getPixelForTick(i-1))/2,c+=i<t?l:-l,c<a-s||c>o+s)))return c}function qa(e,t){I(e,e=>{let n=e.gc,r=n.length/2,i;if(r>t){for(i=0;i<r;++i)delete e.data[n[i]];n.splice(0,r)}})}function Ja(e){return e.drawTicks?e.tickLength:0}function Ya(e,t){if(!e.display)return 0;let n=J(e.font,t),r=q(e.padding);return(j(e.text)?e.text.length:1)*n.lineHeight+r.height}function Xa(e,t){return En(e,{scale:t,type:`scale`})}function Za(e,t,n){return En(e,{tick:n,index:t,type:`tick`})}function Qa(e,t,n){let r=Dt(e);return(n&&t!==`right`||!n&&t===`right`)&&(r=Ha(r)),r}function $a(e,t,n,r){let{top:i,left:a,bottom:o,right:s,chart:c}=e,{chartArea:l,scales:u}=c,d=0,f,p,m,h=o-i,g=s-a;if(e.isHorizontal()){if(p=G(r,a,s),M(n)){let e=Object.keys(n)[0],r=n[e];m=u[e].getPixelForValue(r)+h-t}else m=n===`center`?(l.bottom+l.top)/2+h-t:Ua(e,n,t);f=s-a}else{if(M(n)){let e=Object.keys(n)[0],r=n[e];p=u[e].getPixelForValue(r)-g+t}else p=n===`center`?(l.left+l.right)/2-g+t:Ua(e,n,t);m=G(r,o,i),d=n===`left`?-z:z}return{titleX:p,titleY:m,maxWidth:f,rotation:d}}var eo=class e extends Pa{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,t){return e}getUserBounds(){let{_userMin:e,_userMax:t,_suggestedMin:n,_suggestedMax:r}=this;return e=je(e,1/0),t=je(t,-1/0),n=je(n,1/0),r=je(r,-1/0),{min:je(e,n),max:je(t,r),minDefined:N(e),maxDefined:N(t)}}getMinMax(e){let{min:t,max:n,minDefined:r,maxDefined:i}=this.getUserBounds(),a;if(r&&i)return{min:t,max:n};let o=this.getMatchingVisibleMetas();for(let s=0,c=o.length;s<c;++s)a=o[s].controller.getMinMax(this,e),r||(t=Math.min(t,a.min)),i||(n=Math.max(n,a.max));return t=i&&t>n?n:t,n=r&&t>n?t:n,{min:je(t,je(n,t)),max:je(n,je(t,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||=this._computeLabelItems(e)}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){F(this.options.beforeUpdate,[this])}update(e,t,n){let{beginAtZero:r,grace:i,ticks:a}=this.options,o=a.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=t,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||=(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Tn(this,i,r),!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let s=o<this.ticks.length;this._convertTicksToLabels(s?Ga(this.ticks,o):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),a.display&&(a.autoSkip||a.source===`auto`)&&(this.ticks=Fa(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),s&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,t,n;this.isHorizontal()?(t=this.left,n=this.right):(t=this.top,n=this.bottom,e=!e),this._startPixel=t,this._endPixel=n,this._reversePixels=e,this._length=n-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){F(this.options.afterUpdate,[this])}beforeSetDimensions(){F(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){F(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),F(this.options[e],[this])}beforeDataLimits(){this._callHooks(`beforeDataLimits`)}determineDataLimits(){}afterDataLimits(){this._callHooks(`afterDataLimits`)}beforeBuildTicks(){this._callHooks(`beforeBuildTicks`)}buildTicks(){return[]}afterBuildTicks(){this._callHooks(`afterBuildTicks`)}beforeTickToLabelConversion(){F(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){let t=this.options.ticks,n,r,i;for(n=0,r=e.length;n<r;n++)i=e[n],i.label=F(t.callback,[i.value,n,e],this)}afterTickToLabelConversion(){F(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){F(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let e=this.options,t=e.ticks,n=Wa(this.ticks.length,e.ticks.maxTicksLimit),r=t.minRotation||0,i=t.maxRotation,a=r,o,s,c;if(!this._isVisible()||!t.display||r>=i||n<=1||!this.isHorizontal()){this.labelRotation=r;return}let l=this._getLabelSizes(),u=l.widest.width,d=l.highest.height,f=W(this.chart.width-u,0,this.maxWidth);o=e.offset?this.maxWidth/n:f/(n-1),u+6>o&&(o=f/(n-(e.offset?.5:1)),s=this.maxHeight-Ja(e.grid)-t.padding-Ya(e.title,this.chart.options.font),c=Math.sqrt(u*u+d*d),a=ct(Math.min(Math.asin(W((l.highest.height+6)/o,-1,1)),Math.asin(W(s/c,-1,1))-Math.asin(W(d/c,-1,1)))),a=Math.max(r,Math.min(i,a))),this.labelRotation=a}afterCalculateLabelRotation(){F(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){F(this.options.beforeFit,[this])}fit(){let e={width:0,height:0},{chart:t,options:{ticks:n,title:r,grid:i}}=this,a=this._isVisible(),o=this.isHorizontal();if(a){let a=Ya(r,t.options.font);if(o?(e.width=this.maxWidth,e.height=Ja(i)+a):(e.height=this.maxHeight,e.width=Ja(i)+a),n.display&&this.ticks.length){let{first:t,last:r,widest:i,highest:a}=this._getLabelSizes(),s=n.padding*2,c=st(this.labelRotation),l=Math.cos(c),u=Math.sin(c);if(o){let t=n.mirror?0:u*i.width+l*a.height;e.height=Math.min(this.maxHeight,e.height+t+s)}else{let t=n.mirror?0:l*i.width+u*a.height;e.width=Math.min(this.maxWidth,e.width+t+s)}this._calculatePadding(t,r,u,l)}}this._handleMargins(),o?(this.width=this._length=t.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=t.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,t,n,r){let{ticks:{align:i,padding:a},position:o}=this.options,s=this.labelRotation!==0,c=o!==`top`&&this.axis===`x`;if(this.isHorizontal()){let o=this.getPixelForTick(0)-this.left,l=this.right-this.getPixelForTick(this.ticks.length-1),u=0,d=0;s?c?(u=r*e.width,d=n*t.height):(u=n*e.height,d=r*t.width):i===`start`?d=t.width:i===`end`?u=e.width:i!==`inner`&&(u=e.width/2,d=t.width/2),this.paddingLeft=Math.max((u-o+a)*this.width/(this.width-o),0),this.paddingRight=Math.max((d-l+a)*this.width/(this.width-l),0)}else{let n=t.height/2,r=e.height/2;i===`start`?(n=0,r=e.height):i===`end`&&(n=t.height,r=0),this.paddingTop=n+a,this.paddingBottom=r+a}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){F(this.options.afterFit,[this])}isHorizontal(){let{axis:e,position:t}=this.options;return t===`top`||t===`bottom`||e===`x`}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let t,n;for(t=0,n=e.length;t<n;t++)A(e[t].label)&&(e.splice(t,1),n--,t--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){let t=this.options.ticks.sampleSize,n=this.ticks;t<n.length&&(n=Ga(n,t)),this._labelSizes=e=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,t,n){let{ctx:r,_longestTextCache:i}=this,a=[],o=[],s=Math.floor(t/Wa(t,n)),c=0,l=0,u,d,f,p,m,h,g,_,v,y,b;for(u=0;u<t;u+=s){if(p=e[u].label,m=this._resolveTickFontOptions(u),r.font=h=m.string,g=i[h]=i[h]||{data:{},gc:[]},_=m.lineHeight,v=y=0,!A(p)&&!j(p))v=en(r,g.data,g.gc,v,p),y=_;else if(j(p))for(d=0,f=p.length;d<f;++d)b=p[d],!A(b)&&!j(b)&&(v=en(r,g.data,g.gc,v,b),y+=_);a.push(v),o.push(y),c=Math.max(v,c),l=Math.max(y,l)}qa(i,t);let x=a.indexOf(c),S=o.indexOf(l),C=e=>({width:a[e]||0,height:o[e]||0});return{first:C(0),last:C(t-1),widest:C(x),highest:C(S),widths:a,heights:o}}getLabelForValue(e){return e}getPixelForValue(e,t){return NaN}getValueForPixel(e){}getPixelForTick(e){let t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);let t=this._startPixel+e*this._length;return mt(this._alignToPixels?nn(this.chart,t,0):t)}getDecimalForPixel(e){let t=(e-this._startPixel)/this._length;return this._reversePixels?1-t:t}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:e,max:t}=this;return e<0&&t<0?t:e>0&&t>0?e:0}getContext(e){let t=this.ticks||[];if(e>=0&&e<t.length){let n=t[e];return n.$context||=Za(this.getContext(),e,n)}return this.$context||=Xa(this.chart.getContext(),this)}_tickSize(){let e=this.options.ticks,t=st(this.labelRotation),n=Math.abs(Math.cos(t)),r=Math.abs(Math.sin(t)),i=this._getLabelSizes(),a=e.autoSkipPadding||0,o=i?i.widest.width+a:0,s=i?i.highest.height+a:0;return this.isHorizontal()?s*n>o*r?o/n:s/r:s*r<o*n?s/n:o/r}_isVisible(){let e=this.options.display;return e===`auto`?this.getMatchingVisibleMetas().length>0:!!e}_computeGridLineItems(e){let t=this.axis,n=this.chart,r=this.options,{grid:i,position:a,border:o}=r,s=i.offset,c=this.isHorizontal(),l=this.ticks.length+ +!!s,u=Ja(i),d=[],f=o.setContext(this.getContext()),p=f.display?f.width:0,m=p/2,h=function(e){return nn(n,e,p)},g,_,v,y,b,x,S,C,w,T,E,D;if(a===`top`)g=h(this.bottom),x=this.bottom-u,C=g-m,T=h(e.top)+m,D=e.bottom;else if(a===`bottom`)g=h(this.top),T=e.top,D=h(e.bottom)-m,x=g+m,C=this.top+u;else if(a===`left`)g=h(this.right),b=this.right-u,S=g-m,w=h(e.left)+m,E=e.right;else if(a===`right`)g=h(this.left),w=e.left,E=h(e.right)-m,b=g+m,S=this.left+u;else if(t===`x`){if(a===`center`)g=h((e.top+e.bottom)/2+.5);else if(M(a)){let e=Object.keys(a)[0],t=a[e];g=h(this.chart.scales[e].getPixelForValue(t))}T=e.top,D=e.bottom,x=g+m,C=x+u}else if(t===`y`){if(a===`center`)g=h((e.left+e.right)/2);else if(M(a)){let e=Object.keys(a)[0],t=a[e];g=h(this.chart.scales[e].getPixelForValue(t))}b=g-m,S=b-u,w=e.left,E=e.right}let ee=P(r.ticks.maxTicksLimit,l),te=Math.max(1,Math.ceil(l/ee));for(_=0;_<l;_+=te){let e=this.getContext(_),t=i.setContext(e),r=o.setContext(e),a=t.lineWidth,l=t.color,u=r.dash||[],f=r.dashOffset,p=t.tickWidth,m=t.tickColor,h=t.tickBorderDash||[],g=t.tickBorderDashOffset;v=Ka(this,_,s),v!==void 0&&(y=nn(n,v,a),c?b=S=w=E=y:x=C=T=D=y,d.push({tx1:b,ty1:x,tx2:S,ty2:C,x1:w,y1:T,x2:E,y2:D,width:a,color:l,borderDash:u,borderDashOffset:f,tickWidth:p,tickColor:m,tickBorderDash:h,tickBorderDashOffset:g}))}return this._ticksLength=l,this._borderValue=g,d}_computeLabelItems(e){let t=this.axis,n=this.options,{position:r,ticks:i}=n,a=this.isHorizontal(),o=this.ticks,{align:s,crossAlign:c,padding:l,mirror:u}=i,d=Ja(n.grid),f=d+l,p=u?-l:f,m=-st(this.labelRotation),h=[],g,_,v,y,b,x,S,C,w,T,E,D,ee=`middle`;if(r===`top`)x=this.bottom-p,S=this._getXAxisLabelAlignment();else if(r===`bottom`)x=this.top+p,S=this._getXAxisLabelAlignment();else if(r===`left`){let e=this._getYAxisLabelAlignment(d);S=e.textAlign,b=e.x}else if(r===`right`){let e=this._getYAxisLabelAlignment(d);S=e.textAlign,b=e.x}else if(t===`x`){if(r===`center`)x=(e.top+e.bottom)/2+f;else if(M(r)){let e=Object.keys(r)[0],t=r[e];x=this.chart.scales[e].getPixelForValue(t)+f}S=this._getXAxisLabelAlignment()}else if(t===`y`){if(r===`center`)b=(e.left+e.right)/2-f;else if(M(r)){let e=Object.keys(r)[0],t=r[e];b=this.chart.scales[e].getPixelForValue(t)}S=this._getYAxisLabelAlignment(d).textAlign}t===`y`&&(s===`start`?ee=`top`:s===`end`&&(ee=`bottom`));let te=this._getLabelSizes();for(g=0,_=o.length;g<_;++g){v=o[g],y=v.label;let e=i.setContext(this.getContext(g));C=this.getPixelForTick(g)+i.labelOffset,w=this._resolveTickFontOptions(g),T=w.lineHeight,E=j(y)?y.length:1;let t=E/2,n=e.color,s=e.textStrokeColor,l=e.textStrokeWidth,d=S;a?(b=C,S===`inner`&&(d=g===_-1?this.options.reverse?`left`:`right`:g===0?this.options.reverse?`right`:`left`:`center`),D=r===`top`?c===`near`||m!==0?-E*T+T/2:c===`center`?-te.highest.height/2-t*T+T:-te.highest.height+T/2:c===`near`||m!==0?T/2:c===`center`?te.highest.height/2-t*T:te.highest.height-E*T,u&&(D*=-1),m!==0&&!e.showLabelBackdrop&&(b+=T/2*Math.sin(m))):(x=C,D=(1-E)*T/2);let f;if(e.showLabelBackdrop){let t=q(e.backdropPadding),n=te.heights[g],r=te.widths[g],i=D-t.top,a=0-t.left;switch(ee){case`middle`:i-=n/2;break;case`bottom`:i-=n}switch(S){case`center`:a-=r/2;break;case`right`:a-=r;break;case`inner`:g===_-1?a-=r:g>0&&(a-=r/2)}f={left:a,top:i,width:r+t.width,height:n+t.height,color:e.backdropColor}}h.push({label:y,font:w,textOffset:D,options:{rotation:m,color:n,strokeColor:s,strokeWidth:l,textAlign:d,textBaseline:ee,translation:[b,x],backdrop:f}})}return h}_getXAxisLabelAlignment(){let{position:e,ticks:t}=this.options;if(-st(this.labelRotation))return e===`top`?`left`:`right`;let n=`center`;return t.align===`start`?n=`left`:t.align===`end`?n=`right`:t.align===`inner`&&(n=`inner`),n}_getYAxisLabelAlignment(e){let{position:t,ticks:{crossAlign:n,mirror:r,padding:i}}=this.options,a=this._getLabelSizes(),o=e+i,s=a.widest.width,c,l;return t===`left`?r?(l=this.right+i,n===`near`?c=`left`:n===`center`?(c=`center`,l+=s/2):(c=`right`,l+=s)):(l=this.right-o,n===`near`?c=`right`:n===`center`?(c=`center`,l-=s/2):(c=`left`,l=this.left)):t===`right`?r?(l=this.left+i,n===`near`?c=`right`:n===`center`?(c=`center`,l-=s/2):(c=`left`,l-=s)):(l=this.left+o,n===`near`?c=`left`:n===`center`?(c=`center`,l+=s/2):(c=`right`,l=this.right)):c=`right`,{textAlign:c,x:l}}_computeLabelArea(){if(this.options.ticks.mirror)return;let e=this.chart,t=this.options.position;if(t===`left`||t===`right`)return{top:0,left:this.left,bottom:e.height,right:this.right};if(t===`top`||t===`bottom`)return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){let{ctx:e,options:{backgroundColor:t},left:n,top:r,width:i,height:a}=this;t&&(e.save(),e.fillStyle=t,e.fillRect(n,r,i,a),e.restore())}getLineWidthForValue(e){let t=this.options.grid;if(!this._isVisible()||!t.display)return 0;let n=this.ticks.findIndex(t=>t.value===e);return n>=0?t.setContext(this.getContext(n)).lineWidth:0}drawGrid(e){let t=this.options.grid,n=this.ctx,r=this._gridLineItems||=this._computeGridLineItems(e),i,a,o=(e,t,r)=>{r.width&&r.color&&(n.save(),n.lineWidth=r.width,n.strokeStyle=r.color,n.setLineDash(r.borderDash||[]),n.lineDashOffset=r.borderDashOffset,n.beginPath(),n.moveTo(e.x,e.y),n.lineTo(t.x,t.y),n.stroke(),n.restore())};if(t.display)for(i=0,a=r.length;i<a;++i){let e=r[i];t.drawOnChartArea&&o({x:e.x1,y:e.y1},{x:e.x2,y:e.y2},e),t.drawTicks&&o({x:e.tx1,y:e.ty1},{x:e.tx2,y:e.ty2},{color:e.tickColor,width:e.tickWidth,borderDash:e.tickBorderDash,borderDashOffset:e.tickBorderDashOffset})}}drawBorder(){let{chart:e,ctx:t,options:{border:n,grid:r}}=this,i=n.setContext(this.getContext()),a=n.display?i.width:0;if(!a)return;let o=r.setContext(this.getContext(0)).lineWidth,s=this._borderValue,c,l,u,d;this.isHorizontal()?(c=nn(e,this.left,a)-a/2,l=nn(e,this.right,o)+o/2,u=d=s):(u=nn(e,this.top,a)-a/2,d=nn(e,this.bottom,o)+o/2,c=l=s),t.save(),t.lineWidth=i.width,t.strokeStyle=i.color,t.beginPath(),t.moveTo(c,u),t.lineTo(l,d),t.stroke(),t.restore()}drawLabels(e){if(!this.options.ticks.display)return;let t=this.ctx,n=this._computeLabelArea();n&&cn(t,n);let r=this.getLabelItems(e);for(let e of r){let n=e.options,r=e.font,i=e.label,a=e.textOffset;hn(t,i,0,a,r,n)}n&&ln(t)}drawTitle(){let{ctx:e,options:{position:t,title:n,reverse:r}}=this;if(!n.display)return;let i=J(n.font),a=q(n.padding),o=n.align,s=i.lineHeight/2;t===`bottom`||t===`center`||M(t)?(s+=a.bottom,j(n.text)&&(s+=i.lineHeight*(n.text.length-1))):s+=a.top;let{titleX:c,titleY:l,maxWidth:u,rotation:d}=$a(this,s,t,o);hn(e,n.text,0,0,i,{color:n.color,maxWidth:u,rotation:d,textAlign:Qa(o,t,r),textBaseline:`middle`,translation:[c,l]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){let t=this.options,n=t.ticks&&t.ticks.z||0,r=P(t.grid&&t.grid.z,-1),i=P(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==e.prototype.draw?[{z:n,draw:e=>{this.draw(e)}}]:[{z:r,draw:e=>{this.drawBackground(),this.drawGrid(e),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:n,draw:e=>{this.drawLabels(e)}}]}getMatchingVisibleMetas(e){let t=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+`AxisID`,r=[],i,a;for(i=0,a=t.length;i<a;++i){let a=t[i];a[n]===this.id&&(!e||a.type===e)&&r.push(a)}return r}_resolveTickFontOptions(e){return J(this.options.ticks.setContext(this.getContext(e)).font)}_maxDigits(){let e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}},to=class{constructor(e,t,n){this.type=e,this.scope=t,this.override=n,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){let t=Object.getPrototypeOf(e),n;io(t)&&(n=this.register(t));let r=this.items,i=e.id,a=this.scope+`.`+i;if(!i)throw Error(`class does not have id: `+e);return i in r?a:(r[i]=e,no(e,a,n),this.override&&K.override(e.id,e.overrides),a)}get(e){return this.items[e]}unregister(e){let t=this.items,n=e.id,r=this.scope;n in t&&delete t[n],r&&n in K[r]&&(delete K[r][n],this.override&&delete Yt[n])}};function no(e,t,n){let r=Re(Object.create(null),[n?K.get(n):{},K.get(t),e.defaults]);K.set(t,r),e.defaultRoutes&&ro(t,e.defaultRoutes),e.descriptors&&K.describe(t,e.descriptors)}function ro(e,t){Object.keys(t).forEach(n=>{let r=n.split(`.`),i=r.pop(),a=[e].concat(r).join(`.`),o=t[n].split(`.`),s=o.pop(),c=o.join(`.`);K.route(a,i,c,s)})}function io(e){return`id`in e&&`defaults`in e}var ao=new class{constructor(){this.controllers=new to(mi,`datasets`,!0),this.elements=new to(Pa,`elements`),this.plugins=new to(Object,`plugins`),this.scales=new to(eo,`scales`),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each(`register`,e)}remove(...e){this._each(`unregister`,e)}addControllers(...e){this._each(`register`,e,this.controllers)}addElements(...e){this._each(`register`,e,this.elements)}addPlugins(...e){this._each(`register`,e,this.plugins)}addScales(...e){this._each(`register`,e,this.scales)}getController(e){return this._get(e,this.controllers,`controller`)}getElement(e){return this._get(e,this.elements,`element`)}getPlugin(e){return this._get(e,this.plugins,`plugin`)}getScale(e){return this._get(e,this.scales,`scale`)}removeControllers(...e){this._each(`unregister`,e,this.controllers)}removeElements(...e){this._each(`unregister`,e,this.elements)}removePlugins(...e){this._each(`unregister`,e,this.plugins)}removeScales(...e){this._each(`unregister`,e,this.scales)}_each(e,t,n){[...t].forEach(t=>{let r=n||this._getRegistryForType(t);n||r.isForType(t)||r===this.plugins&&t.id?this._exec(e,r,t):I(t,t=>{let r=n||this._getRegistryForType(t);this._exec(e,r,t)})})}_exec(e,t,n){let r=Ge(e);F(n[`before`+r],[],n),t[e](n),F(n[`after`+r],[],n)}_getRegistryForType(e){for(let t=0;t<this._typedRegistries.length;t++){let n=this._typedRegistries[t];if(n.isForType(e))return n}return this.plugins}_get(e,t,n){let r=t.get(e);if(r===void 0)throw Error(`"`+e+`" is not a registered `+n+`.`);return r}},oo=class{constructor(){this._init=void 0}notify(e,t,n,r){if(t===`beforeInit`&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,`install`)),this._init===void 0)return;let i=r?this._descriptors(e).filter(r):this._descriptors(e),a=this._notify(i,e,t,n);return t===`afterDestroy`&&(this._notify(i,e,`stop`),this._notify(this._init,e,`uninstall`),this._init=void 0),a}_notify(e,t,n,r){r||={};for(let i of e){let e=i.plugin,a=e[n];if(F(a,[t,r,i.options],e)===!1&&r.cancelable)return!1}return!0}invalidate(){A(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;let t=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),t}_createDescriptors(e,t){let n=e&&e.config,r=P(n.options&&n.options.plugins,{}),i=so(n);return r===!1&&!t?[]:lo(e,i,r,t)}_notifyStateChanges(e){let t=this._oldCache||[],n=this._cache,r=(e,t)=>e.filter(e=>!t.some(t=>e.plugin.id===t.plugin.id));this._notify(r(t,n),e,`stop`),this._notify(r(n,t),e,`start`)}};function so(e){let t={},n=[],r=Object.keys(ao.plugins.items);for(let e=0;e<r.length;e++)n.push(ao.getPlugin(r[e]));let i=e.plugins||[];for(let e=0;e<i.length;e++){let r=i[e];n.indexOf(r)===-1&&(n.push(r),t[r.id]=!0)}return{plugins:n,localIds:t}}function co(e,t){return!t&&e===!1?null:e===!0?{}:e}function lo(e,{plugins:t,localIds:n},r,i){let a=[],o=e.getContext();for(let s of t){let t=s.id,c=co(r[t],i);c!==null&&a.push({plugin:s,options:uo(e.config,{plugin:s,local:n[t]},c,o)})}return a}function uo(e,{plugin:t,local:n},r,i){let a=e.pluginScopeKeys(t),o=e.getOptionScopes(r,a);return n&&t.defaults&&o.push(t.defaults),e.createResolver(o,i,[``],{scriptable:!1,indexable:!1,allKeys:!0})}function fo(e,t){let n=K.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||n.indexAxis||`x`}function po(e,t){let n=e;return e===`_index_`?n=t:e===`_value_`&&(n=t===`x`?`y`:`x`),n}function mo(e,t){return e===t?`_index_`:`_value_`}function ho(e){if(e===`x`||e===`y`||e===`r`)return e}function go(e){if(e===`top`||e===`bottom`)return`x`;if(e===`left`||e===`right`)return`y`}function _o(e,...t){if(ho(e))return e;for(let n of t){let t=n.axis||go(n.position)||e.length>1&&ho(e[0].toLowerCase());if(t)return t}throw Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function vo(e,t,n){if(n[t+`AxisID`]===e)return{axis:t}}function yo(e,t){if(t.data&&t.data.datasets){let n=t.data.datasets.filter(t=>t.xAxisID===e||t.yAxisID===e);if(n.length)return vo(e,`x`,n[0])||vo(e,`y`,n[0])}return{}}function bo(e,t){let n=Yt[e.type]||{scales:{}},r=t.scales||{},i=fo(e.type,t),a=Object.create(null);return Object.keys(r).forEach(t=>{let o=r[t];if(!M(o))return console.error(`Invalid scale configuration for scale: ${t}`);if(o._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${t}`);let s=_o(t,o,yo(t,e),K.scales[o.type]),c=mo(s,i),l=n.scales||{};a[t]=ze(Object.create(null),[{axis:s},o,l[s],l[c]])}),e.data.datasets.forEach(n=>{let i=n.type||e.type,o=n.indexAxis||fo(i,t),s=(Yt[i]||{}).scales||{};Object.keys(s).forEach(e=>{let t=po(e,o),i=n[t+`AxisID`]||t;a[i]=a[i]||Object.create(null),ze(a[i],[{axis:t},r[i],s[e]])})}),Object.keys(a).forEach(e=>{let t=a[e];ze(t,[K.scales[t.type],K.scale])}),a}function xo(e){let t=e.options||={};t.plugins=P(t.plugins,{}),t.scales=bo(e,t)}function So(e){return e||={},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function Co(e){return e||={},e.data=So(e.data),xo(e),e}var wo=new Map,To=new Set;function Eo(e,t){let n=wo.get(e);return n||(n=t(),wo.set(e,n),To.add(n)),n}var Do=(e,t,n)=>{let r=We(t,n);r!==void 0&&e.add(r)},Oo=class{constructor(e){this._config=Co(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=So(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){let e=this._config;this.clearCache(),xo(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return Eo(e,()=>[[`datasets.${e}`,``]])}datasetAnimationScopeKeys(e,t){return Eo(`${e}.transition.${t}`,()=>[[`datasets.${e}.transitions.${t}`,`transitions.${t}`],[`datasets.${e}`,``]])}datasetElementScopeKeys(e,t){return Eo(`${e}-${t}`,()=>[[`datasets.${e}.elements.${t}`,`datasets.${e}`,`elements.${t}`,``]])}pluginScopeKeys(e){let t=e.id,n=this.type;return Eo(`${n}-plugin-${t}`,()=>[[`plugins.${t}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,t){let n=this._scopeCache,r=n.get(e);return(!r||t)&&(r=new Map,n.set(e,r)),r}getOptionScopes(e,t,n){let{options:r,type:i}=this,a=this._cachedScopes(e,n),o=a.get(t);if(o)return o;let s=new Set;t.forEach(t=>{e&&(s.add(e),t.forEach(t=>Do(s,e,t))),t.forEach(e=>Do(s,r,e)),t.forEach(e=>Do(s,Yt[i]||{},e)),t.forEach(e=>Do(s,K,e)),t.forEach(e=>Do(s,Xt,e))});let c=Array.from(s);return c.length===0&&c.push(Object.create(null)),To.has(t)&&a.set(t,c),c}chartOptionScopes(){let{options:e,type:t}=this;return[e,Yt[t]||{},K.datasets[t]||{},{type:t},K,Xt]}resolveNamedOptions(e,t,n,r=[``]){let i={$shared:!0},{resolver:a,subPrefixes:o}=ko(this._resolverCache,e,r),s=a;if(jo(a,t)){i.$shared=!1,n=qe(n)?n():n;let t=this.createResolver(e,n,o);s=On(a,n,t)}for(let e of t)i[e]=s[e];return i}createResolver(e,t,n=[``],r){let{resolver:i}=ko(this._resolverCache,e,n);return M(t)?On(i,t,void 0,r):i}};function ko(e,t,n){let r=e.get(t);r||(r=new Map,e.set(t,r));let i=n.join(),a=r.get(i);return a||(a={resolver:Dn(t,n),subPrefixes:n.filter(e=>!e.toLowerCase().includes(`hover`))},r.set(i,a)),a}var Ao=e=>M(e)&&Object.getOwnPropertyNames(e).some(t=>qe(e[t]));function jo(e,t){let{isScriptable:n,isIndexable:r}=kn(e);for(let i of t){let t=n(i),a=r(i),o=(a||t)&&e[i];if(t&&(qe(o)||Ao(o))||a&&j(o))return!0}return!1}var Mo=`4.5.1`,No=[`top`,`bottom`,`left`,`right`,`chartArea`];function Po(e,t){return e===`top`||e===`bottom`||No.indexOf(e)===-1&&t===`x`}function Fo(e,t){return function(n,r){return n[e]===r[e]?n[t]-r[t]:n[e]-r[e]}}function Io(e){let t=e.chart,n=t.options.animation;t.notifyPlugins(`afterRender`),F(n&&n.onComplete,[e],t)}function Lo(e){let t=e.chart,n=t.options.animation;F(n&&n.onProgress,[e],t)}function Ro(e){return rr()&&typeof e==`string`?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}var zo={},Bo=e=>{let t=Ro(e);return Object.values(zo).filter(e=>e.canvas===t).pop()};function Vo(e,t,n){let r=Object.keys(e);for(let i of r){let r=+i;if(r>=t){let a=e[i];delete e[i],(n>0||r>t)&&(e[r+n]=a)}}}function Ho(e,t,n,r){return!n||e.type===`mouseout`?null:r?t:e}var Uo=class{static defaults=K;static instances=zo;static overrides=Yt;static registry=ao;static version=Mo;static getChart=Bo;static register(...e){ao.add(...e),Wo()}static unregister(...e){ao.remove(...e),Wo()}constructor(e,t){let n=this.config=new Oo(t),r=Ro(e),i=Bo(r);if(i)throw Error(`Canvas is already in use. Chart with ID '`+i.id+`' must be destroyed before the canvas with ID '`+i.canvas.id+`' can be reused.`);let a=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||(Na(r))),this.platform.updateConfig(n);let o=this.platform.acquireContext(r,a.aspectRatio),s=o&&o.canvas,c=s&&s.height,l=s&&s.width;if(this.id=Ae(),this.ctx=o,this.canvas=s,this.width=l,this.height=c,this._options=a,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new oo,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=Et(e=>this.update(e),a.resizeDelay||0),this._dataChanges=[],zo[this.id]=this,!o||!s){console.error(`Failed to create chart: can't acquire context from the given item`);return}Hr.listen(this,`complete`,Io),Hr.listen(this,`progress`,Lo),this._initialize(),this.attached&&this.update()}get aspectRatio(){let{options:{aspectRatio:e,maintainAspectRatio:t},width:n,height:r,_aspectRatio:i}=this;return A(e)?t&&i?i:r?n/r:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return ao}_initialize(){return this.notifyPlugins(`beforeInit`),this.options.responsive?this.resize():gr(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins(`afterInit`),this}clear(){return rn(this.canvas,this.ctx),this}stop(){return Hr.stop(this),this}resize(e,t){Hr.running(this)?this._resizeBeforeDraw={width:e,height:t}:this._resize(e,t)}_resize(e,t){let n=this.options,r=this.canvas,i=n.maintainAspectRatio&&this.aspectRatio,a=this.platform.getMaximumSize(r,e,t,i),o=n.devicePixelRatio||this.platform.getDevicePixelRatio(),s=this.width?`resize`:`attach`;this.width=a.width,this.height=a.height,this._aspectRatio=this.aspectRatio,gr(this,o,!0)&&(this.notifyPlugins(`resize`,{size:a}),F(n.onResize,[this,a],this),this.attached&&this._doResize(s)&&this.render())}ensureScalesHaveIDs(){I(this.options.scales||{},(e,t)=>{e.id=t})}buildOrUpdateScales(){let e=this.options,t=e.scales,n=this.scales,r=Object.keys(n).reduce((e,t)=>(e[t]=!1,e),{}),i=[];t&&(i=i.concat(Object.keys(t).map(e=>{let n=t[e],r=_o(e,n),i=r===`r`,a=r===`x`;return{options:n,dposition:i?`chartArea`:a?`bottom`:`left`,dtype:i?`radialLinear`:a?`category`:`linear`}}))),I(i,t=>{let i=t.options,a=i.id,o=_o(a,i),s=P(i.type,t.dtype);(i.position===void 0||Po(i.position,o)!==Po(t.dposition))&&(i.position=t.dposition),r[a]=!0;let c=null;a in n&&n[a].type===s?c=n[a]:(c=new(ao.getScale(s))({id:a,type:s,ctx:this.ctx,chart:this}),n[c.id]=c),c.init(i,e)}),I(r,(e,t)=>{e||delete n[t]}),I(n,e=>{ua.configure(this,e,e.options),ua.addBox(this,e)})}_updateMetasets(){let e=this._metasets,t=this.data.datasets.length,n=e.length;if(e.sort((e,t)=>e.index-t.index),n>t){for(let e=t;e<n;++e)this._destroyDatasetMeta(e);e.splice(t,n-t)}this._sortedMetasets=e.slice(0).sort(Fo(`order`,`index`))}_removeUnreferencedMetasets(){let{_metasets:e,data:{datasets:t}}=this;e.length>t.length&&delete this._stacks,e.forEach((e,n)=>{t.filter(t=>t===e._dataset).length===0&&this._destroyDatasetMeta(n)})}buildOrUpdateControllers(){let e=[],t=this.data.datasets,n,r;for(this._removeUnreferencedMetasets(),n=0,r=t.length;n<r;n++){let r=t[n],i=this.getDatasetMeta(n),a=r.type||this.config.type;if(i.type&&i.type!==a&&(this._destroyDatasetMeta(n),i=this.getDatasetMeta(n)),i.type=a,i.indexAxis=r.indexAxis||fo(a,this.options),i.order=r.order||0,i.index=n,i.label=``+r.label,i.visible=this.isDatasetVisible(n),i.controller)i.controller.updateIndex(n),i.controller.linkScales();else{let t=ao.getController(a),{datasetElementType:r,dataElementType:o}=K.datasets[a];Object.assign(t,{dataElementType:ao.getElement(o),datasetElementType:r&&ao.getElement(r)}),i.controller=new t(this,n),e.push(i.controller)}}return this._updateMetasets(),e}_resetElements(){I(this.data.datasets,(e,t)=>{this.getDatasetMeta(t).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins(`reset`)}update(e){let t=this.config;t.update();let n=this._options=t.createResolver(t.chartOptionScopes(),this.getContext()),r=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins(`beforeUpdate`,{mode:e,cancelable:!0})===!1)return;let i=this.buildOrUpdateControllers();this.notifyPlugins(`beforeElementsUpdate`);let a=0;for(let e=0,t=this.data.datasets.length;e<t;e++){let{controller:t}=this.getDatasetMeta(e),n=!r&&i.indexOf(t)===-1;t.buildOrUpdateElements(n),a=Math.max(+t.getMaxOverflow(),a)}a=this._minPadding=n.layout.autoPadding?a:0,this._updateLayout(a),r||I(i,e=>{e.reset()}),this._updateDatasets(e),this.notifyPlugins(`afterUpdate`,{mode:e}),this._layers.sort(Fo(`z`,`_idx`));let{_active:o,_lastEvent:s}=this;s?this._eventHandler(s,!0):o.length&&this._updateHoverStyles(o,o,!0),this.render()}_updateScales(){I(this.scales,e=>{ua.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let e=this.options;(!Je(new Set(Object.keys(this._listeners)),new Set(e.events))||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:e}=this,t=this._getUniformDataChanges()||[];for(let{method:n,start:r,count:i}of t)Vo(e,r,n===`_removeElements`?-i:i)}_getUniformDataChanges(){let e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];let t=this.data.datasets.length,n=t=>new Set(e.filter(e=>e[0]===t).map((e,t)=>t+`,`+e.splice(1).join(`,`))),r=n(0);for(let e=1;e<t;e++)if(!Je(r,n(e)))return;return Array.from(r).map(e=>e.split(`,`)).map(e=>({method:e[1],start:+e[2],count:+e[3]}))}_updateLayout(e){if(this.notifyPlugins(`beforeLayout`,{cancelable:!0})===!1)return;ua.update(this,this.width,this.height,e);let t=this.chartArea,n=t.width<=0||t.height<=0;this._layers=[],I(this.boxes,e=>{n&&e.position===`chartArea`||(e.configure&&e.configure(),this._layers.push(...e._layers()))},this),this._layers.forEach((e,t)=>{e._idx=t}),this.notifyPlugins(`afterLayout`)}_updateDatasets(e){if(this.notifyPlugins(`beforeDatasetsUpdate`,{mode:e,cancelable:!0})!==!1){for(let e=0,t=this.data.datasets.length;e<t;++e)this.getDatasetMeta(e).controller.configure();for(let t=0,n=this.data.datasets.length;t<n;++t)this._updateDataset(t,qe(e)?e({datasetIndex:t}):e);this.notifyPlugins(`afterDatasetsUpdate`,{mode:e})}}_updateDataset(e,t){let n=this.getDatasetMeta(e),r={meta:n,index:e,mode:t,cancelable:!0};this.notifyPlugins(`beforeDatasetUpdate`,r)!==!1&&(n.controller._update(t),r.cancelable=!1,this.notifyPlugins(`afterDatasetUpdate`,r))}render(){this.notifyPlugins(`beforeRender`,{cancelable:!0})!==!1&&(Hr.has(this)?this.attached&&!Hr.running(this)&&Hr.start(this):(this.draw(),Io({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){let{width:e,height:t}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(e,t)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins(`beforeDraw`,{cancelable:!0})===!1)return;let t=this._layers;for(e=0;e<t.length&&t[e].z<=0;++e)t[e].draw(this.chartArea);for(this._drawDatasets();e<t.length;++e)t[e].draw(this.chartArea);this.notifyPlugins(`afterDraw`)}_getSortedDatasetMetas(e){let t=this._sortedMetasets,n=[],r,i;for(r=0,i=t.length;r<i;++r){let i=t[r];(!e||i.visible)&&n.push(i)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins(`beforeDatasetsDraw`,{cancelable:!0})===!1)return;let e=this.getSortedVisibleDatasetMetas();for(let t=e.length-1;t>=0;--t)this._drawDataset(e[t]);this.notifyPlugins(`afterDatasetsDraw`)}_drawDataset(e){let t=this.ctx,n={meta:e,index:e.index,cancelable:!0},r=Vr(this,e);this.notifyPlugins(`beforeDatasetDraw`,n)!==!1&&(r&&cn(t,r),e.controller.draw(),r&&ln(t),n.cancelable=!1,this.notifyPlugins(`afterDatasetDraw`,n))}isPointInArea(e){return sn(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,t,n,r){let i=qi.modes[t];return typeof i==`function`?i(this,e,n,r):[]}getDatasetMeta(e){let t=this.data.datasets[e],n=this._metasets,r=n.filter(e=>e&&e._dataset===t).pop();return r||(r={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:t&&t.order||0,index:e,_dataset:t,_parsed:[],_sorted:!1},n.push(r)),r}getContext(){return this.$context||=En(null,{chart:this,type:`chart`})}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){let t=this.data.datasets[e];if(!t)return!1;let n=this.getDatasetMeta(e);return typeof n.hidden==`boolean`?!n.hidden:!t.hidden}setDatasetVisibility(e,t){let n=this.getDatasetMeta(e);n.hidden=!t}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,t,n){let r=n?`show`:`hide`,i=this.getDatasetMeta(e),a=i.controller._resolveAnimations(void 0,r);Ke(t)?(i.data[t].hidden=!n,this.update()):(this.setDatasetVisibility(e,n),a.update(i,{visible:n}),this.update(t=>t.datasetIndex===e?r:void 0))}hide(e,t){this._updateVisibility(e,t,!1)}show(e,t){this._updateVisibility(e,t,!0)}_destroyDatasetMeta(e){let t=this._metasets[e];t&&t.controller&&t.controller._destroy(),delete this._metasets[e]}_stop(){let e,t;for(this.stop(),Hr.remove(this),e=0,t=this.data.datasets.length;e<t;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins(`beforeDestroy`);let{canvas:e,ctx:t}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),rn(e,t),this.platform.releaseContext(t),this.canvas=null,this.ctx=null),delete zo[this.id],this.notifyPlugins(`afterDestroy`)}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let e=this._listeners,t=this.platform,n=(n,r)=>{t.addEventListener(this,n,r),e[n]=r},r=(e,t,n)=>{e.offsetX=t,e.offsetY=n,this._eventHandler(e)};I(this.options.events,e=>n(e,r))}bindResponsiveEvents(){this._responsiveListeners||={};let e=this._responsiveListeners,t=this.platform,n=(n,r)=>{t.addEventListener(this,n,r),e[n]=r},r=(n,r)=>{e[n]&&(t.removeEventListener(this,n,r),delete e[n])},i=(e,t)=>{this.canvas&&this.resize(e,t)},a,o=()=>{r(`attach`,o),this.attached=!0,this.resize(),n(`resize`,i),n(`detach`,a)};a=()=>{this.attached=!1,r(`resize`,i),this._stop(),this._resize(0,0),n(`attach`,o)},t.isAttached(this.canvas)?o():a()}unbindEvents(){I(this._listeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._listeners={},I(this._responsiveListeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,t,n){let r=n?`set`:`remove`,i,a,o,s;for(t===`dataset`&&(i=this.getDatasetMeta(e[0].datasetIndex),i.controller[`_`+r+`DatasetHoverStyle`]()),o=0,s=e.length;o<s;++o){a=e[o];let t=a&&this.getDatasetMeta(a.datasetIndex).controller;t&&t[r+`HoverStyle`](a.element,a.datasetIndex,a.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){let t=this._active||[],n=e.map(({datasetIndex:e,index:t})=>{let n=this.getDatasetMeta(e);if(!n)throw Error(`No dataset found at index `+e);return{datasetIndex:e,element:n.data[t],index:t}});Pe(n,t)||(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,t))}notifyPlugins(e,t,n){return this._plugins.notify(this,e,t,n)}isPluginEnabled(e){return this._plugins._cache.filter(t=>t.plugin.id===e).length===1}_updateHoverStyles(e,t,n){let r=this.options.hover,i=(e,t)=>e.filter(e=>!t.some(t=>e.datasetIndex===t.datasetIndex&&e.index===t.index)),a=i(t,e),o=n?e:i(e,t);a.length&&this.updateHoverStyle(a,r.mode,!1),o.length&&r.mode&&this.updateHoverStyle(o,r.mode,!0)}_eventHandler(e,t){let n={event:e,replay:t,cancelable:!0,inChartArea:this.isPointInArea(e)},r=t=>(t.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins(`beforeEvent`,n,r)===!1)return;let i=this._handleEvent(e,t,n.inChartArea);return n.cancelable=!1,this.notifyPlugins(`afterEvent`,n,r),(i||n.changed)&&this.render(),this}_handleEvent(e,t,n){let{_active:r=[],options:i}=this,a=t,o=this._getActiveElements(e,r,n,a),s=Ye(e),c=Ho(e,this._lastEvent,n,s);n&&(this._lastEvent=null,F(i.onHover,[e,o,this],this),s&&F(i.onClick,[e,o,this],this));let l=!Pe(o,r);return(l||t)&&(this._active=o,this._updateHoverStyles(o,r,t)),this._lastEvent=c,l}_getActiveElements(e,t,n,r){if(e.type===`mouseout`)return[];if(!n)return t;let i=this.options.hover;return this.getElementsAtEventForMode(e,i.mode,i,r)}};function Wo(){return I(Uo.instances,e=>e._plugins.invalidate())}function Go(e,t,n){let{startAngle:r,x:i,y:a,outerRadius:o,innerRadius:s,options:c}=t,{borderWidth:l,borderJoinStyle:u}=c,d=Math.min(l/o,U(r-n));if(e.beginPath(),e.arc(i,a,o-l/2,r+d/2,n-d/2),s>0){let t=Math.min(l/s,U(r-n));e.arc(i,a,s+l/2,n-t/2,r+t/2,!0)}else{let t=Math.min(l/2,o*U(r-n));if(u===`round`)e.arc(i,a,t,n-L/2,r+L/2,!0);else if(u===`bevel`){let o=2*t*t,s=-o*Math.cos(n+L/2)+i,c=-o*Math.sin(n+L/2)+a,l=o*Math.cos(r+L/2)+i,u=o*Math.sin(r+L/2)+a;e.lineTo(s,c),e.lineTo(l,u)}}e.closePath(),e.moveTo(0,0),e.rect(0,0,e.canvas.width,e.canvas.height),e.clip(`evenodd`)}function Ko(e,t,n){let{startAngle:r,pixelMargin:i,x:a,y:o,outerRadius:s,innerRadius:c}=t,l=i/s;e.beginPath(),e.arc(a,o,s,r-l,n+l),c>i?(l=i/c,e.arc(a,o,c,n+l,r-l,!0)):e.arc(a,o,i,n+z,r-z),e.closePath(),e.clip()}function qo(e){return xn(e,[`outerStart`,`outerEnd`,`innerStart`,`innerEnd`])}function Jo(e,t,n,r){let i=qo(e.options.borderRadius),a=(n-t)/2,o=Math.min(a,r*t/2),s=e=>{let t=(n-Math.min(a,e))*r/2;return W(e,0,Math.min(a,t))};return{outerStart:s(i.outerStart),outerEnd:s(i.outerEnd),innerStart:W(i.innerStart,0,o),innerEnd:W(i.innerEnd,0,o)}}function Yo(e,t,n,r){return{x:n+e*Math.cos(t),y:r+e*Math.sin(t)}}function Xo(e,t,n,r,i,a){let{x:o,y:s,startAngle:c,pixelMargin:l,innerRadius:u}=t,d=Math.max(t.outerRadius+r+n-l,0),f=u>0?u+r+n+l:0,p=0,m=i-c;if(r){let e=((u>0?u-r:0)+(d>0?d-r:0))/2;p=(m-(e===0?m:m*e/(e+r)))/2}let h=(m-Math.max(.001,m*d-n/L)/d)/2,g=c+h+p,_=i-h-p,{outerStart:v,outerEnd:y,innerStart:b,innerEnd:x}=Jo(t,f,d,_-g),S=d-v,C=d-y,w=g+v/S,T=_-y/C,E=f+b,D=f+x,ee=g+b/E,te=_-x/D;if(e.beginPath(),a){let t=(w+T)/2;if(e.arc(o,s,d,w,t),e.arc(o,s,d,t,T),y>0){let t=Yo(C,T,o,s);e.arc(t.x,t.y,y,T,_+z)}let n=Yo(D,_,o,s);if(e.lineTo(n.x,n.y),x>0){let t=Yo(D,te,o,s);e.arc(t.x,t.y,x,_+z,te+Math.PI)}let r=(_-x/f+(g+b/f))/2;if(e.arc(o,s,f,_-x/f,r,!0),e.arc(o,s,f,r,g+b/f,!0),b>0){let t=Yo(E,ee,o,s);e.arc(t.x,t.y,b,ee+Math.PI,g-z)}let i=Yo(S,g,o,s);if(e.lineTo(i.x,i.y),v>0){let t=Yo(S,w,o,s);e.arc(t.x,t.y,v,g-z,w)}}else{e.moveTo(o,s);let t=Math.cos(w)*d+o,n=Math.sin(w)*d+s;e.lineTo(t,n);let r=Math.cos(T)*d+o,i=Math.sin(T)*d+s;e.lineTo(r,i)}e.closePath()}function Zo(e,t,n,r,i){let{fullCircles:a,startAngle:o,circumference:s}=t,c=t.endAngle;if(a){Xo(e,t,n,r,c,i);for(let t=0;t<a;++t)e.fill();isNaN(s)||(c=o+(s%R||R))}return Xo(e,t,n,r,c,i),e.fill(),c}function Qo(e,t,n,r,i){let{fullCircles:a,startAngle:o,circumference:s,options:c}=t,{borderWidth:l,borderJoinStyle:u,borderDash:d,borderDashOffset:f,borderRadius:p}=c,m=c.borderAlign===`inner`;if(!l)return;e.setLineDash(d||[]),e.lineDashOffset=f,m?(e.lineWidth=l*2,e.lineJoin=u||`round`):(e.lineWidth=l,e.lineJoin=u||`bevel`);let h=t.endAngle;if(a){Xo(e,t,n,r,h,i);for(let t=0;t<a;++t)e.stroke();isNaN(s)||(h=o+(s%R||R))}m&&Ko(e,t,h),c.selfJoin&&h-o>=L&&p===0&&u!==`miter`&&Go(e,t,h),a||(Xo(e,t,n,r,h,i),e.stroke())}var $o=class extends Pa{static id=`arc`;static defaults={borderAlign:`center`,borderColor:`#fff`,borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1};static defaultRoutes={backgroundColor:`backgroundColor`};static descriptors={_scriptable:!0,_indexable:e=>e!==`borderDash`};circumference;endAngle;fullCircles;innerRadius;outerRadius;pixelMargin;startAngle;constructor(e){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,t,n){let{angle:r,distance:i}=ut(this.getProps([`x`,`y`],n),{x:e,y:t}),{startAngle:a,endAngle:o,innerRadius:s,outerRadius:c,circumference:l}=this.getProps([`startAngle`,`endAngle`,`innerRadius`,`outerRadius`,`circumference`],n),u=(this.options.spacing+this.options.borderWidth)/2,d=P(l,o-a),f=pt(r,a,o)&&a!==o,p=d>=R||f,m=ht(i,s+u,c+u);return p&&m}getCenterPoint(e){let{x:t,y:n,startAngle:r,endAngle:i,innerRadius:a,outerRadius:o}=this.getProps([`x`,`y`,`startAngle`,`endAngle`,`innerRadius`,`outerRadius`],e),{offset:s,spacing:c}=this.options,l=(r+i)/2,u=(a+o+c+s)/2;return{x:t+Math.cos(l)*u,y:n+Math.sin(l)*u}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){let{options:t,circumference:n}=this,r=(t.offset||0)/4,i=(t.spacing||0)/2,a=t.circular;if(this.pixelMargin=t.borderAlign===`inner`?.33:0,this.fullCircles=n>R?Math.floor(n/R):0,n===0||this.innerRadius<0||this.outerRadius<0)return;e.save();let o=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(o)*r,Math.sin(o)*r);let s=r*(1-Math.sin(Math.min(L,n||0)));e.fillStyle=t.backgroundColor,e.strokeStyle=t.borderColor,Zo(e,this,s,i,a),Qo(e,this,s,i,a),e.restore()}};function es(e,t,n=t){e.lineCap=P(n.borderCapStyle,t.borderCapStyle),e.setLineDash(P(n.borderDash,t.borderDash)),e.lineDashOffset=P(n.borderDashOffset,t.borderDashOffset),e.lineJoin=P(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=P(n.borderWidth,t.borderWidth),e.strokeStyle=P(n.borderColor,t.borderColor)}function ts(e,t,n){e.lineTo(n.x,n.y)}function ns(e){return e.stepped?un:e.tension||e.cubicInterpolationMode===`monotone`?dn:ts}function rs(e,t,n={}){let r=e.length,{start:i=0,end:a=r-1}=n,{start:o,end:s}=t,c=Math.max(i,o),l=Math.min(a,s),u=i<o&&a<o||i>s&&a>s;return{count:r,start:c,loop:t.loop,ilen:l<c&&!u?r+l-c:l-c}}function is(e,t,n,r){let{points:i,options:a}=t,{count:o,start:s,loop:c,ilen:l}=rs(i,n,r),u=ns(a),{move:d=!0,reverse:f}=r||{},p,m,h;for(p=0;p<=l;++p)m=i[(s+(f?l-p:p))%o],!m.skip&&(d?(e.moveTo(m.x,m.y),d=!1):u(e,h,m,f,a.stepped),h=m);return c&&(m=i[(s+(f?l:0))%o],u(e,h,m,f,a.stepped)),!!c}function as(e,t,n,r){let i=t.points,{count:a,start:o,ilen:s}=rs(i,n,r),{move:c=!0,reverse:l}=r||{},u=0,d=0,f,p,m,h,g,_,v=e=>(o+(l?s-e:e))%a,y=()=>{h!==g&&(e.lineTo(u,g),e.lineTo(u,h),e.lineTo(u,_))};for(c&&(p=i[v(0)],e.moveTo(p.x,p.y)),f=0;f<=s;++f){if(p=i[v(f)],p.skip)continue;let t=p.x,n=p.y,r=t|0;r===m?(n<h?h=n:n>g&&(g=n),u=(d*u+t)/++d):(y(),e.lineTo(t,n),m=r,d=0,h=g=n),_=n}y()}function os(e){let t=e.options,n=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!==`monotone`&&!t.stepped&&!n?as:is}function ss(e){return e.stepped?br:e.tension||e.cubicInterpolationMode===`monotone`?xr:yr}function cs(e,t,n,r){let i=t._path;i||(i=t._path=new Path2D,t.path(i,n,r)&&i.closePath()),es(e,t.options),e.stroke(i)}function ls(e,t,n,r){let{segments:i,options:a}=t,o=os(t);for(let s of i)es(e,a,s.style),e.beginPath(),o(e,t,s,{start:n,end:n+r-1})&&e.closePath(),e.stroke()}var us=typeof Path2D==`function`;function ds(e,t,n,r){us&&!t.options.segment?cs(e,t,n,r):ls(e,t,n,r)}var fs=class extends Pa{static id=`line`;static defaults={borderCapStyle:`butt`,borderDash:[],borderDashOffset:0,borderJoinStyle:`miter`,borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:`default`,fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:`backgroundColor`,borderColor:`borderColor`};static descriptors={_scriptable:!0,_indexable:e=>e!==`borderDash`&&e!==`fill`};constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,t){let n=this.options;if((n.tension||n.cubicInterpolationMode===`monotone`)&&!n.stepped&&!this._pointsUpdated){let r=n.spanGaps?this._loop:this._fullLoop;nr(this._points,n,e,r,t),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||=Pr(this,this.options.segment)}first(){let e=this.segments,t=this.points;return e.length&&t[e[0].start]}last(){let e=this.segments,t=this.points,n=e.length;return n&&t[e[n-1].end]}interpolate(e,t){let n=this.options,r=e[t],i=this.points,a=jr(this,{property:t,start:r,end:r});if(!a.length)return;let o=[],s=ss(n),c,l;for(c=0,l=a.length;c<l;++c){let{start:l,end:u}=a[c],d=i[l],f=i[u];if(d===f){o.push(d);continue}let p=s(d,f,Math.abs((r-d[t])/(f[t]-d[t])),n.stepped);p[t]=e[t],o.push(p)}return o.length===1?o[0]:o}pathSegment(e,t,n){return os(this)(e,this,t,n)}path(e,t,n){let r=this.segments,i=os(this),a=this._loop;t||=0,n||=this.points.length-t;for(let o of r)a&=i(e,this,o,{start:t,end:t+n-1});return!!a}draw(e,t,n,r){let i=this.options||{};(this.points||[]).length&&i.borderWidth&&(e.save(),ds(e,this,n,r),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}};function ps(e,t,n,r){let i=e.options,{[n]:a}=e.getProps([n],r);return Math.abs(t-a)<i.radius+i.hitRadius}var ms=class extends Pa{static id=`point`;parsed;skip;stop;static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:`circle`,radius:3,rotation:0};static defaultRoutes={backgroundColor:`backgroundColor`,borderColor:`borderColor`};constructor(e){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,t,n){let r=this.options,{x:i,y:a}=this.getProps([`x`,`y`],n);return(e-i)**2+(t-a)**2<(r.hitRadius+r.radius)**2}inXRange(e,t){return ps(this,e,`x`,t)}inYRange(e,t){return ps(this,e,`y`,t)}getCenterPoint(e){let{x:t,y:n}=this.getProps([`x`,`y`],e);return{x:t,y:n}}size(e){e=e||this.options||{};let t=e.radius||0;t=Math.max(t,t&&e.hoverRadius||0);let n=t&&e.borderWidth||0;return(t+n)*2}draw(e,t){let n=this.options;this.skip||n.radius<.1||!sn(this,t,this.size(n)/2)||(e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.fillStyle=n.backgroundColor,an(e,n,this.x,this.y))}getRange(){let e=this.options||{};return e.radius+e.hitRadius}};function hs(e,t){let{x:n,y:r,base:i,width:a,height:o}=e.getProps([`x`,`y`,`base`,`width`,`height`],t),s,c,l,u,d;return e.horizontal?(d=o/2,s=Math.min(n,i),c=Math.max(n,i),l=r-d,u=r+d):(d=a/2,s=n-d,c=n+d,l=Math.min(r,i),u=Math.max(r,i)),{left:s,top:l,right:c,bottom:u}}function gs(e,t,n,r){return e?0:W(t,n,r)}function _s(e,t,n){let r=e.options.borderWidth,i=e.borderSkipped,a=Sn(r);return{t:gs(i.top,a.top,0,n),r:gs(i.right,a.right,0,t),b:gs(i.bottom,a.bottom,0,n),l:gs(i.left,a.left,0,t)}}function vs(e,t,n){let{enableBorderRadius:r}=e.getProps([`enableBorderRadius`]),i=e.options.borderRadius,a=Cn(i),o=Math.min(t,n),s=e.borderSkipped,c=r||M(i);return{topLeft:gs(!c||s.top||s.left,a.topLeft,0,o),topRight:gs(!c||s.top||s.right,a.topRight,0,o),bottomLeft:gs(!c||s.bottom||s.left,a.bottomLeft,0,o),bottomRight:gs(!c||s.bottom||s.right,a.bottomRight,0,o)}}function ys(e){let t=hs(e),n=t.right-t.left,r=t.bottom-t.top,i=_s(e,n/2,r/2),a=vs(e,n/2,r/2);return{outer:{x:t.left,y:t.top,w:n,h:r,radius:a},inner:{x:t.left+i.l,y:t.top+i.t,w:n-i.l-i.r,h:r-i.t-i.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,a.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(i.b,i.r))}}}}function bs(e,t,n,r){let i=t===null,a=n===null,o=e&&!(i&&a)&&hs(e,r);return o&&(i||ht(t,o.left,o.right))&&(a||ht(n,o.top,o.bottom))}function xs(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function Ss(e,t){e.rect(t.x,t.y,t.w,t.h)}function Cs(e,t,n={}){let r=e.x===n.x?0:-t,i=e.y===n.y?0:-t,a=(e.x+e.w===n.x+n.w?0:t)-r,o=(e.y+e.h===n.y+n.h?0:t)-i;return{x:e.x+r,y:e.y+i,w:e.w+a,h:e.h+o,radius:e.radius}}var ws=Object.freeze({__proto__:null,ArcElement:$o,BarElement:class extends Pa{static id=`bar`;static defaults={borderSkipped:`start`,borderWidth:0,borderRadius:0,inflateAmount:`auto`,pointStyle:void 0};static defaultRoutes={backgroundColor:`backgroundColor`,borderColor:`borderColor`};constructor(e){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,e&&Object.assign(this,e)}draw(e){let{inflateAmount:t,options:{borderColor:n,backgroundColor:r}}=this,{inner:i,outer:a}=ys(this),o=xs(a.radius)?gn:Ss;e.save(),(a.w!==i.w||a.h!==i.h)&&(e.beginPath(),o(e,Cs(a,t,i)),e.clip(),o(e,Cs(i,-t,a)),e.fillStyle=n,e.fill(`evenodd`)),e.beginPath(),o(e,Cs(i,t)),e.fillStyle=r,e.fill(),e.restore()}inRange(e,t,n){return bs(this,e,t,n)}inXRange(e,t){return bs(this,e,null,t)}inYRange(e,t){return bs(this,null,e,t)}getCenterPoint(e){let{x:t,y:n,base:r,horizontal:i}=this.getProps([`x`,`y`,`base`,`horizontal`],e);return{x:i?(t+r)/2:t,y:i?n:(n+r)/2}}getRange(e){return e===`x`?this.width/2:this.height/2}},LineElement:fs,PointElement:ms}),Ts=[`rgb(54, 162, 235)`,`rgb(255, 99, 132)`,`rgb(255, 159, 64)`,`rgb(255, 205, 86)`,`rgb(75, 192, 192)`,`rgb(153, 102, 255)`,`rgb(201, 203, 207)`],Es=Ts.map(e=>e.replace(`rgb(`,`rgba(`).replace(`)`,`, 0.5)`));function Ds(e){return Ts[e%Ts.length]}function Os(e){return Es[e%Es.length]}function ks(e,t){return e.borderColor=Ds(t),e.backgroundColor=Os(t),++t}function As(e,t){return e.backgroundColor=e.data.map(()=>Ds(t++)),t}function js(e,t){return e.backgroundColor=e.data.map(()=>Os(t++)),t}function Ms(e){let t=0;return(n,r)=>{let i=e.getDatasetMeta(r).controller;i instanceof Ni?t=As(n,t):i instanceof Fi?t=js(n,t):i&&(t=ks(n,t))}}function Ns(e){let t;for(t in e)if(e[t].borderColor||e[t].backgroundColor)return!0;return!1}function Ps(e){return e&&(e.borderColor||e.backgroundColor)}function Fs(){return K.borderColor!==`rgba(0,0,0,0.1)`||K.backgroundColor!==`rgba(0,0,0,0.1)`}var Is={id:`colors`,defaults:{enabled:!0,forceOverride:!1},beforeLayout(e,t,n){if(!n.enabled)return;let{data:{datasets:r},options:i}=e.config,{elements:a}=i,o=Ns(r)||Ps(i)||a&&Ns(a)||Fs();if(!n.forceOverride&&o)return;let s=Ms(e);r.forEach(s)}};function Ls(e,t,n,r,i){let a=i.samples||r;if(a>=n)return e.slice(t,t+n);let o=[],s=(n-2)/(a-2),c=0,l=t+n-1,u=t,d,f,p,m,h;for(o[c++]=e[u],d=0;d<a-2;d++){let r=0,i=0,a,l=Math.floor((d+1)*s)+1+t,g=Math.min(Math.floor((d+2)*s)+1,n)+t,_=g-l;for(a=l;a<g;a++)r+=e[a].x,i+=e[a].y;r/=_,i/=_;let v=Math.floor(d*s)+1+t,y=Math.min(Math.floor((d+1)*s)+1,n)+t,{x:b,y:x}=e[u];for(p=m=-1,a=v;a<y;a++)m=.5*Math.abs((b-r)*(e[a].y-x)-(b-e[a].x)*(i-x)),m>p&&(p=m,f=e[a],h=a);o[c++]=f,u=h}return o[c++]=e[l],o}function Rs(e,t,n,r){let i=0,a=0,o,s,c,l,u,d,f,p,m,h,g=[],_=t+n-1,v=e[t].x,y=e[_].x-v;for(o=t;o<t+n;++o){s=e[o],c=(s.x-v)/y*r,l=s.y;let t=c|0;if(t===u)l<m?(m=l,d=o):l>h&&(h=l,f=o),i=(a*i+s.x)/++a;else{let n=o-1;if(!A(d)&&!A(f)){let t=Math.min(d,f),r=Math.max(d,f);t!==p&&t!==n&&g.push({...e[t],x:i}),r!==p&&r!==n&&g.push({...e[r],x:i})}o>0&&n!==p&&g.push(e[n]),g.push(s),u=t,a=0,m=h=l,d=f=p=o}}return g}function zs(e){if(e._decimated){let t=e._data;delete e._decimated,delete e._data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function Bs(e){e.data.datasets.forEach(e=>{zs(e)})}function Vs(e,t){let n=t.length,r=0,i,{iScale:a}=e,{min:o,max:s,minDefined:c,maxDefined:l}=a.getUserBounds();return c&&(r=W(_t(t,a.axis,o).lo,0,n-1)),i=l?W(_t(t,a.axis,s).hi+1,r,n)-r:n-r,{start:r,count:i}}var Hs={id:`decimation`,defaults:{algorithm:`min-max`,enabled:!1},beforeElementsUpdate:(e,t,n)=>{if(!n.enabled){Bs(e);return}let r=e.width;e.data.datasets.forEach((t,i)=>{let{_data:a,indexAxis:o}=t,s=e.getDatasetMeta(i),c=a||t.data;if(wn([o,e.options.indexAxis])===`y`||!s.controller.supportsDecimation)return;let l=e.scales[s.xAxisID];if(l.type!==`linear`&&l.type!==`time`||e.options.parsing)return;let{start:u,count:d}=Vs(s,c);if(d<=(n.threshold||4*r)){zs(t);return}A(a)&&(t._data=c,delete t.data,Object.defineProperty(t,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(e){this._data=e}}));let f;switch(n.algorithm){case`lttb`:f=Ls(c,u,d,r,n);break;case`min-max`:f=Rs(c,u,d,r);break;default:throw Error(`Unsupported decimation algorithm '${n.algorithm}'`)}t._decimated=f})},destroy(e){Bs(e)}};function Us(e,t,n){let r=e.segments,i=e.points,a=t.points,o=[];for(let e of r){let{start:r,end:s}=e;s=Ks(r,s,i);let c=Ws(n,i[r],i[s],e.loop);if(!t.segments){o.push({source:e,target:c,start:i[r],end:i[s]});continue}let l=jr(t,c);for(let t of l){let r=Ws(n,a[t.start],a[t.end],t.loop),s=Ar(e,i,r);for(let e of s)o.push({source:e,target:t,start:{[n]:qs(c,r,`start`,Math.max)},end:{[n]:qs(c,r,`end`,Math.min)}})}}return o}function Ws(e,t,n,r){if(r)return;let i=t[e],a=n[e];return e===`angle`&&(i=U(i),a=U(a)),{property:e,start:i,end:a}}function Gs(e,t){let{x:n=null,y:r=null}=e||{},i=t.points,a=[];return t.segments.forEach(({start:e,end:t})=>{t=Ks(e,t,i);let o=i[e],s=i[t];r===null?n!==null&&(a.push({x:n,y:o.y}),a.push({x:n,y:s.y})):(a.push({x:o.x,y:r}),a.push({x:s.x,y:r}))}),a}function Ks(e,t,n){for(;t>e;t--){let e=n[t];if(!isNaN(e.x)&&!isNaN(e.y))break}return t}function qs(e,t,n,r){return e&&t?r(e[n],t[n]):e?e[n]:t?t[n]:0}function Js(e,t){let n=[],r=!1;return j(e)?(r=!0,n=e):n=Gs(e,t),n.length?new fs({points:n,options:{tension:0},_loop:r,_fullLoop:r}):null}function Ys(e){return e&&e.fill!==!1}function Xs(e,t,n){let r=e[t].fill,i=[t],a;if(!n)return r;for(;r!==!1&&i.indexOf(r)===-1;){if(!N(r))return r;if(a=e[r],!a)return!1;if(a.visible)return r;i.push(r),r=a.fill}return!1}function Zs(e,t,n){let r=tc(e);if(M(r))return!isNaN(r.value)&&r;let i=parseFloat(r);return N(i)&&Math.floor(i)===i?Qs(r[0],t,i,n):[`origin`,`start`,`end`,`stack`,`shape`].indexOf(r)>=0&&r}function Qs(e,t,n,r){return(e===`-`||e===`+`)&&(n=t+n),n===t||n<0||n>=r?!1:n}function $s(e,t){let n=null;return e===`start`?n=t.bottom:e===`end`?n=t.top:M(e)?n=t.getPixelForValue(e.value):t.getBasePixel&&(n=t.getBasePixel()),n}function ec(e,t,n){let r;return r=e===`start`?n:e===`end`?t.options.reverse?t.min:t.max:M(e)?e.value:t.getBaseValue(),r}function tc(e){let t=e.options,n=t.fill,r=P(n&&n.target,n);return r===void 0&&(r=!!t.backgroundColor),r===!1||r===null?!1:r===!0?`origin`:r}function nc(e){let{scale:t,index:n,line:r}=e,i=[],a=r.segments,o=r.points,s=rc(t,n);s.push(Js({x:null,y:t.bottom},r));for(let e=0;e<a.length;e++){let t=a[e];for(let e=t.start;e<=t.end;e++)ic(i,o[e],s)}return new fs({points:i,options:{}})}function rc(e,t){let n=[],r=e.getMatchingVisibleMetas(`line`);for(let e=0;e<r.length;e++){let i=r[e];if(i.index===t)break;i.hidden||n.unshift(i.dataset)}return n}function ic(e,t,n){let r=[];for(let i=0;i<n.length;i++){let a=n[i],{first:o,last:s,point:c}=ac(a,t,`x`);if(!(!c||o&&s)){if(o)r.unshift(c);else if(e.push(c),!s)break}}e.push(...r)}function ac(e,t,n){let r=e.interpolate(t,n);if(!r)return{};let i=r[n],a=e.segments,o=e.points,s=!1,c=!1;for(let e=0;e<a.length;e++){let t=a[e],r=o[t.start][n],l=o[t.end][n];if(ht(i,r,l)){s=i===r,c=i===l;break}}return{first:s,last:c,point:r}}var oc=class{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,t,n){let{x:r,y:i,radius:a}=this;return t||={start:0,end:R},e.arc(r,i,a,t.end,t.start,!0),!n.bounds}interpolate(e){let{x:t,y:n,radius:r}=this,i=e.angle;return{x:t+Math.cos(i)*r,y:n+Math.sin(i)*r,angle:i}}};function sc(e){let{chart:t,fill:n,line:r}=e;if(N(n))return cc(t,n);if(n===`stack`)return nc(e);if(n===`shape`)return!0;let i=lc(e);return i instanceof oc?i:Js(i,r)}function cc(e,t){let n=e.getDatasetMeta(t);return n&&e.isDatasetVisible(t)?n.dataset:null}function lc(e){return(e.scale||{}).getPointPositionForValue?dc(e):uc(e)}function uc(e){let{scale:t={},fill:n}=e,r=$s(n,t);if(N(r)){let e=t.isHorizontal();return{x:e?r:null,y:e?null:r}}return null}function dc(e){let{scale:t,fill:n}=e,r=t.options,i=t.getLabels().length,a=r.reverse?t.max:t.min,o=ec(n,t,a),s=[];if(r.grid.circular){let e=t.getPointPositionForValue(0,a);return new oc({x:e.x,y:e.y,radius:t.getDistanceFromCenterForValue(o)})}for(let e=0;e<i;++e)s.push(t.getPointPositionForValue(e,o));return s}function fc(e,t,n){let r=sc(t),{chart:i,index:a,line:o,scale:s,axis:c}=t,l=o.options,u=l.fill,d=l.backgroundColor,{above:f=d,below:p=d}=u||{},m=Vr(i,i.getDatasetMeta(a));r&&o.points.length&&(cn(e,n),pc(e,{line:o,target:r,above:f,below:p,area:n,scale:s,axis:c,clip:m}),ln(e))}function pc(e,t){let{line:n,target:r,above:i,below:a,area:o,scale:s,clip:c}=t,l=n._loop?`angle`:t.axis;e.save();let u=a;a!==i&&(l===`x`?(mc(e,r,o.top),gc(e,{line:n,target:r,color:i,scale:s,property:l,clip:c}),e.restore(),e.save(),mc(e,r,o.bottom)):l===`y`&&(hc(e,r,o.left),gc(e,{line:n,target:r,color:a,scale:s,property:l,clip:c}),e.restore(),e.save(),hc(e,r,o.right),u=i)),gc(e,{line:n,target:r,color:u,scale:s,property:l,clip:c}),e.restore()}function mc(e,t,n){let{segments:r,points:i}=t,a=!0,o=!1;e.beginPath();for(let s of r){let{start:r,end:c}=s,l=i[r],u=i[Ks(r,c,i)];a?(e.moveTo(l.x,l.y),a=!1):(e.lineTo(l.x,n),e.lineTo(l.x,l.y)),o=!!t.pathSegment(e,s,{move:o}),o?e.closePath():e.lineTo(u.x,n)}e.lineTo(t.first().x,n),e.closePath(),e.clip()}function hc(e,t,n){let{segments:r,points:i}=t,a=!0,o=!1;e.beginPath();for(let s of r){let{start:r,end:c}=s,l=i[r],u=i[Ks(r,c,i)];a?(e.moveTo(l.x,l.y),a=!1):(e.lineTo(n,l.y),e.lineTo(l.x,l.y)),o=!!t.pathSegment(e,s,{move:o}),o?e.closePath():e.lineTo(n,u.y)}e.lineTo(n,t.first().y),e.closePath(),e.clip()}function gc(e,t){let{line:n,target:r,property:i,color:a,scale:o,clip:s}=t,c=Us(n,r,i);for(let{source:t,target:l,start:u,end:d}of c){let{style:{backgroundColor:c=a}={}}=t,f=r!==!0;e.save(),e.fillStyle=c,_c(e,o,s,f&&Ws(i,u,d)),e.beginPath();let p=!!n.pathSegment(e,t),m;if(f){p?e.closePath():vc(e,r,d,i);let t=!!r.pathSegment(e,l,{move:p,reverse:!0});m=p&&t,m||vc(e,r,u,i)}e.closePath(),e.fill(m?`evenodd`:`nonzero`),e.restore()}}function _c(e,t,n,r){let i=t.chart.chartArea,{property:a,start:o,end:s}=r||{};if(a===`x`||a===`y`){let t,r,c,l;a===`x`?(t=o,r=i.top,c=s,l=i.bottom):(t=i.left,r=o,c=i.right,l=s),e.beginPath(),n&&(t=Math.max(t,n.left),c=Math.min(c,n.right),r=Math.max(r,n.top),l=Math.min(l,n.bottom)),e.rect(t,r,c-t,l-r),e.clip()}}function vc(e,t,n,r){let i=t.interpolate(n,r);i&&e.lineTo(i.x,i.y)}var yc={id:`filler`,afterDatasetsUpdate(e,t,n){let r=(e.data.datasets||[]).length,i=[],a,o,s,c;for(o=0;o<r;++o)a=e.getDatasetMeta(o),s=a.dataset,c=null,s&&s.options&&s instanceof fs&&(c={visible:e.isDatasetVisible(o),index:o,fill:Zs(s,o,r),chart:e,axis:a.controller.options.indexAxis,scale:a.vScale,line:s}),a.$filler=c,i.push(c);for(o=0;o<r;++o)c=i[o],c&&c.fill!==!1&&(c.fill=Xs(i,o,n.propagate))},beforeDraw(e,t,n){let r=n.drawTime===`beforeDraw`,i=e.getSortedVisibleDatasetMetas(),a=e.chartArea;for(let t=i.length-1;t>=0;--t){let n=i[t].$filler;n&&(n.line.updateControlPoints(a,n.axis),r&&n.fill&&fc(e.ctx,n,a))}},beforeDatasetsDraw(e,t,n){if(n.drawTime!==`beforeDatasetsDraw`)return;let r=e.getSortedVisibleDatasetMetas();for(let t=r.length-1;t>=0;--t){let n=r[t].$filler;Ys(n)&&fc(e.ctx,n,e.chartArea)}},beforeDatasetDraw(e,t,n){let r=t.meta.$filler;Ys(r)&&n.drawTime===`beforeDatasetDraw`&&fc(e.ctx,r,e.chartArea)},defaults:{propagate:!0,drawTime:`beforeDatasetDraw`}},bc=(e,t)=>{let{boxHeight:n=t,boxWidth:r=t}=e;return e.usePointStyle&&(n=Math.min(n,t),r=e.pointStyleWidth||Math.min(r,t)),{boxWidth:r,boxHeight:n,itemHeight:Math.max(t,n)}},xc=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index,Sc=class extends Pa{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t,n){this.maxWidth=e,this.maxHeight=t,this._margins=n,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){let e=this.options.labels||{},t=F(e.generateLabels,[this.chart],this)||[];e.filter&&(t=t.filter(t=>e.filter(t,this.chart.data))),e.sort&&(t=t.sort((t,n)=>e.sort(t,n,this.chart.data))),this.options.reverse&&t.reverse(),this.legendItems=t}fit(){let{options:e,ctx:t}=this;if(!e.display){this.width=this.height=0;return}let n=e.labels,r=J(n.font),i=r.size,a=this._computeTitleHeight(),{boxWidth:o,itemHeight:s}=bc(n,i),c,l;t.font=r.string,this.isHorizontal()?(c=this.maxWidth,l=this._fitRows(a,i,o,s)+10):(l=this.maxHeight,c=this._fitCols(a,r,o,s)+10),this.width=Math.min(c,e.maxWidth||this.maxWidth),this.height=Math.min(l,e.maxHeight||this.maxHeight)}_fitRows(e,t,n,r){let{ctx:i,maxWidth:a,options:{labels:{padding:o}}}=this,s=this.legendHitBoxes=[],c=this.lineWidths=[0],l=r+o,u=e;i.textAlign=`left`,i.textBaseline=`middle`;let d=-1,f=-l;return this.legendItems.forEach((e,p)=>{let m=n+t/2+i.measureText(e.text).width;(p===0||c[c.length-1]+m+2*o>a)&&(u+=l,c[c.length-(p>0?0:1)]=0,f+=l,d++),s[p]={left:0,top:f,row:d,width:m,height:r},c[c.length-1]+=m+o}),u}_fitCols(e,t,n,r){let{ctx:i,maxHeight:a,options:{labels:{padding:o}}}=this,s=this.legendHitBoxes=[],c=this.columnSizes=[],l=a-e,u=o,d=0,f=0,p=0,m=0;return this.legendItems.forEach((e,a)=>{let{itemWidth:h,itemHeight:g}=Cc(n,t,i,e,r);a>0&&f+g+2*o>l&&(u+=d+o,c.push({width:d,height:f}),p+=d+o,m++,d=f=0),s[a]={left:p,top:f,col:m,width:h,height:g},d=Math.max(d,h),f+=g+o}),u+=d,c.push({width:d,height:f}),u}adjustHitBoxes(){if(!this.options.display)return;let e=this._computeTitleHeight(),{legendHitBoxes:t,options:{align:n,labels:{padding:r},rtl:i}}=this,a=wr(i,this.left,this.width);if(this.isHorizontal()){let i=0,o=G(n,this.left+r,this.right-this.lineWidths[i]);for(let s of t)i!==s.row&&(i=s.row,o=G(n,this.left+r,this.right-this.lineWidths[i])),s.top+=this.top+e+r,s.left=a.leftForLtr(a.x(o),s.width),o+=s.width+r}else{let i=0,o=G(n,this.top+e+r,this.bottom-this.columnSizes[i].height);for(let s of t)s.col!==i&&(i=s.col,o=G(n,this.top+e+r,this.bottom-this.columnSizes[i].height)),s.top=o,s.left+=this.left+r,s.left=a.leftForLtr(a.x(s.left),s.width),o+=s.height+r}}isHorizontal(){return this.options.position===`top`||this.options.position===`bottom`}draw(){if(this.options.display){let e=this.ctx;cn(e,this),this._draw(),ln(e)}}_draw(){let{options:e,columnSizes:t,lineWidths:n,ctx:r}=this,{align:i,labels:a}=e,o=K.color,s=wr(e.rtl,this.left,this.width),c=J(a.font),{padding:l}=a,u=c.size,d=u/2,f;this.drawTitle(),r.textAlign=s.textAlign(`left`),r.textBaseline=`middle`,r.lineWidth=.5,r.font=c.string;let{boxWidth:p,boxHeight:m,itemHeight:h}=bc(a,u),g=function(e,t,n){if(isNaN(p)||p<=0||isNaN(m)||m<0)return;r.save();let i=P(n.lineWidth,1);if(r.fillStyle=P(n.fillStyle,o),r.lineCap=P(n.lineCap,`butt`),r.lineDashOffset=P(n.lineDashOffset,0),r.lineJoin=P(n.lineJoin,`miter`),r.lineWidth=i,r.strokeStyle=P(n.strokeStyle,o),r.setLineDash(P(n.lineDash,[])),a.usePointStyle){let o={radius:m*Math.SQRT2/2,pointStyle:n.pointStyle,rotation:n.rotation,borderWidth:i},c=s.xPlus(e,p/2),l=t+d;on(r,o,c,l,a.pointStyleWidth&&p)}else{let a=t+Math.max((u-m)/2,0),o=s.leftForLtr(e,p),c=Cn(n.borderRadius);r.beginPath(),Object.values(c).some(e=>e!==0)?gn(r,{x:o,y:a,w:p,h:m,radius:c}):r.rect(o,a,p,m),r.fill(),i!==0&&r.stroke()}r.restore()},_=function(e,t,n){hn(r,n.text,e,t+h/2,c,{strikethrough:n.hidden,textAlign:s.textAlign(n.textAlign)})},v=this.isHorizontal(),y=this._computeTitleHeight();f=v?{x:G(i,this.left+l,this.right-n[0]),y:this.top+l+y,line:0}:{x:this.left+l,y:G(i,this.top+y+l,this.bottom-t[0].height),line:0},Tr(this.ctx,e.textDirection);let b=h+l;this.legendItems.forEach((o,u)=>{r.strokeStyle=o.fontColor,r.fillStyle=o.fontColor;let m=r.measureText(o.text).width,h=s.textAlign(o.textAlign||=a.textAlign),x=p+d+m,S=f.x,C=f.y;s.setWidth(this.width),v?u>0&&S+x+l>this.right&&(C=f.y+=b,f.line++,S=f.x=G(i,this.left+l,this.right-n[f.line])):u>0&&C+b>this.bottom&&(S=f.x=S+t[f.line].width+l,f.line++,C=f.y=G(i,this.top+y+l,this.bottom-t[f.line].height));let w=s.x(S);if(g(w,C,o),S=Ot(h,S+p+d,v?S+x:this.right,e.rtl),_(s.x(S),C,o),v)f.x+=x+l;else if(typeof o.text!=`string`){let e=c.lineHeight;f.y+=Ec(o,e)+l}else f.y+=b}),Er(this.ctx,e.textDirection)}drawTitle(){let e=this.options,t=e.title,n=J(t.font),r=q(t.padding);if(!t.display)return;let i=wr(e.rtl,this.left,this.width),a=this.ctx,o=t.position,s=n.size/2,c=r.top+s,l,u=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),l=this.top+c,u=G(e.align,u,this.right-d);else{let t=this.columnSizes.reduce((e,t)=>Math.max(e,t.height),0);l=c+G(e.align,this.top,this.bottom-t-e.labels.padding-this._computeTitleHeight())}let f=G(o,u,u+d);a.textAlign=i.textAlign(Dt(o)),a.textBaseline=`middle`,a.strokeStyle=t.color,a.fillStyle=t.color,a.font=n.string,hn(a,t.text,f,l,n)}_computeTitleHeight(){let e=this.options.title,t=J(e.font),n=q(e.padding);return e.display?t.lineHeight+n.height:0}_getLegendItemAt(e,t){let n,r,i;if(ht(e,this.left,this.right)&&ht(t,this.top,this.bottom)){for(i=this.legendHitBoxes,n=0;n<i.length;++n)if(r=i[n],ht(e,r.left,r.left+r.width)&&ht(t,r.top,r.top+r.height))return this.legendItems[n]}return null}handleEvent(e){let t=this.options;if(!Dc(e.type,t))return;let n=this._getLegendItemAt(e.x,e.y);if(e.type===`mousemove`||e.type===`mouseout`){let r=this._hoveredItem,i=xc(r,n);r&&!i&&F(t.onLeave,[e,r,this],this),this._hoveredItem=n,n&&!i&&F(t.onHover,[e,n,this],this)}else n&&F(t.onClick,[e,n,this],this)}};function Cc(e,t,n,r,i){return{itemWidth:wc(r,e,t,n),itemHeight:Tc(i,r,t.lineHeight)}}function wc(e,t,n,r){let i=e.text;return i&&typeof i!=`string`&&(i=i.reduce((e,t)=>e.length>t.length?e:t)),t+n.size/2+r.measureText(i).width}function Tc(e,t,n){let r=e;return typeof t.text!=`string`&&(r=Ec(t,n)),r}function Ec(e,t){return t*(e.text?e.text.length:0)}function Dc(e,t){return!!((e===`mousemove`||e===`mouseout`)&&(t.onHover||t.onLeave)||t.onClick&&(e===`click`||e===`mouseup`))}var Oc={id:`legend`,_element:Sc,start(e,t,n){let r=e.legend=new Sc({ctx:e.ctx,options:n,chart:e});ua.configure(e,r,n),ua.addBox(e,r)},stop(e){ua.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,n){let r=e.legend;ua.configure(e,r,n),r.options=n},afterUpdate(e){let t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:`top`,align:`center`,fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,n){let r=t.datasetIndex,i=n.chart;i.isDatasetVisible(r)?(i.hide(r),t.hidden=!0):(i.show(r),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){let t=e.data.datasets,{labels:{usePointStyle:n,pointStyle:r,textAlign:i,color:a,useBorderRadius:o,borderRadius:s}}=e.legend.options;return e._getSortedDatasetMetas().map(e=>{let c=e.controller.getStyle(n?0:void 0),l=q(c.borderWidth);return{text:t[e.index].label,fillStyle:c.backgroundColor,fontColor:a,hidden:!e.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(l.width+l.height)/4,strokeStyle:c.borderColor,pointStyle:r||c.pointStyle,rotation:c.rotation,textAlign:i||c.textAlign,borderRadius:o&&(s||c.borderRadius),datasetIndex:e.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:`center`,text:``}},descriptors:{_scriptable:e=>!e.startsWith(`on`),labels:{_scriptable:e=>![`generateLabels`,`filter`,`sort`].includes(e)}}},kc=class extends Pa{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t){let n=this.options;if(this.left=0,this.top=0,!n.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=t;let r=j(n.text)?n.text.length:1;this._padding=q(n.padding);let i=r*J(n.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=i:this.width=i}isHorizontal(){let e=this.options.position;return e===`top`||e===`bottom`}_drawArgs(e){let{top:t,left:n,bottom:r,right:i,options:a}=this,o=a.align,s=0,c,l,u;return this.isHorizontal()?(l=G(o,n,i),u=t+e,c=i-n):(a.position===`left`?(l=n+e,u=G(o,r,t),s=L*-.5):(l=i-e,u=G(o,t,r),s=L*.5),c=r-t),{titleX:l,titleY:u,maxWidth:c,rotation:s}}draw(){let e=this.ctx,t=this.options;if(!t.display)return;let n=J(t.font),r=n.lineHeight/2+this._padding.top,{titleX:i,titleY:a,maxWidth:o,rotation:s}=this._drawArgs(r);hn(e,t.text,0,0,n,{color:t.color,maxWidth:o,rotation:s,textAlign:Dt(t.align),textBaseline:`middle`,translation:[i,a]})}};function Ac(e,t){let n=new kc({ctx:e.ctx,options:t,chart:e});ua.configure(e,n,t),ua.addBox(e,n),e.titleBlock=n}var jc={id:`title`,_element:kc,start(e,t,n){Ac(e,n)},stop(e){let t=e.titleBlock;ua.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,n){let r=e.titleBlock;ua.configure(e,r,n),r.options=n},defaults:{align:`center`,display:!1,font:{weight:`bold`},fullSize:!0,padding:10,position:`top`,text:``,weight:2e3},defaultRoutes:{color:`color`},descriptors:{_scriptable:!0,_indexable:!1}},Mc=new WeakMap,Nc={id:`subtitle`,start(e,t,n){let r=new kc({ctx:e.ctx,options:n,chart:e});ua.configure(e,r,n),ua.addBox(e,r),Mc.set(e,r)},stop(e){ua.removeBox(e,Mc.get(e)),Mc.delete(e)},beforeUpdate(e,t,n){let r=Mc.get(e);ua.configure(e,r,n),r.options=n},defaults:{align:`center`,display:!1,font:{weight:`normal`},fullSize:!0,padding:0,position:`top`,text:``,weight:1500},defaultRoutes:{color:`color`},descriptors:{_scriptable:!0,_indexable:!1}},Pc={average(e){if(!e.length)return!1;let t,n,r=new Set,i=0,a=0;for(t=0,n=e.length;t<n;++t){let n=e[t].element;if(n&&n.hasValue()){let e=n.tooltipPosition();r.add(e.x),i+=e.y,++a}}return a===0||r.size===0?!1:{x:[...r].reduce((e,t)=>e+t)/r.size,y:i/a}},nearest(e,t){if(!e.length)return!1;let n=t.x,r=t.y,i=1/0,a,o,s;for(a=0,o=e.length;a<o;++a){let n=e[a].element;if(n&&n.hasValue()){let e=dt(t,n.getCenterPoint());e<i&&(i=e,s=n)}}if(s){let e=s.tooltipPosition();n=e.x,r=e.y}return{x:n,y:r}}};function Fc(e,t){return t&&(j(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function Ic(e){return(typeof e==`string`||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function Lc(e,t){let{element:n,datasetIndex:r,index:i}=t,a=e.getDatasetMeta(r).controller,{label:o,value:s}=a.getLabelAndValue(i);return{chart:e,label:o,parsed:a.getParsed(i),raw:e.data.datasets[r].data[i],formattedValue:s,dataset:a.getDataset(),dataIndex:i,datasetIndex:r,element:n}}function Rc(e,t){let n=e.chart.ctx,{body:r,footer:i,title:a}=e,{boxWidth:o,boxHeight:s}=t,c=J(t.bodyFont),l=J(t.titleFont),u=J(t.footerFont),d=a.length,f=i.length,p=r.length,m=q(t.padding),h=m.height,g=0,_=r.reduce((e,t)=>e+t.before.length+t.lines.length+t.after.length,0);if(_+=e.beforeBody.length+e.afterBody.length,d&&(h+=d*l.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),_){let e=t.displayColors?Math.max(s,c.lineHeight):c.lineHeight;h+=p*e+(_-p)*c.lineHeight+(_-1)*t.bodySpacing}f&&(h+=t.footerMarginTop+f*u.lineHeight+(f-1)*t.footerSpacing);let v=0,y=function(e){g=Math.max(g,n.measureText(e).width+v)};return n.save(),n.font=l.string,I(e.title,y),n.font=c.string,I(e.beforeBody.concat(e.afterBody),y),v=t.displayColors?o+2+t.boxPadding:0,I(r,e=>{I(e.before,y),I(e.lines,y),I(e.after,y)}),v=0,n.font=u.string,I(e.footer,y),n.restore(),g+=m.width,{width:g,height:h}}function zc(e,t){let{y:n,height:r}=t;return n<r/2?`top`:n>e.height-r/2?`bottom`:`center`}function Bc(e,t,n,r){let{x:i,width:a}=r,o=n.caretSize+n.caretPadding;if(e===`left`&&i+a+o>t.width||e===`right`&&i-a-o<0)return!0}function Vc(e,t,n,r){let{x:i,width:a}=n,{width:o,chartArea:{left:s,right:c}}=e,l=`center`;return r===`center`?l=i<=(s+c)/2?`left`:`right`:i<=a/2?l=`left`:i>=o-a/2&&(l=`right`),Bc(l,e,t,n)&&(l=`center`),l}function Hc(e,t,n){let r=n.yAlign||t.yAlign||zc(e,n);return{xAlign:n.xAlign||t.xAlign||Vc(e,t,n,r),yAlign:r}}function Uc(e,t){let{x:n,width:r}=e;return t===`right`?n-=r:t===`center`&&(n-=r/2),n}function Wc(e,t,n){let{y:r,height:i}=e;return t===`top`?r+=n:r-=t===`bottom`?i+n:i/2,r}function Gc(e,t,n,r){let{caretSize:i,caretPadding:a,cornerRadius:o}=e,{xAlign:s,yAlign:c}=n,l=i+a,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:p}=Cn(o),m=Uc(t,s),h=Wc(t,c,l);return c===`center`?s===`left`?m+=l:s===`right`&&(m-=l):s===`left`?m-=Math.max(u,f)+i:s===`right`&&(m+=Math.max(d,p)+i),{x:W(m,0,r.width-t.width),y:W(h,0,r.height-t.height)}}function Kc(e,t,n){let r=q(n.padding);return t===`center`?e.x+e.width/2:t===`right`?e.x+e.width-r.right:e.x+r.left}function qc(e){return Fc([],Ic(e))}function Jc(e,t,n){return En(e,{tooltip:t,tooltipItems:n,type:`tooltip`})}function Yc(e,t){let n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}var Xc={beforeTitle:ke,title(e){if(e.length>0){let t=e[0],n=t.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode===`dataset`)return t.dataset.label||``;if(t.label)return t.label;if(r>0&&t.dataIndex<r)return n[t.dataIndex]}return``},afterTitle:ke,beforeBody:ke,beforeLabel:ke,label(e){if(this&&this.options&&this.options.mode===`dataset`)return e.label+`: `+e.formattedValue||e.formattedValue;let t=e.dataset.label||``;t&&(t+=`: `);let n=e.formattedValue;return A(n)||(t+=n),t},labelColor(e){let t=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:t.borderColor,backgroundColor:t.backgroundColor,borderWidth:t.borderWidth,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){let t=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:t.pointStyle,rotation:t.rotation}},afterLabel:ke,afterBody:ke,beforeFooter:ke,footer:ke,afterFooter:ke};function Zc(e,t,n,r){let i=e[t].call(n,r);return i===void 0?Xc[t].call(n,r):i}var Qc=class extends Pa{static positioners=Pc;constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let e=this._cachedAnimations;if(e)return e;let t=this.chart,n=this.options.setContext(this.getContext()),r=n.enabled&&t.options.animation&&n.animations,i=new Kr(this.chart,r);return r._cacheable&&(this._cachedAnimations=Object.freeze(i)),i}getContext(){return this.$context||=Jc(this.chart.getContext(),this,this._tooltipItems)}getTitle(e,t){let{callbacks:n}=t,r=Zc(n,`beforeTitle`,this,e),i=Zc(n,`title`,this,e),a=Zc(n,`afterTitle`,this,e),o=[];return o=Fc(o,Ic(r)),o=Fc(o,Ic(i)),o=Fc(o,Ic(a)),o}getBeforeBody(e,t){return qc(Zc(t.callbacks,`beforeBody`,this,e))}getBody(e,t){let{callbacks:n}=t,r=[];return I(e,e=>{let t={before:[],lines:[],after:[]},i=Yc(n,e);Fc(t.before,Ic(Zc(i,`beforeLabel`,this,e))),Fc(t.lines,Zc(i,`label`,this,e)),Fc(t.after,Ic(Zc(i,`afterLabel`,this,e))),r.push(t)}),r}getAfterBody(e,t){return qc(Zc(t.callbacks,`afterBody`,this,e))}getFooter(e,t){let{callbacks:n}=t,r=Zc(n,`beforeFooter`,this,e),i=Zc(n,`footer`,this,e),a=Zc(n,`afterFooter`,this,e),o=[];return o=Fc(o,Ic(r)),o=Fc(o,Ic(i)),o=Fc(o,Ic(a)),o}_createItems(e){let t=this._active,n=this.chart.data,r=[],i=[],a=[],o=[],s,c;for(s=0,c=t.length;s<c;++s)o.push(Lc(this.chart,t[s]));return e.filter&&(o=o.filter((t,r,i)=>e.filter(t,r,i,n))),e.itemSort&&(o=o.sort((t,r)=>e.itemSort(t,r,n))),I(o,t=>{let n=Yc(e.callbacks,t);r.push(Zc(n,`labelColor`,this,t)),i.push(Zc(n,`labelPointStyle`,this,t)),a.push(Zc(n,`labelTextColor`,this,t))}),this.labelColors=r,this.labelPointStyles=i,this.labelTextColors=a,this.dataPoints=o,o}update(e,t){let n=this.options.setContext(this.getContext()),r=this._active,i,a=[];if(!r.length)this.opacity!==0&&(i={opacity:0});else{let e=Pc[n.position].call(this,r,this._eventPosition);a=this._createItems(n),this.title=this.getTitle(a,n),this.beforeBody=this.getBeforeBody(a,n),this.body=this.getBody(a,n),this.afterBody=this.getAfterBody(a,n),this.footer=this.getFooter(a,n);let t=this._size=Rc(this,n),o=Object.assign({},e,t),s=Hc(this.chart,n,o),c=Gc(n,o,s,this.chart);this.xAlign=s.xAlign,this.yAlign=s.yAlign,i={opacity:1,x:c.x,y:c.y,width:t.width,height:t.height,caretX:e.x,caretY:e.y}}this._tooltipItems=a,this.$context=void 0,i&&this._resolveAnimations().update(this,i),e&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:t})}drawCaret(e,t,n,r){let i=this.getCaretPosition(e,n,r);t.lineTo(i.x1,i.y1),t.lineTo(i.x2,i.y2),t.lineTo(i.x3,i.y3)}getCaretPosition(e,t,n){let{xAlign:r,yAlign:i}=this,{caretSize:a,cornerRadius:o}=n,{topLeft:s,topRight:c,bottomLeft:l,bottomRight:u}=Cn(o),{x:d,y:f}=e,{width:p,height:m}=t,h,g,_,v,y,b;return i===`center`?(y=f+m/2,r===`left`?(h=d,g=h-a,v=y+a,b=y-a):(h=d+p,g=h+a,v=y-a,b=y+a),_=h):(g=r===`left`?d+Math.max(s,l)+a:r===`right`?d+p-Math.max(c,u)-a:this.caretX,i===`top`?(v=f,y=v-a,h=g-a,_=g+a):(v=f+m,y=v+a,h=g+a,_=g-a),b=v),{x1:h,x2:g,x3:_,y1:v,y2:y,y3:b}}drawTitle(e,t,n){let r=this.title,i=r.length,a,o,s;if(i){let c=wr(n.rtl,this.x,this.width);for(e.x=Kc(this,n.titleAlign,n),t.textAlign=c.textAlign(n.titleAlign),t.textBaseline=`middle`,a=J(n.titleFont),o=n.titleSpacing,t.fillStyle=n.titleColor,t.font=a.string,s=0;s<i;++s)t.fillText(r[s],c.x(e.x),e.y+a.lineHeight/2),e.y+=a.lineHeight+o,s+1===i&&(e.y+=n.titleMarginBottom-o)}}_drawColorBox(e,t,n,r,i){let a=this.labelColors[n],o=this.labelPointStyles[n],{boxHeight:s,boxWidth:c}=i,l=J(i.bodyFont),u=Kc(this,`left`,i),d=r.x(u),f=s<l.lineHeight?(l.lineHeight-s)/2:0,p=t.y+f;if(i.usePointStyle){let t={radius:Math.min(c,s)/2,pointStyle:o.pointStyle,rotation:o.rotation,borderWidth:1},n=r.leftForLtr(d,c)+c/2,l=p+s/2;e.strokeStyle=i.multiKeyBackground,e.fillStyle=i.multiKeyBackground,an(e,t,n,l),e.strokeStyle=a.borderColor,e.fillStyle=a.backgroundColor,an(e,t,n,l)}else{e.lineWidth=M(a.borderWidth)?Math.max(...Object.values(a.borderWidth)):a.borderWidth||1,e.strokeStyle=a.borderColor,e.setLineDash(a.borderDash||[]),e.lineDashOffset=a.borderDashOffset||0;let t=r.leftForLtr(d,c),n=r.leftForLtr(r.xPlus(d,1),c-2),o=Cn(a.borderRadius);Object.values(o).some(e=>e!==0)?(e.beginPath(),e.fillStyle=i.multiKeyBackground,gn(e,{x:t,y:p,w:c,h:s,radius:o}),e.fill(),e.stroke(),e.fillStyle=a.backgroundColor,e.beginPath(),gn(e,{x:n,y:p+1,w:c-2,h:s-2,radius:o}),e.fill()):(e.fillStyle=i.multiKeyBackground,e.fillRect(t,p,c,s),e.strokeRect(t,p,c,s),e.fillStyle=a.backgroundColor,e.fillRect(n,p+1,c-2,s-2))}e.fillStyle=this.labelTextColors[n]}drawBody(e,t,n){let{body:r}=this,{bodySpacing:i,bodyAlign:a,displayColors:o,boxHeight:s,boxWidth:c,boxPadding:l}=n,u=J(n.bodyFont),d=u.lineHeight,f=0,p=wr(n.rtl,this.x,this.width),m=function(n){t.fillText(n,p.x(e.x+f),e.y+d/2),e.y+=d+i},h=p.textAlign(a),g,_,v,y,b,x,S;for(t.textAlign=a,t.textBaseline=`middle`,t.font=u.string,e.x=Kc(this,h,n),t.fillStyle=n.bodyColor,I(this.beforeBody,m),f=o&&h!==`right`?a===`center`?c/2+l:c+2+l:0,y=0,x=r.length;y<x;++y){for(g=r[y],_=this.labelTextColors[y],t.fillStyle=_,I(g.before,m),v=g.lines,o&&v.length&&(this._drawColorBox(t,e,y,p,n),d=Math.max(u.lineHeight,s)),b=0,S=v.length;b<S;++b)m(v[b]),d=u.lineHeight;I(g.after,m)}f=0,d=u.lineHeight,I(this.afterBody,m),e.y-=i}drawFooter(e,t,n){let r=this.footer,i=r.length,a,o;if(i){let s=wr(n.rtl,this.x,this.width);for(e.x=Kc(this,n.footerAlign,n),e.y+=n.footerMarginTop,t.textAlign=s.textAlign(n.footerAlign),t.textBaseline=`middle`,a=J(n.footerFont),t.fillStyle=n.footerColor,t.font=a.string,o=0;o<i;++o)t.fillText(r[o],s.x(e.x),e.y+a.lineHeight/2),e.y+=a.lineHeight+n.footerSpacing}}drawBackground(e,t,n,r){let{xAlign:i,yAlign:a}=this,{x:o,y:s}=e,{width:c,height:l}=n,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:p}=Cn(r.cornerRadius);t.fillStyle=r.backgroundColor,t.strokeStyle=r.borderColor,t.lineWidth=r.borderWidth,t.beginPath(),t.moveTo(o+u,s),a===`top`&&this.drawCaret(e,t,n,r),t.lineTo(o+c-d,s),t.quadraticCurveTo(o+c,s,o+c,s+d),a===`center`&&i===`right`&&this.drawCaret(e,t,n,r),t.lineTo(o+c,s+l-p),t.quadraticCurveTo(o+c,s+l,o+c-p,s+l),a===`bottom`&&this.drawCaret(e,t,n,r),t.lineTo(o+f,s+l),t.quadraticCurveTo(o,s+l,o,s+l-f),a===`center`&&i===`left`&&this.drawCaret(e,t,n,r),t.lineTo(o,s+u),t.quadraticCurveTo(o,s,o+u,s),t.closePath(),t.fill(),r.borderWidth>0&&t.stroke()}_updateAnimationTarget(e){let t=this.chart,n=this.$animations,r=n&&n.x,i=n&&n.y;if(r||i){let n=Pc[e.position].call(this,this._active,this._eventPosition);if(!n)return;let a=this._size=Rc(this,e),o=Object.assign({},n,this._size),s=Hc(t,e,o),c=Gc(e,o,s,t);(r._to!==c.x||i._to!==c.y)&&(this.xAlign=s.xAlign,this.yAlign=s.yAlign,this.width=a.width,this.height=a.height,this.caretX=n.x,this.caretY=n.y,this._resolveAnimations().update(this,c))}}_willRender(){return!!this.opacity}draw(e){let t=this.options.setContext(this.getContext()),n=this.opacity;if(!n)return;this._updateAnimationTarget(t);let r={width:this.width,height:this.height},i={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;let a=q(t.padding),o=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;t.enabled&&o&&(e.save(),e.globalAlpha=n,this.drawBackground(i,e,r,t),Tr(e,t.textDirection),i.y+=a.top,this.drawTitle(i,e,t),this.drawBody(i,e,t),this.drawFooter(i,e,t),Er(e,t.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,t){let n=this._active,r=e.map(({datasetIndex:e,index:t})=>{let n=this.chart.getDatasetMeta(e);if(!n)throw Error(`Cannot find a dataset at index `+e);return{datasetIndex:e,element:n.data[t],index:t}}),i=!Pe(n,r),a=this._positionChanged(r,t);(i||a)&&(this._active=r,this._eventPosition=t,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,t,n=!0){if(t&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let r=this.options,i=this._active||[],a=this._getActiveElements(e,i,t,n),o=this._positionChanged(a,e),s=t||!Pe(a,i)||o;return s&&(this._active=a,(r.enabled||r.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,t))),s}_getActiveElements(e,t,n,r){let i=this.options;if(e.type===`mouseout`)return[];if(!r)return t.filter(e=>this.chart.data.datasets[e.datasetIndex]&&this.chart.getDatasetMeta(e.datasetIndex).controller.getParsed(e.index)!==void 0);let a=this.chart.getElementsAtEventForMode(e,i.mode,i,n);return i.reverse&&a.reverse(),a}_positionChanged(e,t){let{caretX:n,caretY:r,options:i}=this,a=Pc[i.position].call(this,e,t);return a!==!1&&(n!==a.x||r!==a.y)}},$c=Object.freeze({__proto__:null,Colors:Is,Decimation:Hs,Filler:yc,Legend:Oc,SubTitle:Nc,Title:jc,Tooltip:{id:`tooltip`,_element:Qc,positioners:Pc,afterInit(e,t,n){n&&(e.tooltip=new Qc({chart:e,options:n}))},beforeUpdate(e,t,n){e.tooltip&&e.tooltip.initialize(n)},reset(e,t,n){e.tooltip&&e.tooltip.initialize(n)},afterDraw(e){let t=e.tooltip;if(t&&t._willRender()){let n={tooltip:t};if(e.notifyPlugins(`beforeTooltipDraw`,{...n,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins(`afterTooltipDraw`,n)}},afterEvent(e,t){if(e.tooltip){let n=t.replay;e.tooltip.handleEvent(t.event,n,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:`average`,backgroundColor:`rgba(0,0,0,0.8)`,titleColor:`#fff`,titleFont:{weight:`bold`},titleSpacing:2,titleMarginBottom:6,titleAlign:`left`,bodyColor:`#fff`,bodySpacing:2,bodyFont:{},bodyAlign:`left`,footerColor:`#fff`,footerSpacing:2,footerMarginTop:6,footerFont:{weight:`bold`},footerAlign:`left`,padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:`#fff`,displayColors:!0,boxPadding:0,borderColor:`rgba(0,0,0,0)`,borderWidth:0,animation:{duration:400,easing:`easeOutQuart`},animations:{numbers:{type:`number`,properties:[`x`,`y`,`width`,`height`,`caretX`,`caretY`]},opacity:{easing:`linear`,duration:200}},callbacks:Xc},defaultRoutes:{bodyFont:`font`,footerFont:`font`,titleFont:`font`},descriptors:{_scriptable:e=>e!==`filter`&&e!==`itemSort`&&e!==`external`,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:`animation`}},additionalOptionScopes:[`interaction`]}}),el=(e,t,n,r)=>(typeof t==`string`?(n=e.push(t)-1,r.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function tl(e,t,n,r){let i=e.indexOf(t);return i===-1?el(e,t,n,r):i===e.lastIndexOf(t)?i:n}var nl=(e,t)=>e===null?null:W(Math.round(e),0,t);function rl(e){let t=this.getLabels();return e>=0&&e<t.length?t[e]:e}var il=class extends eo{static id=`category`;static defaults={ticks:{callback:rl}};constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){let t=this._addedLabels;if(t.length){let e=this.getLabels();for(let{index:n,label:r}of t)e[n]===r&&e.splice(n,1);this._addedLabels=[]}super.init(e)}parse(e,t){if(A(e))return null;let n=this.getLabels();return t=isFinite(t)&&n[t]===e?t:tl(n,e,P(t,e),this._addedLabels),nl(t,n.length-1)}determineDataLimits(){let{minDefined:e,maxDefined:t}=this.getUserBounds(),{min:n,max:r}=this.getMinMax(!0);this.options.bounds===`ticks`&&(e||(n=0),t||(r=this.getLabels().length-1)),this.min=n,this.max=r}buildTicks(){let e=this.min,t=this.max,n=this.options.offset,r=[],i=this.getLabels();i=e===0&&t===i.length-1?i:i.slice(e,t+1),this._valueRange=Math.max(i.length-+!n,1),this._startValue=this.min-(n?.5:0);for(let n=e;n<=t;n++)r.push({value:n});return r}getLabelForValue(e){return rl.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!=`number`&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){let t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}};function al(e,t){let n=[],{bounds:r,step:i,min:a,max:o,precision:s,count:c,maxTicks:l,maxDigits:u,includeBounds:d}=e,f=i||1,p=l-1,{min:m,max:h}=t,g=!A(a),_=!A(o),v=!A(c),y=(h-m)/(u+1),b=tt((h-m)/p/f)*f,x,S,C,w;if(b<1e-14&&!g&&!_)return[{value:m},{value:h}];w=Math.ceil(h/b)-Math.floor(m/b),w>p&&(b=tt(w*b/p/f)*f),A(s)||(x=10**s,b=Math.ceil(b*x)/x),r===`ticks`?(S=Math.floor(m/b)*b,C=Math.ceil(h/b)*b):(S=m,C=h),g&&_&&i&&at((o-a)/i,b/1e3)?(w=Math.round(Math.min((o-a)/b,l)),b=(o-a)/w,S=a,C=o):v?(S=g?a:S,C=_?o:C,w=c-1,b=(C-S)/w):(w=(C-S)/b,w=H(w,Math.round(w),b/1e3)?Math.round(w):Math.ceil(w));let T=Math.max(lt(b),lt(S));x=10**(A(s)?T:s),S=Math.round(S*x)/x,C=Math.round(C*x)/x;let E=0;for(g&&(d&&S!==a?(n.push({value:a}),S<a&&E++,H(Math.round((S+E*b)*x)/x,a,ol(a,y,e))&&E++):S<a&&E++);E<w;++E){let e=Math.round((S+E*b)*x)/x;if(_&&e>o)break;n.push({value:e})}return _&&d&&C!==o?n.length&&H(n[n.length-1].value,o,ol(o,y,e))?n[n.length-1].value=o:n.push({value:o}):(!_||C===o)&&n.push({value:C}),n}function ol(e,t,{horizontal:n,minRotation:r}){let i=st(r),a=(n?Math.sin(i):Math.cos(i))||.001,o=.75*t*(``+e).length;return Math.min(t/a,o)}var sl=class extends eo{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,t){return A(e)||(typeof e==`number`||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){let{beginAtZero:e}=this.options,{minDefined:t,maxDefined:n}=this.getUserBounds(),{min:r,max:i}=this,a=e=>r=t?r:e,o=e=>i=n?i:e;if(e){let e=V(r),t=V(i);e<0&&t<0?o(0):e>0&&t>0&&a(0)}if(r===i){let t=i===0?1:Math.abs(i*.05);o(i+t),e||a(r-t)}this.min=r,this.max=i}getTickLimit(){let{maxTicksLimit:e,stepSize:t}=this.options.ticks,n;return t?(n=Math.ceil(this.max/t)-Math.floor(this.min/t)+1,n>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${t} would result generating up to ${n} ticks. Limiting to 1000.`),n=1e3)):(n=this.computeTickLimit(),e||=11),e&&(n=Math.min(e,n)),n}computeTickLimit(){return 1/0}buildTicks(){let e=this.options,t=e.ticks,n=this.getTickLimit();n=Math.max(2,n);let r=al({maxTicks:n,bounds:e.bounds,min:e.min,max:e.max,precision:t.precision,step:t.stepSize,count:t.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:t.minRotation||0,includeBounds:t.includeBounds!==!1},this._range||this);return e.bounds===`ticks`&&ot(r,this,`value`),e.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}configure(){let e=this.ticks,t=this.min,n=this.max;if(super.configure(),this.options.offset&&e.length){let r=(n-t)/Math.max(e.length-1,1)/2;t-=r,n+=r}this._startValue=t,this._endValue=n,this._valueRange=n-t}getLabelForValue(e){return Wt(e,this.chart.options.locale,this.options.ticks.format)}},cl=class extends sl{static id=`linear`;static defaults={ticks:{callback:qt.formatters.numeric}};determineDataLimits(){let{min:e,max:t}=this.getMinMax(!0);this.min=N(e)?e:0,this.max=N(t)?t:1,this.handleTickRangeOptions()}computeTickLimit(){let e=this.isHorizontal(),t=e?this.width:this.height,n=st(this.options.ticks.minRotation),r=(e?Math.sin(n):Math.cos(n))||.001,i=this._resolveTickFontOptions(0);return Math.ceil(t/Math.min(40,i.lineHeight/r))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}},ll=e=>Math.floor(B(e)),ul=(e,t)=>10**(ll(e)+t);function dl(e){return e/10**ll(e)==1}function fl(e,t,n){let r=10**n,i=Math.floor(e/r);return Math.ceil(t/r)-i}function pl(e,t){let n=ll(t-e);for(;fl(e,t,n)>10;)n++;for(;fl(e,t,n)<10;)n--;return Math.min(n,ll(e))}function ml(e,{min:t,max:n}){t=je(e.min,t);let r=[],i=ll(t),a=pl(t,n),o=a<0?10**Math.abs(a):1,s=10**a,c=i>a?10**i:0,l=Math.round((t-c)*o)/o,u=Math.floor((t-c)/s/10)*s*10,d=Math.floor((l-u)/10**a),f=je(e.min,Math.round((c+u+d*10**a)*o)/o);for(;f<n;)r.push({value:f,major:dl(f),significand:d}),d>=10?d=d<15?15:20:d++,d>=20&&(a++,d=2,o=a>=0?1:o),f=Math.round((c+u+d*10**a)*o)/o;let p=je(e.max,f);return r.push({value:p,major:dl(p),significand:d}),r}var hl=class extends eo{static id=`logarithmic`;static defaults={ticks:{callback:qt.formatters.logarithmic,major:{enabled:!0}}};constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,t){let n=sl.prototype.parse.apply(this,[e,t]);if(n===0){this._zero=!0;return}return N(n)&&n>0?n:null}determineDataLimits(){let{min:e,max:t}=this.getMinMax(!0);this.min=N(e)?Math.max(0,e):null,this.max=N(t)?Math.max(0,t):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!N(this._userMin)&&(this.min=e===ul(this.min,0)?ul(this.min,-1):ul(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:e,maxDefined:t}=this.getUserBounds(),n=this.min,r=this.max,i=t=>n=e?n:t,a=e=>r=t?r:e;n===r&&(n<=0?(i(1),a(10)):(i(ul(n,-1)),a(ul(r,1)))),n<=0&&i(ul(r,-1)),r<=0&&a(ul(n,1)),this.min=n,this.max=r}buildTicks(){let e=this.options,t=ml({min:this._userMin,max:this._userMax},this);return e.bounds===`ticks`&&ot(t,this,`value`),e.reverse?(t.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),t}getLabelForValue(e){return e===void 0?`0`:Wt(e,this.chart.options.locale,this.options.ticks.format)}configure(){let e=this.min;super.configure(),this._startValue=B(e),this._valueRange=B(this.max)-B(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(B(e)-this._startValue)/this._valueRange)}getValueForPixel(e){let t=this.getDecimalForPixel(e);return 10**(this._startValue+t*this._valueRange)}};function gl(e){let t=e.ticks;if(t.display&&e.display){let e=q(t.backdropPadding);return P(t.font&&t.font.size,K.font.size)+e.height}return 0}function _l(e,t,n){return n=j(n)?n:[n],{w:tn(e,t.string,n),h:n.length*t.lineHeight}}function vl(e,t,n,r,i){return e===r||e===i?{start:t-n/2,end:t+n/2}:e<r||e>i?{start:t-n,end:t}:{start:t,end:t+n}}function yl(e){let t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},n=Object.assign({},t),r=[],i=[],a=e._pointLabels.length,o=e.options.pointLabels,s=o.centerPointLabels?L/a:0;for(let c=0;c<a;c++){let a=o.setContext(e.getPointLabelContext(c));i[c]=a.padding;let l=e.getPointPosition(c,e.drawingArea+i[c],s),u=J(a.font),d=_l(e.ctx,u,e._pointLabels[c]);r[c]=d;let f=U(e.getIndexAngle(c)+s),p=Math.round(ct(f));bl(n,t,f,vl(p,l.x,d.w,0,180),vl(p,l.y,d.h,90,270))}e.setCenterPoint(t.l-n.l,n.r-t.r,t.t-n.t,n.b-t.b),e._pointLabelItems=Cl(e,r,i)}function bl(e,t,n,r,i){let a=Math.abs(Math.sin(n)),o=Math.abs(Math.cos(n)),s=0,c=0;r.start<t.l?(s=(t.l-r.start)/a,e.l=Math.min(e.l,t.l-s)):r.end>t.r&&(s=(r.end-t.r)/a,e.r=Math.max(e.r,t.r+s)),i.start<t.t?(c=(t.t-i.start)/o,e.t=Math.min(e.t,t.t-c)):i.end>t.b&&(c=(i.end-t.b)/o,e.b=Math.max(e.b,t.b+c))}function xl(e,t,n){let r=e.drawingArea,{extra:i,additionalAngle:a,padding:o,size:s}=n,c=e.getPointPosition(t,r+i+o,a),l=Math.round(ct(U(c.angle+z))),u=El(c.y,s.h,l),d=wl(l),f=Tl(c.x,s.w,d);return{visible:!0,x:c.x,y:u,textAlign:d,left:f,top:u,right:f+s.w,bottom:u+s.h}}function Sl(e,t){if(!t)return!0;let{left:n,top:r,right:i,bottom:a}=e;return!(sn({x:n,y:r},t)||sn({x:n,y:a},t)||sn({x:i,y:r},t)||sn({x:i,y:a},t))}function Cl(e,t,n){let r=[],i=e._pointLabels.length,a=e.options,{centerPointLabels:o,display:s}=a.pointLabels,c={extra:gl(a)/2,additionalAngle:o?L/i:0},l;for(let a=0;a<i;a++){c.padding=n[a],c.size=t[a];let i=xl(e,a,c);r.push(i),s===`auto`&&(i.visible=Sl(i,l),i.visible&&(l=i))}return r}function wl(e){return e===0||e===180?`center`:e<180?`left`:`right`}function Tl(e,t,n){return n===`right`?e-=t:n===`center`&&(e-=t/2),e}function El(e,t,n){return n===90||n===270?e-=t/2:(n>270||n<90)&&(e-=t),e}function Dl(e,t,n){let{left:r,top:i,right:a,bottom:o}=n,{backdropColor:s}=t;if(!A(s)){let n=Cn(t.borderRadius),c=q(t.backdropPadding);e.fillStyle=s;let l=r-c.left,u=i-c.top,d=a-r+c.width,f=o-i+c.height;Object.values(n).some(e=>e!==0)?(e.beginPath(),gn(e,{x:l,y:u,w:d,h:f,radius:n}),e.fill()):e.fillRect(l,u,d,f)}}function Ol(e,t){let{ctx:n,options:{pointLabels:r}}=e;for(let i=t-1;i>=0;i--){let t=e._pointLabelItems[i];if(!t.visible)continue;let a=r.setContext(e.getPointLabelContext(i));Dl(n,a,t);let o=J(a.font),{x:s,y:c,textAlign:l}=t;hn(n,e._pointLabels[i],s,c+o.lineHeight/2,o,{color:a.color,textAlign:l,textBaseline:`middle`})}}function kl(e,t,n,r){let{ctx:i}=e;if(n)i.arc(e.xCenter,e.yCenter,t,0,R);else{let n=e.getPointPosition(0,t);i.moveTo(n.x,n.y);for(let a=1;a<r;a++)n=e.getPointPosition(a,t),i.lineTo(n.x,n.y)}}function Al(e,t,n,r,i){let a=e.ctx,o=t.circular,{color:s,lineWidth:c}=t;!o&&!r||!s||!c||n<0||(a.save(),a.strokeStyle=s,a.lineWidth=c,a.setLineDash(i.dash||[]),a.lineDashOffset=i.dashOffset,a.beginPath(),kl(e,n,o,r),a.closePath(),a.stroke(),a.restore())}function jl(e,t,n){return En(e,{label:n,index:t,type:`pointLabel`})}var Ml=class extends sl{static id=`radialLinear`;static defaults={display:!0,animate:!0,position:`chartArea`,angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:qt.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}};static defaultRoutes={"angleLines.color":`borderColor`,"pointLabels.color":`color`,"ticks.color":`color`};static descriptors={angleLines:{_fallback:`grid`}};constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let e=this._padding=q(gl(this.options)/2),t=this.width=this.maxWidth-e.width,n=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+t/2+e.left),this.yCenter=Math.floor(this.top+n/2+e.top),this.drawingArea=Math.floor(Math.min(t,n)/2)}determineDataLimits(){let{min:e,max:t}=this.getMinMax(!1);this.min=N(e)&&!isNaN(e)?e:0,this.max=N(t)&&!isNaN(t)?t:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/gl(this.options))}generateTickLabels(e){sl.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((e,t)=>{let n=F(this.options.pointLabels.callback,[e,t],this);return n||n===0?n:``}).filter((e,t)=>this.chart.getDataVisibility(t))}fit(){let e=this.options;e.display&&e.pointLabels.display?yl(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,t,n,r){this.xCenter+=Math.floor((e-t)/2),this.yCenter+=Math.floor((n-r)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,t,n,r))}getIndexAngle(e){let t=R/(this._pointLabels.length||1),n=this.options.startAngle||0;return U(e*t+st(n))}getDistanceFromCenterForValue(e){if(A(e))return NaN;let t=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*t:(e-this.min)*t}getValueForDistanceFromCenter(e){if(A(e))return NaN;let t=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-t:this.min+t}getPointLabelContext(e){let t=this._pointLabels||[];if(e>=0&&e<t.length){let n=t[e];return jl(this.getContext(),e,n)}}getPointPosition(e,t,n=0){let r=this.getIndexAngle(e)-z+n;return{x:Math.cos(r)*t+this.xCenter,y:Math.sin(r)*t+this.yCenter,angle:r}}getPointPositionForValue(e,t){return this.getPointPosition(e,this.getDistanceFromCenterForValue(t))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){let{left:t,top:n,right:r,bottom:i}=this._pointLabelItems[e];return{left:t,top:n,right:r,bottom:i}}drawBackground(){let{backgroundColor:e,grid:{circular:t}}=this.options;if(e){let n=this.ctx;n.save(),n.beginPath(),kl(this,this.getDistanceFromCenterForValue(this._endValue),t,this._pointLabels.length),n.closePath(),n.fillStyle=e,n.fill(),n.restore()}}drawGrid(){let e=this.ctx,t=this.options,{angleLines:n,grid:r,border:i}=t,a=this._pointLabels.length,o,s,c;if(t.pointLabels.display&&Ol(this,a),r.display&&this.ticks.forEach((e,t)=>{if(t!==0||t===0&&this.min<0){s=this.getDistanceFromCenterForValue(e.value);let n=this.getContext(t),o=r.setContext(n),c=i.setContext(n);Al(this,o,s,a,c)}}),n.display){for(e.save(),o=a-1;o>=0;o--){let r=n.setContext(this.getPointLabelContext(o)),{color:i,lineWidth:a}=r;a&&i&&(e.lineWidth=a,e.strokeStyle=i,e.setLineDash(r.borderDash),e.lineDashOffset=r.borderDashOffset,s=this.getDistanceFromCenterForValue(t.reverse?this.min:this.max),c=this.getPointPosition(o,s),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(c.x,c.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){let e=this.ctx,t=this.options,n=t.ticks;if(!n.display)return;let r=this.getIndexAngle(0),i,a;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(r),e.textAlign=`center`,e.textBaseline=`middle`,this.ticks.forEach((r,o)=>{if(o===0&&this.min>=0&&!t.reverse)return;let s=n.setContext(this.getContext(o)),c=J(s.font);if(i=this.getDistanceFromCenterForValue(this.ticks[o].value),s.showLabelBackdrop){e.font=c.string,a=e.measureText(r.label).width,e.fillStyle=s.backdropColor;let t=q(s.backdropPadding);e.fillRect(-a/2-t.left,-i-c.size/2-t.top,a+t.width,c.size+t.height)}hn(e,r.label,0,-i,c,{color:s.color,strokeColor:s.textStrokeColor,strokeWidth:s.textStrokeWidth})}),e.restore()}drawTitle(){}},Nl={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Pl=Object.keys(Nl);function Fl(e,t){return e-t}function Il(e,t){if(A(t))return null;let n=e._adapter,{parser:r,round:i,isoWeekday:a}=e._parseOpts,o=t;return typeof r==`function`&&(o=r(o)),N(o)||(o=typeof r==`string`?n.parse(o,r):n.parse(o)),o===null?null:(i&&(o=i===`week`&&(it(a)||a===!0)?n.startOf(o,`isoWeek`,a):n.startOf(o,i)),+o)}function Ll(e,t,n,r){let i=Pl.length;for(let a=Pl.indexOf(e);a<i-1;++a){let e=Nl[Pl[a]],i=e.steps?e.steps:2**53-1;if(e.common&&Math.ceil((n-t)/(i*e.size))<=r)return Pl[a]}return Pl[i-1]}function Rl(e,t,n,r,i){for(let a=Pl.length-1;a>=Pl.indexOf(n);a--){let n=Pl[a];if(Nl[n].common&&e._adapter.diff(i,r,n)>=t-1)return n}return Pl[n?Pl.indexOf(n):0]}function zl(e){for(let t=Pl.indexOf(e)+1,n=Pl.length;t<n;++t)if(Nl[Pl[t]].common)return Pl[t]}function Bl(e,t,n){if(!n)e[t]=!0;else if(n.length){let{lo:r,hi:i}=gt(n,t),a=n[r]>=t?n[r]:n[i];e[a]=!0}}function Vl(e,t,n,r){let i=e._adapter,a=+i.startOf(t[0].value,r),o=t[t.length-1].value,s,c;for(s=a;s<=o;s=+i.add(s,1,r))c=n[s],c>=0&&(t[c].major=!0);return t}function Hl(e,t,n){let r=[],i={},a=t.length,o,s;for(o=0;o<a;++o)s=t[o],i[s]=o,r.push({value:s,major:!1});return a===0||!n?r:Vl(e,r,i,n)}var Ul=class extends eo{static id=`time`;static defaults={bounds:`data`,adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:`millisecond`,displayFormats:{}},ticks:{source:`auto`,callback:!1,major:{enabled:!1}}};constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit=`day`,this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,t={}){let n=e.time||={},r=this._adapter=new Ri._date(e.adapters.date);r.init(t),ze(n.displayFormats,r.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(e),this._normalized=t.normalized}parse(e,t){return e===void 0?null:Il(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let e=this.options,t=this._adapter,n=e.time.unit||`day`,{min:r,max:i,minDefined:a,maxDefined:o}=this.getUserBounds();function s(e){!a&&!isNaN(e.min)&&(r=Math.min(r,e.min)),!o&&!isNaN(e.max)&&(i=Math.max(i,e.max))}(!a||!o)&&(s(this._getLabelBounds()),(e.bounds!==`ticks`||e.ticks.source!==`labels`)&&s(this.getMinMax(!1))),r=N(r)&&!isNaN(r)?r:+t.startOf(Date.now(),n),i=N(i)&&!isNaN(i)?i:+t.endOf(Date.now(),n)+1,this.min=Math.min(r,i-1),this.max=Math.max(r+1,i)}_getLabelBounds(){let e=this.getLabelTimestamps(),t=1/0,n=-1/0;return e.length&&(t=e[0],n=e[e.length-1]),{min:t,max:n}}buildTicks(){let e=this.options,t=e.time,n=e.ticks,r=n.source===`labels`?this.getLabelTimestamps():this._generate();e.bounds===`ticks`&&r.length&&(this.min=this._userMin||r[0],this.max=this._userMax||r[r.length-1]);let i=this.min,a=this.max,o=yt(r,i,a);return this._unit=t.unit||(n.autoSkip?Ll(t.minUnit,this.min,this.max,this._getLabelCapacity(i)):Rl(this,o.length,t.minUnit,this.min,this.max)),this._majorUnit=!n.major.enabled||this._unit===`year`?void 0:zl(this._unit),this.initOffsets(r),e.reverse&&o.reverse(),Hl(this,o,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let t=0,n=0,r,i;this.options.offset&&e.length&&(r=this.getDecimalForValue(e[0]),t=e.length===1?1-r:(this.getDecimalForValue(e[1])-r)/2,i=this.getDecimalForValue(e[e.length-1]),n=e.length===1?i:(i-this.getDecimalForValue(e[e.length-2]))/2);let a=e.length<3?.5:.25;t=W(t,0,a),n=W(n,0,a),this._offsets={start:t,end:n,factor:1/(t+1+n)}}_generate(){let e=this._adapter,t=this.min,n=this.max,r=this.options,i=r.time,a=i.unit||Ll(i.minUnit,t,n,this._getLabelCapacity(t)),o=P(r.ticks.stepSize,1),s=a===`week`&&i.isoWeekday,c=it(s)||s===!0,l={},u=t,d,f;if(c&&(u=+e.startOf(u,`isoWeek`,s)),u=+e.startOf(u,c?`day`:a),e.diff(n,t,a)>1e5*o)throw Error(t+` and `+n+` are too far apart with stepSize of `+o+` `+a);let p=r.ticks.source===`data`&&this.getDataTimestamps();for(d=u,f=0;d<n;d=+e.add(d,o,a),f++)Bl(l,d,p);return(d===n||r.bounds===`ticks`||f===1)&&Bl(l,d,p),Object.keys(l).sort(Fl).map(e=>+e)}getLabelForValue(e){let t=this._adapter,n=this.options.time;return n.tooltipFormat?t.format(e,n.tooltipFormat):t.format(e,n.displayFormats.datetime)}format(e,t){let n=this.options.time.displayFormats,r=this._unit,i=t||n[r];return this._adapter.format(e,i)}_tickFormatFunction(e,t,n,r){let i=this.options,a=i.ticks.callback;if(a)return F(a,[e,t,n],this);let o=i.time.displayFormats,s=this._unit,c=this._majorUnit,l=s&&o[s],u=c&&o[c],d=n[t],f=c&&u&&d&&d.major;return this._adapter.format(e,r||(f?u:l))}generateTickLabels(e){let t,n,r;for(t=0,n=e.length;t<n;++t)r=e[t],r.label=this._tickFormatFunction(r.value,t,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){let t=this._offsets,n=this.getDecimalForValue(e);return this.getPixelForDecimal((t.start+n)*t.factor)}getValueForPixel(e){let t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return this.min+n*(this.max-this.min)}_getLabelSize(e){let t=this.options.ticks,n=this.ctx.measureText(e).width,r=st(this.isHorizontal()?t.maxRotation:t.minRotation),i=Math.cos(r),a=Math.sin(r),o=this._resolveTickFontOptions(0).size;return{w:n*i+o*a,h:n*a+o*i}}_getLabelCapacity(e){let t=this.options.time,n=t.displayFormats,r=n[t.unit]||n.millisecond,i=this._tickFormatFunction(e,0,Hl(this,[e],this._majorUnit),r),a=this._getLabelSize(i),o=Math.floor(this.isHorizontal()?this.width/a.w:this.height/a.h)-1;return o>0?o:1}getDataTimestamps(){let e=this._cache.data||[],t,n;if(e.length)return e;let r=this.getMatchingVisibleMetas();if(this._normalized&&r.length)return this._cache.data=r[0].controller.getAllParsedValues(this);for(t=0,n=r.length;t<n;++t)e=e.concat(r[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){let e=this._cache.labels||[],t,n;if(e.length)return e;let r=this.getLabels();for(t=0,n=r.length;t<n;++t)e.push(Il(this,r[t]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return Ct(e.sort(Fl))}};function Wl(e,t,n){let r=0,i=e.length-1,a,o,s,c;n?(t>=e[r].pos&&t<=e[i].pos&&({lo:r,hi:i}=_t(e,`pos`,t)),{pos:a,time:s}=e[r],{pos:o,time:c}=e[i]):(t>=e[r].time&&t<=e[i].time&&({lo:r,hi:i}=_t(e,`time`,t)),{time:a,pos:s}=e[r],{time:o,pos:c}=e[i]);let l=o-a;return l?s+(c-s)*(t-a)/l:s}var Gl=class extends Ul{static id=`timeseries`;static defaults=Ul.defaults;constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let e=this._getTimestampsForTable(),t=this._table=this.buildLookupTable(e);this._minPos=Wl(t,this.min),this._tableRange=Wl(t,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){let{min:t,max:n}=this,r=[],i=[],a,o,s,c,l;for(a=0,o=e.length;a<o;++a)c=e[a],c>=t&&c<=n&&r.push(c);if(r.length<2)return[{time:t,pos:0},{time:n,pos:1}];for(a=0,o=r.length;a<o;++a)l=r[a+1],s=r[a-1],c=r[a],Math.round((l+s)/2)!==c&&i.push({time:c,pos:a/(o-1)});return i}_generate(){let e=this.min,t=this.max,n=super.getDataTimestamps();return(!n.includes(e)||!n.length)&&n.splice(0,0,e),(!n.includes(t)||n.length===1)&&n.push(t),n.sort((e,t)=>e-t)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;let t=this.getDataTimestamps(),n=this.getLabelTimestamps();return e=t.length&&n.length?this.normalize(t.concat(n)):t.length?t:n,e=this._cache.all=e,e}getDecimalForValue(e){return(Wl(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){let t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return Wl(this._table,n*this._tableRange+this._minPos,!0)}},Kl=[Ii,ws,$c,Object.freeze({__proto__:null,CategoryScale:il,LinearScale:cl,LogarithmicScale:hl,RadialLinearScale:Ml,TimeScale:Ul,TimeSeriesScale:Gl})];Uo.register(...Kl);var ql=Uo,Jl=o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self,n.Data=r())})(e,(function(){let e=new Map;return{set(t,n,r){e.has(t)||e.set(t,new Map);let i=e.get(t);if(!i.has(n)&&i.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);return}i.set(n,r)},get(t,n){return e.has(t)&&e.get(t).get(n)||null},remove(t,n){if(!e.has(t))return;let r=e.get(t);r.delete(n),r.size===0&&e.delete(t)}}}))})),Yl=o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?r(e):typeof define==`function`&&define.amd?define([`exports`],r):(n=typeof globalThis<`u`?globalThis:n||self,r(n.Index={}))})(e,(function(e){let t=`transitionend`,n=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(e,t)=>`#${CSS.escape(t)}`)),e),r=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),i=e=>{do e+=Math.floor(Math.random()*1e6);while(document.getElementById(e));return e},a=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);return!Number.parseFloat(t)&&!Number.parseFloat(n)?0:(t=t.split(`,`)[0],n=n.split(`,`)[0],(Number.parseFloat(t)+Number.parseFloat(n))*1e3)},o=e=>{e.dispatchEvent(new Event(t))},s=e=>!e||typeof e!=`object`?!1:(e.jquery!==void 0&&(e=e[0]),e.nodeType!==void 0),c=e=>s(e)?e.jquery?e[0]:e:typeof e==`string`&&e.length>0?document.querySelector(n(e)):null,l=e=>{if(!s(e)||e.getClientRects().length===0)return!1;let t=getComputedStyle(e).getPropertyValue(`visibility`)===`visible`,n=e.closest(`details:not([open])`);if(!n)return t;if(n!==e){let t=e.closest(`summary`);if(t&&t.parentNode!==n||t===null)return!1}return t},u=e=>!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains(`disabled`)?!0:e.disabled===void 0?e.hasAttribute(`disabled`)&&e.getAttribute(`disabled`)!==`false`:e.disabled,d=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode==`function`){let t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?d(e.parentNode):null},f=()=>{},p=e=>{e.offsetHeight},m=()=>window.jQuery&&!document.body.hasAttribute(`data-bs-no-jquery`)?window.jQuery:null,h=[],g=e=>{document.readyState===`loading`?(h.length||document.addEventListener(`DOMContentLoaded`,()=>{for(let e of h)e()}),h.push(e)):e()},_=()=>document.documentElement.dir===`rtl`,v=e=>{g(()=>{let t=m();if(t){let n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}})},y=(e,t=[],n=e)=>typeof e==`function`?e.call(...t):n;e.defineJQueryPlugin=v,e.execute=y,e.executeAfterTransition=(e,n,r=!0)=>{if(!r){y(e);return}let i=a(n)+5,s=!1,c=({target:r})=>{r===n&&(s=!0,n.removeEventListener(t,c),y(e))};n.addEventListener(t,c),setTimeout(()=>{s||o(n)},i)},e.findShadowRoot=d,e.getElement=c,e.getNextActiveElement=(e,t,n,r)=>{let i=e.length,a=e.indexOf(t);return a===-1?!n&&r?e[i-1]:e[0]:(a+=n?1:-1,r&&(a=(a+i)%i),e[Math.max(0,Math.min(a,i-1))])},e.getTransitionDurationFromElement=a,e.getUID=i,e.getjQuery=m,e.isDisabled=u,e.isElement=s,e.isRTL=_,e.isVisible=l,e.noop=f,e.onDOMContentLoaded=g,e.parseSelector=n,e.reflow=p,e.toType=r,e.triggerTransitionEnd=o,Object.defineProperty(e,Symbol.toStringTag,{value:`Module`})}))})),Xl=o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r(Yl()):typeof define==`function`&&define.amd?define([`../util/index`],r):(n=typeof globalThis<`u`?globalThis:n||self,n.EventHandler=r(n.Index))})(e,(function(e){let t=/[^.]*(?=\..*)\.|.*/,n=/\..*/,r=/::\d+$/,i={},a=1,o={mouseenter:`mouseover`,mouseleave:`mouseout`},s=new Set(`click.dblclick.mouseup.mousedown.contextmenu.mousewheel.DOMMouseScroll.mouseover.mouseout.mousemove.selectstart.selectend.keydown.keypress.keyup.orientationchange.touchstart.touchmove.touchend.touchcancel.pointerdown.pointermove.pointerup.pointerleave.pointercancel.gesturestart.gesturechange.gestureend.focus.blur.change.reset.select.submit.focusin.focusout.load.unload.beforeunload.resize.move.DOMContentLoaded.readystatechange.error.abort.scroll`.split(`.`));function c(e,t){return t&&`${t}::${a++}`||e.uidEvent||a++}function l(e){let t=c(e);return e.uidEvent=t,i[t]=i[t]||{},i[t]}function u(e,t){return function n(r){return y(r,{delegateTarget:e}),n.oneOff&&v.off(e,r.type,t),t.apply(e,[r])}}function d(e,t,n){return function r(i){let a=e.querySelectorAll(t);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(let s of a)if(s===o)return y(i,{delegateTarget:o}),r.oneOff&&v.off(e,i.type,t,n),n.apply(o,[i])}}function f(e,t,n=null){return Object.values(e).find(e=>e.callable===t&&e.delegationSelector===n)}function p(e,t,n){let r=typeof t==`string`,i=r?n:t||n,a=_(e);return s.has(a)||(a=e),[r,i,a]}function m(e,n,r,i,a){if(typeof n!=`string`||!e)return;let[s,m,h]=p(n,r,i);n in o&&(m=(e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)})(m));let g=l(e),_=g[h]||(g[h]={}),v=f(_,m,s?r:null);if(v){v.oneOff=v.oneOff&&a;return}let y=c(m,n.replace(t,``)),b=s?d(e,r,m):u(e,m);b.delegationSelector=s?r:null,b.callable=m,b.oneOff=a,b.uidEvent=y,_[y]=b,e.addEventListener(h,b,s)}function h(e,t,n,r,i){let a=f(t[n],r,i);a&&(e.removeEventListener(n,a,!!i),delete t[n][a.uidEvent])}function g(e,t,n,r){let i=t[n]||{};for(let[a,o]of Object.entries(i))a.includes(r)&&h(e,t,n,o.callable,o.delegationSelector)}function _(e){return e=e.replace(n,``),o[e]||e}let v={on(e,t,n,r){m(e,t,n,r,!1)},one(e,t,n,r){m(e,t,n,r,!0)},off(e,t,n,i){if(typeof t!=`string`||!e)return;let[a,o,s]=p(t,n,i),c=s!==t,u=l(e),d=u[s]||{},f=t.startsWith(`.`);if(o!==void 0){if(!Object.keys(d).length)return;h(e,u,s,o,a?n:null);return}if(f)for(let n of Object.keys(u))g(e,u,n,t.slice(1));for(let[n,i]of Object.entries(d)){let a=n.replace(r,``);(!c||t.includes(a))&&h(e,u,s,i.callable,i.delegationSelector)}},trigger(t,n,r){if(typeof n!=`string`||!t)return null;let i=e.getjQuery(),a=n!==_(n),o=null,s=!0,c=!0,l=!1;a&&i&&(o=i.Event(n,r),i(t).trigger(o),s=!o.isPropagationStopped(),c=!o.isImmediatePropagationStopped(),l=o.isDefaultPrevented());let u=y(new Event(n,{bubbles:s,cancelable:!0}),r);return l&&u.preventDefault(),c&&t.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function y(e,t={}){for(let[n,r]of Object.entries(t))try{e[n]=r}catch{Object.defineProperty(e,n,{configurable:!0,get(){return r}})}return e}return v}))})),Zl=o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self,n.Manipulator=r())})(e,(function(){function e(e){if(e===`true`)return!0;if(e===`false`)return!1;if(e===Number(e).toString())return Number(e);if(e===``||e===`null`)return null;if(typeof e!=`string`)return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function t(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}return{setDataAttribute(e,n,r){e.setAttribute(`data-bs-${t(n)}`,r)},removeDataAttribute(e,n){e.removeAttribute(`data-bs-${t(n)}`)},getDataAttributes(t){if(!t)return{};let n={},r=Object.keys(t.dataset).filter(e=>e.startsWith(`bs`)&&!e.startsWith(`bsConfig`));for(let i of r){let r=i.replace(/^bs/,``);r=r.charAt(0).toLowerCase()+r.slice(1),n[r]=e(t.dataset[i])}return n},getDataAttribute(n,r){return e(n.getAttribute(`data-bs-${t(r)}`))}}}))})),Ql=o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r(Zl(),Yl()):typeof define==`function`&&define.amd?define([`../dom/manipulator`,`./index`],r):(n=typeof globalThis<`u`?globalThis:n||self,n.Config=r(n.Manipulator,n.Index))})(e,(function(e,t){class n{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw Error(`You have to implement the static method "NAME", for each component!`)}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(n,r){let i=t.isElement(r)?e.getDataAttribute(r,`config`):{};return{...this.constructor.Default,...typeof i==`object`?i:{},...t.isElement(r)?e.getDataAttributes(r):{},...typeof n==`object`?n:{}}}_typeCheckConfig(e,n=this.constructor.DefaultType){for(let[r,i]of Object.entries(n)){let n=e[r],a=t.isElement(n)?`element`:t.toType(n);if(!new RegExp(i).test(a))throw TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${a}" but expected type "${i}".`)}}}return n}))})),$l=o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r(Jl(),Xl(),Ql(),Yl()):typeof define==`function`&&define.amd?define([`./dom/data`,`./dom/event-handler`,`./util/config`,`./util/index`],r):(n=typeof globalThis<`u`?globalThis:n||self,n.BaseComponent=r(n.Data,n.EventHandler,n.Config,n.Index))})(e,(function(e,t,n,r){class i extends n{constructor(t,n){super(),t=r.getElement(t),t&&(this._element=t,this._config=this._getConfig(n),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),t.off(this._element,this.constructor.EVENT_KEY);for(let e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){r.executeAfterTransition(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(t){return e.get(r.getElement(t),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,typeof t==`object`?t:null)}static get VERSION(){return`5.3.8`}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}return i}))})),eu=o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r(Yl()):typeof define==`function`&&define.amd?define([`../util/index`],r):(n=typeof globalThis<`u`?globalThis:n||self,n.SelectorEngine=r(n.Index))})(e,(function(e){let t=t=>{let n=t.getAttribute(`data-bs-target`);if(!n||n===`#`){let e=t.getAttribute(`href`);if(!e||!e.includes(`#`)&&!e.startsWith(`.`))return null;e.includes(`#`)&&!e.startsWith(`#`)&&(e=`#${e.split(`#`)[1]}`),n=e&&e!==`#`?e.trim():null}return n?n.split(`,`).map(t=>e.parseSelector(t)).join(`,`):null},n={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(e=>e.matches(t))},parents(e,t){let n=[],r=e.parentNode.closest(t);for(;r;)n.push(r),r=r.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){let n=[`a`,`button`,`input`,`textarea`,`select`,`details`,`[tabindex]`,`[contenteditable="true"]`].map(e=>`${e}:not([tabindex^="-"])`).join(`,`);return this.find(n,t).filter(t=>!e.isDisabled(t)&&e.isVisible(t))},getSelectorFromElement(e){let r=t(e);return r&&n.findOne(r)?r:null},getElementFromSelector(e){let r=t(e);return r?n.findOne(r):null},getMultipleElementsFromSelector(e){let r=t(e);return r?n.find(r):[]}};return n}))})),tu=o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r(Xl(),Ql(),Yl()):typeof define==`function`&&define.amd?define([`../dom/event-handler`,`./config`,`./index`],r):(n=typeof globalThis<`u`?globalThis:n||self,n.Backdrop=r(n.EventHandler,n.Config,n.Index))})(e,(function(e,t,n){let r=`backdrop`,i=`show`,a=`mousedown.bs.${r}`,o={className:`modal-backdrop`,clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:`body`},s={className:`string`,clickCallback:`(function|null)`,isAnimated:`boolean`,isVisible:`boolean`,rootElement:`(element|string)`};class c extends t{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return o}static get DefaultType(){return s}static get NAME(){return r}show(e){if(!this._config.isVisible){n.execute(e);return}this._append();let t=this._getElement();this._config.isAnimated&&n.reflow(t),t.classList.add(i),this._emulateAnimation(()=>{n.execute(e)})}hide(e){if(!this._config.isVisible){n.execute(e);return}this._getElement().classList.remove(i),this._emulateAnimation(()=>{this.dispose(),n.execute(e)})}dispose(){this._isAppended&&=(e.off(this._element,a),this._element.remove(),!1)}_getElement(){if(!this._element){let e=document.createElement(`div`);e.className=this._config.className,this._config.isAnimated&&e.classList.add(`fade`),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=n.getElement(e.rootElement),e}_append(){if(this._isAppended)return;let t=this._getElement();this._config.rootElement.append(t),e.on(t,a,()=>{n.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){n.executeAfterTransition(e,this._getElement(),this._config.isAnimated)}}return c}))})),nu=o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?r(e,Xl(),eu(),Yl()):typeof define==`function`&&define.amd?define([`exports`,`../dom/event-handler`,`../dom/selector-engine`,`./index`],r):(n=typeof globalThis<`u`?globalThis:n||self,r(n.ComponentFunctions={},n.EventHandler,n.SelectorEngine,n.Index))})(e,(function(e,t,n,r){e.enableDismissTrigger=(e,i=`hide`)=>{let a=`click.dismiss${e.EVENT_KEY}`,o=e.NAME;t.on(document,a,`[data-bs-dismiss="${o}"]`,function(t){if([`A`,`AREA`].includes(this.tagName)&&t.preventDefault(),r.isDisabled(this))return;let a=n.getElementFromSelector(this)||this.closest(`.${o}`);e.getOrCreateInstance(a)[i]()})},Object.defineProperty(e,Symbol.toStringTag,{value:`Module`})}))})),ru=o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r(Xl(),eu(),Ql()):typeof define==`function`&&define.amd?define([`../dom/event-handler`,`../dom/selector-engine`,`./config`],r):(n=typeof globalThis<`u`?globalThis:n||self,n.Focustrap=r(n.EventHandler,n.SelectorEngine,n.Config))})(e,(function(e,t,n){let r=`.bs.focustrap`,i=`focusin${r}`,a=`keydown.tab${r}`,o=`backward`,s={autofocus:!0,trapElement:null},c={autofocus:`boolean`,trapElement:`element`};class l extends n{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return s}static get DefaultType(){return c}static get NAME(){return`focustrap`}activate(){this._isActive||=(this._config.autofocus&&this._config.trapElement.focus(),e.off(document,r),e.on(document,i,e=>this._handleFocusin(e)),e.on(document,a,e=>this._handleKeydown(e)),!0)}deactivate(){this._isActive&&(this._isActive=!1,e.off(document,r))}_handleFocusin(e){let{trapElement:n}=this._config;if(e.target===document||e.target===n||n.contains(e.target))return;let r=t.focusableChildren(n);r.length===0?n.focus():this._lastTabNavDirection===o?r[r.length-1].focus():r[0].focus()}_handleKeydown(e){e.key===`Tab`&&(this._lastTabNavDirection=e.shiftKey?o:`forward`)}}return l}))})),iu=o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r(Zl(),eu(),Yl()):typeof define==`function`&&define.amd?define([`../dom/manipulator`,`../dom/selector-engine`,`./index`],r):(n=typeof globalThis<`u`?globalThis:n||self,n.Scrollbar=r(n.Manipulator,n.SelectorEngine,n.Index))})(e,(function(e,t,n){let r=`.fixed-top, .fixed-bottom, .is-fixed, .sticky-top`,i=`.sticky-top`,a=`padding-right`,o=`margin-right`;class s{constructor(){this._element=document.body}getWidth(){let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){let e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,a,t=>t+e),this._setElementAttributes(r,a,t=>t+e),this._setElementAttributes(i,o,t=>t-e)}reset(){this._resetElementAttributes(this._element,`overflow`),this._resetElementAttributes(this._element,a),this._resetElementAttributes(r,a),this._resetElementAttributes(i,o)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,`overflow`),this._element.style.overflow=`hidden`}_setElementAttributes(e,t,n){let r=this.getWidth();this._applyManipulationCallback(e,e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+r)return;this._saveInitialAttribute(e,t);let i=window.getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,`${n(Number.parseFloat(i))}px`)})}_saveInitialAttribute(t,n){let r=t.style.getPropertyValue(n);r&&e.setDataAttribute(t,n,r)}_resetElementAttributes(t,n){this._applyManipulationCallback(t,t=>{let r=e.getDataAttribute(t,n);if(r===null){t.style.removeProperty(n);return}e.removeDataAttribute(t,n),t.style.setProperty(n,r)})}_applyManipulationCallback(e,r){if(n.isElement(e)){r(e);return}for(let n of t.find(e,this._element))r(n)}}return s}))})),Y=c(o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r($l(),Xl(),eu(),tu(),nu(),ru(),Yl(),iu()):typeof define==`function`&&define.amd?define([`./base-component`,`./dom/event-handler`,`./dom/selector-engine`,`./util/backdrop`,`./util/component-functions`,`./util/focustrap`,`./util/index`,`./util/scrollbar`],r):(n=typeof globalThis<`u`?globalThis:n||self,n.Modal=r(n.BaseComponent,n.EventHandler,n.SelectorEngine,n.Backdrop,n.ComponentFunctions,n.Focustrap,n.Index,n.Scrollbar))})(e,(function(e,t,n,r,i,a,o,s){let c=`.bs.modal`,l=`hide${c}`,u=`hidePrevented${c}`,d=`hidden${c}`,f=`show${c}`,p=`shown${c}`,m=`resize${c}`,h=`click.dismiss${c}`,g=`mousedown.dismiss${c}`,_=`keydown.dismiss${c}`,v=`click${c}.data-api`,y=`modal-open`,b=`show`,x=`modal-static`,S={backdrop:!0,focus:!0,keyboard:!0},C={backdrop:`(boolean|string)`,focus:`boolean`,keyboard:`boolean`};class w extends e{constructor(e,t){super(e,t),this._dialog=n.findOne(`.modal-dialog`,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new s,this._addEventListeners()}static get Default(){return S}static get DefaultType(){return C}static get NAME(){return`modal`}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||t.trigger(this._element,f,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(y),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){this._isShown&&!this._isTransitioning&&(t.trigger(this._element,l).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(b),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){t.off(window,c),t.off(this._dialog,c),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new r({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new a({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display=`block`,this._element.removeAttribute(`aria-hidden`),this._element.setAttribute(`aria-modal`,!0),this._element.setAttribute(`role`,`dialog`),this._element.scrollTop=0;let r=n.findOne(`.modal-body`,this._dialog);r&&(r.scrollTop=0),o.reflow(this._element),this._element.classList.add(b),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,t.trigger(this._element,p,{relatedTarget:e})},this._dialog,this._isAnimated())}_addEventListeners(){t.on(this._element,_,e=>{if(e.key===`Escape`){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),t.on(window,m,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),t.on(this._element,g,e=>{t.one(this._element,h,t=>{if(this._element===e.target&&this._element===t.target){if(this._config.backdrop===`static`){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display=`none`,this._element.setAttribute(`aria-hidden`,!0),this._element.removeAttribute(`aria-modal`),this._element.removeAttribute(`role`),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(y),this._resetAdjustments(),this._scrollBar.reset(),t.trigger(this._element,d)})}_isAnimated(){return this._element.classList.contains(`fade`)}_triggerBackdropTransition(){if(t.trigger(this._element,u).defaultPrevented)return;let e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._element.style.overflowY;n===`hidden`||this._element.classList.contains(x)||(e||(this._element.style.overflowY=`hidden`),this._element.classList.add(x),this._queueCallback(()=>{this._element.classList.remove(x),this._queueCallback(()=>{this._element.style.overflowY=n},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){let e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;if(n&&!e){let e=o.isRTL()?`paddingLeft`:`paddingRight`;this._element.style[e]=`${t}px`}if(!n&&e){let e=o.isRTL()?`paddingRight`:`paddingLeft`;this._element.style[e]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft=``,this._element.style.paddingRight=``}static jQueryInterface(e,t){return this.each(function(){let n=w.getOrCreateInstance(this,e);if(typeof e==`string`){if(n[e]===void 0)throw TypeError(`No method named "${e}"`);n[e](t)}})}}return t.on(document,v,`[data-bs-toggle="modal"]`,function(e){let r=n.getElementFromSelector(this);[`A`,`AREA`].includes(this.tagName)&&e.preventDefault(),t.one(r,f,e=>{e.defaultPrevented||t.one(r,d,()=>{o.isVisible(this)&&this.focus()})});let i=n.findOne(`.modal.show`);i&&w.getInstance(i).hide(),w.getOrCreateInstance(r).toggle(this)}),i.enableDismissTrigger(w),o.defineJQueryPlugin(w),w}))}))(),1);function au({title:e=``,description:t=``,action:n=``,className:r=``}={}){return`
        <div class="sf-page-header ${r}">

            <div class="sf-page-header-content">
                ${e?`
                            <h1 class="sf-page-title">
                                ${e}
                            </h1>
                        `:``}

                ${t?`
                            <p class="sf-page-description">
                                ${t}
                            </p>
                        `:``}
            </div>

            ${n?`
                        <div class="sf-page-header-action">
                            ${n}
                        </div>
                    `:``}

        </div>
    `}function ou({id:e=``,title:t=``,content:n=``,footer:r=``,size:i=``,className:a=``}={}){return`
        <div
            class="modal fade ${a}"
            id="${e}"
            tabindex="-1"
            aria-labelledby="${e}-label"
            aria-hidden="true"
        >
            <div class="modal-dialog ${i?`modal-${i}`:``}">
                <div class="modal-content sf-modal">

                    <div class="modal-header sf-modal-header">
                        <h2
                            class="modal-title sf-modal-title"
                            id="${e}-label"
                        >
                            ${t}
                        </h2>

                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div class="modal-body sf-modal-body">
                        ${n}
                    </div>

                    ${r?`
                                <div class="modal-footer sf-modal-footer">
                                    ${r}
                                </div>
                            `:``}

                </div>
            </div>
        </div>
    `}function su({label:e=``,value:t=``,trend:n=``,comparison:r=`from last month`,trendVariant:i=`success`,icon:a=``,className:o=``}={}){return`
        <section class="sf-kpi-card ${o}">

            <div class="sf-kpi-top">
                <div class="sf-kpi-label">
                    ${e}
                </div>

                <div class="sf-kpi-icon sf-kpi-icon-${i}">
                    ${a}
                </div>
            </div>

            <div class="sf-kpi-value">
                ${t}
            </div>

            ${n?`
                        <div class="sf-kpi-meta">
                            <span class="sf-kpi-trend sf-kpi-trend-${i}">
                                ${n}
                            </span>

                            <span class="sf-kpi-comparison">
                                ${r}
                            </span>
                        </div>
                    `:``}

        </section>
    `}function cu({title:e=``,description:t=``,content:n=``,action:r=``,className:i=``}={}){return`
        <section class="sf-chart-card ${i}">

            <div class="sf-chart-card-header">

                <div class="sf-chart-card-heading">
                    ${e?`
                                <h2 class="sf-chart-card-title">
                                    ${e}
                                </h2>
                            `:``}

                    ${t?`
                                <p class="sf-chart-card-description">
                                    ${t}
                                </p>
                            `:``}
                </div>

                ${r?`
                            <div class="sf-chart-card-action">
                                ${r}
                            </div>
                        `:``}

            </div>

            <div class="sf-chart-card-body">
                ${n}
            </div>

        </section>
    `}function lu(){return f(`
        <div class="container-fluid">

            ${au({title:`Dashboard`,description:`Get a quick overview of your inventory.`,action:`
                    <button
                        type="button"
                        class="sf-btn sf-btn-outline"
                    >
                        Last 30 Days
                    </button>
                `})}

            <div class="row g-2">

                <div class="col-12 col-md-6 col-xl-3">
                    ${su({label:`Total Products`,value:`1,248`,trend:`+12.9%`,comparison:`from last month`,trendVariant:`info`,icon:`
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.8"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"></path>
                                <path d="m4 7.5 8 4.5 8-4.5"></path>
                                <path d="M12 12v9"></path>
                            </svg>
                        `})}
                </div>

                <div class="col-12 col-md-6 col-xl-3">
                    ${su({label:`Total Stock`,value:`48,920`,trend:`+8.4%`,comparison:`from last month`,trendVariant:`success`,icon:`
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.8"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M4 7h16"></path>
                                <path d="M5 7v12h14V7"></path>
                                <path d="M8 7V4h8v3"></path>
                                <path d="M8 11h8"></path>
                                <path d="M8 15h5"></path>
                            </svg>
                        `})}
                </div>

                <div class="col-12 col-md-6 col-xl-3">
                    ${su({label:`Stock In`,value:`142`,trend:`+3.7%`,comparison:`from last month`,trendVariant:`warning`,icon:`
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.8"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M12 4v12"></path>
                                <path d="m7 9 5-5 5 5"></path>
                                <path d="M5 20h14"></path>
                            </svg>
                        `})}
                </div>

                <div class="col-12 col-md-6 col-xl-3">
                    ${su({label:`Stock Out`,value:`245`,trend:`+10.2%`,comparison:`from last month`,trendVariant:`danger`,icon:`
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.8"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M12 20V8"></path>
                                <path d="m17 15-5 5-5-5"></path>
                                <path d="M5 4h14"></path>
                            </svg>
                        `})}
                </div>

            </div>

            <div class="row g-2 mt-0">

                <div class="col-12 col-xl-6">
                    ${cu({title:`Stock Movement`,action:`
                            <button
                                type="button"
                                class="sf-btn sf-btn-outline sf-btn-sm"
                            >
                                This Month
                            </button>
                        `,content:`
                            <div class="sf-chart-container">
                                <canvas id="stockMovementChart"></canvas>
                            </div>
                        `})}
                </div>

                <div class="col-12 col-xl-6">
                    ${cu({title:`Inventory by Category`,content:`
                            <div class="sf-category-chart">

                                <div class="sf-donut-container">
                                    <canvas id="inventoryCategoryChart"></canvas>
                                </div>

                                <div class="sf-category-legend">

                                    <div class="sf-category-item">
                                        <span class="sf-category-name">
                                            <span class="sf-category-dot sf-category-dot-1"></span>
                                            Electronics
                                        </span>
                                        <strong>35%</strong>
                                    </div>

                                    <div class="sf-category-item">
                                        <span class="sf-category-name">
                                            <span class="sf-category-dot sf-category-dot-2"></span>
                                            Accessories
                                        </span>
                                        <strong>25%</strong>
                                    </div>

                                    <div class="sf-category-item">
                                        <span class="sf-category-name">
                                            <span class="sf-category-dot sf-category-dot-3"></span>
                                            Office Supplies
                                        </span>
                                        <strong>20%</strong>
                                    </div>

                                    <div class="sf-category-item">
                                        <span class="sf-category-name">
                                            <span class="sf-category-dot sf-category-dot-4"></span>
                                            Home Appliances
                                        </span>
                                        <strong>12%</strong>
                                    </div>

                                    <div class="sf-category-item">
                                        <span class="sf-category-name">
                                            <span class="sf-category-dot sf-category-dot-5"></span>
                                            Others
                                        </span>
                                        <strong>8%</strong>
                                    </div>

                                </div>

                            </div>
                        `})}
                </div>

            </div>

            <div class="row g-2 mt-0 align-items-stretch">

                <!-- Low Stock Products -->
                <div class="col-12 col-xl-5">

                    <section class="sf-attention-card">

                        <div class="sf-attention-header">

                            <h2 class="sf-attention-title">
                                Low Stock Products
                            </h2>

                            <a
                                href="#"
                                class="sf-attention-view-all"
                            >
                                View All
                            </a>

                        </div>

                        <div class="sf-attention-table-wrap">

                            <table class="sf-attention-table">

                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>SKU</th>
                                        <th>Stock</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    <tr>
                                        <td>Wireless Mouse</td>
                                        <td>WM-001</td>
                                        <td>5</td>
                                        <td>
                                            <span class="sf-status sf-status-warning">
                                                Low Stock
                                            </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Mechanical Keyboard</td>
                                        <td>KB-002</td>
                                        <td>8</td>
                                        <td>
                                            <span class="sf-status sf-status-warning">
                                                Low Stock
                                            </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>USB-C Hub</td>
                                        <td>UH-003</td>
                                        <td>0</td>
                                        <td>
                                            <span class="sf-status sf-status-danger">
                                                Out of Stock
                                            </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>HDMI Cable</td>
                                        <td>HC-004</td>
                                        <td>7</td>
                                        <td>
                                            <span class="sf-status sf-status-warning">
                                                Low Stock
                                            </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Gaming Headset</td>
                                        <td>GH-005</td>
                                        <td>9</td>
                                        <td>
                                            <span class="sf-status sf-status-warning">
                                                Low Stock
                                            </span>
                                        </td>
                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    </section>

                </div>

                <!-- Recent Transactions -->
                <div class="col-12 col-xl-7">

                    <section class="sf-attention-card">

                        <div class="sf-attention-header">

                            <h2 class="sf-attention-title">
                                Recent Transactions
                            </h2>

                            <a
                                href="#"
                                class="sf-attention-view-all"
                            >
                                View All
                            </a>

                        </div>

                        <div class="sf-attention-table-wrap">

                            <table class="sf-attention-table">

                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Type</th>
                                        <th>Product</th>
                                        <th>Reference</th>
                                        <th>Quantity</th>
                                        <th>User</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    <tr>
                                        <td>May 31, 2024</td>
                                        <td>
                                            <span class="sf-transaction sf-transaction-in">
                                                Stock In
                                            </span>
                                        </td>
                                        <td>Wireless Mouse</td>
                                        <td>IN-00032</td>
                                        <td>120</td>
                                        <td>John Doe</td>
                                    </tr>

                                    <tr>
                                        <td>May 31, 2024</td>
                                        <td>
                                            <span class="sf-transaction sf-transaction-out">
                                                Stock Out
                                            </span>
                                        </td>
                                        <td>Mechanical Keyboard</td>
                                        <td>OUT-00021</td>
                                        <td>15</td>
                                        <td>Jane Smith</td>
                                    </tr>

                                    <tr>
                                        <td>May 30, 2024</td>
                                        <td>
                                            <span class="sf-transaction sf-transaction-transfer">
                                                Transfer
                                            </span>
                                        </td>
                                        <td>USB-C Hub</td>
                                        <td>TR-00011</td>
                                        <td>30</td>
                                        <td>Robert Fox</td>
                                    </tr>

                                    <tr>
                                        <td>May 30, 2024</td>
                                        <td>
                                            <span class="sf-transaction sf-transaction-in">
                                                Stock In
                                            </span>
                                        </td>
                                        <td>HDMI Cable</td>
                                        <td>IN-00031</td>
                                        <td>200</td>
                                        <td>John Doe</td>
                                    </tr>

                                    <tr>
                                        <td>May 29, 2024</td>
                                        <td>
                                            <span class="sf-transaction sf-transaction-out">
                                                Stock Out
                                            </span>
                                        </td>
                                        <td>Gaming Headset</td>
                                        <td>OUT-00020</td>
                                        <td>10</td>
                                        <td>Jane Smith</td>
                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    </section>

                </div>

            </div>

            ${ou({id:`mobileSearchModal`,title:`Search`,content:`
                    <div class="sf-form-group mb-0">
                        <label
                            for="mobileSearchInput"
                            class="sf-form-label"
                        >
                            Search inventory
                        </label>

                        <input
                            id="mobileSearchInput"
                            type="search"
                            class="sf-form-control"
                            placeholder="Search products, SKU, or category..."
                        >
                    </div>
                `,footer:`
                    <button
                        type="button"
                        class="sf-btn sf-btn-outline"
                        data-bs-dismiss="modal"
                    >
                        Cancel
                    </button>

                    <button
                        type="button"
                        class="sf-btn sf-btn-primary"
                    >
                        Search
                    </button>
                `})}

        </div>
    `)}function uu(){p(),u();let e=document.querySelector(`.header-search-button`),t=document.querySelector(`#mobileSearchModal`);e&&t&&e.addEventListener(`click`,()=>{Y.default.getOrCreateInstance(t).show()});let n=document.querySelector(`#stockMovementChart`);n&&new ql(n,{type:`line`,data:{labels:[`May 1`,``,``,`May 6`,``,``,`May 11`,``,``,`May 16`,``,``,`May 21`,``,``,`May 26`,``,``,`May 31`],datasets:[{label:`Stock In`,data:[500,900,1350,1800,1650,1200,800,1050,1350,1750,2e3,1650,1250,950,1150,1450,1750,2e3,2200],borderColor:`#2563EB`,backgroundColor:`transparent`,borderWidth:1.5,pointRadius:2.5,pointHoverRadius:4,tension:.35},{label:`Stock Out`,data:[250,500,750,1050,900,700,1500,1250,1050,800,950,750,600,500,700,900,1150,1050,1300],borderColor:`#16A34A`,backgroundColor:`transparent`,borderWidth:1.5,pointRadius:2.5,pointHoverRadius:4,tension:.35}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:`index`,intersect:!1},plugins:{legend:{position:`top`,align:`end`,labels:{usePointStyle:!0,pointStyle:`circle`,boxWidth:7,boxHeight:7,padding:10,font:{size:10}}},tooltip:{mode:`index`,intersect:!1}},scales:{x:{grid:{display:!1},ticks:{autoSkip:!1,color:`#6B7280`,font:{size:10},maxRotation:0,minRotation:0},border:{display:!1}},y:{beginAtZero:!0,suggestedMax:2500,grid:{color:`#E5E7EB`},ticks:{color:`#6B7280`,font:{size:10},stepSize:500,callback(e){return e>=1e3?`${e/1e3}K`:e}},border:{display:!1}}}}});let r=document.querySelector(`#inventoryCategoryChart`);r&&new ql(r,{type:`doughnut`,data:{labels:[`Electronics`,`Accessories`,`Office Supplies`,`Home Appliances`,`Others`],datasets:[{data:[35,25,20,12,8],backgroundColor:[`#2563EB`,`#16A34A`,`#F59E0B`,`#9333EA`,`#9CA3AF`],borderWidth:2,borderColor:`#FFFFFF`}]},options:{responsive:!0,maintainAspectRatio:!1,cutout:`52%`,plugins:{legend:{display:!1},tooltip:{callbacks:{label:e=>`${e.label}: ${e.parsed}%`}}}}})}var du=`stockflow.products`,fu=[{id:1,name:`Wireless Mouse`,sku:`WM-001`,category:`Electronics`,stock:125,price:25e4,status:`In Stock`},{id:2,name:`Mechanical Keyboard`,sku:`MK-002`,category:`Electronics`,stock:48,price:85e4,status:`In Stock`},{id:3,name:`USB-C Cable`,sku:`UC-003`,category:`Accessories`,stock:210,price:12e4,status:`In Stock`},{id:4,name:`Laptop Stand`,sku:`LS-004`,category:`Accessories`,stock:8,price:45e4,status:`Low Stock`},{id:5,name:`Office Chair`,sku:`OC-005`,category:`Furniture`,stock:32,price:175e4,status:`In Stock`},{id:6,name:`Desk Lamp`,sku:`DL-006`,category:`Furniture`,stock:0,price:35e4,status:`Out of Stock`},{id:7,name:`Notebook A5`,sku:`NB-007`,category:`Stationery`,stock:86,price:45e3,status:`In Stock`},{id:8,name:`Ballpoint Pen`,sku:`BP-008`,category:`Stationery`,stock:15,price:15e3,status:`Low Stock`}],pu=[],mu=1,hu=8;function gu(){let e=localStorage.getItem(du);if(e)try{pu=JSON.parse(e)}catch{pu=[...fu]}else pu=[...fu],localStorage.setItem(du,JSON.stringify(pu))}function _u(){localStorage.setItem(du,JSON.stringify(pu))}function vu(e){return new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`,maximumFractionDigits:0}).format(e)}function yu(e){return e===`In Stock`?`success`:e===`Low Stock`?`warning`:`danger`}function bu(){return[...new Set(pu.map(e=>e.category))].sort()}function xu(){let e=document.querySelector(`#productsSearch`),t=document.querySelector(`#productsCategoryFilter`),n=document.querySelector(`#productsStatusFilter`),r=e?.value.trim().toLowerCase()||``,i=t?.value||``,a=n?.value||``;return pu.filter(e=>{let t=e.name.toLowerCase().includes(r)||e.sku.toLowerCase().includes(r),n=!i||e.category===i,o=!a||e.status===a;return t&&n&&o})}function Su(){let e=document.querySelector(`#productsCategoryFilter`);if(!e)return;let t=e.value;e.innerHTML=`
        <option value="">All Categories</option>
        ${bu().map(e=>`
                <option value="${e}">
                    ${e}
                </option>
            `).join(``)}
    `,e.value=t}function Cu(){let e=document.querySelector(`#productsTableBody`),t=document.querySelector(`#productsPagination`);if(!e)return;let n=xu(),r=Math.max(1,Math.ceil(n.length/hu));mu>r&&(mu=r);let i=(mu-1)*hu,a=n.slice(i,i+hu);e.innerHTML=a.length?a.map(e=>`
                    <tr>
                        <td>
                            <div class="fw-semibold">
                                ${e.name}
                            </div>
                        </td>

                        <td>
                            <span class="text-muted">
                                ${e.sku}
                            </span>
                        </td>

                        <td>
                            ${e.category}
                        </td>

                        <td>
                            ${e.stock}
                        </td>

                        <td>
                            ${vu(e.price)}
                        </td>

                        <td>
                            <span
                                class="badge text-bg-${yu(e.status)}"
                            >
                                ${e.status}
                            </span>
                        </td>

                        <td>
                            <div
                                class="d-flex gap-1"
                            >
                                <button
                                    type="button"
                                    class="btn btn-sm btn-light"
                                    data-product-view="${e.id}"
                                >
                                    View
                                </button>

                                <button
                                    type="button"
                                    class="btn btn-sm btn-light"
                                    data-product-edit="${e.id}"
                                >
                                    Edit
                                </button>
                            </div>
                        </td>
                    </tr>
                `).join(``):`
            <tr>
                <td
                    colspan="7"
                    class="text-center py-5"
                >
                    <div class="text-muted">
                        No products found.
                    </div>
                </td>
            </tr>
        `,wu(n.length,r,t)}function wu(e,t,n){if(!n)return;if(e===0){n.innerHTML=``;return}let r=`
        <div class="sf-pagination-info">
            Showing ${(mu-1)*hu+1}–${Math.min(mu*hu,e)} of ${e} products
        </div>

        <div class="sf-pagination-controls">

            <button
                type="button"
                class="btn btn-sm btn-light"
                data-page="${mu-1}"
                ${mu===1?`disabled`:``}
                aria-label="Previous page"
                title="Previous page"
            >
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        d="M15 18L9 12L15 6"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
    `;for(let e=1;e<=t;e++)r+=`
            <button
                type="button"
                class="btn btn-sm ${e===mu?`btn-primary`:`btn-light`}"
                data-page="${e}"
            >
                ${e}
            </button>
        `;r+=`
            <button
                type="button"
                class="btn btn-sm btn-light"
                data-page="${mu+1}"
                ${mu===t?`disabled`:``}
                aria-label="Next page"
                title="Next page"
            >
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        d="M9 18L15 12L9 6"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>

        </div>
    `,n.innerHTML=r}function Tu(){let e=document.querySelector(`#productModal`);e&&e.remove(),document.body.insertAdjacentHTML(`beforeend`,`
        <div
            class="modal fade"
            id="productModal"
            tabindex="-1"
            aria-hidden="true"
        >
            <div
                class="modal-dialog modal-dialog-centered"
            >
                <div class="modal-content">
                    <div class="modal-header">
                        <h5
                            class="modal-title"
                            id="productModalTitle"
                        >
                            Add Product
                        </h5>

                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div class="modal-body">
                        <form
                            id="productForm"
                        >
                            <input
                                type="hidden"
                                id="productId"
                            />

                            <div class="mb-3">
                                <label
                                    for="productName"
                                    class="form-label"
                                >
                                    Product Name
                                </label>

                                <input
                                    type="text"
                                    class="form-control"
                                    id="productName"
                                    required
                                >
                            </div>

                            <div class="mb-3">
                                <label
                                    for="productSku"
                                    class="form-label"
                                >
                                    SKU
                                </label>

                                <input
                                    type="text"
                                    class="form-control"
                                    id="productSku"
                                    required
                                >
                            </div>

                            <div class="mb-3">
                                <label
                                    for="productCategory"
                                    class="form-label"
                                >
                                    Category
                                </label>

                                <input
                                    type="text"
                                    class="form-control"
                                    id="productCategory"
                                    required
                                >
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label
                                        for="productStock"
                                        class="form-label"
                                    >
                                        Stock
                                    </label>

                                    <input
                                        type="number"
                                        class="form-control"
                                        id="productStock"
                                        min="0"
                                        required
                                    >
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label
                                        for="productPrice"
                                        class="form-label"
                                    >
                                        Price
                                    </label>

                                    <input
                                        type="number"
                                        class="form-control"
                                        id="productPrice"
                                        min="0"
                                        required
                                    >
                                </div>
                            </div>

                            <div class="mb-3">
                                <label
                                    for="productStatus"
                                    class="form-label"
                                >
                                    Status
                                </label>

                                <select
                                    class="form-select"
                                    id="productStatus"
                                >
                                    <option value="In Stock">
                                        In Stock
                                    </option>

                                    <option value="Low Stock">
                                        Low Stock
                                    </option>

                                    <option value="Out of Stock">
                                        Out of Stock
                                    </option>
                                </select>
                            </div>
                        </form>
                    </div>

                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-light"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            form="productForm"
                            class="btn btn-primary"
                        >
                            Save Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `);let t=document.querySelector(`#productModal`);t&&(t.addEventListener(`hide.bs.modal`,()=>{let e=document.activeElement;e&&t.contains(e)&&e.blur()}),t.addEventListener(`hidden.bs.modal`,()=>{document.activeElement&&t.contains(document.activeElement)&&document.activeElement.blur()}))}function Eu(e=null){let t=document.querySelector(`#productModal`);if(!t)return;let n=document.querySelector(`#productModalTitle`),r=document.querySelector(`#productId`),i=document.querySelector(`#productName`),a=document.querySelector(`#productSku`),o=document.querySelector(`#productCategory`),s=document.querySelector(`#productStock`),c=document.querySelector(`#productPrice`),l=document.querySelector(`#productStatus`);e?.id,e?(n.textContent=`Edit Product`,r.value=e.id,i.value=e.name,a.value=e.sku,o.value=e.category,s.value=e.stock,c.value=e.price,l.value=e.status):(n.textContent=`Add Product`,r.value=``,i.value=``,a.value=``,o.value=``,s.value=``,c.value=``,l.value=`In Stock`),Y.default.getOrCreateInstance(t).show()}function Du(e){let t=document.querySelector(`#viewProductModal`);t&&t.remove();let n=document.activeElement,r=`
        <div
            class="modal fade"
            id="viewProductModal"
            tabindex="-1"
            aria-hidden="true"
        >
            <div
                class="modal-dialog modal-dialog-centered"
            >
                <div class="modal-content">

                    <div class="modal-header">
                        <h5
                            class="modal-title"
                        >
                            Product Details
                        </h5>

                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div class="modal-body">

                        <div class="mb-3">
                            <div class="form-label">
                                Product Name
                            </div>

                            <div class="sf-product-detail-value">
                                ${e.name}
                            </div>
                        </div>

                        <div class="mb-3">
                            <div class="form-label">
                                SKU
                            </div>

                            <div class="sf-product-detail-value">
                                ${e.sku}
                            </div>
                        </div>

                        <div class="mb-3">
                            <div class="form-label">
                                Category
                            </div>

                            <div class="sf-product-detail-value">
                                ${e.category}
                            </div>
                        </div>

                        <div class="row">

                            <div class="col-md-6 mb-3">
                                <div class="form-label">
                                    Stock
                                </div>

                                <div class="sf-product-detail-value">
                                    ${e.stock}
                                </div>
                            </div>

                            <div class="col-md-6 mb-3">
                                <div class="form-label">
                                    Price
                                </div>

                                <div class="sf-product-detail-value">
                                    ${vu(e.price)}
                                </div>
                            </div>

                        </div>

                        <div class="mb-0">
                            <div class="form-label">
                                Status
                            </div>

                            <div>
                                <span
                                    class="badge text-bg-${yu(e.status)}"
                                >
                                    ${e.status}
                                </span>
                            </div>
                        </div>

                    </div>

                    <div class="modal-footer">

                        <button
                            type="button"
                            class="btn btn-light"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>

                    </div>

                </div>
            </div>
        </div>
    `;document.body.insertAdjacentHTML(`beforeend`,r);let i=document.querySelector(`#viewProductModal`);if(!i)return;let a=Y.default.getOrCreateInstance(i);i.addEventListener(`hide.bs.modal`,()=>{let e=document.activeElement;e&&i.contains(e)&&e.blur()}),i.addEventListener(`hidden.bs.modal`,()=>{n&&typeof n.focus==`function`&&document.body.contains(n)&&n.focus(),i.remove()},{once:!0}),a.show()}function Ou(e){e.preventDefault();let t=document.querySelector(`#productId`).value,n=document.querySelector(`#productName`).value.trim(),r=document.querySelector(`#productSku`).value.trim(),i=document.querySelector(`#productCategory`).value.trim(),a=Number(document.querySelector(`#productStock`).value),o=Number(document.querySelector(`#productPrice`).value),s=document.querySelector(`#productStatus`).value;if(pu.some(e=>e.sku.toLowerCase()===r.toLowerCase()&&String(e.id)!==String(t))){window.alert(`SKU already exists.`);return}let c={id:t?Number(t):Date.now(),name:n,sku:r,category:i,stock:a,price:o,status:s};t?pu=pu.map(e=>e.id===Number(t)?c:e):pu.push(c),_u(),Su(),mu=1,Cu();let l=document.querySelector(`#productModal`),u=Y.default.getInstance(l);u&&u.hide()}function ku(){return`
        <div class="container-fluid">

            <div
                class="d-flex flex-column flex-md-row
                       align-items-md-center
                       justify-content-between
                       gap-3 mb-4"
            >
                <div>
                    <h1 class="h3 mb-1">
                        Products
                    </h1>

                    <p class="text-muted mb-0">
                        Manage your inventory products.
                    </p>
                </div>

                <button
                    type="button"
                    class="btn btn-primary"
                    id="addProductButton"
                >
                    <i class="bi bi-plus-lg me-1"></i>
                    Add Product
                </button>
            </div>

            <div class="card border-0 shadow-sm">

                <div class="card-body">

                    <div
                        class="row g-3 mb-4"
                    >
                        <div
                            class="col-lg-5"
                        >
                            <label
                                class="form-label"
                                for="productsSearch"
                            >
                                Search
                            </label>

                            <input
                                type="search"
                                id="productsSearch"
                                class="form-control"
                                placeholder="Search by product name or SKU..."
                            >
                        </div>

                        <div
                            class="col-lg-3"
                        >
                            <label
                                class="form-label"
                                for="productsCategoryFilter"
                            >
                                Category
                            </label>

                            <select
                                id="productsCategoryFilter"
                                class="form-select"
                            >
                                <option value="">
                                    All Categories
                                </option>
                            </select>
                        </div>

                        <div
                            class="col-lg-3"
                        >
                            <label
                                class="form-label"
                                for="productsStatusFilter"
                            >
                                Status
                            </label>

                            <select
                                id="productsStatusFilter"
                                class="form-select"
                            >
                                <option value="">
                                    All Statuses
                                </option>

                                <option value="In Stock">
                                    In Stock
                                </option>

                                <option value="Low Stock">
                                    Low Stock
                                </option>

                                <option value="Out of Stock">
                                    Out of Stock
                                </option>
                            </select>
                        </div>

                        <div
                            class="col-lg-1
                                   d-flex
                                   align-items-end"
                        >
                            <button
                                type="button"
                                id="resetProductsFilters"
                                class="btn btn-light w-100"
                            >
                                Reset
                            </button>
                        </div>
                    </div>

                    <div class="sf-products-table-box">
                        <div class="sf-table-wrap">
                            <table class="sf-table">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>SKU</th>
                                        <th>Category</th>
                                        <th>Stock</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody id="productsTableBody"></tbody>
                            </table>
                        </div>
                    </div>

                    <div class="sf-products-pagination">
                        <div class="sf-pagination" id="productsPagination"></div>
                    </div>

                </div>

            </div>

        </div>
    `}function Au(){gu(),Tu(),Su(),Cu();let e=document.querySelector(`#addProductButton`),t=document.querySelector(`#productsSearch`),n=document.querySelector(`#productsCategoryFilter`),r=document.querySelector(`#productsStatusFilter`),i=document.querySelector(`#resetProductsFilters`),a=document.querySelector(`#productsTableBody`),o=document.querySelector(`#productsPagination`),s=document.querySelector(`#productForm`);e?.addEventListener(`click`,()=>{Eu()}),t?.addEventListener(`input`,()=>{mu=1,Cu()}),n?.addEventListener(`change`,()=>{mu=1,Cu()}),r?.addEventListener(`change`,()=>{mu=1,Cu()}),i?.addEventListener(`click`,()=>{t&&(t.value=``),n&&(n.value=``),r&&(r.value=``),mu=1,Cu()}),a?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-product-view]`),n=e.target.closest(`[data-product-edit]`);if(t){let e=Number(t.dataset.productView),n=pu.find(t=>t.id===e);n&&Du(n)}if(n){let e=Number(n.dataset.productEdit),t=pu.find(t=>t.id===e);t&&Eu(t)}}),o?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-page]`);if(!t)return;let n=Number(t.dataset.page);n<1||t.disabled||(mu=n,Cu())}),s?.addEventListener(`submit`,Ou)}function ju(){let e=document.querySelector(`#productModal`);if(e){let t=Y.default.getInstance(e);document.activeElement&&e.contains(document.activeElement)&&document.activeElement.blur(),t?.hide(),e.remove()}}var Mu=`stockflow.categories`,Nu=`stockflow.products`,Pu=[{id:1,name:`Accessories`,description:`Computer and mobile accessories.`,status:`Active`},{id:2,name:`Electronics`,description:`Electronic devices and components.`,status:`Active`},{id:3,name:`Office`,description:`Office and workplace essentials.`,status:`Active`},{id:4,name:`Furniture`,description:`Furniture and workspace equipment.`,status:`Active`},{id:5,name:`Stationery`,description:`Writing and paper products.`,status:`Active`},{id:6,name:`Storage`,description:`Storage devices and solutions.`,status:`Inactive`}],Fu=Bu(),Iu=1,Lu=8,Ru=null,zu=!1;function Bu(){try{let e=localStorage.getItem(Mu);if(e){let t=JSON.parse(e);if(Array.isArray(t))return t}}catch(e){console.warn(`Unable to load StockFlow categories.`,e)}let e=structuredClone(Pu);return localStorage.setItem(Mu,JSON.stringify(e)),e}function Vu(){localStorage.setItem(Mu,JSON.stringify(Fu))}function Hu(){try{let e=localStorage.getItem(Nu);if(e){let t=JSON.parse(e);if(Array.isArray(t))return t}}catch(e){console.warn(`Unable to load StockFlow products.`,e)}return[]}function Uu(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}function Wu(e){return e===`Active`?`success`:`danger`}function Gu(e){return Hu().filter(t=>t.category===e).length}function Ku(e,t){if(e===t)return;let n=Hu(),r=!1;n.forEach(n=>{n.category===e&&(n.category=t,r=!0)}),r&&localStorage.setItem(Nu,JSON.stringify(n))}function qu(){return{tableBody:document.getElementById(`categoryTableBody`),searchInput:document.getElementById(`categorySearch`),statusFilter:document.getElementById(`categoryStatusFilter`),resultsInfo:document.getElementById(`categoryResultsInfo`),pagination:document.getElementById(`categoryPagination`),addButton:document.getElementById(`addCategoryButton`),modal:document.getElementById(`categoryModal`),form:document.getElementById(`categoryForm`),modalTitle:document.getElementById(`categoryModalTitle`),fields:{name:document.getElementById(`categoryName`),description:document.getElementById(`categoryDescription`),status:document.getElementById(`categoryStatus`)}}}function Ju(e){let t=e.searchInput.value.trim().toLowerCase(),n=e.statusFilter.value;return Fu.filter(e=>{let r=!t||e.name.toLowerCase().includes(t)||e.description.toLowerCase().includes(t),i=!n||e.status===n;return r&&i})}function Yu(e){let t=Ju(e),n=Math.max(1,Math.ceil(t.length/Lu));Iu>n&&(Iu=n);let r=(Iu-1)*Lu,i=t.slice(r,r+Lu);e.tableBody.innerHTML=i.length?i.map(e=>`
            <tr>
                <td>
                    <div class="sf-category">

                        <div class="sf-category-icon" aria-hidden="true">
                            <svg
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.6"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M3.5 6.5h6l2 2h9v9.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-9.5a2 2 0 0 1 2-2Z"></path>
                            </svg>
                        </div>

                        <div>
                            <div class="sf-category-name">
                                ${Uu(e.name)}
                            </div>

                            <div class="sf-category-description">
                                ${Uu(e.description)}
                            </div>
                        </div>

                    </div>
                </td>

                <td>
                    <span class="sf-category-products">
                        ${Gu(e.name)}
                    </span>
                </td>

                <td>
                    <span
                        class="sf-status ${Wu(e.status)}"
                    >
                        ${Uu(e.status)}
                    </span>
                </td>

                <td>
                    <div class="sf-actions">

                        <button
                            type="button"
                            class="sf-action"
                            data-action="edit"
                            data-id="${e.id}"
                            aria-label="Edit category"
                            title="Edit"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.6"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M12 20h9"></path>
                                <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"></path>
                            </svg>
                        </button>

                        <button
                            type="button"
                            class="sf-action"
                            data-action="view"
                            data-id="${e.id}"
                            aria-label="View category"
                            title="View"
                        >
                            View
                        </button>

                    </div>
                </td>
            </tr>
        `).join(``):`
            <tr>
                <td
                    colspan="4"
                    class="text-center py-5"
                >
                    <div class="text-muted">
                        <i
                            class="ri-search-line d-block mb-2"
                            style="font-size:24px;"
                        ></i>

                        No categories found.
                    </div>
                </td>
            </tr>
        `;let a=t.length?r+1:0,o=Math.min(r+Lu,t.length);e.resultsInfo.innerHTML=`Showing <strong>${a}</strong> to <strong>${o}</strong> of <strong>${t.length}</strong> categories`,Xu(e,n)}function Xu(e,t){e.pagination.innerHTML=``;let n=(e,t,n,r,i)=>{let a=document.createElement(`button`);return a.type=`button`,a.className=t,a.innerHTML=e,a.disabled=n,a.setAttribute(`aria-label`,i),a.addEventListener(`click`,r),a};e.pagination.appendChild(n(`<i class="ri-arrow-left-s-line"></i>`,`sf-page-btn sf-page-prev`,Iu===1,()=>{--Iu,Yu(e)},`Previous page`));for(let r=1;r<=t;r+=1)e.pagination.appendChild(n(String(r),`sf-page-btn sf-page-number ${r===Iu?`active`:``}`,!1,()=>{Iu=r,Yu(e)},`Go to page ${r}`));e.pagination.appendChild(n(`<i class="ri-arrow-right-s-line"></i>`,`sf-page-btn sf-page-next`,Iu===t,()=>{Iu+=1,Yu(e)},`Next page`))}function Zu(e){e&&Y.default.getOrCreateInstance(e).show()}function Qu(e){if(!e)return;let t=Y.default.getInstance(e);t&&(e.contains(document.activeElement)&&document.activeElement.blur(),t.hide())}function $u(e){Ru=null,e.modalTitle.textContent=`Add Category`,e.form.reset(),e.fields.status.value=`Active`,Zu(e.modal)}function ed(e,t){let n=Fu.find(e=>e.id===t);n&&(Ru=t,e.modalTitle.textContent=`Edit Category`,e.fields.name.value=n.name,e.fields.description.value=n.description,e.fields.status.value=n.status,Zu(e.modal))}function td(e){let t=Fu.find(t=>t.id===e);if(!t)return;let n=document.querySelector(`#categoryViewModal`);n&&n.remove();let r=document.activeElement,i=Gu(t.name),a=`
        <div
            class="modal fade sf-category-view-modal"
            id="categoryViewModal"
            tabindex="-1"
            aria-hidden="true"
        >
            <div
                class="modal-dialog modal-dialog-centered"
            >
                <div class="modal-content">

                    <div class="modal-header">
                        <h5 class="modal-title">
                            Category Details
                        </h5>

                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div class="modal-body">

                        <div class="sf-view-field">
                            <div class="sf-view-label">
                                Category Name
                            </div>

                            <div class="sf-view-value">
                                ${Uu(t.name)}
                            </div>
                        </div>

                        <div class="sf-view-field">
                            <div class="sf-view-label">
                                Description
                            </div>

                            <div class="sf-view-value">
                                ${Uu(t.description)}
                            </div>
                        </div>

                        <div class="sf-view-row">

                            <div class="sf-view-field">
                                <div class="sf-view-label">
                                    Products
                                </div>

                                <div class="sf-view-value">
                                    ${i}
                                </div>
                            </div>

                            <div class="sf-view-field">
                                <div class="sf-view-label">
                                    Status
                                </div>

                                <div class="sf-view-value">
                                    <span
                                        class="sf-status ${Wu(t.status)}"
                                    >
                                        ${Uu(t.status)}
                                    </span>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="modal-footer">

                        <button
                            type="button"
                            class="sf-btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>

                    </div>

                </div>
            </div>
        </div>
    `;document.body.insertAdjacentHTML(`beforeend`,a);let o=document.querySelector(`#categoryViewModal`);if(!o)return;let s=Y.default.getOrCreateInstance(o);o.addEventListener(`hide.bs.modal`,()=>{let e=document.activeElement;e&&o.contains(e)&&e.blur()}),o.addEventListener(`hidden.bs.modal`,()=>{r&&typeof r.focus==`function`&&document.body.contains(r)&&r.focus(),s.dispose(),o.remove()},{once:!0}),s.show()}function nd(e,t){t.preventDefault();let n={name:e.fields.name.value.trim(),description:e.fields.description.value.trim()||`No description provided.`,status:e.fields.status.value};if(Fu.some(e=>e.name.toLowerCase()===n.name.toLowerCase()&&e.id!==Ru)){e.fields.name.setCustomValidity(`Category name must be unique.`),e.fields.name.reportValidity(),e.fields.name.setCustomValidity(``);return}if(Ru!==null){let e=Fu.find(e=>e.id===Ru);if(e){let t=e.name;Ku(t,n.name),Object.assign(e,n)}}else Fu.unshift({id:Date.now(),...n});Vu(),Iu=1,Yu(e),Qu(e.modal)}function rd(e){e.addButton?.addEventListener(`click`,()=>$u(e)),e.form?.addEventListener(`submit`,t=>nd(e,t)),e.tableBody?.addEventListener(`click`,t=>{let n=t.target.closest(`[data-action]`);if(!n)return;let r=Number(n.dataset.id);n.dataset.action===`edit`&&ed(e,r),n.dataset.action===`view`&&td(r)}),[e.searchInput,e.statusFilter].forEach(t=>{t&&(t.addEventListener(`input`,()=>{Iu=1,Yu(e)}),t.addEventListener(`change`,()=>{Iu=1,Yu(e)}))}),e.modal?.addEventListener(`hide.bs.modal`,()=>{e.modal.contains(document.activeElement)&&document.activeElement.blur()})}function id(){return`
        <section class="container-fluid sf-categories-page">

            <div class="sf-page-header">
                <div class="sf-page-header-content">
                    <h1 class="sf-page-title mb-1">
                        Categories
                    </h1>

                    <p class="text-muted small mb-0">
                        Organize products into inventory categories.
                    </p>
                </div>

                <button
                    type="button"
                    class="sf-add-btn"
                    id="addCategoryButton"
                >
                    <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M12 5v14"></path>
                        <path d="M5 12h14"></path>
                    </svg>

                    <span>Add Category</span>
                </button>
            </div>

            <div class="card border-0 shadow-sm">

                <div class="card-body">

                    <div class="sf-toolbar">

                        <div class="sf-search">

                            <i class="ri-search-line"></i>

                            <input
                                type="search"
                                id="categorySearch"
                                placeholder="Search categories..."
                                aria-label="Search categories"
                            >

                        </div>

                        <select
                            id="categoryStatusFilter"
                            class="sf-filter"
                            aria-label="Filter by status"
                        >
                            <option value="">
                                All Status
                            </option>

                            <option value="Active">
                                Active
                            </option>

                            <option value="Inactive">
                                Inactive
                            </option>
                        </select>

                    </div>

                    <div class="sf-categories-table-box">

                        <div class="sf-table-wrap">

                            <table class="sf-table">

                                <thead>
                                    <tr>
                                        <th>Category</th>
                                        <th>Products</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody
                                    id="categoryTableBody"
                                ></tbody>

                            </table>

                        </div>
                        
                    </div>


                    <div class="sf-table-footer">

                        <div
                            class="sf-results"
                            id="categoryResultsInfo"
                        ></div>

                        <div
                            class="sf-pagination"
                            id="categoryPagination"
                        ></div>

                    </div>
                </div>
            </div>

            <div
                class="modal fade"
                id="categoryModal"
                tabindex="-1"
                aria-hidden="true"
            >

                <div
                    class="modal-dialog modal-dialog-centered"
                >

                    <div class="modal-content">

                        <div class="modal-header">

                            <h5
                                class="modal-title"
                                id="categoryModalTitle"
                            >
                                Add Category
                            </h5>

                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>

                        </div>

                        <form id="categoryForm">

                            <div class="modal-body">

                                <div class="row g-3">

                                    <div class="col-12">

                                        <label
                                            for="categoryName"
                                            class="sf-form-label"
                                        >
                                            Category Name
                                        </label>

                                        <input
                                            type="text"
                                            id="categoryName"
                                            class="form-control sf-form-control"
                                            placeholder="Enter category name"
                                            required
                                        >

                                    </div>

                                    <div class="col-12">

                                        <label
                                            for="categoryDescription"
                                            class="sf-form-label"
                                        >
                                            Description
                                        </label>

                                        <textarea
                                            id="categoryDescription"
                                            class="form-control sf-form-control"
                                            rows="3"
                                            placeholder="Describe this category"
                                        ></textarea>

                                    </div>

                                    <div class="col-12">

                                        <label
                                            for="categoryStatus"
                                            class="sf-form-label"
                                        >
                                            Status
                                        </label>

                                        <select
                                            id="categoryStatus"
                                            class="form-select sf-form-control"
                                            required
                                        >

                                            <option value="Active">
                                                Active
                                            </option>

                                            <option value="Inactive">
                                                Inactive
                                            </option>

                                        </select>

                                    </div>

                                </div>

                            </div>

                            <div class="modal-footer sf-modal-footer">

                                <button
                                    type="button"
                                    class="sf-btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    class="sf-btn-primary"
                                >
                                    Save Category
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    `}function ad(){let e=qu();e.tableBody&&!zu&&(zu=!0,rd(e),Yu(e))}function od(){zu=!1,Iu=1,Ru=null}var sd=`stockflow.products`,cd=[{id:1,name:`Wireless Mouse`,sku:`WM-001`,category:`Electronics`,stock:125,price:25e4,status:`In Stock`},{id:2,name:`Mechanical Keyboard`,sku:`MK-002`,category:`Electronics`,stock:48,price:85e4,status:`In Stock`},{id:3,name:`USB-C Cable`,sku:`UC-003`,category:`Accessories`,stock:210,price:12e4,status:`In Stock`},{id:4,name:`Laptop Stand`,sku:`LS-004`,category:`Accessories`,stock:8,price:45e4,status:`Low Stock`},{id:5,name:`Office Chair`,sku:`OC-005`,category:`Furniture`,stock:32,price:175e4,status:`In Stock`},{id:6,name:`Desk Lamp`,sku:`DL-006`,category:`Furniture`,stock:0,price:35e4,status:`Out of Stock`},{id:7,name:`Notebook A5`,sku:`NB-007`,category:`Stationery`,stock:86,price:45e3,status:`In Stock`},{id:8,name:`Ballpoint Pen`,sku:`BP-008`,category:`Stationery`,stock:15,price:15e3,status:`Low Stock`}],ld=[],ud=1,dd=8,fd=!1;function pd(){try{let e=localStorage.getItem(sd);if(e){let t=JSON.parse(e);if(Array.isArray(t))return t}}catch(e){console.warn(`Unable to load StockFlow products.`,e)}let e=structuredClone(cd);return localStorage.setItem(sd,JSON.stringify(e)),e}function md(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}function hd(e){return new Intl.NumberFormat(`en-US`).format(Number(e)||0)}function gd(e){return new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`,maximumFractionDigits:0}).format(Number(e)||0)}function _d(e){return e===`In Stock`?`success`:e===`Low Stock`?`warning`:`danger`}function vd(){return[...new Set(ld.map(e=>e.category).filter(Boolean))].sort((e,t)=>e.localeCompare(t))}function yd(){return{searchInput:document.getElementById(`stockOverviewSearch`),categoryFilter:document.getElementById(`stockOverviewCategory`),statusFilter:document.getElementById(`stockOverviewStatus`),resetButton:document.getElementById(`resetStockOverviewFilters`),tableBody:document.getElementById(`stockOverviewTableBody`),resultsInfo:document.getElementById(`stockOverviewResultsInfo`),pagination:document.getElementById(`stockOverviewPagination`)}}function bd(e){let t=e.searchInput?.value.trim().toLowerCase()||``,n=e.categoryFilter?.value||``,r=e.statusFilter?.value||``;return ld.filter(e=>{let i=!t||[e.name,e.sku,e.category].some(e=>String(e).toLowerCase().includes(t)),a=!n||e.category===n,o=!r||e.status===r;return i&&a&&o})}function xd(e){if(!e.categoryFilter)return;let t=e.categoryFilter.value,n=vd();e.categoryFilter.innerHTML=`
        <option value="">
            All Categories
        </option>

        ${n.map(e=>`
                    <option
                        value="${md(e)}"
                    >
                        ${md(e)}
                    </option>
                `).join(``)}
    `,n.includes(t)&&(e.categoryFilter.value=t)}function Sd(){return ld.reduce((e,t)=>(e.totalProducts+=1,e.totalUnits+=Number(t.stock)||0,e.stockValue+=(Number(t.stock)||0)*(Number(t.price)||0),t.status===`Low Stock`&&(e.lowStock+=1),t.status===`Out of Stock`&&(e.outOfStock+=1),e),{totalProducts:0,totalUnits:0,lowStock:0,outOfStock:0,stockValue:0})}function Cd(){let e=Sd();return`
        <div class="row g-2 mb-2">

            <div class="col-12 col-sm-6 col-xl-3">
                <div class="sf-stock-stat">
                    <div class="sf-stock-stat-top">

                        <div>
                            <span class="sf-stock-stat-label">
                                Total Products
                            </span>

                            <strong
                                class="sf-stock-stat-value"
                            >
                                ${hd(e.totalProducts)}
                            </strong>

                            <span class="sf-stock-stat-description">
                                All products in inventory
                            </span>    

                        </div>

                        <div class="sf-stock-stat-icon">
                            <i class="ri-box-3-line"></i>
                        </div>

                    </div>
                </div>
            </div>


            <div class="col-12 col-sm-6 col-xl-3">
                <div class="sf-stock-stat">
                    <div class="sf-stock-stat-top">

                        <div>
                            <span class="sf-stock-stat-label">
                                Total Units
                            </span>

                            <strong
                                class="sf-stock-stat-value"
                            >
                                ${hd(e.totalUnits)}
                            </strong>

                            <span class="sf-stock-stat-description">
                                Total units in stock
                            </span>
                        </div>

                        <div
                            class="sf-stock-stat-icon success"
                        >
                            <i class="ri-stack-line"></i>
                        </div>

                    </div>
                </div>
            </div>


            <div class="col-12 col-sm-6 col-xl-3">
                <div class="sf-stock-stat">
                    <div class="sf-stock-stat-top">

                        <div>
                            <span class="sf-stock-stat-label">
                                Low Stock
                            </span>

                            <strong
                                class="sf-stock-stat-value"
                            >
                                ${hd(e.lowStock)}
                            </strong>

                            <span class="sf-stock-stat-description">
                                Products below minimum
                            </span>
                        </div>

                        <div
                            class="sf-stock-stat-icon warning"
                        >
                            <i
                                class="ri-error-warning-line"
                            ></i>
                        </div>

                    </div>
                </div>
            </div>


            <div class="col-12 col-sm-6 col-xl-3">
                <div class="sf-stock-stat">
                    <div class="sf-stock-stat-top">

                        <div>
                            <span class="sf-stock-stat-label">
                                Stock Value
                            </span>

                            <strong
                                class="sf-stock-stat-value sf-stock-stat-value--currency"
                            >
                                ${gd(e.stockValue)}
                            </strong>

                            <span class="sf-stock-stat-description">
                                Total value of current stock
                            </span>
                        </div>

                        <div
                            class="sf-stock-stat-icon info"
                        >
                            <i
                                class="ri-money-dollar-circle-line"
                            ></i>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    `}function wd(e){let t=bd(e),n=Math.max(1,Math.ceil(t.length/dd));ud>n&&(ud=n);let r=(ud-1)*dd,i=t.slice(r,r+dd);e.tableBody.innerHTML=i.length?i.map(e=>`
            <tr>

                <td>
                    <div class="sf-stock-product">

                        <div
                            class="sf-stock-product-icon"
                            aria-hidden="true"
                        >
                            <i class="ri-box-3-line"></i>
                        </div>

                        <div
                            class="sf-stock-product-name"
                        >
                            ${md(e.name)}
                        </div>

                    </div>
                </td>


                <td>
                    <span class="sf-stock-sku">
                        ${md(e.sku)}
                    </span>
                </td>


                <td>
                    <span class="sf-stock-category">
                        ${md(e.category)}
                    </span>
                </td>


                <td>
                    <div class="sf-stock-quantity">

                        <strong>
                            ${hd(e.stock)}
                        </strong>

                        <span>
                            units
                        </span>

                    </div>
                </td>


                <td>
                    <span class="sf-stock-value">
                        ${gd((Number(e.stock)||0)*(Number(e.price)||0))}
                    </span>
                </td>


                <td>
                    <span
                        class="sf-stock-status ${_d(e.status)}"
                    >
                        <span
                            class="sf-stock-status-dot"
                        ></span>

                        ${md(e.status)}
                    </span>
                </td>


                <td>
                    <button
                        type="button"
                        class="sf-stock-action"
                        data-product-view="${e.id}"
                        aria-label="View ${md(e.name)}"
                        title="View product"
                    >
                        View
                    </button>
                </td>

            </tr>
        `).join(``):`
            <tr>
                <td
                    colspan="7"
                    class="sf-stock-empty"
                >
                    <i class="ri-inbox-line"></i>

                    <span>
                        No products found.
                    </span>
                </td>
            </tr>
        `;let a=t.length>0?r+1:0,o=Math.min(r+dd,t.length);e.resultsInfo.innerHTML=`Showing <strong>${a}</strong> to <strong>${o}</strong> of <strong>${t.length}</strong> products`,Td(e,n)}function Td(e,t){e.pagination.innerHTML=``;let n=(e,t,n,r,i=!1)=>`
        <button
            type="button"
            class="sf-stock-page-btn ${i?`active`:``}"
            data-page="${n}"
            aria-label="${r}"
            ${t?`disabled`:``}
        >
            ${e}
        </button>
    `;e.pagination.innerHTML+=n(`<i class="ri-arrow-left-s-line"></i>`,ud===1,ud-1,`Previous page`);for(let r=1;r<=t;r+=1)e.pagination.innerHTML+=n(r,!1,r,`Go to page ${r}`,r===ud);e.pagination.innerHTML+=n(`<i class="ri-arrow-right-s-line"></i>`,ud===t,ud+1,`Next page`)}function Ed(e){let t=(Number(e.stock)||0)*(Number(e.price)||0),n=`
        <div
            class="modal fade sf-stock-detail-modal"
            id="stockDetailModal"
            tabindex="-1"
            aria-labelledby="stockDetailModalLabel"
            aria-hidden="true"
        >
            <div
                class="modal-dialog modal-dialog-centered"
            >
                <div class="modal-content">

                    <div class="modal-header">

                        <div>
                            <h5
                                class="modal-title"
                                id="stockDetailModalLabel"
                            >
                                Product Details
                            </h5>

                            <p class="sf-stock-detail-subtitle">
                                ${md(e.sku)}
                            </p>
                        </div>

                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>

                    </div>


                    <div class="modal-body">

                        <div class="sf-stock-detail-product">

                            <div class="sf-stock-detail-product-icon">
                                <i class="ri-box-3-line"></i>
                            </div>

                            <div>
                                <div
                                    class="sf-stock-detail-product-name"
                                >
                                    ${md(e.name)}
                                </div>

                                <div
                                    class="sf-stock-detail-product-sku"
                                >
                                    ${md(e.sku)}
                                </div>
                            </div>

                        </div>


                        <div class="sf-stock-detail-grid">

                            <div class="sf-stock-detail-item">
                                <span class="sf-stock-detail-label">
                                    Category
                                </span>

                                <strong
                                    class="sf-stock-detail-value"
                                >
                                    ${md(e.category)}
                                </strong>
                            </div>


                            <div class="sf-stock-detail-item">
                                <span class="sf-stock-detail-label">
                                    Current Stock
                                </span>

                                <strong
                                    class="sf-stock-detail-value"
                                >
                                    ${hd(e.stock)}
                                    <span
                                        class="sf-stock-detail-unit"
                                    >
                                        units
                                    </span>
                                </strong>
                            </div>


                            <div class="sf-stock-detail-item">
                                <span class="sf-stock-detail-label">
                                    Unit Price
                                </span>

                                <strong
                                    class="sf-stock-detail-value"
                                >
                                    ${gd(e.price)}
                                </strong>
                            </div>


                            <div class="sf-stock-detail-item">
                                <span class="sf-stock-detail-label">
                                    Stock Value
                                </span>

                                <strong
                                    class="sf-stock-detail-value"
                                >
                                    ${gd(t)}
                                </strong>
                            </div>

                        </div>


                        <div class="sf-stock-detail-status-row">

                            <span class="sf-stock-detail-label">
                                Status
                            </span>

                            <span
                                class="sf-stock-status ${_d(e.status)}"
                            >
                                <span
                                    class="sf-stock-status-dot"
                                ></span>

                                ${md(e.status)}
                            </span>

                        </div>

                    </div>


                    <div class="modal-footer">

                        <button
                            type="button"
                            class="sf-btn sf-btn-outline"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>

                    </div>

                </div>
            </div>
        </div>
    `;document.body.insertAdjacentHTML(`beforeend`,n);let r=document.querySelector(`#stockDetailModal`);if(!r)return;let i=document.activeElement,a=Y.default.getOrCreateInstance(r);r.addEventListener(`hide.bs.modal`,()=>{let e=document.activeElement;e&&r.contains(e)&&e.blur()}),r.addEventListener(`hidden.bs.modal`,()=>{i&&typeof i.focus==`function`&&document.body.contains(i)&&i.focus(),r.remove()},{once:!0}),a.show()}function Dd(e){e.searchInput?.addEventListener(`input`,()=>{ud=1,wd(e)}),e.categoryFilter?.addEventListener(`change`,()=>{ud=1,wd(e)}),e.statusFilter?.addEventListener(`change`,()=>{ud=1,wd(e)}),e.resetButton?.addEventListener(`click`,()=>{e.searchInput&&(e.searchInput.value=``),e.categoryFilter&&(e.categoryFilter.value=``),e.statusFilter&&(e.statusFilter.value=``),ud=1,wd(e)}),e.tableBody?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-product-view]`);if(!t)return;let n=Number(t.dataset.productView),r=ld.find(e=>e.id===n);r&&Ed(r)}),e.pagination?.addEventListener(`click`,t=>{let n=t.target.closest(`[data-page]`);if(!n||n.disabled)return;let r=Number(n.dataset.page);r<1||(ud=r,wd(e))})}function Od(){return ld=pd(),`
        <section
            class="container-fluid sf-stock-overview-page"
        >

            <div class="sf-page-header">

                <div
                    class="sf-page-header-content"
                >
                    <h1
                        class="sf-page-title mb-1"
                    >
                        Stock Overview
                    </h1>

                    <p
                        class="text-muted small mb-0"
                    >
                        Monitor current inventory
                        levels across all products.
                    </p>
                </div>

            </div>


            ${Cd()}


            <section class="sf-card">

                <div class="sf-toolbar">

                    <div class="sf-search">

                        <i
                            class="ri-search-line"
                        ></i>

                        <input
                            type="search"
                            id="stockOverviewSearch"
                            placeholder="Search products..."
                            aria-label="Search products"
                        >

                    </div>


                    <select
                        id="stockOverviewCategory"
                        class="sf-filter"
                        aria-label="Filter by category"
                    >
                        <option value="">
                            All Categories
                        </option>
                    </select>


                    <select
                        id="stockOverviewStatus"
                        class="sf-filter"
                        aria-label="Filter by status"
                    >
                        <option value="">
                            All Status
                        </option>

                        <option value="In Stock">
                            In Stock
                        </option>

                        <option value="Low Stock">
                            Low Stock
                        </option>

                        <option value="Out of Stock">
                            Out of Stock
                        </option>
                    </select>


                    <button
                        type="button"
                        id="resetStockOverviewFilters"
                        class="sf-stock-reset"
                        title="Reset filters"
                        aria-label="Reset filters"
                    >
                        <i
                            class="ri-refresh-line"
                        ></i>
                    </button>

                </div>


                <div class="sf-table-wrap">

                    <table
                        class="sf-stock-table"
                    >

                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>SKU</th>
                                <th>Category</th>
                                <th>Stock</th>
                                <th>Stock Value</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody
                            id="stockOverviewTableBody"
                        ></tbody>

                    </table>

                </div>


                <div class="sf-table-footer">

                    <div
                        class="sf-results"
                        id="stockOverviewResultsInfo"
                    ></div>

                    <div
                        class="sf-pagination"
                        id="stockOverviewPagination"
                    ></div>

                </div>

            </section>

        </section>
    `}function kd(){let e=yd();e.tableBody&&!fd&&(fd=!0,ld=pd(),xd(e),Dd(e),wd(e))}function Ad(){fd=!1,ud=1}var jd=!1,Md=1,Nd=null,Pd=8,Fd=[{id:1,date:`2026-09-07`,product:`Wireless Mouse`,sku:`WM-001`,qty:120,supplier:`Tech Supply Co.`,reference:`IN-00032`,notes:`Regular stock replenishment.`},{id:2,date:`2026-09-06`,product:`Mechanical Keyboard`,sku:`MK-002`,qty:50,supplier:`Global Tech Ltd.`,reference:`IN-00031`,notes:``},{id:3,date:`2026-09-05`,product:`USB-C Cable`,sku:`UC-003`,qty:200,supplier:`Digital Supply`,reference:`IN-00030`,notes:``},{id:4,date:`2026-09-04`,product:`Laptop Stand`,sku:`LS-004`,qty:30,supplier:`Office Source`,reference:`IN-00029`,notes:``},{id:5,date:`2026-09-03`,product:`Office Chair`,sku:`OC-005`,qty:24,supplier:`Workspace Supply`,reference:`IN-00028`,notes:``},{id:6,date:`2026-09-02`,product:`Desk Lamp`,sku:`DL-006`,qty:40,supplier:`Home Office Co.`,reference:`IN-00027`,notes:``},{id:7,date:`2026-09-01`,product:`Notebook A5`,sku:`NB-007`,qty:150,supplier:`Stationery Hub`,reference:`IN-00026`,notes:``},{id:8,date:`2026-08-31`,product:`Ballpoint Pen`,sku:`BP-008`,qty:300,supplier:`Stationery Hub`,reference:`IN-00025`,notes:``},{id:9,date:`2026-08-30`,product:`Monitor 24 Inch`,sku:`MN-009`,qty:18,supplier:`Tech Supply Co.`,reference:`IN-00024`,notes:``},{id:10,date:`2026-08-29`,product:`Wireless Headset`,sku:`WH-010`,qty:35,supplier:`Global Tech Ltd.`,reference:`IN-00023`,notes:``},{id:11,date:`2026-08-28`,product:`HDMI Cable`,sku:`HD-011`,qty:100,supplier:`Digital Supply`,reference:`IN-00022`,notes:``},{id:12,date:`2026-08-27`,product:`USB Hub`,sku:`UH-012`,qty:45,supplier:`Tech Supply Co.`,reference:`IN-00021`,notes:``}],Id=[{name:`Wireless Mouse`,sku:`WM-001`},{name:`Mechanical Keyboard`,sku:`MK-002`},{name:`USB-C Cable`,sku:`UC-003`},{name:`Laptop Stand`,sku:`LS-004`},{name:`Office Chair`,sku:`OC-005`},{name:`Desk Lamp`,sku:`DL-006`},{name:`Notebook A5`,sku:`NB-007`},{name:`Ballpoint Pen`,sku:`BP-008`},{name:`Monitor 24 Inch`,sku:`MN-009`},{name:`Wireless Headset`,sku:`WH-010`},{name:`HDMI Cable`,sku:`HD-011`},{name:`USB Hub`,sku:`UH-012`}],Ld=[`Tech Supply Co.`,`Global Tech Ltd.`,`Digital Supply`,`Office Source`,`Workspace Supply`,`Home Office Co.`,`Stationery Hub`];function Rd(e){return String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function zd(e){let t=new Date(`${e}T00:00:00`);return new Intl.DateTimeFormat(`en-US`,{month:`short`,day:`2-digit`,year:`numeric`}).format(t)}function Bd(e){let t=new Date(`${e}T00:00:00`);return new Intl.DateTimeFormat(`en-US`,{weekday:`short`}).format(t)}function Vd(){return{search:document.querySelector(`#stockInSearch`),supplier:document.querySelector(`#stockInSupplier`),date:document.querySelector(`#stockInDate`),reset:document.querySelector(`#resetStockInFilters`),add:document.querySelector(`#addStockInButton`),tableBody:document.querySelector(`#stockInTableBody`),pagination:document.querySelector(`#stockInPagination`),results:document.querySelector(`#stockInResults`),form:document.querySelector(`#stockInForm`)}}function Hd(){let e=Vd(),t=e.search?.value.trim().toLowerCase()||``,n=e.supplier?.value||``,r=e.date?.value||``;return Fd.filter(e=>{let i=[e.product,e.sku,e.supplier,e.reference].join(` `).toLowerCase(),a=!t||i.includes(t),o=!n||e.supplier===n,s=!r||e.date===r;return a&&o&&s})}function Ud(){let e=Vd();if(!e.tableBody)return;let t=Hd(),n=t.length,r=Math.max(1,Math.ceil(n/Pd));Md>r&&(Md=r);let i=(Md-1)*Pd,a=t.slice(i,i+Pd);a.length?e.tableBody.innerHTML=a.map(Wd).join(``):e.tableBody.innerHTML=`
            <tr>
                <td
                    colspan="6"
                    class="text-center py-5"
                >
                    <div class="text-muted">
                        No stock in transactions found.
                    </div>
                </td>
            </tr>
        `,Gd(i,a.length,n),Kd(r)}function Wd(e){return`
        <tr>
            <td>
                <div class="sf-stock-in-date">
                    <strong>
                        ${Rd(zd(e.date))}
                    </strong>

                    <span>
                        ${Rd(Bd(e.date))}
                    </span>
                </div>
            </td>

            <td>
                <div class="sf-stock-in-product">
                    <strong>
                        ${Rd(e.product)}
                    </strong>

                    <span>
                        SKU: ${Rd(e.sku)}
                    </span>
                </div>
            </td>

            <td class="sf-stock-in-qty">
                ${Rd(e.qty.toLocaleString())}
            </td>

            <td>
                ${Rd(e.supplier)}
            </td>

            <td>
                <span class="sf-stock-in-reference">
                    ${Rd(e.reference)}
                </span>
            </td>

            <td>
                <div class="sf-stock-in-actions">

                    <button
                        type="button"
                        class="sf-icon-btn"
                        title="Edit Stock In"
                        data-stock-in-edit="${e.id}"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.6"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                d="M12 20h9"
                            ></path>

                            <path
                                d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"
                            ></path>
                        </svg>
                    </button>

                    <button
                        type="button"
                        class="sf-action-btn sf-action-btn-view"
                        data-stock-in-view="${e.id}"
                    >
                        <span>View</span>
                    </button>

                </div>
            </td>
        </tr>
    `}function Gd(e,t,n){let r=Vd();if(!r.results)return;if(!n){r.results.textContent=`Showing 0 of 0 records`;return}let i=e+t;r.results.textContent=`Showing ${e+1} to ${i} of ${n} records`}function Kd(e){let t=Vd();if(!t.pagination)return;let n=``;n+=`
        <button
            type="button"
            class="sf-pagination-btn"
            data-page="${Md-1}"
            ${Md===1?`disabled`:``}
            aria-label="Previous page"
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="m15 18-6-6 6-6"></path>
            </svg>
        </button>
    `;for(let t=1;t<=e;t++)n+=`
            <button
                type="button"
                class="sf-pagination-btn ${t===Md?`active`:``}"
                data-page="${t}"
            >
                ${t}
            </button>
        `;n+=`
        <button
            type="button"
            class="sf-pagination-btn"
            data-page="${Md+1}"
            ${Md===e?`disabled`:``}
            aria-label="Next page"
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="m9 18 6-6-6-6"></path>
            </svg>
        </button>
    `,t.pagination.innerHTML=n}function qd(){return Id.map(e=>`
            <option value="${Rd(e.name)}">
                ${Rd(e.name)}
            </option>
        `).join(``)}function Jd(){return Ld.map(e=>`
            <option value="${Rd(e)}">
                ${Rd(e)}
            </option>
        `).join(``)}function Yd(e=null){Nd=e?.id||null;let t=document.querySelector(`#stockInModal`);if(!t)return;Zd(t);let n=t.querySelector(`#stockInModalTitle`),r=t.querySelector(`#stockInSubmit`),i=t.querySelector(`#stockInFormDate`),a=t.querySelector(`#stockInFormProduct`),o=t.querySelector(`#stockInFormQuantity`),s=t.querySelector(`#stockInFormSupplier`),c=t.querySelector(`#stockInFormReference`),l=t.querySelector(`#stockInFormNotes`);e?(n.textContent=`Edit Stock In`,r.textContent=`Save Changes`,i.value=e.date,a.value=e.product,o.value=e.qty,s.value=e.supplier,c.value=e.reference,l.value=e.notes||``):(n.textContent=`Add Stock In`,r.textContent=`Save Stock In`,i.value=new Date().toISOString().slice(0,10),a.value=``,o.value=``,s.value=``,c.value=``,l.value=``),Y.default.getOrCreateInstance(t).show()}function Xd(e){let t=document.querySelector(`#stockInViewModal`);t&&(Zd(t),t.querySelector(`#viewStockInDate`).textContent=zd(e.date),t.querySelector(`#viewStockInProduct`).textContent=e.product,t.querySelector(`#viewStockInSku`).textContent=e.sku,t.querySelector(`#viewStockInQuantity`).textContent=e.qty.toLocaleString(),t.querySelector(`#viewStockInSupplier`).textContent=e.supplier,t.querySelector(`#viewStockInReference`).textContent=e.reference,t.querySelector(`#viewStockInNotes`).textContent=e.notes||`—`,Y.default.getOrCreateInstance(t).show())}function Zd(e){e&&(e.dataset.focusFixInitialized||(e.addEventListener(`hide.bs.modal`,()=>{let t=document.activeElement;t&&e.contains(t)&&t.blur()}),e.dataset.focusFixInitialized=`true`))}function Qd(e){e.preventDefault();let t=e.currentTarget,n=new FormData(t),r=n.get(`date`),i=n.get(`product`),a=Number(n.get(`quantity`)),o=n.get(`supplier`),s=n.get(`reference`),c=n.get(`notes`),l=Id.find(e=>e.name===i),u={id:Nd||Date.now(),date:r,product:i,sku:l?.sku||`—`,qty:a,supplier:o,reference:s,notes:c};Nd?Fd=Fd.map(e=>e.id===Nd?u:e):Fd.unshift(u),Md=1,Ud();let d=document.querySelector(`#stockInModal`);Y.default.getInstance(d)?.hide(),t.reset(),Nd=null}function $d(){let e=Vd();e.search?.addEventListener(`input`,()=>{Md=1,Ud()}),e.supplier?.addEventListener(`change`,()=>{Md=1,Ud()}),e.date?.addEventListener(`change`,()=>{Md=1,Ud()}),e.reset?.addEventListener(`click`,()=>{e.search&&(e.search.value=``),e.supplier&&(e.supplier.value=``),e.date&&(e.date.value=``),Md=1,Ud()}),e.add?.addEventListener(`click`,()=>{Yd()}),e.form?.addEventListener(`submit`,Qd),e.tableBody?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-stock-in-edit]`),n=e.target.closest(`[data-stock-in-view]`);if(t){let e=Number(t.dataset.stockInEdit),n=Fd.find(t=>t.id===e);n&&Yd(n)}if(n){let e=Number(n.dataset.stockInView),t=Fd.find(t=>t.id===e);t&&Xd(t)}}),e.pagination?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-page]`);if(!t)return;let n=Number(t.dataset.page);n<1||n>Math.ceil(Hd().length/Pd)||(Md=n,Ud())})}function ef(){return`
        <div class="container-fluid">

            <div
                class="d-flex flex-column flex-md-row
                       align-items-md-center
                       justify-content-between
                       gap-3 mb-4"
            >
                <div>
                    <h1 class="h3 mb-1">
                        Stock In
                    </h1>

                    <p class="text-muted mb-0">
                        Record incoming inventory transactions.
                    </p>
                </div>

                <button
                    type="button"
                    class="sf-add-btn"
                    id="addStockInButton"
                >
                    <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M12 5v14"></path>
                        <path d="M5 12h14"></path>
                    </svg>

                    <span>Add Stock In</span>
                </button>
            </div>

            <!-- FILTER BOX -->
            <section
                class="sf-stock-in-filter sf-card mb-2"
            >
                <div class="row g-3">

                    <div class="col-12 col-lg-5">
                        <label
                            for="stockInSearch"
                            class="sf-form-label"
                        >
                            Search
                        </label>

                        <div class="sf-stock-in-search">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.6"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                aria-hidden="true"
                            >
                                <circle
                                    cx="11"
                                    cy="11"
                                    r="7"
                                ></circle>

                                <path
                                    d="m20 20-4-4"
                                ></path>
                            </svg>

                            <input
                                type="search"
                                id="stockInSearch"
                                class="sf-form-control"
                                placeholder="Search product, SKU, supplier, reference..."
                            >
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-3">
                        <label
                            for="stockInSupplier"
                            class="sf-form-label"
                        >
                            Supplier
                        </label>

                        <select
                            id="stockInSupplier"
                            class="sf-form-control"
                        >
                            <option value="">
                                All Suppliers
                            </option>

                            ${Jd()}
                        </select>
                    </div>

                    <div class="col-12 col-md-6 col-lg-3">
                        <label
                            for="stockInDate"
                            class="sf-form-label"
                        >
                            Date
                        </label>

                        <input
                            type="date"
                            id="stockInDate"
                            class="sf-form-control"
                        >
                    </div>

                    <div class="col-12 col-lg-1 d-flex align-items-end">
                        <button
                            type="button"
                            id="resetStockInFilters"
                            class="sf-btn sf-btn-outline w-100"
                        >
                            Reset
                        </button>
                    </div>

                </div>
            </section>

            <!-- TABLE BOX -->
            <section
                class="sf-stock-in-table sf-card"
            >
                <div class="table-responsive">
                    <table
                        class="table sf-table align-middle mb-0"
                    >
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Product</th>
                                <th>Qty</th>
                                <th>Supplier</th>
                                <th>Reference</th>
                                <th class="text-end">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody id="stockInTableBody">
                        </tbody>
                    </table>
                </div>

                <div class="sf-table-footer">

                    <span
                        id="stockInResults"
                        class="sf-table-results"
                    >
                        Showing 1 to 8 of 12 records
                    </span>

                    <div
                        id="stockInPagination"
                        class="sf-pagination"
                    ></div>

                </div>
            </section>

        </div>

        <!-- ADD / EDIT MODAL -->
        <div
            class="modal fade sf-stock-in-modal"
            id="stockInModal"
            tabindex="-1"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">

                    <div class="modal-header">
                        <h5
                            class="modal-title"
                            id="stockInModalTitle"
                        >
                            Add Stock In
                        </h5>

                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>

                    <form id="stockInForm">

                        <div class="modal-body">

                            <div class="row g-3">

                                <div class="col-12 col-md-6">
                                    <label
                                        for="stockInFormDate"
                                        class="sf-form-label"
                                    >
                                        Date
                                        <span>*</span>
                                    </label>

                                    <input
                                        type="date"
                                        id="stockInFormDate"
                                        name="date"
                                        class="sf-form-control"
                                        required
                                    >
                                </div>

                                <div class="col-12 col-md-6">
                                    <label
                                        for="stockInFormProduct"
                                        class="sf-form-label"
                                    >
                                        Product
                                        <span>*</span>
                                    </label>

                                    <select
                                        id="stockInFormProduct"
                                        name="product"
                                        class="sf-form-control"
                                        required
                                    >
                                        <option value="">
                                            Select product
                                        </option>

                                        ${qd()}
                                    </select>
                                </div>

                                <div class="col-12 col-md-6">
                                    <label
                                        for="stockInFormQuantity"
                                        class="sf-form-label"
                                    >
                                        Quantity
                                        <span>*</span>
                                    </label>

                                    <input
                                        type="number"
                                        id="stockInFormQuantity"
                                        name="quantity"
                                        class="sf-form-control"
                                        min="1"
                                        placeholder="Enter quantity"
                                        required
                                    >
                                </div>

                                <div class="col-12 col-md-6">
                                    <label
                                        for="stockInFormSupplier"
                                        class="sf-form-label"
                                    >
                                        Supplier
                                        <span>*</span>
                                    </label>

                                    <select
                                        id="stockInFormSupplier"
                                        name="supplier"
                                        class="sf-form-control"
                                        required
                                    >
                                        <option value="">
                                            Select supplier
                                        </option>

                                        ${Jd()}
                                    </select>
                                </div>

                                <div class="col-12">
                                    <label
                                        for="stockInFormReference"
                                        class="sf-form-label"
                                    >
                                        Reference
                                        <span>*</span>
                                    </label>

                                    <input
                                        type="text"
                                        id="stockInFormReference"
                                        name="reference"
                                        class="sf-form-control"
                                        placeholder="e.g. IN-00033"
                                        required
                                    >
                                </div>

                                <div class="col-12">
                                    <label
                                        for="stockInFormNotes"
                                        class="sf-form-label"
                                    >
                                        Notes
                                    </label>

                                    <textarea
                                        id="stockInFormNotes"
                                        name="notes"
                                        class="sf-form-control"
                                        rows="3"
                                        placeholder="Add optional notes..."
                                    ></textarea>
                                </div>

                            </div>

                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="sf-modal-btn sf-modal-btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                class="sf-modal-btn sf-modal-btn-primary"
                                id="stockInSubmit"
                            >
                                Save Stock In
                            </button>
                        </div>

                    </form>

                </div>
            </div>
        </div>

        <!-- VIEW MODAL -->
        <div
            class="modal fade"
            id="stockInViewModal"
            tabindex="-1"
            aria-hidden="true"
        >
            <div
                class="modal-dialog modal-dialog-centered"
            >
                <div class="modal-content sf-stock-in-modal">

                    <div class="modal-header">
                        <div class="sf-stock-in-modal-title">
                            <h5 class="modal-title">
                                Stock In Details
                            </h5>
                        </div>

                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div class="modal-body">

                        <div class="sf-stock-in-detail-grid">

                            <div>
                                <span>Date</span>
                                <strong id="viewStockInDate">—</strong>
                            </div>

                            <div>
                                <span>Reference</span>
                                <strong id="viewStockInReference"
                                class="sf-stock-in-reference-badge"
                                >—</strong>
                            </div>

                            <div>
                                <span>Product</span>
                                <strong id="viewStockInProduct">—</strong>
                            </div>

                            <div>
                                <span>SKU</span>
                                <strong id="viewStockInSku">—</strong>
                            </div>

                            <div>
                                <span>Quantity</span>
                                <strong id="viewStockInQuantity">—</strong>
                            </div>

                            <div>
                                <span>Supplier</span>
                                <strong id="viewStockInSupplier">—</strong>
                            </div>

                            <div class="sf-stock-in-detail-full">
                                <span>Notes</span>
                                <strong id="viewStockInNotes">—</strong>
                            </div>

                        </div>

                    </div>

                    <div class="modal-footer">

                        <button
                            type="button"
                            class="sf-btn sf-btn-outline"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>

                    </div>

                </div>
            </div>
        </div>
    `}function tf(){jd||Vd().tableBody&&(jd=!0,$d(),Ud())}function nf(){[`#stockInModal`,`#stockInViewModal`].forEach(e=>{let t=document.querySelector(e);t&&(Y.default.getInstance(t)?.hide(),t.remove())}),jd=!1,Md=1,Nd=null}var rf=!1,af=1,of=null,sf=8,cf=[{id:1,date:`2026-09-07`,product:`Wireless Mouse`,sku:`WM-001`,qty:12,reason:`Customer Order`,destination:`Customer`,reference:`OUT-00021`,notes:`Customer order fulfillment.`},{id:2,date:`2026-09-06`,product:`Mechanical Keyboard`,sku:`MK-002`,qty:8,reason:`Customer Order`,destination:`Customer`,reference:`OUT-00020`,notes:``},{id:3,date:`2026-09-05`,product:`USB-C Cable`,sku:`UC-003`,qty:25,reason:`Internal Use`,destination:`IT Department`,reference:`OUT-00019`,notes:``},{id:4,date:`2026-09-04`,product:`Laptop Stand`,sku:`LS-004`,qty:5,reason:`Damaged`,destination:`Damaged Stock`,reference:`OUT-00018`,notes:``},{id:5,date:`2026-09-03`,product:`Office Chair`,sku:`OC-005`,qty:3,reason:`Customer Order`,destination:`Customer`,reference:`OUT-00017`,notes:``},{id:6,date:`2026-09-02`,product:`Desk Lamp`,sku:`DL-006`,qty:6,reason:`Internal Use`,destination:`Office`,reference:`OUT-00016`,notes:``},{id:7,date:`2026-09-01`,product:`Notebook A5`,sku:`NB-007`,qty:20,reason:`Customer Order`,destination:`Customer`,reference:`OUT-00015`,notes:``},{id:8,date:`2026-08-31`,product:`Ballpoint Pen`,sku:`BP-008`,qty:35,reason:`Internal Use`,destination:`Office`,reference:`OUT-00014`,notes:``},{id:9,date:`2026-08-30`,product:`Monitor 24 Inch`,sku:`MN-009`,qty:2,reason:`Customer Order`,destination:`Customer`,reference:`OUT-00013`,notes:``},{id:10,date:`2026-08-29`,product:`Wireless Headset`,sku:`WH-010`,qty:4,reason:`Customer Order`,destination:`Customer`,reference:`OUT-00012`,notes:``},{id:11,date:`2026-08-28`,product:`HDMI Cable`,sku:`HD-011`,qty:10,reason:`Return to Supplier`,destination:`Supplier`,reference:`OUT-00011`,notes:``},{id:12,date:`2026-08-27`,product:`USB Hub`,sku:`UH-012`,qty:7,reason:`Other`,destination:`Other`,reference:`OUT-00010`,notes:``}],lf=[{name:`Wireless Mouse`,sku:`WM-001`},{name:`Mechanical Keyboard`,sku:`MK-002`},{name:`USB-C Cable`,sku:`UC-003`},{name:`Laptop Stand`,sku:`LS-004`},{name:`Office Chair`,sku:`OC-005`},{name:`Desk Lamp`,sku:`DL-006`},{name:`Notebook A5`,sku:`NB-007`},{name:`Ballpoint Pen`,sku:`BP-008`},{name:`Monitor 24 Inch`,sku:`MN-009`},{name:`Wireless Headset`,sku:`WH-010`},{name:`HDMI Cable`,sku:`HD-011`},{name:`USB Hub`,sku:`UH-012`}],uf=[`Customer Order`,`Internal Use`,`Damaged`,`Return to Supplier`,`Other`];function df(e){return String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function ff(e){let t=new Date(`${e}T00:00:00`);return new Intl.DateTimeFormat(`en-US`,{month:`short`,day:`2-digit`,year:`numeric`}).format(t)}function pf(e){let t=new Date(`${e}T00:00:00`);return new Intl.DateTimeFormat(`en-US`,{weekday:`short`}).format(t)}function mf(){return{search:document.querySelector(`#stockOutSearch`),reason:document.querySelector(`#stockOutReason`),date:document.querySelector(`#stockOutDate`),reset:document.querySelector(`#resetStockOutFilters`),add:document.querySelector(`#addStockOutButton`),tableBody:document.querySelector(`#stockOutTableBody`),pagination:document.querySelector(`#stockOutPagination`),results:document.querySelector(`#stockOutResults`),form:document.querySelector(`#stockOutForm`)}}function hf(){let e=mf(),t=e.search?.value.trim().toLowerCase()||``,n=e.reason?.value||``,r=e.date?.value||``;return cf.filter(e=>{let i=[e.product,e.sku,e.reason,e.destination,e.reference].join(` `).toLowerCase(),a=!t||i.includes(t),o=!n||e.reason===n,s=!r||e.date===r;return a&&o&&s})}function gf(){let e=mf();if(!e.tableBody)return;let t=hf(),n=t.length,r=Math.max(1,Math.ceil(n/sf));af>r&&(af=r);let i=(af-1)*sf,a=t.slice(i,i+sf);a.length?e.tableBody.innerHTML=a.map(_f).join(``):e.tableBody.innerHTML=`
            <tr>
                <td
                    colspan="7"
                    class="text-center py-5"
                >
                    <div class="text-muted">
                        No stock out transactions found.
                    </div>
                </td>
            </tr>
        `,vf(i,a.length,n),yf(r)}function _f(e){return`
        <tr>
            <td>
                <div class="sf-stock-out-date">
                    <strong>
                        ${df(ff(e.date))}
                    </strong>

                    <span>
                        ${df(pf(e.date))}
                    </span>
                </div>
            </td>

            <td>
                <div class="sf-stock-out-product">
                    <strong>
                        ${df(e.product)}
                    </strong>

                    <span>
                        SKU: ${df(e.sku)}
                    </span>
                </div>
            </td>

            <td class="sf-stock-out-qty">
                ${df(e.qty.toLocaleString())}
            </td>

            <td>
                <span class="sf-stock-out-reason">
                    ${df(e.reason)}
                </span>
            </td>

            <td>
                ${df(e.destination)}
            </td>

            <td>
                <span class="sf-stock-out-reference">
                    ${df(e.reference)}
                </span>
            </td>

            <td>
                <div class="sf-stock-out-actions">

                    <button
                        type="button"
                        class="sf-icon-btn"
                        title="Edit Stock Out"
                        data-stock-out-edit="${e.id}"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.6"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                d="M12 20h9"
                            ></path>

                            <path
                                d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"
                            ></path>
                        </svg>
                    </button>

                    <button
                        type="button"
                        class="sf-action-btn sf-action-btn-view"
                        data-stock-out-view="${e.id}"
                    >
                        <span>View</span>
                    </button>

                </div>
            </td>
        </tr>
    `}function vf(e,t,n){let r=mf();if(!r.results)return;if(!n){r.results.textContent=`Showing 0 of 0 records`;return}let i=e+t;r.results.textContent=`Showing ${e+1} to ${i} of ${n} records`}function yf(e){let t=mf();if(!t.pagination)return;let n=``;n+=`
        <button
            type="button"
            class="sf-pagination-btn"
            data-page="${af-1}"
            ${af===1?`disabled`:``}
            aria-label="Previous page"
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="m15 18-6-6 6-6"></path>
            </svg>
        </button>
    `;for(let t=1;t<=e;t++)n+=`
            <button
                type="button"
                class="sf-pagination-btn ${t===af?`active`:``}"
                data-page="${t}"
            >
                ${t}
            </button>
        `;n+=`
        <button
            type="button"
            class="sf-pagination-btn"
            data-page="${af+1}"
            ${af===e?`disabled`:``}
            aria-label="Next page"
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="m9 18 6-6-6-6"></path>
            </svg>
        </button>
    `,t.pagination.innerHTML=n}function bf(){return lf.map(e=>`
            <option value="${df(e.name)}">
                ${df(e.name)}
            </option>
        `).join(``)}function xf(){return uf.map(e=>`
            <option value="${df(e)}">
                ${df(e)}
            </option>
        `).join(``)}function Sf(e=null){of=e?.id||null;let t=document.querySelector(`#stockOutModal`);if(!t)return;let n=t.querySelector(`#stockOutModalTitle`),r=t.querySelector(`#stockOutSubmit`),i=t.querySelector(`#stockOutFormDate`),a=t.querySelector(`#stockOutFormProduct`),o=t.querySelector(`#stockOutFormQuantity`),s=t.querySelector(`#stockOutFormReason`),c=t.querySelector(`#stockOutFormDestination`),l=t.querySelector(`#stockOutFormReference`),u=t.querySelector(`#stockOutFormNotes`);e?(n.textContent=`Edit Stock Out`,r.textContent=`Save Changes`,i.value=e.date,a.value=e.product,o.value=e.qty,s.value=e.reason,c.value=e.destination,l.value=e.reference,u.value=e.notes||``):(n.textContent=`Add Stock Out`,r.textContent=`Save Stock Out`,i.value=new Date().toISOString().slice(0,10),a.value=``,o.value=``,s.value=``,c.value=``,l.value=``,u.value=``),Y.default.getOrCreateInstance(t).show()}function Cf(e){let t=document.querySelector(`#stockOutViewModal`);t&&(t.querySelector(`#viewStockOutDate`).textContent=ff(e.date),t.querySelector(`#viewStockOutProduct`).textContent=e.product,t.querySelector(`#viewStockOutSku`).textContent=e.sku,t.querySelector(`#viewStockOutQuantity`).textContent=e.qty.toLocaleString(),t.querySelector(`#viewStockOutReason`).textContent=e.reason,t.querySelector(`#viewStockOutDestination`).textContent=e.destination,t.querySelector(`#viewStockOutReference`).textContent=e.reference,t.querySelector(`#viewStockOutNotes`).textContent=e.notes||`—`,Y.default.getOrCreateInstance(t).show())}function wf(e){e.preventDefault();let t=e.currentTarget,n=new FormData(t),r=n.get(`date`),i=n.get(`product`),a=Number(n.get(`quantity`)),o=n.get(`reason`),s=n.get(`destination`),c=n.get(`reference`),l=n.get(`notes`),u=lf.find(e=>e.name===i),d={id:of||Date.now(),date:r,product:i,sku:u?.sku||`—`,qty:a,reason:o,destination:s,reference:c,notes:l};of?cf=cf.map(e=>e.id===of?d:e):cf.unshift(d),af=1,gf();let f=document.querySelector(`#stockOutModal`);Y.default.getInstance(f)?.hide(),t.reset(),of=null}function Tf(){[`#stockOutModal`,`#stockOutViewModal`].forEach(e=>{let t=document.querySelector(e);t&&(t.addEventListener(`show.bs.modal`,e=>{t._stockOutTrigger=e.relatedTarget||document.activeElement}),t.addEventListener(`hide.bs.modal`,()=>{let e=document.activeElement;e&&t.contains(e)&&e.blur()}),t.addEventListener(`hidden.bs.modal`,()=>{let e=t._stockOutTrigger;t._stockOutTrigger=null,e&&document.contains(e)&&e.focus()}))})}function Ef(){let e=mf();e.search?.addEventListener(`input`,()=>{af=1,gf()}),e.reason?.addEventListener(`change`,()=>{af=1,gf()}),e.date?.addEventListener(`change`,()=>{af=1,gf()}),e.reset?.addEventListener(`click`,()=>{e.search&&(e.search.value=``),e.reason&&(e.reason.value=``),e.date&&(e.date.value=``),af=1,gf()}),e.add?.addEventListener(`click`,()=>{Sf()}),e.form?.addEventListener(`submit`,wf),e.tableBody?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-stock-out-edit]`),n=e.target.closest(`[data-stock-out-view]`);if(t){let e=Number(t.dataset.stockOutEdit),n=cf.find(t=>t.id===e);n&&Sf(n)}if(n){let e=Number(n.dataset.stockOutView),t=cf.find(t=>t.id===e);t&&Cf(t)}}),e.pagination?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-page]`);if(!t)return;let n=Number(t.dataset.page);n<1||n>Math.ceil(hf().length/sf)||(af=n,gf())})}function Df(){return`
        <div class="container-fluid">

            <div
                class="d-flex flex-column flex-md-row
                       align-items-md-center
                       justify-content-between
                       gap-3 mb-4"
            >
                <div>
                    <h1 class="h3 mb-1">
                        Stock Out
                    </h1>

                    <p class="text-muted mb-0">
                        Record outgoing inventory transactions.
                    </p>
                </div>

                <button
                    type="button"
                    class="sf-add-btn"
                    id="addStockOutButton"
                >
                    <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M12 5v14"></path>
                        <path d="M5 12h14"></path>
                    </svg>

                    <span>Add Stock Out</span>
                </button>
            </div>

            <!-- FILTER BOX -->
            <section
                class="sf-stock-out-filter sf-card mb-2"
            >
                <div class="row g-3">

                    <div class="col-12 col-lg-5">
                        <label
                            for="stockOutSearch"
                            class="sf-form-label"
                        >
                            Search
                        </label>

                        <div class="sf-stock-out-search">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.6"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                aria-hidden="true"
                            >
                                <circle
                                    cx="11"
                                    cy="11"
                                    r="7"
                                ></circle>

                                <path
                                    d="m20 20-4-4"
                                ></path>
                            </svg>

                            <input
                                type="search"
                                id="stockOutSearch"
                                class="sf-form-control"
                                placeholder="Search product, SKU, reason, destination, reference..."
                            >
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-3">
                        <label
                            for="stockOutReason"
                            class="sf-form-label"
                        >
                            Reason
                        </label>

                        <select
                            id="stockOutReason"
                            class="sf-form-control"
                        >
                            <option value="">
                                All Reasons
                            </option>

                            ${xf()}
                        </select>
                    </div>

                    <div class="col-12 col-md-6 col-lg-3">
                        <label
                            for="stockOutDate"
                            class="sf-form-label"
                        >
                            Date
                        </label>

                        <input
                            type="date"
                            id="stockOutDate"
                            class="sf-form-control"
                        >
                    </div>

                    <div class="col-12 col-lg-1 d-flex align-items-end">
                        <button
                            type="button"
                            id="resetStockOutFilters"
                            class="sf-btn sf-btn-outline w-100"
                        >
                            Reset
                        </button>
                    </div>

                </div>
            </section>

            <!-- TABLE BOX -->
            <section
                class="sf-stock-out-table sf-card"
            >
                <div class="table-responsive">
                    <table
                        class="table sf-table align-middle mb-0"
                    >
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Product</th>
                                <th>Qty</th>
                                <th>Reason</th>
                                <th>Destination</th>
                                <th>Reference</th>
                                <th class="text-end">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody id="stockOutTableBody">
                        </tbody>
                    </table>
                </div>

                <div class="sf-table-footer">

                    <span
                        id="stockOutResults"
                        class="sf-table-results"
                    >
                        Showing 1 to 8 of 12 records
                    </span>

                    <div
                        id="stockOutPagination"
                        class="sf-pagination"
                    ></div>

                </div>
            </section>

        </div>

        <!-- ADD / EDIT MODAL -->
        <div
            class="modal fade sf-stock-out-modal"
            id="stockOutModal"
            tabindex="-1"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">

                    <div class="modal-header">
                        <h5
                            class="modal-title"
                            id="stockOutModalTitle"
                        >
                            Add Stock Out
                        </h5>

                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>

                    <form id="stockOutForm">

                        <div class="modal-body">

                            <div class="row g-3">

                                <div class="col-12 col-md-6">
                                    <label
                                        for="stockOutFormDate"
                                        class="sf-form-label"
                                    >
                                        Date
                                        <span>*</span>
                                    </label>

                                    <input
                                        type="date"
                                        id="stockOutFormDate"
                                        name="date"
                                        class="sf-form-control"
                                        required
                                    >
                                </div>

                                <div class="col-12 col-md-6">
                                    <label
                                        for="stockOutFormProduct"
                                        class="sf-form-label"
                                    >
                                        Product
                                        <span>*</span>
                                    </label>

                                    <select
                                        id="stockOutFormProduct"
                                        name="product"
                                        class="sf-form-control"
                                        required
                                    >
                                        <option value="">
                                            Select product
                                        </option>

                                        ${bf()}
                                    </select>
                                </div>

                                <div class="col-12 col-md-6">
                                    <label
                                        for="stockOutFormQuantity"
                                        class="sf-form-label"
                                    >
                                        Quantity
                                        <span>*</span>
                                    </label>

                                    <input
                                        type="number"
                                        id="stockOutFormQuantity"
                                        name="quantity"
                                        class="sf-form-control"
                                        min="1"
                                        placeholder="Enter quantity"
                                        required
                                    >
                                </div>

                                <div class="col-12 col-md-6">
                                    <label
                                        for="stockOutFormReason"
                                        class="sf-form-label"
                                    >
                                        Reason
                                        <span>*</span>
                                    </label>

                                    <select
                                        id="stockOutFormReason"
                                        name="reason"
                                        class="sf-form-control"
                                        required
                                    >
                                        <option value="">
                                            Select reason
                                        </option>

                                        ${xf()}
                                    </select>
                                </div>

                                <div class="col-12">
                                    <label
                                        for="stockOutFormDestination"
                                        class="sf-form-label"
                                    >
                                        Destination / Recipient
                                        <span>*</span>
                                    </label>

                                    <input
                                        type="text"
                                        id="stockOutFormDestination"
                                        name="destination"
                                        class="sf-form-control"
                                        placeholder="e.g. Customer, IT Department"
                                        required
                                    >
                                </div>

                                <div class="col-12">
                                    <label
                                        for="stockOutFormReference"
                                        class="sf-form-label"
                                    >
                                        Reference
                                        <span>*</span>
                                    </label>

                                    <input
                                        type="text"
                                        id="stockOutFormReference"
                                        name="reference"
                                        class="sf-form-control"
                                        placeholder="e.g. OUT-00022"
                                        required
                                    >
                                </div>

                                <div class="col-12">
                                    <label
                                        for="stockOutFormNotes"
                                        class="sf-form-label"
                                    >
                                        Notes
                                    </label>

                                    <textarea
                                        id="stockOutFormNotes"
                                        name="notes"
                                        class="sf-form-control"
                                        rows="3"
                                        placeholder="Add optional notes..."
                                    ></textarea>
                                </div>

                            </div>

                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="sf-modal-btn sf-modal-btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                class="sf-modal-btn sf-modal-btn-primary"
                                id="stockOutSubmit"
                            >
                                Save Stock Out
                            </button>
                        </div>

                    </form>

                </div>
            </div>
        </div>

        <!-- VIEW MODAL -->
        <div
            class="modal fade"
            id="stockOutViewModal"
            tabindex="-1"
            aria-hidden="true"
        >
            <div
                class="modal-dialog modal-dialog-centered"
            >
                <div class="modal-content sf-stock-out-modal">

                    <div class="modal-header">
                        <h5 class="modal-title">
                            Stock Out Details
                        </h5>

                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div class="modal-body">

                        <div class="sf-stock-out-detail-grid">

                            <div>
                                <span>Date</span>
                                <strong id="viewStockOutDate">—</strong>
                            </div>

                            <div>
                                <span>Reference</span>
                                <strong id="viewStockOutReference"
                                        class="sf-stock-out-reference"
                                    >—</strong>
                            </div>

                            <div>
                                <span>Product</span>
                                <strong id="viewStockOutProduct">—</strong>
                            </div>

                            <div>
                                <span>SKU</span>
                                <strong id="viewStockOutSku">—</strong>
                            </div>

                            <div>
                                <span>Quantity</span>
                                <strong id="viewStockOutQuantity">—</strong>
                            </div>

                            <div>
                                <span>Reason</span>
                                <strong id="viewStockOutReason">—</strong>
                            </div>

                            <div>
                                <span>Destination / Recipient</span>
                                <strong id="viewStockOutDestination">—</strong>
                            </div>

                            <div class="sf-stock-out-detail-full">
                                <span>Notes</span>
                                <strong id="viewStockOutNotes">—</strong>
                            </div>

                        </div>

                    </div>

                    <div class="modal-footer">

                        <button
                            type="button"
                            class="sf-btn sf-btn-outline"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>

                    </div>

                </div>
            </div>
        </div>
    `}function Of(){rf||mf().tableBody&&(rf=!0,Ef(),Tf(),gf())}function kf(){[`#stockOutModal`,`#stockOutViewModal`].forEach(e=>{let t=document.querySelector(e);if(!t)return;let n=Y.default.getInstance(t);n?(t.contains(document.activeElement)&&document.activeElement.blur(),n.hide(),t.addEventListener(`hidden.bs.modal`,()=>{t.remove()},{once:!0})):t.remove()}),rf=!1,af=1,of=null}var Af=!1,jf=1,Mf=null,Nf=null,Pf=8,Ff=[{id:1,date:`2026-09-08`,product:`Wireless Mouse`,sku:`WM-001`,warehouse:`Main Warehouse`,adjustment:10,qtyBefore:125,qtyAfter:135,type:`Increase`,reason:`Stock Opname`,status:`Approved`,reference:`ADJ-00024`,notes:`Physical count result, found 10 pcs more than system record.`},{id:2,date:`2026-09-07`,product:`USB-C Cable`,sku:`UC-003`,warehouse:`Main Warehouse`,adjustment:-5,qtyBefore:80,qtyAfter:75,type:`Decrease`,reason:`Damaged`,status:`Approved`,reference:`ADJ-00023`,notes:`Five damaged units removed from available stock.`},{id:3,date:`2026-09-06`,product:`Mechanical Keyboard`,sku:`MK-002`,warehouse:`Secondary`,adjustment:-2,qtyBefore:42,qtyAfter:40,type:`Decrease`,reason:`Stock Discrepancy`,status:`Pending`,reference:`ADJ-00022`,notes:`System quantity differs from physical count.`},{id:4,date:`2026-09-05`,product:`Monitor 24 Inch`,sku:`MN-009`,warehouse:`Main Warehouse`,adjustment:5,qtyBefore:20,qtyAfter:25,type:`Increase`,reason:`Wrong Entry`,status:`Approved`,reference:`ADJ-00021`,notes:`Previous stock entry was recorded incorrectly.`},{id:5,date:`2026-09-04`,product:`Wireless Headset`,sku:`WH-010`,warehouse:`Secondary`,adjustment:-3,qtyBefore:15,qtyAfter:12,type:`Decrease`,reason:`Lost`,status:`Rejected`,reference:`ADJ-00020`,notes:`Adjustment rejected after stock verification.`},{id:6,date:`2026-09-03`,product:`Office Chair`,sku:`OC-005`,warehouse:`Main Warehouse`,adjustment:1,qtyBefore:10,qtyAfter:11,type:`Increase`,reason:`Stock Opname`,status:`Approved`,reference:`ADJ-00019`,notes:`Physical count adjustment.`},{id:7,date:`2026-09-02`,product:`Laptop Stand`,sku:`LS-004`,warehouse:`Main Warehouse`,adjustment:-4,qtyBefore:32,qtyAfter:28,type:`Decrease`,reason:`Damaged`,status:`Approved`,reference:`ADJ-00018`,notes:`Damaged units removed from stock.`},{id:8,date:`2026-09-01`,product:`Desk Lamp`,sku:`DL-006`,warehouse:`Secondary`,adjustment:3,qtyBefore:18,qtyAfter:21,type:`Increase`,reason:`Other`,status:`Pending`,reference:`ADJ-00017`,notes:``},{id:9,date:`2026-08-31`,product:`Notebook A5`,sku:`NB-007`,warehouse:`Main Warehouse`,adjustment:-6,qtyBefore:100,qtyAfter:94,type:`Decrease`,reason:`Stock Discrepancy`,status:`Approved`,reference:`ADJ-00016`,notes:``},{id:10,date:`2026-08-30`,product:`Ballpoint Pen`,sku:`BP-008`,warehouse:`Main Warehouse`,adjustment:12,qtyBefore:140,qtyAfter:152,type:`Increase`,reason:`Stock Opname`,status:`Approved`,reference:`ADJ-00015`,notes:``},{id:11,date:`2026-08-29`,product:`HDMI Cable`,sku:`HD-011`,warehouse:`Secondary`,adjustment:-2,qtyBefore:30,qtyAfter:28,type:`Decrease`,reason:`Lost`,status:`Approved`,reference:`ADJ-00014`,notes:``},{id:12,date:`2026-08-28`,product:`USB Hub`,sku:`UH-012`,warehouse:`Main Warehouse`,adjustment:4,qtyBefore:26,qtyAfter:30,type:`Increase`,reason:`Wrong Entry`,status:`Approved`,reference:`ADJ-00013`,notes:``}],If=[{name:`Wireless Mouse`,sku:`WM-001`},{name:`Mechanical Keyboard`,sku:`MK-002`},{name:`USB-C Cable`,sku:`UC-003`},{name:`Laptop Stand`,sku:`LS-004`},{name:`Office Chair`,sku:`OC-005`},{name:`Desk Lamp`,sku:`DL-006`},{name:`Notebook A5`,sku:`NB-007`},{name:`Ballpoint Pen`,sku:`BP-008`},{name:`Monitor 24 Inch`,sku:`MN-009`},{name:`Wireless Headset`,sku:`WH-010`},{name:`HDMI Cable`,sku:`HD-011`},{name:`USB Hub`,sku:`UH-012`}],Lf=[`Main Warehouse`,`Secondary`],Rf=[`Stock Opname`,`Damaged`,`Lost`,`Stock Discrepancy`,`Wrong Entry`,`Other`];function X(e){return String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function zf(e){let t=new Date(`${e}T00:00:00`);return new Intl.DateTimeFormat(`en-US`,{month:`short`,day:`2-digit`,year:`numeric`}).format(t)}function Bf(){return{search:document.querySelector(`#stockAdjustmentSearch`),warehouse:document.querySelector(`#stockAdjustmentWarehouse`),type:document.querySelector(`#stockAdjustmentType`),status:document.querySelector(`#stockAdjustmentStatus`),date:document.querySelector(`#stockAdjustmentDate`),add:document.querySelector(`#addStockAdjustmentButton`),tableBody:document.querySelector(`#stockAdjustmentTableBody`),pagination:document.querySelector(`#stockAdjustmentPagination`),results:document.querySelector(`#stockAdjustmentResults`),form:document.querySelector(`#stockAdjustmentForm`)}}function Vf(){let e=Bf(),t=e.search?.value.trim().toLowerCase()||``,n=e.warehouse?.value||``,r=e.type?.value||``,i=e.status?.value||``,a=e.date?.value||``;return Ff.filter(e=>{let o=[e.product,e.sku,e.warehouse,e.reason,e.reference,e.status].join(` `).toLowerCase(),s=!t||o.includes(t),c=!n||e.warehouse===n,l=!r||e.type===r,u=!i||e.status===i,d=!a||e.date===a;return s&&c&&l&&u&&d})}function Hf(){let e=Bf();if(!e.tableBody)return;let t=Vf(),n=t.length,r=Math.max(1,Math.ceil(n/Pf));jf>r&&(jf=r);let i=(jf-1)*Pf,a=t.slice(i,i+Pf);a.length?e.tableBody.innerHTML=a.map(Uf).join(``):e.tableBody.innerHTML=`
            <tr>
                <td
                    colspan="9"
                    class="text-center py-5"
                >
                    <div class="text-muted">
                        No stock adjustments found.
                    </div>
                </td>
            </tr>
        `,Wf(i,a.length,n),Gf(r)}function Uf(e){let t=e.adjustment>=0?`sf-stock-adjustment-positive`:`sf-stock-adjustment-negative`,n=e.adjustment>=0?`+${e.adjustment}`:e.adjustment,r=e.status.toLowerCase();return`
        <tr>

            <td>
                <div class="sf-stock-adjustment-date">
                    <strong>
                        ${X(zf(e.date))}
                    </strong>
                </div>
            </td>

            <td>
                <div class="sf-stock-adjustment-product">

                    <strong>
                        ${X(e.product)}
                    </strong>

                    <span>
                        SKU: ${X(e.sku)}
                    </span>

                </div>
            </td>

            <td>
                <span class="sf-stock-adjustment-warehouse">
                    ${X(e.warehouse)}
                </span>
            </td>

            <td
                class="${t}"
            >
                ${X(n)}
            </td>

            <td>
                ${X(e.qtyBefore.toLocaleString())}
            </td>

            <td>
                ${X(e.qtyAfter.toLocaleString())}
            </td>

            <td>
                <span class="sf-stock-adjustment-reason">
                    ${X(e.reason)}
                </span>
            </td>

            <td>
                <span
                    class="
                        sf-stock-adjustment-status
                        sf-status-${X(r)}
                    "
                >
                    ${X(e.status)}
                </span>
            </td>

            <td class="text-end">

                <div class="sf-stock-adjustment-actions">

                    <button
                        type="button"
                        class="
                            sf-action-btn
                            sf-action-btn-view
                        "
                        data-stock-adjustment-view="${e.id}"
                    >
                        <span>View</span>
                    </button>

                    <button
                        type="button"
                        class="sf-icon-btn"
                        title="Edit Adjustment"
                        data-stock-adjustment-edit="${e.id}"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.6"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            aria-hidden="true"
                        >
                            <path
                                d="M12 20h9"
                            ></path>

                            <path
                                d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"
                            ></path>
                        </svg>
                    </button>

                </div>

            </td>

        </tr>
    `}function Wf(e,t,n){let r=Bf();if(!r.results)return;if(!n){r.results.textContent=`Showing 0 of 0 adjustments`;return}let i=e+t;r.results.textContent=`Showing ${e+1} to ${i} of ${n} adjustments`}function Gf(e){let t=Bf();if(!t.pagination)return;let n=``;n+=`
        <button
            type="button"
            class="sf-pagination-btn"
            data-page="${jf-1}"
            ${jf===1?`disabled`:``}
            aria-label="Previous page"
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path
                    d="m15 18-6-6 6-6"
                ></path>
            </svg>
        </button>
    `;for(let t=1;t<=e;t++)n+=`
            <button
                type="button"
                class="
                    sf-pagination-btn
                    ${t===jf?`active`:``}
                "
                data-page="${t}"
            >
                ${t}
            </button>
        `;n+=`
        <button
            type="button"
            class="sf-pagination-btn"
            data-page="${jf+1}"
            ${jf===e?`disabled`:``}
            aria-label="Next page"
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path
                    d="m9 18 6-6-6-6"
                ></path>
            </svg>
        </button>
    `,t.pagination.innerHTML=n}function Kf(){return Lf.map(e=>`
            <option
                value="${X(e)}"
            >
                ${X(e)}
            </option>
        `).join(``)}function qf(){return`
        <div class="container-fluid">

            <!-- PAGE HEADER -->
            <div
                class="d-flex flex-column flex-md-row
                       align-items-md-center
                       justify-content-between
                       gap-3 mb-4"
            >
                <div>
                    <h1 class="h3 mb-1">
                        Stock Adjustments
                    </h1>

                    <p class="text-muted mb-0">
                        Review and manage inventory stock adjustments.
                    </p>
                </div>

                <button
                    type="button"
                    class="sf-add-btn"
                    id="addStockAdjustmentButton"
                >
                    <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M12 5v14"></path>
                        <path d="M5 12h14"></path>
                    </svg>

                    <span>
                        New Adjustment
                    </span>
                </button>
            </div>


            <!-- FILTER BOX -->
            <section
                class="
                    sf-stock-adjustment-filter
                    sf-card
                    mb-2
                "
            >
                <div class="row g-3">

                    <!-- SEARCH -->
                    <div class="col-12 col-lg-4">

                        <label
                            for="stockAdjustmentSearch"
                            class="sf-form-label"
                        >
                            Search
                        </label>

                        <input
                            type="search"
                            id="stockAdjustmentSearch"
                            class="sf-form-control"
                            placeholder="Search product, SKU, reason, reference..."
                        >

                    </div>


                    <!-- WAREHOUSE -->
                    <div class="col-12 col-md-6 col-lg-2">

                        <label
                            for="stockAdjustmentWarehouse"
                            class="sf-form-label"
                        >
                            Warehouse
                        </label>

                        <select
                            id="stockAdjustmentWarehouse"
                            class="sf-form-control"
                        >
                            <option value="">
                                All Warehouses
                            </option>

                            ${Kf()}
                        </select>

                    </div>


                    <!-- ADJUSTMENT TYPE -->
                    <div class="col-12 col-md-6 col-lg-2">

                        <label
                            for="stockAdjustmentType"
                            class="sf-form-label"
                        >
                            Adjustment Type
                        </label>

                        <select
                            id="stockAdjustmentType"
                            class="sf-form-control"
                        >
                            <option value="">
                                All Types
                            </option>

                            <option value="Increase">
                                Increase
                            </option>

                            <option value="Decrease">
                                Decrease
                            </option>
                        </select>

                    </div>


                    <!-- STATUS -->
                    <div class="col-12 col-md-6 col-lg-2">

                        <label
                            for="stockAdjustmentStatus"
                            class="sf-form-label"
                        >
                            Status
                        </label>

                        <select
                            id="stockAdjustmentStatus"
                            class="sf-form-control"
                        >
                            <option value="">
                                All Status
                            </option>

                            <option value="Approved">
                                Approved
                            </option>

                            <option value="Pending">
                                Pending
                            </option>

                            <option value="Rejected">
                                Rejected
                            </option>
                        </select>

                    </div>


                    <!-- DATE -->
                    <div class="col-12 col-md-6 col-lg-2">

                        <label
                            for="stockAdjustmentDate"
                            class="sf-form-label"
                        >
                            Date
                        </label>

                        <input
                            type="date"
                            id="stockAdjustmentDate"
                            class="sf-form-control"
                        >

                    </div>

                </div>
            </section>


            <!-- TABLE BOX -->
            <section
                class="
                    sf-stock-adjustment-table
                    sf-card
                "
            >

                <div class="table-responsive">

                    <table
                        class="
                            table
                            sf-table
                            align-middle
                            mb-0
                        "
                    >

                        <thead>

                            <tr>

                                <th>
                                    Date
                                </th>

                                <th>
                                    Product
                                </th>

                                <th>
                                    <span class="sf-stock-adjustment-warehouse-header">
                                        Warehouse
                                    </span>
                                </th>

                                <th>
                                    Adjustment
                                </th>

                                <th>
                                    Qty Before
                                </th>

                                <th>
                                    Qty After
                                </th>

                                <th>
                                    Reason
                                </th>

                                <th>
                                    Status
                                </th>

                                <th class="text-end">
                                    Action
                                </th>

                            </tr>

                        </thead>


                        <tbody
                            id="stockAdjustmentTableBody"
                        >
                        </tbody>

                    </table>

                </div>


                <!-- TABLE FOOTER -->
                <div class="sf-table-footer">

                    <span
                        id="stockAdjustmentResults"
                        class="sf-table-results"
                    >
                        Showing 1 to 8 of 12 adjustments
                    </span>


                    <div
                        id="stockAdjustmentPagination"
                        class="sf-pagination"
                    ></div>

                </div>

            </section>

        </div>
    `}function Jf(){let e=Bf();e.search&&e.search.addEventListener(`input`,()=>{jf=1,Hf()}),e.warehouse&&e.warehouse.addEventListener(`change`,()=>{jf=1,Hf()}),e.type&&e.type.addEventListener(`change`,()=>{jf=1,Hf()}),e.status&&e.status.addEventListener(`change`,()=>{jf=1,Hf()}),e.date&&e.date.addEventListener(`change`,()=>{jf=1,Hf()}),e.pagination&&e.pagination.addEventListener(`click`,e=>{let t=e.target.closest(`[data-page]`);if(!t)return;let n=Number(t.dataset.page);!Number.isInteger(n)||n<1||(jf=n,Hf())}),e.add&&e.add.addEventListener(`click`,()=>{ep()}),e.tableBody&&e.tableBody.addEventListener(`click`,e=>{let t=e.target.closest(`[data-stock-adjustment-view]`);if(t){let e=t.dataset.stockAdjustmentView;cp(e);return}let n=e.target.closest(`[data-stock-adjustment-edit]`);if(n){let e=n.dataset.stockAdjustmentEdit;ep(e)}});let t=document.querySelector(`#stockAdjustmentForm`);t&&t.addEventListener(`submit`,lp),[document.querySelector(`#stockAdjustmentProduct`),document.querySelector(`#stockAdjustmentModalWarehouse`),document.querySelector(`#stockAdjustmentModalType`),document.querySelector(`#stockAdjustmentQuantity`)].forEach(e=>{e&&(e.addEventListener(`input`,op),e.addEventListener(`change`,op))})}function Yf(){Af||(Af=!0,sp(),Jf(),Hf())}function Xf(){Af=!1,jf=1,Mf=null}function Zf(e){return Ff.find(t=>String(t.id)===String(e))}function Qf(e,t){let n=Number(t)||0;return e===`Increase`?n:-n}function $f(e){return`
        <span class="sf-stock-adjustment-status sf-status-${String(e).toLowerCase().replace(/\s+/g,`-`)}">
            ${X(e)}
        </span>
    `}function ep(e=null){let t=document.querySelector(`#stockAdjustmentModal`);if(!t)return;let n=Y.default.getOrCreateInstance(t);Nf=document.activeElement;let r=t.querySelector(`#stockAdjustmentForm`),i=t.querySelector(`#stockAdjustmentModalTitle`),a=t.querySelector(`#stockAdjustmentSubmitButton`),o=t.querySelector(`#stockAdjustmentProduct`),s=t.querySelector(`#stockAdjustmentModalWarehouse`),c=t.querySelector(`#stockAdjustmentModalType`),l=t.querySelector(`#stockAdjustmentQuantity`),u=t.querySelector(`#stockAdjustmentModalDate`),d=t.querySelector(`#stockAdjustmentReason`),f=t.querySelector(`#stockAdjustmentNotes`),p=t.querySelector(`#stockAdjustmentId`);if(r){if(r.reset(),Mf=e,p&&(p.value=e||``),i&&(i.textContent=e?`Edit Adjustment`:`New Adjustment`),a&&(a.textContent=e?`Save Changes`:`Save Adjustment`),np(),rp(),ip(),e){let t=Zf(e);if(!t)return;o&&(o.value=t.product),s&&(s.value=t.warehouse),c&&(c.value=t.type),l&&(l.value=Math.abs(t.adjustment)),u&&(u.value=t.date),d&&(d.value=t.reason),f&&(f.value=t.notes||``),op()}else u&&(u.value=new Date().toISOString().split(`T`)[0]),op();n.show()}}function tp(){let e=document.querySelector(`#stockAdjustmentModal`);e&&Y.default.getOrCreateInstance(e).hide()}function np(){let e=document.querySelector(`#stockAdjustmentProduct`);e&&(e.innerHTML=`
        <option value="">Select product</option>
        ${If.map(e=>`
                    <option value="${X(e.name)}">
                        ${X(e.name)}
                    </option>
                `).join(``)}
    `)}function rp(){let e=document.querySelector(`#stockAdjustmentModalWarehouse`);e&&(e.innerHTML=`
        <option value="">Select warehouse</option>
        ${Lf.map(e=>`
                    <option value="${X(e)}">
                        ${X(e)}
                    </option>
                `).join(``)}
    `)}function ip(){let e=document.querySelector(`#stockAdjustmentReason`);e&&(e.innerHTML=`
        <option value="">Select reason</option>
        ${Rf.map(e=>`
                    <option value="${X(e)}">
                        ${X(e)}
                    </option>
                `).join(``)}
    `)}function ap(e,t){let n=Ff.find(n=>n.product===e&&n.warehouse===t);return n?n.qtyAfter:If.find(t=>t.name===e)?.stock??0}function op(){let e=document.querySelector(`#stockAdjustmentProduct`),t=document.querySelector(`#stockAdjustmentModalWarehouse`),n=document.querySelector(`#stockAdjustmentModalType`),r=document.querySelector(`#stockAdjustmentQuantity`),i=document.querySelector(`#stockAdjustmentCurrentStock`),a=document.querySelector(`#stockAdjustmentPreviewAdjustment`),o=document.querySelector(`#stockAdjustmentNewStock`);if(!e||!t||!n||!r)return;let s=e.value,c=t.value,l=n.value,u=Number(r.value)||0;if(!s||!c){i&&(i.textContent=`—`),a&&(a.textContent=`—`),o&&(o.textContent=`—`);return}let d=ap(s,c),f=Qf(l,u),p=d+f;i&&(i.textContent=d),a&&(a.textContent=f>0?`+${f}`:f),o&&(o.textContent=p)}function sp(){if(document.querySelector(`#stockAdjustmentModal`))return;document.body.insertAdjacentHTML(`beforeend`,`
        <div
            class="modal fade"
            id="stockAdjustmentModal"
            tabindex="-1"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content sf-modal-content">

                    <div class="modal-header sf-modal-header">
                        <div>
                            <h5
                                class="modal-title"
                                id="stockAdjustmentModalTitle"
                            >
                                New Adjustment
                            </h5>

                            <p class="sf-modal-subtitle">
                                Record an inventory stock adjustment.
                            </p>
                        </div>

                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>

                    <form id="stockAdjustmentForm">
                        <div class="modal-body sf-modal-body">

                            <input
                                type="hidden"
                                id="stockAdjustmentId"
                            >

                            <div class="row g-3">

                                <div class="col-md-6">
                                    <label
                                        for="stockAdjustmentProduct"
                                        class="sf-form-label"
                                    >
                                        Product
                                    </label>

                                    <select
                                        id="stockAdjustmentProduct"
                                        class="sf-form-control"
                                        required
                                    ></select>
                                </div>

                                <div class="col-md-6">
                                    <label
                                        for="stockAdjustmentModalWarehouse"
                                        class="sf-form-label"
                                    >
                                        Warehouse
                                    </label>

                                    <select
                                        id="stockAdjustmentModalWarehouse"
                                        class="sf-form-control"
                                        required
                                    ></select>
                                </div>

                                <div class="col-md-6">
                                    <label
                                        for="stockAdjustmentModalType"
                                        class="sf-form-label"
                                    >
                                        Adjustment Type
                                    </label>

                                    <select
                                        id="stockAdjustmentModalType"
                                        class="sf-form-control"
                                        required
                                    >
                                        <option value="">
                                            Select type
                                        </option>
                                        <option value="Increase">
                                            Increase
                                        </option>
                                        <option value="Decrease">
                                            Decrease
                                        </option>
                                    </select>
                                </div>

                                <div class="col-md-6">
                                    <label
                                        for="stockAdjustmentQuantity"
                                        class="sf-form-label"
                                    >
                                        Quantity
                                    </label>

                                    <input
                                        type="number"
                                        id="stockAdjustmentQuantity"
                                        class="sf-form-control"
                                        min="1"
                                        step="1"
                                        placeholder="Enter quantity"
                                        required
                                    >
                                </div>

                                <div class="col-md-6">
                                    <label
                                        for="stockAdjustmentModalDate"
                                        class="sf-form-label"
                                    >
                                        Date
                                    </label>

                                    <input
                                        type="date"
                                        id="stockAdjustmentModalDate"
                                        class="sf-form-control"
                                        required
                                    >
                                </div>

                                <div class="col-md-6">
                                    <label
                                        for="stockAdjustmentReason"
                                        class="sf-form-label"
                                    >
                                        Reason
                                    </label>

                                    <select
                                        id="stockAdjustmentReason"
                                        class="sf-form-control"
                                        required
                                    ></select>
                                </div>

                                <div class="col-12">
                                    <label
                                        for="stockAdjustmentNotes"
                                        class="sf-form-label"
                                    >
                                        Notes
                                    </label>

                                    <textarea
                                        id="stockAdjustmentNotes"
                                        class="sf-form-control"
                                        rows="3"
                                        placeholder="Add additional notes..."
                                    ></textarea>
                                </div>

                                <div class="col-12">
                                    <div class="sf-stock-adjustment-preview">

                                        <div class="sf-stock-adjustment-preview-title">
                                            Stock Preview
                                        </div>

                                        <div class="sf-stock-adjustment-preview-grid">

                                            <div>
                                                <span>
                                                    Current Stock
                                                </span>

                                                <strong
                                                    id="stockAdjustmentCurrentStock"
                                                >
                                                    —
                                                </strong>
                                            </div>

                                            <div>
                                                <span>
                                                    Adjustment
                                                </span>

                                                <strong
                                                    id="stockAdjustmentPreviewAdjustment"
                                                >
                                                    —
                                                </strong>
                                            </div>

                                            <div>
                                                <span>
                                                    New Stock
                                                </span>

                                                <strong
                                                    id="stockAdjustmentNewStock"
                                                >
                                                    —
                                                </strong>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="modal-footer sf-modal-footer">

                            <button
                                type="button"
                                class="sf-btn sf-btn-outline"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                class="sf-btn sf-btn-primary"
                                id="stockAdjustmentSubmitButton"
                            >
                                Save Adjustment
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    `);let e=document.querySelector(`#stockAdjustmentModal`);e&&(e.addEventListener(`hide.bs.modal`,()=>{e.contains(document.activeElement)&&document.activeElement.blur()}),e.addEventListener(`hidden.bs.modal`,()=>{Nf&&document.contains(Nf)&&Nf.focus(),Nf=null}))}function cp(e){let t=Zf(e);if(!t)return;let n=document.querySelector(`#stockAdjustmentViewModal`);n&&n.remove();let r=`
        <div
            class="modal fade"
            id="stockAdjustmentViewModal"
            tabindex="-1"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content sf-modal-content">

                    <div class="modal-header sf-modal-header">
                        <div>
                            <h5 class="modal-title">
                                Adjustment Details
                            </h5>

                            <p class="sf-modal-subtitle">
                                ${X(t.reference)}
                            </p>
                        </div>

                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div class="modal-body sf-modal-body">

                        <div class="sf-stock-adjustment-detail-list">

                            <div class="sf-stock-adjustment-detail-item">
                                <span>Date</span>
                                <strong>
                                    ${zf(t.date)}
                                </strong>
                            </div>

                            <div class="sf-stock-adjustment-detail-item">
                                <span>Product</span>
                                <strong>
                                    ${X(t.product)}
                                </strong>
                            </div>

                            <div class="sf-stock-adjustment-detail-item">
                                <span>Warehouse</span>
                                <strong>
                                    ${X(t.warehouse)}
                                </strong>
                            </div>

                            <div class="sf-stock-adjustment-detail-item">
                                <span>Adjustment</span>
                                <strong
                                    class="${t.adjustment>=0?`sf-stock-adjustment-positive`:`sf-stock-adjustment-negative`}"
                                >
                                    ${t.adjustment>0?`+${t.adjustment}`:t.adjustment}
                                </strong>
                            </div>

                            <div class="sf-stock-adjustment-detail-item">
                                <span>Quantity Before</span>
                                <strong>
                                    ${t.qtyBefore}
                                </strong>
                            </div>

                            <div class="sf-stock-adjustment-detail-item">
                                <span>Quantity After</span>
                                <strong>
                                    ${t.qtyAfter}
                                </strong>
                            </div>

                            <div class="sf-stock-adjustment-detail-item">
                                <span>Reason</span>
                                <strong>
                                    ${X(t.reason)}
                                </strong>
                            </div>

                            <div class="sf-stock-adjustment-detail-item">
                                <span>Status</span>
                                <strong>
                                    ${$f(t.status)}
                                </strong>
                            </div>

                            <div class="sf-stock-adjustment-detail-item">
                                <span>Notes</span>
                                <strong>
                                    ${X(t.notes||`—`)}
                                </strong>
                            </div>

                        </div>
                    </div>

                    <div class="modal-footer sf-modal-footer">

                        <button
                            type="button"
                            class="sf-btn sf-btn-outline"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>

                    </div>
                </div>
            </div>
        </div>
    `;document.body.insertAdjacentHTML(`beforeend`,r);let i=document.querySelector(`#stockAdjustmentViewModal`),a=Y.default.getOrCreateInstance(i),o=document.activeElement;i.addEventListener(`hide.bs.modal`,()=>{i.contains(document.activeElement)&&document.activeElement.blur()},{once:!0}),i.addEventListener(`hidden.bs.modal`,()=>{o&&document.contains(o)&&o.focus(),i.remove()},{once:!0}),a.show()}function lp(e){e.preventDefault();let t=document.querySelector(`#stockAdjustmentProduct`)?.value,n=If.find(e=>e.name===t),r=document.querySelector(`#stockAdjustmentModalWarehouse`)?.value,i=document.querySelector(`#stockAdjustmentModalType`)?.value,a=Number(document.querySelector(`#stockAdjustmentQuantity`)?.value),o=document.querySelector(`#stockAdjustmentModalDate`)?.value,s=document.querySelector(`#stockAdjustmentReason`)?.value,c=document.querySelector(`#stockAdjustmentNotes`)?.value.trim();if(!t||!r||!i||!a||a<1||!o||!s)return;let l=Qf(i,a),u=Mf?Zf(Mf):null,d=u?u.qtyBefore:ap(t,r),f=d+l;if(Mf&&u)u.product=t,u.sku=n?.sku??``,u.warehouse=r,u.type=i,u.adjustment=l,u.qtyBefore=d,u.qtyAfter=f,u.reason=s,u.date=o,u.notes=c;else{let e=Ff.length+25;Ff.unshift({id:`ADJ-${String(e).padStart(5,`0`)}`,date:o,product:t,sku:n?.sku??``,warehouse:r,type:i,adjustment:l,qtyBefore:d,qtyAfter:f,reason:s,status:`Pending`,notes:c})}jf=1,tp(),Hf(),Mf=null}var up=`stockflow.transfers`,dp=[{name:`Wireless Mouse`,sku:`WM-001`,stock:125},{name:`Mechanical Keyboard`,sku:`MK-002`,stock:48},{name:`USB-C Cable`,sku:`UC-003`,stock:210},{name:`Laptop Stand`,sku:`LS-004`,stock:8},{name:`Office Chair`,sku:`OC-005`,stock:32},{name:`Desk Lamp`,sku:`DL-006`,stock:0},{name:`Notebook A5`,sku:`NB-007`,stock:86},{name:`Ballpoint Pen`,sku:`BP-008`,stock:15}],fp=[`Main Warehouse`,`Store A`,`Store B`,`Store C`],pp=[`Pending`,`In Transit`,`Completed`,`Cancelled`],mp=[{id:1,number:`TRF-0001`,date:`2026-09-08`,from:`Main Warehouse`,to:`Store A`,status:`Completed`,createdBy:`Admin`,notes:`Store replenishment.`,items:[{product:`Laptop Stand`,sku:`LS-004`,quantity:20},{product:`USB-C Cable`,sku:`UC-003`,quantity:15},{product:`Wireless Mouse`,sku:`WM-001`,quantity:8}]},{id:2,number:`TRF-0002`,date:`2026-09-07`,from:`Main Warehouse`,to:`Store B`,status:`In Transit`,createdBy:`Admin`,notes:`Weekly stock replenishment.`,items:[{product:`Mechanical Keyboard`,sku:`MK-002`,quantity:12},{product:`Notebook A5`,sku:`NB-007`,quantity:20}]},{id:3,number:`TRF-0003`,date:`2026-09-06`,from:`Store A`,to:`Store C`,status:`Pending`,createdBy:`User`,notes:`Branch stock balancing.`,items:[{product:`Wireless Mouse`,sku:`WM-001`,quantity:10},{product:`Ballpoint Pen`,sku:`BP-008`,quantity:12}]},{id:4,number:`TRF-0004`,date:`2026-09-05`,from:`Main Warehouse`,to:`Store A`,status:`Cancelled`,createdBy:`Admin`,notes:`Transfer cancelled by warehouse manager.`,items:[{product:`Office Chair`,sku:`OC-005`,quantity:4}]},{id:5,number:`TRF-0005`,date:`2026-09-04`,from:`Store B`,to:`Store C`,status:`Completed`,createdBy:`User`,notes:`Inter-store stock transfer.`,items:[{product:`USB-C Cable`,sku:`UC-003`,quantity:30}]}],hp=bp(),gp=1,_p=null,vp=!1,yp=8;function bp(){try{let e=localStorage.getItem(up);if(e){let t=JSON.parse(e);if(Array.isArray(t))return t}}catch(e){console.warn(`Unable to load StockFlow transfers.`,e)}let e=structuredClone(mp);return localStorage.setItem(up,JSON.stringify(e)),e}function xp(){localStorage.setItem(up,JSON.stringify(hp))}function Z(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}function Sp(e){return e?new Intl.DateTimeFormat(`en-US`,{month:`short`,day:`2-digit`,year:`numeric`}).format(new Date(`${e}T00:00:00`)):`—`}function Cp(e){return String(e).toLowerCase().replace(/\s+/g,`-`)}function wp(e){return hp.find(t=>t.id===Number(e))}function Tp(e){return e.items.reduce((e,t)=>e+Number(t.quantity||0),0)}function Ep(){return{tableBody:document.querySelector(`#transferTableBody`),search:document.querySelector(`#transferSearch`),status:document.querySelector(`#transferStatusFilter`),from:document.querySelector(`#transferFromFilter`),to:document.querySelector(`#transferToFilter`),reset:document.querySelector(`#transferReset`),add:document.querySelector(`#addTransferButton`),results:document.querySelector(`#transferResults`),pagination:document.querySelector(`#transferPagination`)}}function Dp(){let e=Ep(),t=e.search?.value.trim().toLowerCase()||``,n=e.status?.value||``,r=e.from?.value||``,i=e.to?.value||``;return hp.filter(e=>{let a=[e.number,e.from,e.to,e.createdBy,e.status].join(` `).toLowerCase(),o=!t||a.includes(t),s=!n||e.status===n,c=!r||e.from===r,l=!i||e.to===i;return o&&s&&c&&l})}function Op(e){return`
        <span
            class="sf-transfer-status sf-status-${Cp(e)}"
        >
            ${Z(e)}
        </span>
    `}function kp(e){return`
        <tr>
            <td>
                <strong>
                    ${Z(e.number)}
                </strong>
            </td>

            <td>
                ${Z(Sp(e.date))}
            </td>

            <td>
                <span class="sf-transfer-location">
                    ${Z(e.from)}
                </span>
            </td>

            <td>
                <span class="sf-transfer-arrow">
                    →
                </span>

                <span class="sf-transfer-location">
                    ${Z(e.to)}
                </span>
            </td>

            <td>
                ${Tp(e).toLocaleString()}
            </td>

            <td>
                ${Op(e.status)}
            </td>

            <td>
                ${Z(e.createdBy)}
            </td>

            <td>
                <div class="sf-actions">

                    <button
                        type="button"
                        class="sf-action sf-action-view"
                        data-transfer-view="${e.id}"
                    >
                        View
                    </button>

                    <button
                        type="button"
                        class="sf-action"
                        title="Edit Transfer"
                        data-transfer-edit="${e.id}"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.6"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M12 20h9"></path>
                            <path
                                d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"
                            ></path>
                        </svg>
                    </button>

                    <button
                        type="button"
                        class="sf-action sf-action-danger"
                        title="Delete Transfer"
                        data-transfer-delete="${e.id}"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.6"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M4 7h16"></path>
                            <path d="M10 11v6"></path>
                            <path d="M14 11v6"></path>
                            <path d="M6 7l1 13h10l1-13"></path>
                            <path d="M9 7V4h6v3"></path>
                        </svg>
                    </button>

                </div>
            </td>
        </tr>
    `}function Ap(){let e=Ep();if(!e.tableBody)return;let t=Dp(),n=t.length,r=Math.max(1,Math.ceil(n/yp));gp>r&&(gp=r);let i=(gp-1)*yp,a=t.slice(i,i+yp);a.length?e.tableBody.innerHTML=a.map(kp).join(``):e.tableBody.innerHTML=`
            <tr>
                <td
                    colspan="8"
                    class="text-center py-5"
                >
                    <div class="text-muted">
                        No transfers found.
                    </div>
                </td>
            </tr>
        `,jp(i,a.length,n),Mp(r)}function jp(e,t,n){let r=Ep();if(!r.results)return;if(!n){r.results.textContent=`Showing 0 to 0 of 0 transfers`;return}let i=e+t;r.results.textContent=`Showing ${e+1} to ${i} of ${n} transfers`}function Mp(e){let t=Ep();if(!t.pagination)return;let n=``;n+=`
        <button
            type="button"
            class="sf-pagination-btn"
            data-page="${gp-1}"
            ${gp===1?`disabled`:``}
            aria-label="Previous page"
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="m15 18-6-6 6-6"></path>
            </svg>
        </button>
    `;for(let t=1;t<=e;t++)n+=`
            <button
                type="button"
                class="
                    sf-pagination-btn
                    ${t===gp?`active`:``}
                "
                data-page="${t}"
            >
                ${t}
            </button>
        `;n+=`
        <button
            type="button"
            class="sf-pagination-btn"
            data-page="${gp+1}"
            ${gp===e?`disabled`:``}
            aria-label="Next page"
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="m9 18 6-6-6-6"></path>
            </svg>
        </button>
    `,t.pagination.innerHTML=n}function Np(e=``){return`
        <option value="">
            Select product
        </option>

        ${dp.map(t=>`
                <option
                    value="${Z(t.name)}"
                    ${t.name===e?`selected`:``}
                >
                    ${Z(t.name)}
                </option>
            `).join(``)}
    `}function Pp(e=``){return`
        <option value="">
            Select warehouse
        </option>

        ${fp.map(t=>`
                <option
                    value="${Z(t)}"
                    ${t===e?`selected`:``}
                >
                    ${Z(t)}
                </option>
            `).join(``)}
    `}function Fp(e={}){let t=dp.find(t=>t.name===e.product)?.stock??0;return`
        <tr data-transfer-item>
            <td>
                <select
                    class="sf-form-control transfer-product"
                    required
                >
                    ${Np(e.product||``)}
                </select>
            </td>

            <td>
                <span
                    class="transfer-available"
                >
                    ${t.toLocaleString()}
                </span>
            </td>

            <td>
                <input
                    type="number"
                    class="sf-form-control transfer-quantity"
                    min="1"
                    value="${e.quantity||``}"
                    required
                >
            </td>

            <td>
                <button
                    type="button"
                    class="sf-action sf-action-danger transfer-remove-item"
                    title="Remove product"
                >
                    <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M4 7h16"></path>
                        <path d="M10 11v6"></path>
                        <path d="M14 11v6"></path>
                        <path d="M6 7l1 13h10l1-13"></path>
                        <path d="M9 7V4h6v3"></path>
                    </svg>
                </button>
            </td>
        </tr>
    `}function Ip(){if(document.querySelector(`#transferModal`))return;let e=`
        <div
            class="modal fade"
            id="transferModal"
            tabindex="-1"
            aria-hidden="true"
        >
            <div
                class="modal-dialog sf-transfer-modal-dialog modal-dialog-centered"
            >
                <div class="modal-content">

                    <div class="modal-header">
                        <h5
                            class="modal-title"
                            id="transferModalTitle"
                        >
                            Add Transfer
                        </h5>

                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>

                    <form id="transferForm">

                        <div class="modal-body">

                            <input
                                type="hidden"
                                id="transferId"
                            >

                            <div class="row g-2">

                                <div class="col-12 col-md-6">
                                    <label
                                        class="sf-form-label"
                                        for="transferNumber"
                                    >
                                        Transfer Number
                                    </label>

                                    <input
                                        type="text"
                                        id="transferNumber"
                                        class="sf-form-control"
                                        readonly
                                    >
                                </div>

                                <div class="col-12 col-md-6">
                                    <label
                                        class="sf-form-label"
                                        for="transferDate"
                                    >
                                        Transfer Date
                                    </label>

                                    <input
                                        type="date"
                                        id="transferDate"
                                        class="sf-form-control"
                                        required
                                    >
                                </div>

                                <div class="col-12 col-md-6">
                                    <label
                                        class="sf-form-label"
                                        for="transferFrom"
                                    >
                                        From Warehouse
                                    </label>

                                    <select
                                        id="transferFrom"
                                        class="sf-form-control"
                                        required
                                    >
                                        ${Pp()}
                                    </select>
                                </div>

                                <div class="col-12 col-md-6">
                                    <label
                                        class="sf-form-label"
                                        for="transferTo"
                                    >
                                        To Warehouse
                                    </label>

                                    <select
                                        id="transferTo"
                                        class="sf-form-control"
                                        required
                                    >
                                        ${Pp()}
                                    </select>
                                </div>

                            </div>

                            <div class="mt-2">

                                <div
                                    class="d-flex align-items-center justify-content-between mb-2"
                                >
                                    <label
                                        class="sf-form-label mb-0"
                                    >
                                        Products
                                    </label>

                                    <button
                                        type="button"
                                        class="sf-btn sf-btn-outline sf-btn-sm"
                                        id="addTransferProduct"
                                    >
                                        + Add Product
                                    </button>
                                </div>

                                <div
                                    class="sf-table-wrap sf-transfer-products-table"
                                >
                                    <table
                                        class="sf-table"
                                    >
                                        <thead>
                                            <tr>
                                                <th>
                                                    Product
                                                </th>
                                                <th>
                                                    Available Qty
                                                </th>
                                                <th>
                                                    Transfer Qty
                                                </th>
                                                <th>
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody
                                            id="transferItemsBody"
                                        >
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                            <div class="mt-2">

                                <label
                                    class="sf-form-label"
                                    for="transferStatus"
                                >
                                    Status
                                </label>

                                <select
                                    id="transferStatus"
                                    class="sf-form-control"
                                    required
                                >
                                    ${pp.map(e=>`
                                            <option
                                                value="${e}"
                                            >
                                                ${e}
                                            </option>
                                        `).join(``)}
                                </select>

                            </div>

                            <div class="mt-2">

                                <label
                                    class="sf-form-label"
                                    for="transferNotes"
                                >
                                    Notes
                                </label>

                                <textarea
                                    id="transferNotes"
                                    class="sf-form-control"
                                    rows="3"
                                    placeholder="Add transfer notes..."
                                ></textarea>

                            </div>

                        </div>

                        <div class="modal-footer sf-modal-footer">

                            <button
                                type="button"
                                class="sf-btn sf-btn-outline"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                class="sf-btn sf-btn-primary"
                            >
                                Save Transfer
                            </button>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    `;document.body.insertAdjacentHTML(`beforeend`,e),Vp()}function Lp(e){let t=`
        <div
            class="modal fade"
            id="transferViewModal"
            tabindex="-1"
            aria-hidden="true"
        >
            <div class="modal-dialog sf-transfer-view-modal-dialog modal-dialog-centered">

                <div class="modal-content">

                    <div class="modal-header">
                        <div>
                            <h5 class="modal-title">
                                ${Z(e.number)}
                            </h5>

                            <small class="text-muted">
                                ${Z(Sp(e.date))}
                            </small>
                        </div>

                        ${Op(e.status)}
                    </div>

                    <div class="modal-body">

                        <div
                            class="sf-transfer-route"
                        >
                            <div>
                                <span>
                                    From Warehouse
                                </span>

                                <strong>
                                    ${Z(e.from)}
                                </strong>
                            </div>

                            <div
                                class="sf-transfer-route-arrow"
                            >
                                →
                            </div>

                            <div>
                                <span>
                                    To Warehouse
                                </span>

                                <strong>
                                    ${Z(e.to)}
                                </strong>
                            </div>
                        </div>

                        <div class="mt-4">

                            <h6>
                                Products
                            </h6>

                            <div class="sf-transfer-view-products-table">

                                <table
                                    class="sf-table"
                                >
                                    <thead>
                                        <tr>
                                            <th>
                                                #
                                            </th>
                                            <th>
                                                Product
                                            </th>
                                            <th>
                                                SKU
                                            </th>
                                            <th>
                                                Quantity
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        ${e.items.map((e,t)=>`
                                                    <tr>
                                                        <td>
                                                            ${t+1}
                                                        </td>

                                                        <td>
                                                            ${Z(e.product)}
                                                        </td>

                                                        <td>
                                                            ${Z(e.sku)}
                                                        </td>

                                                        <td>
                                                            ${Number(e.quantity).toLocaleString()}
                                                        </td>
                                                    </tr>
                                                `).join(``)}
                                    </tbody>

                                    <tfoot>
                                        <tr>
                                            <th
                                                colspan="3"
                                            >
                                                Total Items
                                            </th>

                                            <th>
                                                ${Tp(e).toLocaleString()}
                                            </th>
                                        </tr>
                                    </tfoot>

                                </table>

                            </div>

                        </div>

                        <div class="mt-4">

                            <div class="sf-transfer-detail-grid">

                                <div>
                                    <span>
                                        Created By
                                    </span>

                                    <strong>
                                        ${Z(e.createdBy)}
                                    </strong>
                                </div>

                                <div>
                                    <span>
                                        Notes
                                    </span>

                                    <strong>
                                        ${Z(e.notes||`—`)}
                                    </strong>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="modal-footer sf-modal-footer">

                        <button
                            type="button"
                            class="sf-btn sf-btn-outline"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>

                    </div>

                </div>
            </div>
        </div>
    `;document.body.insertAdjacentHTML(`beforeend`,t);let n=document.querySelector(`#transferViewModal`);Y.default.getOrCreateInstance(n).show()}function Rp(){let e=hp.map(e=>Number(String(e.number).replace(`TRF-`,``))).filter(Number.isFinite),t=Math.max(...e,0)+1;return`TRF-${String(t).padStart(4,`0`)}`}function zp(){let e=document.querySelector(`#transferForm`);e&&(e.reset(),_p=null,document.querySelector(`#transferId`).value=``,document.querySelector(`#transferNumber`).value=Rp(),document.querySelector(`#transferDate`).value=new Date().toISOString().split(`T`)[0],document.querySelector(`#transferItemsBody`).innerHTML=Fp(),document.querySelector(`#transferStatus`).value=`Pending`,document.querySelector(`#transferModalTitle`).textContent=`Add Transfer`)}function Bp(e=null){let t=document.querySelector(`#transferModal`);if(!t)return;let n=Y.default.getOrCreateInstance(t),r=t.querySelector(`#transferForm`);if(r){if(r.reset(),_p=e===null?null:Number(e),_p){let e=wp(_p);if(!e)return;document.querySelector(`#transferModalTitle`).textContent=`Edit Transfer`,document.querySelector(`#transferId`).value=e.id,document.querySelector(`#transferNumber`).value=e.number,document.querySelector(`#transferDate`).value=e.date,document.querySelector(`#transferFrom`).value=e.from,document.querySelector(`#transferTo`).value=e.to,document.querySelector(`#transferStatus`).value=e.status,document.querySelector(`#transferNotes`).value=e.notes||``,document.querySelector(`#transferItemsBody`).innerHTML=e.items.map(Fp).join(``)}else zp();n.show()}}function Vp(){let e=document.querySelector(`#addTransferProduct`),t=document.querySelector(`#transferItemsBody`);e?.addEventListener(`click`,()=>{t.insertAdjacentHTML(`beforeend`,Fp())}),t?.addEventListener(`change`,e=>{let t=e.target.closest(`.transfer-product`);if(!t)return;let n=t.closest(`[data-transfer-item]`),r=dp.find(e=>e.name===t.value),i=n?.querySelector(`.transfer-available`);i&&(i.textContent=(r?.stock||0).toLocaleString())}),t?.addEventListener(`click`,e=>{let n=e.target.closest(`.transfer-remove-item`);n&&(t.querySelectorAll(`[data-transfer-item]`).length<=1||n.closest(`[data-transfer-item]`)?.remove())}),document.querySelector(`#transferForm`)?.addEventListener(`submit`,Hp)}function Hp(e){e.preventDefault();let t=document.querySelector(`#transferNumber`).value,n=document.querySelector(`#transferDate`).value,r=document.querySelector(`#transferFrom`).value,i=document.querySelector(`#transferTo`).value,a=document.querySelector(`#transferStatus`).value,o=document.querySelector(`#transferNotes`).value.trim();if(!n||!r||!i||r===i)return;let s=document.querySelectorAll(`#transferItemsBody [data-transfer-item]`),c=[];if(s.forEach(e=>{let t=e.querySelector(`.transfer-product`)?.value,n=Number(e.querySelector(`.transfer-quantity`)?.value);if(!t||!n||n<1)return;let r=dp.find(e=>e.name===t);c.push({product:t,sku:r?.sku||``,quantity:n})}),!c.length)return;if(_p){let e=wp(_p);e&&(e.date=n,e.from=r,e.to=i,e.status=a,e.notes=o,e.items=c)}else hp.unshift({id:Date.now(),number:t,date:n,from:r,to:i,status:a,createdBy:`Admin`,notes:o,items:c});xp(),gp=1,Ap();let l=document.querySelector(`#transferModal`);Y.default.getInstance(l)?.hide()}function Up(e){let t=wp(e);t&&Lp(t)}function Wp(e){let t=wp(e);if(!t)return;let n=`
        <div
            class="modal fade"
            id="deleteTransferModal"
            tabindex="-1"
            aria-hidden="true"
        >
            <div
                class="modal-dialog sf-delete-transfer-modal-dialog modal-dialog-centered"
            >
                <div class="modal-content">

                    <div class="modal-header">
                        <h5 class="modal-title">
                            Delete Transfer
                        </h5>

                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div class="modal-body">
                        <p class="mb-0">
                            Are you sure you want to delete
                            <strong>
                                ${Z(t.number)}
                            </strong>?
                        </p>
                    </div>

                    <div class="modal-footer sf-modal-footer">

                        <button
                            type="button"
                            class="sf-btn sf-btn-outline"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>

                        <button
                            type="button"
                            class="sf-btn sf-btn-danger"
                            id="confirmDeleteTransfer"
                        >
                            Delete
                        </button>

                    </div>

                </div>
            </div>
        </div>
    `;document.body.insertAdjacentHTML(`beforeend`,n);let r=document.querySelector(`#deleteTransferModal`),i=Y.default.getOrCreateInstance(r);r.querySelector(`#confirmDeleteTransfer`).addEventListener(`click`,()=>{hp=hp.filter(t=>t.id!==Number(e)),xp(),Ap(),i.hide()}),r.addEventListener(`hidden.bs.modal`,()=>{r.remove()},{once:!0}),i.show()}function Gp(){let e=Ep();e.search?.addEventListener(`input`,()=>{gp=1,Ap()}),e.status?.addEventListener(`change`,()=>{gp=1,Ap()}),e.from?.addEventListener(`change`,()=>{gp=1,Ap()}),e.to?.addEventListener(`change`,()=>{gp=1,Ap()}),e.reset?.addEventListener(`click`,()=>{e.search.value=``,e.status.value=``,e.from.value=``,e.to.value=``,gp=1,Ap()}),e.add?.addEventListener(`click`,()=>{Bp()}),e.tableBody?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-transfer-view]`),n=e.target.closest(`[data-transfer-edit]`),r=e.target.closest(`[data-transfer-delete]`);if(t){Up(t.dataset.transferView);return}if(n){Bp(n.dataset.transferEdit);return}r&&Wp(r.dataset.transferDelete)}),e.pagination?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-page]`);if(!t)return;let n=Number(t.dataset.page),r=Math.max(1,Math.ceil(Dp().length/yp));n<1||n>r||(gp=n,Ap())})}function Kp(){document.addEventListener(`hide.bs.modal`,e=>{let t=e.target;t instanceof HTMLElement&&t.classList.contains(`modal`)&&t.contains(document.activeElement)&&document.activeElement.blur()})}function qp(){return`
        <div
            class="container-fluid"
            id="transfersModule"
        >

                <div
                    class="d-flex flex-row
                        align-items-center
                        justify-content-between
                        gap-3 p-3
                        sf-transfer-page-header"
                >

                <div>
                    <h1 class="h3 mb-1">
                        Transfers
                    </h1>

                    <p class="text-muted mb-0">
                        Manage stock transfers between warehouses.
                    </p>
                </div>

                <button
                    type="button"
                    class="sf-add-btn"
                    id="addTransferButton"
                >
                    <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M12 5v14"></path>
                        <path d="M5 12h14"></path>
                    </svg>

                    <span>
                        Add Transfer
                    </span>
                </button>

            </div>

            <section
                class="sf-transfer-filter sf-card mb-2"
            >

                <div class="row g-3">

                    <div class="col-12 col-lg-4">

                        <label
                            for="transferSearch"
                            class="sf-form-label"
                        >
                            Search
                        </label>

                        <div
                            class="sf-transfer-search"
                        >

                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.6"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                aria-hidden="true"
                            >
                                <circle
                                    cx="11"
                                    cy="11"
                                    r="7"
                                ></circle>

                                <path
                                    d="m20 20-4-4"
                                ></path>
                            </svg>

                            <input
                                id="transferSearch"
                                type="search"
                                class="sf-form-control"
                                placeholder="Search transfers..."
                            >

                        </div>

                    </div>

                    <div class="col-12 col-md-4 col-lg-2">

                        <label
                            for="transferStatusFilter"
                            class="sf-form-label"
                        >
                            Status
                        </label>

                        <select
                            id="transferStatusFilter"
                            class="sf-form-control"
                        >
                            <option value="">
                                All Status
                            </option>

                            ${pp.map(e=>`
                                    <option
                                        value="${e}"
                                    >
                                        ${e}
                                    </option>
                                `).join(``)}
                        </select>

                    </div>

                    <div class="col-12 col-md-4 col-lg-2">

                        <label
                            for="transferFromFilter"
                            class="sf-form-label"
                        >
                            From Warehouse
                        </label>

                        <select
                            id="transferFromFilter"
                            class="sf-form-control"
                        >
                            <option value="">
                                All Warehouses
                            </option>

                            ${fp.map(e=>`
                                    <option
                                        value="${Z(e)}"
                                    >
                                        ${Z(e)}
                                    </option>
                                `).join(``)}
                        </select>

                    </div>

                    <div class="col-12 col-md-4 col-lg-2">

                        <label
                            for="transferToFilter"
                            class="sf-form-label"
                        >
                            To Warehouse
                        </label>

                        <select
                            id="transferToFilter"
                            class="sf-form-control"
                        >
                            <option value="">
                                All Warehouses
                            </option>

                            ${fp.map(e=>`
                                    <option
                                        value="${Z(e)}"
                                    >
                                        ${Z(e)}
                                    </option>
                                `).join(``)}
                        </select>

                    </div>

                    <div
                        class="col-12 col-lg-2 d-flex align-items-end"
                    >

                        <button
                            type="button"
                            class="sf-btn sf-btn-outline w-100"
                            id="transferReset"
                        >
                            Reset
                        </button>

                    </div>

                </div>

            </section>

            <section
                class="sf-card sf-transfer-card"
            >
                <div class="sf-transfer-table-scroll">
                    <table
                        class="sf-table"
                    >

                        <thead>
                            <tr>

                                <th>
                                    Transfer No.
                                </th>

                                <th>
                                    Date
                                </th>

                                <th>
                                    From Warehouse
                                </th>

                                <th>
                                    To Warehouse
                                </th>

                                <th>
                                    Items
                                </th>

                                <th>
                                    Status
                                </th>

                                <th>
                                    Created By
                                </th>

                                <th>
                                    Actions
                                </th>

                            </tr>
                        </thead>

                        <tbody
                            id="transferTableBody"
                        ></tbody>

                    </table>

                </div>

                <div
                    class="d-flex flex-column flex-md-row
                           align-items-md-center
                           justify-content-between
                           gap-3 p-3"
                >

                    <div
                        id="transferResults"
                        class="text-muted"
                    ></div>

                    <div
                        id="transferPagination"
                        class="sf-pagination"
                    ></div>

                </div>

            </section>

        </div>
    `}function Jp(){document.querySelector(`#transfersModule`)&&(vp||(vp=!0,Ip(),Gp(),Kp(),Ap()))}function Yp(){vp=!1,gp=1,_p=null}var Xp=!1,Zp={search:``,warehouse:``,type:``,date:``},Qp=1,$p=10,em=[{id:1,date:`2026-09-09`,time:`10:24 AM`,product:`Wireless Mouse`,sku:`WM-001`,warehouse:`Main Warehouse`,type:`Stock In`,quantity:50,reference:`IN-00033`,user:`Admin`,detail:`Received from Tech Supply Co.`},{id:2,date:`2026-09-09`,time:`09:15 AM`,product:`Mechanical Keyboard`,sku:`MK-002`,warehouse:`Main Warehouse`,type:`Stock Out`,quantity:-10,reference:`OUT-00022`,user:`Admin`,detail:`Customer order fulfillment.`},{id:3,date:`2026-09-08`,time:`04:20 PM`,product:`Monitor 24 Inch`,sku:`MN-009`,warehouse:`Main Warehouse`,type:`Transfer`,quantity:-5,reference:`TRF-00007`,user:`Operator`,detail:`Transferred to Secondary Warehouse.`},{id:4,date:`2026-09-08`,time:`04:20 PM`,product:`Monitor 24 Inch`,sku:`MN-009`,warehouse:`Secondary`,type:`Transfer`,quantity:5,reference:`TRF-00007`,user:`Operator`,detail:`Received from Main Warehouse.`},{id:5,date:`2026-09-07`,time:`11:10 AM`,product:`Office Chair`,sku:`OC-005`,warehouse:`Main Warehouse`,type:`Adjustment`,quantity:3,reference:`ADJ-00025`,user:`Supervisor`,detail:`Physical stock count adjustment.`},{id:6,date:`2026-09-06`,time:`03:45 PM`,product:`USB-C Cable`,sku:`UC-010`,warehouse:`Main Warehouse`,type:`Stock In`,quantity:25,reference:`IN-00032`,user:`Admin`,detail:`Received from Cable World.`},{id:7,date:`2026-09-06`,time:`01:20 PM`,product:`Laptop Stand`,sku:`LS-003`,warehouse:`Secondary`,type:`Stock Out`,quantity:-4,reference:`OUT-00021`,user:`Operator`,detail:`Issued for customer order.`},{id:8,date:`2026-09-05`,time:`04:05 PM`,product:`Webcam HD`,sku:`WC-007`,warehouse:`Main Warehouse`,type:`Stock In`,quantity:12,reference:`IN-00031`,user:`Admin`,detail:`Received from Vision Tech.`},{id:9,date:`2026-09-05`,time:`10:30 AM`,product:`Desk Lamp`,sku:`DL-004`,warehouse:`Main Warehouse`,type:`Adjustment`,quantity:-2,reference:`ADJ-00024`,user:`Supervisor`,detail:`Stock count correction.`},{id:10,date:`2026-09-04`,time:`02:15 PM`,product:`Wireless Headset`,sku:`WH-008`,warehouse:`Secondary`,type:`Transfer`,quantity:-6,reference:`TRF-00006`,user:`Operator`,detail:`Transferred to Main Warehouse.`},{id:11,date:`2026-09-04`,time:`02:15 PM`,product:`Wireless Headset`,sku:`WH-008`,warehouse:`Main Warehouse`,type:`Transfer`,quantity:6,reference:`TRF-00006`,user:`Operator`,detail:`Received from Secondary Warehouse.`},{id:12,date:`2026-09-03`,time:`09:40 AM`,product:`HDMI Cable`,sku:`HC-006`,warehouse:`Main Warehouse`,type:`Stock Out`,quantity:-8,reference:`OUT-00020`,user:`Admin`,detail:`Fulfilled customer order.`}];function tm(e){let[t,n,r]=e.split(`-`);return`${r} ${[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`][Number(n)-1]} ${t}`}function nm(){return`

        <div class="container-fluid">

            <div class="mb-4 stock-movement-page-header">
                <h1 class="h3 mb-1">
                    Stock Movement
                </h1>

                <p class="text-muted mb-0">
                    Track all inventory movements across your warehouses.
                </p>
            </div>

            <section class="sf-card stock-movement-filter-card mb-2">

                <div class="row g-3 align-items-end">

                    <div class="col-12 col-lg-4">
                        <label class="form-label">
                            Search
                        </label>

                        <input
                            type="text"
                            id="stockMovementSearch"
                            class="form-control"
                            placeholder="Product, SKU, reference, user..."
                        >
                    </div>

                    <div class="col-12 col-md-4 col-lg-2">
                        <label class="form-label">
                            Warehouse
                        </label>

                        <select
                            id="stockMovementWarehouse"
                            class="form-select"
                        >
                            <option value="">All Warehouses</option>
                            <option value="Main Warehouse">Main Warehouse</option>
                            <option value="Secondary">Secondary</option>
                        </select>
                    </div>

                    <div class="col-12 col-md-4 col-lg-2">
                        <label class="form-label">
                            Movement Type
                        </label>

                        <select
                            id="stockMovementType"
                            class="form-select"
                        >
                            <option value="">All Types</option>
                            <option value="Stock In">Stock In</option>
                            <option value="Stock Out">Stock Out</option>
                            <option value="Adjustment">Adjustment</option>
                            <option value="Transfer">Transfer</option>
                        </select>
                    </div>

                    <div class="col-12 col-md-4 col-lg-2">
                        <label class="form-label">
                            Date
                        </label>

                        <input
                            type="date"
                            id="stockMovementDate"
                            class="form-control"
                        >
                    </div>

                    <div class="col-12 col-lg-2 d-flex align-items-end">
                        <button
                            type="button"
                            id="stockMovementReset"
                            class="btn btn-outline-secondary w-30"
                        >
                            Reset
                        </button>
                    </div>

                </div>

            </section>


            <section class="sf-card stock-movement-table-card">

                <div class="table-responsive stock-movement-table-wrapper">

                    <table class="table sf-table align-middle mb-0">

                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Product</th>
                                <th>Warehouse</th>
                                <th>Type</th>
                                <th>Quantity</th>
                                <th>Reference</th>
                                <th>User</th>
                                <th class="text-end">Action</th>
                            </tr>
                        </thead>

                        <tbody id="stockMovementTableBody">

                            ${rm().map(e=>{let t=e.quantity>0?`+${e.quantity}`:e.quantity;return`
                                    <tr>

                                        <td>
                                            <div>
                                                <strong>
                                                    ${e.date}
                                                </strong>

                                                <div class="small text-muted">
                                                    ${e.time}
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            <div>
                                                <strong>
                                                    ${e.product}
                                                </strong>

                                                <div class="small text-muted">
                                                    SKU: ${e.sku}
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            ${e.warehouse}
                                        </td>

                                        <td>
                                            <span class="stock-movement-type-badge stock-movement-type-${e.type.toLowerCase().replace(/\s+/g,`-`)}">
                                                ${e.type}
                                            </span>
                                        </td>

                                        <td>
                                            <strong class="${e.quantity>0?`stock-movement-quantity-in`:`stock-movement-quantity-out`}">
                                                ${t} pcs
                                            </strong>
                                        </td>

                                        <td>
                                            <strong class="stock-movement-reference">
                                                ${e.reference}
                                            </strong>
                                        </td>

                                        <td>
                                            ${e.user}
                                        </td>

                                        <td class="text-end">

                                            <button
                                                type="button"
                                                class="sf-action-btn sf-action-btn-view"
                                                data-stock-movement-view="${e.id}"
                                            >
                                                View
                                            </button>

                                        </td>

                                    </tr>
                                `}).join(``)}

                        </tbody>

                    </table>

                </div>

                    <div
                        id="stockMovementPagination"
                        class="d-flex justify-content-between align-items-center px-3 py-3"
                    >
                    </div>

                    <div
                        id="stockMovementModal"
                        class="stock-movement-modal"
                        style="display: none;"
                    >
                        <div
                            id="stockMovementModalOverlay"
                            class="stock-movement-modal-overlay"
                        >
                            <div
                                id="stockMovementModalContent"
                                style="display: inline-block;"
                            >

                            <div>

                                <div>
                                    <strong>
                                        Movement Details
                                    </strong>

                                    <button
                                        type="button"
                                        id="stockMovementModalClose"
                                    >
                                        ×
                                    </button>
                                </div>

                                <div id="stockMovementModalBody">
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </section>

        </div>
    `}function rm(){let{search:e,warehouse:t,type:n,date:r}=Zp;return em.filter(i=>{let a=e.toLowerCase(),o=!a||i.product.toLowerCase().includes(a)||i.sku.toLowerCase().includes(a)||i.reference.toLowerCase().includes(a)||i.user.toLowerCase().includes(a)||i.detail.toLowerCase().includes(a),s=!t||i.warehouse===t,c=!n||i.type===n,l=!r||i.date===r;return o&&s&&c&&l})}function im(){let e=document.getElementById(`stockMovementTableBody`),t=document.getElementById(`stockMovementPagination`);if(!e)return;let n=rm(),r=n.length,i=Math.max(1,Math.ceil(r/$p));Qp>i&&(Qp=i);let a=(Qp-1)*$p,o=a+$p,s=n.slice(a,o);e.innerHTML=s.length===0?`
            <tr>
                <td
                    colspan="8"
                    class="text-center text-muted py-4"
                >
                    No movement records found.
                </td>
            </tr>
        `:s.map(e=>{let t=e.quantity>0?`+${e.quantity}`:e.quantity;return`
                <tr>

                    <td>
                        <div class="stock-movement-date">
                            <strong>
                                <span class="stock-movement-date-desktop">
                                    ${e.date}
                                </span>

                                <span class="stock-movement-date-mobile">
                                    ${tm(e.date)}
                                </span>
                            </strong>

                            <div class="small text-muted">
                                ${e.time}
                            </div>
                        </div>
                    </td>

                    <td>
                        <div>
                            <strong>
                                ${e.product}
                            </strong>

                            <div class="small text-muted">
                                SKU: ${e.sku}
                            </div>
                        </div>
                    </td>

                    <td>
                        ${e.warehouse}
                    </td>

                    <td>
                        <span class="stock-movement-type-badge stock-movement-type-${e.type.toLowerCase().replace(/\s+/g,`-`)}">
                            ${e.type}
                        </span>
                    </td>

                    <td>
                        <strong class="${e.quantity>0?`stock-movement-quantity-in`:`stock-movement-quantity-out`}">
                            ${t} pcs
                        </strong>
                    </td>

                    <td>
                        <strong class="stock-movement-reference">
                            ${e.reference}
                        </strong>
                    </td>

                    <td>
                        ${e.user}
                    </td>

                    <td class="text-end">

                        <button
                            type="button"
                            class="sf-action-btn sf-action-btn-view"
                            data-stock-movement-view="${e.id}"
                        >
                            View
                        </button>

                    </td>

                </tr>
            `}).join(``),t&&(t.innerHTML=`
            <div class="small text-muted">
                Showing ${r===0?0:a+1}
                to
                ${Math.min(o,r)}
                of ${r}
            </div>

            <div class="d-flex gap-2">

                <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary stock-movement-page-arrow"
                    data-stock-movement-page="prev"
                    ${Qp===1?`disabled`:``}
                    aria-label="Previous page"
                >
                    ‹
                </button>

                ${Array.from({length:i},(e,t)=>{let n=t+1;return`
                            <button
                                type="button"
                                class="btn btn-sm ${n===Qp?`btn-primary`:`btn-outline-secondary`}"
                                data-stock-movement-page="${n}"
                            >
                                ${n}
                            </button>
                        `}).join(``)}

                <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary stock-movement-page-arrow"
                    data-stock-movement-page="next"
                    ${Qp===i?`disabled`:``}
                    aria-label="Next page"
                >
                    ›
                </button>

            </div>
        `)}function am(e){let t=rm(),n=Math.max(1,Math.ceil(t.length/$p));e<1||e>n||(Qp=e,im())}function om(e){let t=em.find(t=>t.id===Number(e));if(!t)return;let n=document.getElementById(`stockMovementModal`),r=document.getElementById(`stockMovementModalBody`);if(!n||!r)return;let i=t.quantity>0?`+${t.quantity}`:t.quantity;r.innerHTML=`
        <div>
            <strong>Date & Time</strong>
            <div>
                ${t.date} ${t.time}
            </div>
        </div>

        <div>
            <strong>Product</strong>
            <div>
                ${t.product}
            </div>
        </div>

        <div>
            <strong>SKU</strong>
            <div>
                ${t.sku}
            </div>
        </div>

        <div>
            <strong>Warehouse</strong>
            <div>
                ${t.warehouse}
            </div>
        </div>

        <div>
            <strong>Movement Type</strong>
            <div>
                <span class="stock-movement-type-badge stock-movement-type-${t.type.toLowerCase().replace(/\s+/g,`-`)}">
                    ${t.type}
                </span>
            </div>
        </div>

        <div>
            <strong>Quantity</strong>
            <div>
                <strong class="${t.quantity>0?`stock-movement-quantity-in`:`stock-movement-quantity-out`}">
                    ${i} pcs
                </strong>
            </div>
        </div>

        <div>
            <strong>Reference</strong>
            <div>
                ${t.reference}
            </div>
        </div>

        <div>
            <strong>User</strong>
            <div>
                ${t.user}
            </div>
        </div>

        <div>
            <strong>Detail</strong>
            <div>
                ${t.detail}
            </div>
        </div>
    `,n.style.display=`block`}function sm(){let e=document.getElementById(`stockMovementModal`);e&&(e.style.display=`none`)}function cm(){if(Xp)return;Xp=!0;let e=document.getElementById(`stockMovementSearch`),t=document.getElementById(`stockMovementWarehouse`),n=document.getElementById(`stockMovementType`),r=document.getElementById(`stockMovementDate`),i=document.getElementById(`stockMovementReset`);e&&e.addEventListener(`input`,e=>{Zp.search=e.target.value.trim(),Qp=1,im()}),t&&t.addEventListener(`change`,e=>{Zp.warehouse=e.target.value,Qp=1,im()}),n&&n.addEventListener(`change`,e=>{Zp.type=e.target.value,Qp=1,im()}),r&&r.addEventListener(`change`,e=>{Zp.date=e.target.value,Qp=1,im()}),i&&i.addEventListener(`click`,()=>{Zp={search:``,warehouse:``,type:``,date:``},Qp=1,e.value=``,t.value=``,n.value=``,r.value=``,im()});let a=document.getElementById(`stockMovementPagination`);a&&a.addEventListener(`click`,e=>{let t=e.target.closest(`[data-stock-movement-page]`);if(!t)return;let n=t.dataset.stockMovementPage;if(n===`prev`){am(Qp-1);return}if(n===`next`){am(Qp+1);return}am(Number(n))});let o=document.getElementById(`stockMovementTableBody`);o&&o.addEventListener(`click`,e=>{let t=e.target.closest(`[data-stock-movement-view]`);if(!t)return;let n=t.dataset.stockMovementView;om(n)});let s=document.getElementById(`stockMovementModalClose`);s&&s.addEventListener(`click`,sm);let c=document.getElementById(`stockMovementModalOverlay`);c&&c.addEventListener(`click`,e=>{let t=document.getElementById(`stockMovementModalContent`);t&&!t.contains(e.target)&&sm()}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&sm()}),im()}function lm(){Xp=!1,sm()}var um=[],dm=11,fm=1,pm=8,mm=[{id:1,name:`Acme Industrial Supply`,code:`SUP-001`,contact:`James Carter`,email:`james.carter@acmeindustrial.com`,phone:`+1 212 555 0148`,city:`New York`,state:`New York`,postalCode:`10016`,country:`United States`,address:`125 Madison Avenue`,website:`https://www.acmeindustrial.com`,paymentTerms:`Net 30`,notes:`Primary supplier for industrial inventory`,status:`Active`},{id:2,name:`EuroTech Components GmbH`,code:`SUP-002`,contact:`Anna Müller`,email:`anna.mueller@eurotech.de`,phone:`+49 30 555 2180`,city:`Berlin`,state:`Berlin`,postalCode:`10115`,country:`Germany`,address:`Alexanderplatz 7`,website:`https://www.eurotech.de`,paymentTerms:`Net 45`,notes:`Electronic components supplier`,status:`Active`},{id:3,name:`Sakura Trading Co., Ltd.`,code:`SUP-003`,contact:`Kenji Tanaka`,email:`kenji.tanaka@sakuratrading.jp`,phone:`+81 3 5555 2188`,city:`Tokyo`,state:`Tokyo`,postalCode:`100-0001`,country:`Japan`,address:`1-5-2 Marunouchi`,website:`https://www.sakuratrading.jp`,paymentTerms:`Net 30`,notes:`General trading partner`,status:`Active`},{id:4,name:`Global Source Solutions Ltd.`,code:`SUP-004`,contact:`Oliver Smith`,email:`oliver.smith@globalsource.co.uk`,phone:`+44 20 7946 0821`,city:`London`,state:`England`,postalCode:`EC2A 4BX`,country:`United Kingdom`,address:`20 Finsbury Street`,website:`https://www.globalsource.co.uk`,paymentTerms:`Net 30`,notes:`Global sourcing partner`,status:`Active`},{id:5,name:`Pacific Wholesale Inc.`,code:`SUP-005`,contact:`Emily Chen`,email:`emily.chen@pacificwholesale.com`,phone:`+1 604 555 0192`,city:`Vancouver`,state:`British Columbia`,postalCode:`V6B 2W9`,country:`Canada`,address:`450 Granville Street`,website:`https://www.pacificwholesale.com`,paymentTerms:`Net 30`,notes:`Wholesale inventory partner`,status:`Active`},{id:6,name:`Atlas Manufacturing S.A.`,code:`SUP-006`,contact:`Carlos Rodriguez`,email:`carlos.rodriguez@atlasmfg.es`,phone:`+34 91 555 3270`,city:`Madrid`,state:`Madrid`,postalCode:`28013`,country:`Spain`,address:`Calle de Alcalá 45`,website:`https://www.atlasmfg.es`,paymentTerms:`Net 60`,notes:`Manufacturing and private-label partner`,status:`Active`},{id:7,name:`Nova Supply Group Pty Ltd`,code:`SUP-007`,contact:`Liam Wilson`,email:`liam.wilson@novasupply.com.au`,phone:`+61 2 5550 1842`,city:`Sydney`,state:`New South Wales`,postalCode:`2000`,country:`Australia`,address:`88 Market Street`,website:`https://www.novasupply.com.au`,paymentTerms:`Net 30`,notes:`APAC distribution partner`,status:`Active`},{id:8,name:`Nordic Industrial AB`,code:`SUP-008`,contact:`Erik Johansson`,email:`erik.johansson@nordicindustrial.se`,phone:`+46 8 555 7210`,city:`Stockholm`,state:`Stockholm County`,postalCode:`111 20`,country:`Sweden`,address:`Kungsgatan 12`,website:`https://www.nordicindustrial.se`,paymentTerms:`Net 45`,notes:`Nordic industrial supplier`,status:`Inactive`},{id:9,name:`Dubai Trade Solutions LLC`,code:`SUP-009`,contact:`Omar Hassan`,email:`omar.hassan@dubaitrade.ae`,phone:`+971 4 555 0198`,city:`Dubai`,state:`Dubai`,postalCode:`00000`,country:`United Arab Emirates`,address:`Business Bay, Bay Square`,website:`https://www.dubaitrade.ae`,paymentTerms:`Net 30`,notes:`Middle East sourcing partner`,status:`Active`},{id:10,name:`São Paulo Distribution Ltda.`,code:`SUP-010`,contact:`Rafael Silva`,email:`rafael.silva@spdistribution.com.br`,phone:`+55 11 5555 2180`,city:`São Paulo`,state:`São Paulo`,postalCode:`01000-000`,country:`Brazil`,address:`Avenida Paulista 1000`,website:`https://www.spdistribution.com.br`,paymentTerms:`Net 30`,notes:`South America distribution partner`,status:`Active`}];um=mm.map(e=>({...e}));function Q(e=``){return String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function hm(e){return{"United States":{code:`US`,svg:`
                <svg viewBox="0 0 24 16" aria-hidden="true">
                    <rect width="24" height="16" fill="#fff"></rect>
                    <path
                        fill="#d22f27"
                        d="M0 0h24v2H0zm0 4h24v2H0zm0 4h24v2H0zm0 4h24v2H0z"
                    ></path>
                    <rect width="10" height="9" fill="#1a47b8"></rect>
                </svg>
            `},Germany:{code:`DE`,svg:`
                <svg viewBox="0 0 24 16" aria-hidden="true">
                    <rect width="24" height="16" fill="#ffce00"></rect>
                    <rect width="24" height="10.67" fill="#dd0000"></rect>
                    <rect width="24" height="5.33"></rect>
                </svg>
            `},Japan:{code:`JP`,svg:`
                <svg viewBox="0 0 24 16" aria-hidden="true">
                    <rect width="24" height="16" fill="#fff"></rect>
                    <circle cx="12" cy="8" r="4.5" fill="#bc002d"></circle>
                </svg>
            `},"United Kingdom":{code:`GB`,svg:`
                <svg viewBox="0 0 24 16" aria-hidden="true">
                    <rect width="24" height="16" fill="#012169"></rect>
                    <path stroke="#fff" stroke-width="3" d="M0 0l24 16M24 0L0 16"></path>
                    <path stroke="#c8102e" stroke-width="1.5" d="M0 0l24 16M24 0L0 16"></path>
                    <path stroke="#fff" stroke-width="5" d="M12 0v16M0 8h24"></path>
                    <path stroke="#c8102e" stroke-width="3" d="M12 0v16M0 8h24"></path>
                </svg>
            `},Canada:{code:`CA`,svg:`
                <svg viewBox="0 0 24 16" aria-hidden="true">
                    <rect width="24" height="16" fill="#fff"></rect>
                    <rect width="5" height="16" fill="#d52b1e"></rect>
                    <rect x="19" width="5" height="16" fill="#d52b1e"></rect>
                    <path fill="#d52b1e" d="M12 3l1 3 2-1-1.2 2.2 2.2 1-2.5.5.5 2.3-2-1.3-2 1.3.5-2.3-2.5-.5 2.2-1L9 5l2 1z"></path>
                </svg>
            `},Spain:{code:`ES`,svg:`
                <svg viewBox="0 0 24 16" aria-hidden="true">
                    <rect width="24" height="16" fill="#f1bf00"></rect>
                    <rect width="24" height="4" fill="#aa151b"></rect>
                    <rect y="12" width="24" height="4" fill="#aa151b"></rect>
                </svg>
            `},Australia:{code:`AU`,svg:`
                <svg viewBox="0 0 24 16" aria-hidden="true">
                    <rect width="24" height="16" fill="#00008b"></rect>
                    <rect width="11" height="8" fill="#012169"></rect>
                    <path stroke="#fff" stroke-width="2" d="M0 0l11 8M11 0L0 8"></path>
                    <path stroke="#c8102e" stroke-width="1" d="M0 0l11 8M11 0L0 8"></path>
                    <circle cx="17" cy="11" r="1.2" fill="#fff"></circle>
                    <circle cx="20" cy="6" r=".8" fill="#fff"></circle>
                </svg>
            `},Sweden:{code:`SE`,svg:`
                <svg viewBox="0 0 24 16" aria-hidden="true">
                    <rect width="24" height="16" fill="#006aa7"></rect>
                    <path fill="#fecc00" d="M7 0h3v6h14v3H10v7H7V9H0V6h7z"></path>
                </svg>
            `},"United Arab Emirates":{code:`AE`,svg:`
                <svg viewBox="0 0 24 16" aria-hidden="true">
                    <rect width="24" height="16" fill="#fff"></rect>
                    <rect width="24" height="5.33" fill="#00732f"></rect>
                    <rect y="10.67" width="24" height="5.33" fill="#000"></rect>
                    <rect width="6" height="16" fill="#ff0000"></rect>
                </svg>
            `},Brazil:{code:`BR`,svg:`
                <svg viewBox="0 0 24 16" aria-hidden="true">
                    <rect width="24" height="16" fill="#009c3b"></rect>
                    <path fill="#ffdf00" d="M12 1.5 22 8 12 14.5 2 8z"></path>
                    <circle cx="12" cy="8" r="3.3" fill="#002776"></circle>
                </svg>
            `}}[e]||{code:`--`,svg:``}}function gm(){let e=document.querySelector(`#supplierSearch`)?.value.trim().toLowerCase()||``,t=document.querySelector(`#supplierStatusFilter`)?.value||`All`;return um.filter(n=>{let r=[n.name,n.code,n.contact,n.email,n.phone,n.city,n.country].join(` `).toLowerCase(),i=!e||r.includes(e),a=t===`All`||n.status===t;return i&&a})}function _m(e){return`
        <span class="${e===`Active`?`sf-status sf-status-success`:`sf-status sf-status-danger`}">
            ${Q(e)}
        </span>
    `}function vm(){let e=gm(),t=Math.max(1,Math.ceil(e.length/pm));fm>t&&(fm=t);let n=(fm-1)*pm,r=e.slice(n,n+pm);return r.length?r.map(e=>`
                <tr>
                    <td>
                        <div>
                            <div class="fw-semibold">
                                ${Q(e.name)}
                            </div>
                            <div class="small text-muted">
                                ${Q(e.code)}
                            </div>
                        </div>
                    </td>

                    <td>
                        ${Q(e.contact)}
                    </td>

                    <td>
                        <span class="text-nowrap">
                            ${Q(e.email)}
                        </span>
                    </td>

                    <td class="text-nowrap">
                        ${Q(e.phone)}
                    </td>

                    <td>
                        ${Q(e.city)}
                    </td>

                    <td>
                        ${`
                                <div class="sf-country-cell">
                                    <span class="sf-country-flag">
                                        ${hm(e.country).svg}
                                    </span>

                                    <span class="sf-country-name">
                                        ${Q(e.country)}
                                    </span>
                                </div>
                            `}
                    </td>

                    <td>
                        ${_m(e.status)}
                    </td>

                    <td>
                        <div
                            class="d-flex align-items-center gap-1"
                        >
                            <button
                                type="button"
                                class="sf-icon-btn"
                                data-action="view"
                                data-id="${e.id}"
                                title="View Supplier"
                            >
                                View
                            </button>

                            <button
                                type="button"
                                class="sf-icon-btn"
                                data-action="edit"
                                data-id="${e.id}"
                                title="Edit Supplier"
                            >
                                <i class="ri-pencil-line"></i>
                            </button>

                            <button
                                type="button"
                                class="sf-icon-btn sf-icon-btn-danger"
                                data-action="delete"
                                data-id="${e.id}"
                                title="Delete Supplier"
                            >
                                <i class="ri-delete-bin-line"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            `).join(``):`
            <tr>
                <td
                    colspan="8"
                    class="text-center py-5"
                >
                    <div class="text-muted">
                        No suppliers found.
                    </div>
                </td>
            </tr>
        `}function ym(e){let t=document.querySelector(`#supplierPagination`);if(!t)return;let n=``;n+=`
        <button
            type="button"
            class="sf-pagination-btn sf-pagination-arrow"
            data-page="${fm-1}"
            ${fm===1?`disabled`:``}
            aria-label="Previous page"
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path
                    d="m15 18-6-6 6-6"
                ></path>
            </svg>
        </button>
    `;for(let t=1;t<=e;t++)n+=`
            <button
                type="button"
                class="
                    sf-pagination-btn
                    ${t===fm?`active`:``}
                "
                data-page="${t}"
                aria-label="Page ${t}"
            >
                ${t}
            </button>
        `;n+=`
        <button
            type="button"
            class="sf-pagination-btn sf-pagination-arrow"
            data-page="${fm+1}"
            ${fm===e?`disabled`:``}
            aria-label="Next page"
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path
                    d="m9 18 6-6-6-6"
                ></path>
            </svg>
        </button>
    `,t.innerHTML=n}function bm(){let e=document.querySelector(`#suppliersTableBody`);if(!e)return;let t=gm(),n=Math.max(1,Math.ceil(t.length/pm));fm>n&&(fm=n),e.innerHTML=vm(),ym(n);let r=document.querySelector(`#supplierPaginationSummary`);r&&(r.textContent=`Showing ${t.length?(fm-1)*pm+1:0} to ${Math.min(fm*pm,t.length)} of ${t.length} results`)}function xm(e={}){return`
        <form id="supplierForm" novalidate>

            <input
                type="hidden"
                id="supplierFormId"
                value="${Q(e.id||``)}"
            >

            <div class="mb-4">

                <h6 class="fw-semibold mb-3">
                    Supplier Information
                </h6>

                <div class="row g-3">

                    <div class="col-12 col-md-6">
                        <label
                            class="sf-form-label"
                            for="supplierName"
                        >
                            Supplier Name
                            <span class="text-danger">*</span>
                        </label>

                        <input
                            id="supplierName"
                            type="text"
                            class="sf-form-control"
                            value="${Q(e.name||``)}"
                            placeholder="Enter supplier name"
                            required
                        >
                    </div>

                    <div class="col-12 col-md-6">
                        <label
                            class="sf-form-label"
                            for="supplierCode"
                        >
                            Supplier Code
                        </label>

                        <input
                            id="supplierCode"
                            type="text"
                            class="sf-form-control"
                            value="${Q(e.code||``)}"
                            placeholder="e.g. SUP-001"
                        >
                    </div>

                    <div class="col-12 col-md-6">
                        <label
                            class="sf-form-label"
                            for="supplierContact"
                        >
                            Contact Person
                        </label>

                        <input
                            id="supplierContact"
                            type="text"
                            class="sf-form-control"
                            value="${Q(e.contact||``)}"
                            placeholder="Enter contact person"
                        >
                    </div>

                    <div class="col-12 col-md-6">
                        <label
                            class="sf-form-label"
                            for="supplierEmail"
                        >
                            Email
                        </label>

                        <input
                            id="supplierEmail"
                            type="email"
                            class="sf-form-control"
                            value="${Q(e.email||``)}"
                            placeholder="Enter email address"
                        >
                    </div>

                    <div class="col-12 col-md-6">
                        <label
                            class="sf-form-label"
                            for="supplierPhone"
                        >
                            Phone
                        </label>

                        <input
                            id="supplierPhone"
                            type="text"
                            class="sf-form-control"
                            value="${Q(e.phone||``)}"
                            placeholder="Enter phone number"
                        >
                    </div>

                </div>
            </div>

            <div class="mb-4">

                <h6 class="fw-semibold mb-3">
                    Address
                </h6>

                <div class="row g-3">

                    <div class="col-12">
                        <label
                            class="sf-form-label"
                            for="supplierAddress"
                        >
                            Address
                        </label>

                        <input
                            id="supplierAddress"
                            type="text"
                            class="sf-form-control"
                            value="${Q(e.address||``)}"
                            placeholder="Enter street address"
                        >
                    </div>

                    <div class="col-12 col-md-6">
                        <label
                            class="sf-form-label"
                            for="supplierCity"
                        >
                            City
                        </label>

                        <input
                            id="supplierCity"
                            type="text"
                            class="sf-form-control"
                            value="${Q(e.city||``)}"
                            placeholder="Enter city"
                        >
                    </div>

                    <div class="col-12 col-md-6">
                        <label
                            class="sf-form-label"
                            for="supplierState"
                        >
                            State / Province
                        </label>

                        <input
                            id="supplierState"
                            type="text"
                            class="sf-form-control"
                            value="${Q(e.state||``)}"
                            placeholder="Enter state or province"
                        >
                    </div>

                    <div class="col-12 col-md-6">
                        <label
                            class="sf-form-label"
                            for="supplierPostalCode"
                        >
                            Postal Code
                        </label>

                        <input
                            id="supplierPostalCode"
                            type="text"
                            class="sf-form-control"
                            value="${Q(e.postalCode||``)}"
                            placeholder="Enter postal code"
                        >
                    </div>

                    <div class="col-12 col-md-6">
                        <label
                            class="sf-form-label"
                            for="supplierCountry"
                        >
                            Country
                        </label>

                        <select
                            id="supplierCountry"
                            class="sf-form-control"
                        >
                            ${[`United States`,`Canada`,`United Kingdom`,`Germany`,`France`,`Spain`,`Italy`,`Sweden`,`Switzerland`,`Japan`,`South Korea`,`Singapore`,`Australia`,`United Arab Emirates`,`Brazil`,`Mexico`,`India`,`Other`].map(t=>`
                                        <option
                                            value="${Q(t)}"
                                            ${e.country===t?`selected`:``}
                                        >
                                            ${Q(t)}
                                        </option>
                                    `).join(``)}
                        </select>
                    </div>

                </div>
            </div>

            <div>

                <h6 class="fw-semibold mb-3">
                    Additional Information
                </h6>

                <div class="row g-3">

                    <div class="col-12 col-md-6">
                        <label
                            class="sf-form-label"
                            for="supplierWebsite"
                        >
                            Website
                        </label>

                        <input
                            id="supplierWebsite"
                            type="url"
                            class="sf-form-control"
                            value="${Q(e.website||``)}"
                            placeholder="https://example.com"
                        >
                    </div>

                    <div class="col-12 col-md-6">
                        <label
                            class="sf-form-label"
                            for="supplierPaymentTerms"
                        >
                            Payment Terms
                        </label>

                        <input
                            id="supplierPaymentTerms"
                            type="text"
                            class="sf-form-control"
                            value="${Q(e.paymentTerms||``)}"
                            placeholder="e.g. Net 30"
                        >
                    </div>

                    <div class="col-12 col-md-8">
                        <label
                            class="sf-form-label"
                            for="supplierNotes"
                        >
                            Notes
                        </label>

                        <textarea
                            id="supplierNotes"
                            class="sf-form-control"
                            rows="3"
                            placeholder="Enter notes"
                        >${Q(e.notes||``)}</textarea>
                    </div>

                    <div class="col-12 col-md-4">
                        <label
                            class="sf-form-label"
                            for="supplierFormStatus"
                        >
                            Status
                        </label>

                        <select
                            id="supplierFormStatus"
                            class="sf-form-control"
                        >
                            <option
                                value="Active"
                                ${(e.status||`Active`)===`Active`?`selected`:``}
                            >
                                Active
                            </option>

                            <option
                                value="Inactive"
                                ${e.status===`Inactive`?`selected`:``}
                            >
                                Inactive
                            </option>
                        </select>
                    </div>

                </div>
            </div>

        </form>
    `}function Sm(e,t=null){let n=t?um.find(e=>e.id===Number(t)):null,r=document.querySelector(`#supplierFormModal`),i=document.querySelector(`#supplierFormModalTitle`),a=document.querySelector(`#supplierFormModalDescription`),o=document.querySelector(`#supplierFormModalBody`),s=document.querySelector(`#supplierFormModalSubmit`);if(!r||!i||!a||!o||!s)return;let c=e===`edit`;i.textContent=c?`Edit Supplier`:`Add Supplier`,a.textContent=c?`Update supplier information.`:`Add a new supplier to your system.`,s.textContent=c?`Update Supplier`:`Save Supplier`,o.innerHTML=xm(n||{}),Y.default.getOrCreateInstance(r).show()}function Cm(e){let t=um.find(t=>t.id===Number(e)),n=document.querySelector(`#supplierViewModal`),r=document.querySelector(`#supplierViewModalBody`);t&&n&&r&&(n.dataset.supplierId=t.id,r.innerHTML=`
        <div
            class="d-flex align-items-center gap-3 mb-4"
        >
            <span
                class="sf-supplier-avatar sf-supplier-avatar-lg"
            >
                ${Q(t.name.charAt(0))}
            </span>

            <div>
                <h5 class="mb-1 fw-semibold">
                    ${Q(t.name)}
                </h5>

                <div class="small text-muted">
                    ${Q(t.code)}

                    <span class="mx-1">
                        •
                    </span>

                    ${_m(t.status)}
                </div>
            </div>
        </div>

        <div class="row g-4">

            <div class="col-12 col-md-6">

                <h6 class="fw-semibold mb-3">
                    Contact Information
                </h6>

                <div class="small text-muted mb-1">
                    Contact Person
                </div>

                <div class="mb-3">
                    ${Q(t.contact||`—`)}
                </div>

                <div class="small text-muted mb-1">
                    Email
                </div>

                <div class="mb-3">
                    ${Q(t.email||`—`)}
                </div>

                <div class="small text-muted mb-1">
                    Phone
                </div>

                <div class="mb-3">
                    ${Q(t.phone||`—`)}
                </div>

                <div class="small text-muted mb-1">
                    Website
                </div>

                <div>
                    ${t.website?`
                                <a
                                    href="${Q(t.website)}"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    ${Q(t.website)}
                                </a>
                            `:`—`}
                </div>

            </div>

            <div class="col-12 col-md-6">

                <h6 class="fw-semibold mb-3">
                    Address
                </h6>

                <div class="mb-4">
                    ${Q(t.address||`—`)}
                    <br>

                    ${Q(t.city||`—`)},

                    ${Q(t.state||`—`)}

                    ${t.postalCode?` ${Q(t.postalCode)}`:``}

                    <br>

                    ${Q(t.country||`—`)}
                </div>

                <h6 class="fw-semibold mb-3">
                    Business Information
                </h6>

                <div class="small text-muted mb-1">
                    Payment Terms
                </div>

                <div class="mb-3">
                    ${Q(t.paymentTerms||`—`)}
                </div>

                <div class="small text-muted mb-1">
                    Notes
                </div>

                <div>
                    ${Q(t.notes||`—`)}
                </div>

            </div>

        </div>
    `,Y.default.getOrCreateInstance(n).show())}function wm(e){let t=um.find(t=>t.id===Number(e)),n=document.querySelector(`#supplierDeleteModal`),r=document.querySelector(`#supplierDeleteName`),i=document.querySelector(`#supplierDeleteId`);t&&n&&r&&i&&(r.textContent=t.name,i.value=t.id,Y.default.getOrCreateInstance(n).show())}function Tm(){let e=document.querySelector(`#supplierName`);if(!e)return;if(!e.value.trim()){e.classList.add(`is-invalid`),e.focus();return}let t=Number(document.querySelector(`#supplierFormId`)?.value||0),n={name:document.querySelector(`#supplierName`)?.value.trim()||``,code:document.querySelector(`#supplierCode`)?.value.trim()||``,contact:document.querySelector(`#supplierContact`)?.value.trim()||``,email:document.querySelector(`#supplierEmail`)?.value.trim()||``,phone:document.querySelector(`#supplierPhone`)?.value.trim()||``,address:document.querySelector(`#supplierAddress`)?.value.trim()||``,city:document.querySelector(`#supplierCity`)?.value.trim()||``,state:document.querySelector(`#supplierState`)?.value.trim()||``,postalCode:document.querySelector(`#supplierPostalCode`)?.value.trim()||``,country:document.querySelector(`#supplierCountry`)?.value||`Other`,website:document.querySelector(`#supplierWebsite`)?.value.trim()||``,paymentTerms:document.querySelector(`#supplierPaymentTerms`)?.value.trim()||``,notes:document.querySelector(`#supplierNotes`)?.value.trim()||``,status:document.querySelector(`#supplierFormStatus`)?.value||`Active`};if(t){let e=um.findIndex(e=>e.id===t);e!==-1&&(um[e]={...um[e],...n})}else um.unshift({id:dm++,...n});fm=1,bm();let r=document.querySelector(`#supplierFormModal`);r&&Y.default.getOrCreateInstance(r).hide()}function Em(){let e=Number(document.querySelector(`#supplierDeleteId`)?.value||0);um=um.filter(t=>t.id!==e);let t=document.querySelector(`#supplierDeleteModal`);t&&Y.default.getOrCreateInstance(t).hide(),bm()}function Dm(){return`
        <div class="container-fluid">

            ${au({title:`Suppliers`,description:`Manage your suppliers and vendor information.`,action:`
                    <button
                        type="button"
                        class="sf-add-btn"
                        id="addSupplierButton"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M12 5v14"></path>
                            <path d="M5 12h14"></path>
                        </svg>

                        <span>
                            Add Supplier
                        </span>
                    </button>
                `})}

            <section
                class="card border-0 shadow-sm sf-suppliers-card"
            >

                <div class="card-body p-0">

                    <div
                        class="p-3 border-bottom"
                    >

                        <div
                            class="row g-2 align-items-center"
                        >

                            <div
                                class="col-12 col-lg-5"
                            >

                                <div
                                    class="position-relative"
                                >

                                    <i
                                        class="ri-search-line position-absolute top-50 translate-middle-y ms-3 text-muted"
                                    ></i>

                                    <input
                                        id="supplierSearch"
                                        type="search"
                                        class="sf-form-control sf-suppliers-search ps-5"
                                        placeholder="Search suppliers..."
                                    >

                                </div>

                            </div>

                            <div class="col-12 col-sm-auto ms-lg-auto">
                                <div class="d-flex align-items-center gap-2">
                                    <label
                                        for="supplierStatusFilter"
                                        class="mb-0 small fw-medium"
                                    >
                                        Status
                                    </label>

                                    <select
                                        id="supplierStatusFilter"
                                        class="sf-form-control sf-suppliers-filter"
                                        
                                        aria-label="Filter by status"
                                    >
                                        <option value="All">All</option>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div
                        class="table-responsive sf-suppliers-table-wrap"
                    >

                        <table
                            class="table align-middle mb-0 sf-suppliers-table"
                        >

                            <thead>
                                <tr>
                                    <th>Supplier</th>
                                    <th>Contact Person</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>City</th>
                                    <th>Country</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody
                                id="suppliersTableBody"
                            >
                                ${vm()}
                            </tbody>

                        </table>

                    </div>

                    <div
                        id="supplierTableFooter"
                        class="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2 p-3 border-top"
                    >

                        <div
                            id="supplierPaginationSummary"
                            class="small text-muted"
                        ></div>

                        <div
                            id="supplierPagination"
                            class="d-flex align-items-center gap-1"
                        ></div>

                    </div>

                </div>

            </section>

            ${Om()}
            ${km()}
            ${Am()}

        </div>
    `}function Om(){return`
        <div
            class="modal fade"
            id="supplierFormModal"
            tabindex="-1"
            aria-hidden="true"
        >

            <div
                class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
            >

                <div
                    class="modal-content border-0 shadow"
                >

                    <div
                        class="modal-header"
                    >

                        <div>

                            <h5
                                class="modal-title mb-1"
                                id="supplierFormModalTitle"
                            >
                                Add Supplier
                            </h5>

                            <div
                                class="small text-muted"
                                id="supplierFormModalDescription"
                            >
                                Add a new supplier to your system.
                            </div>

                        </div>

                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>

                    </div>

                    <div
                        class="modal-body"
                        id="supplierFormModalBody"
                    >
                        ${xm()}
                    </div>

                    <div
                        class="modal-footer"
                    >

                        <button
                            type="button"
                            class="sf-btn sf-btn-outline"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>

                        <button
                            type="button"
                            class="sf-btn sf-btn-primary"
                            id="supplierFormModalSubmit"
                        >
                            Save Supplier
                        </button>

                    </div>

                </div>

            </div>

        </div>
    `}function km(){return`
        <div
            class="modal fade"
            id="supplierViewModal"
            tabindex="-1"
            aria-hidden="true"
        >

            <div
                class="modal-dialog modal-dialog-centered"
            >

                <div
                    class="modal-content border-0 shadow"
                >

                    <div
                        class="modal-header"
                    >

                        <h5
                            class="modal-title mb-0"
                        >
                            View Supplier
                        </h5>

                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>

                    </div>

                    <div
                        class="modal-body"
                        id="supplierViewModalBody"
                    ></div>

                    <div
                        class="modal-footer"
                    >

                        <button
                            type="button"
                            class="sf-btn sf-btn-outline"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>

                        <button
                            type="button"
                            class="sf-btn sf-btn-primary"
                            id="supplierViewEditButton"
                        >
                            <i class="ri-pencil-line"></i>
                            Edit
                        </button>

                    </div>

                </div>

            </div>

        </div>
    `}function Am(){return`
        <div
            class="modal fade"
            id="supplierDeleteModal"
            tabindex="-1"
            aria-hidden="true"
        >

            <div
                class="modal-dialog modal-dialog-centered"
            >

                <div
                    class="modal-content border-0 shadow"
                >

                    <div
                        class="modal-header"
                    >

                        <h5
                            class="modal-title"
                        >
                            Delete Supplier
                        </h5>

                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>

                    </div>

                    <div
                        class="modal-body"
                    >

                        <input
                            type="hidden"
                            id="supplierDeleteId"
                        >

                        <p class="mb-1">
                            Are you sure you want to delete this supplier?
                        </p>

                        <p
                            class="fw-semibold mb-0"
                            id="supplierDeleteName"
                        ></p>

                        <div
                            class="small text-muted mt-2"
                        >
                            This action cannot be undone.
                        </div>

                    </div>

                    <div
                        class="modal-footer"
                    >

                        <button
                            type="button"
                            class="sf-btn sf-btn-outline"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>

                        <button
                            type="button"
                            class="sf-btn sf-btn-danger"
                            id="supplierDeleteConfirm"
                        >
                            Delete Supplier
                        </button>

                    </div>

                </div>

            </div>

        </div>
    `}function jm(){[`supplierFormModal`,`supplierViewModal`,`supplierDeleteModal`].forEach(e=>{let t=document.querySelector(`#${e}`);t&&t.addEventListener(`hide.bs.modal`,()=>{let e=document.activeElement;e&&t.contains(e)&&e.blur()})})}function Mm(){let e=document.querySelector(`#addSupplierButton`),t=document.querySelector(`#supplierSearch`),n=document.querySelector(`#supplierStatusFilter`),r=document.querySelector(`#supplierFormModalSubmit`),i=document.querySelector(`#supplierDeleteConfirm`),a=document.querySelector(`#supplierViewEditButton`);jm(),e&&e.addEventListener(`click`,()=>{Sm(`add`)}),t&&t.addEventListener(`input`,()=>{fm=1,bm()}),n&&n.addEventListener(`change`,()=>{fm=1,bm()}),document.addEventListener(`click`,Nm),r&&r.addEventListener(`click`,Tm),i&&i.addEventListener(`click`,Em),a&&a.addEventListener(`click`,()=>{let e=document.querySelector(`#supplierViewModal`),t=e?.dataset.supplierId;t&&(Y.default.getOrCreateInstance(e).hide(),Sm(`edit`,t))}),bm()}function Nm(e){let t=e.target.closest(`[data-action]`);if(t){let e=t.dataset.action,n=t.dataset.id;e===`add`&&Sm(`add`),e===`view`&&Cm(n),e===`edit`&&Sm(`edit`,n),e===`delete`&&wm(n)}let n=e.target.closest(`[data-pagination-page]`);if(n){fm=Number(n.dataset.paginationPage),bm();return}let r=e.target.closest(`[data-page]`);if(r){let e=gm(),t=Math.max(1,Math.ceil(e.length/pm)),n=Number(r.dataset.page);n>=1&&n<=t&&(fm=n,bm())}}function Pm(){um=mm.map(e=>({...e})),dm=11,fm=1,document.removeEventListener(`click`,Nm)}var Fm=`stockflow.purchaseOrders`,Im=8,Lm=[],Rm=1,zm=null,Bm=!1;function Vm(e){e&&e.addEventListener(`hide.bs.modal`,()=>{let t=document.activeElement;t&&e.contains(t)&&t.blur()})}var Hm=[`Acme Industrial Supply`,`EuroTech Components GmbH`,`Sakura Trading Co., Ltd.`,`Global Source Solutions Ltd.`,`Pacific Wholesale Inc.`],Um=[{name:`Wireless Mouse`,sku:`WM-001`,price:25e4},{name:`Mechanical Keyboard`,sku:`MK-002`,price:85e4},{name:`USB-C Cable`,sku:`UC-003`,price:12e4},{name:`Laptop Stand`,sku:`LS-004`,price:45e4},{name:`Office Chair`,sku:`OC-005`,price:175e4},{name:`Desk Lamp`,sku:`DL-006`,price:35e4},{name:`Notebook A5`,sku:`NB-007`,price:45e3},{name:`Ballpoint Pen`,sku:`BP-008`,price:15e3}],Wm=[{id:1,poNumber:`PO-2026-001`,supplier:`Acme Industrial Supply`,orderDate:`2026-09-13`,expectedDate:`2026-09-18`,status:`Ordered`,discount:0,tax:200,shipping:0,notes:`Urgent order for office equipment.`,items:[{product:`Laptop Stand`,qty:5,unitPrice:8e5},{product:`Wireless Mouse`,qty:10,unitPrice:25e4}]},{id:2,poNumber:`PO-2026-002`,supplier:`EuroTech Components GmbH`,orderDate:`2026-09-10`,expectedDate:`2026-09-15`,status:`Received`,discount:0,tax:0,shipping:0,notes:`Received in full.`,items:[{product:`Mechanical Keyboard`,qty:5,unitPrice:85e4}]},{id:3,poNumber:`PO-2026-003`,supplier:`Sakura Trading Co., Ltd.`,orderDate:`2026-09-08`,expectedDate:`2026-09-15`,status:`Draft`,discount:0,tax:0,shipping:0,notes:``,items:[{product:`USB-C Cable`,qty:5,unitPrice:12e4},{product:`Ballpoint Pen`,qty:10,unitPrice:15e3}]},{id:4,poNumber:`PO-2026-004`,supplier:`Global Source Solutions Ltd.`,orderDate:`2026-09-05`,expectedDate:`2026-09-12`,status:`Cancelled`,discount:0,tax:0,shipping:0,notes:`Cancelled by supplier.`,items:[{product:`Office Chair`,qty:2,unitPrice:175e4}]},{id:5,poNumber:`PO-2026-005`,supplier:`Pacific Wholesale Inc.`,orderDate:`2026-09-01`,expectedDate:`2026-09-08`,status:`Ordered`,discount:0,tax:0,shipping:0,notes:``,items:[{product:`Notebook A5`,qty:20,unitPrice:45e3},{product:`Ballpoint Pen`,qty:30,unitPrice:15e3}]},{id:6,poNumber:`PO-2026-006`,supplier:`Acme Industrial Supply`,orderDate:`2026-08-28`,expectedDate:`2026-09-04`,status:`Received`,discount:0,tax:150,shipping:5e4,notes:`Received and checked by warehouse.`,items:[{product:`Office Chair`,qty:4,unitPrice:175e4},{product:`Desk Lamp`,qty:6,unitPrice:35e4}]},{id:7,poNumber:`PO-2026-007`,supplier:`EuroTech Components GmbH`,orderDate:`2026-08-25`,expectedDate:`2026-09-02`,status:`Ordered`,discount:1e5,tax:250,shipping:75e3,notes:`Waiting for supplier delivery.`,items:[{product:`Mechanical Keyboard`,qty:8,unitPrice:85e4},{product:`Wireless Mouse`,qty:12,unitPrice:25e4}]},{id:8,poNumber:`PO-2026-008`,supplier:`Sakura Trading Co., Ltd.`,orderDate:`2026-08-22`,expectedDate:`2026-08-30`,status:`Draft`,discount:0,tax:0,shipping:0,notes:`Pending approval from purchasing manager.`,items:[{product:`USB-C Cable`,qty:25,unitPrice:12e4},{product:`Notebook A5`,qty:40,unitPrice:45e3}]},{id:9,poNumber:`PO-2026-009`,supplier:`Global Source Solutions Ltd.`,orderDate:`2026-08-18`,expectedDate:`2026-08-27`,status:`Received`,discount:0,tax:300,shipping:1e5,notes:`Partial delivery received.`,items:[{product:`Laptop Stand`,qty:10,unitPrice:8e5},{product:`Desk Lamp`,qty:10,unitPrice:35e4}]},{id:10,poNumber:`PO-2026-010`,supplier:`Pacific Wholesale Inc.`,orderDate:`2026-08-15`,expectedDate:`2026-08-23`,status:`Cancelled`,discount:0,tax:0,shipping:0,notes:`Order cancelled due to product availability.`,items:[{product:`Office Chair`,qty:3,unitPrice:175e4}]},{id:11,poNumber:`PO-2026-011`,supplier:`Acme Industrial Supply`,orderDate:`2026-08-10`,expectedDate:`2026-08-18`,status:`Ordered`,discount:5e4,tax:180,shipping:6e4,notes:`Regular monthly office supply order.`,items:[{product:`Ballpoint Pen`,qty:100,unitPrice:15e3},{product:`Notebook A5`,qty:50,unitPrice:45e3}]},{id:12,poNumber:`PO-2026-012`,supplier:`EuroTech Components GmbH`,orderDate:`2026-08-05`,expectedDate:`2026-08-14`,status:`Received`,discount:0,tax:200,shipping:0,notes:`All items received in good condition.`,items:[{product:`Wireless Mouse`,qty:20,unitPrice:25e4},{product:`USB-C Cable`,qty:30,unitPrice:12e4}]}];function Gm(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function Km(e){return new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`,maximumFractionDigits:0}).format(Number(e)||0)}function qm(e){return e?new Intl.DateTimeFormat(`en-US`,{month:`short`,day:`2-digit`,year:`numeric`}).format(new Date(`${e}T00:00:00`)):`—`}function Jm(e){return(e.items||[]).reduce((e,t)=>e+Number(t.qty||0)*Number(t.unitPrice||0),0)}function Ym(e){return Math.max(0,Jm(e)-Number(e.discount||0)+Number(e.tax||0)+Number(e.shipping||0))}function Xm(e){return{Draft:`sf-po-status-draft`,Ordered:`sf-po-status-ordered`,Received:`sf-po-status-received`,Cancelled:`sf-po-status-cancelled`}[e]||`sf-po-status-draft`}function Zm(){let e=localStorage.getItem(Fm);if(e)try{Lm=JSON.parse(e);return}catch{}Lm=structuredClone(Wm),Qm()}function Qm(){localStorage.setItem(Fm,JSON.stringify(Lm))}function $m(){let e=Lm.reduce((e,t)=>{let n=String(t.poNumber).match(/(\d+)$/);return Math.max(e,n?Number(n[1]):0)},0);return`PO-2026-${String(e+1).padStart(3,`0`)}`}function eh(e=``){return Hm.map(t=>`
        <option
            value="${Gm(t)}"
            ${t===e?`selected`:``}
        >
            ${Gm(t)}
        </option>
    `).join(``)}function th(e=``){return Um.map(t=>`
        <option
            value="${Gm(t.name)}"
            ${t.name===e?`selected`:``}
        >
            ${Gm(t.name)} — ${Gm(t.sku)}
        </option>
    `).join(``)}function nh(e){return`
        <span class="sf-po-status ${Xm(e)}">
            ${Gm(e)}
        </span>
    `}function rh(){return`
        
        <div class="container-fluid">

            <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mb-4">

                <div>
                    <h1 class="h3 mb-1">Purchase Orders</h1>

                    <p class="text-muted mb-0">
                        Manage supplier purchase orders and incoming stock.
                    </p>
                </div>

                <button
                    type="button"
                    class="sf-add-btn"
                    id="addPurchaseOrderButton"
                >
                    <i class="ri-add-line"></i>
                    <span>Create Purchase Order</span>
                </button>

            </div>


            <section class="sf-card sf-po-filter mb-2">

                <div class="row g-3 align-items-end">

                    <div class="col-12 col-lg-5">

                        <label
                            for="purchaseOrderSearch"
                            class="sf-form-label"
                        >
                            Search
                        </label>

                        <input
                            type="search"
                            id="purchaseOrderSearch"
                            class="sf-form-control"
                            placeholder="Search PO number or supplier..."
                        >

                    </div>


                    <div class="col-12 col-md-4 col-lg-2">

                        <label
                            for="purchaseOrderStatus"
                            class="sf-form-label"
                        >
                            Status
                        </label>

                        <select
                            id="purchaseOrderStatus"
                            class="sf-form-control"
                        >
                            <option value="">
                                All Status
                            </option>

                            <option value="Draft">
                                Draft
                            </option>

                            <option value="Ordered">
                                Ordered
                            </option>

                            <option value="Received">
                                Received
                            </option>

                            <option value="Cancelled">
                                Cancelled
                            </option>
                        </select>

                    </div>


                    <div class="col-12 col-md-5 col-lg-3">

                        <label
                            for="purchaseOrderDate"
                            class="sf-form-label"
                        >
                            Order Date
                        </label>

                        <input
                            type="date"
                            id="purchaseOrderDate"
                            class="sf-form-control"
                        >

                    </div>


                    <div class="col-12 col-md-3 col-lg-2">

                        <button
                            type="button"
                            class="sf-btn sf-btn-outline w-30"
                            id="resetPurchaseOrderFilters"
                        >
                            Reset
                        </button>

                    </div>

                </div>

            </section>


            <section class="sf-card sf-po-table-card">

                <div class="sf-po-table-wrapper">

                    <table class="table sf-table sf-po-table mb-0">

                        <thead>
                            <tr>
                                <th>PO Number</th>
                                <th>Supplier</th>
                                <th>Order Date</th>
                                <th>Expected Date</th>
                                <th>Items</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th class="text-end">Actions</th>
                            </tr>
                        </thead>

                        <tbody id="purchaseOrderTableBody"></tbody>

                    </table>

                </div>


                <div class="d-flex align-items-center justify-content-between gap-2 px-3 py-3 border-top">

                    <div
                        class="small text-muted"
                        id="purchaseOrderResults"
                    ></div>

                    <div
                        class="d-flex gap-1"
                        id="purchaseOrderPagination"
                    ></div>

                </div>

            </section>

        </div>
    `}function ih(){let e=document.querySelector(`#purchaseOrderSearch`)?.value.trim().toLowerCase()||``,t=document.querySelector(`#purchaseOrderStatus`)?.value||``,n=document.querySelector(`#purchaseOrderDate`)?.value||``,r=Lm.filter(r=>{let i=`${r.poNumber} ${r.supplier}`.toLowerCase();return(!e||i.includes(e))&&(!t||r.status===t)&&(!n||r.orderDate===n)}),i=Math.max(1,Math.ceil(r.length/Im));Rm=Math.min(Rm,i);let a=(Rm-1)*Im,o=r.slice(a,a+Im),s=document.querySelector(`#purchaseOrderTableBody`);if(!s)return;s.innerHTML=o.length?o.map(e=>`
            <tr>

                <td>
                    <button
                        type="button"
                        class="btn btn-link p-0 sf-po-number"
                        data-po-action="view"
                        data-id="${e.id}"
                    >
                        ${Gm(e.poNumber)}
                    </button>
                </td>

                <td>
                    ${Gm(e.supplier)}
                </td>

                <td>
                    ${qm(e.orderDate)}
                </td>

                <td>
                    ${qm(e.expectedDate)}
                </td>

                <td class="sf-po-items">
                    ${e.items.length}
                </td>

                <td>
                    ${Km(Ym(e))}
                </td>

                <td>
                    ${nh(e.status)}
                </td>

                <td>
                    <div class="sf-po-actions">

                        <button
                            type="button"
                            class="sf-po-action sf-po-action-view"
                            title="View"
                            data-po-action="view"
                            data-id="${e.id}"
                        >
                            View
                        </button>

                        <button
                            type="button"
                            class="sf-po-action"
                            title="Edit"
                            data-po-action="edit"
                            data-id="${e.id}"
                        >
                            <i class="ri-pencil-line"></i>
                        </button>

                        <button
                            type="button"
                            class="sf-po-action"
                            title="Delete"
                            data-po-action="delete"
                            data-id="${e.id}"
                        >
                            <i class="ri-delete-bin-line"></i>
                        </button>

                    </div>
                </td>

            </tr>
        `).join(``):`
            <tr>
                <td
                    colspan="8"
                    class="text-center py-5 text-muted"
                >
                    No purchase orders found.
                </td>
            </tr>
        `;let c=document.querySelector(`#purchaseOrderResults`);c&&(c.textContent=r.length?`Showing ${a+1} to ${Math.min(a+o.length,r.length)} of ${r.length} results`:`Showing 0 results`),ah(i)}function ah(e){let t=document.querySelector(`#purchaseOrderPagination`);if(!t)return;let n=``;n+=`
        <button
            type="button"
            class="sf-pagination-btn sf-pagination-arrow"
            data-po-page="${Rm-1}"
            ${Rm===1?`disabled`:``}
            aria-label="Previous page"
        >
            <i class="ri-arrow-left-s-line"></i>
        </button>
    `;for(let t=1;t<=e;t++)n+=`
            <button
                type="button"
                class="sf-pagination-btn ${t===Rm?`active`:``}"
                data-po-page="${t}"
                aria-label="Page ${t}"
            >
                ${t}
            </button>
        `;n+=`
        <button
            type="button"
            class="sf-pagination-btn sf-pagination-arrow"
            data-po-page="${Rm+1}"
            ${Rm===e?`disabled`:``}
            aria-label="Next page"
        >
            <i class="ri-arrow-right-s-line"></i>
        </button>
    `,t.innerHTML=n}function oh(e=null){zm=e;let t=e?Lm.find(t=>t.id===e):null,n=`
        <div
            class="modal fade"
            id="purchaseOrderFormModal"
            tabindex="-1"
            aria-hidden="true"
        >

            <div class="modal-dialog modal-dialog-centered modal-lg">

                <div class="modal-content sf-modal-content">

                    <div class="modal-header sf-modal-header">

                        <div>
                            <h5 class="modal-title mb-0">
                                ${e?`Edit Purchase Order`:`Create Purchase Order`}
                            </h5>

                            <p class="text-muted small mb-0">
                                ${e?`Update purchase order information.`:`Add a new purchase order for supplier.`}
                            </p>
                        </div>

                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>

                    </div>


                    <form id="purchaseOrderForm">

                        <div class="modal-body">

                            <!-- Purchase Order Information -->

                            <div class="row g-3 mb-3">

                                <div class="col-12 col-md-3">

                                    <label class="sf-form-label">
                                        PO Number
                                    </label>

                                    <input
                                        class="sf-form-control"
                                        id="poNumber"
                                        value="${Gm(t?.poNumber||$m())}"
                                        readonly
                                    >

                                </div>


                                <div class="col-12 col-md-3">

                                    <label
                                        class="sf-form-label"
                                        for="poSupplier"
                                    >
                                        Supplier
                                        <span class="text-danger">*</span>
                                    </label>

                                    <select
                                        class="sf-form-control"
                                        id="poSupplier"
                                        required
                                    >

                                        <option value="">
                                            Select supplier
                                        </option>

                                        ${eh(t?.supplier||``)}

                                    </select>

                                </div>


                                <div class="col-12 col-md-3">

                                    <label
                                        class="sf-form-label"
                                        for="poOrderDate"
                                    >
                                        Order Date
                                        <span class="text-danger">*</span>
                                    </label>

                                    <input
                                        type="date"
                                        class="sf-form-control"
                                        id="poOrderDate"
                                        value="${t?.orderDate||new Date().toISOString().slice(0,10)}"
                                        required
                                    >

                                </div>


                                <div class="col-12 col-md-3">

                                    <label
                                        class="sf-form-label"
                                        for="poExpectedDate"
                                    >
                                        Expected Date
                                    </label>

                                    <input
                                        type="date"
                                        class="sf-form-control"
                                        id="poExpectedDate"
                                        value="${t?.expectedDate||``}"
                                    >

                                </div>

                            </div>


                            <!-- Products -->

                            <div class="mb-2">

                                <div
                                    class="d-flex align-items-center justify-content-between mb-2"
                                >

                                    <h6 class="fw-semibold mb-0">
                                        Products
                                    </h6>

                                    <button
                                        type="button"
                                        class="sf-btn sf-btn-outline btn-sm"
                                        id="addPurchaseOrderItem"
                                    >
                                        <i class="ri-add-line"></i>
                                        Add Product
                                    </button>

                                </div>


                                <div class="sf-po-product-table-wrapper">

                                    <table class="table sf-po-product-table">

                                        <thead>

                                            <tr>

                                                <th style="width:34%">
                                                    Product
                                                </th>

                                                <th style="width:12%">
                                                    Qty
                                                </th>

                                                <th style="width:18%">
                                                    Unit Price
                                                </th>

                                                <th style="width:18%">
                                                    Subtotal
                                                </th>

                                                <th style="width:10%">
                                                    Action
                                                </th>

                                            </tr>

                                        </thead>


                                        <tbody
                                            id="purchaseOrderItemsBody"
                                        ></tbody>

                                    </table>

                                </div>

                            </div>


                            <!-- Notes + Summary -->

                            <div class="row g-4">

                                <div class="col-12 col-lg-7">

                                    <label
                                        class="sf-form-label"
                                        for="poNotes"
                                    >
                                        Notes
                                    </label>

                                    <textarea
                                        class="sf-form-control"
                                        id="poNotes"
                                        rows="4"
                                        placeholder="Add notes (optional)..."
                                    >${Gm(t?.notes||``)}</textarea>

                                </div>


                                <div class="col-12 col-lg-5">

                                    <div class="sf-po-summary">

                                        <div class="sf-po-summary-row">

                                            <span>
                                                Subtotal
                                            </span>

                                            <strong
                                                id="poSummarySubtotal"
                                            >
                                                $0
                                            </strong>

                                        </div>


                                        <div class="sf-po-summary-row">

                                            <span>
                                                Discount
                                            </span>

                                            <input
                                                type="number"
                                                min="0"
                                                class="form-control form-control-sm text-end"
                                                id="poDiscount"
                                                value="${Number(t?.discount||0)}"
                                                style="max-width:130px"
                                            >

                                        </div>


                                        <div class="sf-po-summary-row">

                                            <span>
                                                Tax
                                            </span>

                                            <input
                                                type="number"
                                                min="0"
                                                class="form-control form-control-sm text-end"
                                                id="poTax"
                                                value="${Number(t?.tax||0)}"
                                                style="max-width:130px"
                                            >

                                        </div>


                                        <div class="sf-po-summary-row">

                                            <span>
                                                Shipping
                                            </span>

                                            <input
                                                type="number"
                                                min="0"
                                                class="form-control form-control-sm text-end"
                                                id="poShipping"
                                                value="${Number(t?.shipping||0)}"
                                                style="max-width:130px"
                                            >

                                        </div>


                                        <div
                                            class="sf-po-summary-row sf-po-summary-total"
                                        >

                                            <span>
                                                Grand Total
                                            </span>

                                            <strong
                                                id="poSummaryTotal"
                                            >
                                                $0
                                            </strong>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>


                        <!-- Footer -->

                        <div class="modal-footer">

                            <button
                                type="button"
                                class="sf-btn sf-btn-outline"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>


                            <button
                                type="button"
                                class="sf-btn sf-btn-outline"
                                id="savePurchaseOrderDraft"
                            >
                                Save as Draft
                            </button>


                            <button
                                type="submit"
                                class="sf-btn sf-btn-primary"
                            >
                                ${e?`Update Purchase Order`:`Create Purchase Order`}
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    `;document.querySelector(`#purchaseOrderFormModal`)?.remove(),document.body.insertAdjacentHTML(`beforeend`,n);let r=document.querySelector(`#purchaseOrderFormModal`),i=Y.default.getOrCreateInstance(r);Vm(r),sh(t?.items?.length?t.items:[{product:``,qty:1,unitPrice:0}]),uh(),lh(),i.show()}function sh(e){let t=document.querySelector(`#purchaseOrderItemsBody`);t&&(t.innerHTML=e.map((e,t)=>`
        <tr data-item-row="${t}">

            <td>
                <select
                    class="form-select form-select-sm po-item-product"
                    required
                >
                    <option value="">
                        Select product
                    </option>

                    ${th(e.product)}
                </select>
            </td>


            <td>
                <input
                    type="number"
                    min="1"
                    class="form-control form-control-sm po-item-qty"
                    value="${Number(e.qty)||1}"
                    required
                >
            </td>


            <td>
                <input
                    type="number"
                    min="0"
                    class="form-control form-control-sm po-item-price"
                    value="${Number(e.unitPrice)||0}"
                    required
                >
            </td>


            <td class="fw-semibold po-item-subtotal">
                ${Km((Number(e.qty)||0)*(Number(e.unitPrice)||0))}
            </td>


            <td>

                <button
                    type="button"
                    class="sf-po-action"
                    title="Remove product"
                    data-remove-item="${t}"
                >
                    <i class="ri-delete-bin-line"></i>
                </button>

            </td>

        </tr>
    `).join(``))}function ch(){return[...document.querySelectorAll(`#purchaseOrderItemsBody tr`)].map(e=>({product:e.querySelector(`.po-item-product`)?.value||``,qty:Number(e.querySelector(`.po-item-qty`)?.value)||0,unitPrice:Number(e.querySelector(`.po-item-price`)?.value)||0})).filter(e=>e.product)}function lh(){let e=ch().reduce((e,t)=>e+t.qty*t.unitPrice,0),t=Number(document.querySelector(`#poDiscount`)?.value)||0,n=Number(document.querySelector(`#poTax`)?.value)||0,r=Number(document.querySelector(`#poShipping`)?.value)||0,i=Math.max(0,e-t+n+r),a=document.querySelector(`#poSummarySubtotal`),o=document.querySelector(`#poSummaryTotal`);a&&(a.textContent=Km(e)),o&&(o.textContent=Km(i)),document.querySelectorAll(`#purchaseOrderItemsBody tr`).forEach(e=>{let t=Number(e.querySelector(`.po-item-qty`)?.value)||0,n=Number(e.querySelector(`.po-item-price`)?.value)||0,r=e.querySelector(`.po-item-subtotal`);r&&(r.textContent=Km(t*n))})}function uh(){let e=document.querySelector(`#purchaseOrderForm`),t=document.querySelector(`#purchaseOrderItemsBody`);document.querySelector(`#addPurchaseOrderItem`)?.addEventListener(`click`,()=>{let e=[...document.querySelectorAll(`#purchaseOrderItemsBody tr`)].map(e=>({product:e.querySelector(`.po-item-product`)?.value||``,qty:Number(e.querySelector(`.po-item-qty`)?.value)||1,unitPrice:Number(e.querySelector(`.po-item-price`)?.value)||0}));e.push({product:``,qty:1,unitPrice:0}),sh(e),lh()}),t?.addEventListener(`input`,lh),t?.addEventListener(`change`,lh),t?.addEventListener(`click`,e=>{let n=e.target.closest(`[data-remove-item]`);if(!n)return;let r=[...t.querySelectorAll(`tr`)];r.length<=1?(r[0]?.querySelector(`.po-item-product`)&&(r[0].querySelector(`.po-item-product`).value=``),r[0]?.querySelector(`.po-item-qty`)&&(r[0].querySelector(`.po-item-qty`).value=1),r[0]?.querySelector(`.po-item-price`)&&(r[0].querySelector(`.po-item-price`).value=0)):r[Number(n.dataset.removeItem)]?.remove(),lh()}),[`#poDiscount`,`#poTax`,`#poShipping`].forEach(e=>{document.querySelector(e)?.addEventListener(`input`,lh)}),document.querySelector(`#savePurchaseOrderDraft`)?.addEventListener(`click`,()=>{dh(`Draft`)}),e?.addEventListener(`submit`,e=>{e.preventDefault(),dh(zm?void 0:`Ordered`)})}function dh(e){let t=document.querySelector(`#poSupplier`)?.value||``,n=document.querySelector(`#poOrderDate`)?.value||``,r=ch();if(!t||!n||!r.length||r.some(e=>e.qty<=0)){document.querySelector(`#purchaseOrderForm`)?.reportValidity();return}let i=zm?Lm.find(e=>e.id===zm):null,a=e||i?.status||`Draft`,o={id:zm||Date.now(),poNumber:document.querySelector(`#poNumber`)?.value||$m(),supplier:t,orderDate:n,expectedDate:document.querySelector(`#poExpectedDate`)?.value||``,status:a,discount:Number(document.querySelector(`#poDiscount`)?.value)||0,tax:Number(document.querySelector(`#poTax`)?.value)||0,shipping:Number(document.querySelector(`#poShipping`)?.value)||0,notes:document.querySelector(`#poNotes`)?.value.trim()||``,items:r};zm?Lm=Lm.map(e=>e.id===zm?o:e):Lm.unshift(o),Qm(),Rm=1,ih();let s=document.querySelector(`#purchaseOrderFormModal`);Y.default.getInstance(s)?.hide()}function fh(e){let t=Lm.find(t=>t.id===e);if(!t)return;let n=Jm(t),r=Ym(t);document.querySelector(`#purchaseOrderViewModal`)?.remove();let i=`
        <div
            class="modal fade"
            id="purchaseOrderViewModal"
            tabindex="-1"
            aria-hidden="true"
        >

            <div class="modal-dialog modal-dialog-centered modal-lg">

                <div class="modal-content sf-modal-content">

                    <!-- HEADER -->

                    <div class="modal-header sf-modal-header">

                        <div>
                            <h5 class="modal-title mb-1">
                                Purchase Order Details
                            </h5>

                            <p class="text-muted small mb-0">
                                View purchase order information
                            </p>
                        </div>


                        <div class="d-flex align-items-center gap-2">

                            <button
                                type="button"
                                class="sf-btn sf-btn-outline"
                                id="viewPurchaseOrderEdit"
                            >
                                <i class="ri-pencil-line"></i>
                                Edit
                            </button>

                            ${t.status===`Ordered`?`
                                        <button
                                            type="button"
                                            class="sf-btn sf-btn-success"
                                            id="viewPurchaseOrderReceive"
                                        >
                                            <i class="ri-checkbox-circle-line"></i>
                                            Receive
                                        </button>
                                    `:``}

                            <button
                                type="button"
                                class="sf-btn sf-btn-danger"
                                id="viewPurchaseOrderDelete"
                            >
                                <i class="ri-delete-bin-line"></i>
                                Delete
                            </button>

                            <button
                                type="button"
                                class="btn-close ms-2"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>

                        </div>

                    </div>


                    <!-- BODY -->

                    <div class="modal-body">


                        <!-- INFORMATION + SUMMARY -->

                        <div class="row g-3 mb-4">


                            <!-- INFORMATION -->

                            <div class="col-12 col-lg-7">

                                <div class="sf-po-detail-panel">

                                    <div class="sf-po-detail-row">
                                        <span>PO Number</span>
                                        <strong>
                                            ${Gm(t.poNumber)}
                                        </strong>
                                    </div>

                                    <div class="sf-po-detail-row">
                                        <span>Supplier</span>
                                        <strong>
                                            ${Gm(t.supplier)}
                                        </strong>
                                    </div>

                                    <div class="sf-po-detail-row">
                                        <span>Order Date</span>
                                        <strong>
                                            ${qm(t.orderDate)}
                                        </strong>
                                    </div>

                                    <div class="sf-po-detail-row">
                                        <span>Expected Date</span>
                                        <strong>
                                            ${qm(t.expectedDate)}
                                        </strong>
                                    </div>

                                    <div class="sf-po-detail-row">
                                        <span>Status</span>
                                        <strong>
                                            ${nh(t.status)}
                                        </strong>
                                    </div>

                                    <div class="sf-po-detail-row">
                                        <span>Notes</span>
                                        <strong>
                                            ${Gm(t.notes||`—`)}
                                        </strong>
                                    </div>

                                </div>

                            </div>


                            <!-- SUMMARY -->

                            <div class="col-12 col-lg-5">

                                <div class="sf-po-summary h-100">

                                    <div class="sf-po-summary-row">
                                        <span>Subtotal</span>
                                        <strong>
                                            ${Km(n)}
                                        </strong>
                                    </div>

                                    <div class="sf-po-summary-row">
                                        <span>Discount</span>
                                        <strong>
                                            ${Km(t.discount)}
                                        </strong>
                                    </div>

                                    <div class="sf-po-summary-row">
                                        <span>Tax</span>
                                        <strong>
                                            ${Km(t.tax)}
                                        </strong>
                                    </div>

                                    <div class="sf-po-summary-row">
                                        <span>Shipping</span>
                                        <strong>
                                            ${Km(t.shipping)}
                                        </strong>
                                    </div>

                                    <div class="sf-po-summary-row sf-po-summary-total">
                                        <span>Grand Total</span>
                                        <strong>
                                            ${Km(r)}
                                        </strong>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <!-- PRODUCTS -->

                        <div class="sf-po-view-products">

                            <h6 class="fw-semibold mb-3">
                                Products
                            </h6>

                            <div class="sf-po-product-table-wrapper">

                                <table class="table sf-po-product-table">

                                    <thead>

                                        <tr>
                                            <th>#</th>
                                            <th>Product</th>
                                            <th>Qty</th>
                                            <th>Unit Price</th>
                                            <th>Discount</th>
                                            <th>Tax</th>
                                            <th>Total</th>
                                        </tr>

                                    </thead>


                                    <tbody>

                                        ${t.items.map((e,t)=>`
                                                        <tr>

                                                            <td>
                                                                ${t+1}
                                                            </td>

                                                            <td>
                                                                ${Gm(e.product)}
                                                            </td>

                                                            <td>
                                                                ${e.qty}
                                                            </td>

                                                            <td>
                                                                ${Km(e.unitPrice)}
                                                            </td>

                                                            <td>
                                                                0%
                                                            </td>

                                                            <td>
                                                                0%
                                                            </td>

                                                            <td class="fw-semibold">
                                                                ${Km(e.qty*e.unitPrice)}
                                                            </td>

                                                        </tr>
                                                    `).join(``)}

                                    </tbody>

                                </table>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    `;document.body.insertAdjacentHTML(`beforeend`,i);let a=document.querySelector(`#purchaseOrderViewModal`),o=Y.default.getOrCreateInstance(a);Vm(a),document.querySelector(`#viewPurchaseOrderEdit`)?.addEventListener(`click`,()=>{o.hide(),setTimeout(()=>oh(t.id),150)}),document.querySelector(`#viewPurchaseOrderReceive`)?.addEventListener(`click`,()=>{t.status=`Received`,Qm(),ih(),o.hide()}),document.querySelector(`#viewPurchaseOrderDelete`)?.addEventListener(`click`,()=>{o.hide(),setTimeout(()=>ph(t.id),150)}),a.addEventListener(`hidden.bs.modal`,()=>a.remove(),{once:!0}),o.show()}function ph(e){let t=Lm.find(t=>t.id===e);if(!t)return;document.querySelector(`#purchaseOrderDeleteModal`)?.remove();let n=`
        <div
            class="modal fade"
            id="purchaseOrderDeleteModal"
            tabindex="-1"
            aria-hidden="true"
        >
            <div
                class="modal-dialog modal-dialog-centered modal-sm"
            >
                <div
                    class="modal-content border-0 shadow"
                >
                    <div
                        class="modal-body text-center p-4"
                    >

                        <div class="mb-3">
                            <i
                                class="ri-delete-bin-line fs-2 text-danger"
                            ></i>
                        </div>

                        <h5 class="fw-semibold mb-2">
                            Delete Purchase Order?
                        </h5>

                        <p class="text-muted mb-1">
                            Are you sure you want to delete
                            <strong>
                                ${Gm(t.poNumber)}
                            </strong>?
                        </p>

                        <p class="small text-muted mb-4">
                            This action cannot be undone.
                        </p>


                        <div
                            class="d-flex justify-content-center gap-2"
                        >

                            <button
                                type="button"
                                class="sf-btn sf-btn-outline"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>

                            <button
                                type="button"
                                class="sf-btn sf-btn-danger"
                                id="confirmPurchaseOrderDelete"
                            >
                                Delete
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    `;document.body.insertAdjacentHTML(`beforeend`,n);let r=document.querySelector(`#purchaseOrderDeleteModal`),i=Y.default.getOrCreateInstance(r);Vm(r),document.querySelector(`#confirmPurchaseOrderDelete`)?.addEventListener(`click`,()=>{Lm=Lm.filter(t=>t.id!==e),Qm(),ih(),i.hide()}),r.addEventListener(`hidden.bs.modal`,()=>{r.remove()},{once:!0}),i.show()}function mh(){document.querySelector(`#addPurchaseOrderButton`)?.addEventListener(`click`,()=>{oh()}),[`#purchaseOrderSearch`,`#purchaseOrderStatus`,`#purchaseOrderDate`].forEach(e=>{document.querySelector(e)?.addEventListener(`input`,()=>{Rm=1,ih()}),document.querySelector(e)?.addEventListener(`change`,()=>{Rm=1,ih()})}),document.querySelector(`#resetPurchaseOrderFilters`)?.addEventListener(`click`,()=>{document.querySelector(`#purchaseOrderSearch`).value=``,document.querySelector(`#purchaseOrderStatus`).value=``,document.querySelector(`#purchaseOrderDate`).value=``,Rm=1,ih()}),document.querySelector(`#purchaseOrderTableBody`)?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-po-action]`);if(!t)return;let n=Number(t.dataset.id),r=t.dataset.poAction;r===`view`&&fh(n),r===`edit`&&oh(n),r===`delete`&&ph(n)}),document.querySelector(`#purchaseOrderPagination`)?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-po-page]`);if(!t||t.disabled)return;let n=Number(t.dataset.poPage),r=Lm.filter(e=>{let t=document.querySelector(`#purchaseOrderSearch`)?.value.trim().toLowerCase()||``,n=document.querySelector(`#purchaseOrderStatus`)?.value||``,r=document.querySelector(`#purchaseOrderDate`)?.value||``,i=`${e.poNumber} ${e.supplier}`.toLowerCase();return(!t||i.includes(t))&&(!n||e.status===n)&&(!r||e.orderDate===r)}).length,i=Math.max(1,Math.ceil(r/Im));n>=1&&n<=i&&(Rm=n,ih())})}function hh(){return rh()}function gh(){Bm||(Zm(),Bm=!0,mh(),ih())}function _h(){document.querySelector(`#purchaseOrderFormModal`)?.remove(),document.querySelector(`#purchaseOrderViewModal`)?.remove(),document.querySelector(`#purchaseOrderDeleteModal`)?.remove(),Bm=!1,Rm=1,zm=null}var vh=`stockflow.customers`,yh=5,bh=[{id:1,name:`Northstar Retail Group`,email:`procurement@northstarretail.com`,phone:`+1 212 555 0148`,address:`245 Madison Avenue`,city:`New York`,state:`New York`,postalCode:`10016`,country:`United States`,orders:24,status:`Active`},{id:2,name:`Atlas Industrial Supply`,email:`purchasing@atlasindustrial.com`,phone:`+44 20 7946 0182`,address:`18 King Street`,city:`London`,state:`England`,postalCode:`EC2V 8AH`,country:`United Kingdom`,orders:17,status:`Active`},{id:3,name:`Pacific Trade Solutions`,email:`sales@pacifictrade.com`,phone:`+61 2 5550 0187`,address:`80 Market Street`,city:`Sydney`,state:`New South Wales`,postalCode:`2000`,country:`Australia`,orders:12,status:`Active`},{id:4,name:`Euroline Distribution GmbH`,email:`orders@euroline-distribution.de`,phone:`+49 30 5550 2190`,address:`Friedrichstrasse 120`,city:`Berlin`,state:`Berlin`,postalCode:`10117`,country:`Germany`,orders:9,status:`Inactive`},{id:5,name:`Maple Commerce Inc.`,email:`procurement@maplecommerce.ca`,phone:`+1 416 555 0193`,address:`120 King Street West`,city:`Toronto`,state:`Ontario`,postalCode:`M5H 1J9`,country:`Canada`,orders:21,status:`Active`},{id:6,name:`Sakura Business Solutions`,email:`contact@sakurabusiness.jp`,phone:`+81 3 5550 1842`,address:`2-8-1 Marunouchi`,city:`Tokyo`,state:`Tokyo`,postalCode:`100-0005`,country:`Japan`,orders:15,status:`Active`},{id:7,name:`BluePeak Wholesale`,email:`orders@bluepeakwholesale.com`,phone:`+1 312 555 0176`,address:`350 North Clark Street`,city:`Chicago`,state:`Illinois`,postalCode:`60654`,country:`United States`,orders:28,status:`Active`},{id:8,name:`Alpine Equipment AG`,email:`sales@alpineequipment.ch`,phone:`+41 44 555 0128`,address:`Bahnhofstrasse 45`,city:`Zurich`,state:`Zurich`,postalCode:`8001`,country:`Switzerland`,orders:8,status:`Active`},{id:9,name:`Meridian Trading Pte. Ltd.`,email:`procurement@meridiantrading.sg`,phone:`+65 6555 0194`,address:`10 Raffles Place`,city:`Singapore`,state:`Singapore`,postalCode:`048616`,country:`Singapore`,orders:19,status:`Inactive`}],xh=[],Sh=1,Ch=null,wh=null;function Th(e){return String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}function Eh(){try{let e=localStorage.getItem(vh);if(e){let t=JSON.parse(e);if(Array.isArray(t)){xh=t;return}}}catch(e){console.warn(`Unable to load StockFlow customers.`,e)}xh=[...bh],Dh()}function Dh(){localStorage.setItem(vh,JSON.stringify(xh))}function Oh(e){return e===`Active`?`success`:`danger`}function kh(e){return String(e).split(/\s+/).filter(Boolean).slice(0,2).map(e=>e[0]).join(``).toUpperCase()}function Ah(){return{search:document.querySelector(`#customersSearch`),status:document.querySelector(`#customersStatus`),reset:document.querySelector(`#resetCustomersFilters`),add:document.querySelector(`#addCustomerButton`),tableBody:document.querySelector(`#customersTableBody`),results:document.querySelector(`#customersResultsInfo`),pagination:document.querySelector(`#customersPagination`),form:document.querySelector(`#customerForm`),modal:document.querySelector(`#customerModal`),modalTitle:document.querySelector(`#customerModalTitle`),submit:document.querySelector(`#customerSubmitButton`),fields:{name:document.querySelector(`#customerName`),email:document.querySelector(`#customerEmail`),phone:document.querySelector(`#customerPhone`),address:document.querySelector(`#customerAddress`),city:document.querySelector(`#customerCity`),state:document.querySelector(`#customerState`),postalCode:document.querySelector(`#customerPostalCode`),country:document.querySelector(`#customerCountry`),status:document.querySelector(`#customerStatus`)}}}function jh(){let e=Ah(),t=e.search?.value.trim().toLowerCase()||``,n=e.status?.value||``;return xh.filter(e=>{let r=[e.name,e.email,e.phone,e.city,e.state].join(` `).toLowerCase();return(!t||r.includes(t))&&(!n||e.status===n)})}function Mh(e){return`
        <span class="sf-status-badge sf-status-${Oh(e)}">
            ${Th(e)}
        </span>
    `}function Nh(e){return`
        <div class="sf-action-group">

            <button
                type="button"
                class="sf-action-text"
                data-customer-view="${e.id}"
                aria-label="View customer"
                title="View"
            >
                View
            </button>

            <button
                type="button"
                class="sf-icon-btn"
                data-customer-edit="${e.id}"
                aria-label="Edit customer"
                title="Edit"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4 11.5-11.5Z"></path>
                </svg>
            </button>

            <button
                type="button"
                class="sf-icon-btn sf-icon-btn-danger"
                data-customer-delete="${e.id}"
                aria-label="Delete customer"
                title="Delete"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path d="M3 6h18"></path>
                    <path d="M8 6V4h8v2"></path>
                    <path d="M19 6l-1 15H6L5 6"></path>
                    <path d="M10 11v6"></path>
                    <path d="M14 11v6"></path>
                </svg>
            </button>

        </div>
    `}function Ph(e){let t=Ah();if(!t.pagination)return;let n=`
        <button
            type="button"
            class="sf-pagination-btn"
            data-page="${Sh-1}"
            ${Sh===1?`disabled`:``}
            aria-label="Previous page"
        >
            <span>‹</span>
        </button>
    `;for(let t=1;t<=e;t++)n+=`
            <button
                type="button"
                class="sf-pagination-btn ${t===Sh?`active`:``}"
                data-page="${t}"
            >
                ${t}
            </button>
        `;n+=`
        <button
            type="button"
            class="sf-pagination-btn"
            data-page="${Sh+1}"
            ${Sh===e?`disabled`:``}
            aria-label="Next page"
        >
            <span>›</span>
        </button>
    `,t.pagination.innerHTML=n}function Fh(){let e=Ah();if(!e.tableBody)return;let t=jh(),n=Math.max(1,Math.ceil(t.length/yh));Sh>n&&(Sh=n);let r=(Sh-1)*yh,i=t.slice(r,r+yh);i.length?e.tableBody.innerHTML=i.map(e=>`
                    <tr>

                        <td>
                            <div class="sf-customer-cell">

                                <span class="sf-avatar">
                                    ${Th(kh(e.name))}
                                </span>

                                <div>
                                    <strong>
                                        ${Th(e.name)}
                                    </strong>

                                    <small>
                                        ${Th(e.city)}
                                    </small>
                                </div>

                            </div>
                        </td>

                        <td>
                            ${Th(e.email)}
                        </td>

                        <td>
                            ${Th(e.phone)}
                        </td>

                        <td>
                            ${e.orders}
                        </td>

                        <td>
                            ${Mh(e.status)}
                        </td>

                        <td>
                            ${Nh(e)}
                        </td>

                    </tr>
                `).join(``):e.tableBody.innerHTML=`
            <tr>
                <td
                    colspan="6"
                    class="sf-empty-state"
                >
                    No customers found.
                </td>
            </tr>
        `;let a=t.length?r+1:0,o=Math.min(r+i.length,t.length);e.results.textContent=`Showing ${a} to ${o} of ${t.length} customers`,Ph(n)}function Ih(){document.querySelector(`#customerModal`)||document.body.insertAdjacentHTML(`beforeend`,`
        <div
            class="modal fade"
            id="customerModal"
            tabindex="-1"
            aria-hidden="true"
        >
            <div
                class="modal-dialog modal-md modal-dialog-centered"
            >

                <div class="modal-content sf-customer-modal">

                    <div class="modal-header">

                        <div>
                            <h5
                                class="modal-title"
                                id="customerModalTitle"
                            >
                                Add Customer
                            </h5>

                            <p class="sf-modal-subtitle">
                                Add customer contact and address information.
                            </p>
                        </div>

                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>

                    </div>

                    <form id="customerForm">

                        <div class="modal-body">

                            <div class="row g-3">

                                <div class="col-12">

                                    <label
                                        class="sf-form-label"
                                        for="customerName"
                                    >
                                        Customer Name
                                        <span>*</span>
                                    </label>

                                    <input
                                        id="customerName"
                                        class="sf-form-control"
                                        type="text"
                                        placeholder="Enter customer name"
                                        required
                                    >

                                </div>

                                <div class="col-12 col-md-6">

                                    <label
                                        class="sf-form-label"
                                        for="customerEmail"
                                    >
                                        Email
                                    </label>

                                    <input
                                        id="customerEmail"
                                        class="sf-form-control"
                                        type="email"
                                        placeholder="Enter email address"
                                    >

                                </div>

                                <div class="col-12 col-md-6">

                                    <label
                                        class="sf-form-label"
                                        for="customerPhone"
                                    >
                                        Phone
                                    </label>

                                    <input
                                        id="customerPhone"
                                        class="sf-form-control"
                                        type="text"
                                        placeholder="Enter phone number"
                                    >

                                </div>

                                <div class="col-12">

                                    <label
                                        class="sf-form-label"
                                        for="customerAddress"
                                    >
                                        Address
                                    </label>

                                    <textarea
                                        id="customerAddress"
                                        class="sf-form-control"
                                        rows="2"
                                        placeholder="Enter address"
                                    ></textarea>

                                </div>

                                <div class="col-12 col-md-6">

                                    <label
                                        class="sf-form-label"
                                        for="customerCity"
                                    >
                                        City
                                    </label>

                                    <input
                                        id="customerCity"
                                        class="sf-form-control"
                                        type="text"
                                        placeholder="Enter city"
                                    >

                                </div>

                                <div class="col-12 col-md-6">

                                    <label
                                        class="sf-form-label"
                                        for="customerState"
                                    >
                                        State / Province
                                    </label>

                                    <input
                                        id="customerState"
                                        class="sf-form-control"
                                        type="text"
                                        placeholder="Enter state or province"
                                    >

                                </div>

                                <div class="col-12 col-md-6">

                                    <label
                                        class="sf-form-label"
                                        for="customerPostalCode"
                                    >
                                        Postal Code
                                    </label>

                                    <input
                                        id="customerPostalCode"
                                        class="sf-form-control"
                                        type="text"
                                        placeholder="Enter postal code"
                                    >

                                </div>

                                <div class="col-12 col-md-6">

                                    <label
                                        class="sf-form-label"
                                        for="customerCountry"
                                    >
                                        Country
                                    </label>

                                    <select
                                        id="customerCountry"
                                        class="sf-form-control"
                                    >
                                        <option value="Indonesia">
                                            Indonesia
                                        </option>

                                        <option value="Singapore">
                                            Singapore
                                        </option>

                                        <option value="Malaysia">
                                            Malaysia
                                        </option>

                                        <option value="Other">
                                            Other
                                        </option>
                                    </select>

                                </div>

                                <div class="col-12 col-md-6">

                                    <label
                                        class="sf-form-label"
                                        for="customerStatus"
                                    >
                                        Status
                                    </label>

                                    <select
                                        id="customerStatus"
                                        class="sf-form-control"
                                    >
                                        <option value="Active">
                                            Active
                                        </option>

                                        <option value="Inactive">
                                            Inactive
                                        </option>
                                    </select>

                                </div>

                            </div>

                        </div>

                        <div class="modal-footer">

                            <button
                                type="button"
                                class="sf-btn sf-btn-outline"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                class="sf-add-btn"
                                id="customerSubmitButton"
                            >
                                Save Customer
                            </button>

                        </div>

                    </form>

                </div>

            </div>
        </div>
        `)}function Lh(){document.querySelector(`#customerViewModal`)||document.body.insertAdjacentHTML(`beforeend`,`
        <div
            class="modal fade"
            id="customerViewModal"
            tabindex="-1"
            aria-hidden="true"
        >

            <div
                class="modal-dialog modal-md modal-dialog-centered"
            >

                <div class="modal-content sf-customer-modal">

                    <div class="modal-header">

                        <h5 class="modal-title">
                            Customer Details
                        </h5>

                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>

                    </div>

                    <div
                        class="modal-body"
                        id="customerViewContent"
                    ></div>

                    <div class="modal-footer">

                        <button
                            type="button"
                            class="sf-btn sf-btn-outline"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>

                    </div>

                </div>

            </div>

        </div>
        `)}function Rh(){document.querySelector(`#customerDeleteModal`)||document.body.insertAdjacentHTML(`beforeend`,`
        <div
            class="modal fade"
            id="customerDeleteModal"
            tabindex="-1"
            aria-hidden="true"
        >

            <div
                class="modal-dialog modal-sm modal-dialog-centered"
            >

                <div class="modal-content sf-delete-modal">

                    <div class="modal-body text-center">

                        <div class="sf-delete-icon">

                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.8"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M3 6h18"></path>
                                <path d="M8 6V4h8v2"></path>
                                <path d="M19 6l-1 15H6L5 6"></path>
                                <path d="M10 11v6"></path>
                                <path d="M14 11v6"></path>
                            </svg>

                        </div>

                        <h5>
                            Delete Customer
                        </h5>

                        <p id="customerDeleteText">
                            Are you sure?
                        </p>

                        <div class="sf-delete-actions">

                            <button
                                type="button"
                                class="sf-btn sf-btn-outline"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>

                            <button
                                type="button"
                                class="sf-btn sf-btn-danger"
                                id="confirmCustomerDelete"
                            >
                                Delete
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
        `)}function zh(){[`customerModal`,`customerViewModal`,`customerDeleteModal`].forEach(e=>{let t=document.querySelector(`#${e}`);t&&t.addEventListener(`hide.bs.modal`,()=>{let e=document.activeElement;e&&t.contains(e)&&e.blur()})})}function Bh(e=null){Ih();let t=Ah(),n=Y.default.getOrCreateInstance(t.modal),r=t.fields;Ch=e?.id??null,t.modalTitle.textContent=e?`Edit Customer`:`Add Customer`,t.submit.textContent=e?`Update Customer`:`Save Customer`,Object.entries(r).forEach(([t,n])=>{n&&(n.value=e?.[t]??(t===`country`?`Indonesia`:t===`status`?`Active`:``))}),n.show()}function Vh(e){Lh();let t=document.querySelector(`#customerViewContent`);t.innerHTML=`
        <div class="sf-customer-profile">

            <div class="sf-avatar sf-avatar-lg">
                ${Th(kh(e.name))}
            </div>

            <div>

                <h5>
                    ${Th(e.name)}
                </h5>

                ${Mh(e.status)}

            </div>

        </div>

        <div class="sf-detail-list">

            <div>
                <span>Email</span>
                <strong>
                    ${Th(e.email||`—`)}
                </strong>
            </div>

            <div>
                <span>Phone</span>
                <strong>
                    ${Th(e.phone||`—`)}
                </strong>
            </div>

            <div>
                <span>Address</span>
                <strong>
                    ${Th(e.address||`—`)}
                </strong>
            </div>

            <div>
                <span>Location</span>
                <strong>
                    ${Th([e.city,e.state,e.postalCode].filter(Boolean).join(`, `)||`—`)}
                </strong>
            </div>

            <div>
                <span>Country</span>
                <strong>
                    ${Th(e.country||`—`)}
                </strong>
            </div>

            <div>
                <span>Total Orders</span>
                <strong>
                    ${e.orders}
                </strong>
            </div>

        </div>
    `,Y.default.getOrCreateInstance(document.querySelector(`#customerViewModal`)).show()}function Hh(e){Rh(),wh=e.id,document.querySelector(`#customerDeleteText`).textContent=`Are you sure you want to delete "${e.name}"? This action cannot be undone.`,Y.default.getOrCreateInstance(document.querySelector(`#customerDeleteModal`)).show()}function Uh(e){e.preventDefault();let t=Ah(),n=t.fields,r=n.name.value.trim();if(!r){n.name.focus();return}if(xh.some(e=>e.name.toLowerCase()===r.toLowerCase()&&e.id!==Ch)){alert(`Customer name already exists.`),n.name.focus();return}let i={id:Ch??Date.now(),name:r,email:n.email.value.trim(),phone:n.phone.value.trim(),address:n.address.value.trim(),city:n.city.value.trim(),state:n.state.value.trim(),postalCode:n.postalCode.value.trim(),country:n.country.value,status:n.status.value};if(Ch){let e=xh.find(e=>e.id===Ch);e&&Object.assign(e,i)}else i.orders=0,xh.unshift(i);Dh(),Sh=1,Fh(),Y.default.getInstance(t.modal)?.hide(),Ch=null}function Wh(){wh&&=(xh=xh.filter(e=>e.id!==wh),Dh(),Sh=1,Fh(),Y.default.getInstance(document.querySelector(`#customerDeleteModal`))?.hide(),null)}function Gh(){let e=Ah();e.search?.addEventListener(`input`,()=>{Sh=1,Fh()}),e.status?.addEventListener(`change`,()=>{Sh=1,Fh()}),e.reset?.addEventListener(`click`,()=>{e.search.value=``,e.status.value=``,Sh=1,Fh()}),e.add?.addEventListener(`click`,()=>{Bh()}),e.form?.addEventListener(`submit`,Uh),e.tableBody?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-customer-view]`),n=e.target.closest(`[data-customer-edit]`),r=e.target.closest(`[data-customer-delete]`);if(t){let e=xh.find(e=>e.id===Number(t.dataset.customerView));e&&Vh(e)}if(n){let e=xh.find(e=>e.id===Number(n.dataset.customerEdit));e&&Bh(e)}if(r){let e=xh.find(e=>e.id===Number(r.dataset.customerDelete));e&&Hh(e)}}),e.pagination?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-page]`);if(!t||t.disabled)return;let n=Number(t.dataset.page),r=Math.max(1,Math.ceil(jh().length/yh));n<1||n>r||(Sh=n,Fh())}),document.querySelector(`#confirmCustomerDelete`)?.addEventListener(`click`,Wh)}function Kh(){return`
        <div class="container-fluid customers-module">

            <div
                class="d-flex flex-column flex-md-row
                       align-items-md-center
                       justify-content-between
                       gap-3 mb-4"
            >

                <div>

                    <h1 class="h3 mb-1">
                        Customers
                    </h1>

                    <p class="text-muted mb-0">
                        Manage your customers and customer information.
                    </p>

                </div>

                <button
                    type="button"
                    class="sf-add-btn"
                    id="addCustomerButton"
                >

                    <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M12 5v14"></path>
                        <path d="M5 12h14"></path>
                    </svg>

                    <span>
                        Add Customer
                    </span>

                </button>

            </div>

            <section
                class="sf-customers-filter sf-card mb-2"
            >

                <div class="row g-3">

                    <div class="col-12 col-lg-5">

                        <label
                            class="sf-form-label"
                            for="customersSearch"
                        >
                            Search
                        </label>

                        <input
                            type="search"
                            id="customersSearch"
                            class="sf-form-control"
                            placeholder="Search customers..."
                        >

                    </div>

                    <div
                        class="col-12 col-md-6 col-lg-2"
                    >

                        <label
                            class="sf-form-label"
                            for="customersStatus"
                        >
                            Status
                        </label>

                        <select
                            id="customersStatus"
                            class="sf-form-control"
                        >

                            <option value="">
                                All Status
                            </option>

                            <option value="Active">
                                Active
                            </option>

                            <option value="Inactive">
                                Inactive
                            </option>

                        </select>

                    </div>

                    <div
                        class="col-12 col-md-6 col-lg-3
                               d-flex align-items-end"
                    >

                        <button
                            type="button"
                            id="resetCustomersFilters"
                            class="sf-btn sf-btn-outline"
                        >
                            Reset Filters
                        </button>

                    </div>

                </div>

            </section>

            <section
                class="sf-customers-table-card sf-card"
            >

                <div class="px-3 pt-3 pb-2">

                    <h5 class="mb-1">
                        Customer List
                    </h5>

                    <p class="text-muted mb-0 small">
                        Review and manage your customer records.
                    </p>

                </div>

                <div
                    class="sf-customers-table-wrap"
                >

                    <table
                        class="table sf-customers-table align-middle"
                    >

                        <thead>

                            <tr>

                                <th>
                                    Customer
                                </th>

                                <th>
                                    Email
                                </th>

                                <th>
                                    Phone
                                </th>

                                <th>
                                    Orders
                                </th>

                                <th>
                                    Status
                                </th>

                                <th class="text-end">
                                    Actions
                                </th>

                            </tr>

                        </thead>

                        <tbody
                            id="customersTableBody"
                        ></tbody>

                    </table>

                </div>

                <div
                    class="sf-customers-footer"
                >

                    <div
                        class="text-muted small"
                        id="customersResultsInfo"
                    >
                        Showing 0 to 0 of 0 customers
                    </div>

                    <div
                        class="sf-pagination"
                        id="customersPagination"
                    ></div>

                </div>

            </section>

        </div>
    `}function qh(){Eh(),Ih(),Lh(),Rh(),zh(),Gh(),Fh()}function Jh(){Ch=null,wh=null,Sh=1,[`customerModal`,`customerViewModal`,`customerDeleteModal`].forEach(e=>{let t=document.querySelector(`#${e}`);t&&(Y.default.getInstance(t)?.hide(),t.remove())})}var Yh=`stockflow.orders`,Xh=5,Zh=[],$=1,Qh=null,$h=!1,eg=null,tg=[`Global Mart`,`Northstar Retail`,`Apex Supplies`,`Summit Trading`,`Bright Stores`,`Vertex Market`,`Urban Supply`,`Prime Retail`],ng=[{name:`Wireless Mouse`,sku:`WM-001`,price:25e4},{name:`Mechanical Keyboard`,sku:`MK-002`,price:85e4},{name:`USB-C Cable`,sku:`UC-003`,price:12e4},{name:`Laptop Stand`,sku:`LS-004`,price:45e4},{name:`Office Chair`,sku:`OC-005`,price:175e4},{name:`Desk Lamp`,sku:`DL-006`,price:35e4},{name:`Notebook A5`,sku:`NB-007`,price:45e3},{name:`Ballpoint Pen`,sku:`BP-008`,price:15e3}],rg=[{id:1,orderNumber:`ORD-1008`,customer:`Global Mart`,orderDate:`2026-09-15`,status:`Completed`,discount:0,notes:`Urgent delivery.`,items:[{product:`Wireless Mouse`,qty:2,unitPrice:12e4},{product:`USB-C Cable`,qty:1,unitPrice:8e4},{product:`Laptop Stand`,qty:1,unitPrice:35e4},{product:`Monitor 24"`,qty:1,unitPrice:57e4}]},{id:2,orderNumber:`ORD-1007`,customer:`Northstar Retail`,orderDate:`2026-09-14`,status:`Processing`,discount:0,notes:`Prepare for dispatch.`,items:[{product:`Mechanical Keyboard`,qty:1,unitPrice:68e4},{product:`Wireless Mouse`,qty:1,unitPrice:0}]},{id:3,orderNumber:`ORD-1006`,customer:`Apex Supplies`,orderDate:`2026-09-13`,status:`Pending`,discount:1e5,notes:``,items:[{product:`Office Chair`,qty:2,unitPrice:9e5},{product:`Desk Lamp`,qty:2,unitPrice:175e3},{product:`Notebook A5`,qty:2,unitPrice:5e4}]},{id:4,orderNumber:`ORD-1005`,customer:`Summit Trading`,orderDate:`2026-09-12`,status:`Cancelled`,discount:0,notes:`Cancelled by customer.`,items:[{product:`Laptop Stand`,qty:2,unitPrice:46e4},{product:`USB-C Cable`,qty:1,unitPrice:0}]},{id:5,orderNumber:`ORD-1004`,customer:`Bright Stores`,orderDate:`2026-09-11`,status:`Completed`,discount:0,notes:`Delivered successfully.`,items:[{product:`Office Chair`,qty:2,unitPrice:75e4},{product:`Desk Lamp`,qty:1,unitPrice:28e4},{product:`Notebook A5`,qty:2,unitPrice:5e4}]},{id:6,orderNumber:`ORD-1003`,customer:`Vertex Market`,orderDate:`2026-09-10`,status:`Processing`,discount:0,notes:``,items:[{product:`Mechanical Keyboard`,qty:1,unitPrice:5e5},{product:`USB-C Cable`,qty:1,unitPrice:4e4}]},{id:7,orderNumber:`ORD-1002`,customer:`Urban Supply`,orderDate:`2026-09-09`,status:`Completed`,discount:0,notes:`Standard delivery.`,items:[{product:`Office Chair`,qty:2,unitPrice:9e5},{product:`Laptop Stand`,qty:2,unitPrice:44e4},{product:`Wireless Mouse`,qty:3,unitPrice:0}]},{id:8,orderNumber:`ORD-1001`,customer:`Prime Retail`,orderDate:`2026-09-08`,status:`Pending`,discount:0,notes:`Awaiting confirmation.`,items:[{product:`Wireless Mouse`,qty:2,unitPrice:22e4},{product:`Notebook A5`,qty:2,unitPrice:5e4}]}];function ig(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function ag(e){return new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`,maximumFractionDigits:0}).format(Number(e)||0)}function og(e){return e?new Intl.DateTimeFormat(`en-US`,{month:`short`,day:`2-digit`,year:`numeric`}).format(new Date(`${e}T00:00:00`)):`—`}function sg(e){return(e.items||[]).reduce((e,t)=>e+Number(t.qty||0)*Number(t.unitPrice||0),0)}function cg(e){return Math.max(0,sg(e)-Number(e.discount||0))}function lg(e){return{Pending:`sf-order-status-pending`,Processing:`sf-order-status-processing`,Completed:`sf-order-status-completed`,Cancelled:`sf-order-status-cancelled`}[e]||`sf-order-status-pending`}function ug(e){return`
        <span class="sf-order-status ${lg(e)}">
            ${ig(e)}
        </span>
    `}function dg(){let e=localStorage.getItem(Yh);if(e)try{Zh=JSON.parse(e);return}catch{}Zh=structuredClone(rg),fg()}function fg(){localStorage.setItem(Yh,JSON.stringify(Zh))}function pg(){let e=Zh.reduce((e,t)=>{let n=String(t.orderNumber).match(/(\d+)$/);return Math.max(e,n?Number(n[1]):0)},0);return`ORD-${String(e+1).padStart(4,`0`)}`}function mg(e=``){return tg.map(t=>`
                <option
                    value="${ig(t)}"
                    ${t===e?`selected`:``}
                >
                    ${ig(t)}
                </option>
            `).join(``)}function hg(e=``){return ng.map(t=>`
                <option
                    value="${ig(t.name)}"
                    ${t.name===e?`selected`:``}
                >
                    ${ig(t.name)}
                </option>
            `).join(``)}function gg(){return{search:document.querySelector(`#ordersSearch`),customer:document.querySelector(`#ordersCustomer`),status:document.querySelector(`#ordersStatus`),date:document.querySelector(`#ordersDate`),reset:document.querySelector(`#resetOrdersFilters`),add:document.querySelector(`#addOrderButton`),tableBody:document.querySelector(`#ordersTableBody`),results:document.querySelector(`#ordersResultsInfo`),pagination:document.querySelector(`#ordersPagination`)}}function _g(){let e=gg(),t=e.search?.value.trim().toLowerCase()||``,n=e.customer?.value||``,r=e.status?.value||``,i=e.date?.value||``;return Zh.filter(e=>{let a=`
            ${e.orderNumber}
            ${e.customer}
        `.toLowerCase();return(!t||a.includes(t))&&(!n||e.customer===n)&&(!r||e.status===r)&&(!i||e.orderDate===i)})}function vg(){let e=gg();if(!e.tableBody)return;let t=_g(),n=Math.max(1,Math.ceil(t.length/Xh));$=Math.min($,n);let r=($-1)*Xh,i=t.slice(r,r+Xh);i.length?e.tableBody.innerHTML=i.map(e=>`
                        <tr>
                            <td>
                                <button
                                    type="button"
                                    class="btn btn-link p-0 sf-order-number"
                                    data-order-action="view"
                                    data-id="${e.id}"
                                >
                                    ${ig(e.orderNumber)}
                                </button>
                            </td>

                            <td>
                                ${ig(e.customer)}
                            </td>

                            <td>
                                ${og(e.orderDate)}
                            </td>

                            <td class="sf-order-items">
                                ${e.items.length}
                            </td>

                            <td>
                                ${ag(cg(e))}
                            </td>

                            <td>
                                ${ug(e.status)}
                            </td>

                            <td>
                                <div class="sf-order-actions">
                                    <button
                                        type="button"
                                        class="sf-order-action"
                                        title="View"
                                        data-order-action="view"
                                        data-id="${e.id}"
                                    >
                                        View
                                    </button>

                                    <button
                                        type="button"
                                        class="sf-order-action"
                                        title="Edit"
                                        data-order-action="edit"
                                        data-id="${e.id}"
                                    >
                                        <i class="ri-pencil-line"></i>
                                    </button>

                                    <button
                                        type="button"
                                        class="sf-order-action"
                                        title="Delete"
                                        data-order-action="delete"
                                        data-id="${e.id}"
                                    >
                                        <i class="ri-delete-bin-line"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    `).join(``):e.tableBody.innerHTML=`
            <tr>
                <td
                    colspan="8"
                    class="text-center py-5 text-muted"
                >
                    No orders found.
                </td>
            </tr>
        `,e.results&&(e.results.textContent=t.length?`Showing ${r+1} to ${Math.min(r+i.length,t.length)} of ${t.length} results`:`Showing 0 results`),yg(n)}function yg(e){let t=document.querySelector(`#ordersPagination`);if(!t)return;let n=`
        <button
            type="button"
            class="btn btn-sm btn-light"
            data-order-page="${$-1}"
            ${$===1?`disabled`:``}
        >
            <i class="ri-arrow-left-s-line"></i>
        </button>
    `;for(let t=1;t<=e;t+=1)n+=`
            <button
                type="button"
                class="btn btn-sm ${t===$?`btn-primary`:`btn-light`}"
                data-order-page="${t}"
            >
                ${t}
            </button>
        `;n+=`
        <button
            type="button"
            class="btn btn-sm btn-light"
            data-order-page="${$+1}"
            ${$===e?`disabled`:``}
        >
            <i class="ri-arrow-right-s-line"></i>
        </button>
    `,t.innerHTML=n}function bg(e=null){Qh=e;let t=e?Zh.find(t=>t.id===e):null,n=`
        <div
            class="modal fade"
            id="orderFormModal"
            tabindex="-1"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content sf-modal-content">

                    <div class="modal-header sf-modal-header">
                        <div>
                            <h5 class="modal-title mb-1">
                                ${e?`Edit Order`:`Add Order`}
                            </h5>

                            <p class="text-muted small mb-0">
                                ${e?`Update order information.`:`Create a new customer order.`}
                            </p>
                        </div>

                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>

                    <form id="orderForm">

                        <div class="modal-body">

                            <div class="row g-3 mb-1">

                                <div class="col-12 col-md-4">
                                    <label class="sf-form-label">
                                        Order Number
                                    </label>

                                    <input
                                        type="text"
                                        class="sf-form-control"
                                        id="orderNumber"
                                        value="${ig(t?.orderNumber||pg())}"
                                        readonly
                                    >
                                </div>

                                <div class="col-12 col-md-4">
                                    <label
                                        class="sf-form-label"
                                        for="orderCustomer"
                                    >
                                        Customer
                                        <span class="text-danger">*</span>
                                    </label>

                                    <select
                                        class="sf-form-control"
                                        id="orderCustomer"
                                        required
                                    >
                                        <option value="">
                                            Select customer
                                        </option>

                                        ${mg(t?.customer||``)}
                                    </select>
                                </div>

                                <div class="col-12 col-md-4">
                                    <label
                                        class="sf-form-label"
                                        for="orderDate"
                                    >
                                        Order Date
                                        <span class="text-danger">*</span>
                                    </label>

                                    <input
                                        type="date"
                                        class="sf-form-control"
                                        id="orderDate"
                                        value="${t?.orderDate||new Date().toISOString().slice(0,10)}"
                                        required
                                    >
                                </div>

                            </div>

                            <div class="mb-4">

                                <div class="d-flex align-items-center justify-content-between mb-2">

                                    <h6 class="fw-semibold mb-0">
                                        Order Items
                                    </h6>

                                    <button
                                        type="button"
                                        class="sf-btn sf-btn-outline btn-sm"
                                        id="addOrderItem"
                                    >
                                        <i class="ri-add-line"></i>
                                        Add Item
                                    </button>

                                </div>

                                <div class="sf-order-product-table-wrapper">

                                    <table class="table sf-order-product-table">

                                        <thead>
                                            <tr>
                                                <th style="width:34%">
                                                    Product
                                                </th>

                                                <th style="width:12%">
                                                    Qty
                                                </th>

                                                <th style="width:18%">
                                                    Unit Price
                                                </th>

                                                <th style="width:18%">
                                                    Total
                                                </th>

                                                <th style="width:10%">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody id="orderItemsBody"></tbody>

                                    </table>

                                </div>

                            </div>

                            <div class="row g-4">

                                <div class="col-12 col-lg-7">

                                    <label
                                        class="sf-form-label"
                                        for="orderNotes"
                                    >
                                        Notes
                                    </label>

                                    <textarea
                                        class="sf-form-control"
                                        id="orderNotes"
                                        rows="4"
                                        placeholder="Add notes (optional)..."
                                    >${ig(t?.notes||``)}</textarea>

                                </div>

                                <div class="col-12 col-lg-5">

                                    <div class="sf-order-summary">

                                        <div class="sf-order-summary-row">
                                            <span>Subtotal</span>

                                            <strong id="orderSummarySubtotal">
                                                $0
                                            </strong>
                                        </div>

                                        <div class="sf-order-summary-row">

                                            <span>Discount</span>

                                            <input
                                                type="number"
                                                min="0"
                                                class="form-control form-control-sm text-end"
                                                id="orderDiscount"
                                                value="${Number(t?.discount||0)}"
                                            >

                                        </div>

                                        <div class="sf-order-summary-row sf-order-summary-total">

                                            <span>Total</span>

                                            <strong id="orderSummaryTotal">
                                                $0
                                            </strong>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div class="modal-footer">

                            <button
                                type="button"
                                class="sf-btn sf-btn-outline"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                class="sf-btn sf-btn-primary"
                            >
                                ${e?`Update Order`:`Save Order`}
                            </button>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    `;document.querySelector(`#orderFormModal`)?.remove(),document.body.insertAdjacentHTML(`beforeend`,n);let r=document.querySelector(`#orderFormModal`);r?.addEventListener(`hide.bs.modal`,()=>{let e=document.activeElement;e&&r.contains(e)&&e.blur()});let i=Y.default.getOrCreateInstance(r);xg(t?.items?.length?t.items:[{product:``,qty:1,unitPrice:0}]),wg(),Cg(),i.show()}function xg(e){let t=document.querySelector(`#orderItemsBody`);t&&(t.innerHTML=e.map((e,t)=>`
                <tr data-item-row="${t}">

                    <td>
                        <select
                            class="form-select form-select-sm order-item-product"
                            required
                        >
                            <option value="">
                                Select product
                            </option>

                            ${hg(e.product)}
                        </select>
                    </td>

                    <td>
                        <input
                            type="number"
                            min="1"
                            class="form-control form-control-sm order-item-qty"
                            value="${Number(e.qty)||1}"
                            required
                        >
                    </td>

                    <td>
                        <input
                            type="number"
                            min="0"
                            class="form-control form-control-sm order-item-price"
                            value="${Number(e.unitPrice)||0}"
                            required
                        >
                    </td>

                    <td class="fw-semibold order-item-subtotal">
                        ${ag((Number(e.qty)||0)*(Number(e.unitPrice)||0))}
                    </td>

                    <td>
                        <button
                            type="button"
                            class="sf-order-action"
                            title="Remove item"
                            data-remove-order-item="${t}"
                        >
                            <i class="ri-delete-bin-line"></i>
                        </button>
                    </td>

                </tr>
            `).join(``))}function Sg(){return[...document.querySelectorAll(`#orderItemsBody tr`)].map(e=>({product:e.querySelector(`.order-item-product`)?.value||``,qty:Number(e.querySelector(`.order-item-qty`)?.value)||0,unitPrice:Number(e.querySelector(`.order-item-price`)?.value)||0}))}function Cg(){let e=Sg().reduce((e,t)=>e+t.qty*t.unitPrice,0),t=Number(document.querySelector(`#orderDiscount`)?.value)||0,n=Math.max(0,e-t);document.querySelector(`#orderSummarySubtotal`).textContent=ag(e),document.querySelector(`#orderSummaryTotal`).textContent=ag(n),document.querySelectorAll(`#orderItemsBody tr`).forEach(e=>{let t=Number(e.querySelector(`.order-item-qty`)?.value)||0,n=Number(e.querySelector(`.order-item-price`)?.value)||0,r=e.querySelector(`.order-item-subtotal`);r&&(r.textContent=ag(t*n))})}function wg(){let e=document.querySelector(`#orderForm`),t=document.querySelector(`#orderItemsBody`);document.querySelector(`#addOrderItem`)?.addEventListener(`click`,()=>{let e=Sg();e.push({product:``,qty:1,unitPrice:0}),xg(e),Cg()}),t?.addEventListener(`input`,Cg),t?.addEventListener(`change`,Cg),t?.addEventListener(`click`,e=>{let n=e.target.closest(`[data-remove-order-item]`);if(!n)return;let r=[...t.querySelectorAll(`tr`)];r.length<=1?(r[0].querySelector(`.order-item-product`).value=``,r[0].querySelector(`.order-item-qty`).value=1,r[0].querySelector(`.order-item-price`).value=0):r[Number(n.dataset.removeOrderItem)]?.remove(),Cg()}),document.querySelector(`#orderDiscount`)?.addEventListener(`input`,Cg),e?.addEventListener(`submit`,Tg)}function Tg(e){e.preventDefault();let t=document.querySelector(`#orderCustomer`)?.value||``,n=document.querySelector(`#orderDate`)?.value||``,r=Sg();if(!t||!n||!r.length||r.some(e=>e.qty<=0)){document.querySelector(`#orderForm`)?.reportValidity();return}let i=Qh?Zh.find(e=>e.id===Qh):null,a={id:Qh||Date.now(),orderNumber:document.querySelector(`#orderNumber`)?.value||pg(),customer:t,orderDate:n,status:i?.status||`Pending`,discount:Number(document.querySelector(`#orderDiscount`)?.value)||0,notes:document.querySelector(`#orderNotes`)?.value.trim()||``,items:r};Qh?Zh=Zh.map(e=>e.id===Qh?a:e):Zh.unshift(a),fg(),$=1,vg();let o=document.querySelector(`#orderFormModal`);Y.default.getInstance(o)?.hide(),Qh=null}function Eg(e){let t=Zh.find(t=>t.id===e);if(!t)return;let n=sg(t),r=cg(t);document.querySelector(`#orderViewModal`)?.remove();let i=`
        <div
            class="modal fade"
            id="orderViewModal"
            tabindex="-1"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered">

                <div class="modal-content sf-modal-content">

                    <div class="modal-header sf-modal-header">

                        <div>
                            <h5 class="modal-title mb-1">
                                Order Details
                            </h5>

                            <p class="text-muted small mb-0">
                                ${ig(t.orderNumber)}
                            </p>
                        </div>

                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>

                    </div>

                    <div class="modal-body">

                        <div class="d-flex flex-row justify-content-between align-items-center gap-2 mb-2">

                            <div>
                                <div class="text-muted small mb-1">
                                    Status
                                </div>

                                ${ug(t.status)}
                            </div>

                            <div class="d-flex gap-2 justify-content-end">

                                <button
                                    type="button"
                                    class="sf-btn sf-btn-outline"
                                    id="viewOrderEdit"
                                >
                                    <i class="ri-pencil-line"></i>
                                    Edit
                                </button>

                                <button
                                    type="button"
                                    class="sf-btn sf-btn-danger"
                                    id="viewOrderDelete"
                                >
                                    <i class="ri-delete-bin-line"></i>
                                    Delete
                                </button>

                            </div>

                        </div>

                        <div class="sf-order-detail-grid gap-2 mb-1">

                            <div class="sf-order-detail-item">
                                <span>Order</span>
                                <strong>
                                    ${ig(t.orderNumber)}
                                </strong>
                            </div>

                            <div class="sf-order-detail-item">
                                <span>Customer</span>
                                <strong>
                                    ${ig(t.customer)}
                                </strong>
                            </div>

                            <div class="sf-order-detail-item">
                                <span>Order Date</span>
                                <strong>
                                    ${og(t.orderDate)}
                                </strong>
                            </div>

                            <div class="sf-order-detail-item">
                                <span>Status</span>
                                <strong>
                                    ${ug(t.status)}
                                </strong>
                            </div>

                        </div>

                        <h6 class="fw-semibold mb-2">
                            Order Items
                        </h6>

                        <div class="sf-order-product-table-wrapper mb-3">

                            <table class="table sf-order-product-table">

                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Product</th>
                                        <th>Qty</th>
                                        <th>Unit Price</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    ${t.items.map((e,t)=>`
                                                <tr>

                                                    <td>
                                                        ${t+1}
                                                    </td>

                                                    <td>
                                                        ${ig(e.product)}
                                                    </td>

                                                    <td>
                                                        ${e.qty}
                                                    </td>

                                                    <td>
                                                        ${ag(e.unitPrice)}
                                                    </td>

                                                    <td>
                                                        ${ag(e.qty*e.unitPrice)}
                                                    </td>

                                                </tr>
                                            `).join(``)}
                                </tbody>

                            </table>

                        </div>

                        <div class="row g-2">

                            <div class="col-12 col-lg-7">

                                <div class="sf-order-detail-item h-100">

                                    <span>
                                        Notes
                                    </span>

                                    <strong>
                                        ${ig(t.notes||`—`)}
                                    </strong>

                                </div>

                            </div>

                            <div class="col-12 col-lg-5">

                                <div class="sf-order-summary">

                                    <div class="sf-order-summary-row">
                                        <span>Subtotal</span>
                                        <strong>
                                            ${ag(n)}
                                        </strong>
                                    </div>

                                    <div class="sf-order-summary-row">
                                        <span>Discount</span>
                                        <strong>
                                            ${ag(t.discount)}
                                        </strong>
                                    </div>

                                    <div class="sf-order-summary-row sf-order-summary-total">
                                        <span>Total</span>
                                        <strong>
                                            ${ag(r)}
                                        </strong>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="modal-footer">

                        <button
                            type="button"
                            class="sf-btn sf-btn-outline"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>

                    </div>

                </div>

            </div>
        </div>
    `;document.body.insertAdjacentHTML(`beforeend`,i);let a=document.querySelector(`#orderViewModal`);a?.addEventListener(`hide.bs.modal`,()=>{let e=document.activeElement;e&&a.contains(e)&&e.blur()});let o=Y.default.getOrCreateInstance(a);document.querySelector(`#viewOrderEdit`)?.addEventListener(`click`,()=>{o.hide(),setTimeout(()=>bg(t.id),150)}),document.querySelector(`#viewOrderDelete`)?.addEventListener(`click`,()=>{o.hide(),setTimeout(()=>Dg(t.id),150)}),a.addEventListener(`hidden.bs.modal`,()=>a.remove(),{once:!0}),o.show()}function Dg(e){let t=Zh.find(t=>t.id===e);if(!t)return;eg=e,document.querySelector(`#orderDeleteModal`)?.remove();let n=`
        <div
            class="modal fade"
            id="orderDeleteModal"
            tabindex="-1"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered modal-sm">

                <div class="modal-content border-0 shadow">

                    <div class="modal-body text-center p-4">

                        <div class="sf-delete-icon mb-3">
                            <i class="ri-delete-bin-line"></i>
                        </div>

                        <h5 class="fw-semibold mb-2">
                            Delete Order?
                        </h5>

                        <p class="text-muted mb-1">
                            Are you sure you want to delete
                            <strong>
                                ${ig(t.orderNumber)}
                            </strong>?
                        </p>

                        <p class="small text-muted mb-4">
                            This action cannot be undone.
                        </p>

                        <div class="d-flex justify-content-center gap-2">

                            <button
                                type="button"
                                class="sf-btn sf-btn-outline"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>

                            <button
                                type="button"
                                class="sf-btn sf-btn-danger"
                                id="confirmOrderDelete"
                            >
                                Delete
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    `;document.body.insertAdjacentHTML(`beforeend`,n);let r=document.querySelector(`#orderDeleteModal`);r?.addEventListener(`hide.bs.modal`,()=>{let e=document.activeElement;e&&r.contains(e)&&e.blur()});let i=Y.default.getOrCreateInstance(r);document.querySelector(`#confirmOrderDelete`)?.addEventListener(`click`,()=>{eg&&(Zh=Zh.filter(e=>e.id!==eg),fg(),$=1,vg(),eg=null,i.hide())}),r.addEventListener(`hidden.bs.modal`,()=>r.remove(),{once:!0}),i.show()}function Og(){let e=gg();e.add?.addEventListener(`click`,()=>bg()),e.search?.addEventListener(`input`,()=>{$=1,vg()}),e.customer?.addEventListener(`change`,()=>{$=1,vg()}),e.status?.addEventListener(`change`,()=>{$=1,vg()}),e.date?.addEventListener(`input`,()=>{$=1,vg()}),e.date?.addEventListener(`change`,()=>{$=1,vg()}),e.reset?.addEventListener(`click`,()=>{e.search&&(e.search.value=``),e.customer&&(e.customer.value=``),e.status&&(e.status.value=``),e.date&&(e.date.value=``),$=1,vg()}),e.tableBody?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-order-action]`);if(!t)return;let n=Number(t.dataset.id),r=t.dataset.orderAction;r===`view`&&Eg(n),r===`edit`&&bg(n),r===`delete`&&Dg(n)}),e.pagination?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-order-page]`);if(!t||t.disabled)return;let n=Number(t.dataset.orderPage),r=_g().length,i=Math.max(1,Math.ceil(r/Xh));n>=1&&n<=i&&($=n,vg())})}function kg(){return`
        <div class="container-fluid">

            <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mb-4">

                <div>
                    <h1 class="h3 mb-1">
                        Orders
                    </h1>

                    <p class="text-muted mb-0">
                        Manage customer orders and track their status.
                    </p>
                </div>

                <button
                    type="button"
                    class="sf-add-btn"
                    id="addOrderButton"
                >
                    <i class="ri-add-line"></i>
                    <span>Add Order</span>
                </button>

            </div>

            <section class="sf-card sf-orders-filter mb-2">

                <div class="row g-3 align-items-end">

                    <div class="col-12 col-lg-4">

                        <label
                            for="ordersSearch"
                            class="sf-form-label"
                        >
                            Search
                        </label>

                        <input
                            type="search"
                            id="ordersSearch"
                            class="sf-form-control"
                            placeholder="Search order or customer..."
                        >

                    </div>

                    <div class="col-12 col-md-6 col-lg-3">

                        <label
                            for="ordersCustomer"
                            class="sf-form-label"
                        >
                            Customer
                        </label>

                        <select
                            id="ordersCustomer"
                            class="sf-form-control"
                        >
                            <option value="">
                                All Customers
                            </option>

                            ${mg()}
                        </select>

                    </div>

                    <div class="col-12 col-md-6 col-lg-2">

                        <label
                            for="ordersStatus"
                            class="sf-form-label"
                        >
                            Status
                        </label>

                        <select
                            id="ordersStatus"
                            class="sf-form-control"
                        >
                            <option value="">
                                All Status
                            </option>

                            <option value="Pending">
                                Pending
                            </option>

                            <option value="Processing">
                                Processing
                            </option>

                            <option value="Completed">
                                Completed
                            </option>

                            <option value="Cancelled">
                                Cancelled
                            </option>
                        </select>

                    </div>

                    <div class="col-12 col-md-6 col-lg-2">

                        <label
                            for="ordersDate"
                            class="sf-form-label"
                        >
                            Order Date
                        </label>

                        <input
                            type="date"
                            id="ordersDate"
                            class="sf-form-control"
                        >

                    </div>

                    <div class="col-12 col-md-6 col-lg-1">

                        <button
                            type="button"
                            class="sf-btn sf-btn-outline"
                            id="resetOrdersFilters"
                        >
                            Reset
                        </button>

                    </div>

                </div>

            </section>

            <section class="sf-card sf-orders-table-card">

                <div class="sf-orders-table-wrapper">

                    <table class="table sf-table sf-orders-table mb-0">

                        <thead>
                            <tr>

                                <th>Order</th>

                                <th>Customer</th>

                                <th>Order Date</th>

                                <th>Items</th>

                                <th>Total</th>

                                <th>Status</th>

                                <th class="text-end">
                                    Actions
                                </th>

                            </tr>
                        </thead>

                        <tbody id="ordersTableBody"></tbody>

                    </table>

                </div>

                <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 px-3 py-3 border-top">

                    <div
                        class="small text-muted"
                        id="ordersResultsInfo"
                    ></div>

                    <div
                        class="d-flex gap-1"
                        id="ordersPagination"
                    ></div>

                </div>

            </section>

        </div>
    `}function Ag(){$h||(dg(),$h=!0,Og(),vg())}function jg(){document.querySelector(`#orderFormModal`)?.remove(),document.querySelector(`#orderViewModal`)?.remove(),document.querySelector(`#orderDeleteModal`)?.remove(),$h=!1,$=1,Qh=null,eg=null}function Mg(){let e=document.querySelector(`#app`),t=window.location.hash.replace(`#`,``)||`dashboard`;if(t===`products`){ju(),e.innerHTML=f(ku()),p(),u(),Au();return}if(t===`categories`){od(),e.innerHTML=f(id()),p(),u(),ad();return}if(t===`stock-overview`){Ad(),e.innerHTML=f(Od()),p(),u(),kd();return}if(t===`stock-in`){nf(),e.innerHTML=f(ef()),p(),u(),tf();return}if(t===`stock-out`){kf(),e.innerHTML=f(Df()),p(),u(),Of();return}if(t===`stock-adjustments`){Xf(),e.innerHTML=f(qf()),p(),u(),Yf();return}if(t===`transfers`){Yp(),e.innerHTML=f(qp()),p(),u(),Jp();return}if(t===`stock-movement`){lm(),e.innerHTML=f(nm()),p(),u(),cm();return}if(t===`suppliers`){Pm(),e.innerHTML=f(Dm()),p(),u(),Mm();return}if(t===`purchase-orders`){_h(),e.innerHTML=f(hh()),p(),u(),gh();return}if(t===`customers`){Jh(),e.innerHTML=f(Kh()),p(),u(),qh();return}if(t===`orders`){jg(),e.innerHTML=f(kg()),p(),u(),Ag();return}e.innerHTML=lu(),uu()}Mg(),window.addEventListener(`hashchange`,()=>{Mg()});
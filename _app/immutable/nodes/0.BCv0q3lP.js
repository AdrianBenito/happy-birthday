import"../chunks/NZTpNUN0.js";import{i as oi}from"../chunks/DYFihylS.js";import{q as ii,v as si,p as ni,a6 as ri,j as ai,k as li,l as ci}from"../chunks/CtjoK27x.js";function ui(t,e,o,i,s){ii&&si();var n=e.$$slots?.[o],r=!1;n===!0&&(n=e.children,r=!0),n===void 0||n(t,r?()=>i:i)}const di=!0,Fn=Object.freeze(Object.defineProperty({__proto__:null,prerender:di},Symbol.toStringTag,{value:"Module"}));var ke="";function Ce(t){ke=t}function hi(t=""){if(!ke){const e=[...document.getElementsByTagName("script")],o=e.find(i=>i.hasAttribute("data-shoelace"));if(o)Ce(o.getAttribute("data-shoelace"));else{const i=e.find(n=>/shoelace(\.min)?\.js($|\?)/.test(n.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(n.src));let s="";i&&(s=i.getAttribute("src")),Ce(s.split("/").slice(0,-1).join("/"))}}return ke.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Ao=Object.defineProperty,pi=Object.defineProperties,fi=Object.getOwnPropertyDescriptor,mi=Object.getOwnPropertyDescriptors,Qe=Object.getOwnPropertySymbols,bi=Object.prototype.hasOwnProperty,gi=Object.prototype.propertyIsEnumerable,be=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Re=t=>{throw TypeError(t)},to=(t,e,o)=>e in t?Ao(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,wt=(t,e)=>{for(var o in e||(e={}))bi.call(e,o)&&to(t,o,e[o]);if(Qe)for(var o of Qe(e))gi.call(e,o)&&to(t,o,e[o]);return t},le=(t,e)=>pi(t,mi(e)),u=(t,e,o,i)=>{for(var s=i>1?void 0:i?fi(e,o):e,n=t.length-1,r;n>=0;n--)(r=t[n])&&(s=(i?r(e,o,s):r(s))||s);return i&&s&&Ao(e,o,s),s},Eo=(t,e,o)=>e.has(t)||Re("Cannot "+o),vi=(t,e,o)=>(Eo(t,e,"read from private field"),e.get(t)),yi=(t,e,o)=>e.has(t)?Re("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),wi=(t,e,o,i)=>(Eo(t,e,"write to private field"),e.set(t,o),o),_i=function(t,e){this[0]=t,this[1]=e},xi=t=>{var e=t[be("asyncIterator")],o=!1,i,s={};return e==null?(e=t[be("iterator")](),i=n=>s[n]=r=>e[n](r)):(e=e.call(t),i=n=>s[n]=r=>{if(o){if(o=!1,n==="throw")throw r;return r}return o=!0,{done:!1,value:new _i(new Promise(a=>{var l=e[n](r);l instanceof Object||Re("Object expected"),a(l)}),1)}}),s[be("iterator")]=()=>s,i("next"),"throw"in e?i("throw"):s.throw=n=>{throw n},"return"in e&&i("return"),s};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt=globalThis,ze=Xt.ShadowRoot&&(Xt.ShadyCSS===void 0||Xt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Me=Symbol(),eo=new WeakMap;let So=class{constructor(e,o,i){if(this._$cssResult$=!0,i!==Me)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=o}get styleSheet(){let e=this.o;const o=this.t;if(ze&&e===void 0){const i=o!==void 0&&o.length===1;i&&(e=eo.get(o)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&eo.set(o,e))}return e}toString(){return this.cssText}};const $i=t=>new So(typeof t=="string"?t:t+"",void 0,Me),Y=(t,...e)=>{const o=t.length===1?t[0]:e.reduce((i,s,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1],t[0]);return new So(o,t,Me)},ki=(t,e)=>{if(ze)t.adoptedStyleSheets=e.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of e){const i=document.createElement("style"),s=Xt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=o.cssText,t.appendChild(i)}},oo=ze?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let o="";for(const i of e.cssRules)o+=i.cssText;return $i(o)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ci,defineProperty:Ai,getOwnPropertyDescriptor:Ei,getOwnPropertyNames:Si,getOwnPropertySymbols:Pi,getPrototypeOf:Li}=Object,ce=globalThis,io=ce.trustedTypes,Oi=io?io.emptyScript:"",Ti=ce.reactiveElementPolyfillSupport,Bt=(t,e)=>t,te={toAttribute(t,e){switch(e){case Boolean:t=t?Oi:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=t!==null;break;case Number:o=t===null?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}}return o}},De=(t,e)=>!Ci(t,e),so={attribute:!0,type:String,converter:te,reflect:!1,useDefault:!1,hasChanged:De};Symbol.metadata??=Symbol("metadata"),ce.litPropertyMetadata??=new WeakMap;let xt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,o=so){if(o.state&&(o.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((o=Object.create(o)).wrapped=!0),this.elementProperties.set(e,o),!o.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,o);s!==void 0&&Ai(this.prototype,e,s)}}static getPropertyDescriptor(e,o,i){const{get:s,set:n}=Ei(this.prototype,e)??{get(){return this[o]},set(r){this[o]=r}};return{get:s,set(r){const a=s?.call(this);n?.call(this,r),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??so}static _$Ei(){if(this.hasOwnProperty(Bt("elementProperties")))return;const e=Li(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Bt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Bt("properties"))){const o=this.properties,i=[...Si(o),...Pi(o)];for(const s of i)this.createProperty(s,o[s])}const e=this[Symbol.metadata];if(e!==null){const o=litPropertyMetadata.get(e);if(o!==void 0)for(const[i,s]of o)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[o,i]of this.elementProperties){const s=this._$Eu(o,i);s!==void 0&&this._$Eh.set(s,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const o=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)o.unshift(oo(s))}else e!==void 0&&o.push(oo(e));return o}static _$Eu(e,o){const i=o.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,o=this.constructor.elementProperties;for(const i of o.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ki(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,o,i){this._$AK(e,i)}_$ET(e,o){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const n=(i.converter?.toAttribute!==void 0?i.converter:te).toAttribute(o,i.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,o){const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),r=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:te;this._$Em=s;const a=r.fromAttribute(o,n.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(e,o,i){if(e!==void 0){const s=this.constructor,n=this[e];if(i??=s.getPropertyOptions(e),!((i.hasChanged??De)(n,o)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,i))))return;this.C(e,o,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,o,{useDefault:i,reflect:s,wrapped:n},r){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??o??this[e]),n!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(o=void 0),this._$AL.set(e,o)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,n]of i){const{wrapped:r}=n,a=this[s];r!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,n,a)}}let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(o)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(o)}willUpdate(e){}_$AE(e){this._$EO?.forEach(o=>o.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(o=>this._$ET(o,this[o])),this._$EM()}updated(e){}firstUpdated(e){}};xt.elementStyles=[],xt.shadowRootOptions={mode:"open"},xt[Bt("elementProperties")]=new Map,xt[Bt("finalized")]=new Map,Ti?.({ReactiveElement:xt}),(ce.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ne=globalThis,ee=Ne.trustedTypes,no=ee?ee.createPolicy("lit-html",{createHTML:t=>t}):void 0,Po="$lit$",nt=`lit$${Math.random().toFixed(9).slice(2)}$`,Lo="?"+nt,Ri=`<${Lo}>`,bt=document,Vt=()=>bt.createComment(""),Ht=t=>t===null||typeof t!="object"&&typeof t!="function",Be=Array.isArray,zi=t=>Be(t)||typeof t?.[Symbol.iterator]=="function",ge=`[ 	
\f\r]`,Tt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ro=/-->/g,ao=/>/g,dt=RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lo=/'/g,co=/"/g,Oo=/^(?:script|style|textarea|title)$/i,Mi=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),R=Mi(1),gt=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),uo=new WeakMap,mt=bt.createTreeWalker(bt,129);function To(t,e){if(!Be(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return no!==void 0?no.createHTML(e):e}const Di=(t,e)=>{const o=t.length-1,i=[];let s,n=e===2?"<svg>":e===3?"<math>":"",r=Tt;for(let a=0;a<o;a++){const l=t[a];let c,d,h=-1,m=0;for(;m<l.length&&(r.lastIndex=m,d=r.exec(l),d!==null);)m=r.lastIndex,r===Tt?d[1]==="!--"?r=ro:d[1]!==void 0?r=ao:d[2]!==void 0?(Oo.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=dt):d[3]!==void 0&&(r=dt):r===dt?d[0]===">"?(r=s??Tt,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?dt:d[3]==='"'?co:lo):r===co||r===lo?r=dt:r===ro||r===ao?r=Tt:(r=dt,s=void 0);const f=r===dt&&t[a+1].startsWith("/>")?" ":"";n+=r===Tt?l+Ri:h>=0?(i.push(c),l.slice(0,h)+Po+l.slice(h)+nt+f):l+nt+(h===-2?a:f)}return[To(t,n+(t[o]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class Ut{constructor({strings:e,_$litType$:o},i){let s;this.parts=[];let n=0,r=0;const a=e.length-1,l=this.parts,[c,d]=Di(e,o);if(this.el=Ut.createElement(c,i),mt.currentNode=this.el.content,o===2||o===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=mt.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(Po)){const m=d[r++],f=s.getAttribute(h).split(nt),b=/([.?@])?(.*)/.exec(m);l.push({type:1,index:n,name:b[2],strings:f,ctor:b[1]==="."?Bi:b[1]==="?"?Fi:b[1]==="@"?Ii:ue}),s.removeAttribute(h)}else h.startsWith(nt)&&(l.push({type:6,index:n}),s.removeAttribute(h));if(Oo.test(s.tagName)){const h=s.textContent.split(nt),m=h.length-1;if(m>0){s.textContent=ee?ee.emptyScript:"";for(let f=0;f<m;f++)s.append(h[f],Vt()),mt.nextNode(),l.push({type:2,index:++n});s.append(h[m],Vt())}}}else if(s.nodeType===8)if(s.data===Lo)l.push({type:2,index:n});else{let h=-1;for(;(h=s.data.indexOf(nt,h+1))!==-1;)l.push({type:7,index:n}),h+=nt.length-1}n++}}static createElement(e,o){const i=bt.createElement("template");return i.innerHTML=e,i}}function At(t,e,o=t,i){if(e===gt)return e;let s=i!==void 0?o._$Co?.[i]:o._$Cl;const n=Ht(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(t),s._$AT(t,o,i)),i!==void 0?(o._$Co??=[])[i]=s:o._$Cl=s),s!==void 0&&(e=At(t,s._$AS(t,e.values),s,i)),e}class Ni{constructor(e,o){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:o},parts:i}=this._$AD,s=(e?.creationScope??bt).importNode(o,!0);mt.currentNode=s;let n=mt.nextNode(),r=0,a=0,l=i[0];for(;l!==void 0;){if(r===l.index){let c;l.type===2?c=new jt(n,n.nextSibling,this,e):l.type===1?c=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(c=new Vi(n,this,e)),this._$AV.push(c),l=i[++a]}r!==l?.index&&(n=mt.nextNode(),r++)}return mt.currentNode=bt,s}p(e){let o=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,o),o+=i.strings.length-2):i._$AI(e[o])),o++}}class jt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,o,i,s){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=o,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&e?.nodeType===11&&(e=o.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,o=this){e=At(this,e,o),Ht(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==gt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):zi(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==A&&Ht(this._$AH)?this._$AA.nextSibling.data=e:this.T(bt.createTextNode(e)),this._$AH=e}$(e){const{values:o,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Ut.createElement(To(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(o);else{const n=new Ni(s,this),r=n.u(this.options);n.p(o),this.T(r),this._$AH=n}}_$AC(e){let o=uo.get(e.strings);return o===void 0&&uo.set(e.strings,o=new Ut(e)),o}k(e){Be(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let i,s=0;for(const n of e)s===o.length?o.push(i=new jt(this.O(Vt()),this.O(Vt()),this,this.options)):i=o[s],i._$AI(n),s++;s<o.length&&(this._$AR(i&&i._$AB.nextSibling,s),o.length=s)}_$AR(e=this._$AA.nextSibling,o){for(this._$AP?.(!1,!0,o);e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class ue{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,o,i,s,n){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=o,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=A}_$AI(e,o=this,i,s){const n=this.strings;let r=!1;if(n===void 0)e=At(this,e,o,0),r=!Ht(e)||e!==this._$AH&&e!==gt,r&&(this._$AH=e);else{const a=e;let l,c;for(e=n[0],l=0;l<n.length-1;l++)c=At(this,a[i+l],o,l),c===gt&&(c=this._$AH[l]),r||=!Ht(c)||c!==this._$AH[l],c===A?e=A:e!==A&&(e+=(c??"")+n[l+1]),this._$AH[l]=c}r&&!s&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Bi extends ue{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}}class Fi extends ue{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}}class Ii extends ue{constructor(e,o,i,s,n){super(e,o,i,s,n),this.type=5}_$AI(e,o=this){if((e=At(this,e,o,0)??A)===gt)return;const i=this._$AH,s=e===A&&i!==A||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==A&&(i===A||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Vi{constructor(e,o,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=o,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){At(this,e)}}const Hi=Ne.litHtmlPolyfillSupport;Hi?.(Ut,jt),(Ne.litHtmlVersions??=[]).push("3.3.1");const Ui=(t,e,o)=>{const i=o?.renderBefore??e;let s=i._$litPart$;if(s===void 0){const n=o?.renderBefore??null;i._$litPart$=s=new jt(e.insertBefore(Vt(),n),n,void 0,o??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fe=globalThis;let Ft=class extends xt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ui(o,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return gt}};Ft._$litElement$=!0,Ft.finalized=!0,Fe.litElementHydrateSupport?.({LitElement:Ft});const Wi=Fe.litElementPolyfillSupport;Wi?.({LitElement:Ft});(Fe.litElementVersions??=[]).push("4.2.1");var ji=Y`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const Ae=new Set,$t=new Map;let ht,Ie="ltr",Ve="en";const Ro=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Ro){const t=new MutationObserver(Mo);Ie=document.documentElement.dir||"ltr",Ve=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function zo(...t){t.map(e=>{const o=e.$code.toLowerCase();$t.has(o)?$t.set(o,Object.assign(Object.assign({},$t.get(o)),e)):$t.set(o,e),ht||(ht=e)}),Mo()}function Mo(){Ro&&(Ie=document.documentElement.dir||"ltr",Ve=document.documentElement.lang||navigator.language),[...Ae.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let qi=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ae.add(this.host)}hostDisconnected(){Ae.delete(this.host)}dir(){return`${this.host.dir||Ie}`.toLowerCase()}lang(){return`${this.host.lang||Ve}`.toLowerCase()}getTranslationData(e){var o,i;const s=new Intl.Locale(e.replace(/_/g,"-")),n=s?.language.toLowerCase(),r=(i=(o=s?.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&i!==void 0?i:"",a=$t.get(`${n}-${r}`),l=$t.get(n);return{locale:s,language:n,region:r,primary:a,secondary:l}}exists(e,o){var i;const{primary:s,secondary:n}=this.getTranslationData((i=o.lang)!==null&&i!==void 0?i:this.lang());return o=Object.assign({includeFallback:!1},o),!!(s&&s[e]||n&&n[e]||o.includeFallback&&ht&&ht[e])}term(e,...o){const{primary:i,secondary:s}=this.getTranslationData(this.lang());let n;if(i&&i[e])n=i[e];else if(s&&s[e])n=s[e];else if(ht&&ht[e])n=ht[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof n=="function"?n(...o):n}date(e,o){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),o).format(e)}number(e,o){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),o).format(e)}relativeTime(e,o,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,o)}};var Do={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};zo(Do);var Ki=Do,St=class extends qi{};zo(Ki);var et=Y`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gi={attribute:!0,type:String,converter:te,reflect:!1,hasChanged:De},Yi=(t=Gi,e,o)=>{const{kind:i,metadata:s}=o;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),n.set(o.name,t),i==="accessor"){const{name:r}=o;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(r,l,t)},init(a){return a!==void 0&&this.C(r,void 0,t,a),a}}}if(i==="setter"){const{name:r}=o;return function(a){const l=this[r];e.call(this,a),this.requestUpdate(r,l,t)}}throw Error("Unsupported decorator location: "+i)};function p(t){return(e,o)=>typeof o=="object"?Yi(t,e,o):((i,s,n)=>{const r=s.hasOwnProperty(n);return s.constructor.createProperty(n,i),r?Object.getOwnPropertyDescriptor(s,n):void 0})(t,e,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function de(t){return p({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xi=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function z(t,e){return(o,i,s)=>{const n=r=>r.renderRoot?.querySelector(t)??null;return Xi(o,i,{get(){return n(this)}})}}var Zt,M=class extends Ft{constructor(){super(),yi(this,Zt,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const o=new CustomEvent(t,wt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){const i=customElements.get(t);if(!i){try{customElements.define(t,e,o)}catch{customElements.define(t,class extends e{},o)}return}let s=" (unknown version)",n=s;"version"in e&&e.version&&(s=" v"+e.version),"version"in i&&i.version&&(n=" v"+i.version),!(s&&n&&s===n)&&console.warn(`Attempted to register <${t}>${s}, but <${t}>${n} has already been registered.`)}attributeChangedCallback(t,e,o){vi(this,Zt)||(this.constructor.elementProperties.forEach((i,s)=>{i.reflect&&this[s]!=null&&this.initialReflectedProperties.set(s,this[s])}),wi(this,Zt,!0)),super.attributeChangedCallback(t,e,o)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,o)=>{t.has(o)&&this[o]==null&&(this[o]=e)})}};Zt=new WeakMap;M.version="2.20.1";M.dependencies={};u([p()],M.prototype,"dir",2);u([p()],M.prototype,"lang",2);var He=class extends M{constructor(){super(...arguments),this.localize=new St(this)}render(){return R`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};He.styles=[et,ji];var Rt=new WeakMap,zt=new WeakMap,Mt=new WeakMap,ve=new WeakSet,Kt=new WeakMap,Zi=class{constructor(t,e){this.handleFormData=o=>{const i=this.options.disabled(this.host),s=this.options.name(this.host),n=this.options.value(this.host),r=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!r&&typeof s=="string"&&s.length>0&&typeof n<"u"&&(Array.isArray(n)?n.forEach(a=>{o.formData.append(s,a.toString())}):o.formData.append(s,n.toString()))},this.handleFormSubmit=o=>{var i;const s=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=Rt.get(this.form))==null||i.forEach(r=>{this.setUserInteracted(r,!0)})),this.form&&!this.form.noValidate&&!s&&!n(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Kt.set(this.host,[])},this.handleInteraction=o=>{const i=Kt.get(this.host);i.includes(o.type)||i.push(o.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const i of o)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const i of o)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=wt({form:o=>{const i=o.form;if(i){const n=o.getRootNode().querySelector(`#${i}`);if(n)return n}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var i;return(i=o.disabled)!=null?i:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,i)=>o.value=i,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Kt.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Kt.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Rt.has(this.form)?Rt.get(this.form).add(this.host):Rt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),zt.has(this.form)||(zt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Mt.has(this.form)||(Mt.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=Rt.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),zt.has(this.form)&&(this.form.reportValidity=zt.get(this.form),zt.delete(this.form)),Mt.has(this.form)&&(this.form.checkValidity=Mt.get(this.form),Mt.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?ve.add(t):ve.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&o.setAttribute(i,e.getAttribute(i))})),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=!!ve.has(e),i=!!e.required;e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},Ue=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(le(wt({},Ue),{valid:!1,valueMissing:!0}));Object.freeze(le(wt({},Ue),{valid:!1,customError:!0}));var Ji=Y`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,We=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=o=>{const i=o.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Qi(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let o="";return[...e].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(o+=i.textContent)}),o}var ts={name:"default",resolver:t=>hi(`assets/icons/${t}.svg`)},es=ts,ho={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},os={name:"system",resolver:t=>t in ho?`data:image/svg+xml,${encodeURIComponent(ho[t])}`:""},is=os,ss=[es,is],Ee=[];function ns(t){Ee.push(t)}function rs(t){Ee=Ee.filter(e=>e!==t)}function po(t){return ss.find(e=>e.name===t)}var as=Y`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function ct(t,e){const o=wt({waitUntilFirstUpdate:!1},e);return(i,s)=>{const{update:n}=i,r=Array.isArray(t)?t:[t];i.update=function(a){r.forEach(l=>{const c=l;if(a.has(c)){const d=a.get(c),h=this[c];d!==h&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[s](d,h)}}),n.call(this,a)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ls=(t,e)=>t?._$litType$!==void 0,cs=t=>t.strings===void 0;var Dt=Symbol(),Gt=Symbol(),ye,we=new Map,F=class extends M{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var o;let i;if(e?.spriteSheet)return this.svg=R`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?Dt:Gt}catch{return Gt}try{const s=document.createElement("div");s.innerHTML=await i.text();const n=s.firstElementChild;if(((o=n?.tagName)==null?void 0:o.toLowerCase())!=="svg")return Dt;ye||(ye=new DOMParser);const a=ye.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):Dt}catch{return Dt}}connectedCallback(){super.connectedCallback(),ns(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),rs(this)}getIconSource(){const t=po(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:o}=this.getIconSource(),i=o?po(this.library):void 0;if(!e){this.svg=null;return}let s=we.get(e);if(s||(s=this.resolveIcon(e,i),we.set(e,s)),!this.initialRender)return;const n=await s;if(n===Gt&&we.delete(e),e===this.getIconSource().url){if(ls(n)){if(this.svg=n,i){await this.updateComplete;const r=this.shadowRoot.querySelector("[part='svg']");typeof i.mutator=="function"&&r&&i.mutator(r)}return}switch(n){case Gt:case Dt:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),(t=i?.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};F.styles=[et,as];u([de()],F.prototype,"svg",2);u([p({reflect:!0})],F.prototype,"name",2);u([p()],F.prototype,"src",2);u([p()],F.prototype,"label",2);u([p({reflect:!0})],F.prototype,"library",2);u([ct("label")],F.prototype,"handleLabelChange",1);u([ct(["name","src","library"])],F.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const No={ATTRIBUTE:1,CHILD:2},Bo=t=>(...e)=>({_$litDirective$:t,values:e});let Fo=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,i){this._$Ct=e,this._$AM=o,this._$Ci=i}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=Bo(class extends Fo{constructor(t){if(super(t),t.type!==No.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}const o=t.element.classList;for(const i of this.st)i in e||(o.remove(i),this.st.delete(i));for(const i in e){const s=!!e[i];s===this.st.has(i)||this.nt?.has(i)||(s?(o.add(i),this.st.add(i)):(o.remove(i),this.st.delete(i)))}return gt}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Io=Symbol.for(""),us=t=>{if(t?.r===Io)return t?._$litStatic$},oe=(t,...e)=>({_$litStatic$:e.reduce((o,i,s)=>o+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[s+1],t[0]),r:Io}),fo=new Map,ds=t=>(e,...o)=>{const i=o.length;let s,n;const r=[],a=[];let l,c=0,d=!1;for(;c<i;){for(l=e[c];c<i&&(n=o[c],(s=us(n))!==void 0);)l+=s+e[++c],d=!0;c!==i&&a.push(n),r.push(l),c++}if(c===i&&r.push(e[i]),d){const h=r.join("$$lit$$");(e=fo.get(h))===void 0&&(r.raw=r,fo.set(h,e=r)),o=a}return t(e,...o)},Jt=ds(R);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=t=>t??A;var _=class extends M{constructor(){super(...arguments),this.formControlController=new Zi(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new We(this,"[default]","prefix","suffix"),this.localize=new St(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Ue}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?oe`a`:oe`button`;return Jt`
      <${e}
        part="base"
        class=${vt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${C(t?void 0:this.disabled)}
        type=${C(t?void 0:this.type)}
        title=${this.title}
        name=${C(t?void 0:this.name)}
        value=${C(t?void 0:this.value)}
        href=${C(t&&!this.disabled?this.href:void 0)}
        target=${C(t?this.target:void 0)}
        download=${C(t?this.download:void 0)}
        rel=${C(t?this.rel:void 0)}
        role=${C(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Jt` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Jt`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};_.styles=[et,Ji];_.dependencies={"sl-icon":F,"sl-spinner":He};u([z(".button")],_.prototype,"button",2);u([de()],_.prototype,"hasFocus",2);u([de()],_.prototype,"invalid",2);u([p()],_.prototype,"title",2);u([p({reflect:!0})],_.prototype,"variant",2);u([p({reflect:!0})],_.prototype,"size",2);u([p({type:Boolean,reflect:!0})],_.prototype,"caret",2);u([p({type:Boolean,reflect:!0})],_.prototype,"disabled",2);u([p({type:Boolean,reflect:!0})],_.prototype,"loading",2);u([p({type:Boolean,reflect:!0})],_.prototype,"outline",2);u([p({type:Boolean,reflect:!0})],_.prototype,"pill",2);u([p({type:Boolean,reflect:!0})],_.prototype,"circle",2);u([p()],_.prototype,"type",2);u([p()],_.prototype,"name",2);u([p()],_.prototype,"value",2);u([p()],_.prototype,"href",2);u([p()],_.prototype,"target",2);u([p()],_.prototype,"rel",2);u([p()],_.prototype,"download",2);u([p()],_.prototype,"form",2);u([p({attribute:"formaction"})],_.prototype,"formAction",2);u([p({attribute:"formenctype"})],_.prototype,"formEnctype",2);u([p({attribute:"formmethod"})],_.prototype,"formMethod",2);u([p({attribute:"formnovalidate",type:Boolean})],_.prototype,"formNoValidate",2);u([p({attribute:"formtarget"})],_.prototype,"formTarget",2);u([ct("disabled",{waitUntilFirstUpdate:!0})],_.prototype,"handleDisabledChange",1);_.define("sl-button");F.define("sl-icon");var hs=Y`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;function*je(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*xi(je(t.shadowRoot.activeElement))))}function Vo(){return[...je()].pop()}var mo=new WeakMap;function Ho(t){let e=mo.get(t);return e||(e=window.getComputedStyle(t,null),mo.set(t,e)),e}function ps(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=Ho(t);return e.visibility!=="hidden"&&e.display!=="none"}function fs(t){const e=Ho(t),{overflowY:o,overflowX:i}=e;return o==="scroll"||i==="scroll"?!0:o!=="auto"||i!=="auto"?!1:t.scrollHeight>t.clientHeight&&o==="auto"||t.scrollWidth>t.clientWidth&&i==="auto"}function ms(t){const e=t.tagName.toLowerCase(),o=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(o)||o<=-1)||t.hasAttribute("disabled")||t.closest("[inert]"))return!1;if(e==="input"&&t.getAttribute("type")==="radio"){const n=t.getRootNode(),r=`input[type='radio'][name="${t.getAttribute("name")}"]`,a=n.querySelector(`${r}:checked`);return a?a===t:n.querySelector(r)===t}return ps(t)?(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:fs(t):!1}function bs(t){var e,o;const i=Se(t),s=(e=i[0])!=null?e:null,n=(o=i[i.length-1])!=null?o:null;return{start:s,end:n}}function gs(t,e){var o;return((o=t.getRootNode({composed:!0}))==null?void 0:o.host)!==e}function Se(t){const e=new WeakMap,o=[];function i(s){if(s instanceof Element){if(s.hasAttribute("inert")||s.closest("[inert]")||e.has(s))return;e.set(s,!0),!o.includes(s)&&ms(s)&&o.push(s),s instanceof HTMLSlotElement&&gs(s,t)&&s.assignedElements({flatten:!0}).forEach(n=>{i(n)}),s.shadowRoot!==null&&s.shadowRoot.mode==="open"&&i(s.shadowRoot)}for(const n of s.children)i(n)}return i(t),o.sort((s,n)=>{const r=Number(s.getAttribute("tabindex"))||0;return(Number(n.getAttribute("tabindex"))||0)-r})}var vs=Y`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const rt=Math.min,O=Math.max,ie=Math.round,Yt=Math.floor,K=t=>({x:t,y:t}),ys={left:"right",right:"left",bottom:"top",top:"bottom"},ws={start:"end",end:"start"};function Pe(t,e,o){return O(t,rt(e,o))}function Pt(t,e){return typeof t=="function"?t(e):t}function at(t){return t.split("-")[0]}function Lt(t){return t.split("-")[1]}function Uo(t){return t==="x"?"y":"x"}function qe(t){return t==="y"?"height":"width"}const _s=new Set(["top","bottom"]);function tt(t){return _s.has(at(t))?"y":"x"}function Ke(t){return Uo(tt(t))}function xs(t,e,o){o===void 0&&(o=!1);const i=Lt(t),s=Ke(t),n=qe(s);let r=s==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(r=se(r)),[r,se(r)]}function $s(t){const e=se(t);return[Le(t),e,Le(e)]}function Le(t){return t.replace(/start|end/g,e=>ws[e])}const bo=["left","right"],go=["right","left"],ks=["top","bottom"],Cs=["bottom","top"];function As(t,e,o){switch(t){case"top":case"bottom":return o?e?go:bo:e?bo:go;case"left":case"right":return e?ks:Cs;default:return[]}}function Es(t,e,o,i){const s=Lt(t);let n=As(at(t),o==="start",i);return s&&(n=n.map(r=>r+"-"+s),e&&(n=n.concat(n.map(Le)))),n}function se(t){return t.replace(/left|right|bottom|top/g,e=>ys[e])}function Ss(t){return{top:0,right:0,bottom:0,left:0,...t}}function Wo(t){return typeof t!="number"?Ss(t):{top:t,right:t,bottom:t,left:t}}function ne(t){const{x:e,y:o,width:i,height:s}=t;return{width:i,height:s,top:o,left:e,right:e+i,bottom:o+s,x:e,y:o}}function vo(t,e,o){let{reference:i,floating:s}=t;const n=tt(e),r=Ke(e),a=qe(r),l=at(e),c=n==="y",d=i.x+i.width/2-s.width/2,h=i.y+i.height/2-s.height/2,m=i[a]/2-s[a]/2;let f;switch(l){case"top":f={x:d,y:i.y-s.height};break;case"bottom":f={x:d,y:i.y+i.height};break;case"right":f={x:i.x+i.width,y:h};break;case"left":f={x:i.x-s.width,y:h};break;default:f={x:i.x,y:i.y}}switch(Lt(e)){case"start":f[r]-=m*(o&&c?-1:1);break;case"end":f[r]+=m*(o&&c?-1:1);break}return f}const Ps=async(t,e,o)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:r}=o,a=n.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(e));let c=await r.getElementRects({reference:t,floating:e,strategy:s}),{x:d,y:h}=vo(c,i,l),m=i,f={},b=0;for(let g=0;g<a.length;g++){const{name:y,fn:v}=a[g],{x:w,y:$,data:E,reset:k}=await v({x:d,y:h,initialPlacement:i,placement:m,strategy:s,middlewareData:f,rects:c,platform:r,elements:{reference:t,floating:e}});d=w??d,h=$??h,f={...f,[y]:{...f[y],...E}},k&&b<=50&&(b++,typeof k=="object"&&(k.placement&&(m=k.placement),k.rects&&(c=k.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:s}):k.rects),{x:d,y:h}=vo(c,m,l)),g=-1)}return{x:d,y:h,placement:m,strategy:s,middlewareData:f}};async function Ge(t,e){var o;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:r,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:m=!1,padding:f=0}=Pt(e,t),b=Wo(f),y=a[m?h==="floating"?"reference":"floating":h],v=ne(await n.getClippingRect({element:(o=await(n.isElement==null?void 0:n.isElement(y)))==null||o?y:y.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),w=h==="floating"?{x:i,y:s,width:r.floating.width,height:r.floating.height}:r.reference,$=await(n.getOffsetParent==null?void 0:n.getOffsetParent(a.floating)),E=await(n.isElement==null?void 0:n.isElement($))?await(n.getScale==null?void 0:n.getScale($))||{x:1,y:1}:{x:1,y:1},k=ne(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:$,strategy:l}):w);return{top:(v.top-k.top+b.top)/E.y,bottom:(k.bottom-v.bottom+b.bottom)/E.y,left:(v.left-k.left+b.left)/E.x,right:(k.right-v.right+b.right)/E.x}}const Ls=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:i,placement:s,rects:n,platform:r,elements:a,middlewareData:l}=e,{element:c,padding:d=0}=Pt(t,e)||{};if(c==null)return{};const h=Wo(d),m={x:o,y:i},f=Ke(s),b=qe(f),g=await r.getDimensions(c),y=f==="y",v=y?"top":"left",w=y?"bottom":"right",$=y?"clientHeight":"clientWidth",E=n.reference[b]+n.reference[f]-m[f]-n.floating[b],k=m[f]-n.reference[f],I=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c));let S=I?I[$]:0;(!S||!await(r.isElement==null?void 0:r.isElement(I)))&&(S=a.floating[$]||n.floating[b]);const J=E/2-k/2,j=S/2-g[b]/2-1,B=rt(h[v],j),ot=rt(h[w],j),q=B,it=S-g[b]-ot,L=S/2-g[b]/2+J,ut=Pe(q,L,it),Q=!l.arrow&&Lt(s)!=null&&L!==ut&&n.reference[b]/2-(L<q?B:ot)-g[b]/2<0,V=Q?L<q?L-q:L-it:0;return{[f]:m[f]+V,data:{[f]:ut,centerOffset:L-ut-V,...Q&&{alignmentOffset:V}},reset:Q}}}),Os=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,i;const{placement:s,middlewareData:n,rects:r,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:d=!0,crossAxis:h=!0,fallbackPlacements:m,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:g=!0,...y}=Pt(t,e);if((o=n.arrow)!=null&&o.alignmentOffset)return{};const v=at(s),w=tt(a),$=at(a)===a,E=await(l.isRTL==null?void 0:l.isRTL(c.floating)),k=m||($||!g?[se(a)]:$s(a)),I=b!=="none";!m&&I&&k.push(...Es(a,g,b,E));const S=[a,...k],J=await Ge(e,y),j=[];let B=((i=n.flip)==null?void 0:i.overflows)||[];if(d&&j.push(J[v]),h){const L=xs(s,r,E);j.push(J[L[0]],J[L[1]])}if(B=[...B,{placement:s,overflows:j}],!j.every(L=>L<=0)){var ot,q;const L=(((ot=n.flip)==null?void 0:ot.index)||0)+1,ut=S[L];if(ut&&(!(h==="alignment"?w!==tt(ut):!1)||B.every(H=>H.overflows[0]>0&&tt(H.placement)===w)))return{data:{index:L,overflows:B},reset:{placement:ut}};let Q=(q=B.filter(V=>V.overflows[0]<=0).sort((V,H)=>V.overflows[1]-H.overflows[1])[0])==null?void 0:q.placement;if(!Q)switch(f){case"bestFit":{var it;const V=(it=B.filter(H=>{if(I){const st=tt(H.placement);return st===w||st==="y"}return!0}).map(H=>[H.placement,H.overflows.filter(st=>st>0).reduce((st,ei)=>st+ei,0)]).sort((H,st)=>H[1]-st[1])[0])==null?void 0:it[0];V&&(Q=V);break}case"initialPlacement":Q=a;break}if(s!==Q)return{reset:{placement:Q}}}return{}}}},Ts=new Set(["left","top"]);async function Rs(t,e){const{placement:o,platform:i,elements:s}=t,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),r=at(o),a=Lt(o),l=tt(o)==="y",c=Ts.has(r)?-1:1,d=n&&l?-1:1,h=Pt(e,t);let{mainAxis:m,crossAxis:f,alignmentAxis:b}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return a&&typeof b=="number"&&(f=a==="end"?b*-1:b),l?{x:f*d,y:m*c}:{x:m*c,y:f*d}}const zs=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,i;const{x:s,y:n,placement:r,middlewareData:a}=e,l=await Rs(e,t);return r===((o=a.offset)==null?void 0:o.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:s+l.x,y:n+l.y,data:{...l,placement:r}}}}},Ms=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:r=!1,limiter:a={fn:y=>{let{x:v,y:w}=y;return{x:v,y:w}}},...l}=Pt(t,e),c={x:o,y:i},d=await Ge(e,l),h=tt(at(s)),m=Uo(h);let f=c[m],b=c[h];if(n){const y=m==="y"?"top":"left",v=m==="y"?"bottom":"right",w=f+d[y],$=f-d[v];f=Pe(w,f,$)}if(r){const y=h==="y"?"top":"left",v=h==="y"?"bottom":"right",w=b+d[y],$=b-d[v];b=Pe(w,b,$)}const g=a.fn({...e,[m]:f,[h]:b});return{...g,data:{x:g.x-o,y:g.y-i,enabled:{[m]:n,[h]:r}}}}}},Ds=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var o,i;const{placement:s,rects:n,platform:r,elements:a}=e,{apply:l=()=>{},...c}=Pt(t,e),d=await Ge(e,c),h=at(s),m=Lt(s),f=tt(s)==="y",{width:b,height:g}=n.floating;let y,v;h==="top"||h==="bottom"?(y=h,v=m===(await(r.isRTL==null?void 0:r.isRTL(a.floating))?"start":"end")?"left":"right"):(v=h,y=m==="end"?"top":"bottom");const w=g-d.top-d.bottom,$=b-d.left-d.right,E=rt(g-d[y],w),k=rt(b-d[v],$),I=!e.middlewareData.shift;let S=E,J=k;if((o=e.middlewareData.shift)!=null&&o.enabled.x&&(J=$),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(S=w),I&&!m){const B=O(d.left,0),ot=O(d.right,0),q=O(d.top,0),it=O(d.bottom,0);f?J=b-2*(B!==0||ot!==0?B+ot:O(d.left,d.right)):S=g-2*(q!==0||it!==0?q+it:O(d.top,d.bottom))}await l({...e,availableWidth:J,availableHeight:S});const j=await r.getDimensions(a.floating);return b!==j.width||g!==j.height?{reset:{rects:!0}}:{}}}};function he(){return typeof window<"u"}function Ot(t){return jo(t)?(t.nodeName||"").toLowerCase():"#document"}function T(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function X(t){var e;return(e=(jo(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function jo(t){return he()?t instanceof Node||t instanceof T(t).Node:!1}function U(t){return he()?t instanceof Element||t instanceof T(t).Element:!1}function G(t){return he()?t instanceof HTMLElement||t instanceof T(t).HTMLElement:!1}function yo(t){return!he()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof T(t).ShadowRoot}const Ns=new Set(["inline","contents"]);function qt(t){const{overflow:e,overflowX:o,overflowY:i,display:s}=W(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!Ns.has(s)}const Bs=new Set(["table","td","th"]);function Fs(t){return Bs.has(Ot(t))}const Is=[":popover-open",":modal"];function pe(t){return Is.some(e=>{try{return t.matches(e)}catch{return!1}})}const Vs=["transform","translate","scale","rotate","perspective"],Hs=["transform","translate","scale","rotate","perspective","filter"],Us=["paint","layout","strict","content"];function fe(t){const e=Ye(),o=U(t)?W(t):t;return Vs.some(i=>o[i]?o[i]!=="none":!1)||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||Hs.some(i=>(o.willChange||"").includes(i))||Us.some(i=>(o.contain||"").includes(i))}function Ws(t){let e=lt(t);for(;G(e)&&!Et(e);){if(fe(e))return e;if(pe(e))return null;e=lt(e)}return null}function Ye(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const js=new Set(["html","body","#document"]);function Et(t){return js.has(Ot(t))}function W(t){return T(t).getComputedStyle(t)}function me(t){return U(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function lt(t){if(Ot(t)==="html")return t;const e=t.assignedSlot||t.parentNode||yo(t)&&t.host||X(t);return yo(e)?e.host:e}function qo(t){const e=lt(t);return Et(e)?t.ownerDocument?t.ownerDocument.body:t.body:G(e)&&qt(e)?e:qo(e)}function Wt(t,e,o){var i;e===void 0&&(e=[]),o===void 0&&(o=!0);const s=qo(t),n=s===((i=t.ownerDocument)==null?void 0:i.body),r=T(s);if(n){const a=Oe(r);return e.concat(r,r.visualViewport||[],qt(s)?s:[],a&&o?Wt(a):[])}return e.concat(s,Wt(s,[],o))}function Oe(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Ko(t){const e=W(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=G(t),n=s?t.offsetWidth:o,r=s?t.offsetHeight:i,a=ie(o)!==n||ie(i)!==r;return a&&(o=n,i=r),{width:o,height:i,$:a}}function Xe(t){return U(t)?t:t.contextElement}function Ct(t){const e=Xe(t);if(!G(e))return K(1);const o=e.getBoundingClientRect(),{width:i,height:s,$:n}=Ko(e);let r=(n?ie(o.width):o.width)/i,a=(n?ie(o.height):o.height)/s;return(!r||!Number.isFinite(r))&&(r=1),(!a||!Number.isFinite(a))&&(a=1),{x:r,y:a}}const qs=K(0);function Go(t){const e=T(t);return!Ye()||!e.visualViewport?qs:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ks(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==T(t)?!1:e}function yt(t,e,o,i){e===void 0&&(e=!1),o===void 0&&(o=!1);const s=t.getBoundingClientRect(),n=Xe(t);let r=K(1);e&&(i?U(i)&&(r=Ct(i)):r=Ct(t));const a=Ks(n,o,i)?Go(n):K(0);let l=(s.left+a.x)/r.x,c=(s.top+a.y)/r.y,d=s.width/r.x,h=s.height/r.y;if(n){const m=T(n),f=i&&U(i)?T(i):i;let b=m,g=Oe(b);for(;g&&i&&f!==b;){const y=Ct(g),v=g.getBoundingClientRect(),w=W(g),$=v.left+(g.clientLeft+parseFloat(w.paddingLeft))*y.x,E=v.top+(g.clientTop+parseFloat(w.paddingTop))*y.y;l*=y.x,c*=y.y,d*=y.x,h*=y.y,l+=$,c+=E,b=T(g),g=Oe(b)}}return ne({width:d,height:h,x:l,y:c})}function Ze(t,e){const o=me(t).scrollLeft;return e?e.left+o:yt(X(t)).left+o}function Yo(t,e,o){o===void 0&&(o=!1);const i=t.getBoundingClientRect(),s=i.left+e.scrollLeft-(o?0:Ze(t,i)),n=i.top+e.scrollTop;return{x:s,y:n}}function Gs(t){let{elements:e,rect:o,offsetParent:i,strategy:s}=t;const n=s==="fixed",r=X(i),a=e?pe(e.floating):!1;if(i===r||a&&n)return o;let l={scrollLeft:0,scrollTop:0},c=K(1);const d=K(0),h=G(i);if((h||!h&&!n)&&((Ot(i)!=="body"||qt(r))&&(l=me(i)),G(i))){const f=yt(i);c=Ct(i),d.x=f.x+i.clientLeft,d.y=f.y+i.clientTop}const m=r&&!h&&!n?Yo(r,l,!0):K(0);return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-l.scrollLeft*c.x+d.x+m.x,y:o.y*c.y-l.scrollTop*c.y+d.y+m.y}}function Ys(t){return Array.from(t.getClientRects())}function Xs(t){const e=X(t),o=me(t),i=t.ownerDocument.body,s=O(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=O(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let r=-o.scrollLeft+Ze(t);const a=-o.scrollTop;return W(i).direction==="rtl"&&(r+=O(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:r,y:a}}function Zs(t,e){const o=T(t),i=X(t),s=o.visualViewport;let n=i.clientWidth,r=i.clientHeight,a=0,l=0;if(s){n=s.width,r=s.height;const c=Ye();(!c||c&&e==="fixed")&&(a=s.offsetLeft,l=s.offsetTop)}return{width:n,height:r,x:a,y:l}}const Js=new Set(["absolute","fixed"]);function Qs(t,e){const o=yt(t,!0,e==="fixed"),i=o.top+t.clientTop,s=o.left+t.clientLeft,n=G(t)?Ct(t):K(1),r=t.clientWidth*n.x,a=t.clientHeight*n.y,l=s*n.x,c=i*n.y;return{width:r,height:a,x:l,y:c}}function wo(t,e,o){let i;if(e==="viewport")i=Zs(t,o);else if(e==="document")i=Xs(X(t));else if(U(e))i=Qs(e,o);else{const s=Go(t);i={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return ne(i)}function Xo(t,e){const o=lt(t);return o===e||!U(o)||Et(o)?!1:W(o).position==="fixed"||Xo(o,e)}function tn(t,e){const o=e.get(t);if(o)return o;let i=Wt(t,[],!1).filter(a=>U(a)&&Ot(a)!=="body"),s=null;const n=W(t).position==="fixed";let r=n?lt(t):t;for(;U(r)&&!Et(r);){const a=W(r),l=fe(r);!l&&a.position==="fixed"&&(s=null),(n?!l&&!s:!l&&a.position==="static"&&!!s&&Js.has(s.position)||qt(r)&&!l&&Xo(t,r))?i=i.filter(d=>d!==r):s=a,r=lt(r)}return e.set(t,i),i}function en(t){let{element:e,boundary:o,rootBoundary:i,strategy:s}=t;const r=[...o==="clippingAncestors"?pe(e)?[]:tn(e,this._c):[].concat(o),i],a=r[0],l=r.reduce((c,d)=>{const h=wo(e,d,s);return c.top=O(h.top,c.top),c.right=rt(h.right,c.right),c.bottom=rt(h.bottom,c.bottom),c.left=O(h.left,c.left),c},wo(e,a,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function on(t){const{width:e,height:o}=Ko(t);return{width:e,height:o}}function sn(t,e,o){const i=G(e),s=X(e),n=o==="fixed",r=yt(t,!0,n,e);let a={scrollLeft:0,scrollTop:0};const l=K(0);function c(){l.x=Ze(s)}if(i||!i&&!n)if((Ot(e)!=="body"||qt(s))&&(a=me(e)),i){const f=yt(e,!0,n,e);l.x=f.x+e.clientLeft,l.y=f.y+e.clientTop}else s&&c();n&&!i&&s&&c();const d=s&&!i&&!n?Yo(s,a):K(0),h=r.left+a.scrollLeft-l.x-d.x,m=r.top+a.scrollTop-l.y-d.y;return{x:h,y:m,width:r.width,height:r.height}}function _e(t){return W(t).position==="static"}function _o(t,e){if(!G(t)||W(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return X(t)===o&&(o=o.ownerDocument.body),o}function Zo(t,e){const o=T(t);if(pe(t))return o;if(!G(t)){let s=lt(t);for(;s&&!Et(s);){if(U(s)&&!_e(s))return s;s=lt(s)}return o}let i=_o(t,e);for(;i&&Fs(i)&&_e(i);)i=_o(i,e);return i&&Et(i)&&_e(i)&&!fe(i)?o:i||Ws(t)||o}const nn=async function(t){const e=this.getOffsetParent||Zo,o=this.getDimensions,i=await o(t.floating);return{reference:sn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function rn(t){return W(t).direction==="rtl"}const Qt={convertOffsetParentRelativeRectToViewportRelativeRect:Gs,getDocumentElement:X,getClippingRect:en,getOffsetParent:Zo,getElementRects:nn,getClientRects:Ys,getDimensions:on,getScale:Ct,isElement:U,isRTL:rn};function Jo(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function an(t,e){let o=null,i;const s=X(t);function n(){var a;clearTimeout(i),(a=o)==null||a.disconnect(),o=null}function r(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),n();const c=t.getBoundingClientRect(),{left:d,top:h,width:m,height:f}=c;if(a||e(),!m||!f)return;const b=Yt(h),g=Yt(s.clientWidth-(d+m)),y=Yt(s.clientHeight-(h+f)),v=Yt(d),$={rootMargin:-b+"px "+-g+"px "+-y+"px "+-v+"px",threshold:O(0,rt(1,l))||1};let E=!0;function k(I){const S=I[0].intersectionRatio;if(S!==l){if(!E)return r();S?r(!1,S):i=setTimeout(()=>{r(!1,1e-7)},1e3)}S===1&&!Jo(c,t.getBoundingClientRect())&&r(),E=!1}try{o=new IntersectionObserver(k,{...$,root:s.ownerDocument})}catch{o=new IntersectionObserver(k,$)}o.observe(t)}return r(!0),n}function ln(t,e,o,i){i===void 0&&(i={});const{ancestorScroll:s=!0,ancestorResize:n=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=Xe(t),d=s||n?[...c?Wt(c):[],...Wt(e)]:[];d.forEach(v=>{s&&v.addEventListener("scroll",o,{passive:!0}),n&&v.addEventListener("resize",o)});const h=c&&a?an(c,o):null;let m=-1,f=null;r&&(f=new ResizeObserver(v=>{let[w]=v;w&&w.target===c&&f&&(f.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var $;($=f)==null||$.observe(e)})),o()}),c&&!l&&f.observe(c),f.observe(e));let b,g=l?yt(t):null;l&&y();function y(){const v=yt(t);g&&!Jo(g,v)&&o(),g=v,b=requestAnimationFrame(y)}return o(),()=>{var v;d.forEach(w=>{s&&w.removeEventListener("scroll",o),n&&w.removeEventListener("resize",o)}),h?.(),(v=f)==null||v.disconnect(),f=null,l&&cancelAnimationFrame(b)}}const cn=zs,un=Ms,dn=Os,xo=Ds,hn=Ls,pn=(t,e,o)=>{const i=new Map,s={platform:Qt,...o},n={...s.platform,_c:i};return Ps(t,e,{...s,platform:n})};function fn(t){return mn(t)}function xe(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function mn(t){for(let e=t;e;e=xe(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=xe(t);e;e=xe(e)){if(!(e instanceof Element))continue;const o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||fe(o)||e.tagName==="BODY"))return e}return null}function bn(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t.contextElement instanceof Element:!0)}var x=class extends M{constructor(){super(...arguments),this.localize=new St(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let i=0,s=0,n=0,r=0,a=0,l=0,c=0,d=0;o?t.top<e.top?(i=t.left,s=t.bottom,n=t.right,r=t.bottom,a=e.left,l=e.top,c=e.right,d=e.top):(i=e.left,s=e.bottom,n=e.right,r=e.bottom,a=t.left,l=t.top,c=t.right,d=t.top):t.left<e.left?(i=t.right,s=t.top,n=e.left,r=e.top,a=t.right,l=t.bottom,c=e.left,d=e.bottom):(i=e.right,s=e.top,n=t.left,r=t.top,a=e.right,l=e.bottom,c=t.left,d=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${s}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${d}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||bn(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=ln(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[cn({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(xo({apply:({rects:o})=>{const i=this.sync==="width"||this.sync==="both",s=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${o.reference.width}px`:"",this.popup.style.height=s?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(dn({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(un({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(xo({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(hn({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?o=>Qt.getOffsetParent(o,fn):Qt.getOffsetParent;pn(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:le(wt({},Qt),{getOffsetParent:e})}).then(({x:o,y:i,middlewareData:s,placement:n})=>{const r=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${o}px`,top:`${i}px`}),this.arrow){const l=s.arrow.x,c=s.arrow.y;let d="",h="",m="",f="";if(this.arrowPlacement==="start"){const b=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",h=r?b:"",f=r?"":b}else if(this.arrowPlacement==="end"){const b=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=r?"":b,f=r?b:"",m=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(f=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",d=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(f=typeof l=="number"?`${l}px`:"",d=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:d,right:h,bottom:m,left:f,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return R`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${vt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${vt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?R`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};x.styles=[et,vs];u([z(".popup")],x.prototype,"popup",2);u([z(".popup__arrow")],x.prototype,"arrowEl",2);u([p()],x.prototype,"anchor",2);u([p({type:Boolean,reflect:!0})],x.prototype,"active",2);u([p({reflect:!0})],x.prototype,"placement",2);u([p({reflect:!0})],x.prototype,"strategy",2);u([p({type:Number})],x.prototype,"distance",2);u([p({type:Number})],x.prototype,"skidding",2);u([p({type:Boolean})],x.prototype,"arrow",2);u([p({attribute:"arrow-placement"})],x.prototype,"arrowPlacement",2);u([p({attribute:"arrow-padding",type:Number})],x.prototype,"arrowPadding",2);u([p({type:Boolean})],x.prototype,"flip",2);u([p({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],x.prototype,"flipFallbackPlacements",2);u([p({attribute:"flip-fallback-strategy"})],x.prototype,"flipFallbackStrategy",2);u([p({type:Object})],x.prototype,"flipBoundary",2);u([p({attribute:"flip-padding",type:Number})],x.prototype,"flipPadding",2);u([p({type:Boolean})],x.prototype,"shift",2);u([p({type:Object})],x.prototype,"shiftBoundary",2);u([p({attribute:"shift-padding",type:Number})],x.prototype,"shiftPadding",2);u([p({attribute:"auto-size"})],x.prototype,"autoSize",2);u([p()],x.prototype,"sync",2);u([p({type:Object})],x.prototype,"autoSizeBoundary",2);u([p({attribute:"auto-size-padding",type:Number})],x.prototype,"autoSizePadding",2);u([p({attribute:"hover-bridge",type:Boolean})],x.prototype,"hoverBridge",2);var Qo=new Map,gn=new WeakMap;function vn(t){return t??{keyframes:[],options:{duration:0}}}function $o(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function _t(t,e){Qo.set(t,vn(e))}function pt(t,e,o){const i=gn.get(t);if(i?.[e])return $o(i[e],o.dir);const s=Qo.get(e);return s?$o(s,o.dir):{keyframes:[],options:{duration:0}}}function re(t,e){return new Promise(o=>{function i(s){s.target===t&&(t.removeEventListener(e,i),o())}t.addEventListener(e,i)})}function ft(t,e,o){return new Promise(i=>{if(o?.duration===1/0)throw new Error("Promise-based animations must be finite.");const s=t.animate(e,le(wt({},o),{duration:yn()?0:o.duration}));s.addEventListener("cancel",i,{once:!0}),s.addEventListener("finish",i,{once:!0})})}function yn(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function kt(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{e.cancel(),requestAnimationFrame(o)})))}var P=class extends M{constructor(){super(...arguments),this.localize=new St(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}const o=(i,s)=>{if(!i)return null;const n=i.closest(s);if(n)return n;const r=i.getRootNode();return r instanceof ShadowRoot?o(r.host,s):null};setTimeout(()=>{var i;const s=((i=this.containingElement)==null?void 0:i.getRootNode())instanceof ShadowRoot?Vo():document.activeElement;(!this.containingElement||o(s,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const o=e.getAllItems(),i=o[0],s=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),o.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(i),i.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(s),s.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(i=>bs(i).start);let o;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":o=e.button;break;default:o=e}o.setAttribute("aria-haspopup","true"),o.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,re(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,re(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await kt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=pt(this,"dropdown.show",{dir:this.localize.dir()});await ft(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await kt(this);const{keyframes:t,options:e}=pt(this,"dropdown.hide",{dir:this.localize.dir()});await ft(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return R`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${C(this.sync?this.sync:void 0)}
        class=${vt({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};P.styles=[et,hs];P.dependencies={"sl-popup":x};u([z(".dropdown")],P.prototype,"popup",2);u([z(".dropdown__trigger")],P.prototype,"trigger",2);u([z(".dropdown__panel")],P.prototype,"panel",2);u([p({type:Boolean,reflect:!0})],P.prototype,"open",2);u([p({reflect:!0})],P.prototype,"placement",2);u([p({type:Boolean,reflect:!0})],P.prototype,"disabled",2);u([p({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],P.prototype,"stayOpenOnSelect",2);u([p({attribute:!1})],P.prototype,"containingElement",2);u([p({type:Number})],P.prototype,"distance",2);u([p({type:Number})],P.prototype,"skidding",2);u([p({type:Boolean})],P.prototype,"hoist",2);u([p({reflect:!0})],P.prototype,"sync",2);u([ct("open",{waitUntilFirstUpdate:!0})],P.prototype,"handleOpenChange",1);_t("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});_t("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});P.define("sl-dropdown");var wn=Y`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It=(t,e)=>{const o=t._$AN;if(o===void 0)return!1;for(const i of o)i._$AO?.(e,!1),It(i,e);return!0},ae=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while(o?.size===0)},ti=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),$n(e)}};function _n(t){this._$AN!==void 0?(ae(this),this._$AM=t,ti(this)):this._$AM=t}function xn(t,e=!1,o=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=o;n<i.length;n++)It(i[n],!1),ae(i[n]);else i!=null&&(It(i,!1),ae(i));else It(this,t)}const $n=t=>{t.type==No.CHILD&&(t._$AP??=xn,t._$AQ??=_n)};class kn extends Fo{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,i){super._$AT(e,o,i),ti(this),this.isConnected=e._$AU}_$AO(e,o=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),o&&(It(this,e),ae(this))}setValue(e){if(cs(this._$Ct))this._$Ct._$AI(e,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cn=()=>new An;class An{}const $e=new WeakMap,En=Bo(class extends kn{render(t){return A}update(t,[e]){const o=e!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),A}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let o=$e.get(e);o===void 0&&(o=new WeakMap,$e.set(e,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?$e.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Sn=class{constructor(t,e){this.popupRef=Cn(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=o=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${o.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${o.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=o=>{switch(o.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":o.target!==this.host&&(o.preventDefault(),o.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(o);break}},this.handleClick=o=>{var i;o.target===this.host?(o.preventDefault(),o.stopPropagation()):o.target instanceof Element&&(o.target.tagName==="sl-menu-item"||(i=o.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=o=>{o.relatedTarget&&o.relatedTarget instanceof Element&&this.host.contains(o.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=o=>{o.stopPropagation()},this.handlePopupReposition=()=>{const o=this.host.renderRoot.querySelector("slot[name='submenu']"),i=o?.assignedElements({flatten:!0}).filter(c=>c.localName==="sl-menu")[0],s=getComputedStyle(this.host).direction==="rtl";if(!i)return;const{left:n,top:r,width:a,height:l}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${s?n+a:n}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${s?n+a:n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${r+l}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let o=null;for(const i of e.assignedElements())if(o=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),o.length!==0)break;if(!(!o||o.length===0)){o[0].setAttribute("tabindex","0");for(let i=1;i!==o.length;++i)o[i].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?o[0]instanceof HTMLElement&&o[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{o[0]instanceof HTMLElement&&o[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((s,n)=>{var r;const a=(r=e.get(n))!=null?r:new CSSUnitValue(0,"px"),c=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return s-c.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?R`
      <sl-popup
        ${En(this.popupRef)}
        placement=${t?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:R` <slot name="submenu" hidden></slot> `}},D=class extends M{constructor(){super(...arguments),this.localize=new St(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new We(this,"submenu"),this.submenuController=new Sn(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Qi(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return R`
      <div
        id="anchor"
        part="base"
        class=${vt({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?R` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};D.styles=[et,wn];D.dependencies={"sl-icon":F,"sl-popup":x,"sl-spinner":He};u([z("slot:not([name])")],D.prototype,"defaultSlot",2);u([z(".menu-item")],D.prototype,"menuItem",2);u([p()],D.prototype,"type",2);u([p({type:Boolean,reflect:!0})],D.prototype,"checked",2);u([p()],D.prototype,"value",2);u([p({type:Boolean,reflect:!0})],D.prototype,"loading",2);u([p({type:Boolean,reflect:!0})],D.prototype,"disabled",2);u([ct("checked")],D.prototype,"handleCheckedChange",1);u([ct("disabled")],D.prototype,"handleDisabledChange",1);u([ct("type")],D.prototype,"handleTypeChange",1);D.define("sl-menu-item");var Pn=Y`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Je=class extends M{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],o=t.composedPath(),i=o.find(a=>{var l;return e.includes(((l=a?.getAttribute)==null?void 0:l.call(a,"role"))||"")});if(!i||o.find(a=>{var l;return((l=a?.getAttribute)==null?void 0:l.call(a,"role"))==="menu"})!==this)return;const r=i;r.type==="checkbox"&&(r.checked=!r.checked),this.emit("sl-select",{detail:{item:r}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),o=this.getCurrentItem();let i=o?e.indexOf(o):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?i++:t.key==="ArrowUp"?i--:t.key==="Home"?i=0:t.key==="End"&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(o=>{o.setAttribute("tabindex",o===t?"0":"-1")})}render(){return R`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Je.styles=[et,Pn];u([z("slot")],Je.prototype,"defaultSlot",2);Je.define("sl-menu");var Nt=[],Ln=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var o;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const i=Vo();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const s=Se(this.element);let n=s.findIndex(a=>a===i);this.previousFocus=this.currentFocus;const r=this.tabDirection==="forward"?1:-1;for(;;){n+r>=s.length?n=0:n+r<0?n=s.length-1:n+=r,this.previousFocus=this.currentFocus;const a=s[n];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;e.preventDefault(),this.currentFocus=a,(o=this.currentFocus)==null||o.focus({preventScroll:!1});const l=[...je()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){Nt.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Nt=Nt.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Nt[Nt.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=Se(this.element);if(!this.element.matches(":focus-within")){const e=t[0],o=t[t.length-1],i=this.tabDirection==="forward"?e:o;typeof i?.focus=="function"&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}},Te=new Set;function On(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Tn(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function ko(t){if(Te.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const e=On()+Tn();let o=getComputedStyle(document.documentElement).scrollbarGutter;(!o||o==="auto")&&(o="stable"),e<2&&(o=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",o),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function Co(t){Te.delete(t),Te.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}var Rn=Y`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,zn=t=>{var e;const{activeElement:o}=document;o&&t.contains(o)&&((e=document.activeElement)==null||e.blur())},Mn=Y`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,N=class extends M{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?oe`a`:oe`button`;return Jt`
      <${e}
        part="base"
        class=${vt({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${C(t?void 0:this.disabled)}
        type=${C(t?void 0:"button")}
        href=${C(t?this.href:void 0)}
        target=${C(t?this.target:void 0)}
        download=${C(t?this.download:void 0)}
        rel=${C(t&&this.target?"noreferrer noopener":void 0)}
        role=${C(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${C(this.name)}
          library=${C(this.library)}
          src=${C(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};N.styles=[et,Mn];N.dependencies={"sl-icon":F};u([z(".icon-button")],N.prototype,"button",2);u([de()],N.prototype,"hasFocus",2);u([p()],N.prototype,"name",2);u([p()],N.prototype,"library",2);u([p()],N.prototype,"src",2);u([p()],N.prototype,"href",2);u([p()],N.prototype,"target",2);u([p()],N.prototype,"download",2);u([p()],N.prototype,"label",2);u([p({type:Boolean,reflect:!0})],N.prototype,"disabled",2);var Z=class extends M{constructor(){super(...arguments),this.hasSlotController=new We(this,"footer"),this.localize=new St(this),this.modal=new Ln(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),ko(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Co(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const o=pt(this,"dialog.denyClose",{dir:this.localize.dir()});ft(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),ko(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([kt(this.dialog),kt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=pt(this,"dialog.show",{dir:this.localize.dir()}),o=pt(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([ft(this.panel,e.keyframes,e.options),ft(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{zn(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([kt(this.dialog),kt(this.overlay)]);const t=pt(this,"dialog.hide",{dir:this.localize.dir()}),e=pt(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([ft(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),ft(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Co(this);const o=this.originalTrigger;typeof o?.focus=="function"&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,re(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,re(this,"sl-after-hide")}render(){return R`
      <div
        part="base"
        class=${vt({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${C(this.noHeader?this.label:void 0)}
          aria-labelledby=${C(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":R`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Z.styles=[et,Rn];Z.dependencies={"sl-icon-button":N};u([z(".dialog")],Z.prototype,"dialog",2);u([z(".dialog__panel")],Z.prototype,"panel",2);u([z(".dialog__overlay")],Z.prototype,"overlay",2);u([p({type:Boolean,reflect:!0})],Z.prototype,"open",2);u([p({reflect:!0})],Z.prototype,"label",2);u([p({attribute:"no-header",type:Boolean,reflect:!0})],Z.prototype,"noHeader",2);u([ct("open",{waitUntilFirstUpdate:!0})],Z.prototype,"handleOpenChange",1);_t("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});_t("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});_t("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});_t("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});_t("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Z.define("sl-dialog");function jn(t,e){ni(e,!1),Ce("/node_modules/@shoelace-style/shoelace/dist"),oi();var o=ri(),i=ai(o);ui(i,e,"default",{}),li(t,o),ci()}export{jn as component,Fn as universal};

(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();const yT="modulepreload",ST=function(a){return"/"+a},gx={},WS=function(e,n,r){let o=Promise.resolve();if(n&&n.length>0){let m=function(p){return Promise.all(p.map(_=>Promise.resolve(_).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),h=u?.nonce||u?.getAttribute("nonce");o=m(n.map(p=>{if(p=ST(p),p in gx)return;gx[p]=!0;const _=p.endsWith(".css"),v=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${v}`))return;const g=document.createElement("link");if(g.rel=_?"stylesheet":yT,_||(g.as="script"),g.crossOrigin="",g.href=p,h&&g.setAttribute("nonce",h),document.head.appendChild(g),_)return new Promise((S,T)=>{g.addEventListener("load",S),g.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(u){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=u,window.dispatchEvent(h),!h.defaultPrevented)throw u}return o.then(u=>{for(const h of u||[])h.status==="rejected"&&c(h.reason);return e().catch(c)})};function bT(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var zh={exports:{}},Ml={};var vx;function MT(){if(vx)return Ml;vx=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return Ml.Fragment=e,Ml.jsx=n,Ml.jsxs=n,Ml}var _x;function ET(){return _x||(_x=1,zh.exports=MT()),zh.exports}var b=ET(),Bh={exports:{}},ht={};var xx;function TT(){if(xx)return ht;xx=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function y(O,K,ne){this.props=O,this.context=K,this.refs=M,this.updater=ne||T}y.prototype.isReactComponent={},y.prototype.setState=function(O,K){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,K,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function F(){}F.prototype=y.prototype;function z(O,K,ne){this.props=O,this.context=K,this.refs=M,this.updater=ne||T}var D=z.prototype=new F;D.constructor=z,w(D,y.prototype),D.isPureReactComponent=!0;var B=Array.isArray;function L(){}var N={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function I(O,K,ne){var Me=ne.ref;return{$$typeof:a,type:O,key:K,ref:Me!==void 0?Me:null,props:ne}}function k(O,K){return I(O.type,K,O.props)}function G(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function Y(O){var K={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ne){return K[ne]})}var pe=/\/+/g;function me(O,K){return typeof O=="object"&&O!==null&&O.key!=null?Y(""+O.key):K.toString(36)}function J(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(L,L):(O.status="pending",O.then(function(K){O.status==="pending"&&(O.status="fulfilled",O.value=K)},function(K){O.status==="pending"&&(O.status="rejected",O.reason=K)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function U(O,K,ne,Me,Q){var W=typeof O;(W==="undefined"||W==="boolean")&&(O=null);var le=!1;if(O===null)le=!0;else switch(W){case"bigint":case"string":case"number":le=!0;break;case"object":switch(O.$$typeof){case a:case e:le=!0;break;case _:return le=O._init,U(le(O._payload),K,ne,Me,Q)}}if(le)return Q=Q(O),le=Me===""?"."+me(O,0):Me,B(Q)?(ne="",le!=null&&(ne=le.replace(pe,"$&/")+"/"),U(Q,K,ne,"",function(nt){return nt})):Q!=null&&(G(Q)&&(Q=k(Q,ne+(Q.key==null||O&&O.key===Q.key?"":(""+Q.key).replace(pe,"$&/")+"/")+le)),K.push(Q)),1;le=0;var xe=Me===""?".":Me+":";if(B(O))for(var Pe=0;Pe<O.length;Pe++)Me=O[Pe],W=xe+me(Me,Pe),le+=U(Me,K,ne,W,Q);else if(Pe=S(O),typeof Pe=="function")for(O=Pe.call(O),Pe=0;!(Me=O.next()).done;)Me=Me.value,W=xe+me(Me,Pe++),le+=U(Me,K,ne,W,Q);else if(W==="object"){if(typeof O.then=="function")return U(J(O),K,ne,Me,Q);throw K=String(O),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return le}function H(O,K,ne){if(O==null)return O;var Me=[],Q=0;return U(O,Me,"","",function(W){return K.call(ne,W,Q++)}),Me}function te(O){if(O._status===-1){var K=O._result;K=K(),K.then(function(ne){(O._status===0||O._status===-1)&&(O._status=1,O._result=ne)},function(ne){(O._status===0||O._status===-1)&&(O._status=2,O._result=ne)}),O._status===-1&&(O._status=0,O._result=K)}if(O._status===1)return O._result.default;throw O._result}var re=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},be={map:H,forEach:function(O,K,ne){H(O,function(){K.apply(this,arguments)},ne)},count:function(O){var K=0;return H(O,function(){K++}),K},toArray:function(O){return H(O,function(K){return K})||[]},only:function(O){if(!G(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ht.Activity=v,ht.Children=be,ht.Component=y,ht.Fragment=n,ht.Profiler=o,ht.PureComponent=z,ht.StrictMode=r,ht.Suspense=m,ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,ht.__COMPILER_RUNTIME={__proto__:null,c:function(O){return N.H.useMemoCache(O)}},ht.cache=function(O){return function(){return O.apply(null,arguments)}},ht.cacheSignal=function(){return null},ht.cloneElement=function(O,K,ne){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Me=w({},O.props),Q=O.key;if(K!=null)for(W in K.key!==void 0&&(Q=""+K.key),K)!A.call(K,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&K.ref===void 0||(Me[W]=K[W]);var W=arguments.length-2;if(W===1)Me.children=ne;else if(1<W){for(var le=Array(W),xe=0;xe<W;xe++)le[xe]=arguments[xe+2];Me.children=le}return I(O.type,Q,Me)},ht.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},ht.createElement=function(O,K,ne){var Me,Q={},W=null;if(K!=null)for(Me in K.key!==void 0&&(W=""+K.key),K)A.call(K,Me)&&Me!=="key"&&Me!=="__self"&&Me!=="__source"&&(Q[Me]=K[Me]);var le=arguments.length-2;if(le===1)Q.children=ne;else if(1<le){for(var xe=Array(le),Pe=0;Pe<le;Pe++)xe[Pe]=arguments[Pe+2];Q.children=xe}if(O&&O.defaultProps)for(Me in le=O.defaultProps,le)Q[Me]===void 0&&(Q[Me]=le[Me]);return I(O,W,Q)},ht.createRef=function(){return{current:null}},ht.forwardRef=function(O){return{$$typeof:h,render:O}},ht.isValidElement=G,ht.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:te}},ht.memo=function(O,K){return{$$typeof:p,type:O,compare:K===void 0?null:K}},ht.startTransition=function(O){var K=N.T,ne={};N.T=ne;try{var Me=O(),Q=N.S;Q!==null&&Q(ne,Me),typeof Me=="object"&&Me!==null&&typeof Me.then=="function"&&Me.then(L,re)}catch(W){re(W)}finally{K!==null&&ne.types!==null&&(K.types=ne.types),N.T=K}},ht.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},ht.use=function(O){return N.H.use(O)},ht.useActionState=function(O,K,ne){return N.H.useActionState(O,K,ne)},ht.useCallback=function(O,K){return N.H.useCallback(O,K)},ht.useContext=function(O){return N.H.useContext(O)},ht.useDebugValue=function(){},ht.useDeferredValue=function(O,K){return N.H.useDeferredValue(O,K)},ht.useEffect=function(O,K){return N.H.useEffect(O,K)},ht.useEffectEvent=function(O){return N.H.useEffectEvent(O)},ht.useId=function(){return N.H.useId()},ht.useImperativeHandle=function(O,K,ne){return N.H.useImperativeHandle(O,K,ne)},ht.useInsertionEffect=function(O,K){return N.H.useInsertionEffect(O,K)},ht.useLayoutEffect=function(O,K){return N.H.useLayoutEffect(O,K)},ht.useMemo=function(O,K){return N.H.useMemo(O,K)},ht.useOptimistic=function(O,K){return N.H.useOptimistic(O,K)},ht.useReducer=function(O,K,ne){return N.H.useReducer(O,K,ne)},ht.useRef=function(O){return N.H.useRef(O)},ht.useState=function(O){return N.H.useState(O)},ht.useSyncExternalStore=function(O,K,ne){return N.H.useSyncExternalStore(O,K,ne)},ht.useTransition=function(){return N.H.useTransition()},ht.version="19.2.8",ht}var yx;function ag(){return yx||(yx=1,Bh.exports=TT()),Bh.exports}var Re=ag();const rg=bT(Re);function zp(a,e){(e==null||e>a.length)&&(e=a.length);for(var n=0,r=Array(e);n<e;n++)r[n]=a[n];return r}function AT(a){if(Array.isArray(a))return a}function wT(a){if(Array.isArray(a))return zp(a)}function RT(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function CT(a,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,jS(r.key),r)}}function DT(a,e,n){return e&&CT(a.prototype,e),Object.defineProperty(a,"prototype",{writable:!1}),a}function Ju(a,e){var n=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!n){if(Array.isArray(a)||(n=sg(a))||e){n&&(a=n);var r=0,o=function(){};return{s:o,n:function(){return r>=a.length?{done:!0}:{done:!1,value:a[r++]}},e:function(m){throw m},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c,u=!0,h=!1;return{s:function(){n=n.call(a)},n:function(){var m=n.next();return u=m.done,m},e:function(m){h=!0,c=m},f:function(){try{u||n.return==null||n.return()}finally{if(h)throw c}}}}function ot(a,e,n){return(e=jS(e))in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function NT(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function LT(a,e){var n=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(n!=null){var r,o,c,u,h=[],m=!0,p=!1;try{if(c=(n=n.call(a)).next,e===0){if(Object(n)!==n)return;m=!1}else for(;!(m=(r=c.call(n)).done)&&(h.push(r.value),h.length!==e);m=!0);}catch(_){p=!0,o=_}finally{try{if(!m&&n.return!=null&&(u=n.return(),Object(u)!==u))return}finally{if(p)throw o}}return h}}function UT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function OT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Sx(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),n.push.apply(n,r)}return n}function De(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Sx(Object(n),!0).forEach(function(r){ot(a,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):Sx(Object(n)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(n,r))})}return a}function Af(a,e){return AT(a)||LT(a,e)||sg(a,e)||UT()}function ji(a){return wT(a)||NT(a)||sg(a)||OT()}function PT(a,e){if(typeof a!="object"||!a)return a;var n=a[Symbol.toPrimitive];if(n!==void 0){var r=n.call(a,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function jS(a){var e=PT(a,"string");return typeof e=="symbol"?e:e+""}function uf(a){"@babel/helpers - typeof";return uf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},uf(a)}function sg(a,e){if(a){if(typeof a=="string")return zp(a,e);var n={}.toString.call(a).slice(8,-1);return n==="Object"&&a.constructor&&(n=a.constructor.name),n==="Map"||n==="Set"?Array.from(a):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?zp(a,e):void 0}}var bx=function(){},og={},qS={},YS=null,KS={mark:bx,measure:bx};try{typeof window<"u"&&(og=window),typeof document<"u"&&(qS=document),typeof MutationObserver<"u"&&(YS=MutationObserver),typeof performance<"u"&&(KS=performance)}catch{}var IT=og.navigator||{},Mx=IT.userAgent,Ex=Mx===void 0?"":Mx,Tr=og,rn=qS,Tx=YS,mu=KS;Tr.document;var ka=!!rn.documentElement&&!!rn.head&&typeof rn.addEventListener=="function"&&typeof rn.createElement=="function",ZS=~Ex.indexOf("MSIE")||~Ex.indexOf("Trident/"),gu,FT=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,zT=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,QS={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},BT={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},$S=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],Bn="classic",Zl="duotone",JS="sharp",eb="sharp-duotone",tb="chisel",nb="etch",ib="graphite",ab="jelly",rb="jelly-duo",sb="jelly-fill",ob="mosaic",lb="notdog",cb="notdog-duo",ub="pixel",fb="slab",db="slab-duo",hb="slab-press",pb="slab-press-duo",mb="thumbprint",gb="utility",vb="utility-duo",_b="utility-fill",xb="vellum",yb="whiteboard",VT="Classic",HT="Duotone",GT="Sharp",kT="Sharp Duotone",XT="Chisel",WT="Etch",jT="Graphite",qT="Jelly",YT="Jelly Duo",KT="Jelly Fill",ZT="Mosaic",QT="Notdog",$T="Notdog Duo",JT="Pixel",eA="Slab",tA="Slab Duo",nA="Slab Press",iA="Slab Press Duo",aA="Thumbprint",rA="Utility",sA="Utility Duo",oA="Utility Fill",lA="Vellum",cA="Whiteboard",Sb=[Bn,Zl,JS,eb,tb,nb,ib,ab,rb,sb,ob,lb,cb,ub,fb,db,hb,pb,mb,gb,vb,_b,xb,yb];gu={},ot(ot(ot(ot(ot(ot(ot(ot(ot(ot(gu,Bn,VT),Zl,HT),JS,GT),eb,kT),tb,XT),nb,WT),ib,jT),ab,qT),rb,YT),sb,KT),ot(ot(ot(ot(ot(ot(ot(ot(ot(ot(gu,ob,ZT),lb,QT),cb,$T),ub,JT),fb,eA),db,tA),hb,nA),pb,iA),mb,aA),gb,rA),ot(ot(ot(ot(gu,vb,sA),_b,oA),xb,lA),yb,cA);var uA={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},fA={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},dA=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),hA={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},bb=["fak","fa-kit","fakd","fa-kit-duotone"],Ax={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},pA=["kit"],mA="kit",gA="kit-duotone",vA="Kit",_A="Kit Duotone";ot(ot({},mA,vA),gA,_A);var xA={kit:{"fa-kit":"fak"}},yA={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},SA={kit:{fak:"fa-kit"}},wx={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},vu,_u={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},bA=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],MA="classic",EA="duotone",TA="sharp",AA="sharp-duotone",wA="chisel",RA="etch",CA="graphite",DA="jelly",NA="jelly-duo",LA="jelly-fill",UA="mosaic",OA="notdog",PA="notdog-duo",IA="pixel",FA="slab",zA="slab-duo",BA="slab-press",VA="slab-press-duo",HA="thumbprint",GA="utility",kA="utility-duo",XA="utility-fill",WA="vellum",jA="whiteboard",qA="Classic",YA="Duotone",KA="Sharp",ZA="Sharp Duotone",QA="Chisel",$A="Etch",JA="Graphite",e2="Jelly",t2="Jelly Duo",n2="Jelly Fill",i2="Mosaic",a2="Notdog",r2="Notdog Duo",s2="Pixel",o2="Slab",l2="Slab Duo",c2="Slab Press",u2="Slab Press Duo",f2="Thumbprint",d2="Utility",h2="Utility Duo",p2="Utility Fill",m2="Vellum",g2="Whiteboard";vu={},ot(ot(ot(ot(ot(ot(ot(ot(ot(ot(vu,MA,qA),EA,YA),TA,KA),AA,ZA),wA,QA),RA,$A),CA,JA),DA,e2),NA,t2),LA,n2),ot(ot(ot(ot(ot(ot(ot(ot(ot(ot(vu,UA,i2),OA,a2),PA,r2),IA,s2),FA,o2),zA,l2),BA,c2),VA,u2),HA,f2),GA,d2),ot(ot(ot(ot(vu,kA,h2),XA,p2),WA,m2),jA,g2);var v2="kit",_2="kit-duotone",x2="Kit",y2="Kit Duotone";ot(ot({},v2,x2),_2,y2);var S2={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},b2={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Bp={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},M2=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Mb=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(bA,M2),E2=["solid","regular","light","thin","duotone","brands","semibold"],Eb=[1,2,3,4,5,6,7,8,9,10],T2=Eb.concat([11,12,13,14,15,16,17,18,19,20]),A2=["aw","fw","pull-left","pull-right"],w2=[].concat(ji(Object.keys(b2)),E2,A2,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",_u.GROUP,_u.SWAP_OPACITY,_u.PRIMARY,_u.SECONDARY]).concat(Eb.map(function(a){return"".concat(a,"x")})).concat(T2.map(function(a){return"w-".concat(a)})),R2={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},za="___FONT_AWESOME___",Vp=16,Tb="fa",Ab="svg-inline--fa",ds="data-fa-i2svg",Hp="data-fa-pseudo-element",C2="data-fa-pseudo-element-pending",lg="data-prefix",cg="data-icon",Rx="fontawesome-i2svg",D2="async",N2=["HTML","HEAD","STYLE","SCRIPT"],wb=["::before","::after",":before",":after"],Rb=(function(){try{return!0}catch{return!1}})();function Ql(a){return new Proxy(a,{get:function(n,r){return r in n?n[r]:n[Bn]}})}var Cb=De({},QS);Cb[Bn]=De(De(De(De({},{"fa-duotone":"duotone"}),QS[Bn]),Ax.kit),Ax["kit-duotone"]);var L2=Ql(Cb),Gp=De({},hA);Gp[Bn]=De(De(De(De({},{duotone:"fad"}),Gp[Bn]),wx.kit),wx["kit-duotone"]);var Cx=Ql(Gp),kp=De({},Bp);kp[Bn]=De(De({},kp[Bn]),SA.kit);var ug=Ql(kp),Xp=De({},S2);Xp[Bn]=De(De({},Xp[Bn]),xA.kit);Ql(Xp);var U2=FT,Db="fa-layers-text",O2=zT,P2=De({},uA);Ql(P2);var I2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Vh=BT,F2=[].concat(ji(pA),ji(w2)),Bl=Tr.FontAwesomeConfig||{};function z2(a){var e=rn.querySelector("script["+a+"]");if(e)return e.getAttribute(a)}function B2(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}if(rn&&typeof rn.querySelector=="function"){var V2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];V2.forEach(function(a){var e=Af(a,2),n=e[0],r=e[1],o=B2(z2(n));o!=null&&(Bl[r]=o)})}var Nb={styleDefault:"solid",familyDefault:Bn,cssPrefix:Tb,replacementClass:Ab,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Bl.familyPrefix&&(Bl.cssPrefix=Bl.familyPrefix);var bo=De(De({},Nb),Bl);bo.autoReplaceSvg||(bo.observeMutations=!1);var st={};Object.keys(Nb).forEach(function(a){Object.defineProperty(st,a,{enumerable:!0,set:function(n){bo[a]=n,Vl.forEach(function(r){return r(st)})},get:function(){return bo[a]}})});Object.defineProperty(st,"familyPrefix",{enumerable:!0,set:function(e){bo.cssPrefix=e,Vl.forEach(function(n){return n(st)})},get:function(){return bo.cssPrefix}});Tr.FontAwesomeConfig=st;var Vl=[];function H2(a){return Vl.push(a),function(){Vl.splice(Vl.indexOf(a),1)}}var Qs=Vp,ia={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function G2(a){if(!(!a||!ka)){var e=rn.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=a;for(var n=rn.head.childNodes,r=null,o=n.length-1;o>-1;o--){var c=n[o],u=(c.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(u)>-1&&(r=c)}return rn.head.insertBefore(e,r),a}}var k2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Dx(){for(var a=12,e="";a-- >0;)e+=k2[Math.random()*62|0];return e}function Ro(a){for(var e=[],n=(a||[]).length>>>0;n--;)e[n]=a[n];return e}function fg(a){return a.classList?Ro(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Lb(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function X2(a){return Object.keys(a||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Lb(a[n]),'" ')},"").trim()}function wf(a){return Object.keys(a||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(a[n].trim(),";")},"")}function dg(a){return a.size!==ia.size||a.x!==ia.x||a.y!==ia.y||a.rotate!==ia.rotate||a.flipX||a.flipY}function W2(a){var e=a.transform,n=a.containerWidth,r=a.iconWidth,o={transform:"translate(".concat(n/2," 256)")},c="translate(".concat(e.x*32,", ").concat(e.y*32,") "),u="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),h="rotate(".concat(e.rotate," 0 0)"),m={transform:"".concat(c," ").concat(u," ").concat(h)},p={transform:"translate(".concat(r/2*-1," -256)")};return{outer:o,inner:m,path:p}}function j2(a){var e=a.transform,n=a.width,r=n===void 0?Vp:n,o=a.height,c=o===void 0?Vp:o,u="";return ZS?u+="translate(".concat(e.x/Qs-r/2,"em, ").concat(e.y/Qs-c/2,"em) "):u+="translate(calc(-50% + ".concat(e.x/Qs,"em), calc(-50% + ").concat(e.y/Qs,"em)) "),u+="scale(".concat(e.size/Qs*(e.flipX?-1:1),", ").concat(e.size/Qs*(e.flipY?-1:1),") "),u+="rotate(".concat(e.rotate,"deg) "),u}var q2=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Ub(){var a=Tb,e=Ab,n=st.cssPrefix,r=st.replacementClass,o=q2;if(n!==a||r!==e){var c=new RegExp("\\.".concat(a,"\\-"),"g"),u=new RegExp("\\--".concat(a,"\\-"),"g"),h=new RegExp("\\.".concat(e),"g");o=o.replace(c,".".concat(n,"-")).replace(u,"--".concat(n,"-")).replace(h,".".concat(r))}return o}var Nx=!1;function Hh(){st.autoAddCss&&!Nx&&(G2(Ub()),Nx=!0)}var Y2={mixout:function(){return{dom:{css:Ub,insertCss:Hh}}},hooks:function(){return{beforeDOMElementCreation:function(){Hh()},beforeI2svg:function(){Hh()}}}},Ba=Tr||{};Ba[za]||(Ba[za]={});Ba[za].styles||(Ba[za].styles={});Ba[za].hooks||(Ba[za].hooks={});Ba[za].shims||(Ba[za].shims=[]);var ki=Ba[za],Ob=[],Pb=function(){rn.removeEventListener("DOMContentLoaded",Pb),ff=1,Ob.map(function(e){return e()})},ff=!1;ka&&(ff=(rn.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(rn.readyState),ff||rn.addEventListener("DOMContentLoaded",Pb));function K2(a){ka&&(ff?setTimeout(a,0):Ob.push(a))}function $l(a){var e=a.tag,n=a.attributes,r=n===void 0?{}:n,o=a.children,c=o===void 0?[]:o;return typeof a=="string"?Lb(a):"<".concat(e," ").concat(X2(r),">").concat(c.map($l).join(""),"</").concat(e,">")}function Lx(a,e,n){if(a&&a[e]&&a[e][n])return{prefix:e,iconName:n,icon:a[e][n]}}var Gh=function(e,n,r,o){var c=Object.keys(e),u=c.length,h=n,m,p,_;for(r===void 0?(m=1,_=e[c[0]]):(m=0,_=r);m<u;m++)p=c[m],_=h(_,e[p],p,e);return _};function Ib(a){return ji(a).length!==1?null:a.codePointAt(0).toString(16)}function Ux(a){return Object.keys(a).reduce(function(e,n){var r=a[n],o=!!r.icon;return o?e[r.iconName]=r.icon:e[n]=r,e},{})}function Wp(a,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,o=r===void 0?!1:r,c=Ux(e);typeof ki.hooks.addPack=="function"&&!o?ki.hooks.addPack(a,Ux(e)):ki.styles[a]=De(De({},ki.styles[a]||{}),c),a==="fas"&&Wp("fa",e)}var Xl=ki.styles,Z2=ki.shims,Fb=Object.keys(ug),Q2=Fb.reduce(function(a,e){return a[e]=Object.keys(ug[e]),a},{}),hg=null,zb={},Bb={},Vb={},Hb={},Gb={};function $2(a){return~F2.indexOf(a)}function J2(a,e){var n=e.split("-"),r=n[0],o=n.slice(1).join("-");return r===a&&o!==""&&!$2(o)?o:null}var kb=function(){var e=function(c){return Gh(Xl,function(u,h,m){return u[m]=Gh(h,c,{}),u},{})};zb=e(function(o,c,u){if(c[3]&&(o[c[3]]=u),c[2]){var h=c[2].filter(function(m){return typeof m=="number"});h.forEach(function(m){o[m.toString(16)]=u})}return o}),Bb=e(function(o,c,u){if(o[u]=u,c[2]){var h=c[2].filter(function(m){return typeof m=="string"});h.forEach(function(m){o[m]=u})}return o}),Gb=e(function(o,c,u){var h=c[2];return o[u]=u,h.forEach(function(m){o[m]=u}),o});var n="far"in Xl||st.autoFetchSvg,r=Gh(Z2,function(o,c){var u=c[0],h=c[1],m=c[2];return h==="far"&&!n&&(h="fas"),typeof u=="string"&&(o.names[u]={prefix:h,iconName:m}),typeof u=="number"&&(o.unicodes[u.toString(16)]={prefix:h,iconName:m}),o},{names:{},unicodes:{}});Vb=r.names,Hb=r.unicodes,hg=Rf(st.styleDefault,{family:st.familyDefault})};H2(function(a){hg=Rf(a.styleDefault,{family:st.familyDefault})});kb();function pg(a,e){return(zb[a]||{})[e]}function e3(a,e){return(Bb[a]||{})[e]}function ss(a,e){return(Gb[a]||{})[e]}function Xb(a){return Vb[a]||{prefix:null,iconName:null}}function t3(a){var e=Hb[a],n=pg("fas",a);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ar(){return hg}var Wb=function(){return{prefix:null,iconName:null,rest:[]}};function n3(a){var e=Bn,n=Fb.reduce(function(r,o){return r[o]="".concat(st.cssPrefix,"-").concat(o),r},{});return Sb.forEach(function(r){(a.includes(n[r])||a.some(function(o){return Q2[r].includes(o)}))&&(e=r)}),e}function Rf(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Bn:n,o=L2[r][a];if(r===Zl&&!a)return"fad";var c=Cx[r][a]||Cx[r][o],u=a in ki.styles?a:null,h=c||u||null;return h}function i3(a){var e=[],n=null;return a.forEach(function(r){var o=J2(st.cssPrefix,r);o?n=o:r&&e.push(r)}),{iconName:n,rest:e}}function Ox(a){return a.sort().filter(function(e,n,r){return r.indexOf(e)===n})}var Px=Mb.concat(bb);function Cf(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,o=null,c=Ox(a.filter(function(S){return Px.includes(S)})),u=Ox(a.filter(function(S){return!Px.includes(S)})),h=c.filter(function(S){return o=S,!$S.includes(S)}),m=Af(h,1),p=m[0],_=p===void 0?null:p,v=n3(c),g=De(De({},i3(u)),{},{prefix:Rf(_,{family:v})});return De(De(De({},g),o3({values:a,family:v,styles:Xl,config:st,canonical:g,givenPrefix:o})),a3(r,o,g))}function a3(a,e,n){var r=n.prefix,o=n.iconName;if(a||!r||!o)return{prefix:r,iconName:o};var c=e==="fa"?Xb(o):{},u=ss(r,o);return o=c.iconName||u||o,r=c.prefix||r,r==="far"&&!Xl.far&&Xl.fas&&!st.autoFetchSvg&&(r="fas"),{prefix:r,iconName:o}}var r3=Sb.filter(function(a){return a!==Bn||a!==Zl}),s3=Object.keys(Bp).filter(function(a){return a!==Bn}).map(function(a){return Object.keys(Bp[a])}).flat();function o3(a){var e=a.values,n=a.family,r=a.canonical,o=a.givenPrefix,c=o===void 0?"":o,u=a.styles,h=u===void 0?{}:u,m=a.config,p=m===void 0?{}:m,_=n===Zl,v=e.includes("fa-duotone")||e.includes("fad"),g=p.familyDefault==="duotone",S=r.prefix==="fad"||r.prefix==="fa-duotone";if(!_&&(v||g||S)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&r3.includes(n)){var T=Object.keys(h).find(function(M){return s3.includes(M)});if(T||p.autoFetchSvg){var w=dA.get(n).defaultShortPrefixId;r.prefix=w,r.iconName=ss(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||c==="fa")&&(r.prefix=Ar()||"fas"),r}var l3=(function(){function a(){RT(this,a),this.definitions={}}return DT(a,[{key:"add",value:function(){for(var n=this,r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];var u=o.reduce(this._pullDefinitions,{});Object.keys(u).forEach(function(h){n.definitions[h]=De(De({},n.definitions[h]||{}),u[h]),Wp(h,u[h]);var m=ug[Bn][h];m&&Wp(m,u[h]),kb()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var o=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(o).map(function(c){var u=o[c],h=u.prefix,m=u.iconName,p=u.icon,_=p[2];n[h]||(n[h]={}),_.length>0&&_.forEach(function(v){typeof v=="string"&&(n[h][v]=p)}),n[h][m]=p}),n}}])})(),Ix=[],po={},vo={},c3=Object.keys(vo);function u3(a,e){var n=e.mixoutsTo;return Ix=a,po={},Object.keys(vo).forEach(function(r){c3.indexOf(r)===-1&&delete vo[r]}),Ix.forEach(function(r){var o=r.mixout?r.mixout():{};if(Object.keys(o).forEach(function(u){typeof o[u]=="function"&&(n[u]=o[u]),uf(o[u])==="object"&&Object.keys(o[u]).forEach(function(h){n[u]||(n[u]={}),n[u][h]=o[u][h]})}),r.hooks){var c=r.hooks();Object.keys(c).forEach(function(u){po[u]||(po[u]=[]),po[u].push(c[u])})}r.provides&&r.provides(vo)}),n}function jp(a,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var c=po[a]||[];return c.forEach(function(u){e=u.apply(null,[e].concat(r))}),e}function hs(a){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=po[a]||[];o.forEach(function(c){c.apply(null,n)})}function wr(){var a=arguments[0],e=Array.prototype.slice.call(arguments,1);return vo[a]?vo[a].apply(null,e):void 0}function qp(a){a.prefix==="fa"&&(a.prefix="fas");var e=a.iconName,n=a.prefix||Ar();if(e)return e=ss(n,e)||e,Lx(jb.definitions,n,e)||Lx(ki.styles,n,e)}var jb=new l3,f3=function(){st.autoReplaceSvg=!1,st.observeMutations=!1,hs("noAuto")},d3={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ka?(hs("beforeI2svg",e),wr("pseudoElements2svg",e),wr("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;st.autoReplaceSvg===!1&&(st.autoReplaceSvg=!0),st.observeMutations=!0,K2(function(){p3({autoReplaceSvgRoot:n}),hs("watch",e)})}},h3={icon:function(e){if(e===null)return null;if(uf(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ss(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Rf(e[0]);return{prefix:r,iconName:ss(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(st.cssPrefix,"-"))>-1||e.match(U2))){var o=Cf(e.split(" "),{skipLookups:!0});return{prefix:o.prefix||Ar(),iconName:ss(o.prefix,o.iconName)||o.iconName}}if(typeof e=="string"){var c=Ar();return{prefix:c,iconName:ss(c,e)||e}}}},xi={noAuto:f3,config:st,dom:d3,parse:h3,library:jb,findIconDefinition:qp,toHtml:$l},p3=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?rn:n;(Object.keys(ki.styles).length>0||st.autoFetchSvg)&&ka&&st.autoReplaceSvg&&xi.dom.i2svg({node:r})};function Df(a,e){return Object.defineProperty(a,"abstract",{get:e}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(r){return $l(r)})}}),Object.defineProperty(a,"node",{get:function(){if(ka){var r=rn.createElement("div");return r.innerHTML=a.html,r.children}}}),a}function m3(a){var e=a.children,n=a.main,r=a.mask,o=a.attributes,c=a.styles,u=a.transform;if(dg(u)&&n.found&&!r.found){var h=n.width,m=n.height,p={x:h/m/2,y:.5};o.style=wf(De(De({},c),{},{"transform-origin":"".concat(p.x+u.x/16,"em ").concat(p.y+u.y/16,"em")}))}return[{tag:"svg",attributes:o,children:e}]}function g3(a){var e=a.prefix,n=a.iconName,r=a.children,o=a.attributes,c=a.symbol,u=c===!0?"".concat(e,"-").concat(st.cssPrefix,"-").concat(n):c;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:De(De({},o),{},{id:u}),children:r}]}]}function v3(a){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(n){return n in a})}function mg(a){var e=a.icons,n=e.main,r=e.mask,o=a.prefix,c=a.iconName,u=a.transform,h=a.symbol,m=a.maskId,p=a.extra,_=a.watchable,v=_===void 0?!1:_,g=r.found?r:n,S=g.width,T=g.height,w=[st.replacementClass,c?"".concat(st.cssPrefix,"-").concat(c):""].filter(function(B){return p.classes.indexOf(B)===-1}).filter(function(B){return B!==""||!!B}).concat(p.classes).join(" "),M={children:[],attributes:De(De({},p.attributes),{},{"data-prefix":o,"data-icon":c,class:w,role:p.attributes.role||"img",viewBox:"0 0 ".concat(S," ").concat(T)})};!v3(p.attributes)&&!p.attributes["aria-hidden"]&&(M.attributes["aria-hidden"]="true"),v&&(M.attributes[ds]="");var y=De(De({},M),{},{prefix:o,iconName:c,main:n,mask:r,maskId:m,transform:u,symbol:h,styles:De({},p.styles)}),F=r.found&&n.found?wr("generateAbstractMask",y)||{children:[],attributes:{}}:wr("generateAbstractIcon",y)||{children:[],attributes:{}},z=F.children,D=F.attributes;return y.children=z,y.attributes=D,h?g3(y):m3(y)}function Fx(a){var e=a.content,n=a.width,r=a.height,o=a.transform,c=a.extra,u=a.watchable,h=u===void 0?!1:u,m=De(De({},c.attributes),{},{class:c.classes.join(" ")});h&&(m[ds]="");var p=De({},c.styles);dg(o)&&(p.transform=j2({transform:o,width:n,height:r}),p["-webkit-transform"]=p.transform);var _=wf(p);_.length>0&&(m.style=_);var v=[];return v.push({tag:"span",attributes:m,children:[e]}),v}function _3(a){var e=a.content,n=a.extra,r=De(De({},n.attributes),{},{class:n.classes.join(" ")}),o=wf(n.styles);o.length>0&&(r.style=o);var c=[];return c.push({tag:"span",attributes:r,children:[e]}),c}var kh=ki.styles;function Yp(a){var e=a[0],n=a[1],r=a.slice(4),o=Af(r,1),c=o[0],u=null;return Array.isArray(c)?u={tag:"g",attributes:{class:"".concat(st.cssPrefix,"-").concat(Vh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(st.cssPrefix,"-").concat(Vh.SECONDARY),fill:"currentColor",d:c[0]}},{tag:"path",attributes:{class:"".concat(st.cssPrefix,"-").concat(Vh.PRIMARY),fill:"currentColor",d:c[1]}}]}:u={tag:"path",attributes:{fill:"currentColor",d:c}},{found:!0,width:e,height:n,icon:u}}var x3={found:!1,width:512,height:512};function y3(a,e){!Rb&&!st.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(e,'" is missing.'))}function Kp(a,e){var n=e;return e==="fa"&&st.styleDefault!==null&&(e=Ar()),new Promise(function(r,o){if(n==="fa"){var c=Xb(a)||{};a=c.iconName||a,e=c.prefix||e}if(a&&e&&kh[e]&&kh[e][a]){var u=kh[e][a];return r(Yp(u))}y3(a,e),r(De(De({},x3),{},{icon:st.showMissingIcons&&a?wr("missingIconAbstract")||{}:{}}))})}var zx=function(){},Zp=st.measurePerformance&&mu&&mu.mark&&mu.measure?mu:{mark:zx,measure:zx},Ol='FA "7.3.1"',S3=function(e){return Zp.mark("".concat(Ol," ").concat(e," begins")),function(){return qb(e)}},qb=function(e){Zp.mark("".concat(Ol," ").concat(e," ends")),Zp.measure("".concat(Ol," ").concat(e),"".concat(Ol," ").concat(e," begins"),"".concat(Ol," ").concat(e," ends"))},gg={begin:S3,end:qb},ef=function(){};function Bx(a){var e=a.getAttribute?a.getAttribute(ds):null;return typeof e=="string"}function b3(a){var e=a.getAttribute?a.getAttribute(lg):null,n=a.getAttribute?a.getAttribute(cg):null;return e&&n}function M3(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(st.replacementClass)}function E3(){if(st.autoReplaceSvg===!0)return tf.replace;var a=tf[st.autoReplaceSvg];return a||tf.replace}function T3(a){return rn.createElementNS("http://www.w3.org/2000/svg",a)}function A3(a){return rn.createElement(a)}function Yb(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?a.tag==="svg"?T3:A3:n;if(typeof a=="string")return rn.createTextNode(a);var o=r(a.tag);Object.keys(a.attributes||[]).forEach(function(u){o.setAttribute(u,a.attributes[u])});var c=a.children||[];return c.forEach(function(u){o.appendChild(Yb(u,{ceFn:r}))}),o}function w3(a){var e=" ".concat(a.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var tf={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(o){n.parentNode.insertBefore(Yb(o),n)}),n.getAttribute(ds)===null&&st.keepOriginalSource){var r=rn.createComment(w3(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~fg(n).indexOf(st.replacementClass))return tf.replace(e);var o=new RegExp("".concat(st.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var c=r[0].attributes.class.split(" ").reduce(function(h,m){return m===st.replacementClass||m.match(o)?h.toSvg.push(m):h.toNode.push(m),h},{toNode:[],toSvg:[]});r[0].attributes.class=c.toSvg.join(" "),c.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",c.toNode.join(" "))}var u=r.map(function(h){return $l(h)}).join(`
`);n.setAttribute(ds,""),n.innerHTML=u}};function Vx(a){a()}function Kb(a,e){var n=typeof e=="function"?e:ef;if(a.length===0)n();else{var r=Vx;st.mutateApproach===D2&&(r=Tr.requestAnimationFrame||Vx),r(function(){var o=E3(),c=gg.begin("mutate");a.map(o),c(),n()})}}var vg=!1;function Zb(){vg=!0}function Qp(){vg=!1}var df=null;function Hx(a){if(Tx&&st.observeMutations){var e=a.treeCallback,n=e===void 0?ef:e,r=a.nodeCallback,o=r===void 0?ef:r,c=a.pseudoElementsCallback,u=c===void 0?ef:c,h=a.observeMutationsRoot,m=h===void 0?rn:h;df=new Tx(function(p){if(!vg){var _=Ar();Ro(p).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!Bx(v.addedNodes[0])&&(st.searchPseudoElements&&u(v.target),n(v.target)),v.type==="attributes"&&v.target.parentNode&&st.searchPseudoElements&&u([v.target],!0),v.type==="attributes"&&Bx(v.target)&&~I2.indexOf(v.attributeName))if(v.attributeName==="class"&&b3(v.target)){var g=Cf(fg(v.target)),S=g.prefix,T=g.iconName;v.target.setAttribute(lg,S||_),T&&v.target.setAttribute(cg,T)}else M3(v.target)&&o(v.target)})}}),ka&&df.observe(m,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function R3(){df&&df.disconnect()}function C3(a){var e=a.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,o){var c=o.split(":"),u=c[0],h=c.slice(1);return u&&h.length>0&&(r[u]=h.join(":").trim()),r},{})),n}function D3(a){var e=a.getAttribute("data-prefix"),n=a.getAttribute("data-icon"),r=a.innerText!==void 0?a.innerText.trim():"",o=Cf(fg(a));return o.prefix||(o.prefix=Ar()),e&&n&&(o.prefix=e,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&r.length>0&&(o.iconName=e3(o.prefix,a.innerText)||pg(o.prefix,Ib(a.innerText))),!o.iconName&&st.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=a.firstChild.data)),o}function N3(a){var e=Ro(a.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{});return e}function L3(){return{iconName:null,prefix:null,transform:ia,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Gx(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=D3(a),r=n.iconName,o=n.prefix,c=n.rest,u=N3(a),h=jp("parseNodeAttributes",{},a),m=e.styleParser?C3(a):[];return De({iconName:r,prefix:o,transform:ia,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:c,styles:m,attributes:u}},h)}var U3=ki.styles;function Qb(a){var e=st.autoReplaceSvg==="nest"?Gx(a,{styleParser:!1}):Gx(a);return~e.extra.classes.indexOf(Db)?wr("generateLayersText",a,e):wr("generateSvgReplacementMutation",a,e)}function O3(){return[].concat(ji(bb),ji(Mb))}function kx(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ka)return Promise.resolve();var n=rn.documentElement.classList,r=function(v){return n.add("".concat(Rx,"-").concat(v))},o=function(v){return n.remove("".concat(Rx,"-").concat(v))},c=st.autoFetchSvg?O3():$S.concat(Object.keys(U3));c.includes("fa")||c.push("fa");var u=[".".concat(Db,":not([").concat(ds,"])")].concat(c.map(function(_){return".".concat(_,":not([").concat(ds,"])")})).join(", ");if(u.length===0)return Promise.resolve();var h=[];try{h=Ro(a.querySelectorAll(u))}catch{}if(h.length>0)r("pending"),o("complete");else return Promise.resolve();var m=gg.begin("onTree"),p=h.reduce(function(_,v){try{var g=Qb(v);g&&_.push(g)}catch(S){Rb||S.name==="MissingIcon"&&console.error(S)}return _},[]);return new Promise(function(_,v){Promise.all(p).then(function(g){Kb(g,function(){r("active"),r("complete"),o("pending"),typeof e=="function"&&e(),m(),_()})}).catch(function(g){m(),v(g)})})}function P3(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Qb(a).then(function(n){n&&Kb([n],e)})}function I3(a){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:qp(e||{}),o=n.mask;return o&&(o=(o||{}).icon?o:qp(o||{})),a(r,De(De({},n),{},{mask:o}))}}var F3=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,o=r===void 0?ia:r,c=n.symbol,u=c===void 0?!1:c,h=n.mask,m=h===void 0?null:h,p=n.maskId,_=p===void 0?null:p,v=n.classes,g=v===void 0?[]:v,S=n.attributes,T=S===void 0?{}:S,w=n.styles,M=w===void 0?{}:w;if(e){var y=e.prefix,F=e.iconName,z=e.icon;return Df(De({type:"icon"},e),function(){return hs("beforeDOMElementCreation",{iconDefinition:e,params:n}),mg({icons:{main:Yp(z),mask:m?Yp(m.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:F,transform:De(De({},ia),o),symbol:u,maskId:_,extra:{attributes:T,styles:M,classes:g}})})}},z3={mixout:function(){return{icon:I3(F3)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=kx,n.nodeCallback=P3,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,o=r===void 0?rn:r,c=n.callback,u=c===void 0?function(){}:c;return kx(o,u)},e.generateSvgReplacementMutation=function(n,r){var o=r.iconName,c=r.prefix,u=r.transform,h=r.symbol,m=r.mask,p=r.maskId,_=r.extra;return new Promise(function(v,g){Promise.all([Kp(o,c),m.iconName?Kp(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var T=Af(S,2),w=T[0],M=T[1];v([n,mg({icons:{main:w,mask:M},prefix:c,iconName:o,transform:u,symbol:h,maskId:p,extra:_,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,o=n.attributes,c=n.main,u=n.transform,h=n.styles,m=wf(h);m.length>0&&(o.style=m);var p;return dg(u)&&(p=wr("generateAbstractTransformGrouping",{main:c,transform:u,containerWidth:c.width,iconWidth:c.width})),r.push(p||c.icon),{children:r,attributes:o}}}},B3={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.classes,c=o===void 0?[]:o;return Df({type:"layer"},function(){hs("beforeDOMElementCreation",{assembler:n,params:r});var u=[];return n(function(h){Array.isArray(h)?h.map(function(m){u=u.concat(m.abstract)}):u=u.concat(h.abstract)}),[{tag:"span",attributes:{class:["".concat(st.cssPrefix,"-layers")].concat(ji(c)).join(" ")},children:u}]})}}}},V3={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var o=r.classes,c=o===void 0?[]:o,u=r.attributes,h=u===void 0?{}:u,m=r.styles,p=m===void 0?{}:m;return Df({type:"counter",content:n},function(){return hs("beforeDOMElementCreation",{content:n,params:r}),_3({content:n.toString(),extra:{attributes:h,styles:p,classes:["".concat(st.cssPrefix,"-layers-counter")].concat(ji(c))}})})}}}},H3={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.transform,c=o===void 0?ia:o,u=r.classes,h=u===void 0?[]:u,m=r.attributes,p=m===void 0?{}:m,_=r.styles,v=_===void 0?{}:_;return Df({type:"text",content:n},function(){return hs("beforeDOMElementCreation",{content:n,params:r}),Fx({content:n,transform:De(De({},ia),c),extra:{attributes:p,styles:v,classes:["".concat(st.cssPrefix,"-layers-text")].concat(ji(h))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var o=r.transform,c=r.extra,u=null,h=null;if(ZS){var m=parseInt(getComputedStyle(n).fontSize,10),p=n.getBoundingClientRect();u=p.width/m,h=p.height/m}return Promise.resolve([n,Fx({content:n.innerHTML,width:u,height:h,transform:o,extra:c,watchable:!0})])}}},$b=new RegExp('"',"ug"),Xx=[1105920,1112319],Wx=De(De(De(De({},{FontAwesome:{normal:"fas",400:"fas"}}),fA),R2),yA),$p=Object.keys(Wx).reduce(function(a,e){return a[e.toLowerCase()]=Wx[e],a},{}),G3=Object.keys($p).reduce(function(a,e){var n=$p[e];return a[e]=n[900]||ji(Object.entries(n))[0][1],a},{});function k3(a){var e=a.replace($b,"");return Ib(ji(e)[0]||"")}function X3(a){var e=a.getPropertyValue("font-feature-settings").includes("ss01"),n=a.getPropertyValue("content"),r=n.replace($b,""),o=r.codePointAt(0),c=o>=Xx[0]&&o<=Xx[1],u=r.length===2?r[0]===r[1]:!1;return c||u||e}function W3(a,e){var n=a.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),o=isNaN(r)?"normal":r;return($p[n]||{})[o]||G3[n]}function jx(a,e){var n="".concat(C2).concat(e.replace(":","-"));return new Promise(function(r,o){if(a.getAttribute(n)!==null)return r();var c=Ro(a.children),u=c.filter(function(L){return L.getAttribute(Hp)===e})[0],h=Tr.getComputedStyle(a,e),m=h.getPropertyValue("font-family"),p=m.match(O2),_=h.getPropertyValue("font-weight"),v=h.getPropertyValue("content");if(u&&!p)return a.removeChild(u),r();if(p&&v!=="none"&&v!==""){var g=h.getPropertyValue("content"),S=W3(m,_),T=k3(g),w=p[0].startsWith("FontAwesome"),M=X3(h),y=pg(S,T),F=y;if(w){var z=t3(T);z.iconName&&z.prefix&&(y=z.iconName,S=z.prefix)}if(y&&!M&&(!u||u.getAttribute(lg)!==S||u.getAttribute(cg)!==F)){a.setAttribute(n,F),u&&a.removeChild(u);var D=L3(),B=D.extra;B.attributes[Hp]=e,Kp(y,S).then(function(L){var N=mg(De(De({},D),{},{icons:{main:L,mask:Wb()},prefix:S,iconName:F,extra:B,watchable:!0})),A=rn.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?a.insertBefore(A,a.firstChild):a.appendChild(A),A.outerHTML=N.map(function(I){return $l(I)}).join(`
`),a.removeAttribute(n),r()}).catch(o)}else r()}else r()})}function j3(a){return Promise.all([jx(a,"::before"),jx(a,"::after")])}function q3(a){return a.parentNode!==document.head&&!~N2.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(Hp)&&(!a.parentNode||a.parentNode.tagName!=="svg")}var Y3=function(e){return!!e&&wb.some(function(n){return e.includes(n)})},K3=function(e){if(!e)return[];var n=new Set,r=e.split(/,(?![^()]*\))/).map(function(m){return m.trim()});r=r.flatMap(function(m){return m.includes("(")?m:m.split(",").map(function(p){return p.trim()})});var o=Ju(r),c;try{for(o.s();!(c=o.n()).done;){var u=c.value;if(Y3(u)){var h=wb.reduce(function(m,p){return m.replace(p,"")},u);h!==""&&h!=="*"&&n.add(h)}}}catch(m){o.e(m)}finally{o.f()}return n};function qx(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(ka){var n;if(e)n=a;else if(st.searchPseudoElementsFullScan)n=a.querySelectorAll("*");else{var r=new Set,o=Ju(document.styleSheets),c;try{for(o.s();!(c=o.n()).done;){var u=c.value;try{var h=Ju(u.cssRules),m;try{for(h.s();!(m=h.n()).done;){var p=m.value,_=K3(p.selectorText),v=Ju(_),g;try{for(v.s();!(g=v.n()).done;){var S=g.value;r.add(S)}}catch(w){v.e(w)}finally{v.f()}}}catch(w){h.e(w)}finally{h.f()}}catch(w){st.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(u.href," (").concat(w.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(w){o.e(w)}finally{o.f()}if(!r.size)return;var T=Array.from(r).join(", ");try{n=a.querySelectorAll(T)}catch{}}return new Promise(function(w,M){var y=Ro(n).filter(q3).map(j3),F=gg.begin("searchPseudoElements");Zb(),Promise.all(y).then(function(){F(),Qp(),w()}).catch(function(){F(),Qp(),M()})})}}var Z3={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=qx,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,o=r===void 0?rn:r;st.searchPseudoElements&&qx(o)}}},Yx=!1,Q3={mixout:function(){return{dom:{unwatch:function(){Zb(),Yx=!0}}}},hooks:function(){return{bootstrap:function(){Hx(jp("mutationObserverCallbacks",{}))},noAuto:function(){R3()},watch:function(n){var r=n.observeMutationsRoot;Yx?Qp():Hx(jp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Kx=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,o){var c=o.toLowerCase().split("-"),u=c[0],h=c.slice(1).join("-");if(u&&h==="h")return r.flipX=!0,r;if(u&&h==="v")return r.flipY=!0,r;if(h=parseFloat(h),isNaN(h))return r;switch(u){case"grow":r.size=r.size+h;break;case"shrink":r.size=r.size-h;break;case"left":r.x=r.x-h;break;case"right":r.x=r.x+h;break;case"up":r.y=r.y-h;break;case"down":r.y=r.y+h;break;case"rotate":r.rotate=r.rotate+h;break}return r},n)},$3={mixout:function(){return{parse:{transform:function(n){return Kx(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-transform");return o&&(n.transform=Kx(o)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,o=n.transform,c=n.containerWidth,u=n.iconWidth,h={transform:"translate(".concat(c/2," 256)")},m="translate(".concat(o.x*32,", ").concat(o.y*32,") "),p="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),_="rotate(".concat(o.rotate," 0 0)"),v={transform:"".concat(m," ").concat(p," ").concat(_)},g={transform:"translate(".concat(u/2*-1," -256)")},S={outer:h,inner:v,path:g};return{tag:"g",attributes:De({},S.outer),children:[{tag:"g",attributes:De({},S.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:De(De({},r.icon.attributes),S.path)}]}]}}}},Xh={x:0,y:0,width:"100%",height:"100%"};function Zx(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||e)&&(a.attributes.fill="black"),a}function J3(a){return a.tag==="g"?a.children:[a]}var ew={hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-mask"),c=o?Cf(o.split(" ").map(function(u){return u.trim()})):Wb();return c.prefix||(c.prefix=Ar()),n.mask=c,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,o=n.attributes,c=n.main,u=n.mask,h=n.maskId,m=n.transform,p=c.width,_=c.icon,v=u.width,g=u.icon,S=W2({transform:m,containerWidth:v,iconWidth:p}),T={tag:"rect",attributes:De(De({},Xh),{},{fill:"white"})},w=_.children?{children:_.children.map(Zx)}:{},M={tag:"g",attributes:De({},S.inner),children:[Zx(De({tag:_.tag,attributes:De(De({},_.attributes),S.path)},w))]},y={tag:"g",attributes:De({},S.outer),children:[M]},F="mask-".concat(h||Dx()),z="clip-".concat(h||Dx()),D={tag:"mask",attributes:De(De({},Xh),{},{id:F,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[T,y]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:z},children:J3(g)},D]};return r.push(B,{tag:"rect",attributes:De({fill:"currentColor","clip-path":"url(#".concat(z,")"),mask:"url(#".concat(F,")")},Xh)}),{children:r,attributes:o}}}},tw={provides:function(e){var n=!1;Tr.matchMedia&&(n=Tr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],o={fill:"currentColor"},c={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:De(De({},o),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var u=De(De({},c),{},{attributeName:"opacity"}),h={tag:"circle",attributes:De(De({},o),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||h.children.push({tag:"animate",attributes:De(De({},c),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:De(De({},u),{},{values:"1;0;1;1;0;1;"})}),r.push(h),r.push({tag:"path",attributes:De(De({},o),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:De(De({},u),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:De(De({},o),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:De(De({},u),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},nw={hooks:function(){return{parseNodeAttributes:function(n,r){var o=r.getAttribute("data-fa-symbol"),c=o===null?!1:o===""?!0:o;return n.symbol=c,n}}}},iw=[Y2,z3,B3,V3,H3,Z3,Q3,$3,ew,tw,nw];u3(iw,{mixoutsTo:xi});xi.noAuto;var ps=xi.config;xi.library;xi.dom;var Jb=xi.parse;xi.findIconDefinition;xi.toHtml;var aw=xi.icon;xi.layer;xi.text;xi.counter;var Wh={exports:{}},El={},jh={exports:{}},qh={};var Qx;function rw(){return Qx||(Qx=1,(function(a){function e(U,H){var te=U.length;U.push(H);e:for(;0<te;){var re=te-1>>>1,be=U[re];if(0<o(be,H))U[re]=H,U[te]=be,te=re;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var H=U[0],te=U.pop();if(te!==H){U[0]=te;e:for(var re=0,be=U.length,O=be>>>1;re<O;){var K=2*(re+1)-1,ne=U[K],Me=K+1,Q=U[Me];if(0>o(ne,te))Me<be&&0>o(Q,ne)?(U[re]=Q,U[Me]=te,re=Me):(U[re]=ne,U[K]=te,re=K);else if(Me<be&&0>o(Q,te))U[re]=Q,U[Me]=te,re=Me;else break e}}return H}function o(U,H){var te=U.sortIndex-H.sortIndex;return te!==0?te:U.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();a.unstable_now=function(){return u.now()-h}}var m=[],p=[],_=1,v=null,g=3,S=!1,T=!1,w=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function D(U){for(var H=n(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=U)r(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=n(p)}}function B(U){if(w=!1,D(U),!T)if(n(m)!==null)T=!0,L||(L=!0,Y());else{var H=n(p);H!==null&&J(B,H.startTime-U)}}var L=!1,N=-1,A=5,I=-1;function k(){return M?!0:!(a.unstable_now()-I<A)}function G(){if(M=!1,L){var U=a.unstable_now();I=U;var H=!0;try{e:{T=!1,w&&(w=!1,F(N),N=-1),S=!0;var te=g;try{t:{for(D(U),v=n(m);v!==null&&!(v.expirationTime>U&&k());){var re=v.callback;if(typeof re=="function"){v.callback=null,g=v.priorityLevel;var be=re(v.expirationTime<=U);if(U=a.unstable_now(),typeof be=="function"){v.callback=be,D(U),H=!0;break t}v===n(m)&&r(m),D(U)}else r(m);v=n(m)}if(v!==null)H=!0;else{var O=n(p);O!==null&&J(B,O.startTime-U),H=!1}}break e}finally{v=null,g=te,S=!1}H=void 0}}finally{H?Y():L=!1}}}var Y;if(typeof z=="function")Y=function(){z(G)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,me=pe.port2;pe.port1.onmessage=G,Y=function(){me.postMessage(null)}}else Y=function(){y(G,0)};function J(U,H){N=y(function(){U(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(U){U.callback=null},a.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<U?Math.floor(1e3/U):5},a.unstable_getCurrentPriorityLevel=function(){return g},a.unstable_next=function(U){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var te=g;g=H;try{return U()}finally{g=te}},a.unstable_requestPaint=function(){M=!0},a.unstable_runWithPriority=function(U,H){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var te=g;g=U;try{return H()}finally{g=te}},a.unstable_scheduleCallback=function(U,H,te){var re=a.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?re+te:re):te=re,U){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=te+be,U={id:_++,callback:H,priorityLevel:U,startTime:te,expirationTime:be,sortIndex:-1},te>re?(U.sortIndex=te,e(p,U),n(m)===null&&U===n(p)&&(w?(F(N),N=-1):w=!0,J(B,te-re))):(U.sortIndex=be,e(m,U),T||S||(T=!0,L||(L=!0,Y()))),U},a.unstable_shouldYield=k,a.unstable_wrapCallback=function(U){var H=g;return function(){var te=g;g=H;try{return U.apply(this,arguments)}finally{g=te}}}})(qh)),qh}var $x;function sw(){return $x||($x=1,jh.exports=rw()),jh.exports}var Yh={exports:{}},Hn={};var Jx;function ow(){if(Jx)return Hn;Jx=1;var a=ag();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Hn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Hn.flushSync=function(m){var p=u.T,_=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=p,r.p=_,r.d.f()}},Hn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Hn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Hn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:S}):_==="script"&&r.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Hn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Hn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Hn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Hn.requestFormReset=function(m){r.d.r(m)},Hn.unstable_batchedUpdates=function(m,p){return m(p)},Hn.useFormState=function(m,p,_){return u.H.useFormState(m,p,_)},Hn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Hn.version="19.2.8",Hn}var ey;function lw(){if(ey)return Yh.exports;ey=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Yh.exports=ow(),Yh.exports}var ty;function cw(){if(ty)return El;ty=1;var a=sw(),e=ag(),n=lw();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===s)return m(f),t;if(d===l)return m(f),i;d=d.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=d;else{for(var x=!1,C=f.child;C;){if(C===s){x=!0,s=f,l=d;break}if(C===l){x=!0,l=f,s=d;break}C=C.sibling}if(!x){for(C=d.child;C;){if(C===s){x=!0,s=d,l=f;break}if(C===l){x=!0,l=d,s=f;break}C=C.sibling}if(!x)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function _(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=_(t),i!==null)return i;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),z=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Y(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Symbol.for("react.client.reference");function me(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===pe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case B:return"Suspense";case L:return"SuspenseList";case I:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case z:return t.displayName||"Context";case F:return(t._context.displayName||"Context")+".Consumer";case D:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case N:return i=t.displayName||null,i!==null?i:me(t.type)||"Memo";case A:i=t._payload,t=t._init;try{return me(t(i))}catch{}}return null}var J=Array.isArray,U=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},re=[],be=-1;function O(t){return{current:t}}function K(t){0>be||(t.current=re[be],re[be]=null,be--)}function ne(t,i){be++,re[be]=t.current,t.current=i}var Me=O(null),Q=O(null),W=O(null),le=O(null);function xe(t,i){switch(ne(W,i),ne(Q,t),ne(Me,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?B_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=B_(i),t=V_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(Me),ne(Me,t)}function Pe(){K(Me),K(Q),K(W)}function nt(t){t.memoizedState!==null&&ne(le,t);var i=Me.current,s=V_(i,t.type);i!==s&&(ne(Q,t),ne(Me,s))}function Ke(t){Q.current===t&&(K(Me),K(Q)),le.current===t&&(K(le),xl._currentValue=te)}var Lt,dt;function bt(t){if(Lt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Lt=i&&i[1]||"",dt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Lt+t+dt}var yt=!1;function gt(t,i){if(!t||yt)return"";yt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Ae=function(){throw Error()};if(Object.defineProperty(Ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ae,[])}catch(ge){var de=ge}Reflect.construct(t,[],Ae)}else{try{Ae.call()}catch(ge){de=ge}t.call(Ae.prototype)}}else{try{throw Error()}catch(ge){de=ge}(Ae=t())&&typeof Ae.catch=="function"&&Ae.catch(function(){})}}catch(ge){if(ge&&de&&typeof ge.stack=="string")return[ge.stack,de.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),x=d[0],C=d[1];if(x&&C){var V=x.split(`
`),se=C.split(`
`);for(f=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;f<se.length&&!se[f].includes("DetermineComponentFrameRoot");)f++;if(l===V.length||f===se.length)for(l=V.length-1,f=se.length-1;1<=l&&0<=f&&V[l]!==se[f];)f--;for(;1<=l&&0<=f;l--,f--)if(V[l]!==se[f]){if(l!==1||f!==1)do if(l--,f--,0>f||V[l]!==se[f]){var ye=`
`+V[l].replace(" at new "," at ");return t.displayName&&ye.includes("<anonymous>")&&(ye=ye.replace("<anonymous>",t.displayName)),ye}while(1<=l&&0<=f);break}}}finally{yt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?bt(s):""}function Jt(t,i){switch(t.tag){case 26:case 27:case 5:return bt(t.type);case 16:return bt("Lazy");case 13:return t.child!==i&&i!==null?bt("Suspense Fallback"):bt("Suspense");case 19:return bt("SuspenseList");case 0:case 15:return gt(t.type,!1);case 11:return gt(t.type.render,!1);case 1:return gt(t.type,!0);case 31:return bt("Activity");default:return""}}function en(t){try{var i="",s=null;do i+=Jt(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Zt=Object.prototype.hasOwnProperty,tn=a.unstable_scheduleCallback,Te=a.unstable_cancelCallback,Ze=a.unstable_shouldYield,X=a.unstable_requestPaint,mt=a.unstable_now,ut=a.unstable_getCurrentPriorityLevel,P=a.unstable_ImmediatePriority,E=a.unstable_UserBlockingPriority,$=a.unstable_NormalPriority,ie=a.unstable_LowPriority,he=a.unstable_IdlePriority,Ce=a.log,Ue=a.unstable_setDisableYieldValue,ve=null,_e=null;function Le(t){if(typeof Ce=="function"&&Ue(t),_e&&typeof _e.setStrictMode=="function")try{_e.setStrictMode(ve,t)}catch{}}var Ge=Math.clz32?Math.clz32:tt,ze=Math.log,Ie=Math.LN2;function tt(t){return t>>>=0,t===0?32:31-(ze(t)/Ie|0)|0}var it=256,ft=262144,q=4194304;function Ne(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Se(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,d=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var C=l&134217727;return C!==0?(l=C&~d,l!==0?f=Ne(l):(x&=C,x!==0?f=Ne(x):s||(s=C&~t,s!==0&&(f=Ne(s))))):(C=l&~d,C!==0?f=Ne(C):x!==0?f=Ne(x):s||(s=l&~t,s!==0&&(f=Ne(s)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:f}function Oe(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function He(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function we(){var t=q;return q<<=1,(q&62914560)===0&&(q=4194304),t}function Qe(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function We(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function sn(t,i,s,l,f,d){var x=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var C=t.entanglements,V=t.expirationTimes,se=t.hiddenUpdates;for(s=x&~s;0<s;){var ye=31-Ge(s),Ae=1<<ye;C[ye]=0,V[ye]=-1;var de=se[ye];if(de!==null)for(se[ye]=null,ye=0;ye<de.length;ye++){var ge=de[ye];ge!==null&&(ge.lane&=-536870913)}s&=~Ae}l!==0&&Vt(t,l,0),d!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=d&~(x&~i))}function Vt(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Ge(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function ri(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Ge(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function si(t,i){var s=i&-i;return s=(s&42)!==0?1:Uo(s),(s&(t.suspendedLanes|i))!==0?0:s}function Uo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Oo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Po(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:cx(t.type))}function xs(t,i){var s=H.p;try{return H.p=t,i()}finally{H.p=s}}var qi=Math.random().toString(36).slice(2),gn="__reactFiber$"+qi,Un="__reactProps$"+qi,Kn="__reactContainer$"+qi,Cr="__reactEvents$"+qi,ac="__reactListeners$"+qi,rc="__reactHandles$"+qi,Dr="__reactResources$"+qi,Xa="__reactMarker$"+qi;function Wa(t){delete t[gn],delete t[Un],delete t[Cr],delete t[ac],delete t[rc]}function ca(t){var i=t[gn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Kn]||s[gn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=q_(t);t!==null;){if(s=t[gn])return s;t=q_(t)}return i}t=s,s=t.parentNode}return null}function ua(t){if(t=t[gn]||t[Kn]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Nr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function ja(t){var i=t[Dr];return i||(i=t[Dr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function vn(t){t[Xa]=!0}var sc=new Set,R={};function Z(t,i){fe(t,i),fe(t+"Capture",i)}function fe(t,i){for(R[t]=i,t=0;t<i.length;t++)sc.add(i[t])}var ce=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ue={},Be={};function Xe(t){return Zt.call(Be,t)?!0:Zt.call(ue,t)?!1:ce.test(t)?Be[t]=!0:(ue[t]=!0,!1)}function Fe(t,i,s){if(Xe(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function qe(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function je(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function at(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function et(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(x){s=""+x,d.call(this,x)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ot(t){if(!t._valueTracker){var i=vt(t)?"checked":"value";t._valueTracker=et(t,i,""+t[i])}}function on(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=vt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Qt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ht=/[\n"\\]/g;function Gt(t){return t.replace(Ht,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ke(t,i,s,l,f,d,x,C){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),i!=null?x==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+at(i)):t.value!==""+at(i)&&(t.value=""+at(i)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),i!=null?Mt(t,x,at(i)):s!=null?Mt(t,x,at(s)):l!=null&&t.removeAttribute("value"),f==null&&d!=null&&(t.defaultChecked=!!d),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+at(C):t.removeAttribute("name")}function Vn(t,i,s,l,f,d,x,C){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Ot(t);return}s=s!=null?""+at(s):"",i=i!=null?""+at(i):s,C||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=C?t.checked:!!l,t.defaultChecked=!!l,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Ot(t)}function Mt(t,i,s){i==="number"&&Qt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function En(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+at(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function oi(t,i,s){if(i!=null&&(i=""+at(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+at(s):""}function Ui(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(J(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=at(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Ot(t)}function li(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ln(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||kt.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Oi(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&ln(t,f,l)}else for(var d in i)i.hasOwnProperty(d)&&ln(t,d,i[d])}function Bt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Lr(t){return qa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function fa(){}var Pf=null;function If(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ys=null,Ss=null;function zg(t){var i=ua(t);if(i&&(t=i.stateNode)){var s=t[Un]||null;e:switch(t=i.stateNode,i.type){case"input":if(ke(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Gt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[Un]||null;if(!f)throw Error(r(90));ke(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&on(l)}break e;case"textarea":oi(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&En(t,!!s.multiple,i,!1)}}}var Ff=!1;function Bg(t,i,s){if(Ff)return t(i,s);Ff=!0;try{var l=t(i);return l}finally{if(Ff=!1,(ys!==null||Ss!==null)&&(qc(),ys&&(i=ys,t=Ss,Ss=ys=null,zg(i),t)))for(i=0;i<t.length;i++)zg(t[i])}}function Io(t,i){var s=t.stateNode;if(s===null)return null;var l=s[Un]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var da=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zf=!1;if(da)try{var Fo={};Object.defineProperty(Fo,"passive",{get:function(){zf=!0}}),window.addEventListener("test",Fo,Fo),window.removeEventListener("test",Fo,Fo)}catch{zf=!1}var Ya=null,Bf=null,oc=null;function Vg(){if(oc)return oc;var t,i=Bf,s=i.length,l,f="value"in Ya?Ya.value:Ya.textContent,d=f.length;for(t=0;t<s&&i[t]===f[t];t++);var x=s-t;for(l=1;l<=x&&i[s-l]===f[d-l];l++);return oc=f.slice(t,1<l?1-l:void 0)}function lc(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function cc(){return!0}function Hg(){return!1}function Zn(t){function i(s,l,f,d,x){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(s=t[C],this[C]=s?s(d):d[C]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?cc:Hg,this.isPropagationStopped=Hg,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=cc)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=cc)},persist:function(){},isPersistent:cc}),i}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uc=Zn(Ur),zo=v({},Ur,{view:0,detail:0}),_M=Zn(zo),Vf,Hf,Bo,fc=v({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bo&&(Bo&&t.type==="mousemove"?(Vf=t.screenX-Bo.screenX,Hf=t.screenY-Bo.screenY):Hf=Vf=0,Bo=t),Vf)},movementY:function(t){return"movementY"in t?t.movementY:Hf}}),Gg=Zn(fc),xM=v({},fc,{dataTransfer:0}),yM=Zn(xM),SM=v({},zo,{relatedTarget:0}),Gf=Zn(SM),bM=v({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),MM=Zn(bM),EM=v({},Ur,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),TM=Zn(EM),AM=v({},Ur,{data:0}),kg=Zn(AM),wM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},CM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DM(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=CM[t])?!!i[t]:!1}function kf(){return DM}var NM=v({},zo,{key:function(t){if(t.key){var i=wM[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=lc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?RM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kf,charCode:function(t){return t.type==="keypress"?lc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),LM=Zn(NM),UM=v({},fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xg=Zn(UM),OM=v({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kf}),PM=Zn(OM),IM=v({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),FM=Zn(IM),zM=v({},fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),BM=Zn(zM),VM=v({},Ur,{newState:0,oldState:0}),HM=Zn(VM),GM=[9,13,27,32],Xf=da&&"CompositionEvent"in window,Vo=null;da&&"documentMode"in document&&(Vo=document.documentMode);var kM=da&&"TextEvent"in window&&!Vo,Wg=da&&(!Xf||Vo&&8<Vo&&11>=Vo),jg=" ",qg=!1;function Yg(t,i){switch(t){case"keyup":return GM.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bs=!1;function XM(t,i){switch(t){case"compositionend":return Kg(i);case"keypress":return i.which!==32?null:(qg=!0,jg);case"textInput":return t=i.data,t===jg&&qg?null:t;default:return null}}function WM(t,i){if(bs)return t==="compositionend"||!Xf&&Yg(t,i)?(t=Vg(),oc=Bf=Ya=null,bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Wg&&i.locale!=="ko"?null:i.data;default:return null}}var jM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zg(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!jM[t.type]:i==="textarea"}function Qg(t,i,s,l){ys?Ss?Ss.push(l):Ss=[l]:ys=l,i=eu(i,"onChange"),0<i.length&&(s=new uc("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Ho=null,Go=null;function qM(t){U_(t,0)}function dc(t){var i=Nr(t);if(on(i))return t}function $g(t,i){if(t==="change")return i}var Jg=!1;if(da){var Wf;if(da){var jf="oninput"in document;if(!jf){var e0=document.createElement("div");e0.setAttribute("oninput","return;"),jf=typeof e0.oninput=="function"}Wf=jf}else Wf=!1;Jg=Wf&&(!document.documentMode||9<document.documentMode)}function t0(){Ho&&(Ho.detachEvent("onpropertychange",n0),Go=Ho=null)}function n0(t){if(t.propertyName==="value"&&dc(Go)){var i=[];Qg(i,Go,t,If(t)),Bg(qM,i)}}function YM(t,i,s){t==="focusin"?(t0(),Ho=i,Go=s,Ho.attachEvent("onpropertychange",n0)):t==="focusout"&&t0()}function KM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dc(Go)}function ZM(t,i){if(t==="click")return dc(i)}function QM(t,i){if(t==="input"||t==="change")return dc(i)}function $M(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ci=typeof Object.is=="function"?Object.is:$M;function ko(t,i){if(ci(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Zt.call(i,f)||!ci(t[f],i[f]))return!1}return!0}function i0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function a0(t,i){var s=i0(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=i0(s)}}function r0(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?r0(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function s0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Qt(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Qt(t.document)}return i}function qf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var JM=da&&"documentMode"in document&&11>=document.documentMode,Ms=null,Yf=null,Xo=null,Kf=!1;function o0(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Kf||Ms==null||Ms!==Qt(l)||(l=Ms,"selectionStart"in l&&qf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Xo&&ko(Xo,l)||(Xo=l,l=eu(Yf,"onSelect"),0<l.length&&(i=new uc("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=Ms)))}function Or(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var Es={animationend:Or("Animation","AnimationEnd"),animationiteration:Or("Animation","AnimationIteration"),animationstart:Or("Animation","AnimationStart"),transitionrun:Or("Transition","TransitionRun"),transitionstart:Or("Transition","TransitionStart"),transitioncancel:Or("Transition","TransitionCancel"),transitionend:Or("Transition","TransitionEnd")},Zf={},l0={};da&&(l0=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function Pr(t){if(Zf[t])return Zf[t];if(!Es[t])return t;var i=Es[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in l0)return Zf[t]=i[s];return t}var c0=Pr("animationend"),u0=Pr("animationiteration"),f0=Pr("animationstart"),eE=Pr("transitionrun"),tE=Pr("transitionstart"),nE=Pr("transitioncancel"),d0=Pr("transitionend"),h0=new Map,Qf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qf.push("scrollEnd");function Pi(t,i){h0.set(t,i),Z(i,[t])}var hc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},yi=[],Ts=0,$f=0;function pc(){for(var t=Ts,i=$f=Ts=0;i<t;){var s=yi[i];yi[i++]=null;var l=yi[i];yi[i++]=null;var f=yi[i];yi[i++]=null;var d=yi[i];if(yi[i++]=null,l!==null&&f!==null){var x=l.pending;x===null?f.next=f:(f.next=x.next,x.next=f),l.pending=f}d!==0&&p0(s,f,d)}}function mc(t,i,s,l){yi[Ts++]=t,yi[Ts++]=i,yi[Ts++]=s,yi[Ts++]=l,$f|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Jf(t,i,s,l){return mc(t,i,s,l),gc(t)}function Ir(t,i){return mc(t,null,null,i),gc(t)}function p0(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,d=t.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(f=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,f&&i!==null&&(f=31-Ge(s),t=d.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),d):null}function gc(t){if(50<dl)throw dl=0,lh=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var As={};function iE(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(t,i,s,l){return new iE(t,i,s,l)}function ed(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ha(t,i){var s=t.alternate;return s===null?(s=ui(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function m0(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function vc(t,i,s,l,f,d){var x=0;if(l=t,typeof t=="function")ed(t)&&(x=1);else if(typeof t=="string")x=lT(t,s,Me.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case I:return t=ui(31,s,i,f),t.elementType=I,t.lanes=d,t;case w:return Fr(s.children,f,d,i);case M:x=8,f|=24;break;case y:return t=ui(12,s,i,f|2),t.elementType=y,t.lanes=d,t;case B:return t=ui(13,s,i,f),t.elementType=B,t.lanes=d,t;case L:return t=ui(19,s,i,f),t.elementType=L,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:x=10;break e;case F:x=9;break e;case D:x=11;break e;case N:x=14;break e;case A:x=16,l=null;break e}x=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=ui(x,s,i,f),i.elementType=t,i.type=l,i.lanes=d,i}function Fr(t,i,s,l){return t=ui(7,t,l,i),t.lanes=s,t}function td(t,i,s){return t=ui(6,t,null,i),t.lanes=s,t}function g0(t){var i=ui(18,null,null,0);return i.stateNode=t,i}function nd(t,i,s){return i=ui(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var v0=new WeakMap;function Si(t,i){if(typeof t=="object"&&t!==null){var s=v0.get(t);return s!==void 0?s:(i={value:t,source:i,stack:en(i)},v0.set(t,i),i)}return{value:t,source:i,stack:en(i)}}var ws=[],Rs=0,_c=null,Wo=0,bi=[],Mi=0,Ka=null,Ki=1,Zi="";function pa(t,i){ws[Rs++]=Wo,ws[Rs++]=_c,_c=t,Wo=i}function _0(t,i,s){bi[Mi++]=Ki,bi[Mi++]=Zi,bi[Mi++]=Ka,Ka=t;var l=Ki;t=Zi;var f=32-Ge(l)-1;l&=~(1<<f),s+=1;var d=32-Ge(i)+f;if(30<d){var x=f-f%5;d=(l&(1<<x)-1).toString(32),l>>=x,f-=x,Ki=1<<32-Ge(i)+f|s<<f|l,Zi=d+t}else Ki=1<<d|s<<f|l,Zi=t}function id(t){t.return!==null&&(pa(t,1),_0(t,1,0))}function ad(t){for(;t===_c;)_c=ws[--Rs],ws[Rs]=null,Wo=ws[--Rs],ws[Rs]=null;for(;t===Ka;)Ka=bi[--Mi],bi[Mi]=null,Zi=bi[--Mi],bi[Mi]=null,Ki=bi[--Mi],bi[Mi]=null}function x0(t,i){bi[Mi++]=Ki,bi[Mi++]=Zi,bi[Mi++]=Ka,Ki=i.id,Zi=i.overflow,Ka=t}var On=null,nn=null,Ct=!1,Za=null,Ei=!1,rd=Error(r(519));function Qa(t){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jo(Si(i,t)),rd}function y0(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[gn]=t,i[Un]=l,s){case"dialog":Tt("cancel",i),Tt("close",i);break;case"iframe":case"object":case"embed":Tt("load",i);break;case"video":case"audio":for(s=0;s<pl.length;s++)Tt(pl[s],i);break;case"source":Tt("error",i);break;case"img":case"image":case"link":Tt("error",i),Tt("load",i);break;case"details":Tt("toggle",i);break;case"input":Tt("invalid",i),Vn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Tt("invalid",i);break;case"textarea":Tt("invalid",i),Ui(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||F_(i.textContent,s)?(l.popover!=null&&(Tt("beforetoggle",i),Tt("toggle",i)),l.onScroll!=null&&Tt("scroll",i),l.onScrollEnd!=null&&Tt("scrollend",i),l.onClick!=null&&(i.onclick=fa),i=!0):i=!1,i||Qa(t,!0)}function S0(t){for(On=t.return;On;)switch(On.tag){case 5:case 31:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:On=On.return}}function Cs(t){if(t!==On)return!1;if(!Ct)return S0(t),Ct=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Mh(t.type,t.memoizedProps)),s=!s),s&&nn&&Qa(t),S0(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));nn=j_(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));nn=j_(t)}else i===27?(i=nn,fr(t.type)?(t=Rh,Rh=null,nn=t):nn=i):nn=On?Ai(t.stateNode.nextSibling):null;return!0}function zr(){nn=On=null,Ct=!1}function sd(){var t=Za;return t!==null&&(ei===null?ei=t:ei.push.apply(ei,t),Za=null),t}function jo(t){Za===null?Za=[t]:Za.push(t)}var od=O(null),Br=null,ma=null;function $a(t,i,s){ne(od,i._currentValue),i._currentValue=s}function ga(t){t._currentValue=od.current,K(od)}function ld(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function cd(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var d=f.dependencies;if(d!==null){var x=f.child;d=d.firstContext;e:for(;d!==null;){var C=d;d=f;for(var V=0;V<i.length;V++)if(C.context===i[V]){d.lanes|=s,C=d.alternate,C!==null&&(C.lanes|=s),ld(d.return,s,t),l||(x=null);break e}d=C.next}}else if(f.tag===18){if(x=f.return,x===null)throw Error(r(341));x.lanes|=s,d=x.alternate,d!==null&&(d.lanes|=s),ld(x,s,t),x=null}else x=f.child;if(x!==null)x.return=f;else for(x=f;x!==null;){if(x===t){x=null;break}if(f=x.sibling,f!==null){f.return=x.return,x=f;break}x=x.return}f=x}}function Ds(t,i,s,l){t=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var x=f.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var C=f.type;ci(f.pendingProps.value,x.value)||(t!==null?t.push(C):t=[C])}}else if(f===le.current){if(x=f.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(xl):t=[xl])}f=f.return}t!==null&&cd(i,t,s,l),i.flags|=262144}function xc(t){for(t=t.firstContext;t!==null;){if(!ci(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Vr(t){Br=t,ma=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Pn(t){return b0(Br,t)}function yc(t,i){return Br===null&&Vr(t),b0(t,i)}function b0(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ma===null){if(t===null)throw Error(r(308));ma=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ma=ma.next=i;return s}var aE=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},rE=a.unstable_scheduleCallback,sE=a.unstable_NormalPriority,_n={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ud(){return{controller:new aE,data:new Map,refCount:0}}function qo(t){t.refCount--,t.refCount===0&&rE(sE,function(){t.controller.abort()})}var Yo=null,fd=0,Ns=0,Ls=null;function oE(t,i){if(Yo===null){var s=Yo=[];fd=0,Ns=ph(),Ls={status:"pending",value:void 0,then:function(l){s.push(l)}}}return fd++,i.then(M0,M0),i}function M0(){if(--fd===0&&Yo!==null){Ls!==null&&(Ls.status="fulfilled");var t=Yo;Yo=null,Ns=0,Ls=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function lE(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var E0=U.S;U.S=function(t,i){o_=mt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&oE(t,i),E0!==null&&E0(t,i)};var Hr=O(null);function dd(){var t=Hr.current;return t!==null?t:$t.pooledCache}function Sc(t,i){i===null?ne(Hr,Hr.current):ne(Hr,i.pool)}function T0(){var t=dd();return t===null?null:{parent:_n._currentValue,pool:t}}var Us=Error(r(460)),hd=Error(r(474)),bc=Error(r(542)),Mc={then:function(){}};function A0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function w0(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(fa,fa),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,C0(t),t;default:if(typeof i.status=="string")i.then(fa,fa);else{if(t=$t,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,C0(t),t}throw kr=i,Us}}function Gr(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(kr=s,Us):s}}var kr=null;function R0(){if(kr===null)throw Error(r(459));var t=kr;return kr=null,t}function C0(t){if(t===Us||t===bc)throw Error(r(483))}var Os=null,Ko=0;function Ec(t){var i=Ko;return Ko+=1,Os===null&&(Os=[]),w0(Os,t,i)}function Zo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Tc(t,i){throw i.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function D0(t){function i(ee,j){if(t){var ae=ee.deletions;ae===null?(ee.deletions=[j],ee.flags|=16):ae.push(j)}}function s(ee,j){if(!t)return null;for(;j!==null;)i(ee,j),j=j.sibling;return null}function l(ee){for(var j=new Map;ee!==null;)ee.key!==null?j.set(ee.key,ee):j.set(ee.index,ee),ee=ee.sibling;return j}function f(ee,j){return ee=ha(ee,j),ee.index=0,ee.sibling=null,ee}function d(ee,j,ae){return ee.index=ae,t?(ae=ee.alternate,ae!==null?(ae=ae.index,ae<j?(ee.flags|=67108866,j):ae):(ee.flags|=67108866,j)):(ee.flags|=1048576,j)}function x(ee){return t&&ee.alternate===null&&(ee.flags|=67108866),ee}function C(ee,j,ae,Ee){return j===null||j.tag!==6?(j=td(ae,ee.mode,Ee),j.return=ee,j):(j=f(j,ae),j.return=ee,j)}function V(ee,j,ae,Ee){var rt=ae.type;return rt===w?ye(ee,j,ae.props.children,Ee,ae.key):j!==null&&(j.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===A&&Gr(rt)===j.type)?(j=f(j,ae.props),Zo(j,ae),j.return=ee,j):(j=vc(ae.type,ae.key,ae.props,null,ee.mode,Ee),Zo(j,ae),j.return=ee,j)}function se(ee,j,ae,Ee){return j===null||j.tag!==4||j.stateNode.containerInfo!==ae.containerInfo||j.stateNode.implementation!==ae.implementation?(j=nd(ae,ee.mode,Ee),j.return=ee,j):(j=f(j,ae.children||[]),j.return=ee,j)}function ye(ee,j,ae,Ee,rt){return j===null||j.tag!==7?(j=Fr(ae,ee.mode,Ee,rt),j.return=ee,j):(j=f(j,ae),j.return=ee,j)}function Ae(ee,j,ae){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=td(""+j,ee.mode,ae),j.return=ee,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case S:return ae=vc(j.type,j.key,j.props,null,ee.mode,ae),Zo(ae,j),ae.return=ee,ae;case T:return j=nd(j,ee.mode,ae),j.return=ee,j;case A:return j=Gr(j),Ae(ee,j,ae)}if(J(j)||Y(j))return j=Fr(j,ee.mode,ae,null),j.return=ee,j;if(typeof j.then=="function")return Ae(ee,Ec(j),ae);if(j.$$typeof===z)return Ae(ee,yc(ee,j),ae);Tc(ee,j)}return null}function de(ee,j,ae,Ee){var rt=j!==null?j.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return rt!==null?null:C(ee,j,""+ae,Ee);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case S:return ae.key===rt?V(ee,j,ae,Ee):null;case T:return ae.key===rt?se(ee,j,ae,Ee):null;case A:return ae=Gr(ae),de(ee,j,ae,Ee)}if(J(ae)||Y(ae))return rt!==null?null:ye(ee,j,ae,Ee,null);if(typeof ae.then=="function")return de(ee,j,Ec(ae),Ee);if(ae.$$typeof===z)return de(ee,j,yc(ee,ae),Ee);Tc(ee,ae)}return null}function ge(ee,j,ae,Ee,rt){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number"||typeof Ee=="bigint")return ee=ee.get(ae)||null,C(j,ee,""+Ee,rt);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case S:return ee=ee.get(Ee.key===null?ae:Ee.key)||null,V(j,ee,Ee,rt);case T:return ee=ee.get(Ee.key===null?ae:Ee.key)||null,se(j,ee,Ee,rt);case A:return Ee=Gr(Ee),ge(ee,j,ae,Ee,rt)}if(J(Ee)||Y(Ee))return ee=ee.get(ae)||null,ye(j,ee,Ee,rt,null);if(typeof Ee.then=="function")return ge(ee,j,ae,Ec(Ee),rt);if(Ee.$$typeof===z)return ge(ee,j,ae,yc(j,Ee),rt);Tc(j,Ee)}return null}function Ye(ee,j,ae,Ee){for(var rt=null,Pt=null,Je=j,xt=j=0,wt=null;Je!==null&&xt<ae.length;xt++){Je.index>xt?(wt=Je,Je=null):wt=Je.sibling;var It=de(ee,Je,ae[xt],Ee);if(It===null){Je===null&&(Je=wt);break}t&&Je&&It.alternate===null&&i(ee,Je),j=d(It,j,xt),Pt===null?rt=It:Pt.sibling=It,Pt=It,Je=wt}if(xt===ae.length)return s(ee,Je),Ct&&pa(ee,xt),rt;if(Je===null){for(;xt<ae.length;xt++)Je=Ae(ee,ae[xt],Ee),Je!==null&&(j=d(Je,j,xt),Pt===null?rt=Je:Pt.sibling=Je,Pt=Je);return Ct&&pa(ee,xt),rt}for(Je=l(Je);xt<ae.length;xt++)wt=ge(Je,ee,xt,ae[xt],Ee),wt!==null&&(t&&wt.alternate!==null&&Je.delete(wt.key===null?xt:wt.key),j=d(wt,j,xt),Pt===null?rt=wt:Pt.sibling=wt,Pt=wt);return t&&Je.forEach(function(gr){return i(ee,gr)}),Ct&&pa(ee,xt),rt}function lt(ee,j,ae,Ee){if(ae==null)throw Error(r(151));for(var rt=null,Pt=null,Je=j,xt=j=0,wt=null,It=ae.next();Je!==null&&!It.done;xt++,It=ae.next()){Je.index>xt?(wt=Je,Je=null):wt=Je.sibling;var gr=de(ee,Je,It.value,Ee);if(gr===null){Je===null&&(Je=wt);break}t&&Je&&gr.alternate===null&&i(ee,Je),j=d(gr,j,xt),Pt===null?rt=gr:Pt.sibling=gr,Pt=gr,Je=wt}if(It.done)return s(ee,Je),Ct&&pa(ee,xt),rt;if(Je===null){for(;!It.done;xt++,It=ae.next())It=Ae(ee,It.value,Ee),It!==null&&(j=d(It,j,xt),Pt===null?rt=It:Pt.sibling=It,Pt=It);return Ct&&pa(ee,xt),rt}for(Je=l(Je);!It.done;xt++,It=ae.next())It=ge(Je,ee,xt,It.value,Ee),It!==null&&(t&&It.alternate!==null&&Je.delete(It.key===null?xt:It.key),j=d(It,j,xt),Pt===null?rt=It:Pt.sibling=It,Pt=It);return t&&Je.forEach(function(xT){return i(ee,xT)}),Ct&&pa(ee,xt),rt}function Kt(ee,j,ae,Ee){if(typeof ae=="object"&&ae!==null&&ae.type===w&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case S:e:{for(var rt=ae.key;j!==null;){if(j.key===rt){if(rt=ae.type,rt===w){if(j.tag===7){s(ee,j.sibling),Ee=f(j,ae.props.children),Ee.return=ee,ee=Ee;break e}}else if(j.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===A&&Gr(rt)===j.type){s(ee,j.sibling),Ee=f(j,ae.props),Zo(Ee,ae),Ee.return=ee,ee=Ee;break e}s(ee,j);break}else i(ee,j);j=j.sibling}ae.type===w?(Ee=Fr(ae.props.children,ee.mode,Ee,ae.key),Ee.return=ee,ee=Ee):(Ee=vc(ae.type,ae.key,ae.props,null,ee.mode,Ee),Zo(Ee,ae),Ee.return=ee,ee=Ee)}return x(ee);case T:e:{for(rt=ae.key;j!==null;){if(j.key===rt)if(j.tag===4&&j.stateNode.containerInfo===ae.containerInfo&&j.stateNode.implementation===ae.implementation){s(ee,j.sibling),Ee=f(j,ae.children||[]),Ee.return=ee,ee=Ee;break e}else{s(ee,j);break}else i(ee,j);j=j.sibling}Ee=nd(ae,ee.mode,Ee),Ee.return=ee,ee=Ee}return x(ee);case A:return ae=Gr(ae),Kt(ee,j,ae,Ee)}if(J(ae))return Ye(ee,j,ae,Ee);if(Y(ae)){if(rt=Y(ae),typeof rt!="function")throw Error(r(150));return ae=rt.call(ae),lt(ee,j,ae,Ee)}if(typeof ae.then=="function")return Kt(ee,j,Ec(ae),Ee);if(ae.$$typeof===z)return Kt(ee,j,yc(ee,ae),Ee);Tc(ee,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint"?(ae=""+ae,j!==null&&j.tag===6?(s(ee,j.sibling),Ee=f(j,ae),Ee.return=ee,ee=Ee):(s(ee,j),Ee=td(ae,ee.mode,Ee),Ee.return=ee,ee=Ee),x(ee)):s(ee,j)}return function(ee,j,ae,Ee){try{Ko=0;var rt=Kt(ee,j,ae,Ee);return Os=null,rt}catch(Je){if(Je===Us||Je===bc)throw Je;var Pt=ui(29,Je,null,ee.mode);return Pt.lanes=Ee,Pt.return=ee,Pt}}}var Xr=D0(!0),N0=D0(!1),Ja=!1;function pd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function md(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function er(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function tr(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ft&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=gc(t),p0(t,null,s),i}return mc(t,l,i,s),gc(t)}function Qo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ri(t,s)}}function gd(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var x={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?f=d=x:d=d.next=x,s=s.next}while(s!==null);d===null?f=d=i:d=d.next=i}else f=d=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var vd=!1;function $o(){if(vd){var t=Ls;if(t!==null)throw t}}function Jo(t,i,s,l){vd=!1;var f=t.updateQueue;Ja=!1;var d=f.firstBaseUpdate,x=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var V=C,se=V.next;V.next=null,x===null?d=se:x.next=se,x=V;var ye=t.alternate;ye!==null&&(ye=ye.updateQueue,C=ye.lastBaseUpdate,C!==x&&(C===null?ye.firstBaseUpdate=se:C.next=se,ye.lastBaseUpdate=V))}if(d!==null){var Ae=f.baseState;x=0,ye=se=V=null,C=d;do{var de=C.lane&-536870913,ge=de!==C.lane;if(ge?(At&de)===de:(l&de)===de){de!==0&&de===Ns&&(vd=!0),ye!==null&&(ye=ye.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Ye=t,lt=C;de=i;var Kt=s;switch(lt.tag){case 1:if(Ye=lt.payload,typeof Ye=="function"){Ae=Ye.call(Kt,Ae,de);break e}Ae=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=lt.payload,de=typeof Ye=="function"?Ye.call(Kt,Ae,de):Ye,de==null)break e;Ae=v({},Ae,de);break e;case 2:Ja=!0}}de=C.callback,de!==null&&(t.flags|=64,ge&&(t.flags|=8192),ge=f.callbacks,ge===null?f.callbacks=[de]:ge.push(de))}else ge={lane:de,tag:C.tag,payload:C.payload,callback:C.callback,next:null},ye===null?(se=ye=ge,V=Ae):ye=ye.next=ge,x|=de;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;ge=C,C=ge.next,ge.next=null,f.lastBaseUpdate=ge,f.shared.pending=null}}while(!0);ye===null&&(V=Ae),f.baseState=V,f.firstBaseUpdate=se,f.lastBaseUpdate=ye,d===null&&(f.shared.lanes=0),sr|=x,t.lanes=x,t.memoizedState=Ae}}function L0(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function U0(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)L0(s[t],i)}var Ps=O(null),Ac=O(0);function O0(t,i){t=Ta,ne(Ac,t),ne(Ps,i),Ta=t|i.baseLanes}function _d(){ne(Ac,Ta),ne(Ps,Ps.current)}function xd(){Ta=Ac.current,K(Ps),K(Ac)}var fi=O(null),Ti=null;function nr(t){var i=t.alternate;ne(pn,pn.current&1),ne(fi,t),Ti===null&&(i===null||Ps.current!==null||i.memoizedState!==null)&&(Ti=t)}function yd(t){ne(pn,pn.current),ne(fi,t),Ti===null&&(Ti=t)}function P0(t){t.tag===22?(ne(pn,pn.current),ne(fi,t),Ti===null&&(Ti=t)):ir()}function ir(){ne(pn,pn.current),ne(fi,fi.current)}function di(t){K(fi),Ti===t&&(Ti=null),K(pn)}var pn=O(0);function wc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Ah(s)||wh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var va=0,_t=null,qt=null,xn=null,Rc=!1,Is=!1,Wr=!1,Cc=0,el=0,Fs=null,cE=0;function un(){throw Error(r(321))}function Sd(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!ci(t[s],i[s]))return!1;return!0}function bd(t,i,s,l,f,d){return va=d,_t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,U.H=t===null||t.memoizedState===null?_v:Fd,Wr=!1,d=s(l,f),Wr=!1,Is&&(d=F0(i,s,l,f)),I0(t),d}function I0(t){U.H=il;var i=qt!==null&&qt.next!==null;if(va=0,xn=qt=_t=null,Rc=!1,el=0,Fs=null,i)throw Error(r(300));t===null||yn||(t=t.dependencies,t!==null&&xc(t)&&(yn=!0))}function F0(t,i,s,l){_t=t;var f=0;do{if(Is&&(Fs=null),el=0,Is=!1,25<=f)throw Error(r(301));if(f+=1,xn=qt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}U.H=xv,d=i(s,l)}while(Is);return d}function uE(){var t=U.H,i=t.useState()[0];return i=typeof i.then=="function"?tl(i):i,t=t.useState()[0],(qt!==null?qt.memoizedState:null)!==t&&(_t.flags|=1024),i}function Md(){var t=Cc!==0;return Cc=0,t}function Ed(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function Td(t){if(Rc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Rc=!1}va=0,xn=qt=_t=null,Is=!1,el=Cc=0,Fs=null}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?_t.memoizedState=xn=t:xn=xn.next=t,xn}function mn(){if(qt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var i=xn===null?_t.memoizedState:xn.next;if(i!==null)xn=i,qt=t;else{if(t===null)throw _t.alternate===null?Error(r(467)):Error(r(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},xn===null?_t.memoizedState=xn=t:xn=xn.next=t}return xn}function Dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tl(t){var i=el;return el+=1,Fs===null&&(Fs=[]),t=w0(Fs,t,i),i=_t,(xn===null?i.memoizedState:xn.next)===null&&(i=i.alternate,U.H=i===null||i.memoizedState===null?_v:Fd),t}function Nc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return tl(t);if(t.$$typeof===z)return Pn(t)}throw Error(r(438,String(t)))}function Ad(t){var i=null,s=_t.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=_t.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Dc(),_t.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=k;return i.index++,s}function _a(t,i){return typeof i=="function"?i(t):i}function Lc(t){var i=mn();return wd(i,qt,t)}function wd(t,i,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,d=l.pending;if(d!==null){if(f!==null){var x=f.next;f.next=d.next,d.next=x}i.baseQueue=f=d,l.pending=null}if(d=t.baseState,f===null)t.memoizedState=d;else{i=f.next;var C=x=null,V=null,se=i,ye=!1;do{var Ae=se.lane&-536870913;if(Ae!==se.lane?(At&Ae)===Ae:(va&Ae)===Ae){var de=se.revertLane;if(de===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),Ae===Ns&&(ye=!0);else if((va&de)===de){se=se.next,de===Ns&&(ye=!0);continue}else Ae={lane:0,revertLane:se.revertLane,gesture:null,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null},V===null?(C=V=Ae,x=d):V=V.next=Ae,_t.lanes|=de,sr|=de;Ae=se.action,Wr&&s(d,Ae),d=se.hasEagerState?se.eagerState:s(d,Ae)}else de={lane:Ae,revertLane:se.revertLane,gesture:se.gesture,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null},V===null?(C=V=de,x=d):V=V.next=de,_t.lanes|=Ae,sr|=Ae;se=se.next}while(se!==null&&se!==i);if(V===null?x=d:V.next=C,!ci(d,t.memoizedState)&&(yn=!0,ye&&(s=Ls,s!==null)))throw s;t.memoizedState=d,t.baseState=x,t.baseQueue=V,l.lastRenderedState=d}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Rd(t){var i=mn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,d=i.memoizedState;if(f!==null){s.pending=null;var x=f=f.next;do d=t(d,x.action),x=x.next;while(x!==f);ci(d,i.memoizedState)||(yn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function z0(t,i,s){var l=_t,f=mn(),d=Ct;if(d){if(s===void 0)throw Error(r(407));s=s()}else s=i();var x=!ci((qt||f).memoizedState,s);if(x&&(f.memoizedState=s,yn=!0),f=f.queue,Nd(H0.bind(null,l,f,t),[t]),f.getSnapshot!==i||x||xn!==null&&xn.memoizedState.tag&1){if(l.flags|=2048,zs(9,{destroy:void 0},V0.bind(null,l,f,s,i),null),$t===null)throw Error(r(349));d||(va&127)!==0||B0(l,i,s)}return s}function B0(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=_t.updateQueue,i===null?(i=Dc(),_t.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function V0(t,i,s,l){i.value=s,i.getSnapshot=l,G0(i)&&k0(t)}function H0(t,i,s){return s(function(){G0(i)&&k0(t)})}function G0(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!ci(t,s)}catch{return!0}}function k0(t){var i=Ir(t,2);i!==null&&ti(i,t,2)}function Cd(t){var i=Wn();if(typeof t=="function"){var s=t;if(t=s(),Wr){Le(!0);try{s()}finally{Le(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:t},i}function X0(t,i,s,l){return t.baseState=s,wd(t,qt,typeof l=="function"?l:_a)}function fE(t,i,s,l,f){if(Pc(t))throw Error(r(485));if(t=i.action,t!==null){var d={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};U.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,W0(i,d)):(d.next=s.next,i.pending=s.next=d)}}function W0(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var d=U.T,x={};U.T=x;try{var C=s(f,l),V=U.S;V!==null&&V(x,C),j0(t,i,C)}catch(se){Dd(t,i,se)}finally{d!==null&&x.types!==null&&(d.types=x.types),U.T=d}}else try{d=s(f,l),j0(t,i,d)}catch(se){Dd(t,i,se)}}function j0(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){q0(t,i,l)},function(l){return Dd(t,i,l)}):q0(t,i,s)}function q0(t,i,s){i.status="fulfilled",i.value=s,Y0(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,W0(t,s)))}function Dd(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Y0(i),i=i.next;while(i!==l)}t.action=null}function Y0(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function K0(t,i){return i}function Z0(t,i){if(Ct){var s=$t.formState;if(s!==null){e:{var l=_t;if(Ct){if(nn){t:{for(var f=nn,d=Ei;f.nodeType!==8;){if(!d){f=null;break t}if(f=Ai(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){nn=Ai(f.nextSibling),l=f.data==="F!";break e}}Qa(l)}l=!1}l&&(i=s[0])}}return s=Wn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:K0,lastRenderedState:i},s.queue=l,s=mv.bind(null,_t,l),l.dispatch=s,l=Cd(!1),d=Id.bind(null,_t,!1,l.queue),l=Wn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=fE.bind(null,_t,f,d,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function Q0(t){var i=mn();return $0(i,qt,t)}function $0(t,i,s){if(i=wd(t,i,K0)[0],t=Lc(_a)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=tl(i)}catch(x){throw x===Us?bc:x}else l=i;i=mn();var f=i.queue,d=f.dispatch;return s!==i.memoizedState&&(_t.flags|=2048,zs(9,{destroy:void 0},dE.bind(null,f,s),null)),[l,d,t]}function dE(t,i){t.action=i}function J0(t){var i=mn(),s=qt;if(s!==null)return $0(i,s,t);mn(),i=i.memoizedState,s=mn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function zs(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=_t.updateQueue,i===null&&(i=Dc(),_t.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function ev(){return mn().memoizedState}function Uc(t,i,s,l){var f=Wn();_t.flags|=t,f.memoizedState=zs(1|i,{destroy:void 0},s,l===void 0?null:l)}function Oc(t,i,s,l){var f=mn();l=l===void 0?null:l;var d=f.memoizedState.inst;qt!==null&&l!==null&&Sd(l,qt.memoizedState.deps)?f.memoizedState=zs(i,d,s,l):(_t.flags|=t,f.memoizedState=zs(1|i,d,s,l))}function tv(t,i){Uc(8390656,8,t,i)}function Nd(t,i){Oc(2048,8,t,i)}function hE(t){_t.flags|=4;var i=_t.updateQueue;if(i===null)i=Dc(),_t.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function nv(t){var i=mn().memoizedState;return hE({ref:i,nextImpl:t}),function(){if((Ft&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function iv(t,i){return Oc(4,2,t,i)}function av(t,i){return Oc(4,4,t,i)}function rv(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function sv(t,i,s){s=s!=null?s.concat([t]):null,Oc(4,4,rv.bind(null,i,t),s)}function Ld(){}function ov(t,i){var s=mn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Sd(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function lv(t,i){var s=mn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Sd(i,l[1]))return l[0];if(l=t(),Wr){Le(!0);try{t()}finally{Le(!1)}}return s.memoizedState=[l,i],l}function Ud(t,i,s){return s===void 0||(va&1073741824)!==0&&(At&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=c_(),_t.lanes|=t,sr|=t,s)}function cv(t,i,s,l){return ci(s,i)?s:Ps.current!==null?(t=Ud(t,s,l),ci(t,i)||(yn=!0),t):(va&42)===0||(va&1073741824)!==0&&(At&261930)===0?(yn=!0,t.memoizedState=s):(t=c_(),_t.lanes|=t,sr|=t,i)}function uv(t,i,s,l,f){var d=H.p;H.p=d!==0&&8>d?d:8;var x=U.T,C={};U.T=C,Id(t,!1,i,s);try{var V=f(),se=U.S;if(se!==null&&se(C,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var ye=lE(V,l);nl(t,i,ye,mi(t))}else nl(t,i,l,mi(t))}catch(Ae){nl(t,i,{then:function(){},status:"rejected",reason:Ae},mi())}finally{H.p=d,x!==null&&C.types!==null&&(x.types=C.types),U.T=x}}function pE(){}function Od(t,i,s,l){if(t.tag!==5)throw Error(r(476));var f=fv(t).queue;uv(t,f,i,te,s===null?pE:function(){return dv(t),s(l)})}function fv(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:te},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function dv(t){var i=fv(t);i.next===null&&(i=t.alternate.memoizedState),nl(t,i.next.queue,{},mi())}function Pd(){return Pn(xl)}function hv(){return mn().memoizedState}function pv(){return mn().memoizedState}function mE(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=mi();t=er(s);var l=tr(i,t,s);l!==null&&(ti(l,i,s),Qo(l,i,s)),i={cache:ud()},t.payload=i;return}i=i.return}}function gE(t,i,s){var l=mi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Pc(t)?gv(i,s):(s=Jf(t,i,s,l),s!==null&&(ti(s,t,l),vv(s,i,l)))}function mv(t,i,s){var l=mi();nl(t,i,s,l)}function nl(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Pc(t))gv(i,f);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var x=i.lastRenderedState,C=d(x,s);if(f.hasEagerState=!0,f.eagerState=C,ci(C,x))return mc(t,i,f,0),$t===null&&pc(),!1}catch{}if(s=Jf(t,i,f,l),s!==null)return ti(s,t,l),vv(s,i,l),!0}return!1}function Id(t,i,s,l){if(l={lane:2,revertLane:ph(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Pc(t)){if(i)throw Error(r(479))}else i=Jf(t,s,l,2),i!==null&&ti(i,t,2)}function Pc(t){var i=t.alternate;return t===_t||i!==null&&i===_t}function gv(t,i){Is=Rc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function vv(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ri(t,s)}}var il={readContext:Pn,use:Nc,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un};il.useEffectEvent=un;var _v={readContext:Pn,use:Nc,useCallback:function(t,i){return Wn().memoizedState=[t,i===void 0?null:i],t},useContext:Pn,useEffect:tv,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,Uc(4194308,4,rv.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Uc(4194308,4,t,i)},useInsertionEffect:function(t,i){Uc(4,2,t,i)},useMemo:function(t,i){var s=Wn();i=i===void 0?null:i;var l=t();if(Wr){Le(!0);try{t()}finally{Le(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=Wn();if(s!==void 0){var f=s(i);if(Wr){Le(!0);try{s(i)}finally{Le(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=gE.bind(null,_t,t),[l.memoizedState,t]},useRef:function(t){var i=Wn();return t={current:t},i.memoizedState=t},useState:function(t){t=Cd(t);var i=t.queue,s=mv.bind(null,_t,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Ld,useDeferredValue:function(t,i){var s=Wn();return Ud(s,t,i)},useTransition:function(){var t=Cd(!1);return t=uv.bind(null,_t,t.queue,!0,!1),Wn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=_t,f=Wn();if(Ct){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),$t===null)throw Error(r(349));(At&127)!==0||B0(l,i,s)}f.memoizedState=s;var d={value:s,getSnapshot:i};return f.queue=d,tv(H0.bind(null,l,d,t),[t]),l.flags|=2048,zs(9,{destroy:void 0},V0.bind(null,l,d,s,i),null),s},useId:function(){var t=Wn(),i=$t.identifierPrefix;if(Ct){var s=Zi,l=Ki;s=(l&~(1<<32-Ge(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Cc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=cE++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Pd,useFormState:Z0,useActionState:Z0,useOptimistic:function(t){var i=Wn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Id.bind(null,_t,!0,s),s.dispatch=i,[t,i]},useMemoCache:Ad,useCacheRefresh:function(){return Wn().memoizedState=mE.bind(null,_t)},useEffectEvent:function(t){var i=Wn(),s={impl:t};return i.memoizedState=s,function(){if((Ft&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},Fd={readContext:Pn,use:Nc,useCallback:ov,useContext:Pn,useEffect:Nd,useImperativeHandle:sv,useInsertionEffect:iv,useLayoutEffect:av,useMemo:lv,useReducer:Lc,useRef:ev,useState:function(){return Lc(_a)},useDebugValue:Ld,useDeferredValue:function(t,i){var s=mn();return cv(s,qt.memoizedState,t,i)},useTransition:function(){var t=Lc(_a)[0],i=mn().memoizedState;return[typeof t=="boolean"?t:tl(t),i]},useSyncExternalStore:z0,useId:hv,useHostTransitionStatus:Pd,useFormState:Q0,useActionState:Q0,useOptimistic:function(t,i){var s=mn();return X0(s,qt,t,i)},useMemoCache:Ad,useCacheRefresh:pv};Fd.useEffectEvent=nv;var xv={readContext:Pn,use:Nc,useCallback:ov,useContext:Pn,useEffect:Nd,useImperativeHandle:sv,useInsertionEffect:iv,useLayoutEffect:av,useMemo:lv,useReducer:Rd,useRef:ev,useState:function(){return Rd(_a)},useDebugValue:Ld,useDeferredValue:function(t,i){var s=mn();return qt===null?Ud(s,t,i):cv(s,qt.memoizedState,t,i)},useTransition:function(){var t=Rd(_a)[0],i=mn().memoizedState;return[typeof t=="boolean"?t:tl(t),i]},useSyncExternalStore:z0,useId:hv,useHostTransitionStatus:Pd,useFormState:J0,useActionState:J0,useOptimistic:function(t,i){var s=mn();return qt!==null?X0(s,qt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Ad,useCacheRefresh:pv};xv.useEffectEvent=nv;function zd(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:v({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Bd={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=mi(),f=er(l);f.payload=i,s!=null&&(f.callback=s),i=tr(t,f,l),i!==null&&(ti(i,t,l),Qo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=mi(),f=er(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=tr(t,f,l),i!==null&&(ti(i,t,l),Qo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=mi(),l=er(s);l.tag=2,i!=null&&(l.callback=i),i=tr(t,l,s),i!==null&&(ti(i,t,s),Qo(i,t,s))}};function yv(t,i,s,l,f,d,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,x):i.prototype&&i.prototype.isPureReactComponent?!ko(s,l)||!ko(f,d):!0}function Sv(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Bd.enqueueReplaceState(i,i.state,null)}function jr(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=v({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function bv(t){hc(t)}function Mv(t){console.error(t)}function Ev(t){hc(t)}function Ic(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Tv(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Vd(t,i,s){return s=er(s),s.tag=3,s.payload={element:null},s.callback=function(){Ic(t,i)},s}function Av(t){return t=er(t),t.tag=3,t}function wv(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;t.payload=function(){return f(d)},t.callback=function(){Tv(i,s,l)}}var x=s.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){Tv(i,s,l),typeof f!="function"&&(or===null?or=new Set([this]):or.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function vE(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Ds(i,s,f,!0),s=fi.current,s!==null){switch(s.tag){case 31:case 13:return Ti===null?Yc():s.alternate===null&&fn===0&&(fn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Mc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),fh(t,l,f)),!1;case 22:return s.flags|=65536,l===Mc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),fh(t,l,f)),!1}throw Error(r(435,s.tag))}return fh(t,l,f),Yc(),!1}if(Ct)return i=fi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==rd&&(t=Error(r(422),{cause:l}),jo(Si(t,s)))):(l!==rd&&(i=Error(r(423),{cause:l}),jo(Si(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Si(l,s),f=Vd(t.stateNode,l,f),gd(t,f),fn!==4&&(fn=2)),!1;var d=Error(r(520),{cause:l});if(d=Si(d,s),fl===null?fl=[d]:fl.push(d),fn!==4&&(fn=2),i===null)return!0;l=Si(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Vd(s.stateNode,l,t),gd(s,t),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(or===null||!or.has(d))))return s.flags|=65536,f&=-f,s.lanes|=f,f=Av(f),wv(f,t,s,l),gd(s,f),!1}s=s.return}while(s!==null);return!1}var Hd=Error(r(461)),yn=!1;function In(t,i,s,l){i.child=t===null?N0(i,null,s,l):Xr(i,t.child,s,l)}function Rv(t,i,s,l,f){s=s.render;var d=i.ref;if("ref"in l){var x={};for(var C in l)C!=="ref"&&(x[C]=l[C])}else x=l;return Vr(i),l=bd(t,i,s,x,d,f),C=Md(),t!==null&&!yn?(Ed(t,i,f),xa(t,i,f)):(Ct&&C&&id(i),i.flags|=1,In(t,i,l,f),i.child)}function Cv(t,i,s,l,f){if(t===null){var d=s.type;return typeof d=="function"&&!ed(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,Dv(t,i,d,l,f)):(t=vc(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!Kd(t,f)){var x=d.memoizedProps;if(s=s.compare,s=s!==null?s:ko,s(x,l)&&t.ref===i.ref)return xa(t,i,f)}return i.flags|=1,t=ha(d,l),t.ref=i.ref,t.return=i,i.child=t}function Dv(t,i,s,l,f){if(t!==null){var d=t.memoizedProps;if(ko(d,l)&&t.ref===i.ref)if(yn=!1,i.pendingProps=l=d,Kd(t,f))(t.flags&131072)!==0&&(yn=!0);else return i.lanes=t.lanes,xa(t,i,f)}return Gd(t,i,s,l,f)}function Nv(t,i,s,l){var f=l.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,i.child=null;return Lv(t,i,d,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Sc(i,d!==null?d.cachePool:null),d!==null?O0(i,d):_d(),P0(i);else return l=i.lanes=536870912,Lv(t,i,d!==null?d.baseLanes|s:s,s,l)}else d!==null?(Sc(i,d.cachePool),O0(i,d),ir(),i.memoizedState=null):(t!==null&&Sc(i,null),_d(),ir());return In(t,i,f,s),i.child}function al(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Lv(t,i,s,l,f){var d=dd();return d=d===null?null:{parent:_n._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},t!==null&&Sc(i,null),_d(),P0(i),t!==null&&Ds(t,i,l,!0),i.childLanes=f,null}function Fc(t,i){return i=Bc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function Uv(t,i,s){return Xr(i,t.child,null,s),t=Fc(i,i.pendingProps),t.flags|=2,di(i),i.memoizedState=null,t}function _E(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Ct){if(l.mode==="hidden")return t=Fc(i,l),i.lanes=536870912,al(null,t);if(yd(i),(t=nn)?(t=W_(t,Ei),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ka!==null?{id:Ki,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},s=g0(t),s.return=i,i.child=s,On=i,nn=null)):t=null,t===null)throw Qa(i);return i.lanes=536870912,null}return Fc(i,l)}var d=t.memoizedState;if(d!==null){var x=d.dehydrated;if(yd(i),f)if(i.flags&256)i.flags&=-257,i=Uv(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(r(558));else if(yn||Ds(t,i,s,!1),f=(s&t.childLanes)!==0,yn||f){if(l=$t,l!==null&&(x=si(l,s),x!==0&&x!==d.retryLane))throw d.retryLane=x,Ir(t,x),ti(l,t,x),Hd;Yc(),i=Uv(t,i,s)}else t=d.treeContext,nn=Ai(x.nextSibling),On=i,Ct=!0,Za=null,Ei=!1,t!==null&&x0(i,t),i=Fc(i,l),i.flags|=4096;return i}return t=ha(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function zc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Gd(t,i,s,l,f){return Vr(i),s=bd(t,i,s,l,void 0,f),l=Md(),t!==null&&!yn?(Ed(t,i,f),xa(t,i,f)):(Ct&&l&&id(i),i.flags|=1,In(t,i,s,f),i.child)}function Ov(t,i,s,l,f,d){return Vr(i),i.updateQueue=null,s=F0(i,l,s,f),I0(t),l=Md(),t!==null&&!yn?(Ed(t,i,d),xa(t,i,d)):(Ct&&l&&id(i),i.flags|=1,In(t,i,s,d),i.child)}function Pv(t,i,s,l,f){if(Vr(i),i.stateNode===null){var d=As,x=s.contextType;typeof x=="object"&&x!==null&&(d=Pn(x)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Bd,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},pd(i),x=s.contextType,d.context=typeof x=="object"&&x!==null?Pn(x):As,d.state=i.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(zd(i,s,x,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&Bd.enqueueReplaceState(d,d.state,null),Jo(i,l,d,f),$o(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var C=i.memoizedProps,V=jr(s,C);d.props=V;var se=d.context,ye=s.contextType;x=As,typeof ye=="object"&&ye!==null&&(x=Pn(ye));var Ae=s.getDerivedStateFromProps;ye=typeof Ae=="function"||typeof d.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,ye||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(C||se!==x)&&Sv(i,d,l,x),Ja=!1;var de=i.memoizedState;d.state=de,Jo(i,l,d,f),$o(),se=i.memoizedState,C||de!==se||Ja?(typeof Ae=="function"&&(zd(i,s,Ae,l),se=i.memoizedState),(V=Ja||yv(i,s,V,l,de,se,x))?(ye||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=se),d.props=l,d.state=se,d.context=x,l=V):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,md(t,i),x=i.memoizedProps,ye=jr(s,x),d.props=ye,Ae=i.pendingProps,de=d.context,se=s.contextType,V=As,typeof se=="object"&&se!==null&&(V=Pn(se)),C=s.getDerivedStateFromProps,(se=typeof C=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==Ae||de!==V)&&Sv(i,d,l,V),Ja=!1,de=i.memoizedState,d.state=de,Jo(i,l,d,f),$o();var ge=i.memoizedState;x!==Ae||de!==ge||Ja||t!==null&&t.dependencies!==null&&xc(t.dependencies)?(typeof C=="function"&&(zd(i,s,C,l),ge=i.memoizedState),(ye=Ja||yv(i,s,ye,l,de,ge,V)||t!==null&&t.dependencies!==null&&xc(t.dependencies))?(se||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,ge,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,ge,V)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&de===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&de===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ge),d.props=l,d.state=ge,d.context=V,l=ye):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&de===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&de===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,zc(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Xr(i,t.child,null,f),i.child=Xr(i,null,s,f)):In(t,i,s,f),i.memoizedState=d.state,t=i.child):t=xa(t,i,f),t}function Iv(t,i,s,l){return zr(),i.flags|=256,In(t,i,s,l),i.child}var kd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xd(t){return{baseLanes:t,cachePool:T0()}}function Wd(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=pi),t}function Fv(t,i,s){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,x;if((x=d)||(x=t!==null&&t.memoizedState===null?!1:(pn.current&2)!==0),x&&(f=!0,i.flags&=-129),x=(i.flags&32)!==0,i.flags&=-33,t===null){if(Ct){if(f?nr(i):ir(),(t=nn)?(t=W_(t,Ei),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ka!==null?{id:Ki,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},s=g0(t),s.return=i,i.child=s,On=i,nn=null)):t=null,t===null)throw Qa(i);return wh(t)?i.lanes=32:i.lanes=536870912,null}var C=l.children;return l=l.fallback,f?(ir(),f=i.mode,C=Bc({mode:"hidden",children:C},f),l=Fr(l,f,s,null),C.return=i,l.return=i,C.sibling=l,i.child=C,l=i.child,l.memoizedState=Xd(s),l.childLanes=Wd(t,x,s),i.memoizedState=kd,al(null,l)):(nr(i),jd(i,C))}var V=t.memoizedState;if(V!==null&&(C=V.dehydrated,C!==null)){if(d)i.flags&256?(nr(i),i.flags&=-257,i=qd(t,i,s)):i.memoizedState!==null?(ir(),i.child=t.child,i.flags|=128,i=null):(ir(),C=l.fallback,f=i.mode,l=Bc({mode:"visible",children:l.children},f),C=Fr(C,f,s,null),C.flags|=2,l.return=i,C.return=i,l.sibling=C,i.child=l,Xr(i,t.child,null,s),l=i.child,l.memoizedState=Xd(s),l.childLanes=Wd(t,x,s),i.memoizedState=kd,i=al(null,l));else if(nr(i),wh(C)){if(x=C.nextSibling&&C.nextSibling.dataset,x)var se=x.dgst;x=se,l=Error(r(419)),l.stack="",l.digest=x,jo({value:l,source:null,stack:null}),i=qd(t,i,s)}else if(yn||Ds(t,i,s,!1),x=(s&t.childLanes)!==0,yn||x){if(x=$t,x!==null&&(l=si(x,s),l!==0&&l!==V.retryLane))throw V.retryLane=l,Ir(t,l),ti(x,t,l),Hd;Ah(C)||Yc(),i=qd(t,i,s)}else Ah(C)?(i.flags|=192,i.child=t.child,i=null):(t=V.treeContext,nn=Ai(C.nextSibling),On=i,Ct=!0,Za=null,Ei=!1,t!==null&&x0(i,t),i=jd(i,l.children),i.flags|=4096);return i}return f?(ir(),C=l.fallback,f=i.mode,V=t.child,se=V.sibling,l=ha(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,se!==null?C=ha(se,C):(C=Fr(C,f,s,null),C.flags|=2),C.return=i,l.return=i,l.sibling=C,i.child=l,al(null,l),l=i.child,C=t.child.memoizedState,C===null?C=Xd(s):(f=C.cachePool,f!==null?(V=_n._currentValue,f=f.parent!==V?{parent:V,pool:V}:f):f=T0(),C={baseLanes:C.baseLanes|s,cachePool:f}),l.memoizedState=C,l.childLanes=Wd(t,x,s),i.memoizedState=kd,al(t.child,l)):(nr(i),s=t.child,t=s.sibling,s=ha(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(x=i.deletions,x===null?(i.deletions=[t],i.flags|=16):x.push(t)),i.child=s,i.memoizedState=null,s)}function jd(t,i){return i=Bc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Bc(t,i){return t=ui(22,t,null,i),t.lanes=0,t}function qd(t,i,s){return Xr(i,t.child,null,s),t=jd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function zv(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),ld(t.return,i,s)}function Yd(t,i,s,l,f,d){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:d}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=l,x.tail=s,x.tailMode=f,x.treeForkCount=d)}function Bv(t,i,s){var l=i.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var x=pn.current,C=(x&2)!==0;if(C?(x=x&1|2,i.flags|=128):x&=1,ne(pn,x),In(t,i,l,s),l=Ct?Wo:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zv(t,s,i);else if(t.tag===19)zv(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&wc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Yd(i,!1,f,s,d,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&wc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Yd(i,!0,s,null,d,l);break;case"together":Yd(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function xa(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),sr|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(Ds(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=ha(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ha(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Kd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&xc(t)))}function xE(t,i,s){switch(i.tag){case 3:xe(i,i.stateNode.containerInfo),$a(i,_n,t.memoizedState.cache),zr();break;case 27:case 5:nt(i);break;case 4:xe(i,i.stateNode.containerInfo);break;case 10:$a(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,yd(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(nr(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Fv(t,i,s):(nr(i),t=xa(t,i,s),t!==null?t.sibling:null);nr(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Ds(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return Bv(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ne(pn,pn.current),l)break;return null;case 22:return i.lanes=0,Nv(t,i,s,i.pendingProps);case 24:$a(i,_n,t.memoizedState.cache)}return xa(t,i,s)}function Vv(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)yn=!0;else{if(!Kd(t,s)&&(i.flags&128)===0)return yn=!1,xE(t,i,s);yn=(t.flags&131072)!==0}else yn=!1,Ct&&(i.flags&1048576)!==0&&_0(i,Wo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Gr(i.elementType),i.type=t,typeof t=="function")ed(t)?(l=jr(t,l),i.tag=1,i=Pv(null,i,t,l,s)):(i.tag=0,i=Gd(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===D){i.tag=11,i=Rv(null,i,t,l,s);break e}else if(f===N){i.tag=14,i=Cv(null,i,t,l,s);break e}}throw i=me(t)||t,Error(r(306,i,""))}}return i;case 0:return Gd(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=jr(l,i.pendingProps),Pv(t,i,l,f,s);case 3:e:{if(xe(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,md(t,i),Jo(i,l,null,s);var x=i.memoizedState;if(l=x.cache,$a(i,_n,l),l!==d.cache&&cd(i,[_n],s,!0),$o(),l=x.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:x.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Iv(t,i,l,s);break e}else if(l!==f){f=Si(Error(r(424)),i),jo(f),i=Iv(t,i,l,s);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,nn=Ai(t.firstChild),On=i,Ct=!0,Za=null,Ei=!0,s=N0(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(zr(),l===f){i=xa(t,i,s);break e}In(t,i,l,s)}i=i.child}return i;case 26:return zc(t,i),t===null?(s=Q_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ct||(s=i.type,t=i.pendingProps,l=tu(W.current).createElement(s),l[gn]=i,l[Un]=t,Fn(l,s,t),vn(l),i.stateNode=l):i.memoizedState=Q_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return nt(i),t===null&&Ct&&(l=i.stateNode=Y_(i.type,i.pendingProps,W.current),On=i,Ei=!0,f=nn,fr(i.type)?(Rh=f,nn=Ai(l.firstChild)):nn=f),In(t,i,i.pendingProps.children,s),zc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Ct&&((f=l=nn)&&(l=KE(l,i.type,i.pendingProps,Ei),l!==null?(i.stateNode=l,On=i,nn=Ai(l.firstChild),Ei=!1,f=!0):f=!1),f||Qa(i)),nt(i),f=i.type,d=i.pendingProps,x=t!==null?t.memoizedProps:null,l=d.children,Mh(f,d)?l=null:x!==null&&Mh(f,x)&&(i.flags|=32),i.memoizedState!==null&&(f=bd(t,i,uE,null,null,s),xl._currentValue=f),zc(t,i),In(t,i,l,s),i.child;case 6:return t===null&&Ct&&((t=s=nn)&&(s=ZE(s,i.pendingProps,Ei),s!==null?(i.stateNode=s,On=i,nn=null,t=!0):t=!1),t||Qa(i)),null;case 13:return Fv(t,i,s);case 4:return xe(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Xr(i,null,l,s):In(t,i,l,s),i.child;case 11:return Rv(t,i,i.type,i.pendingProps,s);case 7:return In(t,i,i.pendingProps,s),i.child;case 8:return In(t,i,i.pendingProps.children,s),i.child;case 12:return In(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,$a(i,i.type,l.value),In(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Vr(i),f=Pn(f),l=l(f),i.flags|=1,In(t,i,l,s),i.child;case 14:return Cv(t,i,i.type,i.pendingProps,s);case 15:return Dv(t,i,i.type,i.pendingProps,s);case 19:return Bv(t,i,s);case 31:return _E(t,i,s);case 22:return Nv(t,i,s,i.pendingProps);case 24:return Vr(i),l=Pn(_n),t===null?(f=dd(),f===null&&(f=$t,d=ud(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=s),f=d),i.memoizedState={parent:l,cache:f},pd(i),$a(i,_n,f)):((t.lanes&s)!==0&&(md(t,i),Jo(i,null,null,s),$o()),f=t.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),$a(i,_n,l)):(l=d.cache,$a(i,_n,l),l!==f.cache&&cd(i,[_n],s,!0))),In(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function ya(t){t.flags|=4}function Zd(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(h_())t.flags|=8192;else throw kr=Mc,hd}else t.flags&=-16777217}function Hv(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!nx(i))if(h_())t.flags|=8192;else throw kr=Mc,hd}function Vc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?we():536870912,t.lanes|=i,Gs|=i)}function rl(t,i){if(!Ct)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function an(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function yE(t,i,s){var l=i.pendingProps;switch(ad(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(i),null;case 1:return an(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ga(_n),Pe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Cs(i)?ya(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,sd())),an(i),null;case 26:var f=i.type,d=i.memoizedState;return t===null?(ya(i),d!==null?(an(i),Hv(i,d)):(an(i),Zd(i,f,null,l,s))):d?d!==t.memoizedState?(ya(i),an(i),Hv(i,d)):(an(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&ya(i),an(i),Zd(i,f,t,l,s)),null;case 27:if(Ke(i),s=W.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ya(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return an(i),null}t=Me.current,Cs(i)?y0(i):(t=Y_(f,l,s),i.stateNode=t,ya(i))}return an(i),null;case 5:if(Ke(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ya(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return an(i),null}if(d=Me.current,Cs(i))y0(i);else{var x=tu(W.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?x.createElement("select",{is:l.is}):x.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?x.createElement(f,{is:l.is}):x.createElement(f)}}d[gn]=i,d[Un]=l;e:for(x=i.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===i)break e;for(;x.sibling===null;){if(x.return===null||x.return===i)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}i.stateNode=d;e:switch(Fn(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ya(i)}}return an(i),Zd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&ya(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=W.current,Cs(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=On,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[gn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||F_(t.nodeValue,s)),t||Qa(i,!0)}else t=tu(t).createTextNode(l),t[gn]=i,i.stateNode=t}return an(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=Cs(i),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[gn]=i}else zr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;an(i),t=!1}else s=sd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(di(i),i):(di(i),null);if((i.flags&128)!==0)throw Error(r(558))}return an(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Cs(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[gn]=i}else zr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;an(i),f=!1}else f=sd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(di(i),i):(di(i),null)}return di(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),Vc(i,i.updateQueue),an(i),null);case 4:return Pe(),t===null&&_h(i.stateNode.containerInfo),an(i),null;case 10:return ga(i.type),an(i),null;case 19:if(K(pn),l=i.memoizedState,l===null)return an(i),null;if(f=(i.flags&128)!==0,d=l.rendering,d===null)if(f)rl(l,!1);else{if(fn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=wc(t),d!==null){for(i.flags|=128,rl(l,!1),t=d.updateQueue,i.updateQueue=t,Vc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)m0(s,t),s=s.sibling;return ne(pn,pn.current&1|2),Ct&&pa(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&mt()>Wc&&(i.flags|=128,f=!0,rl(l,!1),i.lanes=4194304)}else{if(!f)if(t=wc(d),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,Vc(i,t),rl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Ct)return an(i),null}else 2*mt()-l.renderingStartTime>Wc&&s!==536870912&&(i.flags|=128,f=!0,rl(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(t=l.last,t!==null?t.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=mt(),t.sibling=null,s=pn.current,ne(pn,f?s&1|2:s&1),Ct&&pa(i,l.treeForkCount),t):(an(i),null);case 22:case 23:return di(i),xd(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(an(i),i.subtreeFlags&6&&(i.flags|=8192)):an(i),s=i.updateQueue,s!==null&&Vc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&K(Hr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ga(_n),an(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function SE(t,i){switch(ad(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ga(_n),Pe(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Ke(i),null;case 31:if(i.memoizedState!==null){if(di(i),i.alternate===null)throw Error(r(340));zr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(di(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));zr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return K(pn),null;case 4:return Pe(),null;case 10:return ga(i.type),null;case 22:case 23:return di(i),xd(),t!==null&&K(Hr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return ga(_n),null;case 25:return null;default:return null}}function Gv(t,i){switch(ad(i),i.tag){case 3:ga(_n),Pe();break;case 26:case 27:case 5:Ke(i);break;case 4:Pe();break;case 31:i.memoizedState!==null&&di(i);break;case 13:di(i);break;case 19:K(pn);break;case 10:ga(i.type);break;case 22:case 23:di(i),xd(),t!==null&&K(Hr);break;case 24:ga(_n)}}function sl(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var d=s.create,x=s.inst;l=d(),x.destroy=l}s=s.next}while(s!==f)}}catch(C){Wt(i,i.return,C)}}function ar(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&t)===t){var x=l.inst,C=x.destroy;if(C!==void 0){x.destroy=void 0,f=i;var V=s,se=C;try{se()}catch(ye){Wt(f,V,ye)}}}l=l.next}while(l!==d)}}catch(ye){Wt(i,i.return,ye)}}function kv(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{U0(i,s)}catch(l){Wt(t,t.return,l)}}}function Xv(t,i,s){s.props=jr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Wt(t,i,l)}}function ol(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Wt(t,i,f)}}function Qi(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Wt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Wt(t,i,f)}else s.current=null}function Wv(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Wt(t,t.return,f)}}function Qd(t,i,s){try{var l=t.stateNode;kE(l,t.type,s,i),l[Un]=i}catch(f){Wt(t,t.return,f)}}function jv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&fr(t.type)||t.tag===4}function $d(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&fr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jd(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=fa));else if(l!==4&&(l===27&&fr(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Jd(t,i,s),t=t.sibling;t!==null;)Jd(t,i,s),t=t.sibling}function Hc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&fr(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Hc(t,i,s),t=t.sibling;t!==null;)Hc(t,i,s),t=t.sibling}function qv(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Fn(i,l,s),i[gn]=t,i[Un]=s}catch(d){Wt(t,t.return,d)}}var Sa=!1,Sn=!1,eh=!1,Yv=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function bE(t,i){if(t=t.containerInfo,Sh=lu,t=s0(t),qf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var x=0,C=-1,V=-1,se=0,ye=0,Ae=t,de=null;t:for(;;){for(var ge;Ae!==s||f!==0&&Ae.nodeType!==3||(C=x+f),Ae!==d||l!==0&&Ae.nodeType!==3||(V=x+l),Ae.nodeType===3&&(x+=Ae.nodeValue.length),(ge=Ae.firstChild)!==null;)de=Ae,Ae=ge;for(;;){if(Ae===t)break t;if(de===s&&++se===f&&(C=x),de===d&&++ye===l&&(V=x),(ge=Ae.nextSibling)!==null)break;Ae=de,de=Ae.parentNode}Ae=ge}s=C===-1||V===-1?null:{start:C,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(bh={focusedElem:t,selectionRange:s},lu=!1,Rn=i;Rn!==null;)if(i=Rn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Rn=t;else for(;Rn!==null;){switch(i=Rn,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=i,f=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var Ye=jr(s.type,f);t=l.getSnapshotBeforeUpdate(Ye,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(lt){Wt(s,s.return,lt)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Th(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Th(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,Rn=t;break}Rn=i.return}}function Kv(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ma(t,s),l&4&&sl(5,s);break;case 1:if(Ma(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(x){Wt(s,s.return,x)}else{var f=jr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Wt(s,s.return,x)}}l&64&&kv(s),l&512&&ol(s,s.return);break;case 3:if(Ma(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{U0(t,i)}catch(x){Wt(s,s.return,x)}}break;case 27:i===null&&l&4&&qv(s);case 26:case 5:Ma(t,s),i===null&&l&4&&Wv(s),l&512&&ol(s,s.return);break;case 12:Ma(t,s);break;case 31:Ma(t,s),l&4&&$v(t,s);break;case 13:Ma(t,s),l&4&&Jv(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=NE.bind(null,s),QE(t,s))));break;case 22:if(l=s.memoizedState!==null||Sa,!l){i=i!==null&&i.memoizedState!==null||Sn,f=Sa;var d=Sn;Sa=l,(Sn=i)&&!d?Ea(t,s,(s.subtreeFlags&8772)!==0):Ma(t,s),Sa=f,Sn=d}break;case 30:break;default:Ma(t,s)}}function Zv(t){var i=t.alternate;i!==null&&(t.alternate=null,Zv(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Wa(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var cn=null,Qn=!1;function ba(t,i,s){for(s=s.child;s!==null;)Qv(t,i,s),s=s.sibling}function Qv(t,i,s){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(ve,s)}catch{}switch(s.tag){case 26:Sn||Qi(s,i),ba(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Sn||Qi(s,i);var l=cn,f=Qn;fr(s.type)&&(cn=s.stateNode,Qn=!1),ba(t,i,s),gl(s.stateNode),cn=l,Qn=f;break;case 5:Sn||Qi(s,i);case 6:if(l=cn,f=Qn,cn=null,ba(t,i,s),cn=l,Qn=f,cn!==null)if(Qn)try{(cn.nodeType===9?cn.body:cn.nodeName==="HTML"?cn.ownerDocument.body:cn).removeChild(s.stateNode)}catch(d){Wt(s,i,d)}else try{cn.removeChild(s.stateNode)}catch(d){Wt(s,i,d)}break;case 18:cn!==null&&(Qn?(t=cn,k_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Zs(t)):k_(cn,s.stateNode));break;case 4:l=cn,f=Qn,cn=s.stateNode.containerInfo,Qn=!0,ba(t,i,s),cn=l,Qn=f;break;case 0:case 11:case 14:case 15:ar(2,s,i),Sn||ar(4,s,i),ba(t,i,s);break;case 1:Sn||(Qi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Xv(s,i,l)),ba(t,i,s);break;case 21:ba(t,i,s);break;case 22:Sn=(l=Sn)||s.memoizedState!==null,ba(t,i,s),Sn=l;break;default:ba(t,i,s)}}function $v(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Zs(t)}catch(s){Wt(i,i.return,s)}}}function Jv(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Zs(t)}catch(s){Wt(i,i.return,s)}}function ME(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Yv),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Yv),i;default:throw Error(r(435,t.tag))}}function Gc(t,i){var s=ME(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=LE.bind(null,t,l);l.then(f,f)}})}function $n(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],d=t,x=i,C=x;e:for(;C!==null;){switch(C.tag){case 27:if(fr(C.type)){cn=C.stateNode,Qn=!1;break e}break;case 5:cn=C.stateNode,Qn=!1;break e;case 3:case 4:cn=C.stateNode.containerInfo,Qn=!0;break e}C=C.return}if(cn===null)throw Error(r(160));Qv(d,x,f),cn=null,Qn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)e_(i,t),i=i.sibling}var Ii=null;function e_(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:$n(i,t),Jn(t),l&4&&(ar(3,t,t.return),sl(3,t),ar(5,t,t.return));break;case 1:$n(i,t),Jn(t),l&512&&(Sn||s===null||Qi(s,s.return)),l&64&&Sa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Ii;if($n(i,t),Jn(t),l&512&&(Sn||s===null||Qi(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[Xa]||d[gn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Fn(d,l,s),d[gn]=t,vn(d),l=d;break e;case"link":var x=ex("link","href",f).get(l+(s.href||""));if(x){for(var C=0;C<x.length;C++)if(d=x[C],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){x.splice(C,1);break t}}d=f.createElement(l),Fn(d,l,s),f.head.appendChild(d);break;case"meta":if(x=ex("meta","content",f).get(l+(s.content||""))){for(C=0;C<x.length;C++)if(d=x[C],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){x.splice(C,1);break t}}d=f.createElement(l),Fn(d,l,s),f.head.appendChild(d);break;default:throw Error(r(468,l))}d[gn]=t,vn(d),l=d}t.stateNode=l}else tx(f,t.type,t.stateNode);else t.stateNode=J_(f,l,t.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?tx(f,t.type,t.stateNode):J_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Qd(t,t.memoizedProps,s.memoizedProps)}break;case 27:$n(i,t),Jn(t),l&512&&(Sn||s===null||Qi(s,s.return)),s!==null&&l&4&&Qd(t,t.memoizedProps,s.memoizedProps);break;case 5:if($n(i,t),Jn(t),l&512&&(Sn||s===null||Qi(s,s.return)),t.flags&32){f=t.stateNode;try{li(f,"")}catch(Ye){Wt(t,t.return,Ye)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Qd(t,f,s!==null?s.memoizedProps:f)),l&1024&&(eh=!0);break;case 6:if($n(i,t),Jn(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Ye){Wt(t,t.return,Ye)}}break;case 3:if(au=null,f=Ii,Ii=nu(i.containerInfo),$n(i,t),Ii=f,Jn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Zs(i.containerInfo)}catch(Ye){Wt(t,t.return,Ye)}eh&&(eh=!1,t_(t));break;case 4:l=Ii,Ii=nu(t.stateNode.containerInfo),$n(i,t),Jn(t),Ii=l;break;case 12:$n(i,t),Jn(t);break;case 31:$n(i,t),Jn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Gc(t,l)));break;case 13:$n(i,t),Jn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Xc=mt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Gc(t,l)));break;case 22:f=t.memoizedState!==null;var V=s!==null&&s.memoizedState!==null,se=Sa,ye=Sn;if(Sa=se||f,Sn=ye||V,$n(i,t),Sn=ye,Sa=se,Jn(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||V||Sa||Sn||qr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){V=s=i;try{if(d=V.stateNode,f)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{C=V.stateNode;var Ae=V.memoizedProps.style,de=Ae!=null&&Ae.hasOwnProperty("display")?Ae.display:null;C.style.display=de==null||typeof de=="boolean"?"":(""+de).trim()}}catch(Ye){Wt(V,V.return,Ye)}}}else if(i.tag===6){if(s===null){V=i;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch(Ye){Wt(V,V.return,Ye)}}}else if(i.tag===18){if(s===null){V=i;try{var ge=V.stateNode;f?X_(ge,!0):X_(V.stateNode,!1)}catch(Ye){Wt(V,V.return,Ye)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Gc(t,s))));break;case 19:$n(i,t),Jn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Gc(t,l)));break;case 30:break;case 21:break;default:$n(i,t),Jn(t)}}function Jn(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(jv(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,d=$d(t);Hc(t,d,f);break;case 5:var x=s.stateNode;s.flags&32&&(li(x,""),s.flags&=-33);var C=$d(t);Hc(t,C,x);break;case 3:case 4:var V=s.stateNode.containerInfo,se=$d(t);Jd(t,se,V);break;default:throw Error(r(161))}}catch(ye){Wt(t,t.return,ye)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function t_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;t_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ma(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Kv(t,i.alternate,i),i=i.sibling}function qr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:ar(4,i,i.return),qr(i);break;case 1:Qi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Xv(i,i.return,s),qr(i);break;case 27:gl(i.stateNode);case 26:case 5:Qi(i,i.return),qr(i);break;case 22:i.memoizedState===null&&qr(i);break;case 30:qr(i);break;default:qr(i)}t=t.sibling}}function Ea(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,d=i,x=d.flags;switch(d.tag){case 0:case 11:case 15:Ea(f,d,s),sl(4,d);break;case 1:if(Ea(f,d,s),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(se){Wt(l,l.return,se)}if(l=d,f=l.updateQueue,f!==null){var C=l.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)L0(V[f],C)}catch(se){Wt(l,l.return,se)}}s&&x&64&&kv(d),ol(d,d.return);break;case 27:qv(d);case 26:case 5:Ea(f,d,s),s&&l===null&&x&4&&Wv(d),ol(d,d.return);break;case 12:Ea(f,d,s);break;case 31:Ea(f,d,s),s&&x&4&&$v(f,d);break;case 13:Ea(f,d,s),s&&x&4&&Jv(f,d);break;case 22:d.memoizedState===null&&Ea(f,d,s),ol(d,d.return);break;case 30:break;default:Ea(f,d,s)}i=i.sibling}}function th(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&qo(s))}function nh(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&qo(t))}function Fi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)n_(t,i,s,l),i=i.sibling}function n_(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Fi(t,i,s,l),f&2048&&sl(9,i);break;case 1:Fi(t,i,s,l);break;case 3:Fi(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&qo(t)));break;case 12:if(f&2048){Fi(t,i,s,l),t=i.stateNode;try{var d=i.memoizedProps,x=d.id,C=d.onPostCommit;typeof C=="function"&&C(x,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){Wt(i,i.return,V)}}else Fi(t,i,s,l);break;case 31:Fi(t,i,s,l);break;case 13:Fi(t,i,s,l);break;case 23:break;case 22:d=i.stateNode,x=i.alternate,i.memoizedState!==null?d._visibility&2?Fi(t,i,s,l):ll(t,i):d._visibility&2?Fi(t,i,s,l):(d._visibility|=2,Bs(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&th(x,i);break;case 24:Fi(t,i,s,l),f&2048&&nh(i.alternate,i);break;default:Fi(t,i,s,l)}}function Bs(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,x=i,C=s,V=l,se=x.flags;switch(x.tag){case 0:case 11:case 15:Bs(d,x,C,V,f),sl(8,x);break;case 23:break;case 22:var ye=x.stateNode;x.memoizedState!==null?ye._visibility&2?Bs(d,x,C,V,f):ll(d,x):(ye._visibility|=2,Bs(d,x,C,V,f)),f&&se&2048&&th(x.alternate,x);break;case 24:Bs(d,x,C,V,f),f&&se&2048&&nh(x.alternate,x);break;default:Bs(d,x,C,V,f)}i=i.sibling}}function ll(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:ll(s,l),f&2048&&th(l.alternate,l);break;case 24:ll(s,l),f&2048&&nh(l.alternate,l);break;default:ll(s,l)}i=i.sibling}}var cl=8192;function Vs(t,i,s){if(t.subtreeFlags&cl)for(t=t.child;t!==null;)i_(t,i,s),t=t.sibling}function i_(t,i,s){switch(t.tag){case 26:Vs(t,i,s),t.flags&cl&&t.memoizedState!==null&&cT(s,Ii,t.memoizedState,t.memoizedProps);break;case 5:Vs(t,i,s);break;case 3:case 4:var l=Ii;Ii=nu(t.stateNode.containerInfo),Vs(t,i,s),Ii=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=cl,cl=16777216,Vs(t,i,s),cl=l):Vs(t,i,s));break;default:Vs(t,i,s)}}function a_(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function ul(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Rn=l,s_(l,t)}a_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)r_(t),t=t.sibling}function r_(t){switch(t.tag){case 0:case 11:case 15:ul(t),t.flags&2048&&ar(9,t,t.return);break;case 3:ul(t);break;case 12:ul(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,kc(t)):ul(t);break;default:ul(t)}}function kc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Rn=l,s_(l,t)}a_(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:ar(8,i,i.return),kc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,kc(i));break;default:kc(i)}t=t.sibling}}function s_(t,i){for(;Rn!==null;){var s=Rn;switch(s.tag){case 0:case 11:case 15:ar(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:qo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Rn=l;else e:for(s=t;Rn!==null;){l=Rn;var f=l.sibling,d=l.return;if(Zv(l),l===s){Rn=null;break e}if(f!==null){f.return=d,Rn=f;break e}Rn=d}}}var EE={getCacheForType:function(t){var i=Pn(_n),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Pn(_n).controller.signal}},TE=typeof WeakMap=="function"?WeakMap:Map,Ft=0,$t=null,Et=null,At=0,Xt=0,hi=null,rr=!1,Hs=!1,ih=!1,Ta=0,fn=0,sr=0,Yr=0,ah=0,pi=0,Gs=0,fl=null,ei=null,rh=!1,Xc=0,o_=0,Wc=1/0,jc=null,or=null,Tn=0,lr=null,ks=null,Aa=0,sh=0,oh=null,l_=null,dl=0,lh=null;function mi(){return(Ft&2)!==0&&At!==0?At&-At:U.T!==null?ph():Po()}function c_(){if(pi===0)if((At&536870912)===0||Ct){var t=ft;ft<<=1,(ft&3932160)===0&&(ft=262144),pi=t}else pi=536870912;return t=fi.current,t!==null&&(t.flags|=32),pi}function ti(t,i,s){(t===$t&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)&&(Xs(t,0),cr(t,At,pi,!1)),We(t,s),((Ft&2)===0||t!==$t)&&(t===$t&&((Ft&2)===0&&(Yr|=s),fn===4&&cr(t,At,pi,!1)),$i(t))}function u_(t,i,s){if((Ft&6)!==0)throw Error(r(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Oe(t,i),f=l?RE(t,i):uh(t,i,!0),d=l;do{if(f===0){Hs&&!l&&cr(t,i,0,!1);break}else{if(s=t.current.alternate,d&&!AE(s)){f=uh(t,i,!1),d=!1;continue}if(f===2){if(d=i,t.errorRecoveryDisabledLanes&d)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){i=x;e:{var C=t;f=fl;var V=C.current.memoizedState.isDehydrated;if(V&&(Xs(C,x).flags|=256),x=uh(C,x,!1),x!==2){if(ih&&!V){C.errorRecoveryDisabledLanes|=d,Yr|=d,f=4;break e}d=ei,ei=f,d!==null&&(ei===null?ei=d:ei.push.apply(ei,d))}f=x}if(d=!1,f!==2)continue}}if(f===1){Xs(t,0),cr(t,i,0,!0);break}e:{switch(l=t,d=f,d){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:cr(l,i,pi,!rr);break e;case 2:ei=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(f=Xc+300-mt(),10<f)){if(cr(l,i,pi,!rr),Se(l,0,!0)!==0)break e;Aa=i,l.timeoutHandle=H_(f_.bind(null,l,s,ei,jc,rh,i,pi,Yr,Gs,rr,d,"Throttled",-0,0),f);break e}f_(l,s,ei,jc,rh,i,pi,Yr,Gs,rr,d,null,-0,0)}}break}while(!0);$i(t)}function f_(t,i,s,l,f,d,x,C,V,se,ye,Ae,de,ge){if(t.timeoutHandle=-1,Ae=i.subtreeFlags,Ae&8192||(Ae&16785408)===16785408){Ae={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:fa},i_(i,d,Ae);var Ye=(d&62914560)===d?Xc-mt():(d&4194048)===d?o_-mt():0;if(Ye=uT(Ae,Ye),Ye!==null){Aa=d,t.cancelPendingCommit=Ye(x_.bind(null,t,i,d,s,l,f,x,C,V,ye,Ae,null,de,ge)),cr(t,d,x,!se);return}}x_(t,i,d,s,l,f,x,C,V)}function AE(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],d=f.getSnapshot;f=f.value;try{if(!ci(d(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(t,i,s,l){i&=~ah,i&=~Yr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var d=31-Ge(f),x=1<<d;l[d]=-1,f&=~x}s!==0&&Vt(t,s,i)}function qc(){return(Ft&6)===0?(hl(0),!1):!0}function ch(){if(Et!==null){if(Xt===0)var t=Et.return;else t=Et,ma=Br=null,Td(t),Os=null,Ko=0,t=Et;for(;t!==null;)Gv(t.alternate,t),t=t.return;Et=null}}function Xs(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,jE(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Aa=0,ch(),$t=t,Et=s=ha(t.current,null),At=i,Xt=0,hi=null,rr=!1,Hs=Oe(t,i),ih=!1,Gs=pi=ah=Yr=sr=fn=0,ei=fl=null,rh=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Ge(l),d=1<<f;i|=t[f],l&=~d}return Ta=i,pc(),s}function d_(t,i){_t=null,U.H=il,i===Us||i===bc?(i=R0(),Xt=3):i===hd?(i=R0(),Xt=4):Xt=i===Hd?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,hi=i,Et===null&&(fn=1,Ic(t,Si(i,t.current)))}function h_(){var t=fi.current;return t===null?!0:(At&4194048)===At?Ti===null:(At&62914560)===At||(At&536870912)!==0?t===Ti:!1}function p_(){var t=U.H;return U.H=il,t===null?il:t}function m_(){var t=U.A;return U.A=EE,t}function Yc(){fn=4,rr||(At&4194048)!==At&&fi.current!==null||(Hs=!0),(sr&134217727)===0&&(Yr&134217727)===0||$t===null||cr($t,At,pi,!1)}function uh(t,i,s){var l=Ft;Ft|=2;var f=p_(),d=m_();($t!==t||At!==i)&&(jc=null,Xs(t,i)),i=!1;var x=fn;e:do try{if(Xt!==0&&Et!==null){var C=Et,V=hi;switch(Xt){case 8:ch(),x=6;break e;case 3:case 2:case 9:case 6:fi.current===null&&(i=!0);var se=Xt;if(Xt=0,hi=null,Ws(t,C,V,se),s&&Hs){x=0;break e}break;default:se=Xt,Xt=0,hi=null,Ws(t,C,V,se)}}wE(),x=fn;break}catch(ye){d_(t,ye)}while(!0);return i&&t.shellSuspendCounter++,ma=Br=null,Ft=l,U.H=f,U.A=d,Et===null&&($t=null,At=0,pc()),x}function wE(){for(;Et!==null;)g_(Et)}function RE(t,i){var s=Ft;Ft|=2;var l=p_(),f=m_();$t!==t||At!==i?(jc=null,Wc=mt()+500,Xs(t,i)):Hs=Oe(t,i);e:do try{if(Xt!==0&&Et!==null){i=Et;var d=hi;t:switch(Xt){case 1:Xt=0,hi=null,Ws(t,i,d,1);break;case 2:case 9:if(A0(d)){Xt=0,hi=null,v_(i);break}i=function(){Xt!==2&&Xt!==9||$t!==t||(Xt=7),$i(t)},d.then(i,i);break e;case 3:Xt=7;break e;case 4:Xt=5;break e;case 7:A0(d)?(Xt=0,hi=null,v_(i)):(Xt=0,hi=null,Ws(t,i,d,7));break;case 5:var x=null;switch(Et.tag){case 26:x=Et.memoizedState;case 5:case 27:var C=Et;if(x?nx(x):C.stateNode.complete){Xt=0,hi=null;var V=C.sibling;if(V!==null)Et=V;else{var se=C.return;se!==null?(Et=se,Kc(se)):Et=null}break t}}Xt=0,hi=null,Ws(t,i,d,5);break;case 6:Xt=0,hi=null,Ws(t,i,d,6);break;case 8:ch(),fn=6;break e;default:throw Error(r(462))}}CE();break}catch(ye){d_(t,ye)}while(!0);return ma=Br=null,U.H=l,U.A=f,Ft=s,Et!==null?0:($t=null,At=0,pc(),fn)}function CE(){for(;Et!==null&&!Ze();)g_(Et)}function g_(t){var i=Vv(t.alternate,t,Ta);t.memoizedProps=t.pendingProps,i===null?Kc(t):Et=i}function v_(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=Ov(s,i,i.pendingProps,i.type,void 0,At);break;case 11:i=Ov(s,i,i.pendingProps,i.type.render,i.ref,At);break;case 5:Td(i);default:Gv(s,i),i=Et=m0(i,Ta),i=Vv(s,i,Ta)}t.memoizedProps=t.pendingProps,i===null?Kc(t):Et=i}function Ws(t,i,s,l){ma=Br=null,Td(i),Os=null,Ko=0;var f=i.return;try{if(vE(t,f,i,s,At)){fn=1,Ic(t,Si(s,t.current)),Et=null;return}}catch(d){if(f!==null)throw Et=f,d;fn=1,Ic(t,Si(s,t.current)),Et=null;return}i.flags&32768?(Ct||l===1?t=!0:Hs||(At&536870912)!==0?t=!1:(rr=t=!0,(l===2||l===9||l===3||l===6)&&(l=fi.current,l!==null&&l.tag===13&&(l.flags|=16384))),__(i,t)):Kc(i)}function Kc(t){var i=t;do{if((i.flags&32768)!==0){__(i,rr);return}t=i.return;var s=yE(i.alternate,i,Ta);if(s!==null){Et=s;return}if(i=i.sibling,i!==null){Et=i;return}Et=i=t}while(i!==null);fn===0&&(fn=5)}function __(t,i){do{var s=SE(t.alternate,t);if(s!==null){s.flags&=32767,Et=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){Et=t;return}Et=t=s}while(t!==null);fn=6,Et=null}function x_(t,i,s,l,f,d,x,C,V){t.cancelPendingCommit=null;do Zc();while(Tn!==0);if((Ft&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(d=i.lanes|i.childLanes,d|=$f,sn(t,s,d,x,C,V),t===$t&&(Et=$t=null,At=0),ks=i,lr=t,Aa=s,sh=d,oh=f,l_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,UE($,function(){return E_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=U.T,U.T=null,f=H.p,H.p=2,x=Ft,Ft|=4;try{bE(t,i,s)}finally{Ft=x,H.p=f,U.T=l}}Tn=1,y_(),S_(),b_()}}function y_(){if(Tn===1){Tn=0;var t=lr,i=ks,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=U.T,U.T=null;var l=H.p;H.p=2;var f=Ft;Ft|=4;try{e_(i,t);var d=bh,x=s0(t.containerInfo),C=d.focusedElem,V=d.selectionRange;if(x!==C&&C&&C.ownerDocument&&r0(C.ownerDocument.documentElement,C)){if(V!==null&&qf(C)){var se=V.start,ye=V.end;if(ye===void 0&&(ye=se),"selectionStart"in C)C.selectionStart=se,C.selectionEnd=Math.min(ye,C.value.length);else{var Ae=C.ownerDocument||document,de=Ae&&Ae.defaultView||window;if(de.getSelection){var ge=de.getSelection(),Ye=C.textContent.length,lt=Math.min(V.start,Ye),Kt=V.end===void 0?lt:Math.min(V.end,Ye);!ge.extend&&lt>Kt&&(x=Kt,Kt=lt,lt=x);var ee=a0(C,lt),j=a0(C,Kt);if(ee&&j&&(ge.rangeCount!==1||ge.anchorNode!==ee.node||ge.anchorOffset!==ee.offset||ge.focusNode!==j.node||ge.focusOffset!==j.offset)){var ae=Ae.createRange();ae.setStart(ee.node,ee.offset),ge.removeAllRanges(),lt>Kt?(ge.addRange(ae),ge.extend(j.node,j.offset)):(ae.setEnd(j.node,j.offset),ge.addRange(ae))}}}}for(Ae=[],ge=C;ge=ge.parentNode;)ge.nodeType===1&&Ae.push({element:ge,left:ge.scrollLeft,top:ge.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Ae.length;C++){var Ee=Ae[C];Ee.element.scrollLeft=Ee.left,Ee.element.scrollTop=Ee.top}}lu=!!Sh,bh=Sh=null}finally{Ft=f,H.p=l,U.T=s}}t.current=i,Tn=2}}function S_(){if(Tn===2){Tn=0;var t=lr,i=ks,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=U.T,U.T=null;var l=H.p;H.p=2;var f=Ft;Ft|=4;try{Kv(t,i.alternate,i)}finally{Ft=f,H.p=l,U.T=s}}Tn=3}}function b_(){if(Tn===4||Tn===3){Tn=0,X();var t=lr,i=ks,s=Aa,l=l_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Tn=5:(Tn=0,ks=lr=null,M_(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(or=null),Oo(s),i=i.stateNode,_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(ve,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=U.T,f=H.p,H.p=2,U.T=null;try{for(var d=t.onRecoverableError,x=0;x<l.length;x++){var C=l[x];d(C.value,{componentStack:C.stack})}}finally{U.T=i,H.p=f}}(Aa&3)!==0&&Zc(),$i(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===lh?dl++:(dl=0,lh=t):dl=0,hl(0)}}function M_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,qo(i)))}function Zc(){return y_(),S_(),b_(),E_()}function E_(){if(Tn!==5)return!1;var t=lr,i=sh;sh=0;var s=Oo(Aa),l=U.T,f=H.p;try{H.p=32>s?32:s,U.T=null,s=oh,oh=null;var d=lr,x=Aa;if(Tn=0,ks=lr=null,Aa=0,(Ft&6)!==0)throw Error(r(331));var C=Ft;if(Ft|=4,r_(d.current),n_(d,d.current,x,s),Ft=C,hl(0,!1),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(ve,d)}catch{}return!0}finally{H.p=f,U.T=l,M_(t,i)}}function T_(t,i,s){i=Si(s,i),i=Vd(t.stateNode,i,2),t=tr(t,i,2),t!==null&&(We(t,2),$i(t))}function Wt(t,i,s){if(t.tag===3)T_(t,t,s);else for(;i!==null;){if(i.tag===3){T_(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(or===null||!or.has(l))){t=Si(s,t),s=Av(2),l=tr(i,s,2),l!==null&&(wv(s,l,i,t),We(l,2),$i(l));break}}i=i.return}}function fh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new TE;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(ih=!0,f.add(s),t=DE.bind(null,t,i,s),i.then(t,t))}function DE(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,$t===t&&(At&s)===s&&(fn===4||fn===3&&(At&62914560)===At&&300>mt()-Xc?(Ft&2)===0&&Xs(t,0):ah|=s,Gs===At&&(Gs=0)),$i(t)}function A_(t,i){i===0&&(i=we()),t=Ir(t,i),t!==null&&(We(t,i),$i(t))}function NE(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),A_(t,s)}function LE(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),A_(t,s)}function UE(t,i){return tn(t,i)}var Qc=null,js=null,dh=!1,$c=!1,hh=!1,ur=0;function $i(t){t!==js&&t.next===null&&(js===null?Qc=js=t:js=js.next=t),$c=!0,dh||(dh=!0,PE())}function hl(t,i){if(!hh&&$c){hh=!0;do for(var s=!1,l=Qc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var x=l.suspendedLanes,C=l.pingedLanes;d=(1<<31-Ge(42|t)+1)-1,d&=f&~(x&~C),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,D_(l,d))}else d=At,d=Se(l,l===$t?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Oe(l,d)||(s=!0,D_(l,d));l=l.next}while(s);hh=!1}}function OE(){w_()}function w_(){$c=dh=!1;var t=0;ur!==0&&WE()&&(t=ur);for(var i=mt(),s=null,l=Qc;l!==null;){var f=l.next,d=R_(l,i);d===0?(l.next=null,s===null?Qc=f:s.next=f,f===null&&(js=s)):(s=l,(t!==0||(d&3)!==0)&&($c=!0)),l=f}Tn!==0&&Tn!==5||hl(t),ur!==0&&(ur=0)}function R_(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var x=31-Ge(d),C=1<<x,V=f[x];V===-1?((C&s)===0||(C&l)!==0)&&(f[x]=He(C,i)):V<=i&&(t.expiredLanes|=C),d&=~C}if(i=$t,s=At,s=Se(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Te(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Oe(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&Te(l),Oo(s)){case 2:case 8:s=E;break;case 32:s=$;break;case 268435456:s=he;break;default:s=$}return l=C_.bind(null,t),s=tn(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&Te(l),t.callbackPriority=2,t.callbackNode=null,2}function C_(t,i){if(Tn!==0&&Tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Zc()&&t.callbackNode!==s)return null;var l=At;return l=Se(t,t===$t?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(u_(t,l,i),R_(t,mt()),t.callbackNode!=null&&t.callbackNode===s?C_.bind(null,t):null)}function D_(t,i){if(Zc())return null;u_(t,i,!0)}function PE(){qE(function(){(Ft&6)!==0?tn(P,OE):w_()})}function ph(){if(ur===0){var t=Ns;t===0&&(t=it,it<<=1,(it&261888)===0&&(it=256)),ur=t}return ur}function N_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Lr(""+t)}function L_(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function IE(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var d=N_((f[Un]||null).action),x=l.submitter;x&&(i=(i=x[Un]||null)?N_(i.formAction):x.getAttribute("formAction"),i!==null&&(d=i,x=null));var C=new uc("action","action",null,l,f);t.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ur!==0){var V=x?L_(f,x):new FormData(f);Od(s,{pending:!0,data:V,method:f.method,action:d},null,V)}}else typeof d=="function"&&(C.preventDefault(),V=x?L_(f,x):new FormData(f),Od(s,{pending:!0,data:V,method:f.method,action:d},d,V))},currentTarget:f}]})}}for(var mh=0;mh<Qf.length;mh++){var gh=Qf[mh],FE=gh.toLowerCase(),zE=gh[0].toUpperCase()+gh.slice(1);Pi(FE,"on"+zE)}Pi(c0,"onAnimationEnd"),Pi(u0,"onAnimationIteration"),Pi(f0,"onAnimationStart"),Pi("dblclick","onDoubleClick"),Pi("focusin","onFocus"),Pi("focusout","onBlur"),Pi(eE,"onTransitionRun"),Pi(tE,"onTransitionStart"),Pi(nE,"onTransitionCancel"),Pi(d0,"onTransitionEnd"),fe("onMouseEnter",["mouseout","mouseover"]),fe("onMouseLeave",["mouseout","mouseover"]),fe("onPointerEnter",["pointerout","pointerover"]),fe("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pl));function U_(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var x=l.length-1;0<=x;x--){var C=l[x],V=C.instance,se=C.currentTarget;if(C=C.listener,V!==d&&f.isPropagationStopped())break e;d=C,f.currentTarget=se;try{d(f)}catch(ye){hc(ye)}f.currentTarget=null,d=V}else for(x=0;x<l.length;x++){if(C=l[x],V=C.instance,se=C.currentTarget,C=C.listener,V!==d&&f.isPropagationStopped())break e;d=C,f.currentTarget=se;try{d(f)}catch(ye){hc(ye)}f.currentTarget=null,d=V}}}}function Tt(t,i){var s=i[Cr];s===void 0&&(s=i[Cr]=new Set);var l=t+"__bubble";s.has(l)||(O_(i,t,2,!1),s.add(l))}function vh(t,i,s){var l=0;i&&(l|=4),O_(s,t,l,i)}var Jc="_reactListening"+Math.random().toString(36).slice(2);function _h(t){if(!t[Jc]){t[Jc]=!0,sc.forEach(function(s){s!=="selectionchange"&&(BE.has(s)||vh(s,!1,t),vh(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Jc]||(i[Jc]=!0,vh("selectionchange",!1,i))}}function O_(t,i,s,l){switch(cx(i)){case 2:var f=hT;break;case 8:f=pT;break;default:f=Uh}s=f.bind(null,i,s,t),f=void 0,!zf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function xh(t,i,s,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var x=l.tag;if(x===3||x===4){var C=l.stateNode.containerInfo;if(C===f)break;if(x===4)for(x=l.return;x!==null;){var V=x.tag;if((V===3||V===4)&&x.stateNode.containerInfo===f)return;x=x.return}for(;C!==null;){if(x=ca(C),x===null)return;if(V=x.tag,V===5||V===6||V===26||V===27){l=d=x;continue e}C=C.parentNode}}l=l.return}Bg(function(){var se=d,ye=If(s),Ae=[];e:{var de=h0.get(t);if(de!==void 0){var ge=uc,Ye=t;switch(t){case"keypress":if(lc(s)===0)break e;case"keydown":case"keyup":ge=LM;break;case"focusin":Ye="focus",ge=Gf;break;case"focusout":Ye="blur",ge=Gf;break;case"beforeblur":case"afterblur":ge=Gf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ge=Gg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ge=yM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ge=PM;break;case c0:case u0:case f0:ge=MM;break;case d0:ge=FM;break;case"scroll":case"scrollend":ge=_M;break;case"wheel":ge=BM;break;case"copy":case"cut":case"paste":ge=TM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ge=Xg;break;case"toggle":case"beforetoggle":ge=HM}var lt=(i&4)!==0,Kt=!lt&&(t==="scroll"||t==="scrollend"),ee=lt?de!==null?de+"Capture":null:de;lt=[];for(var j=se,ae;j!==null;){var Ee=j;if(ae=Ee.stateNode,Ee=Ee.tag,Ee!==5&&Ee!==26&&Ee!==27||ae===null||ee===null||(Ee=Io(j,ee),Ee!=null&&lt.push(ml(j,Ee,ae))),Kt)break;j=j.return}0<lt.length&&(de=new ge(de,Ye,null,s,ye),Ae.push({event:de,listeners:lt}))}}if((i&7)===0){e:{if(de=t==="mouseover"||t==="pointerover",ge=t==="mouseout"||t==="pointerout",de&&s!==Pf&&(Ye=s.relatedTarget||s.fromElement)&&(ca(Ye)||Ye[Kn]))break e;if((ge||de)&&(de=ye.window===ye?ye:(de=ye.ownerDocument)?de.defaultView||de.parentWindow:window,ge?(Ye=s.relatedTarget||s.toElement,ge=se,Ye=Ye?ca(Ye):null,Ye!==null&&(Kt=c(Ye),lt=Ye.tag,Ye!==Kt||lt!==5&&lt!==27&&lt!==6)&&(Ye=null)):(ge=null,Ye=se),ge!==Ye)){if(lt=Gg,Ee="onMouseLeave",ee="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(lt=Xg,Ee="onPointerLeave",ee="onPointerEnter",j="pointer"),Kt=ge==null?de:Nr(ge),ae=Ye==null?de:Nr(Ye),de=new lt(Ee,j+"leave",ge,s,ye),de.target=Kt,de.relatedTarget=ae,Ee=null,ca(ye)===se&&(lt=new lt(ee,j+"enter",Ye,s,ye),lt.target=ae,lt.relatedTarget=Kt,Ee=lt),Kt=Ee,ge&&Ye)t:{for(lt=VE,ee=ge,j=Ye,ae=0,Ee=ee;Ee;Ee=lt(Ee))ae++;Ee=0;for(var rt=j;rt;rt=lt(rt))Ee++;for(;0<ae-Ee;)ee=lt(ee),ae--;for(;0<Ee-ae;)j=lt(j),Ee--;for(;ae--;){if(ee===j||j!==null&&ee===j.alternate){lt=ee;break t}ee=lt(ee),j=lt(j)}lt=null}else lt=null;ge!==null&&P_(Ae,de,ge,lt,!1),Ye!==null&&Kt!==null&&P_(Ae,Kt,Ye,lt,!0)}}e:{if(de=se?Nr(se):window,ge=de.nodeName&&de.nodeName.toLowerCase(),ge==="select"||ge==="input"&&de.type==="file")var Pt=$g;else if(Zg(de))if(Jg)Pt=QM;else{Pt=KM;var Je=YM}else ge=de.nodeName,!ge||ge.toLowerCase()!=="input"||de.type!=="checkbox"&&de.type!=="radio"?se&&Bt(se.elementType)&&(Pt=$g):Pt=ZM;if(Pt&&(Pt=Pt(t,se))){Qg(Ae,Pt,s,ye);break e}Je&&Je(t,de,se),t==="focusout"&&se&&de.type==="number"&&se.memoizedProps.value!=null&&Mt(de,"number",de.value)}switch(Je=se?Nr(se):window,t){case"focusin":(Zg(Je)||Je.contentEditable==="true")&&(Ms=Je,Yf=se,Xo=null);break;case"focusout":Xo=Yf=Ms=null;break;case"mousedown":Kf=!0;break;case"contextmenu":case"mouseup":case"dragend":Kf=!1,o0(Ae,s,ye);break;case"selectionchange":if(JM)break;case"keydown":case"keyup":o0(Ae,s,ye)}var xt;if(Xf)e:{switch(t){case"compositionstart":var wt="onCompositionStart";break e;case"compositionend":wt="onCompositionEnd";break e;case"compositionupdate":wt="onCompositionUpdate";break e}wt=void 0}else bs?Yg(t,s)&&(wt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(wt="onCompositionStart");wt&&(Wg&&s.locale!=="ko"&&(bs||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&bs&&(xt=Vg()):(Ya=ye,Bf="value"in Ya?Ya.value:Ya.textContent,bs=!0)),Je=eu(se,wt),0<Je.length&&(wt=new kg(wt,t,null,s,ye),Ae.push({event:wt,listeners:Je}),xt?wt.data=xt:(xt=Kg(s),xt!==null&&(wt.data=xt)))),(xt=kM?XM(t,s):WM(t,s))&&(wt=eu(se,"onBeforeInput"),0<wt.length&&(Je=new kg("onBeforeInput","beforeinput",null,s,ye),Ae.push({event:Je,listeners:wt}),Je.data=xt)),IE(Ae,t,se,s,ye)}U_(Ae,i)})}function ml(t,i,s){return{instance:t,listener:i,currentTarget:s}}function eu(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Io(t,s),f!=null&&l.unshift(ml(t,f,d)),f=Io(t,i),f!=null&&l.push(ml(t,f,d))),t.tag===3)return l;t=t.return}return[]}function VE(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function P_(t,i,s,l,f){for(var d=i._reactName,x=[];s!==null&&s!==l;){var C=s,V=C.alternate,se=C.stateNode;if(C=C.tag,V!==null&&V===l)break;C!==5&&C!==26&&C!==27||se===null||(V=se,f?(se=Io(s,d),se!=null&&x.unshift(ml(s,se,V))):f||(se=Io(s,d),se!=null&&x.push(ml(s,se,V)))),s=s.return}x.length!==0&&t.push({event:i,listeners:x})}var HE=/\r\n?/g,GE=/\u0000|\uFFFD/g;function I_(t){return(typeof t=="string"?t:""+t).replace(HE,`
`).replace(GE,"")}function F_(t,i){return i=I_(i),I_(t)===i}function Yt(t,i,s,l,f,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||li(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&li(t,""+l);break;case"className":qe(t,"class",l);break;case"tabIndex":qe(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":qe(t,s,l);break;case"style":Oi(t,l,d);break;case"data":if(i!=="object"){qe(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Lr(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&Yt(t,i,"name",f.name,f,null),Yt(t,i,"formEncType",f.formEncType,f,null),Yt(t,i,"formMethod",f.formMethod,f,null),Yt(t,i,"formTarget",f.formTarget,f,null)):(Yt(t,i,"encType",f.encType,f,null),Yt(t,i,"method",f.method,f,null),Yt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Lr(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=fa);break;case"onScroll":l!=null&&Tt("scroll",t);break;case"onScrollEnd":l!=null&&Tt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Lr(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Tt("beforetoggle",t),Tt("toggle",t),Fe(t,"popover",l);break;case"xlinkActuate":je(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":je(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":je(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":je(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":je(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":je(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":je(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Fe(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Yi.get(s)||s,Fe(t,s,l))}}function yh(t,i,s,l,f,d){switch(s){case"style":Oi(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?li(t,l):(typeof l=="number"||typeof l=="bigint")&&li(t,""+l);break;case"onScroll":l!=null&&Tt("scroll",t);break;case"onScrollEnd":l!=null&&Tt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=fa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),d=t[Un]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Fe(t,s,l)}}}function Fn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tt("error",t),Tt("load",t);var l=!1,f=!1,d;for(d in s)if(s.hasOwnProperty(d)){var x=s[d];if(x!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Yt(t,i,d,x,s,null)}}f&&Yt(t,i,"srcSet",s.srcSet,s,null),l&&Yt(t,i,"src",s.src,s,null);return;case"input":Tt("invalid",t);var C=d=x=f=null,V=null,se=null;for(l in s)if(s.hasOwnProperty(l)){var ye=s[l];if(ye!=null)switch(l){case"name":f=ye;break;case"type":x=ye;break;case"checked":V=ye;break;case"defaultChecked":se=ye;break;case"value":d=ye;break;case"defaultValue":C=ye;break;case"children":case"dangerouslySetInnerHTML":if(ye!=null)throw Error(r(137,i));break;default:Yt(t,i,l,ye,s,null)}}Vn(t,d,C,V,se,x,f,!1);return;case"select":Tt("invalid",t),l=x=d=null;for(f in s)if(s.hasOwnProperty(f)&&(C=s[f],C!=null))switch(f){case"value":d=C;break;case"defaultValue":x=C;break;case"multiple":l=C;default:Yt(t,i,f,C,s,null)}i=d,s=x,t.multiple=!!l,i!=null?En(t,!!l,i,!1):s!=null&&En(t,!!l,s,!0);return;case"textarea":Tt("invalid",t),d=f=l=null;for(x in s)if(s.hasOwnProperty(x)&&(C=s[x],C!=null))switch(x){case"value":l=C;break;case"defaultValue":f=C;break;case"children":d=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(91));break;default:Yt(t,i,x,C,s,null)}Ui(t,l,f,d);return;case"option":for(V in s)s.hasOwnProperty(V)&&(l=s[V],l!=null)&&(V==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":Yt(t,i,V,l,s,null));return;case"dialog":Tt("beforetoggle",t),Tt("toggle",t),Tt("cancel",t),Tt("close",t);break;case"iframe":case"object":Tt("load",t);break;case"video":case"audio":for(l=0;l<pl.length;l++)Tt(pl[l],t);break;case"image":Tt("error",t),Tt("load",t);break;case"details":Tt("toggle",t);break;case"embed":case"source":case"link":Tt("error",t),Tt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(se in s)if(s.hasOwnProperty(se)&&(l=s[se],l!=null))switch(se){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Yt(t,i,se,l,s,null)}return;default:if(Bt(i)){for(ye in s)s.hasOwnProperty(ye)&&(l=s[ye],l!==void 0&&yh(t,i,ye,l,s,void 0));return}}for(C in s)s.hasOwnProperty(C)&&(l=s[C],l!=null&&Yt(t,i,C,l,s,null))}function kE(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,x=null,C=null,V=null,se=null,ye=null;for(ge in s){var Ae=s[ge];if(s.hasOwnProperty(ge)&&Ae!=null)switch(ge){case"checked":break;case"value":break;case"defaultValue":V=Ae;default:l.hasOwnProperty(ge)||Yt(t,i,ge,null,l,Ae)}}for(var de in l){var ge=l[de];if(Ae=s[de],l.hasOwnProperty(de)&&(ge!=null||Ae!=null))switch(de){case"type":d=ge;break;case"name":f=ge;break;case"checked":se=ge;break;case"defaultChecked":ye=ge;break;case"value":x=ge;break;case"defaultValue":C=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(r(137,i));break;default:ge!==Ae&&Yt(t,i,de,ge,l,Ae)}}ke(t,x,C,V,se,ye,d,f);return;case"select":ge=x=C=de=null;for(d in s)if(V=s[d],s.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":ge=V;default:l.hasOwnProperty(d)||Yt(t,i,d,null,l,V)}for(f in l)if(d=l[f],V=s[f],l.hasOwnProperty(f)&&(d!=null||V!=null))switch(f){case"value":de=d;break;case"defaultValue":C=d;break;case"multiple":x=d;default:d!==V&&Yt(t,i,f,d,l,V)}i=C,s=x,l=ge,de!=null?En(t,!!s,de,!1):!!l!=!!s&&(i!=null?En(t,!!s,i,!0):En(t,!!s,s?[]:"",!1));return;case"textarea":ge=de=null;for(C in s)if(f=s[C],s.hasOwnProperty(C)&&f!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Yt(t,i,C,null,l,f)}for(x in l)if(f=l[x],d=s[x],l.hasOwnProperty(x)&&(f!=null||d!=null))switch(x){case"value":de=f;break;case"defaultValue":ge=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==d&&Yt(t,i,x,f,l,d)}oi(t,de,ge);return;case"option":for(var Ye in s)de=s[Ye],s.hasOwnProperty(Ye)&&de!=null&&!l.hasOwnProperty(Ye)&&(Ye==="selected"?t.selected=!1:Yt(t,i,Ye,null,l,de));for(V in l)de=l[V],ge=s[V],l.hasOwnProperty(V)&&de!==ge&&(de!=null||ge!=null)&&(V==="selected"?t.selected=de&&typeof de!="function"&&typeof de!="symbol":Yt(t,i,V,de,l,ge));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var lt in s)de=s[lt],s.hasOwnProperty(lt)&&de!=null&&!l.hasOwnProperty(lt)&&Yt(t,i,lt,null,l,de);for(se in l)if(de=l[se],ge=s[se],l.hasOwnProperty(se)&&de!==ge&&(de!=null||ge!=null))switch(se){case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,i));break;default:Yt(t,i,se,de,l,ge)}return;default:if(Bt(i)){for(var Kt in s)de=s[Kt],s.hasOwnProperty(Kt)&&de!==void 0&&!l.hasOwnProperty(Kt)&&yh(t,i,Kt,void 0,l,de);for(ye in l)de=l[ye],ge=s[ye],!l.hasOwnProperty(ye)||de===ge||de===void 0&&ge===void 0||yh(t,i,ye,de,l,ge);return}}for(var ee in s)de=s[ee],s.hasOwnProperty(ee)&&de!=null&&!l.hasOwnProperty(ee)&&Yt(t,i,ee,null,l,de);for(Ae in l)de=l[Ae],ge=s[Ae],!l.hasOwnProperty(Ae)||de===ge||de==null&&ge==null||Yt(t,i,Ae,de,l,ge)}function z_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function XE(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],d=f.transferSize,x=f.initiatorType,C=f.duration;if(d&&C&&z_(x)){for(x=0,C=f.responseEnd,l+=1;l<s.length;l++){var V=s[l],se=V.startTime;if(se>C)break;var ye=V.transferSize,Ae=V.initiatorType;ye&&z_(Ae)&&(V=V.responseEnd,x+=ye*(V<C?1:(C-se)/(V-se)))}if(--l,i+=8*(d+x)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Sh=null,bh=null;function tu(t){return t.nodeType===9?t:t.ownerDocument}function B_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function V_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Mh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Eh=null;function WE(){var t=window.event;return t&&t.type==="popstate"?t===Eh?!1:(Eh=t,!0):(Eh=null,!1)}var H_=typeof setTimeout=="function"?setTimeout:void 0,jE=typeof clearTimeout=="function"?clearTimeout:void 0,G_=typeof Promise=="function"?Promise:void 0,qE=typeof queueMicrotask=="function"?queueMicrotask:typeof G_<"u"?function(t){return G_.resolve(null).then(t).catch(YE)}:H_;function YE(t){setTimeout(function(){throw t})}function fr(t){return t==="head"}function k_(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),Zs(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")gl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,gl(s);for(var d=s.firstChild;d;){var x=d.nextSibling,C=d.nodeName;d[Xa]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=x}}else s==="body"&&gl(t.ownerDocument.body);s=f}while(s);Zs(i)}function X_(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Th(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Th(s),Wa(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function KE(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Xa])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Ai(t.nextSibling),t===null)break}return null}function ZE(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ai(t.nextSibling),t===null))return null;return t}function W_(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ai(t.nextSibling),t===null))return null;return t}function Ah(t){return t.data==="$?"||t.data==="$~"}function wh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function QE(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ai(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Rh=null;function j_(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Ai(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function q_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function Y_(t,i,s){switch(i=tu(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function gl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Wa(t)}var wi=new Map,K_=new Set;function nu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var wa=H.d;H.d={f:$E,r:JE,D:eT,C:tT,L:nT,m:iT,X:rT,S:aT,M:sT};function $E(){var t=wa.f(),i=qc();return t||i}function JE(t){var i=ua(t);i!==null&&i.tag===5&&i.type==="form"?dv(i):wa.r(t)}var qs=typeof document>"u"?null:document;function Z_(t,i,s){var l=qs;if(l&&typeof i=="string"&&i){var f=Gt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),K_.has(f)||(K_.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Fn(i,"link",t),vn(i),l.head.appendChild(i)))}}function eT(t){wa.D(t),Z_("dns-prefetch",t,null)}function tT(t,i){wa.C(t,i),Z_("preconnect",t,i)}function nT(t,i,s){wa.L(t,i,s);var l=qs;if(l&&t&&i){var f='link[rel="preload"][as="'+Gt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Gt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Gt(s.imageSizes)+'"]')):f+='[href="'+Gt(t)+'"]';var d=f;switch(i){case"style":d=Ys(t);break;case"script":d=Ks(t)}wi.has(d)||(t=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),wi.set(d,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(vl(d))||i==="script"&&l.querySelector(_l(d))||(i=l.createElement("link"),Fn(i,"link",t),vn(i),l.head.appendChild(i)))}}function iT(t,i){wa.m(t,i);var s=qs;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Gt(l)+'"][href="'+Gt(t)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ks(t)}if(!wi.has(d)&&(t=v({rel:"modulepreload",href:t},i),wi.set(d,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(_l(d)))return}l=s.createElement("link"),Fn(l,"link",t),vn(l),s.head.appendChild(l)}}}function aT(t,i,s){wa.S(t,i,s);var l=qs;if(l&&t){var f=ja(l).hoistableStyles,d=Ys(t);i=i||"default";var x=f.get(d);if(!x){var C={loading:0,preload:null};if(x=l.querySelector(vl(d)))C.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":i},s),(s=wi.get(d))&&Ch(t,s);var V=x=l.createElement("link");vn(V),Fn(V,"link",t),V._p=new Promise(function(se,ye){V.onload=se,V.onerror=ye}),V.addEventListener("load",function(){C.loading|=1}),V.addEventListener("error",function(){C.loading|=2}),C.loading|=4,iu(x,i,l)}x={type:"stylesheet",instance:x,count:1,state:C},f.set(d,x)}}}function rT(t,i){wa.X(t,i);var s=qs;if(s&&t){var l=ja(s).hoistableScripts,f=Ks(t),d=l.get(f);d||(d=s.querySelector(_l(f)),d||(t=v({src:t,async:!0},i),(i=wi.get(f))&&Dh(t,i),d=s.createElement("script"),vn(d),Fn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function sT(t,i){wa.M(t,i);var s=qs;if(s&&t){var l=ja(s).hoistableScripts,f=Ks(t),d=l.get(f);d||(d=s.querySelector(_l(f)),d||(t=v({src:t,async:!0,type:"module"},i),(i=wi.get(f))&&Dh(t,i),d=s.createElement("script"),vn(d),Fn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function Q_(t,i,s,l){var f=(f=W.current)?nu(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Ys(s.href),s=ja(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Ys(s.href);var d=ja(f).hoistableStyles,x=d.get(t);if(x||(f=f.ownerDocument||f,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,x),(d=f.querySelector(vl(t)))&&!d._p&&(x.instance=d,x.state.loading=5),wi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},wi.set(t,s),d||oT(f,t,s,x.state))),i&&l===null)throw Error(r(528,""));return x}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ks(s),s=ja(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ys(t){return'href="'+Gt(t)+'"'}function vl(t){return'link[rel="stylesheet"]['+t+"]"}function $_(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function oT(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Fn(i,"link",s),vn(i),t.head.appendChild(i))}function Ks(t){return'[src="'+Gt(t)+'"]'}function _l(t){return"script[async]"+t}function J_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Gt(s.href)+'"]');if(l)return i.instance=l,vn(l),l;var f=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),vn(l),Fn(l,"style",f),iu(l,s.precedence,t),i.instance=l;case"stylesheet":f=Ys(s.href);var d=t.querySelector(vl(f));if(d)return i.state.loading|=4,i.instance=d,vn(d),d;l=$_(s),(f=wi.get(f))&&Ch(l,f),d=(t.ownerDocument||t).createElement("link"),vn(d);var x=d;return x._p=new Promise(function(C,V){x.onload=C,x.onerror=V}),Fn(d,"link",l),i.state.loading|=4,iu(d,s.precedence,t),i.instance=d;case"script":return d=Ks(s.src),(f=t.querySelector(_l(d)))?(i.instance=f,vn(f),f):(l=s,(f=wi.get(d))&&(l=v({},s),Dh(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),vn(f),Fn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,iu(l,s.precedence,t));return i.instance}function iu(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,x=0;x<l.length;x++){var C=l[x];if(C.dataset.precedence===i)d=C;else if(d!==f)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Ch(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Dh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var au=null;function ex(t,i,s){if(au===null){var l=new Map,f=au=new Map;f.set(s,l)}else f=au,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var d=s[f];if(!(d[Xa]||d[gn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(i)||"";x=t+x;var C=l.get(x);C?C.push(d):l.set(x,[d])}}return l}function tx(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function lT(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function nx(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function cT(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Ys(l.href),d=i.querySelector(vl(f));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=ru.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=d,vn(d);return}d=i.ownerDocument||i,l=$_(l),(f=wi.get(f))&&Ch(l,f),d=d.createElement("link"),vn(d);var x=d;x._p=new Promise(function(C,V){x.onload=C,x.onerror=V}),Fn(d,"link",l),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=ru.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Nh=0;function uT(t,i){return t.stylesheets&&t.count===0&&ou(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&ou(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&Nh===0&&(Nh=62500*XE());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ou(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Nh?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function ru(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ou(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var su=null;function ou(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,su=new Map,i.forEach(fT,t),su=null,ru.call(t))}function fT(t,i){if(!(i.state.loading&4)){var s=su.get(t);if(s)var l=s.get(null);else{s=new Map,su.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var x=f[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(s.set(x.dataset.precedence,x),l=x)}l&&s.set(null,l)}f=i.instance,x=f.getAttribute("data-precedence"),d=s.get(x)||l,d===l&&s.set(null,f),s.set(x,f),this.count++,l=ru.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var xl={$$typeof:z,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function dT(t,i,s,l,f,d,x,C,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qe(0),this.hiddenUpdates=Qe(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function ix(t,i,s,l,f,d,x,C,V,se,ye,Ae){return t=new dT(t,i,s,x,V,se,ye,Ae,C),i=1,d===!0&&(i|=24),d=ui(3,null,null,i),t.current=d,d.stateNode=t,i=ud(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},pd(d),t}function ax(t){return t?(t=As,t):As}function rx(t,i,s,l,f,d){f=ax(f),l.context===null?l.context=f:l.pendingContext=f,l=er(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=tr(t,l,i),s!==null&&(ti(s,t,i),Qo(s,t,i))}function sx(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Lh(t,i){sx(t,i),(t=t.alternate)&&sx(t,i)}function ox(t){if(t.tag===13||t.tag===31){var i=Ir(t,67108864);i!==null&&ti(i,t,67108864),Lh(t,67108864)}}function lx(t){if(t.tag===13||t.tag===31){var i=mi();i=Uo(i);var s=Ir(t,i);s!==null&&ti(s,t,i),Lh(t,i)}}var lu=!0;function hT(t,i,s,l){var f=U.T;U.T=null;var d=H.p;try{H.p=2,Uh(t,i,s,l)}finally{H.p=d,U.T=f}}function pT(t,i,s,l){var f=U.T;U.T=null;var d=H.p;try{H.p=8,Uh(t,i,s,l)}finally{H.p=d,U.T=f}}function Uh(t,i,s,l){if(lu){var f=Oh(l);if(f===null)xh(t,i,l,cu,s),ux(t,l);else if(gT(f,t,i,s,l))l.stopPropagation();else if(ux(t,l),i&4&&-1<mT.indexOf(t)){for(;f!==null;){var d=ua(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Ne(d.pendingLanes);if(x!==0){var C=d;for(C.pendingLanes|=2,C.entangledLanes|=2;x;){var V=1<<31-Ge(x);C.entanglements[1]|=V,x&=~V}$i(d),(Ft&6)===0&&(Wc=mt()+500,hl(0))}}break;case 31:case 13:C=Ir(d,2),C!==null&&ti(C,d,2),qc(),Lh(d,2)}if(d=Oh(l),d===null&&xh(t,i,l,cu,s),d===f)break;f=d}f!==null&&l.stopPropagation()}else xh(t,i,l,null,s)}}function Oh(t){return t=If(t),Ph(t)}var cu=null;function Ph(t){if(cu=null,t=ca(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=h(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return cu=t,null}function cx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ut()){case P:return 2;case E:return 8;case $:case ie:return 32;case he:return 268435456;default:return 32}default:return 32}}var Ih=!1,dr=null,hr=null,pr=null,yl=new Map,Sl=new Map,mr=[],mT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ux(t,i){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":yl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sl.delete(i.pointerId)}}function bl(t,i,s,l,f,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=ua(i),i!==null&&ox(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function gT(t,i,s,l,f){switch(i){case"focusin":return dr=bl(dr,t,i,s,l,f),!0;case"dragenter":return hr=bl(hr,t,i,s,l,f),!0;case"mouseover":return pr=bl(pr,t,i,s,l,f),!0;case"pointerover":var d=f.pointerId;return yl.set(d,bl(yl.get(d)||null,t,i,s,l,f)),!0;case"gotpointercapture":return d=f.pointerId,Sl.set(d,bl(Sl.get(d)||null,t,i,s,l,f)),!0}return!1}function fx(t){var i=ca(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,xs(t.priority,function(){lx(s)});return}}else if(i===31){if(i=h(s),i!==null){t.blockedOn=i,xs(t.priority,function(){lx(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uu(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Oh(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Pf=l,s.target.dispatchEvent(l),Pf=null}else return i=ua(s),i!==null&&ox(i),t.blockedOn=s,!1;i.shift()}return!0}function dx(t,i,s){uu(t)&&s.delete(i)}function vT(){Ih=!1,dr!==null&&uu(dr)&&(dr=null),hr!==null&&uu(hr)&&(hr=null),pr!==null&&uu(pr)&&(pr=null),yl.forEach(dx),Sl.forEach(dx)}function fu(t,i){t.blockedOn===i&&(t.blockedOn=null,Ih||(Ih=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,vT)))}var du=null;function hx(t){du!==t&&(du=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){du===t&&(du=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Ph(l||s)===null)continue;break}var d=ua(s);d!==null&&(t.splice(i,3),i-=3,Od(d,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Zs(t){function i(V){return fu(V,t)}dr!==null&&fu(dr,t),hr!==null&&fu(hr,t),pr!==null&&fu(pr,t),yl.forEach(i),Sl.forEach(i);for(var s=0;s<mr.length;s++){var l=mr[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<mr.length&&(s=mr[0],s.blockedOn===null);)fx(s),s.blockedOn===null&&mr.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],d=s[l+1],x=f[Un]||null;if(typeof d=="function")x||hx(s);else if(x){var C=null;if(d&&d.hasAttribute("formAction")){if(f=d,x=d[Un]||null)C=x.formAction;else if(Ph(f)!==null)continue}else C=x.action;typeof C=="function"?s[l+1]=C:(s.splice(l,3),l-=3),hx(s)}}}function px(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return f=x})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Fh(t){this._internalRoot=t}hu.prototype.render=Fh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=mi();rx(s,l,t,i,null,null)},hu.prototype.unmount=Fh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;rx(t.current,2,null,t,null,null),qc(),i[Kn]=null}};function hu(t){this._internalRoot=t}hu.prototype.unstable_scheduleHydration=function(t){if(t){var i=Po();t={blockedOn:null,target:t,priority:i};for(var s=0;s<mr.length&&i!==0&&i<mr[s].priority;s++);mr.splice(s,0,t),s===0&&fx(t)}};var mx=e.version;if(mx!=="19.2.8")throw Error(r(527,mx,"19.2.8"));H.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(i),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var _T={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{ve=pu.inject(_T),_e=pu}catch{}}return El.createRoot=function(t,i){if(!o(t))throw Error(r(299));var s=!1,l="",f=bv,d=Mv,x=Ev;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(x=i.onRecoverableError)),i=ix(t,1,!1,null,null,s,l,null,f,d,x,px),t[Kn]=i.current,_h(t),new Fh(i)},El.hydrateRoot=function(t,i,s){if(!o(t))throw Error(r(299));var l=!1,f="",d=bv,x=Mv,C=Ev,V=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(x=s.onCaughtError),s.onRecoverableError!==void 0&&(C=s.onRecoverableError),s.formState!==void 0&&(V=s.formState)),i=ix(t,1,!0,i,s??null,l,f,V,d,x,C,px),i.context=ax(null),s=i.current,l=mi(),l=Uo(l),f=er(l),f.callback=null,tr(s,f,l),s=l,i.current.lanes=s,We(i,s),$i(i),t[Kn]=i.current,_h(t),new hu(i)},El.version="19.2.8",El}var ny;function uw(){if(ny)return Wh.exports;ny=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Wh.exports=cw(),Wh.exports}var fw=uw();function xu(a){const e=globalThis.crypto?.randomUUID?.()??`${Date.now()}-${Math.random()}`;return`${a}-${e}`}function iy(a){return{id:a.message_id,role:a.role,content:a.content}}function Kr(a,e,n,r){return a.map(o=>o.id!==e?o:{...o,content:n,streaming:r})}function dw(a,e,n){return e?a.find(r=>r.conversation_id===e)?.title??n:n}function hw(a,e){const[n,r]=Re.useState([]),[o,c]=Re.useState(null),u=o,[h,m]=Re.useState([]),[p,_]=Re.useState(""),[v,g]=Re.useState("idle"),[S,T]=Re.useState(null),[w,M]=Re.useState(null),[y,F]=Re.useState(null),[z,D]=Re.useState(null),[B,L]=Re.useState([]),N=Re.useRef(0),A=Re.useRef(null);Re.useEffect(()=>()=>{A.current&&clearTimeout(A.current)},[]);const I=Re.useMemo(()=>dw(n,o,e.newConversationTitle),[o,n,e.newConversationTitle]),k=v!=="idle";Re.useEffect(()=>{let ne=!0;async function Me(){try{let Q=await a.listConversations(),W=localStorage.getItem(e.storageKey);Q.some(Pe=>Pe.conversation_id===W)||(W=Q[0]?.conversation_id??null),W||(W=(await a.createConversation()).conversation_id,Q=await a.listConversations());const xe=await a.loadMessages(W);if(!ne)return;r(Q),c(W),m(xe.map(iy)),localStorage.setItem(e.storageKey,W)}catch(Q){ne&&D(Q instanceof Error?Q.message:e.wakeErrorMessage)}}return Me(),()=>{ne=!1}},[a,e.storageKey,e.wakeErrorMessage]);async function G(){r(await a.listConversations())}async function Y(){if(k||h.length===0)return!1;const ne=await a.createConversation();return c(ne.conversation_id),m([]),M(null),T(null),F(null),localStorage.setItem(e.storageKey,ne.conversation_id),await G(),!0}async function pe(ne){if(!k){if(await a.deleteConversation(ne),ne===u){const Me=(await a.listConversations()).filter(Q=>Q.conversation_id!==ne);Me.length>0?await J(Me[0].conversation_id):await Y()}await G()}}async function me(ne){return a.getPassage(ne)}async function J(ne){if(k||ne===o)return!1;const Me=N.current+1;N.current=Me;const Q=await a.loadMessages(ne);return N.current!==Me?!1:(c(ne),m(Q.map(iy)),M(null),T(null),F(null),localStorage.setItem(e.storageKey,ne),!0)}function U(ne,Me,Q){if(ne.type==="delta"){A.current&&clearTimeout(A.current),L([]);const W=Q+ne.text;return m(le=>Kr(le,Me,W,!0)),{text:W,terminal:!1}}return ne.type==="completed"?(m(W=>Kr(W,Me,ne.text,!1)),T(Me),{text:ne.text,terminal:!0}):ne.type==="tool"?(L([{name:ne.name,status:ne.status,detail:ne.detail,preview:ne.preview,handles:ne.handles}]),A.current&&clearTimeout(A.current),A.current=setTimeout(()=>L([]),3500),{text:Q,terminal:!1}):(m(W=>Kr(W,Me,Q,!1)),F(ne.message),{text:Q,terminal:!0})}async function H(ne){if(!o||k)return;const Me=xu("assistant");_(""),M(ne),T(null),F(null),L([]),g("streaming"),m(le=>[...le,{id:xu("owner"),role:"owner",content:ne},{id:Me,role:"weaver",content:"",streaming:!0}]);let Q="",W=!1;try{for await(const le of a.streamTurn(o,ne)){const xe=U(le,Me,Q);if(Q=xe.text,W=xe.terminal,xe.terminal)break}W||(m(le=>Kr(le,Me,Q,!1)),F(e.incompleteTurnMessage))}catch(le){m(Pe=>Kr(Pe,Me,Q,!1));const xe=le instanceof Error?le.message:e.connectionLostMessage;F(le instanceof Error?`${xe} This turn cannot resume.`:e.connectionLostMessage)}finally{g("idle");try{await G()}catch{}}}async function te(){if(!(!o||v!=="streaming")){g("cancelling");try{await a.cancelTurn(o)}catch(ne){F(ne instanceof Error?ne.message:e.cancelFailedMessage),g("streaming")}}}async function re(){if(!o||v!=="idle"||!S)return;const ne=S,Me=xu("assistant");T(null),F(null),L([]),g("streaming"),m(Q=>[...Q.filter(W=>W.id!==ne),{id:Me,role:"weaver",content:"",streaming:!0}]),await O(Me,a.regenerateTurn(o))}async function be(){if(!o||v!=="idle"||!w)return;const ne=xu("assistant");T(null),F(null),L([]),g("streaming"),m(Me=>[...Me,{id:ne,role:"weaver",content:"",streaming:!0}]),await O(ne,a.retryTurn(o))}async function O(ne,Me){let Q="",W=!1;try{for await(const le of Me){const xe=U(le,ne,Q);if(Q=xe.text,W=xe.terminal,xe.terminal)break}W||(m(le=>Kr(le,ne,Q,!1)),F(e.incompleteTurnMessage))}catch(le){m(Pe=>Kr(Pe,ne,Q,!1));const xe=le instanceof Error?le.message:e.connectionLostMessage;F(le instanceof Error?`${xe} This turn cannot resume.`:e.connectionLostMessage)}finally{g("idle");try{await G()}catch{}}}const K=(()=>{const ne=h[h.length-1];return ne&&ne.role==="weaver"?ne.id:null})();return{activeTitle:I,activity:B,bootError:z,cancelTurn:te,conversationId:o,conversations:n,createConversation:Y,deleteConversation:pe,loadPassage:me,draft:p,lastReplyId:K,liveReplyId:S,messages:h,recoveryMessage:y,regenerateReply:re,retryLastTurn:be,selectConversation:J,sendMessage:H,setDraft:_,turnActive:k,turnState:v}}const Ri={assistantName:"Weaver",brandLine:"the eighth lineage",cancelFailedMessage:"The cut did not reach Weaver.",closeRailLabel:"Close conversation rail",conversationNoun:"thread",composerPlaceholder:"Ask Weaver about Shadow Slave...",connectionLostMessage:"The connection was lost. This turn cannot resume.",currentConversationLabel:"current weave",emptyEyebrow:"Shadow Slave, remembered",emptyTitle:"What thread are we pulling?",emptyHint:"Bring a scene, a theory, a character, or one of your hottest takes.",footerLine:"the eighth lineage, still weaving...",incompleteTurnMessage:"The connection ended before Weaver finished. This turn cannot resume.",inputLabel:"Message Weaver",navigationLabel:"Conversation threads",newConversationLabel:"New weave",newConversationTitle:"A new thread",openRailLabel:"Open conversation rail",recentConversationsLabel:"Recent threads",recoveryChooseLabel:"Choose another thread",recoveryCreateLabel:"Start a new weave",recoveryRetryLabel:"Retry",recoveryTitle:"The thread broke.",regenerateLabel:"Regenerate",sendLabel:"Send message",storageKey:"weaver.active-conversation",stopLabel:"Stop Weaver",stoppingLabel:"Stopping Weaver",wakeErrorMessage:"Weaver could not wake."},pw=["[Searching the fate tapestry.]","[Following a silver thread through the void.]","[Tracing where this memory touches the chapters.]"],mw=["[Reading what the Spell remembers.]","[Drawing the found passage into the weave.]","[Listening for the truth between the lines.]"],gw=["[Binding the scattered threads.]","[Setting each echo in its proper place.]","[Joining memory to canon.]"],vw=["[The Spell turns the question in the dark.]","[The pattern is beginning to answer.]","[Following the next thread of fate.]"];function yu(a,e){let n=0;for(const r of a)n+=r.charCodeAt(0);return e[n%e.length]}function Kh(a,e){return e.some(n=>a.includes(n))}function _w(a){if(a.status!=="start")return null;const e=a.name.toLowerCase();return Kh(e,["search","find","locate","browse","grep","glob","who_is"])?yu(e,pw):Kh(e,["read","chapter","passage","inspect"])?yu(e,mw):Kh(e,["connect","related","compare","timeline","link"])?yu(e,gw):yu(e,vw)}const e1="weaver_first_nightmare";function xw(){const a=localStorage.getItem(e1);return a==="completed"||a==="deferred"?a:null}function ay(a){localStorage.setItem(e1,a)}function yw(){return xw()===null}const ry="weaver_device_id",Jp="weaver_api_key",em="weaver_api_key_disabled",tm="weaver_model_id",_g="deepseek-v4-flash",Sw=[{id:"deepseek-v4-flash",label:"DeepSeek V4 Flash"},{id:"deepseek-v4-pro",label:"DeepSeek V4 Pro"}];function bw(){let a=localStorage.getItem(ry);return a||(a=crypto.randomUUID(),localStorage.setItem(ry,a)),a}function Mo(){return localStorage.getItem(Jp)??""}function t1(a){a.trim()===""?localStorage.removeItem(Jp):localStorage.setItem(Jp,a.trim())}function Wl(){return localStorage.getItem(em)==="1"}function Mw(a){a?localStorage.setItem(em,"1"):localStorage.removeItem(em)}function n1(){return localStorage.getItem(tm)??_g}function Ew(a){a===_g?localStorage.removeItem(tm):localStorage.setItem(tm,a)}function Tw(a){const e={"X-Device-Id":bw()},n=Mo();n!==""&&!Wl()&&(e["X-Weaver-Key"]=n);const r=n1();return r!==_g&&(e["X-Weaver-Model"]=r),{...e,...a}}var Aw={prefix:"fas",iconName:"bars-staggered",icon:[512,512,["reorder","stream"],"f550","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},ww={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z"]},Rw={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]},Cw={prefix:"fas",iconName:"thumbtack",icon:[384,512,[128204,128392,"thumb-tack"],"f08d","M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"]},Dw={prefix:"fas",iconName:"link",icon:[576,512,[128279,"chain"],"f0c1","M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z"]},Nw={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},Lw={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},Uw={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M352.9 21.2L308 66.1 445.9 204 490.8 159.1C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2zM274.1 100L58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6L412 237.9 274.1 100z"]},Ow={prefix:"fas",iconName:"rotate-right",icon:[512,512,["redo-alt","rotate-forward"],"f2f9","M488 192l-144 0c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l46.7-46.7c-75.3-58.6-184.3-53.3-253.5 15.9-75 75-75 196.5 0 271.5s196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c94.3-94.3 243.7-99.6 344.3-16.2L471 7c6.9-6.9 17.2-8.9 26.2-5.2S512 14.3 512 24l0 144c0 13.3-10.7 24-24 24z"]},Pw={prefix:"fas",iconName:"quote-left",icon:[448,512,[8220,"quote-left-alt"],"f10d","M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64L0 216zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-136z"]},Iw={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Fw={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},zw={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]},Bw={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"]},Vw={prefix:"fas",iconName:"eye-slash",icon:[576,512,[],"f070","M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM204.5 138.7c23.5-16.8 52.4-26.7 83.5-26.7 79.5 0 144 64.5 144 144 0 31.1-9.9 59.9-26.7 83.5l-34.7-34.7c12.7-21.4 17-47.7 10.1-73.7-13.7-51.2-66.4-81.6-117.6-67.9-8.6 2.3-16.7 5.7-24 10l-34.7-34.7zM325.3 395.1c-11.9 3.2-24.4 4.9-37.3 4.9-79.5 0-144-64.5-144-144 0-12.9 1.7-25.4 4.9-37.3L69.4 139.2c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6l-64.2-64.2z"]},Hw={prefix:"fas",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32z"]},Gw={prefix:"fas",iconName:"box-archive",icon:[512,512,["archive"],"f187","M0 64C0 46.3 14.3 32 32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64zM32 176l448 0 0 240c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-240zm152 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"]};function kw(a){return a=a-0,a===a}function i1(a){return kw(a)?a:(a=a.replace(/[_-]+(.)?/g,(e,n)=>n?n.toUpperCase():""),a.charAt(0).toLowerCase()+a.slice(1))}var Xw=(a,e)=>rg.createElement("stop",{key:`${e}-${a.offset}`,offset:a.offset,stopColor:a.color,...a.opacity!==void 0&&{stopOpacity:a.opacity}});function Ww(a){return a.charAt(0).toUpperCase()+a.slice(1)}var $s=new Map,jw=1e3;function qw(a){if($s.has(a))return $s.get(a);const e={};let n=0;const r=a.length;for(;n<r;){const o=a.indexOf(";",n),c=o===-1?r:o,u=a.slice(n,c).trim();if(u){const h=u.indexOf(":");if(h>0){const m=u.slice(0,h).trim(),p=u.slice(h+1).trim();if(m&&p){const _=i1(m);e[_.startsWith("webkit")?Ww(_):_]=p}}}n=c+1}if($s.size===jw){const o=$s.keys().next().value;o&&$s.delete(o)}return $s.set(a,e),e}function a1(a,e,n={}){if(typeof e=="string")return e;const r=(e.children||[]).map(v=>{let g=v;return("fill"in n||n.gradientFill)&&v.tag==="path"&&"fill"in v.attributes&&(g={...v,attributes:{...v.attributes,fill:void 0}}),a1(a,g)}),o=e.attributes||{},c={};for(const[v,g]of Object.entries(o))switch(!0){case v==="class":{c.className=g;break}case v==="style":{c.style=qw(String(g));break}case v.startsWith("aria-"):case v.startsWith("data-"):{c[v.toLowerCase()]=g;break}default:c[i1(v)]=g}const{style:u,role:h,"aria-label":m,gradientFill:p,..._}=n;if(u&&(c.style=c.style?{...c.style,...u}:u),h&&(c.role=h),m&&(c["aria-label"]=m,c["aria-hidden"]="false"),p){c.fill=`url(#${p.id})`;const{type:v,stops:g=[],...S}=p;r.unshift(a(v==="linear"?"linearGradient":"radialGradient",{...S,id:p.id},g.map(Xw)))}return a(e.tag,{...c,..._},...r)}var Yw=a1.bind(null,rg.createElement),sy=(a,e)=>{const n=Re.useId();return a||(e?n:void 0)},Kw=class{constructor(a="react-fontawesome"){this.enabled=!1;let e=!1;try{e=typeof process<"u"&&!1}catch{}this.scope=a,this.enabled=e}log(...a){this.enabled&&console.log(`[${this.scope}]`,...a)}warn(...a){this.enabled&&console.warn(`[${this.scope}]`,...a)}error(...a){this.enabled&&console.error(`[${this.scope}]`,...a)}},Zw="searchPseudoElementsFullScan"in ps&&typeof ps.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",Qw=Number.parseInt(Zw)>=7,$w=()=>Qw,Hl="fa",Cn={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse",flip360:"fa-flip-360",buzz:"fa-buzz",float:"fa-float",jello:"fa-jello",spinSnap:"fa-spin-snap",spinSnap4:"fa-spin-snap-4",spinSnap8:"fa-spin-snap-8",swing:"fa-swing",wag:"fa-wag"},Jw={left:"fa-pull-left",right:"fa-pull-right"},eR={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},tR={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},zi={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto",canvasSquare:"fa-canvas-square",canvasRoomy:"fa-canvas-roomy"};function nR(a){const e=ps.cssPrefix||ps.familyPrefix||Hl;return e===Hl?a:a.replace(new RegExp(String.raw`(?<=^|\s)${Hl}-`,"g"),`${e}-`)}function iR(a){const{beat:e,fade:n,beatFade:r,bounce:o,shake:c,spin:u,spinPulse:h,spinReverse:m,pulse:p,fixedWidth:_,inverse:v,border:g,flip:S,size:T,rotation:w,pull:M,swapOpacity:y,rotateBy:F,widthAuto:z,canvasSquare:D,canvasRoomy:B,flip360:L,buzz:N,float:A,jello:I,spinSnap:k,spinSnap4:G,spinSnap8:Y,swing:pe,wag:me,className:J}=a,U=[];return J&&U.push(...J.split(" ")),e&&U.push(Cn.beat),n&&U.push(Cn.fade),r&&U.push(Cn.beatFade),o&&U.push(Cn.bounce),c&&U.push(Cn.shake),u&&U.push(Cn.spin),m&&U.push(Cn.spinReverse),h&&U.push(Cn.spinPulse),p&&U.push(Cn.pulse),_&&U.push(zi.fixedWidth),v&&U.push(zi.inverse),g&&U.push(zi.border),S===!0&&U.push(zi.flip),(S==="horizontal"||S==="both")&&U.push(zi.flipHorizontal),(S==="vertical"||S==="both")&&U.push(zi.flipVertical),T!=null&&U.push(tR[T]),w!=null&&w!==0&&U.push(eR[w]),M!=null&&U.push(Jw[M]),y&&U.push(zi.swapOpacity),$w()?(F&&U.push(zi.rotateBy),z&&U.push(zi.widthAuto),D&&U.push(zi.canvasSquare),B&&U.push(zi.canvasRoomy),L&&U.push(Cn.flip360),N&&U.push(Cn.buzz),A&&U.push(Cn.float),I&&U.push(Cn.jello),k&&U.push(Cn.spinSnap),G&&U.push(Cn.spinSnap4),Y&&U.push(Cn.spinSnap8),pe&&U.push(Cn.swing),me&&U.push(Cn.wag),(ps.cssPrefix||ps.familyPrefix||Hl)===Hl?U:U.map(nR)):U}var aR=a=>typeof a=="object"&&"icon"in a&&!!a.icon;function oy(a){if(a)return aR(a)?a:Jb.icon(a)}function rR(a){return Object.keys(a)}var ly=new Kw("FontAwesomeIcon"),r1={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},sR=new Set(Object.keys(r1)),Ln=rg.forwardRef((a,e)=>{const n={...r1,...a},{icon:r,mask:o,symbol:c,title:u,titleId:h,maskId:m,transform:p}=n,_=sy(m,!!o),v=sy(h,!!u),g=oy(r);if(!g)return ly.error("Icon lookup is undefined",r),null;const S=iR(n),T=typeof p=="string"?Jb.transform(p):p,w=oy(o),M=aw(g,{...S.length>0&&{classes:S},...T&&{transform:T},...w&&{mask:w},symbol:c,title:u,titleId:v,maskId:_});if(!M)return ly.error("Could not find icon",g),null;const{abstract:y}=M,F={ref:e};for(const z of rR(n))sR.has(z)||(F[z]=n[z]);return Yw(y[0],F)});Ln.displayName="FontAwesomeIcon";function oR(a){return b.jsx(Ln,{"aria-hidden":"true",icon:Lw,...a})}function cy(a){return b.jsx(Ln,{"aria-hidden":"true",icon:Bw,...a})}function s1(a){return b.jsx(Ln,{"aria-hidden":"true",icon:ww,...a})}function o1(a){return b.jsx(Ln,{"aria-hidden":"true",icon:Vw,...a})}function lR(a){return b.jsx(Ln,{"aria-hidden":"true",icon:zw,...a})}function cR(a){return b.jsx(Ln,{"aria-hidden":"true",icon:Ow,...a})}function uR(a){return b.jsx(Ln,{"aria-hidden":"true",icon:Hw,...a})}function fR(a){return b.jsx(Ln,{"aria-hidden":"true",icon:Dw,...a})}function l1(a){return b.jsx(Ln,{"aria-hidden":"true",icon:Aw,...a})}function dR(a){return b.jsx(Ln,{"aria-hidden":"true",icon:Fw,...a})}function c1(a){return b.jsx(Ln,{"aria-hidden":"true",icon:Nw,...a})}function hR(a){return b.jsx(Ln,{"aria-hidden":"true",icon:Rw,...a})}function pR(a){return b.jsx(Ln,{"aria-hidden":"true",icon:Pw,...a})}function nm(a){return b.jsx(Ln,{"aria-hidden":"true",icon:Iw,...a})}function uy(a){return b.jsx(Ln,{"aria-hidden":"true",icon:Gw,...a})}function mR(a){return b.jsx(Ln,{"aria-hidden":"true",icon:Uw,...a})}function gR(a){return b.jsx(Ln,{"aria-hidden":"true",icon:Cw,...a})}const vR=["awakened","ascended","transcendent"];function _R({cancelling:a,draft:e,inputLabel:n="Message assistant",onCancel:r,onDraftChange:o,onSubmit:c,onTierChange:u,placeholder:h="Write a message...",sendLabel:m="Send message",stopLabel:p="Stop assistant",stoppingLabel:_="Stopping assistant",textareaRef:v,tier:g,turnActive:S,voiceBound:T=!0}){const w=Re.useRef(null),M=v??w,y=Re.useRef(null),[F,z]=Re.useState(!1);Re.useEffect(()=>{const L=M.current;L&&(L.style.height="auto",L.style.height=`${Math.min(L.scrollHeight,160)}px`)},[e,M]),Re.useEffect(()=>{if(!F)return;function L(A){y.current&&!y.current.contains(A.target)&&z(!1)}function N(A){A.key==="Escape"&&z(!1)}return document.addEventListener("pointerdown",L),document.addEventListener("keydown",N),()=>{document.removeEventListener("pointerdown",L),document.removeEventListener("keydown",N)}},[F]);function D(){const L=e.trim();!L||S||c(L)}function B(L){L.key!=="Enter"||L.shiftKey||(L.preventDefault(),D())}return b.jsxs("div",{className:"composer-wrap",children:[b.jsxs("div",{className:"composer-shell",children:[b.jsx("textarea",{"aria-label":n,disabled:S,onChange:L=>o(L.target.value),onKeyDown:B,placeholder:h,ref:M,rows:1,value:e}),b.jsxs("div",{className:"composer-tier",ref:y,children:[b.jsxs("button",{"aria-expanded":F,"aria-haspopup":"listbox","aria-label":`Reading tier: ${g}`,className:"tier-pill",disabled:S,onClick:()=>z(L=>!L),type:"button",children:[b.jsx("span",{className:"tier-pill-name",children:g}),b.jsx(nm,{})]}),F&&b.jsx("ul",{"aria-label":"Reading tier",className:"tier-menu",role:"listbox",children:vR.map(L=>b.jsx("li",{children:b.jsxs("button",{"aria-selected":L===g,onClick:()=>{u(L),z(!1)},role:"option",type:"button",children:[b.jsx("span",{className:"tier-menu-check",children:L===g?"✦":""}),L]})},L))})]}),S?b.jsx("button",{"aria-label":a?_:p,className:"composer-action composer-stop",disabled:a,onClick:r,type:"button",children:b.jsx(uR,{})}):b.jsx("button",{"aria-label":m,className:"composer-action composer-send",disabled:!e.trim(),onClick:D,type:"button",children:b.jsx(oR,{})})]}),!T&&b.jsx("p",{className:"composer-binding-status",children:"[The voice remains unbound.]"})]})}const xR=[{x:-78,y:-20},{x:-60,y:-14},{x:-42,y:-8},{x:-24,y:-3},{x:-7,y:0},{x:12,y:2},{x:30,y:7},{x:48,y:13},{x:67,y:20},{x:-78,y:20},{x:-60,y:14},{x:-42,y:8},{x:-24,y:3},{x:-7,y:0},{x:12,y:-2},{x:30,y:-7},{x:48,y:-13},{x:67,y:-20},{x:-2,y:-27},{x:-1,y:-14},{x:0,y:14},{x:1,y:27}];function yR(a,e){return{"--fragment-index":e,"--fragment-x":`${a.x}px`,"--fragment-y":`${a.y}px`}}function SR({announcement:a,eventKey:e}){return b.jsxs("div",{"aria-live":"polite",className:"first-nightmare-rune-event",children:[b.jsxs("div",{"aria-hidden":"true",className:"first-nightmare-particles",children:[b.jsxs("svg",{className:"first-nightmare-thread",viewBox:"0 0 180 60",children:[b.jsx("path",{d:"M5 12 C48 12 53 48 90 30 S135 12 175 48"}),b.jsx("path",{d:"M5 48 C48 48 53 12 90 30 S135 48 175 12"})]}),xR.map((n,r)=>b.jsx("span",{style:yR(n,r)},r))]}),b.jsx("p",{children:a})]},e)}const bR="/assets/hidden-thread-rite-D21blqap.webp";function MR(){return b.jsx("img",{alt:"","aria-hidden":"true",className:"hidden-thread-mask","data-hidden-thread-mask":!0,height:1672,src:bR,width:941})}const ER="/assets/hidden-thread-mask-mark-DhgMKhrX.webp";function hf({className:a,compact:e=!1}){const n=["weaver-mark-icon",e?"weaver-mark-icon-compact":"",a].filter(Boolean).join(" ");return b.jsx("img",{alt:"","aria-hidden":"true",className:n,height:512,src:ER,width:512})}const Zh=["Good","Exceptional","Remarkable","Glorious"],fy=["Glorious","Fated","Treacherous","Suspicious","Remarkable","Fraudulent"],TR=["a[href]","button:not(:disabled)","input:not(:disabled)"].join(", ");function dy(){return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1}function AR(a){const e=a.closest(".spell-surface-lab");if(!e)return()=>{};const n=Array.from(e.children).filter(o=>o!==a),r=n.map(o=>({ariaHidden:o.getAttribute("aria-hidden"),element:o,inert:o.inert}));for(const o of n)o.inert=!0,o.setAttribute("aria-hidden","true");return()=>{for(const o of r)o.element.inert=o.inert,o.ariaHidden===null?o.element.removeAttribute("aria-hidden"):o.element.setAttribute("aria-hidden",o.ariaHidden)}}function wR(a){return a===1?"awakening":a===2?"initiation":a===3?"binding":"appraisal"}function RR({initialStep:a=1,onComplete:e,onDefer:n,onKeyStored:r,onRevealStart:o,reviewMode:c=!1}){const[u,h]=Re.useState(a),[m,p]=Re.useState(Mo),[_,v]=Re.useState(!1),[g,S]=Re.useState(!1),[T,w]=Re.useState(0),[M,y]=Re.useState(!1),[F,z]=Re.useState(null),[D,B]=Re.useState(!1),L=Re.useRef(null),N=Re.useRef(document.activeElement instanceof HTMLElement?document.activeElement:null);Re.useEffect(()=>{const re=L.current;if(!re)return;const be=AR(re);return()=>{be(),N.current?.focus()}},[]),Re.useEffect(()=>{const re=L.current;re?.scrollTo?.({behavior:"auto",top:0}),re?.querySelector("[data-autofocus]")?.focus({preventScroll:!0})},[T,u]);function A(){c||ay("deferred"),n()}function I(){try{t1(m),ay("completed"),S(!1),y(!1),z(null),w(dy()?Zh.length-1:0),r?.(),h(4)}catch{S(!0)}}function k(){S(!1),y(!0);const re=Math.floor(Math.random()*fy.length);z(fy[re]),h(4)}function G(){if(o?.(),dy()){e();return}B(!0)}function Y(re){D&&re.target===re.currentTarget&&e()}function pe(){M||w(re=>Math.min(re+1,Zh.length-1))}function me(re){if(re.key==="Escape"){re.preventDefault(),A();return}if(re.key!=="Tab"||!L.current)return;const be=L.current.querySelectorAll(TR),O=be[0],K=be[be.length-1];re.shiftKey&&document.activeElement===O&&(re.preventDefault(),K?.focus()),!re.shiftKey&&document.activeElement===K&&(re.preventDefault(),O?.focus())}const J=F??Zh[T],U=M||J==="Glorious",H=u===1?"[The hidden thread has found you.]":u===2?"[A buried knowledge answers.]":u===3?"[Bind a voice to the hidden thread.]":`[Appraisal: ${J}.]`,te=Math.min(m.length,24);return b.jsxs("section",{"aria-label":"First Nightmare setup","aria-modal":"true",className:`hidden-thread-rite${D?" is-revealing":""}`,"data-rite-act":wR(u),onAnimationEnd:Y,onKeyDown:me,ref:L,role:"dialog",children:[b.jsx("div",{"aria-hidden":"true",className:"hidden-thread-mantle hidden-thread-mantle-left"}),b.jsx("div",{"aria-hidden":"true",className:"hidden-thread-mantle hidden-thread-mantle-right"}),b.jsxs("header",{className:"hidden-thread-progress",children:[b.jsx("span",{children:"First Nightmare"}),b.jsxs("small",{children:[u," / 4"]})]}),b.jsxs("div",{className:"hidden-thread-scene",children:[u===1&&b.jsx(MR,{}),b.jsx(SR,{announcement:H,eventKey:u}),b.jsxs("div",{className:"hidden-thread-copy",children:[u===1&&b.jsxs(b.Fragment,{children:[b.jsx("h1",{children:"The Spell has found you"}),b.jsx("p",{children:"A thread has taken root in this browser. Before Weaver can read with you, there is one small trial."}),b.jsxs("div",{className:"hidden-thread-actions",children:[b.jsx("button",{"data-autofocus":!0,onClick:()=>h(2),type:"button",children:b.jsx("span",{children:"Enter the First Nightmare"})}),b.jsx("button",{className:"hidden-thread-secondary",onClick:A,type:"button",children:"Enter later"})]})]}),u===2&&b.jsxs(b.Fragment,{children:[b.jsx("h1",{children:"Bring your DeepSeek key"}),b.jsx("p",{children:"A DeepSeek API key is a private code that lets Weaver send your questions to DeepSeek and charge the model usage to your DeepSeek account."}),b.jsx("aside",{className:"hidden-thread-privacy",children:"Your key stays in this browser. Weaver sends it with each request and the server does not save it."}),b.jsxs("a",{href:"https://platform.deepseek.com/",rel:"noreferrer",target:"_blank",children:["Get a key from DeepSeek",b.jsx("span",{className:"sr-only",children:", opens the DeepSeek Platform in a new tab"})]}),b.jsxs("div",{className:"hidden-thread-actions",children:[b.jsx("button",{"data-autofocus":!0,onClick:()=>h(3),type:"button",children:b.jsx("span",{children:"I have a key"})}),b.jsxs("div",{className:"hidden-thread-quiet-actions",children:[b.jsx("button",{onClick:()=>h(1),type:"button",children:"Back"}),b.jsx("button",{onClick:A,type:"button",children:"Enter later"})]})]})]}),u===3&&b.jsxs("form",{onSubmit:re=>{re.preventDefault(),I()},children:[b.jsx("h1",{children:"Bind a voice to the thread"}),b.jsx("label",{htmlFor:"first-nightmare-api-key",children:"Your DeepSeek API key"}),b.jsxs("div",{className:"hidden-thread-key-channel",children:[b.jsx("input",{autoCapitalize:"none",autoComplete:"off","data-autofocus":!0,id:"first-nightmare-api-key",onChange:re=>p(re.target.value),placeholder:"sk-...",spellCheck:!1,type:_?"text":"password",value:m}),b.jsx("button",{"aria-label":_?"Hide API key":"Show API key",className:"hidden-thread-key-visibility",onClick:()=>v(re=>!re),type:"button",children:_?b.jsx(o1,{}):b.jsx(s1,{})}),b.jsx("div",{"aria-hidden":"true",className:"hidden-thread-binding-beads","data-testid":"key-binding-beads",children:Array.from({length:te},(re,be)=>b.jsx("span",{},be))})]}),b.jsx("small",{children:"Stored only in this browser. You can replace or remove it later in Settings."}),g&&b.jsx("p",{className:"hidden-thread-error",role:"alert",children:"The key could not be stored in this browser. Check browser storage and try again."}),b.jsxs("div",{className:"hidden-thread-actions",children:[b.jsx("button",{disabled:m.trim()==="",type:"submit",children:b.jsx("span",{children:"Store key and continue"})}),b.jsxs("div",{className:"hidden-thread-quiet-actions",children:[b.jsx("button",{onClick:()=>h(2),type:"button",children:"Back"}),b.jsx("button",{onClick:A,type:"button",children:"Enter later"})]}),c&&b.jsx("button",{className:"hidden-thread-review-action",onClick:k,type:"button",children:"Preview without storing a key"})]})]}),u===4&&b.jsxs(b.Fragment,{children:[b.jsx("div",{"aria-hidden":"true",className:`hidden-thread-appraisal-mark${M?" is-preview":""}`,"data-testid":"appraisal-mask",children:b.jsx(hf,{compact:!0})}),b.jsx("div",{"aria-label":`Appraisal: ${J}`,className:"hidden-thread-appraisal",children:b.jsx("span",{className:U?"is-glorious":"",onAnimationEnd:pe,children:J},J)}),U&&b.jsxs(b.Fragment,{children:[b.jsx("h1",{children:M?"The rite is complete":"The voice is bound"}),M?b.jsx("p",{children:"Review complete. No key was stored and your current binding remains unchanged."}):b.jsx("p",{children:"The key is stored in this browser. Weaver can now read, reread, and answer through your DeepSeek account."}),b.jsx("div",{className:"hidden-thread-actions",children:b.jsx("button",{"data-autofocus":!0,onClick:G,type:"button",children:b.jsx("span",{children:"Enter Weaver"})})})]})]})]},u)]})]})}function CR({label:a="Weaver is weaving an answer"}={}){return b.jsx("div",{"aria-label":a,className:"fate-weaving-loader",role:"status",children:b.jsxs("svg",{"aria-hidden":"true",viewBox:"0 0 128 36",children:[b.jsx("path",{className:"fate-loader-thread fate-loader-thread-one",d:"M2 7 C30 7, 37 18, 64 18 S98 29, 126 29",pathLength:"1"}),b.jsx("path",{className:"fate-loader-thread fate-loader-thread-two",d:"M2 29 C30 29, 37 18, 64 18 S98 7, 126 7",pathLength:"1"}),b.jsx("path",{className:"fate-loader-thread fate-loader-thread-three",d:"M2 18 C32 18, 42 12, 64 18 S96 24, 126 18",pathLength:"1"}),b.jsx("circle",{className:"fate-loader-core fate-loader-core-one",cx:"40",cy:"15",r:"1.7"}),b.jsx("circle",{className:"fate-loader-core fate-loader-core-two",cx:"64",cy:"18",r:"2.3"}),b.jsx("circle",{className:"fate-loader-core fate-loader-core-three",cx:"89",cy:"21",r:"1.7"})]})})}const DR=/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;function NR(a){try{const e=new URL(a);return e.protocol==="http:"||e.protocol==="https:"}catch{return!1}}function Qh(a,e){if(!e)return;const n=a.at(-1);if(n?.type==="text"){n.value+=e;return}a.push({type:"text",value:e})}function Su(a){const e=[];let n=0;for(const r of a.matchAll(DR)){const o=r.index??0;Qh(e,a.slice(n,o));const c=r[0];if(c.startsWith("**"))e.push({type:"strong",children:[{type:"text",value:c.slice(2,-2)}]});else if(c.startsWith("*"))e.push({type:"emphasis",children:[{type:"text",value:c.slice(1,-1)}]});else if(c.startsWith("`"))e.push({type:"code",value:c.slice(1,-1)});else{const u=/^\[([^\]]+)\]\(([^)]+)\)$/.exec(c),h=u?.[2]??"";u&&NR(h)?e.push({type:"link",label:u[1],href:h}):Qh(e,c)}n=o+c.length}return Qh(e,a.slice(n)),e}function LR(a){const e=a.trim();return/^#{1,6}\s+/.test(e)||e.startsWith("```")||e.startsWith(">")||/^(-{3,}|\*{3,}|_{3,})$/.test(e)||/^([-*]\s+|\d+[.)]\s+)/.test(e)}function UR(a){const e=[],n=String(a??"").split(/\r?\n/);let r=0;for(;r<n.length;){const o=n[r].trim();if(!o){r+=1;continue}if(o.startsWith("```")){const p=[];for(r+=1;r<n.length&&!n[r].trimStart().startsWith("```");)p.push(n[r]),r+=1;r<n.length&&(r+=1),e.push({type:"code",value:p.join(`
`)});continue}const c=/^(#{1,6})\s+(.*)$/.exec(o);if(c){e.push({type:"heading",level:c[1].length,children:Su(c[2])}),r+=1;continue}if(o.startsWith(">")){e.push({type:"quote",children:Su(o.replace(/^>\s?/,""))}),r+=1;continue}if(/^(-{3,}|\*{3,}|_{3,})$/.test(o)){e.push({type:"rule"}),r+=1;continue}const u=/^[-*]\s+/.test(o),h=/^\d+[.)]\s+/.test(o);if(u||h){const p=[];for(;r<n.length;){const _=n[r].trim(),v=h?/^\d+[.)]\s+(.*)$/.exec(_):/^[-*]\s+(.*)$/.exec(_);if(!v)break;p.push(Su(v[1])),r+=1}e.push({type:"list",ordered:h,items:p});continue}const m=[];for(;r<n.length;){const p=n[r].trim();if(!p||m.length>0&&LR(p))break;m.push(p),r+=1}e.push({type:"paragraph",children:Su(m.join(" "))})}return e}function mo(a){return a.map((e,n)=>{const r=`${e.type}-${n}`;return e.type==="text"?b.jsx(Re.Fragment,{children:e.value},r):e.type==="strong"?b.jsx("strong",{children:mo(e.children)},r):e.type==="emphasis"?b.jsx("em",{children:mo(e.children)},r):e.type==="code"?b.jsx("code",{children:e.value},r):b.jsx("a",{href:e.href,rel:"noreferrer",target:"_blank",children:e.label},r)})}function OR({children:a}){return UR(a).map((n,r)=>{const o=`${n.type}-${r}`;if(n.type==="paragraph")return b.jsx("p",{children:mo(n.children)},o);if(n.type==="heading"){const u=`h${n.level}`;return b.jsx(u,{children:mo(n.children)},o)}if(n.type==="code")return b.jsx("pre",{children:b.jsx("code",{children:n.value})},o);if(n.type==="quote")return b.jsx("blockquote",{children:mo(n.children)},o);if(n.type==="rule")return b.jsx("hr",{},o);const c=n.ordered?"ol":"ul";return b.jsx(c,{children:n.items.map((u,h)=>b.jsx("li",{children:mo(u)},`${o}-${h}`))},o)})}function PR({Mark:a,assistantName:e,message:n,onQuote:r,onRegenerate:o,regenerateLabel:c}){const[u,h]=Re.useState(!1),[m,p]=Re.useState(null),[_,v]=Re.useState(null),g=Re.useRef(null);Re.useEffect(()=>{function T(){if(n.role!=="weaver"||!r||!g.current)return;const w=window.getSelection(),M=w?w.toString().trim():"",y=g.current,F=w&&w.rangeCount>0&&y.contains(w.getRangeAt(0).commonAncestorContainer);if(M.length>=2&&F){const z=w.getRangeAt(0).getBoundingClientRect();p(M),v({top:z.bottom+6,left:z.left})}else p(null),v(null)}return document.addEventListener("selectionchange",T),()=>document.removeEventListener("selectionchange",T)},[n.role,r]);async function S(){await navigator.clipboard?.writeText(n.content),h(!0),window.setTimeout(()=>h(!1),1400)}return n.role==="owner"?b.jsx("article",{className:"message message-owner",children:b.jsxs("div",{className:"owner-message-content",children:[b.jsx("div",{className:"owner-bubble",children:n.content}),b.jsx("div",{className:"message-actions",children:b.jsxs("button",{"aria-label":"Copy owner message",onClick:S,type:"button",children:[b.jsx(cy,{}),b.jsx("span",{children:u?"Copied":"Copy"})]})})]})}):b.jsxs("article",{className:`message message-weaver ${n.streaming?"message-streaming":""}`,children:[b.jsx("div",{className:"weaver-avatar",children:b.jsx(a,{compact:!0})}),b.jsxs("div",{className:"weaver-message-content",children:[b.jsx("div",{className:"message-role",children:e}),b.jsx("div",{className:"markdown-body",ref:g,children:n.content?b.jsx(OR,{children:n.content}):b.jsx(CR,{})}),!n.streaming&&n.content&&b.jsxs("div",{className:"message-actions",children:[b.jsxs("button",{"aria-label":"Copy reply",onClick:S,type:"button",children:[b.jsx(cy,{}),b.jsx("span",{children:u?"Copied":"Copy"})]}),o&&b.jsxs("button",{"aria-label":"Regenerate reply",onClick:o,type:"button",children:[b.jsx(cR,{}),b.jsx("span",{children:c})]})]})]}),m&&_&&b.jsxs("button",{"aria-label":"Ask about the selected passage",className:"quote-action",onClick:()=>{r?.(m),p(null),v(null)},style:{top:_.top,left:_.left},type:"button",children:[b.jsx(pR,{}),b.jsx("span",{children:"ask about this"})]})]})}function IR({chooseLabel:a,createLabel:e,message:n,onChooseConversation:r,onCreateConversation:o,onRetry:c,retryLabel:u,title:h}){return b.jsxs("section",{"aria-label":"Turn recovery",className:"recovery-panel",children:[b.jsx("span",{className:"recovery-knot"}),b.jsxs("div",{children:[b.jsx("strong",{children:h}),b.jsx("p",{children:n}),b.jsxs("div",{className:"recovery-actions",children:[c&&u&&b.jsx("button",{className:"recovery-retry",onClick:c,type:"button",children:u}),b.jsx("button",{onClick:o,type:"button",children:e}),b.jsx("button",{onClick:r,type:"button",children:a})]})]})]})}function FR(a){const e=Re.useRef(null);return e.current===null&&(e.current=a()),e.current}function zR(a,e){a.indexOf(e)===-1&&a.push(e)}function BR(a,e){const n=a.indexOf(e);n>-1&&a.splice(n,1)}const u1=(a,e,n)=>n>e?e:n<a?a:n;let VR=()=>{};const f1={},HR=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a),GR=a=>/^0[^.\s]+$/u.test(a);function kR(a){let e;return()=>(e===void 0&&(e=a()),e)}const d1=a=>a;class h1{constructor(){this.subscriptions=[]}add(e){return zR(this.subscriptions,e),()=>BR(this.subscriptions,e)}notify(e,n,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,n,r);else for(let c=0;c<o;c++){const u=this.subscriptions[c];u&&u(e,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const p1=a=>a*1e3,$h=a=>a/1e3,XR=(a,e)=>e?a*(1e3/e):0,WR=a=>Array.isArray(a)&&typeof a[0]=="number",bu=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function jR(a){let e=new Set,n=new Set,r=!1,o=!1;const c=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function h(p){c.has(p)&&(m.schedule(p),a()),p(u)}const m={schedule:(p,_=!1,v=!1)=>{const S=v&&r?e:n;return _&&c.add(p),S.add(p),p},cancel:p=>{n.delete(p),c.delete(p)},process:p=>{if(u=p,r){o=!0;return}r=!0;const _=e;e=n,n=_,e.forEach(h),e.clear(),r=!1,o&&(o=!1,m.process(p))}};return m}const qR=40;function m1(a,e){let n=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},c=()=>n=!0,u=bu.reduce((z,D)=>(z[D]=jR(c),z),{}),{setup:h,read:m,resolveKeyframes:p,preUpdate:_,update:v,preRender:g,render:S,postRender:T}=u,w=()=>{const z=f1.useManualTiming,D=z?o.timestamp:performance.now();n=!1,z||(o.delta=r?1e3/60:Math.max(Math.min(D-o.timestamp,qR),1)),o.timestamp=D,o.isProcessing=!0,h.process(o),m.process(o),p.process(o),_.process(o),v.process(o),g.process(o),S.process(o),T.process(o),o.isProcessing=!1,n&&e&&(r=!1,a(w))},M=()=>{n=!0,r=!0,o.isProcessing||a(w)};return{schedule:bu.reduce((z,D)=>{const B=u[D];return z[D]=(L,N=!1,A=!1)=>(n||M(),B.schedule(L,N,A)),z},{}),cancel:z=>{for(let D=0;D<bu.length;D++)u[bu[D]].cancel(z)},state:o,steps:u}}const{schedule:jl,cancel:hy,state:py}=m1(typeof requestAnimationFrame<"u"?requestAnimationFrame:d1,!0);let nf;function YR(){nf=void 0}const Gl={now:()=>(nf===void 0&&Gl.set(py.isProcessing||f1.useManualTiming?py.timestamp:performance.now()),nf),set:a=>{nf=a,queueMicrotask(YR)}},Co={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},ql={...Co,transform:a=>u1(0,1,a)},Mu={...Co,default:1},kl=a=>Math.round(a*1e5)/1e5,xg=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function KR(a){return a==null}const ZR=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,yg=(a,e)=>n=>!!(typeof n=="string"&&ZR.test(n)&&n.startsWith(a)||e&&!KR(n)&&Object.prototype.hasOwnProperty.call(n,e)),g1=(a,e,n)=>r=>{if(typeof r!="string")return r;const[o,c,u,h]=r.match(xg);return{[a]:parseFloat(o),[e]:parseFloat(c),[n]:parseFloat(u),alpha:h!==void 0?parseFloat(h):1}},QR=a=>u1(0,255,a),Jh={...Co,transform:a=>Math.round(QR(a))},Pl={test:yg("rgb","red"),parse:g1("red","green","blue"),transform:({red:a,green:e,blue:n,alpha:r=1})=>"rgba("+Jh.transform(a)+", "+Jh.transform(e)+", "+Jh.transform(n)+", "+kl(ql.transform(r))+")"};function $R(a){let e="",n="",r="",o="";return a.length>5?(e=a.substring(1,3),n=a.substring(3,5),r=a.substring(5,7),o=a.substring(7,9)):(e=a.substring(1,2),n=a.substring(2,3),r=a.substring(3,4),o=a.substring(4,5),e+=e,n+=n,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const my={test:yg("#"),parse:$R,transform:Pl.transform},Jl=a=>({test:e=>typeof e=="string"&&e.endsWith(a)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${a}`}),Ua=Jl("deg"),_o=Jl("%"),$e=Jl("px"),JR=Jl("vh"),eC=Jl("vw"),gy={..._o,parse:a=>_o.parse(a)/100,transform:a=>_o.transform(a*100)},Eu={test:yg("hsl","hue"),parse:g1("hue","saturation","lightness"),transform:({hue:a,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(a)+", "+_o.transform(kl(e))+", "+_o.transform(kl(n))+", "+kl(ql.transform(r))+")"},Nn={test:a=>Pl.test(a)||my.test(a)||Eu.test(a),parse:a=>Pl.test(a)?Pl.parse(a):Eu.test(a)?Eu.parse(a):my.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?Pl.transform(a):Eu.transform(a),getAnimatableNone:a=>{const e=Nn.parse(a);return e.alpha=0,Nn.transform(e)}},tC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function nC(a){return isNaN(a)&&typeof a=="string"&&(a.match(xg)?.length||0)+(a.match(tC)?.length||0)>0}const v1="number",_1="color",iC="var",aC="var(",vy="${}",rC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Sg(a){const e=a.toString(),n=[],r={color:[],number:[],var:[]},o=[];let c=0;const h=e.replace(rC,m=>(Nn.test(m)?(r.color.push(c),o.push(_1),n.push(Nn.parse(m))):m.startsWith(aC)?(r.var.push(c),o.push(iC),n.push(m)):(r.number.push(c),o.push(v1),n.push(parseFloat(m))),++c,vy)).split(vy);return{values:n,split:h,indexes:r,types:o}}function sC(a){return Sg(a).values}function x1({split:a,types:e}){const n=a.length;return r=>{let o="";for(let c=0;c<n;c++)if(o+=a[c],r[c]!==void 0){const u=e[c];u===v1?o+=kl(r[c]):u===_1?o+=Nn.transform(r[c]):o+=r[c]}return o}}function oC(a){return x1(Sg(a))}const lC=a=>typeof a=="number"?0:Nn.test(a)?Nn.getAnimatableNone(a):a,cC=(a,e)=>typeof a=="number"?e?.trim().endsWith("/")?a:0:lC(a);function uC(a){const e=Sg(a);return x1(e)(e.values.map((r,o)=>cC(r,e.split[o])))}const us={test:nC,parse:sC,createTransformer:oC,getAnimatableNone:uC},fC=(a,e,n=10)=>{let r="";const o=Math.max(Math.round(e/n),2);for(let c=0;c<o;c++)r+=Math.round(a(c/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},dC=a=>a!==null;function hC(a,{repeat:e,repeatType:n="loop"},r,o=1){const c=a.filter(dC),h=o<0||e&&n!=="loop"&&e%2===1?0:c.length-1;return!h||r===void 0?c[h]:r}class pC{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}function mC(a){for(let e=1;e<a.length;e++)a[e]??(a[e]=a[e-1])}const os=a=>a*180/Math.PI,im=a=>{const e=os(Math.atan2(a[1],a[0]));return am(e)},gC={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:im,rotateZ:im,skewX:a=>os(Math.atan(a[1])),skewY:a=>os(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},am=a=>(a=a%360,a<0&&(a+=360),a),_y=im,xy=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),yy=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),vC={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:xy,scaleY:yy,scale:a=>(xy(a)+yy(a))/2,rotateX:a=>am(os(Math.atan2(a[6],a[5]))),rotateY:a=>am(os(Math.atan2(-a[2],a[0]))),rotateZ:_y,rotate:_y,skewX:a=>os(Math.atan(a[4])),skewY:a=>os(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function Sy(a){return a.includes("scale")?1:0}function rm(a,e){if(!a||a==="none")return Sy(e);const n=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(n)r=vC,o=n;else{const h=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=gC,o=h}if(!o)return Sy(e);const c=r[e],u=o[1].split(",").map(_C);return typeof c=="function"?c(u):u[c]}const LI=(a,e)=>{const{transform:n="none"}=getComputedStyle(a);return rm(n,e)};function _C(a){return parseFloat(a.trim())}const y1=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],xC=new Set([...y1,"pathRotation"]),UI=a=>a===Co||a===$e,yC=new Set(["x","y","z"]),SC=y1.filter(a=>!yC.has(a));function bC(a){const e=[];return SC.forEach(n=>{const r=a.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e}const pf={width:({x:a},{paddingLeft:e="0",paddingRight:n="0",boxSizing:r})=>{const o=a.max-a.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(n)},height:({y:a},{paddingTop:e="0",paddingBottom:n="0",boxSizing:r})=>{const o=a.max-a.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(n)},top:(a,{top:e})=>parseFloat(e),left:(a,{left:e})=>parseFloat(e),bottom:({y:a},{top:e})=>parseFloat(e)+(a.max-a.min),right:({x:a},{left:e})=>parseFloat(e)+(a.max-a.min),x:(a,{transform:e})=>rm(e,"x"),y:(a,{transform:e})=>rm(e,"y")};pf.translateX=pf.x;pf.translateY=pf.y;const fs=new Set;let sm=!1,om=!1,lm=!1;function S1(){if(om){const a=Array.from(fs).filter(r=>r.needsMeasurement),e=new Set(a.map(r=>r.element)),n=new Map;e.forEach(r=>{const o=bC(r);o.length&&(n.set(r,o),r.render())}),a.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=n.get(r);o&&o.forEach(([c,u])=>{r.getValue(c)?.set(u)})}),a.forEach(r=>r.measureEndState()),a.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}om=!1,sm=!1,fs.forEach(a=>a.complete(lm)),fs.clear()}function b1(){fs.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(om=!0)})}function OI(){lm=!0,b1(),S1(),lm=!1}class MC{constructor(e,n,r,o,c,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=r,this.motionValue=o,this.element=c,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(fs.add(this),sm||(sm=!0,jl.read(b1),jl.resolveKeyframes(S1))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:r,motionValue:o}=this;if(e[0]===null){const c=o?.get(),u=e[e.length-1];if(c!==void 0)e[0]=c;else if(r&&n){const h=r.readValue(n,u);h!=null&&(e[0]=h)}e[0]===void 0&&(e[0]=u),o&&c===void 0&&o.set(e[0])}mC(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),fs.delete(this)}cancel(){this.state==="scheduled"&&(fs.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const EC=a=>a.startsWith("--");function TC(a,e,n){EC(e)?a.style.setProperty(e,n):a.style[e]=n}const AC={};function M1(a,e){const n=kR(a);return()=>AC[e]??n()}const wC=M1(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),E1=M1(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Il=([a,e,n,r])=>`cubic-bezier(${a}, ${e}, ${n}, ${r})`,by={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Il([0,.65,.55,1]),circOut:Il([.55,0,1,.45]),backIn:Il([.31,.01,.66,-.59]),backOut:Il([.33,1.53,.69,.99])};function T1(a,e){if(a)return typeof a=="function"?E1()?fC(a,e):"ease-out":WR(a)?Il(a):Array.isArray(a)?a.map(n=>T1(n,e)||by.easeOut):by[a]}function RC(a,e,n,{delay:r=0,duration:o=300,repeat:c=0,repeatType:u="loop",ease:h="easeOut",times:m}={},p=void 0){const _={[e]:n};m&&(_.offset=m);const v=T1(h,o);Array.isArray(v)&&(_.easing=v);const g={delay:r,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:c+1,direction:u==="reverse"?"alternate":"normal"};return p&&(g.pseudoElement=p),a.animate(_,g)}function CC(a){return typeof a=="function"&&"applyToOptions"in a}function DC({type:a,...e}){return CC(a)&&E1()?a.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class NC extends pC{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:r,keyframes:o,pseudoElement:c,allowFlatten:u=!1,finalKeyframe:h,onComplete:m}=e;this.isPseudoElement=!!c,this.allowFlatten=u,this.options=e,VR(typeof e.type!="string");const p=DC(e);this.animation=RC(n,r,o,p,c),p.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const _=hC(o,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(_),TC(n,r,_),this.animation.cancel()}m?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return $h(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+$h(e)}get time(){return $h(Number(this.animation.currentTime)||0)}set time(e){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=p1(e),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:n,rangeEnd:r,observe:o}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&wC()?(this.animation.timeline=e,n&&(this.animation.rangeStart=n),r&&(this.animation.rangeEnd=r),d1):o(this)}}const LC=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),My=30,UC=a=>!isNaN(parseFloat(a));class OC{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{const o=Gl.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=Gl.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=UC(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new h1);const r=this.events[e].add(n);return e==="change"?()=>{r(),jl.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Gl.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>My)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,My);return XR(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function cm(a,e){return new OC(a,e)}function PC(a,e){if(a?.inherit&&e){const{inherit:n,...r}=a;return{...e,...r}}return a}function Ey(a){const e=[{},{}];return a?.values.forEach((n,r)=>{e[0][r]=n.get(),e[1][r]=n.getVelocity()}),e}function IC(a,e,n,r){if(typeof e=="function"){const[o,c]=Ey(r);e=e(n!==void 0?n:a.custom,o,c)}if(typeof e=="string"&&(e=a.variants&&a.variants[e]),typeof e=="function"){const[o,c]=Ey(r);e=e(n!==void 0?n:a.custom,o,c)}return e}const go=a=>!!(a&&a.getVelocity),FC={test:a=>a==="auto",parse:a=>a},A1=a=>e=>e.test(a),w1=[Co,$e,_o,Ua,eC,JR,FC],PI=a=>w1.find(A1(a)),zC=new Set(["brightness","contrast","saturate","opacity"]);function BC(a){const[e,n]=a.slice(0,-1).split("(");if(e==="drop-shadow")return a;const[r]=n.match(xg)||[];if(!r)return a;const o=n.replace(r,"");let c=zC.has(e)?1:0;return r!==n&&(c*=100),e+"("+c+o+")"}const VC=/\b([a-z-]*)\(.*?\)/gu,um={...us,getAnimatableNone:a=>{const e=a.match(VC);return e?e.map(BC).join(" "):a}},fm={...us,getAnimatableNone:a=>{const e=us.parse(a);return us.createTransformer(a)(e.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},Ty={...Co,transform:Math.round},HC={rotate:Ua,pathRotation:Ua,rotateX:Ua,rotateY:Ua,rotateZ:Ua,scale:Mu,scaleX:Mu,scaleY:Mu,scaleZ:Mu,skew:Ua,skewX:Ua,skewY:Ua,distance:$e,translateX:$e,translateY:$e,translateZ:$e,x:$e,y:$e,z:$e,perspective:$e,transformPerspective:$e,opacity:ql,originX:gy,originY:gy,originZ:$e},GC={borderWidth:$e,borderTopWidth:$e,borderRightWidth:$e,borderBottomWidth:$e,borderLeftWidth:$e,borderRadius:$e,borderTopLeftRadius:$e,borderTopRightRadius:$e,borderBottomRightRadius:$e,borderBottomLeftRadius:$e,width:$e,maxWidth:$e,height:$e,maxHeight:$e,top:$e,right:$e,bottom:$e,left:$e,inset:$e,insetBlock:$e,insetBlockStart:$e,insetBlockEnd:$e,insetInline:$e,insetInlineStart:$e,insetInlineEnd:$e,padding:$e,paddingTop:$e,paddingRight:$e,paddingBottom:$e,paddingLeft:$e,paddingBlock:$e,paddingBlockStart:$e,paddingBlockEnd:$e,paddingInline:$e,paddingInlineStart:$e,paddingInlineEnd:$e,margin:$e,marginTop:$e,marginRight:$e,marginBottom:$e,marginLeft:$e,marginBlock:$e,marginBlockStart:$e,marginBlockEnd:$e,marginInline:$e,marginInlineStart:$e,marginInlineEnd:$e,fontSize:$e,backgroundPositionX:$e,backgroundPositionY:$e,...HC,zIndex:Ty,fillOpacity:ql,strokeOpacity:ql,numOctaves:Ty},kC={...GC,color:Nn,backgroundColor:Nn,outlineColor:Nn,fill:Nn,stroke:Nn,borderColor:Nn,borderTopColor:Nn,borderRightColor:Nn,borderBottomColor:Nn,borderLeftColor:Nn,filter:um,WebkitFilter:um,mask:fm,WebkitMask:fm},XC=a=>kC[a],WC=new Set([um,fm]);function jC(a,e){let n=XC(a);return WC.has(n)||(n=us),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const{schedule:qC}=m1(queueMicrotask,!1),YC=[...w1,Nn,us],KC=a=>YC.find(A1(a)),Ay=()=>({min:0,max:0}),ZC=()=>({x:Ay(),y:Ay()}),QC=new WeakMap;function $C(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function JC(a){return typeof a=="string"||Array.isArray(a)}const eD=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],tD=["initial",...eD];function R1(a){return $C(a.animate)||tD.some(e=>JC(a[e]))}function nD(a){return!!(R1(a)||a.variants)}function iD(a,e,n){for(const r in e){const o=e[r],c=n[r];if(go(o))a.addValue(r,o);else if(go(c))a.addValue(r,cm(o,{owner:a}));else if(c!==o)if(a.hasValue(r)){const u=a.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=a.getStaticValue(r);a.addValue(r,cm(u!==void 0?u:o,{owner:a}))}}for(const r in n)e[r]===void 0&&a.removeValue(r);return e}const dm={current:null},C1={current:!1},aD=typeof window<"u";function rD(){if(C1.current=!0,!!aD)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),e=()=>dm.current=a.matches;a.addEventListener("change",e),e()}else dm.current=!1}const wy=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let mf={};function D1(a){mf=a}function sD(){return mf}class II{scrapeMotionValuesFromProps(e,n,r){return{}}constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:o,skipAnimations:c,blockInitialAnimation:u,visualState:h},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=MC,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=Gl.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,jl.render(this.render,!1,!0))};const{latestValues:p,renderState:_}=h;this.latestValues=p,this.baseTarget={...p},this.initialValues=n.initial?{...p}:{},this.renderState=_,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=c,this.options=m,this.blockInitialAnimation=!!u,this.isControllingVariants=R1(n),this.isVariantNode=nD(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...g}=this.scrapeMotionValuesFromProps(n,{},this);for(const S in g){const T=g[S];p[S]!==void 0&&go(T)&&T.set(p[S])}}mount(e){if(this.hasBeenMounted)for(const n in this.initialValues)this.values.get(n)?.jump(this.initialValues[n]),this.latestValues[n]=this.initialValues[n];this.current=e,QC.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(C1.current||rD(),this.shouldReduceMotion=dm.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),hy(this.notifyUpdate),hy(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&LC.has(e)&&this.current instanceof HTMLElement){const{factory:u,keyframes:h,times:m,ease:p,duration:_}=n.accelerate,v=new NC({element:this.current,name:e,keyframes:h,times:m,ease:p,duration:p1(_)}),g=u(v);this.valueSubscriptions.set(e,()=>{g(),v.cancel()});return}const r=xC.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=n.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&jl.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let c;typeof window<"u"&&window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{o(),c&&c()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in mf){const n=mf[e];if(!n)continue;const{isEnabled:r,Feature:o}=n;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const c=this.features[e];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ZC()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<wy.length;r++){const o=wy[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const c="on"+o,u=e[c];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=iD(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const r=this.values.get(e);n!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=cm(n===null?void 0:n,{owner:this}),this.addValue(e,r)),r}readValue(e,n){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(HR(r)||GR(r))?r=parseFloat(r):!KC(r)&&us.test(n)&&(r=jC(e,n)),this.setBaseTarget(e,go(r)?r.get():r)),go(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const c=IC(this.props,n,this.presenceContext?.custom);c&&(r=c[e])}if(n&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!go(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new h1),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){qC.render(this.render)}}const Ry=Re.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"}),oD=Re.createContext({strict:!1}),Cy={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Dy=!1;function lD(){if(Dy)return;const a={};for(const e in Cy)a[e]={isEnabled:n=>Cy[e].some(r=>!!n[r])};D1(a),Dy=!0}function cD(){return lD(),sD()}function Ny(a){const e=cD();for(const n in a)e[n]={...e[n],...a[n]};D1(e)}function uD({children:a,features:e,strict:n=!1}){const[,r]=Re.useState(!ep(e)),o=Re.useRef(void 0);if(!ep(e)){const{renderer:c,...u}=e;o.current=c,Ny(u)}return Re.useEffect(()=>{ep(e)&&e().then(({renderer:c,...u})=>{Ny(u),o.current=c,r(!0)})},[]),b.jsx(oD.Provider,{value:{renderer:o.current,strict:n},children:a})}function ep(a){return typeof a=="function"}function fD({children:a,...e}){const n=Re.useContext(Ry);e={...n,...e},e.transition=PC(e.transition,n.transition),e.isStatic=FR(()=>e.isStatic);const r=Re.useMemo(()=>e,[JSON.stringify(e.transition),e.transformPagePoint,e.reducedMotion,e.skipAnimations,e.isValidProp]);return b.jsx(Ry.Provider,{value:r,children:a})}const dD=()=>WS(()=>import("./spellMotionFeatures-D_K1-2vF.js"),[]).then(a=>a.default);function hD({children:a}){return b.jsx(uD,{features:dD,strict:!0,children:b.jsx(fD,{reducedMotion:"user",children:a})})}const bg="185",pD=0,Ly=1,mD=2,af=1,gD=2,Fl=3,Rr=0,ii=1,Oa=2,Ia=0,xo=1,Uy=2,Oy=3,Py=4,vD=5,as=100,_D=101,xD=102,yD=103,SD=104,bD=200,MD=201,ED=202,TD=203,hm=204,pm=205,AD=206,wD=207,RD=208,CD=209,DD=210,ND=211,LD=212,UD=213,OD=214,mm=0,gm=1,vm=2,Eo=3,_m=4,xm=5,ym=6,Sm=7,N1=0,PD=1,ID=2,sa=0,L1=1,U1=2,O1=3,P1=4,I1=5,F1=6,z1=7,B1=300,ms=301,To=302,tp=303,np=304,Nf=306,bm=1e3,Pa=1001,Mm=1002,zn=1003,FD=1004,Tu=1005,Xn=1006,ip=1007,ls=1008,Li=1009,V1=1010,H1=1011,Yl=1012,Mg=1013,la=1014,aa=1015,Va=1016,Eg=1017,Tg=1018,Kl=1020,G1=35902,k1=35899,X1=1021,W1=1022,Xi=1023,Ha=1026,cs=1027,j1=1028,Ag=1029,gs=1030,wg=1031,Rg=1033,rf=33776,sf=33777,of=33778,lf=33779,Em=35840,Tm=35841,Am=35842,wm=35843,Rm=36196,Cm=37492,Dm=37496,Nm=37488,Lm=37489,gf=37490,Um=37491,Om=37808,Pm=37809,Im=37810,Fm=37811,zm=37812,Bm=37813,Vm=37814,Hm=37815,Gm=37816,km=37817,Xm=37818,Wm=37819,jm=37820,qm=37821,Ym=36492,Km=36494,Zm=36495,Qm=36283,$m=36284,vf=36285,Jm=36286,zD=3200,Iy=0,BD=1,Mr="",Di="srgb",_f="srgb-linear",xf="linear",jt="srgb",Js=7680,Fy=519,VD=512,HD=513,GD=514,Cg=515,kD=516,XD=517,Dg=518,WD=519,zy=35044,By="300 es",ra=2e3,yf=2001;function jD(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Sf(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function qD(){const a=Sf("canvas");return a.style.display="block",a}const Vy={};function Hy(...a){const e="THREE."+a.shift();console.log(e,...a)}function q1(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=a[1];n&&n.isStackTrace?a[0]+=" "+n.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function ct(...a){a=q1(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...a)}}function Ut(...a){a=q1(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...a)}}function yo(...a){const e=a.join(" ");e in Vy||(Vy[e]=!0,ct(...a))}function YD(a,e,n){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const KD={[mm]:gm,[vm]:ym,[_m]:Sm,[Eo]:xm,[gm]:mm,[ym]:vm,[Sm]:_m,[xm]:Eo};class _s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ap=Math.PI/180,eg=180/Math.PI;function ec(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Gn[a&255]+Gn[a>>8&255]+Gn[a>>16&255]+Gn[a>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[n&63|128]+Gn[n>>8&255]+"-"+Gn[n>>16&255]+Gn[n>>24&255]+Gn[r&255]+Gn[r>>8&255]+Gn[r>>16&255]+Gn[r>>24&255]).toLowerCase()}function Nt(a,e,n){return Math.max(e,Math.min(n,a))}function ZD(a,e){return(a%e+e)%e}function rp(a,e,n){return(1-n)*a+n*e}function Tl(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ni(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ug=class Ug{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Nt(this.x,e.x,n.x),this.y=Nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Nt(this.x,e,n),this.y=Nt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Nt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ug.prototype.isVector2=!0;let zt=Ug;class Do{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,h){let m=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3],g=c[u+0],S=c[u+1],T=c[u+2],w=c[u+3];if(v!==w||m!==g||p!==S||_!==T){let M=m*g+p*S+_*T+v*w;M<0&&(g=-g,S=-S,T=-T,w=-w,M=-M);let y=1-h;if(M<.9995){const F=Math.acos(M),z=Math.sin(F);y=Math.sin(y*F)/z,h=Math.sin(h*F)/z,m=m*y+g*h,p=p*y+S*h,_=_*y+T*h,v=v*y+w*h}else{m=m*y+g*h,p=p*y+S*h,_=_*y+T*h,v=v*y+w*h;const F=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=F,p*=F,_*=F,v*=F}}e[n]=m,e[n+1]=p,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,o,c,u){const h=r[o],m=r[o+1],p=r[o+2],_=r[o+3],v=c[u],g=c[u+1],S=c[u+2],T=c[u+3];return e[n]=h*T+_*v+m*S-p*g,e[n+1]=m*T+_*g+p*v-h*S,e[n+2]=p*T+_*S+h*g-m*v,e[n+3]=_*T-h*v-m*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,m=Math.sin,p=h(r/2),_=h(o/2),v=h(c/2),g=m(r/2),S=m(o/2),T=m(c/2);switch(u){case"XYZ":this._x=g*_*v+p*S*T,this._y=p*S*v-g*_*T,this._z=p*_*T+g*S*v,this._w=p*_*v-g*S*T;break;case"YXZ":this._x=g*_*v+p*S*T,this._y=p*S*v-g*_*T,this._z=p*_*T-g*S*v,this._w=p*_*v+g*S*T;break;case"ZXY":this._x=g*_*v-p*S*T,this._y=p*S*v+g*_*T,this._z=p*_*T+g*S*v,this._w=p*_*v-g*S*T;break;case"ZYX":this._x=g*_*v-p*S*T,this._y=p*S*v+g*_*T,this._z=p*_*T-g*S*v,this._w=p*_*v+g*S*T;break;case"YZX":this._x=g*_*v+p*S*T,this._y=p*S*v+g*_*T,this._z=p*_*T-g*S*v,this._w=p*_*v-g*S*T;break;case"XZY":this._x=g*_*v-p*S*T,this._y=p*S*v-g*_*T,this._z=p*_*T+g*S*v,this._w=p*_*v+g*S*T;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],h=n[5],m=n[9],p=n[2],_=n[6],v=n[10],g=r+h+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(u-o)*S}else if(r>h&&r>v){const S=2*Math.sqrt(1+r-h-v);this._w=(_-m)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(c+p)/S}else if(h>v){const S=2*Math.sqrt(1+h-r-v);this._w=(c-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+v-r-h);this._w=(u-o)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,h=n._x,m=n._y,p=n._z,_=n._w;return this._x=r*_+u*h+o*p-c*m,this._y=o*_+u*m+c*h-r*p,this._z=c*_+u*p+r*m-o*h,this._w=u*_-r*h-o*m-c*p,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,c=-c,u=-u,h=-h);let m=1-n;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,n=Math.sin(n*p)/_,this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Og=class Og{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Gy.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Gy.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,h=e.z,m=e.w,p=2*(u*o-h*r),_=2*(h*n-c*o),v=2*(c*r-u*n);return this.x=n+m*p+u*v-h*_,this.y=r+m*_+h*p-c*v,this.z=o+m*v+c*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Nt(this.x,e.x,n.x),this.y=Nt(this.y,e.y,n.y),this.z=Nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Nt(this.x,e,n),this.y=Nt(this.y,e,n),this.z=Nt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,h=n.y,m=n.z;return this.x=o*m-c*h,this.y=c*u-r*m,this.z=r*h-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return sp.copy(this).projectOnVector(e),this.sub(sp)}reflect(e){return this.sub(sp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Nt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Og.prototype.isVector3=!0;let oe=Og;const sp=new oe,Gy=new Do,Pg=class Pg{constructor(e,n,r,o,c,u,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,h,m,p)}set(e,n,r,o,c,u,h,m,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=h,_[3]=n,_[4]=c,_[5]=m,_[6]=r,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],h=r[3],m=r[6],p=r[1],_=r[4],v=r[7],g=r[2],S=r[5],T=r[8],w=o[0],M=o[3],y=o[6],F=o[1],z=o[4],D=o[7],B=o[2],L=o[5],N=o[8];return c[0]=u*w+h*F+m*B,c[3]=u*M+h*z+m*L,c[6]=u*y+h*D+m*N,c[1]=p*w+_*F+v*B,c[4]=p*M+_*z+v*L,c[7]=p*y+_*D+v*N,c[2]=g*w+S*F+T*B,c[5]=g*M+S*z+T*L,c[8]=g*y+S*D+T*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return n*u*_-n*h*p-r*c*_+r*h*m+o*c*p-o*u*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=_*u-h*p,g=h*m-_*c,S=p*c-u*m,T=n*v+r*g+o*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=v*w,e[1]=(o*p-_*r)*w,e[2]=(h*r-o*u)*w,e[3]=g*w,e[4]=(_*n-o*m)*w,e[5]=(o*c-h*n)*w,e[6]=S*w,e[7]=(r*m-p*n)*w,e[8]=(u*n-r*c)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*u+p*h)+u+e,-o*p,o*m,-o*(-p*u+m*h)+h+n,0,0,1),this}scale(e,n){return yo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(op.makeScale(e,n)),this}rotate(e){return yo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(op.makeRotation(-e)),this}translate(e,n){return yo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(op.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Pg.prototype.isMatrix3=!0;let pt=Pg;const op=new pt,ky=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xy=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QD(){const a={enabled:!0,workingColorSpace:_f,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===jt&&(o.r=Fa(o.r),o.g=Fa(o.g),o.b=Fa(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===jt&&(o.r=So(o.r),o.g=So(o.g),o.b=So(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Mr?xf:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return yo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return yo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[_f]:{primaries:e,whitePoint:r,transfer:xf,toXYZ:ky,fromXYZ:Xy,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Di},outputColorSpaceConfig:{drawingBufferColorSpace:Di}},[Di]:{primaries:e,whitePoint:r,transfer:jt,toXYZ:ky,fromXYZ:Xy,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Di}}}),a}const Dt=QD();function Fa(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function So(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let eo;class $D{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{eo===void 0&&(eo=Sf("canvas")),eo.width=e.width,eo.height=e.height;const o=eo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=eo}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Sf("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Fa(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Fa(n[r]/255)*255):n[r]=Fa(n[r]);return{data:n,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JD=0;class Ng{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JD++}),this.uuid=ec(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(lp(o[u].image)):c.push(lp(o[u]))}else c=lp(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function lp(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?$D.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let eN=0;const cp=new oe;class qn extends _s{constructor(e=qn.DEFAULT_IMAGE,n=qn.DEFAULT_MAPPING,r=Pa,o=Pa,c=Xn,u=ls,h=Xi,m=Li,p=qn.DEFAULT_ANISOTROPY,_=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eN++}),this.uuid=ec(),this.name="",this.source=new Ng(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cp).x}get height(){return this.source.getSize(cp).y}get depth(){return this.source.getSize(cp).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){ct(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ct(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==B1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bm:e.x=e.x-Math.floor(e.x);break;case Pa:e.x=e.x<0?0:1;break;case Mm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bm:e.y=e.y-Math.floor(e.y);break;case Pa:e.y=e.y<0?0:1;break;case Mm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=B1;qn.DEFAULT_ANISOTROPY=1;const Ig=class Ig{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const m=e.elements,p=m[0],_=m[4],v=m[8],g=m[1],S=m[5],T=m[9],w=m[2],M=m[6],y=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-w)<.01&&Math.abs(T-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+w)<.1&&Math.abs(T+M)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const z=(p+1)/2,D=(S+1)/2,B=(y+1)/2,L=(_+g)/4,N=(v+w)/4,A=(T+M)/4;return z>D&&z>B?z<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(z),o=L/r,c=N/r):D>B?D<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(D),r=L/o,c=A/o):B<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(B),r=N/c,o=A/c),this.set(r,o,c,n),this}let F=Math.sqrt((M-T)*(M-T)+(v-w)*(v-w)+(g-_)*(g-_));return Math.abs(F)<.001&&(F=1),this.x=(M-T)/F,this.y=(v-w)/F,this.z=(g-_)/F,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Nt(this.x,e.x,n.x),this.y=Nt(this.y,e.y,n.y),this.z=Nt(this.z,e.z,n.z),this.w=Nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Nt(this.x,e,n),this.y=Nt(this.y,e,n),this.z=Nt(this.z,e,n),this.w=Nt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ig.prototype.isVector4=!0;let dn=Ig;class tN extends _s{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new dn(0,0,e,n),this.scissorTest=!1,this.viewport=new dn(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},c=new qn(o),u=r.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Ng(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oa extends tN{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Y1 extends qn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=zn,this.minFilter=zn,this.wrapR=Pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nN extends qn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=zn,this.minFilter=zn,this.wrapR=Pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tf=class Tf{constructor(e,n,r,o,c,u,h,m,p,_,v,g,S,T,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,h,m,p,_,v,g,S,T,w,M)}set(e,n,r,o,c,u,h,m,p,_,v,g,S,T,w,M){const y=this.elements;return y[0]=e,y[4]=n,y[8]=r,y[12]=o,y[1]=c,y[5]=u,y[9]=h,y[13]=m,y[2]=p,y[6]=_,y[10]=v,y[14]=g,y[3]=S,y[7]=T,y[11]=w,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tf().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/to.setFromMatrixColumn(e,0).length(),c=1/to.setFromMatrixColumn(e,1).length(),u=1/to.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),h=Math.sin(r),m=Math.cos(o),p=Math.sin(o),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=u*_,S=u*v,T=h*_,w=h*v;n[0]=m*_,n[4]=-m*v,n[8]=p,n[1]=S+T*p,n[5]=g-w*p,n[9]=-h*m,n[2]=w-g*p,n[6]=T+S*p,n[10]=u*m}else if(e.order==="YXZ"){const g=m*_,S=m*v,T=p*_,w=p*v;n[0]=g+w*h,n[4]=T*h-S,n[8]=u*p,n[1]=u*v,n[5]=u*_,n[9]=-h,n[2]=S*h-T,n[6]=w+g*h,n[10]=u*m}else if(e.order==="ZXY"){const g=m*_,S=m*v,T=p*_,w=p*v;n[0]=g-w*h,n[4]=-u*v,n[8]=T+S*h,n[1]=S+T*h,n[5]=u*_,n[9]=w-g*h,n[2]=-u*p,n[6]=h,n[10]=u*m}else if(e.order==="ZYX"){const g=u*_,S=u*v,T=h*_,w=h*v;n[0]=m*_,n[4]=T*p-S,n[8]=g*p+w,n[1]=m*v,n[5]=w*p+g,n[9]=S*p-T,n[2]=-p,n[6]=h*m,n[10]=u*m}else if(e.order==="YZX"){const g=u*m,S=u*p,T=h*m,w=h*p;n[0]=m*_,n[4]=w-g*v,n[8]=T*v+S,n[1]=v,n[5]=u*_,n[9]=-h*_,n[2]=-p*_,n[6]=S*v+T,n[10]=g-w*v}else if(e.order==="XZY"){const g=u*m,S=u*p,T=h*m,w=h*p;n[0]=m*_,n[4]=-v,n[8]=p*_,n[1]=g*v+w,n[5]=u*_,n[9]=S*v-T,n[2]=T*v-S,n[6]=h*_,n[10]=w*v+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iN,e,aN)}lookAt(e,n,r){const o=this.elements;return gi.subVectors(e,n),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),vr.crossVectors(r,gi),vr.lengthSq()===0&&(Math.abs(r.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),vr.crossVectors(r,gi)),vr.normalize(),Au.crossVectors(gi,vr),o[0]=vr.x,o[4]=Au.x,o[8]=gi.x,o[1]=vr.y,o[5]=Au.y,o[9]=gi.y,o[2]=vr.z,o[6]=Au.z,o[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],h=r[4],m=r[8],p=r[12],_=r[1],v=r[5],g=r[9],S=r[13],T=r[2],w=r[6],M=r[10],y=r[14],F=r[3],z=r[7],D=r[11],B=r[15],L=o[0],N=o[4],A=o[8],I=o[12],k=o[1],G=o[5],Y=o[9],pe=o[13],me=o[2],J=o[6],U=o[10],H=o[14],te=o[3],re=o[7],be=o[11],O=o[15];return c[0]=u*L+h*k+m*me+p*te,c[4]=u*N+h*G+m*J+p*re,c[8]=u*A+h*Y+m*U+p*be,c[12]=u*I+h*pe+m*H+p*O,c[1]=_*L+v*k+g*me+S*te,c[5]=_*N+v*G+g*J+S*re,c[9]=_*A+v*Y+g*U+S*be,c[13]=_*I+v*pe+g*H+S*O,c[2]=T*L+w*k+M*me+y*te,c[6]=T*N+w*G+M*J+y*re,c[10]=T*A+w*Y+M*U+y*be,c[14]=T*I+w*pe+M*H+y*O,c[3]=F*L+z*k+D*me+B*te,c[7]=F*N+z*G+D*J+B*re,c[11]=F*A+z*Y+D*U+B*be,c[15]=F*I+z*pe+D*H+B*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],h=e[5],m=e[9],p=e[13],_=e[2],v=e[6],g=e[10],S=e[14],T=e[3],w=e[7],M=e[11],y=e[15],F=m*S-p*g,z=h*S-p*v,D=h*g-m*v,B=u*S-p*_,L=u*g-m*_,N=u*v-h*_;return n*(w*F-M*z+y*D)-r*(T*F-M*B+y*L)+o*(T*z-w*B+y*N)-c*(T*D-w*L+M*N)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[1],u=e[5],h=e[9],m=e[2],p=e[6],_=e[10];return n*(u*_-h*p)-r*(c*_-h*m)+o*(c*p-u*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=e[9],g=e[10],S=e[11],T=e[12],w=e[13],M=e[14],y=e[15],F=n*h-r*u,z=n*m-o*u,D=n*p-c*u,B=r*m-o*h,L=r*p-c*h,N=o*p-c*m,A=_*w-v*T,I=_*M-g*T,k=_*y-S*T,G=v*M-g*w,Y=v*y-S*w,pe=g*y-S*M,me=F*pe-z*Y+D*G+B*k-L*I+N*A;if(me===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/me;return e[0]=(h*pe-m*Y+p*G)*J,e[1]=(o*Y-r*pe-c*G)*J,e[2]=(w*N-M*L+y*B)*J,e[3]=(g*L-v*N-S*B)*J,e[4]=(m*k-u*pe-p*I)*J,e[5]=(n*pe-o*k+c*I)*J,e[6]=(M*D-T*N-y*z)*J,e[7]=(_*N-g*D+S*z)*J,e[8]=(u*Y-h*k+p*A)*J,e[9]=(r*k-n*Y-c*A)*J,e[10]=(T*L-w*D+y*F)*J,e[11]=(v*D-_*L-S*F)*J,e[12]=(h*I-u*G-m*A)*J,e[13]=(n*G-r*I+o*A)*J,e[14]=(w*z-T*B-M*F)*J,e[15]=(_*B-v*z+g*F)*J,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,h=e.y,m=e.z,p=c*u,_=c*h;return this.set(p*u+r,p*h-o*m,p*m+o*h,0,p*h+o*m,_*h+r,_*m-o*u,0,p*m-o*h,_*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,h=n._z,m=n._w,p=c+c,_=u+u,v=h+h,g=c*p,S=c*_,T=c*v,w=u*_,M=u*v,y=h*v,F=m*p,z=m*_,D=m*v,B=r.x,L=r.y,N=r.z;return o[0]=(1-(w+y))*B,o[1]=(S+D)*B,o[2]=(T-z)*B,o[3]=0,o[4]=(S-D)*L,o[5]=(1-(g+y))*L,o[6]=(M+F)*L,o[7]=0,o[8]=(T+z)*N,o[9]=(M-F)*N,o[10]=(1-(g+w))*N,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),n.identity(),this;let u=to.set(o[0],o[1],o[2]).length();const h=to.set(o[4],o[5],o[6]).length(),m=to.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Bi.copy(this);const p=1/u,_=1/h,v=1/m;return Bi.elements[0]*=p,Bi.elements[1]*=p,Bi.elements[2]*=p,Bi.elements[4]*=_,Bi.elements[5]*=_,Bi.elements[6]*=_,Bi.elements[8]*=v,Bi.elements[9]*=v,Bi.elements[10]*=v,n.setFromRotationMatrix(Bi),r.x=u,r.y=h,r.z=m,this}makePerspective(e,n,r,o,c,u,h=ra,m=!1){const p=this.elements,_=2*c/(n-e),v=2*c/(r-o),g=(n+e)/(n-e),S=(r+o)/(r-o);let T,w;if(m)T=c/(u-c),w=u*c/(u-c);else if(h===ra)T=-(u+c)/(u-c),w=-2*u*c/(u-c);else if(h===yf)T=-u/(u-c),w=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,c,u,h=ra,m=!1){const p=this.elements,_=2/(n-e),v=2/(r-o),g=-(n+e)/(n-e),S=-(r+o)/(r-o);let T,w;if(m)T=1/(u-c),w=u/(u-c);else if(h===ra)T=-2/(u-c),w=-(u+c)/(u-c);else if(h===yf)T=-1/(u-c),w=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};Tf.prototype.isMatrix4=!0;let hn=Tf;const to=new oe,Bi=new hn,iN=new oe(0,0,0),aN=new oe(1,1,1),vr=new oe,Au=new oe,gi=new oe,Wy=new hn,jy=new Do;class vs{constructor(e=0,n=0,r=0,o=vs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],m=o[1],p=o[5],_=o[9],v=o[2],g=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Nt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Nt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Wy.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wy,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return jy.setFromEuler(this),this.setFromQuaternion(jy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vs.DEFAULT_ORDER="XYZ";class K1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rN=0;const qy=new oe,no=new Do,Ra=new hn,wu=new oe,Al=new oe,sN=new oe,oN=new Do,Yy=new oe(1,0,0),Ky=new oe(0,1,0),Zy=new oe(0,0,1),Qy={type:"added"},lN={type:"removed"},io={type:"childadded",child:null},up={type:"childremoved",child:null};class Yn extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rN++}),this.uuid=ec(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yn.DEFAULT_UP.clone();const e=new oe,n=new vs,r=new Do,o=new oe(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new hn},normalMatrix:{value:new pt}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=Yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new K1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return no.setFromAxisAngle(e,n),this.quaternion.multiply(no),this}rotateOnWorldAxis(e,n){return no.setFromAxisAngle(e,n),this.quaternion.premultiply(no),this}rotateX(e){return this.rotateOnAxis(Yy,e)}rotateY(e){return this.rotateOnAxis(Ky,e)}rotateZ(e){return this.rotateOnAxis(Zy,e)}translateOnAxis(e,n){return qy.copy(e).applyQuaternion(this.quaternion),this.position.add(qy.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Yy,e)}translateY(e){return this.translateOnAxis(Ky,e)}translateZ(e){return this.translateOnAxis(Zy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ra.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?wu.copy(e):wu.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ra.lookAt(Al,wu,this.up):Ra.lookAt(wu,Al,this.up),this.quaternion.setFromRotationMatrix(Ra),o&&(Ra.extractRotation(o.matrixWorld),no.setFromRotationMatrix(Ra),this.quaternion.premultiply(no.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qy),io.child=e,this.dispatchEvent(io),io.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(lN),up.child=e,this.dispatchEvent(up),up.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ra.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ra.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ra),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qy),io.child=e,this.dispatchEvent(io),io.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,e,sN),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,oN,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*r-c[8]*o,c[13]+=r-c[1]*n-c[5]*r-c[9]*o,c[14]+=o-c[2]*n-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const c=this.children;for(let u=0,h=c.length;u<h;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(e.animations,m))}}if(n){const h=u(e.geometries),m=u(e.materials),p=u(e.textures),_=u(e.images),v=u(e.shapes),g=u(e.skeletons),S=u(e.animations),T=u(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=o,r;function u(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Yn.DEFAULT_UP=new oe(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ru extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cN={type:"move"};class fp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ru,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ru,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ru,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const w of e.hand.values()){const M=n.getJointPose(w,r),y=this._getHandJoint(p,w);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),S=.02,T=.005;p.inputState.pinching&&g>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(cN)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Ru;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const Z1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},Cu={h:0,s:0,l:0};function dp(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Rt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Dt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Dt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Dt.workingColorSpace){if(e=ZD(e,1),n=Nt(n,0,1),r=Nt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=dp(u,c,e+1/3),this.g=dp(u,c,e),this.b=dp(u,c,e-1/3)}return Dt.colorSpaceToWorking(this,o),this}setStyle(e,n=Di){function r(c){c!==void 0&&parseFloat(c)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ct("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Di){const r=Z1[e.toLowerCase()];return r!==void 0?this.setHex(r,n):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fa(e.r),this.g=Fa(e.g),this.b=Fa(e.b),this}copyLinearToSRGB(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Di){return Dt.workingToColorSpace(kn.copy(this),e),Math.round(Nt(kn.r*255,0,255))*65536+Math.round(Nt(kn.g*255,0,255))*256+Math.round(Nt(kn.b*255,0,255))}getHexString(e=Di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Dt.workingColorSpace){Dt.workingToColorSpace(kn.copy(this),n);const r=kn.r,o=kn.g,c=kn.b,u=Math.max(r,o,c),h=Math.min(r,o,c);let m,p;const _=(h+u)/2;if(h===u)m=0,p=0;else{const v=u-h;switch(p=_<=.5?v/(u+h):v/(2-u-h),u){case r:m=(o-c)/v+(o<c?6:0);break;case o:m=(c-r)/v+2;break;case c:m=(r-o)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,n=Dt.workingColorSpace){return Dt.workingToColorSpace(kn.copy(this),n),e.r=kn.r,e.g=kn.g,e.b=kn.b,e}getStyle(e=Di){Dt.workingToColorSpace(kn.copy(this),e);const n=kn.r,r=kn.g,o=kn.b;return e!==Di?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+n,_r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(_r),e.getHSL(Cu);const r=rp(_r.h,Cu.h,n),o=rp(_r.s,Cu.s,n),c=rp(_r.l,Cu.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new Rt;Rt.NAMES=Z1;class uN extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vs,this.environmentIntensity=1,this.environmentRotation=new vs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Vi=new oe,Ca=new oe,hp=new oe,Da=new oe,ao=new oe,ro=new oe,$y=new oe,pp=new oe,mp=new oe,gp=new oe,vp=new dn,_p=new dn,xp=new dn;class Gi{constructor(e=new oe,n=new oe,r=new oe){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Vi.subVectors(e,n),o.cross(Vi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){Vi.subVectors(o,n),Ca.subVectors(r,n),hp.subVectors(e,n);const u=Vi.dot(Vi),h=Vi.dot(Ca),m=Vi.dot(hp),p=Ca.dot(Ca),_=Ca.dot(hp),v=u*p-h*h;if(v===0)return c.set(0,0,0),null;const g=1/v,S=(p*m-h*_)*g,T=(u*_-h*m)*g;return c.set(1-S-T,T,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Da)===null?!1:Da.x>=0&&Da.y>=0&&Da.x+Da.y<=1}static getInterpolation(e,n,r,o,c,u,h,m){return this.getBarycoord(e,n,r,o,Da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Da.x),m.addScaledVector(u,Da.y),m.addScaledVector(h,Da.z),m)}static getInterpolatedAttribute(e,n,r,o,c,u){return vp.setScalar(0),_p.setScalar(0),xp.setScalar(0),vp.fromBufferAttribute(e,n),_p.fromBufferAttribute(e,r),xp.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(vp,c.x),u.addScaledVector(_p,c.y),u.addScaledVector(xp,c.z),u}static isFrontFacing(e,n,r,o){return Vi.subVectors(r,n),Ca.subVectors(e,n),Vi.cross(Ca).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vi.subVectors(this.c,this.b),Ca.subVectors(this.a,this.b),Vi.cross(Ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return Gi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return Gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,h;ao.subVectors(o,r),ro.subVectors(c,r),pp.subVectors(e,r);const m=ao.dot(pp),p=ro.dot(pp);if(m<=0&&p<=0)return n.copy(r);mp.subVectors(e,o);const _=ao.dot(mp),v=ro.dot(mp);if(_>=0&&v<=_)return n.copy(o);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return u=m/(m-_),n.copy(r).addScaledVector(ao,u);gp.subVectors(e,c);const S=ao.dot(gp),T=ro.dot(gp);if(T>=0&&S<=T)return n.copy(c);const w=S*p-m*T;if(w<=0&&p>=0&&T<=0)return h=p/(p-T),n.copy(r).addScaledVector(ro,h);const M=_*T-S*v;if(M<=0&&v-_>=0&&S-T>=0)return $y.subVectors(c,o),h=(v-_)/(v-_+(S-T)),n.copy(o).addScaledVector($y,h);const y=1/(M+w+g);return u=w*y,h=g*y,n.copy(r).addScaledVector(ao,u).addScaledVector(ro,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class tc{constructor(e=new oe(1/0,1/0,1/0),n=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Hi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Hi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Hi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Hi):Hi.fromBufferAttribute(c,u),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Du.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Du.copy(r.boundingBox)),Du.applyMatrix4(e.matrixWorld),this.union(Du)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wl),Nu.subVectors(this.max,wl),so.subVectors(e.a,wl),oo.subVectors(e.b,wl),lo.subVectors(e.c,wl),xr.subVectors(oo,so),yr.subVectors(lo,oo),Zr.subVectors(so,lo);let n=[0,-xr.z,xr.y,0,-yr.z,yr.y,0,-Zr.z,Zr.y,xr.z,0,-xr.x,yr.z,0,-yr.x,Zr.z,0,-Zr.x,-xr.y,xr.x,0,-yr.y,yr.x,0,-Zr.y,Zr.x,0];return!yp(n,so,oo,lo,Nu)||(n=[1,0,0,0,1,0,0,0,1],!yp(n,so,oo,lo,Nu))?!1:(Lu.crossVectors(xr,yr),n=[Lu.x,Lu.y,Lu.z],yp(n,so,oo,lo,Nu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Na),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Na=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],Hi=new oe,Du=new tc,so=new oe,oo=new oe,lo=new oe,xr=new oe,yr=new oe,Zr=new oe,wl=new oe,Nu=new oe,Lu=new oe,Qr=new oe;function yp(a,e,n,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){Qr.fromArray(a,c);const h=o.x*Math.abs(Qr.x)+o.y*Math.abs(Qr.y)+o.z*Math.abs(Qr.z),m=e.dot(Qr),p=n.dot(Qr),_=r.dot(Qr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const bn=new oe,Uu=new zt;let fN=0;class Mn extends _s{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fN++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=zy,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Uu.fromBufferAttribute(this,n),Uu.applyMatrix3(e),this.setXY(n,Uu.x,Uu.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)bn.fromBufferAttribute(this,n),bn.applyMatrix3(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)bn.fromBufferAttribute(this,n),bn.applyMatrix4(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)bn.fromBufferAttribute(this,n),bn.applyNormalMatrix(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)bn.fromBufferAttribute(this,n),bn.transformDirection(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Tl(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=ni(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Tl(n,this.array)),n}setX(e,n){return this.normalized&&(n=ni(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Tl(n,this.array)),n}setY(e,n){return this.normalized&&(n=ni(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Tl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ni(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Tl(n,this.array)),n}setW(e,n){return this.normalized&&(n=ni(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=ni(n,this.array),r=ni(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=ni(n,this.array),r=ni(r,this.array),o=ni(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=ni(n,this.array),r=ni(r,this.array),o=ni(o,this.array),c=ni(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zy&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Q1 extends Mn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class $1 extends Mn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Wi extends Mn{constructor(e,n,r){super(new Float32Array(e),n,r)}}const dN=new tc,Rl=new oe,Sp=new oe;class nc{constructor(e=new oe,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):dN.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rl.subVectors(e,this.center);const n=Rl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Rl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rl.copy(e.center).add(Sp)),this.expandByPoint(Rl.copy(e.center).sub(Sp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let hN=0;const Ci=new hn,bp=new Yn,co=new oe,vi=new tc,Cl=new tc,Dn=new oe;class ai extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hN++}),this.uuid=ec(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jD(e)?$1:Q1)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new pt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,n,r){return Ci.makeTranslation(e,n,r),this.applyMatrix4(Ci),this}scale(e,n,r){return Ci.makeScale(e,n,r),this.applyMatrix4(Ci),this}lookAt(e){return bp.lookAt(e),bp.updateMatrix(),this.applyMatrix4(bp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Wi(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];vi.setFromBufferAttribute(c),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const r=this.boundingSphere.center;if(vi.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];Cl.setFromBufferAttribute(h),this.morphTargetsRelative?(Dn.addVectors(vi.min,Cl.min),vi.expandByPoint(Dn),Dn.addVectors(vi.max,Cl.max),vi.expandByPoint(Dn)):(vi.expandByPoint(Cl.min),vi.expandByPoint(Cl.max))}vi.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Dn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Dn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)Dn.fromBufferAttribute(h,p),m&&(co.fromBufferAttribute(e,p),Dn.add(co)),o=Math.max(o,r.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Mn(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const h=[],m=[];for(let A=0;A<r.count;A++)h[A]=new oe,m[A]=new oe;const p=new oe,_=new oe,v=new oe,g=new zt,S=new zt,T=new zt,w=new oe,M=new oe;function y(A,I,k){p.fromBufferAttribute(r,A),_.fromBufferAttribute(r,I),v.fromBufferAttribute(r,k),g.fromBufferAttribute(c,A),S.fromBufferAttribute(c,I),T.fromBufferAttribute(c,k),_.sub(p),v.sub(p),S.sub(g),T.sub(g);const G=1/(S.x*T.y-T.x*S.y);isFinite(G)&&(w.copy(_).multiplyScalar(T.y).addScaledVector(v,-S.y).multiplyScalar(G),M.copy(v).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(G),h[A].add(w),h[I].add(w),h[k].add(w),m[A].add(M),m[I].add(M),m[k].add(M))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let A=0,I=F.length;A<I;++A){const k=F[A],G=k.start,Y=k.count;for(let pe=G,me=G+Y;pe<me;pe+=3)y(e.getX(pe+0),e.getX(pe+1),e.getX(pe+2))}const z=new oe,D=new oe,B=new oe,L=new oe;function N(A){B.fromBufferAttribute(o,A),L.copy(B);const I=h[A];z.copy(I),z.sub(B.multiplyScalar(B.dot(I))).normalize(),D.crossVectors(L,I);const G=D.dot(m[A])<0?-1:1;u.setXYZW(A,z.x,z.y,z.z,G)}for(let A=0,I=F.length;A<I;++A){const k=F[A],G=k.start,Y=k.count;for(let pe=G,me=G+Y;pe<me;pe+=3)N(e.getX(pe+0)),N(e.getX(pe+1)),N(e.getX(pe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new Mn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const o=new oe,c=new oe,u=new oe,h=new oe,m=new oe,p=new oe,_=new oe,v=new oe;if(e)for(let g=0,S=e.count;g<S;g+=3){const T=e.getX(g+0),w=e.getX(g+1),M=e.getX(g+2);o.fromBufferAttribute(n,T),c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),_.subVectors(u,c),v.subVectors(o,c),_.cross(v),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,M),h.add(_),m.add(_),p.add(_),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,S=n.count;g<S;g+=3)o.fromBufferAttribute(n,g+0),c.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),_.subVectors(u,c),v.subVectors(o,c),_.cross(v),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Dn.fromBufferAttribute(e,n),Dn.normalize(),e.setXYZ(n,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,v=h.normalized,g=new p.constructor(m.length*_);let S=0,T=0;for(let w=0,M=m.length;w<M;w++){h.isInterleavedBufferAttribute?S=m[w]*h.data.stride+h.offset:S=m[w]*_;for(let y=0;y<_;y++)g[T++]=p[S++]}return new Mn(g,_,v)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ai,r=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=e(m,r);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,v=p.length;_<v;_++){const g=p[_],S=e(g,r);m.push(S)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const p=u[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const S=p[v];_.push(S.toJSON(e.data))}_.length>0&&(o[m]=_,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(n))}const c=e.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,S=v.length;g<S;g++)_.push(v[g].clone(n));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let pN=0;class No extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pN++}),this.uuid=ec(),this.name="",this.type="Material",this.blending=xo,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hm,this.blendDst=pm,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){ct(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ct(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(r.blending=this.blending),this.side!==Rr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==hm&&(r.blendSrc=this.blendSrc),this.blendDst!==pm&&(r.blendDst=this.blendDst),this.blendEquation!==as&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Eo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fy&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new zt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const La=new oe,Mp=new oe,Ou=new oe,Sr=new oe,Ep=new oe,Pu=new oe,Tp=new oe;class Lg{constructor(e=new oe,n=new oe(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,La)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=La.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(La.copy(this.origin).addScaledVector(this.direction,n),La.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Mp.copy(e).add(n).multiplyScalar(.5),Ou.copy(n).sub(e).normalize(),Sr.copy(this.origin).sub(Mp);const c=e.distanceTo(n)*.5,u=-this.direction.dot(Ou),h=Sr.dot(this.direction),m=-Sr.dot(Ou),p=Sr.lengthSq(),_=Math.abs(1-u*u);let v,g,S,T;if(_>0)if(v=u*m-h,g=u*h-m,T=c*_,v>=0)if(g>=-T)if(g<=T){const w=1/_;v*=w,g*=w,S=v*(v+u*g+2*h)+g*(u*v+g+2*m)+p}else g=c,v=Math.max(0,-(u*g+h)),S=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(u*g+h)),S=-v*v+g*(g+2*m)+p;else g<=-T?(v=Math.max(0,-(-u*c+h)),g=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p):g<=T?(v=0,g=Math.min(Math.max(-c,-m),c),S=g*(g+2*m)+p):(v=Math.max(0,-(u*c+h)),g=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p);else g=u>0?-c:c,v=Math.max(0,-(u*g+h)),S=-v*v+g*(g+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Mp).addScaledVector(Ou,g),S}intersectSphere(e,n){La.subVectors(e.center,this.origin);const r=La.dot(this.direction),o=La.dot(La)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=r-u,m=r+u;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,h,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),_>=0?(c=(e.min.y-g.y)*_,u=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,u=(e.min.y-g.y)*_),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),v>=0?(h=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(h=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),r>m||h>o)||((h>r||r!==r)&&(r=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,La)!==null}intersectTriangle(e,n,r,o,c){Ep.subVectors(n,e),Pu.subVectors(r,e),Tp.crossVectors(Ep,Pu);let u=this.direction.dot(Tp),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Sr.subVectors(this.origin,e);const m=h*this.direction.dot(Pu.crossVectors(Sr,Pu));if(m<0)return null;const p=h*this.direction.dot(Ep.cross(Sr));if(p<0||m+p>u)return null;const _=-h*Sr.dot(Tp);return _<0?null:this.at(_/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class J1 extends No{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vs,this.combine=N1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jy=new hn,$r=new Lg,Iu=new nc,eS=new oe,Fu=new oe,zu=new oe,Bu=new oe,Ap=new oe,Vu=new oe,tS=new oe,Hu=new oe;class Ga extends Yn{constructor(e=new ai,n=new J1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){Vu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],v=c[m];_!==0&&(Ap.fromBufferAttribute(v,e),u?Vu.addScaledVector(Ap,_):Vu.addScaledVector(Ap.sub(n),_))}n.add(Vu)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Iu.copy(r.boundingSphere),Iu.applyMatrix4(c),$r.copy(e.ray).recast(e.near),!(Iu.containsPoint($r.origin)===!1&&($r.intersectSphere(Iu,eS)===null||$r.origin.distanceToSquared(eS)>(e.far-e.near)**2))&&(Jy.copy(c).invert(),$r.copy(e.ray).applyMatrix4(Jy),!(r.boundingBox!==null&&$r.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,$r)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(u))for(let T=0,w=g.length;T<w;T++){const M=g[T],y=u[M.materialIndex],F=Math.max(M.start,S.start),z=Math.min(h.count,Math.min(M.start+M.count,S.start+S.count));for(let D=F,B=z;D<B;D+=3){const L=h.getX(D),N=h.getX(D+1),A=h.getX(D+2);o=Gu(this,y,e,r,p,_,v,L,N,A),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let M=T,y=w;M<y;M+=3){const F=h.getX(M),z=h.getX(M+1),D=h.getX(M+2);o=Gu(this,u,e,r,p,_,v,F,z,D),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let T=0,w=g.length;T<w;T++){const M=g[T],y=u[M.materialIndex],F=Math.max(M.start,S.start),z=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let D=F,B=z;D<B;D+=3){const L=D,N=D+1,A=D+2;o=Gu(this,y,e,r,p,_,v,L,N,A),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),w=Math.min(m.count,S.start+S.count);for(let M=T,y=w;M<y;M+=3){const F=M,z=M+1,D=M+2;o=Gu(this,u,e,r,p,_,v,F,z,D),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function mN(a,e,n,r,o,c,u,h){let m;if(e.side===ii?m=r.intersectTriangle(u,c,o,!0,h):m=r.intersectTriangle(o,c,u,e.side===Rr,h),m===null)return null;Hu.copy(h),Hu.applyMatrix4(a.matrixWorld);const p=n.ray.origin.distanceTo(Hu);return p<n.near||p>n.far?null:{distance:p,point:Hu.clone(),object:a}}function Gu(a,e,n,r,o,c,u,h,m,p){a.getVertexPosition(h,Fu),a.getVertexPosition(m,zu),a.getVertexPosition(p,Bu);const _=mN(a,e,n,r,Fu,zu,Bu,tS);if(_){const v=new oe;Gi.getBarycoord(tS,Fu,zu,Bu,v),o&&(_.uv=Gi.getInterpolatedAttribute(o,h,m,p,v,new zt)),c&&(_.uv1=Gi.getInterpolatedAttribute(c,h,m,p,v,new zt)),u&&(_.normal=Gi.getInterpolatedAttribute(u,h,m,p,v,new oe),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new oe,materialIndex:0};Gi.getNormal(Fu,zu,Bu,g.normal),_.face=g,_.barycoord=v}return _}class gN extends qn{constructor(e=null,n=1,r=1,o,c,u,h,m,p=zn,_=zn,v,g){super(null,u,h,m,p,_,o,c,v,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wp=new oe,vN=new oe,_N=new pt;class ns{constructor(e=new oe(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=wp.subVectors(r,n).cross(vN.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(wp),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||_N.getNormalMatrix(e),o=this.coplanarPoint(wp).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jr=new nc,xN=new zt(.5,.5),ku=new oe;class eM{constructor(e=new ns,n=new ns,r=new ns,o=new ns,c=new ns,u=new ns){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(r),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ra,r=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],S=c[7],T=c[8],w=c[9],M=c[10],y=c[11],F=c[12],z=c[13],D=c[14],B=c[15];if(o[0].setComponents(p-u,S-_,y-T,B-F).normalize(),o[1].setComponents(p+u,S+_,y+T,B+F).normalize(),o[2].setComponents(p+h,S+v,y+w,B+z).normalize(),o[3].setComponents(p-h,S-v,y-w,B-z).normalize(),r)o[4].setComponents(m,g,M,D).normalize(),o[5].setComponents(p-m,S-g,y-M,B-D).normalize();else if(o[4].setComponents(p-m,S-g,y-M,B-D).normalize(),n===ra)o[5].setComponents(p+m,S+g,y+M,B+D).normalize();else if(n===yf)o[5].setComponents(m,g,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jr)}intersectsSprite(e){Jr.center.set(0,0,0);const n=xN.distanceTo(e.center);return Jr.radius=.7071067811865476+n,Jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(ku.x=o.normal.x>0?e.max.x:e.min.x,ku.y=o.normal.y>0?e.max.y:e.min.y,ku.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(ku)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yN extends No{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bf=new oe,Mf=new oe,nS=new hn,Dl=new Lg,Xu=new nc,Rp=new oe,iS=new oe;class SN extends Yn{constructor(e=new ai,n=new yN){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,c=n.count;o<c;o++)bf.fromBufferAttribute(n,o-1),Mf.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=bf.distanceTo(Mf);e.setAttribute("lineDistance",new Wi(r,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Xu.copy(r.boundingSphere),Xu.applyMatrix4(o),Xu.radius+=c,e.ray.intersectsSphere(Xu)===!1)return;nS.copy(o).invert(),Dl.copy(e.ray).applyMatrix4(nS);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,_=r.index,g=r.attributes.position;if(_!==null){const S=Math.max(0,u.start),T=Math.min(_.count,u.start+u.count);for(let w=S,M=T-1;w<M;w+=p){const y=_.getX(w),F=_.getX(w+1),z=Wu(this,e,Dl,m,y,F,w);z&&n.push(z)}if(this.isLineLoop){const w=_.getX(T-1),M=_.getX(S),y=Wu(this,e,Dl,m,w,M,T-1);y&&n.push(y)}}else{const S=Math.max(0,u.start),T=Math.min(g.count,u.start+u.count);for(let w=S,M=T-1;w<M;w+=p){const y=Wu(this,e,Dl,m,w,w+1,w);y&&n.push(y)}if(this.isLineLoop){const w=Wu(this,e,Dl,m,T-1,S,T-1);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Wu(a,e,n,r,o,c,u){const h=a.geometry.attributes.position;if(bf.fromBufferAttribute(h,o),Mf.fromBufferAttribute(h,c),n.distanceSqToSegment(bf,Mf,Rp,iS)>r)return;Rp.applyMatrix4(a.matrixWorld);const p=e.ray.origin.distanceTo(Rp);if(!(p<e.near||p>e.far))return{distance:p,point:iS.clone().applyMatrix4(a.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:a}}const aS=new oe,rS=new oe;class bN extends SN{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,c=n.count;o<c;o+=2)aS.fromBufferAttribute(n,o),rS.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+aS.distanceTo(rS);e.setAttribute("lineDistance",new Wi(r,1))}else ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class MN extends No{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sS=new hn,tg=new Lg,ju=new nc,qu=new oe;class oS extends Yn{constructor(e=new ai,n=new MN){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ju.copy(r.boundingSphere),ju.applyMatrix4(o),ju.radius+=c,e.ray.intersectsSphere(ju)===!1)return;sS.copy(o).invert(),tg.copy(e.ray).applyMatrix4(sS);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,v=r.attributes.position;if(p!==null){const g=Math.max(0,u.start),S=Math.min(p.count,u.start+u.count);for(let T=g,w=S;T<w;T++){const M=p.getX(T);qu.fromBufferAttribute(v,M),lS(qu,M,m,o,e,n,this)}}else{const g=Math.max(0,u.start),S=Math.min(v.count,u.start+u.count);for(let T=g,w=S;T<w;T++)qu.fromBufferAttribute(v,T),lS(qu,T,m,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function lS(a,e,n,r,o,c,u){const h=tg.distanceSqToPoint(a);if(h<n){const m=new oe;tg.closestPointToPoint(a,m),m.applyMatrix4(r);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class tM extends qn{constructor(e=[],n=ms,r,o,c,u,h,m,p,_){super(e,n,r,o,c,u,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ao extends qn{constructor(e,n,r=la,o,c,u,h=zn,m=zn,p,_=Ha,v=1){if(_!==Ha&&_!==cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:v};super(g,o,c,u,h,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ng(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class EN extends Ao{constructor(e,n=la,r=ms,o,c,u=zn,h=zn,m,p=Ha){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,n,r,o,c,u,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class nM extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ic extends ai{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],_=[],v=[];let g=0,S=0;T("z","y","x",-1,-1,r,n,e,u,c,0),T("z","y","x",1,-1,r,n,-e,u,c,1),T("x","z","y",1,1,e,r,n,o,u,2),T("x","z","y",1,-1,e,r,-n,o,u,3),T("x","y","z",1,-1,e,n,r,o,c,4),T("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new Wi(p,3)),this.setAttribute("normal",new Wi(_,3)),this.setAttribute("uv",new Wi(v,2));function T(w,M,y,F,z,D,B,L,N,A,I){const k=D/N,G=B/A,Y=D/2,pe=B/2,me=L/2,J=N+1,U=A+1;let H=0,te=0;const re=new oe;for(let be=0;be<U;be++){const O=be*G-pe;for(let K=0;K<J;K++){const ne=K*k-Y;re[w]=ne*F,re[M]=O*z,re[y]=me,p.push(re.x,re.y,re.z),re[w]=0,re[M]=0,re[y]=L>0?1:-1,_.push(re.x,re.y,re.z),v.push(K/N),v.push(1-be/A),H+=1}}for(let be=0;be<A;be++)for(let O=0;O<N;O++){const K=g+O+J*be,ne=g+O+J*(be+1),Me=g+(O+1)+J*(be+1),Q=g+(O+1)+J*be;m.push(K,ne,Q),m.push(ne,Me,Q),te+=6}h.addGroup(S,te,I),S+=te,g+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Lf extends ai{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,h=Math.floor(r),m=Math.floor(o),p=h+1,_=m+1,v=e/h,g=n/m,S=[],T=[],w=[],M=[];for(let y=0;y<_;y++){const F=y*g-u;for(let z=0;z<p;z++){const D=z*v-c;T.push(D,-F,0),w.push(0,0,1),M.push(z/h),M.push(1-y/m)}}for(let y=0;y<m;y++)for(let F=0;F<h;F++){const z=F+p*y,D=F+p*(y+1),B=F+1+p*(y+1),L=F+1+p*y;S.push(z,D,L),S.push(D,B,L)}this.setIndex(S),this.setAttribute("position",new Wi(T,3)),this.setAttribute("normal",new Wi(w,3)),this.setAttribute("uv",new Wi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lf(e.width,e.height,e.widthSegments,e.heightSegments)}}function wo(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];if(cS(o))o.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(cS(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();e[n][r]=c}else e[n][r]=o.slice();else e[n][r]=o}}return e}function jn(a){const e={};for(let n=0;n<a.length;n++){const r=wo(a[n]);for(const o in r)e[o]=r[o]}return e}function cS(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function TN(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function iM(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const AN={clone:wo,merge:jn};var wN=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RN=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends No{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wN,this.fragmentShader=RN,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wo(e.uniforms),this.uniformsGroups=TN(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new Rt().setHex(o.value);break;case"v2":this.uniforms[r].value=new zt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new oe().fromArray(o.value);break;case"v4":this.uniforms[r].value=new dn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new pt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new hn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class CN extends _i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class DN extends No{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zD,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NN extends No{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yu=new oe,Ku=new Do,Ji=new oe;class aM extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=ra,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yu,Ku,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yu,Ku,Ji.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(Yu,Ku,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yu,Ku,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const br=new oe,uS=new zt,fS=new zt;class Ni extends aM{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=eg*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ap*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eg*2*Math.atan(Math.tan(ap*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,n){return this.getViewBounds(e,uS,fS),n.subVectors(fS,uS)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ap*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*r/p,o*=u.width/m,r*=u.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class rM extends aM{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const uo=-90,fo=1;class LN extends Yn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ni(uo,fo,e,n);o.layers=this.layers,this.add(o);const c=new Ni(uo,fo,e,n);c.layers=this.layers,this.add(c);const u=new Ni(uo,fo,e,n);u.layers=this.layers,this.add(u);const h=new Ni(uo,fo,e,n);h.layers=this.layers,this.add(h);const m=new Ni(uo,fo,e,n);m.layers=this.layers,this.add(m);const p=new Ni(uo,fo,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,h,m]=n;for(const p of n)this.remove(p);if(e===ra)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===yf)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,p,_]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,1,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,2,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(r,3,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(r,4,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,_),e.setRenderTarget(v,g,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class UN extends Ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ON{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ct("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Fg=class Fg{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=r,c[3]=o,this}};Fg.prototype.isMatrix2=!0;let dS=Fg;function hS(a,e,n,r){const o=PN(r);switch(n){case X1:return a*e;case j1:return a*e/o.components*o.byteLength;case Ag:return a*e/o.components*o.byteLength;case gs:return a*e*2/o.components*o.byteLength;case wg:return a*e*2/o.components*o.byteLength;case W1:return a*e*3/o.components*o.byteLength;case Xi:return a*e*4/o.components*o.byteLength;case Rg:return a*e*4/o.components*o.byteLength;case rf:case sf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case of:case lf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Tm:case wm:return Math.max(a,16)*Math.max(e,8)/4;case Em:case Am:return Math.max(a,8)*Math.max(e,8)/2;case Rm:case Cm:case Nm:case Lm:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Dm:case gf:case Um:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Om:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Pm:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Im:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Fm:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case zm:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Bm:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Vm:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Hm:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Gm:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case km:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Xm:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Wm:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case jm:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case qm:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Ym:case Km:case Zm:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Qm:case $m:return Math.ceil(a/4)*Math.ceil(e/4)*8;case vf:case Jm:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function PN(a){switch(a){case Li:case V1:return{byteLength:1,components:1};case Yl:case H1:case Va:return{byteLength:2,components:1};case Eg:case Tg:return{byteLength:2,components:4};case la:case Mg:case aa:return{byteLength:4,components:1};case G1:case k1:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bg}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bg);function sM(){let a=null,e=!1,n=null,r=null;function o(c,u){n(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function IN(a){const e=new WeakMap;function n(h,m){const p=h.array,_=h.usage,v=p.byteLength,g=a.createBuffer();a.bindBuffer(m,g),a.bufferData(m,p,_),h.onUploadCallback();let S;if(p instanceof Float32Array)S=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=a.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=a.SHORT;else if(p instanceof Uint32Array)S=a.UNSIGNED_INT;else if(p instanceof Int32Array)S=a.INT;else if(p instanceof Int8Array)S=a.BYTE;else if(p instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const _=m.array,v=m.updateRanges;if(a.bindBuffer(p,h),v.length===0)a.bufferSubData(p,0,_);else{v.sort((S,T)=>S.start-T.start);let g=0;for(let S=1;S<v.length;S++){const T=v[g],w=v[S];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++g,v[g]=w)}v.length=g+1;for(let S=0,T=v.length;S<T;S++){const w=v[S];a.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(a.deleteBuffer(m.buffer),e.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:o,remove:c,update:u}}var FN=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zN=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,BN=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VN=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HN=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GN=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kN=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,XN=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WN=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,jN=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qN=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,YN=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KN=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ZN=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,QN=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$N=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,JN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,iL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,aL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,sL=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oL=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lL=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,cL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hL="gl_FragColor = linearToOutputTexel( gl_FragColor );",pL=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mL=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,gL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vL=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_L=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xL=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ML=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,EL=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,TL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wL=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RL=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,CL=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,DL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,NL=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UL=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OL=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,PL=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,IL=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,FL=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zL=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BL=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,VL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qL=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KL=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZL=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QL=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$L=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JL=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,eU=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tU=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nU=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rU=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sU=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,oU=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lU=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cU=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uU=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fU=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dU=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,hU=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pU=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mU=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gU=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vU=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_U=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xU=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,yU=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,SU=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bU=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,MU=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,EU=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,TU=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AU=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wU=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RU=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CU=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DU=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,NU=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,LU=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,UU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,IU=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FU=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zU=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VU=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kU=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,XU=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,WU=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jU=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,qU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KU=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZU=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QU=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$U=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JU=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e4=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t4=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,n4=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i4=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,a4=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,r4=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s4=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o4=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,l4=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f4=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,d4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h4=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p4=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m4=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,St={alphahash_fragment:FN,alphahash_pars_fragment:zN,alphamap_fragment:BN,alphamap_pars_fragment:VN,alphatest_fragment:HN,alphatest_pars_fragment:GN,aomap_fragment:kN,aomap_pars_fragment:XN,batching_pars_vertex:WN,batching_vertex:jN,begin_vertex:qN,beginnormal_vertex:YN,bsdfs:KN,iridescence_fragment:ZN,bumpmap_pars_fragment:QN,clipping_planes_fragment:$N,clipping_planes_pars_fragment:JN,clipping_planes_pars_vertex:eL,clipping_planes_vertex:tL,color_fragment:nL,color_pars_fragment:iL,color_pars_vertex:aL,color_vertex:rL,common:sL,cube_uv_reflection_fragment:oL,defaultnormal_vertex:lL,displacementmap_pars_vertex:cL,displacementmap_vertex:uL,emissivemap_fragment:fL,emissivemap_pars_fragment:dL,colorspace_fragment:hL,colorspace_pars_fragment:pL,envmap_fragment:mL,envmap_common_pars_fragment:gL,envmap_pars_fragment:vL,envmap_pars_vertex:_L,envmap_physical_pars_fragment:CL,envmap_vertex:xL,fog_vertex:yL,fog_pars_vertex:SL,fog_fragment:bL,fog_pars_fragment:ML,gradientmap_pars_fragment:EL,lightmap_pars_fragment:TL,lights_lambert_fragment:AL,lights_lambert_pars_fragment:wL,lights_pars_begin:RL,lights_toon_fragment:DL,lights_toon_pars_fragment:NL,lights_phong_fragment:LL,lights_phong_pars_fragment:UL,lights_physical_fragment:OL,lights_physical_pars_fragment:PL,lights_fragment_begin:IL,lights_fragment_maps:FL,lights_fragment_end:zL,lightprobes_pars_fragment:BL,logdepthbuf_fragment:VL,logdepthbuf_pars_fragment:HL,logdepthbuf_pars_vertex:GL,logdepthbuf_vertex:kL,map_fragment:XL,map_pars_fragment:WL,map_particle_fragment:jL,map_particle_pars_fragment:qL,metalnessmap_fragment:YL,metalnessmap_pars_fragment:KL,morphinstance_vertex:ZL,morphcolor_vertex:QL,morphnormal_vertex:$L,morphtarget_pars_vertex:JL,morphtarget_vertex:eU,normal_fragment_begin:tU,normal_fragment_maps:nU,normal_pars_fragment:iU,normal_pars_vertex:aU,normal_vertex:rU,normalmap_pars_fragment:sU,clearcoat_normal_fragment_begin:oU,clearcoat_normal_fragment_maps:lU,clearcoat_pars_fragment:cU,iridescence_pars_fragment:uU,opaque_fragment:fU,packing:dU,premultiplied_alpha_fragment:hU,project_vertex:pU,dithering_fragment:mU,dithering_pars_fragment:gU,roughnessmap_fragment:vU,roughnessmap_pars_fragment:_U,shadowmap_pars_fragment:xU,shadowmap_pars_vertex:yU,shadowmap_vertex:SU,shadowmask_pars_fragment:bU,skinbase_vertex:MU,skinning_pars_vertex:EU,skinning_vertex:TU,skinnormal_vertex:AU,specularmap_fragment:wU,specularmap_pars_fragment:RU,tonemapping_fragment:CU,tonemapping_pars_fragment:DU,transmission_fragment:NU,transmission_pars_fragment:LU,uv_pars_fragment:UU,uv_pars_vertex:OU,uv_vertex:PU,worldpos_vertex:IU,background_vert:FU,background_frag:zU,backgroundCube_vert:BU,backgroundCube_frag:VU,cube_vert:HU,cube_frag:GU,depth_vert:kU,depth_frag:XU,distance_vert:WU,distance_frag:jU,equirect_vert:qU,equirect_frag:YU,linedashed_vert:KU,linedashed_frag:ZU,meshbasic_vert:QU,meshbasic_frag:$U,meshlambert_vert:JU,meshlambert_frag:e4,meshmatcap_vert:t4,meshmatcap_frag:n4,meshnormal_vert:i4,meshnormal_frag:a4,meshphong_vert:r4,meshphong_frag:s4,meshphysical_vert:o4,meshphysical_frag:l4,meshtoon_vert:c4,meshtoon_frag:u4,points_vert:f4,points_frag:d4,shadow_vert:h4,shadow_frag:p4,sprite_vert:m4,sprite_frag:g4},Ve={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new oe},probesMax:{value:new oe},probesResolution:{value:new oe}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},na={basic:{uniforms:jn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:jn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:jn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:jn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:jn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Rt(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:jn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:jn([Ve.points,Ve.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:jn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:jn([Ve.common,Ve.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:jn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:jn([Ve.sprite,Ve.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:jn([Ve.common,Ve.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:jn([Ve.lights,Ve.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};na.physical={uniforms:jn([na.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const Zu={r:0,b:0,g:0},v4=new hn,oM=new pt;oM.set(-1,0,0,0,1,0,0,0,1);function _4(a,e,n,r,o,c){const u=new Rt(0);let h=o===!0?0:1,m,p,_=null,v=0,g=null;function S(F){let z=F.isScene===!0?F.background:null;if(z&&z.isTexture){const D=F.backgroundBlurriness>0;z=e.get(z,D)}return z}function T(F){let z=!1;const D=S(F);D===null?M(u,h):D&&D.isColor&&(M(D,1),z=!0);const B=a.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(a.autoClear||z)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function w(F,z){const D=S(z);D&&(D.isCubeTexture||D.mapping===Nf)?(p===void 0&&(p=new Ga(new ic(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:wo(na.backgroundCube.uniforms),vertexShader:na.backgroundCube.vertexShader,fragmentShader:na.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,L,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=D,p.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(v4.makeRotationFromEuler(z.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(oM),p.material.toneMapped=Dt.getTransfer(D.colorSpace)!==jt,(_!==D||v!==D.version||g!==a.toneMapping)&&(p.material.needsUpdate=!0,_=D,v=D.version,g=a.toneMapping),p.layers.enableAll(),F.unshift(p,p.geometry,p.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Ga(new Lf(2,2),new _i({name:"BackgroundMaterial",uniforms:wo(na.background.uniforms),vertexShader:na.background.vertexShader,fragmentShader:na.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=Dt.getTransfer(D.colorSpace)!==jt,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(_!==D||v!==D.version||g!==a.toneMapping)&&(m.material.needsUpdate=!0,_=D,v=D.version,g=a.toneMapping),m.layers.enableAll(),F.unshift(m,m.geometry,m.material,0,0,null))}function M(F,z){F.getRGB(Zu,iM(a)),n.buffers.color.setClear(Zu.r,Zu.g,Zu.b,z,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(F,z=1){u.set(F),h=z,M(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(F){h=F,M(u,h)},render:T,addToRenderList:w,dispose:y}}function x4(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=g(null);let c=o,u=!1;function h(G,Y,pe,me,J){let U=!1;const H=v(G,me,pe,Y);c!==H&&(c=H,p(c.object)),U=S(G,me,pe,J),U&&T(G,me,pe,J),J!==null&&e.update(J,a.ELEMENT_ARRAY_BUFFER),(U||u)&&(u=!1,D(G,Y,pe,me),J!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return a.createVertexArray()}function p(G){return a.bindVertexArray(G)}function _(G){return a.deleteVertexArray(G)}function v(G,Y,pe,me){const J=me.wireframe===!0;let U=r[Y.id];U===void 0&&(U={},r[Y.id]=U);const H=G.isInstancedMesh===!0?G.id:0;let te=U[H];te===void 0&&(te={},U[H]=te);let re=te[pe.id];re===void 0&&(re={},te[pe.id]=re);let be=re[J];return be===void 0&&(be=g(m()),re[J]=be),be}function g(G){const Y=[],pe=[],me=[];for(let J=0;J<n;J++)Y[J]=0,pe[J]=0,me[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:pe,attributeDivisors:me,object:G,attributes:{},index:null}}function S(G,Y,pe,me){const J=c.attributes,U=Y.attributes;let H=0;const te=pe.getAttributes();for(const re in te)if(te[re].location>=0){const O=J[re];let K=U[re];if(K===void 0&&(re==="instanceMatrix"&&G.instanceMatrix&&(K=G.instanceMatrix),re==="instanceColor"&&G.instanceColor&&(K=G.instanceColor)),O===void 0||O.attribute!==K||K&&O.data!==K.data)return!0;H++}return c.attributesNum!==H||c.index!==me}function T(G,Y,pe,me){const J={},U=Y.attributes;let H=0;const te=pe.getAttributes();for(const re in te)if(te[re].location>=0){let O=U[re];O===void 0&&(re==="instanceMatrix"&&G.instanceMatrix&&(O=G.instanceMatrix),re==="instanceColor"&&G.instanceColor&&(O=G.instanceColor));const K={};K.attribute=O,O&&O.data&&(K.data=O.data),J[re]=K,H++}c.attributes=J,c.attributesNum=H,c.index=me}function w(){const G=c.newAttributes;for(let Y=0,pe=G.length;Y<pe;Y++)G[Y]=0}function M(G){y(G,0)}function y(G,Y){const pe=c.newAttributes,me=c.enabledAttributes,J=c.attributeDivisors;pe[G]=1,me[G]===0&&(a.enableVertexAttribArray(G),me[G]=1),J[G]!==Y&&(a.vertexAttribDivisor(G,Y),J[G]=Y)}function F(){const G=c.newAttributes,Y=c.enabledAttributes;for(let pe=0,me=Y.length;pe<me;pe++)Y[pe]!==G[pe]&&(a.disableVertexAttribArray(pe),Y[pe]=0)}function z(G,Y,pe,me,J,U,H){H===!0?a.vertexAttribIPointer(G,Y,pe,J,U):a.vertexAttribPointer(G,Y,pe,me,J,U)}function D(G,Y,pe,me){w();const J=me.attributes,U=pe.getAttributes(),H=Y.defaultAttributeValues;for(const te in U){const re=U[te];if(re.location>=0){let be=J[te];if(be===void 0&&(te==="instanceMatrix"&&G.instanceMatrix&&(be=G.instanceMatrix),te==="instanceColor"&&G.instanceColor&&(be=G.instanceColor)),be!==void 0){const O=be.normalized,K=be.itemSize,ne=e.get(be);if(ne===void 0)continue;const Me=ne.buffer,Q=ne.type,W=ne.bytesPerElement,le=Q===a.INT||Q===a.UNSIGNED_INT||be.gpuType===Mg;if(be.isInterleavedBufferAttribute){const xe=be.data,Pe=xe.stride,nt=be.offset;if(xe.isInstancedInterleavedBuffer){for(let Ke=0;Ke<re.locationSize;Ke++)y(re.location+Ke,xe.meshPerAttribute);G.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ke=0;Ke<re.locationSize;Ke++)M(re.location+Ke);a.bindBuffer(a.ARRAY_BUFFER,Me);for(let Ke=0;Ke<re.locationSize;Ke++)z(re.location+Ke,K/re.locationSize,Q,O,Pe*W,(nt+K/re.locationSize*Ke)*W,le)}else{if(be.isInstancedBufferAttribute){for(let xe=0;xe<re.locationSize;xe++)y(re.location+xe,be.meshPerAttribute);G.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let xe=0;xe<re.locationSize;xe++)M(re.location+xe);a.bindBuffer(a.ARRAY_BUFFER,Me);for(let xe=0;xe<re.locationSize;xe++)z(re.location+xe,K/re.locationSize,Q,O,K*W,K/re.locationSize*xe*W,le)}}else if(H!==void 0){const O=H[te];if(O!==void 0)switch(O.length){case 2:a.vertexAttrib2fv(re.location,O);break;case 3:a.vertexAttrib3fv(re.location,O);break;case 4:a.vertexAttrib4fv(re.location,O);break;default:a.vertexAttrib1fv(re.location,O)}}}}F()}function B(){I();for(const G in r){const Y=r[G];for(const pe in Y){const me=Y[pe];for(const J in me){const U=me[J];for(const H in U)_(U[H].object),delete U[H];delete me[J]}}delete r[G]}}function L(G){if(r[G.id]===void 0)return;const Y=r[G.id];for(const pe in Y){const me=Y[pe];for(const J in me){const U=me[J];for(const H in U)_(U[H].object),delete U[H];delete me[J]}}delete r[G.id]}function N(G){for(const Y in r){const pe=r[Y];for(const me in pe){const J=pe[me];if(J[G.id]===void 0)continue;const U=J[G.id];for(const H in U)_(U[H].object),delete U[H];delete J[G.id]}}}function A(G){for(const Y in r){const pe=r[Y],me=G.isInstancedMesh===!0?G.id:0,J=pe[me];if(J!==void 0){for(const U in J){const H=J[U];for(const te in H)_(H[te].object),delete H[te];delete J[U]}delete pe[me],Object.keys(pe).length===0&&delete r[Y]}}}function I(){k(),u=!0,c!==o&&(c=o,p(c.object))}function k(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:I,resetDefaultState:k,dispose:B,releaseStatesOfGeometry:L,releaseStatesOfObject:A,releaseStatesOfProgram:N,initAttributes:w,enableAttribute:M,disableUnusedAttributes:F}}function y4(a,e,n){let r;function o(m){r=m}function c(m,p){a.drawArrays(r,m,p),n.update(p,r,1)}function u(m,p,_){_!==0&&(a.drawArraysInstanced(r,m,p,_),n.update(p,r,_))}function h(m,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,p,0,_);let g=0;for(let S=0;S<_;S++)g+=p[S];n.update(g,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function S4(a,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(N){return!(N!==Xi&&r.convert(N)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(N){const A=N===Va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Li&&r.convert(N)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==aa&&!A)}function m(N){if(N==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const _=m(p);_!==p&&(ct("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=a.getParameter(a.MAX_TEXTURE_SIZE),M=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),y=a.getParameter(a.MAX_VERTEX_ATTRIBS),F=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),z=a.getParameter(a.MAX_VARYING_VECTORS),D=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),B=a.getParameter(a.MAX_SAMPLES),L=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:F,maxVaryings:z,maxFragmentUniforms:D,maxSamples:B,samples:L}}function b4(a){const e=this;let n=null,r=0,o=!1,c=!1;const u=new ns,h=new pt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||r!==0||o;return o=g,r=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){n=_(v,g,0)},this.setState=function(v,g,S){const T=v.clippingPlanes,w=v.clipIntersection,M=v.clipShadows,y=a.get(v);if(!o||T===null||T.length===0||c&&!M)c?_(null):p();else{const F=c?0:r,z=F*4;let D=y.clippingState||null;m.value=D,D=_(T,g,z,S);for(let B=0;B!==z;++B)D[B]=n[B];y.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,g,S,T){const w=v!==null?v.length:0;let M=null;if(w!==0){if(M=m.value,T!==!0||M===null){const y=S+w*4,F=g.matrixWorldInverse;h.getNormalMatrix(F),(M===null||M.length<y)&&(M=new Float32Array(y));for(let z=0,D=S;z!==w;++z,D+=4)u.copy(v[z]).applyMatrix4(F,h),u.normal.toArray(M,D),M[D+3]=u.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}const Er=4,pS=[.125,.215,.35,.446,.526,.582],rs=20,M4=256,Nl=new rM,mS=new Rt;let Cp=null,Dp=0,Np=0,Lp=!1;const E4=new oe;class gS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:u=256,position:h=E4}=c;Cp=this._renderer.getRenderTarget(),Dp=this._renderer.getActiveCubeFace(),Np=this._renderer.getActiveMipmapLevel(),Lp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_S(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cp,Dp,Np),this._renderer.xr.enabled=Lp,e.scissorTest=!1,ho(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ms||e.mapping===To?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cp=this._renderer.getRenderTarget(),Dp=this._renderer.getActiveCubeFace(),Np=this._renderer.getActiveMipmapLevel(),Lp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Va,format:Xi,colorSpace:_f,depthBuffer:!1},o=vS(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vS(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=T4(c)),this._blurMaterial=w4(c,e,n),this._ggxMaterial=A4(c,e,n)}return o}_compileMaterial(e){const n=new Ga(new ai,e);this._renderer.compile(n,Nl)}_sceneToCubeUV(e,n,r,o,c){const m=new Ni(90,1,n,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(mS),v.toneMapping=sa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ga(new ic,new J1({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let y=!1;const F=e.background;F?F.isColor&&(M.color.copy(F),e.background=null,y=!0):(M.color.copy(mS),y=!0);for(let z=0;z<6;z++){const D=z%3;D===0?(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[z],c.y,c.z)):D===1?(m.up.set(0,0,p[z]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[z],c.z)):(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[z]));const B=this._cubeSize;ho(o,D*B,z>2?B:0,B,B),v.setRenderTarget(o),y&&v.render(w,m),v.render(e,m)}v.toneMapping=S,v.autoClear=g,e.background=F}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===ms||e.mapping===To;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=xS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_S());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;ho(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(u,Nl)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[r];h.material=u;const m=u.uniforms,p=r/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,S=v*g,{_lodMax:T}=this,w=this._sizeLods[r],M=3*w*(r>T-Er?r-T+Er:0),y=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=T-n,ho(c,M,y,3*w,2*w),o.setRenderTarget(c),o.render(h,Nl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-r,ho(e,M,y,3*w,2*w),o.setRenderTarget(e),o.render(h,Nl)}_blur(e,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,u,h){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[o];v.material=p;const g=p.uniforms,S=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*rs-1),w=c/T,M=isFinite(c)?1+Math.floor(_*w):rs;M>rs&&ct(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${rs}`);const y=[];let F=0;for(let N=0;N<rs;++N){const A=N/w,I=Math.exp(-A*A/2);y.push(I),N===0?F+=I:N<M&&(F+=2*I)}for(let N=0;N<y.length;N++)y[N]=y[N]/F;g.envMap.value=e.texture,g.samples.value=M,g.weights.value=y,g.latitudinal.value=u==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:z}=this;g.dTheta.value=T,g.mipInt.value=z-r;const D=this._sizeLods[o],B=3*D*(o>z-Er?o-z+Er:0),L=4*(this._cubeSize-D);ho(n,B,L,3*D,2*D),m.setRenderTarget(n),m.render(v,Nl)}}function T4(a){const e=[],n=[],r=[];let o=a;const c=a-Er+1+pS.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);e.push(h);let m=1/h;u>a-Er?m=pS[u-a+Er-1]:u===0&&(m=0),n.push(m);const p=1/(h-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,T=6,w=3,M=2,y=1,F=new Float32Array(w*T*S),z=new Float32Array(M*T*S),D=new Float32Array(y*T*S);for(let L=0;L<S;L++){const N=L%3*2/3-1,A=L>2?0:-1,I=[N,A,0,N+2/3,A,0,N+2/3,A+1,0,N,A,0,N+2/3,A+1,0,N,A+1,0];F.set(I,w*T*L),z.set(g,M*T*L);const k=[L,L,L,L,L,L];D.set(k,y*T*L)}const B=new ai;B.setAttribute("position",new Mn(F,w)),B.setAttribute("uv",new Mn(z,M)),B.setAttribute("faceIndex",new Mn(D,y)),r.push(new Ga(B,null)),o>Er&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function vS(a,e,n){const r=new oa(a,e,n);return r.texture.mapping=Nf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ho(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function A4(a,e,n){return new _i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:M4,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function w4(a,e,n){const r=new Float32Array(rs),o=new oe(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function _S(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function xS(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function Uf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class lM extends oa{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new tM(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new ic(5,5,5),c=new _i({name:"CubemapFromEquirect",uniforms:wo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ii,blending:Ia});c.uniforms.tEquirect.value=n;const u=new Ga(o,c),h=n.minFilter;return n.minFilter===ls&&(n.minFilter=Xn),new LN(1,10,this).update(e,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}function R4(a){let e=new WeakMap,n=new WeakMap,r=null;function o(g,S=!1){return g==null?null:S?u(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===tp||S===np)if(e.has(g)){const T=e.get(g).texture;return h(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const w=new lM(T.height);return w.fromEquirectangularTexture(a,g),e.set(g,w),g.addEventListener("dispose",p),h(w.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const S=g.mapping,T=S===tp||S===np,w=S===ms||S===To;if(T||w){let M=n.get(g);const y=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return r===null&&(r=new gS(a)),M=T?r.fromEquirectangular(g,M):r.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,n.set(g,M),M.texture;if(M!==void 0)return M.texture;{const F=g.image;return T&&F&&F.height>0||w&&F&&m(F)?(r===null&&(r=new gS(a)),M=T?r.fromEquirectangular(g):r.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,n.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function h(g,S){return S===tp?g.mapping=ms:S===np&&(g.mapping=To),g}function m(g){let S=0;const T=6;for(let w=0;w<T;w++)g[w]!==void 0&&S++;return S===T}function p(g){const S=g.target;S.removeEventListener("dispose",p);const T=e.get(S);T!==void 0&&(e.delete(S),T.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const T=n.get(S);T!==void 0&&(n.delete(S),T.dispose())}function v(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function C4(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&yo("WebGLRenderer: "+r+" extension not supported."),o}}}function D4(a,e,n,r){const o={},c=new WeakMap;function u(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",u),delete o[g.id];const S=c.get(g);S&&(e.remove(S),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function h(v,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,n.memory.geometries++),g}function m(v){const g=v.attributes;for(const S in g)e.update(g[S],a.ARRAY_BUFFER)}function p(v){const g=[],S=v.index,T=v.attributes.position;let w=0;if(T===void 0)return;if(S!==null){const F=S.array;w=S.version;for(let z=0,D=F.length;z<D;z+=3){const B=F[z+0],L=F[z+1],N=F[z+2];g.push(B,L,L,N,N,B)}}else{const F=T.array;w=T.version;for(let z=0,D=F.length/3-1;z<D;z+=3){const B=z+0,L=z+1,N=z+2;g.push(B,L,L,N,N,B)}}const M=new(T.count>=65535?$1:Q1)(g,1);M.version=w;const y=c.get(v);y&&e.remove(y),c.set(v,M)}function _(v){const g=c.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:_}}function N4(a,e,n){let r;function o(v){r=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function m(v,g){a.drawElements(r,g,c,v*u),n.update(g,r,1)}function p(v,g,S){S!==0&&(a.drawElementsInstanced(r,g,c,v*u,S),n.update(g,r,S))}function _(v,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,v,0,S);let w=0;for(let M=0;M<S;M++)w+=g[M];n.update(w,r,1)}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function L4(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,h){switch(n.calls++,u){case a.TRIANGLES:n.triangles+=h*(c/3);break;case a.LINES:n.lines+=h*(c/2);break;case a.LINE_STRIP:n.lines+=h*(c-1);break;case a.LINE_LOOP:n.lines+=h*c;break;case a.POINTS:n.points+=h*c;break;default:Ut("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function U4(a,e,n){const r=new WeakMap,o=new dn;function c(u,h,m){const p=u.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let g=r.get(h);if(g===void 0||g.count!==v){let I=function(){N.dispose(),r.delete(h),h.removeEventListener("dispose",I)};g!==void 0&&g.texture.dispose();const S=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],F=h.morphAttributes.color||[];let z=0;S===!0&&(z=1),T===!0&&(z=2),w===!0&&(z=3);let D=h.attributes.position.count*z,B=1;D>e.maxTextureSize&&(B=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const L=new Float32Array(D*B*4*v),N=new Y1(L,D,B,v);N.type=aa,N.needsUpdate=!0;const A=z*4;for(let k=0;k<v;k++){const G=M[k],Y=y[k],pe=F[k],me=D*B*4*k;for(let J=0;J<G.count;J++){const U=J*A;S===!0&&(o.fromBufferAttribute(G,J),L[me+U+0]=o.x,L[me+U+1]=o.y,L[me+U+2]=o.z,L[me+U+3]=0),T===!0&&(o.fromBufferAttribute(Y,J),L[me+U+4]=o.x,L[me+U+5]=o.y,L[me+U+6]=o.z,L[me+U+7]=0),w===!0&&(o.fromBufferAttribute(pe,J),L[me+U+8]=o.x,L[me+U+9]=o.y,L[me+U+10]=o.z,L[me+U+11]=pe.itemSize===4?o.w:1)}}g={count:v,texture:N,size:new zt(D,B)},r.set(h,g),h.addEventListener("dispose",I)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,n);else{let S=0;for(let w=0;w<p.length;w++)S+=p[w];const T=h.morphTargetsRelative?1:1-S;m.getUniforms().setValue(a,"morphTargetBaseInfluence",T),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",g.texture,n),m.getUniforms().setValue(a,"morphTargetsTextureSize",g.size)}return{update:c}}function O4(a,e,n,r,o){let c=new WeakMap;function u(p){const _=o.render.frame,v=p.geometry,g=e.get(p,v);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(n.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,a.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return g}function h(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),r.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:u,dispose:h}}const P4={[L1]:"LINEAR_TONE_MAPPING",[U1]:"REINHARD_TONE_MAPPING",[O1]:"CINEON_TONE_MAPPING",[P1]:"ACES_FILMIC_TONE_MAPPING",[F1]:"AGX_TONE_MAPPING",[z1]:"NEUTRAL_TONE_MAPPING",[I1]:"CUSTOM_TONE_MAPPING"};function I4(a,e,n,r,o,c){const u=new oa(e,n,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new Ao(e,n):void 0}),h=new oa(e,n,{type:Va,depthBuffer:!1,stencilBuffer:!1}),m=new ai;m.setAttribute("position",new Wi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Wi([0,2,0,0,2,0],2));const p=new CN({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new Ga(m,p),v=new rM(-1,1,1,-1,0,1);let g=null,S=null,T=!1,w,M=null,y=[],F=!1;this.setSize=function(z,D){u.setSize(z,D),h.setSize(z,D);for(let B=0;B<y.length;B++){const L=y[B];L.setSize&&L.setSize(z,D)}},this.setEffects=function(z){y=z,F=y.length>0&&y[0].isRenderPass===!0;const D=u.width,B=u.height;for(let L=0;L<y.length;L++){const N=y[L];N.setSize&&N.setSize(D,B)}},this.begin=function(z,D){if(T||z.toneMapping===sa&&y.length===0)return!1;if(M=D,D!==null){const B=D.width,L=D.height;(u.width!==B||u.height!==L)&&this.setSize(B,L)}return F===!1&&z.setRenderTarget(u),w=z.toneMapping,z.toneMapping=sa,!0},this.hasRenderPass=function(){return F},this.end=function(z,D){z.toneMapping=w,T=!0;let B=u,L=h;for(let N=0;N<y.length;N++){const A=y[N];if(A.enabled!==!1&&(A.render(z,L,B,D),A.needsSwap!==!1)){const I=B;B=L,L=I}}if(g!==z.outputColorSpace||S!==z.toneMapping){g=z.outputColorSpace,S=z.toneMapping,p.defines={},Dt.getTransfer(g)===jt&&(p.defines.SRGB_TRANSFER="");const N=P4[S];N&&(p.defines[N]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=B.texture,z.setRenderTarget(M),z.render(_,v),M=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),h.dispose(),m.dispose(),p.dispose()}}const cM=new qn,ng=new Ao(1,1),uM=new Y1,fM=new nN,dM=new tM,yS=[],SS=[],bS=new Float32Array(16),MS=new Float32Array(9),ES=new Float32Array(4);function Lo(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let c=yS[o];if(c===void 0&&(c=new Float32Array(o),yS[o]=c),e!==0){r.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=n,a[u].toArray(c,h)}return c}function An(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function wn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function Of(a,e){let n=SS[e];n===void 0&&(n=new Int32Array(e),SS[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function F4(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function z4(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;a.uniform2fv(this.addr,e),wn(n,e)}}function B4(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(An(n,e))return;a.uniform3fv(this.addr,e),wn(n,e)}}function V4(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;a.uniform4fv(this.addr,e),wn(n,e)}}function H4(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(An(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),wn(n,e)}else{if(An(n,r))return;ES.set(r),a.uniformMatrix2fv(this.addr,!1,ES),wn(n,r)}}function G4(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(An(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),wn(n,e)}else{if(An(n,r))return;MS.set(r),a.uniformMatrix3fv(this.addr,!1,MS),wn(n,r)}}function k4(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(An(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),wn(n,e)}else{if(An(n,r))return;bS.set(r),a.uniformMatrix4fv(this.addr,!1,bS),wn(n,r)}}function X4(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function W4(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;a.uniform2iv(this.addr,e),wn(n,e)}}function j4(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;a.uniform3iv(this.addr,e),wn(n,e)}}function q4(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;a.uniform4iv(this.addr,e),wn(n,e)}}function Y4(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function K4(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;a.uniform2uiv(this.addr,e),wn(n,e)}}function Z4(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;a.uniform3uiv(this.addr,e),wn(n,e)}}function Q4(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;a.uniform4uiv(this.addr,e),wn(n,e)}}function $4(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(ng.compareFunction=n.isReversedDepthBuffer()?Dg:Cg,c=ng):c=cM,n.setTexture2D(e||c,o)}function J4(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||fM,o)}function eO(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||dM,o)}function tO(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||uM,o)}function nO(a){switch(a){case 5126:return F4;case 35664:return z4;case 35665:return B4;case 35666:return V4;case 35674:return H4;case 35675:return G4;case 35676:return k4;case 5124:case 35670:return X4;case 35667:case 35671:return W4;case 35668:case 35672:return j4;case 35669:case 35673:return q4;case 5125:return Y4;case 36294:return K4;case 36295:return Z4;case 36296:return Q4;case 35678:case 36198:case 36298:case 36306:case 35682:return $4;case 35679:case 36299:case 36307:return J4;case 35680:case 36300:case 36308:case 36293:return eO;case 36289:case 36303:case 36311:case 36292:return tO}}function iO(a,e){a.uniform1fv(this.addr,e)}function aO(a,e){const n=Lo(e,this.size,2);a.uniform2fv(this.addr,n)}function rO(a,e){const n=Lo(e,this.size,3);a.uniform3fv(this.addr,n)}function sO(a,e){const n=Lo(e,this.size,4);a.uniform4fv(this.addr,n)}function oO(a,e){const n=Lo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function lO(a,e){const n=Lo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function cO(a,e){const n=Lo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function uO(a,e){a.uniform1iv(this.addr,e)}function fO(a,e){a.uniform2iv(this.addr,e)}function dO(a,e){a.uniform3iv(this.addr,e)}function hO(a,e){a.uniform4iv(this.addr,e)}function pO(a,e){a.uniform1uiv(this.addr,e)}function mO(a,e){a.uniform2uiv(this.addr,e)}function gO(a,e){a.uniform3uiv(this.addr,e)}function vO(a,e){a.uniform4uiv(this.addr,e)}function _O(a,e,n){const r=this.cache,o=e.length,c=Of(n,o);An(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=ng:u=cM;for(let h=0;h!==o;++h)n.setTexture2D(e[h]||u,c[h])}function xO(a,e,n){const r=this.cache,o=e.length,c=Of(n,o);An(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||fM,c[u])}function yO(a,e,n){const r=this.cache,o=e.length,c=Of(n,o);An(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||dM,c[u])}function SO(a,e,n){const r=this.cache,o=e.length,c=Of(n,o);An(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||uM,c[u])}function bO(a){switch(a){case 5126:return iO;case 35664:return aO;case 35665:return rO;case 35666:return sO;case 35674:return oO;case 35675:return lO;case 35676:return cO;case 5124:case 35670:return uO;case 35667:case 35671:return fO;case 35668:case 35672:return dO;case 35669:case 35673:return hO;case 5125:return pO;case 36294:return mO;case 36295:return gO;case 36296:return vO;case 35678:case 36198:case 36298:case 36306:case 35682:return _O;case 35679:case 36299:case 36307:return xO;case 35680:case 36300:case 36308:case 36293:return yO;case 36289:case 36303:case 36311:case 36292:return SO}}class MO{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=nO(n.type)}}class EO{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bO(n.type)}}class TO{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,n[h.id],r)}}}const Up=/(\w+)(\])?(\[|\.)?/g;function TS(a,e){a.seq.push(e),a.map[e.id]=e}function AO(a,e,n){const r=a.name,o=r.length;for(Up.lastIndex=0;;){const c=Up.exec(r),u=Up.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&u+2===o){TS(n,p===void 0?new MO(h,a,e):new EO(h,a,e));break}else{let v=n.map[h];v===void 0&&(v=new TO(h),TS(n,v)),n=v}}}class cf{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(n,u),m=e.getUniformLocation(n,h.name);AO(h,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function AS(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const wO=37297;let RO=0;function CO(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${n[u]}`)}return r.join(`
`)}const wS=new pt;function DO(a){Dt._getMatrix(wS,Dt.workingColorSpace,a);const e=`mat3( ${wS.elements.map(n=>n.toFixed(4))} )`;switch(Dt.getTransfer(a)){case xf:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function RS(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+CO(a.getShaderSource(e),h)}else return c}function NO(a,e){const n=DO(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const LO={[L1]:"Linear",[U1]:"Reinhard",[O1]:"Cineon",[P1]:"ACESFilmic",[F1]:"AgX",[z1]:"Neutral",[I1]:"Custom"};function UO(a,e){const n=LO[e];return n===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Qu=new oe;function OO(){Dt.getLuminanceCoefficients(Qu);const a=Qu.x.toFixed(4),e=Qu.y.toFixed(4),n=Qu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PO(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zl).join(`
`)}function IO(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function FO(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:h}}return n}function zl(a){return a!==""}function CS(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function DS(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zO=/^[ \t]*#include +<([\w\d./]+)>/gm;function ig(a){return a.replace(zO,VO)}const BO=new Map;function VO(a,e){let n=St[e];if(n===void 0){const r=BO.get(e);if(r!==void 0)n=St[r],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ig(n)}const HO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function NS(a){return a.replace(HO,GO)}function GO(a,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function LS(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const kO={[af]:"SHADOWMAP_TYPE_PCF",[Fl]:"SHADOWMAP_TYPE_VSM"};function XO(a){return kO[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const WO={[ms]:"ENVMAP_TYPE_CUBE",[To]:"ENVMAP_TYPE_CUBE",[Nf]:"ENVMAP_TYPE_CUBE_UV"};function jO(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":WO[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const qO={[To]:"ENVMAP_MODE_REFRACTION"};function YO(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":qO[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const KO={[N1]:"ENVMAP_BLENDING_MULTIPLY",[PD]:"ENVMAP_BLENDING_MIX",[ID]:"ENVMAP_BLENDING_ADD"};function ZO(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":KO[a.combine]||"ENVMAP_BLENDING_NONE"}function QO(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function $O(a,e,n,r){const o=a.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const m=XO(n),p=jO(n),_=YO(n),v=ZO(n),g=QO(n),S=PO(n),T=IO(c),w=o.createProgram();let M,y,F=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(zl).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(zl).join(`
`),y.length>0&&(y+=`
`)):(M=[LS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zl).join(`
`),y=[LS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sa?"#define TONE_MAPPING":"",n.toneMapping!==sa?St.tonemapping_pars_fragment:"",n.toneMapping!==sa?UO("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,NO("linearToOutputTexel",n.outputColorSpace),OO(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(zl).join(`
`)),u=ig(u),u=CS(u,n),u=DS(u,n),h=ig(h),h=CS(h,n),h=DS(h,n),u=NS(u),h=NS(h),n.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",n.glslVersion===By?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===By?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const z=F+M+u,D=F+y+h,B=AS(o,o.VERTEX_SHADER,z),L=AS(o,o.FRAGMENT_SHADER,D);o.attachShader(w,B),o.attachShader(w,L),n.index0AttributeName!==void 0?o.bindAttribLocation(w,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function N(G){if(a.debug.checkShaderErrors){const Y=o.getProgramInfoLog(w)||"",pe=o.getShaderInfoLog(B)||"",me=o.getShaderInfoLog(L)||"",J=Y.trim(),U=pe.trim(),H=me.trim();let te=!0,re=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(te=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,w,B,L);else{const be=RS(o,B,"vertex"),O=RS(o,L,"fragment");Ut("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+J+`
`+be+`
`+O)}else J!==""?ct("WebGLProgram: Program Info Log:",J):(U===""||H==="")&&(re=!1);re&&(G.diagnostics={runnable:te,programLog:J,vertexShader:{log:U,prefix:M},fragmentShader:{log:H,prefix:y}})}o.deleteShader(B),o.deleteShader(L),A=new cf(o,w),I=FO(o,w)}let A;this.getUniforms=function(){return A===void 0&&N(this),A};let I;this.getAttributes=function(){return I===void 0&&N(this),I};let k=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=o.getProgramParameter(w,wO)),k},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=RO++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=B,this.fragmentShader=L,this}let JO=0;class eP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new tP(e),n.set(e,r)),r}}class tP{constructor(e){this.id=JO++,this.code=e,this.usedTimes=0}}function nP(a){return a===gs||a===gf||a===vf}function iP(a,e,n,r,o,c){const u=new K1,h=new eP,m=new Set,p=[],_=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return m.add(A),A===0?"uv":`uv${A}`}function w(A,I,k,G,Y,pe){const me=G.fog,J=Y.geometry,U=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?G.environment:null,H=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,te=e.get(A.envMap||U,H),re=te&&te.mapping===Nf?te.image.height:null,be=S[A.type];A.precision!==null&&(g=r.getMaxPrecision(A.precision),g!==A.precision&&ct("WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const O=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,K=O!==void 0?O.length:0;let ne=0;J.morphAttributes.position!==void 0&&(ne=1),J.morphAttributes.normal!==void 0&&(ne=2),J.morphAttributes.color!==void 0&&(ne=3);let Me,Q,W,le;if(be){const We=na[be];Me=We.vertexShader,Q=We.fragmentShader}else{Me=A.vertexShader,Q=A.fragmentShader;const We=h.getVertexShaderStage(A),sn=h.getFragmentShaderStage(A);h.update(A,We,sn),W=We.id,le=sn.id}const xe=a.getRenderTarget(),Pe=a.state.buffers.depth.getReversed(),nt=Y.isInstancedMesh===!0,Ke=Y.isBatchedMesh===!0,Lt=!!A.map,dt=!!A.matcap,bt=!!te,yt=!!A.aoMap,gt=!!A.lightMap,Jt=!!A.bumpMap&&A.wireframe===!1,en=!!A.normalMap,Zt=!!A.displacementMap,tn=!!A.emissiveMap,Te=!!A.metalnessMap,Ze=!!A.roughnessMap,X=A.anisotropy>0,mt=A.clearcoat>0,ut=A.dispersion>0,P=A.iridescence>0,E=A.sheen>0,$=A.transmission>0,ie=X&&!!A.anisotropyMap,he=mt&&!!A.clearcoatMap,Ce=mt&&!!A.clearcoatNormalMap,Ue=mt&&!!A.clearcoatRoughnessMap,ve=P&&!!A.iridescenceMap,_e=P&&!!A.iridescenceThicknessMap,Le=E&&!!A.sheenColorMap,Ge=E&&!!A.sheenRoughnessMap,ze=!!A.specularMap,Ie=!!A.specularColorMap,tt=!!A.specularIntensityMap,it=$&&!!A.transmissionMap,ft=$&&!!A.thicknessMap,q=!!A.gradientMap,Ne=!!A.alphaMap,Se=A.alphaTest>0,Oe=!!A.alphaHash,He=!!A.extensions;let we=sa;A.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(we=a.toneMapping);const Qe={shaderID:be,shaderType:A.type,shaderName:A.name,vertexShader:Me,fragmentShader:Q,defines:A.defines,customVertexShaderID:W,customFragmentShaderID:le,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:Ke,batchingColor:Ke&&Y._colorsTexture!==null,instancing:nt,instancingColor:nt&&Y.instanceColor!==null,instancingMorph:nt&&Y.morphTexture!==null,outputColorSpace:xe===null?a.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Dt.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:Lt,matcap:dt,envMap:bt,envMapMode:bt&&te.mapping,envMapCubeUVHeight:re,aoMap:yt,lightMap:gt,bumpMap:Jt,normalMap:en,displacementMap:Zt,emissiveMap:tn,normalMapObjectSpace:en&&A.normalMapType===BD,normalMapTangentSpace:en&&A.normalMapType===Iy,packedNormalMap:en&&A.normalMapType===Iy&&nP(A.normalMap.format),metalnessMap:Te,roughnessMap:Ze,anisotropy:X,anisotropyMap:ie,clearcoat:mt,clearcoatMap:he,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ue,dispersion:ut,iridescence:P,iridescenceMap:ve,iridescenceThicknessMap:_e,sheen:E,sheenColorMap:Le,sheenRoughnessMap:Ge,specularMap:ze,specularColorMap:Ie,specularIntensityMap:tt,transmission:$,transmissionMap:it,thicknessMap:ft,gradientMap:q,opaque:A.transparent===!1&&A.blending===xo&&A.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Se,alphaHash:Oe,combine:A.combine,mapUv:Lt&&T(A.map.channel),aoMapUv:yt&&T(A.aoMap.channel),lightMapUv:gt&&T(A.lightMap.channel),bumpMapUv:Jt&&T(A.bumpMap.channel),normalMapUv:en&&T(A.normalMap.channel),displacementMapUv:Zt&&T(A.displacementMap.channel),emissiveMapUv:tn&&T(A.emissiveMap.channel),metalnessMapUv:Te&&T(A.metalnessMap.channel),roughnessMapUv:Ze&&T(A.roughnessMap.channel),anisotropyMapUv:ie&&T(A.anisotropyMap.channel),clearcoatMapUv:he&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&T(A.sheenRoughnessMap.channel),specularMapUv:ze&&T(A.specularMap.channel),specularColorMapUv:Ie&&T(A.specularColorMap.channel),specularIntensityMapUv:tt&&T(A.specularIntensityMap.channel),transmissionMapUv:it&&T(A.transmissionMap.channel),thicknessMapUv:ft&&T(A.thicknessMap.channel),alphaMapUv:Ne&&T(A.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(en||X),vertexNormals:!!J.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!J.attributes.uv&&(Lt||Ne),fog:!!me,useFog:A.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||J.attributes.normal===void 0&&en===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Pe,skinning:Y.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ne,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:pe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:a.shadowMap.enabled&&k.length>0,shadowMapType:a.shadowMap.type,toneMapping:we,decodeVideoTexture:Lt&&A.map.isVideoTexture===!0&&Dt.getTransfer(A.map.colorSpace)===jt,decodeVideoTextureEmissive:tn&&A.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(A.emissiveMap.colorSpace)===jt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Oa,flipSided:A.side===ii,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:He&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&A.extensions.multiDraw===!0||Ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Qe.vertexUv1s=m.has(1),Qe.vertexUv2s=m.has(2),Qe.vertexUv3s=m.has(3),m.clear(),Qe}function M(A){const I=[];if(A.shaderID?I.push(A.shaderID):(I.push(A.customVertexShaderID),I.push(A.customFragmentShaderID)),A.defines!==void 0)for(const k in A.defines)I.push(k),I.push(A.defines[k]);return A.isRawShaderMaterial===!1&&(y(I,A),F(I,A),I.push(a.outputColorSpace)),I.push(A.customProgramCacheKey),I.join()}function y(A,I){A.push(I.precision),A.push(I.outputColorSpace),A.push(I.envMapMode),A.push(I.envMapCubeUVHeight),A.push(I.mapUv),A.push(I.alphaMapUv),A.push(I.lightMapUv),A.push(I.aoMapUv),A.push(I.bumpMapUv),A.push(I.normalMapUv),A.push(I.displacementMapUv),A.push(I.emissiveMapUv),A.push(I.metalnessMapUv),A.push(I.roughnessMapUv),A.push(I.anisotropyMapUv),A.push(I.clearcoatMapUv),A.push(I.clearcoatNormalMapUv),A.push(I.clearcoatRoughnessMapUv),A.push(I.iridescenceMapUv),A.push(I.iridescenceThicknessMapUv),A.push(I.sheenColorMapUv),A.push(I.sheenRoughnessMapUv),A.push(I.specularMapUv),A.push(I.specularColorMapUv),A.push(I.specularIntensityMapUv),A.push(I.transmissionMapUv),A.push(I.thicknessMapUv),A.push(I.combine),A.push(I.fogExp2),A.push(I.sizeAttenuation),A.push(I.morphTargetsCount),A.push(I.morphAttributeCount),A.push(I.numDirLights),A.push(I.numPointLights),A.push(I.numSpotLights),A.push(I.numSpotLightMaps),A.push(I.numHemiLights),A.push(I.numRectAreaLights),A.push(I.numDirLightShadows),A.push(I.numPointLightShadows),A.push(I.numSpotLightShadows),A.push(I.numSpotLightShadowsWithMaps),A.push(I.numLightProbes),A.push(I.shadowMapType),A.push(I.toneMapping),A.push(I.numClippingPlanes),A.push(I.numClipIntersection),A.push(I.depthPacking)}function F(A,I){u.disableAll(),I.instancing&&u.enable(0),I.instancingColor&&u.enable(1),I.instancingMorph&&u.enable(2),I.matcap&&u.enable(3),I.envMap&&u.enable(4),I.normalMapObjectSpace&&u.enable(5),I.normalMapTangentSpace&&u.enable(6),I.clearcoat&&u.enable(7),I.iridescence&&u.enable(8),I.alphaTest&&u.enable(9),I.vertexColors&&u.enable(10),I.vertexAlphas&&u.enable(11),I.vertexUv1s&&u.enable(12),I.vertexUv2s&&u.enable(13),I.vertexUv3s&&u.enable(14),I.vertexTangents&&u.enable(15),I.anisotropy&&u.enable(16),I.alphaHash&&u.enable(17),I.batching&&u.enable(18),I.dispersion&&u.enable(19),I.batchingColor&&u.enable(20),I.gradientMap&&u.enable(21),I.packedNormalMap&&u.enable(22),I.vertexNormals&&u.enable(23),A.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.reversedDepthBuffer&&u.enable(4),I.skinning&&u.enable(5),I.morphTargets&&u.enable(6),I.morphNormals&&u.enable(7),I.morphColors&&u.enable(8),I.premultipliedAlpha&&u.enable(9),I.shadowMapEnabled&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),I.decodeVideoTextureEmissive&&u.enable(20),I.alphaToCoverage&&u.enable(21),I.numLightProbeGrids>0&&u.enable(22),I.hasPositionAttribute&&u.enable(23),A.push(u.mask)}function z(A){const I=S[A.type];let k;if(I){const G=na[I];k=AN.clone(G.uniforms)}else k=A.uniforms;return k}function D(A,I){let k=_.get(I);return k!==void 0?++k.usedTimes:(k=new $O(a,I,A,o),p.push(k),_.set(I,k)),k}function B(A){if(--A.usedTimes===0){const I=p.indexOf(A);p[I]=p[p.length-1],p.pop(),_.delete(A.cacheKey),A.destroy()}}function L(A){h.remove(A)}function N(){h.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:z,acquireProgram:D,releaseProgram:B,releaseShaderCache:L,programs:p,dispose:N}}function aP(){let a=new WeakMap;function e(u){return a.has(u)}function n(u){let h=a.get(u);return h===void 0&&(h={},a.set(u,h)),h}function r(u){a.delete(u)}function o(u,h,m){a.get(u)[h]=m}function c(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function rP(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function US(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function OS(){const a=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function h(g,S,T,w,M,y){let F=a[e];return F===void 0?(F={id:g.id,object:g,geometry:S,material:T,materialVariant:u(g),groupOrder:w,renderOrder:g.renderOrder,z:M,group:y},a[e]=F):(F.id=g.id,F.object=g,F.geometry=S,F.material=T,F.materialVariant=u(g),F.groupOrder=w,F.renderOrder=g.renderOrder,F.z=M,F.group=y),e++,F}function m(g,S,T,w,M,y){const F=h(g,S,T,w,M,y);T.transmission>0?r.push(F):T.transparent===!0?o.push(F):n.push(F)}function p(g,S,T,w,M,y){const F=h(g,S,T,w,M,y);T.transmission>0?r.unshift(F):T.transparent===!0?o.unshift(F):n.unshift(F)}function _(g,S,T){n.length>1&&n.sort(g||rP),r.length>1&&r.sort(S||US),o.length>1&&o.sort(S||US),T&&(n.reverse(),r.reverse(),o.reverse())}function v(){for(let g=e,S=a.length;g<S;g++){const T=a[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:m,unshift:p,finish:v,sort:_}}function sP(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new OS,a.set(r,[u])):o>=c.length?(u=new OS,c.push(u)):u=c[o],u}function n(){a=new WeakMap}return{get:e,dispose:n}}function oP(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new oe,color:new Rt};break;case"SpotLight":n={position:new oe,direction:new oe,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new oe,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new oe,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":n={color:new Rt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return a[e.id]=n,n}}}function lP(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let cP=0;function uP(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function fP(a){const e=new oP,n=lP(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new oe);const o=new oe,c=new hn,u=new hn;function h(p){let _=0,v=0,g=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let S=0,T=0,w=0,M=0,y=0,F=0,z=0,D=0,B=0,L=0,N=0;p.sort(uP);for(let I=0,k=p.length;I<k;I++){const G=p[I],Y=G.color,pe=G.intensity,me=G.distance;let J=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===gs?J=G.shadow.map.texture:J=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=Y.r*pe,v+=Y.g*pe,g+=Y.b*pe;else if(G.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(G.sh.coefficients[U],pe);N++}else if(G.isDirectionalLight){const U=e.get(G);if(U.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,te=n.get(G);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,r.directionalShadow[S]=te,r.directionalShadowMap[S]=J,r.directionalShadowMatrix[S]=G.shadow.matrix,F++}r.directional[S]=U,S++}else if(G.isSpotLight){const U=e.get(G);U.position.setFromMatrixPosition(G.matrixWorld),U.color.copy(Y).multiplyScalar(pe),U.distance=me,U.coneCos=Math.cos(G.angle),U.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),U.decay=G.decay,r.spot[w]=U;const H=G.shadow;if(G.map&&(r.spotLightMap[B]=G.map,B++,H.updateMatrices(G),G.castShadow&&L++),r.spotLightMatrix[w]=H.matrix,G.castShadow){const te=n.get(G);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,r.spotShadow[w]=te,r.spotShadowMap[w]=J,D++}w++}else if(G.isRectAreaLight){const U=e.get(G);U.color.copy(Y).multiplyScalar(pe),U.halfWidth.set(G.width*.5,0,0),U.halfHeight.set(0,G.height*.5,0),r.rectArea[M]=U,M++}else if(G.isPointLight){const U=e.get(G);if(U.color.copy(G.color).multiplyScalar(G.intensity),U.distance=G.distance,U.decay=G.decay,G.castShadow){const H=G.shadow,te=n.get(G);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,te.shadowCameraNear=H.camera.near,te.shadowCameraFar=H.camera.far,r.pointShadow[T]=te,r.pointShadowMap[T]=J,r.pointShadowMatrix[T]=G.shadow.matrix,z++}r.point[T]=U,T++}else if(G.isHemisphereLight){const U=e.get(G);U.skyColor.copy(G.color).multiplyScalar(pe),U.groundColor.copy(G.groundColor).multiplyScalar(pe),r.hemi[y]=U,y++}}M>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=g;const A=r.hash;(A.directionalLength!==S||A.pointLength!==T||A.spotLength!==w||A.rectAreaLength!==M||A.hemiLength!==y||A.numDirectionalShadows!==F||A.numPointShadows!==z||A.numSpotShadows!==D||A.numSpotMaps!==B||A.numLightProbes!==N)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=M,r.point.length=T,r.hemi.length=y,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=D+B-L,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=N,A.directionalLength=S,A.pointLength=T,A.spotLength=w,A.rectAreaLength=M,A.hemiLength=y,A.numDirectionalShadows=F,A.numPointShadows=z,A.numSpotShadows=D,A.numSpotMaps=B,A.numLightProbes=N,r.version=cP++)}function m(p,_){let v=0,g=0,S=0,T=0,w=0;const M=_.matrixWorldInverse;for(let y=0,F=p.length;y<F;y++){const z=p[y];if(z.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(M),v++}else if(z.isSpotLight){const D=r.spot[S];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(M),S++}else if(z.isRectAreaLight){const D=r.rectArea[T];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(M),u.identity(),c.copy(z.matrixWorld),c.premultiply(M),u.extractRotation(c),D.halfWidth.set(z.width*.5,0,0),D.halfHeight.set(0,z.height*.5,0),D.halfWidth.applyMatrix4(u),D.halfHeight.applyMatrix4(u),T++}else if(z.isPointLight){const D=r.point[g];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(M),g++}else if(z.isHemisphereLight){const D=r.hemi[w];D.direction.setFromMatrixPosition(z.matrixWorld),D.direction.transformDirection(M),w++}}}return{setup:h,setupView:m,state:r}}function PS(a){const e=new fP(a),n=[],r=[],o=[];function c(g){v.camera=g,n.length=0,r.length=0,o.length=0}function u(g){n.push(g)}function h(g){r.push(g)}function m(g){o.push(g)}function p(){e.setup(n)}function _(g){e.setupView(n,g)}const v={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:_,pushLight:u,pushShadow:h,pushLightProbeGrid:m}}function dP(a){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new PS(a),e.set(o,[h])):c>=u.length?(h=new PS(a),u.push(h)):h=u[c],h}function r(){e=new WeakMap}return{get:n,dispose:r}}const hP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,mP=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],gP=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],IS=new hn,Ll=new oe,Op=new oe;function vP(a,e,n){let r=new eM;const o=new zt,c=new zt,u=new dn,h=new DN,m=new NN,p={},_=n.maxTextureSize,v={[Rr]:ii,[ii]:Rr,[Oa]:Oa},g=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:hP,fragmentShader:pP}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const T=new ai;T.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ga(T,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=af;let y=this.type;this.render=function(L,N,A){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||L.length===0)return;this.type===gD&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=af);const I=a.getRenderTarget(),k=a.getActiveCubeFace(),G=a.getActiveMipmapLevel(),Y=a.state;Y.setBlending(Ia),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const pe=y!==this.type;pe&&N.traverse(function(me){me.material&&(Array.isArray(me.material)?me.material.forEach(J=>J.needsUpdate=!0):me.material.needsUpdate=!0)});for(let me=0,J=L.length;me<J;me++){const U=L[me],H=U.shadow;if(H===void 0){ct("WebGLShadowMap:",U,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const te=H.getFrameExtents();o.multiply(te),c.copy(H.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(c.x=Math.floor(_/te.x),o.x=c.x*te.x,H.mapSize.x=c.x),o.y>_&&(c.y=Math.floor(_/te.y),o.y=c.y*te.y,H.mapSize.y=c.y));const re=a.state.buffers.depth.getReversed();if(H.camera._reversedDepth=re,H.map===null||pe===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Fl){if(U.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new oa(o.x,o.y,{format:gs,type:Va,minFilter:Xn,magFilter:Xn,generateMipmaps:!1}),H.map.texture.name=U.name+".shadowMap",H.map.depthTexture=new Ao(o.x,o.y,aa),H.map.depthTexture.name=U.name+".shadowMapDepth",H.map.depthTexture.format=Ha,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=zn,H.map.depthTexture.magFilter=zn}else U.isPointLight?(H.map=new lM(o.x),H.map.depthTexture=new EN(o.x,la)):(H.map=new oa(o.x,o.y),H.map.depthTexture=new Ao(o.x,o.y,la)),H.map.depthTexture.name=U.name+".shadowMap",H.map.depthTexture.format=Ha,this.type===af?(H.map.depthTexture.compareFunction=re?Dg:Cg,H.map.depthTexture.minFilter=Xn,H.map.depthTexture.magFilter=Xn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=zn,H.map.depthTexture.magFilter=zn);H.camera.updateProjectionMatrix()}const be=H.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<be;O++){if(H.map.isWebGLCubeRenderTarget)a.setRenderTarget(H.map,O),a.clear();else{O===0&&(a.setRenderTarget(H.map),a.clear());const K=H.getViewport(O);u.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),Y.viewport(u)}if(U.isPointLight){const K=H.camera,ne=H.matrix,Me=U.distance||K.far;Me!==K.far&&(K.far=Me,K.updateProjectionMatrix()),Ll.setFromMatrixPosition(U.matrixWorld),K.position.copy(Ll),Op.copy(K.position),Op.add(mP[O]),K.up.copy(gP[O]),K.lookAt(Op),K.updateMatrixWorld(),ne.makeTranslation(-Ll.x,-Ll.y,-Ll.z),IS.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H._frustum.setFromProjectionMatrix(IS,K.coordinateSystem,K.reversedDepth)}else H.updateMatrices(U);r=H.getFrustum(),D(N,A,H.camera,U,this.type)}H.isPointLightShadow!==!0&&this.type===Fl&&F(H,A),H.needsUpdate=!1}y=this.type,M.needsUpdate=!1,a.setRenderTarget(I,k,G)};function F(L,N){const A=e.update(w);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new oa(o.x,o.y,{format:gs,type:Va})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,a.setRenderTarget(L.mapPass),a.clear(),a.renderBufferDirect(N,null,A,g,w,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,a.setRenderTarget(L.map),a.clear(),a.renderBufferDirect(N,null,A,S,w,null)}function z(L,N,A,I){let k=null;const G=A.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(G!==void 0)k=G;else if(k=A.isPointLight===!0?m:h,a.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const Y=k.uuid,pe=N.uuid;let me=p[Y];me===void 0&&(me={},p[Y]=me);let J=me[pe];J===void 0&&(J=k.clone(),me[pe]=J,N.addEventListener("dispose",B)),k=J}if(k.visible=N.visible,k.wireframe=N.wireframe,I===Fl?k.side=N.shadowSide!==null?N.shadowSide:N.side:k.side=N.shadowSide!==null?N.shadowSide:v[N.side],k.alphaMap=N.alphaMap,k.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,k.map=N.map,k.clipShadows=N.clipShadows,k.clippingPlanes=N.clippingPlanes,k.clipIntersection=N.clipIntersection,k.displacementMap=N.displacementMap,k.displacementScale=N.displacementScale,k.displacementBias=N.displacementBias,k.wireframeLinewidth=N.wireframeLinewidth,k.linewidth=N.linewidth,A.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const Y=a.properties.get(k);Y.light=A}return k}function D(L,N,A,I,k){if(L.visible===!1)return;if(L.layers.test(N.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&k===Fl)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,L.matrixWorld);const pe=e.update(L),me=L.material;if(Array.isArray(me)){const J=pe.groups;for(let U=0,H=J.length;U<H;U++){const te=J[U],re=me[te.materialIndex];if(re&&re.visible){const be=z(L,re,I,k);L.onBeforeShadow(a,L,N,A,pe,be,te),a.renderBufferDirect(A,null,pe,be,L,te),L.onAfterShadow(a,L,N,A,pe,be,te)}}}else if(me.visible){const J=z(L,me,I,k);L.onBeforeShadow(a,L,N,A,pe,J,null),a.renderBufferDirect(A,null,pe,J,L,null),L.onAfterShadow(a,L,N,A,pe,J,null)}}const Y=L.children;for(let pe=0,me=Y.length;pe<me;pe++)D(Y[pe],N,A,I,k)}function B(L){L.target.removeEventListener("dispose",B);for(const A in p){const I=p[A],k=L.target.uuid;k in I&&(I[k].dispose(),delete I[k])}}}function _P(a,e){function n(){let q=!1;const Ne=new dn;let Se=null;const Oe=new dn(0,0,0,0);return{setMask:function(He){Se!==He&&!q&&(a.colorMask(He,He,He,He),Se=He)},setLocked:function(He){q=He},setClear:function(He,we,Qe,We,sn){sn===!0&&(He*=We,we*=We,Qe*=We),Ne.set(He,we,Qe,We),Oe.equals(Ne)===!1&&(a.clearColor(He,we,Qe,We),Oe.copy(Ne))},reset:function(){q=!1,Se=null,Oe.set(-1,0,0,0)}}}function r(){let q=!1,Ne=!1,Se=null,Oe=null,He=null;return{setReversed:function(we){if(Ne!==we){const Qe=e.get("EXT_clip_control");we?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Ne=we;const We=He;He=null,this.setClear(We)}},getReversed:function(){return Ne},setTest:function(we){we?xe(a.DEPTH_TEST):Pe(a.DEPTH_TEST)},setMask:function(we){Se!==we&&!q&&(a.depthMask(we),Se=we)},setFunc:function(we){if(Ne&&(we=KD[we]),Oe!==we){switch(we){case mm:a.depthFunc(a.NEVER);break;case gm:a.depthFunc(a.ALWAYS);break;case vm:a.depthFunc(a.LESS);break;case Eo:a.depthFunc(a.LEQUAL);break;case _m:a.depthFunc(a.EQUAL);break;case xm:a.depthFunc(a.GEQUAL);break;case ym:a.depthFunc(a.GREATER);break;case Sm:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Oe=we}},setLocked:function(we){q=we},setClear:function(we){He!==we&&(He=we,Ne&&(we=1-we),a.clearDepth(we))},reset:function(){q=!1,Se=null,Oe=null,He=null,Ne=!1}}}function o(){let q=!1,Ne=null,Se=null,Oe=null,He=null,we=null,Qe=null,We=null,sn=null;return{setTest:function(Vt){q||(Vt?xe(a.STENCIL_TEST):Pe(a.STENCIL_TEST))},setMask:function(Vt){Ne!==Vt&&!q&&(a.stencilMask(Vt),Ne=Vt)},setFunc:function(Vt,ri,si){(Se!==Vt||Oe!==ri||He!==si)&&(a.stencilFunc(Vt,ri,si),Se=Vt,Oe=ri,He=si)},setOp:function(Vt,ri,si){(we!==Vt||Qe!==ri||We!==si)&&(a.stencilOp(Vt,ri,si),we=Vt,Qe=ri,We=si)},setLocked:function(Vt){q=Vt},setClear:function(Vt){sn!==Vt&&(a.clearStencil(Vt),sn=Vt)},reset:function(){q=!1,Ne=null,Se=null,Oe=null,He=null,we=null,Qe=null,We=null,sn=null}}}const c=new n,u=new r,h=new o,m=new WeakMap,p=new WeakMap;let _={},v={},g={},S=new WeakMap,T=[],w=null,M=!1,y=null,F=null,z=null,D=null,B=null,L=null,N=null,A=new Rt(0,0,0),I=0,k=!1,G=null,Y=null,pe=null,me=null,J=null;const U=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,te=0;const re=a.getParameter(a.VERSION);re.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(re)[1]),H=te>=1):re.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),H=te>=2);let be=null,O={};const K=a.getParameter(a.SCISSOR_BOX),ne=a.getParameter(a.VIEWPORT),Me=new dn().fromArray(K),Q=new dn().fromArray(ne);function W(q,Ne,Se,Oe){const He=new Uint8Array(4),we=a.createTexture();a.bindTexture(q,we),a.texParameteri(q,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(q,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Qe=0;Qe<Se;Qe++)q===a.TEXTURE_3D||q===a.TEXTURE_2D_ARRAY?a.texImage3D(Ne,0,a.RGBA,1,1,Oe,0,a.RGBA,a.UNSIGNED_BYTE,He):a.texImage2D(Ne+Qe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,He);return we}const le={};le[a.TEXTURE_2D]=W(a.TEXTURE_2D,a.TEXTURE_2D,1),le[a.TEXTURE_CUBE_MAP]=W(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[a.TEXTURE_2D_ARRAY]=W(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),le[a.TEXTURE_3D]=W(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),xe(a.DEPTH_TEST),u.setFunc(Eo),Jt(!1),en(Ly),xe(a.CULL_FACE),yt(Ia);function xe(q){_[q]!==!0&&(a.enable(q),_[q]=!0)}function Pe(q){_[q]!==!1&&(a.disable(q),_[q]=!1)}function nt(q,Ne){return g[q]!==Ne?(a.bindFramebuffer(q,Ne),g[q]=Ne,q===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=Ne),q===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ke(q,Ne){let Se=T,Oe=!1;if(q){Se=S.get(Ne),Se===void 0&&(Se=[],S.set(Ne,Se));const He=q.textures;if(Se.length!==He.length||Se[0]!==a.COLOR_ATTACHMENT0){for(let we=0,Qe=He.length;we<Qe;we++)Se[we]=a.COLOR_ATTACHMENT0+we;Se.length=He.length,Oe=!0}}else Se[0]!==a.BACK&&(Se[0]=a.BACK,Oe=!0);Oe&&a.drawBuffers(Se)}function Lt(q){return w!==q?(a.useProgram(q),w=q,!0):!1}const dt={[as]:a.FUNC_ADD,[_D]:a.FUNC_SUBTRACT,[xD]:a.FUNC_REVERSE_SUBTRACT};dt[yD]=a.MIN,dt[SD]=a.MAX;const bt={[bD]:a.ZERO,[MD]:a.ONE,[ED]:a.SRC_COLOR,[hm]:a.SRC_ALPHA,[DD]:a.SRC_ALPHA_SATURATE,[RD]:a.DST_COLOR,[AD]:a.DST_ALPHA,[TD]:a.ONE_MINUS_SRC_COLOR,[pm]:a.ONE_MINUS_SRC_ALPHA,[CD]:a.ONE_MINUS_DST_COLOR,[wD]:a.ONE_MINUS_DST_ALPHA,[ND]:a.CONSTANT_COLOR,[LD]:a.ONE_MINUS_CONSTANT_COLOR,[UD]:a.CONSTANT_ALPHA,[OD]:a.ONE_MINUS_CONSTANT_ALPHA};function yt(q,Ne,Se,Oe,He,we,Qe,We,sn,Vt){if(q===Ia){M===!0&&(Pe(a.BLEND),M=!1);return}if(M===!1&&(xe(a.BLEND),M=!0),q!==vD){if(q!==y||Vt!==k){if((F!==as||B!==as)&&(a.blendEquation(a.FUNC_ADD),F=as,B=as),Vt)switch(q){case xo:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Uy:a.blendFunc(a.ONE,a.ONE);break;case Oy:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Py:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Ut("WebGLState: Invalid blending: ",q);break}else switch(q){case xo:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Uy:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Oy:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Py:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",q);break}z=null,D=null,L=null,N=null,A.set(0,0,0),I=0,y=q,k=Vt}return}He=He||Ne,we=we||Se,Qe=Qe||Oe,(Ne!==F||He!==B)&&(a.blendEquationSeparate(dt[Ne],dt[He]),F=Ne,B=He),(Se!==z||Oe!==D||we!==L||Qe!==N)&&(a.blendFuncSeparate(bt[Se],bt[Oe],bt[we],bt[Qe]),z=Se,D=Oe,L=we,N=Qe),(We.equals(A)===!1||sn!==I)&&(a.blendColor(We.r,We.g,We.b,sn),A.copy(We),I=sn),y=q,k=!1}function gt(q,Ne){q.side===Oa?Pe(a.CULL_FACE):xe(a.CULL_FACE);let Se=q.side===ii;Ne&&(Se=!Se),Jt(Se),q.blending===xo&&q.transparent===!1?yt(Ia):yt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),c.setMask(q.colorWrite);const Oe=q.stencilWrite;h.setTest(Oe),Oe&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),tn(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?xe(a.SAMPLE_ALPHA_TO_COVERAGE):Pe(a.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(q){G!==q&&(q?a.frontFace(a.CW):a.frontFace(a.CCW),G=q)}function en(q){q!==pD?(xe(a.CULL_FACE),q!==Y&&(q===Ly?a.cullFace(a.BACK):q===mD?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Pe(a.CULL_FACE),Y=q}function Zt(q){q!==pe&&(H&&a.lineWidth(q),pe=q)}function tn(q,Ne,Se){q?(xe(a.POLYGON_OFFSET_FILL),(me!==Ne||J!==Se)&&(me=Ne,J=Se,u.getReversed()&&(Ne=-Ne),a.polygonOffset(Ne,Se))):Pe(a.POLYGON_OFFSET_FILL)}function Te(q){q?xe(a.SCISSOR_TEST):Pe(a.SCISSOR_TEST)}function Ze(q){q===void 0&&(q=a.TEXTURE0+U-1),be!==q&&(a.activeTexture(q),be=q)}function X(q,Ne,Se){Se===void 0&&(be===null?Se=a.TEXTURE0+U-1:Se=be);let Oe=O[Se];Oe===void 0&&(Oe={type:void 0,texture:void 0},O[Se]=Oe),(Oe.type!==q||Oe.texture!==Ne)&&(be!==Se&&(a.activeTexture(Se),be=Se),a.bindTexture(q,Ne||le[q]),Oe.type=q,Oe.texture=Ne)}function mt(){const q=O[be];q!==void 0&&q.type!==void 0&&(a.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function ut(){try{a.compressedTexImage2D(...arguments)}catch(q){Ut("WebGLState:",q)}}function P(){try{a.compressedTexImage3D(...arguments)}catch(q){Ut("WebGLState:",q)}}function E(){try{a.texSubImage2D(...arguments)}catch(q){Ut("WebGLState:",q)}}function $(){try{a.texSubImage3D(...arguments)}catch(q){Ut("WebGLState:",q)}}function ie(){try{a.compressedTexSubImage2D(...arguments)}catch(q){Ut("WebGLState:",q)}}function he(){try{a.compressedTexSubImage3D(...arguments)}catch(q){Ut("WebGLState:",q)}}function Ce(){try{a.texStorage2D(...arguments)}catch(q){Ut("WebGLState:",q)}}function Ue(){try{a.texStorage3D(...arguments)}catch(q){Ut("WebGLState:",q)}}function ve(){try{a.texImage2D(...arguments)}catch(q){Ut("WebGLState:",q)}}function _e(){try{a.texImage3D(...arguments)}catch(q){Ut("WebGLState:",q)}}function Le(q){return v[q]!==void 0?v[q]:a.getParameter(q)}function Ge(q,Ne){v[q]!==Ne&&(a.pixelStorei(q,Ne),v[q]=Ne)}function ze(q){Me.equals(q)===!1&&(a.scissor(q.x,q.y,q.z,q.w),Me.copy(q))}function Ie(q){Q.equals(q)===!1&&(a.viewport(q.x,q.y,q.z,q.w),Q.copy(q))}function tt(q,Ne){let Se=p.get(Ne);Se===void 0&&(Se=new WeakMap,p.set(Ne,Se));let Oe=Se.get(q);Oe===void 0&&(Oe=a.getUniformBlockIndex(Ne,q.name),Se.set(q,Oe))}function it(q,Ne){const Oe=p.get(Ne).get(q);m.get(Ne)!==Oe&&(a.uniformBlockBinding(Ne,Oe,q.__bindingPointIndex),m.set(Ne,Oe))}function ft(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),_={},v={},be=null,O={},g={},S=new WeakMap,T=[],w=null,M=!1,y=null,F=null,z=null,D=null,B=null,L=null,N=null,A=new Rt(0,0,0),I=0,k=!1,G=null,Y=null,pe=null,me=null,J=null,Me.set(0,0,a.canvas.width,a.canvas.height),Q.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:xe,disable:Pe,bindFramebuffer:nt,drawBuffers:Ke,useProgram:Lt,setBlending:yt,setMaterial:gt,setFlipSided:Jt,setCullFace:en,setLineWidth:Zt,setPolygonOffset:tn,setScissorTest:Te,activeTexture:Ze,bindTexture:X,unbindTexture:mt,compressedTexImage2D:ut,compressedTexImage3D:P,texImage2D:ve,texImage3D:_e,pixelStorei:Ge,getParameter:Le,updateUBOMapping:tt,uniformBlockBinding:it,texStorage2D:Ce,texStorage3D:Ue,texSubImage2D:E,texSubImage3D:$,compressedTexSubImage2D:ie,compressedTexSubImage3D:he,scissor:ze,viewport:Ie,reset:ft}}function xP(a,e,n,r,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new zt,_=new WeakMap,v=new Set;let g;const S=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(P,E){return T?new OffscreenCanvas(P,E):Sf("canvas")}function M(P,E,$){let ie=1;const he=ut(P);if((he.width>$||he.height>$)&&(ie=$/Math.max(he.width,he.height)),ie<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Ce=Math.floor(ie*he.width),Ue=Math.floor(ie*he.height);g===void 0&&(g=w(Ce,Ue));const ve=E?w(Ce,Ue):g;return ve.width=Ce,ve.height=Ue,ve.getContext("2d").drawImage(P,0,0,Ce,Ue),ct("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ce+"x"+Ue+")."),ve}else return"data"in P&&ct("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),P;return P}function y(P){return P.generateMipmaps}function F(P){a.generateMipmap(P)}function z(P){return P.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?a.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function D(P,E,$,ie,he,Ce=!1){if(P!==null){if(a[P]!==void 0)return a[P];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Ue;ie&&(Ue=e.get("EXT_texture_norm16"),Ue||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ve=E;if(E===a.RED&&($===a.FLOAT&&(ve=a.R32F),$===a.HALF_FLOAT&&(ve=a.R16F),$===a.UNSIGNED_BYTE&&(ve=a.R8),$===a.UNSIGNED_SHORT&&Ue&&(ve=Ue.R16_EXT),$===a.SHORT&&Ue&&(ve=Ue.R16_SNORM_EXT)),E===a.RED_INTEGER&&($===a.UNSIGNED_BYTE&&(ve=a.R8UI),$===a.UNSIGNED_SHORT&&(ve=a.R16UI),$===a.UNSIGNED_INT&&(ve=a.R32UI),$===a.BYTE&&(ve=a.R8I),$===a.SHORT&&(ve=a.R16I),$===a.INT&&(ve=a.R32I)),E===a.RG&&($===a.FLOAT&&(ve=a.RG32F),$===a.HALF_FLOAT&&(ve=a.RG16F),$===a.UNSIGNED_BYTE&&(ve=a.RG8),$===a.UNSIGNED_SHORT&&Ue&&(ve=Ue.RG16_EXT),$===a.SHORT&&Ue&&(ve=Ue.RG16_SNORM_EXT)),E===a.RG_INTEGER&&($===a.UNSIGNED_BYTE&&(ve=a.RG8UI),$===a.UNSIGNED_SHORT&&(ve=a.RG16UI),$===a.UNSIGNED_INT&&(ve=a.RG32UI),$===a.BYTE&&(ve=a.RG8I),$===a.SHORT&&(ve=a.RG16I),$===a.INT&&(ve=a.RG32I)),E===a.RGB_INTEGER&&($===a.UNSIGNED_BYTE&&(ve=a.RGB8UI),$===a.UNSIGNED_SHORT&&(ve=a.RGB16UI),$===a.UNSIGNED_INT&&(ve=a.RGB32UI),$===a.BYTE&&(ve=a.RGB8I),$===a.SHORT&&(ve=a.RGB16I),$===a.INT&&(ve=a.RGB32I)),E===a.RGBA_INTEGER&&($===a.UNSIGNED_BYTE&&(ve=a.RGBA8UI),$===a.UNSIGNED_SHORT&&(ve=a.RGBA16UI),$===a.UNSIGNED_INT&&(ve=a.RGBA32UI),$===a.BYTE&&(ve=a.RGBA8I),$===a.SHORT&&(ve=a.RGBA16I),$===a.INT&&(ve=a.RGBA32I)),E===a.RGB&&($===a.UNSIGNED_SHORT&&Ue&&(ve=Ue.RGB16_EXT),$===a.SHORT&&Ue&&(ve=Ue.RGB16_SNORM_EXT),$===a.UNSIGNED_INT_5_9_9_9_REV&&(ve=a.RGB9_E5),$===a.UNSIGNED_INT_10F_11F_11F_REV&&(ve=a.R11F_G11F_B10F)),E===a.RGBA){const _e=Ce?xf:Dt.getTransfer(he);$===a.FLOAT&&(ve=a.RGBA32F),$===a.HALF_FLOAT&&(ve=a.RGBA16F),$===a.UNSIGNED_BYTE&&(ve=_e===jt?a.SRGB8_ALPHA8:a.RGBA8),$===a.UNSIGNED_SHORT&&Ue&&(ve=Ue.RGBA16_EXT),$===a.SHORT&&Ue&&(ve=Ue.RGBA16_SNORM_EXT),$===a.UNSIGNED_SHORT_4_4_4_4&&(ve=a.RGBA4),$===a.UNSIGNED_SHORT_5_5_5_1&&(ve=a.RGB5_A1)}return(ve===a.R16F||ve===a.R32F||ve===a.RG16F||ve===a.RG32F||ve===a.RGBA16F||ve===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function B(P,E){let $;return P?E===null||E===la||E===Kl?$=a.DEPTH24_STENCIL8:E===aa?$=a.DEPTH32F_STENCIL8:E===Yl&&($=a.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===la||E===Kl?$=a.DEPTH_COMPONENT24:E===aa?$=a.DEPTH_COMPONENT32F:E===Yl&&($=a.DEPTH_COMPONENT16),$}function L(P,E){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==zn&&P.minFilter!==Xn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function N(P){const E=P.target;E.removeEventListener("dispose",N),I(E),E.isVideoTexture&&_.delete(E),E.isHTMLTexture&&v.delete(E)}function A(P){const E=P.target;E.removeEventListener("dispose",A),G(E)}function I(P){const E=r.get(P);if(E.__webglInit===void 0)return;const $=P.source,ie=S.get($);if(ie){const he=ie[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&k(P),Object.keys(ie).length===0&&S.delete($)}r.remove(P)}function k(P){const E=r.get(P);a.deleteTexture(E.__webglTexture);const $=P.source,ie=S.get($);delete ie[E.__cacheKey],u.memory.textures--}function G(P){const E=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(E.__webglFramebuffer[ie]))for(let he=0;he<E.__webglFramebuffer[ie].length;he++)a.deleteFramebuffer(E.__webglFramebuffer[ie][he]);else a.deleteFramebuffer(E.__webglFramebuffer[ie]);E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer[ie])}else{if(Array.isArray(E.__webglFramebuffer))for(let ie=0;ie<E.__webglFramebuffer.length;ie++)a.deleteFramebuffer(E.__webglFramebuffer[ie]);else a.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&a.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ie=0;ie<E.__webglColorRenderbuffer.length;ie++)E.__webglColorRenderbuffer[ie]&&a.deleteRenderbuffer(E.__webglColorRenderbuffer[ie]);E.__webglDepthRenderbuffer&&a.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=P.textures;for(let ie=0,he=$.length;ie<he;ie++){const Ce=r.get($[ie]);Ce.__webglTexture&&(a.deleteTexture(Ce.__webglTexture),u.memory.textures--),r.remove($[ie])}r.remove(P)}let Y=0;function pe(){Y=0}function me(){return Y}function J(P){Y=P}function U(){const P=Y;return P>=o.maxTextures&&ct("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),Y+=1,P}function H(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function te(P,E){const $=r.get(P);if(P.isVideoTexture&&X(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&$.__version!==P.version){const ie=P.image;if(ie===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe($,P,E);return}}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,$.__webglTexture,a.TEXTURE0+E)}function re(P,E){const $=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){Pe($,P,E);return}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,$.__webglTexture,a.TEXTURE0+E)}function be(P,E){const $=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){Pe($,P,E);return}n.bindTexture(a.TEXTURE_3D,$.__webglTexture,a.TEXTURE0+E)}function O(P,E){const $=r.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&$.__version!==P.version){nt($,P,E);return}n.bindTexture(a.TEXTURE_CUBE_MAP,$.__webglTexture,a.TEXTURE0+E)}const K={[bm]:a.REPEAT,[Pa]:a.CLAMP_TO_EDGE,[Mm]:a.MIRRORED_REPEAT},ne={[zn]:a.NEAREST,[FD]:a.NEAREST_MIPMAP_NEAREST,[Tu]:a.NEAREST_MIPMAP_LINEAR,[Xn]:a.LINEAR,[ip]:a.LINEAR_MIPMAP_NEAREST,[ls]:a.LINEAR_MIPMAP_LINEAR},Me={[VD]:a.NEVER,[WD]:a.ALWAYS,[HD]:a.LESS,[Cg]:a.LEQUAL,[GD]:a.EQUAL,[Dg]:a.GEQUAL,[kD]:a.GREATER,[XD]:a.NOTEQUAL};function Q(P,E){if(E.type===aa&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Xn||E.magFilter===ip||E.magFilter===Tu||E.magFilter===ls||E.minFilter===Xn||E.minFilter===ip||E.minFilter===Tu||E.minFilter===ls)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(P,a.TEXTURE_WRAP_S,K[E.wrapS]),a.texParameteri(P,a.TEXTURE_WRAP_T,K[E.wrapT]),(P===a.TEXTURE_3D||P===a.TEXTURE_2D_ARRAY)&&a.texParameteri(P,a.TEXTURE_WRAP_R,K[E.wrapR]),a.texParameteri(P,a.TEXTURE_MAG_FILTER,ne[E.magFilter]),a.texParameteri(P,a.TEXTURE_MIN_FILTER,ne[E.minFilter]),E.compareFunction&&(a.texParameteri(P,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(P,a.TEXTURE_COMPARE_FUNC,Me[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===zn||E.minFilter!==Tu&&E.minFilter!==ls||E.type===aa&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");a.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function W(P,E){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",N));const ie=E.source;let he=S.get(ie);he===void 0&&(he={},S.set(ie,he));const Ce=H(E);if(Ce!==P.__cacheKey){he[Ce]===void 0&&(he[Ce]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,$=!0),he[Ce].usedTimes++;const Ue=he[P.__cacheKey];Ue!==void 0&&(he[P.__cacheKey].usedTimes--,Ue.usedTimes===0&&k(E)),P.__cacheKey=Ce,P.__webglTexture=he[Ce].texture}return $}function le(P,E,$){return Math.floor(Math.floor(P/$)/E)}function xe(P,E,$,ie){const Ce=P.updateRanges;if(Ce.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,E.width,E.height,$,ie,E.data);else{Ce.sort((Ge,ze)=>Ge.start-ze.start);let Ue=0;for(let Ge=1;Ge<Ce.length;Ge++){const ze=Ce[Ue],Ie=Ce[Ge],tt=ze.start+ze.count,it=le(Ie.start,E.width,4),ft=le(ze.start,E.width,4);Ie.start<=tt+1&&it===ft&&le(Ie.start+Ie.count-1,E.width,4)===it?ze.count=Math.max(ze.count,Ie.start+Ie.count-ze.start):(++Ue,Ce[Ue]=Ie)}Ce.length=Ue+1;const ve=n.getParameter(a.UNPACK_ROW_LENGTH),_e=n.getParameter(a.UNPACK_SKIP_PIXELS),Le=n.getParameter(a.UNPACK_SKIP_ROWS);n.pixelStorei(a.UNPACK_ROW_LENGTH,E.width);for(let Ge=0,ze=Ce.length;Ge<ze;Ge++){const Ie=Ce[Ge],tt=Math.floor(Ie.start/4),it=Math.ceil(Ie.count/4),ft=tt%E.width,q=Math.floor(tt/E.width),Ne=it,Se=1;n.pixelStorei(a.UNPACK_SKIP_PIXELS,ft),n.pixelStorei(a.UNPACK_SKIP_ROWS,q),n.texSubImage2D(a.TEXTURE_2D,0,ft,q,Ne,Se,$,ie,E.data)}P.clearUpdateRanges(),n.pixelStorei(a.UNPACK_ROW_LENGTH,ve),n.pixelStorei(a.UNPACK_SKIP_PIXELS,_e),n.pixelStorei(a.UNPACK_SKIP_ROWS,Le)}}function Pe(P,E,$){let ie=a.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=a.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=a.TEXTURE_3D);const he=W(P,E),Ce=E.source;n.bindTexture(ie,P.__webglTexture,a.TEXTURE0+$);const Ue=r.get(Ce);if(Ce.version!==Ue.__version||he===!0){if(n.activeTexture(a.TEXTURE0+$),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const Se=Dt.getPrimaries(Dt.workingColorSpace),Oe=E.colorSpace===Mr?null:Dt.getPrimaries(E.colorSpace),He=E.colorSpace===Mr||Se===Oe?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}n.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment);let _e=M(E.image,!1,o.maxTextureSize);_e=mt(E,_e);const Le=c.convert(E.format,E.colorSpace),Ge=c.convert(E.type);let ze=D(E.internalFormat,Le,Ge,E.normalized,E.colorSpace,E.isVideoTexture);Q(ie,E);let Ie;const tt=E.mipmaps,it=E.isVideoTexture!==!0,ft=Ue.__version===void 0||he===!0,q=Ce.dataReady,Ne=L(E,_e);if(E.isDepthTexture)ze=B(E.format===cs,E.type),ft&&(it?n.texStorage2D(a.TEXTURE_2D,1,ze,_e.width,_e.height):n.texImage2D(a.TEXTURE_2D,0,ze,_e.width,_e.height,0,Le,Ge,null));else if(E.isDataTexture)if(tt.length>0){it&&ft&&n.texStorage2D(a.TEXTURE_2D,Ne,ze,tt[0].width,tt[0].height);for(let Se=0,Oe=tt.length;Se<Oe;Se++)Ie=tt[Se],it?q&&n.texSubImage2D(a.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,Le,Ge,Ie.data):n.texImage2D(a.TEXTURE_2D,Se,ze,Ie.width,Ie.height,0,Le,Ge,Ie.data);E.generateMipmaps=!1}else it?(ft&&n.texStorage2D(a.TEXTURE_2D,Ne,ze,_e.width,_e.height),q&&xe(E,_e,Le,Ge)):n.texImage2D(a.TEXTURE_2D,0,ze,_e.width,_e.height,0,Le,Ge,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){it&&ft&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,ze,tt[0].width,tt[0].height,_e.depth);for(let Se=0,Oe=tt.length;Se<Oe;Se++)if(Ie=tt[Se],E.format!==Xi)if(Le!==null)if(it){if(q)if(E.layerUpdates.size>0){const He=hS(Ie.width,Ie.height,E.format,E.type);for(const we of E.layerUpdates){const Qe=Ie.data.subarray(we*He/Ie.data.BYTES_PER_ELEMENT,(we+1)*He/Ie.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Se,0,0,we,Ie.width,Ie.height,1,Le,Qe)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Se,0,0,0,Ie.width,Ie.height,_e.depth,Le,Ie.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Se,ze,Ie.width,Ie.height,_e.depth,0,Ie.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?q&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,Se,0,0,0,Ie.width,Ie.height,_e.depth,Le,Ge,Ie.data):n.texImage3D(a.TEXTURE_2D_ARRAY,Se,ze,Ie.width,Ie.height,_e.depth,0,Le,Ge,Ie.data)}else{it&&ft&&n.texStorage2D(a.TEXTURE_2D,Ne,ze,tt[0].width,tt[0].height);for(let Se=0,Oe=tt.length;Se<Oe;Se++)Ie=tt[Se],E.format!==Xi?Le!==null?it?q&&n.compressedTexSubImage2D(a.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,Le,Ie.data):n.compressedTexImage2D(a.TEXTURE_2D,Se,ze,Ie.width,Ie.height,0,Ie.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?q&&n.texSubImage2D(a.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,Le,Ge,Ie.data):n.texImage2D(a.TEXTURE_2D,Se,ze,Ie.width,Ie.height,0,Le,Ge,Ie.data)}else if(E.isDataArrayTexture)if(it){if(ft&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,ze,_e.width,_e.height,_e.depth),q)if(E.layerUpdates.size>0){const Se=hS(_e.width,_e.height,E.format,E.type);for(const Oe of E.layerUpdates){const He=_e.data.subarray(Oe*Se/_e.data.BYTES_PER_ELEMENT,(Oe+1)*Se/_e.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Oe,_e.width,_e.height,1,Le,Ge,He)}E.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Le,Ge,_e.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,ze,_e.width,_e.height,_e.depth,0,Le,Ge,_e.data);else if(E.isData3DTexture)it?(ft&&n.texStorage3D(a.TEXTURE_3D,Ne,ze,_e.width,_e.height,_e.depth),q&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Le,Ge,_e.data)):n.texImage3D(a.TEXTURE_3D,0,ze,_e.width,_e.height,_e.depth,0,Le,Ge,_e.data);else if(E.isFramebufferTexture){if(ft)if(it)n.texStorage2D(a.TEXTURE_2D,Ne,ze,_e.width,_e.height);else{let Se=_e.width,Oe=_e.height;for(let He=0;He<Ne;He++)n.texImage2D(a.TEXTURE_2D,He,ze,Se,Oe,0,Le,Ge,null),Se>>=1,Oe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in a){const Se=a.canvas;if(Se.hasAttribute("layoutsubtree")||Se.setAttribute("layoutsubtree","true"),_e.parentNode!==Se){Se.appendChild(_e),v.add(E),Se.onpaint=Oe=>{const He=Oe.changedElements;for(const we of v)He.includes(we.image)&&(we.needsUpdate=!0)},Se.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,_e);else{const He=a.RGBA,we=a.RGBA,Qe=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,He,we,Qe,_e)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(tt.length>0){if(it&&ft){const Se=ut(tt[0]);n.texStorage2D(a.TEXTURE_2D,Ne,ze,Se.width,Se.height)}for(let Se=0,Oe=tt.length;Se<Oe;Se++)Ie=tt[Se],it?q&&n.texSubImage2D(a.TEXTURE_2D,Se,0,0,Le,Ge,Ie):n.texImage2D(a.TEXTURE_2D,Se,ze,Le,Ge,Ie);E.generateMipmaps=!1}else if(it){if(ft){const Se=ut(_e);n.texStorage2D(a.TEXTURE_2D,Ne,ze,Se.width,Se.height)}q&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Le,Ge,_e)}else n.texImage2D(a.TEXTURE_2D,0,ze,Le,Ge,_e);y(E)&&F(ie),Ue.__version=Ce.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function nt(P,E,$){if(E.image.length!==6)return;const ie=W(P,E),he=E.source;n.bindTexture(a.TEXTURE_CUBE_MAP,P.__webglTexture,a.TEXTURE0+$);const Ce=r.get(he);if(he.version!==Ce.__version||ie===!0){n.activeTexture(a.TEXTURE0+$);const Ue=Dt.getPrimaries(Dt.workingColorSpace),ve=E.colorSpace===Mr?null:Dt.getPrimaries(E.colorSpace),_e=E.colorSpace===Mr||Ue===ve?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Le=E.isCompressedTexture||E.image[0].isCompressedTexture,Ge=E.image[0]&&E.image[0].isDataTexture,ze=[];for(let we=0;we<6;we++)!Le&&!Ge?ze[we]=M(E.image[we],!0,o.maxCubemapSize):ze[we]=Ge?E.image[we].image:E.image[we],ze[we]=mt(E,ze[we]);const Ie=ze[0],tt=c.convert(E.format,E.colorSpace),it=c.convert(E.type),ft=D(E.internalFormat,tt,it,E.normalized,E.colorSpace),q=E.isVideoTexture!==!0,Ne=Ce.__version===void 0||ie===!0,Se=he.dataReady;let Oe=L(E,Ie);Q(a.TEXTURE_CUBE_MAP,E);let He;if(Le){q&&Ne&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Oe,ft,Ie.width,Ie.height);for(let we=0;we<6;we++){He=ze[we].mipmaps;for(let Qe=0;Qe<He.length;Qe++){const We=He[Qe];E.format!==Xi?tt!==null?q?Se&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,Qe,0,0,We.width,We.height,tt,We.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,Qe,ft,We.width,We.height,0,We.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Se&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,Qe,0,0,We.width,We.height,tt,it,We.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,Qe,ft,We.width,We.height,0,tt,it,We.data)}}}else{if(He=E.mipmaps,q&&Ne){He.length>0&&Oe++;const we=ut(ze[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Oe,ft,we.width,we.height)}for(let we=0;we<6;we++)if(Ge){q?Se&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ze[we].width,ze[we].height,tt,it,ze[we].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ft,ze[we].width,ze[we].height,0,tt,it,ze[we].data);for(let Qe=0;Qe<He.length;Qe++){const sn=He[Qe].image[we].image;q?Se&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,Qe+1,0,0,sn.width,sn.height,tt,it,sn.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,Qe+1,ft,sn.width,sn.height,0,tt,it,sn.data)}}else{q?Se&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,tt,it,ze[we]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ft,tt,it,ze[we]);for(let Qe=0;Qe<He.length;Qe++){const We=He[Qe];q?Se&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,Qe+1,0,0,tt,it,We.image[we]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,Qe+1,ft,tt,it,We.image[we])}}}y(E)&&F(a.TEXTURE_CUBE_MAP),Ce.__version=he.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ke(P,E,$,ie,he,Ce){const Ue=c.convert($.format,$.colorSpace),ve=c.convert($.type),_e=D($.internalFormat,Ue,ve,$.normalized,$.colorSpace),Le=r.get(E),Ge=r.get($);if(Ge.__renderTarget=E,!Le.__hasExternalTextures){const ze=Math.max(1,E.width>>Ce),Ie=Math.max(1,E.height>>Ce);he===a.TEXTURE_3D||he===a.TEXTURE_2D_ARRAY?n.texImage3D(he,Ce,_e,ze,Ie,E.depth,0,Ue,ve,null):n.texImage2D(he,Ce,_e,ze,Ie,0,Ue,ve,null)}n.bindFramebuffer(a.FRAMEBUFFER,P),Ze(E)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ie,he,Ge.__webglTexture,0,Te(E)):(he===a.TEXTURE_2D||he>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ie,he,Ge.__webglTexture,Ce),n.bindFramebuffer(a.FRAMEBUFFER,null)}function Lt(P,E,$){if(a.bindRenderbuffer(a.RENDERBUFFER,P),E.depthBuffer){const ie=E.depthTexture,he=ie&&ie.isDepthTexture?ie.type:null,Ce=B(E.stencilBuffer,he),Ue=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Ze(E)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Te(E),Ce,E.width,E.height):$?a.renderbufferStorageMultisample(a.RENDERBUFFER,Te(E),Ce,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,Ce,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ue,a.RENDERBUFFER,P)}else{const ie=E.textures;for(let he=0;he<ie.length;he++){const Ce=ie[he],Ue=c.convert(Ce.format,Ce.colorSpace),ve=c.convert(Ce.type),_e=D(Ce.internalFormat,Ue,ve,Ce.normalized,Ce.colorSpace);Ze(E)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Te(E),_e,E.width,E.height):$?a.renderbufferStorageMultisample(a.RENDERBUFFER,Te(E),_e,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,_e,E.width,E.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function dt(P,E,$){const ie=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=r.get(E.depthTexture);if(he.__renderTarget=E,(!he.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ie){if(he.__webglInit===void 0&&(he.__webglInit=!0,E.depthTexture.addEventListener("dispose",N)),he.__webglTexture===void 0){he.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,he.__webglTexture),Q(a.TEXTURE_CUBE_MAP,E.depthTexture);const Le=c.convert(E.depthTexture.format),Ge=c.convert(E.depthTexture.type);let ze;E.depthTexture.format===Ha?ze=a.DEPTH_COMPONENT24:E.depthTexture.format===cs&&(ze=a.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,ze,E.width,E.height,0,Le,Ge,null)}}else te(E.depthTexture,0);const Ce=he.__webglTexture,Ue=Te(E),ve=ie?a.TEXTURE_CUBE_MAP_POSITIVE_X+$:a.TEXTURE_2D,_e=E.depthTexture.format===cs?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ha)Ze(E)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,_e,ve,Ce,0,Ue):a.framebufferTexture2D(a.FRAMEBUFFER,_e,ve,Ce,0);else if(E.depthTexture.format===cs)Ze(E)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,_e,ve,Ce,0,Ue):a.framebufferTexture2D(a.FRAMEBUFFER,_e,ve,Ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function bt(P){const E=r.get(P),$=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const ie=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ie){const he=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ie.removeEventListener("dispose",he)};ie.addEventListener("dispose",he),E.__depthDisposeCallback=he}E.__boundDepthTexture=ie}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if($)for(let ie=0;ie<6;ie++)dt(E.__webglFramebuffer[ie],P,ie);else{const ie=P.texture.mipmaps;ie&&ie.length>0?dt(E.__webglFramebuffer[0],P,0):dt(E.__webglFramebuffer,P,0)}else if($){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(n.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]===void 0)E.__webglDepthbuffer[ie]=a.createRenderbuffer(),Lt(E.__webglDepthbuffer[ie],P,!1);else{const he=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ce=E.__webglDepthbuffer[ie];a.bindRenderbuffer(a.RENDERBUFFER,Ce),a.framebufferRenderbuffer(a.FRAMEBUFFER,he,a.RENDERBUFFER,Ce)}}else{const ie=P.texture.mipmaps;if(ie&&ie.length>0?n.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=a.createRenderbuffer(),Lt(E.__webglDepthbuffer,P,!1);else{const he=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ce=E.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Ce),a.framebufferRenderbuffer(a.FRAMEBUFFER,he,a.RENDERBUFFER,Ce)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function yt(P,E,$){const ie=r.get(P);E!==void 0&&Ke(ie.__webglFramebuffer,P,P.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),$!==void 0&&bt(P)}function gt(P){const E=P.texture,$=r.get(P),ie=r.get(E);P.addEventListener("dispose",A);const he=P.textures,Ce=P.isWebGLCubeRenderTarget===!0,Ue=he.length>1;if(Ue||(ie.__webglTexture===void 0&&(ie.__webglTexture=a.createTexture()),ie.__version=E.version,u.memory.textures++),Ce){$.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[ve]=[];for(let _e=0;_e<E.mipmaps.length;_e++)$.__webglFramebuffer[ve][_e]=a.createFramebuffer()}else $.__webglFramebuffer[ve]=a.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let ve=0;ve<E.mipmaps.length;ve++)$.__webglFramebuffer[ve]=a.createFramebuffer()}else $.__webglFramebuffer=a.createFramebuffer();if(Ue)for(let ve=0,_e=he.length;ve<_e;ve++){const Le=r.get(he[ve]);Le.__webglTexture===void 0&&(Le.__webglTexture=a.createTexture(),u.memory.textures++)}if(P.samples>0&&Ze(P)===!1){$.__webglMultisampledFramebuffer=a.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ve=0;ve<he.length;ve++){const _e=he[ve];$.__webglColorRenderbuffer[ve]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,$.__webglColorRenderbuffer[ve]);const Le=c.convert(_e.format,_e.colorSpace),Ge=c.convert(_e.type),ze=D(_e.internalFormat,Le,Ge,_e.normalized,_e.colorSpace,P.isXRRenderTarget===!0),Ie=Te(P);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ie,ze,P.width,P.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ve,a.RENDERBUFFER,$.__webglColorRenderbuffer[ve])}a.bindRenderbuffer(a.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=a.createRenderbuffer(),Lt($.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Ce){n.bindTexture(a.TEXTURE_CUBE_MAP,ie.__webglTexture),Q(a.TEXTURE_CUBE_MAP,E);for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)Ke($.__webglFramebuffer[ve][_e],P,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,_e);else Ke($.__webglFramebuffer[ve],P,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);y(E)&&F(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ue){for(let ve=0,_e=he.length;ve<_e;ve++){const Le=he[ve],Ge=r.get(Le);let ze=a.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ze=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(ze,Ge.__webglTexture),Q(ze,Le),Ke($.__webglFramebuffer,P,Le,a.COLOR_ATTACHMENT0+ve,ze,0),y(Le)&&F(ze)}n.unbindTexture()}else{let ve=a.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ve=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(ve,ie.__webglTexture),Q(ve,E),E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)Ke($.__webglFramebuffer[_e],P,E,a.COLOR_ATTACHMENT0,ve,_e);else Ke($.__webglFramebuffer,P,E,a.COLOR_ATTACHMENT0,ve,0);y(E)&&F(ve),n.unbindTexture()}P.depthBuffer&&bt(P)}function Jt(P){const E=P.textures;for(let $=0,ie=E.length;$<ie;$++){const he=E[$];if(y(he)){const Ce=z(P),Ue=r.get(he).__webglTexture;n.bindTexture(Ce,Ue),F(Ce),n.unbindTexture()}}}const en=[],Zt=[];function tn(P){if(P.samples>0){if(Ze(P)===!1){const E=P.textures,$=P.width,ie=P.height;let he=a.COLOR_BUFFER_BIT;const Ce=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ue=r.get(P),ve=E.length>1;if(ve)for(let Le=0;Le<E.length;Le++)n.bindFramebuffer(a.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Ue.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const _e=P.texture.mipmaps;_e&&_e.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Le=0;Le<E.length;Le++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(he|=a.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(he|=a.STENCIL_BUFFER_BIT)),ve){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ue.__webglColorRenderbuffer[Le]);const Ge=r.get(E[Le]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ge,0)}a.blitFramebuffer(0,0,$,ie,0,0,$,ie,he,a.NEAREST),m===!0&&(en.length=0,Zt.length=0,en.push(a.COLOR_ATTACHMENT0+Le),P.depthBuffer&&P.resolveDepthBuffer===!1&&(en.push(Ce),Zt.push(Ce),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Zt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,en))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ve)for(let Le=0;Le<E.length;Le++){n.bindFramebuffer(a.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.RENDERBUFFER,Ue.__webglColorRenderbuffer[Le]);const Ge=r.get(E[Le]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Ue.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.TEXTURE_2D,Ge,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const E=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[E])}}}function Te(P){return Math.min(o.maxSamples,P.samples)}function Ze(P){const E=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function X(P){const E=u.render.frame;_.get(P)!==E&&(_.set(P,E),P.update())}function mt(P,E){const $=P.colorSpace,ie=P.format,he=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==_f&&$!==Mr&&(Dt.getTransfer($)===jt?(ie!==Xi||he!==Li)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",$)),E}function ut(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=U,this.resetTextureUnits=pe,this.getTextureUnits=me,this.setTextureUnits=J,this.setTexture2D=te,this.setTexture2DArray=re,this.setTexture3D=be,this.setTextureCube=O,this.rebindTextures=yt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function yP(a,e){function n(r,o=Mr){let c;const u=Dt.getTransfer(o);if(r===Li)return a.UNSIGNED_BYTE;if(r===Eg)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Tg)return a.UNSIGNED_SHORT_5_5_5_1;if(r===G1)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===k1)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===V1)return a.BYTE;if(r===H1)return a.SHORT;if(r===Yl)return a.UNSIGNED_SHORT;if(r===Mg)return a.INT;if(r===la)return a.UNSIGNED_INT;if(r===aa)return a.FLOAT;if(r===Va)return a.HALF_FLOAT;if(r===X1)return a.ALPHA;if(r===W1)return a.RGB;if(r===Xi)return a.RGBA;if(r===Ha)return a.DEPTH_COMPONENT;if(r===cs)return a.DEPTH_STENCIL;if(r===j1)return a.RED;if(r===Ag)return a.RED_INTEGER;if(r===gs)return a.RG;if(r===wg)return a.RG_INTEGER;if(r===Rg)return a.RGBA_INTEGER;if(r===rf||r===sf||r===of||r===lf)if(u===jt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===rf)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===sf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===of)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===lf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===rf)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===sf)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===of)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===lf)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Em||r===Tm||r===Am||r===wm)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Em)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Tm)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Am)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wm)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rm||r===Cm||r===Dm||r===Nm||r===Lm||r===gf||r===Um)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Rm||r===Cm)return u===jt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Dm)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Nm)return c.COMPRESSED_R11_EAC;if(r===Lm)return c.COMPRESSED_SIGNED_R11_EAC;if(r===gf)return c.COMPRESSED_RG11_EAC;if(r===Um)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Om||r===Pm||r===Im||r===Fm||r===zm||r===Bm||r===Vm||r===Hm||r===Gm||r===km||r===Xm||r===Wm||r===jm||r===qm)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Om)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Pm)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Im)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fm)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zm)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Bm)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vm)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hm)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gm)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===km)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xm)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wm)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jm)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===qm)return u===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ym||r===Km||r===Zm)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Ym)return u===jt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Km)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Qm||r===$m||r===vf||r===Jm)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Qm)return c.COMPRESSED_RED_RGTC1_EXT;if(r===$m)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===vf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Jm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Kl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const SP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class MP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new nM(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new _i({vertexShader:SP,fragmentShader:bP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ga(new Lf(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class EP extends _s{constructor(e,n){super();const r=this;let o=null,c=1,u=null,h="local-floor",m=1,p=null,_=null,v=null,g=null,S=null,T=null;const w=typeof XRWebGLBinding<"u",M=new MP,y={},F=n.getContextAttributes();let z=null,D=null;const B=[],L=[],N=new zt;let A=null;const I=new Ni;I.viewport=new dn;const k=new Ni;k.viewport=new dn;const G=[I,k],Y=new UN;let pe=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let le=B[W];return le===void 0&&(le=new fp,B[W]=le),le.getTargetRaySpace()},this.getControllerGrip=function(W){let le=B[W];return le===void 0&&(le=new fp,B[W]=le),le.getGripSpace()},this.getHand=function(W){let le=B[W];return le===void 0&&(le=new fp,B[W]=le),le.getHandSpace()};function J(W){const le=L.indexOf(W.inputSource);if(le===-1)return;const xe=B[le];xe!==void 0&&(xe.update(W.inputSource,W.frame,p||u),xe.dispatchEvent({type:W.type,data:W.inputSource}))}function U(){o.removeEventListener("select",J),o.removeEventListener("selectstart",J),o.removeEventListener("selectend",J),o.removeEventListener("squeeze",J),o.removeEventListener("squeezestart",J),o.removeEventListener("squeezeend",J),o.removeEventListener("end",U),o.removeEventListener("inputsourceschange",H);for(let W=0;W<B.length;W++){const le=L[W];le!==null&&(L[W]=null,B[W].disconnect(le))}pe=null,me=null,M.reset();for(const W in y)delete y[W];e.setRenderTarget(z),S=null,g=null,v=null,o=null,D=null,Q.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(N.width,N.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){c=W,r.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){h=W,r.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(W){p=W},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(W){if(o=W,o!==null){if(z=e.getRenderTarget(),o.addEventListener("select",J),o.addEventListener("selectstart",J),o.addEventListener("selectend",J),o.addEventListener("squeeze",J),o.addEventListener("squeezestart",J),o.addEventListener("squeezeend",J),o.addEventListener("end",U),o.addEventListener("inputsourceschange",H),F.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(N),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Pe=null,nt=null;F.depth&&(nt=F.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,xe=F.stencil?cs:Ha,Pe=F.stencil?Kl:la);const Ke={colorFormat:n.RGBA8,depthFormat:nt,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Ke),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),D=new oa(g.textureWidth,g.textureHeight,{format:Xi,type:Li,depthTexture:new Ao(g.textureWidth,g.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const xe={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,n,xe),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new oa(S.framebufferWidth,S.framebufferHeight,{format:Xi,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(h),Q.setContext(o),Q.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(W){for(let le=0;le<W.removed.length;le++){const xe=W.removed[le],Pe=L.indexOf(xe);Pe>=0&&(L[Pe]=null,B[Pe].disconnect(xe))}for(let le=0;le<W.added.length;le++){const xe=W.added[le];let Pe=L.indexOf(xe);if(Pe===-1){for(let Ke=0;Ke<B.length;Ke++)if(Ke>=L.length){L.push(xe),Pe=Ke;break}else if(L[Ke]===null){L[Ke]=xe,Pe=Ke;break}if(Pe===-1)break}const nt=B[Pe];nt&&nt.connect(xe)}}const te=new oe,re=new oe;function be(W,le,xe){te.setFromMatrixPosition(le.matrixWorld),re.setFromMatrixPosition(xe.matrixWorld);const Pe=te.distanceTo(re),nt=le.projectionMatrix.elements,Ke=xe.projectionMatrix.elements,Lt=nt[14]/(nt[10]-1),dt=nt[14]/(nt[10]+1),bt=(nt[9]+1)/nt[5],yt=(nt[9]-1)/nt[5],gt=(nt[8]-1)/nt[0],Jt=(Ke[8]+1)/Ke[0],en=Lt*gt,Zt=Lt*Jt,tn=Pe/(-gt+Jt),Te=tn*-gt;if(le.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Te),W.translateZ(tn),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),nt[10]===-1)W.projectionMatrix.copy(le.projectionMatrix),W.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Ze=Lt+tn,X=dt+tn,mt=en-Te,ut=Zt+(Pe-Te),P=bt*dt/X*Ze,E=yt*dt/X*Ze;W.projectionMatrix.makePerspective(mt,ut,P,E,Ze,X),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function O(W,le){le===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(le.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(o===null)return;let le=W.near,xe=W.far;M.texture!==null&&(M.depthNear>0&&(le=M.depthNear),M.depthFar>0&&(xe=M.depthFar)),Y.near=k.near=I.near=le,Y.far=k.far=I.far=xe,(pe!==Y.near||me!==Y.far)&&(o.updateRenderState({depthNear:Y.near,depthFar:Y.far}),pe=Y.near,me=Y.far),Y.layers.mask=W.layers.mask|6,I.layers.mask=Y.layers.mask&-5,k.layers.mask=Y.layers.mask&-3;const Pe=W.parent,nt=Y.cameras;O(Y,Pe);for(let Ke=0;Ke<nt.length;Ke++)O(nt[Ke],Pe);nt.length===2?be(Y,I,k):Y.projectionMatrix.copy(I.projectionMatrix),K(W,Y,Pe)};function K(W,le,xe){xe===null?W.matrix.copy(le.matrixWorld):(W.matrix.copy(xe.matrixWorld),W.matrix.invert(),W.matrix.multiply(le.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(le.projectionMatrix),W.projectionMatrixInverse.copy(le.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=eg*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(W){m=W,g!==null&&(g.fixedFoveation=W),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=W)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Y)},this.getCameraTexture=function(W){return y[W]};let ne=null;function Me(W,le){if(_=le.getViewerPose(p||u),T=le,_!==null){const xe=_.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let Pe=!1;xe.length!==Y.cameras.length&&(Y.cameras.length=0,Pe=!0);for(let dt=0;dt<xe.length;dt++){const bt=xe[dt];let yt=null;if(S!==null)yt=S.getViewport(bt);else{const Jt=v.getViewSubImage(g,bt);yt=Jt.viewport,dt===0&&(e.setRenderTargetTextures(D,Jt.colorTexture,Jt.depthStencilTexture),e.setRenderTarget(D))}let gt=G[dt];gt===void 0&&(gt=new Ni,gt.layers.enable(dt),gt.viewport=new dn,G[dt]=gt),gt.matrix.fromArray(bt.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(bt.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(yt.x,yt.y,yt.width,yt.height),dt===0&&(Y.matrix.copy(gt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Pe===!0&&Y.cameras.push(gt)}const nt=o.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){v=r.getBinding();const dt=v.getDepthInformation(xe[0]);dt&&dt.isValid&&dt.texture&&M.init(dt,o.renderState)}if(nt&&nt.includes("camera-access")&&w){e.state.unbindTexture(),v=r.getBinding();for(let dt=0;dt<xe.length;dt++){const bt=xe[dt].camera;if(bt){let yt=y[bt];yt||(yt=new nM,y[bt]=yt);const gt=v.getCameraImage(bt);yt.sourceTexture=gt}}}}for(let xe=0;xe<B.length;xe++){const Pe=L[xe],nt=B[xe];Pe!==null&&nt!==void 0&&nt.update(Pe,le,p||u)}ne&&ne(W,le),le.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:le}),T=null}const Q=new sM;Q.setAnimationLoop(Me),this.setAnimationLoop=function(W){ne=W},this.dispose=function(){}}}const TP=new hn,hM=new pt;hM.set(-1,0,0,0,1,0,0,0,1);function AP(a,e){function n(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function r(M,y){y.color.getRGB(M.fogColor.value,iM(a)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function o(M,y,F,z,D){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(M,y):y.isMeshLambertMaterial?(c(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(M,y),v(M,y)):y.isMeshPhongMaterial?(c(M,y),_(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(M,y),g(M,y),y.isMeshPhysicalMaterial&&S(M,y,D)):y.isMeshMatcapMaterial?(c(M,y),T(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),w(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(u(M,y),y.isLineDashedMaterial&&h(M,y)):y.isPointsMaterial?m(M,y,F,z):y.isSpriteMaterial?p(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,n(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===ii&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,n(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===ii&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,n(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,n(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const F=e.get(y),z=F.envMap,D=F.envMapRotation;z&&(M.envMap.value=z,M.envMapRotation.value.setFromMatrix4(TP.makeRotationFromEuler(D)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(hM),M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,M.aoMapTransform))}function u(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform))}function h(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function m(M,y,F,z){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*F,M.scale.value=z*.5,y.map&&(M.map.value=y.map,n(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function p(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function _(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function v(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function g(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function S(M,y,F){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ii&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=F.texture,M.transmissionSamplerSize.value.set(F.width,F.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,y){y.matcap&&(M.matcap.value=y.matcap)}function w(M,y){const F=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(F.matrixWorld),M.nearDistance.value=F.shadow.camera.near,M.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function wP(a,e,n,r){let o={},c={},u=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,B){const L=B.program;r.uniformBlockBinding(D,L)}function p(D,B){let L=o[D.id];L===void 0&&(M(D),L=_(D),o[D.id]=L,D.addEventListener("dispose",F));const N=B.program;r.updateUBOMapping(D,N);const A=e.render.frame;c[D.id]!==A&&(g(D),c[D.id]=A)}function _(D){const B=v();D.__bindingPointIndex=B;const L=a.createBuffer(),N=D.__size,A=D.usage;return a.bindBuffer(a.UNIFORM_BUFFER,L),a.bufferData(a.UNIFORM_BUFFER,N,A),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,B,L),L}function v(){for(let D=0;D<h;D++)if(u.indexOf(D)===-1)return u.push(D),D;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const B=o[D.id],L=D.uniforms,N=D.__cache;a.bindBuffer(a.UNIFORM_BUFFER,B);for(let A=0,I=L.length;A<I;A++){const k=L[A];if(Array.isArray(k))for(let G=0,Y=k.length;G<Y;G++)S(k[G],A,G,N);else S(k,A,0,N)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(D,B,L,N){if(w(D,B,L,N)===!0){const A=D.__offset,I=D.value;if(Array.isArray(I)){let k=0;for(let G=0;G<I.length;G++){const Y=I[G],pe=y(Y);T(Y,D.__data,k),typeof Y!="number"&&typeof Y!="boolean"&&!Y.isMatrix3&&!ArrayBuffer.isView(Y)&&(k+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(I,D.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,A,D.__data)}}function T(D,B,L){typeof D=="number"||typeof D=="boolean"?B[0]=D:D.isMatrix3?(B[0]=D.elements[0],B[1]=D.elements[1],B[2]=D.elements[2],B[3]=0,B[4]=D.elements[3],B[5]=D.elements[4],B[6]=D.elements[5],B[7]=0,B[8]=D.elements[6],B[9]=D.elements[7],B[10]=D.elements[8],B[11]=0):ArrayBuffer.isView(D)?B.set(new D.constructor(D.buffer,D.byteOffset,B.length)):D.toArray(B,L)}function w(D,B,L,N){const A=D.value,I=B+"_"+L;if(N[I]===void 0)return typeof A=="number"||typeof A=="boolean"?N[I]=A:ArrayBuffer.isView(A)?N[I]=A.slice():N[I]=A.clone(),!0;{const k=N[I];if(typeof A=="number"||typeof A=="boolean"){if(k!==A)return N[I]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(k.equals(A)===!1)return k.copy(A),!0}}return!1}function M(D){const B=D.uniforms;let L=0;const N=16;for(let I=0,k=B.length;I<k;I++){const G=Array.isArray(B[I])?B[I]:[B[I]];for(let Y=0,pe=G.length;Y<pe;Y++){const me=G[Y],J=Array.isArray(me.value)?me.value:[me.value];for(let U=0,H=J.length;U<H;U++){const te=J[U],re=y(te),be=L%N,O=be%re.boundary,K=be+O;L+=O,K!==0&&N-K<re.storage&&(L+=N-K),me.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),me.__offset=L,L+=re.storage}}}const A=L%N;return A>0&&(L+=N-A),D.__size=L,D.__cache={},this}function y(D){const B={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(B.boundary=4,B.storage=4):D.isVector2?(B.boundary=8,B.storage=8):D.isVector3||D.isColor?(B.boundary=16,B.storage=12):D.isVector4?(B.boundary=16,B.storage=16):D.isMatrix3?(B.boundary=48,B.storage=48):D.isMatrix4?(B.boundary=64,B.storage=64):D.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(B.boundary=16,B.storage=D.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",D),B}function F(D){const B=D.target;B.removeEventListener("dispose",F);const L=u.indexOf(B.__bindingPointIndex);u.splice(L,1),a.deleteBuffer(o[B.id]),delete o[B.id],delete c[B.id]}function z(){for(const D in o)a.deleteBuffer(o[D]);u=[],o={},c={}}return{bind:m,update:p,dispose:z}}const RP=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ea=null;function CP(){return ea===null&&(ea=new gN(RP,16,16,gs,Va),ea.name="DFG_LUT",ea.minFilter=Xn,ea.magFilter=Xn,ea.wrapS=Pa,ea.wrapT=Pa,ea.generateMipmaps=!1,ea.needsUpdate=!0),ea}class DP{constructor(e={}){const{canvas:n=qD(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=Li}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=u;const w=S,M=new Set([Rg,wg,Ag]),y=new Set([Li,la,Yl,Kl,Eg,Tg]),F=new Uint32Array(4),z=new Int32Array(4),D=new oe;let B=null,L=null;const N=[],A=[];let I=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let G=!1,Y=null,pe=null,me=null,J=null;this._outputColorSpace=Di;let U=0,H=0,te=null,re=-1,be=null;const O=new dn,K=new dn;let ne=null;const Me=new Rt(0);let Q=0,W=n.width,le=n.height,xe=1,Pe=null,nt=null;const Ke=new dn(0,0,W,le),Lt=new dn(0,0,W,le);let dt=!1;const bt=new eM;let yt=!1,gt=!1;const Jt=new hn,en=new oe,Zt=new dn,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Te=!1;function Ze(){return te===null?xe:1}let X=r;function mt(R,Z){return n.getContext(R,Z)}try{const R={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${bg}`),n.addEventListener("webglcontextlost",sn,!1),n.addEventListener("webglcontextrestored",Vt,!1),n.addEventListener("webglcontextcreationerror",ri,!1),X===null){const Z="webgl2";if(X=mt(Z,R),X===null)throw mt(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw Ut("WebGLRenderer: "+R.message),R}let ut,P,E,$,ie,he,Ce,Ue,ve,_e,Le,Ge,ze,Ie,tt,it,ft,q,Ne,Se,Oe,He,we;function Qe(){ut=new C4(X),ut.init(),Oe=new yP(X,ut),P=new S4(X,ut,e,Oe),E=new _P(X,ut),P.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),pe=X.createFramebuffer(),me=X.createFramebuffer(),J=X.createFramebuffer(),$=new L4(X),ie=new aP,he=new xP(X,ut,E,ie,P,Oe,$),Ce=new R4(k),Ue=new IN(X),He=new x4(X,Ue),ve=new D4(X,Ue,$,He),_e=new O4(X,ve,Ue,He,$),q=new U4(X,P,he),tt=new b4(ie),Le=new iP(k,Ce,ut,P,He,tt),Ge=new AP(k,ie),ze=new sP,Ie=new dP(ut),ft=new _4(k,Ce,E,_e,T,m),it=new vP(k,_e,P),we=new wP(X,$,P,E),Ne=new y4(X,ut,$),Se=new N4(X,ut,$),$.programs=Le.programs,k.capabilities=P,k.extensions=ut,k.properties=ie,k.renderLists=ze,k.shadowMap=it,k.state=E,k.info=$}Qe(),w!==Li&&(I=new I4(w,n.width,n.height,h,o,c));const We=new EP(k,X);this.xr=We,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=ut.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ut.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(R){R!==void 0&&(xe=R,this.setSize(W,le,!1))},this.getSize=function(R){return R.set(W,le)},this.setSize=function(R,Z,fe=!0){if(We.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,le=Z,n.width=Math.floor(R*xe),n.height=Math.floor(Z*xe),fe===!0&&(n.style.width=R+"px",n.style.height=Z+"px"),I!==null&&I.setSize(n.width,n.height),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(W*xe,le*xe).floor()},this.setDrawingBufferSize=function(R,Z,fe){W=R,le=Z,xe=fe,n.width=Math.floor(R*fe),n.height=Math.floor(Z*fe),this.setViewport(0,0,R,Z)},this.setEffects=function(R){if(w===Li){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Z=0;Z<R.length;Z++)if(R[Z].isOutputPass===!0){ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(Ke)},this.setViewport=function(R,Z,fe,ce){R.isVector4?Ke.set(R.x,R.y,R.z,R.w):Ke.set(R,Z,fe,ce),E.viewport(O.copy(Ke).multiplyScalar(xe).round())},this.getScissor=function(R){return R.copy(Lt)},this.setScissor=function(R,Z,fe,ce){R.isVector4?Lt.set(R.x,R.y,R.z,R.w):Lt.set(R,Z,fe,ce),E.scissor(K.copy(Lt).multiplyScalar(xe).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(R){E.setScissorTest(dt=R)},this.setOpaqueSort=function(R){Pe=R},this.setTransparentSort=function(R){nt=R},this.getClearColor=function(R){return R.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,fe=!0){let ce=0;if(R){let ue=!1;if(te!==null){const Be=te.texture.format;ue=M.has(Be)}if(ue){const Be=te.texture.type,Xe=y.has(Be),Fe=ft.getClearColor(),qe=ft.getClearAlpha(),je=Fe.r,at=Fe.g,vt=Fe.b;Xe?(F[0]=je,F[1]=at,F[2]=vt,F[3]=qe,X.clearBufferuiv(X.COLOR,0,F)):(z[0]=je,z[1]=at,z[2]=vt,z[3]=qe,X.clearBufferiv(X.COLOR,0,z))}else ce|=X.COLOR_BUFFER_BIT}Z&&(ce|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(ce|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&X.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),Y=R},this.dispose=function(){n.removeEventListener("webglcontextlost",sn,!1),n.removeEventListener("webglcontextrestored",Vt,!1),n.removeEventListener("webglcontextcreationerror",ri,!1),ft.dispose(),ze.dispose(),Ie.dispose(),ie.dispose(),Ce.dispose(),_e.dispose(),He.dispose(),we.dispose(),Le.dispose(),We.dispose(),We.removeEventListener("sessionstart",gn),We.removeEventListener("sessionend",Un),Kn.stop()};function sn(R){R.preventDefault(),Hy("WebGLRenderer: Context Lost."),G=!0}function Vt(){Hy("WebGLRenderer: Context Restored."),G=!1;const R=$.autoReset,Z=it.enabled,fe=it.autoUpdate,ce=it.needsUpdate,ue=it.type;Qe(),$.autoReset=R,it.enabled=Z,it.autoUpdate=fe,it.needsUpdate=ce,it.type=ue}function ri(R){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function si(R){const Z=R.target;Z.removeEventListener("dispose",si),Uo(Z)}function Uo(R){Oo(R),ie.remove(R)}function Oo(R){const Z=ie.get(R).programs;Z!==void 0&&(Z.forEach(function(fe){Le.releaseProgram(fe)}),R.isShaderMaterial&&Le.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,fe,ce,ue,Be){Z===null&&(Z=tn);const Xe=ue.isMesh&&ue.matrixWorld.determinantAffine()<0,Fe=ja(R,Z,fe,ce,ue);E.setMaterial(ce,Xe);let qe=fe.index,je=1;if(ce.wireframe===!0){if(qe=ve.getWireframeAttribute(fe),qe===void 0)return;je=2}const at=fe.drawRange,vt=fe.attributes.position;let et=at.start*je,Ot=(at.start+at.count)*je;Be!==null&&(et=Math.max(et,Be.start*je),Ot=Math.min(Ot,(Be.start+Be.count)*je)),qe!==null?(et=Math.max(et,0),Ot=Math.min(Ot,qe.count)):vt!=null&&(et=Math.max(et,0),Ot=Math.min(Ot,vt.count));const on=Ot-et;if(on<0||on===1/0)return;He.setup(ue,ce,Fe,fe,qe);let Qt,Ht=Ne;if(qe!==null&&(Qt=Ue.get(qe),Ht=Se,Ht.setIndex(Qt)),ue.isMesh)ce.wireframe===!0?(E.setLineWidth(ce.wireframeLinewidth*Ze()),Ht.setMode(X.LINES)):Ht.setMode(X.TRIANGLES);else if(ue.isLine){let Gt=ce.linewidth;Gt===void 0&&(Gt=1),E.setLineWidth(Gt*Ze()),ue.isLineSegments?Ht.setMode(X.LINES):ue.isLineLoop?Ht.setMode(X.LINE_LOOP):Ht.setMode(X.LINE_STRIP)}else ue.isPoints?Ht.setMode(X.POINTS):ue.isSprite&&Ht.setMode(X.TRIANGLES);if(ue.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))Ht.renderMultiDraw(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount);else{const Gt=ue._multiDrawStarts,ke=ue._multiDrawCounts,Vn=ue._multiDrawCount,Mt=qe?Ue.get(qe).bytesPerElement:1,En=ie.get(ce).currentProgram.getUniforms();for(let oi=0;oi<Vn;oi++)En.setValue(X,"_gl_DrawID",oi),Ht.render(Gt[oi]/Mt,ke[oi])}else if(ue.isInstancedMesh)Ht.renderInstances(et,on,ue.count);else if(fe.isInstancedBufferGeometry){const Gt=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,ke=Math.min(fe.instanceCount,Gt);Ht.renderInstances(et,on,ke)}else Ht.render(et,on)};function Po(R,Z,fe){R.transparent===!0&&R.side===Oa&&R.forceSinglePass===!1?(R.side=ii,R.needsUpdate=!0,Wa(R,Z,fe),R.side=Rr,R.needsUpdate=!0,Wa(R,Z,fe),R.side=Oa):Wa(R,Z,fe)}this.compile=function(R,Z,fe=null){fe===null&&(fe=R),L=Ie.get(fe),L.init(Z),A.push(L),fe.traverseVisible(function(ue){ue.isLight&&ue.layers.test(Z.layers)&&(L.pushLight(ue),ue.castShadow&&L.pushShadow(ue))}),R!==fe&&R.traverseVisible(function(ue){ue.isLight&&ue.layers.test(Z.layers)&&(L.pushLight(ue),ue.castShadow&&L.pushShadow(ue))}),L.setupLights();const ce=new Set;return R.traverse(function(ue){if(!(ue.isMesh||ue.isPoints||ue.isLine||ue.isSprite))return;const Be=ue.material;if(Be)if(Array.isArray(Be))for(let Xe=0;Xe<Be.length;Xe++){const Fe=Be[Xe];Po(Fe,fe,ue),ce.add(Fe)}else Po(Be,fe,ue),ce.add(Be)}),L=A.pop(),ce},this.compileAsync=function(R,Z,fe=null){const ce=this.compile(R,Z,fe);return new Promise(ue=>{function Be(){if(ce.forEach(function(Xe){ie.get(Xe).currentProgram.isReady()&&ce.delete(Xe)}),ce.size===0){ue(R);return}setTimeout(Be,10)}ut.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let xs=null;function qi(R){xs&&xs(R)}function gn(){Kn.stop()}function Un(){Kn.start()}const Kn=new sM;Kn.setAnimationLoop(qi),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(R){xs=R,We.setAnimationLoop(R),R===null?Kn.stop():Kn.start()},We.addEventListener("sessionstart",gn),We.addEventListener("sessionend",Un),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Y!==null&&Y.renderStart(R,Z);const fe=We.enabled===!0&&We.isPresenting===!0,ce=I!==null&&(te===null||fe)&&I.begin(k,te);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(Z),Z=We.getCamera()),R.isScene===!0&&R.onBeforeRender(k,R,Z,te),L=Ie.get(R,A.length),L.init(Z),L.state.textureUnits=he.getTextureUnits(),A.push(L),Jt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),bt.setFromProjectionMatrix(Jt,ra,Z.reversedDepth),gt=this.localClippingEnabled,yt=tt.init(this.clippingPlanes,gt),B=ze.get(R,N.length),B.init(),N.push(B),We.enabled===!0&&We.isPresenting===!0){const Xe=k.xr.getDepthSensingMesh();Xe!==null&&Cr(Xe,Z,-1/0,k.sortObjects)}Cr(R,Z,0,k.sortObjects),B.finish(),k.sortObjects===!0&&B.sort(Pe,nt,Z.reversedDepth),Te=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,Te&&ft.addToRenderList(B,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),yt===!0&&tt.beginShadows();const ue=L.state.shadowsArray;if(it.render(ue,R,Z),yt===!0&&tt.endShadows(),(ce&&I.hasRenderPass())===!1){const Xe=B.opaque,Fe=B.transmissive;if(L.setupLights(),Z.isArrayCamera){const qe=Z.cameras;if(Fe.length>0)for(let je=0,at=qe.length;je<at;je++){const vt=qe[je];rc(Xe,Fe,R,vt)}Te&&ft.render(R);for(let je=0,at=qe.length;je<at;je++){const vt=qe[je];ac(B,R,vt,vt.viewport)}}else Fe.length>0&&rc(Xe,Fe,R,Z),Te&&ft.render(R),ac(B,R,Z)}te!==null&&H===0&&(he.updateMultisampleRenderTarget(te),he.updateRenderTargetMipmap(te)),ce&&I.end(k),R.isScene===!0&&R.onAfterRender(k,R,Z),He.resetDefaultState(),re=-1,be=null,A.pop(),A.length>0?(L=A[A.length-1],he.setTextureUnits(L.state.textureUnits),yt===!0&&tt.setGlobalState(k.clippingPlanes,L.state.camera)):L=null,N.pop(),N.length>0?B=N[N.length-1]:B=null,Y!==null&&Y.renderEnd()};function Cr(R,Z,fe,ce){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)fe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLightProbeGrid)L.pushLightProbeGrid(R);else if(R.isLight)L.pushLight(R),R.castShadow&&L.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||bt.intersectsSprite(R)){ce&&Zt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Jt);const Xe=_e.update(R),Fe=R.material;Fe.visible&&B.push(R,Xe,Fe,fe,Zt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||bt.intersectsObject(R))){const Xe=_e.update(R),Fe=R.material;if(ce&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Zt.copy(R.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),Zt.copy(Xe.boundingSphere.center)),Zt.applyMatrix4(R.matrixWorld).applyMatrix4(Jt)),Array.isArray(Fe)){const qe=Xe.groups;for(let je=0,at=qe.length;je<at;je++){const vt=qe[je],et=Fe[vt.materialIndex];et&&et.visible&&B.push(R,Xe,et,fe,Zt.z,vt)}}else Fe.visible&&B.push(R,Xe,Fe,fe,Zt.z,null)}}const Be=R.children;for(let Xe=0,Fe=Be.length;Xe<Fe;Xe++)Cr(Be[Xe],Z,fe,ce)}function ac(R,Z,fe,ce){const{opaque:ue,transmissive:Be,transparent:Xe}=R;L.setupLightsView(fe),yt===!0&&tt.setGlobalState(k.clippingPlanes,fe),ce&&E.viewport(O.copy(ce)),ue.length>0&&Dr(ue,Z,fe),Be.length>0&&Dr(Be,Z,fe),Xe.length>0&&Dr(Xe,Z,fe),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function rc(R,Z,fe,ce){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ce.id]===void 0){const et=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ce.id]=new oa(1,1,{generateMipmaps:!0,type:et?Va:Li,minFilter:ls,samples:Math.max(4,P.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}const Be=L.state.transmissionRenderTarget[ce.id],Xe=ce.viewport||O;Be.setSize(Xe.z*k.transmissionResolutionScale,Xe.w*k.transmissionResolutionScale);const Fe=k.getRenderTarget(),qe=k.getActiveCubeFace(),je=k.getActiveMipmapLevel();k.setRenderTarget(Be),k.getClearColor(Me),Q=k.getClearAlpha(),Q<1&&k.setClearColor(16777215,.5),k.clear(),Te&&ft.render(fe);const at=k.toneMapping;k.toneMapping=sa;const vt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),L.setupLightsView(ce),yt===!0&&tt.setGlobalState(k.clippingPlanes,ce),Dr(R,fe,ce),he.updateMultisampleRenderTarget(Be),he.updateRenderTargetMipmap(Be),ut.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ot=0,on=Z.length;Ot<on;Ot++){const Qt=Z[Ot],{object:Ht,geometry:Gt,material:ke,group:Vn}=Qt;if(ke.side===Oa&&Ht.layers.test(ce.layers)){const Mt=ke.side;ke.side=ii,ke.needsUpdate=!0,Xa(Ht,fe,ce,Gt,ke,Vn),ke.side=Mt,ke.needsUpdate=!0,et=!0}}et===!0&&(he.updateMultisampleRenderTarget(Be),he.updateRenderTargetMipmap(Be))}k.setRenderTarget(Fe,qe,je),k.setClearColor(Me,Q),vt!==void 0&&(ce.viewport=vt),k.toneMapping=at}function Dr(R,Z,fe){const ce=Z.isScene===!0?Z.overrideMaterial:null;for(let ue=0,Be=R.length;ue<Be;ue++){const Xe=R[ue],{object:Fe,geometry:qe,group:je}=Xe;let at=Xe.material;at.allowOverride===!0&&ce!==null&&(at=ce),Fe.layers.test(fe.layers)&&Xa(Fe,Z,fe,qe,at,je)}}function Xa(R,Z,fe,ce,ue,Be){R.onBeforeRender(k,Z,fe,ce,ue,Be),R.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ue.onBeforeRender(k,Z,fe,ce,R,Be),ue.transparent===!0&&ue.side===Oa&&ue.forceSinglePass===!1?(ue.side=ii,ue.needsUpdate=!0,k.renderBufferDirect(fe,Z,ce,ue,R,Be),ue.side=Rr,ue.needsUpdate=!0,k.renderBufferDirect(fe,Z,ce,ue,R,Be),ue.side=Oa):k.renderBufferDirect(fe,Z,ce,ue,R,Be),R.onAfterRender(k,Z,fe,ce,ue,Be)}function Wa(R,Z,fe){Z.isScene!==!0&&(Z=tn);const ce=ie.get(R),ue=L.state.lights,Be=L.state.shadowsArray,Xe=ue.state.version,Fe=Le.getParameters(R,ue.state,Be,Z,fe,L.state.lightProbeGridArray),qe=Le.getProgramCacheKey(Fe);let je=ce.programs;ce.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Z.environment:null,ce.fog=Z.fog;const at=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ce.envMap=Ce.get(R.envMap||ce.environment,at),ce.envMapRotation=ce.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,je===void 0&&(R.addEventListener("dispose",si),je=new Map,ce.programs=je);let vt=je.get(qe);if(vt!==void 0){if(ce.currentProgram===vt&&ce.lightsStateVersion===Xe)return ua(R,Fe),vt}else Fe.uniforms=Le.getUniforms(R),Y!==null&&R.isNodeMaterial&&Y.build(R,fe,Fe),R.onBeforeCompile(Fe,k),vt=Le.acquireProgram(Fe,qe),je.set(qe,vt),ce.uniforms=Fe.uniforms;const et=ce.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(et.clippingPlanes=tt.uniform),ua(R,Fe),ce.needsLights=sc(R),ce.lightsStateVersion=Xe,ce.needsLights&&(et.ambientLightColor.value=ue.state.ambient,et.lightProbe.value=ue.state.probe,et.directionalLights.value=ue.state.directional,et.directionalLightShadows.value=ue.state.directionalShadow,et.spotLights.value=ue.state.spot,et.spotLightShadows.value=ue.state.spotShadow,et.rectAreaLights.value=ue.state.rectArea,et.ltc_1.value=ue.state.rectAreaLTC1,et.ltc_2.value=ue.state.rectAreaLTC2,et.pointLights.value=ue.state.point,et.pointLightShadows.value=ue.state.pointShadow,et.hemisphereLights.value=ue.state.hemi,et.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,et.spotLightMatrix.value=ue.state.spotLightMatrix,et.spotLightMap.value=ue.state.spotLightMap,et.pointShadowMatrix.value=ue.state.pointShadowMatrix),ce.lightProbeGrid=L.state.lightProbeGridArray.length>0,ce.currentProgram=vt,ce.uniformsList=null,vt}function ca(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=cf.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function ua(R,Z){const fe=ie.get(R);fe.outputColorSpace=Z.outputColorSpace,fe.batching=Z.batching,fe.batchingColor=Z.batchingColor,fe.instancing=Z.instancing,fe.instancingColor=Z.instancingColor,fe.instancingMorph=Z.instancingMorph,fe.skinning=Z.skinning,fe.morphTargets=Z.morphTargets,fe.morphNormals=Z.morphNormals,fe.morphColors=Z.morphColors,fe.morphTargetsCount=Z.morphTargetsCount,fe.numClippingPlanes=Z.numClippingPlanes,fe.numIntersection=Z.numClipIntersection,fe.vertexAlphas=Z.vertexAlphas,fe.vertexTangents=Z.vertexTangents,fe.toneMapping=Z.toneMapping}function Nr(R,Z){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;D.setFromMatrixPosition(Z.matrixWorld);for(let fe=0,ce=R.length;fe<ce;fe++){const ue=R[fe];if(ue.texture!==null&&ue.boundingBox.containsPoint(D))return ue}return null}function ja(R,Z,fe,ce,ue){Z.isScene!==!0&&(Z=tn),he.resetTextureUnits();const Be=Z.fog,Xe=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?Z.environment:null,Fe=te===null?k.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Dt.workingColorSpace,qe=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,je=Ce.get(ce.envMap||Xe,qe),at=ce.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,vt=!!fe.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),et=!!fe.morphAttributes.position,Ot=!!fe.morphAttributes.normal,on=!!fe.morphAttributes.color;let Qt=sa;ce.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Qt=k.toneMapping);const Ht=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Gt=Ht!==void 0?Ht.length:0,ke=ie.get(ce),Vn=L.state.lights;if(yt===!0&&(gt===!0||R!==be)){const Bt=R===be&&ce.id===re;tt.setState(ce,R,Bt)}let Mt=!1;ce.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Vn.state.version||ke.outputColorSpace!==Fe||ue.isBatchedMesh&&ke.batching===!1||!ue.isBatchedMesh&&ke.batching===!0||ue.isBatchedMesh&&ke.batchingColor===!0&&ue.colorTexture===null||ue.isBatchedMesh&&ke.batchingColor===!1&&ue.colorTexture!==null||ue.isInstancedMesh&&ke.instancing===!1||!ue.isInstancedMesh&&ke.instancing===!0||ue.isSkinnedMesh&&ke.skinning===!1||!ue.isSkinnedMesh&&ke.skinning===!0||ue.isInstancedMesh&&ke.instancingColor===!0&&ue.instanceColor===null||ue.isInstancedMesh&&ke.instancingColor===!1&&ue.instanceColor!==null||ue.isInstancedMesh&&ke.instancingMorph===!0&&ue.morphTexture===null||ue.isInstancedMesh&&ke.instancingMorph===!1&&ue.morphTexture!==null||ke.envMap!==je||ce.fog===!0&&ke.fog!==Be||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==tt.numPlanes||ke.numIntersection!==tt.numIntersection)||ke.vertexAlphas!==at||ke.vertexTangents!==vt||ke.morphTargets!==et||ke.morphNormals!==Ot||ke.morphColors!==on||ke.toneMapping!==Qt||ke.morphTargetsCount!==Gt||!!ke.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,ke.__version=ce.version);let En=ke.currentProgram;Mt===!0&&(En=Wa(ce,Z,ue),Y&&ce.isNodeMaterial&&Y.onUpdateProgram(ce,En,ke));let oi=!1,Ui=!1,li=!1;const kt=En.getUniforms(),ln=ke.uniforms;if(E.useProgram(En.program)&&(oi=!0,Ui=!0,li=!0),ce.id!==re&&(re=ce.id,Ui=!0),ke.needsLights){const Bt=Nr(L.state.lightProbeGridArray,ue);ke.lightProbeGrid!==Bt&&(ke.lightProbeGrid=Bt,Ui=!0)}if(oi||be!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),kt.setValue(X,"projectionMatrix",R.projectionMatrix),kt.setValue(X,"viewMatrix",R.matrixWorldInverse);const Yi=kt.map.cameraPosition;Yi!==void 0&&Yi.setValue(X,en.setFromMatrixPosition(R.matrixWorld)),P.logarithmicDepthBuffer&&kt.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&kt.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),be!==R&&(be=R,Ui=!0,li=!0)}if(ke.needsLights&&(Vn.state.directionalShadowMap.length>0&&kt.setValue(X,"directionalShadowMap",Vn.state.directionalShadowMap,he),Vn.state.spotShadowMap.length>0&&kt.setValue(X,"spotShadowMap",Vn.state.spotShadowMap,he),Vn.state.pointShadowMap.length>0&&kt.setValue(X,"pointShadowMap",Vn.state.pointShadowMap,he)),ue.isSkinnedMesh){kt.setOptional(X,ue,"bindMatrix"),kt.setOptional(X,ue,"bindMatrixInverse");const Bt=ue.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),kt.setValue(X,"boneTexture",Bt.boneTexture,he))}ue.isBatchedMesh&&(kt.setOptional(X,ue,"batchingTexture"),kt.setValue(X,"batchingTexture",ue._matricesTexture,he),kt.setOptional(X,ue,"batchingIdTexture"),kt.setValue(X,"batchingIdTexture",ue._indirectTexture,he),kt.setOptional(X,ue,"batchingColorTexture"),ue._colorsTexture!==null&&kt.setValue(X,"batchingColorTexture",ue._colorsTexture,he));const Oi=fe.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&q.update(ue,fe,En),(Ui||ke.receiveShadow!==ue.receiveShadow)&&(ke.receiveShadow=ue.receiveShadow,kt.setValue(X,"receiveShadow",ue.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&Z.environment!==null&&(ln.envMapIntensity.value=Z.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=CP()),Ui){if(kt.setValue(X,"toneMappingExposure",k.toneMappingExposure),ke.needsLights&&vn(ln,li),Be&&ce.fog===!0&&Ge.refreshFogUniforms(ln,Be),Ge.refreshMaterialUniforms(ln,ce,xe,le,L.state.transmissionRenderTarget[R.id]),ke.needsLights&&ke.lightProbeGrid){const Bt=ke.lightProbeGrid;ln.probesSH.value=Bt.texture,ln.probesMin.value.copy(Bt.boundingBox.min),ln.probesMax.value.copy(Bt.boundingBox.max),ln.probesResolution.value.copy(Bt.resolution)}cf.upload(X,ca(ke),ln,he)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(cf.upload(X,ca(ke),ln,he),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&kt.setValue(X,"center",ue.center),kt.setValue(X,"modelViewMatrix",ue.modelViewMatrix),kt.setValue(X,"normalMatrix",ue.normalMatrix),kt.setValue(X,"modelMatrix",ue.matrixWorld),ce.uniformsGroups!==void 0){const Bt=ce.uniformsGroups;for(let Yi=0,qa=Bt.length;Yi<qa;Yi++){const Lr=Bt[Yi];we.update(Lr,En),we.bind(Lr,En)}}return En}function vn(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function sc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(R,Z,fe){const ce=ie.get(R);ce.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),ie.get(R.texture).__webglTexture=Z,ie.get(R.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:fe,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const fe=ie.get(R);fe.__webglFramebuffer=Z,fe.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(R,Z=0,fe=0){te=R,U=Z,H=fe;let ce=null,ue=!1,Be=!1;if(R){const Fe=ie.get(R);if(Fe.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(X.FRAMEBUFFER,Fe.__webglFramebuffer),O.copy(R.viewport),K.copy(R.scissor),ne=R.scissorTest,E.viewport(O),E.scissor(K),E.setScissorTest(ne),re=-1;return}else if(Fe.__webglFramebuffer===void 0)he.setupRenderTarget(R);else if(Fe.__hasExternalTextures)he.rebindTextures(R,ie.get(R.texture).__webglTexture,ie.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const at=R.depthTexture;if(Fe.__boundDepthTexture!==at){if(at!==null&&ie.has(at)&&(R.width!==at.image.width||R.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(R)}}const qe=R.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Be=!0);const je=ie.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(je[Z])?ce=je[Z][fe]:ce=je[Z],ue=!0):R.samples>0&&he.useMultisampledRTT(R)===!1?ce=ie.get(R).__webglMultisampledFramebuffer:Array.isArray(je)?ce=je[fe]:ce=je,O.copy(R.viewport),K.copy(R.scissor),ne=R.scissorTest}else O.copy(Ke).multiplyScalar(xe).floor(),K.copy(Lt).multiplyScalar(xe).floor(),ne=dt;if(fe!==0&&(ce=pe),E.bindFramebuffer(X.FRAMEBUFFER,ce)&&E.drawBuffers(R,ce),E.viewport(O),E.scissor(K),E.setScissorTest(ne),ue){const Fe=ie.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Fe.__webglTexture,fe)}else if(Be){const Fe=Z;for(let qe=0;qe<R.textures.length;qe++){const je=ie.get(R.textures[qe]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+qe,je.__webglTexture,fe,Fe)}}else if(R!==null&&fe!==0){const Fe=ie.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Fe.__webglTexture,fe)}re=-1},this.readRenderTargetPixels=function(R,Z,fe,ce,ue,Be,Xe,Fe=0){if(!(R&&R.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Xe!==void 0&&(qe=qe[Xe]),qe){E.bindFramebuffer(X.FRAMEBUFFER,qe);try{const je=R.textures[Fe],at=je.format,vt=je.type;if(R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Fe),!P.textureFormatReadable(at)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(vt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-ce&&fe>=0&&fe<=R.height-ue&&X.readPixels(Z,fe,ce,ue,Oe.convert(at),Oe.convert(vt),Be)}finally{const je=te!==null?ie.get(te).__webglFramebuffer:null;E.bindFramebuffer(X.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(R,Z,fe,ce,ue,Be,Xe,Fe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Xe!==void 0&&(qe=qe[Xe]),qe)if(Z>=0&&Z<=R.width-ce&&fe>=0&&fe<=R.height-ue){E.bindFramebuffer(X.FRAMEBUFFER,qe);const je=R.textures[Fe],at=je.format,vt=je.type;if(R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Fe),!P.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,et),X.bufferData(X.PIXEL_PACK_BUFFER,Be.byteLength,X.STREAM_READ),X.readPixels(Z,fe,ce,ue,Oe.convert(at),Oe.convert(vt),0);const Ot=te!==null?ie.get(te).__webglFramebuffer:null;E.bindFramebuffer(X.FRAMEBUFFER,Ot);const on=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await YD(X,on,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,et),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Be),X.deleteBuffer(et),X.deleteSync(on),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,fe=0){const ce=Math.pow(2,-fe),ue=Math.floor(R.image.width*ce),Be=Math.floor(R.image.height*ce),Xe=Z!==null?Z.x:0,Fe=Z!==null?Z.y:0;he.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,fe,0,0,Xe,Fe,ue,Be),E.unbindTexture()},this.copyTextureToTexture=function(R,Z,fe=null,ce=null,ue=0,Be=0){let Xe,Fe,qe,je,at,vt,et,Ot,on;const Qt=R.isCompressedTexture?R.mipmaps[Be]:R.image;if(fe!==null)Xe=fe.max.x-fe.min.x,Fe=fe.max.y-fe.min.y,qe=fe.isBox3?fe.max.z-fe.min.z:1,je=fe.min.x,at=fe.min.y,vt=fe.isBox3?fe.min.z:0;else{const ln=Math.pow(2,-ue);Xe=Math.floor(Qt.width*ln),Fe=Math.floor(Qt.height*ln),R.isDataArrayTexture?qe=Qt.depth:R.isData3DTexture?qe=Math.floor(Qt.depth*ln):qe=1,je=0,at=0,vt=0}ce!==null?(et=ce.x,Ot=ce.y,on=ce.z):(et=0,Ot=0,on=0);const Ht=Oe.convert(Z.format),Gt=Oe.convert(Z.type);let ke;Z.isData3DTexture?(he.setTexture3D(Z,0),ke=X.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(he.setTexture2DArray(Z,0),ke=X.TEXTURE_2D_ARRAY):(he.setTexture2D(Z,0),ke=X.TEXTURE_2D),E.activeTexture(X.TEXTURE0),E.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Z.flipY),E.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),E.pixelStorei(X.UNPACK_ALIGNMENT,Z.unpackAlignment);const Vn=E.getParameter(X.UNPACK_ROW_LENGTH),Mt=E.getParameter(X.UNPACK_IMAGE_HEIGHT),En=E.getParameter(X.UNPACK_SKIP_PIXELS),oi=E.getParameter(X.UNPACK_SKIP_ROWS),Ui=E.getParameter(X.UNPACK_SKIP_IMAGES);E.pixelStorei(X.UNPACK_ROW_LENGTH,Qt.width),E.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Qt.height),E.pixelStorei(X.UNPACK_SKIP_PIXELS,je),E.pixelStorei(X.UNPACK_SKIP_ROWS,at),E.pixelStorei(X.UNPACK_SKIP_IMAGES,vt);const li=R.isDataArrayTexture||R.isData3DTexture,kt=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const ln=ie.get(R),Oi=ie.get(Z),Bt=ie.get(ln.__renderTarget),Yi=ie.get(Oi.__renderTarget);E.bindFramebuffer(X.READ_FRAMEBUFFER,Bt.__webglFramebuffer),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,Yi.__webglFramebuffer);for(let qa=0;qa<qe;qa++)li&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ie.get(R).__webglTexture,ue,vt+qa),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ie.get(Z).__webglTexture,Be,on+qa)),X.blitFramebuffer(je,at,Xe,Fe,et,Ot,Xe,Fe,X.DEPTH_BUFFER_BIT,X.NEAREST);E.bindFramebuffer(X.READ_FRAMEBUFFER,null),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ue!==0||R.isRenderTargetTexture||ie.has(R)){const ln=ie.get(R),Oi=ie.get(Z);E.bindFramebuffer(X.READ_FRAMEBUFFER,me),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,J);for(let Bt=0;Bt<qe;Bt++)li?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ln.__webglTexture,ue,vt+Bt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ln.__webglTexture,ue),kt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Oi.__webglTexture,Be,on+Bt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Oi.__webglTexture,Be),ue!==0?X.blitFramebuffer(je,at,Xe,Fe,et,Ot,Xe,Fe,X.COLOR_BUFFER_BIT,X.NEAREST):kt?X.copyTexSubImage3D(ke,Be,et,Ot,on+Bt,je,at,Xe,Fe):X.copyTexSubImage2D(ke,Be,et,Ot,je,at,Xe,Fe);E.bindFramebuffer(X.READ_FRAMEBUFFER,null),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else kt?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(ke,Be,et,Ot,on,Xe,Fe,qe,Ht,Gt,Qt.data):Z.isCompressedArrayTexture?X.compressedTexSubImage3D(ke,Be,et,Ot,on,Xe,Fe,qe,Ht,Qt.data):X.texSubImage3D(ke,Be,et,Ot,on,Xe,Fe,qe,Ht,Gt,Qt):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Be,et,Ot,Xe,Fe,Ht,Gt,Qt.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Be,et,Ot,Qt.width,Qt.height,Ht,Qt.data):X.texSubImage2D(X.TEXTURE_2D,Be,et,Ot,Xe,Fe,Ht,Gt,Qt);E.pixelStorei(X.UNPACK_ROW_LENGTH,Vn),E.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Mt),E.pixelStorei(X.UNPACK_SKIP_PIXELS,En),E.pixelStorei(X.UNPACK_SKIP_ROWS,oi),E.pixelStorei(X.UNPACK_SKIP_IMAGES,Ui),Be===0&&Z.generateMipmaps&&X.generateMipmap(ke),E.unbindTexture()},this.initRenderTarget=function(R){ie.get(R).__webglFramebuffer===void 0&&he.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?he.setTextureCube(R,0):R.isData3DTexture?he.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?he.setTexture2DArray(R,0):he.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){U=0,H=0,te=null,E.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Dt._getUnpackColorSpace()}}const $u=91;function NP(a){return Number.isFinite(a)?Math.min(Math.max(a,1),2):1}function pM(a){const e=NP(a.devicePixelRatio);if(a.reducedMotion)return{animated:!1,divineLightCount:$u,maxThreadSegments:600,name:"static",pixelRatio:e,starCount:1200};const n=a.width>a.height&&a.height<=500;return a.width<360||n?{animated:!0,divineLightCount:$u,maxThreadSegments:900,name:"compact",pixelRatio:e,starCount:1800}:a.width<768?{animated:!0,divineLightCount:$u,maxThreadSegments:1600,name:"phone",pixelRatio:e,starCount:2600}:{animated:!0,divineLightCount:$u,maxThreadSegments:3400,name:"desktop",pixelRatio:e,starCount:4500}}function LP(a,e){return e<=0||!a.animated?a:e===1?{...a,maxThreadSegments:Math.min(a.maxThreadSegments,900),pixelRatio:Math.min(a.pixelRatio,1.5),starCount:Math.min(a.starCount,1800)}:{...a,maxThreadSegments:Math.min(a.maxThreadSegments,600),pixelRatio:1,starCount:Math.min(a.starCount,1200)}}const UP=new Rt(12764882),OP=new Rt(13159638),is=91,PP=42,IP=new Rt(15253624),FP=`
  attribute float phase;
  attribute float size;
  uniform float uTime;
  uniform float uPixelRatio;
  varying float vTwinkle;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    float tw = 0.55 + 0.45 * sin(uTime * (0.4 + phase * 1.6) + phase * 40.0);
    vTwinkle = tw * tw;
    gl_PointSize = size * uPixelRatio * (140.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`,zP=`
  varying float vTwinkle;
  uniform vec3 uColor;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    float a = smoothstep(0.5, 0.05, d);
    a *= 0.35 + 0.65 * vTwinkle;
    gl_FragColor = vec4(uColor, a * 0.9);
  }
`,BP=`
  attribute float lineUV;
  attribute float segPhase;
  uniform float uTime;
  varying float vPulse;
  varying float vFade;
  void main() {
    vFade = 0.35 + 0.65 * (0.5 + 0.5 * sin(uTime * 0.25 + segPhase * 6.2831));
    vPulse = pow(max(0.0, sin(lineUV * 3.14159 - uTime * 1.2 + segPhase * 6.2831)), 6.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,VP=`
  varying float vPulse;
  varying float vFade;
  uniform vec3 uColor;
  uniform float uAlpha;
  void main() {
    gl_FragColor = vec4(uColor, uAlpha * vFade * (0.25 + 0.75 * vPulse));
  }
`,HP=`
  attribute float flare;
  attribute float phase;
  attribute float size;
  uniform float uTime;
  uniform float uPixelRatio;
  varying float vFlare;
  varying float vGlow;
  void main() {
    float breath = 0.78 + 0.22 * sin(uTime * 0.55 + phase * 6.2831);
    vFlare = flare;
    vGlow = breath;
    gl_PointSize = size * uPixelRatio;
    gl_Position = vec4(position.xy, 0.25, 1.0);
  }
`,GP=`
  varying float vFlare;
  varying float vGlow;
  uniform vec3 uColor;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    float crispCore = 1.0 - smoothstep(0.035, 0.075, d);
    float definedEdge = (1.0 - smoothstep(0.075, 0.115, d)) * 0.22;
    float horizontalFlare = (1.0 - smoothstep(0.008, 0.024, abs(uv.y)))
      * (1.0 - smoothstep(0.035, 0.49, abs(uv.x)));
    float verticalFlare = (1.0 - smoothstep(0.008, 0.024, abs(uv.x)))
      * (1.0 - smoothstep(0.035, 0.43, abs(uv.y)));
    float subtleFlare = max(horizontalFlare, verticalFlare) * 0.22 * vFlare;
    float breath = 0.88 + 0.12 * vGlow;
    float alpha = min(0.78, (crispCore * 0.7 + definedEdge + subtleFlare) * breath);
    gl_FragColor = vec4(uColor, alpha);
  }
`;function kP(a){const e=new Float32Array(a*3),n=new Float32Array(a),r=new Float32Array(a);for(let o=0;o<a;o++){const c=24+Math.random()*36,u=Math.random()*Math.PI*2,h=(Math.random()-.5)*1.1;e[o*3]=c*Math.cos(u)*Math.cos(h),e[o*3+1]=c*Math.sin(h)*2.2,e[o*3+2]=c*Math.sin(u)*Math.cos(h)-18,n[o]=Math.random(),r[o]=.7+Math.random()*1.6}return{positions:e,phases:n,sizes:r}}function XP(){let a=1597463007;return()=>(a=a*1664525+1013904223>>>0,a/4294967296)}function WP(a,e,n){const r=(a.x-e.x)*n,o=a.y-e.y;return r*r+o*o}function jP(a){const e=XP(),n=[],r=48,o=.025;for(let c=0;c<is;c++){let u=null,h=-1;for(let m=0;m<r;m++){const p={x:o+e()*(1-o*2),y:o+e()*(1-o*2)};let _=Number.POSITIVE_INFINITY;for(const v of n){const g=WP(p,v,a);_=Math.min(_,g)}_>h&&(u=p,h=_)}u&&n.push(u)}return n}function mM(a,e){const n=jP(e);for(let r=0;r<n.length;r++){const o=n[r];a[r*3]=-.96+o.x*1.92,a[r*3+1]=-.9+o.y*1.8,a[r*3+2]=0}}function qP(a){const e=new Float32Array(is),n=new Float32Array(is*3),r=new Float32Array(is),o=new Float32Array(is);for(let c=0;c<is;c++){const u=c<PP;e[c]=u?1:0,r[c]=c/is,o[c]=u?32+c*29%7:12+c*17%4}return mM(n,a),{flares:e,positions:n,phases:r,sizes:o}}function YP(a,e,n={}){const r=a.clientWidth||window.innerWidth,o=a.clientHeight||window.innerHeight,c=n.profile??pM({devicePixelRatio:window.devicePixelRatio,height:o,reducedMotion:!1,width:r});let u=c;const{paused:h=!1,transparent:m=!1,threadAlpha:p}=n;if(!(typeof window.WebGLRenderingContext<"u"||typeof window.WebGL2RenderingContext<"u"))return()=>{};let v;try{v=new DP({alpha:!0,antialias:!1,canvas:a,powerPreference:"high-performance"})}catch{return()=>{}}v.setPixelRatio(c.pixelRatio);const g=new uN;g.background=m?null:new Rt(328968);const S=new Ni(62,1,.1,200);S.position.set(0,0,6),S.lookAt(0,0,-10);const{positions:T,phases:w,sizes:M}=kP(c.starCount),y=new ai;y.setAttribute("position",new Mn(T,3)),y.setAttribute("phase",new Mn(w,1)),y.setAttribute("size",new Mn(M,1));const F=new _i({vertexShader:FP,fragmentShader:zP,uniforms:{uTime:{value:0},uPixelRatio:{value:v.getPixelRatio()},uColor:{value:UP}},transparent:!0,depthWrite:!1}),z=new oS(y,F);g.add(z);const D=qP(r/o),B=D.positions,L=new ai;L.setAttribute("position",new Mn(B,3)),L.setAttribute("flare",new Mn(D.flares,1)),L.setAttribute("phase",new Mn(D.phases,1)),L.setAttribute("size",new Mn(D.sizes,1));const N=new _i({vertexShader:HP,fragmentShader:GP,uniforms:{uTime:{value:0},uPixelRatio:{value:v.getPixelRatio()},uColor:{value:IP}},transparent:!0,depthTest:!1,depthWrite:!1}),A=new oS(L,N);g.add(A);const I=c.maxThreadSegments,k=new ai,G=new Float32Array(I*6),Y=new Float32Array(I*2),pe=new Float32Array(I*2);k.setAttribute("position",new Mn(G,3)),k.setAttribute("lineUV",new Mn(Y,1)),k.setAttribute("segPhase",new Mn(pe,1)),k.setDrawRange(0,0);const me=new _i({vertexShader:BP,fragmentShader:VP,uniforms:{uTime:{value:0},uColor:{value:OP},uAlpha:{value:p??(e==="alive"?.55:.24)}},transparent:!0,depthWrite:!1}),J=new bN(k,me);g.add(J);const U=e==="alive"?4.8:5.2,H=new Map;function te(Te,Ze,X){const mt=Math.floor(Te/U),ut=Math.floor(Ze/U),P=Math.floor(X/U);return`${mt}:${ut}:${P}`}for(let Te=0;Te<c.starCount;Te++){const Ze=T[Te*3],X=T[Te*3+1],mt=T[Te*3+2],ut=te(Ze,X,mt),P=H.get(ut)??[];P.push(Te),H.set(ut,P)}function re(Te){const Ze=T[Te*3],X=T[Te*3+1],mt=T[Te*3+2],ut=Math.floor(Ze/U),P=Math.floor(X/U),E=Math.floor(mt/U),$=[];for(let ie=-1;ie<=1;ie++)for(let he=-1;he<=1;he++)for(let Ce=-1;Ce<=1;Ce++){const Ue=`${ut+ie}:${P+he}:${E+Ce}`;$.push(...H.get(Ue)??[])}return $}const be=()=>{const Te=new Set,Ze=[],X=[],mt=[];for(let ut=0;ut<c.starCount&&Ze.length<I*6;ut++){const P=T[ut*3],E=T[ut*3+1],$=T[ut*3+2],ie=[];for(const he of re(ut)){if(he===ut)continue;const Ce=T[he*3]-P,Ue=T[he*3+1]-E,ve=T[he*3+2]-$,_e=Ce*Ce+Ue*Ue+ve*ve;_e<U*U&&ie.push([he,_e])}ie.sort((he,Ce)=>he[1]-Ce[1]);for(const[he]of ie.slice(0,5)){if(Ze.length>=I*6)break;const Ce=ut<he?`${ut}-${he}`:`${he}-${ut}`;Te.has(Ce)||(Te.add(Ce),Ze.push(P,E,$,T[he*3],T[he*3+1],T[he*3+2]),X.push(0,1),mt.push(Math.random(),Math.random()))}}G.set(Ze),Y.set(X),pe.set(mt),k.getAttribute("position").needsUpdate=!0,k.getAttribute("lineUV").needsUpdate=!0,k.getAttribute("segPhase").needsUpdate=!0,k.setDrawRange(0,Ze.length/3)},O=()=>{for(let Te=0;Te<k.drawRange.count;Te++)pe[Te]=Math.random();k.getAttribute("segPhase").needsUpdate=!0};be();const K=k.drawRange.count,ne=new ON;let Me=0,Q=0,W=r/o;const le=()=>{const Te=a.clientWidth||window.innerWidth,Ze=a.clientHeight||window.innerHeight,X=Te/Ze;v.setSize(Te,Ze,!1),S.aspect=X,S.updateProjectionMatrix(),Math.abs(X-W)/W>=.08&&(mM(B,X),L.getAttribute("position").needsUpdate=!0,W=X)},xe=()=>{window.cancelAnimationFrame(Q),Q=window.requestAnimationFrame(le)};le(),window.addEventListener("resize",xe);let Pe=0,nt=!1,Ke=0,Lt=0,dt=0;const bt=performance.now()+4e3,yt=c.name!=="desktop",gt=()=>{a.dataset.drawCalls=String(v.info.render.calls),a.dataset.pixelRatio=String(u.pixelRatio),a.dataset.renderProfile=c.name,a.dataset.starCount=String(u.starCount),a.dataset.threadBudget=String(u.maxThreadSegments)},Jt=()=>{Ke+=1,u=LP(c,Ke),v.setPixelRatio(u.pixelRatio),y.setDrawRange(0,u.starCount),k.setDrawRange(0,Math.min(K,u.maxThreadSegments*2)),F.uniforms.uPixelRatio.value=u.pixelRatio,N.uniforms.uPixelRatio.value=u.pixelRatio,a.dataset.adaptiveLevel=String(Ke),nt=!1,le(),gt(),Ke>=2&&v.setAnimationLoop(null)},en=Te=>{if(!Te){Lt=0;return}Lt+=1,Lt>=3&&Ke<2&&(Lt=0,Jt())},Zt=()=>{const Te=ne.getElapsedTime();Pe=Te,F.uniforms.uTime.value=Te,me.uniforms.uTime.value=Te,N.uniforms.uTime.value=Te,e==="alive"&&c.animated&&(Me+=1/30,Me>3.2&&(Me=0,O())),v.render(g,S),nt||(gt(),nt=!0)},tn=Te=>{if(document.hidden||h||a.dataset.paused==="true"){dt=Te;return}if(yt&&dt>0&&Te>=bt){const X=Te-dt;en(X>45&&Ke<2)}dt=Te,ne.getElapsedTime()-Pe>=1/30&&Zt()};return Zt(),c.animated&&!h&&v.setAnimationLoop(tn),()=>{v.setAnimationLoop(null),cancelAnimationFrame(Q),window.removeEventListener("resize",xe),y.dispose(),k.dispose(),L.dispose(),F.dispose(),me.dispose(),N.dispose(),v.dispose()}}function FS(){return pM({devicePixelRatio:window.devicePixelRatio,height:window.innerHeight,reducedMotion:window.matchMedia("(prefers-reduced-motion: reduce)").matches,width:window.innerWidth})}function KP({mode:a,paused:e=!1,transparent:n=!1,threadAlpha:r,className:o="spell-bg"}){const c=Re.useRef(null),[u,h]=Re.useState(FS);return Re.useEffect(()=>{const m=window.matchMedia("(prefers-reduced-motion: reduce)");let p=0;const _=()=>{window.cancelAnimationFrame(p),p=window.requestAnimationFrame(()=>{h(FS())})};return window.addEventListener("resize",_),m.addEventListener("change",_),()=>{window.cancelAnimationFrame(p),window.removeEventListener("resize",_),m.removeEventListener("change",_)}},[]),Re.useEffect(()=>{const m=c.current;m&&(m.dataset.paused=String(e))},[e]),Re.useEffect(()=>{const m=c.current;return m?YP(m,a,{paused:e,profile:u,threadAlpha:r,transparent:n}):void 0},[a,e,u,n,r]),b.jsx("canvas",{"aria-hidden":"true",className:o,ref:c})}const ZP=[{x:.5,y:0},{x:.5,y:.18},{x:.14,y:.3},{x:.86,y:.3},{x:.5,y:.52},{x:.18,y:.78},{x:.82,y:.78},{x:.5,y:1}],QP=[{x:0,y:.5},{x:.18,y:.18},{x:.5,y:.08},{x:.82,y:.18},{x:1,y:.5},{x:.82,y:.82},{x:.5,y:.92},{x:.18,y:.82},{x:.5,y:.5}];function $P(a){let e=a>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function zS(a){return Math.min(Math.max(a,0),1)}function JP(a){return(a==="portrait"?ZP:QP).map(n=>({...n}))}function Ul(a,e,n,r){a.push({from:e,phase:r(),to:n})}function eI({composition:a,seed:e}){const n=JP(a),r=n.map(h=>({...h})),o=[],c=$P(e),u=a==="portrait"?.09:.075;for(let h=0;h<n.length;h++){const m=n[h],p=r.length;for(let _=0;_<2;_++){const v=c()*Math.PI*2,g=u*(.45+c()*.55);r.push({x:zS(m.x+Math.cos(v)*g),y:zS(m.y+Math.sin(v)*g)})}Ul(o,h,p,c),Ul(o,h,p+1,c),Ul(o,p,p+1,c)}for(let h=0;h<n.length-1;h++)Ul(o,h,h+1,c);for(let h=0;h<n.length-2;h+=2)Ul(o,h,h+2,c);return{anchors:n,points:r,segments:o}}function BS(a){return eI({composition:a,seed:a==="portrait"?25:250})}function VS({composition:a,geometry:e}){return b.jsxs("g",{"data-spell-composition":a,children:[b.jsx("path",{className:"spellweave-event-thread",d:a==="portrait"?"M 500 1000 C 430 760 570 520 500 0":"M 0 500 C 260 430 740 570 1000 500",pathLength:"1"}),e.segments.map((n,r)=>{const o=e.points[n.from],c=e.points[n.to];return b.jsx("line",{pathLength:"1",x1:o.x*1e3,x2:c.x*1e3,y1:o.y*1e3,y2:c.y*1e3},`${n.from}-${n.to}-${r}`)}),e.anchors.map((n,r)=>b.jsxs("g",{className:"spellweave-knot",transform:`translate(${n.x*1e3} ${n.y*1e3})`,children:[b.jsx("circle",{r:"5"}),b.jsx("path",{d:"M -14 0 H 14 M 0 -14 V 14",pathLength:"1"})]},`${n.x}-${n.y}-${r}`))]})}function HS({depth:a,state:e}){const n=Re.useMemo(()=>BS("portrait"),[]),r=Re.useMemo(()=>BS("desktop"),[]);return b.jsxs("svg",{className:`spellweave-field spellweave-field-${a}`,"data-spell-depth":a,"data-spell-state":e,"data-testid":"spellweave-field",focusable:"false",preserveAspectRatio:"none",viewBox:"0 0 1000 1000",children:[b.jsx(VS,{composition:"portrait",geometry:n}),b.jsx(VS,{composition:"desktop",geometry:r})]})}function tI({paused:a,state:e,threadAlpha:n}){return b.jsxs("div",{"aria-hidden":"true",className:"spellweave-backdrop","data-spell-state":e,"data-testid":"spellweave-backdrop",children:[b.jsxs("div",{className:"spellweave-distant","data-spell-depth":"distant",children:[b.jsx(KP,{className:"lab-spell-background",mode:"alive",paused:a,threadAlpha:n}),b.jsx("div",{className:"lab-galactic-band"}),b.jsx("div",{className:"lab-star-flare flare-one"}),b.jsx("div",{className:"lab-star-flare flare-two"})]}),b.jsx(HS,{depth:"middle"}),b.jsx(HS,{depth:"foreground",state:e})]})}const nI=["Today","Yesterday","Others"],GS=[{description:"Today, yesterday, and older threads",label:"By date",value:"date"},{description:"Every thread together",label:"In one list",value:"flat"},{description:"Use the Shadow Slave volume",label:"By volume",value:"volume"}],iI=[{active:!0,label:"Shadow Slave"},{active:!1,label:"Kill the Sun"},{active:!1,label:"Lord of the Mysteries"}];function aI(a,e){if(e==="flat")return[{label:null,threads:a}];if(e==="date")return nI.map(r=>({label:r,threads:a.filter(o=>o.dateGroup===r)}));const n=new Map;for(const r of a){const o=r.volume==null?"Volume unknown":`Vol ${r.volume}`,c=n.get(o)??[];n.set(o,[...c,r])}return[...n.entries()].map(([r,o])=>({label:r,threads:o}))}function rI({activeThreadId:a,archivedOpen:e,collapsed:n,drawerOpen:r,onArchive:o,onClose:c,onCreate:u,onDelete:h,onOpen:m,onOpenSettings:p,onPin:_,onRename:v,onSelect:g,onSetArchivedOpen:S,readerStatus:T,threads:w}){const[M,y]=Re.useState(null),[F,z]=Re.useState(""),[D,B]=Re.useState(null),[L,N]=Re.useState("date"),[A,I]=Re.useState(!1),[k,G]=Re.useState(()=>new Set(["Yesterday","Others"])),[Y,pe]=Re.useState(()=>window.matchMedia("(max-width: 767px)").matches),me=Re.useRef(null);Re.useEffect(()=>{const Q=window.matchMedia("(max-width: 767px)");function W(le){pe(le.matches)}return pe(Q.matches),Q.addEventListener("change",W),()=>Q.removeEventListener("change",W)},[]),Re.useEffect(()=>{Y&&r&&me.current?.focus()},[r,Y]);const J=Re.useMemo(()=>w.filter(Q=>Q.archived===e).sort((Q,W)=>Number(W.pinned)-Number(Q.pinned)),[e,w]),U=aI(J,L),H=w.filter(Q=>Q.archived).length,te=Y?r:!n,re=Y?r:!0;function be(Q){y(Q.id),z(Q.title)}function O(Q){const W=F.trim();W&&v(Q,W),y(null)}function K(Q){if(D===Q){h(Q),B(null);return}B(Q),window.setTimeout(()=>{B(W=>W===Q?null:W)},3e3)}function ne(Q){G(W=>{const le=new Set(W);return le.has(Q)?le.delete(Q):le.add(Q),le})}function Me(Q){const W=Q.id===a;return b.jsxs("li",{className:`lab-thread-row ${W?"active":""}`,"data-testid":`thread-${Q.id}`,children:[b.jsxs("div",{className:"lab-thread-main",children:[M===Q.id?b.jsx("span",{className:"lab-thread-copy",children:b.jsx("input",{"aria-label":"Rename thread",autoFocus:!0,onBlur:()=>O(Q.id),onChange:le=>z(le.target.value),onClick:le=>le.stopPropagation(),onKeyDown:le=>{le.key==="Enter"&&(le.preventDefault(),O(Q.id)),le.key==="Escape"&&y(null)},value:F})}):b.jsx("button",{"aria-current":W?"page":void 0,className:"lab-thread-select",onClick:()=>g(Q.id),type:"button",children:b.jsx("span",{className:"lab-thread-copy",children:b.jsx("strong",{children:Q.title})})}),D===Q.id&&b.jsx("span",{className:"lab-delete-confirm",children:"[unmake? click again]"})]}),b.jsxs("div",{className:"lab-thread-actions",children:[b.jsx("button",{"aria-label":`${Q.pinned?"Unpin":"Pin"} ${Q.title}`,onClick:()=>_(Q.id),type:"button",children:b.jsx(gR,{})}),b.jsx("button",{"aria-label":`Rename ${Q.title}`,onClick:()=>be(Q),type:"button",children:b.jsx(mR,{})}),b.jsx("button",{"aria-label":`${Q.archived?"Restore":"Archive"} ${Q.title}`,onClick:()=>o(Q.id),type:"button",children:b.jsx(uy,{})}),b.jsx("button",{"aria-label":`Delete ${Q.title}`,className:D===Q.id?"confirming":"",onClick:()=>K(Q.id),type:"button",children:b.jsx(hR,{})})]})]},Q.id)}return b.jsxs("aside",{"aria-hidden":!re,"aria-label":Y?"Threads":void 0,"aria-modal":Y&&r?!0:void 0,className:"lab-rail",id:"spell-surface-rail",inert:!re,role:Y?"dialog":void 0,children:[b.jsxs("header",{className:"lab-brand",children:[b.jsx("span",{className:"lab-brand-mark",children:b.jsx(hf,{compact:!0})}),b.jsx("span",{children:b.jsx("strong",{children:"weaver"})}),b.jsx("button",{"aria-label":te?"Close threads":"Open threads",className:"lab-rail-close",onClick:te?c:m,ref:me,type:"button",children:te?b.jsx(dR,{}):b.jsx(l1,{})})]}),b.jsxs("button",{"aria-label":"Start a new weave",className:"lab-new-thread",onClick:u,type:"button",children:[b.jsx(lR,{}),b.jsx("span",{children:"New Weave"})]}),b.jsxs("div",{className:"lab-rail-scroll",children:[b.jsxs("section",{className:"lab-chat-section",children:[b.jsxs("header",{className:"lab-rail-section-head",children:[b.jsx("h2",{children:"Chats"}),b.jsxs("div",{className:"lab-grouping-picker",children:[b.jsxs("button",{"aria-expanded":A,"aria-haspopup":"menu","aria-label":"Organize chats",onClick:()=>I(Q=>!Q),type:"button",children:[GS.find(Q=>Q.value===L)?.label,b.jsx(nm,{})]}),A&&b.jsxs("div",{"aria-label":"Organize threads",className:"lab-grouping-menu",role:"menu",children:[b.jsx("p",{children:"Organize threads"}),GS.map(Q=>b.jsxs("button",{"aria-checked":L===Q.value,onClick:()=>{N(Q.value),I(!1)},role:"menuitemradio",type:"button",children:[b.jsx("span",{"aria-hidden":"true",children:L===Q.value?"✓":""}),b.jsx("strong",{children:Q.label}),b.jsx("small",{children:Q.description})]},Q.value))]})]})]}),b.jsxs("nav",{"aria-label":"Threads",className:"lab-thread-list",children:[U.map(Q=>{const W=Q.label,le=W?k.has(W):!1;return b.jsxs("section",{className:"lab-thread-group",children:[W&&b.jsxs("button",{"aria-expanded":!le,className:"lab-thread-group-toggle",onClick:()=>ne(W),type:"button",children:[b.jsx("span",{children:W}),b.jsx("small",{children:Q.threads.length}),b.jsx(nm,{})]}),b.jsx("div",{"aria-hidden":le,className:`lab-thread-group-body ${le?"collapsed":""}`,children:b.jsx("div",{children:b.jsx("ul",{className:"lab-thread-flat-list",children:Q.threads.map(Me)})})})]},W??"all")}),J.length===0&&b.jsxs("div",{className:"lab-thread-empty",children:[b.jsx("span",{"aria-hidden":"true"}),b.jsx("p",{children:"[No threads answer the call.]"})]})]})]}),b.jsxs("section",{"aria-label":"Novels",className:"lab-novel-library",children:[b.jsxs("header",{className:"lab-rail-section-head",children:[b.jsx("h2",{children:"Library"}),b.jsx("small",{children:"novels"})]}),b.jsx("div",{className:"lab-novel-list",children:iI.map(Q=>b.jsxs("button",{"aria-current":Q.active?"page":void 0,"aria-disabled":!Q.active,className:Q.active?"active":"upcoming",type:"button",children:[b.jsx(fR,{}),b.jsxs("span",{children:[b.jsx("strong",{children:Q.label}),b.jsx("small",{children:Q.active?"current shelf":"upcoming"})]})]},Q.label))})]})]}),b.jsxs("button",{"aria-expanded":e,className:"lab-archive-toggle",onClick:()=>S(!e),type:"button",children:[b.jsx(uy,{}),b.jsx("span",{children:"Archived"}),b.jsx("em",{children:H})]}),b.jsxs("footer",{className:"lab-rail-footer",children:[b.jsxs("button",{"aria-label":"Model and key settings",className:"lab-key-status",onClick:p,type:"button",children:[b.jsx("span",{"aria-hidden":"true",className:"lab-key-status-dot"}),b.jsxs("span",{children:[b.jsx("strong",{children:"Model & key"}),b.jsx("small",{children:"open settings"})]})]}),b.jsxs("button",{"aria-label":"Open Soul Sea settings",onClick:p,type:"button",children:[b.jsx(c1,{}),b.jsxs("span",{children:[b.jsx("strong",{children:"Settings"}),b.jsxs("small",{children:[T," · runes · appearance"]})]})]})]})]})}const sI=[{description:"glowing fragments gather, form, and fade",label:"Particle fragments",mode:"particles"},{description:"bracketed announcements appear in the Spell's voice",label:"Spell voice",mode:"voice"},{description:"silver threads draw a shape before dissolving",label:"Thread weave",mode:"threads"}],oI=Array.from({length:20},(a,e)=>e);function lI(a){return{"--index":a}}function cI({announcement:a,eventKey:e,mode:n}){return b.jsxs("div",{"aria-live":"polite",className:`lab-rune-event rune-${n}`,children:[n==="particles"&&b.jsx("div",{"aria-hidden":"true",className:"rune-particles",children:oI.map(r=>b.jsx("span",{style:lI(r)},r))}),n==="threads"&&b.jsxs("svg",{"aria-hidden":"true",className:"rune-thread-weave",viewBox:"0 0 420 72",children:[b.jsx("path",{d:"M4 36 C60 4 95 65 150 25 S250 7 302 43 S375 64 416 20"}),b.jsx("path",{d:"M12 55 C74 28 105 12 166 48 S264 63 318 25 S382 10 408 44"}),b.jsx("path",{d:"M74 11 L112 58 M201 9 L224 62 M324 8 L356 61"})]}),b.jsx("p",{className:"rune-announcement",children:a})]},`${n}-${e}`)}const uI=Array.from({length:7},(a,e)=>e),fI=Array.from({length:8},(a,e)=>e),dI=Array.from({length:11},(a,e)=>e),Ef={still:"Still Black Sea",living:"Living Soul",mirror:"Mirror of State"};function Pp(a){return{"--index":a}}function hI({compact:a=!1,mode:e,state:n}){return b.jsxs("div",{"aria-label":`${Ef[e]}, ${n}`,className:`lab-soul-sea soul-${e} soul-state-${n} ${a?"soul-compact":""}`,role:"img",children:[b.jsxs("div",{className:"lab-soul-sky",children:[b.jsxs("div",{className:"lab-soul-temple","aria-hidden":"true",children:[b.jsx("span",{}),b.jsx("span",{}),b.jsx("span",{})]}),b.jsx("div",{className:"lab-soul-suns","aria-hidden":"true",children:uI.map(r=>b.jsx("span",{className:"lab-soul-sun",style:Pp(r)},r))}),b.jsx("div",{className:"lab-memory-orbit","aria-hidden":"true",children:fI.map(r=>b.jsx("span",{className:"lab-memory-light",style:Pp(r)},r))})]}),b.jsx("div",{className:"lab-shadow-line","aria-hidden":"true",children:dI.map(r=>b.jsx("span",{className:"lab-shadow",style:Pp(r)},r))}),b.jsxs("div",{className:"lab-soul-water","aria-hidden":"true",children:[b.jsx("span",{className:"water-plane water-plane-back"}),b.jsx("span",{className:"water-plane water-plane-middle"}),b.jsx("span",{className:"water-plane water-plane-front"}),b.jsx("span",{className:"water-flash"})]}),!a&&b.jsxs("p",{className:"lab-soul-caption",children:[b.jsx("span",{children:Ef[e]}),e==="still"&&"silent water, one lonely black sun",e==="living"&&"threads become shadows, memories become light",e==="mirror"&&"the sea answers the state of the weave"]})]})}const Ip=[{end:95,number:1},{end:350,number:2},{end:600,number:3},{end:750,number:4},{end:1060,number:5},{end:1230,number:6},{end:1590,number:7},{end:1840,number:8},{end:2260,number:9},{end:2720,number:10},{end:3e3,number:11},{end:3127,number:12},{end:3160,number:13}],pI={awakened:"A quick read for direct questions.",ascended:"A balanced reread with connected evidence.",transcendent:"The longest reread for hard canon debates."},mI=[{hint:"chapter and volume",id:"reader",label:"Reader position"},{hint:"protect future events",id:"spoilers",label:"Spoilers"},{hint:"answering depth",id:"reading",label:"Reading tier"},{hint:"glass, sea, stars, runes",id:"customize",label:"Customize"},{hint:"key and model",id:"model",label:"Model"},{hint:"shortcuts and local data",id:"privacy",label:"Keyboard & privacy"}],gI=["still","living","mirror"],vI={"deepseek-v4-flash":"Fast responses for everyday chapter questions.","deepseek-v4-pro":"Deeper answers for hard canon debates and theories."},_I=[{description:"Weaver's dark blood-red identity.",label:"Crimson Spell",swatches:["#26080d","#761d26","#d7a6a2"],value:"crimson"},{description:"Deep cosmic purple and cold blue.",label:"Cosmos",swatches:["#0b071b","#34296f","#5e8fdc"],value:"cosmos"},{description:"Silver-white starlight over deep space.",label:"Starlight",swatches:["#10131a","#747e91","#eef3ff"],value:"starlight"},{description:"Pitch black with almost no color cast.",label:"Void",swatches:["#000000","#101010","#686868"],value:"void"}];function xI({initial:a,onApiKeyChange:e,onClose:n,onReplayFirstNightmare:r,onSave:o}){const[c,u]=Re.useState(a),[h,m]=Re.useState(Mo),[p,_]=Re.useState(!1),[v,g]=Re.useState(Wl),[S,T]=Re.useState(n1),[w,M]=Re.useState("customize"),y=Re.useRef(null),F=Re.useRef(null);Re.useEffect(()=>{y.current?.querySelector(".lab-settings-nav button.on")?.focus()},[]);function z(N){if(N.key!=="Tab"||!y.current)return;const A=y.current.querySelectorAll("button:not(:disabled), input:not(:disabled), select:not(:disabled)"),I=A[0],k=A[A.length-1];N.shiftKey&&document.activeElement===I&&(N.preventDefault(),k?.focus()),!N.shiftKey&&document.activeElement===k&&(N.preventDefault(),I?.focus())}function D(N,A){u(I=>({...I,[N]:A}))}function B(){t1(h),Mw(v),Ew(S),e?.(Mo()!==""&&!Wl()),o(c)}function L(N){const A=Ip.find(G=>G.number===N);if(!A)return;const I=Ip[N-2]?.end??0,k=Math.max(I+1,Math.min(c.chapter,A.end));u(G=>({...G,chapter:k,volume:N}))}return b.jsx("div",{className:"lab-settings-backdrop",onMouseDown:n,children:b.jsxs("section",{"aria-label":"Soul Sea settings","aria-modal":"true",className:"lab-settings-panel",onKeyDown:z,onMouseDown:N=>N.stopPropagation(),ref:y,role:"dialog",children:[b.jsxs("header",{className:"lab-settings-head",children:[b.jsxs("div",{children:[b.jsx("p",{children:"the sea within"}),b.jsx("h2",{children:"Soul Sea"})]}),b.jsx("button",{"aria-label":"Close settings",onClick:n,type:"button",children:"×"})]}),b.jsxs("div",{className:"lab-settings-layout",children:[b.jsxs("aside",{className:"lab-settings-nav",children:[b.jsx("p",{children:"Settings"}),b.jsx("nav",{"aria-label":"Settings sections",children:mI.map(N=>b.jsxs("button",{"aria-label":N.label,"aria-current":w===N.id?"page":void 0,className:w===N.id?"on":"",onClick:()=>M(N.id),type:"button",children:[b.jsx("strong",{children:N.label}),b.jsx("span",{children:N.hint})]},N.id))})]}),b.jsxs("div",{className:"lab-settings-main",children:[b.jsx(hI,{compact:!0,mode:c.soulMode,state:"idle"}),b.jsxs("div",{className:"lab-settings-content",children:[w==="reader"&&b.jsxs("section",{className:"lab-settings-section",children:[b.jsxs("div",{className:"lab-setting-title",children:[b.jsx("h3",{children:"Reader position"}),b.jsx("span",{children:"The Spell will not read beyond this point."})]}),b.jsxs("div",{className:"lab-reader-grid",children:[b.jsxs("label",{children:[b.jsx("span",{children:"Volume"}),b.jsx("select",{"aria-label":"Reader volume",onChange:N=>L(Number(N.target.value)),ref:F,value:c.volume,children:Ip.map(N=>b.jsxs("option",{value:N.number,children:["Vol ",N.number," · to ch ",N.end]},N.number))})]}),b.jsxs("label",{children:[b.jsx("span",{children:"Chapter"}),b.jsx("input",{max:3160,min:1,onChange:N=>D("chapter",Number(N.target.value)),type:"number",value:c.chapter})]})]})]}),w==="spoilers"&&b.jsxs("section",{className:"lab-settings-section",children:[b.jsxs("div",{className:"lab-setting-title",children:[b.jsx("h3",{children:"Spoilers"}),b.jsx("span",{children:"Choose how Weaver handles knowledge past your chapter."})]}),b.jsxs("div",{className:"lab-choice-grid two",children:[b.jsxs("button",{"aria-pressed":c.spoilerMode==="protect",className:c.spoilerMode==="protect"?"on":"",onClick:()=>D("spoilerMode","protect"),type:"button",children:[b.jsx("strong",{children:"Protect the story"}),b.jsx("span",{children:"Hide later facts and explain only what you have reached."})]}),b.jsxs("button",{"aria-pressed":c.spoilerMode==="none",className:c.spoilerMode==="none"?"on":"",onClick:()=>D("spoilerMode","none"),type:"button",children:[b.jsx("strong",{children:"No spoiler limits"}),b.jsx("span",{children:"You have finished the novel, so answer without limits."})]})]})]}),w==="reading"&&b.jsxs("section",{className:"lab-settings-section",children:[b.jsxs("div",{className:"lab-setting-title",children:[b.jsx("h3",{children:"Reading tier"}),b.jsx("span",{children:"Choose how much rereading Weaver does before answering."})]}),b.jsx("div",{className:"lab-choice-grid three",children:["awakened","ascended","transcendent"].map(N=>b.jsxs("button",{"aria-pressed":c.tier===N,className:c.tier===N?"on":"",onClick:()=>D("tier",N),type:"button",children:[b.jsx("strong",{children:N}),b.jsx("span",{children:pI[N]})]},N))})]}),w==="customize"&&b.jsxs("section",{className:"lab-settings-section lab-customize-section",children:[b.jsxs("div",{className:"lab-setting-title",children:[b.jsx("h3",{children:"Customize the Spell"}),b.jsx("span",{children:"Choose its identity, then tune how alive and transparent it feels."})]}),b.jsxs("div",{className:"lab-customize-block",children:[b.jsx("h4",{children:"Surface theme"}),b.jsx("div",{className:"lab-theme-grid",children:_I.map(N=>b.jsxs("button",{"aria-label":N.label,"aria-pressed":c.theme===N.value,className:c.theme===N.value?"on":"",onClick:()=>D("theme",N.value),type:"button",children:[b.jsx("span",{"aria-hidden":"true",className:"lab-theme-swatches",children:N.swatches.map(A=>b.jsx("i",{style:{background:A}},A))}),b.jsx("strong",{children:N.label}),b.jsx("span",{children:N.description})]},N.value))})]}),b.jsxs("div",{className:"lab-customize-block",children:[b.jsx("h4",{children:"Rune appearance"}),b.jsx("div",{className:"lab-choice-grid three",children:sI.map(N=>b.jsxs("button",{"aria-label":N.label,"aria-pressed":c.runeMode===N.mode,className:c.runeMode===N.mode?"on":"",onClick:()=>D("runeMode",N.mode),type:"button",children:[b.jsx("strong",{children:N.label}),b.jsx("span",{children:N.description})]},N.mode))})]}),b.jsxs("div",{className:"lab-customize-block",children:[b.jsx("h4",{children:"Soul Sea"}),b.jsx("div",{className:"lab-choice-grid three",children:gI.map(N=>b.jsxs("button",{"aria-label":Ef[N],"aria-pressed":c.soulMode===N,className:c.soulMode===N?"on":"",onClick:()=>D("soulMode",N),type:"button",children:[b.jsx("strong",{children:Ef[N]}),b.jsx("span",{children:N==="still"?"A calm horizon behind the conversation.":N==="living"?"More motion and glow while Weaver works.":"A quieter reflective sea with deeper contrast."})]},N))})]}),b.jsxs("div",{className:"lab-customize-block",children:[b.jsx("h4",{children:"Message transparency"}),b.jsxs("div",{className:"lab-choice-grid two",children:[b.jsxs("button",{"aria-label":"Subtle glass","aria-pressed":c.glass==="subtle",className:c.glass==="subtle"?"on":"",onClick:()=>D("glass","subtle"),type:"button",children:[b.jsx("strong",{children:"Subtle glass"}),b.jsx("span",{children:"A faint surface behind the words for easier reading."})]}),b.jsxs("button",{"aria-label":"Immersive glass","aria-pressed":c.glass==="immersive",className:c.glass==="immersive"?"on":"",onClick:()=>D("glass","immersive"),type:"button",children:[b.jsx("strong",{children:"Immersive · no surface"}),b.jsx("span",{children:"Remove message fills, borders, shadows, and blur completely."})]})]})]}),b.jsxs("div",{className:"lab-customize-block",children:[b.jsx("h4",{children:"Star web"}),b.jsx("div",{className:"lab-segmented-control",children:["quiet","balanced","vivid"].map(N=>b.jsx("button",{"aria-pressed":c.starIntensity===N,className:c.starIntensity===N?"on":"",onClick:()=>D("starIntensity",N),type:"button",children:N},N))})]}),b.jsxs("div",{className:"lab-customize-row",children:[b.jsxs("div",{children:[b.jsx("h4",{children:"Reading density"}),b.jsxs("div",{className:"lab-segmented-control",children:[b.jsx("button",{"aria-label":"Compact text","aria-pressed":c.density==="compact",className:c.density==="compact"?"on":"",onClick:()=>D("density","compact"),type:"button",children:"compact"}),b.jsx("button",{"aria-label":"Comfortable text","aria-pressed":c.density==="comfortable",className:c.density==="comfortable"?"on":"",onClick:()=>D("density","comfortable"),type:"button",children:"comfortable"})]})]}),b.jsxs("div",{children:[b.jsx("h4",{children:"Font size"}),b.jsx("div",{className:"lab-segmented-control",children:["small","medium","large"].map(N=>b.jsx("button",{"aria-pressed":c.fontSize===N,className:c.fontSize===N?"on":"",onClick:()=>D("fontSize",N),type:"button",children:N},N))})]})]})]}),w==="privacy"&&b.jsxs("section",{className:"lab-settings-section",children:[b.jsxs("div",{className:"lab-setting-title",children:[b.jsx("h3",{children:"Keyboard & privacy"}),b.jsx("span",{children:"Quick controls and where your reading data stays."})]}),b.jsxs("dl",{className:"lab-shortcuts",children:[b.jsxs("div",{children:[b.jsxs("dt",{children:[b.jsx("kbd",{children:"Ctrl"}),b.jsx("kbd",{children:","})]}),b.jsx("dd",{children:"open settings"})]}),b.jsxs("div",{children:[b.jsx("dt",{children:b.jsx("kbd",{children:"Esc"})}),b.jsx("dd",{children:"close this panel"})]}),b.jsxs("div",{children:[b.jsx("dt",{children:b.jsx("kbd",{children:"Enter"})}),b.jsx("dd",{children:"send a message"})]})]}),b.jsxs("aside",{className:"lab-privacy-note",children:[b.jsx("span",{"aria-hidden":"true",children:"◎"}),b.jsxs("div",{children:[b.jsx("strong",{children:"Everything stays on this machine."}),b.jsx("p",{children:"Threads, reader position, and preferences remain in Weaver's local library."})]})]})]}),w==="model"&&b.jsxs("section",{className:"lab-settings-section lab-model-settings",children:[b.jsxs("div",{className:"lab-setting-title",children:[b.jsx("span",{className:"lab-model-eyebrow",children:"[Voice binding]"}),b.jsx("h3",{children:"Choose the voice behind Weaver"}),b.jsx("span",{children:"Your key opens the channel. Your model sets how deeply Weaver answers."})]}),b.jsxs("div",{className:"lab-voice-binding-card",children:[b.jsxs("div",{className:"lab-binding-status",children:[b.jsx("span",{"aria-hidden":"true",className:h.trim()?"is-bound":""}),b.jsxs("div",{children:[b.jsx("strong",{children:h.trim()?"Voice bound in this browser":"The voice remains unbound"}),b.jsx("small",{children:v?"Your stored key is currently disabled.":"Weaver never stores this key on the server."})]})]}),b.jsx("label",{htmlFor:"spell-surface-api-key",children:"DeepSeek key"}),b.jsxs("div",{className:"lab-secret-input",children:[b.jsx("input",{autoCapitalize:"none",autoComplete:"off",id:"spell-surface-api-key",onChange:N=>m(N.target.value),placeholder:"sk-...",spellCheck:!1,type:p?"text":"password",value:h}),b.jsx("button",{"aria-label":p?"Hide API key":"Show API key",onClick:()=>_(N=>!N),type:"button",children:p?b.jsx(o1,{}):b.jsx(s1,{})})]}),b.jsx("small",{children:"Stored only in this browser. Sent with each request and never saved by the server. Leave empty and save to delete it."}),b.jsxs("label",{className:"lab-check-row lab-binding-toggle",children:[b.jsx("input",{checked:v,onChange:N=>g(N.target.checked),type:"checkbox"}),b.jsxs("span",{children:["Disable this key",b.jsx("small",{children:"Keep the key stored while stopping it from being sent."})]})]})]}),b.jsxs("fieldset",{className:"lab-model-picker",children:[b.jsx("legend",{children:"Answering depth"}),b.jsx("p",{children:"Choose how much time Weaver spends pulling an answer from the thread."}),b.jsx("div",{children:Sw.map(N=>b.jsxs("button",{"aria-pressed":S===N.id,className:S===N.id?"on":"",onClick:()=>T(N.id),type:"button",children:[b.jsx("span",{"aria-hidden":"true",className:"lab-model-knot"}),b.jsx("strong",{children:N.label}),b.jsx("small",{children:vI[N.id]})]},N.id))})]})]})]})]})]}),b.jsxs("footer",{className:"lab-settings-actions",children:[r&&b.jsx("button",{className:"lab-settings-replay",onClick:r,type:"button",children:"Replay First Nightmare"}),b.jsx("button",{onClick:n,type:"button",children:"Leave unchanged"}),b.jsx("button",{className:"primary",onClick:B,type:"button",children:"Apply settings"})]})]})})}const ta={chapter:1e3,density:"comfortable",fontSize:"small",glass:"immersive",runeMode:"particles",soulMode:"still",spoilerMode:"protect",starIntensity:"balanced",theme:"void",tier:"ascended",volume:5},gM="weaver.spell-surface";function es(a,e,n){return typeof a=="string"&&e.includes(a)?a:n}function yI(){try{const a=JSON.parse(window.localStorage.getItem(gM)??"null");return a?{...ta,density:es(a.density,["compact","comfortable"],ta.density),fontSize:es(a.fontSize,["small","medium","large"],ta.fontSize),glass:es(a.glass,["subtle","immersive"],ta.glass),runeMode:es(a.runeMode,["particles","voice","threads"],ta.runeMode),soulMode:es(a.soulMode,["still","living","mirror"],ta.soulMode),starIntensity:es(a.starIntensity,["quiet","balanced","vivid"],ta.starIntensity),theme:es(a.theme,["crimson","cosmos","starlight","void"],ta.theme)}:ta}catch{return ta}}function SI(a){window.localStorage.setItem(gM,JSON.stringify({density:a.density,fontSize:a.fontSize,glass:a.glass,runeMode:a.runeMode,soulMode:a.soulMode,starIntensity:a.starIntensity,theme:a.theme}))}const kS=[95,350,600,750,1060,1230,1590,1840,2260,2720,3e3,3127,3160];function bI(a){const e=kS.findIndex(n=>a<=n);return e===-1?kS.length:e+1}function MI(a){if(!a)return"Others";const e=new Date(a);if(Number.isNaN(e.getTime()))return"Others";const n=new Date;n.setHours(0,0,0,0);const r=new Date(n);return r.setDate(r.getDate()-1),e>=n?"Today":e>=r?"Yesterday":"Others"}function XS(a){return{reader_chapter:a.chapter,spoiler_mode:a.spoilerMode,tier:a.tier}}function EI({api:a,privacyLabel:e}){const n=hw(a,Ri),[r,o]=Re.useState(yI),[c,u]=Re.useState(!1),[h,m]=Re.useState(yw),[p,_]=Re.useState(!1),[v,g]=Re.useState(!1),[S,T]=Re.useState(()=>Mo()!==""&&!Wl()),[w,M]=Re.useState(!1),[y,F]=Re.useState(!1),[z,D]=Re.useState(!1),[B,L]=Re.useState(new Set),[N,A]=Re.useState(new Set),[I,k]=Re.useState(new Map),[G,Y]=Re.useState("idle"),[pe,me]=Re.useState("[The Spell listens.]"),[J,U]=Re.useState(0),H=Re.useRef(null),te=Re.useRef(null),re=Re.useRef(null),be=Re.useRef(!1),O=Re.useRef(!1),K=Re.useRef(null),ne=Re.useMemo(()=>n.conversations.map(Te=>({archived:B.has(Te.conversation_id),dateGroup:MI(Te.created_at),id:Te.conversation_id,pinned:N.has(Te.conversation_id),preview:"private reading thread",title:I.get(Te.conversation_id)??Te.title,volume:null})),[B,n.conversations,N,I]);Re.useEffect(()=>{function Te(Ze){Ze.ctrlKey&&Ze.key===","&&(Ze.preventDefault(),W()),Ze.key==="Escape"&&!h&&(u(!1),w&&xe())}return window.addEventListener("keydown",Te),()=>window.removeEventListener("keydown",Te)},[w,h]),Re.useEffect(()=>{if(!w)return;const Te=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=Te}},[w]),Re.useEffect(()=>{const Te=re.current;Te&&(Te.scrollTop=Te.scrollHeight)},[n.activity,n.messages,n.recoveryMessage]),Re.useEffect(()=>{if(n.turnActive){be.current=!0,Y(n.activity.length>0?"reading":"reaching");return}be.current&&(be.current=!1,Y("complete"),Q("[The weave is complete.]"),K.current&&window.clearTimeout(K.current),K.current=window.setTimeout(()=>Y("idle"),900))},[n.activity.length,n.turnActive]),Re.useEffect(()=>{const Te=n.activity.at(-1);if(!Te)return;const Ze=_w(Te);Ze&&(Y("reading"),Q(Ze))},[n.activity]);const Me=n.messages.some(Te=>Te.role==="weaver"&&Te.streaming&&Te.content.length>0);Re.useEffect(()=>{!n.turnActive||!Me||O.current||(O.current=!0,Y("answering"),Q("[Weaving the story.]"))},[n.turnActive,Me]),Re.useEffect(()=>()=>{K.current&&window.clearTimeout(K.current)},[]);function Q(Te){me(Te),U(Ze=>Ze+1)}async function W(){try{const Te=await a.getPreferences(),Ze=Te.reader_chapter??r.chapter;o(X=>({...X,chapter:Ze,spoilerMode:Te.spoiler_mode,tier:Te.tier,volume:bI(Ze)}))}finally{u(!0),Q("[The sea within opens.]")}}function le(){if(window.innerWidth<768){M(!0);return}F(!1)}function xe(){if(window.innerWidth<768){M(!1),window.setTimeout(()=>te.current?.focus(),0);return}F(!0)}function Pe(){m(!1),_(!1),g(!1),nt(),window.setTimeout(()=>H.current?.focus(),0)}function nt(){T(Mo()!==""&&!Wl())}function Ke(){u(!1),_(!1),g(!0),m(!0)}async function Lt(){await n.createConversation()&&(M(!1),Q("[An empty thread waits in the void.]"),window.setTimeout(()=>H.current?.focus(),0))}async function dt(Te){await n.selectConversation(Te),M(!1),Q("[The thread is recalled.]")}function bt(Te,Ze){k(X=>new Map(X).set(Te,Ze)),Q("[The thread accepts a new name.]")}function yt(Te,Ze){Te(X=>{const mt=new Set(X);return mt.has(Ze)?mt.delete(Ze):mt.add(Ze),mt})}function gt(Te){O.current=!1,Y("reaching"),Q("[The Spell reaches for the first thread.]"),n.sendMessage(Te)}function Jt(){O.current=!1,Y("reading"),Q("[The Spell takes up the thread once more.]"),n.regenerateReply()}const en=`Vol ${r.volume} · ch ${r.chapter} · ${r.tier}`,Zt=r.starIntensity==="quiet"?.2:r.starIntensity==="vivid"?.56:.36,tn=n.recoveryMessage?"failed":p?"reaching":G;return b.jsxs("div",{className:["spell-surface-lab","spell-surface-live",w?"lab-rail-open":"",y?"lab-desktop-rail-collapsed":""].filter(Boolean).join(" "),"data-density":r.density,"data-font-size":r.fontSize,"data-glass":r.glass,"data-runes":r.runeMode,"data-soul":r.soulMode,"data-star-intensity":r.starIntensity,"data-theme":r.theme,"data-testid":"spell-surface-live",children:[b.jsx(tI,{paused:c||h&&!p,state:tn,threadAlpha:Zt}),b.jsx(rI,{activeThreadId:n.conversationId??"",archivedOpen:z,collapsed:y,drawerOpen:w,onArchive:Te=>yt(L,Te),onClose:xe,onCreate:()=>{Lt()},onDelete:Te=>{n.deleteConversation(Te)},onOpen:le,onOpenSettings:()=>{W()},onPin:Te=>yt(A,Te),onRename:bt,onSelect:Te=>{dt(Te)},onSetArchivedOpen:D,readerStatus:en,threads:ne}),b.jsxs("main",{"aria-hidden":w?!0:void 0,className:"lab-chat-main",inert:w,children:[b.jsxs("div",{className:"lab-chat-controls",children:[b.jsx("button",{"aria-controls":"spell-surface-rail","aria-expanded":w,"aria-label":"Open threads",className:"lab-mobile-rail",onClick:le,ref:te,type:"button",children:b.jsx(l1,{})}),b.jsx("button",{"aria-label":"Open Soul Sea settings from header",className:"lab-header-settings",onClick:()=>{W()},type:"button",children:b.jsx(c1,{})})]}),b.jsx("div",{"aria-live":"polite",className:"lab-transcript",ref:re,children:b.jsxs("div",{className:"lab-transcript-column",children:[n.bootError&&b.jsx("div",{className:"boot-error",children:n.bootError}),!n.bootError&&n.messages.length===0&&b.jsxs("section",{className:"lab-empty-weave",children:[b.jsx("span",{className:"lab-empty-mark",children:b.jsx(hf,{})}),b.jsx("p",{children:"[An empty thread trembles in the void.]"}),b.jsx("h1",{children:"What are we reading?"}),b.jsx("span",{children:"ask about canon, argue a take, or bend the story into a what-if"})]}),n.messages.map(Te=>b.jsx(PR,{Mark:hf,assistantName:Ri.assistantName,message:Te,onQuote:Ze=>{n.setDraft(`"${Ze}" `),H.current?.focus()},onRegenerate:Te.id===n.lastReplyId&&n.turnState==="idle"?Jt:void 0,regenerateLabel:Ri.regenerateLabel},Te.id)),n.recoveryMessage&&b.jsx(IR,{chooseLabel:Ri.recoveryChooseLabel,createLabel:Ri.recoveryCreateLabel,message:n.recoveryMessage,onChooseConversation:le,onCreateConversation:()=>{Lt()},onRetry:()=>{n.retryLastTurn()},retryLabel:Ri.recoveryRetryLabel,title:Ri.recoveryTitle})]})}),b.jsx(cI,{announcement:pe,eventKey:J,mode:r.runeMode}),b.jsxs("footer",{className:"lab-composer-dock",children:[b.jsx(_R,{cancelling:n.turnState==="cancelling",draft:n.draft,inputLabel:Ri.inputLabel,onCancel:()=>{n.cancelTurn()},onDraftChange:n.setDraft,onSubmit:gt,onTierChange:Te=>{const Ze={...r,tier:Te};o(Ze),a.savePreferences(XS(Ze))},placeholder:Ri.composerPlaceholder,sendLabel:Ri.sendLabel,stopLabel:Ri.stopLabel,stoppingLabel:Ri.stoppingLabel,textareaRef:H,tier:r.tier,turnActive:n.turnActive,voiceBound:S}),b.jsxs("p",{children:[b.jsx("span",{})," ",e]})]})]}),w&&b.jsx("button",{"aria-label":"Close thread drawer",className:"lab-rail-scrim",onClick:xe,type:"button"}),c&&b.jsx(xI,{initial:r,onApiKeyChange:T,onClose:()=>u(!1),onReplayFirstNightmare:Ke,onSave:Te=>{o(Te),SI(Te),u(!1),Q("[Your soul answers the change.]"),a.savePreferences(XS(Te))}}),h&&b.jsx(RR,{onComplete:Pe,onDefer:Pe,onKeyStored:nt,onRevealStart:()=>_(!0),reviewMode:v})]})}function TI(a){return b.jsx(hD,{children:b.jsx(EI,{...a})})}async function ts(a,e){if(!a.ok)throw new Error(`${e} failed (${a.status})`);return await a.json()}function AI(a){const e=typeof a.data.text=="string"?a.data.text:"",n=typeof a.data.message=="string"?a.data.message:"";if(a.event==="delta")return{type:"delta",text:e};if(a.event==="completed")return{type:"completed",text:e,tokenCount:typeof a.data.token_count=="number"?a.data.token_count:void 0,tokenBudget:typeof a.data.token_budget=="number"?a.data.token_budget:void 0};if(a.event==="interrupted")return{type:"interrupted",message:n||"The turn was interrupted."};if(a.event==="failed")return{type:"failed",message:n||"The reply failed.",code:typeof a.data.code=="string"?a.data.code:void 0};if(a.event==="tool"){const r=Array.isArray(a.data.handles)?a.data.handles.filter(o=>typeof o=="string"):void 0;return{type:"tool",name:typeof a.data.name=="string"?a.data.name:"tool",status:typeof a.data.status=="string"?a.data.status:"start",detail:typeof a.data.detail=="string"?a.data.detail:"",preview:typeof a.data.preview=="string"?a.data.preview:void 0,handles:r&&r.length>0?r:void 0}}return null}async function*wI(a){const e=[];let n=[],r=null,o=0;const c=["delta","tool","completed","interrupted","failed"];for(const u of c)a.addEventListener(u,h=>{try{const m=AI({event:u,data:JSON.parse(h.data)});m&&(e.push(m),n.splice(0).forEach(p=>p()))}catch{}});a.onerror=()=>{o+=1,(a.readyState===EventSource.CLOSED||o>4)&&(r=new Error("The reply stream was interrupted."),n.splice(0).forEach(u=>u()))};try{for(;;)if(e.length>0)yield e.shift();else{if(r)throw r;await new Promise(u=>n.push(u))}}finally{a.close()}}async function*Fp(a){const e=new EventSource(`/api/conversations/${encodeURIComponent(a)}/stream`);let n=!1;for await(const r of wI(e))if(yield r,r.type==="completed"||r.type==="interrupted"||r.type==="failed"){n=!0;break}if(!n)throw new Error("The reply stream closed without finishing.")}function RI(a=fetch){const e=(n,r)=>a(n,{...r,headers:{...Tw(),...r?.headers}});return{async getPreferences(){const n=await e("/api/preferences");return ts(n,"Loading preferences")},async deleteConversation(n){const r=await e(`/api/conversations/${n}`,{method:"DELETE"});return ts(r,"Deleting conversation")},async getPassage(n){const r=await e(`/api/passages?handle=${encodeURIComponent(n)}`);return ts(r,"Loading passage")},async savePreferences(n){const r=await e("/api/preferences",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});return ts(r,"Saving preferences")},async listConversations(){const n=await e("/api/conversations");return ts(n,"Loading conversations")},async createConversation(){const n=await e("/api/conversations",{method:"POST"});return ts(n,"Creating a conversation")},async loadMessages(n){const r=await e(`/api/conversations/${encodeURIComponent(n)}/messages`);return ts(r,"Loading the conversation")},async*streamTurn(n,r){const o=await e(`/api/conversations/${encodeURIComponent(n)}/turns`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:r})});if(!o.ok)throw new Error(`Sending the message failed (${o.status})`);yield*Fp(n)},async*retryTurn(n){const r=await e(`/api/conversations/${encodeURIComponent(n)}/retry`,{method:"POST"});if(!r.ok)throw new Error(`Retrying failed (${r.status})`);yield*Fp(n)},async*regenerateTurn(n){const r=await e(`/api/conversations/${encodeURIComponent(n)}/regenerate`,{method:"POST"});if(!r.ok)throw new Error(`Regenerating failed (${r.status})`);yield*Fp(n)},async cancelTurn(n){const r=await e(`/api/conversations/${encodeURIComponent(n)}/cancel`,{method:"POST"});if(r.status===202)return"cancelling";if(r.status===200)return"idle";throw new Error(`Stopping the reply failed (${r.status})`)}}}const CI=Re.lazy(()=>WS(()=>import("./ThemeLab-CnYAtCmJ.js"),[]).then(a=>({default:a.ThemeLab})));ps.autoAddCss=!1;function DI(a){return document.querySelector(`meta[name="${a}"]`)?.content??""}const vM=document.getElementById("root");if(!vM)throw new Error("Weaver root element is missing.");const NI=window.location.hash==="#theme-lab";fw.createRoot(vM).render(NI?b.jsx(Re.Suspense,{fallback:b.jsx("div",{className:"theme-lab-loading",children:"weaving the web…"}),children:b.jsx(CI,{})}):b.jsx(TI,{api:RI(),privacyLabel:DI("weaver-privacy")}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js")});export{II as $,oR as A,pC as B,cy as C,hC as D,TC as E,CC as F,LC as G,kR as H,OI as I,PC as J,MC as K,xC as L,f1 as M,NC as N,HR as O,IC as P,y1 as Q,l1 as R,KP as S,cm as T,go as U,GR as V,hf as W,jC as X,PI as Y,pf as Z,UI as _,hI as a,GC as a0,$e as a1,Sy as a2,LI as a3,ZC as a4,XC as a5,JC as a6,tD as a7,$C as a8,eD as a9,rI as b,c1 as c,cR as d,cI as e,xI as f,VR as g,Pl as h,WR as i,b as j,Eu as k,my as l,Nn as m,d1 as n,us as o,Sg as p,py as q,Re as r,hy as s,Gl as t,jl as u,$h as v,u1 as w,fC as x,p1 as y,XR as z};
